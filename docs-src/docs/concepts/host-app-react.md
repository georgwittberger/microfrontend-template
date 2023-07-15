---
description: Host application implementation using React
sidebar_position: 5
---

# Host Application using React

## Implementation

The host application can implement a reusable React component to mount microfrontends.

The component renders the container element and obtains a reference to it using [`useRef`](https://react.dev/reference/react/useRef).

The component implements a side effect using [`useEffect`](https://react.dev/reference/react/useEffect) to import, mount and update the microfrontend. This effect also sets the loading and error states to render specific content while the module is being loaded and when loading the module failed.

The cleanup function of another side effect with an empty dependency array can be used to remove the microfrontend as soon as the React component is unmounted.

:::info

This project template provides an implementation in the file `apps/host-nextjs/src/components/micro-frontend.tsx`.

:::

:::tip

If your host application uses Content Security Policy make sure to allow the microfrontend remote URL as [script-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

:::

## Example

```tsx
"use client";

import type { MountFunction, MountFunctionResult } from "mfe-contract";
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type MicroFrontendProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Module URL of the microfrontend.
   */
  module: string;
  /**
   * Props to be passed to microfrontend.
   */
  props?: unknown;
  /**
   * Content to be rendered while module is loading.
   */
  loadingContent?: ReactNode;
  /**
   * Content to be rendered when module failed to load.
   */
  errorContent?: ReactNode;
};

/**
 * Component rendering a microfrontend with given module URL and props.
 */
export const MicroFrontend: FC<MicroFrontendProps> = ({
  module,
  props,
  loadingContent,
  errorContent,
  ...attrs
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousModuleRef = useRef<string>(module);
  const instanceRef = useRef<MountFunctionResult<unknown> | null>(null);

  useEffect(() => {
    /**
     * 1. If microfrontend has already been mounted but given module URL has
     *    changed or props have changed and microfrontend has no update function
     *    then unmount it to force remounting.
     */
    if (
      instanceRef.current &&
      (module !== previousModuleRef.current || !instanceRef.current.update)
    ) {
      instanceRef.current.unmount?.();
      instanceRef.current = null;
    }

    previousModuleRef.current = module;

    /**
     * 2. If microfrontend has already been mounted and provides an update
     *    function then just call update() with changed props.
     */
    if (instanceRef.current && instanceRef.current.update) {
      instanceRef.current.update(props);
      return;
    }

    /**
     * 3. Microfrontend is not mounted. Set loading state and reset error.
     */
    setLoading(true);
    setError(null);
    let outdated = false;

    /**
     * 4. Import the microfrontend JavaScript module from its remote URL.
     *    Make sure dynamic import is not transformed by bundlers!
     */
    import(/* webpackIgnore: true */ module)
      .then(({ default: mount }: { default: MountFunction<unknown> }) => {
        /**
         * 5a. If effect has not been cleaned up once module is ready then
         *     Call exported mount function and pass it the container element.
         */
        if (outdated || !containerRef.current) return;
        instanceRef.current = mount(containerRef.current, props) ?? null;
      })
      .catch((error) => {
        console.error("Error loading microfrontend module", error);
        /**
         * 5b. Set error state to render given error content.
         */
        setError(error);
      })
      .finally(() => {
        /**
         * 6. Reset loading state to remove loading content.
         */
        setLoading(false);
      });

    return () => {
      /**
       * Mark effect as outdated to prevent mounting the microfrontend when
       * component is unmounted before remote JavaScript module is loaded.
       */
      outdated = true;
    };
  }, [module, props]);

  useEffect(
    () => () => {
      /**
       * 7. When component is unmounted remove the microfrontend.
       */
      instanceRef.current?.unmount?.();
      instanceRef.current = null;
    },
    []
  );

  return (
    <>
      {/**
       * Container element being the wrapper for the microfrontend.
       */}
      <div ref={containerRef} {...attrs}></div>
      {loading && loadingContent}
      {error && errorContent}
    </>
  );
};
```

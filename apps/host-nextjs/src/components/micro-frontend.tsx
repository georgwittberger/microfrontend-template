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
   * Stylesheet URL of the microfrontend.
   */
  stylesheet?: string;
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
 * Component rendering a microfrontend with given module identifier and props.
 */
export const MicroFrontend: FC<MicroFrontendProps> = ({
  module,
  stylesheet,
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
    if (
      instanceRef.current &&
      (module !== previousModuleRef.current || !instanceRef.current.update)
    ) {
      instanceRef.current.unmount?.();
      instanceRef.current = null;
    }

    previousModuleRef.current = module;

    if (instanceRef.current && instanceRef.current.update) {
      instanceRef.current.update(props);
      return;
    }

    setLoading(true);
    setError(null);
    let outdated = false;

    import(/* webpackIgnore: true */ module)
      .then(({ default: mount }: { default: MountFunction<unknown> }) => {
        if (outdated || !containerRef.current) return;
        instanceRef.current = mount(containerRef.current, props) ?? null;
      })
      .catch((error) => {
        console.error("Error loading microfrontend module", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      outdated = true;
    };
  }, [module, props]);

  useEffect(() => {
    if (!stylesheet) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = stylesheet;
    document.head.append(link);
    return () => {
      link.remove();
    };
  }, [stylesheet]);

  useEffect(
    () => () => {
      instanceRef.current?.unmount?.();
      instanceRef.current = null;
    },
    []
  );

  return (
    <>
      <div ref={containerRef} {...attrs}></div>
      {loading && loadingContent}
      {error && errorContent}
    </>
  );
};

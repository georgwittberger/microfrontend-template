---
description: Microfrontend implementation using React
sidebar_position: 2
---

# Microfrontend using React

## Implementation

The mount function exported from the microfrontend JavaScript module should create the application root using [`createRoot`](https://react.dev/reference/react-dom/client/createRoot#createroot) by ReactDOM. It performs an initial render using [`root.render`](https://react.dev/reference/react-dom/client/createRoot#root-render) and returns an object with the `update` and `unmount` functions.

The returned `update` function calls `root.render` again on the same application root created by the mount function. This updates components without mounting them again so they will keep their internal state.

The returned `unmount` function calls [`root.unmount`](https://react.dev/reference/react-dom/client/createRoot#root-unmount) to detach the application and perform cleanup.

:::info

This project template provides an implementation in the file `apps/service-mfe/src/main.tsx`.

:::

## Example

```tsx
import type { MountFunction } from "mfe-contract";
import React from "react";
import ReactDOM from "react-dom/client";

import { App, type AppProps } from "./app";

/**
 * Mount function to be called by host applications.
 */
const mount: MountFunction<AppProps> = (container, initialProps) => {
  /**
   * 1. Create application root for given container element.
   */
  const appRoot = ReactDOM.createRoot(container, {
    // Provide custom prefix for useId hook.
    identifierPrefix: "service-",
  });

  /**
   * 2. Define update function to render app with given props.
   */
  const update = (props: AppProps) => {
    appRoot.render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    );
  };

  /**
   * 3. Define unmount function to remove app.
   */
  const unmount = () => {
    appRoot.unmount();
  };

  /**
   * 4. Perform initial render using given initial props.
   */
  update(initialProps);

  /**
   * 5. Return update and unmount function to host application.
   */
  return { update, unmount };
};

export default mount;
```

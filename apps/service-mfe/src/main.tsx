import type { MountFunction } from "mfe-contract";
import React from "react";
import ReactDOM from "react-dom/client";

import { App, type AppProps } from "./app";
import "./globals.css"; // Import stylesheet globally for HMR during development
import styles from "./globals.css?inline"; // Import inlined stylesheet for production

const mount: MountFunction<AppProps> = (container, initialProps) => {
  const appRoot = ReactDOM.createRoot(container, {
    identifierPrefix: "service-",
  });

  const update = (props: AppProps) => {
    appRoot.render(
      <React.StrictMode>
        <App {...props} />
        {import.meta.env.PROD && (
          <style dangerouslySetInnerHTML={{ __html: styles }}></style>
        )}
      </React.StrictMode>
    );
  };

  const unmount = () => {
    appRoot.unmount();
  };

  update(initialProps);

  return { update, unmount };
};

export default mount;

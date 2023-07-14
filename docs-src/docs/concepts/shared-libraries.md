---
description: Sharing libraries among microfrontends
sidebar_position: 5
---

# Shared Libraries

## Motivation

If many microfrontends are built using the same frameworks and libraries it becomes inefficient to bundle these libraries with every microfrontend. Users would end up loading the same library code multiple times which unnecessarily increases loading times of microfrontends and requires more server ressources due to increased data transfer.

Therefore, as soon as multiple microfrontends agree on a common tech stack their heavy libraries should be provided by host applications or some external CDN.

## External Dependencies in Microfrontends

Microfrontends must declare shared libraries as external ressources in the configuration of their bundler.

- [Vite](https://vitejs.dev/) configuration must include [`build.rollupOptions`](https://vitejs.dev/config/build-options.html#build-rollupoptions) with an [`external`](https://rollupjs.org/configuration-options/#external) property. For UMD/IIFE bundles the names of global variables must be defined in `build.rollupOptions.output.globals`. There is a good example in the [Library Mode](https://vitejs.dev/guide/build.html#library-mode) documentation.
- [Webpack](https://webpack.js.org/) configuration must include [`externals`](https://webpack.js.org/configuration/externals/). Names of global variables for UMD/IIFE bundles are defined there as well.

Example for Vite and React:

```ts
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: { "process.env.NODE_ENV": JSON.stringify(mode) },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/main.tsx"),
      name: "ServiceMFE",
      fileName: "service-mfe",
    },
    rollupOptions: {
      /**
       * 1. Declare module specifiers of shared libraries.
       */
      external: ["react", "react-dom"],
      output: {
        /**
         * 2. For UMD bundle specify global variable names for shared libraries.
         */
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
}));
```

:::info

This project template provides a configuration in the file `apps/service-mfe/vite.config.ts`.

:::

## Import Maps in Host Applications using ES Modules

Host applications which import ES module bundles of microfrontends using [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) must define an [import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) which specifies the URLs for bare module specifiers of shared libraries.

Example for React:

```html
<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@18.2.0",
      "react-dom": "https://esm.sh/react-dom@18.2.0"
    }
  }
</script>
```

:::info

This project template provides a React component in the file `apps/host-nextjs/src/components/importmap.tsx`.

:::

## Global Variables in Host Applications using UMD Bundles

The host application must include `<script>` tags to load UMD/IIFE versions of shared libraries before loading any UMD bundles of microfrontends.

Example for React:

```html
<html lang="en">
  <head>
    <script src="/js/react@18.2.0.min.js" defer></script>
    <script src="/js/react-dom@18.2.0.min.js" defer></script>
  </head>
  <body>
    <!-- ... -->
    <script
      src="https://my-service.my-company.com/mfe-module.umd.cjs"
      onload="mountMFE()"
      onerror="showError()"
      defer
    ></script>
  </body>
</html>
```

:::info

This project template provides an implementation in the file `apps/host-express/views/service.ejs`.

:::

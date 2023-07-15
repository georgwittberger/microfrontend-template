---
description: Handling stylesheets of microfrontends
sidebar_position: 8
---

# Stylesheets

## Motivation

Microfrontends should bring their own stylesheets instead of relying on styles to be present in the host application. This ensures that microfrontends can evolve independently from their host applications.

## Approaches

### Inline Stylesheets

In this approach the microfrontend inserts `<style>` tags when mounted in the host page. These inline stylesheets contain the CSS code required for the microfrontend.

When the microfrontend is unmounted it should remove all its `<style>` tags.

Depending on whether you are using one global stylesheet or CSS modules the implementation differs a bit.

- **Global stylesheet** should be inserted by the mount function of the microfrontend or its root component. This works great for [TailwindCSS](https://tailwindcss.com/).
- **CSS modules** should be inserted and removed by the component they belong to.

Example for Vite and React:

```tsx
import { App, type AppProps } from "./app";
/**
 * 1a. Empty import of stylesheet is required for HMR during development.
 *     The file "style.css" created by production build can be ignored.
 */
import "./globals.css";
/**
 * 1b. Inline CSS import is used for production build.
 */
import styles from "./globals.css?inline";

/**
 * When mounting or updating the microfrontend.
 */
appRoot.render(
  <React.StrictMode>
    <App {...props} />
    {/**
     * 2. Render <style> tag with imported inline CSS code only
     *    when running in production mode.
     */}
    {import.meta.env.PROD && (
      <style dangerouslySetInnerHTML={{ __html: styles }}></style>
    )}
  </React.StrictMode>
);
```

:::info

This project template provides a React-based implementation using TailwindCSS in the file `apps/service-mfe/src/main.tsx`.

:::

:::tip

When using TailwindCSS set the [`prefix`](https://tailwindcss.com/docs/configuration#prefix) option in `tailwind.config.js` to a value which is unique among microfrontends. This avoids collisions with stylesheets of other microfrontends and host applications.

:::

### External Stylesheets

In this approach the microfrontend provides separate CSS files along with its JavaScript module. Host applications are required to load these CSS resources using `<link>` tags.

This creates an additional contract between microfrontends and host applications. Furthermore, host applications must handle insertion and removal of the stylesheets as part of the microfrontend lifecycle.

:::info

This project template provides a React-based implementation in the file `apps/host-nextjs/src/components/micro-frontend.tsx`.

:::

### CSS in JavaScript

In this approach the microfrontend utilizes a CSS-in-JS library like [Emotion](https://emotion.sh/), [Styled Components](https://styled-components.com/) or [JSS](https://cssinjs.org/) to apply styling to its own components.

The library inlines CSS automatically so it becomes part of the microfrontend JavaScript module.

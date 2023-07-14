---
description: Host application implementation using ES modules
sidebar_position: 3
---

# Host Application using ES Modules

## Implementation

The host application must render a container element in the HTML document and import the microfrontend JavaScript module using [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import). It passes a remote URL to the `import()` function to fetch the module from the microfrontend server.

As soon as the JavaScript module has been loaded the host application calls the exported mount function and passes a reference to the container element.

If loading the JavaScript module fails the host application may render some error message.

While the user stays on the same page the host application may call the `update` function of the microfrontend (if returned) to send new data from the host to the microfrontend.

When the user navigates away from the page the host application may call the `unmount` function of the microfrontend (if returned) to trigger its cleanup. This is important if the host is a single-page application where the entire page is not reloaded on navigation.

:::tip

If your host application uses Content Security Policy make sure to allow the microfrontend remote URL as [script-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

:::

## Example

```html
<!--
  Container element being the wrapper for the microfrontend.
-->
<div id="mfe-root"></div>

<!--
  Script to import and mount the microfrontend.
-->
<script type="module">
  /**
   * 1. Render some loading indicator.
   */

  /**
   * 2. Import the microfrontend JavaScript module from its remote URL.
   */
  let mfe;
  import("https://my-service.my-company.com/mfe-module.js")
    .then(({ default: mount }) => {
      /**
       * 3a. Call the exported mount function and pass it the container element.
       */
      mfe = mount(document.getElementById("mfe-root"), { myProp: "My Value" });
    })
    .catch((error) => {
      console.error("Error loading microfrontend module", error);
      /**
       * 3b. Render some error message.
       */
    })
    .finally(() => {
      /**
       * 4. Remove the loading indicator.
       */
    });

  /**
   * When data changes in the host application maybe update the microfrontend.
   */
  mfe?.update?.({ myProp: "New Value" });

  /**
   * When leaving the page remove the microfrontend.
   */
  mfe?.unmount?.();
</script>
```

:::tip

Do not put the literal remote URL of the microfrontend JavaScript module in your code. Instead externalize the value and pass a variable to the `import()` function to allow configuration of the URL without having to change code.

:::

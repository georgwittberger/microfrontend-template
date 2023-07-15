---
description: Host application implementation using UMD modules
sidebar_position: 4
---

# Host Application using UMD Modules

## Implementation

The host application must render a container element in the HTML document and a `<script>` tag to load the UMD/IIFE bundle of the microfrontend from its remote URL.

The host application registers a `onload` event listener on the `<script>` tag to detect when the module is ready. Inside this listener function the application calls the exported mount function and passes a reference to the container element.

Additionally, the host application may register a `onerror` event listener to render some error message if the module fails to load.

While the user stays on the same page the host application may call the `update` function of the microfrontend (if returned) to send new data from the host to the microfrontend.

When the user navigates away from the page the host application may call the `unmount` function of the microfrontend (if returned) to trigger its cleanup. This is important if the host is a single-page application where the entire page is not reloaded on navigation.

:::info

This project template provides an implementation in the file `apps/host-express/views/service.ejs`.

:::

:::tip

If your host application uses Content Security Policy make sure to allow the microfrontend remote URL as [script-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

:::

## Example

```html
<!--
  Container element being the wrapper for the microfrontend.
-->
<div id="mfe-root"></div>

<script>
  let mfe;
  function mountMyMFE() {
    /**
     * 2a. Call the exported mount function and pass it the container element.
     *     Assuming exports are provided in global variable "MyMFE" here.
     */
    mfe = self.MyMFE(document.getElementById("mfe-root"), {
      myProp: "My Value",
    });
  }
  function showMFEError() {
    /**
     * 2b. Render some error message.
     */
  }

  /**
   * When data changes in the host application maybe update the microfrontend.
   */
  mfe?.update?.({ myProp: "New Value" });

  /**
   * When leaving the page remove the microfrontend.
   */
  mfe?.unmount?.();
</script>

<!--
  1. Load the microfrontend JavaScript module from its remote URL.
-->
<script
  src="https://my-service.my-company.com/mfe-module.umd.cjs"
  onload="mountMyMFE()"
  onerror="showMFEError()"
  defer
></script>
```

:::tip

Do not put the literal remote URL of the microfrontend JavaScript module in your code. Instead externalize the value and render the `src` attribute of the `<script>` tag using a variable to allow configuration of the URL without having to change code.

:::

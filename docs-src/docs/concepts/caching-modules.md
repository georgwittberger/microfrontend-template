---
description: Caching modules provided by microfrontends
sidebar_position: 7
---

# Caching Modules

## Motivation

If users access a web application regularly it becomes inefficient to transfer all JavaScript und CSS resources on every visit given they have not changed. For faster loading times and avoiding unnecessary data transfer it is desirable to have browsers reuse JavaScript and CSS files they have already downloaded on a previous visit.

## Approaches

All common approaches utilize the browser's [HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) support. However, they differ in two aspects.

- Does the browser have to request the server even if it has a cached resource?
- Does the URL of a certain resource change when its content changes?

### Persistent URL and HTTP Caching

In this approach the URL of a resource does not change when it is updated on the server. Caching is accomplished by setting HTTP headers in the responses of microfrontend modules as follows.

```text
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
```

The `Cache-Control: no-cache` header tells the browser that it is allowed to store resources in its private cache but it must revalidate them with a server request before reusing them. `Last-Modified` indicates the date when the content in the response was generated on the server. `ETag` is a hash of the content in the response.

In the revalidation request the browser sends a `If-Modified-Since` header if `Last-Modified` was in the response and a `If-None-Match` header if `ETag` was in the response. The server checks whether the resource has changed since the given date or if its content produces a different hash. If the resource is still the same the server responds with status code `304 Not Modified` and does not send any content. The browser uses its cached resource. Otherwise, the server sends the new content in the revalidation response.

The benefit of this approach is that host applications do not have to adjust any import URLs or import maps when new microfrontend versions are deployed. It is also fairly easy to set up because almost every web server supports `Last-Modified` or `ETag` for static resources.

The caveat is that browsers have to send a server request for revalidation every time the microfrontend resource is required on a subsequent page visit. This can slightly delay rendering of microfrontends even when users have a fresh resource in their browser cache.

This approach may be easier to start with as long as you have control over HTTP caching headers in responses of microfrontend resources.

### Hashed URL and Eternal Caching

In this approach - also known as "Cache busting" - the URL of a resource changes every time it is updated on the server. Since this results in a new address for every version of the resource its content can be cached forever in the browser. This is accomplished by setting HTTP headers in the responses of microfrontend modules as follows.

```text
Cache-Control: public, max-age=31536000, immutable
```

The `Cache-Control` header tells the browser and intermediate gateways that resources can be stored in caches and reused without any revalidation. It is a promise that the content delivered by this particular URL is never going to change in the future. Once such a resource is cached in the browser it is reused instantly on every subsequent page visit.

The benefit of this approach is that it does not require any server requests for revalidation once users have the microfrontend resources locally. Microfrontends are rendered almost instantly in this case.

The caveat is that import URLs or import maps must be updated every time a microfrontend deploys a new version. Deployment setup is more complicated. The authors of [single-spa describe some solutions](https://single-spa.js.org/docs/recommended-setup#deployment-and-continuous-integration-ci) to the problem.

- Host applications use import maps for microfrontend modules as well. Deployments of microfrontends must invoke the [import-map-deployer](https://github.com/single-spa/import-map-deployer) service which you have to set up in your production environment to update import maps in a concurrent-safe way.
- Host applications use persistent URLs for microfrontend modules but these resource addresses redirect to the latest hashed URL via status code `302 Found`. Therefore, host applications do not have to adjust anything when new microfrontend versions are deployed. Deployments of microfrontends must take care of updating the redirect target URL of their canonical module address.

This approach may be suitable if you really want to avoid revalidation requests or you cannot control HTTP caching headers in responses of microfrontend resources, e.g. because you are using a CDN.

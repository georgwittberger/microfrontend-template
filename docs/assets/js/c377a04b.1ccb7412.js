"use strict";(self.webpackChunkmicrofrontend_template_docs=self.webpackChunkmicrofrontend_template_docs||[]).push([[971],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7366),o=(r(9496),r(9613));const a={slug:"/",sidebar_position:1},i="Microfrontends",s={unversionedId:"index",id:"index",title:"Microfrontends",description:"Overview",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/microfrontend-template/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"sidebar",next:{title:"Getting Started",permalink:"/microfrontend-template/getting-started"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Approaches",id:"approaches",level:2},{value:"ES Modules and Import Maps",id:"es-modules-and-import-maps",level:3},{value:"Module Federation",id:"module-federation",level:3},{value:"Composition Frameworks",id:"composition-frameworks",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microfrontends"},"Microfrontends"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://micro-frontends.org/"},"Microfrontends")," is the concept of composing a web page from multiple parts which can be deployed independently. The goal is to avoid rebuilding and deploying the application rendering the HTML document when only the code of a certain page component needs to be updated. This approach can not only save server resources for larger applications but also enables development teams to ship features more independently."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Microfrontends Overview",src:r(2503).Z,width:"1374",height:"727"})),(0,o.kt)("p",null,"In the diagram above, assume that the host application is providing the HTML document of the web application and is managed by team 1 which deploys that application to server 1. On some page inside the host application there are embedded mini apps which are mostly independent of each other. These mini apps can be integrated as microfrontends A and B, so that their dedicated teams 2 and 3 can deploy them on their own on server 2 and 3 respectively."),(0,o.kt)("p",null,"Whenever teams 2 and 3 want to update their mini app they should not have to request team 1 to redeploy their host application. Instead they simply deploy a new version of their microfrontends and browsers should fetch the updated resources when rendering the page of the host application."),(0,o.kt)("h2",{id:"approaches"},"Approaches"),(0,o.kt)("p",null,"All contemporary approaches to implement microfrontends rely on dynamically loading JavaScript code required for partial applications from sources which can be updated independently from the host application. In the context of web applications this typically means that browsers request a JavaScript file from a server which is managed separately from the host application."),(0,o.kt)("h3",{id:"es-modules-and-import-maps"},"ES Modules and Import Maps"),(0,o.kt)("p",null,"Modern JavaScript supports importing code from remote sources. This is what we are going to use in this project template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Static import (works only inside <script type="module">)\nimport React from "https://esm.sh/react@18.2.0";\n\n// Dynamic import (works in any context)\nimport("https://esm.sh/react@18.2.0").then(({ default: React }) => {});\n')),(0,o.kt)("p",null,"To resolve bare module specifiers like ",(0,o.kt)("inlineCode",{parentName:"p"},'"react"')," the host application must define an ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap"},"import map"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script type="importmap">\n  {\n    "imports": {\n      "react": "https://esm.sh/react@18.2.0"\n    }\n  }\n<\/script>\n<script type="module">\n  // Works only with import map\n  import React from "react";\n<\/script>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/mdn-javascript_statements_import"},"Module imports are supported very well")," in browsers these days. However, ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/import-maps"},"import maps have only landed recently")," in Firefox and Safari, so they might not be available to all users yet."),(0,o.kt)("p",null,"You can include ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims"},"es-module-shims")," in your host applicaton to polyfill import maps."),(0,o.kt)("h3",{id:"module-federation"},"Module Federation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," - a popular module bundler - introduced the concept of ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/module-federation/"},"module federation"),". It is a proprietary solution requiring special plugins in the build processes of host applications and microfrontends."),(0,o.kt)("p",null,"Simplified, the builds of microfrontends generate special JavaScript bundles which can be loaded dynamically by the JavaScript code generated in the host application bundles. These host bundles incorporate a special loading mechanism which loads the microfrontend bundles from their remote sources as soon as they are required by the code."),(0,o.kt)("p",null,"There are plugins to make module federation work with other tools and frameworks."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@originjs/vite-plugin-federation"},"Vite plugin")," for usage with Vite and even compatible with Webpack format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@module-federation/nextjs-mf"},"Next.js")," plugin is built on top of the Webpack plugin and supports server-side rendering.")),(0,o.kt)("h3",{id:"composition-frameworks"},"Composition Frameworks"),(0,o.kt)("p",null,"Some frameworks attempt to make the setup easier and solve specific challenges. However, they may be too much for simpler projects but are a great resource for learning."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://single-spa.js.org/"},"single-spa")," orchestrates multiple SPAs within one host application and provides additional tooling for special use cases. Its article about the ",(0,o.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/recommended-setup"},"recommended setup")," is fantastic to understand basic concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiankun.umijs.org/"},"qiankun")," is another composition framework which is built on top of single-spa.")))}m.isMDXComponent=!0},2503:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/microfrontends-overview.excalidraw-cc39be01fbacc0526e44e8f45039f0b6.png"}}]);
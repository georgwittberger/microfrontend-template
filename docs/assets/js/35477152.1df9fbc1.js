"use strict";(self.webpackChunkmicrofrontend_template_docs=self.webpackChunkmicrofrontend_template_docs||[]).push([[209],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7366),o=(t(9496),t(9613));const a={description:"Host application implementation using React",sidebar_position:4},i="Host Application using React",c={unversionedId:"concepts/host-app-react",id:"concepts/host-app-react",title:"Host Application using React",description:"Host application implementation using React",source:"@site/docs/concepts/host-app-react.md",sourceDirName:"concepts",slug:"/concepts/host-app-react",permalink:"/microfrontend-template/concepts/host-app-react",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Host application implementation using React",sidebar_position:4},sidebar:"sidebar",previous:{title:"Host Application using ES Modules",permalink:"/microfrontend-template/concepts/host-app-esmodule"},next:{title:"Shared Libraries",permalink:"/microfrontend-template/concepts/shared-libraries"}},s={},p=[{value:"Implementation",id:"implementation",level:2},{value:"Example",id:"example",level:2}],u={toc:p},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-application-using-react"},"Host Application using React"),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"The host application can implement a reusable React component to mount microfrontends."),(0,o.kt)("p",null,"The component renders the container element and obtains a reference to it using ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useRef"},(0,o.kt)("inlineCode",{parentName:"a"},"useRef")),"."),(0,o.kt)("p",null,"The component implements a side effect using ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useEffect"},(0,o.kt)("inlineCode",{parentName:"a"},"useEffect"))," to import, mount and update the microfrontend. This effect also sets the loading and error states to render specific content while the module is being loaded and when loading the module failed."),(0,o.kt)("p",null,"The cleanup function of another side effect with an empty dependency array can be used to remove the microfrontend as soon as the React component is unmounted."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This project template provides an implementation in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"apps/host-nextjs/src/components/micro-frontend.tsx"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your host application uses Content Security Policy make sure to allow the microfrontend remote URL as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"},"script-src"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'"use client";\n\nimport type { MountFunction, MountFunctionResult } from "mfe-contract";\nimport {\n  useEffect,\n  useRef,\n  useState,\n  type FC,\n  type HTMLAttributes,\n  type ReactNode,\n} from "react";\n\nexport type MicroFrontendProps = HTMLAttributes<HTMLDivElement> & {\n  /**\n   * Module URL of the microfrontend.\n   */\n  module: string;\n  /**\n   * Props to be passed to microfrontend.\n   */\n  props?: unknown;\n  /**\n   * Content to be rendered while module is loading.\n   */\n  loadingContent?: ReactNode;\n  /**\n   * Content to be rendered when module failed to load.\n   */\n  errorContent?: ReactNode;\n};\n\n/**\n * Component rendering a microfrontend with given module URL and props.\n */\nexport const MicroFrontend: FC<MicroFrontendProps> = ({\n  module,\n  props,\n  loadingContent,\n  errorContent,\n  ...attrs\n}) => {\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState<unknown>(null);\n  const containerRef = useRef<HTMLDivElement | null>(null);\n  const previousModuleRef = useRef<string>(module);\n  const instanceRef = useRef<MountFunctionResult<unknown> | null>(null);\n\n  useEffect(() => {\n    /**\n     * 1. If microfrontend has already been mounted but given module URL has\n     *    changed or props have changed and microfrontend has no update function\n     *    then unmount it to force remounting.\n     */\n    if (\n      instanceRef.current &&\n      (module !== previousModuleRef.current || !instanceRef.current.update)\n    ) {\n      instanceRef.current.unmount?.();\n      instanceRef.current = null;\n    }\n\n    previousModuleRef.current = module;\n\n    /**\n     * 2. If microfrontend has already been mounted and provides an update\n     *    function then just call update() with changed props.\n     */\n    if (instanceRef.current && instanceRef.current.update) {\n      instanceRef.current.update(props);\n      return;\n    }\n\n    /**\n     * 3. Microfrontend is not mounted. Set loading state and reset error.\n     */\n    setLoading(true);\n    setError(null);\n    let outdated = false;\n\n    /**\n     * 4. Import the microfrontend JavaScript module from its remote URL.\n     *    Make sure dynamic import is not transformed by bundlers!\n     */\n    import(/* webpackIgnore: true */ module)\n      .then(({ default: mount }: { default: MountFunction<unknown> }) => {\n        /**\n         * 5a. If effect has not been cleaned up once module is ready then\n         *     Call exported mount function and pass it the container element.\n         */\n        if (outdated || !containerRef.current) return;\n        instanceRef.current = mount(containerRef.current, props) ?? null;\n      })\n      .catch((error) => {\n        console.error("Error loading microfrontend module", error);\n        /**\n         * 5b. Set error state to render given error content.\n         */\n        setError(error);\n      })\n      .finally(() => {\n        /**\n         * 6. Reset loading state to remove loading content.\n         */\n        setLoading(false);\n      });\n\n    return () => {\n      /**\n       * Mark effect as outdated to prevent mounting the microfrontend when\n       * component is unmounted before remote JavaScript module is loaded.\n       */\n      outdated = true;\n    };\n  }, [module, props]);\n\n  useEffect(\n    () => () => {\n      /**\n       * 7. When component is unmounted remove the microfrontend.\n       */\n      instanceRef.current?.unmount?.();\n      instanceRef.current = null;\n    },\n    []\n  );\n\n  return (\n    <>\n      {/**\n       * Container element being the wrapper for the microfrontend.\n       */}\n      <div ref={containerRef} {...attrs}></div>\n      {loading && loadingContent}\n      {error && errorContent}\n    </>\n  );\n};\n')))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[1134],{"../../pp-pages/s-pp-error-page/src/PpErrorPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PpErrorPage_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../utils/s-pp-storybook-providers/src/index.ts"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),s_button_src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),s_text_link_src=__webpack_require__("../../ds-atoms/s-text-link/src/index.ts"),s_pp_image_src=__webpack_require__("../../pp-atoms/s-pp-image/src/index.ts"),QueryClientProvider=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_biqbaboplfbrettd7655fr4n2y/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),dist=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.2_next@13.2.3+react@18.2.0/node_modules/next-router-mock/dist/index.js"),s_use_cookie_src=__webpack_require__("../../hooks/s-use-cookie/src/index.ts"),s_use_bi_src=__webpack_require__("../../hooks/s-use-bi/src/index.ts"),s_pp_header_src=__webpack_require__("../../pp-molecules/s-pp-header/src/index.ts"),__jsx=react.createElement;const c={lc:{alignSelf:"dQfgrd",marginInlineEnd:"gzedBA",marginInlineStart:"bMPiZO",maxWidth:"cEVcDK",paddingInlineEnd:"iHcdxl",paddingInlineStart:"hIfrmf",textAlign:"kooHYa",marginTop:"cUXNmd","@media all and (min-width:37.5em) and (max-width:47.9375em)":{paddingInlineStart:"djCtEn",paddingInlineEnd:"dXuJpV"},"@media all and (min-width:80em)":{marginRight:"bicvBL",marginBottom:"gJBoWW",marginLeft:"lcdcNu",marginTop:"jwZBPR"}},redirectLink:{marginTop:"bRLnE",fontFamily:"cGpNyn"},button:{marginTop:"EKhXX"},image:{alignSelf:"duSHeH",display:"kQBRAp",fontSize:"jawNFK",marginBottom:"kEhtav",marginTop:"cUXNmd",marginInlineStart:"bMPiZO",marginInlineEnd:"gzedBA",position:"cjScYX",transform:"bDKFmz","@media all and (min-width:64em) and (max-width:79.9375em)":{fontSize:"bvdGxH",marginTop:"eDusZb",transform:"daTOZW"},"@media all and (min-width:80em)":{fontSize:"hAHsou",marginInlineStart:"griTvt",marginTop:"ksmwdc",transform:"hFqrzw"}}};function ErrorPage({error,referrer}){const router=(0,dist.useRouter)(),client=(0,QueryClientProvider.NL)(),biAction=(0,s_use_bi_src.Z)();if(react.useEffect((()=>{const removeMessageQuery=()=>{client.removeQueries(s_use_cookie_src.Z.cacheKey)};return router.events.on("routeChangeComplete",removeMessageQuery),window.addEventListener("beforeunload",removeMessageQuery),()=>{router.events.off("routeChangeComplete",removeMessageQuery),window.removeEventListener("beforeunload",removeMessageQuery)}}),[client,router,router.events]),!error)return null;const{title,instructions,cta,ctaType,link,action,messageType}=error||{},biData={action_id:action,feature:"Purchase error",feature_type:"Marketing",camapign_name:messageType,campaign_details:instructions,stage:"error",additional_info:{refactor:"true"}},href=link||referrer,onClickHandler=()=>biAction(biData);return __jsx(react.Fragment,null,__jsx("div",{className:(0,style9.Z)(c.lc)},__jsx(s_pp_header_src.Z,{currentStep:"error",title,instructions}),cta?__jsx("div",{className:(0,style9.Z)("button"===ctaType&&c.button,"link"===ctaType&&c.redirectLink)},"button"===ctaType?__jsx(s_button_src.ZP,{as:"a",href:"https://promotions.haaretz.co.il",variant:"sales",onClick:onClickHandler},cta):href?__jsx(s_text_link_src.Z,{href,onClick:onClickHandler},cta):__jsx(s_button_src.ZP,{as:"a",href:"https://www.haaretz.co.il",variant:"sales",onClick:onClickHandler},"חזרה לדף הבית")):null),__jsx(s_pp_image_src.Z,{styleExtend:[c.image]}))}try{PpErrorPagepage.displayName="PpErrorPagepage",PpErrorPagepage.__docgenInfo={description:"",displayName:"PpErrorPagepage",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"PPMessageProps | null | undefined"}},referrer:{defaultValue:null,description:"",name:"referrer",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-pages/s-pp-error-page/src/PpErrorPage.page.tsx#PpErrorPagepage"]={docgenInfo:PpErrorPagepage.__docgenInfo,name:"PpErrorPagepage",path:"../../pp-pages/s-pp-error-page/src/PpErrorPage.page.tsx#PpErrorPagepage"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_pu76jrox5ef7vkjrotgp34yn6i/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"PpErrorsPage"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PpErrorsPage"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-pp-errors-page"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-error-page": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PpErrorsPage"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PpErrorPage from '@haaretz/s-pp-error-page';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Purchase app error page. This page gets it's data from usePPMessage, an\nimplemented cookie from the server, and a react-query for the cookie with the\nuseCookie hook."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"purchase/pages-pp-error-page--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Variants"})]})}const PpErrorPage_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var PpErrorPage_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const mockError={messageType:"MISSING_PRODUCT_INFO",title:"אירעה שגיאה",instructions:"אנא נסו שנית מאוחר יותר או פנו לשירות הלקוחות במידה והתקלה נמשכת",action:80,ctaType:"button",cta:"לרכישה"},{decorators}=__webpack_require__("../../config/l-storybook-config/preview.js"),PpErrorPage_stories={component:ErrorPage,title:"Purchase/Pages/PpErrorsPage",args:{inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{layout:"fullscreen",docs:{page:PpErrorPage_doc}},decorators:[src.Z,...decorators]},Overview=()=>PpErrorPage_stories_jsx(ErrorPage,{error:mockError,referrer:"/"});Overview.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"() => (\n  <PpErrorPage error={mockError} referrer={referrer} />\n)"}},Overview.parameters);const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-button/src/Button.tsx").ZP},"../../ds-atoms/s-htz-link/src/HtzLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.2.3_6m24vuloj5ihw4zc5lbsktc4fu/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);const _excluded=["children","href","hrefAs","locale","prefetch","replace","scroll","shallow"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const HtzLink=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function HtzLinkComponent(_ref,forwardedRef){let{children=null,href,hrefAs,locale,prefetch,replace,scroll,shallow}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);if("string"!=typeof href&&!href.href)return console.warn('The "href" prop you passed <HtzLink /> is a "URL" object without an "href" field:',href,"\nOpting out of rendering the element"),console.trace(),null;if(function isNextLink(href){return"string"!=typeof href||!href.startsWith("http")}(href))return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({as:hrefAs,href,locale,prefetch,ref:forwardedRef,replace,scroll,shallow,legacyBehavior:!1},attrs),children);const url="string"==typeof href?href:href.href||void 0;return __jsx("a",(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({href:url,ref:forwardedRef},attrs),children)})),__WEBPACK_DEFAULT_EXPORT__=HtzLink;try{HtzLink.displayName="HtzLink",HtzLink.__docgenInfo={description:"",displayName:"HtzLink",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"]={docgenInfo:HtzLink.__docgenInfo,name:"HtzLink",path:"../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-htz-link/src/HtzLink.tsx").Z},"../../ds-atoms/s-text-link/src/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TextLinkButton,Z:()=>src_TextLink});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-htz-link/src/index.ts");const _excluded=["children","inlineStyle","styleExtend"],_excluded2=["children","inlineStyle","styleExtend"];var __jsx=react.createElement;const c_base={outlineWidth:"eGCNgh",textDecorationLine:"dLUwcr",textDecorationColor:"dDxYlR",textDecorationThickness:"bFIFQP",textUnderlineOffset:"cEqDEh",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",":hover":{color:"klOnSG"},":focus":{color:"bsfUtT"}},c_button={backgroundColor:"KqcXP"},TextLink=react.forwardRef((function TextLink(_ref,ref){let{children=null,inlineStyle,styleExtend=[]}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(src.Z,(0,esm_extends.Z)({className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle,ref},attrs),children)})),src_TextLink=TextLink,TextLinkButton=react.forwardRef((function TextLinkButton(_ref2,ref){let{children=null,inlineStyle,styleExtend=[]}=_ref2,attrs=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx("button",(0,esm_extends.Z)({className:(0,style9.Z)(c_base,c_button,...styleExtend),style:inlineStyle,ref},attrs),children)}));try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextLink(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextLink\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextLink styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-link/src/TextLink.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"../../ds-atoms/s-text-link/src/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}try{TextLinkButton.displayName="TextLinkButton",TextLinkButton.__docgenInfo={description:"",displayName:"TextLinkButton",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextLink(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextLink\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextLink styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-link/src/TextLink.tsx#TextLinkButton"]={docgenInfo:TextLinkButton.__docgenInfo,name:"TextLinkButton",path:"../../ds-atoms/s-text-link/src/TextLink.tsx#TextLinkButton"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-text-link/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.R,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../ds-atoms/s-text-link/src/TextLink.tsx");const __WEBPACK_DEFAULT_EXPORT__=_TextLink__WEBPACK_IMPORTED_MODULE_0__.Z},"../../hooks/s-use-bi/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>s_use_bi_src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../hooks/s-use-config/src/index.ts"),useBiDataContext=__webpack_require__("../../hooks/s-use-bi/src/useBiDataContext.tsx");const s_use_bi_src=function useBi(biType="action"){let biUrl;const biServer=(0,src.Z)().get("bIServer");switch(biType){case"impression":biUrl=`${biServer}/impressionPlain`;break;case"pageview":biUrl=`${biServer}/requestPlain`;break;default:biUrl=`${biServer}/actionPlain`}const contextBiDataPromise=(0,useBiDataContext.Z)();return react.useCallback((userBiData=>{contextBiDataPromise.then((contextBiData=>{var _window$navigator;const{additional_info}=userBiData;additional_info&&"object"==typeof additional_info&&(userBiData.additional_info=JSON.stringify(additional_info));const finalBiData=Object.assign({},contextBiData,userBiData);null===(_window$navigator=window.navigator)||void 0===_window$navigator||_window$navigator.sendBeacon(biUrl,JSON.stringify(finalBiData))}))}),[biUrl,contextBiDataPromise])}},"../../hooks/s-use-cookie/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src});var useQuery=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_biqbaboplfbrettd7655fr4n2y/node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),cookieToMap=__webpack_require__("../../utils/s-cookie-utils/src/cookieToMap/index.ts");const messageCacheKey=["HtzCookie"];function cookieDispenserFactory(cookie){return function cookieDispenser(){const cookieMap=(0,cookieToMap.Z)(cookie,!0),{ppResponseMessage,_hs_ud:hsud}=cookieMap;return{ppResponseMessage,hsud}}}function useCookie(options){return(0,useQuery.a)(messageCacheKey,cookieDispenserFactory("undefined"!=typeof document?document.cookie:""),options)}useCookie.cacheKey=messageCacheKey,useCookie.cookieDispenserFactory=cookieDispenserFactory;const src_useCookie=useCookie;try{useCookie.displayName="useCookie",useCookie.__docgenInfo={description:"",displayName:"useCookie",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-cookie/src/useCookie.tsx#useCookie"]={docgenInfo:useCookie.__docgenInfo,name:"useCookie",path:"../../hooks/s-use-cookie/src/useCookie.tsx#useCookie"})}catch(__react_docgen_typescript_loader_error){}const src=src_useCookie},"../../pp-atoms/s-pp-image/src/PpImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PpImage});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={height:"jXmXEB",width:"fCehYP",pointerEvents:"eDssNQ"};function PpImage({inlineStyle,styleExtend=[]}){return __jsx("svg",{className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle,focusable:!1,tabIndex:-1},__jsx("use",{xlinkHref:"#promotion-img"}))}try{PpImage.displayName="PpImage",PpImage.__docgenInfo={description:"",displayName:"PpImage",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyPpImage(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <PpImage\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<PpImage styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-image/src/PpImage.tsx#PpImage"]={docgenInfo:PpImage.__docgenInfo,name:"PpImage",path:"../../pp-atoms/s-pp-image/src/PpImage.tsx#PpImage"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-image/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-atoms/s-pp-image/src/PpImage.tsx").Z},"../../pp-molecules/s-pp-header/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-molecules/s-pp-header/src/PpHeader.tsx").Z}}]);
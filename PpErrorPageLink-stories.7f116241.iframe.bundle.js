"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[8847],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../pp-atoms/s-pp-error-page-link/src/PpErrorPageLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,Overview:()=>Overview,Text:()=>Text,default:()=>PpErrorPageLink_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),s_text_link_src=__webpack_require__("../../ds-atoms/s-text-link/src/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c={button:{fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"},paddingRight:"lkcNSa",paddingLeft:"bKqOie"},text:{fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hJgbZA",lineHeight:"cLPvYH"}}};function PpErrorPageLink_PpErrorPageLink(_ref){let{children=null,inlineStyle,styleExtend=[],linkType,href}=_ref;const props={styleExtend:["text"===linkType?c.text:c.button,...styleExtend],inlineStyle,href,children};return"text"===linkType?(0,jsx_runtime.jsx)(s_text_link_src.Z,_objectSpread({},props)):(0,jsx_runtime.jsx)(src.ZP,_objectSpread({as:"a",variant:"sales"},props))}try{PpErrorPageLink_PpErrorPageLink.displayName="PpErrorPageLink",PpErrorPageLink_PpErrorPageLink.__docgenInfo={description:"",displayName:"PpErrorPageLink",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<PpErrorPageLink>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyPpErrorPageLink(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <PpErrorPageLink\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<PpErrorPageLink styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},linkType:{defaultValue:null,description:"Determines whether the link should be displayed as\ntext or a button.",name:"linkType",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"text"'}]}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-error-page-link/src/PpErrorPageLink.tsx#PpErrorPageLink"]={docgenInfo:PpErrorPageLink_PpErrorPageLink.__docgenInfo,name:"PpErrorPageLink",path:"../../pp-atoms/s-pp-error-page-link/src/PpErrorPageLink.tsx#PpErrorPageLink"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.2.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"pperrorpagelink",children:"PpErrorPageLink"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PpErrorPageLink"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-pp-link"}),"\nlisted in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-link": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PpErrorPageLink"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PpErrorPageLink from '@haaretz/s-pp-link';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A link that can be either a TextLink or a Button"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pperrorpagelink--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linktype",children:"LinkType"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Type can be either text or button"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pperrorpagelink--text"}),(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-atoms-pperrorpagelink--button"})]})]})}function PpErrorPageLink_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function PpErrorPageLink_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?PpErrorPageLink_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PpErrorPageLink_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Overview=args=>(0,jsx_runtime.jsx)(PpErrorPageLink_PpErrorPageLink,PpErrorPageLink_stories_objectSpread({},args)),Text=args=>(0,jsx_runtime.jsx)(PpErrorPageLink_PpErrorPageLink,PpErrorPageLink_stories_objectSpread({},args)),Button=args=>(0,jsx_runtime.jsx)(PpErrorPageLink_PpErrorPageLink,PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},args),{},{linkType:"button",href:"https://promotions.haaretz.co.il",children:"לרכישה"})),PpErrorPageLink_stories={component:PpErrorPageLink_PpErrorPageLink,title:"Purchase/Atoms/PpErrorPageLink",args:{inlineStyle:{},styleExtend:[],linkType:"text",href:"https://www.haaretz.co.il/",children:"חזרה לעמוד הבית"},argTypes:{children:{control:{type:"text"}},styleExtend:{control:!1}},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};Overview.parameters=PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},Overview.parameters),{},{docs:PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},Overview.parameters?.docs),{},{source:PpErrorPageLink_stories_objectSpread({originalSource:"args => <PpErrorPageLink {...args} />"},Overview.parameters?.docs?.source)})}),Text.parameters=PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},Text.parameters),{},{docs:PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},Text.parameters?.docs),{},{source:PpErrorPageLink_stories_objectSpread({originalSource:"args => <PpErrorPageLink {...args} />"},Text.parameters?.docs?.source)})}),Button.parameters=PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},Button.parameters),{},{docs:PpErrorPageLink_stories_objectSpread(PpErrorPageLink_stories_objectSpread({},Button.parameters?.docs),{},{source:PpErrorPageLink_stories_objectSpread({originalSource:'args => <PpErrorPageLink {...args} linkType="button" href="https://promotions.haaretz.co.il">\n    לרכישה\n  </PpErrorPageLink>'},Button.parameters?.docs?.source)})})},"../../ds-atoms/s-button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-button/src/Button.tsx").ZP},"../../ds-atoms/s-htz-link/src/HtzLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__),console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const _excluded=["children","href","hrefAs","locale","prefetch","replace","scroll","shallow"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const HtzLink=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function HtzLinkComponent(_ref,forwardedRef){let{children=null,href,hrefAs,locale,prefetch,replace,scroll,shallow}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);if("string"!=typeof href&&!href.href)return console.warn('The "href" prop you passed <HtzLink /> is a "URL" object without an "href" field:',href,"\nOpting out of rendering the element"),console.trace(),null;if(function isNextLink(href){return"string"!=typeof href||!href.startsWith("http")}(href))return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3___default(),_objectSpread(_objectSpread({as:hrefAs,href,locale,prefetch,ref:forwardedRef,replace,scroll,shallow,legacyBehavior:!1},attrs),{},{children}));const url="string"==typeof href?href:href.href||void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",_objectSpread(_objectSpread({href:url,ref:forwardedRef},attrs),{},{children}))}));HtzLink.__docgenInfo={description:"",methods:[],displayName:"HtzLink",props:{children:{defaultValue:{value:"null",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=HtzLink;try{HtzLink.displayName="HtzLink",HtzLink.__docgenInfo={description:"",displayName:"HtzLink",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"]={docgenInfo:HtzLink.__docgenInfo,name:"HtzLink",path:"../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-htz-link/src/HtzLink.tsx").Z},"../../ds-atoms/s-text-link/src/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TextLinkButton,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),_haaretz_s_htz_link__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../ds-atoms/s-htz-link/src/index.ts");const _excluded=["children","inlineStyle","styleExtend"],_excluded2=["children","inlineStyle","styleExtend"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c_base={outlineWidth:"eGCNgh",textDecorationLine:"dLUwcr",textDecorationColor:"dDxYlR",textDecorationThickness:"bFIFQP",textUnderlineOffset:"cEqDEh",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",":hover":{color:"klOnSG"},":focus":{color:"bsfUtT"}},c_button={backgroundColor:"KqcXP"},TextLink=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function TextLink(_ref,ref){let{children=null,inlineStyle,styleExtend=[]}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_htz_link__WEBPACK_IMPORTED_MODULE_5__.Z,_objectSpread(_objectSpread({className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c_base,...styleExtend),style:inlineStyle,ref},attrs),{},{children}))}));TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{children:{defaultValue:{value:"null",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=TextLink,TextLinkButton=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function TextLinkButton(_ref2,ref){let{children=null,inlineStyle,styleExtend=[]}=_ref2,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,_excluded2);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",_objectSpread(_objectSpread({className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c_base,c_button,...styleExtend),style:inlineStyle,ref},attrs),{},{children}))}));TextLinkButton.__docgenInfo={description:"",methods:[],displayName:"TextLinkButton",props:{children:{defaultValue:{value:"null",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextLink(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextLink\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextLink styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-link/src/TextLink.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"../../ds-atoms/s-text-link/src/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}try{TextLinkButton.displayName="TextLinkButton",TextLinkButton.__docgenInfo={description:"",displayName:"TextLinkButton",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextLink(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextLink\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextLink styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-text-link/src/TextLink.tsx#TextLinkButton"]={docgenInfo:TextLinkButton.__docgenInfo,name:"TextLinkButton",path:"../../ds-atoms/s-text-link/src/TextLink.tsx#TextLinkButton"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-text-link/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-text-link/src/TextLink.tsx").Z},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
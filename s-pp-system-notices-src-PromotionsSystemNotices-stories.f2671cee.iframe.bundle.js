/*! For license information please see s-pp-system-notices-src-PromotionsSystemNotices-stories.f2671cee.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[8520],{"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PromotionsSystemNotices_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),src_PromotionsSystemNotices=__webpack_require__("../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"PromotionsSystemNotices"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PromotionsSystemNotices"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-promotions-system-notices"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s\n",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-promotions-system-notices": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PromotionsSystemNotices"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PromotionsSystemNotices from '@haaretz/s-promotions-system-notices';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"One or more short snippets of text notifying users of information they should be\naware of during the process of purchasing a subscription."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"purchase-atoms-promotionssystemnotices--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"})]})}const PromotionsSystemNotices_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const PromotionsSystemNotices_stories={component:src_PromotionsSystemNotices.Z,title:"Purchase/Atoms/PromotionsSystemNotices",args:{notices:["יש לך חוב להסדיר","אנא צור קשר עם שירות לקוחות","עוד סוג של התראה"],inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:PromotionsSystemNotices_doc}}},Overview=args=>__jsx(src_PromotionsSystemNotices.Z,args);Overview.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"args => (\n  <PromotionsSystemNotices {...args} />\n)"}},Overview.parameters);const __namedExportsOrder=["Overview"]},"../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsSystemNotice});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={color:"gjYftY",fontWeight:"jPzznp",textAlign:"kooHYa",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hJgbZA",lineHeight:"cLPvYH"},"@media all and (min-width:102em)":{fontSize:"krpnci",lineHeight:"dPBKZn"}};function PromotionsSystemNotice({notice}){return notice?__jsx("p",{className:(0,style9.Z)(c_base)},notice):null}try{PromotionsSystemNotice.displayName="PromotionsSystemNotice",PromotionsSystemNotice.__docgenInfo={description:"",displayName:"PromotionsSystemNotice",props:{notice:{defaultValue:null,description:"The text to render inside `<PromotionsSystemNotice>`",name:"notice",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx#PromotionsSystemNotice"]={docgenInfo:PromotionsSystemNotice.__docgenInfo,name:"PromotionsSystemNotice",path:"../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx#PromotionsSystemNotice"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsSystemNotices});const s_pp_system_notice_src=__webpack_require__("../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx").Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{notice:{defaultValue:null,description:"The text to render inside `<PromotionsSystemNotice>`",name:"notice",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notice/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../pp-atoms/s-pp-system-notice/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_base={marginTop:"cyerGB"};function PromotionsSystemNotices({notices}){return notices&&notices.length?__jsx("div",{className:(0,style9.Z)(c_base)},notices.map((notice=>__jsx(s_pp_system_notice_src,{notice,key:notice})))):null}try{PromotionsSystemNotices.displayName="PromotionsSystemNotices",PromotionsSystemNotices.__docgenInfo={description:"",displayName:"PromotionsSystemNotices",props:{notices:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsSystemNotices>`",name:"notices",required:!1,type:{name:"string[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx#PromotionsSystemNotices"]={docgenInfo:PromotionsSystemNotices.__docgenInfo,name:"PromotionsSystemNotices",path:"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx#PromotionsSystemNotices"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
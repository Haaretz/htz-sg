/*! For license information please see Breakpoints-stories-mdx.b0be080b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[1722],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../s-ds-stories/src/Breakpoints.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Breakpoints_stories});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),l_theme_shared_dist=__webpack_require__("../../theme/l-theme-shared/dist/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),__jsx=react.createElement;const classes_table={borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",fontFamily:"bnyhBV",marginTop:"EKhXX",tableLayout:"MPjSO",width:"cRUUAa"},classes_head={borderBottomColor:"fWjQS"},classes_rowHead={width:"lksDzB"},classes_cell={borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",paddingTop:"kMKXDC",paddingRight:"gcnSZS",paddingBottom:"jOeduE",paddingLeft:"hHZVWs",textAlign:"hgpJrQ"},classes_value={backgroundColor:"fozssY",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",fontFamily:"bZywAt",paddingTop:"kMKXDC",paddingRight:"cVJMrm",paddingBottom:"jOeduE",paddingLeft:"JxWnH",fontSize:"hmImpX",lineHeight:"bwFuZl"},widthbpNames=Object.keys(l_theme_shared_dist.oS),miscbpNames=Object.keys(l_theme_shared_dist.Vy);function Bps(_ref){let{isMisc=!1}=_ref;return isMisc?__jsx("table",{dir:"ltr",className:(0,style9.Z)(classes_table)},__jsx("thead",null,__jsx("tr",null,__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead,classes_head)},"Name"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"Value"))),__jsx("tbody",null,miscbpNames.map((bp=>__jsx("tr",{key:bp},__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead)},bp),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("code",{className:(0,style9.Z)(classes_value)},l_theme_shared_dist.Vy[bp]))))))):__jsx("table",{dir:"ltr",className:(0,style9.Z)(classes_table)},__jsx("thead",null,__jsx("tr",null,__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead,classes_head)},"Name"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"From"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"Until"))),__jsx("tbody",null,__jsx("tr",null,__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead)},"default"),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("code",{className:(0,style9.Z)(classes_value)},"-")),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("code",{className:(0,style9.Z)(classes_value)},l_theme_shared_dist.oS[widthbpNames[0]],"px"))),widthbpNames.map(((bp,i)=>{const nextBp=widthbpNames[i+1],from="".concat(l_theme_shared_dist.oS[bp],"px"),until=l_theme_shared_dist.oS[nextBp]?"".concat(l_theme_shared_dist.oS[nextBp]-1,"px"):"-";return __jsx("tr",{key:bp},__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead)},bp),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("code",{className:(0,style9.Z)(classes_value)},from)),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("code",{className:(0,style9.Z)(classes_value)},until)))}))))}try{Breakpoints.displayName="Breakpoints",Breakpoints.__docgenInfo={description:"",displayName:"Breakpoints",props:{isMisc:{defaultValue:{value:"false"},description:"",name:"isMisc",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/Breakpoints.tsx#Breakpoints"]={docgenInfo:Breakpoints.__docgenInfo,name:"Breakpoints",path:"../s-ds-stories/src/Breakpoints.tsx#Breakpoints"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Tokens/Breakpoints",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"breakpoints",children:"Breakpoints"}),"\n","\n","\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Tokens/Breakpoints"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Haaretz's responsive design employs a set of predefined width breakpoints and\nfeature queries. The idiomatic way to create media queries with them is by using\nthe ",(0,jsx_runtime.jsx)(_components.code,{children:"mq"})," function from ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/l-mq.macro"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import mq from '@haaretz/l-mq.macro';\n\nexport const qualifiedStyles = {\n  ...mq({\n    from: 'm',\n    until: 'xl',\n    misc: 'landscape',\n    value: {\n      // styles\n    },\n  }),\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"width-breakpoints",children:"Width Breakpoints"}),"\n",(0,jsx_runtime.jsx)(Bps,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"miscellaneous-breakpoints",children:"Miscellaneous Breakpoints"}),"\n",(0,jsx_runtime.jsx)(Bps,{isMisc:!0})]})}}};const Breakpoints_stories=componentMeta},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
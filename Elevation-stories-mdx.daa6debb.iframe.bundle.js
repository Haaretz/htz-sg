/*! For license information please see Elevation-stories-mdx.daa6debb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[83],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../s-ds-stories/src/Elevation.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Elevation_stories});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l_theme_shared_dist=__webpack_require__("../../theme/l-theme-shared/dist/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),SelectSite=__webpack_require__("../s-ds-stories/src/SelectSite.tsx"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const classes_table={borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",fontFamily:"bnyhBV",marginTop:"EKhXX",tableLayout:"MPjSO",width:"cRUUAa"},classes_head={borderBottomColor:"fWjQS"},classes_rowHead={width:"lksDzB"},classes_cell={borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",paddingTop:"bKjKUN",paddingRight:"gcnSZS",paddingBottom:"eayRfw",paddingLeft:"hHZVWs",textAlign:"hgpJrQ"},classes_value={backgroundColor:"fozssY",fontFamily:"bZywAt",paddingTop:"kMKXDC",paddingRight:"cVJMrm",paddingBottom:"jOeduE",paddingLeft:"JxWnH",fontSize:"hmImpX",lineHeight:"bwFuZl"},classes_example={borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",backgroundColor:"hXoEex",height:"dvPYPU",width:"kwVoFT"};function Elevations(_ref){let{site="htz"}=_ref;const{0:currentSite,1:setSite}=(0,react.useState)(site),siteElevations=l_theme_shared_dist.PB[currentSite];return __jsx(react.Fragment,null,__jsx(SelectSite.Z,{currentSite,setSite}),__jsx("table",{dir:"ltr",className:(0,style9.Z)(classes_table)},__jsx("thead",null,__jsx("tr",null,__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead,classes_head)},"Name"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"Value"),__jsx("th",{className:(0,style9.Z)(classes_cell,classes_head)},"Example"))),__jsx("tbody",null,Object.entries(siteElevations).map((_ref2=>{let[elevationLevel,elevationValue]=_ref2;const shadows="string"==typeof elevationValue?[elevationValue]:elevationValue.map((shadowValues=>{const{xOffset,yOffset,blur,opacity}=shadowValues;return"drop-shadow(".concat(xOffset,"px ").concat(yOffset,"px ").concat(blur,"px rgba(var(--c-shadow),").concat(opacity,"))")}));return __jsx("tr",{key:elevationLevel},__jsx("th",{className:(0,style9.Z)(classes_cell,classes_rowHead)},elevationLevel),__jsx("td",{className:(0,style9.Z)(classes_cell)},shadows.map(((shadowString,i)=>i===shadows.length-1?__jsx(ShadowString,{value:shadowString,key:shadowString}):__jsx(react.Fragment,{key:shadowString},__jsx(ShadowString,{value:shadowString}),__jsx("br",null))))),__jsx("td",{className:(0,style9.Z)(classes_cell)},__jsx("div",{className:(0,style9.Z)(classes_example),style:_objectSpread({filter:shadows.join(" ")},"flat"===elevationLevel?{backgroundColor:"rgb(var(--c-neutral200))"}:{})})))})))))}function ShadowString(_ref3){let{value=""}=_ref3;return __jsx("code",{className:(0,style9.Z)(classes_value)},value)}try{Elevation.displayName="Elevation",Elevation.__docgenInfo={description:"",displayName:"Elevation",props:{site:{defaultValue:{value:"htz"},description:"",name:"site",required:!1,type:{name:"enum",value:[{value:'"hdc"'},{value:'"htz"'},{value:'"tm"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/Elevation.tsx#Elevation"]={docgenInfo:Elevation.__docgenInfo,name:"Elevation",path:"../s-ds-stories/src/Elevation.tsx#Elevation"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Tokens/Elevations",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"elevations",children:"Elevations"}),"\n","\n","\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Tokens/Elevations"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Haaretz Design System uses shadow to create a sense of elevation and\nhierarchy within the UI."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To create a coherent experience, virtual light is always treated as if it comes\nfrom the top and directly in front, so that shadows are always cast with a\nconsistent light source, like in real life."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The idiomatic way to use elevation tokens is through the ",(0,jsx_runtime.jsx)(_components.code,{children:"shadow"})," function from\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/l-shadow.macro"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import shadow from '@haaretz/l-shadow.macro';\n\nexport const elevated = shadow('high');\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In order to create shadows that are smoother and more performant, the shadow of\neach elevation level multiple is actually made up of several ",(0,jsx_runtime.jsx)(_components.code,{children:"drop-shadow"}),"s (the\nSVG filter, not CSS ",(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow"}),"), each one with decreasing opacity and\nincreasing blur radius."]}),"\n",(0,jsx_runtime.jsx)(Elevations,{site:"htz"})]})}}};const Elevation_stories=componentMeta},"../s-ds-stories/src/SelectSite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SelectSite});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const src_isSite=function isSite(candidate){if(!candidate)return!1;if("string"!=typeof candidate)return!1;switch(candidate){case"htz":case"tm":case"hdc":return!0;default:return!1}};var __jsx=react.createElement;const c_fieldset={borderTopColor:"hJnbij",borderRightColor:"inkqsI",borderBottomColor:"iUJTlr",borderLeftColor:"itSVRh",borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",color:"hBVYrM",display:"gSBWlu",columnGap:"hmmyz",fontFamily:"lffHhj",paddingBottom:"dPFrWx",paddingLeft:"iDuqPI",paddingRight:"ftIldC",width:"efDQIp","@media all and (min-width:64em)":{fontSize:"jYpfGj",lineHeight:"dXCjGe"}},c_legend={borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",letterSpacing:"hzIFrK",marginInlineStart:"BkTRv",paddingTop:"kVZHcH",paddingRight:"cVJMrm",paddingBottom:"iATxZH",paddingLeft:"JxWnH",fontWeight:"iLdtFu"},c_input={appearance:"cBRpiW"},options=["htz","tm","hdc"];function SelectSite(_ref){let{currentSite,setSite}=_ref;return __jsx("form",{onChange:function handleChange(evt){const value=evt.target.value;src_isSite(value)&&setSite(value)},dir:"ltr"},__jsx("fieldset",{className:(0,style9.Z)(c_fieldset)},__jsx("legend",{className:(0,style9.Z)(c_legend)},"Select site"),options.map((siteName=>__jsx("label",{key:siteName},__jsx("input",{type:"radio",checked:currentSite===siteName,value:siteName,className:(0,style9.Z)(c_input),id:"method-radio--".concat(siteName)})," ".concat(siteName))))))}try{SelectSite.displayName="SelectSite",SelectSite.__docgenInfo={description:"",displayName:"SelectSite",props:{currentSite:{defaultValue:null,description:"",name:"currentSite",required:!0,type:{name:"enum",value:[{value:'"hdc"'},{value:'"htz"'},{value:'"tm"'}]}},setSite:{defaultValue:null,description:"",name:"setSite",required:!0,type:{name:"Dispatch<SetStateAction<Site>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/SelectSite.tsx#SelectSite"]={docgenInfo:SelectSite.__docgenInfo,name:"SelectSite",path:"../s-ds-stories/src/SelectSite.tsx#SelectSite"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[2346],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../s-ds-stories/src/Radii.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Radii_stories});var react=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),l_theme_shared_dist=__webpack_require__("../../theme/l-theme-shared/dist/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),SelectSite=__webpack_require__("../s-ds-stories/src/SelectSite.tsx");const classes={table:{borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",fontFamily:"bnyhBV",marginTop:"EKhXX",tableLayout:"MPjSO",width:"cRUUAa"},head:{borderBottomColor:"fWjQS"},rowHead:{width:"lksDzB"},cell:{borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"mZPxF",borderRightColor:"fCajuQ",borderBottomColor:"jywRBN",borderLeftColor:"fUryUI",paddingTop:"bKjKUN",paddingRight:"gcnSZS",paddingBottom:"eayRfw",paddingLeft:"hHZVWs",textAlign:"hgpJrQ"},value:{backgroundColor:"fozssY",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",fontFamily:"bZywAt",paddingTop:"kMKXDC",paddingRight:"cVJMrm",paddingBottom:"jOeduE",paddingLeft:"JxWnH",fontSize:"hmImpX",lineHeight:"bwFuZl"},example:{backgroundColor:"hMVSpm",height:"dvPYPU",width:"kwVoFT"}};function Radii(_ref){let{site="htz"}=_ref;const{0:currentSite,1:setSite}=(0,react.useState)(site),siteRadii=l_theme_shared_dist.radii[currentSite];return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(SelectSite.Z,{currentSite,setSite}),(0,jsx_runtime.jsxs)("table",{dir:"ltr",className:(0,style9.Z)(classes.table),children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{className:(0,style9.Z)(classes.cell,classes.rowHead,classes.head),children:"Name"}),(0,jsx_runtime.jsx)("th",{className:(0,style9.Z)(classes.cell,classes.head),children:"Value"}),(0,jsx_runtime.jsx)("th",{className:(0,style9.Z)(classes.cell,classes.head),children:"Example"})]})}),(0,jsx_runtime.jsx)("tbody",{children:Object.entries(siteRadii).map((_ref2=>{let[radiusName,radiusValue]=_ref2;const isCircle="circle"===radiusName,remValue="string"==typeof radiusValue&&radiusValue.endsWith("rem")?radiusValue:"",pxValue=!!remValue&&Number.parseFloat(remValue)*l_theme_shared_dist.DEFAULT_BROWSER_FONT_SIZE,value=`${radiusValue}${pxValue?` (${pxValue}px)`:""}`;return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{className:(0,style9.Z)(classes.cell,classes.rowHead),children:radiusName}),(0,jsx_runtime.jsx)("td",{className:(0,style9.Z)(classes.cell),children:(0,jsx_runtime.jsx)("code",{className:(0,style9.Z)(classes.value),children:value})}),(0,jsx_runtime.jsx)("td",{className:(0,style9.Z)(classes.cell),children:(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(classes.example),style:{borderRadius:radiusValue,width:isCircle?"2.5rem":void 0}})})]},radiusName)}))})]})]})}try{Radii.displayName="Radii",Radii.__docgenInfo={description:"",displayName:"Radii",props:{site:{defaultValue:{value:"htz"},description:"",name:"site",required:!1,type:{name:"enum",value:[{value:'"hdc"'},{value:'"htz"'},{value:'"tm"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/Radii.tsx#Radii"]={docgenInfo:Radii.__docgenInfo,name:"Radii",path:"../s-ds-stories/src/Radii.tsx#Radii"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"radii",children:"Radii"}),"\n","\n","\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Tokens/Radii"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Border radius tokens are used to give boxes a more subtle, rounded effect. They\nuse rem units so they scale with the base font size. The pixel values displayed\nare based on a 16px font size, which is the default in all modern browsers."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Using some CSS ",(0,jsx_runtime.jsx)(_components.code,{children:"min()"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"max()"})," functions trickery, the tokens also ensure\nthat elements automatically have a ",(0,jsx_runtime.jsx)(_components.code,{children:"border-radius"})," of ",(0,jsx_runtime.jsx)(_components.code,{children:"0"})," if they are the full\nwidth of the viewport."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The idiomatic way to use radius tokens is through the ",(0,jsx_runtime.jsx)(_components.code,{children:"radius"})," function from\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/l-radius.macro"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import radius from '@haaretz/l-radius.macro';\n\nexport const roundCorners = {\n  borderRadius: radius('medium'),\n};\n"})}),"\n",(0,jsx_runtime.jsx)(Radii,{site:"htz"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Tokens/Radii",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Radii_stories=componentMeta},"../s-ds-stories/src/SelectSite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SelectSite});var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js");const src_isSite=function isSite(candidate){if(!candidate)return!1;if("string"!=typeof candidate)return!1;switch(candidate){case"htz":case"tm":case"hdc":return!0;default:return!1}};var style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={fieldset:{borderTopColor:"hJnbij",borderRightColor:"inkqsI",borderBottomColor:"iUJTlr",borderLeftColor:"itSVRh",borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",color:"hBVYrM",display:"gSBWlu",columnGap:"hmmyz",fontFamily:"lffHhj",paddingBottom:"dPFrWx",paddingLeft:"iDuqPI",paddingRight:"ftIldC",width:"efDQIp","@media all and (min-width:64em)":{fontSize:"jYpfGj",lineHeight:"dXCjGe"}},legend:{borderTopLeftRadius:"dJnzRg",borderTopRightRadius:"gALPBo",borderBottomRightRadius:"hAAOrm",borderBottomLeftRadius:"hXmGrK",letterSpacing:"hzIFrK",marginInlineStart:"BkTRv",paddingTop:"kVZHcH",paddingRight:"cVJMrm",paddingBottom:"iATxZH",paddingLeft:"JxWnH",fontWeight:"iLdtFu"},input:{appearance:"cBRpiW"}},options=["htz","tm","hdc"];function SelectSite(_ref){let{currentSite,setSite}=_ref;return(0,jsx_runtime.jsx)("form",{onChange:function handleChange(evt){const value=evt.target.value;src_isSite(value)&&setSite(value)},dir:"ltr",children:(0,jsx_runtime.jsxs)("fieldset",{className:(0,style9.Z)(c.fieldset),children:[(0,jsx_runtime.jsx)("legend",{className:(0,style9.Z)(c.legend),children:"Select site"}),options.map((siteName=>(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",checked:currentSite===siteName,value:siteName,className:(0,style9.Z)(c.input),id:`method-radio--${siteName}`}),` ${siteName}`]},siteName)))]})})}try{SelectSite.displayName="SelectSite",SelectSite.__docgenInfo={description:"",displayName:"SelectSite",props:{currentSite:{defaultValue:null,description:"",name:"currentSite",required:!0,type:{name:"enum",value:[{value:'"hdc"'},{value:'"htz"'},{value:'"tm"'}]}},setSite:{defaultValue:null,description:"",name:"setSite",required:!0,type:{name:"Dispatch<SetStateAction<Site>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-ds-stories/src/SelectSite.tsx#SelectSite"]={docgenInfo:SelectSite.__docgenInfo,name:"SelectSite",path:"../s-ds-stories/src/SelectSite.tsx#SelectSite"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
/*! For license information please see Ripple-stories.4edfac36.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[6700],{"../../ds-atoms/s-ripple/src/Ripple.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Overview:()=>Overview,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Ripple_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_Ripple=__webpack_require__("../../ds-atoms/s-ripple/src/Ripple.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_6m24vuloj5ihw4zc5lbsktc4fu/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",a:"a",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"Ripple"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Ripple"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-ripple"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-ripple": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Ripple"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Ripple from '@haaretz/s-ripple';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"<Ripple>"})," component is used to indicate an action (e.g., tap or click) or\nstate change (e.g., gaining or losing focus). It uses a microanimation of a\ncircle expanding outward from an element as visual feedback for an action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A ",(0,jsx_runtime.jsx)(_components.code,{children:"<Ripple>"})," element must be wrapped by a positioned element to serve at its\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://mzl.la/3EaiA1I",children:(0,jsx_runtime.jsx)(_components.code,{children:"offsetParent"})}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<Ripple>"})," is a semi-controlled component, meaning, its state is controlled by a\nparent through the ",(0,jsx_runtime.jsx)(_components.code,{children:"expansionState"})," prop, and to which it communicates back\nchanges in its state using the ",(0,jsx_runtime.jsx)(_components.code,{children:"onPulseEnd"})," callback prop:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"const [rippleState, setRippleState] =\n  React.useState<RippleExpansion>('contracted');\n\nconst onClick = () => setRippleState('pulse');\n\n<Ripple expansionState={rippleState} onPulseEnd={setRippleState} />;\n"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-ripple--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The size of the ripple can be adjusted using the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop, which can be set\nto ",(0,jsx_runtime.jsx)(_components.code,{children:"small"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"medium"})," (the default) or ",(0,jsx_runtime.jsx)(_components.code,{children:"large"}),"."]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-ripple--small"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-ripple--medium"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-ripple--large"})]})]})}const Ripple_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Ripple_stories={component:src_Ripple.Z,title:"Atoms/Ripple",args:{inlineStyle:{},styleExtend:[],size:"medium"},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:Ripple_doc}}};function Wrapper({children}){const[rippleState,setRippleState]=react.useState("contracted");return __jsx("button",{onClick:()=>setRippleState("pulse"),style:{background:"none",border:"1px solid",aspectRatio:"1",padding:"2px",position:"relative",display:"inline-block",height:"2.75rem"}},children(rippleState,setRippleState))}const Overview=args=>__jsx(Wrapper,null,((rippleState,setRippleState)=>__jsx(react.Fragment,null,"Click",__jsx(src_Ripple.Z,(0,esm_extends.Z)({},args,{expansionState:rippleState,onPulseEnd:setRippleState}))))),Small=args=>__jsx(Wrapper,null,((rippleState,setRippleState)=>__jsx(react.Fragment,null,"S",__jsx(src_Ripple.Z,(0,esm_extends.Z)({},args,{size:"small",expansionState:rippleState,onPulseEnd:setRippleState}))))),Medium=args=>__jsx(Wrapper,null,((rippleState,setRippleState)=>__jsx(react.Fragment,null,"M",__jsx(src_Ripple.Z,(0,esm_extends.Z)({},args,{size:"medium",expansionState:rippleState,onPulseEnd:setRippleState}))))),Large=args=>__jsx(Wrapper,null,((rippleState,setRippleState)=>__jsx(react.Fragment,null,"L",__jsx(src_Ripple.Z,(0,esm_extends.Z)({},args,{size:"large",expansionState:rippleState,onPulseEnd:setRippleState})))));Overview.parameters=_objectSpread({storySource:{source:"args => (\n  <Wrapper>\n    {(rippleState, setRippleState) => (\n      <>\n        Click\n        <Ripple {...args} expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>\n    )}\n  </Wrapper>\n)"}},Overview.parameters),Small.parameters=_objectSpread({storySource:{source:'args => (\n  <Wrapper>\n    {(rippleState, setRippleState) => (\n      <>\n        S\n        <Ripple {...args} size="small" expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>\n    )}\n  </Wrapper>\n)'}},Small.parameters),Medium.parameters=_objectSpread({storySource:{source:'args => (\n  <Wrapper>\n    {(rippleState, setRippleState) => (\n      <>\n        M\n        <Ripple {...args} size="medium" expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>\n    )}\n  </Wrapper>\n)'}},Medium.parameters),Large.parameters=_objectSpread({storySource:{source:'args => (\n  <Wrapper>\n    {(rippleState, setRippleState) => (\n      <>\n        L\n        <Ripple {...args} size="large" expansionState={rippleState} onPulseEnd={setRippleState} />\n      </>\n    )}\n  </Wrapper>\n)'}},Large.parameters);const __namedExportsOrder=["Overview","Small","Medium","Large"]},"../../ds-atoms/s-ripple/src/Ripple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Ripple});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c={base:{"--scale":"frpakM",backgroundColor:"kcXJjy",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",left:"gpkvrq",opacity:"gOeSjL",pointerEvents:"eDssNQ",position:"bEvNbr",top:"gWNFme",transform:"iQwhDo",transitionDuration:"bMlzRK",transitionProperty:"fFNiPZ",transitionTimingFunction:"iaemGh",zIndex:"iYxGWt"},extraSmallSize:{paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI"},smallSize:{paddingTop:"icKiSN",paddingRight:"eeREmo",paddingBottom:"fZMRmg",paddingLeft:"hRjOno"},mediumSize:{paddingTop:"evejof",paddingRight:"ficYLN",paddingBottom:"fZuMrP",paddingLeft:"hAZelr"},largeSize:{paddingTop:"eTWfTD",paddingRight:"bjpAAw",paddingBottom:"jENALy",paddingLeft:"calZuD"},contracting:{opacity:"UXrzu",transitionDuration:"hxGPkc"},expanded:{"--scale":"FBwSk",opacity:"iaNtwv",transitionDuration:"eWLwSv"},pulse:{"--scale":"FBwSk",opacity:"UXrzu",transitionDuration:"eWLwSv"}},Ripple=react.forwardRef((function Ripple({size="medium",expansionState="contracted",onPulseEnd,inlineStyle,styleExtend=[]},ref){const sizeClass=`${size}Size`,onTransitionEnd=react.useCallback((()=>{["pulse","contracting"].includes(expansionState)&&onPulseEnd&&onPulseEnd("contracted")}),[expansionState,onPulseEnd]);return __jsx("div",{className:(0,style9.Z)(c.base,"expanded"===expansionState&&c.expanded,"contracting"===expansionState&&c.contracting,"pulse"===expansionState&&c.pulse,c[sizeClass],...styleExtend),style:inlineStyle,ref,onTransitionEnd})})),src_Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{size:{defaultValue:{value:"medium"},description:"The size of the ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"extraSmall"'}]}},expansionState:{defaultValue:{value:"contracted"},description:"Controls the ripple's state and animation.\n\n* **`contracted`:** is the off state, when the ripple is not visible.\n* **`expanded`:** shows the ripple at its full size.\n* **`contracting`:** animates the ripple from its full size to the off state.\n* **`pulse`:** animates the ripple from its off state to its full size, but\n  fade it out in the end.",name:"expansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},onPulseEnd:{defaultValue:null,description:"A callback that is executed when the ripple animation is over\nin the `pulse` and `contracting` states and indicates what\nshould the next `expansionState` be.\n\nCan be used to notifying controlling ascendant components that the ripple\nhas finished animating and they can change state if needed\n(mostly the state that controls the `expansionState` prop).",name:"onPulseEnd",required:!0,type:{name:'(nextState: "contracted" | "contracting" | "expanded" | "pulse" | undefined) => void'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRipple(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Ripple\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Ripple styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[8411],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../pp-molecules/s-pp-terms/src/PpTerms.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>PpTerms_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),src_PpTerms=__webpack_require__("../../pp-molecules/s-pp-terms/src/PpTerms.tsx"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.2.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"ppterms",children:"PpTerms"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"PpTerms"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-pp-terms"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pp-terms": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"PpTerms"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PpTerms from '@haaretz/s-pp-terms';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Purchase-page terms of purchase modal."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"purchase-molecules-ppterms--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}const PpTerms_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:src_PpTerms.Z,title:"Purchase/Molecules/PpTerms",args:{labelledBy:"purchase-terms",title:"תנאי רכישה",content:[{__typename:"HtmlNode",as:"p",content:'<strong class="#strong#">במסלול תשלום שנתי,</strong> העסקה היא מתמשכת עם הרכישה נגבה תשלום של 4.90 ש״ח בעבור החודש הראשון, ובחודש הבא 460 ש״ח (מחיר הטבה לשנה הראשונה) עבור יתרת השנה. החל מהשנה השנייה ואילך ייגבה בתחילת כל שנה תשלום בסך 490 ש״ח (תעריף נוכחי), החיסכון בשנה הראשונה הוא בהשוואה למחיר במסלול תשלום חודשי המפורדם באתר. אם יחול שינוי בתעריף, תישלח על כך הודעה מראש בדואר האלקטרוני.'},{__typename:"HtmlNode",as:"p",content:'<strong class="#strong#">במסלול תשלום חודשי,</strong> העסקה היא מתמשכת, והתשלום בסך 49 ש״ח (מחיר מחירון נוכחי) יגבה בכל חודש. אם יחול שינוי בתעריף, תישלח על כך הודעה מראש בדואר האלקטרוני.'}]},argTypes:{},parameters:{layout:"fullscreen",docs:{page:PpTerms_doc}}},Overview=args=>{const[isOpen,setIsOpen]=react.useState(args.isOpen||!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(src.ZP,{onClick:()=>setIsOpen(!isOpen),children:[isOpen?"Close":"Open"," Modal"]}),(0,jsx_runtime.jsx)(src_PpTerms.Z,_objectSpread(_objectSpread({},args),{},{isOpen,onToggle:setIsOpen}))]})},PpTerms_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},Overview.parameters?.docs),{},{source:_objectSpread({originalSource:"args => {\n  const [isOpen, setIsOpen] = React.useState(args.isOpen || false);\n  return <>\n      <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'} Modal</Button>\n      <PpTerms {...args} isOpen={isOpen} onToggle={setIsOpen} />\n    </>;\n}"},Overview.parameters?.docs?.source)})})},"../../ds-atoms/s-click-area/src/ClickArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pL:()=>DEFAULT_ELEMENT,Kx:()=>_ClickArea,ZP:()=>src_ClickArea});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts");const s_ripple_src=__webpack_require__("../../ds-atoms/s-ripple/src/Ripple.tsx").Z,_excluded=["as","children","disableRipple","inlineStyle","onClick","onFocus","onBlur","screenReaderText","size","rippleSize","styleExtend","rippleExpansionState"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c={base:{"--_size":"hdFffA",backgroundColor:"KqcXP",minHeight:"gbheqr",minWidth:"geazWn",position:"cjScYX",transform:"iTaucd",transitionDuration:"hxGPkc",transitionProperty:"PQKIY",":focus":{outlineStyle:"larHMv"},":active":{transform:"iNlVNY"}},extraSmallSize:{"--size":"jKtEpn"},smallSize:{"--size":"iJqbGP"},mediumSize:{"--size":"gSaMJF"},largeSize:{"--size":"dLAWNH"},disabled:{opacity:"iItPPl",":active":{transform:"hFTWVM"}}},DEFAULT_ELEMENT="button",ClickArea=react.forwardRef((function ClickArea(_ref,ref){let{as,children=null,disableRipple,inlineStyle,onClick:onClickProp,onFocus:onFocusProp,onBlur:onBlurProp,screenReaderText,size="medium",rippleSize,styleExtend=[],rippleExpansionState}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const[rippleState,setRippleState]=react.useState(rippleExpansionState||"contracted"),Element=as||DEFAULT_ELEMENT,isDisabled=isTruthyBooleanish(attrs["aria-disabled"])||isTruthyBooleanish(attrs.disabled),sizeClass=`${size}Size`;return(0,jsx_runtime.jsxs)(Element,_objectSpread(_objectSpread({},attrs),{},{className:(0,style9.Z)(c.base,c[sizeClass],isDisabled&&c.disabled,...styleExtend),style:inlineStyle,ref,onClick:isDisabled?void 0:evt=>{onClickProp&&onClickProp(evt),rippleExpansionState||setRippleState("pulse")},onFocus:isDisabled?void 0:evt=>{onFocusProp&&onFocusProp(evt),rippleExpansionState||setRippleState("expanded")},onBlur:isDisabled?void 0:evt=>{onBlurProp&&onBlurProp(evt),rippleExpansionState||setRippleState("contracting")},children:[disableRipple||isDisabled?null:(0,jsx_runtime.jsx)(s_ripple_src,{size:rippleSize,expansionState:rippleState,onPulseEnd:setRippleState}),screenReaderText?(0,jsx_runtime.jsx)(src.ZP,{children:screenReaderText}):null,children]}))}));ClickArea.__docgenInfo={description:"",methods:[],displayName:"ClickArea",props:{children:{defaultValue:{value:"null",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const src_ClickArea=ClickArea;function _ClickArea(_props){return null}function isTruthyBooleanish(value){return!0===value||"true"===value}try{_ClickArea.displayName="_ClickArea",_ClickArea.__docgenInfo={description:"",displayName:"_ClickArea",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<ClickArea>`",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"Size for the click area. also controls the the size of the Ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},screenReaderText:{defaultValue:null,description:"Text that will only be visible to screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},disableRipple:{defaultValue:null,description:"Prevent the ClickArea from emiting a ripple to indicate interactivity",name:"disableRipple",required:!1,type:{name:"boolean | undefined"}},rippleSize:{defaultValue:null,description:"Set the size of the ripple",name:"rippleSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},rippleExpansionState:{defaultValue:null,description:"Directly control the ripple state from the outside",name:"rippleExpansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyClickArea(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <ClickArea\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<ClickArea styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"]={docgenInfo:_ClickArea.__docgenInfo,name:"_ClickArea",path:"../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-click-area/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-click-area/src/ClickArea.tsx").ZP},"../../ds-atoms/s-ripple/src/Ripple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{"--scale":"frpakM",backgroundColor:"kcXJjy",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",left:"gpkvrq",opacity:"gOeSjL",pointerEvents:"eDssNQ",position:"bEvNbr",top:"gWNFme",transform:"iQwhDo",transitionDuration:"bMlzRK",transitionProperty:"fFNiPZ",transitionTimingFunction:"iaemGh",zIndex:"iYxGWt"},extraSmallSize:{paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI"},smallSize:{paddingTop:"icKiSN",paddingRight:"eeREmo",paddingBottom:"fZMRmg",paddingLeft:"hRjOno"},mediumSize:{paddingTop:"evejof",paddingRight:"ficYLN",paddingBottom:"fZuMrP",paddingLeft:"hAZelr"},largeSize:{paddingTop:"eTWfTD",paddingRight:"bjpAAw",paddingBottom:"jENALy",paddingLeft:"calZuD"},contracting:{opacity:"UXrzu",transitionDuration:"hxGPkc"},expanded:{"--scale":"FBwSk",opacity:"iaNtwv",transitionDuration:"eWLwSv"},pulse:{"--scale":"FBwSk",opacity:"UXrzu",transitionDuration:"eWLwSv"}},Ripple=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function Ripple(_ref,ref){let{size="medium",expansionState="contracted",onPulseEnd,inlineStyle,styleExtend=[]}=_ref;const sizeClass=`${size}Size`,onTransitionEnd=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((()=>{["pulse","contracting"].includes(expansionState)&&onPulseEnd&&onPulseEnd("contracted")}),[expansionState,onPulseEnd]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.base,"expanded"===expansionState&&c.expanded,"contracting"===expansionState&&c.contracting,"pulse"===expansionState&&c.pulse,c[sizeClass],...styleExtend),style:inlineStyle,ref,onTransitionEnd})}));Ripple.__docgenInfo={description:"",methods:[],displayName:"Ripple",props:{size:{defaultValue:{value:"'medium'",computed:!1},required:!1},expansionState:{defaultValue:{value:"'contracted'",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{size:{defaultValue:{value:"medium"},description:"The size of the ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"medium"'}]}},expansionState:{defaultValue:{value:"contracted"},description:"Controls the ripple's state and animation.\n\n* **`contracted`:** is the off state, when the ripple is not visible.\n* **`expanded`:** shows the ripple at its full size.\n* **`contracting`:** animates the ripple from its full size to the off state.\n* **`pulse`:** animates the ripple from its off state to its full size, but\n  fade it out in the end.",name:"expansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},onPulseEnd:{defaultValue:null,description:"A callback that is executed when the ripple animation is over\nin the `pulse` and `contracting` states and indicates what\nshould the next `expansionState` be.\n\nCan be used to notifying controlling ascendant components that the ripple\nhas finished animating and they can change state if needed\n(mostly the state that controls the `expansionState` prop).",name:"onPulseEnd",required:!0,type:{name:'(nextState: "contracted" | "contracting" | "expanded" | "pulse" | undefined) => void'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRipple(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Ripple\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Ripple styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[4143],{"../../pp-pages/s-pp-offers-page-hdc/src/components/OfferCard/OfferCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,WithNotice:()=>WithNotice,WithoutNotice:()=>WithoutNotice,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OfferCard_stories});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../utils/s-pp-storybook-providers/src/index.ts"),OfferCard_OfferCard=__webpack_require__("../../pp-pages/s-pp-offers-page-hdc/src/components/OfferCard/OfferCard.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_pu76jrox5ef7vkjrotgp34yn6i/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"OfferCard"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"OfferCard"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-offers-card"}),"\nlisted in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-offers-card": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"OfferCard"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import OfferCard from '@haaretz/s-offers-card';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Card containing info regarding the offer and the ability to purchase a\nsubscription"}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"OfferNotice"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"With or without notice."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--with-notice"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--without-notice"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"OfferTitle"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Either has the logo and the title of htz, tm or both htz and tm."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--htz-logo"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--tm-logo"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--htz-and-tm-logo"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"BenefitsHeading"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Can either be with or without the heading for the offer details."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--with-heading"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--without-heading"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Contracted"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The offer details as can either be collapsable or not."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--with-contracted"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"organisms-offercard--without-contracted"})})]})}const OfferCard_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},_excluded=["children"];var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const{decorators}=__webpack_require__("../../config/l-storybook-config/preview.js"),props={exclusive:"Annual Payments",productName:"Annual",line1Text:[{__typename:"HtmlNode",as:"p",content:'<strong class="#strong#">$1</strong>/first month',id:null}],line2Text:[{__typename:"HtmlNode",as:"p",content:"14$/month",id:null}],legalText:[],offerData:{periodCalc:12,prices:[1,2],productNumber:123,promotionNumber:1213,saleCode:123,thankYouMailTemplate:"123",contentId:"contentId",paymentType:"J4"},steps:[{__typename:"StepData",name:"offers"},{__typename:"StepData",name:"login"}]},OfferCard_stories={component:OfferCard_OfferCard.Z,title:"Organisms/OfferCard",args:_objectSpread({},props),argTypes:{offerNotice:{description:"Text to emphasize a special price"},offerTitle:{description:"The title and the logo by the subscription type"},cancelText:{description:"Text to inform the user that the subscription can be cancelled"},conditionsBtn:{description:"The terms of purchase"},benefitsItems:{description:"Details regarding the offer"},benefitsHeading:{description:"Heading for the offer details"},contracted:{description:"The ability to show the offer details as collapsable",control:"boolean"}},parameters:{docs:{page:OfferCard_doc}},decorators:[src.Z,...decorators]};function OfferCardWrapper(_ref){let{children}=_ref,args=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(OfferCard_OfferCard.Z,args)}const Overview=args=>__jsx(OfferCardWrapper,args),WithNotice=args=>__jsx(OfferCardWrapper,args),WithoutNotice=args=>__jsx(OfferCardWrapper,(0,esm_extends.Z)({},args,{exclusive:void 0}));Overview.parameters=_objectSpread({storySource:{source:"args => <OfferCardWrapper {...args} />"}},Overview.parameters),WithNotice.parameters=_objectSpread({storySource:{source:"args => <OfferCardWrapper {...args} />"}},WithNotice.parameters),WithoutNotice.parameters=_objectSpread({storySource:{source:"args => (\n  <OfferCardWrapper {...args} exclusive={undefined} />\n)"}},WithoutNotice.parameters);const __namedExportsOrder=["Overview","WithNotice","WithoutNotice"]},"../../ds-atoms/s-click-area/src/ClickArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pL:()=>DEFAULT_ELEMENT,Kx:()=>_ClickArea,ZP:()=>src_ClickArea});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts");const s_ripple_src=__webpack_require__("../../ds-atoms/s-ripple/src/Ripple.tsx").Z,_excluded=["as","children","disableRipple","inlineStyle","onClick","onFocus","onBlur","screenReaderText","size","rippleSize","styleExtend","rippleExpansionState"];var __jsx=react.createElement;const c={base:{"--_size":"hdFffA",backgroundColor:"KqcXP",minHeight:"gbheqr",minWidth:"geazWn",position:"cjScYX",transform:"iTaucd",transitionDuration:"hxGPkc",transitionProperty:"PQKIY",":focus":{outlineStyle:"larHMv"},":active":{transform:"iNlVNY"}},extraSmallSize:{"--size":"jKtEpn"},smallSize:{"--size":"iJqbGP"},mediumSize:{"--size":"gSaMJF"},largeSize:{"--size":"dLAWNH"},disabled:{opacity:"iItPPl",":active":{transform:"hFTWVM"}}},DEFAULT_ELEMENT="button",src_ClickArea=react.forwardRef((function ClickArea(_ref,ref){let{as,children=null,disableRipple,inlineStyle,onClick:onClickProp,onFocus:onFocusProp,onBlur:onBlurProp,screenReaderText,size="medium",rippleSize,styleExtend=[],rippleExpansionState}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const[rippleState,setRippleState]=react.useState(rippleExpansionState||"contracted"),Element=as||DEFAULT_ELEMENT,isDisabled=isTruthyBooleanish(attrs["aria-disabled"])||isTruthyBooleanish(attrs.disabled),sizeClass=`${size}Size`;return __jsx(Element,(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c.base,c[sizeClass],isDisabled&&c.disabled,...styleExtend),style:inlineStyle,ref,onClick:isDisabled?void 0:evt=>{onClickProp&&onClickProp(evt),rippleExpansionState||setRippleState("pulse")},onFocus:isDisabled?void 0:evt=>{onFocusProp&&onFocusProp(evt),rippleExpansionState||setRippleState("expanded")},onBlur:isDisabled?void 0:evt=>{onBlurProp&&onBlurProp(evt),rippleExpansionState||setRippleState("contracting")}}),disableRipple||isDisabled?null:__jsx(s_ripple_src,{size:rippleSize,expansionState:rippleState,onPulseEnd:setRippleState}),screenReaderText?__jsx(src.ZP,null,screenReaderText):null,children)}));function _ClickArea(_props){return null}function isTruthyBooleanish(value){return!0===value||"true"===value}try{_ClickArea.displayName="_ClickArea",_ClickArea.__docgenInfo={description:"",displayName:"_ClickArea",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<ClickArea>`",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"Size for the click area. also controls the the size of the Ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"extraSmall"'}]}},screenReaderText:{defaultValue:null,description:"Text that will only be visible to screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},disableRipple:{defaultValue:null,description:"Prevent the ClickArea from emiting a ripple to indicate interactivity",name:"disableRipple",required:!1,type:{name:"boolean | undefined"}},rippleSize:{defaultValue:null,description:"Set the size of the ripple",name:"rippleSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"extraSmall"'}]}},rippleExpansionState:{defaultValue:null,description:"Directly control the ripple state from the outside",name:"rippleExpansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyClickArea(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <ClickArea\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<ClickArea styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"]={docgenInfo:_ClickArea.__docgenInfo,name:"_ClickArea",path:"../../ds-atoms/s-click-area/src/ClickArea.tsx#_ClickArea"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-click-area/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-click-area/src/ClickArea.tsx").ZP},"../../ds-atoms/s-ripple/src/Ripple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Ripple});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.17.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c={base:{"--scale":"frpakM",backgroundColor:"kcXJjy",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",left:"gpkvrq",opacity:"gOeSjL",pointerEvents:"eDssNQ",position:"bEvNbr",top:"gWNFme",transform:"iQwhDo",transitionDuration:"bMlzRK",transitionProperty:"fFNiPZ",transitionTimingFunction:"iaemGh",zIndex:"iYxGWt"},extraSmallSize:{paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI"},smallSize:{paddingTop:"icKiSN",paddingRight:"eeREmo",paddingBottom:"fZMRmg",paddingLeft:"hRjOno"},mediumSize:{paddingTop:"evejof",paddingRight:"ficYLN",paddingBottom:"fZuMrP",paddingLeft:"hAZelr"},largeSize:{paddingTop:"eTWfTD",paddingRight:"bjpAAw",paddingBottom:"jENALy",paddingLeft:"calZuD"},contracting:{opacity:"UXrzu",transitionDuration:"hxGPkc"},expanded:{"--scale":"FBwSk",opacity:"iaNtwv",transitionDuration:"eWLwSv"},pulse:{"--scale":"FBwSk",opacity:"UXrzu",transitionDuration:"eWLwSv"}},Ripple=react.forwardRef((function Ripple({size="medium",expansionState="contracted",onPulseEnd,inlineStyle,styleExtend=[]},ref){const sizeClass=`${size}Size`,onTransitionEnd=react.useCallback((()=>{["pulse","contracting"].includes(expansionState)&&onPulseEnd&&onPulseEnd("contracted")}),[expansionState,onPulseEnd]);return __jsx("div",{className:(0,style9.Z)(c.base,"expanded"===expansionState&&c.expanded,"contracting"===expansionState&&c.contracting,"pulse"===expansionState&&c.pulse,c[sizeClass],...styleExtend),style:inlineStyle,ref,onTransitionEnd})})),src_Ripple=Ripple;try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{size:{defaultValue:{value:"medium"},description:"The size of the ripple.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"extraSmall"'}]}},expansionState:{defaultValue:{value:"contracted"},description:"Controls the ripple's state and animation.\n\n* **`contracted`:** is the off state, when the ripple is not visible.\n* **`expanded`:** shows the ripple at its full size.\n* **`contracting`:** animates the ripple from its full size to the off state.\n* **`pulse`:** animates the ripple from its off state to its full size, but\n  fade it out in the end.",name:"expansionState",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"contracted"'},{value:'"contracting"'},{value:'"expanded"'},{value:'"pulse"'}]}},onPulseEnd:{defaultValue:null,description:"A callback that is executed when the ripple animation is over\nin the `pulse` and `contracting` states and indicates what\nshould the next `expansionState` be.\n\nCan be used to notifying controlling ascendant components that the ripple\nhas finished animating and they can change state if needed\n(mostly the state that controls the `expansionState` prop).",name:"onPulseEnd",required:!0,type:{name:'(nextState: "contracted" | "contracting" | "expanded" | "pulse" | undefined) => void'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRipple(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Ripple\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Ripple styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"../../ds-atoms/s-ripple/src/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}}}]);
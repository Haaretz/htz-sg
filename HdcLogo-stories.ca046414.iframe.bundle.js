/*! For license information please see HdcLogo-stories.ca046414.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[5112],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-hdc-logo/src/HdcLogo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HdcLogo_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts");const _excluded=["a11yLabel","styleExtend"];var __jsx=react.createElement;const c={width:{width:"kPAZec"}};function HtzLogo(_ref){let{a11yLabel="Haaretz",styleExtend=[]}=_ref,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(src.Z,(0,esm_extends.Z)({icon:"hdc",a11yLabel,styleExtend:[c.width,...styleExtend]},restProps))}try{HdcLogo.displayName="HdcLogo",HdcLogo.__docgenInfo={description:"",displayName:"HdcLogo",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyIcon(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Icon\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Icon styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},variant:{defaultValue:null,description:"The color of the icon",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"inverse"'},{value:'"brandInverse"'}]}},focusable:{defaultValue:null,description:"Make the icon keyboard accessible",name:"focusable",required:!1,type:{name:"boolean | undefined"}},screenReaderText:{defaultValue:null,description:"Visually hidden text for screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},a11yLabel:{defaultValue:{value:"Haaretz"},description:"An A11Y label for the icon",name:"a11yLabel",required:!1,type:{name:"string | undefined"}},a11yDescription:{defaultValue:null,description:"An A11Y description for the icon",name:"a11yDescription",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-hdc-logo/src/HdcLogo.tsx#HdcLogo"]={docgenInfo:HdcLogo.__docgenInfo,name:"HdcLogo",path:"../../ds-atoms/s-hdc-logo/src/HdcLogo.tsx#HdcLogo"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const HdcLogo_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"hdclogo",children:"HdcLogo"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"HdcLogo"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-hdc-logo"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-hdc-logo": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"HdcLogo"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import HdcLogo from '@haaretz/s-hdc-logo';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Haaretz.com Logo"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The size of the logo can be controlled by setting 'font-size'."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-hdclogo--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n"]})}};var _Overview$parameters,_Overview$parameters2,_Overview$parameters3;react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Overview=args=>react.createElement(HtzLogo,args),HdcLogo_stories={component:HtzLogo,title:"Atoms/HdcLogo",args:{inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:HdcLogo_doc}}};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <HdcLogo {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters3=_Overview$parameters2.docs)||void 0===_Overview$parameters3?void 0:_Overview$parameters3.source)})});const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-icon/src/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Icon});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["a11yLabel","a11yDescription","variant","focusable","screenReaderText","icon","inlineStyle","styleExtend"];var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const c={base:{"--_icn-c":"hmHRXt","--_icn-c2":"hxvpkK",height:"jXmXEB",width:"hHGIsI"},inheritVariant:{"--_icn-dflt-c":"kbMSva"},brandVariant:{"--_icn-dflt-c":"fsJCwT"},brandInverseVariant:{"--_icn-dflt-c":"kgVBQo"},neutralVariant:{"--_icn-dflt-c":"jowrTv"},inverseVariant:{"--_icn-dflt-c":"edhiKO"},dangerVariant:{"--_icn-dflt-c":"iRFORO"},successVariant:{"--_icn-dflt-c":"kEwWGm"}},Icon=react.forwardRef((function Icon(_ref,ref){let{a11yLabel,a11yDescription,variant="inherit",focusable=!1,screenReaderText,icon,inlineStyle,styleExtend=[]}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const hasA11yText=a11yLabel||a11yDescription,descriptionId=react.useId(),a11yAttrs=hasA11yText?function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({"aria-label":a11yLabel},a11yDescription?{"aria-describedby":descriptionId}:{}):{"aria-hidden":!0,role:"img"},focusAttrs=focusable&&hasA11yText?{focusable:!0}:{focusable:!1,tabIndex:-1},desc=a11yDescription?__jsx("desc",{id:descriptionId},a11yDescription):null,variantClass="".concat(variant,"Variant");return!focusable||a11yDescription||a11yLabel||console.error('An "'.concat(icon,'" icon is set to be focusable but has no a11y label or description\n'),'The "focusable" attribute will not be assigned'),__jsx(react.Fragment,null,__jsx("svg",(0,esm_extends.Z)({ref,className:(0,style9.Z)(c.base,c[variantClass],...styleExtend),style:inlineStyle},focusAttrs,attrs,a11yAttrs),desc,__jsx("use",{xlinkHref:"#icn-".concat(icon)})),screenReaderText?__jsx(src.ZP,null,screenReaderText):null)})),src_Icon=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyIcon(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Icon\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Icon styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},icon:{defaultValue:null,description:"The icon to render",name:"icon",required:!0,type:{name:"enum",value:[{value:'"audio"'},{value:'"menu"'},{value:'"marker"'},{value:'"search"'},{value:'"play"'},{value:'"user"'},{value:'"Login"'},{value:'"Logout"'},{value:'"a11y"'},{value:'"alef"'},{value:'"android"'},{value:'"apple"'},{value:'"arrow-right"'},{value:'"audio-ff"'},{value:'"audio-rw"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"camera"'},{value:'"check"'},{value:'"chevron-bottom"'},{value:'"chevron-right"'},{value:'"close"'},{value:'"comments"'},{value:'"discover"'},{value:'"dislike"'},{value:'"edit"'},{value:'"facebook"'},{value:'"hdc"'},{value:'"headphones"'},{value:'"heart"'},{value:'"hide"'},{value:'"home"'},{value:'"htz"'},{value:'"like"'},{value:'"lock"'},{value:'"m"'},{value:'"mail"'},{value:'"microphone"'},{value:'"minus"'},{value:'"most-viewed"'},{value:'"pause"'},{value:'"phone"'},{value:'"playlist"'},{value:'"plus"'},{value:'"printer"'},{value:'"rss"'},{value:'"share"'},{value:'"show"'},{value:'"spotify"'},{value:'"star"'},{value:'"twitter"'},{value:'"warn"'},{value:'"whattsup"'},{value:'"zen"'},{value:'"zoom-in"'}]}},variant:{defaultValue:{value:"inherit"},description:"The color of the icon",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"inverse"'},{value:'"brandInverse"'}]}},a11yLabel:{defaultValue:null,description:"An A11Y label for the icon",name:"a11yLabel",required:!1,type:{name:"string | undefined"}},a11yDescription:{defaultValue:null,description:"An A11Y description for the icon",name:"a11yDescription",required:!1,type:{name:"string | undefined"}},focusable:{defaultValue:{value:"false"},description:"Make the icon keyboard accessible",name:"focusable",required:!1,type:{name:"boolean | undefined"}},screenReaderText:{defaultValue:null,description:"Visually hidden text for screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-icon/src/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../ds-atoms/s-icon/src/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-icon/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-icon/src/Icon.tsx").Z},"../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pL:()=>DEFAULT_ELEMENT,H6:()=>_VisuallyHidden,ZP:()=>src_VisuallyHidden});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["as","children","inlineStyle","isFocusable","styleExtend"];var __jsx=react.createElement;const classNames={base:{borderTopWidth:"glXlAQ",borderRightWidth:"ejfOAg",borderBottomWidth:"imuUWK",borderLeftWidth:"jePIQM",clip:"beEFvi",clipPath:"dbEoLb",height:"ktUKSC",marginTop:"jTjNVR",marginRight:"dIYdMf",marginBottom:"jjXZbq",marginLeft:"bmFLeF",overflowX:"dUvWpK",overflowY:"hRLVFh",paddingTop:"kVZHcH",paddingRight:"dwawJR",paddingBottom:"iATxZH",paddingLeft:"jQenOz",position:"bEvNbr",width:"JkHvI",whiteSpace:"bwVBMs",wordWrap:"gOKRJN",opacity:"UXrzu"},focusable:{":active":{clip:"kuytCZ",clipPath:"fbPfaP",height:"denmys",marginTop:"jnzTFi",marginRight:"jeOFPx",marginBottom:"eGVclN",marginLeft:"laFZyU",overflowX:"dEHlfP",overflowY:"biNehD",position:"izcesL",width:"fINNBL",whiteSpace:"enUJRt",opacity:"bZiUOO"},":focus":{clip:"ftGVOL",clipPath:"hVQFuO",height:"hivugc",marginTop:"drTIif",marginRight:"ffoFcR",marginBottom:"fZAKYa",marginLeft:"cFSbZy",overflowX:"kGSnZF",overflowY:"kHnbRw",position:"dAAEuD",width:"eckYoa",whiteSpace:"hTDTat",opacity:"hFxcLz"}}},DEFAULT_ELEMENT="span",src_VisuallyHidden=react.forwardRef((function VisuallyHidden(_ref,ref){let{as,children=null,inlineStyle,isFocusable,styleExtend=[]}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(as||DEFAULT_ELEMENT,(0,esm_extends.Z)({ref,className:(0,style9.Z)(classNames.base,isFocusable&&classNames.focusable,...styleExtend),style:inlineStyle},attrs),children)}));function _VisuallyHidden(_props){return null}try{_VisuallyHidden.displayName="_VisuallyHidden",_VisuallyHidden.__docgenInfo={description:"",displayName:"_VisuallyHidden",props:{children:{defaultValue:{value:"null"},description:"The content to hide inside `<VisuallyHidden>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyVisuallyHidden(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <VisuallyHidden\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},isFocusable:{defaultValue:null,description:"Should the element become visible when focused, e.g., skip links",name:"isFocusable",required:!1,type:{name:"true | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<VisuallyHidden styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx#_VisuallyHidden"]={docgenInfo:_VisuallyHidden.__docgenInfo,name:"_VisuallyHidden",path:"../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx#_VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-visually-hidden/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx").ZP},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
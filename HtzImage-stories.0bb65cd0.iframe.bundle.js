(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[6569],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-htz-image/src/HtzImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full:()=>Full,Headline:()=>Headline,Landscape:()=>Landscape,Overview:()=>Overview,Regular:()=>Regular,Square:()=>Square,Vertical:()=>Vertical,Wide:()=>Wide,default:()=>HtzImage_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),src_HtzImage=__webpack_require__("../../ds-atoms/s-htz-image/src/HtzImage.tsx"),lib=(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"htzimage",children:"HtzImage"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"HtzImage"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-htz-image"})," listed\nin its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-htz-image": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"HtzImage"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Image from '@haaretz/s-htz-image';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The Image component is an extension of the HTML ",(0,jsx_runtime.jsx)(_components.code,{children:"<img>"})," element, evolved for the\nmodern web. It includes a variety of built-in performance optimizations, such as\nlazy loading and preload. Generates a url to create an image with src, sizes and\nsrcset sutiable for our needs."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"aspects",children:"Aspects"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--full"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--landscape"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--headline"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--regular"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--square"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--vertical"}),(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-htzimage--wide"})]})]})}const HtzImage_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _Overview$parameters,_Overview$parameters2,_Full$parameters,_Full$parameters2,_Landscape$parameters,_Landscape$parameters2,_Headline$parameters,_Headline$parameters2,_Regular$parameters,_Regular$parameters2,_Square$parameters,_Square$parameters2,_Vertical$parameters,_Vertical$parameters2,_Wide$parameters,_Wide$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c_base={display:"gSBWlu",alignItems:"foGVKH",justifyContent:"IVbXa",flexDirection:"iMkoWi",rowGap:"iCOzzM"},Wrapper=function(args){return(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(c_base),children:[args.text&&(0,jsx_runtime.jsx)("h2",{children:args.text}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src_HtzImage.Z,_objectSpread({},args))})]})},meta={component:src_HtzImage.Z,title:"Atoms/HtzImage",args:{inlineStyle:{},styleExtend:[],imgData:{__typename:"ImageViewModel_ImageFile",crops:{__typename:"ImageCrops",headline:{__typename:"ImageCrop",height:323,width:556,x:0,y:176},landscape:{__typename:"ImageCrop",height:241,width:556,x:0,y:254},regular:{__typename:"ImageCrop",height:428,width:556,x:0,y:76},square:{__typename:"ImageCrop",height:556,width:556,x:0,y:0},vertical:{__typename:"ImageCrop",height:610,width:519,x:13,y:0},wide:{__typename:"ImageCrop",height:174,width:556,x:0,y:288}},height:610,path:"cc/73/bfcb88104195850d2667be348fe1/j2.PNG",width:556},aspect:"headline",widths:[680,600,487,293,408],sizes:[{from:"l",size:"314px"},{from:"s",size:"284px"},{from:"xl",size:"336px"},{size:"calc(50vw - 36px)"},{from:"m",size:"348px"},{from:"xxl",size:"380px"}],alt:"בית משפחתו של רעד חאזם במחנה הפליטים ג'נין, הבוקר",caption:"בית משפחתו של רעד חאזם במחנה הפליטים ג'נין, הבוקר",contentId:"00000183-82fd-d786-a9f3-f6ff5e3a0001",credit:"שימוש לפי סעיף 27א לחוק זכות יוצרים",type:"image"},argTypes:{styleExtend:{control:!1},priority:{control:"boolean"}},parameters:{docs:{page:HtzImage_doc}}},Overview=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"square"})),Full=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"full",text:"full"})),Landscape=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"landscape",text:"landscape"})),Headline=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"headline",text:"headline"})),Regular=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"regular",text:"regular"})),Square=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"square",text:"square"})),Vertical=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"vertical",text:"vertical"})),Wide=args=>(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},args),{},{aspect:"wide",text:"wide"})),HtzImage_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="square" />'},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),Full.parameters=_objectSpread(_objectSpread({},Full.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Full$parameters=Full.parameters)||void 0===_Full$parameters?void 0:_Full$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="full" text="full" />'},null===(_Full$parameters2=Full.parameters)||void 0===_Full$parameters2||null===(_Full$parameters2=_Full$parameters2.docs)||void 0===_Full$parameters2?void 0:_Full$parameters2.source)})}),Landscape.parameters=_objectSpread(_objectSpread({},Landscape.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Landscape$parameters=Landscape.parameters)||void 0===_Landscape$parameters?void 0:_Landscape$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="landscape" text="landscape" />'},null===(_Landscape$parameters2=Landscape.parameters)||void 0===_Landscape$parameters2||null===(_Landscape$parameters2=_Landscape$parameters2.docs)||void 0===_Landscape$parameters2?void 0:_Landscape$parameters2.source)})}),Headline.parameters=_objectSpread(_objectSpread({},Headline.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Headline$parameters=Headline.parameters)||void 0===_Headline$parameters?void 0:_Headline$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="headline" text="headline" />'},null===(_Headline$parameters2=Headline.parameters)||void 0===_Headline$parameters2||null===(_Headline$parameters2=_Headline$parameters2.docs)||void 0===_Headline$parameters2?void 0:_Headline$parameters2.source)})}),Regular.parameters=_objectSpread(_objectSpread({},Regular.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Regular$parameters=Regular.parameters)||void 0===_Regular$parameters?void 0:_Regular$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="regular" text="regular" />'},null===(_Regular$parameters2=Regular.parameters)||void 0===_Regular$parameters2||null===(_Regular$parameters2=_Regular$parameters2.docs)||void 0===_Regular$parameters2?void 0:_Regular$parameters2.source)})}),Square.parameters=_objectSpread(_objectSpread({},Square.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Square$parameters=Square.parameters)||void 0===_Square$parameters?void 0:_Square$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="square" text="square" />'},null===(_Square$parameters2=Square.parameters)||void 0===_Square$parameters2||null===(_Square$parameters2=_Square$parameters2.docs)||void 0===_Square$parameters2?void 0:_Square$parameters2.source)})}),Vertical.parameters=_objectSpread(_objectSpread({},Vertical.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Vertical$parameters=Vertical.parameters)||void 0===_Vertical$parameters?void 0:_Vertical$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="vertical" text="vertical" />'},null===(_Vertical$parameters2=Vertical.parameters)||void 0===_Vertical$parameters2||null===(_Vertical$parameters2=_Vertical$parameters2.docs)||void 0===_Vertical$parameters2?void 0:_Vertical$parameters2.source)})}),Wide.parameters=_objectSpread(_objectSpread({},Wide.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Wide$parameters=Wide.parameters)||void 0===_Wide$parameters?void 0:_Wide$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Wrapper {...args} aspect="wide" text="wide" />'},null===(_Wide$parameters2=Wide.parameters)||void 0===_Wide$parameters2||null===(_Wide$parameters2=_Wide$parameters2.docs)||void 0===_Wide$parameters2?void 0:_Wide$parameters2.source)})})},"../../config/l-storybook-config/wwwroot/public/configShim.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>configShim});const configShim_namespaceObject=JSON.parse('{"brightspot":"https://www.haaretz.co.il","gqlServer":"https://fake-graphql-server.haaretz.co.il/graphql","gqlServerCluster":"http://fake-graphql-server.haaretz.co.il/graphql","bIServer":"https://services.haaretz.co.il/ds","env":"prod","msConfirmation":"https://services.haaretz.co.il/ms-confirmation","msPurchaseUrl":"https://ms-purchase.haaretz.co.il","cookieGenerator":"http://cookie-generator.ms-app","personalization":"https://services.haaretz.co.il/personalization","appType":"site","GA4Key":"G-V6JW03P6HP","UAKey":"UA-589309-3"}'),configShim={getSafe(property){const keys=Array.isArray(property)?property:property.split(".");let key,value=configShim_namespaceObject;for(;keys.length;){if(null===value||"object"!=typeof value){value=void 0;break}key=keys.shift(),value=value[key]}return value},get(property){const keyPath=Array.isArray(property)?property.join("."):property,value=this.getSafe(property);if(void 0===value)throw new Error(`Configuration property "${keyPath}" is not defined`);return value},has(property){return null!=property&&void 0!==this.getSafe(property)}}},"../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"AmpStateContext",{enumerable:!0,get:function(){return AmpStateContext}});const AmpStateContext=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js")).default.createContext({})},"../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-mode.js":(__unused_webpack_module,exports)=>{"use strict";function isInAmpMode(param){let{ampFirst=!1,hybrid=!1,hasQuery=!1}=void 0===param?{}:param;return ampFirst||hybrid&&hasQuery}Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},"../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{defaultHead:function(){return defaultHead},default:function(){return _default}});const _interop_require_default=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_react=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js")),_sideeffect=_interop_require_default._(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/side-effect.js")),_ampcontextsharedruntime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js"),_headmanagercontextsharedruntime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js"),_ampmode=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-mode.js");__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js");function defaultHead(inAmpMode){void 0===inAmpMode&&(inAmpMode=!1);const head=[_react.default.createElement("meta",{charSet:"utf-8"})];return inAmpMode||head.push(_react.default.createElement("meta",{name:"viewport",content:"width=device-width"})),head}function onlyReactElement(list,child){return"string"==typeof child||"number"==typeof child?list:child.type===_react.default.Fragment?list.concat(_react.default.Children.toArray(child.props.children).reduce(((fragmentList,fragmentChild)=>"string"==typeof fragmentChild||"number"==typeof fragmentChild?fragmentList:fragmentList.concat(fragmentChild)),[])):list.concat(child)}const METATYPES=["name","httpEquiv","charSet","itemProp"];function reduceComponents(headChildrenElements,props){const{inAmpMode}=props;return headChildrenElements.reduce(onlyReactElement,[]).reverse().concat(defaultHead(inAmpMode).reverse()).filter(function unique(){const keys=new Set,tags=new Set,metaTypes=new Set,metaCategories={};return h=>{let isUnique=!0,hasKey=!1;if(h.key&&"number"!=typeof h.key&&h.key.indexOf("$")>0){hasKey=!0;const key=h.key.slice(h.key.indexOf("$")+1);keys.has(key)?isUnique=!1:keys.add(key)}switch(h.type){case"title":case"base":tags.has(h.type)?isUnique=!1:tags.add(h.type);break;case"meta":for(let i=0,len=METATYPES.length;i<len;i++){const metatype=METATYPES[i];if(h.props.hasOwnProperty(metatype))if("charSet"===metatype)metaTypes.has(metatype)?isUnique=!1:metaTypes.add(metatype);else{const category=h.props[metatype],categories=metaCategories[metatype]||new Set;"name"===metatype&&hasKey||!categories.has(category)?(categories.add(category),metaCategories[metatype]=categories):isUnique=!1}}}return isUnique}}()).reverse().map(((c,i)=>{const key=c.key||i;if(process.env.__NEXT_OPTIMIZE_FONTS&&!inAmpMode&&"link"===c.type&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((url=>c.props.href.startsWith(url)))){const newProps={...c.props||{}};return newProps["data-href"]=newProps.href,newProps.href=void 0,newProps["data-optimized-fonts"]=!0,_react.default.cloneElement(c,newProps)}return _react.default.cloneElement(c,{key})}))}const _default=function Head(param){let{children}=param;const ampState=(0,_react.useContext)(_ampcontextsharedruntime.AmpStateContext),headManager=(0,_react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);return _react.default.createElement(_sideeffect.default,{reduceComponentsToState:reduceComponents,headManager,inAmpMode:(0,_ampmode.isInAmpMode)(ampState)},children)};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/side-effect.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return SideEffect}});const _react=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js")),isServer="undefined"==typeof window,useClientOnlyLayoutEffect=isServer?()=>{}:_react.useLayoutEffect,useClientOnlyEffect=isServer?()=>{}:_react.useEffect;function SideEffect(props){const{headManager,reduceComponentsToState}=props;function emitChange(){if(headManager&&headManager.mountedInstances){const headElements=_react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));headManager.updateHead(reduceComponentsToState(headElements,props))}}var _headManager_mountedInstances;isServer&&(null==headManager||null==(_headManager_mountedInstances=headManager.mountedInstances)||_headManager_mountedInstances.add(props.children),emitChange());return useClientOnlyLayoutEffect((()=>{var _headManager_mountedInstances;return null==headManager||null==(_headManager_mountedInstances=headManager.mountedInstances)||_headManager_mountedInstances.add(props.children),()=>{var _headManager_mountedInstances;null==headManager||null==(_headManager_mountedInstances=headManager.mountedInstances)||_headManager_mountedInstances.delete(props.children)}})),useClientOnlyLayoutEffect((()=>(headManager&&(headManager._pendingUpdate=emitChange),()=>{headManager&&(headManager._pendingUpdate=emitChange)}))),useClientOnlyEffect((()=>(headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null),()=>{headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null)}))),null}},"../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=_=>{}},"../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head.js")},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}},"../../../node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{"use strict";function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);
/*! For license information please see parseButtonProps-stories-mdx.269e04c8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[2196],{"../../utils/s-parse-button-props/src/parseButtonProps.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>parseButtonProps_stories});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_pu76jrox5ef7vkjrotgp34yn6i/node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),__jsx=react.createElement;function ButtonProps({as,state="auto"}){return __jsx("div",{"aria-live":"busy"===state?"assertive":"off","data-element-type":as})}const StoryDemo=ButtonProps;try{ButtonProps.displayName="ButtonProps",ButtonProps.__docgenInfo={description:"",displayName:"ButtonProps",props:{as:{defaultValue:null,description:"The type of element or component to render the Button as\n@defaultValue 'button'",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"a"'},{value:'"button"'},{value:'"link"'},{value:'"Link"'}]}},state:{defaultValue:{value:"auto"},description:"Indicates the current state of the button and affects various A11Y-related attributes\n@defaultValue 'auto'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"auto"'},{value:'"busy"'}]}},isPressed:{defaultValue:null,description:"Indicates an on-off dual state, (similar to a toggle button)\ne.g., a `follow author`, the state of which needs to be conveyed\nto screen readers using the `aria-pressed` attribute\n@defaultValue undefined",name:"isPressed",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"The value of  button's type attribute. Ignored when `as` is not `button.`",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},style:{defaultValue:null,description:"Inline styles to pass to the underlying component. Will be augmented for A11Y",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../utils/s-parse-button-props/src/StoryDemo.tsx#ButtonProps"]={docgenInfo:ButtonProps.__docgenInfo,name:"ButtonProps",path:"../../utils/s-parse-button-props/src/StoryDemo.tsx#ButtonProps"})}catch(__react_docgen_typescript_loader_error){}var parseButtonProps=__webpack_require__("../../utils/s-parse-button-props/src/parseButtonProps.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"parseButtonProps"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n",(0,jsx_runtime.jsx)(esm.h_,{component:StoryDemo,title:"Utils/parseButtonProps",argTypes:{as:{control:!1,table:{defaultValue:{summary:parseButtonProps.pL}}}}}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"parseButtonProps"})," has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-parse-button-props"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-parse-button-props": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"parseButtonProps"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import parseButtonProps from '@haaretz/s-parse-button-props';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A utility function that takes props shared by all button and button-like\ncomponents, handles mutual A11Y concerns and returns an HTML attributes object\nto assign to the underlying HTML element in button components."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In the following example, we create a styled ",(0,jsx_runtime.jsx)(_components.code,{children:"<Button />"})," component:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import * as React from 'react';\nimport parseButtonProps from '@haaretz/s-parse-button-props';\n\nimport type { ButtonA11yProps } from '@haaretz/s-parse-button-props';\n\ninterface Props extends ButtonBaseProps {\n  variant: 'brand' | 'negative' | 'positive';\n  children?: React.ReactNode;\n}\n\nfunction Button({ variant, state = 'auto', isPressed, type, style}: Props) {\n  const attrs = parseButtonProps({ as: 'button', state, isPressed, type, style, });\n  const buttonStyle = doStuffWithVariantAndState(variant, state, attrs.style);\n\n  return <button style={buttonStyle} {...attrs}>;\n}\n"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utils/parseButtonProps",component:StoryDemo,argTypes:{as:{control:!1,table:{defaultValue:{summary:parseButtonProps.pL}}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const parseButtonProps_stories=componentMeta,__namedExportsOrder=["__page"]},"../../utils/s-parse-button-props/src/parseButtonProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pL:()=>DEFAULT_ELEMENT});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const _excluded=["as","state","isPressed"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const noPointerEvents={pointerEvents:"none"},DEFAULT_ELEMENT="button";const __WEBPACK_DEFAULT_EXPORT__=function parseButtonProps(props){const{as=DEFAULT_ELEMENT,state="auto",isPressed}=props,sharedAttrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_20_1_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded);if(sharedAttrs["aria-live"]="off","busy"!==state&&null==isPressed||(sharedAttrs["aria-live"]="assertive","busy"===state&&(sharedAttrs["aria-disabled"]="true")),["disabled","busy"].includes(state)&&(sharedAttrs.onClick=makeElementInert,sharedAttrs.onMouseDown=makeElementInert,sharedAttrs.onMouseUp=makeElementInert),null!=isPressed&&(sharedAttrs["aria-pressed"]=isPressed),"button"===as){const attrs=sharedAttrs;return attrs.type&&["submit","reset","button"].includes(attrs.type)||(attrs.type="button"),"disabled"===state&&(attrs.disabled=!0),attrs}delete sharedAttrs.type;const attrs=sharedAttrs;return"disabled"===state&&(attrs.tabIndex=-1,attrs.style=attrs.style?_objectSpread(_objectSpread({},attrs.style),noPointerEvents):noPointerEvents),attrs};function makeElementInert(evt){evt.preventDefault(),evt.stopPropagation(),"nativeEvent"in evt&&evt.nativeEvent.stopImmediatePropagation()}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})}}]);
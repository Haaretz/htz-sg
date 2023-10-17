"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[5858],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,DisabledButton:()=>DisabledButton,Invalid:()=>Invalid,Overview:()=>Overview,Required:()=>Required,default:()=>TextFieldwithButton_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),src_TextFieldwithButton=__webpack_require__("../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx"),lib=(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"textfieldwithbutton",children:"TextFieldwithButton"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldwithButton"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-text-field-with-button"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s\n",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-text-field-with-button": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldwithButton"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import TextFieldwithButton from '@haaretz/s-text-field-with-button';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Text Field with Button is a common pattern for single-field forms, which\ncomposes a ",(0,jsx_runtime.jsx)(_components.code,{children:"<TextField>"})," input and a ",(0,jsx_runtime.jsx)(_components.code,{children:"<Button>"}),". Props are generally passed down\nto the ",(0,jsx_runtime.jsx)(_components.code,{children:"<TextField>"}),", except for ",(0,jsx_runtime.jsx)(_components.code,{children:"btnContent"}),", which determines the content of\nthe button, ",(0,jsx_runtime.jsx)(_components.code,{children:"btnRef"}),", which is a reference to the html ",(0,jsx_runtime.jsx)(_components.code,{children:"button"})," element, and\n",(0,jsx_runtime.jsx)(_components.code,{children:"btnProps"}),", which is an object passed to the ",(0,jsx_runtime.jsx)(_components.code,{children:"<Button>"})," component as props."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For a more detailed documentation of the underlying components, see their pages."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-textfieldwithbutton--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-textfieldwithbutton--disabled"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"disabled-button",children:"Disabled Button"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-textfieldwithbutton--disabled-button"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"invalid",children:"Invalid"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-textfieldwithbutton--invalid"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Sending an empty textfield will invoke a required label, Nonetheless you can add\na Required attribute manually."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-textfieldwithbutton--required"})})]})}const TextFieldwithButton_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _Overview$parameters,_Overview$parameters2,_Disabled$parameters,_Disabled$parameters2,_DisabledButton$param,_DisabledButton$param2,_Invalid$parameters,_Invalid$parameters2,_Required$parameters,_Required$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const meta={component:src_TextFieldwithButton.P,title:"Molecules/TextFieldWithButton",args:{description:"אנא מלא את קוד הקופון",placeholder:"xxx xxxx xxxx xxx",label:"קוד קופון",btnContent:"שלח"},argTypes:{btnContent:{table:{category:"Button"}},btnProps:{table:{category:"Button"}},btnRef:{table:{category:"Button"}},label:{table:{category:"Input",subcategory:"Content"}},description:{table:{category:"Input",subcategory:"Content"}},placeholder:{description:"Input placeholder text",table:{category:"Input",subcategory:"Content"}},startIcon:{control:!1,table:{category:"Input",subcategory:"Content"}},endIcon:{control:!1,table:{category:"Input",subcategory:"Content"}},opaque:{control:"boolean",table:{category:"Input",subcategory:"Appearance"}},variant:{table:{category:"Input",subcategory:"Appearance"}},styleExtend:{control:!1,table:{category:"Input",subcategory:"Appearance"}},inlineStyle:{table:{category:"Input",subcategory:"Appearance"}},state:{table:{category:"Input",subcategory:"state"}},isInvalid:{control:"boolean",table:{category:"Input",subcategory:"state"}},required:{control:"boolean",table:{category:"Input",subcategory:"Pass-on props"}},type:{table:{category:"Input",subcategory:"Pass-on props"}},ref:{table:{category:"Input",subcategory:"Pass-on props"}},"...inputAttrs":{control:!1,description:"Html attributes passed to the underlying `input` element",table:{type:{summary:void 0},category:"Input",subcategory:"Pass-on props"}}},parameters:{docs:{page:TextFieldwithButton_doc}}},Overview=args=>(0,jsx_runtime.jsx)(src_TextFieldwithButton.Z,_objectSpread({},args)),Disabled=args=>(0,jsx_runtime.jsx)(src_TextFieldwithButton.Z,_objectSpread(_objectSpread({},args),{},{state:"disabled"})),DisabledButton=args=>(0,jsx_runtime.jsx)(src_TextFieldwithButton.Z,_objectSpread(_objectSpread({},args),{},{btnProps:{state:"disabled"}})),Invalid=args=>(0,jsx_runtime.jsx)(src_TextFieldwithButton.Z,_objectSpread(_objectSpread({},args),{},{isInvalid:!0})),Required=args=>(0,jsx_runtime.jsx)(src_TextFieldwithButton.Z,_objectSpread(_objectSpread({},args),{},{required:!0})),TextFieldwithButton_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextFieldWithButton {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:'args => <TextFieldWithButton {...args} state="disabled" />'},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})}),DisabledButton.parameters=_objectSpread(_objectSpread({},DisabledButton.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisabledButton$param=DisabledButton.parameters)||void 0===_DisabledButton$param?void 0:_DisabledButton$param.docs),{},{source:_objectSpread({originalSource:"args => <TextFieldWithButton {...args} btnProps={{\n  state: 'disabled'\n}} />"},null===(_DisabledButton$param2=DisabledButton.parameters)||void 0===_DisabledButton$param2||null===(_DisabledButton$param2=_DisabledButton$param2.docs)||void 0===_DisabledButton$param2?void 0:_DisabledButton$param2.source)})}),Invalid.parameters=_objectSpread(_objectSpread({},Invalid.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Invalid$parameters=Invalid.parameters)||void 0===_Invalid$parameters?void 0:_Invalid$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextFieldWithButton {...args} isInvalid />"},null===(_Invalid$parameters2=Invalid.parameters)||void 0===_Invalid$parameters2||null===(_Invalid$parameters2=_Invalid$parameters2.docs)||void 0===_Invalid$parameters2?void 0:_Invalid$parameters2.source)})}),Required.parameters=_objectSpread(_objectSpread({},Required.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Required$parameters=Required.parameters)||void 0===_Required$parameters?void 0:_Required$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextFieldWithButton {...args} required />"},null===(_Required$parameters2=Required.parameters)||void 0===_Required$parameters2||null===(_Required$parameters2=_Required$parameters2.docs)||void 0===_Required$parameters2?void 0:_Required$parameters2.source)})})},"../../ds-atoms/s-button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-button/src/Button.tsx").ZP},"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>_TextFieldWithButton,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_haaretz_s_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),_haaretz_s_formfield_description__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../ds-atoms/s-formfield-description/src/index.ts"),_haaretz_s_text_field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../ds-atoms/s-text-field/src/TextField.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const _excluded=["onClick","state","busyNotice","variant","styleExtend"],_excluded2=["inlineStyle","isInvalid","opaque","styleExtend","state","variant","required","description","isInvalidDescription","btnContent","btnProps","btnRef"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c={base:{display:"gSBWlu",flexDirection:"iMkoWi"},button:{flexGrow:"bcjLCN",transitionTimingFunction:"iaemGh",":active":{transformOrigin:"eFxeLn"},"@media all and (max-width:101.9375em)":{},"@media all and (min-width:102em)":{}},inputWithButton:{display:"gSBWlu"},input:{flexGrow:"iGDTOy",width:"fEmNDH"},disabledState:{opacity:"gOeSjL"}},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function TextFieldWithButton(_ref,ref){let{inlineStyle,isInvalid,opaque,styleExtend=[],state,variant,required:requiredProp,description,isInvalidDescription,btnContent,btnProps:{onClick:btnOnClick,state:btnState,busyNotice,variant:btnVariant,styleExtend:btnStyleExtend=[]}={},btnRef}=_ref,btnProps=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref.btnProps,_excluded),textFieldProps=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded2);const inputRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),[required,setRequired]=react__WEBPACK_IMPORTED_MODULE_2__.useState(!1);react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(ref,(()=>inputRef.current));const descriptionId=react__WEBPACK_IMPORTED_MODULE_2__.useId();if(isInvalid&&isInvalidDescription)throw new Error("both isInvalid and isInvaliDescription are set to true, if you want to control only the description you have to make sure isInvalid is set to false");const buttonState=isInvalid||"disabled"===state?"disabled":btnState,btnStateObjOverride="busy"===buttonState?{state:"busy",busyNotice}:{state:buttonState},buttonVariant=isInvalid?"danger":btnVariant,onButtonClick=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((evt=>{if(inputRef.current&&!inputRef.current.value.trim())return evt.preventDefault(),void(requiredProp||setRequired(!0));btnOnClick&&btnOnClick(evt)}),[btnOnClick,requiredProp]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_haaretz_s_text_field__WEBPACK_IMPORTED_MODULE_5__.DO,{inlineStyle,isInvalid,opaque,styleExtend:[c.base,...styleExtend],state,variant,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.inputWithButton),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_text_field__WEBPACK_IMPORTED_MODULE_5__.Nl,_objectSpread(_objectSpread({},textFieldProps),{},{describedBy:description&&descriptionId,hideBorder:"end",ref:inputRef,required:requiredProp||required,sharp:"end",state,styleExtend:[c.input]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_button__WEBPACK_IMPORTED_MODULE_6__.ZP,_objectSpread(_objectSpread(_objectSpread({},btnProps),btnStateObjOverride),{},{onClick:onButtonClick,ref:btnRef,sharp:"start",variant:buttonVariant,styleExtend:[c.button,"disabled"===state&&c.disabledState,...btnStyleExtend],children:btnContent}))]}),description?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_formfield_description__WEBPACK_IMPORTED_MODULE_7__.Z,{id:descriptionId,isInvalid:isInvalidDescription||isInvalid,variant,children:description}):null]})}));function _TextFieldWithButton(_props){return null}try{_TextFieldWithButton.displayName="_TextFieldWithButton",_TextFieldWithButton.__docgenInfo={description:"",displayName:"_TextFieldWithButton",props:{btnContent:{defaultValue:null,description:"The text of the button",name:"btnContent",required:!0,type:{name:"ReactNode"}},btnProps:{defaultValue:null,description:"A subset of the `ButtonProps` type from `@haaretz/s-button`\n(sans the ones irrelevant to this component).\nSee [the Button component](/?path=%2Fdocs%2Fatoms-button--overview) for more details.",name:"btnProps",required:!1,type:{name:"ButtonProps | undefined"}},btnRef:{defaultValue:null,description:"A reference to the button element",name:"btnRef",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},isInvalidDescription:{defaultValue:null,description:"Indicates if only the description should be invalid",name:"isInvalidDescription",required:!1,type:{name:"boolean | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},label:{defaultValue:null,description:"The input's label",name:"label",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},variant:{defaultValue:null,description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},startIcon:{defaultValue:null,description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Indicates if the input is required\n@defaultValue false",name:"required",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},opaque:{defaultValue:null,description:"Give input a solid opaque background\n@defaultValue false",name:"opaque",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"password"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#_TextFieldWithButton"]={docgenInfo:_TextFieldWithButton.__docgenInfo,name:"_TextFieldWithButton",path:"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#_TextFieldWithButton"})}catch(__react_docgen_typescript_loader_error){}try{TextFieldwithButton.displayName="TextFieldwithButton",TextFieldwithButton.__docgenInfo={description:"",displayName:"TextFieldwithButton",props:{btnContent:{defaultValue:null,description:"The text of the button",name:"btnContent",required:!0,type:{name:"ReactNode"}},btnProps:{defaultValue:null,description:"A subset of the `ButtonProps` type from `@haaretz/s-button`\n(sans the ones irrelevant to this component).\nSee [the Button component](/?path=%2Fdocs%2Fatoms-button--overview) for more details.",name:"btnProps",required:!1,type:{name:"ButtonProps | undefined"}},btnRef:{defaultValue:null,description:"A reference to the button element",name:"btnRef",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined"}},isInvalidDescription:{defaultValue:null,description:"Indicates if only the description should be invalid",name:"isInvalidDescription",required:!1,type:{name:"boolean | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\n\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyTextField(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <TextField\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<TextField styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},label:{defaultValue:null,description:"The input's label",name:"label",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"The input's functional state\n@defaultValue 'default'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"default"'}]}},variant:{defaultValue:null,description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},startIcon:{defaultValue:null,description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Indicates if the input is required\n@defaultValue false",name:"required",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Indicate the input is in an invalid state",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},opaque:{defaultValue:null,description:"Give input a solid opaque background\n@defaultValue false",name:"opaque",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"password"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#TextFieldwithButton"]={docgenInfo:TextFieldwithButton.__docgenInfo,name:"TextFieldwithButton",path:"../../ds-molecules/s-text-field-with-button/src/TextFieldwithButton.tsx#TextFieldwithButton"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
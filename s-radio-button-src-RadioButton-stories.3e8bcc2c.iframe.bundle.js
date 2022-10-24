/*! For license information please see s-radio-button-src-RadioButton-stories.3e8bcc2c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[7617],{"../../ds-atoms/s-radio-button/src/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Disabled:()=>Disabled,DisabledChecked:()=>DisabledChecked,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioButton_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),src_RadioButton=__webpack_require__("../../ds-atoms/s-radio-button/src/RadioButton.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"RadioButton"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"RadioButton"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-radio-button"}),"\nlisted in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-radio-button": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"RadioButton"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import RadioButton from '@haaretz/s-radio-button';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A presentational controlled component meant to allow users to select one of a\nlimited number of choices."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Should be used in conjunction with the ",(0,jsx_runtime.jsx)(_components.code,{children:"<RadioGroup>"})," component, which manages\nlogic and controls its descendant ",(0,jsx_runtime.jsx)(_components.code,{children:"<RadioButton>"}),"s."]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-radiobutton--overview"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-radiobutton--checked"})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Interactivity State"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Buttons, checked or unchecked, can be disabled by setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"state"})," prop to\n",(0,jsx_runtime.jsx)(_components.code,{children:'"disabled"'})]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-radiobutton--disabled"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-radiobutton--disabled-checked"})]})]})}const RadioButton_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const RadioButton_stories={component:src_RadioButton.ZP,title:"Atoms/RadioButton",args:{value:"choice1",name:"radio-button",state:void 0,children:"סוג מינוי",inlineStyle:{}},argTypes:{children:{description:"The text to display next to the radio button",control:{type:"text"},table:{category:"Content",type:{summary:"React.ReactNode"}}},name:{control:{type:"text"},description:"The name of the radio button. Should be identical between all input in the same radio group",table:{type:{summary:"string"}}},value:{control:{type:"text"}},checked:{defaultValue:!1,control:{type:"boolean"},table:{category:"State"}},state:{table:{category:"State"}},isRequired:{control:{type:"boolean"},table:{category:"State"}},styleExtend:{control:!1,table:{category:"Generic Props"}},inlineStyle:{table:{category:"Generic Props"}},ref:{control:!1,description:"`<RadioButton />` forwards refs to the underlying DOM element in order to expose it to its ascendant components",table:{category:"Pass-on Props",type:{summary:"React.ForwardedRef<T extends React.ElementType>"}}},"...attrs":{control:!1,description:"`<RadioButton />` will pass any additional prop to the underlying `input` element as attributes, in a type-safe manner",table:{category:"Pass-on Props",type:{summary:void 0}}}},parameters:{docs:{page:RadioButton_doc}}},Overview=args=>__jsx(src_RadioButton.ZP,args),Checked=args=>__jsx(src_RadioButton.ZP,(0,esm_extends.Z)({},args,{checked:!0,name:"test",value:"2"})),Disabled=args=>__jsx(src_RadioButton.ZP,(0,esm_extends.Z)({},args,{name:"test-disabled",state:"disabled",value:"1"})),DisabledChecked=args=>__jsx(src_RadioButton.ZP,(0,esm_extends.Z)({},args,{name:"test-disabled",state:"disabled",checked:!0,value:"2"}));Overview.parameters=_objectSpread({storySource:{source:"args => <RadioButton {...args} />"}},Overview.parameters),Checked.parameters=_objectSpread({storySource:{source:'args => (\n  <RadioButton {...args} checked name="test" value="2" />\n)'}},Checked.parameters),Disabled.parameters=_objectSpread({storySource:{source:'args => (\n  <RadioButton {...args} name="test-disabled" state="disabled" value="1" />\n)'}},Disabled.parameters),DisabledChecked.parameters=_objectSpread({storySource:{source:'args => (\n  <RadioButton {...args} name="test-disabled" state="disabled" checked={true} value="2" />\n)'}},DisabledChecked.parameters);const __namedExportsOrder=["Overview","Checked","Disabled","DisabledChecked"]},"../../ds-atoms/s-radio-button/src/RadioButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>src_RadioButton});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),src=__webpack_require__("../../hooks/s-use-radio-group-state/src/index.tsx");const _excluded=["children","inlineStyle","inputRef","styleExtend","onClick","onKeyDown","state"],_excluded2=["id","children","state"],_excluded3=["name","defaultChecked","labelledBy","isRequired","state","value"],_excluded4=["inlineStyle","checked","children","styleExtend","isRequired","state"];var __jsx=react.createElement;const c={wrapper:{"--bgc":"fZLKAi",alignItems:"foGVKH",columnGap:"haEjPJ",cursor:"jsvbrX",display:"jhKQav",position:"cjScYX",":hover":{"--bgc":"fdNzgY"},":focus-within":{"--bgc":"bbwlVK","--outline-wdth":"dUxYfZ","--outline-offst":"jHGNYW"}},input:{pointerEvents:"eDssNQ",touchAction:"eAoQVk",height:"edsxqC",opacity:"UXrzu",position:"bEvNbr",width:"lksDzB"},radioButton:{aspectRatio:"eUirwo",backgroundColor:"fIcjCT",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT",flexGrow:"bcjLCN",flexShrink:"hriXhD",outlineColor:"gTHOLO",outlineOffset:"gNTabI",outlineStyle:"gcyyum",outlineWidth:"bJaMpz",position:"cjScYX",transitionDuration:"gfbbeE",transitionProperty:"iRietU",transitionTimingFunction:"iaemGh",width:"bTRldR","@media all and (min-width:80em)":{width:"dFXptg"},"::after":{backgroundColor:"bYWkHA",borderTopLeftRadius:"iZcnBH",borderTopRightRadius:"glXHhV",borderBottomRightRadius:"kQHMoA",borderBottomLeftRadius:"goPOai",content:"fqXcHQ",height:"jUhBXr",left:"kevfEr",position:"dyMCpl",top:"dXSlMo",transform:"feNfPp",transitionDuration:"enlUTT",transitionProperty:"evmnbQ",transitionTimingFunction:"fkNSWz",width:"cswIzm"}},disabledStateButton:{opacity:"iItPPl"},disabledStateText:{opacity:"liwOE"},radioButtonChecked:{"::after":{height:"bdnNNc",width:"kzOJDL"}},disabled:{cursor:"kFEjTq"},label:{color:"kCxIXX",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}}},RadioButtonWrapper=react.forwardRef((function RadioButtonWrapper(_ref,ref){let{children,inlineStyle,inputRef,styleExtend=[],onClick,onKeyDown,state}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const isDisabled="disabled"===state;return __jsx("label",(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c.wrapper,isDisabled&&c.disabled,...styleExtend),style:inlineStyle,onClick,onKeyDown,ref}),children)})),RadioButtonText=react.forwardRef((function RadioButtonText(_ref2,ref){let{id,children,state}=_ref2,attrs=(0,objectWithoutProperties.Z)(_ref2,_excluded2);const isDisabled="disabled"===state;return __jsx("span",(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c.label,isDisabled&&c.disabledStateText),id,ref}),children)})),FauxRadioButton=react.forwardRef((function FauxRadioButton(_ref3,ref){let{name,defaultChecked,labelledBy,isRequired,state,value}=_ref3,attrs=(0,objectWithoutProperties.Z)(_ref3,_excluded3);const inputRef=react.useRef(null);react.useImperativeHandle(ref,(()=>inputRef.current));const isDisabled="disabled"===state,isChecked=!!attrs.checked,attrsOverride=function getAttrsOverride({labelledBy,state}){const attrsOverride={type:"radio"};labelledBy&&(attrsOverride["aria-labelledby"]=labelledBy);"disabled"===state&&(attrsOverride.tabIndex=void 0,attrsOverride.disabled=!0);return attrsOverride}({labelledBy,state});return name||console.error("<RadioButton>: the `name` prop is required for a radio button to work as expected. Either pass it directly or use a `<ButtonGrouop>`"),__jsx(react.Fragment,null,__jsx("input",(0,esm_extends.Z)({name},attrs,attrsOverride,{required:isRequired,className:(0,style9.Z)(c.input),defaultChecked,disabled:isDisabled,value,ref:inputRef})),__jsx("div",{"aria-hidden":"true",className:`${(0,style9.Z)(c.radioButton,isChecked&&c.radioButtonChecked,isDisabled&&c.disabled,isDisabled&&c.disabledStateButton)} ${attrs.className||""}`}))})),RadioButton=react.forwardRef((function RadioButton(_ref4,ref){let{inlineStyle,checked,children,styleExtend=[],isRequired:isRequiredProp,state:stateProp}=_ref4,attrs=(0,objectWithoutProperties.Z)(_ref4,_excluded4);const radioButtonId=react.useId(),labelId=react.useId(),inputRef=react.useRef(null),{checkedElement,firstRadioButton,isChecked,isRequired,name,onChange,tabIndex,state:stateFromGroup}=(0,src.Z)({checked,defaultChecked:attrs.defaultChecked,isRequired:isRequiredProp,input:inputRef.current}),state=stateProp||stateFromGroup,stateForSubComponents="disabled"===state?"disabled":void 0,wrapperOnClick=react.useCallback((evt=>{var _inputRef$current,_inputRef$current2;"read-only"===state&&(isChecked?null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.focus():checkedElement?checkedElement.focus():firstRadioButton?firstRadioButton.focus():null===(_inputRef$current2=inputRef.current)||void 0===_inputRef$current2||_inputRef$current2.focus());["disabled","read-only"].includes(state||"")&&evt.preventDefault()}),[checkedElement,firstRadioButton,isChecked,state]),wrapperOnKeyDown=react.useCallback((evt=>{const isMovementKey=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(evt.key),isSelectionKey=[" ","Enter","Spacebar"].includes(evt.key);"read-only"===state&&(isMovementKey||isSelectionKey)&&evt.preventDefault()}),[state]);return __jsx(RadioButtonWrapper,{style:inlineStyle,styleExtend,inputRef:ref||inputRef,onClick:wrapperOnClick,onKeyDown:wrapperOnKeyDown,state:stateForSubComponents},__jsx(FauxRadioButton,(0,esm_extends.Z)({},attrs,{checked:isChecked,isRequired,name:attrs.name||name,onChange,tabIndex,id:radioButtonId,labelledBy:labelId,state:stateForSubComponents,ref:ref||inputRef})),__jsx(RadioButtonText,{id:labelId,state:stateForSubComponents},children))})),src_RadioButton=RadioButton;try{RadioButtonWrapper.displayName="RadioButtonWrapper",RadioButtonWrapper.__docgenInfo={description:"",displayName:"RadioButtonWrapper",props:{inputRef:{defaultValue:null,description:"A refference to the `input` element that is rendered inside the wrapper.",name:"inputRef",required:!0,type:{name:"ForwardedRef<HTMLInputElement>"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},state:{defaultValue:null,description:"The functional state of the component.\n@defaultValue 'enabled'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-radio-button/src/RadioButton.tsx#RadioButtonWrapper"]={docgenInfo:RadioButtonWrapper.__docgenInfo,name:"RadioButtonWrapper",path:"../../ds-atoms/s-radio-button/src/RadioButton.tsx#RadioButtonWrapper"})}catch(__react_docgen_typescript_loader_error){}try{RadioButtonText.displayName="RadioButtonText",RadioButtonText.__docgenInfo={description:"",displayName:"RadioButtonText",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-radio-button/src/RadioButton.tsx#RadioButtonText"]={docgenInfo:RadioButtonText.__docgenInfo,name:"RadioButtonText",path:"../../ds-atoms/s-radio-button/src/RadioButton.tsx#RadioButtonText"})}catch(__react_docgen_typescript_loader_error){}try{FauxRadioButton.displayName="FauxRadioButton",FauxRadioButton.__docgenInfo={description:"",displayName:"FauxRadioButton",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},state:{defaultValue:null,description:"The functional state of the component.\n@defaultValue 'enabled'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'}]}},checked:{defaultValue:null,description:"Set the `checked` state of the radioButton or toggle.\n@defaultValue false",name:"checked",required:!1,type:{name:"boolean | undefined"}},labelledBy:{defaultValue:null,description:"An ID of the element describing the radioButton or toggle",name:"labelledBy",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"The value of the radio button when it is selected",name:"value",required:!0,type:{name:"NonNullable<string | number | readonly string[] | undefined>"}},isRequired:{defaultValue:null,description:"Mark the radio button as required",name:"isRequired",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-radio-button/src/RadioButton.tsx#FauxRadioButton"]={docgenInfo:FauxRadioButton.__docgenInfo,name:"FauxRadioButton",path:"../../ds-atoms/s-radio-button/src/RadioButton.tsx#FauxRadioButton"})}catch(__react_docgen_typescript_loader_error){}try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRadioButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RadioButton\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RadioButton styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},state:{defaultValue:null,description:"The functional state of the component.\n@defaultValue 'enabled'",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'}]}},isRequired:{defaultValue:null,description:"Mark the radio button as required",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},checked:{defaultValue:null,description:"Set the `checked` state of the radioButton or toggle.\n@defaultValue false",name:"checked",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"The value of the radio button when it is selected",name:"value",required:!0,type:{name:"NonNullable<string | number | readonly string[] | undefined>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-radio-button/src/RadioButton.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"../../ds-atoms/s-radio-button/src/RadioButton.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"../../hooks/s-use-radio-group-state/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>_useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__.w});var _useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx");const __WEBPACK_DEFAULT_EXPORT__=_useRadioGroupState__WEBPACK_IMPORTED_MODULE_0__.Z;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{checked:{defaultValue:null,description:"The `checked` state of the radioButton or toggle.\n@defaultValue undefined",name:"checked",required:!1,type:{name:"boolean | undefined"}},input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"HTMLInputElement | null"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../hooks/s-use-radio-group-state/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}try{RadioGroupContextProvider.displayName="RadioGroupContextProvider",RadioGroupContextProvider.__docgenInfo={description:"",displayName:"RadioGroupContextProvider",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, element: HTMLInputElement) => void) | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"enabled"'},{value:'"read-only"'}]}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},firstRadioButton:{defaultValue:null,description:"",name:"firstRadioButton",required:!1,type:{name:"HTMLInputElement | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/index.tsx#RadioGroupContextProvider"]={docgenInfo:RadioGroupContextProvider.__docgenInfo,name:"RadioGroupContextProvider",path:"../../hooks/s-use-radio-group-state/src/index.tsx#RadioGroupContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRadioGroupState,w:()=>RadioGroupContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const getRadioGroupContext=function contextFactory(){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});return function(){return Context}}();function RadioGroupContextProvider({children,defaultValue,firstRadioButton,isRequired,name,onChange,state}={}){const RadioGroupContext=getRadioGroupContext(),[groupChecked,setGroupChecked]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);if(null!=name){const hasCheckedInGroup=!!groupChecked;return __jsx(RadioGroupContext.Provider,{value:{defaultValue,firstRadioButton,groupChecked,hasCheckedInGroup,isRequired,name,onChange,setGroupChecked,state}},children)}return __jsx(RadioGroupContext.Provider,{value:{}},children)}function useRadioGroupState({checked,defaultChecked,input,isRequired:isRequiredProp,onChange:onChangeFromProp}){var _input$value;const RadioGroupContext=getRadioGroupContext(),{defaultValue,firstRadioButton,groupChecked,hasCheckedInGroup,isRequired:isRequiredFromGroup,name,onChange:onGroupChange,setGroupChecked,state}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RadioGroupContext),value=null!==(_input$value=null==input?void 0:input.value)&&void 0!==_input$value?_input$value:void 0,groupCheckedValue=groupChecked&&groupChecked[0],isChecked=void 0!==checked?checked:!hasCheckedInGroup&&(null!=groupCheckedValue&&!!value&&groupCheckedValue===value||(null==defaultValue&&defaultChecked||value&&defaultValue===value))||!!groupChecked&&!!value&&groupCheckedValue===value,tabIndex=isChecked?0:hasCheckedInGroup?-1:!(!input||input!==firstRadioButton)?0:-1,onChange=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((evt=>{setGroupChecked&&setGroupChecked([evt.currentTarget.value,evt.currentTarget]),"function"==typeof onChangeFromProp&&onChangeFromProp(evt),onGroupChange&&onGroupChange(evt.currentTarget.value,evt.currentTarget)}),[onChangeFromProp,onGroupChange,setGroupChecked]);return{checkedElement:groupChecked&&groupChecked[1],firstRadioButton,isChecked,isRequired:null!=isRequiredProp?isRequiredProp:isRequiredFromGroup,name,onChange,tabIndex,state}}try{RadioGroupContextProvider.displayName="RadioGroupContextProvider",RadioGroupContextProvider.__docgenInfo={description:"",displayName:"RadioGroupContextProvider",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, element: HTMLInputElement) => void) | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"enabled"'},{value:'"read-only"'}]}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},firstRadioButton:{defaultValue:null,description:"",name:"firstRadioButton",required:!1,type:{name:"HTMLInputElement | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#RadioGroupContextProvider"]={docgenInfo:RadioGroupContextProvider.__docgenInfo,name:"RadioGroupContextProvider",path:"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#RadioGroupContextProvider"})}catch(__react_docgen_typescript_loader_error){}try{useRadioGroupState.displayName="useRadioGroupState",useRadioGroupState.__docgenInfo={description:"",displayName:"useRadioGroupState",props:{checked:{defaultValue:null,description:"The `checked` state of the radioButton or toggle.\n@defaultValue undefined",name:"checked",required:!1,type:{name:"boolean | undefined"}},input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"HTMLInputElement | null"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#useRadioGroupState"]={docgenInfo:useRadioGroupState.__docgenInfo,name:"useRadioGroupState",path:"../../hooks/s-use-radio-group-state/src/useRadioGroupState.tsx#useRadioGroupState"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
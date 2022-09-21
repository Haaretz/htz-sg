"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[9708],{"../../ds-atoms/s-formfield-description/src/FormfieldDescription.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InvalidSate:()=>InvalidSate,InverseVariant:()=>InverseVariant,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormfieldDescription_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs"),FormfieldDescription=__webpack_require__("../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_ir3quccc6i62x6qn6jjhyjjiey/node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FormfieldDescriptionTemplate=args=>(0,esm.kt)(FormfieldDescription.Z,_extends({},args,{mdxType:"FormfieldDescription"}));FormfieldDescriptionTemplate.displayName="FormfieldDescriptionTemplate";const layoutProps={FormfieldDescriptionTemplate};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"formfielddescription"},"FormfieldDescription"),(0,esm.kt)("br",null),(0,esm.kt)("h2",{id:"installation"},"Installation"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Make sure the package you use ",(0,esm.kt)("inlineCode",{parentName:"strong"},"FormfieldDescription")," in has\n",(0,esm.kt)("inlineCode",{parentName:"strong"},"@haaretz/s-formfield-description")," listed in its ",(0,esm.kt)("inlineCode",{parentName:"strong"},"package.json"),"'s ",(0,esm.kt)("inlineCode",{parentName:"strong"},"dependencies"),"\nfield:")),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-formfield-description": "workspace:*"\n    // ...\n  }\n}\n')),(0,esm.kt)("p",null,"Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,esm.kt)("inlineCode",{parentName:"p"},"FormfieldDescription")," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,esm.kt)("inlineCode",{parentName:"p"},"import/no-unresolved")," eslint error when trying to import it when it is not\nlisted as a dependency."),(0,esm.kt)("p",null,"You can then import it like this:"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},"import FormfieldDescription from '@haaretz/s-formfield-description';\n")),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"A reusable component for describing and presenting error messages in form\nelements which handles styling and accessibility."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"atoms-formfielddescription--overview",mdxType:"Story"})),(0,esm.kt)("h3",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{story:"^",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"invalid-state"},"Invalid State"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"isInvalid")," prop is used to indicate that the input the description is\nattached to is in an invalid state. This will change the styling of the text and\nhandle announcing it as an error to screen readers and other assistive tech."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"atoms-formfielddescription--invalid-sate",mdxType:"Story"})),(0,esm.kt)("h2",{id:"variants"},"Variants"),(0,esm.kt)("p",null,"The inverse variant should be used when placing the ",(0,esm.kt)("inlineCode",{parentName:"p"},"<FormfieldDescription>"),"s\nover backgrounds that would make them illegible due to insufficient contrast\n(dark backgrounds in light mode and light backgrounds in dark mode)."),(0,esm.kt)(dist_esm.Xz,{withToolbar:!0,mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{id:"atoms-formfielddescription--inverse-variant",mdxType:"Story"})))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c_inverseBackground={backgroundColor:"jqziMX",paddingTop:"jWWtke",paddingRight:"cVJMrm",paddingBottom:"bnHxUw",paddingLeft:"JxWnH"},FormfieldDescription_stories={component:FormfieldDescription.Z,title:"Atoms/FormfieldDescription",args:{id:void 0,children:"תאור קצר של שדה טופס",variant:void 0,isInvalid:void 0,inlineStyle:{}},argTypes:{children:{control:{type:"text"}},styleExtend:{control:!1},isInvalid:{control:"boolean"},ref:{control:!1,description:"`<FormfieldDescription />` forwards refs to the underlying DOM element in order to expose it to its ascendant components",table:{type:{summary:"React.ForwardedRef<T extends React.ElementType>"}}},"...attrs":{control:!1,description:"`<FormfieldDescriptionProps />` will pass any additional prop to the underlying div element as attributes.",table:{type:{summary:void 0}}}},parameters:{docs:{page:MDXContent}}},Overview=args=>__jsx(FormfieldDescription.Z,(0,esm_extends.Z)({},args,{id:"overview"})),InvalidSate=args=>__jsx(FormfieldDescription.Z,(0,esm_extends.Z)({},args,{id:"invalid-state",isInvalid:!0}));const InverseVariant=args=>__jsx(FormfieldDescription.Z,(0,esm_extends.Z)({},args,{id:"variant-inverse",variant:"inverse"}));InverseVariant.decorators=[function backgroundDecorator(StoryToDecorate,context){const{viewMode,id}=context,waitTime="story"===viewMode?0:500,classes=(0,style9.Z)(c_inverseBackground).split(" ");return setTimeout((()=>{let storyContainer=document.documentElement;if("docs"===viewMode){const storyElement=document.getElementById(`story--${id}`);storyContainer=null==storyElement?void 0:storyElement.closest(".docs-story")}storyContainer&&(storyContainer.style.backgroundColor="",storyContainer.classList.add(...classes))}),waitTime),__jsx(StoryToDecorate,null)}],Overview.parameters=_objectSpread({storySource:{source:'args => (\n  <FormfieldDescription {...args} id="overview" />\n)'}},Overview.parameters),InvalidSate.parameters=_objectSpread({storySource:{source:'args => (\n  <FormfieldDescription {...args} id="invalid-state" isInvalid />\n)'}},InvalidSate.parameters),InverseVariant.parameters=_objectSpread({storySource:{source:'args => (\n  <FormfieldDescription {...args} id="variant-inverse" variant="inverse" />\n)'}},InverseVariant.parameters);const __namedExportsOrder=["Overview","InvalidSate","InverseVariant"]},"../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_FormfieldDescription});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs");const _excluded=["children","id","inlineStyle","isInvalid","styleExtend","variant"];var __jsx=react.createElement;const c={base:{color:"koPyoH",marginTop:"iqhvfj",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},isInvalid:{"--clr":"dtWzvY"},hidden:{display:"fcXWHl"},defaultVariant:{"--clr":"hneilo"},inverseVariant:{"--clr":"fVxgiL","--err":"dFKLrR"}},FormfieldDescription=react.forwardRef((function FormfieldDescription(_ref,ref){let{children,id,inlineStyle,isInvalid,styleExtend=[],variant="default"}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const variantClass=`${variant}Variant`;return __jsx("div",(0,esm_extends.Z)({ref,"aria-live":isInvalid?"off":"assertive",role:isInvalid?"alert":void 0},attrs,{id,className:(0,style9.Z)(c.base,c[variantClass],isInvalid&&c.isInvalid,...styleExtend),style:inlineStyle}),children)})),src_FormfieldDescription=FormfieldDescription;try{FormfieldDescription.displayName="FormfieldDescription",FormfieldDescription.__docgenInfo={description:"",displayName:"FormfieldDescription",props:{children:{defaultValue:null,description:"The description or error message to render",name:"children",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:{value:"default"},description:"Sets the basic visual appearance of the input.\n@defaultValue 'default'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"inverse"'}]}},id:{defaultValue:null,description:"The ID attribute attached to the element",name:"id",required:!0,type:{name:"string"}},isInvalid:{defaultValue:null,description:"Indicate the description is an error message",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyFormfieldDescription(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <FormfieldDescription\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<FormfieldDescription styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx#FormfieldDescription"]={docgenInfo:FormfieldDescription.__docgenInfo,name:"FormfieldDescription",path:"../../ds-atoms/s-formfield-description/src/FormfieldDescription.tsx#FormfieldDescription"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.0/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
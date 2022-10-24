/*! For license information please see s-layout-container-src-LayoutContainer-stories.4d5c7094.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[5023],{"../../ds-atoms/s-layout-container/src/LayoutContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{As:()=>As,BackgroundColor:()=>BackgroundColor,Bleed:()=>Bleed,BleedToSingleSide:()=>BleedToSingleSide,ChildSpacing:()=>ChildSpacing,Gutter:()=>Gutter,Overview:()=>Overview,StyleComposition:()=>StyleComposition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutContainer_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js");const _excluded=["as","bgc","children","inlineStyle","childSpacing","styleExtend"];var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const classNames_base={"--contentWidth":"AaQVF","--LayoutContainerGutter":"fZqkIO","--inlineMargin":"iiWdGh","--_lcbgc":"gfwYfV",backgroundColor:"bZhsMg",display:"kbCXHY",gridTemplateColumns:"cRrrqM",rowGap:"gJhpvu",width:"cRUUAa","@media all and (min-width:37.5em) and (max-width:47.9375em)":{"--contentWidth":"bOJATL","--LayoutContainerGutter":"glFmOE",rowGap:"hBEtUR"},"@media all and (min-width:48em) and (max-width:63.9375em)":{"--contentWidth":"bwgSsv","--LayoutContainerGutter":"iWxHnZ",rowGap:"eZBYXB"},"@media all and (min-width:64em) and (max-width:79.9375em)":{"--contentWidth":"jJQtMM","--LayoutContainerGutter":"hAOfjT",rowGap:"djUFJS"},"@media all and (min-width:80em) and (max-width:101.9375em)":{"--contentWidth":"EozEF","--LayoutContainerGutter":"dOIBSz",rowGap:"lmjPOP"},"@media all and (min-width:102em)":{"--contentWidth":"fXDMoc","--LayoutContainerGutter":"hzVbVG",rowGap:"hmSCJu"}},DEFAULT_ELEMENT="div";function LayoutContainer(props){const{as=DEFAULT_ELEMENT,bgc,children=null,inlineStyle,childSpacing,styleExtend=[]}=props,attrs=(0,objectWithoutProperties.Z)(props,_excluded),Element=as,backgroundColor=bgc?{"--_lcbgc":`var(--LayoutContainerBackgroundColor, ${bgc})`}:{},spacingVars={};if(childSpacing)for(const bp of Object.keys(childSpacing)){const value=childSpacing[bp];value&&(spacingVars[`--childSpacing${bp[0].toUpperCase()+bp.slice(1)}`]=value)}return __jsx(Element,(0,esm_extends.Z)({className:(0,style9.Z)(classNames_base,...styleExtend),style:_objectSpread(_objectSpread(_objectSpread({},backgroundColor),spacingVars),inlineStyle)},attrs),children)}try{LayoutContainer.displayName="LayoutContainer",LayoutContainer.__docgenInfo={description:"",displayName:"LayoutContainer",props:{as:{defaultValue:null,description:"The HTML element (`string`) or React component\nthe `<LayoutContainer />` will be rendered as.",name:"as",required:!0,type:{name:"enum",value:[{value:'"p"'},{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},bgc:{defaultValue:null,description:"A color value for the background of the entire row, which\nwill bleed out all the way to the edge of the screen (so not\njust the contained layout area). Must be the output of the `color` macro.",name:"bgc",required:!1,type:{name:"ThemeColor | undefined"}},children:{defaultValue:null,description:"The Children to render inside the `<LayoutContainer>`",name:"children",required:!1,type:{name:"ReactNode"}},childSpacing:{defaultValue:null,description:"Changes the default vertical spacing between *children*\nof the container (e.g., the space between list views on the Homepage)\n@remarks * Internal vertical spacing between the container's children\n  is set using the `row-gap` property. This means that an\n  individual child element can override the spacing around it\n  by using top and bottom margins (including negative margins)\n* Takes an object with an (optional) value for each breakpoint,\n  meaning it's possible to change the default vertical spacing\n  only for one or several specific breakpoints.\n@example ```ts\nimport space from '@haaretz/l-space.macro';\nimport s9 from 'style9';\nfunction MyLayoutContainer(props) {\n  // This will only affect the default spacing\n  // between the `l` and `xl` breakpoints\n  return <LayoutContainer childSpacing={{ l: space(8) }}/>;\n}\n```",name:"childSpacing",required:!1,type:{name:"ChildSpacing | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyLayoutContainer(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <LayoutContainer\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<LayoutContainer styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-layout-container/src/LayoutContainer.tsx#LayoutContainer"]={docgenInfo:LayoutContainer.__docgenInfo,name:"LayoutContainer",path:"../../ds-atoms/s-layout-container/src/LayoutContainer.tsx#LayoutContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",a:"a",h3:"h3",h4:"h4",em:"em",ul:"ul",li:"li"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"LayoutContainer"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"LayoutContainer"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-layout-container"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-layout-container": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"LayoutContainer"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import LayoutContainer from '@haaretz/s-layout-container';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A component that contains its children within the bounds of the page layout and\nautomatically spaces them out vertically (e.g., list views on the Homepage)"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It uses ",(0,jsx_runtime.jsx)(_components.code,{children:"display: grid"}),' to create inline-axis (horizontal) "bleed", "gutter",\nand "main" tracks, and to automatically space out its children on the block-axis\n(vertically):']}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"+---------+--------+------+--------+---------+\n|  bleed  | gutter | main | gutter |  bleed  |\n+---------+--------+------+--------+---------+\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The innermost track, ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," is centered at the middle of the viewport and used\nto set the minimum and maximum content width. Child elements of\n",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," should generally place themselves inside it with\n",(0,jsx_runtime.jsx)(_components.code,{children:"grid-column: main"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"gutter"})," track (see ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/atoms-layoutcontainer--gutter#gutter",children:"here"}),"\nfor use cases) is placed adjacent to the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track, and is set to a constant\nwidth per breakpoint, to ensure adequate spacing from the viewport edges."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"bleed"})," track (see ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/atoms-layoutcontainer--bleed#bleed",children:"here"}),"\nfor use cases) at the horizontal edges of ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"}),", stretches to\nfill the remaining available space between the edges of the viewport and the\n",(0,jsx_runtime.jsx)(_components.code,{children:"gutter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," tracks."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{children:"CSS Custom Props API"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["| ",(0,jsx_runtime.jsx)(_components.strong,{children:"Name"}),"                           | ",(0,jsx_runtime.jsx)(_components.strong,{children:"Description"}),"                                                                                                                        | ",(0,jsx_runtime.jsx)(_components.strong,{children:"Notes"}),"                                                                                                                                                                                        |\n| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| ",(0,jsx_runtime.jsx)(_components.code,{children:"--LayoutContainerBackgroundColor"})," | Background color of the entire row, which will bleed out all the way to the edge of the screen (so not just the contained layout area) | Can be used when different colors at different breakpoints are needed either by setting this on an ascendant element or on the element itself using the ",(0,jsx_runtime.jsxs)(_components.a,{href:"#style-composition",children:[(0,jsx_runtime.jsx)(_components.code,{children:"styleExtend"})," prop"]})," |\n| --LayoutContainerGutter            | The minimal amount of spacing between the edge of the screen and the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track                                                      | This is meant to be used by descendant components and ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.em,{children:"cannot be set from the outside"})}),". ",(0,jsx_runtime.jsx)(_components.a,{href:"#gutter",children:"See gutter"})," for more details                                                               |"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Element Polymorphism"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["By default, ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," is rendered as a ",(0,jsx_runtime.jsx)(_components.code,{children:"<div>"}),", since it does not\nimply any semantic meaning, and is therefore the most flexible."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["However, using the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop, we can render the ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," as any of\nthe allowed HTML elements in the ",(0,jsx_runtime.jsx)(_components.code,{children:"AllowedElements"})," union:"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"article"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"aside"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"div"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"footer"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"header"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"main"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"nav"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"p"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"section"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When we do so, the ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"}),"'s props will automatically be augmented\nto include all the valid attributes of the HTML element (or props of the\nunderlying React component), with TypeScript validation and autocomplete."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For instance, a ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," with an ",(0,jsx_runtime.jsx)(_components.code,{children:'as="a"'})," prop, can also take an\n",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop which will be passed to the underlying HTML element, but not an\n",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop, since it doesn't exist on ",(0,jsx_runtime.jsx)(_components.code,{children:"<a />"})," elements."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--as"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Background color"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We can dynamically change the background color of a ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," using\nthe ",(0,jsx_runtime.jsx)(_components.code,{children:"bgc"})," prop, which can only take the value of a named theme color (the output\nof the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," macro)."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"bgc"})," prop will color the entire row, from edge to edge, and not\njust the contained layout area."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--background-color"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In the rare cases where more granularity in setting the background color, e.g.,\ndifferent colors at different breakpoints, it can be done by setting the value\nof the ",(0,jsx_runtime.jsx)(_components.code,{children:"--LayoutContainerBackgroundColor"})," CSS custom property on the component\nor one of it ascendants."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Child spacing"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The default block-axis (vertical) spacing between the ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"}),"'s\nchildren can be adjusted using the ",(0,jsx_runtime.jsx)(_components.code,{children:"childSpacing"})," prop, which takes an object\nwith per-breakpoint values in ",(0,jsx_runtime.jsx)(_components.code,{children:"rem"})," units, e.g., ",(0,jsx_runtime.jsx)(_components.code,{children:"{ m: '1rem' }"})," would set the\nvertical spacing between child elements to ",(0,jsx_runtime.jsx)(_components.code,{children:"1rem"})," when the viewport width is\nbetween the ",(0,jsx_runtime.jsx)(_components.code,{children:"m"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"l"})," breakpoints. The idiomatic way to set spacing values is\nby using the ",(0,jsx_runtime.jsx)(_components.code,{children:"space()"})," function form the ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/l-space.macro"})," so that it\naligns with the general vertical rhythm."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--child-spacing"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Style composition"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"}),"'s styling can be extend through composition by using the\n",(0,jsx_runtime.jsx)(_components.code,{children:"styleExtend"})," prop, for composing ",(0,jsx_runtime.jsx)(_components.code,{children:"style9"})," classes (statically generated at\nbuild time), and the ",(0,jsx_runtime.jsx)(_components.code,{children:"inlineStyle"})," prop, for adding inline styles to the\nunderlying HTML element's ",(0,jsx_runtime.jsx)(_components.code,{children:"style"})," attribute, when runtime dynamism is required."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--style-composition"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Bleed"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Since ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"}),' uses named grid tracks to contain its children, a\nchild can easily "chose" to bleed out to the edges of the screen simply by\nsetting ',(0,jsx_runtime.jsx)(_components.code,{children:"grid-column: bleed"})," and without resorting to negative margins hacks,\nwhich require knowledge of their parent's margins, and are therefore brittle by\nnature."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--bleed"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In the same manner, children can also bleed only towards the start of the\nviewport (",(0,jsx_runtime.jsx)(_components.code,{children:"grid-column-start: bleed"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"grid-column-end: main"}),") or its end\n(",(0,jsx_runtime.jsx)(_components.code,{children:"grid-column-start: main"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"grid-column-end: bleed"}),")."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--bleed-to-single-side"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Gutter"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Child elements might sometimes want to extend out into the gutter. One such use\ncase could be wanting to apply a background color all the way to the edge of the\ngutter, and then have their own content contained inside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," uses the ",(0,jsx_runtime.jsx)(_components.code,{children:"--LayoutContainerGutter"})," CSS custom property to\nset the width of the gutters, and since CSS custom props and their values are\ninherited, it can be used to easily facilitate this use case without a brittle\ncontract between the ",(0,jsx_runtime.jsx)(_components.code,{children:"<LayoutContainer />"})," and its children."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-layoutcontainer--gutter"})})]})}const LayoutContainer_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},LayoutContainer_stories_excluded=["as"];var LayoutContainer_stories_jsx=react.createElement;function LayoutContainer_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function LayoutContainer_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?LayoutContainer_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):LayoutContainer_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const LayoutContainer_stories={component:LayoutContainer,title:"Atoms/LayoutContainer",args:{as:DEFAULT_ELEMENT},argTypes:{as:{table:{defaultValue:{summary:DEFAULT_ELEMENT}}},bgc:{control:{type:"text"}},children:{control:!1},styleExtend:{control:!1},"...restProps":{control:!1,description:"`<LayoutContainer />` will pass any additional prop to the underlying html element, in a typesafe manner based on the value of the `as` prop",table:{type:{summary:void 0}}}},parameters:{docs:{page:LayoutContainer_doc}}},c={child:{backgroundColor:"iwPZVb",height:"kdZnOS"},fullBleed:{backgroundColor:"hJOxHn"},as:{backgroundColor:"ecyhtS",display:"gSBWlu",alignItems:"foGVKH",justifyContent:"IVbXa",height:"dvPYPU"},composition:{backgroundImage:"gpVolb",cursor:"cUspBR",paddingBottom:"eyA_DDV",paddingTop:"bcOEln"},compositionChild:{alignItems:"foGVKH",backgroundColor:"iVGLUT",display:"gSBWlu",fontWeight:"iLdtFu",gridColumnEnd:"eeSwuc",gridColumnStart:"jrBSXg",justifyContent:"IVbXa",paddingTop:"dmKgnC",paddingRight:"cVJMrm",paddingBottom:"dPFrWx",paddingLeft:"JxWnH",textAlign:"kooHYa"}},Overview=args=>LayoutContainer_stories_jsx(LayoutContainer,args,LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)})),As=_args=>{const{as}=_args,argsSansAs=(0,objectWithoutProperties.Z)(_args,LayoutContainer_stories_excluded),args="section"===as?argsSansAs:_args;return LayoutContainer_stories_jsx(LayoutContainer,(0,esm_extends.Z)({as:"section"},args),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child,c.as),dir:"ltr"},"This "," <LayoutContainer /> "," is a "," <section /> "),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}))};As.args={as:"section"};const BackgroundColor=args=>LayoutContainer_stories_jsx(LayoutContainer,{as:"div"},LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx(LayoutContainer,(0,esm_extends.Z)({bgc:"rgb(var(--c-neutral1100))"},args),LayoutContainer_stories_jsx("img",{alt:"scenery",style:{aspectRatio:"5 / 1",gridColumn:"main",maxWidth:"100%"},src:"https://images.unsplash.com/photo-1651088377517-339b1e23a960?cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMyMzc2Mjk&ixlib=rb-1.2.1&q=80&w=1000&h=200&fit=crop&crop=edges"}),LayoutContainer_stories_jsx("img",{alt:"scenery",style:{aspectRatio:"5 / 1",gridColumn:"main",maxWidth:"100%"},src:"https://images.unsplash.com/photo-1652208296704-e0625fc9c385?cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMyMzg5MjA&ixlib=rb-1.2.1&q=80&w=1000&h=200&fit=crop&crop=entropy"})),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}));BackgroundColor.args={bgc:"rgb(var(--c-neutral300))",inlineStyle:{gridColumn:"bleed"}};const childSpacing={default:"0.5rem",s:"1rem",m:"1.25rem",l:"1.5rem",xl:"1.75rem",xxl:"2rem"},ChildSpacing=args=>LayoutContainer_stories_jsx(LayoutContainer,(0,esm_extends.Z)({childSpacing},args),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}));ChildSpacing.args={childSpacing};const StyleComposition=args=>LayoutContainer_stories_jsx((function Composer(){const[coordinates,setCoordinates]=react.useState({"--mouseX":"50%","--mouseY":"50%"});return LayoutContainer_stories_jsx("div",{onMouseMove:function getMouseLocation(evt){const{clientX,clientY,currentTarget}=evt,{left,top}=currentTarget.getBoundingClientRect()||0;setCoordinates({"--mouseX":`${clientX-left}px`,"--mouseY":`${clientY-top}px`})}},LayoutContainer_stories_jsx(LayoutContainer,(0,esm_extends.Z)({inlineStyle:coordinates,styleExtend:[c.composition]},args)))}),null);StyleComposition.args={children:LayoutContainer_stories_jsx("div",{className:(0,style9.Z)(c.compositionChild),dir:"ltr"},"MOVE YOUR MOUSE OVER THE   ",LayoutContainer_stories_jsx("code",null," `<LayoutContainer />`"),"."),styleExtend:[c.composition]};const Bleed=args=>LayoutContainer_stories_jsx(LayoutContainer,args,LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"bleed"},className:(0,style9.Z)(c.child,c.fullBleed)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)})),BleedToSingleSide=args=>LayoutContainer_stories_jsx(LayoutContainer,args,LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumnStart:"bleed",gridColumnEnd:"main"},className:(0,style9.Z)(c.child,c.fullBleed)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)}),LayoutContainer_stories_jsx("div",{style:{gridColumnStart:"main",gridColumnEnd:"bleed"},className:(0,style9.Z)(c.child,c.fullBleed)}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"main"},className:(0,style9.Z)(c.child)})),Gutter=args=>LayoutContainer_stories_jsx(LayoutContainer,(0,esm_extends.Z)({},args,{bgc:"rgb(var(--c-neutral150))"}),LayoutContainer_stories_jsx("div",{style:{gridColumn:"gutter",backgroundColor:"rgb(var(--c-neutral100))",paddingInline:"var(--LayoutContainerGutter)",display:"grid",rowGap:"0.5rem"}},LayoutContainer_stories_jsx("div",{className:(0,style9.Z)(c.child,c.child)}),LayoutContainer_stories_jsx("div",{className:(0,style9.Z)(c.child,c.child)})));Overview.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => (\n  <LayoutContainer {...args}>\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n  </LayoutContainer>\n)"}},Overview.parameters),As.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"_args => {\n  const { as, ...argsSansAs } = _args;\n  const args = as === asTag ? argsSansAs : _args;\n  return (\n    <LayoutContainer as={asTag} {...args}>\n      <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n      <div style={{ gridColumn: 'main', }} className={s9(c.child, c.as)} dir=\"ltr\">\n        This {' <LayoutContainer /> '} is a {` <${asTag} /> `}\n      </div>\n      <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    </LayoutContainer>\n  );\n}"}},As.parameters),BackgroundColor.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => (\n  <LayoutContainer as=\"div\">\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <LayoutContainer bgc={color('neutral1100')} {...args}>\n      {}\n      <img\n        alt=\"scenery\"\n        style={{\n          aspectRatio: '5 / 1',\n          gridColumn: 'main',\n          maxWidth: '100%',\n        }}\n        src=\"https://images.unsplash.com/photo-1651088377517-339b1e23a960?cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMyMzc2Mjk&ixlib=rb-1.2.1&q=80&w=1000&h=200&fit=crop&crop=edges\"\n      />\n      {}\n      <img\n        alt=\"scenery\"\n        style={{\n          aspectRatio: '5 / 1',\n          gridColumn: 'main',\n          maxWidth: '100%',\n        }}\n        src=\"https://images.unsplash.com/photo-1652208296704-e0625fc9c385?cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMyMzg5MjA&ixlib=rb-1.2.1&q=80&w=1000&h=200&fit=crop&crop=entropy\"\n      />\n    </LayoutContainer>\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n  </LayoutContainer>\n)"}},BackgroundColor.parameters),ChildSpacing.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => (\n  <LayoutContainer childSpacing={childSpacing} {...args}>\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n  </LayoutContainer>\n)"}},ChildSpacing.parameters),StyleComposition.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => {\n  function Composer() {\n    const [ coordinates, setCoordinates, ] = React.useState({\n      '--mouseX': '50%',\n      '--mouseY': '50%',\n    });\n    function getMouseLocation(evt: React.MouseEvent<HTMLDivElement>) {\n      const { clientX, clientY, currentTarget, } = evt;\n      const { left, top, } = currentTarget.getBoundingClientRect() || 0;\n      const x = clientX - left;\n      const y = clientY - top;\n\n      setCoordinates({ '--mouseX': `${x}px`, '--mouseY': `${y}px`, });\n    }\n\n    return (\n      \n      <div onMouseMove={getMouseLocation}>\n        <LayoutContainer inlineStyle={coordinates} styleExtend={[ c.composition, ]} {...args} />\n      </div>\n    );\n  }\n  return <Composer />;\n}"}},StyleComposition.parameters),Bleed.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => (\n  <LayoutContainer {...args}>\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div style={{ gridColumn: 'bleed', }} className={s9(c.child, c.fullBleed)} />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n  </LayoutContainer>\n)"}},Bleed.parameters),BleedToSingleSide.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => (\n  <LayoutContainer {...args}>\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div\n      style={{ gridColumnStart: 'bleed', gridColumnEnd: 'main', }}\n      className={s9(c.child, c.fullBleed)}\n    />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n    <div\n      style={{ gridColumnStart: 'main', gridColumnEnd: 'bleed', }}\n      className={s9(c.child, c.fullBleed)}\n    />\n    <div style={{ gridColumn: 'main', }} className={s9(c.child)} />\n  </LayoutContainer>\n)"}},BleedToSingleSide.parameters),Gutter.parameters=LayoutContainer_stories_objectSpread({storySource:{source:"args => (\n  <LayoutContainer {...args} bgc={color('neutral150')}>\n    <div\n      style={{\n        // Stretch into the gutter\n        gridColumn: 'gutter',\n        // Add background color\n        backgroundColor: color('neutral100'),\n        // Set inline padding to width of layout container gutter\n        // so that content is confined to the `main` track\n        paddingInline: 'var(--LayoutContainerGutter)',\n\n        display: 'grid',\n        rowGap: space(2),\n      }}\n    >\n      <div className={s9(c.child, c.child)} />\n      <div className={s9(c.child, c.child)} />\n    </div>\n  </LayoutContainer>\n)"}},Gutter.parameters);const __namedExportsOrder=["Overview","As","BackgroundColor","ChildSpacing","StyleComposition","Bleed","BleedToSingleSide","Gutter"]},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
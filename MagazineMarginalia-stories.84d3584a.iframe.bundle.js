"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[51],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>MagazineMarginalia_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),MagazineMarginalia=__webpack_require__("../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx"),lib=(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",em:"em",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"magazinemarginalia",children:"MagazineMarginalia"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineMarginalia"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-magazine-marginalia"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-magazine-marginalia": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineMarginalia"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import MagazineMarginalia from '@haaretz/s-magazine-marginalia';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A container that places its content next to the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track in a\nmagazine-layout and takes care of spacing and assignment to the correct grid\ncolumn."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Since ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineMarginalia"})," cannon control its placement in the DOM in relation\nto other components in the tree, it must be used in a manner that respects the\ngrid flow."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This means that placing content alongside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," column to its start,\nrequires using ",(0,jsx_runtime.jsx)(_components.code,{children:'<MagazineMarginalia side="start">'})," ",(0,jsx_runtime.jsx)(_components.em,{children:"before"})," the element placed\nin the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," column, and placing it to its end requires\n",(0,jsx_runtime.jsx)(_components.code,{children:'<MagazineMarginalia side="end">'})," after the element in ",(0,jsx_runtime.jsx)(_components.code,{children:"main"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"behavior-on-small-screens",children:"Behavior on small screens"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Elements can only be placed on the sides on the main content column on large\nenough screens. By default, marginalia content will be hidden in such cases, but\ncan be configured to occupy another column using the ",(0,jsx_runtime.jsx)(_components.code,{children:"fallbackColumn"})," prop,\nwhich can be assigned one of the named grid tracks of ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineArticle"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}const MagazineMarginalia_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _Overview$parameters,_Overview$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const MagazineMarginalia_stories={component:MagazineMarginalia.Z,title:"Atoms/MagazineMarginalia",args:{inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:MagazineMarginalia_doc}}},Overview=args=>(0,jsx_runtime.jsx)(MagazineMarginalia.Z,_objectSpread({},args));Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"args => <MagazineMarginalia {...args} />"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})})},"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MagazineMarginalia});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{"@media all and (min-width:80em)":{position:"BRxzV",height:"bYXnPf"}},start:{"@media all and (min-width:80em)":{gridColumnEnd:"lkUcIY",gridColumnStart:"fgbYzP"}},end:{"@media all and (min-width:80em)":{gridColumnEnd:"jPYLCf",gridColumnStart:"dnTOyx",marginTop:"gcxHiz"}},hiddenFallback:{"@media all and (max-width:79.9375em)":{display:"bkXpXX"}},mainFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"bfzQfK",gridColumnStart:"kgrowE"}},bleedFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"dvgcva",gridColumnStart:"iXVvXc"}},outerGutterFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"jNTlpB",gridColumnStart:"jAaJlJ"}},child:{"@media all and (min-width:80em)":{left:"lcKIUH",position:"iZpEpR",top:"gOKTBZ",width:"gzPsrv"}},childEnd:{"@media all and (min-width:80em)":{top:"xmNog"}}};function MagazineMarginalia(_ref){let{children=null,inlineStyle,styleExtend=[],side,fallbackColumn="hidden"}=_ref;const fallbackClass=`${fallbackColumn}Fallback`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base,c[side],c[fallbackClass],...styleExtend),style:inlineStyle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.child,"end"===side&&c.childEnd),children})})}try{MagazineMarginalia.displayName="MagazineMarginalia",MagazineMarginalia.__docgenInfo={description:"",displayName:"MagazineMarginalia",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<MagazineMarginalia>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyMagazineMarginalia(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <MagazineMarginalia\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<MagazineMarginalia styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},side:{defaultValue:null,description:"The side of the `main` conlumn on which the\n`<MagazineMarginalia>` should be rendered.",name:"side",required:!0,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},fallbackColumn:{defaultValue:{value:"hidden"},description:"The column the to render the content in on smaller\nbreakpoints.\n\nNot displayed on small breakpoints if set to `'hidden'`\n@defaultValue 'hidden'",name:"fallbackColumn",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"hidden"'},{value:'"main"'},{value:'"bleed"'},{value:'"outerGutter"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx#MagazineMarginalia"]={docgenInfo:MagazineMarginalia.__docgenInfo,name:"MagazineMarginalia",path:"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx#MagazineMarginalia"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
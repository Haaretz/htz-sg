"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[2112],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-magazine-layout/src/MagazineLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>MagazineLayout_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js");const src=__webpack_require__("../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx").Z;var style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),MagazineLayout=__webpack_require__("../../ds-atoms/s-magazine-layout/src/MagazineLayout.tsx"),lib=(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js")),s_story_callout_src=__webpack_require__("../s-story-callout/src/index.ts"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@18.2.11_@types+react@18.2.25_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3",em:"em"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"magazinelayout",children:"MagazineLayout"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineLayout"})," in has\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-magazine-layout"})," listed in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"}),"\nfield:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-magazine-layout": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"MagazineLayout"})," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import MagazineLayout from '@haaretz/s-magazine-layout';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A container component enables laying its child inside the predetermined Magazine\narticle page layout, and automatically provide default spacing between its child\nelements on the vertical plane (e.g. the space between two paragraphs), which\ncan be adjusted by each child if needed."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It uses ",(0,jsx_runtime.jsx)(_components.code,{children:"display: grid"})," to create the following inline-axis (horizontal) tracks:\n",(0,jsx_runtime.jsx)(_components.code,{children:"bleed"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"outerGutter"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"innerGutter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"main"}),":"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"+---------+-------------+------------------+-------------+------+-------------+----------------+-------------+---------+\n|  bleed  | outerGutter | marginalia-start | innerGutter | main | innerGutter | marginalia-end | outerGutter |  bleed  |\n+---------+-------------+------------------+-------------+------+-------------+----------------+-------------+---------+\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track is the main content container, designed to hold body-copy a\nmeasure providing an optimized reading experience. It is also well suited for\nmost other content elements such as pictures, videos and embeds. Child can be\nplaced in the main track with ",(0,jsx_runtime.jsx)(_components.code,{children:"grid-columnt: main"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"layout-tracks",children:"Layout Tracks"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"bleed"}),' track allows placing elements so that "bleed out" and extend to the\nedge of the screen.']}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"outerGutter"})," track can be used to stretch element almost to the edge of the\nscreen, while ensuring proper margin from it. One such use case is the content\nof opening element in the magazine page's header."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"marinalia"})," track can be used to place smaller elements at either side of\nthe ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track (on larger breakpoints). Additionally, it can be used to\nstretch out elements outside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," track so that they extrude outside it\nand give a measured sense of purposeful asymmetry."]}),"\n",(0,jsx_runtime.jsx)(s_story_callout_src.Z,{title:"NOTICE",children:(0,jsx_runtime.jsxs)(_components.p,{children:["Elements can only be placed (in the ",(0,jsx_runtime.jsx)(_components.code,{children:"DOM"}),") alongside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," column in an\norder that respects the flow of the grid. That means that elements in the\n",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia-start"})," column ",(0,jsx_runtime.jsxs)(_components.strong,{children:["should be ",(0,jsx_runtime.jsx)(_components.em,{children:"before"})," the element they are\ntop-aligned to"]})," , and those in the ",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia-end"})," column ",(0,jsx_runtime.jsxs)(_components.strong,{children:["should be\n",(0,jsx_runtime.jsx)(_components.em,{children:"after"})," the element they are top-aligned to"]}),"."]})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Elements placed in the ",(0,jsx_runtime.jsx)(_components.code,{children:"marginalia"})," column alongside the ",(0,jsx_runtime.jsx)(_components.code,{children:"main"})," column, should\nuse the complementary ",(0,jsx_runtime.jsx)(_components.code,{children:"Marginalia"})," component from the\n",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-magazine-marginalia"})," package to take care of spacing and assignment\nto the correct grid column."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"child-element-spacing",children:"Child Element Spacing"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The default spacing between elements can be changed for an individual element by\nsimply assigning top or bottom margin on that element. A positive margin will\nincrease spacing, while a negative one will decrease it."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'One such use case are subheads. Since a subhead is used to split the content of\nan article into sections, it "belongs" to the text beneath it, which it\nheadlines. By default, all elements have equal spacing between them, but the\ndesign principle of proximity suggests that it is better for them to be closer\nto the element to which they are related:'}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-md",children:"**This is Better _(easy attached to next paragraph)_** Lorem ipsum dolor sit\namet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi.\nui minim minim sint cillum sint consectetur cupidatat.\n\nLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint.\n\n**Than This _(hard to determine attachment)_**\n\nLorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur\nofficia. Reprehenderit nostrud.\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To solve this, we can set a negative ",(0,jsx_runtime.jsx)(_components.code,{children:"margin-bottom"}),' on the subhead element so\nthat it "pulls up" the element beneath it into the grid gap and minimizes the\nspacing between the elements.']}),"\n",(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-magazinelayout--overview",inline:!1,height:"70vh"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n"]})}const MagazineLayout_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var _Overview$parameters,_Overview$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const MagazineLayout_stories={component:MagazineLayout.Z,title:"Atoms/MagazineLayout",args:{inlineStyle:{},styleExtend:[]},argTypes:{children:{control:!1},styleExtend:{control:!1}},parameters:{docs:{page:MagazineLayout_doc}}},c_header={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"henzaq",gridColumnStart:"gBZibj",height:"cxbVgb",justifyContent:"IVbXa"},c_p={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"eeSwuc",gridColumnStart:"jrBSXg",height:"kyCuSk",justifyContent:"IVbXa"},c_bleed={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"gAgjeC",gridColumnStart:"lkWngP",height:"kyCuSk",justifyContent:"IVbXa"},c_pullStart={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"eeSwuc",gridColumnStart:"kFmWPS",height:"kyCuSk",justifyContent:"IVbXa"},c_pullEnd={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"gnBXxX",gridColumnStart:"jrBSXg",height:"kyCuSk",justifyContent:"IVbXa"},c_wide={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",gridColumnEnd:"gnBXxX",gridColumnStart:"kFmWPS",height:"kyCuSk",justifyContent:"IVbXa"},c_marginContent={alignItems:"foGVKH",backgroundColor:"fvtpLe",color:"kAjvCH",display:"gSBWlu",height:"gwDIAE",justifyContent:"IVbXa"},Overview={parameters:{layout:"fullscreen"},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_header),children:"כותרת"}),(0,jsx_runtime.jsx)("p",{className:(0,style9.Z)(c_p),children:"פיסקה"}),(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_bleed),children:"קצה לקצה"}),(0,jsx_runtime.jsx)("p",{className:(0,style9.Z)(c_p),children:"פיסקה"}),(0,jsx_runtime.jsx)(src,{side:"end",children:(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_marginContent),children:"תוכן צד (סוף)"})}),(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_pullStart),children:"חורג אחורה"}),(0,jsx_runtime.jsx)(src,{side:"start",children:(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_marginContent),children:"תוכן צד (התחלה)"})}),(0,jsx_runtime.jsx)("p",{className:(0,style9.Z)(c_p),children:"פיסקה"}),(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_pullEnd),children:"חורג קדימה"}),(0,jsx_runtime.jsx)("p",{className:(0,style9.Z)(c_p),children:"פיסקה"}),(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_wide),children:"אלמנט רחב"})]})}};Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Overview$parameters=Overview.parameters)||void 0===_Overview$parameters?void 0:_Overview$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  parameters: {\n    layout: 'fullscreen'\n  },\n  args: {\n    children: <>\n        <div className={s9(c.header)}>\n          {fork({\n          default: 'כותרת',\n          hdc: 'Title'\n        })}\n        </div>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <div className={s9(c.bleed)}>\n          {fork({\n          default: 'קצה לקצה',\n          hdc: 'bleed'\n        })}\n        </div>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <MagazineMarginalia side=\"end\">\n          <div className={s9(c.marginContent)}>\n            {fork({\n            default: 'תוכן צד (סוף)',\n            hdc: 'marginalia'\n          })}\n          </div>\n        </MagazineMarginalia>\n        <div className={s9(c.pullStart)}>\n          {fork({\n          default: 'חורג אחורה',\n          hdc: 'Pull to strat'\n        })}\n        </div>\n        <MagazineMarginalia side=\"start\">\n          <div className={s9(c.marginContent)}>\n            {fork({\n            default: 'תוכן צד (התחלה)',\n            hdc: 'marginalia'\n          })}\n          </div>\n        </MagazineMarginalia>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <div className={s9(c.pullEnd)}>\n          {fork({\n          default: 'חורג קדימה',\n          hdc: 'Pull to End'\n        })}\n        </div>\n        <p className={s9(c.p)}>\n          {fork({\n          default: 'פיסקה',\n          hdc: 'Paragraph'\n        })}\n        </p>\n        <div className={s9(c.wide)}>\n          {fork({\n          default: 'אלמנט רחב',\n          hdc: 'Wide element'\n        })}\n        </div>\n      </>\n  }\n}"},null===(_Overview$parameters2=Overview.parameters)||void 0===_Overview$parameters2||null===(_Overview$parameters2=_Overview$parameters2.docs)||void 0===_Overview$parameters2?void 0:_Overview$parameters2.source)})})},"../../ds-atoms/s-magazine-layout/src/MagazineLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MagazineLayout});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const _excluded=["as","children","inlineStyle","styleExtend","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c={base:{"--outerMarginWidth":"kBiUkV","--outerGutterWidth":"iTnceT","--marginaliaWidth":"itRiKY","--innerGutterWidth":"bzpSvb","--measure":"gborPl","--rowSpacing":"liOREO",display:"kbCXHY",rowGap:"ghDYqh",gridTemplateColumns:"dIOqzt","@media all and (min-width:37.5em)":{"--outerMarginWidth":"fDcmjg","--outerGutterWidth":"fpSvfH","--innerGutterWidth":"gJhBaI","--measure":"casSbf"},"@media all and (min-width:64em)":{"--outerGutterWidth":"juRxDn","--marginaliaWidth":"kFyrut","--measure":"byRwtc"},"@media all and (min-width:80em)":{"--outerMarginWidth":"dsHpov","--marginaliaWidth":"lfrits","--measure":"dBfyl","--rowSpacing":"lvbnD"},"@media all and (min-width:102em)":{"--measure":"bfdpdg"}}},DEFAULT_ELEMENT="div";function MagazineLayout(props){const{as=DEFAULT_ELEMENT,children=null,inlineStyle,styleExtend=[],className}=props,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded),Element=as;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread({className:`${(0,style9__WEBPACK_IMPORTED_MODULE_2__.Z)(c.base,...styleExtend)}${className?` ${className}`:""}`,style:inlineStyle},attrs),{},{children}))}try{MagazineLayout.displayName="MagazineLayout",MagazineLayout.__docgenInfo={description:"",displayName:"MagazineLayout",props:{as:{defaultValue:null,description:"The HTML element (`string`) or React component\nthe `<LayoutContainer />` will be rendered as.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"main"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"section"'}]}},children:{defaultValue:null,description:"The Children to be rendered inside `<MagazineLayout>`",name:"children",required:!1,type:{name:"(ReactNode & string) | (ReactNode & number) | (ReactNode & false) | (ReactNode & true) | (ReactNode & ReactElement<any, string | JSXElementConstructor<...>>) | ... 4 more ... | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyMagazineLayout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <MagazineLayout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"(Omit<Properties<0 | (string & {}), string & {}>, AtRules | Pseudos> & { [key: `--${string}`]: string | number; }) | undefined"}},styleExtend:{defaultValue:null,description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<MagazineLayout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-magazine-layout/src/MagazineLayout.tsx#MagazineLayout"]={docgenInfo:MagazineLayout.__docgenInfo,name:"MagazineLayout",path:"../../ds-atoms/s-magazine-layout/src/MagazineLayout.tsx#MagazineLayout"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MagazineMarginalia});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{"@media all and (min-width:80em)":{position:"BRxzV",height:"bYXnPf"}},start:{"@media all and (min-width:80em)":{gridColumnEnd:"lkUcIY",gridColumnStart:"fgbYzP"}},end:{"@media all and (min-width:80em)":{gridColumnEnd:"jPYLCf",gridColumnStart:"dnTOyx",marginTop:"gcxHiz"}},hiddenFallback:{"@media all and (max-width:79.9375em)":{display:"bkXpXX"}},mainFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"bfzQfK",gridColumnStart:"kgrowE"}},bleedFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"dvgcva",gridColumnStart:"iXVvXc"}},outerGutterFallback:{"@media all and (max-width:79.9375em)":{gridColumnEnd:"jNTlpB",gridColumnStart:"jAaJlJ"}},child:{"@media all and (min-width:80em)":{left:"lcKIUH",position:"iZpEpR",top:"gOKTBZ",width:"gzPsrv"}},childEnd:{"@media all and (min-width:80em)":{top:"xmNog"}}};function MagazineMarginalia(_ref){let{children=null,inlineStyle,styleExtend=[],side,fallbackColumn="hidden"}=_ref;const fallbackClass=`${fallbackColumn}Fallback`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base,c[side],c[fallbackClass],...styleExtend),style:inlineStyle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.child,"end"===side&&c.childEnd),children})})}try{MagazineMarginalia.displayName="MagazineMarginalia",MagazineMarginalia.__docgenInfo={description:"",displayName:"MagazineMarginalia",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<MagazineMarginalia>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyMagazineMarginalia(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <MagazineMarginalia\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<MagazineMarginalia styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},side:{defaultValue:null,description:"The side of the `main` conlumn on which the\n`<MagazineMarginalia>` should be rendered.",name:"side",required:!0,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},fallbackColumn:{defaultValue:{value:"hidden"},description:"The column the to render the content in on smaller\nbreakpoints.\n\nNot displayed on small breakpoints if set to `'hidden'`\n@defaultValue 'hidden'",name:"fallbackColumn",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"hidden"'},{value:'"main"'},{value:'"bleed"'},{value:'"outerGutter"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx#MagazineMarginalia"]={docgenInfo:MagazineMarginalia.__docgenInfo,name:"MagazineMarginalia",path:"../../ds-atoms/s-magazine-marginalia/src/MagazineMarginalia.tsx#MagazineMarginalia"})}catch(__react_docgen_typescript_loader_error){}},"../s-story-callout/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src});var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c_wrapper={backgroundColor:"jmyBGg",borderTopLeftRadius:"gvQKzB",borderTopRightRadius:"gXtGmO",borderBottomRightRadius:"gGmREU",borderBottomLeftRadius:"ia_DRrH",overflowX:"dUvWpK",overflowY:"hRLVFh",position:"cjScYX",letterSpacing:"iZHebp",paddingTop:"jWWtke",paddingBottom:"bnHxUw",paddingInlineStart:"dwXqlO",paddingInlineEnd:"kwGEcy"},c_strong={backgroundColor:"gtUqwH",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",color:"hugNVC",marginInlineEnd:"joUZpP",paddingInlineStart:"ddynka",paddingInlineEnd:"bWNKbL",fontSize:"fyHdVr",lineHeight:"iKTruj"},c_x={aspectRatio:"ldVxdb",backgroundColor:"kfThfC",borderTopLeftRadius:"ctWdVF",borderTopRightRadius:"jkGfDR",borderBottomRightRadius:"bSTogt",borderBottomLeftRadius:"hSDpeY",color:"kCxIXX",display:"cpOcAb",fontWeight:"inxVzO",lineHeight:"egGyMq",marginInlineEnd:"joUZpP",paddingInlineStart:"kQDwxQ",paddingInlineEnd:"cfEHVR",transform:"gEhxlz"};function StoryCallout(_ref){let{children=null,inlineStyle,styleExtend=[],title}=_ref;return(0,jsx_runtime.jsxs)("aside",{className:(0,style9.Z)(c_wrapper,...styleExtend),style:inlineStyle,children:[title&&(0,jsx_runtime.jsxs)("strong",{className:`sb-unstyled  ${(0,style9.Z)(c_strong)}`,children:[(0,jsx_runtime.jsx)("span",{className:(0,style9.Z)(c_x),children:"✗"}),title,":"]}),title&&" ",children]})}try{StoryCallout.displayName="StoryCallout",StoryCallout.__docgenInfo={description:"",displayName:"StoryCallout",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<StoryCallout>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyStoryCallout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <StoryCallout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<StoryCallout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-story-callout/src/StoryCallout.tsx#StoryCallout"]={docgenInfo:StoryCallout.__docgenInfo,name:"StoryCallout",path:"../s-story-callout/src/StoryCallout.tsx#StoryCallout"})}catch(__react_docgen_typescript_loader_error){}const src=StoryCallout},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
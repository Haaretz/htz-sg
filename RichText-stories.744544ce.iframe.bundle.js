/*! For license information please see RichText-stories.744544ce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[372],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-atoms/s-rich-text/src/RichText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>RichText_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_RichText=__webpack_require__("../../ds-atoms/s-rich-text/src/RichText.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");const RichText_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"richtext",children:"RichText"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"RichText"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-rich-text"})," listed\nin its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-rich-text": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"RichText"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import RichText from '@haaretz/s-rich-text';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Takes a rich-text string received from the CMS and applies styling to its\nelements."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["By default, the rich-text will be rendered as the ",(0,jsx_runtime.jsx)(_components.code,{children:"innerHtml"})," of a ",(0,jsx_runtime.jsx)(_components.code,{children:"<p>"}),"\nelement, using ",(0,jsx_runtime.jsx)(_components.code,{children:"dangerouslySetInnerHTML"}),". Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop, it can also be\nset to render inside an ",(0,jsx_runtime.jsx)(_components.code,{children:"ul"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ol"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"li"})," or an ",(0,jsx_runtime.jsx)(_components.code,{children:"h3"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"atoms-richtext--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}};react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const meta={component:src_RichText.Z,title:"Atoms/RichText",args:{as:src_RichText.p,content:void 0,inlineStyle:{},styleExtend:[]},argTypes:{as:{control:"select",description:"The HTML element (`string`) or React component the `<RichText />` will be rendered as",table:{defaultValue:{summary:src_RichText.p}}},styleExtend:{control:!1},"...restProps":{control:!1,description:"`<RichText />` will pass any additional prop to the underlying html element, in a typesafe manner based on the value of the `as` prop",table:{type:{summary:void 0}}}},parameters:{docs:{page:RichText_doc}}},Overview=args=>react.createElement(src_RichText.Z,(0,esm_extends.Z)({},args,{content:'יו"ר רע"ם <strong class="#strong#">מנסור עבאס</strong> ושר החוץ <u class="#u#">יאיר לפיד </u><em class="#em#">צפויים להיפגש</em> מחר (שני) בניסיון <strong class="#strong#"><em class="#em#"><u class="#u#">להגיע להסכמות</u></em></strong> לקראת ההצבעה המתוכננת למחר על <a class="#a#" href="/">הארכת התקנות</a> המחילות את החוק הישראלי על ההתנחלויות. <mark class="#mark#">לפיד יבקש</mark> להבטיח את תמיכתם של ארבעת חברי סיעת רע"ם באישור התקנות, כשהקושי המרכזי צפוי להיות בשכנוע מאזן גנאים.'})),RichText_stories=meta;Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},Overview.parameters?.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <RichText {...args} content={content} />;\n}"},Overview.parameters?.docs?.source)})}),Overview.__docgenInfo={description:"",methods:[],displayName:"Overview"}},"../../ds-atoms/s-rich-text/src/RichText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>RichText,p:()=>DEFAULT_ELEMENT});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["as","inlineStyle","styleExtend","content","strongStyleExtend"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const c_base={},c_em={fontStyle:"foKnQA"},c_strong={fontWeight:"iLdtFu"},c_mark={backgroundColor:"hCbFkR"},c_link={outlineWidth:"eGCNgh",textDecorationLine:"dLUwcr",textDecorationColor:"dDxYlR",textDecorationThickness:"hnHEBj",textUnderlineOffset:"cEqDEh",transitionProperty:"iRietU",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",":hover":{color:"klOnSG"},":focus":{color:"bsfUtT"}},c_u={textDecorationLine:"dLUwcr",textDecorationSkip:"jqXfau"},DEFAULT_ELEMENT="p",allowedElements=["p","ul","ol","li","h3","span"];function RichText(_ref){let{as,inlineStyle,styleExtend=[],content,strongStyleExtend=[]}=_ref,attrs=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const Element=as||DEFAULT_ELEMENT;if("string"==typeof as&&!allowedElements.includes(as)||"function"==typeof as)throw new TypeError('<RichTextProps /> may only render a "p", "h3", "ul", "ol" or  a "li" element.\nYou passed something else to the "as" prop');const html=function replaceAll(str,mapObj){if("string"!=typeof str)return"";const replaceStr=new RegExp(Object.keys(mapObj).join("|"),"gi");return str.replace(replaceStr,(matched=>mapObj[matched.toLowerCase()]||"#placeholder#"))}(content,{"#em#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_em),"#strong#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_strong,...strongStyleExtend),"#a#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_link),"#mark#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_mark),"#u#":(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_u)});return __jsx(Element,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},attrs,{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c_base,...styleExtend),style:inlineStyle,dangerouslySetInnerHTML:{__html:html}}))}RichText.__docgenInfo={description:"",methods:[],displayName:"RichText"};try{RichText.displayName="RichText",RichText.__docgenInfo={description:"",displayName:"RichText",props:{as:{defaultValue:null,description:"The HTML element (`${AllowedElements}`) the `<RichText />` will be rendered as.\n@defaultValue 'p'",name:"as",required:!1,type:{name:'(ElementType<any> & (ComponentType<any> | "h3" | "li" | "ol" | "p" | "span" | "ul")) | undefined'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRichText(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RichText\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RichText styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},strongStyleExtend:{defaultValue:{value:"[]"},description:"Same as styleExtend for strong class.",name:"strongStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},content:{defaultValue:null,description:"The html string to set the elment's innerHtml.\nHas to be replaced with style9 classes first.",name:"content",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"HtmlElement id attribute.",name:"id",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"]={docgenInfo:RichText.__docgenInfo,name:"RichText",path:"../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
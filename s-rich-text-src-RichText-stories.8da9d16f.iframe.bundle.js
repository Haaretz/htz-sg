/*! For license information please see s-rich-text-src-RichText-stories.8da9d16f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[8454],{"../../ds-atoms/s-rich-text/src/RichText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RichText_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),src_RichText=__webpack_require__("../../ds-atoms/s-rich-text/src/RichText.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"RichText"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"RichText"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-rich-text"})," listed\nin its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-rich-text": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"RichText"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import RichText from '@haaretz/s-rich-text';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Takes a rich-text string received from the CMS and applies styling to its\nelements."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["By default, the rich-text will be rendered as the ",(0,jsx_runtime.jsx)(_components.code,{children:"innerHtml"})," of a ",(0,jsx_runtime.jsx)(_components.code,{children:"<p>"}),"\nelement, using ",(0,jsx_runtime.jsx)(_components.code,{children:"dangerouslySetInnerHTML"}),". Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop, it can also be\nset to render inside an ",(0,jsx_runtime.jsx)(_components.code,{children:"ul"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ol"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"li"})," or an ",(0,jsx_runtime.jsx)(_components.code,{children:"h3"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-richtext--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"})]})}const RichText_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const RichText_stories={component:src_RichText.Z,title:"Atoms/RichText",args:{as:src_RichText.p,content:void 0,inlineStyle:{},styleExtend:[]},argTypes:{as:{control:"select",description:"The HTML element (`string`) or React component the `<RichText />` will be rendered as",table:{defaultValue:{summary:src_RichText.p}}},styleExtend:{control:!1},"...restProps":{control:!1,description:"`<RichText />` will pass any additional prop to the underlying html element, in a typesafe manner based on the value of the `as` prop",table:{type:{summary:void 0}}}},parameters:{docs:{page:RichText_doc}}},Overview=args=>__jsx(src_RichText.Z,(0,esm_extends.Z)({},args,{content:'יו"ר רע"ם <strong class="#strong#">מנסור עבאס</strong> ושר החוץ <u class="#u#">יאיר לפיד </u><em class="#em#">צפויים להיפגש</em> מחר (שני) בניסיון <strong class="#strong#"><em class="#em#"><u class="#u#">להגיע להסכמות</u></em></strong> לקראת ההצבעה המתוכננת למחר על <a class="#a#" href="/">הארכת התקנות</a> המחילות את החוק הישראלי על ההתנחלויות. <mark class="#mark#">לפיד יבקש</mark> להבטיח את תמיכתם של ארבעת חברי סיעת רע"ם באישור התקנות, כשהקושי המרכזי צפוי להיות בשכנוע מאזן גנאים.'}));Overview.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"args => {\n  return <RichText {...args} content={content} />;\n}"}},Overview.parameters);const __namedExportsOrder=["Overview"]},"../../ds-atoms/s-rich-text/src/RichText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>DEFAULT_ELEMENT,Z:()=>RichText});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs");const _excluded=["as","inlineStyle","styleExtend","content"];var __jsx=react.createElement;const c_base={},c_em={fontStyle:"foKnQA"},c_strong={fontWeight:"iLdtFu"},c_a={},c_mark={},c_u={textDecorationLine:"dLUwcr",textDecorationSkip:"jqXfau"},DEFAULT_ELEMENT="p",allowedElements=["p","ul","ol","li","h3","span"],cssMap=Object.freeze({"#em#":(0,style9.Z)(c_em),"#strong#":(0,style9.Z)(c_strong),"#a#":(0,style9.Z)(c_a),"#mark#":(0,style9.Z)(c_mark),"#u#":(0,style9.Z)(c_u)});function RichText(_ref){let{as,inlineStyle,styleExtend=[],content}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const Element=as||DEFAULT_ELEMENT;if("string"==typeof as&&!allowedElements.includes(as)||"function"==typeof as)throw new TypeError('<RichTextProps /> may only render a "p", "h3", "ul", "ol" or  a "li" element.\nYou passed something else to the "as" prop');const html=function replaceAll(str,mapObj){if("string"!=typeof str)return"";const replaceStr=new RegExp(Object.keys(mapObj).join("|"),"gi");return str.replace(replaceStr,(matched=>mapObj[matched.toLowerCase()]||matched))}(content,cssMap);return __jsx(Element,(0,esm_extends.Z)({},attrs,{className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle,dangerouslySetInnerHTML:{__html:html}}))}try{RichText.displayName="RichText",RichText.__docgenInfo={description:"",displayName:"RichText",props:{as:{defaultValue:null,description:"The HTML element (`${AllowedElements}`) the `<RichText />` will be rendered as.\n@defaultValue 'p'",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"p"'},{value:'"ul"'},{value:'"ol"'},{value:'"li"'},{value:'"h3"'},{value:'"span"'}]}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyRichText(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <RichText\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<RichText styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},content:{defaultValue:null,description:"The html string to set the elment's innerHtml.\nHas to be replaced with style9 classes first.",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"]={docgenInfo:RichText.__docgenInfo,name:"RichText",path:"../../ds-atoms/s-rich-text/src/RichText.tsx#RichText"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
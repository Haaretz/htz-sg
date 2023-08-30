"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[7249],{"../../ds-organisms/s-article-tags/src/ArticleTags.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>ArticleTags_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),preview=__webpack_require__("../../config/l-storybook-config/preview.js"),src=__webpack_require__("../../utils/s-storybook-providers/src/index.ts"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),s_alerts_subscription_popover_src=__webpack_require__("../../ds-molecules/s-alerts-subscription-popover/src/index.ts"),src_user=__webpack_require__("../../utils/s-atoms/src/user/index.ts");const s_chip_src=__webpack_require__("../../ds-atoms/s-chip/src/Chip.tsx").ZP;var s_htz_link_src=__webpack_require__("../../ds-atoms/s-htz-link/src/index.ts"),TagAlertsRegistration=__webpack_require__("../../graphql/s-mutations/src/__generated__/TagAlertsRegistration.ts"),s_use_bi_src=__webpack_require__("../../hooks/s-use-bi/src/index.ts"),s_visually_hidden_src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");function ArticleTag(_ref){let{name,contentId,url}=_ref;const[user]=(0,src_user.Z)(),tagRef=react.useRef(null),[isRegistered,setIsRegistered]=react.useState(!1),[openPopover,setOpenPopover]=react.useState(!1),biAction=(0,s_use_bi_src.Z)(),tagAlertsMutation=(0,TagAlertsRegistration.r)({onSuccess:data=>{isRegistered||"success"!==data.tagAlertsRegistration.status&&"pending"!==data.tagAlertsRegistration.status||setIsRegistered(!0),isRegistered&&("success"!==data.tagAlertsRegistration.status&&"pending"!==data.tagAlertsRegistration.status||setIsRegistered(!1))},onError:data=>{console.error(data.message)}});return name&&contentId?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(s_chip_src,{as:"button",isPressable:!0,isPressed:!0===isRegistered,onClick:user.isLoggedIn?async()=>{isRegistered||(tagAlertsMutation.mutate({input:{isUnsubscribe:!1,site:"htz",resourceId:contentId}}),biAction({action_id:9,campaign_details:"follow",campaign_name:"follow tag",feature:"TagAlert - article page",feature_type:"Content",newsletter_segment_id:contentId,newsletter_segment_name:name,newsletter_email:user.userName})),isRegistered&&tagAlertsMutation.mutate({input:{isUnsubscribe:!0,site:"htz",resourceId:contentId}})}:()=>{biAction({action_id:91,campaign_details:"open UI",campaign_name:"follow tag",feature:"TagAlert - article page",feature_type:"Content",newsletter_segment_id:contentId,newsletter_segment_name:name})},ref:tagRef,children:name}),(0,jsx_runtime.jsx)(s_visually_hidden_src.ZP,{"aria-hidden":!0,children:(0,jsx_runtime.jsx)(s_htz_link_src.Z,{href:url,tabIndex:-1,children:name})}),user?.isLoggedIn?null:(0,jsx_runtime.jsx)(s_alerts_subscription_popover_src.Z,{setRegistrationSuccess:setIsRegistered,isOpenFromParent:openPopover,contentId,alertType:"tag",onToggle:boolean=>{setOpenPopover(boolean)},refersToRef:tagRef,popoverPlacement:"top-start",tagName:name})]}):null}try{ArticleTag.displayName="ArticleTag",ArticleTag.__docgenInfo={description:"",displayName:"ArticleTag",props:{contentId:{defaultValue:null,description:"",name:"contentId",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},site:{defaultValue:null,description:"",name:"site",required:!1,type:{name:"string | null | undefined"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[] | null | undefined'}},__typename:{defaultValue:null,description:"",name:"__typename",required:!0,type:{name:'"TagPage"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-organisms/s-article-tags/src/ArticleTag.tsx#ArticleTag"]={docgenInfo:ArticleTag.__docgenInfo,name:"ArticleTag",path:"../../ds-organisms/s-article-tags/src/ArticleTag.tsx#ArticleTag"})}catch(__react_docgen_typescript_loader_error){}const c_base={gridColumnStart:"cgtMrY",gridColumnEnd:"TSpXR"},c_tagsDiv={marginTop:"fClzDx",display:"gSBWlu",flexDirection:"dugTDd",flexWrap:"kiDYix",rowGap:"eSylHt",columnGap:"hmmyz","@media all and (min-width:80em) and (max-width:101.9375em)":{rowGap:"kccAqn",columnGap:"fEzPid"},"@media all and (min-width:102em)":{marginTop:"iOmIEk",rowGap:"iXwLtA",columnGap:"heLiXv"}};function ArticleTags_ArticleTags(_ref){let{tags,inlineStyle,styleExtend=[]}=_ref;return!tags||tags.length<=0?null:(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle,children:[(0,jsx_runtime.jsx)("h3",{children:"לחצו לקבלת עדכונים בנושא:"}),(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c_tagsDiv),children:tags.map((tag=>(0,jsx_runtime.jsx)(ArticleTag,{__typename:"TagPage",name:tag.name,url:tag.url,contentId:tag.contentId},tag.contentId)))})]})}try{ArticleTags_ArticleTags.displayName="ArticleTags",ArticleTags_ArticleTags.__docgenInfo={description:"",displayName:"ArticleTags",props:{tags:{defaultValue:null,description:"The Children to be rendered inside `<ArticleTags>`",name:"tags",required:!1,type:{name:'({ contentId: string; name: string; site?: string | null | undefined; url: string; description?: ({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { ...; } & { ...; }))[] | null | undefined; } & { ...; } & { ...; })[] | null | undefined'}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyArticleTags(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <ArticleTags\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<ArticleTags styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-organisms/s-article-tags/src/ArticleTags.tsx#ArticleTags"]={docgenInfo:ArticleTags_ArticleTags.__docgenInfo,name:"ArticleTags",path:"../../ds-organisms/s-article-tags/src/ArticleTags.tsx#ArticleTags"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.2.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"articletags",children:"ArticleTags"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"ArticleTags"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-article-tags"}),"\nlisted in its ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-article-tags": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"ArticleTags"})," without listing it as a dependency\nwill work in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import ArticleTags from '@haaretz/s-article-tags';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Chip buttons for subscribing to topic notifications (based on the tags an\narticle is tagged with)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"organisms-articletags-articletags--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ArticleTags_stories={component:ArticleTags_ArticleTags,title:"Organisms/ArticleTags",args:{tags:[{__typename:"TagPage",contentId:"00000187-093c-dc15-a1c7-0bffeca10000",name:"הפיכה משטרית",url:"https://www.themarker.com/ty-tag/hm-00000187-093c-dc15-a1c7-0bffeca10000"},{__typename:"TagPage",contentId:"0000017f-da36-d494-a17f-de37e1590000",name:"בנימין נתניהו",url:"https://www.haaretz.co.il/ty-tag/benjamin-netanyahu-0000017f-da36-d494-a17f-de37e1590000"},{__typename:"TagPage",contentId:"0000017f-da2e-d432-a77f-df3fedb60000",name:'צה"ל',url:"https://www.themarker.com/ty-tag/0000017f-da2e-d432-a77f-df3fedb60000"},{__typename:"TagPage",contentId:"0000017f-da36-d494-a17f-de37e1590001",name:"בנימין נתניהו",url:"https://www.haaretz.co.il/ty-tag/benjamin-netanyahu-0000017f-da36-d494-a17f-de37e1590001"},{__typename:"TagPage",contentId:"0000017f-da2e-d432-a77f-df3fedb60002",name:'צה"ל',url:"https://www.themarker.com/ty-tag/0000017f-da2e-d432-a77f-df3fedb60002"},{__typename:"TagPage",contentId:"0000017f-da36-d494-a17f-de37e1590003",name:"בנימין נתניהו",url:"https://www.haaretz.co.il/ty-tag/benjamin-netanyahu-0000017f-da36-d494-a17f-de37e1590003"}],inlineStyle:{},styleExtend:[]},argTypes:{styleExtend:{control:!1}},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},decorators:[src.Z,...preview.an]},Overview=args=>(0,jsx_runtime.jsx)(ArticleTags_ArticleTags,_objectSpread({},args));Overview.parameters=_objectSpread(_objectSpread({},Overview.parameters),{},{docs:_objectSpread(_objectSpread({},Overview.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <ArticleTags {...args} />"},Overview.parameters?.docs?.source)})})},"../../ds-atoms/s-chip/src/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ES:()=>_Chip,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pL:()=>DEFAULT_ELEMENT});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),_haaretz_s_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),_haaretz_s_visually_hidden__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts");const _excluded=["as","isPressable","isPressed","children","screenReaderText","inlineStyle","styleExtend"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c={base:{"--defaultBorderColor":"gAmOiO",alignItems:"foGVKH",backgroundColor:"kbeApl",borderTopLeftRadius:"jWjrEQ",borderTopRightRadius:"eKtERL",borderBottomRightRadius:"BRobm",borderBottomLeftRadius:"iovjFN",color:"cwWSWx",columnGap:"cUcBkx",display:"jhKQav",fontFamily:"cGpNyn",outlineStyle:"gcyyum",outlineOffset:"fHRBnN",outlineWidth:"eGCNgh",outlineColor:"kqnFEK",overflowX:"dUvWpK",overflowY:"hRLVFh",transitionProperty:"dFHPZW",transitionDuration:"hQAmcB",transitionTimingFunction:"iaemGh",whiteSpace:"bwVBMs",fontSize:"gVscJz",lineHeight:"kvNqZl",borderBottomColor:"gkvBph",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"eejUxl",borderTopColor:"dnvTka",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"bdXHYu",borderInlineEndColor:"dREueb",borderInlineEndStyle:"hszzXi",borderInlineEndWidth:"bTnXNj",paddingInlineEnd:"fxCImo",borderInlineStartColor:"hMMnTf",borderInlineStartStyle:"itlHSH",borderInlineStartWidth:"hXXzlB",paddingInlineStart:"fPuwlT",":hover":{backgroundColor:"fMYctm"},":focus":{outlineWidth:"jyEgnP",outlineOffset:"egkthv"},":active":{transform:"iNlVNY"}},isPressed:{"--borderColor":"fFNKqs",backgroundColor:"iHqcFC",":hover":{backgroundColor:"ivwdVR"}},icon:{marginInlineStart:"BkTRv",animationDirection:"eXLpeB",animationDuration:"ieovjt",animationIterationCount:"dxsliA",animationTimingFunction:"eIaFCs"},iconAnimation:{animationName:"kijnzi"}},DEFAULT_ELEMENT="button",Chip=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function Chip(_ref,ref){let{as,isPressable=!1,isPressed=!1,children=null,screenReaderText,inlineStyle,styleExtend=[]}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);const[shouldAnimate,setShouldAnimate]=react__WEBPACK_IMPORTED_MODULE_2__.useState(!1),iconRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(isPressed?"check":"plus"),pressedStateRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(isPressed);pressedStateRef.current!==isPressed&&(pressedStateRef.current=isPressed,setShouldAnimate(!0),iconRef.current=isPressed?"check":"plus");const a11yAttrs={};isPressable&&(a11yAttrs["aria-pressed"]=isPressed);const startIcon=isPressable?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StartIcon,{iconRef,shouldAnimate,setShouldAnimate}):null,Element=as||DEFAULT_ELEMENT;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element,_objectSpread(_objectSpread(_objectSpread({ref,style:inlineStyle},attrs),a11yAttrs),{},{className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.base,isPressable&&isPressed&&c.isPressed,...styleExtend),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[startIcon,screenReaderText?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_visually_hidden__WEBPACK_IMPORTED_MODULE_5__.ZP,{children:screenReaderText}):null,children]})}))}));function _Chip(_props){return null}Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{isPressable:{defaultValue:{value:"false",computed:!1},required:!1},isPressed:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Chip,iconOpposite={check:"plus",plus:"check"};function StartIcon(_ref2){let{iconRef,shouldAnimate,setShouldAnimate}=_ref2;const[icon,setIcon]=react__WEBPACK_IMPORTED_MODULE_2__.useState(iconRef.current);shouldAnimate&&(iconRef.current=iconOpposite[icon]);const handleAnimationStart=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((_evt=>{setTimeout((()=>{setIcon(iconRef.current)}),175)}),[iconRef]),handleAnimationEnd=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((_evt=>{setShouldAnimate(!1)}),[setShouldAnimate]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_icon__WEBPACK_IMPORTED_MODULE_6__.Z,{icon,focusable:!1,styleExtend:[c.icon,shouldAnimate&&c.iconAnimation],onAnimationEnd:handleAnimationEnd,onAnimationStart:handleAnimationStart})}try{_Chip.displayName="_Chip",_Chip.__docgenInfo={description:"",displayName:"_Chip",props:{isPressable:{defaultValue:{value:"false"},description:"indicates whether the chip manages its own pressable state",name:"isPressable",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:{value:"null"},description:"The visible content of the chip",name:"children",required:!1,type:{name:"ReactNode"}},screenReaderText:{defaultValue:null,description:"Text that will only be visible to screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyChip(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Chip\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Chip styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},isPressed:{defaultValue:{value:"false"},description:"indicates whether the chip is pressed",name:"isPressed",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-chip/src/Chip.tsx#_Chip"]={docgenInfo:_Chip.__docgenInfo,name:"_Chip",path:"../../ds-atoms/s-chip/src/Chip.tsx#_Chip"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/HtzLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__),console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const _excluded=["children","href","hrefAs","locale","prefetch","replace","scroll","shallow"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const HtzLink=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function HtzLinkComponent(_ref,forwardedRef){let{children=null,href,hrefAs,locale,prefetch,replace,scroll,shallow}=_ref,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);if("string"!=typeof href&&!href.href)return console.warn('The "href" prop you passed <HtzLink /> is a "URL" object without an "href" field:',href,"\nOpting out of rendering the element"),console.trace(),null;if(function isNextLink(href){return"string"!=typeof href||!href.startsWith("http")}(href))return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3___default(),_objectSpread(_objectSpread({as:hrefAs,href,locale,prefetch,ref:forwardedRef,replace,scroll,shallow,legacyBehavior:!1},attrs),{},{children}));const url="string"==typeof href?href:href.href||void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",_objectSpread(_objectSpread({href:url,ref:forwardedRef},attrs),{},{children}))}));HtzLink.__docgenInfo={description:"",methods:[],displayName:"HtzLink",props:{children:{defaultValue:{value:"null",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=HtzLink;try{HtzLink.displayName="HtzLink",HtzLink.__docgenInfo={description:"",displayName:"HtzLink",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean | undefined"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean | undefined"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean | undefined"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean | undefined"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false | undefined"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | undefined"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | undefined"}},hrefAs:{defaultValue:null,description:"When different than `href`, the path that will be rendered in the browser\nURL bar. Used for dynamic routes. Otherwise used to decorate how `href` is\ndisplayed in the browser's URL bar.",name:"hrefAs",required:!1,type:{name:"Url | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"]={docgenInfo:HtzLink.__docgenInfo,name:"HtzLink",path:"../../ds-atoms/s-htz-link/src/HtzLink.tsx#HtzLink"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-htz-link/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-htz-link/src/HtzLink.tsx").Z},"../../ds-molecules/s-alerts-subscription-popover/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-molecules/s-alerts-subscription-popover/src/AlertsSubscriptionPopover.tsx").Z}}]);
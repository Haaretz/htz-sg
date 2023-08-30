"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[1897],{"../../ds-molecules/s-pull-quote/src/PullQuote.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InMagazinePages:()=>InMagazinePages,Overview:()=>Overview,WithoutAnAttribution:()=>WithoutAnAttribution,WithoutAnImage:()=>WithoutAnImage,default:()=>PullQuote_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),src=__webpack_require__("../../utils/s-storybook-providers/src/index.ts"),preview=__webpack_require__("../../config/l-storybook-config/preview.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),s_htz_image_src=__webpack_require__("../../ds-atoms/s-htz-image/src/index.ts");const _excluded=["quote","subText","image","inlineStyle","styleExtend","contentId","__typename"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c={base:{display:"kbCXHY",position:"cjScYX"},border:{"--borderDefault":"epxqYX",paddingInlineStart:"dwXqlO","::before":{content:"julXB",width:"qiHJR",position:"kvHVCE",height:"jLmWnd","--pq-gradStart":"cBxPgJ","--pq-gradEnd":"wQscT",backgroundImage:"SbXdw",insetInlineStart:"gnPqdD"},"@media all and (min-width:64em)":{paddingInlineStart:"gZnHkv"}},rowGap:{rowGap:"gtFPZM"},rowGapWithImg:{rowGap:"bNzOWQ","@media all and (min-width:48em) and (max-width:101.9375em)":{rowGap:"hEKEEa"}},quote:{fontWeight:"iLdtFu",fontSize:"dGDAum",lineHeight:"dRpeUM"},img:{aspectRatio:"chrYxO",width:"gbByvw",borderTopLeftRadius:"eCJvpO",borderTopRightRadius:"KuLii",borderBottomRightRadius:"cPOOyy",borderBottomLeftRadius:"dJEuaT","@media all and (min-width:64em) and (max-width:79.9375em)":{width:"gtHgtB"},"@media all and (min-width:80em) and (max-width:101.9375em)":{width:"bQQlpX"},"@media all and (min-width:102em)":{width:"dWWmac"}},subText:{color:"cwWSWx",fontWeight:"iLdtFu",fontSize:"iKjpVA",lineHeight:"cVaJzg"}};function PullQuote_PullQuote(_ref){let{quote,subText,image,inlineStyle,styleExtend=[],contentId,__typename}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const imageData=image?.files?.[0];return(0,jsx_runtime.jsxs)("aside",_objectSpread(_objectSpread({className:(0,style9.Z)(c.base,c.border,image?c.rowGapWithImg:c.rowGap,...styleExtend),style:inlineStyle},attrs),{},{children:[image&&imageData?(0,jsx_runtime.jsx)(s_htz_image_src.Z,_objectSpread(_objectSpread({},image),{},{styleExtend:[c.img],imgData:imageData,contentId:image?.contentId,widths:[56,68,112],aspect:"square",sizes:[{from:"xxl",size:"72px"},{size:"56px"}]})):null,(0,jsx_runtime.jsx)("blockquote",{children:(0,jsx_runtime.jsx)("p",{className:(0,style9.Z)(c.quote),children:quote})}),subText?(0,jsx_runtime.jsx)("span",{className:(0,style9.Z)(c.subText),children:subText}):null]}))}try{PullQuote_PullQuote.displayName="PullQuote",PullQuote_PullQuote.__docgenInfo={description:"",displayName:"PullQuote",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyQuote(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Quote\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Quote styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"({ alt: string; caption?: string | null | undefined; contentId: string; credit?: string | null | undefined; link?: string | null | undefined; photographer?: string | null | undefined; type: ImageType; files: ({ ...; } & { ...; })[]; } & { ...; } & { ...; }) | null | undefined"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"middle-wide"'},{value:'"middle-left"'},{value:'"middle-right"'},{value:'"middle-max"'}]}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string | null | undefined"}},quote:{defaultValue:null,description:"",name:"quote",required:!1,type:{name:"string | null | undefined"}},contentId:{defaultValue:null,description:"",name:"contentId",required:!1,type:{name:"string | undefined"}},__typename:{defaultValue:null,description:"",name:"__typename",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"QuoteRichTextElement"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-pull-quote/src/PullQuote.tsx#PullQuote"]={docgenInfo:PullQuote_PullQuote.__docgenInfo,name:"PullQuote",path:"../../ds-molecules/s-pull-quote/src/PullQuote.tsx#PullQuote"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.2.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"quote",children:"Quote"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Quote"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-quote"})," listed in its\n",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-pull-quote": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Quote"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import PullQuote from '@haaretz/s-pull-quote';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A pull quote is an attention-catching textual element, often a quotation or an\nexcerpt, that has been pulled from the main text it accompanies. It serves to\nhighlight important or appealing content, both allowing users to better orient\nthemselves in the text while reading or scanning, as well as to try and draw\nthem into further engaging with the content."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-pullquote--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A ",(0,jsx_runtime.jsx)(_components.code,{children:"<PullQuote>"}),"'s looks and content will be largely determined by the data\npassed to in in props, as well as the context in which it is being used:"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-an-image",children:"Without an Image"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-pullquote--without-an-image"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-an-image-or-attribution",children:"Without an Image or Attribution"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-pullquote--without-an-attribution"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"in-mazgazine-pages",children:"In Mazgazine Pages"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When used inside magazine articles, the pull quote will automatically use the\n",(0,jsx_runtime.jsx)(_components.code,{children:"--magGradStart"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"--magGradEnd"})," CSS custom props set by the page to color\nthe pull quotes border with a gradiant of the same colors used in the page's\nheader."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-pullquote--in-magazine-pages"})})]})}function PullQuote_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function PullQuote_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?PullQuote_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PullQuote_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const PullQuote_stories_c={borderColor:{"--magGradStart":"edXlcR","--magGradEnd":"hYKmBW"}},meta={component:PullQuote_PullQuote,title:"Molecules/PullQuote",args:{image:{__typename:"htz_image_Image",contentId:"00000180-7041-da8e-abc7-fe411da90001",alt:"אלוף בן",link:null,photographer:null,type:"image",credit:null,caption:null,files:[{__typename:"ImageViewModel_ImageFile",height:300,path:"50/5f/a428ee424c3fbd1ee99ee37e3d8e/2995150400.png?cmsstage",width:600,crops:{__typename:"ImageCrops",square:{__typename:"ImageCrop",height:300,width:300,x:138,y:0}}}]},quote:"בין השישה שלוש דמויות בולטות בפרשת הצוללות. דמויות אלו כוללות אישיות בכירה, שלקחה חלק מרכזי בהכנת חוות הדעת שניתנה לגבי רכישת הצוללות.",subText:"אלוף בן"},argTypes:{image:{description:"The image to display in the pull quote"},quote:{description:"The main text of the quote"},subText:{description:"The quote secondary text, usually an attribution"},styleExtend:{control:!1},contentId:{table:{disable:!0}},__typename:{table:{disable:!0}},"...attrs":{control:!1,description:"`<PullQuote />` will pass any additional prop as attributes to the underlying `aside` element"}},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},decorators:[src.Z,...preview.an]},Overview=args=>(0,jsx_runtime.jsx)(PullQuote_PullQuote,PullQuote_stories_objectSpread({},args)),WithoutAnImage=args=>(0,jsx_runtime.jsx)(PullQuote_PullQuote,PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},args),{},{image:null})),WithoutAnAttribution=args=>(0,jsx_runtime.jsx)(PullQuote_PullQuote,PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},args),{},{subText:null,image:null})),InMagazinePages=args=>(0,jsx_runtime.jsx)(PullQuote_PullQuote,PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},args),{},{subText:"אלוף בן",image:null,styleExtend:[PullQuote_stories_c.borderColor]})),PullQuote_stories=meta;Overview.parameters=PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},Overview.parameters),{},{docs:PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},Overview.parameters?.docs),{},{source:PullQuote_stories_objectSpread({originalSource:"args => <PullQuote {...args} />"},Overview.parameters?.docs?.source)})}),WithoutAnImage.parameters=PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},WithoutAnImage.parameters),{},{docs:PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},WithoutAnImage.parameters?.docs),{},{source:PullQuote_stories_objectSpread({originalSource:"args => <PullQuote {...args} image={null} />"},WithoutAnImage.parameters?.docs?.source)})}),WithoutAnAttribution.parameters=PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},WithoutAnAttribution.parameters),{},{docs:PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},WithoutAnAttribution.parameters?.docs),{},{source:PullQuote_stories_objectSpread({originalSource:"args => <PullQuote {...args} subText={null} image={null} />"},WithoutAnAttribution.parameters?.docs?.source)})}),InMagazinePages.parameters=PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},InMagazinePages.parameters),{},{docs:PullQuote_stories_objectSpread(PullQuote_stories_objectSpread({},InMagazinePages.parameters?.docs),{},{source:PullQuote_stories_objectSpread({originalSource:"args => <PullQuote {...args} subText={subText} image={null} styleExtend={[c.borderColor]} />"},InMagazinePages.parameters?.docs?.source)})})},"../../ds-atoms/s-htz-image/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-htz-image/src/HtzImage.tsx").Z},"../../hooks/s-use-bi/src/useBiDataContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BiDataContextProvider,Z:()=>useBiDataContext});var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),discardNullableValues=__webpack_require__("../../utils/s-common-utils/src/discardNullableValues/index.ts"),usePPDataStore=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx"),configShim=__webpack_require__("../../config/l-storybook-config/wwwroot/public/configShim.js"),src_user=__webpack_require__("../../utils/s-atoms/src/user/index.ts");const src=function usePageType(){return"promotions-page"===configShim.Z.get("appType")?"promotions":void 0};var capitalize=__webpack_require__("../../utils/s-common-utils/src/capitalize/index.ts"),src_platform=__webpack_require__("../../utils/s-atoms/src/platform/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const noop=()=>{};const BiDataContext=react.createContext(void 0);function BiDataContextProvider(_ref){let{children}=_ref;const biData=function useCollectBiData(){const _window="undefined"!=typeof window?window:void 0,usePurchasePageDataStore="promotions-page"===configShim.Z.get("appType")?usePPDataStore.JV:noop,[user]=(0,src_user.Z)(),page_type=src(),ppDataStore=usePurchasePageDataStore(),[platform]=(0,src_platform.Z)(),currentPageUrl=_window?new URL(_window.document.URL):void 0,urlSearchParams=new URLSearchParams(_window?.location.search),{anonymousId:anonymous_id,extendedType:user_type}=user||{},urlParamsObj=Array.from(urlSearchParams.entries()).reduce(((acc,_ref)=>{let[key,value]=_ref;return _objectSpread(_objectSpread({},acc),{},{[key]:value})}),{}),{utm_medium,htm_medium,utm_content,htm_content,utm_source,htm_source,utm_campaign,htm_campaign,utm_segment,utm_type,htm_type}=urlParamsObj;return Promise.all([]).then((function(){return(0,discardNullableValues.Z)({anonymous_id,user_type,site:currentPageUrl?.origin,url:currentPageUrl?.href,page_type:page_type&&(0,capitalize.Z)(page_type),article_id:noop(),writer_name:noop(),article_type:noop(),primary_section:noop(),secondary_section:noop(),paywall_status:noop(),blocked:noop(),ad_block_state:noop(),platform:(0,capitalize.Z)(platform),useragent:_window?.navigator.userAgent,utm_medium:utm_medium||htm_medium,utm_content:utm_content||htm_content,utm_source:utm_source||htm_source,utm_campaign:utm_campaign||htm_campaign,utm_type:utm_type||htm_type,referrer_type:_window?.document?.referrer,prod_no:ppDataStore?.productNumber,sale_code:ppDataStore?.saleCode,promotions_no:ppDataStore?.promotionNumber,stage:noop(),action_id:noop(),feature:noop(),feature_type:noop(),personal_feature:noop(),campaign_name:noop(),campaign_details:noop(),scroll_height:noop(),ab_test_group:noop(),ab_test_name:noop(),additional_info:noop(),next_article_id:noop(),next_article_teaser_id:noop(),next_article_noinlist:noop(),recommendation_type:noop(),next_article_viewname:noop(),next_article_list_name:noop(),next_article_list_id:noop(),next_article_noinpage:noop(),newsletter_segment_id:noop(),newsletter_segment_name:noop(),newsletter_email:noop(),darkmode:noop(),utm_segment,marketing_element:noop()})}))}();return(0,jsx_runtime.jsx)(BiDataContext.Provider,{value:biData,children})}function useBiDataContext(){const context=react.useContext(BiDataContext);if(void 0===context)throw new Error("useBiDataContext must be used within a BiDataContext.");return context}try{BiDataContextProvider.displayName="BiDataContextProvider",BiDataContextProvider.__docgenInfo={description:"",displayName:"BiDataContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"]={docgenInfo:BiDataContextProvider.__docgenInfo,name:"BiDataContextProvider",path:"../../hooks/s-use-bi/src/useBiDataContext.tsx#BiDataContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>PPDataStoreContextProvider,vA:()=>usePPCouponStore,JV:()=>usePPDataStore,Z_:()=>usePPDataStoreActions,c:()=>usePPUpdateCouponStore,NJ:()=>usePpDataStoreInitialization});var objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/index.js"),src=__webpack_require__("../../shared/s-consts/src/index.ts");const src_removeQueryParam=function removeQueryParam(param,router){const{pathname,query}=router,params=new URLSearchParams(query);params.delete(param),router.replace({pathname,query:params.toString()},void 0,{shallow:!0})};var console=__webpack_require__("../../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const getPPDataStoreActionsContext=function actionsContextFactory(){const Context=react.createContext(void 0);return function(){return Context}}(),getPPDataStoreContext=function dataContextFactory(){const Context=react.createContext(void 0);return function(){return Context}}(),PPCouponStoreContext=react.createContext(void 0),PPCouponUpdateStoreContext=react.createContext(void 0);function PPDataStoreContextProvider(_ref){let{children,initialState}=_ref;const[store,setStore]=react.useState(initialState||{}),[coupon,setCoupon]=react.useState(null),storeActions=react.useMemo((()=>({updateStore:newState=>{setStore((prevState=>_objectSpread(_objectSpread({},prevState),newState)))},clearStore:field=>setStore((prevState=>{if(field){const{[field]:deleted}=prevState;return(0,objectWithoutProperties.Z)(prevState,[field].map(_toPropertyKey))}return{referrer:prevState.referrer}}))})),[]);react.useEffect((()=>{const referrer=document.referrer;referrer&&!store.referrer&&storeActions.updateStore({referrer})}),[storeActions,store.referrer]);const PPDataStoreContext=getPPDataStoreContext(),PPDataStoreActionsContext=getPPDataStoreActionsContext();return(0,jsx_runtime.jsx)(PPCouponStoreContext.Provider,{value:coupon,children:(0,jsx_runtime.jsx)(PPCouponUpdateStoreContext.Provider,{value:setCoupon,children:(0,jsx_runtime.jsx)(PPDataStoreContext.Provider,{value:store,children:(0,jsx_runtime.jsx)(PPDataStoreActionsContext.Provider,{value:storeActions,children})})})})}function usePPDataStore(){const context=react.useContext(getPPDataStoreContext());if(!context)throw new Error("usePPDataStore must be used within a PPDataStoreContextProvider");return context}function usePPDataStoreActions(){const context=react.useContext(getPPDataStoreActionsContext());if(!context)throw new Error("usePPDataStoreActions must be used within a PPDataStoreActionsContextProvider");return context}function usePPCouponStore(){const context=react.useContext(PPCouponStoreContext);if(void 0===context)throw new Error("usePPCouponStore must be used within a PPCouponStoreContext");return context}function usePPUpdateCouponStore(){const context=react.useContext(PPCouponUpdateStoreContext);if(!context)throw new Error("usePPUpdateCouponStore must be used within a PPCouponUpdateStoreContext");return context}function usePpDataStoreInitialization(){const store=usePPDataStore(),{updateStore}=usePPDataStoreActions(),router=(0,dist.useRouter)();react.useEffect((()=>{if(!store.contentId){const storeDataFromUrl=router.query.storeData,storeString="string"==typeof storeDataFromUrl?decodeURIComponent(storeDataFromUrl):sessionStorage.getItem(src.Mc);if(storeString)try{const restoredStore=JSON.parse(storeString);restoredStore&&updateStore(_objectSpread({},restoredStore)),sessionStorage.removeItem(src.Mc),storeDataFromUrl&&src_removeQueryParam("storeData",router)}catch(error){console.error(error.message)}}}),[router,store,updateStore])}try{usePPDataStore.displayName="usePPDataStore",usePPDataStore.__docgenInfo={description:"",displayName:"usePPDataStore",props:{initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"PPDataStoreContextProps | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx#usePPDataStore"]={docgenInfo:usePPDataStore.__docgenInfo,name:"usePPDataStore",path:"../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx#usePPDataStore"})}catch(__react_docgen_typescript_loader_error){}},"../../utils/s-common-utils/src/discardNullableValues/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_discardNullableValues});const src_discardNullableValues=obj=>{const result={};for(const key in obj)null!==obj[key]&&void 0!==obj[key]&&(result[key]=obj[key]);return result}},"../../utils/s-storybook-providers/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),useBiDataContext=__webpack_require__("../../hooks/s-use-bi/src/useBiDataContext.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const src=function StorybookProviders(Story,context){return(0,jsx_runtime.jsx)(useBiDataContext.i,{children:(0,jsx_runtime.jsx)(Story,_objectSpread({},context))})}}}]);
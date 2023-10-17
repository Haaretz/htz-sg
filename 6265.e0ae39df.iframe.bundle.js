"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[6265],{"../../graphql/s-fragments/src/__generated__/HTZ_image_Image.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ImageFragmentGql});const ImageFragmentGql="\n    fragment ImageFragment on htz_image_Image {\n  __typename\n  alt\n  caption\n  contentId\n  credit\n  files {\n    __typename\n    crops {\n      __typename\n      headline {\n        ...ImageCropFragment\n      }\n      landscape {\n        ...ImageCropFragment\n      }\n      regular {\n        ...ImageCropFragment\n      }\n      square {\n        ...ImageCropFragment\n      }\n      vertical {\n        ...ImageCropFragment\n      }\n      wide {\n        ...ImageCropFragment\n      }\n    }\n    height\n    path\n    width\n  }\n  link\n  photographer\n  type\n}\n    "},"../../graphql/s-fragments/src/__generated__/ImageCrop.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>ImageCropFragmentGql});const ImageCropFragmentGql="\n    fragment ImageCropFragment on ImageCrop {\n  __typename\n  height\n  width\n  x\n  y\n}\n    "},"../../graphql/s-pp-queries/src/__generated__/PurchasePage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RF:()=>usePurchasePagePersonalQuery});__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js");var HTZ_image_Image=__webpack_require__("../../graphql/s-fragments/src/__generated__/HTZ_image_Image.ts"),ImageCrop=__webpack_require__("../../graphql/s-fragments/src/__generated__/ImageCrop.ts");var useQuery=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),GraphqlFetcher=(__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs"),__webpack_require__("../../graphql/s-graphql-fetcher/src/GraphqlFetcher.tsx"));const PurchasePagePersonalQueryDocument=`\n    query PurchasePagePersonalQuery($couponId: String, $pathSegment: String, $selectedOfferId: String, $ticketId: String, $userId: String, $cartData: Boolean, $previousSteps: String) {\n  PurchasePage(\n    couponId: $couponId\n    pathSegment: $pathSegment\n    selectedOfferId: $selectedOfferId\n    ticketId: $ticketId\n    userId: $userId\n    cartData: $cartData\n    previousSteps: $previousSteps\n  ) {\n    pageData {\n      ...PageDataFragment\n    }\n  }\n}\n    \n    fragment PageDataFragment on PageData {\n  allSteps {\n    ...StepDataFragment\n  }\n  contentId\n  couponId\n  couponErrorMessage\n  toggleKicker {\n    ...PurchaseToggleKickerFragment\n  }\n  annual {\n    ...PurchaseOfferFragment\n  }\n  marketingBullets {\n    ...MarketingBulletFragment\n  }\n  monthly {\n    ...PurchaseOfferFragment\n  }\n  personalCouponId\n  steps {\n    ...StepDataFragment\n  }\n  specialSaleData {\n    ...SpecialSaleDataFragment\n  }\n  thankYouPageText\n  cartData {\n    ...CartDataFragment\n  }\n  image {\n    ...ImageFragment\n  }\n  selectedOffer {\n    ...PurchaseOfferFragment\n  }\n}\n    \n\n    fragment StepDataFragment on StepData {\n  __typename\n  content {\n    ...HtmlNodeFragment\n  }\n  instructions\n  messageIds\n  messages\n  name\n  title\n}\n    \n\n    fragment HtmlNodeFragment on HtmlNode {\n  __typename\n  as: tag\n  content\n  id\n}\n    \n\n    fragment PurchaseToggleKickerFragment on PurchaseToggleKicker {\n  __typename\n  billing\n  text\n}\n    \n\n    fragment PurchaseOfferFragment on PurchaseOffer {\n  __typename\n  benefits {\n    ...HtmlNodeFragment\n  }\n  benefitsHeading\n  contentId\n  description\n  exclusive\n  exclusiveStrip\n  legalText {\n    ...HtmlNodeFragment\n  }\n  line1Text {\n    ...HtmlNodeFragment\n  }\n  line2Text {\n    ...HtmlNodeFragment\n  }\n  note\n  offerHighlight\n  offerType\n  paymentType\n  periodCalc\n  prices\n  product\n  productName\n  productNumber\n  promotionNumber\n  saleCode\n  thankYouMailTemplate\n}\n    \n\n    fragment MarketingBulletFragment on MarketingBullet {\n  __typename\n  text\n  title\n}\n    \n\n    fragment SpecialSaleDataFragment on SpecialSaleData {\n  __typename\n  exclusive\n  image {\n    ...ImageFragment\n  }\n  title\n}\n    \n${HTZ_image_Image.I}\n${ImageCrop.T}\n\n    fragment CartDataFragment on CartData {\n  approveDebtClaim\n  contentId\n  periodCalc\n  prices\n  productNumber\n  promotionNumber\n  saleCode\n  thankYouMailTemplate\n  paymentType\n  __typename\n}\n    `,usePurchasePagePersonalQuery=(variables,options)=>(0,useQuery.a)(void 0===variables?["PurchasePagePersonalQuery"]:["PurchasePagePersonalQuery",variables],(0,GraphqlFetcher.Z)(PurchasePagePersonalQueryDocument,variables),options);usePurchasePagePersonalQuery.document=PurchasePagePersonalQueryDocument,usePurchasePagePersonalQuery.getKey=variables=>void 0===variables?["PurchasePagePersonalQuery"]:["PurchasePagePersonalQuery",variables];usePurchasePagePersonalQuery.fetcher=(variables,options)=>(0,GraphqlFetcher.Z)(PurchasePagePersonalQueryDocument,variables,options)},"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsInstructions});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{color:"gjYftY",fontWeight:"jPzznp",fontFamily:"cGpNyn",textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:48em) and (max-width:79.9375em)":{fontSize:"laszXO",lineHeight:"jjEZxM"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"dZvUak",lineHeight:"bynegB"},"@media all and (min-width:102em)":{fontSize:"jLiuzX",lineHeight:"cSZpZl"}}};function PromotionsInstructions(_ref){let{instructions,inlineStyle,styleExtend=[]}=_ref;return instructions?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base,...styleExtend),id:"pp-page-instructions",style:inlineStyle,"data-testid":"pp-instructions",children:instructions}):null}try{PromotionsInstructions.displayName="PromotionsInstructions",PromotionsInstructions.__docgenInfo={description:"",displayName:"PromotionsInstructions",props:{instructions:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsInstructions>`",name:"instructions",required:!1,type:{name:"string | null | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"]={docgenInfo:PromotionsInstructions.__docgenInfo,name:"PromotionsInstructions",path:"../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx#PromotionsInstructions"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-instructions/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-atoms/s-pp-instructions/src/PromotionsInstructions.tsx").Z},"../../pp-atoms/s-pp-step/src/Step.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Step});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{fontFamily:"cGpNyn",color:"URsRO",textAlign:"kooHYa",fontSize:"hmImpX",lineHeight:"bwFuZl","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"}},current:{fontWeight:"iLdtFu"}};function Step(_ref){let{currentStep,allSteps}=_ref;const stepNames=allSteps.map((step=>step.name)),numOfSteps=stepNames.length,stepPositionInArray=stepNames.indexOf(currentStep),step=-1===stepPositionInArray?NaN:stepPositionInArray+1;return Number.isNaN(step)?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base),"data-testid":"pp-step",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.current),children:["שלב"," ",step]})," ","מתוך"," ",numOfSteps]})}try{Stepcomponent.displayName="Stepcomponent",Stepcomponent.__docgenInfo={description:"",displayName:"Stepcomponent",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"debt"'},{value:'"login"'},{value:'"offers"'},{value:'"payment"'},{value:'"specialMax"'},{value:'"specialSubscription"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"validSubscription"'}]}},allSteps:{defaultValue:null,description:"",name:"allSteps",required:!0,type:{name:"StepDataFragment[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.component.tsx#Stepcomponent"]={docgenInfo:Stepcomponent.__docgenInfo,name:"Stepcomponent",path:"../../pp-atoms/s-pp-step/src/Step.component.tsx#Stepcomponent"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsSystemNotice});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{color:"gjYftY",fontWeight:"jPzznp",textAlign:"kooHYa",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hJgbZA",lineHeight:"cLPvYH"},"@media all and (min-width:102em)":{fontSize:"krpnci",lineHeight:"dPBKZn"}}};function PromotionsSystemNotice(_ref){let{notice}=_ref;return notice?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base),children:notice}):null}try{PromotionsSystemNotice.displayName="PromotionsSystemNotice",PromotionsSystemNotice.__docgenInfo={description:"",displayName:"PromotionsSystemNotice",props:{notice:{defaultValue:null,description:"The text to render inside `<PromotionsSystemNotice>`",name:"notice",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx#PromotionsSystemNotice"]={docgenInfo:PromotionsSystemNotice.__docgenInfo,name:"PromotionsSystemNotice",path:"../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx#PromotionsSystemNotice"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PromotionsSystemNotices});var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js");const src=__webpack_require__("../../pp-atoms/s-pp-system-notice/src/PromotionsSystemNotice.tsx").Z;var style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{marginTop:"cyerGB"}};function PromotionsSystemNotices(_ref){let{notices}=_ref;return null!=notices&&notices.length?(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(c.base),"data-testid":"pp-notices",children:notices.map((notice=>(0,jsx_runtime.jsx)(src,{notice},notice)))}):null}try{PromotionsSystemNotices.displayName="PromotionsSystemNotices",PromotionsSystemNotices.__docgenInfo={description:"",displayName:"PromotionsSystemNotices",props:{notices:{defaultValue:null,description:"The Children to be rendered inside `<PromotionsSystemNotices>`",name:"notices",required:!1,type:{name:"string[] | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx#PromotionsSystemNotices"]={docgenInfo:PromotionsSystemNotices.__docgenInfo,name:"PromotionsSystemNotices",path:"../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx#PromotionsSystemNotices"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-title/src/PageTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PageTitle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{color:"gjYftY",fontWeight:"iLdtFu",textAlign:"kooHYa",fontFamily:"cGpNyn",marginInlineEnd:"gzedBA",marginInlineStart:"bMPiZO",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (max-width:37.4375em)":{maxWidth:"hoQPzd"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"dZvUak",lineHeight:"bynegB"}}};function PageTitle(_ref){let{children,styleExtend=[],inlineStyle}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(c.base,...styleExtend),style:inlineStyle,"data-testid":"pp-title",children})}try{PageTitle.displayName="PageTitle",PageTitle.__docgenInfo={description:"",displayName:"PageTitle",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-title/src/PageTitle.tsx#PageTitle"]={docgenInfo:PageTitle.__docgenInfo,name:"PageTitle",path:"../../pp-atoms/s-pp-title/src/PageTitle.tsx#PageTitle"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-atoms/s-pp-title/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-atoms/s-pp-title/src/PageTitle.tsx").Z},"../../pp-hooks/s-use-pp-data-variables/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../pp-hooks/s-use-pp-data-variables/src/usePPDataVariables.ts").Z},"../../pp-hooks/s-use-pp-data-variables/src/usePPDataVariables.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>usePPDataVariables,a:()=>getPpDataVariableFromContext});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),user=__webpack_require__("../../utils/s-atoms/src/user/index.ts");const src_discardFields=(object,discard)=>{const result={};for(const key in object)discard.includes(key)||(result[key]=object[key]);return result};var discardNullableValues=__webpack_require__("../../utils/s-common-utils/src/discardNullableValues/index.ts"),isAbandonedCartRoute=__webpack_require__("../../pp-utils/s-pp-routing-utils/src/isAbandonedCartRoute/index.ts"),usePPDataStore=__webpack_require__("../../pp-hooks/s-use-pp-data-store/src/usePPDataStore.tsx"),usePPStepsOffsetStore=__webpack_require__("../../pp-hooks/s-use-pp-offset-steps-store/src/usePPStepsOffsetStore.tsx"),dist=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/index.js"),react=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function getVariabelFromQuery(query,isLoggedIn){return{pathSegment:query.pathSegment,cartData:isLoggedIn&&(0,isAbandonedCartRoute.Z)(query),previousSteps:""}}function getPpDataVariableFromContext(ctx,isLoggedIn){return(0,discardNullableValues.Z)(getVariabelFromQuery(ctx.query,isLoggedIn))}const usePPDataVariables=function usePpDataVariables(excludeValues){const router=(0,dist.useRouter)(),{contentId}=(0,usePPDataStore.JV)(),couponId=(0,usePPDataStore.vA)(),offsetSteps=(0,usePPStepsOffsetStore.np)(),[userData]=(0,user.Z)(),previousSteps=offsetSteps.join(","),variabelFromQuery=react.useMemo((()=>getVariabelFromQuery(router.query,userData.isLoggedIn||!1)),[router.query,null==userData?void 0:userData.isLoggedIn]);return react.useMemo((()=>(0,discardNullableValues.Z)(src_discardFields(_objectSpread(_objectSpread({},variabelFromQuery),{},{selectedOfferId:null!=userData&&userData.isLoggedIn?contentId:void 0,couponId,previousSteps:variabelFromQuery.previousSteps||previousSteps}),excludeValues||[]))),[contentId,couponId,excludeValues,previousSteps,null==userData?void 0:userData.isLoggedIn,variabelFromQuery])}},"../../pp-molecules/s-pp-header/src/PpHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PpHeader});var jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),PurchasePage=__webpack_require__("../../graphql/s-pp-queries/src/__generated__/PurchasePage.ts"),src=__webpack_require__("../../pp-hooks/s-use-pp-data-variables/src/index.ts"),Step_component=__webpack_require__("../../pp-atoms/s-pp-step/src/Step.component.tsx");function Step(_ref){var _data$PurchasePage;let{currentStep}=_ref;const variables=(0,src.Z)(),{data}=(0,PurchasePage.RF)(variables,{enabled:!1}),allSteps=null==data||null===(_data$PurchasePage=data.PurchasePage)||void 0===_data$PurchasePage||null===(_data$PurchasePage=_data$PurchasePage.pageData)||void 0===_data$PurchasePage?void 0:_data$PurchasePage.allSteps;return allSteps?(0,jsx_runtime.jsx)(Step_component.Z,{allSteps,currentStep}):null}try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"debt"'},{value:'"login"'},{value:'"offers"'},{value:'"payment"'},{value:'"specialMax"'},{value:'"specialSubscription"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"validSubscription"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-atoms/s-pp-step/src/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"../../pp-atoms/s-pp-step/src/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}const s_pp_step_src=Step;var s_pp_title_src=__webpack_require__("../../pp-atoms/s-pp-title/src/index.ts"),s_pp_instructions_src=__webpack_require__("../../pp-atoms/s-pp-instructions/src/index.ts");const s_pp_system_notices_src=__webpack_require__("../../pp-atoms/s-pp-system-notices/src/PromotionsSystemNotices.tsx").Z;var isGqlPpStep=__webpack_require__("../../pp-utils/s-pp-routing-utils/src/isGqlPpStep/index.ts"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const c={base:{textAlign:"kooHYa",marginInlineStart:"bMPiZO",marginInlineEnd:"gzedBA",maxWidth:"clobCc","@media all and (min-width:80em)":{marginInlineStart:"griTvt",marginInlineEnd:"coNkVT",marginTop:"jwZBPR",maxWidth:"kUsvdA"}},headerTextArea:{marginTop:"fClzDx",fontFamily:"cGpNyn","@media all and (max-width:47.9375em)":{marginTop:"eZgvbU"}},ppTitle:{}};function PpHeader(_ref){let{currentStep,title,instructions,messages,styleExtend=[]}=_ref;return(0,jsx_runtime.jsxs)("header",{className:(0,style9.Z)(c.base,...styleExtend),children:[(0,isGqlPpStep.Z)(currentStep)?(0,jsx_runtime.jsx)(s_pp_step_src,{currentStep}):null,(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(c.headerTextArea),children:[title?(0,jsx_runtime.jsx)(s_pp_title_src.Z,{styleExtend:[c.ppTitle],children:title}):null,(0,jsx_runtime.jsx)(s_pp_instructions_src.Z,{instructions}),(0,jsx_runtime.jsx)(s_pp_system_notices_src,{notices:messages})]})]})}try{PpHeader.displayName="PpHeader",PpHeader.__docgenInfo={description:"",displayName:"PpHeader",props:{currentStep:{defaultValue:null,description:"The Current Step of the user, can be chosen out of these steps.",name:"currentStep",required:!0,type:{name:"enum",value:[{value:'"debt"'},{value:'"login"'},{value:'"offers"'},{value:'"payment"'},{value:'"specialMax"'},{value:'"specialSubscription"'},{value:'"thankYou"'},{value:'"updateDetails"'},{value:'"validSubscription"'},{value:'"error"'},{value:'"coupon"'},{value:'"paymentChange"'},{value:'"changeSuccess"'},{value:'"quickPlanChange"'}]}},title:{defaultValue:null,description:"The title of the Promotion page",name:"title",required:!1,type:{name:"string | null | undefined"}},instructions:{defaultValue:null,description:"instructions, will be set as a string || undefined",name:"instructions",required:!1,type:{name:"string | null | undefined"}},messages:{defaultValue:null,description:"notices will be set as an array of strings.",name:"messages",required:!1,type:{name:"string[] | null | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"styleExtend",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-molecules/s-pp-header/src/PpHeader.tsx#PpHeader"]={docgenInfo:PpHeader.__docgenInfo,name:"PpHeader",path:"../../pp-molecules/s-pp-header/src/PpHeader.tsx#PpHeader"})}catch(__react_docgen_typescript_loader_error){}},"../../pp-utils/s-pp-routing-utils/src/isAbandonedCartRoute/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_isAbandonedCartRoute});const src_isAbandonedCartRoute=function isAbandonedCartRoute(query){return"preference"in query}}}]);
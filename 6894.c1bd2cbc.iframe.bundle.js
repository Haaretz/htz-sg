"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[6894],{"../../pp-organisms/s-offer-card/src/OfferCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>OfferCard});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),src_user=__webpack_require__("../../utils/s-atoms/src/user/index.ts"),src=__webpack_require__("../../ds-atoms/s-card/src/index.ts"),isHtmlNode=__webpack_require__("../../utils/s-type-predicates/src/isHtmlNode/index.ts"),s_use_impression_observer_src=__webpack_require__("../../hooks/s-use-impression-observer/src/index.ts"),s_use_pp_offer_card_operations_src=__webpack_require__("../../pp-hooks/s-use-pp-offer-card-operations/src/index.ts"),next_link=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),react=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),s_pp_terms_src=__webpack_require__("../../pp-molecules/s-pp-terms/src/index.ts"),s_use_bi_src=__webpack_require__("../../hooks/s-use-bi/src/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c_base={fontSize:"fyHdVr",lineHeight:"iKTruj","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"cEKNZk",lineHeight:"gMAJcp"},"@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"},marginBottom:"biWxPv"},c_cancelText={color:"bzRhTf",fontWeight:"iLdtFu"},c_conditionsBtn={color:"dvkVMF",backgroundColor:"KqcXP",position:"cjScYX",textDecorationLine:"dLUwcr",zIndex:"jvKoxA",":hover":{color:"jxAkeG"}};function CancellableLine(_ref){let{legalText,biData,onTermsButtonClick,loading}=_ref;const[isOpen,setIsOpen]=react.useState(!1),biAction=(0,s_use_bi_src.Z)(),isRichTextArray=legalText.every(isHtmlNode.Z),ppTemsOfferProps=onTermsButtonClick?{onButtonClick:onTermsButtonClick,loading}:{};return(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(c_base),"data-testid":"offer-cancellable-line",children:[(0,jsx_runtime.jsxs)("span",{className:(0,style9.Z)(c_cancelText),children:["ניתן לבטל בכל עת."," ",(0,jsx_runtime.jsx)("button",{"data-testid":"offer-cancellable-line-btn",className:(0,style9.Z)(c_conditionsBtn),onClick:()=>{setIsOpen(!isOpen),biAction(_objectSpread(_objectSpread({},biData),{},{action_id:26}))},children:"תנאי רכישה"})]}),(0,jsx_runtime.jsx)(s_pp_terms_src.Z,_objectSpread({onToggle:setIsOpen,isOpen,title:"תנאי רכישה",labelledBy:"purchase-terms",content:isRichTextArray?legalText:[]},ppTemsOfferProps))]})}try{CancellableLine.displayName="CancellableLine",CancellableLine.__docgenInfo={description:"",displayName:"CancellableLine",props:{legalText:{defaultValue:null,description:"",name:"legalText",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[]'}},biData:{defaultValue:null,description:"",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}},onTermsButtonClick:{defaultValue:null,description:"",name:"onTermsButtonClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>, biDataExtend?: BiDataOverrides | undefined) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/CancellableLine/CancellableLine.tsx#CancellableLine"]={docgenInfo:CancellableLine.__docgenInfo,name:"CancellableLine",path:"../../pp-organisms/s-offer-card/src/components/CancellableLine/CancellableLine.tsx#CancellableLine"})}catch(__react_docgen_typescript_loader_error){}const components_CancellableLine=CancellableLine,CornerStrip_c_base={position:"bEvNbr",top:"LAxam",insetInlineStart:"fCQHJh","@media all and (max-width:37.4375em)":{top:"lnTYBW",insetInlineStart:"bYkCBH"}},CornerStrip_c_cornerStrip={fontSize:"dhZdKC",height:"jXmXEB",width:"hHGIsI"},CornerStrip_c_text={position:"bEvNbr",color:"kAWnRk",width:"cRUUAa",top:"imFxlz",insetInlineStart:"khdfJS",transform:"dqImtA",fontWeight:"bpQkXn",textAlign:"kooHYa",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:80em)":{fontSize:"fbDSck",lineHeight:"cIlhEA"}};function CornerStrip(_ref){let{exclusiveStrip}=_ref;return(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(CornerStrip_c_base),children:[(0,jsx_runtime.jsx)("svg",{className:(0,style9.Z)(CornerStrip_c_cornerStrip),focusable:!1,tabIndex:-1,children:(0,jsx_runtime.jsx)("use",{xlinkHref:"#offer-corner-strip"})}),(0,jsx_runtime.jsx)("span",{className:(0,style9.Z)(CornerStrip_c_text),children:exclusiveStrip})]})}try{CornerStrip.displayName="CornerStrip",CornerStrip.__docgenInfo={description:"",displayName:"CornerStrip",props:{exclusiveStrip:{defaultValue:null,description:"",name:"exclusiveStrip",required:!0,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/CornerStrip/CornerStrip.tsx#CornerStrip"]={docgenInfo:CornerStrip.__docgenInfo,name:"CornerStrip",path:"../../pp-organisms/s-offer-card/src/components/CornerStrip/CornerStrip.tsx#CornerStrip"})}catch(__react_docgen_typescript_loader_error){}const components_CornerStrip=CornerStrip;var s_icon_src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),s_rich_text_src=__webpack_require__("../../ds-atoms/s-rich-text/src/index.ts");function OfferBenefits_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function OfferBenefits_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?OfferBenefits_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OfferBenefits_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const OfferBenefits_c={base:{display:"gSBWlu",flexDirection:"iMkoWi",alignItems:"UXrF",width:"cRUUAa",marginTop:"cyerGB"},line:{display:"gSBWlu",columnGap:"cUcBkx",marginBottom:"lbEyiT"},heading:{fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"},marginBottom:"lbEyiT"},richText:{fontSize:"fyHdVr",lineHeight:"iKTruj","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"cEKNZk",lineHeight:"gMAJcp"},"@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},checkmark:{fontSize:"fUqtKm",marginTop:"esLfzT"},button:{fontWeight:"iLdtFu",backgroundColor:"KqcXP",fontSize:"fUqtKm",position:"cjScYX",zIndex:"jvKoxA"},hiddenDesktop:{"@media all and (min-width:48em)":{display:"iQyyxO"}},hiddenMobile:{"@media all and (max-width:47.9375em)":{display:"gbedSn"}},rotateIcon:{transform:"hQpfBf"}};function OfferBenefits(_ref){let{items,heading,contracted,biData}=_ref;const[isOpen,setIsOpen]=react.useState(!1),biAction=(0,s_use_bi_src.Z)();return(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(OfferBenefits_c.base),"data-testid":"offer-benefits",children:[heading&&(0,jsx_runtime.jsx)("h3",{className:(0,style9.Z)(OfferBenefits_c.heading),children:heading}),null==items?void 0:items.map(((item,index)=>{if(!(0,isHtmlNode.Z)(item))return null;const{as,content}=item,shouldShow=!contracted||(isOpen||!isOpen&&0===index);return(0,jsx_runtime.jsxs)("div",{className:(0,style9.Z)(OfferBenefits_c.line,!shouldShow&&OfferBenefits_c.hiddenMobile),children:[(0,jsx_runtime.jsx)(s_icon_src.Z,{icon:"check",variant:"success",styleExtend:[OfferBenefits_c.checkmark]}),(0,jsx_runtime.jsx)(s_rich_text_src.Z,{as,content,styleExtend:[OfferBenefits_c.richText]})]},content)})),contracted&&!isOpen&&(0,jsx_runtime.jsxs)("button",{className:(0,style9.Z)(OfferBenefits_c.button,OfferBenefits_c.hiddenDesktop),style:{"--degreeByState":isOpen?"180deg":"0"},onClick:()=>{setIsOpen((prev=>!prev)),biData&&biAction(OfferBenefits_objectSpread(OfferBenefits_objectSpread({},biData),{},{action_id:169,feature:"Promotions benefits mobile arrow",feature_type:"Marketing"}))},children:["עוד יתרונות ",(0,jsx_runtime.jsx)(s_icon_src.Z,{icon:"chevron-bottom",styleExtend:[OfferBenefits_c.rotateIcon]})]})]})}try{OfferBenefits.displayName="OfferBenefits",OfferBenefits.__docgenInfo={description:"",displayName:"OfferBenefits",props:{items:{defaultValue:null,description:"The items to be shown",name:"items",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[] | null | undefined'}},heading:{defaultValue:null,description:"The heading of the items",name:"heading",required:!1,type:{name:"string | null | undefined"}},contracted:{defaultValue:null,description:"Adds an arrow button that acts as a collapse for the items",name:"contracted",required:!1,type:{name:"boolean | undefined"}},biData:{defaultValue:null,description:"",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferBenefits/OfferBenefits.tsx#OfferBenefits"]={docgenInfo:OfferBenefits.__docgenInfo,name:"OfferBenefits",path:"../../pp-organisms/s-offer-card/src/components/OfferBenefits/OfferBenefits.tsx#OfferBenefits"})}catch(__react_docgen_typescript_loader_error){}const components_OfferBenefits=OfferBenefits;var s_button_src=__webpack_require__("../../ds-atoms/s-button/src/index.ts");function OfferButton_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function OfferButton_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?OfferButton_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OfferButton_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const OfferButton_c={base:{marginBottom:"hlBtvm",paddingRight:"eeREmo",paddingLeft:"hRjOno",position:"cjScYX",zIndex:"jvKoxA",borderBottomColor:"cPyiZX",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"forjOp",borderTopColor:"bnHkVP",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"eaiqgL",fontSize:"iKjpVA",lineHeight:"cKsrpN","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"jemZuk"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"loLSha"}},textWrapper:{display:"gSBWlu",flexDirection:"iMkoWi"},line2:{fontWeight:"buowod"}};function OfferButton(_ref){let{line1:[line1],line2,onClick,state}=_ref;if(!(0,isHtmlNode.Z)(line1))return null;const{content:line1Content}=line1,line2Content=null!=line2&&line2[0]&&(0,isHtmlNode.Z)(line2[0])?line2[0].content:null;return(0,jsx_runtime.jsx)(s_button_src.ZP,OfferButton_objectSpread(OfferButton_objectSpread({"data-testid":"offer-btn",variant:"sales",styleExtend:[OfferButton_c.base],stretch:!0,onClick},"busy"===state?{state,busyNotice:""}:{state}),{},{children:(0,jsx_runtime.jsxs)("span",{className:(0,style9.Z)(OfferButton_c.textWrapper),children:[(0,jsx_runtime.jsx)(s_rich_text_src.Z,{as:"span",content:line1Content}),line2Content?(0,jsx_runtime.jsx)(s_rich_text_src.Z,{as:"span",content:line2Content,styleExtend:[OfferButton_c.line2]}):null]})}))}try{OfferButton.displayName="OfferButton",OfferButton.__docgenInfo={description:"",displayName:"OfferButton",props:{line1:{defaultValue:null,description:"the first line of the purchase button",name:"line1",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[]'}},line2:{defaultValue:null,description:"the second line of the purchase button",name:"line2",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[] | null | undefined'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"auto"'},{value:'"busy"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferButton/OfferButton.tsx#OfferButton"]={docgenInfo:OfferButton.__docgenInfo,name:"OfferButton",path:"../../pp-organisms/s-offer-card/src/components/OfferButton/OfferButton.tsx#OfferButton"})}catch(__react_docgen_typescript_loader_error){}const components_OfferButton=OfferButton,OfferNotice_c_base={fontSize:"hmImpX",lineHeight:"bwFuZl",textAlign:"kooHYa",color:"bzRhTf",fontWeight:"iLdtFu","@media all and (min-width:102em)":{fontSize:"boPXgS",lineHeight:"bnVOLt"},marginBottom:"idMVCD"};function OfferNotice(_ref){let{children,inlineStyle,styleExtend=[]}=_ref;return(0,jsx_runtime.jsx)("div",{className:(0,style9.Z)(OfferNotice_c_base,...styleExtend),style:inlineStyle,children})}try{OfferNotice.displayName="OfferNotice",OfferNotice.__docgenInfo={description:"",displayName:"OfferNotice",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<OfferNotice>`\ncan only be a string.",name:"children",required:!0,type:{name:"string"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyOfferNotice(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <OfferNotice\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<OfferNotice styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferNotice/OfferNotice.tsx#OfferNotice"]={docgenInfo:OfferNotice.__docgenInfo,name:"OfferNotice",path:"../../pp-organisms/s-offer-card/src/components/OfferNotice/OfferNotice.tsx#OfferNotice"})}catch(__react_docgen_typescript_loader_error){}const components_OfferNotice=OfferNotice,OfferTitle_c={base:{textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hJgbZA",lineHeight:"cLPvYH"},"@media all and (min-width:102em)":{fontSize:"krpnci",lineHeight:"dPBKZn"},color:"gjYftY",marginBottom:"hlBtvm"},haaretzIcon:{fontSize:"hzPgdB",marginInlineEnd:"eCJXOT",color:"fUOMGt"},theMarkerIcon:{fontSize:"hzPgdB",color:"dzjISB"}};function OfferTitle(_ref){let{product,productName}=_ref;const iconByLogo="HTZ"===product?(0,jsx_runtime.jsx)(s_icon_src.Z,{icon:"alef",variant:"brand",styleExtend:[OfferTitle_c.haaretzIcon]}):"TM"===product?(0,jsx_runtime.jsx)(s_icon_src.Z,{icon:"m",variant:"success",styleExtend:[OfferTitle_c.theMarkerIcon]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(s_icon_src.Z,{icon:"alef",styleExtend:[OfferTitle_c.haaretzIcon]}),(0,jsx_runtime.jsx)(s_icon_src.Z,{icon:"m",styleExtend:[OfferTitle_c.theMarkerIcon]})]}),style="BOTH"!==product?void 0:{"--logoPosition":"-0.875rem"};return(0,jsx_runtime.jsxs)("h2",{className:(0,style9.Z)(OfferTitle_c.base),style,"data-testid":"offer-title",children:[iconByLogo,productName]})}try{OfferTitle.displayName="OfferTitle",OfferTitle.__docgenInfo={description:"",displayName:"OfferTitle",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"enum",value:[{value:'"BOTH"'},{value:'"HDC"'},{value:'"HTZ"'},{value:'"TM"'}]}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferTitle/OfferTitle.tsx#OfferTitle"]={docgenInfo:OfferTitle.__docgenInfo,name:"OfferTitle",path:"../../pp-organisms/s-offer-card/src/components/OfferTitle/OfferTitle.tsx#OfferTitle"})}catch(__react_docgen_typescript_loader_error){}const components_OfferTitle=OfferTitle;function OfferCard_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function OfferCard_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?OfferCard_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):OfferCard_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const OfferCard_c={base:{alignItems:"foGVKH",display:"gSBWlu",flexDirection:"iMkoWi",maxWidth:"clobCc",position:"cjScYX",width:"cRUUAa",overflowX:"ebxGOI",overflowY:"bdvySK","@media all and (max-width:47.9375em)":{paddingTop:"dTqvqv",paddingBottom:"gcIAKB",paddingInlineStart:"dBvVeR",paddingInlineEnd:"dQJzvX"},"@media all and (min-width:48em)":{paddingTop:"gWzjUR",paddingBottom:"bZWShs",paddingInlineStart:"kUxSkV",paddingInlineEnd:"dDRnBU"}},link:{position:"bEvNbr",top:"WhAZY",left:"bOjOhu",width:"cRUUAa",height:"gdPTUr"},notice:{position:"bEvNbr",top:"gHHGVN"}},sentImpressions=[];function OfferCard(_ref){let{benefits,benefitsHeading,biData,contracted,couponId,exclusive,exclusiveStrip,inlineStyle,legalText,line1Text,line2Text,note,offerData,offerType,personalCouponId,product,productName,steps,styleExtend=[]}=_ref;const[user]=(0,src_user.Z)(),offerCardRef=react.useRef(null),onClickAndImpressionBiData=OfferCard_objectSpread(OfferCard_objectSpread({},biData),{},{prod_no:offerData.productNumber,sale_code:offerData.saleCode,promotions_no:offerData.promotionNumber,campaign_details:`title: ${productName}${(0,isHtmlNode.Z)(line1Text[0])?`, button: ${line1Text[0].content} ${null!=line2Text&&line2Text[0]&&(0,isHtmlNode.Z)(line2Text[0])?line2Text[0].content:""}`:""}`}),{asPath,enabledPpQuery,onClick}=(0,s_use_pp_offer_card_operations_src.Z)({offerData,onClickAndImpressionBiData:OfferCard_objectSpread(OfferCard_objectSpread({},onClickAndImpressionBiData),{},{action_id:21}),steps,couponId,personalCouponId,offerType}),impressionKey=offerData.contentId+((null==user?void 0:user.userMail)||"");return(0,s_use_impression_observer_src.Z)({disabled:sentImpressions.includes(impressionKey),elementRef:offerCardRef,biData:onClickAndImpressionBiData,onObserve:()=>{sentImpressions.push(impressionKey)}}),(0,jsx_runtime.jsxs)(src.Z,{elevationLevel:1,inlineStyle,styleExtend:[OfferCard_c.base,...styleExtend],"data-testid":"offer-card",id:offerData.contentId,children:[exclusiveStrip?(0,jsx_runtime.jsx)(components_CornerStrip,{exclusiveStrip}):null,exclusive&&(0,jsx_runtime.jsx)(components_OfferNotice,{styleExtend:[OfferCard_c.notice],children:exclusive}),(0,jsx_runtime.jsx)(components_OfferTitle,{product,productName}),(0,jsx_runtime.jsx)(components_OfferButton,{line1:line1Text,line2:"upgrade"===offerType&&note?[{as:"p",__typename:"HtmlNode",content:note}]:line2Text,onClick,state:enabledPpQuery?"busy":void 0}),(0,jsx_runtime.jsx)(components_CancellableLine,{legalText,biData,onTermsButtonClick:onClick,loading:enabledPpQuery}),(0,jsx_runtime.jsx)(components_OfferBenefits,{items:benefits,heading:benefitsHeading,contracted,biData:biData&&OfferCard_objectSpread(OfferCard_objectSpread({},biData),(0,isHtmlNode.Z)(line1Text[0])?{campaign_details:`button: ${line1Text[0].content} ${null!=line2Text&&line2Text[0]&&(0,isHtmlNode.Z)(line2Text[0])?line2Text[0].content:""}`}:{})}),(0,jsx_runtime.jsx)(link_default(),{"aria-hidden":!0,tabIndex:-1,className:(0,style9.Z)(OfferCard_c.link),href:asPath,shallow:!0,onClick,ref:offerCardRef,children:""})]})}try{OfferCard.displayName="OfferCard",OfferCard.__docgenInfo={description:"",displayName:"OfferCard",props:{benefits:{defaultValue:null,description:"",name:"benefits",required:!1,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[] | null | undefined'}},benefitsHeading:{defaultValue:null,description:"",name:"benefitsHeading",required:!1,type:{name:"string | null | undefined"}},contracted:{defaultValue:null,description:"",name:"contracted",required:!1,type:{name:"boolean | undefined"}},couponId:{defaultValue:null,description:"",name:"couponId",required:!1,type:{name:"string | null | undefined"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"string | null | undefined"}},exclusiveStrip:{defaultValue:null,description:"",name:"exclusiveStrip",required:!1,type:{name:"string | null | undefined"}},legalText:{defaultValue:null,description:"",name:"legalText",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[]'}},line1Text:{defaultValue:null,description:"",name:"line1Text",required:!0,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[]'}},line2Text:{defaultValue:null,description:"",name:"line2Text",required:!1,type:{name:'({ __typename: "Enhancement"; } | ({ content: string; id?: string | null | undefined; as: HtmlNodeTags; } & { __typename: "HtmlNode"; } & { __typename: "HtmlNode"; }))[] | null | undefined'}},note:{defaultValue:null,description:"",name:"note",required:!1,type:{name:"string | null | undefined"}},offerData:{defaultValue:null,description:"",name:"offerData",required:!0,type:{name:"Required<PPDataStoreOfferContextProps>"}},offerType:{defaultValue:null,description:"",name:"offerType",required:!0,type:{name:"enum",value:[{value:'"regular"'},{value:'"free"'},{value:'"upgrade"'}]}},personalCouponId:{defaultValue:null,description:"",name:"personalCouponId",required:!1,type:{name:"string | null | undefined"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"enum",value:[{value:'"BOTH"'},{value:'"HDC"'},{value:'"HTZ"'},{value:'"TM"'}]}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepDataFragment[]"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},biData:{defaultValue:null,description:"Bi data passed as an argument to biAction",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/OfferCard.tsx#OfferCard"]={docgenInfo:OfferCard.__docgenInfo,name:"OfferCard",path:"../../pp-organisms/s-offer-card/src/OfferCard.tsx#OfferCard"})}catch(__react_docgen_typescript_loader_error){}}}]);
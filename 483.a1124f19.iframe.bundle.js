"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[483],{"../../pp-organisms/s-offer-card/src/OfferCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>OfferCard});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-card/src/index.ts"),next_link=__webpack_require__("../../../node_modules/.pnpm/next@13.4.5_@babel+core@7.22.5_babel-plugin-macros@3.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),src_user=__webpack_require__("../../utils/s-atoms/src/user/index.ts"),isHtmlNode=__webpack_require__("../../utils/s-type-predicates/src/isHtmlNode/index.ts"),s_use_impression_observer_src=__webpack_require__("../../hooks/s-use-impression-observer/src/index.ts"),s_use_pp_offer_card_operations_src=__webpack_require__("../../pp-hooks/s-use-pp-offer-card-operations/src/index.ts"),__jsx=react.createElement;const c_base={fontSize:"hmImpX",lineHeight:"bwFuZl",textAlign:"kooHYa",color:"bzRhTf",fontWeight:"iLdtFu","@media all and (min-width:102em)":{fontSize:"boPXgS",lineHeight:"bnVOLt"},marginBottom:"idMVCD"};function OfferNotice(_ref){let{children,inlineStyle,styleExtend=[]}=_ref;return __jsx("div",{className:(0,style9.Z)(c_base,...styleExtend),style:inlineStyle},children)}OfferNotice.__docgenInfo={description:"",methods:[],displayName:"OfferNotice"};try{OfferNotice.displayName="OfferNotice",OfferNotice.__docgenInfo={description:"",displayName:"OfferNotice",props:{children:{defaultValue:null,description:"The Children to be rendered inside `<OfferNotice>`\ncan only be a string.",name:"children",required:!0,type:{name:"string"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyOfferNotice(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <OfferNotice\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<OfferNotice styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferNotice/OfferNotice.tsx#OfferNotice"]={docgenInfo:OfferNotice.__docgenInfo,name:"OfferNotice",path:"../../pp-organisms/s-offer-card/src/components/OfferNotice/OfferNotice.tsx#OfferNotice"})}catch(__react_docgen_typescript_loader_error){}const components_OfferNotice=OfferNotice;var s_icon_src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),OfferTitle_jsx=react.createElement;const OfferTitle_c={base:{textAlign:"kooHYa",fontSize:"dGDAum",lineHeight:"dRpeUM","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"hJgbZA",lineHeight:"cLPvYH"},"@media all and (min-width:102em)":{fontSize:"krpnci",lineHeight:"dPBKZn"},color:"gjYftY",marginBottom:"hlBtvm"},haaretzIcon:{fontSize:"hzPgdB",marginInlineEnd:"eCJXOT",color:"fUOMGt"},theMarkerIcon:{fontSize:"hzPgdB",color:"dzjISB"}};function OfferTitle(_ref){let{product,productName}=_ref;const iconByLogo="HTZ"===product?OfferTitle_jsx(s_icon_src.Z,{icon:"alef",variant:"brand",styleExtend:[OfferTitle_c.haaretzIcon]}):"TM"===product?OfferTitle_jsx(s_icon_src.Z,{icon:"m",variant:"success",styleExtend:[OfferTitle_c.theMarkerIcon]}):OfferTitle_jsx(react.Fragment,null,OfferTitle_jsx(s_icon_src.Z,{icon:"alef",styleExtend:[OfferTitle_c.haaretzIcon]}),OfferTitle_jsx(s_icon_src.Z,{icon:"m",styleExtend:[OfferTitle_c.theMarkerIcon]})),style="BOTH"!==product?void 0:{"--logoPosition":"-0.875rem"};return OfferTitle_jsx("h2",{className:(0,style9.Z)(OfferTitle_c.base),style,"data-testid":"offer-title"},iconByLogo,productName)}OfferTitle.__docgenInfo={description:"",methods:[],displayName:"OfferTitle"};try{OfferTitle.displayName="OfferTitle",OfferTitle.__docgenInfo={description:"",displayName:"OfferTitle",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"enum",value:[{value:'"BOTH"'},{value:'"HDC"'},{value:'"HTZ"'},{value:'"TM"'}]}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferTitle/OfferTitle.tsx#OfferTitle"]={docgenInfo:OfferTitle.__docgenInfo,name:"OfferTitle",path:"../../pp-organisms/s-offer-card/src/components/OfferTitle/OfferTitle.tsx#OfferTitle"})}catch(__react_docgen_typescript_loader_error){}const components_OfferTitle=OfferTitle;var s_rich_text_src=__webpack_require__("../../ds-atoms/s-rich-text/src/index.ts"),s_use_bi_src=__webpack_require__("../../hooks/s-use-bi/src/index.ts"),OfferBenefits_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const OfferBenefits_c={base:{display:"gSBWlu",flexDirection:"iMkoWi",alignItems:"UXrF",width:"cRUUAa",marginTop:"cyerGB"},line:{display:"gSBWlu",columnGap:"cUcBkx",marginBottom:"lbEyiT"},heading:{fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"eaJJqD"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"kzePcG"},marginBottom:"lbEyiT"},richText:{fontSize:"fyHdVr",lineHeight:"iKTruj","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"cEKNZk",lineHeight:"gMAJcp"},"@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},checkmark:{fontSize:"fUqtKm",marginTop:"esLfzT"},button:{fontWeight:"iLdtFu",backgroundColor:"KqcXP",fontSize:"fUqtKm",position:"cjScYX",zIndex:"jvKoxA"},hiddenDesktop:{"@media all and (min-width:48em)":{display:"iQyyxO"}},hiddenMobile:{"@media all and (max-width:47.9375em)":{display:"gbedSn"}},rotateIcon:{transform:"hQpfBf"}};function OfferBenefits(_ref){let{items,heading,contracted,biData}=_ref;const[isOpen,setIsOpen]=react.useState(!1),biAction=(0,s_use_bi_src.Z)();return OfferBenefits_jsx("div",{className:(0,style9.Z)(OfferBenefits_c.base),"data-testid":"offer-benefits"},heading&&OfferBenefits_jsx("h3",{className:(0,style9.Z)(OfferBenefits_c.heading)},heading),items?.map(((item,index)=>{if(!(0,isHtmlNode.Z)(item))return null;const{as,content}=item,shouldShow=!contracted||(isOpen||!isOpen&&0===index);return OfferBenefits_jsx("div",{key:content,className:(0,style9.Z)(OfferBenefits_c.line,!shouldShow&&OfferBenefits_c.hiddenMobile)},OfferBenefits_jsx(s_icon_src.Z,{icon:"check",variant:"success",styleExtend:[OfferBenefits_c.checkmark]}),OfferBenefits_jsx(s_rich_text_src.Z,{as,content,styleExtend:[OfferBenefits_c.richText]}))})),contracted&&!isOpen&&OfferBenefits_jsx("button",{className:(0,style9.Z)(OfferBenefits_c.button,OfferBenefits_c.hiddenDesktop),style:{"--degreeByState":isOpen?"180deg":"0"},onClick:()=>{setIsOpen((prev=>!prev)),biData&&biAction(_objectSpread(_objectSpread({},biData),{},{action_id:169,feature:"Promotions benefits mobile arrow",feature_type:"Marketing"}))}},"עוד יתרונות ",OfferBenefits_jsx(s_icon_src.Z,{icon:"chevron-bottom",styleExtend:[OfferBenefits_c.rotateIcon]})))}OfferBenefits.__docgenInfo={description:"",methods:[],displayName:"OfferBenefits"};try{OfferBenefits.displayName="OfferBenefits",OfferBenefits.__docgenInfo={description:"",displayName:"OfferBenefits",props:{items:{defaultValue:null,description:"The items to be shown",name:"items",required:!0,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[] | null | undefined'}},heading:{defaultValue:null,description:"The heading of the items",name:"heading",required:!1,type:{name:"string | null | undefined"}},contracted:{defaultValue:null,description:"Adds an arrow button that acts as a collapse for the items",name:"contracted",required:!1,type:{name:"boolean | undefined"}},biData:{defaultValue:null,description:"",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferBenefits/OfferBenefits.tsx#OfferBenefits"]={docgenInfo:OfferBenefits.__docgenInfo,name:"OfferBenefits",path:"../../pp-organisms/s-offer-card/src/components/OfferBenefits/OfferBenefits.tsx#OfferBenefits"})}catch(__react_docgen_typescript_loader_error){}const components_OfferBenefits=OfferBenefits;var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),s_pp_terms_src=__webpack_require__("../../pp-molecules/s-pp-terms/src/index.ts"),CancellableLine_jsx=react.createElement;function CancellableLine_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function CancellableLine_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?CancellableLine_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CancellableLine_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const CancellableLine_c_base={fontSize:"fyHdVr",lineHeight:"iKTruj","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"cEKNZk",lineHeight:"gMAJcp"},"@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"},marginBottom:"biWxPv"},CancellableLine_c_cancelText={color:"bzRhTf",fontWeight:"iLdtFu"},CancellableLine_c_conditionsBtn={color:"dvkVMF",backgroundColor:"KqcXP",position:"cjScYX",textDecorationLine:"dLUwcr",zIndex:"jvKoxA",":hover":{color:"jxAkeG"}};function CancellableLine(_ref){let{legalText,biData,onTermsButtonClick,loading}=_ref;const[isOpen,setIsOpen]=react.useState(!1),biAction=(0,s_use_bi_src.Z)(),isRichTextArray=legalText.every(isHtmlNode.Z),ppTemsOfferProps=onTermsButtonClick?{onButtonClick:onTermsButtonClick,loading}:{};return CancellableLine_jsx("div",{className:(0,style9.Z)(CancellableLine_c_base),"data-testid":"offer-cancellable-line"},CancellableLine_jsx("span",{className:(0,style9.Z)(CancellableLine_c_cancelText)},"ניתן לבטל בכל עת."," ",CancellableLine_jsx("button",{"data-testid":"offer-cancellable-line-btn",className:(0,style9.Z)(CancellableLine_c_conditionsBtn),onClick:()=>{setIsOpen(!isOpen),biAction(CancellableLine_objectSpread(CancellableLine_objectSpread({},biData),{},{action_id:26}))}},"תנאי רכישה")),CancellableLine_jsx(s_pp_terms_src.Z,(0,esm_extends.Z)({onToggle:setIsOpen,isOpen,title:"תנאי רכישה",labelledBy:"purchase-terms",content:isRichTextArray?legalText:[]},ppTemsOfferProps)))}CancellableLine.__docgenInfo={description:"",methods:[],displayName:"CancellableLine"};try{CancellableLine.displayName="CancellableLine",CancellableLine.__docgenInfo={description:"",displayName:"CancellableLine",props:{legalText:{defaultValue:null,description:"",name:"legalText",required:!0,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[]'}},biData:{defaultValue:null,description:"",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}},onTermsButtonClick:{defaultValue:null,description:"",name:"onTermsButtonClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>, biDataExtend?: BiDataOverrides | undefined) => void) | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/CancellableLine/CancellableLine.tsx#CancellableLine"]={docgenInfo:CancellableLine.__docgenInfo,name:"CancellableLine",path:"../../pp-organisms/s-offer-card/src/components/CancellableLine/CancellableLine.tsx#CancellableLine"})}catch(__react_docgen_typescript_loader_error){}const components_CancellableLine=CancellableLine;var s_button_src=__webpack_require__("../../ds-atoms/s-button/src/index.ts"),OfferButton_jsx=react.createElement;const OfferButton_c={base:{marginBottom:"hlBtvm",paddingRight:"eeREmo",paddingLeft:"hRjOno",position:"cjScYX",zIndex:"jvKoxA",borderBottomColor:"cPyiZX",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"forjOp",borderTopColor:"bnHkVP",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"eaiqgL",fontSize:"iKjpVA",lineHeight:"cKsrpN","@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"gPowFU",lineHeight:"jemZuk"},"@media all and (min-width:102em)":{fontSize:"jbDMjY",lineHeight:"loLSha"}},textWrapper:{display:"gSBWlu",flexDirection:"iMkoWi"},line2:{fontWeight:"buowod"}};function OfferButton(_ref){let{line1:[line1],line2,onClick,state}=_ref;if(!(0,isHtmlNode.Z)(line1))return null;const{content:line1Content}=line1,line2Content=line2?.[0]&&(0,isHtmlNode.Z)(line2[0])?line2[0].content:null;return OfferButton_jsx(s_button_src.ZP,(0,esm_extends.Z)({"data-testid":"offer-btn",variant:"sales",styleExtend:[OfferButton_c.base],stretch:!0,onClick},"busy"===state?{state,busyNotice:""}:{state}),OfferButton_jsx("span",{className:(0,style9.Z)(OfferButton_c.textWrapper)},OfferButton_jsx(s_rich_text_src.Z,{as:"span",content:line1Content}),line2Content?OfferButton_jsx(s_rich_text_src.Z,{as:"span",content:line2Content,styleExtend:[OfferButton_c.line2]}):null))}OfferButton.__docgenInfo={description:"",methods:[],displayName:"OfferButton"};try{OfferButton.displayName="OfferButton",OfferButton.__docgenInfo={description:"",displayName:"OfferButton",props:{line1:{defaultValue:null,description:"the first line of the purchase button",name:"line1",required:!0,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[]'}},line2:{defaultValue:null,description:"the second line of the purchase button",name:"line2",required:!0,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[] | null | undefined'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"auto"'},{value:'"busy"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/OfferButton/OfferButton.tsx#OfferButton"]={docgenInfo:OfferButton.__docgenInfo,name:"OfferButton",path:"../../pp-organisms/s-offer-card/src/components/OfferButton/OfferButton.tsx#OfferButton"})}catch(__react_docgen_typescript_loader_error){}const components_OfferButton=OfferButton;var CornerStrip_jsx=react.createElement;const CornerStrip_c_base={position:"bEvNbr",top:"LAxam",insetInlineStart:"fCQHJh","@media all and (max-width:37.4375em)":{top:"lnTYBW",insetInlineStart:"bYkCBH"}},CornerStrip_c_cornerStrip={fontSize:"dhZdKC",height:"jXmXEB",width:"hHGIsI"},CornerStrip_c_text={position:"bEvNbr",color:"kAWnRk",width:"cRUUAa",top:"imFxlz",insetInlineStart:"khdfJS",transform:"dqImtA",fontWeight:"bpQkXn",textAlign:"kooHYa",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:80em)":{fontSize:"fbDSck",lineHeight:"cIlhEA"}};function CornerStrip(_ref){let{exclusiveStrip}=_ref;return CornerStrip_jsx("div",{className:(0,style9.Z)(CornerStrip_c_base)},CornerStrip_jsx("svg",{className:(0,style9.Z)(CornerStrip_c_cornerStrip),focusable:!1,tabIndex:-1},CornerStrip_jsx("use",{xlinkHref:"#offer-corner-strip"})),CornerStrip_jsx("span",{className:(0,style9.Z)(CornerStrip_c_text)},exclusiveStrip))}CornerStrip.__docgenInfo={description:"",methods:[],displayName:"CornerStrip"};try{CornerStrip.displayName="CornerStrip",CornerStrip.__docgenInfo={description:"",displayName:"CornerStrip",props:{exclusiveStrip:{defaultValue:null,description:"",name:"exclusiveStrip",required:!0,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/components/CornerStrip/CornerStrip.tsx#CornerStrip"]={docgenInfo:CornerStrip.__docgenInfo,name:"CornerStrip",path:"../../pp-organisms/s-offer-card/src/components/CornerStrip/CornerStrip.tsx#CornerStrip"})}catch(__react_docgen_typescript_loader_error){}const components_CornerStrip=CornerStrip;var OfferCard_jsx=react.createElement;function OfferCard_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function OfferCard_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?OfferCard_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):OfferCard_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const OfferCard_c={base:{alignItems:"foGVKH",display:"gSBWlu",flexDirection:"iMkoWi",maxWidth:"clobCc",position:"cjScYX",width:"cRUUAa",overflowX:"ebxGOI",overflowY:"bdvySK","@media all and (max-width:47.9375em)":{paddingTop:"dTqvqv",paddingBottom:"gcIAKB",paddingInlineStart:"dBvVeR",paddingInlineEnd:"dQJzvX"},"@media all and (min-width:48em)":{paddingTop:"gWzjUR",paddingBottom:"bZWShs",paddingInlineStart:"kUxSkV",paddingInlineEnd:"dDRnBU"}},link:{position:"bEvNbr",top:"WhAZY",left:"bOjOhu",width:"cRUUAa",height:"gdPTUr"},notice:{position:"bEvNbr",top:"gHHGVN"}},sentImpressions=[];function OfferCard(_ref){let{benefits,benefitsHeading,biData,contracted,couponId,exclusive,exclusiveStrip,inlineStyle,legalText,line1Text,line2Text,note,offerData,offerType,personalCouponId,product,productName,steps,styleExtend=[]}=_ref;const[user]=(0,src_user.Z)(),offerCardRef=react.useRef(null),onClickAndImpressionBiData=OfferCard_objectSpread(OfferCard_objectSpread({},biData),{},{prod_no:offerData.productNumber,sale_code:offerData.saleCode,promotions_no:offerData.promotionNumber,campaign_details:`title: ${productName}${(0,isHtmlNode.Z)(line1Text[0])?`, button: ${line1Text[0].content} ${line2Text?.[0]&&(0,isHtmlNode.Z)(line2Text[0])?line2Text[0].content:""}`:""}`}),{asPath,enabledPpQuery,onClick}=(0,s_use_pp_offer_card_operations_src.Z)({offerData,onClickAndImpressionBiData:OfferCard_objectSpread(OfferCard_objectSpread({},onClickAndImpressionBiData),{},{action_id:21}),steps,couponId,personalCouponId,offerType}),impressionKey=offerData.contentId+(user?.userName||"");return(0,s_use_impression_observer_src.Z)({disabled:sentImpressions.includes(impressionKey),elementRef:offerCardRef,biData:onClickAndImpressionBiData,onObserve:()=>{sentImpressions.push(impressionKey)}}),OfferCard_jsx(src.Z,{elevationLevel:1,inlineStyle,styleExtend:[OfferCard_c.base,...styleExtend],"data-testid":"offer-card",id:offerData.contentId},exclusiveStrip?OfferCard_jsx(components_CornerStrip,{exclusiveStrip}):null,exclusive&&OfferCard_jsx(components_OfferNotice,{styleExtend:[OfferCard_c.notice]},exclusive),OfferCard_jsx(components_OfferTitle,{product,productName}),OfferCard_jsx(components_OfferButton,{line1:line1Text,line2:"upgrade"===offerType&&note?[{as:"p",__typename:"HtmlNode",content:note}]:line2Text,onClick,state:enabledPpQuery?"busy":void 0}),OfferCard_jsx(components_CancellableLine,{legalText,biData,onTermsButtonClick:onClick,loading:enabledPpQuery}),OfferCard_jsx(components_OfferBenefits,{items:benefits,heading:benefitsHeading,contracted,biData:biData&&OfferCard_objectSpread(OfferCard_objectSpread({},biData),(0,isHtmlNode.Z)(line1Text[0])?{campaign_details:`button: ${line1Text[0].content} ${line2Text?.[0]&&(0,isHtmlNode.Z)(line2Text[0])?line2Text[0].content:""}`}:{})}),OfferCard_jsx(link_default(),{"aria-hidden":!0,tabIndex:-1,className:(0,style9.Z)(OfferCard_c.link),href:asPath,shallow:!0,onClick,ref:offerCardRef},""))}OfferCard.__docgenInfo={description:"",methods:[],displayName:"OfferCard"};try{OfferCard.displayName="OfferCard",OfferCard.__docgenInfo={description:"",displayName:"OfferCard",props:{benefits:{defaultValue:null,description:"",name:"benefits",required:!1,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[] | null | undefined'}},benefitsHeading:{defaultValue:null,description:"",name:"benefitsHeading",required:!1,type:{name:"string | null | undefined"}},contracted:{defaultValue:null,description:"",name:"contracted",required:!1,type:{name:"boolean | undefined"}},couponId:{defaultValue:null,description:"",name:"couponId",required:!1,type:{name:"string | null | undefined"}},exclusive:{defaultValue:null,description:"",name:"exclusive",required:!1,type:{name:"string | null | undefined"}},exclusiveStrip:{defaultValue:null,description:"",name:"exclusiveStrip",required:!1,type:{name:"string | null | undefined"}},legalText:{defaultValue:null,description:"",name:"legalText",required:!0,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[]'}},line1Text:{defaultValue:null,description:"",name:"line1Text",required:!0,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[]'}},line2Text:{defaultValue:null,description:"",name:"line2Text",required:!1,type:{name:'({ __typename?: "Enhancement" | undefined; } | ({ __typename?: "HtmlNode" | undefined; } & HtmlNodeFragment))[] | null | undefined'}},note:{defaultValue:null,description:"",name:"note",required:!1,type:{name:"string | null | undefined"}},offerData:{defaultValue:null,description:"",name:"offerData",required:!0,type:{name:"Required<PPDataStoreOfferContextProps>"}},offerType:{defaultValue:null,description:"",name:"offerType",required:!0,type:{name:"enum",value:[{value:'"regular"'},{value:'"free"'},{value:'"upgrade"'}]}},personalCouponId:{defaultValue:null,description:"",name:"personalCouponId",required:!1,type:{name:"string | null | undefined"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"enum",value:[{value:'"BOTH"'},{value:'"HDC"'},{value:'"HTZ"'},{value:'"TM"'}]}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepDataFragment[]"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},biData:{defaultValue:null,description:"Bi data passed as an argument to biAction",name:"biData",required:!1,type:{name:"BiDataOverrides | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../pp-organisms/s-offer-card/src/OfferCard.tsx#OfferCard"]={docgenInfo:OfferCard.__docgenInfo,name:"OfferCard",path:"../../pp-organisms/s-offer-card/src/OfferCard.tsx#OfferCard"})}catch(__react_docgen_typescript_loader_error){}}}]);
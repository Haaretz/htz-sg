(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,loadStylesheet,installedCssChunks,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({23:"AudioPlayer-stories",32:"Modal-stories",51:"MagazineMarginalia-stories",83:"Elevation-stories-mdx",304:"PpCoupon-stories",316:"Tldr-stories",372:"RichText-stories",498:"PpErrors-stories",532:"styles",550:"Embed-stories",581:"About-stories-mdx",623:"NoSSR-stories",698:"LayoutContainer-stories",880:"PpOffersPageHdc-stories",942:"useBreakpoint-stories",1095:"TextField-stories",1134:"PpErrorPage-stories",1235:"components-LoginForm-LoginForm-stories",1352:"ActionBar-stories",1478:"Card-stories",1722:"Breakpoints-stories-mdx",1809:"PpPayPalLogo-stories",1863:"PpPageLayout-stories",1897:"PullQuote-stories",2112:"MagazineLayout-stories",2196:"parseButtonProps-stories-mdx",2306:"BenderList-stories",2346:"Radii-stories-mdx",2612:"PpPaymentChangePage-stories",2632:"Typography-stories-mdx",2668:"PpHeader-stories",2677:"PpModal-stories",2714:"Stepper-stories",2877:"PromotionsInstructions-stories",3140:"PpFooter-stories",3289:"Step-stories",3388:"Color-stories-mdx",3395:"MarkerLogo-stories",3429:"Tokens-stories-mdx",3597:"ClickArea-stories",3641:"HtzLink-stories-mdx",3674:"Icon-stories",3715:"OfferLinks-stories",3727:"HtzLogo-stories",3751:"SpotList-stories",3820:"RelatedArticles-stories",3941:"BeforeAndAfter-stories",3974:"Notification-stories",4143:"components-OfferCard-OfferCard-stories",4274:"PpOffersPage-stories",4467:"EmailField-EmailField-stories",4752:"Popover-stories",5051:"HtzPicture-stories",5105:"NewsletterCard-stories",5112:"HdcLogo-stories",5238:"Dialog-stories",5429:"useRadioGroupState-stories-mdx",5532:"PromotionsSystemNotices-stories",5579:"HtzLi-stories",5613:"Scrollytelling-stories",5661:"useFocusWithin-stories",5667:"PpForgotPassword-stories",5703:"RadioGroup-stories",5839:"PpLoginPage-stories",5858:"TextFieldwithButton-stories",5862:"Footer-stories",5929:"TeaserImage-stories",6169:"Toggle-stories",6256:"NewsletterRecommendationsList-stories",6301:"PpImage-stories",6406:"VisuallyHidden-stories-mdx",6463:"Button-stories",6475:"PpCouponPage-stories",6522:"PpSpecialMaxPage-stories",6569:"HtzImage-stories",6685:"PageTitle-stories",6700:"Ripple-stories",6739:"ZIndex-stories-mdx",6871:"PpCreditCardIcn-stories",6878:"Checkbox-stories",6935:"Dropdown-stories",6939:"RadioButton-stories",7063:"nextFontOpenSans-stories-mdx",7127:"BlockLink-stories",7136:"PpDebtPage-stories",7249:"ArticleTags-stories",7320:"VerticalRhythm-stories-mdx",7348:"nextFontMerriweather-stories-mdx",7379:"PpMasthead-stories",7587:"MagazineHeader-stories",7596:"TextLink-stories",7678:"PpQuickPlanChangePage-stories",7742:"Caption-stories",8008:"ArticleBreadcrumbs-stories",8070:"PromotionsSystemNotice-stories",8074:"GraphqlFetcher-stories-mdx",8234:"LogoLoadingIndicator-stories",8288:"FormfieldDescription-stories",8338:"Collage-stories",8408:"ArticleByline-stories",8411:"PpTerms-stories",8473:"PpSecurePayment-stories",8474:"AlertsSubscriptionPopover-stories",8637:"components-RegistrationForm-RegistrationForm-stories",8717:"TeaserPlaceholder-stories",8847:"PpErrorPageLink-stories",8890:"components-TermsCheckBox-TermsCheckBox-stories",8898:"OfferCard-stories",8969:"InlineLinkList-stories",8993:"TopicHead-stories",9008:"ChangeAccountBanner-stories",9151:"ArticleTime-stories",9743:"Chip-stories",9831:"useImpressionObserver-stories",9916:"FileDownload-stories",9953:"PpThankYouPage-stories",9959:"PpPaymentPage-stories"}[chunkId]||chunkId)+"."+{23:"26d01d40",32:"42ef4755",51:"84d3584a",83:"a4056e7a",89:"73f2a5ff",304:"d1b042ce",316:"16acfdeb",345:"e3bc335d",372:"e3ce7d62",498:"05de044c",532:"d8017f28",550:"0a1c8e5c",581:"f912ed9a",583:"f10aa20d",623:"52ed37b0",698:"0efbaf4c",778:"f1637d7a",880:"efc07c52",942:"a96745d3",1095:"2ba3e31a",1097:"bec7fb96",1134:"7e1119b6",1235:"04bc27f4",1352:"acb6c7a9",1478:"ab48f6a9",1514:"db5a0ea3",1722:"3e7c7ca8",1772:"ca74c2d8",1809:"72209372",1863:"9ee715d6",1897:"f5f71026",2002:"a4725c05",2092:"ea7801c7",2112:"376abb0b",2196:"9f754f68",2306:"3c89af40",2346:"edc3cbee",2612:"ffadc0fc",2632:"1e2a3e47",2658:"19c2de0f",2668:"7cdb6621",2677:"25b387d6",2714:"809d8662",2877:"7116cb2e",3140:"12022f2e",3160:"dd3cfed5",3289:"c9269237",3388:"5864449a",3395:"1bf895e2",3429:"4a89af5a",3597:"4a1654e5",3641:"a775d7e5",3674:"b6cc3107",3715:"7f8bd77b",3727:"c3c35fa6",3751:"0ae57fd0",3759:"3c8f44e1",3820:"297f84e2",3941:"3c38a9cf",3974:"4e5e1508",4143:"c61e00c4",4274:"f21da1ca",4467:"9a133f7f",4512:"86106918",4674:"a25d748c",4741:"d1b7f698",4752:"98c832e2",4948:"19ca9d03",4993:"20312f6e",5047:"e862367d",5051:"7b4253c5",5080:"9738b42c",5105:"e97f7d0c",5112:"a7e6a828",5184:"390dc9cd",5238:"0ab1d45d",5259:"efb48712",5409:"b182118d",5429:"ce2e1436",5532:"879c71d4",5556:"13d83861",5579:"8c08b796",5613:"95ffc2ec",5661:"bc4058c1",5667:"0c0e2f12",5703:"1a5b92bf",5834:"400d62aa",5839:"fca5795c",5842:"226a1234",5858:"e8d4a547",5862:"ab114a98",5887:"0d5dca14",5929:"b2ecb69e",6169:"b447aaf5",6256:"4b4dc1ff",6265:"e0ae39df",6276:"8a5dec3c",6301:"b77f9917",6406:"d0df8f09",6463:"d3b81a39",6475:"9850fc1b",6522:"f1e9dffb",6569:"0bb65cd0",6685:"7fc4d44a",6700:"a26244e8",6739:"834e8c91",6749:"86af3080",6868:"d279e2bc",6871:"ac787e6c",6878:"fc5dbeee",6894:"c1bd2cbc",6911:"a6cd6037",6935:"9fac511e",6939:"4b73f623",7061:"d24dd6ea",7063:"2b65a582",7127:"a64113f3",7136:"3c239016",7249:"c0fd02f5",7320:"1a6557d2",7348:"2b0c5751",7379:"43b249c9",7438:"aa6afa38",7445:"c2f1e8d2",7587:"f9fabe13",7596:"cad283cf",7678:"5c3fdb0f",7708:"876b64a8",7742:"6d0e60ee",7783:"b5e8e931",7832:"df2902d6",7868:"334d2a3f",8008:"2d1113bc",8070:"6908015b",8074:"9613a0fd",8171:"45c8b0e8",8234:"2506fc77",8288:"f8b622ab",8338:"a0b89fff",8408:"cd7245ab",8411:"06668c82",8473:"456e686a",8474:"4040192e",8563:"03c98769",8637:"86fe931d",8717:"d2c6bae9",8847:"7526c279",8890:"67f56626",8898:"2e6c34ef",8969:"68f3ab7a",8993:"9bd234bc",9008:"83fbdd71",9093:"77af5209",9151:"1894cc93",9223:"11387ab6",9508:"ffb07ddb",9743:"111a33a4",9831:"2305c0fc",9880:"cc55966a",9916:"41ac870e",9953:"3af1a156",9959:"78178fb6"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>"styles.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@haaretz/a-htz-sg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@haaretz/a-htz-sg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",loadStylesheet=chunkId=>new Promise(((resolve,reject)=>{var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(((href,fullhref)=>{for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}})(href,fullhref))return resolve();((chunkId,fullhref,resolve,reject)=>{var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",linkTag.onerror=linkTag.onload=event=>{if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&("load"===event.type?"missing":event.type),realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+realHref+")");err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,document.head.appendChild(linkTag)})(chunkId,fullhref,resolve,reject)})),installedCssChunks={1303:0},__webpack_require__.f.miniCss=(chunkId,promises)=>{installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{532:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((()=>{installedCssChunks[chunkId]=0}),(e=>{throw delete installedCssChunks[chunkId],e})))},(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(1303|532)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[6148,3005,9067,8372,4064,5728],{"../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useMutation.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>useMutation});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useSyncExternalStore=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs"),utils=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/utils.mjs"),mutation=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/mutation.mjs"),notifyManager=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/notifyManager.mjs"),subscribable=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.24.4/node_modules/@tanstack/query-core/build/lib/subscribable.mjs");class MutationObserver extends subscribable.l{constructor(client,options){super(),this.client=client,this.setOptions(options),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.client.defaultMutationOptions(options),(0,utils.VS)(prevOptions,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}onUnsubscribe(){var _this$currentMutation;this.listeners.length||(null==(_this$currentMutation=this.currentMutation)||_this$currentMutation.removeObserver(this))}onMutationUpdate(action){this.updateResult();const notifyOptions={listeners:!0};"success"===action.type?notifyOptions.onSuccess=!0:"error"===action.type&&(notifyOptions.onError=!0),this.notify(notifyOptions)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(variables,options){return this.mutateOptions=options,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==variables?variables:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const state=this.currentMutation?this.currentMutation.state:(0,mutation.R)(),result={...state,isLoading:"loading"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset};this.currentResult=result}notify(options){notifyManager.V.batch((()=>{var _this$mutateOptions$o,_this$mutateOptions,_this$mutateOptions$o2,_this$mutateOptions2;if(this.mutateOptions&&this.hasListeners())if(options.onSuccess)null==(_this$mutateOptions$o=(_this$mutateOptions=this.mutateOptions).onSuccess)||_this$mutateOptions$o.call(_this$mutateOptions,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(_this$mutateOptions$o2=(_this$mutateOptions2=this.mutateOptions).onSettled)||_this$mutateOptions$o2.call(_this$mutateOptions2,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context);else if(options.onError){var _this$mutateOptions$o3,_this$mutateOptions3,_this$mutateOptions$o4,_this$mutateOptions4;null==(_this$mutateOptions$o3=(_this$mutateOptions3=this.mutateOptions).onError)||_this$mutateOptions$o3.call(_this$mutateOptions3,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(_this$mutateOptions$o4=(_this$mutateOptions4=this.mutateOptions).onSettled)||_this$mutateOptions$o4.call(_this$mutateOptions4,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}options.listeners&&this.listeners.forEach((listener=>{listener(this.currentResult)}))}))}}var QueryClientProvider=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),lib_utils=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.24.4_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/utils.mjs");function useMutation(arg1,arg2,arg3){const options=(0,utils.lV)(arg1,arg2,arg3),queryClient=(0,QueryClientProvider.NL)({context:options.context}),[observer]=react.useState((()=>new MutationObserver(queryClient,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=(0,useSyncExternalStore.$)(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.V.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(noop)}),[observer]);if(result.error&&(0,lib_utils.L)(observer.options.useErrorBoundary,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}function noop(){}},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MemoryRouter=exports.BaseRouter=void 0;const mitt_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/lib/mitt/index.js")),urls_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/urls.js");class BaseRouter{constructor(){this.isReady=!0,this.pathname="/",this.hash="",this.query={},this.asPath="/",this.basePath="",this.isFallback=!1,this.isPreview=!1,this.isLocaleDomain=!1,this.locale=void 0,this.locales=[],this.events=(0,mitt_1.default)()}back(){}forward(){}beforePopState(){}async prefetch(){}reload(){}get route(){return this.pathname}}exports.BaseRouter=BaseRouter;class MemoryRouter extends BaseRouter{static snapshot(original){return Object.assign(new MemoryRouter,original)}constructor(initialUrl,async){super(),this.async=!1,this.registerPaths=()=>{throw new Error('\n       This method was removed in v0.7.0.\n       It has been replaced with "mockRouter.useParser(createDynamicRouteParser(...))"\n       See the README for more details on upgrading.\n    ')},this.push=(url,as,options)=>this._setCurrentUrl(url,as,options,"push"),this.replace=(url,as,options)=>this._setCurrentUrl(url,as,options,"replace"),this.setCurrentUrl=(url,as)=>{this._setCurrentUrl(url,as,void 0,"set",!1)},initialUrl&&this.setCurrentUrl(initialUrl),async&&(this.async=async)}useParser(parser){return this.events.on("NEXT_ROUTER_MOCK:parse",parser),()=>this.events.off("NEXT_ROUTER_MOCK:parse",parser)}async _setCurrentUrl(url,as,options,source,async=this.async){const newRoute=parseUrlToCompleteUrl(url,this.pathname);let asPath,asRoute;null==as?(asRoute=void 0,asPath=getRouteAsPath(newRoute.pathname,newRoute.query,newRoute.hash)):(asRoute=parseUrlToCompleteUrl(as,this.pathname),asPath=getRouteAsPath(asRoute.pathname,asRoute.query,asRoute.hash));const rawPathnamesDiffer=(null==asRoute?void 0:asRoute.pathname)!==newRoute.pathname;this.events.emit("NEXT_ROUTER_MOCK:parse",newRoute),asRoute&&this.events.emit("NEXT_ROUTER_MOCK:parse",asRoute);const shallow=(null==options?void 0:options.shallow)||!1,triggerHashChange=function shouldTriggerHashChange(current,newRoute){const isHashChange=current.hash!==newRoute.hash,isQueryChange=(0,urls_1.stringifyQueryString)(current.query)!==(0,urls_1.stringifyQueryString)(newRoute.query),isRouteChange=isQueryChange||current.pathname!==newRoute.pathname;return!isRouteChange&&(isHashChange||newRoute.hash)}(this,newRoute);triggerHashChange?this.events.emit("hashChangeStart",asPath,{shallow}):this.events.emit("routeChangeStart",asPath,{shallow}),async&&await new Promise((resolve=>setTimeout(resolve,0))),this.asPath=asPath,asRoute?(this.pathname=asRoute.pathname,this.query=rawPathnamesDiffer?asRoute.query:newRoute.query,this.hash=asRoute.hash):(this.pathname=newRoute.pathname,this.query=newRoute.query,this.hash=newRoute.hash),(null==options?void 0:options.locale)&&(this.locale=options.locale),triggerHashChange?this.events.emit("hashChangeComplete",this.asPath,{shallow}):this.events.emit("routeChangeComplete",this.asPath,{shallow});const eventName="push"===source?"NEXT_ROUTER_MOCK:push":"replace"===source?"NEXT_ROUTER_MOCK:replace":void 0;return eventName&&this.events.emit(eventName,this.asPath,{shallow}),!0}}function parseUrlToCompleteUrl(url,currentPathname){var _a;const parsedUrl="object"==typeof url?url:(0,urls_1.parseUrl)(url);return{pathname:normalizeTrailingSlash(null!==(_a=parsedUrl.pathname)&&void 0!==_a?_a:currentPathname),query:parsedUrl.query||{},hash:parsedUrl.hash||""}}function getRouteAsPath(pathname,query,hash){const remainingQuery={...query};let asPath=pathname.replace(/\[{1,2}(.+?)]{1,2}/g,(($0,slug)=>{slug.startsWith("...")&&(slug=slug.replace("...",""));const value=remainingQuery[slug];return delete remainingQuery[slug],Array.isArray(value)?value.map((v=>encodeURIComponent(v))).join("/"):void 0!==value?encodeURIComponent(String(value)):""}));asPath=normalizeTrailingSlash(asPath);const qs=(0,urls_1.stringifyQueryString)(remainingQuery);return qs&&(asPath+=`?${qs}`),hash&&(asPath+=hash),asPath}function normalizeTrailingSlash(path){return path.endsWith("/")&&path.length>1?path.slice(0,-1):path||"/"}exports.MemoryRouter=MemoryRouter},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouterContext.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MemoryRouterContext=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));exports.MemoryRouterContext=react_1.default.createContext(null)},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withRouter=exports.useRouter=exports.memoryRouter=exports.BaseRouter=exports.MemoryRouter=exports.useMemoryRouter=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),MemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js"),useMemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js"),withMemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/withMemoryRouter.js"),MemoryRouterContext_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouterContext.js");var useMemoryRouter_2=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js");Object.defineProperty(exports,"useMemoryRouter",{enumerable:!0,get:function(){return useMemoryRouter_2.useMemoryRouter}});var MemoryRouter_2=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js");Object.defineProperty(exports,"MemoryRouter",{enumerable:!0,get:function(){return MemoryRouter_2.MemoryRouter}}),Object.defineProperty(exports,"BaseRouter",{enumerable:!0,get:function(){return MemoryRouter_2.BaseRouter}}),exports.memoryRouter=new MemoryRouter_1.MemoryRouter,exports.memoryRouter.async=!1,exports.default=exports.memoryRouter;exports.useRouter=()=>react_1.default.useContext(MemoryRouterContext_1.MemoryRouterContext)||(0,useMemoryRouter_1.useMemoryRouter)(exports.memoryRouter);exports.withRouter=ComposedComponent=>(0,withMemoryRouter_1.withMemoryRouter)(exports.useRouter,ComposedComponent)},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/lib/mitt/index.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function mitt(){const all=Object.create(null);return{on(type,handler){(all[type]||(all[type]=[])).push(handler)},off(type,handler){all[type]&&all[type].splice(all[type].indexOf(handler)>>>0,1)},emit(type,...evts){(all[type]||[]).slice().map((handler=>{handler(...evts)}))}}}},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/urls.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stringifyQueryString=exports.parseUrl=void 0,exports.parseUrl=function parseUrl(url){const parsed=new URL(url,"https://base.com"),query=Object.fromEntries(Array.from(parsed.searchParams.keys()).map((key=>{const values=parsed.searchParams.getAll(key);return[key,1===values.length?values[0]:values]})));return{pathname:parsed.pathname,hash:parsed.hash,query}},exports.stringifyQueryString=function stringifyQueryString(query){const params=new URLSearchParams;return Object.keys(query).forEach((key=>{const values=query[key];for(const value of Array.isArray(values)?values:[values])params.append(key,value)})),params.toString()}},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useMemoryRouter=void 0;const react_1=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),MemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js");exports.useMemoryRouter=(singletonRouter,eventHandlers)=>{const[router,setRouter]=(0,react_1.useState)((()=>MemoryRouter_1.MemoryRouter.snapshot(singletonRouter)));return(0,react_1.useEffect)((()=>{let isMounted=!0;const handleRouteChange=()=>{isMounted&&setRouter(MemoryRouter_1.MemoryRouter.snapshot(singletonRouter))};return singletonRouter.events.on("routeChangeComplete",handleRouteChange),singletonRouter.events.on("hashChangeComplete",handleRouteChange),()=>{isMounted=!1,singletonRouter.events.off("routeChangeComplete",handleRouteChange),singletonRouter.events.off("hashChangeComplete",handleRouteChange)}}),[singletonRouter]),(0,react_1.useEffect)((()=>{if(!eventHandlers)return;const{onRouteChangeStart,onRouteChangeComplete,onHashChangeStart,onHashChangeComplete,onPush,onReplace}=eventHandlers;return onRouteChangeStart&&singletonRouter.events.on("routeChangeStart",onRouteChangeStart),onRouteChangeComplete&&singletonRouter.events.on("routeChangeComplete",onRouteChangeComplete),onHashChangeStart&&singletonRouter.events.on("hashChangeStart",onHashChangeStart),onHashChangeComplete&&singletonRouter.events.on("hashChangeComplete",onHashChangeComplete),onPush&&singletonRouter.events.on("NEXT_ROUTER_MOCK:push",onPush),onReplace&&singletonRouter.events.on("NEXT_ROUTER_MOCK:replace",onReplace),()=>{onRouteChangeStart&&singletonRouter.events.off("routeChangeStart",onRouteChangeStart),onRouteChangeComplete&&singletonRouter.events.off("routeChangeComplete",onRouteChangeComplete),onHashChangeStart&&singletonRouter.events.off("hashChangeStart",onHashChangeStart),onHashChangeComplete&&singletonRouter.events.off("hashChangeComplete",onHashChangeComplete),onPush&&singletonRouter.events.off("NEXT_ROUTER_MOCK:push",onPush),onReplace&&singletonRouter.events.off("NEXT_ROUTER_MOCK:replace",onReplace)}}),[singletonRouter.events,null==eventHandlers?void 0:eventHandlers.onRouteChangeStart,null==eventHandlers?void 0:eventHandlers.onRouteChangeComplete,null==eventHandlers?void 0:eventHandlers.onHashChangeStart,null==eventHandlers?void 0:eventHandlers.onHashChangeComplete,null==eventHandlers?void 0:eventHandlers.onPush,null==eventHandlers?void 0:eventHandlers.onReplace]),router}},"../../../node_modules/.pnpm/next-router-mock@0.9.8_next@13.4.19_react@18.2.0/node_modules/next-router-mock/dist/withMemoryRouter.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMemoryRouter=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));exports.withMemoryRouter=function withMemoryRouter(useRouter,ComposedComponent){function WithRouterWrapper(props){return react_1.default.createElement(ComposedComponent,{router:useRouter(),...props})}return WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,WithRouterWrapper}},"../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-context.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"AmpStateContext",{enumerable:!0,get:function(){return AmpStateContext}});const AmpStateContext=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")).default.createContext({})},"../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-mode.js":(__unused_webpack_module,exports)=>{"use strict";function isInAmpMode(param){let{ampFirst=!1,hybrid=!1,hasQuery=!1}=void 0===param?{}:param;return ampFirst||hybrid&&hasQuery}Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},"../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{defaultHead:function(){return defaultHead},default:function(){return _default}});const _interop_require_default=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_react=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),_sideeffect=_interop_require_default._(__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/side-effect.js")),_ampcontext=__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-context.js"),_headmanagercontext=__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head-manager-context.js"),_ampmode=__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/amp-mode.js");__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js");function defaultHead(inAmpMode){void 0===inAmpMode&&(inAmpMode=!1);const head=[_react.default.createElement("meta",{charSet:"utf-8"})];return inAmpMode||head.push(_react.default.createElement("meta",{name:"viewport",content:"width=device-width"})),head}function onlyReactElement(list,child){return"string"==typeof child||"number"==typeof child?list:child.type===_react.default.Fragment?list.concat(_react.default.Children.toArray(child.props.children).reduce(((fragmentList,fragmentChild)=>"string"==typeof fragmentChild||"number"==typeof fragmentChild?fragmentList:fragmentList.concat(fragmentChild)),[])):list.concat(child)}const METATYPES=["name","httpEquiv","charSet","itemProp"];function reduceComponents(headChildrenElements,props){const{inAmpMode}=props;return headChildrenElements.reduce(onlyReactElement,[]).reverse().concat(defaultHead(inAmpMode).reverse()).filter(function unique(){const keys=new Set,tags=new Set,metaTypes=new Set,metaCategories={};return h=>{let isUnique=!0,hasKey=!1;if(h.key&&"number"!=typeof h.key&&h.key.indexOf("$")>0){hasKey=!0;const key=h.key.slice(h.key.indexOf("$")+1);keys.has(key)?isUnique=!1:keys.add(key)}switch(h.type){case"title":case"base":tags.has(h.type)?isUnique=!1:tags.add(h.type);break;case"meta":for(let i=0,len=METATYPES.length;i<len;i++){const metatype=METATYPES[i];if(h.props.hasOwnProperty(metatype))if("charSet"===metatype)metaTypes.has(metatype)?isUnique=!1:metaTypes.add(metatype);else{const category=h.props[metatype],categories=metaCategories[metatype]||new Set;"name"===metatype&&hasKey||!categories.has(category)?(categories.add(category),metaCategories[metatype]=categories):isUnique=!1}}}return isUnique}}()).reverse().map(((c,i)=>{const key=c.key||i;if(process.env.__NEXT_OPTIMIZE_FONTS&&!inAmpMode&&"link"===c.type&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((url=>c.props.href.startsWith(url)))){const newProps={...c.props||{}};return newProps["data-href"]=newProps.href,newProps.href=void 0,newProps["data-optimized-fonts"]=!0,_react.default.cloneElement(c,newProps)}return _react.default.cloneElement(c,{key})}))}const _default=function Head(param){let{children}=param;const ampState=(0,_react.useContext)(_ampcontext.AmpStateContext),headManager=(0,_react.useContext)(_headmanagercontext.HeadManagerContext);return _react.default.createElement(_sideeffect.default,{reduceComponentsToState:reduceComponents,headManager,inAmpMode:(0,_ampmode.isInAmpMode)(ampState)},children)};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/side-effect.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return SideEffect}});const _react=__webpack_require__("../../../node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),isServer="undefined"==typeof window,useClientOnlyLayoutEffect=isServer?()=>{}:_react.useLayoutEffect,useClientOnlyEffect=isServer?()=>{}:_react.useEffect;function SideEffect(props){const{headManager,reduceComponentsToState}=props;function emitChange(){if(headManager&&headManager.mountedInstances){const headElements=_react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));headManager.updateHead(reduceComponentsToState(headElements,props))}}var _headManager_mountedInstances;isServer&&(null==headManager||null==(_headManager_mountedInstances=headManager.mountedInstances)||_headManager_mountedInstances.add(props.children),emitChange());return useClientOnlyLayoutEffect((()=>{var _headManager_mountedInstances;return null==headManager||null==(_headManager_mountedInstances=headManager.mountedInstances)||_headManager_mountedInstances.add(props.children),()=>{var _headManager_mountedInstances;null==headManager||null==(_headManager_mountedInstances=headManager.mountedInstances)||_headManager_mountedInstances.delete(props.children)}})),useClientOnlyLayoutEffect((()=>(headManager&&(headManager._pendingUpdate=emitChange),()=>{headManager&&(headManager._pendingUpdate=emitChange)}))),useClientOnlyEffect((()=>(headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null),()=>{headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null)}))),null}},"../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=_=>{}},"../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/next@13.4.19_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head.js")}}]);
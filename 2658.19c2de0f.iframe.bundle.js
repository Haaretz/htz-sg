"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[2658,1772,4674],{"../../../node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useMutation.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useMutation});var react=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/utils.mjs"),mutation=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/mutation.mjs"),notifyManager=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/notifyManager.mjs"),subscribable=__webpack_require__("../../../node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/subscribable.mjs");class MutationObserver extends subscribable.l{constructor(client,options){super(),this.client=client,this.setOptions(options),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){var _this$currentMutation;const prevOptions=this.options;this.options=this.client.defaultMutationOptions(options),(0,utils.VS)(prevOptions,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(_this$currentMutation=this.currentMutation)||_this$currentMutation.setOptions(this.options)}onUnsubscribe(){var _this$currentMutation2;this.hasListeners()||(null==(_this$currentMutation2=this.currentMutation)||_this$currentMutation2.removeObserver(this))}onMutationUpdate(action){this.updateResult();const notifyOptions={listeners:!0};"success"===action.type?notifyOptions.onSuccess=!0:"error"===action.type&&(notifyOptions.onError=!0),this.notify(notifyOptions)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(variables,options){return this.mutateOptions=options,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==variables?variables:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const state=this.currentMutation?this.currentMutation.state:(0,mutation.R)(),result={...state,isLoading:"loading"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset};this.currentResult=result}notify(options){notifyManager.V.batch((()=>{var _this$mutateOptions$o,_this$mutateOptions,_this$mutateOptions$o2,_this$mutateOptions2;if(this.mutateOptions&&this.hasListeners())if(options.onSuccess)null==(_this$mutateOptions$o=(_this$mutateOptions=this.mutateOptions).onSuccess)||_this$mutateOptions$o.call(_this$mutateOptions,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(_this$mutateOptions$o2=(_this$mutateOptions2=this.mutateOptions).onSettled)||_this$mutateOptions$o2.call(_this$mutateOptions2,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context);else if(options.onError){var _this$mutateOptions$o3,_this$mutateOptions3,_this$mutateOptions$o4,_this$mutateOptions4;null==(_this$mutateOptions$o3=(_this$mutateOptions3=this.mutateOptions).onError)||_this$mutateOptions$o3.call(_this$mutateOptions3,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(_this$mutateOptions$o4=(_this$mutateOptions4=this.mutateOptions).onSettled)||_this$mutateOptions$o4.call(_this$mutateOptions4,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}options.listeners&&this.listeners.forEach((({listener})=>{listener(this.currentResult)}))}))}}var useSyncExternalStore=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs"),QueryClientProvider=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),lib_utils=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@18.2.0_react@18.2.0/node_modules/@tanstack/react-query/build/lib/utils.mjs");function useMutation(arg1,arg2,arg3){const options=(0,utils.lV)(arg1,arg2,arg3),queryClient=(0,QueryClientProvider.NL)({context:options.context}),[observer]=react.useState((()=>new MutationObserver(queryClient,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=(0,useSyncExternalStore.$)(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.V.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(noop)}),[observer]);if(result.error&&(0,lib_utils.L)(observer.options.useErrorBoundary,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}function noop(){}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MemoryRouter=exports.BaseRouter=void 0;const mitt_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/lib/mitt/index.js")),urls_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/urls.js");class BaseRouter{constructor(){this.pathname="/",this.query={},this.asPath="/",this.hash="",this.isReady=!0,this.basePath="",this.isFallback=!1,this.isPreview=!1,this.isLocaleDomain=!1,this.locale=void 0,this.locales=[],this.events=(0,mitt_1.default)()}back(){}forward(){}beforePopState(){}async prefetch(){}reload(){}get route(){return this.pathname}}exports.BaseRouter=BaseRouter;class MemoryRouter extends BaseRouter{static snapshot(original){return Object.assign(new MemoryRouter,original)}constructor(initialUrl,async){super(),this.async=!1,this.registerPaths=()=>{throw new Error('\n       This method was removed in v0.7.0.\n       It has been replaced with "mockRouter.useParser(createDynamicRouteParser(...))"\n       See the README for more details on upgrading.\n    ')},this.push=(url,as,options)=>this._setCurrentUrl(url,as,options,"push"),this.replace=(url,as,options)=>this._setCurrentUrl(url,as,options,"replace"),this.setCurrentUrl=(url,as)=>{this._setCurrentUrl(url,as,void 0,"set",!1)},initialUrl&&this.setCurrentUrl(initialUrl),async&&(this.async=async)}useParser(parser){return this.events.on("NEXT_ROUTER_MOCK:parse",parser),()=>this.events.off("NEXT_ROUTER_MOCK:parse",parser)}async _setCurrentUrl(url,as,options,source,async=this.async){const newRoute=parseUrlToCompleteUrl(url,this.pathname);let asPath;if(this.events.emit("NEXT_ROUTER_MOCK:parse",newRoute),null==as)asPath=getRouteAsPath(newRoute);else{const asRoute=parseUrlToCompleteUrl(as,this.pathname);this.events.emit("NEXT_ROUTER_MOCK:parse",asRoute),asPath=getRouteAsPath(asRoute),newRoute.hash=asRoute.hash,newRoute.routeParams=asRoute.routeParams}const shallow=(null==options?void 0:options.shallow)||!1,triggerHashChange=function shouldTriggerHashChange(current,newRoute){const isHashChange=current.hash!==newRoute.hash,isQueryChange=(0,urls_1.stringifyQueryString)(current.query)!==(0,urls_1.stringifyQueryString)(newRoute.query),isRouteChange=isQueryChange||current.pathname!==newRoute.pathname;return!isRouteChange&&(isHashChange||newRoute.hash)}(this,newRoute);triggerHashChange?this.events.emit("hashChangeStart",asPath,{shallow}):this.events.emit("routeChangeStart",asPath,{shallow}),async&&await new Promise((resolve=>setTimeout(resolve,0))),this.asPath=asPath,this.pathname=newRoute.pathname,this.query={...newRoute.query,...newRoute.routeParams},this.hash=newRoute.hash,(null==options?void 0:options.locale)&&(this.locale=options.locale),triggerHashChange?this.events.emit("hashChangeComplete",this.asPath,{shallow}):this.events.emit("routeChangeComplete",this.asPath,{shallow});const eventName="push"===source?"NEXT_ROUTER_MOCK:push":"replace"===source?"NEXT_ROUTER_MOCK:replace":void 0;return eventName&&this.events.emit(eventName,this.asPath,{shallow}),!0}}function parseUrlToCompleteUrl(url,currentPathname){var _a;const parsedUrl="object"==typeof url?url:(0,urls_1.parseUrl)(url);return{pathname:normalizeTrailingSlash(null!==(_a=parsedUrl.pathname)&&void 0!==_a?_a:currentPathname),query:parsedUrl.query||{},hash:parsedUrl.hash||"",routeParams:{}}}function getRouteAsPath({pathname,query,hash,routeParams}){const remainingQuery={...query};let asPath=pathname.replace(/\[{1,2}(.+?)]{1,2}/g,(($0,slug)=>{slug.startsWith("...")&&(slug=slug.replace("...",""));let value=routeParams[slug];return value||(value=remainingQuery[slug],delete remainingQuery[slug]),Array.isArray(value)?value.map((v=>encodeURIComponent(v))).join("/"):void 0!==value?encodeURIComponent(String(value)):""}));asPath=normalizeTrailingSlash(asPath);const qs=(0,urls_1.stringifyQueryString)(remainingQuery);return qs&&(asPath+=`?${qs}`),hash&&(asPath+=hash),asPath}function normalizeTrailingSlash(path){return path.endsWith("/")&&path.length>1?path.slice(0,-1):path||"/"}exports.MemoryRouter=MemoryRouter},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouterContext.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MemoryRouterContext=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"));exports.MemoryRouterContext=react_1.default.createContext(null)},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withRouter=exports.useRouter=exports.memoryRouter=exports.BaseRouter=exports.MemoryRouter=exports.useMemoryRouter=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js")),MemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js"),useMemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js"),withMemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/withMemoryRouter.js"),MemoryRouterContext_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouterContext.js");var useMemoryRouter_2=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js");Object.defineProperty(exports,"useMemoryRouter",{enumerable:!0,get:function(){return useMemoryRouter_2.useMemoryRouter}});var MemoryRouter_2=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js");Object.defineProperty(exports,"MemoryRouter",{enumerable:!0,get:function(){return MemoryRouter_2.MemoryRouter}}),Object.defineProperty(exports,"BaseRouter",{enumerable:!0,get:function(){return MemoryRouter_2.BaseRouter}}),exports.memoryRouter=new MemoryRouter_1.MemoryRouter,exports.memoryRouter.async=!1,exports.default=exports.memoryRouter;exports.useRouter=()=>react_1.default.useContext(MemoryRouterContext_1.MemoryRouterContext)||(0,useMemoryRouter_1.useMemoryRouter)(exports.memoryRouter);exports.withRouter=ComposedComponent=>(0,withMemoryRouter_1.withMemoryRouter)(exports.useRouter,ComposedComponent)},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/lib/mitt/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function mitt(){const all=Object.create(null);return{on(type,handler){(all[type]||(all[type]=[])).push(handler)},off(type,handler){all[type]&&all[type].splice(all[type].indexOf(handler)>>>0,1)},emit(type,...evts){(all[type]||[]).slice().map((handler=>{handler(...evts)}))}}}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/urls.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.stringifyQueryString=exports.parseUrl=void 0,exports.parseUrl=function parseUrl(url){const parsed=new URL(url,"https://base.com"),query=Object.fromEntries(Array.from(parsed.searchParams.keys()).map((key=>{const values=parsed.searchParams.getAll(key);return[key,1===values.length?values[0]:values]})));return{pathname:parsed.pathname,hash:parsed.hash,query}},exports.stringifyQueryString=function stringifyQueryString(query){const params=new URLSearchParams;return Object.keys(query).forEach((key=>{const values=query[key];for(const value of Array.isArray(values)?values:[values])params.append(key,value)})),params.toString()}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useMemoryRouter=void 0;const react_1=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),MemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js");exports.useMemoryRouter=(singletonRouter,eventHandlers)=>{const[router,setRouter]=(0,react_1.useState)((()=>MemoryRouter_1.MemoryRouter.snapshot(singletonRouter)));return(0,react_1.useEffect)((()=>{let isMounted=!0;const handleRouteChange=()=>{isMounted&&setRouter(MemoryRouter_1.MemoryRouter.snapshot(singletonRouter))};return singletonRouter.events.on("routeChangeComplete",handleRouteChange),singletonRouter.events.on("hashChangeComplete",handleRouteChange),()=>{isMounted=!1,singletonRouter.events.off("routeChangeComplete",handleRouteChange),singletonRouter.events.off("hashChangeComplete",handleRouteChange)}}),[singletonRouter]),(0,react_1.useEffect)((()=>{if(!eventHandlers)return;const{onRouteChangeStart,onRouteChangeComplete,onHashChangeStart,onHashChangeComplete,onPush,onReplace}=eventHandlers;return onRouteChangeStart&&singletonRouter.events.on("routeChangeStart",onRouteChangeStart),onRouteChangeComplete&&singletonRouter.events.on("routeChangeComplete",onRouteChangeComplete),onHashChangeStart&&singletonRouter.events.on("hashChangeStart",onHashChangeStart),onHashChangeComplete&&singletonRouter.events.on("hashChangeComplete",onHashChangeComplete),onPush&&singletonRouter.events.on("NEXT_ROUTER_MOCK:push",onPush),onReplace&&singletonRouter.events.on("NEXT_ROUTER_MOCK:replace",onReplace),()=>{onRouteChangeStart&&singletonRouter.events.off("routeChangeStart",onRouteChangeStart),onRouteChangeComplete&&singletonRouter.events.off("routeChangeComplete",onRouteChangeComplete),onHashChangeStart&&singletonRouter.events.off("hashChangeStart",onHashChangeStart),onHashChangeComplete&&singletonRouter.events.off("hashChangeComplete",onHashChangeComplete),onPush&&singletonRouter.events.off("NEXT_ROUTER_MOCK:push",onPush),onReplace&&singletonRouter.events.off("NEXT_ROUTER_MOCK:replace",onReplace)}}),[singletonRouter.events,null==eventHandlers?void 0:eventHandlers.onRouteChangeStart,null==eventHandlers?void 0:eventHandlers.onRouteChangeComplete,null==eventHandlers?void 0:eventHandlers.onHashChangeStart,null==eventHandlers?void 0:eventHandlers.onHashChangeComplete,null==eventHandlers?void 0:eventHandlers.onPush,null==eventHandlers?void 0:eventHandlers.onReplace]),router}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/withMemoryRouter.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMemoryRouter=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"));exports.withMemoryRouter=function withMemoryRouter(useRouter,ComposedComponent){function WithRouterWrapper(props){return react_1.default.createElement(ComposedComponent,{router:useRouter(),...props})}return WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,WithRouterWrapper}}}]);
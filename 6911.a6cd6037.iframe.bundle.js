(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[6911],{"../../../node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/hydration.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function defaultShouldDehydrateMutation(mutation){return mutation.state.isPaused}function defaultShouldDehydrateQuery(query){return"success"===query.state.status}function dehydrate(client,options={}){const mutations=[],queries=[];if(!1!==options.dehydrateMutations){const shouldDehydrateMutation=options.shouldDehydrateMutation||defaultShouldDehydrateMutation;client.getMutationCache().getAll().forEach((mutation=>{shouldDehydrateMutation(mutation)&&mutations.push(function dehydrateMutation(mutation){return{mutationKey:mutation.options.mutationKey,state:mutation.state}}(mutation))}))}if(!1!==options.dehydrateQueries){const shouldDehydrateQuery=options.shouldDehydrateQuery||defaultShouldDehydrateQuery;client.getQueryCache().getAll().forEach((query=>{shouldDehydrateQuery(query)&&queries.push(function dehydrateQuery(query){return{state:query.state,queryKey:query.queryKey,queryHash:query.queryHash}}(query))}))}return{mutations,queries}}__webpack_require__.d(__webpack_exports__,{D:()=>dehydrate})},"../../../node_modules/.pnpm/cross-fetch@3.1.5/node_modules/cross-fetch/dist/browser-ponyfill.js":function(module,exports){var global="undefined"!=typeof self?self:this,__self__=function(){function F(){this.fetch=!1,this.DOMException=global.DOMException}return F.prototype=global,new F}();!function(self){!function(exports){var support_searchParams="URLSearchParams"in self,support_iterable="Symbol"in self&&"iterator"in Symbol,support_blob="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),support_formData="FormData"in self,support_arrayBuffer="ArrayBuffer"in self;if(support_arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(obj){return obj&&viewClasses.indexOf(Object.prototype.toString.call(obj))>-1};function normalizeName(name){if("string"!=typeof name&&(name=String(name)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name))throw new TypeError("Invalid character in header field name");return name.toLowerCase()}function normalizeValue(value){return"string"!=typeof value&&(value=String(value)),value}function iteratorFor(items){var iterator={next:function(){var value=items.shift();return{done:void 0===value,value}}};return support_iterable&&(iterator[Symbol.iterator]=function(){return iterator}),iterator}function Headers(headers){this.map={},headers instanceof Headers?headers.forEach((function(value,name){this.append(name,value)}),this):Array.isArray(headers)?headers.forEach((function(header){this.append(header[0],header[1])}),this):headers&&Object.getOwnPropertyNames(headers).forEach((function(name){this.append(name,headers[name])}),this)}function consumed(body){if(body.bodyUsed)return Promise.reject(new TypeError("Already read"));body.bodyUsed=!0}function fileReaderReady(reader){return new Promise((function(resolve,reject){reader.onload=function(){resolve(reader.result)},reader.onerror=function(){reject(reader.error)}}))}function readBlobAsArrayBuffer(blob){var reader=new FileReader,promise=fileReaderReady(reader);return reader.readAsArrayBuffer(blob),promise}function bufferClone(buf){if(buf.slice)return buf.slice(0);var view=new Uint8Array(buf.byteLength);return view.set(new Uint8Array(buf)),view.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(body){this._bodyInit=body,body?"string"==typeof body?this._bodyText=body:support_blob&&Blob.prototype.isPrototypeOf(body)?this._bodyBlob=body:support_formData&&FormData.prototype.isPrototypeOf(body)?this._bodyFormData=body:support_searchParams&&URLSearchParams.prototype.isPrototypeOf(body)?this._bodyText=body.toString():support_arrayBuffer&&support_blob&&function isDataView(obj){return obj&&DataView.prototype.isPrototypeOf(obj)}(body)?(this._bodyArrayBuffer=bufferClone(body.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):support_arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))?this._bodyArrayBuffer=bufferClone(body):this._bodyText=body=Object.prototype.toString.call(body):this._bodyText="",this.headers.get("content-type")||("string"==typeof body?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support_searchParams&&URLSearchParams.prototype.isPrototypeOf(body)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},support_blob&&(this.blob=function(){var rejected=consumed(this);if(rejected)return rejected;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var rejected=consumed(this);if(rejected)return rejected;if(this._bodyBlob)return function readBlobAsText(blob){var reader=new FileReader,promise=fileReaderReady(reader);return reader.readAsText(blob),promise}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function readArrayBufferAsText(buf){for(var view=new Uint8Array(buf),chars=new Array(view.length),i=0;i<view.length;i++)chars[i]=String.fromCharCode(view[i]);return chars.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},support_formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(name,value){name=normalizeName(name),value=normalizeValue(value);var oldValue=this.map[name];this.map[name]=oldValue?oldValue+", "+value:value},Headers.prototype.delete=function(name){delete this.map[normalizeName(name)]},Headers.prototype.get=function(name){return name=normalizeName(name),this.has(name)?this.map[name]:null},Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name))},Headers.prototype.set=function(name,value){this.map[normalizeName(name)]=normalizeValue(value)},Headers.prototype.forEach=function(callback,thisArg){for(var name in this.map)this.map.hasOwnProperty(name)&&callback.call(thisArg,this.map[name],name,this)},Headers.prototype.keys=function(){var items=[];return this.forEach((function(value,name){items.push(name)})),iteratorFor(items)},Headers.prototype.values=function(){var items=[];return this.forEach((function(value){items.push(value)})),iteratorFor(items)},Headers.prototype.entries=function(){var items=[];return this.forEach((function(value,name){items.push([name,value])})),iteratorFor(items)},support_iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Request(input,options){var body=(options=options||{}).body;if(input instanceof Request){if(input.bodyUsed)throw new TypeError("Already read");this.url=input.url,this.credentials=input.credentials,options.headers||(this.headers=new Headers(input.headers)),this.method=input.method,this.mode=input.mode,this.signal=input.signal,body||null==input._bodyInit||(body=input._bodyInit,input.bodyUsed=!0)}else this.url=String(input);if(this.credentials=options.credentials||this.credentials||"same-origin",!options.headers&&this.headers||(this.headers=new Headers(options.headers)),this.method=function normalizeMethod(method){var upcased=method.toUpperCase();return methods.indexOf(upcased)>-1?upcased:method}(options.method||this.method||"GET"),this.mode=options.mode||this.mode||null,this.signal=options.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&body)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(body)}function decode(body){var form=new FormData;return body.trim().split("&").forEach((function(bytes){if(bytes){var split=bytes.split("="),name=split.shift().replace(/\+/g," "),value=split.join("=").replace(/\+/g," ");form.append(decodeURIComponent(name),decodeURIComponent(value))}})),form}function Response(bodyInit,options){options||(options={}),this.type="default",this.status=void 0===options.status?200:options.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in options?options.statusText:"OK",this.headers=new Headers(options.headers),this.url=options.url||"",this._initBody(bodyInit)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var response=new Response(null,{status:0,statusText:""});return response.type="error",response};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(-1===redirectStatuses.indexOf(status))throw new RangeError("Invalid status code");return new Response(null,{status,headers:{location:url}})},exports.DOMException=self.DOMException;try{new exports.DOMException}catch(err){exports.DOMException=function(message,name){this.message=message,this.name=name;var error=Error(message);this.stack=error.stack},exports.DOMException.prototype=Object.create(Error.prototype),exports.DOMException.prototype.constructor=exports.DOMException}function fetch(input,init){return new Promise((function(resolve,reject){var request=new Request(input,init);if(request.signal&&request.signal.aborted)return reject(new exports.DOMException("Aborted","AbortError"));var xhr=new XMLHttpRequest;function abortXhr(){xhr.abort()}xhr.onload=function(){var rawHeaders,headers,options={status:xhr.status,statusText:xhr.statusText,headers:(rawHeaders=xhr.getAllResponseHeaders()||"",headers=new Headers,rawHeaders.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(line){var parts=line.split(":"),key=parts.shift().trim();if(key){var value=parts.join(":").trim();headers.append(key,value)}})),headers)};options.url="responseURL"in xhr?xhr.responseURL:options.headers.get("X-Request-URL");var body="response"in xhr?xhr.response:xhr.responseText;resolve(new Response(body,options))},xhr.onerror=function(){reject(new TypeError("Network request failed"))},xhr.ontimeout=function(){reject(new TypeError("Network request failed"))},xhr.onabort=function(){reject(new exports.DOMException("Aborted","AbortError"))},xhr.open(request.method,request.url,!0),"include"===request.credentials?xhr.withCredentials=!0:"omit"===request.credentials&&(xhr.withCredentials=!1),"responseType"in xhr&&support_blob&&(xhr.responseType="blob"),request.headers.forEach((function(value,name){xhr.setRequestHeader(name,value)})),request.signal&&(request.signal.addEventListener("abort",abortXhr),xhr.onreadystatechange=function(){4===xhr.readyState&&request.signal.removeEventListener("abort",abortXhr)}),xhr.send(void 0===request._bodyInit?null:request._bodyInit)}))}fetch.polyfill=!0,self.fetch||(self.fetch=fetch,self.Headers=Headers,self.Request=Request,self.Response=Response),exports.Headers=Headers,exports.Request=Request,exports.Response=Response,exports.fetch=fetch,Object.defineProperty(exports,"__esModule",{value:!0})}({})}(__self__),__self__.fetch.ponyfill=!0,delete __self__.fetch.polyfill;var ctx=__self__;(exports=ctx.fetch).default=ctx.fetch,exports.fetch=ctx.fetch,exports.Headers=ctx.Headers,exports.Request=ctx.Request,exports.Response=ctx.Response,module.exports=exports},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MemoryRouter=exports.BaseRouter=void 0;const mitt_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/lib/mitt/index.js")),urls_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/urls.js");class BaseRouter{constructor(){this.pathname="/",this.query={},this.asPath="/",this.hash="",this.isReady=!0,this.basePath="",this.isFallback=!1,this.isPreview=!1,this.isLocaleDomain=!1,this.locale=void 0,this.locales=[],this.events=(0,mitt_1.default)()}back(){}forward(){}beforePopState(){}async prefetch(){}reload(){}get route(){return this.pathname}}exports.BaseRouter=BaseRouter;class MemoryRouter extends BaseRouter{static snapshot(original){return Object.assign(new MemoryRouter,original)}constructor(initialUrl,async){super(),this.async=!1,this.registerPaths=()=>{throw new Error('\n       This method was removed in v0.7.0.\n       It has been replaced with "mockRouter.useParser(createDynamicRouteParser(...))"\n       See the README for more details on upgrading.\n    ')},this.push=(url,as,options)=>this._setCurrentUrl(url,as,options,"push"),this.replace=(url,as,options)=>this._setCurrentUrl(url,as,options,"replace"),this.setCurrentUrl=(url,as)=>{this._setCurrentUrl(url,as,void 0,"set",!1)},initialUrl&&this.setCurrentUrl(initialUrl),async&&(this.async=async)}useParser(parser){return this.events.on("NEXT_ROUTER_MOCK:parse",parser),()=>this.events.off("NEXT_ROUTER_MOCK:parse",parser)}async _setCurrentUrl(url,as,options,source,async=this.async){const newRoute=parseUrlToCompleteUrl(url,this.pathname);let asPath;if(this.events.emit("NEXT_ROUTER_MOCK:parse",newRoute),null==as)asPath=getRouteAsPath(newRoute);else{const asRoute=parseUrlToCompleteUrl(as,this.pathname);this.events.emit("NEXT_ROUTER_MOCK:parse",asRoute),asPath=getRouteAsPath(asRoute),newRoute.hash=asRoute.hash,newRoute.routeParams=asRoute.routeParams}const shallow=(null==options?void 0:options.shallow)||!1,triggerHashChange=function shouldTriggerHashChange(current,newRoute){const isHashChange=current.hash!==newRoute.hash,isQueryChange=(0,urls_1.stringifyQueryString)(current.query)!==(0,urls_1.stringifyQueryString)(newRoute.query),isRouteChange=isQueryChange||current.pathname!==newRoute.pathname;return!isRouteChange&&(isHashChange||newRoute.hash)}(this,newRoute);triggerHashChange?this.events.emit("hashChangeStart",asPath,{shallow}):this.events.emit("routeChangeStart",asPath,{shallow}),async&&await new Promise((resolve=>setTimeout(resolve,0))),this.asPath=asPath,this.pathname=newRoute.pathname,this.query={...newRoute.query,...newRoute.routeParams},this.hash=newRoute.hash,(null==options?void 0:options.locale)&&(this.locale=options.locale),triggerHashChange?this.events.emit("hashChangeComplete",this.asPath,{shallow}):this.events.emit("routeChangeComplete",this.asPath,{shallow});const eventName="push"===source?"NEXT_ROUTER_MOCK:push":"replace"===source?"NEXT_ROUTER_MOCK:replace":void 0;return eventName&&this.events.emit(eventName,this.asPath,{shallow}),!0}}function parseUrlToCompleteUrl(url,currentPathname){var _a;const parsedUrl="object"==typeof url?url:(0,urls_1.parseUrl)(url);return{pathname:normalizeTrailingSlash(null!==(_a=parsedUrl.pathname)&&void 0!==_a?_a:currentPathname),query:parsedUrl.query||{},hash:parsedUrl.hash||"",routeParams:{}}}function getRouteAsPath({pathname,query,hash,routeParams}){const remainingQuery={...query};let asPath=pathname.replace(/\[{1,2}(.+?)]{1,2}/g,(($0,slug)=>{slug.startsWith("...")&&(slug=slug.replace("...",""));let value=routeParams[slug];return value||(value=remainingQuery[slug],delete remainingQuery[slug]),Array.isArray(value)?value.map((v=>encodeURIComponent(v))).join("/"):void 0!==value?encodeURIComponent(String(value)):""}));asPath=normalizeTrailingSlash(asPath);const qs=(0,urls_1.stringifyQueryString)(remainingQuery);return qs&&(asPath+=`?${qs}`),hash&&(asPath+=hash),asPath}function normalizeTrailingSlash(path){return path.endsWith("/")&&path.length>1?path.slice(0,-1):path||"/"}exports.MemoryRouter=MemoryRouter},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouterContext.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MemoryRouterContext=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"));exports.MemoryRouterContext=react_1.default.createContext(null)},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withRouter=exports.useRouter=exports.memoryRouter=exports.BaseRouter=exports.MemoryRouter=exports.useMemoryRouter=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js")),MemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js"),useMemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js"),withMemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/withMemoryRouter.js"),MemoryRouterContext_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouterContext.js");var useMemoryRouter_2=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js");Object.defineProperty(exports,"useMemoryRouter",{enumerable:!0,get:function(){return useMemoryRouter_2.useMemoryRouter}});var MemoryRouter_2=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js");Object.defineProperty(exports,"MemoryRouter",{enumerable:!0,get:function(){return MemoryRouter_2.MemoryRouter}}),Object.defineProperty(exports,"BaseRouter",{enumerable:!0,get:function(){return MemoryRouter_2.BaseRouter}}),exports.memoryRouter=new MemoryRouter_1.MemoryRouter,exports.memoryRouter.async=!1,exports.default=exports.memoryRouter;exports.useRouter=()=>react_1.default.useContext(MemoryRouterContext_1.MemoryRouterContext)||(0,useMemoryRouter_1.useMemoryRouter)(exports.memoryRouter);exports.withRouter=ComposedComponent=>(0,withMemoryRouter_1.withMemoryRouter)(exports.useRouter,ComposedComponent)},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/lib/mitt/index.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function mitt(){const all=Object.create(null);return{on(type,handler){(all[type]||(all[type]=[])).push(handler)},off(type,handler){all[type]&&all[type].splice(all[type].indexOf(handler)>>>0,1)},emit(type,...evts){(all[type]||[]).slice().map((handler=>{handler(...evts)}))}}}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/urls.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stringifyQueryString=exports.parseUrl=void 0,exports.parseUrl=function parseUrl(url){const parsed=new URL(url,"https://base.com"),query=Object.fromEntries(Array.from(parsed.searchParams.keys()).map((key=>{const values=parsed.searchParams.getAll(key);return[key,1===values.length?values[0]:values]})));return{pathname:parsed.pathname,hash:parsed.hash,query}},exports.stringifyQueryString=function stringifyQueryString(query){const params=new URLSearchParams;return Object.keys(query).forEach((key=>{const values=query[key];for(const value of Array.isArray(values)?values:[values])params.append(key,value)})),params.toString()}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/useMemoryRouter.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useMemoryRouter=void 0;const react_1=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),MemoryRouter_1=__webpack_require__("../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/MemoryRouter.js");exports.useMemoryRouter=(singletonRouter,eventHandlers)=>{const[router,setRouter]=(0,react_1.useState)((()=>MemoryRouter_1.MemoryRouter.snapshot(singletonRouter)));return(0,react_1.useEffect)((()=>{let isMounted=!0;const handleRouteChange=()=>{isMounted&&setRouter(MemoryRouter_1.MemoryRouter.snapshot(singletonRouter))};return singletonRouter.events.on("routeChangeComplete",handleRouteChange),singletonRouter.events.on("hashChangeComplete",handleRouteChange),()=>{isMounted=!1,singletonRouter.events.off("routeChangeComplete",handleRouteChange),singletonRouter.events.off("hashChangeComplete",handleRouteChange)}}),[singletonRouter]),(0,react_1.useEffect)((()=>{if(!eventHandlers)return;const{onRouteChangeStart,onRouteChangeComplete,onHashChangeStart,onHashChangeComplete,onPush,onReplace}=eventHandlers;return onRouteChangeStart&&singletonRouter.events.on("routeChangeStart",onRouteChangeStart),onRouteChangeComplete&&singletonRouter.events.on("routeChangeComplete",onRouteChangeComplete),onHashChangeStart&&singletonRouter.events.on("hashChangeStart",onHashChangeStart),onHashChangeComplete&&singletonRouter.events.on("hashChangeComplete",onHashChangeComplete),onPush&&singletonRouter.events.on("NEXT_ROUTER_MOCK:push",onPush),onReplace&&singletonRouter.events.on("NEXT_ROUTER_MOCK:replace",onReplace),()=>{onRouteChangeStart&&singletonRouter.events.off("routeChangeStart",onRouteChangeStart),onRouteChangeComplete&&singletonRouter.events.off("routeChangeComplete",onRouteChangeComplete),onHashChangeStart&&singletonRouter.events.off("hashChangeStart",onHashChangeStart),onHashChangeComplete&&singletonRouter.events.off("hashChangeComplete",onHashChangeComplete),onPush&&singletonRouter.events.off("NEXT_ROUTER_MOCK:push",onPush),onReplace&&singletonRouter.events.off("NEXT_ROUTER_MOCK:replace",onReplace)}}),[singletonRouter.events,null==eventHandlers?void 0:eventHandlers.onRouteChangeStart,null==eventHandlers?void 0:eventHandlers.onRouteChangeComplete,null==eventHandlers?void 0:eventHandlers.onHashChangeStart,null==eventHandlers?void 0:eventHandlers.onHashChangeComplete,null==eventHandlers?void 0:eventHandlers.onPush,null==eventHandlers?void 0:eventHandlers.onReplace]),router}},"../../../node_modules/.pnpm/next-router-mock@0.9.10_next@13.5.4_react@18.2.0/node_modules/next-router-mock/dist/withMemoryRouter.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMemoryRouter=void 0;const react_1=__importDefault(__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"));exports.withMemoryRouter=function withMemoryRouter(useRouter,ComposedComponent){function WithRouterWrapper(props){return react_1.default.createElement(ComposedComponent,{router:useRouter(),...props})}return WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,WithRouterWrapper}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry1.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _isPlaceholder=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_isPlaceholder.js");module.exports=function _curry1(fn){return function f1(a){return 0===arguments.length||_isPlaceholder(a)?f1:fn.apply(this,arguments)}}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry2.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _curry1=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry1.js"),_isPlaceholder=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_isPlaceholder.js");module.exports=function _curry2(fn){return function f2(a,b){switch(arguments.length){case 0:return f2;case 1:return _isPlaceholder(a)?f2:_curry1((function(_b){return fn(a,_b)}));default:return _isPlaceholder(a)&&_isPlaceholder(b)?f2:_isPlaceholder(a)?_curry1((function(_a){return fn(_a,b)})):_isPlaceholder(b)?_curry1((function(_b){return fn(a,_b)})):fn(a,b)}}}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry3.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _curry1=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry1.js"),_curry2=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry2.js"),_isPlaceholder=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_isPlaceholder.js");module.exports=function _curry3(fn){return function f3(a,b,c){switch(arguments.length){case 0:return f3;case 1:return _isPlaceholder(a)?f3:_curry2((function(_b,_c){return fn(a,_b,_c)}));case 2:return _isPlaceholder(a)&&_isPlaceholder(b)?f3:_isPlaceholder(a)?_curry2((function(_a,_c){return fn(_a,b,_c)})):_isPlaceholder(b)?_curry2((function(_b,_c){return fn(a,_b,_c)})):_curry1((function(_c){return fn(a,b,_c)}));default:return _isPlaceholder(a)&&_isPlaceholder(b)&&_isPlaceholder(c)?f3:_isPlaceholder(a)&&_isPlaceholder(b)?_curry2((function(_a,_b){return fn(_a,_b,c)})):_isPlaceholder(a)&&_isPlaceholder(c)?_curry2((function(_a,_c){return fn(_a,b,_c)})):_isPlaceholder(b)&&_isPlaceholder(c)?_curry2((function(_b,_c){return fn(a,_b,_c)})):_isPlaceholder(a)?_curry1((function(_a){return fn(_a,b,c)})):_isPlaceholder(b)?_curry1((function(_b){return fn(a,_b,c)})):_isPlaceholder(c)?_curry1((function(_c){return fn(a,b,_c)})):fn(a,b,c)}}}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_has.js":module=>{module.exports=function _has(prop,obj){return Object.prototype.hasOwnProperty.call(obj,prop)}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_isObject.js":module=>{module.exports=function _isObject(x){return"[object Object]"===Object.prototype.toString.call(x)}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_isPlaceholder.js":module=>{module.exports=function _isPlaceholder(a){return null!=a&&"object"==typeof a&&!0===a["@@functional/placeholder"]}},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/mergeDeepLeft.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _curry2=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry2.js"),mergeDeepWithKey=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/mergeDeepWithKey.js"),mergeDeepLeft=_curry2((function mergeDeepLeft(lObj,rObj){return mergeDeepWithKey((function(k,lVal,rVal){return lVal}),lObj,rObj)}));module.exports=mergeDeepLeft},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/mergeDeepWithKey.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _curry3=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry3.js"),_isObject=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_isObject.js"),mergeWithKey=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/mergeWithKey.js"),mergeDeepWithKey=_curry3((function mergeDeepWithKey(fn,lObj,rObj){return mergeWithKey((function(k,lVal,rVal){return _isObject(lVal)&&_isObject(rVal)?mergeDeepWithKey(fn,lVal,rVal):fn(k,lVal,rVal)}),lObj,rObj)}));module.exports=mergeDeepWithKey},"../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/mergeWithKey.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _curry3=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_curry3.js"),_has=__webpack_require__("../../../node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/src/internal/_has.js"),mergeWithKey=_curry3((function mergeWithKey(fn,l,r){var k,result={};for(k in r=r||{},l=l||{})_has(k,l)&&(result[k]=_has(k,r)?fn(k,l[k],r[k]):l[k]);for(k in r)_has(k,r)&&!_has(k,result)&&(result[k]=r[k]);return result}));module.exports=mergeWithKey}}]);
/*! For license information please see 3244.316c90a8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[3244],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/react.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KO:()=>useAtom,zt:()=>Provider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/vanilla.mjs");const StoreContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useStore=options=>{const store=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StoreContext);return(null==options?void 0:options.store)||store||(0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.K7)()},Provider=({children,store})=>{const storeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return store||storeRef.current||(storeRef.current=(0,jotai_vanilla__WEBPACK_IMPORTED_MODULE_1__.MT)()),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StoreContext.Provider,{value:store||storeRef.current},children)},use=react__WEBPACK_IMPORTED_MODULE_0__.use||(promise=>{if("pending"===promise.status)throw promise;if("fulfilled"===promise.status)return promise.value;throw"rejected"===promise.status?promise.reason:(promise.status="pending",promise.then((v=>{promise.status="fulfilled",promise.value=v}),(e=>{promise.status="rejected",promise.reason=e})),promise)});function useAtomValue(atom,options){const store=useStore(options),[[valueFromReducer,storeFromReducer,atomFromReducer],rerender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((prev=>{const nextValue=store.get(atom);return Object.is(prev[0],nextValue)&&prev[1]===store&&prev[2]===atom?prev:[nextValue,store,atom]}),void 0,(()=>[store.get(atom),store,atom]));let value=valueFromReducer;storeFromReducer===store&&atomFromReducer===atom||(rerender(),value=store.get(atom));const delay=null==options?void 0:options.delay;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const unsub=store.sub(atom,(()=>{"number"!=typeof delay?rerender():setTimeout(rerender,delay)}));return rerender(),unsub}),[store,atom,delay]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(value),value instanceof Promise?use(value):value}function useSetAtom(atom,options){const store=useStore(options);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>{if(!("write"in atom))throw new Error("not writable atom");return store.set(atom,...args)}),[store,atom])}function useAtom(atom,options){return[useAtomValue(atom,options),useSetAtom(atom,options)]}},"../../../node_modules/.pnpm/jotai@2.1.0_react@18.2.0/node_modules/jotai/esm/vanilla.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K7:()=>getDefaultStore,MT:()=>createStore,cn:()=>atom});let keyCount=0;function atom(read,write){const key="atom"+ ++keyCount,config={toString:()=>key};return"function"==typeof read?config.read=read:(config.init=read,config.read=get=>get(config),config.write=(get,set,arg)=>set(config,"function"==typeof arg?arg(get(config)):arg)),write&&(config.write=write),config}const hasInitialValue=atom=>"init"in atom,isActuallyWritableAtom=atom=>!!atom.write,cancelPromiseMap=new WeakMap,cancelPromise=(promise,next)=>{const cancel=cancelPromiseMap.get(promise);cancel&&(cancelPromiseMap.delete(promise),cancel(next))},resolvePromise=(promise,value)=>{promise.status="fulfilled",promise.value=value},rejectPromise=(promise,e)=>{promise.status="rejected",promise.reason=e},isEqualAtomValue=(a,b)=>"v"in a&&"v"in b&&Object.is(a.v,b.v),isEqualAtomError=(a,b)=>"e"in a&&"e"in b&&Object.is(a.e,b.e),hasPromiseAtomValue=a=>"v"in a&&a.v instanceof Promise,returnAtomValue=atomState=>{if("e"in atomState)throw atomState.e;return atomState.v},createStore=()=>{const atomStateMap=new WeakMap,mountedMap=new WeakMap,pendingMap=new Map;let storeListeners,mountedAtoms;storeListeners=new Set,mountedAtoms=new Set;const getAtomState=atom=>atomStateMap.get(atom),setAtomState=(atom,atomState)=>{Object.freeze(atomState);const prevAtomState=atomStateMap.get(atom);if(atomStateMap.set(atom,atomState),pendingMap.has(atom)||pendingMap.set(atom,prevAtomState),prevAtomState&&hasPromiseAtomValue(prevAtomState)){const next="v"in atomState?atomState.v instanceof Promise?atomState.v:Promise.resolve(atomState.v):Promise.reject(atomState.e);cancelPromise(prevAtomState.v,next)}},updateDependencies=(atom,nextAtomState,nextDependencies)=>{const dependencies=new Map;let changed=!1;nextDependencies.forEach(((aState,a)=>{aState||a!==atom||(aState=nextAtomState),aState?(dependencies.set(a,aState),nextAtomState.d.get(a)!==aState&&(changed=!0)):console.warn("[Bug] atom state not found")})),(changed||nextAtomState.d.size!==dependencies.size)&&(nextAtomState.d=dependencies)},setAtomValue=(atom,value,nextDependencies)=>{const prevAtomState=getAtomState(atom),nextAtomState={d:(null==prevAtomState?void 0:prevAtomState.d)||new Map,v:value};return nextDependencies&&updateDependencies(atom,nextAtomState,nextDependencies),prevAtomState&&isEqualAtomValue(prevAtomState,nextAtomState)&&prevAtomState.d===nextAtomState.d?prevAtomState:(setAtomState(atom,nextAtomState),nextAtomState)},setAtomValueOrPromise=(atom,valueOrPromise,nextDependencies,abortPromise)=>{if(valueOrPromise instanceof Promise){let continuePromise;const promise=new Promise(((resolve,reject)=>{let settled=!1;valueOrPromise.then((v=>{if(!settled){settled=!0;const prevAtomState=getAtomState(atom),nextAtomState=setAtomValue(atom,promise,nextDependencies);resolvePromise(promise,v),resolve(v),(null==prevAtomState?void 0:prevAtomState.d)!==nextAtomState.d&&mountDependencies(atom,nextAtomState,null==prevAtomState?void 0:prevAtomState.d)}}),(e=>{if(!settled){settled=!0;const prevAtomState=getAtomState(atom),nextAtomState=setAtomValue(atom,promise,nextDependencies);rejectPromise(promise,e),reject(e),(null==prevAtomState?void 0:prevAtomState.d)!==nextAtomState.d&&mountDependencies(atom,nextAtomState,null==prevAtomState?void 0:prevAtomState.d)}})),continuePromise=next=>{settled||(settled=!0,next.then((v=>resolvePromise(promise,v)),(e=>rejectPromise(promise,e))),resolve(next))}}));return promise.status="pending",((promise,cancel)=>{cancelPromiseMap.set(promise,cancel),promise.catch((()=>{})).finally((()=>cancelPromiseMap.delete(promise)))})(promise,(next=>{next&&continuePromise(next),null==abortPromise||abortPromise()})),setAtomValue(atom,promise,nextDependencies)}return setAtomValue(atom,valueOrPromise,nextDependencies)},readAtomState=atom=>{const atomState=getAtomState(atom);if(atomState&&(atomState.d.forEach(((_,a)=>{a===atom||mountedMap.has(a)||readAtomState(a)})),Array.from(atomState.d).every((([a,s])=>a===atom||getAtomState(a)===s))))return atomState;const nextDependencies=new Map;let isSync=!0;const getter=a=>{if(a===atom){const aState2=getAtomState(a);if(aState2)return nextDependencies.set(a,aState2),returnAtomValue(aState2);if(hasInitialValue(a))return nextDependencies.set(a,void 0),a.init;throw new Error("no atom init")}const aState=readAtomState(a);return nextDependencies.set(a,aState),returnAtomValue(aState)};let controller,setSelf;const options={get signal(){return controller||(controller=new AbortController),controller.signal},get setSelf(){return isActuallyWritableAtom(atom)||console.warn("setSelf function cannot be used with read-only atom"),!setSelf&&isActuallyWritableAtom(atom)&&(setSelf=(...args)=>{if(isSync&&console.warn("setSelf function cannot be called in sync"),!isSync)return writeAtom(atom,...args)}),setSelf}};try{const valueOrPromise=atom.read(getter,options);return setAtomValueOrPromise(atom,valueOrPromise,nextDependencies,(()=>null==controller?void 0:controller.abort()))}catch(error){return((atom,error,nextDependencies)=>{const prevAtomState=getAtomState(atom),nextAtomState={d:(null==prevAtomState?void 0:prevAtomState.d)||new Map,e:error};return nextDependencies&&updateDependencies(atom,nextAtomState,nextDependencies),prevAtomState&&isEqualAtomError(prevAtomState,nextAtomState)&&prevAtomState.d===nextAtomState.d?prevAtomState:(setAtomState(atom,nextAtomState),nextAtomState)})(atom,error,nextDependencies)}finally{isSync=!1}},readAtom=atom=>returnAtomValue(readAtomState(atom)),canUnmountAtom=(atom,mounted)=>!mounted.l.size&&(!mounted.t.size||1===mounted.t.size&&mounted.t.has(atom)),recomputeDependents=atom=>{const mounted=mountedMap.get(atom);null==mounted||mounted.t.forEach((dependent=>{if(dependent!==atom){const prevAtomState=getAtomState(dependent),nextAtomState=readAtomState(dependent);prevAtomState&&isEqualAtomValue(prevAtomState,nextAtomState)||recomputeDependents(dependent)}}))},writeAtomState=(atom,...args)=>{let isSync=!0;const result=atom.write((a=>returnAtomValue(readAtomState(a))),((a,...args2)=>{let r;if(a===atom){if(!hasInitialValue(a))throw new Error("atom not writable");const prevAtomState=getAtomState(a),nextAtomState=setAtomValueOrPromise(a,args2[0]);prevAtomState&&isEqualAtomValue(prevAtomState,nextAtomState)||recomputeDependents(a)}else r=writeAtomState(a,...args2);return isSync||flushPending(),r}),...args);return isSync=!1,result},writeAtom=(atom,...args)=>{const result=writeAtomState(atom,...args);return flushPending(),result},mountAtom=(atom,initialDependent)=>{const mounted={t:new Set(initialDependent&&[initialDependent]),l:new Set};if(mountedMap.set(atom,mounted),mountedAtoms.add(atom),readAtomState(atom).d.forEach(((_,a)=>{const aMounted=mountedMap.get(a);aMounted?aMounted.t.add(atom):a!==atom&&mountAtom(a,atom)})),readAtomState(atom),isActuallyWritableAtom(atom)&&atom.onMount){const onUnmount=atom.onMount(((...args)=>writeAtom(atom,...args)));onUnmount&&(mounted.u=onUnmount)}return mounted},unmountAtom=atom=>{var _a;const onUnmount=null==(_a=mountedMap.get(atom))?void 0:_a.u;onUnmount&&onUnmount(),mountedMap.delete(atom),mountedAtoms.delete(atom);const atomState=getAtomState(atom);atomState?(hasPromiseAtomValue(atomState)&&cancelPromise(atomState.v),atomState.d.forEach(((_,a)=>{if(a!==atom){const mounted=mountedMap.get(a);mounted&&(mounted.t.delete(atom),canUnmountAtom(a,mounted)&&unmountAtom(a))}}))):console.warn("[Bug] could not find atom state to unmount",atom)},mountDependencies=(atom,atomState,prevDependencies)=>{const depSet=new Set(atomState.d.keys());null==prevDependencies||prevDependencies.forEach(((_,a)=>{if(depSet.has(a))return void depSet.delete(a);const mounted=mountedMap.get(a);mounted&&(mounted.t.delete(atom),canUnmountAtom(a,mounted)&&unmountAtom(a))})),depSet.forEach((a=>{const mounted=mountedMap.get(a);mounted?mounted.t.add(atom):mountedMap.has(atom)&&mountAtom(a,atom)}))},flushPending=()=>{for(;pendingMap.size;){const pending=Array.from(pendingMap);pendingMap.clear(),pending.forEach((([atom,prevAtomState])=>{const atomState=getAtomState(atom);if(atomState){atomState.d!==(null==prevAtomState?void 0:prevAtomState.d)&&mountDependencies(atom,atomState,null==prevAtomState?void 0:prevAtomState.d);const mounted=mountedMap.get(atom);!mounted||prevAtomState&&!hasPromiseAtomValue(prevAtomState)&&(isEqualAtomValue(prevAtomState,atomState)||isEqualAtomError(prevAtomState,atomState))||mounted.l.forEach((listener=>listener()))}else console.warn("[Bug] no atom state to flush")}))}storeListeners.forEach((l=>l("state")))},subscribeAtom=(atom,listener)=>{const mounted=(atom=>{let mounted=mountedMap.get(atom);return mounted||(mounted=mountAtom(atom)),mounted})(atom);flushPending();const listeners=mounted.l;return listeners.add(listener),storeListeners.forEach((l=>l("sub"))),()=>{listeners.delete(listener),(atom=>{const mounted=mountedMap.get(atom);mounted&&canUnmountAtom(atom,mounted)&&unmountAtom(atom)})(atom),storeListeners.forEach((l=>l("unsub")))}};return{get:readAtom,set:writeAtom,sub:subscribeAtom,dev_subscribe_store:l=>(storeListeners.add(l),()=>{storeListeners.delete(l)}),dev_get_mounted_atoms:()=>mountedAtoms.values(),dev_get_atom_state:a=>atomStateMap.get(a),dev_get_mounted:a=>mountedMap.get(a),dev_restore_atoms:values=>{for(const[atom,valueOrPromise]of values)hasInitialValue(atom)&&(setAtomValueOrPromise(atom,valueOrPromise),recomputeDependents(atom));flushPending()}}};let defaultStore;const getDefaultStore=()=>(defaultStore||(defaultStore=createStore()),defaultStore)},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
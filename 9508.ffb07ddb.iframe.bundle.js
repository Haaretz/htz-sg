(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[9508],{"../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectDestructuringEmpty})},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../../node_modules/.pnpm/fuzzysort@2.0.1/node_modules/fuzzysort/fuzzysort.js":function(module,exports){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=_=>{var single=(search,target)=>{if("farzher"==search)return{target:"farzher was here (^-^*)/",score:0,_indexes:[0]};if(!search||!target)return NULL;var preparedSearch=getPreparedSearch(search);isObj(target)||(target=getPrepared(target));var searchBitflags=preparedSearch.bitflags;return(searchBitflags&target._bitflags)!==searchBitflags?NULL:algorithm(preparedSearch,target)},go=(search,targets,options)=>{if("farzher"==search)return[{target:"farzher was here (^-^*)/",score:0,_indexes:[0],obj:targets?targets[0]:NULL}];if(!search)return options&&options.all?all(search,targets,options):noResults;var preparedSearch=getPreparedSearch(search),searchBitflags=preparedSearch.bitflags,threshold=(preparedSearch.containsSpace,options&&options.threshold||INT_MIN),limit=options&&options.limit||INT_MAX,resultsLen=0,limitedCount=0,targetsLen=targets.length;if(options&&options.key)for(var key=options.key,i=0;i<targetsLen;++i){var obj=targets[i];(target=getValue(obj,key))&&(isObj(target)||(target=getPrepared(target)),(searchBitflags&target._bitflags)===searchBitflags&&(result=algorithm(preparedSearch,target))!==NULL&&(result.score<threshold||(result={target:result.target,_targetLower:"",_targetLowerCodes:NULL,_nextBeginningIndexes:NULL,_bitflags:0,score:result.score,_indexes:result._indexes,obj},resultsLen<limit?(q.add(result),++resultsLen):(++limitedCount,result.score>q.peek().score&&q.replaceTop(result)))))}else if(options&&options.keys){var scoreFn=options.scoreFn||defaultScoreFn,keys=options.keys,keysLen=keys.length;for(i=0;i<targetsLen;++i){obj=targets[i];for(var objResults=new Array(keysLen),keyI=0;keyI<keysLen;++keyI)key=keys[keyI],(target=getValue(obj,key))?(isObj(target)||(target=getPrepared(target)),(searchBitflags&target._bitflags)!==searchBitflags?objResults[keyI]=NULL:objResults[keyI]=algorithm(preparedSearch,target)):objResults[keyI]=NULL;objResults.obj=obj;var score=scoreFn(objResults);score!==NULL&&(score<threshold||(objResults.score=score,resultsLen<limit?(q.add(objResults),++resultsLen):(++limitedCount,score>q.peek().score&&q.replaceTop(objResults))))}}else for(i=0;i<targetsLen;++i){var target,result;(target=targets[i])&&(isObj(target)||(target=getPrepared(target)),(searchBitflags&target._bitflags)===searchBitflags&&(result=algorithm(preparedSearch,target))!==NULL&&(result.score<threshold||(resultsLen<limit?(q.add(result),++resultsLen):(++limitedCount,result.score>q.peek().score&&q.replaceTop(result)))))}if(0===resultsLen)return noResults;var results=new Array(resultsLen);for(i=resultsLen-1;i>=0;--i)results[i]=q.poll();return results.total=resultsLen+limitedCount,results},highlight=(result,hOpen,hClose)=>{if("function"==typeof hOpen)return highlightCallback(result,hOpen);if(result===NULL)return NULL;void 0===hOpen&&(hOpen="<b>"),void 0===hClose&&(hClose="</b>");var highlighted="",matchesIndex=0,opened=!1,target=result.target,targetLen=target.length,indexes=result._indexes;indexes=indexes.slice(0,indexes.len).sort(((a,b)=>a-b));for(var i=0;i<targetLen;++i){var char=target[i];if(indexes[matchesIndex]===i){if(opened||(opened=!0,highlighted+=hOpen),++matchesIndex===indexes.length){highlighted+=char+hClose+target.substr(i+1);break}}else opened&&(opened=!1,highlighted+=hClose);highlighted+=char}return highlighted},highlightCallback=(result,cb)=>{if(result===NULL)return NULL;var target=result.target,targetLen=target.length,indexes=result._indexes;indexes=indexes.slice(0,indexes.len).sort(((a,b)=>a-b));for(var highlighted="",matchI=0,indexesI=0,opened=!1,i=(result=[],0);i<targetLen;++i){var char=target[i];if(indexes[indexesI]===i){if(++indexesI,opened||(opened=!0,result.push(highlighted),highlighted=""),indexesI===indexes.length){highlighted+=char,result.push(cb(highlighted,matchI++)),highlighted="",result.push(target.substr(i+1));break}}else opened&&(opened=!1,result.push(cb(highlighted,matchI++)),highlighted="");highlighted+=char}return result},indexes=result=>result._indexes.slice(0,result._indexes.len).sort(((a,b)=>a-b)),prepare=target=>{"string"!=typeof target&&(target="");var info=prepareLowerInfo(target);return{target,_targetLower:info._lower,_targetLowerCodes:info.lowerCodes,_nextBeginningIndexes:NULL,_bitflags:info.bitflags,score:NULL,_indexes:[0],obj:NULL}},prepareSearch=search=>{"string"!=typeof search&&(search=""),search=search.trim();var info=prepareLowerInfo(search),spaceSearches=[];if(info.containsSpace){var searches=search.split(/\s+/);searches=[...new Set(searches)];for(var i=0;i<searches.length;i++)if(""!==searches[i]){var _info=prepareLowerInfo(searches[i]);spaceSearches.push({lowerCodes:_info.lowerCodes,_lower:searches[i].toLowerCase(),containsSpace:!1})}}return{lowerCodes:info.lowerCodes,bitflags:info.bitflags,containsSpace:info.containsSpace,_lower:info._lower,spaceSearches}},getPrepared=target=>{if(target.length>999)return prepare(target);var targetPrepared=preparedCache.get(target);return void 0!==targetPrepared||(targetPrepared=prepare(target),preparedCache.set(target,targetPrepared)),targetPrepared},getPreparedSearch=search=>{if(search.length>999)return prepareSearch(search);var searchPrepared=preparedSearchCache.get(search);return void 0!==searchPrepared||(searchPrepared=prepareSearch(search),preparedSearchCache.set(search,searchPrepared)),searchPrepared},all=(search,targets,options)=>{var results=[];results.total=targets.length;var limit=options&&options.limit||INT_MAX;if(options&&options.key)for(var i=0;i<targets.length;i++){var obj=targets[i];if(target=getValue(obj,options.key)){isObj(target)||(target=getPrepared(target)),target.score=INT_MIN,target._indexes.len=0;var result=target;if(result={target:result.target,_targetLower:"",_targetLowerCodes:NULL,_nextBeginningIndexes:NULL,_bitflags:0,score:target.score,_indexes:NULL,obj},results.push(result),results.length>=limit)return results}}else if(options&&options.keys)for(i=0;i<targets.length;i++){obj=targets[i];for(var objResults=new Array(options.keys.length),keyI=options.keys.length-1;keyI>=0;--keyI)(target=getValue(obj,options.keys[keyI]))?(isObj(target)||(target=getPrepared(target)),target.score=INT_MIN,target._indexes.len=0,objResults[keyI]=target):objResults[keyI]=NULL;if(objResults.obj=obj,objResults.score=INT_MIN,results.push(objResults),results.length>=limit)return results}else for(i=0;i<targets.length;i++){var target;if((target=targets[i])&&(isObj(target)||(target=getPrepared(target)),target.score=INT_MIN,target._indexes.len=0,results.push(target),results.length>=limit))return results}return results},algorithm=(preparedSearch,prepared)=>{if(preparedSearch.containsSpace)return algorithmSpaces(preparedSearch,prepared);for(var searchLower=preparedSearch._lower,searchLowerCodes=preparedSearch.lowerCodes,searchLowerCode=searchLowerCodes[0],targetLowerCodes=prepared._targetLowerCodes,searchLen=searchLowerCodes.length,targetLen=targetLowerCodes.length,searchI=0,targetI=0,matchesSimpleLen=0;;){if(searchLowerCode===targetLowerCodes[targetI]){if(matchesSimple[matchesSimpleLen++]=targetI,++searchI===searchLen)break;searchLowerCode=searchLowerCodes[searchI]}if(++targetI>=targetLen)return NULL}searchI=0;var successStrict=!1,matchesStrictLen=0,nextBeginningIndexes=prepared._nextBeginningIndexes;nextBeginningIndexes===NULL&&(nextBeginningIndexes=prepared._nextBeginningIndexes=prepareNextBeginningIndexes(prepared.target)),targetI=0===matchesSimple[0]?0:nextBeginningIndexes[matchesSimple[0]-1];var backtrackCount=0;if(targetI!==targetLen)for(;;)if(targetI>=targetLen){if(searchI<=0)break;if(++backtrackCount>200)break;--searchI,targetI=nextBeginningIndexes[matchesStrict[--matchesStrictLen]]}else if(searchLowerCodes[searchI]===targetLowerCodes[targetI]){if(matchesStrict[matchesStrictLen++]=targetI,++searchI===searchLen){successStrict=!0;break}++targetI}else targetI=nextBeginningIndexes[targetI];var substringIndex=prepared._targetLower.indexOf(searchLower,matchesSimple[0]),isSubstring=~substringIndex;if(isSubstring&&!successStrict)for(var i=0;i<matchesSimpleLen;++i)matchesSimple[i]=substringIndex+i;var isSubstringBeginning=!1;if(isSubstring&&(isSubstringBeginning=prepared._nextBeginningIndexes[substringIndex-1]===substringIndex),successStrict)var matchesBest=matchesStrict,matchesBestLen=matchesStrictLen;else matchesBest=matchesSimple,matchesBestLen=matchesSimpleLen;var score=0,extraMatchGroupCount=0;for(i=1;i<searchLen;++i)matchesBest[i]-matchesBest[i-1]!=1&&(score-=matchesBest[i],++extraMatchGroupCount);if(score-=(matchesBest[searchLen-1]-matchesBest[0]-(searchLen-1)+12)*extraMatchGroupCount,0!==matchesBest[0]&&(score-=10*matchesBest[0]),successStrict){var uniqueBeginningIndexes=1;for(i=nextBeginningIndexes[0];i<targetLen;i=nextBeginningIndexes[i])++uniqueBeginningIndexes;uniqueBeginningIndexes>24&&(score*=10*(uniqueBeginningIndexes-24))}else score*=1e3;for(isSubstring&&(score/=10),isSubstringBeginning&&(score/=10),score-=targetLen-searchLen,prepared.score=score,i=0;i<matchesBestLen;++i)prepared._indexes[i]=matchesBest[i];return prepared._indexes.len=matchesBestLen,prepared},algorithmSpaces=(preparedSearch,target)=>{for(var seen_indexes=new Set,score=0,result=NULL,first_seen_index_last_search=0,searches=preparedSearch.spaceSearches,i=0;i<searches.length;++i){var search=searches[i];if((result=algorithm(search,target))===NULL)return NULL;score+=result.score,result._indexes[0]<first_seen_index_last_search&&(score-=first_seen_index_last_search-result._indexes[0]),first_seen_index_last_search=result._indexes[0];for(var j=0;j<result._indexes.len;++j)seen_indexes.add(result._indexes[j])}result.score=score,i=0;for(let index of seen_indexes)result._indexes[i++]=index;return result._indexes.len=i,result},prepareLowerInfo=str=>{for(var strLen=str.length,lower=str.toLowerCase(),lowerCodes=[],bitflags=0,containsSpace=!1,i=0;i<strLen;++i){var lowerCode=lowerCodes[i]=lower.charCodeAt(i);32!==lowerCode?bitflags|=1<<(lowerCode>=97&&lowerCode<=122?lowerCode-97:lowerCode>=48&&lowerCode<=57?26:lowerCode<=127?30:31):containsSpace=!0}return{lowerCodes,bitflags,containsSpace,_lower:lower}},prepareBeginningIndexes=target=>{for(var targetLen=target.length,beginningIndexes=[],beginningIndexesLen=0,wasUpper=!1,wasAlphanum=!1,i=0;i<targetLen;++i){var targetCode=target.charCodeAt(i),isUpper=targetCode>=65&&targetCode<=90,isAlphanum=isUpper||targetCode>=97&&targetCode<=122||targetCode>=48&&targetCode<=57,isBeginning=isUpper&&!wasUpper||!wasAlphanum||!isAlphanum;wasUpper=isUpper,wasAlphanum=isAlphanum,isBeginning&&(beginningIndexes[beginningIndexesLen++]=i)}return beginningIndexes},prepareNextBeginningIndexes=target=>{for(var targetLen=target.length,beginningIndexes=prepareBeginningIndexes(target),nextBeginningIndexes=[],lastIsBeginning=beginningIndexes[0],lastIsBeginningI=0,i=0;i<targetLen;++i)lastIsBeginning>i?nextBeginningIndexes[i]=lastIsBeginning:(lastIsBeginning=beginningIndexes[++lastIsBeginningI],nextBeginningIndexes[i]=void 0===lastIsBeginning?targetLen:lastIsBeginning);return nextBeginningIndexes},cleanup=()=>{preparedCache.clear(),preparedSearchCache.clear(),matchesSimple=[],matchesStrict=[]},preparedCache=new Map,preparedSearchCache=new Map,matchesSimple=[],matchesStrict=[],defaultScoreFn=a=>{for(var max=INT_MIN,len=a.length,i=0;i<len;++i){var result=a[i];if(result!==NULL){var score=result.score;score>max&&(max=score)}}return max===INT_MIN?NULL:max},getValue=(obj,prop)=>{var tmp=obj[prop];if(void 0!==tmp)return tmp;var segs=prop;Array.isArray(prop)||(segs=prop.split("."));for(var len=segs.length,i=-1;obj&&++i<len;)obj=obj[segs[i]];return obj},isObj=x=>"object"==typeof x,INT_MAX=1/0,INT_MIN=-INT_MAX,noResults=[];noResults.total=0;var e,o,a,v,NULL=null,q=(e=[],o=0,v=r=>{for(var a=0,v=e[a],c=1;c<o;){var s=c+1;a=c,s<o&&e[s].score<e[c].score&&(a=s),e[a-1>>1]=e[a],c=1+(a<<1)}for(var f=a-1>>1;a>0&&v.score<e[f].score;f=(a=f)-1>>1)e[a]=e[f];e[a]=v},(a={}).add=r=>{var a=o;e[o++]=r;for(var v=a-1>>1;a>0&&r.score<e[v].score;v=(a=v)-1>>1)e[a]=e[v];e[a]=r},a.poll=r=>{if(0!==o){var a=e[0];return e[0]=e[--o],v(),a}},a.peek=r=>{if(0!==o)return e[0]},a.replaceTop=r=>{e[0]=r,v()},a);return{single,go,highlight,prepare,indexes,cleanup}})?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[62],{"../../ds-atoms/s-button/src/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pL:()=>DEFAULT_ELEMENT,bS:()=>_Button,ZP:()=>src_Button});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs"),src=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),s_visually_hidden_src=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts");const s_parse_button_props_src=__webpack_require__("../../utils/s-parse-button-props/src/parseButtonProps.ts").ZP,_excluded=["as","busyNotice","children","inlineStyle","isPressed","priority","sharp","size","state","stretch","styleExtend","type","variant","startIcon","endIcon","startIconStyleExtend"];var __jsx=react.createElement;const c={base:{alignItems:"foGVKH",borderStartStartRadius:"dzqoCh",borderStartEndRadius:"cRDWRt",borderEndStartRadius:"doYnwO",borderEndEndRadius:"bGojQK",columnGap:"cUcBkx",display:"jhKQav",fontFamily:"cGpNyn",fontWeight:"iLdtFu",outlineStyle:"gcyyum",outlineOffset:"fHRBnN",outlineWidth:"eGCNgh",overflowX:"dUvWpK",overflowY:"hRLVFh",position:"cjScYX",transitionProperty:"kqAWkr",transitionDuration:"bUZUox",transitionTimingFunction:"iaemGh",":focus":{outlineWidth:"jyEgnP",outlineOffset:"egkthv"},":active":{transform:"iNlVNY"},fontSize:"iKjpVA",lineHeight:"cVaJzg",borderBottomColor:"gPYmDL",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"eejUxl",borderTopColor:"kbmljQ",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"bdXHYu",borderInlineEndColor:"qvCfh",borderInlineEndStyle:"hszzXi",borderInlineEndWidth:"bTnXNj",paddingInlineEnd:"iHcdxl",borderInlineStartColor:"hSZPEn",borderInlineStartStyle:"itlHSH",borderInlineStartWidth:"hXXzlB",paddingInlineStart:"hIfrmf","@media all and (min-width:102em)":{fontSize:"iswsIN",lineHeight:"lbqvfo"}},disabledState:{opacity:"iItPPl",":hover":{transform:"gmCIEE"},":active":{transform:"hFTWVM"}},busyState:{":hover":{transform:"gmCIEE"},":active":{transform:"hFTWVM"},"::before":{animationDuration:"kYRCDO",animationDirection:"dMKhUi",animationTimingFunction:"jZQflR",animationIterationCount:"kdAJkB",animationName:"jPUgLb",backgroundColor:"SAHKz",content:"julXB",display:"clggEI",pointerEvents:"dcAyea",position:"kvHVCE",transformOrigin:"lfJenI",height:"cAqeGp",left:"gvZAKo",top:"knneoB",width:"dvxgUZ"}},primaryPriority:{"--btn-brdr-c":"bIuutR","--btn-bsy-bgc":"eKlLRi",backgroundColor:"cvMyUt",color:"bphCbU",":hover":{backgroundColor:"dfoZop",color:"bA_dwKV"},":focus":{backgroundColor:"eNryPv",color:"jUGBsm"},":active":{backgroundColor:"ccNcvB",color:"ZDutL"}},secondaryPriority:{"--btn-brdr-c":"hJSATy","--btn-bsy-bgc":"ditwcm",backgroundColor:"iIUQLo",color:"gdYCcR",":hover":{"--btn-brdr-c":"joUwQL",backgroundColor:"jpggnL",color:"fkfmQu"},":focus":{"--btn-brdr-c":"hsOFJM",backgroundColor:"fnUdEC",color:"kKASWk"},":active":{"--btn-brdr-c":"buPLTl",backgroundColor:"kasYQX",color:"eeZGOV"}},tertiaryPriority:{"--btn-brdr-c":"bIuutR","--btn-bsy-bgc":"dLJWGf",backgroundColor:"fMDKOR",color:"cXcdDn",":hover":{backgroundColor:"iUeLnX",color:"ftnyBn"},":focus":{backgroundColor:"jlWDkh",color:"bjReCY"},":active":{backgroundColor:"eMRTUm",color:"khQNli"}},smallSize:{"@media all and (max-width:79.9375em)":{paddingInlineStart:"ezOhTm",paddingInlineEnd:"fJsuhg",paddingBottom:"ffXvxl",paddingTop:"vABRf",fontSize:"lfoXAV",lineHeight:"gXdyGv"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"cEKNZk",lineHeight:"gMAJcp"},"@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},largeSize:{paddingBottom:"forjOp",paddingTop:"eaiqgL",paddingInlineStart:"pWvNh",paddingInlineEnd:"dQahVj",fontSize:"dGDAum",lineHeight:"eFKXv","@media all and (min-width:80em)":{paddingInlineStart:"ldQfTt",paddingInlineEnd:"Qkajm"},"@media all and (min-width:80em) and (max-width:101.9375em)":{fontSize:"kGliJO",lineHeight:"eeFyyU"},"@media all and (min-width:102em)":{fontSize:"kNnzPI",lineHeight:"dkNqmP"}},brandVariant:{"--btn-bsy-prmry-bgc":"eiQHYQ","--btn-prmry-bgc":"fkmYwT","--btn-prmry-c":"NTxvP","--btn-prmry-hvr-bgc":"esZnAM","--btn-bsy-scndry-bgc":"bMgsAI","--btn-scndry-c":"iqQPVp","--btn-brdr-scndry-c":"eClfhF","--btn-scndry-hvr-bgc":"cMIMj","--btn-brdr-scndry-hvr-c":"boYGdA","--btn-bsy-trtry-bgc":"evqQwF","--btn-trtry-c":"kUxHVp","--btn-trtry-hvr-bgc":"ePYExO",outlineColor:"bXmFVS"},neutralVariant:{"--btn-bsy-prmry-bgc":"daQnrb","--btn-prmry-bgc":"bwVhox","--btn-prmry-c":"NTxvP","--btn-prmry-hvr-bgc":"jegeLy","--btn-bsy-scndry-bgc":"ibuGEP","--btn-scndry-c":"jyelMu","--btn-brdr-scndry-c":"kcZvdn","--btn-scndry-hvr-bgc":"ikSVCY","--btn-brdr-scndry-hvr-c":"fPOIZu","--btn-bsy-trtry-bgc":"dYaHKM","--btn-trtry-c":"azruu","--btn-trtry-hvr-bgc":"eyQEcC","--btn-brdr-trtry-hvr-c":"fpSDPy",outlineColor:"cPfZDC"},dangerVariant:{"--btn-bsy-prmry-bgc":"NYgCI","--btn-prmry-bgc":"DZDSB","--btn-prmry-c":"NTxvP","--btn-prmry-hvr-bgc":"qIgfM","--btn-bsy-scndry-bgc":"cjXWOZ","--btn-scndry-c":"gfAvNe","--btn-brdr-scndry-c":"bDZiIL","--btn-scndry-hvr-bgc":"kOHBG","--btn-brdr-scndry-hvr-c":"gaGemX","--btn-bsy-trtry-bgc":"dYaHKM","--btn-trtry-c":"diAvLA","--btn-trtry-hvr-bgc":"gMGrIT","--btn-brdr-trtry-hvr-c":"gQLuNS",outlineColor:"eUoZwo"},successVariant:{"--btn-bsy-prmry-bgc":"jckEXm","--btn-prmry-bgc":"dHuiU","--btn-prmry-c":"NTxvP","--btn-prmry-hvr-bgc":"bFsHEI","--btn-bsy-scndry-bgc":"kWuoNv","--btn-scndry-c":"dEhLzF","--btn-brdr-scndry-c":"jzsNJs","--btn-scndry-hvr-bgc":"ehqPpH","--btn-brdr-scndry-hvr-c":"eOnBBh","--btn-bsy-trtry-bgc":"ioVssE","--btn-trtry-c":"gcofov","--btn-trtry-hvr-bgc":"kamkLj","--btn-brdr-trtry-hvr-c":"hpTWmn",outlineColor:"klFSUv"},salesVariant:{"--btn-bsy-prmry-bgc":"eRaOdQ","--btn-prmry-bgc":"cdpUOt","--btn-prmry-c":"iaTcCj","--btn-prmry-hvr-bgc":"bnfzqp","--btn-bsy-scndry-bgc":"hdWSoa","--btn-scndry-c":"cVBmvH","--btn-brdr-scndry-c":"gCrJqy","--btn-scndry-hvr-bgc":"gXAHwc","--btn-brdr-scndry-hvr-c":"OavUv","--btn-bsy-trtry-bgc":"guVJxk","--btn-trtry-bgc":"huTVxo","--btn-trtry-c":"hBVIHL","--btn-trtry-hvr-bgc":"cYWRaM","--btn-brdr-trtry-hvr-c":"jmhyYz",outlineColor:"kGmOoL",borderTopLeftRadius:"bxVyxl",borderTopRightRadius:"grbKbB",borderBottomRightRadius:"uQoBY",borderBottomLeftRadius:"hUyVrJ",textTransform:"ejIBNo"},stretch:{maxWidth:"fwqTyU",width:"cRUUAa",justifyContent:"IVbXa"},topSharp:{borderTopLeftRadius:"liNQyG",borderTopRightRadius:"ecAwHT"},bottomSharp:{borderBottomLeftRadius:"dIuexX",borderBottomRightRadius:"hPkSBF"},startSharp:{borderStartStartRadius:"crUSOB",borderEndStartRadius:"ignlgT"},endSharp:{borderStartEndRadius:"hFXfyo",borderEndEndRadius:"iIbjtj"},allSharp:{borderStartStartRadius:"crUSOB",borderStartEndRadius:"hFXfyo",borderEndStartRadius:"ignlgT",borderEndEndRadius:"iIbjtj"},childrenWrapper:{position:"cjScYX",whiteSpace:"bwVBMs"},icon:{lineHeight:"egGyMq",fontSize:"hHyHSZ","@media all and (max-width:47.9375em)":{fontSize:"ea_dEG"},"@media all and (min-width:80em)":{fontSize:"ePaljO"}},iconLarge:{fontSize:"cypeLb","@media all and (min-width:80em)":{fontSize:"kltmtJ"}},iconSmall:{fontSize:"fUqtKm","@media all and (min-width:80em)":{fontSize:"JrQIS"}},startIcon:{marginInlineStart:"gUmRcp"},endIcon:{marginInlineEnd:"gVCPFb"}},DEFAULT_ELEMENT="button",Button=react.forwardRef((function Button(_ref,ref){let{as,busyNotice,children=null,inlineStyle,isPressed,priority="primary",sharp,size="regular",state="auto",stretch=!1,styleExtend=[],type="button",variant="brand",startIcon=null,endIcon=null,startIconStyleExtend=[]}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const Element=as||DEFAULT_ELEMENT,isButton="button"===Element;if(!isButton&&!("href"in attrs))throw new TypeError('<Button /> may only render a "button" or an "a" element.\nYou passed something else to the "as" prop');const hasState="auto"!==state,hasSize="regular"!==size,a11yAttrs=s_parse_button_props_src(isButton?{as:"button",state,isPressed,type,style:inlineStyle}:{as:"a",state,type,isPressed,style:inlineStyle}),priorityClass=`${priority}Priority`,variantClass=`${variant}Variant`,screenReaderText="busy"===state&&"string"==typeof busyNotice?__jsx(s_visually_hidden_src.ZP,null,busyNotice):null;return __jsx(Element,(0,esm_extends.Z)({ref},attrs,a11yAttrs,{className:(0,style9.Z)(c.base,c[priorityClass],c[variantClass],hasSize&&c[`${size}Size`],hasState&&c[`${state}State`],stretch&&c.stretch,sharp&&c[`${sharp}Sharp`],...styleExtend)}),"string"==typeof startIcon?__jsx(src.Z,{icon:startIcon,styleExtend:[c.icon,c.startIcon,"large"===size&&c.iconLarge,"small"===size&&c.iconSmall,...startIconStyleExtend]}):startIcon,__jsx("span",{className:(0,style9.Z)(c.childrenWrapper)},children),"string"==typeof endIcon?__jsx(src.Z,{icon:endIcon,styleExtend:[c.icon,c.endIcon,"large"===size&&c.iconLarge,"small"===size&&c.iconSmall]}):endIcon,screenReaderText)}));Button.__docgenInfo={description:"",methods:[],displayName:"Button"};const src_Button=Button;function _Button(_props){return null}try{_Button.displayName="_Button",_Button.__docgenInfo={description:"",displayName:"_Button",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<Button>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyButton(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Button\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},priority:{defaultValue:{value:"primary"},description:"Signals the button's priority within the general UI composition\nin which it is used and in relation to other buttons related to it.<br />\n`primary` is an opaque button with a solid background, `secondary` is an\noutlined button with a solid stroke, and `tertiary` is a textual-only button.\n@defaultValue 'primary'",name:"priority",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},variant:{defaultValue:{value:"brand"},description:"Sets the color of the button and indicates intent\n@defaultValue 'brand'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"sales"'}]}},size:{defaultValue:{value:"regular"},description:"Sets the button's typography and inner-spacing (padding).\n@defaultValue 'regular'",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"regular"'}]}},stretch:{defaultValue:{value:"false"},description:"Expand to fill the full width the Button's parent container\n@defaultValue false",name:"stretch",required:!1,type:{name:"boolean | undefined"}},sharp:{defaultValue:null,description:"Sets sharp corners (without border-radius) on two or more corners\n@defaultValue undefined",name:"sharp",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"bottom"'},{value:'"top"'},{value:'"all"'}]}},startIcon:{defaultValue:{value:"null"},description:"An icon component to place at the beginning of the input.",name:"startIcon",required:!1,type:{name:"IconName | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined"}},endIcon:{defaultValue:{value:"null"},description:"An icon component to place at the end of the input.",name:"endIcon",required:!1,type:{name:"IconName | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"undefined"}},startIconStyleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Button styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"startIconStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},isPressed:{defaultValue:null,description:"Indicates an on-off dual state, (similar to a toggle button)\ne.g., a `follow author`, the state of which needs to be conveyed\nto screen readers using the `aria-pressed` attribute\n@defaultValue undefined",name:"isPressed",required:!1,type:{name:"boolean | undefined"}},type:{defaultValue:{value:"button"},description:"The value of  button's type attribute. Ignored when `as` is not `button.`",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},state:{defaultValue:{value:"auto"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"auto"'},{value:'"busy"'}]}},busyNotice:{defaultValue:null,description:'The notification read by screen readers to notify the user\nthat something is happening, e.g., "Loading more articles".\n**Required when `state` is set to `busy`.**',name:"busyNotice",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-button/src/Button.tsx#_Button"]={docgenInfo:_Button.__docgenInfo,name:"_Button",path:"../../ds-atoms/s-button/src/Button.tsx#_Button"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-icon/src/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_haaretz_s_visually_hidden__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../ds-atoms/s-visually-hidden/src/index.ts"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["a11yLabel","a11yDescription","variant","focusable","screenReaderText","icon","inlineStyle","styleExtend"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const c={base:{"--_icn-c":"hmHRXt","--_icn-c2":"hxvpkK",height:"jXmXEB",width:"hHGIsI"},inheritVariant:{"--_icn-dflt-c":"kbMSva"},brandVariant:{"--_icn-dflt-c":"fsJCwT"},brandInverseVariant:{"--_icn-dflt-c":"kgVBQo"},neutralVariant:{"--_icn-dflt-c":"jowrTv"},inverseVariant:{"--_icn-dflt-c":"edhiKO"},dangerVariant:{"--_icn-dflt-c":"iRFORO"},successVariant:{"--_icn-dflt-c":"kEwWGm"}},Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Icon(_ref,ref){let{a11yLabel,a11yDescription,variant="inherit",focusable=!1,screenReaderText,icon,inlineStyle,styleExtend=[]}=_ref,attrs=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);const hasA11yText=a11yLabel||a11yDescription,descriptionId=react__WEBPACK_IMPORTED_MODULE_0__.useId(),a11yAttrs=hasA11yText?function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({"aria-label":a11yLabel},a11yDescription?{"aria-describedby":descriptionId}:{}):{"aria-hidden":!0,role:"img"},focusAttrs=focusable&&hasA11yText?{focusable:!0}:{focusable:!1,tabIndex:-1},desc=a11yDescription?__jsx("desc",{id:descriptionId},a11yDescription):null,variantClass=`${variant}Variant`;return!focusable||a11yDescription||a11yLabel||console.error(`An "${icon}" icon is set to be focusable but has no a11y label or description\n`,'The "focusable" attribute will not be assigned'),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("svg",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({ref,className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.base,c[variantClass],...styleExtend),style:inlineStyle},focusAttrs,attrs,a11yAttrs),desc,__jsx("use",{xlinkHref:`#icn-${icon}`})),screenReaderText?__jsx(_haaretz_s_visually_hidden__WEBPACK_IMPORTED_MODULE_2__.ZP,null,screenReaderText):null)}));Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"};const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyIcon(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Icon\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Icon styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},icon:{defaultValue:null,description:"The icon to render",name:"icon",required:!0,type:{name:"enum",value:[{value:'"audio"'},{value:'"menu"'},{value:'"marker"'},{value:'"search"'},{value:'"Login"'},{value:'"Logout"'},{value:'"a11y"'},{value:'"alef"'},{value:'"android"'},{value:'"apple"'},{value:'"arrow-right"'},{value:'"audio-ff"'},{value:'"audio-rw"'},{value:'"bell"'},{value:'"bookmark"'},{value:'"camera"'},{value:'"check"'},{value:'"chevron-bottom"'},{value:'"chevron-right"'},{value:'"close"'},{value:'"comments"'},{value:'"discover"'},{value:'"dislike"'},{value:'"edit"'},{value:'"facebook"'},{value:'"gift"'},{value:'"hdc"'},{value:'"headphones"'},{value:'"heart"'},{value:'"hide"'},{value:'"home"'},{value:'"htz"'},{value:'"like"'},{value:'"lock"'},{value:'"m"'},{value:'"mail"'},{value:'"microphone"'},{value:'"minus"'},{value:'"most-viewed"'},{value:'"pause"'},{value:'"phone"'},{value:'"play"'},{value:'"playlist"'},{value:'"plus"'},{value:'"printer"'},{value:'"rss"'},{value:'"share"'},{value:'"show"'},{value:'"spotify"'},{value:'"star"'},{value:'"twitter"'},{value:'"user"'},{value:'"warn"'},{value:'"whattsup"'},{value:'"zen"'},{value:'"zoom-in"'}]}},variant:{defaultValue:{value:"inherit"},description:"The color of the icon",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"brand"'},{value:'"neutral"'},{value:'"danger"'},{value:'"success"'},{value:'"inverse"'},{value:'"brandInverse"'}]}},a11yLabel:{defaultValue:null,description:"An A11Y label for the icon",name:"a11yLabel",required:!1,type:{name:"string | undefined"}},a11yDescription:{defaultValue:null,description:"An A11Y description for the icon",name:"a11yDescription",required:!1,type:{name:"string | undefined"}},focusable:{defaultValue:{value:"false"},description:"Make the icon keyboard accessible",name:"focusable",required:!1,type:{name:"boolean | undefined"}},screenReaderText:{defaultValue:null,description:"Visually hidden text for screen readers",name:"screenReaderText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-icon/src/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../ds-atoms/s-icon/src/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-icon/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-icon/src/Icon.tsx").Z},"../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H6:()=>_VisuallyHidden,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pL:()=>DEFAULT_ELEMENT});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.1_rollup@2.79.1_webpack@5.74.0/node_modules/style9/index.mjs");const _excluded=["as","children","inlineStyle","isFocusable","styleExtend"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const classNames={base:{borderTopWidth:"glXlAQ",borderRightWidth:"ejfOAg",borderBottomWidth:"imuUWK",borderLeftWidth:"jePIQM",clip:"beEFvi",clipPath:"dbEoLb",height:"ktUKSC",marginTop:"jTjNVR",marginRight:"dIYdMf",marginBottom:"jjXZbq",marginLeft:"bmFLeF",overflowX:"dUvWpK",overflowY:"hRLVFh",paddingTop:"kVZHcH",paddingRight:"dwawJR",paddingBottom:"iATxZH",paddingLeft:"jQenOz",position:"bEvNbr",width:"JkHvI",whiteSpace:"bwVBMs",wordWrap:"gOKRJN",opacity:"UXrzu"},focusable:{":active":{clip:"kuytCZ",clipPath:"fbPfaP",height:"denmys",marginTop:"jnzTFi",marginRight:"jeOFPx",marginBottom:"eGVclN",marginLeft:"laFZyU",overflowX:"dEHlfP",overflowY:"biNehD",position:"izcesL",width:"fINNBL",whiteSpace:"enUJRt",opacity:"bZiUOO"},":focus":{clip:"ftGVOL",clipPath:"hVQFuO",height:"hivugc",marginTop:"drTIif",marginRight:"ffoFcR",marginBottom:"fZAKYa",marginLeft:"cFSbZy",overflowX:"kGSnZF",overflowY:"kHnbRw",position:"dAAEuD",width:"eckYoa",whiteSpace:"hTDTat",opacity:"hFxcLz"}}},DEFAULT_ELEMENT="span",VisuallyHidden=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function VisuallyHidden(_ref,ref){let{as,children=null,inlineStyle,isFocusable,styleExtend=[]}=_ref,attrs=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(as||DEFAULT_ELEMENT,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,style9__WEBPACK_IMPORTED_MODULE_1__.Z)(classNames.base,isFocusable&&classNames.focusable,...styleExtend),style:inlineStyle},attrs),children)}));VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const __WEBPACK_DEFAULT_EXPORT__=VisuallyHidden;function _VisuallyHidden(_props){return null}try{_VisuallyHidden.displayName="_VisuallyHidden",_VisuallyHidden.__docgenInfo={description:"",displayName:"_VisuallyHidden",props:{children:{defaultValue:{value:"null"},description:"The content to hide inside `<VisuallyHidden>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyVisuallyHidden(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <VisuallyHidden\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},isFocusable:{defaultValue:null,description:"Should the element become visible when focused, e.g., skip links",name:"isFocusable",required:!1,type:{name:"true | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<VisuallyHidden styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx#_VisuallyHidden"]={docgenInfo:_VisuallyHidden.__docgenInfo,name:"_VisuallyHidden",path:"../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx#_VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"../../ds-atoms/s-visually-hidden/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../ds-atoms/s-visually-hidden/src/VisuallyHidden.tsx").ZP},"../../utils/s-parse-button-props/src/parseButtonProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pL:()=>DEFAULT_ELEMENT});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const _excluded=["as","state","isPressed"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const noPointerEvents={pointerEvents:"none"},DEFAULT_ELEMENT="button";const __WEBPACK_DEFAULT_EXPORT__=function parseButtonProps(props){const{as=DEFAULT_ELEMENT,state="auto",isPressed}=props,sharedAttrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded);if(sharedAttrs["aria-live"]="off","busy"!==state&&null==isPressed||(sharedAttrs["aria-live"]="assertive","busy"===state&&(sharedAttrs["aria-disabled"]="true")),["disabled","busy"].includes(state)&&(sharedAttrs.onClick=makeElementInert,sharedAttrs.onMouseDown=makeElementInert,sharedAttrs.onMouseUp=makeElementInert),null!=isPressed&&(sharedAttrs["aria-pressed"]=isPressed),"button"===as){const attrs=sharedAttrs;return attrs.type&&["submit","reset","button"].includes(attrs.type)||(attrs.type="button"),"disabled"===state&&(attrs.disabled=!0),attrs}delete sharedAttrs.type;const attrs=sharedAttrs;return"disabled"===state&&(attrs.tabIndex=-1,attrs.style=attrs.style?_objectSpread(_objectSpread({},attrs.style),noPointerEvents):noPointerEvents),attrs};function makeElementInert(evt){evt.preventDefault(),evt.stopPropagation(),"nativeEvent"in evt&&evt.nativeEvent.stopImmediatePropagation()}}}]);
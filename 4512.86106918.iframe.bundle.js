"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[4512],{"../../ds-atoms/s-dropdown/src/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_haaretz_s_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../ds-atoms/s-icon/src/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/next@13.5.4_@babel+core@7.22.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),style9__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs");const _excluded=["inlineStyle","styleExtend","optionsWrapperStyleExtend","options","variant","label","onChange","initialSelectedOption","controlledComponent","disabled"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const c={base:{"--lbl-drpdwn-brdr-c":"gNdlfU",color:"gkIEgl",display:"gSBWlu",flexDirection:"iMkoWi",position:"cjScYX",zIndex:"JeNDC",fontSize:"iKjpVA",lineHeight:"cVaJzg","@media all and (min-width:102em)":{fontSize:"iswsIN",lineHeight:"lbqvfo"}},btn:{display:"gSBWlu",alignItems:"foGVKH",justifyContent:"kJzccJ",columnGap:"haEjPJ",fontWeight:"iLdtFu",backgroundColor:"KqcXP",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomLeftRadius:"bzskLL",borderBottomRightRadius:"fBfCSu",transitionProperty:"fXEOVo",transitionDuration:"gAhwfJ",transitionTimingFunction:"iaemGh",borderBottomColor:"krceRx",borderBottomStyle:"hpBjJb",borderBottomWidth:"ctibpX",paddingBottom:"dRUifP",borderInlineEndColor:"lfLgrc",borderInlineEndStyle:"hszzXi",borderInlineEndWidth:"bTnXNj",paddingInlineEnd:"bWNKbL",borderInlineStartColor:"gBgjMX",borderInlineStartStyle:"itlHSH",borderInlineStartWidth:"hXXzlB",paddingInlineStart:"ddynka",borderTopColor:"idVdqz",borderTopStyle:"FwRrA",borderTopWidth:"izykGz",paddingTop:"daWMfK",":focus-within":{outlineStyle:"jYFvoK","--drpdwn-brdr-c":"hwfYkX"},":hover":{"--drpdwn-brdr-c":"eVDAsw"}},labelWrapper:{position:"bEvNbr",top:"WhAZY",bottom:"bLIxaN",insetInlineStart:"cuuCgJ",zIndex:"jvKoxA",paddingRight:"jWtTdy",paddingLeft:"iSNqlA",paddingBottom:"eDnzIT",borderTopColor:"eZTZuK",borderTopStyle:"FwRrA",borderTopWidth:"fcSDbz",paddingTop:"dCdWKc",display:"gSBWlu",alignItems:"foGVKH"},label:{display:"cpOcAb",position:"cjScYX",backgroundColor:"KqcXP",transform:"hlQWNe",top:"kNfNrW",insetInlineStart:"eAUDaE",fontWeight:"iLdtFu",color:"fNYzVd",fontSize:"gVscJz",lineHeight:"kvNqZl","@media all and (min-width:102em)":{fontSize:"hyhpVP",lineHeight:"kRmCJO"}},disabled:{pointerEvents:"eDssNQ",opacity:"iItPPl"},disabledOption:{color:"OSxLF"},icon:{transform:"irojIS",fontSize:"iKjpVA",lineHeight:"cVaJzg"},optionsWrapper:{display:"gSBWlu",flexDirection:"iMkoWi",position:"bEvNbr",insetInlineStart:"bnjeIC",width:"jaRgNg",paddingRight:"kjGUyy",paddingLeft:"hCczan",overflowY:"llUCyD",backgroundColor:"hXoEex",zIndex:"hTKfVG",":focus-visible":{outlineWidth:"jmtWSQ"}},dropdownOption:{display:"gSBWlu",alignItems:"foGVKH",cursor:"jsvbrX",backgroundColor:"hXoEex",columnGap:"cUcBkx",borderInlineEndColor:"lfLgrc",borderInlineEndStyle:"hszzXi",borderInlineEndWidth:"bTnXNj",borderInlineStartColor:"gBgjMX",borderInlineStartStyle:"itlHSH",borderInlineStartWidth:"hXXzlB",paddingTop:"daWMfK",paddingBottom:"dRUifP",paddingInlineStart:"ddynka",paddingInlineEnd:"bWNKbL"},dropdownOptionBorderBottom:{position:"cjScYX","::after":{backgroundColor:"hEgWHg",content:"fqXcHQ",height:"iglUlY",left:"dbxzrM",position:"dyMCpl",width:"gDuAJU",bottom:"lgAqSK"}},dropdownOptionBorderTop:{position:"cjScYX","::before":{backgroundColor:"kCuzRe",content:"julXB",height:"kCTirT",left:"ChfZc",position:"kvHVCE",width:"bQvqKh",top:"gAWTvW"}},dropdownOptionBorderRadiusTop:{borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ"},dropdownOptionBorderRadiusBottom:{borderBottomLeftRadius:"bzskLL",borderBottomRightRadius:"fBfCSu"},selected:{backgroundColor:"gdLhDV"},brandVariant:{"--drpdwn-itm-c":"otyCH","--drpdwn-brdr-c":"bRGtNQ","--slctd-itm":"dMYHDu","--disbld-slctd-itm":"dFqbIM","--drpdwn-hvr-brdr-c":"gYMCHz","--drpdwn-lbl-c":"kjwqTg"},neutralVariant:{"--drpdwn-c":"eJFGkv","--drpdwn-brdr-c":"kDekGM","--slctd-itm":"cYkEOK","--disbld-slctd-itm":"fIiGqR","--drpdwn-lbl-c":"kLuCiU"},paddingDropdownOption:{paddingInlineStart:"rQuaX"}},DropdownOption=_ref=>{let{text,setActualSelectedOption,setVisuallySelectedOption,setIsOpen,currentOption,selectedOption,isLastOption,actualSelectedOption,variant,disabled}=_ref;const isFirstOption=0===currentOption,ariaSelected=selectedOption===currentOption?"true":void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{role:"option",className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.dropdownOption,selectedOption===currentOption&&c.selected,disabled&&c.disabledOption,c.dropdownOptionBorderTop,isLastOption&&c.dropdownOptionBorderBottom,isFirstOption&&c.dropdownOptionBorderRadiusTop,isLastOption&&c.dropdownOptionBorderRadiusBottom,actualSelectedOption!==currentOption&&c.paddingDropdownOption),onClick:disabled?void 0:()=>{setActualSelectedOption(currentOption),setVisuallySelectedOption(currentOption),setIsOpen(!1)},onMouseEnter:()=>setVisuallySelectedOption(currentOption),"aria-selected":ariaSelected,tabIndex:-1,id:`dropdown-option-${currentOption}`,"aria-disabled":disabled,children:[actualSelectedOption===currentOption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:"check",variant}),text]})},Dropdown=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function Dropdown(_ref2,ref){var _options$actualSelect;let{inlineStyle,styleExtend=[],optionsWrapperStyleExtend=[],options,variant="brand",label,onChange,initialSelectedOption,controlledComponent,disabled}=_ref2,attrs=(0,_home_runner_work_fe_fe_node_modules_pnpm_babel_runtime_7_22_10_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref2,_excluded);const buttonId=react__WEBPACK_IMPORTED_MODULE_2__.useId(),labelId=react__WEBPACK_IMPORTED_MODULE_2__.useId(),btnRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),[isOpen,setIsOpen]=react__WEBPACK_IMPORTED_MODULE_2__.useState(!1),[selectedOptionInternal,setSelectedOptionInternal]=react__WEBPACK_IMPORTED_MODULE_2__.useState(initialSelectedOption),actualSelectedOption=controlledComponent?controlledComponent.state:selectedOptionInternal,[visuallySelectedOption,setVisuallySelectedOption]=react__WEBPACK_IMPORTED_MODULE_2__.useState(initialSelectedOption),[dropdownPosition,setDropdownPosition]=react__WEBPACK_IMPORTED_MODULE_2__.useState({}),setActualSelectedOption=controlledComponent?controlledComponent.setState:setSelectedOptionInternal,optionsWrapperId=react__WEBPACK_IMPORTED_MODULE_2__.useId(),optionsWrapperRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),isKeyboardControlled="controlled"===(null==controlledComponent?void 0:controlledComponent.keyboardControl),variantClass=`${variant}Variant`,optionsWrapperRefCb=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((node=>{if(null!==node){if(btnRef.current&&null!=actualSelectedOption){const newDropdownPosition=function getDropdownPosition(_ref4){let{btnElement,selectedOption}=_ref4;return{top:-btnElement.clientHeight*selectedOption}}({btnElement:btnRef.current,selectedOption:actualSelectedOption});setDropdownPosition(newDropdownPosition)}optionsWrapperRef.current=node}}),[actualSelectedOption]);react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect((()=>{if(isOpen&&optionsWrapperRef.current){const dropdownReposition=function getDropdownReposition(rect){if(rect.top<=0)return{top:0};if(rect.bottom>=window.innerHeight)return{bottom:0};return null}(optionsWrapperRef.current.getBoundingClientRect());dropdownReposition&&setDropdownPosition(dropdownReposition)}}),[isOpen,optionsWrapperRef.current]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{onChange&&onChange(actualSelectedOption)}),[onChange,actualSelectedOption]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{setVisuallySelectedOption(actualSelectedOption)}),[actualSelectedOption]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{isOpen&&optionsWrapperRef.current&&optionsWrapperRef.current.focus();const preventKeyboardScrolling=e=>{[" ","ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()};return isOpen&&"controlled"!==(null==controlledComponent?void 0:controlledComponent.preventKeyboardScrolling)&&window.addEventListener("keydown",preventKeyboardScrolling),()=>{"controlled"!==(null==controlledComponent?void 0:controlledComponent.preventKeyboardScrolling)&&window.removeEventListener("keydown",preventKeyboardScrolling)}}),[null==controlledComponent?void 0:controlledComponent.preventKeyboardScrolling,isOpen]),react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{if(optionsWrapperRef.current&&null!=visuallySelectedOption){const visSelectedOption=optionsWrapperRef.current.children[visuallySelectedOption],itemRect=visSelectedOption.getBoundingClientRect();itemRect.top<0&&itemRect.left<0&&itemRect.bottom>(window.innerHeight||document.documentElement.clientHeight)&&itemRect.right>(window.innerWidth||document.documentElement.clientWidth)&&visSelectedOption.scrollIntoView()}}),[visuallySelectedOption]);if(controlledComponent){if(!controlledComponent.setState)throw new Error("<Dropdown />: controlled component must have setState");if(!Object.keys(controlledComponent).find((key=>"state"===key)))throw new Error("<Dropdown />: controlled component must have state")}return options.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",_objectSpread(_objectSpread({className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.base,c[variantClass],...styleExtend),style:inlineStyle,ref},attrs),{},{children:[label&&null!=actualSelectedOption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.labelWrapper),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{htmlFor:buttonId,className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.label,disabled&&c.disabled),children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button",{id:buttonId,className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.btn,disabled&&c.disabled),onClick:()=>{setIsOpen((prev=>!prev))},role:"combobox","aria-controls":optionsWrapperId,"aria-expanded":isOpen,"aria-labelledby":label?labelId:void 0,type:"button","data-testid":"dropdown-btn",ref:btnRef,onKeyDown:isKeyboardControlled?void 0:e=>{"Enter"===e.key&&e.preventDefault(),"ArrowUp"!==e.key&&"ArrowDown"!==e.key||setIsOpen(!0)},disabled,children:[null!=actualSelectedOption?null===(_options$actualSelect=options[actualSelectedOption])||void 0===_options$actualSelect?void 0:_options$actualSelect.text:label||options[0].text,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_haaretz_s_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:"chevron-bottom",styleExtend:[c.icon]})]}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,style9__WEBPACK_IMPORTED_MODULE_3__.Z)(c.optionsWrapper,...optionsWrapperStyleExtend),ref:optionsWrapperRefCb,onKeyDown:isKeyboardControlled?void 0:e=>{"ArrowUp"===e.key&&setVisuallySelectedOption((currentOption=>{if(null==currentOption)return options.length-1;const prevOption=function getPrevValidOption(currentOption,options){let prevOption=currentOption-1;if(0===currentOption)return currentOption;for(;options[prevOption].disabled;){if(0===prevOption)return currentOption;prevOption-=1}return prevOption}(currentOption,options);return prevOption})),"ArrowDown"===e.key&&setVisuallySelectedOption((currentOption=>{if(null==currentOption)return 0;const nextOption=function getNextValidOption(currentOption,options){if(currentOption===options.length-1)return currentOption;let nextOption=currentOption+1;for(;options[nextOption].disabled;){if(nextOption===options.length-1)return currentOption;nextOption+=1}return nextOption}(currentOption,options);return nextOption}));const isValidSelectKeyboardKey="Enter"===e.key||" "===e.key||"Tab"===e.key,dismissSelectKeyboardKey="Escape"===e.key;(isValidSelectKeyboardKey||dismissSelectKeyboardKey)&&(e.preventDefault(),setIsOpen(!1),btnRef.current&&btnRef.current.focus()),dismissSelectKeyboardKey&&setVisuallySelectedOption(actualSelectedOption),isValidSelectKeyboardKey&&setActualSelectedOption(visuallySelectedOption)},style:_objectSpread({},dropdownPosition),role:"listbox","aria-labelledby":optionsWrapperId,"aria-activedescendant":`dropdown-option-${actualSelectedOption}`,tabIndex:-1,onBlur:e=>{var _e$relatedTarget,_e$relatedTarget2;"option"!==(null===(_e$relatedTarget=e.relatedTarget)||void 0===_e$relatedTarget?void 0:_e$relatedTarget.getAttribute("role"))&&(null===(_e$relatedTarget2=e.relatedTarget)||void 0===_e$relatedTarget2?void 0:_e$relatedTarget2.id)!==buttonId&&(setVisuallySelectedOption(actualSelectedOption),setIsOpen(!1))},"data-testid":"dropdown-options-wrapper",children:options.map(((_ref3,i)=>{let{text,disabled:disabledOption}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DropdownOption,{text,setActualSelectedOption,setVisuallySelectedOption,setIsOpen,currentOption:i,selectedOption:visuallySelectedOption,disabled:disabledOption,isLastOption:i===options.length-1,actualSelectedOption,variant},text)}))})]})):null}));Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1},optionsWrapperStyleExtend:{defaultValue:{value:"[]",computed:!1},required:!1},variant:{defaultValue:{value:"'brand'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyDropdown(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Dropdown\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Dropdown styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},optionsWrapperStyleExtend:{defaultValue:{value:"[]"},description:"An array of `Style9` styles to be applied on the wrapper",name:"optionsWrapperStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}},options:{defaultValue:null,description:"The options available in dropdown",name:"options",required:!0,type:{name:"Option[]"}},variant:{defaultValue:{value:"brand"},description:"Sets the color of the dropdown\n@defaultValue 'brand'",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"brand"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"Labels the field to assist with user comprehension",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"A callback allowing a consuming component to respond to internal state\nchanges. The callback is passed the index of the selected option.",name:"onChange",required:!1,type:{name:"((selectedOption: number | undefined) => void) | undefined"}},initialSelectedOption:{defaultValue:null,description:"The index of the initially selected option",name:"initialSelectedOption",required:!1,type:{name:"number | undefined"}},controlledComponent:{defaultValue:null,description:"If you want to control the component you must provide state and setState.\n\nYou have the option to disable keyboard control ('UpArrow', 'DownArrow' and 'Space')\nwith keyboardControl 'contorlled', default is 'uncontorlled'.\n\nYou have the option to disable keyboard prevent scrolling which prevents scrolling\nwith 'UpArrow' and 'DownArrow' with preventKeyboardScrolling 'controlled',\ndefault is 'uncontrolled'.",name:"controlledComponent",required:!1,type:{name:'{ state: number | undefined; setState: Dispatch<SetStateAction<number | undefined>>; keyboardControl?: "controlled" | "uncontrolled" | undefined; preventKeyboardScrolling?: "controlled" | ... 1 more ... | undefined; } | undefined'}},disabled:{defaultValue:null,description:"Disable the dropdown",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-dropdown/src/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"../../ds-atoms/s-dropdown/src/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}}}]);
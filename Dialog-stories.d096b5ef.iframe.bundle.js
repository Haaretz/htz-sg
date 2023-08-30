"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[5238],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../ds-molecules/s-dialog/src/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,default:()=>Dialog_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const _excluded=["backdropAttrs","backdropInlineStyle","backdropStyleExtend","children","inlineStyle","styleExtend","isOpen","labelledBy","onOpen","onClose","onToggle"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c_dialog={zIndex:"hKoyFU"},c_backdrop={zIndex:"eoipIJ",position:"bEvNbr",top:"WhAZY",insetInlineStart:"eAUDaE",insetInlineEnd:"laZGxq",bottom:"bLIxaN"},Dialog_Dialog=react.forwardRef((function Dialog(_ref,ref){let{backdropAttrs,backdropInlineStyle,backdropStyleExtend=[],children=null,inlineStyle,styleExtend=[],isOpen,labelledBy,onOpen,onClose:onCloseProp,onToggle}=_ref,dialogAttrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const currentOpenState=react.useRef(!1),backdropRef=react.useRef(null),_dialogRef=react.useRef(null),dialogRef=ref??_dialogRef,offsetParentRef=react.useRef(null),nonDialogNodesRef=react.useRef(null),handleClickOutside=react.useCallback((evt=>{const dialogElem="current"in dialogRef&&dialogRef.current;dialogElem&&!dialogElem.contains(evt.target)&&dialogElem.close()}),[dialogRef]),onClose=react.useCallback((evt=>{onCloseProp&&onCloseProp(evt),onToggle&&onToggle(!1)}),[onToggle,onCloseProp]),onEsc=react.useCallback((evt=>{const dialogElem="current"in dialogRef&&dialogRef.current;dialogElem&&"Escape"===evt.key&&dialogElem.close()}),[dialogRef]);return react.useEffect((()=>{const dialogElem="current"in dialogRef&&dialogRef.current,isBeingOpened=isOpen&&!currentOpenState.current;if(dialogElem&&isBeingOpened){dialogElem.show(),offsetParentRef.current=dialogElem.offsetParent;const offsetParent=offsetParentRef.current;if(offsetParent){offsetParent.addEventListener("click",handleClickOutside),offsetParent.addEventListener("keydown",onEsc);const dialogNodes=Array.from(offsetParent.querySelectorAll("dialog *"));nonDialogNodesRef.current=offsetParent.querySelectorAll(':not(dialog):not([tabindex="-1"])');for(let i=0;i<nonDialogNodesRef.current.length;i++){const node=nonDialogNodesRef.current[i];dialogNodes.includes(node)||(node._prevTabindex=node.getAttribute("tabindex"),node.setAttribute("tabindex","-1"),node.style.outline="none")}}onOpen&&onOpen(dialogElem),onToggle&&onToggle(!0),currentOpenState.current=!0}return()=>{const offsetParent=offsetParentRef.current;offsetParent?.removeEventListener("click",handleClickOutside),offsetParent?.removeEventListener("keydown",onEsc),nonDialogNodesRef?.current?.forEach((node=>{node._prevTabindex?(node.setAttribute("tabindex",node._prevTabindex),node._prevTabindex=null):node.removeAttribute("tabindex"),node.style.outline="null"})),currentOpenState.current=!1}}),[isOpen,handleClickOutside,onEsc,onOpen,onToggle,dialogRef]),isOpen?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",_objectSpread(_objectSpread({},backdropAttrs),{},{ref:backdropRef,className:(0,style9.Z)(c_backdrop,...backdropStyleExtend),style:backdropInlineStyle})),(0,jsx_runtime.jsx)("dialog",_objectSpread(_objectSpread({ref:dialogRef,"aria-labelledby":labelledBy||void 0,tabIndex:-1,onClose},dialogAttrs),{},{className:(0,style9.Z)(c_dialog,...styleExtend),style:inlineStyle,children}))]}):null}));Dialog_Dialog.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{backdropStyleExtend:{defaultValue:{value:"[]",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},styleExtend:{defaultValue:{value:"[]",computed:!1},required:!1}}};const src_Dialog=Dialog_Dialog;try{Dialog_Dialog.displayName="Dialog",Dialog_Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<Dialog>`",name:"children",required:!1,type:{name:"ReactNode"}},labelledBy:{defaultValue:null,description:"The ID of the element (usually an h*) that is the title of the dialog.\n\nIn the **RARE** cases where labeling isn't required, manually pass `null`.",name:"labelledBy",required:!1,type:{name:"string | null | undefined"}},isOpen:{defaultValue:null,description:"Controls whether the dialog is open or closed",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onToggle:{defaultValue:null,description:"A callback that is fired whenever the dialog is opened or closed,\nand takes an `isOpen` boolean argument indicating if the dialog is open",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void) | undefined"}},onOpen:{defaultValue:null,description:"A callback that's fired whenever a dialog is opened and passed\na reference to the underlying `dialog` element.",name:"onOpen",required:!1,type:{name:"((elem: HTMLDialogElement) => null) | undefined"}},backdropAttrs:{defaultValue:null,description:"pass attrs for the backdrop",name:"backdropAttrs",required:!1,type:{name:"DivProps | undefined"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyDialog(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Dialog\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},backdropInlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.",name:"backdropInlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Dialog styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},backdropStyleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:",name:"backdropStyleExtend",required:!1,type:{name:"StyleExtend | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-molecules/s-dialog/src/Dialog.tsx#Dialog"]={docgenInfo:Dialog_Dialog.__docgenInfo,name:"Dialog",path:"../../ds-molecules/s-dialog/src/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@7.2.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"dialog",children:"Dialog"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Dialog"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-dialog"})," listed in\nits ",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-dialog": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Dialog"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Dialog from '@haaretz/s-dialog';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A dialog is popup-like piece of UI, which blocks and disables all other content\nof its offset parent (it's first non-static positioned ascendant). It should be\nused when needing input from the user after an action."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<Dialog>"})," is an unstyled component, which wraps around the native HTML\n",(0,jsx_runtime.jsx)(_components.code,{children:"<dialog>"})," element. It abstracts behavior and accessibility concerns, and is\nmeant to be used as a primitive for building more specific modal UIs."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"<Dialog>"})," is a semi-controlled component, meaning, its open or closed state is\ncontrolled by a parent component through the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," prop, and to which it\ncommunicates back changes in its internal state using the ",(0,jsx_runtime.jsx)(_components.code,{children:"onToggle"})," callback\nprop:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'function Foo() {\n  const [isOpen, setIsopen] = React.useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsopen(true)} aria-haspopup>\n        Open Dialog\n      </button>\n      <Dialog isOpen={isOpen} onToggle={setIsopen} labelledBy="modalTitle">\n        <h2 id="modalTitle">Important message</h2>\n        <button onClick={() => setIsopen(false)}>Dismiss</button>\n      </Dialog>\n    </>\n  );\n}\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist.oG,{id:"molecules-dialog--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"^"})]})}function Dialog_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Dialog_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Dialog_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Dialog_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Dialog_stories_c_wrapper={position:"cjScYX",paddingTop:"jWWtke",paddingRight:"ftIldC",paddingBottom:"bnHxUw",paddingLeft:"iDuqPI",borderTopWidth:"izykGz",borderRightWidth:"ikqruN",borderBottomWidth:"ctibpX",borderLeftWidth:"kzDapR",borderTopStyle:"FwRrA",borderRightStyle:"cDIyHz",borderBottomStyle:"hpBjJb",borderLeftStyle:"ycSPk",borderTopColor:"gOVTGd",borderRightColor:"hfqJQn",borderBottomColor:"fUvRBv",borderLeftColor:"fsSKzd",minHeight:"hRdQVL"},Overview=args=>{const[isOpen,setIsopen]=react.useState(args.isOpen||!1);return(0,jsx_runtime.jsxs)("section",{className:(0,style9.Z)(Dialog_stories_c_wrapper),children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setIsopen(!0),"aria-haspopup":!0,children:"Open dialog"}),(0,jsx_runtime.jsxs)(src_Dialog,Dialog_stories_objectSpread(Dialog_stories_objectSpread({},args),{},{isOpen,onToggle:setIsopen,labelledBy:"dialogTitle",children:[(0,jsx_runtime.jsx)("h2",{id:"dialogTitle",children:"Important message"}),(0,jsx_runtime.jsx)("button",{onClick:()=>setIsopen(!1),children:"Dismiss"})]}))]})},Dialog_stories={component:src_Dialog,title:"Molecules/Dialog",args:{inlineStyle:{},backdropInlineStyle:{},styleExtend:[],backdropStyleExtend:[]},argTypes:{isOpen:{control:"boolean"},ref:{control:!1,description:"`<Dialog />` forwards refs to the underlying DOM element in order to expose it to its ascendant components",table:{type:{summary:"React.ForwardedRef<T extends React.ElementType>"}}}},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},controls:{expanded:!0}}}};Overview.parameters=Dialog_stories_objectSpread(Dialog_stories_objectSpread({},Overview.parameters),{},{docs:Dialog_stories_objectSpread(Dialog_stories_objectSpread({},Overview.parameters?.docs),{},{source:Dialog_stories_objectSpread({originalSource:'args => {\n  const [isOpen, setIsopen] = React.useState<boolean>(args.isOpen || false);\n  return <section className={s9(c.wrapper)}>\n      <button onClick={() => setIsopen(true)} aria-haspopup>\n        Open dialog\n      </button>\n\n      <Dialog {...args} isOpen={isOpen} onToggle={setIsopen} labelledBy="dialogTitle">\n        <h2 id="dialogTitle">Important message</h2>\n        <button onClick={() => setIsopen(false)}>Dismiss</button>\n      </Dialog>\n    </section>;\n}'},Overview.parameters?.docs?.source)})})},"../../../node_modules/.pnpm/style9@0.18.2_rollup@2.79.1_webpack@5.88.2/node_modules/style9/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
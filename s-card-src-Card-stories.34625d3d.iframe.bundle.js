/*! For license information please see s-card-src-Card-stories.34625d3d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[1256],{"../../ds-atoms/s-card/src/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BrandVariant:()=>BrandVariant,CommercialVariant:()=>CommercialVariant,DefaultVariant:()=>DefaultVariant,Elevation1:()=>Elevation1,Elevation2:()=>Elevation2,Elevation3:()=>Elevation3,EmphasisVariant:()=>EmphasisVariant,OutbrainVariant:()=>OutbrainVariant,Overview:()=>Overview,TonedVariant:()=>TonedVariant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var defineProperty=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),Card=__webpack_require__("../../ds-atoms/s-card/src/Card.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_4jdp6okly7h64wr46jw5nzsnhe/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_dns7ehydc4gmjvv7s3xxs4dp5u/node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../s-story-callout/src/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3",em:"em"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"Card"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Make sure the package you use ",(0,jsx_runtime.jsx)(_components.code,{children:"Card"})," in has ",(0,jsx_runtime.jsx)(_components.code,{children:"@haaretz/s-card"})," listed in its\n",(0,jsx_runtime.jsx)(_components.code,{children:"package.json"}),"'s ",(0,jsx_runtime.jsx)(_components.code,{children:"dependencies"})," field:"]})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-card": "workspace:*"\n    // ...\n  }\n}\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,jsx_runtime.jsx)(_components.code,{children:"Card"})," without listing it as a dependency will\nwork in dev mode, but will fail in production. There should be a\n",(0,jsx_runtime.jsx)(_components.code,{children:"import/no-unresolved"})," eslint error when trying to import it when it is not\nlisted as a dependency."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can then import it like this:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"import Card from '@haaretz/s-card';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cards are visually distinct UI containers that hold together content and actions\nabout a single subject."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cards often work best as part of a collection of similar cards, rather than as\nisolated elements. They serve as isolated surfaces - easily scannable and easily\ndigestible pieces of information - distinct from one another by content, and\nfrom the rest of the composition by shape and appearance. One such prominent use\ncase is a collection of article teasers within a section."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Another common use case is when a single item needs to stand out from its\nsurrounding content, e.g., a breakout box positioned inside the body copy of an\narticle."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cards are modular in that they can hold different types of content (images and\nother media, texts, buttons and other interactive elements), and layout their\ncontent in multiple ways (image beside text, image above text, etc.)."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--overview"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{story:"^"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Elevation"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Creating the illusion that a card is elevated in 3D space to varying degrees can\nbe done by applying shadow to it using the ",(0,jsx_runtime.jsx)(_components.code,{children:"elevationLevel"})," prop:"]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{withToolbar:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--elevation-1"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--elevation-2"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--elevation-3"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Variants modify the appearance of cards, mostly the color of the surface area,\nfor different use cases and contexts."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"By default, cards have the same surface color as the background color used for\nholding primary conent. It should only be used on top other backgrounds, and was\ndesigned to be placed over the default page background in pages where the page\nbackground differs from the content background."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--default-variant"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Emphasis"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Employ the ",(0,jsx_runtime.jsx)(_components.code,{children:"emphasis"})," variant to direct attention to a specific card within a\ncollection of cards. As such, it should only ever be assigned to a single card\nwithin a collection."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Alternatively, the ",(0,jsx_runtime.jsx)(_components.code,{children:"emphasis"})," variant can be used for ",(0,jsx_runtime.jsx)(_components.em,{children:"all"}),", or all but one,\ncards in a collection, when the goal is to direct attention to a specific\ncollection of cards out of several within a composition."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A third use case is for standalone cards that are not part of a collections and\ncommand special importance."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Emphasized cards can be used over both page background and content background."}),"\n",(0,jsx_runtime.jsx)(src.Z,{title:"CAUTION",children:(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)("code",{children:"emphasis"})," variant should be used in moderation and with care,\nas overuse could decrease effectiveness and hurt users' overall ability\nto scan content."]})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--emphasis-variant"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Brand"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"brand"})," variant should be used in standalone cards (e.g., a breakout box\ninside body copy), to direct attention, especially when a composition is in need\na dash of extra color."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It may only be used only over content background as its surface color it too\nsimilar to the page background."}),"\n",(0,jsx_runtime.jsxs)(src.Z,{title:"CAUTION",children:[(0,jsx_runtime.jsxs)(_components.p,{children:["Like the"," "]}),(0,jsx_runtime.jsx)("a",{href:"#emphasis",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("code",{children:"emphasis"})," variant"]})}),(0,jsx_runtime.jsxs)(_components.p,{children:[", overuse of the\n",(0,jsx_runtime.jsx)("code",{children:"brand"})," can lead to loss of effectiveness and to an overall sense\nof color inundation. Consider using the ",(0,jsx_runtime.jsx)("code",{children:"toned"})," variant instead."]})]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--brand-variant"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Toned"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["the ",(0,jsx_runtime.jsx)(_components.code,{children:"toned"})," variant is used for standalone cards, and may only be placed\ndirectly over the background used for holding primary content. It is a good\nchoice when requiring a more toned-down version than the ",(0,jsx_runtime.jsx)(_components.code,{children:"brand"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"emphsis"}),"\nvariants. An example use case would be placing an informational breakout box\ninside the flow of an article's body copy."]}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--toned-variant"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Commercial"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Used in promoted content and other commercial contexts. Always uses the\ncommercial font stack for brand differentiation."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--commercial-variant"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{children:"Outbrain"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Used in Outbrain-branded cards."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{withToolbar:!0,children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"atoms-card--outbrain-variant"})})]})}const Card_doc=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const c_lightCardWrapper={backgroundColor:"kfThfC"},c_cardContent={aspectRatio:"chBCVF",display:"gSBWlu",width:"gtSixR"},defaultChildren=__jsx("div",{className:(0,style9.Z)(c_cardContent)}),Card_stories={component:Card.Z,title:"Atoms/Card",args:{as:Card.p,children:defaultChildren,variant:void 0,elevationLevel:void 0,inlineStyle:{display:"inline-block"}},argTypes:{as:{description:"The HTML element (`string`) or React component the `<Card />` will be rendered as",table:{defaultValue:{summary:Card.p},type:{summary:"React.ElementType"}}},children:{control:!1},styleExtend:{control:!1},"...restProps":{control:!1,description:"`<Card />` will pass any additional prop to the underlying html element, in a typesafe manner based on the value of the `as` prop",table:{type:{summary:void 0}}}},parameters:{docs:{page:Card_doc}}};function backgroundDecorator(StoryToDecorate,context){const{viewMode,id}=context,waitTime="story"===viewMode?0:500,classes=(0,style9.Z)(c_lightCardWrapper).split(" ");return setTimeout((()=>{let storyContainer=document.documentElement;if("docs"===viewMode){const storyElement=document.getElementById(`story--${id}`);storyContainer=null==storyElement?void 0:storyElement.closest(".docs-story")}storyContainer&&(storyContainer.style.backgroundColor="",storyContainer.classList.add(...classes))}),waitTime),__jsx(StoryToDecorate,null)}const Overview=args=>__jsx(Card.Z,args);Overview.decorators=[backgroundDecorator];const Elevation1=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{elevationLevel:1}));Elevation1.decorators=[backgroundDecorator],Elevation1.storyName="Elevation Level: 1";const Elevation2=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{elevationLevel:2}));Elevation2.decorators=[backgroundDecorator],Elevation2.storyName="Elevation Level: 2";const Elevation3=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{elevationLevel:3}));Elevation3.decorators=[backgroundDecorator],Elevation3.storyName="Elevation Level: 3";const DefaultVariant=args=>__jsx(Card.Z,args);DefaultVariant.decorators=[backgroundDecorator];const EmphasisVariant=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{variant:"emphasis"})),BrandVariant=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{variant:"brand"})),TonedVariant=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{variant:"toned"})),CommercialVariant=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{variant:"commercial"})),OutbrainVariant=args=>__jsx(Card.Z,(0,esm_extends.Z)({},args,{variant:"outbrain"}));Overview.parameters=_objectSpread({storySource:{source:"args => <Card {...args} />"}},Overview.parameters),Elevation1.parameters=_objectSpread({storySource:{source:"args => {\n  return <Card {...args} elevationLevel={1} />;\n}"}},Elevation1.parameters),Elevation2.parameters=_objectSpread({storySource:{source:"args => {\n  return <Card {...args} elevationLevel={2} />;\n}"}},Elevation2.parameters),Elevation3.parameters=_objectSpread({storySource:{source:"args => {\n  return <Card {...args} elevationLevel={3} />;\n}"}},Elevation3.parameters),DefaultVariant.parameters=_objectSpread({storySource:{source:"args => <Card {...args} />"}},DefaultVariant.parameters),EmphasisVariant.parameters=_objectSpread({storySource:{source:'args => (\n  <Card {...args} variant="emphasis" />\n)'}},EmphasisVariant.parameters),BrandVariant.parameters=_objectSpread({storySource:{source:'args => <Card {...args} variant="brand" />'}},BrandVariant.parameters),TonedVariant.parameters=_objectSpread({storySource:{source:'args => <Card {...args} variant="toned" />'}},TonedVariant.parameters),CommercialVariant.parameters=_objectSpread({storySource:{source:'args => (\n  <Card {...args} variant="commercial" />\n)'}},CommercialVariant.parameters),OutbrainVariant.parameters=_objectSpread({storySource:{source:'args => (\n  <Card {...args} variant="outbrain" />\n)'}},OutbrainVariant.parameters);const __namedExportsOrder=["Overview","Elevation1","Elevation2","Elevation3","DefaultVariant","EmphasisVariant","BrandVariant","TonedVariant","CommercialVariant","OutbrainVariant"]},"../../ds-atoms/s-card/src/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>DEFAULT_ELEMENT,Z:()=>src_Card});var esm_extends=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs");const _excluded=["as","children","elevationLevel","inlineStyle","styleExtend","variant"];var __jsx=react.createElement;const c={card:{backgroundColor:"kbeApl",borderTopLeftRadius:"gvQKzB",borderTopRightRadius:"gXtGmO",borderBottomRightRadius:"gGmREU",borderBottomLeftRadius:"ia_DRrH",position:"cjScYX",overflowX:"dUvWpK",overflowY:"hRLVFh"},tonedVariant:{backgroundColor:"fozssY"},emphasisVariant:{backgroundColor:"fYsfSM"},brandVariant:{backgroundColor:"eonsRV"},commercialVariant:{backgroundColor:"KqcXP",fontFamily:"eydjXg","::before":{backgroundColor:"cuHoef",content:"julXB",position:"kvHVCE",zIndex:"iKerdF",top:"jYPXoJ",right:"jmjsbM",bottom:"eubFjF",left:"kKTZiz",width:"bQvqKh",height:"jLmWnd",borderBottomColor:"cguLPl",borderBottomStyle:"eeAUEW",borderBottomWidth:"bHuFEO",paddingBottom:"hiDZuW",borderInlineEndColor:"fVfbua",borderInlineEndStyle:"gUitAR",borderInlineEndWidth:"cXxCLi",paddingInlineEnd:"TkgvN",borderInlineStartColor:"fkpCBY",borderInlineStartStyle:"gQowii",borderInlineStartWidth:"jmjHNY",paddingInlineStart:"dIuYjq",borderTopColor:"iKQXuU",borderTopStyle:"kSnqYR",borderTopWidth:"hsdMeV",paddingTop:"hNIrCr"}},outbrainVariant:{backgroundColor:"KqcXP",fontFamily:"eydjXg","::before":{backgroundColor:"ksIqPJ",content:"julXB",position:"kvHVCE",zIndex:"iKerdF",top:"jYPXoJ",right:"jmjsbM",bottom:"eubFjF",left:"kKTZiz",width:"bQvqKh",height:"jLmWnd",borderBottomColor:"cguLPl",borderBottomStyle:"eeAUEW",borderBottomWidth:"bHuFEO",paddingBottom:"hiDZuW",borderInlineEndColor:"fVfbua",borderInlineEndStyle:"gUitAR",borderInlineEndWidth:"cXxCLi",paddingInlineEnd:"TkgvN",borderInlineStartColor:"fkpCBY",borderInlineStartStyle:"gQowii",borderInlineStartWidth:"jmjHNY",paddingInlineStart:"dIuYjq",borderTopColor:"iKQXuU",borderTopStyle:"kSnqYR",borderTopWidth:"hsdMeV",paddingTop:"hNIrCr"}},elevation1:{filter:"hPbzap"},elevation2:{filter:"fiTshE"},elevation3:{filter:"eVJcdr"}},DEFAULT_ELEMENT="div";function Card(_ref){let{as,children=null,elevationLevel,inlineStyle,styleExtend=[],variant}=_ref,attrs=(0,objectWithoutProperties.Z)(_ref,_excluded);const variantClass=variant?`${variant}Variant`:void 0,elevationClass=elevationLevel?`elevation${elevationLevel}`:void 0;return __jsx(as||DEFAULT_ELEMENT,(0,esm_extends.Z)({},attrs,{},{className:(0,style9.Z)(c.card,variantClass&&c[variantClass],elevationClass&&c[elevationClass],...styleExtend),style:inlineStyle}),children)}const src_Card=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<Card>`",name:"children",required:!1,type:{name:"ReactNode"}},elevationLevel:{defaultValue:null,description:"Creates an illusion of elevating the card by placing a shadow behind it",name:"elevationLevel",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"1"},{value:"2"},{value:"3"}]}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyCard(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <Card\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<Card styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},variant:{defaultValue:null,description:"The visual appearance of the card",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"brand"'},{value:'"toned"'},{value:'"emphasis"'},{value:'"outbrain"'},{value:'"commercial"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'"symbol" | "slot" | "clipPath" | "filter" | "mask" | "marker" | ComponentType<any> | "table" | "form" | "pattern" | "label" | "text" | "p" | "ul" | "ol" | "li" | ... 131 more ... | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../ds-atoms/s-card/src/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../ds-atoms/s-card/src/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"../s-story-callout/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>s_story_callout_src});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),style9=__webpack_require__("../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs"),__jsx=react.createElement;const c_wrapper={backgroundColor:"jmyBGg",borderTopLeftRadius:"gvQKzB",borderTopRightRadius:"gXtGmO",borderBottomRightRadius:"gGmREU",borderBottomLeftRadius:"ia_DRrH",overflowX:"dUvWpK",overflowY:"hRLVFh",position:"cjScYX",letterSpacing:"iZHebp",paddingTop:"jWWtke",paddingBottom:"bnHxUw",paddingInlineStart:"dwXqlO",paddingInlineEnd:"kwGEcy"},c_strong={backgroundColor:"gtUqwH",borderTopLeftRadius:"gQJVfF",borderTopRightRadius:"bnguzQ",borderBottomRightRadius:"fBfCSu",borderBottomLeftRadius:"bzskLL",color:"hugNVC",marginInlineEnd:"joUZpP",paddingInlineStart:"ddynka",paddingInlineEnd:"bWNKbL",fontSize:"fyHdVr",lineHeight:"iKTruj"},c_x={aspectRatio:"ldVxdb",backgroundColor:"kfThfC",borderTopLeftRadius:"ctWdVF",borderTopRightRadius:"jkGfDR",borderBottomRightRadius:"bSTogt",borderBottomLeftRadius:"hSDpeY",color:"kCxIXX",display:"cpOcAb",fontWeight:"inxVzO",lineHeight:"egGyMq",marginInlineEnd:"joUZpP",paddingInlineStart:"kQDwxQ",paddingInlineEnd:"cfEHVR",transform:"gEhxlz"};function StoryCallout({children=null,inlineStyle,styleExtend=[],title}){return __jsx("aside",{className:(0,style9.Z)(c_wrapper,...styleExtend),style:inlineStyle},title&&__jsx("strong",{className:(0,style9.Z)(c_strong)},__jsx("span",{className:(0,style9.Z)(c_x)},"✗"),title,":"),title&&" ",children)}try{StoryCallout.displayName="StoryCallout",StoryCallout.__docgenInfo={description:"",displayName:"StoryCallout",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<StoryCallout>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyStoryCallout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <StoryCallout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<StoryCallout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-story-callout/src/StoryCallout.tsx#StoryCallout"]={docgenInfo:StoryCallout.__docgenInfo,name:"StoryCallout",path:"../s-story-callout/src/StoryCallout.tsx#StoryCallout"})}catch(__react_docgen_typescript_loader_error){}const s_story_callout_src=StoryCallout;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{children:{defaultValue:{value:"null"},description:"The Children to be rendered inside `<StoryCallout>`",name:"children",required:!1,type:{name:"ReactNode"}},inlineStyle:{defaultValue:null,description:"CSS declarations to be set as inline `style` on the\nhtml element.\n\nBy setting values of CSS Custom Properties based on\nprops or state in the consuming component (where\nthe value of `inlineStyle` is passed), `inlineStyle`\ncan be used as an API contract for setting dynamic\nvalues to styles created with `style9.create()`:\n@example ```ts\nimport s9 from 'style9';\nconst { styleExtend, } = s9.create({\n  styleExtend: {\n    color: 'var(--color-based-on-prop)',\n  },\n});\n\nfunction MyStoryCallout(props) {\n  const inlineStyle = {\n    '--color-based-on-prop': props.color,\n  },\n\n  return (\n   <StoryCallout\n     styleExtend={[ styleExtend, ]}\n     inlineStyle={inlineStyle}\n   />\n  );\n}\n```",name:"inlineStyle",required:!1,type:{name:"InlineStyles | undefined"}},styleExtend:{defaultValue:{value:"[]"},description:"An array of `Style`s created by `style9.create()`.\nWARNING: **_do not_** pass simple CSS-in-JS object.\nThe items in the array must be created with Style9's\n`create` function.\nThe array can also hold falsy values to assist with\nconditional inclusion of `Style`s:\n@example ```ts\nconst { foo, bar, } = s9.create({ foo: { ... }, bar: { ... }, });\n<StoryCallout styleExtend={[ someCondition && foo, bar, ]} />\n```",name:"styleExtend",required:!1,type:{name:"StyleExtend | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../s-story-callout/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../s-story-callout/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../../node_modules/.pnpm/style9@0.14.0_rollup@2.79.1/node_modules/style9/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function merge(target,source){for(const key in source)"object"==typeof source[key]?target[key]=merge({...target[key]},source[key]):target[key]=source[key];return target}function getValues(obj){const values=[];for(const key in obj){const val=obj[key];"object"==typeof val?values.push(...getValues(val)):values.push(val)}return values}function style9(...styles){return getValues(styles.reduce(merge,{})).join(" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>style9}),style9.create=()=>{throw new Error("style9.create calls should be compiled away")},style9.keyframes=()=>{throw new Error("style9.keyframes calls should be compiled away")}}}]);
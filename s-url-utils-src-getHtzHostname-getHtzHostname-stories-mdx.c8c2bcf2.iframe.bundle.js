"use strict";(self.webpackChunk_haaretz_a_htz_sg=self.webpackChunk_haaretz_a_htz_sg||[]).push([[7721],{"../../utils/s-url-utils/src/getHtzHostname/getHtzHostname.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/.pnpm/react@18.0.0-rc.3-next-e7d0053e6-20220325/node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_ir3quccc6i62x6qn6jjhyjjiey/node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",null,"getHtzHostname"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("br",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{component:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",null),title:"Utils/getHtzHostname",argTypes:{url:{name:"url",description:"The Haaretz's hostname that will be cleaned",table:{type:{summary:"HtzExternalURL<Env> | HtzHostnameWithSubdomain | HtzHostname | URL",detail:"\n            URL examples:\n            Haaretz: 'promotions-dev1.k8s-stage.haaretz.co.il'\n            HaaretzCom: 'promotions-dev1.k8s-stage.haaretz.com'\n            Themarker: 'promotions-dev1.k8s-stage.themarker.com'\n          ",required:!0}},control:!1}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",null,"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"p"},"Make sure the package you use ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"getHtzHostname")," has ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"@haaretz/s-url-utils"),"\nlisted in its ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"package.json"),"'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"strong"},"dependencies")," field:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-js"},'// package.json\n{\n  // ...\n  "dependencies": {\n    "@haaretz/s-url-utils": "workspace:*"\n    // ...\n  }\n}\n')),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Because internal monorepo packages are wired up using TypeScript's path aliases\nfeature in dev mode, importing ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"getHtzHostname")," without listing it as a\ndependency will work in dev mode, but will fail in production. There should be a\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"import/no-unresolved")," eslint error when trying to import it when it is not\nlisted as a dependency."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"You can then import it like this:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-ts"},"import getHtzHostname from '@haaretz/s-url-utils/getHtzHostname';\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",null,"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"A utility function that takes Haaretz's url/hostname and return only host, e.g.\nhaaretz.co.il, haaretz.com or themarker."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",null,"Props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.$4,{story:"^",mdxType:"ArgsTable"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",null,"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"In the following example, we clean k8s hostname:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport getHtzHostname from '@haaretz/s-url-utils/getHtzHostname';\n\ninterface Props {\n  hostname: HtzHostnameWithSubdomain;\n}\n\nfunction HomepageLink({ hostname = 'promotions-dev1.k8s-stage.haaretz.co.il' }: Props) {\n  const href = getHtzHostname(hostname); // => haaretz.co.il\n\n  return <Link href={href}>;\n}\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utils/getHtzHostname",component:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",null),argTypes:{url:{name:"url",description:"The Haaretz's hostname that will be cleaned",table:{type:{summary:"HtzExternalURL<Env> | HtzHostnameWithSubdomain | HtzHostname | URL",detail:"\n            URL examples:\n            Haaretz: 'promotions-dev1.k8s-stage.haaretz.co.il'\n            HaaretzCom: 'promotions-dev1.k8s-stage.haaretz.com'\n            Themarker: 'promotions-dev1.k8s-stage.themarker.com'\n          ",required:!0}},control:!1}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]}}]);
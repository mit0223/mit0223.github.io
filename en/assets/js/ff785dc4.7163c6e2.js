"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[2074],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return t?r.createElement(m,o(o({ref:n},f),{},{components:t})):r.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={author:"Procube Co.,Ltd."},o="JSONDiffPatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",p={unversionedId:"reference/JSONDiffPatch",id:"reference/JSONDiffPatch",title:"JSONDiffPatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",description:"JSONDiffPatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f JSON \u306e\u5dee\u5206\u3092\u8868\u3059\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",source:"@site/docs/reference/JSONDiffPatch.md",sourceDirName:"reference",slug:"/reference/JSONDiffPatch",permalink:"/teigi.github.io/en/docs/reference/JSONDiffPatch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/JSONDiffPatch.md",tags:[],version:"current",frontMatter:{author:"Procube Co.,Ltd."},sidebar:"documentationSidebar",previous:{title:"\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30a8\u30f3\u30c8\u30ea",permalink:"/teigi.github.io/en/docs/reference/ACE"},next:{title:"Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f",permalink:"/teigi.github.io/en/docs/reference/adPasswordSync"}},c={},l=[{value:"\u4ed5\u69d8",id:"\u4ed5\u69d8",level:2},{value:"\u4f8b",id:"\u4f8b",level:2}],f={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jsondiffpatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"},"JSONDiffPatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,i.kt)("p",null,"JSONDiffPatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f JSON \u306e\u5dee\u5206\u3092\u8868\u3059\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u4ed5\u69d8"},"\u4ed5\u69d8"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e URL \u3067\u4ed5\u69d8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"benjamine / JsonDiffPatch \uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/benjamine/JsonDiffPatch"},"https://github.com/benjamine/JsonDiffPatch")),(0,i.kt)("p",null,"\u30c7\u30e2\u30da\u30fc\u30b8 \uff1a ",(0,i.kt)("a",{parentName:"p",href:"http://benjamine.github.io/JsonDiffPatch/demo/index.htm"},"http://benjamine.github.io/JsonDiffPatch/demo/index.htm")),(0,i.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,i.kt)("p",null,"displayName \u5c5e\u6027\u306e\u5024\u3092 foo \u304b\u3089 bar \u306b\u5909\u66f4\u3059\u308b\u5834\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n    {\n    "displayName": [\n        "foo",\n        "bar"\n      ]\n    }\n')),(0,i.kt)("p",null,"displayName \u5c5e\u6027\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u3002\u8ffd\u52a0\u5f8c\u306e\u5024\u306f bar\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "displayName": [\n   "bar"\n   ]\n   }\n')),(0,i.kt)("p",null,"displayName \u5c5e\u6027\u3092\u524a\u9664\u3059\u308b\u5834\u5408\u3002\u524a\u9664\u524d\u306e\u5024\u306f foo\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "displayName": [\n   "foo",\n   0,\n   0\n   ]\n   }\n')),(0,i.kt)("p",null,"\u914d\u5217\u578b\u306e propertyDefinitionList \u5c5e\u6027\u306e\u6dfb\u5b57 0 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e displayName \u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "propertyDefinitionList": {\n   "0": {\n   "displayName": [\n   "foo",\n   "bar"\n   ]\n   },\n   "_t": "a"\n   }\n   }\n')),(0,i.kt)("p",null,"\u914d\u5217\u578b\u306e propertyDefinitionList \u5c5e\u6027\u306e\u6dfb\u5b57 0 \u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u633f\u5165\u3059\u308b\u5834\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "propertyDefinitionList": {\n   "0": [ //\u6dfb\u3048\u5b57\u306f\u633f\u5165\u3092\u8868\u3059\n   {\n   "name": "name",\n   "displayName": "\u30af\u30e9\u30b9\u306e\u540d\u524d",\n   "type": "string",\n   "description": "\u30af\u30e9\u30b9\u306e\u8b58\u5225\u5b50\u3068\u306a\u308b\u540d\u524d",\n   "required": true,\n   "unique": true,\n   "stringRestriction": "id"\n   }\n   ],\n   "_t": "a" //\u914d\u5217\n   }\n   }\n')),(0,i.kt)("p",null,"\u914d\u5217\u578b\u306e propertyDefinitionList \u5c5e\u6027\u306e\u6dfb\u5b57 0 \u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u524a\u9664\u3059\u308b\u5834\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "propertyDefinitionList": {\n   "_t": "a",\u3000//\u914d\u5217\n   "_0": [ //\u30a2\u30f3\u30c0\u30fc\u30d0\u30fc+\u6dfb\u3048\u5b57\u306f\u524a\u9664\u3092\u8868\u3059\n   {\n   "name": "name",\n   "displayName": "\u30af\u30e9\u30b9\u306e\u540d\u524d",\n   "type": "string",\n   "description": "\u30af\u30e9\u30b9\u306e\u8b58\u5225\u5b50\u3068\u306a\u308b\u540d\u524d",\n   "required": true,\n   "unique": true,\n   "stringRestriction": "id"\n   },\n   0,\n   0\u3000//0\u306f\u633f\u5165\u7121\u3057\u3092\u8868\u3059\u30d5\u30e9\u30b0\u3002\n   ]\n   }\n   }\n')),(0,i.kt)("p",null,"\u914d\u5217\u578b\u306e propertyDefinitionList \u5c5e\u6027\u306e\u6dfb\u5b57 1 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092 0 \u306b\u79fb\u52d5\u3059\u308b\u5834\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "propertyDefinitionList": {\n   "_t": "a", // \u914d\u5217\n   "_1": [\u3000//\u30a2\u30f3\u30c0\u30fc\u30d0\u30fc+\u6dfb\u3048\u5b57\u306f\u524a\u9664\u3092\u8868\u3059\n   "",\u3000//\u79fb\u52d5\u306e\u5834\u5408\u306b\u306f\u3053\u3053\u304c\u7a7a\u6587\u5b57\u306b\u306a\u308b\u3002\n   0, //\u633f\u5165\u5148\u306e\u6dfb\u3048\u5b57\n   3 // 3\u306f\u633f\u5165\u6709\u3092\u8868\u3059\u30d5\u30e9\u30b0\n   ]\n   }\n   }\n   }\n')),(0,i.kt)("p",null,"\u914d\u5217\u578b\u306e propertyDefinitionList \u5c5e\u6027\u306e\u6dfb\u5b57 1 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092 0 \u306b\u79fb\u52d5\u3057\u304b\u3064\u79fb\u52d5\u5f8c\u306e 1 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e displayName \u5c5e\u6027\u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u3002 \uff08 = \u79fb\u52d5\u524d\u306e 0 \u306e displayName \u5c5e\u6027\u3092\u66f4\u65b0\u3057\u3001\u6dfb\u3048\u5b57 1 \u306b\u79fb\u52d5\u3057\u305f\u5834\u5408\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n   {\n   "propertyDefinitionList": {\n   "1": {\n   "displayName": [\n   "foo",\n   "bar"\n   ]\n   },\n   "_t": "a",\n   "_1": [\n   "",\n   0,\n   3\n   ]\n   }\n   }\n')))}u.isMDXComponent=!0}}]);
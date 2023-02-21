"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[9401],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(r),k=a,s=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(s,o(o({ref:e},c),{},{components:r})):n.createElement(s,o({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5081:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={author:"Procube Co.,Ltd."},o="Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f",i={unversionedId:"reference/adPasswordSync",id:"reference/adPasswordSync",title:"Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f",description:"Active Directory \u306e\u30c9\u30e1\u30a4\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5bfe\u3057\u3066\u884c\u3063\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u306b\u540c\u671f\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",source:"@site/docs/reference/adPasswordSync.md",sourceDirName:"reference",slug:"/reference/adPasswordSync",permalink:"/en/docs/reference/adPasswordSync",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/adPasswordSync.md",tags:[],version:"current",frontMatter:{author:"Procube Co.,Ltd."},sidebar:"documentationSidebar",previous:{title:"JSONDiffPatch\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",permalink:"/en/docs/reference/JSONDiffPatch"},next:{title:"\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30b5\u30fc\u30d6\u30ec\u30c3\u30c8",permalink:"/en/docs/reference/changePassword"}},p={},d=[{value:"\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",id:"\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:2},{value:"\u30ec\u30b8\u30b9\u30c8\u30ea",id:"\u30ec\u30b8\u30b9\u30c8\u30ea",level:2},{value:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8",id:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8",level:2}],c={toc:d};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"active-directory-\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f"},"Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f"),(0,a.kt)("p",null,"Active Directory \u306e\u30c9\u30e1\u30a4\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5bfe\u3057\u3066\u884c\u3063\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u306b\u540c\u671f\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"),(0,a.kt)("p",null,"Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u3067\u306f",(0,a.kt)("a",{parentName:"p",href:"/en/docs/reference/changePassword"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30b5\u30fc\u30d6\u30ec\u30c3\u30c8"),"\u3068\u540c\u3058\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u6ce8\u610f\u4e8b\u9805\u306b\u95a2\u3057\u3066\u3082\u540c\u69d8\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"systemSetting"},"\u30b7\u30b9\u30c6\u30e0\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u306bAD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u9375\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,a.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u3059\u3079\u3066\u306e\u30c9\u30e1\u30a4\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5bfe\u3057\u3066\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u30de\u30eb\u30c1\u30de\u30b9\u30bf\u69cb\u6210\u3067\u3082\u540c\u69d8\u3067\u3059\u3002"),(0,a.kt)("p",null,"\uff11\uff0e64\u30d3\u30c3\u30c8\u74b0\u5883\u3067\u306fNetSoarerPasswordSyncInstaller","(","x64",")",".msi\u3092\u300132\u30d3\u30c3\u30c8\u74b0\u5883\u3067\u306fNetSoarerPasswordSyncInstaller","(","x86",")",".msi\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\uff12\uff0e\u30b5\u30fc\u30d0\u3092\u518d\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\uff13\uff0eNetSoarer Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u8a2d\u5b9a\u30c4\u30fc\u30eb\u3092\u8d77\u52d5\u3057\u3001NetSoarer \u30b5\u30fc\u30d0 URL\u3001AD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u9375\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u5909\u66f4\u5f8c\u306e\u518d\u8d77\u52d5\u306f\u4e0d\u8981\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"\u30ec\u30b8\u30b9\u30c8\u30ea"},"\u30ec\u30b8\u30b9\u30c8\u30ea"),(0,a.kt)("p",null,"HKEY","_","LOCAL","_","MACHINE","\\","SOFTWARE","\\","NetSoarer","\\","PasswordSync \u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a\u9805\u76ee\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u30ad\u30fc"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"NetSoarer \u30b5\u30fc\u30d0\u306e URL \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u6700\u5f8c\u306e /ADPasswordSync/ \u307e\u3067\u542b\u3081\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30c9\u30e1\u30a4\u30f3\u90e8\u304c255\u6587\u5b57\u307e\u3067\u3001\u5168\u4f53\u3067500\u6587\u5b57\u307e\u3067\u306b\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30b7\u30b9\u30c6\u30e0\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e AD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u9375\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002255\u6587\u5b57\u307e\u3067\u306b\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"useInvalidSSL"),(0,a.kt)("td",{parentName:"tr",align:null},"NetSoarer \u30b5\u30fc\u30d0\u304c\u8a66\u9a13\u7528\u306e SSL \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001true \u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logSuccess"),(0,a.kt)("td",{parentName:"tr",align:null},"true\u306e\u5834\u5408\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u30c1\u30a7\u30c3\u30af\u304a\u3088\u3073\u5909\u66f4\u306e\u305d\u308c\u305e\u308c\u306e\u30d5\u30a7\u30fc\u30ba\u306b\u3064\u3044\u3066\u6210\u529f\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8a18\u8f09\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logPasswordFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"true\u306e\u5834\u5408\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u30c1\u30a7\u30c3\u30af\u306b\u5931\u6557\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8a18\u8f09\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logConnectionFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"true\u306e\u5834\u5408\u3001\u30b5\u30fc\u30d0\u63a5\u7d9a\u30a8\u30e9\u30fc\u3067\u5931\u6557\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8a18\u8f09\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\u8a2d\u5b9a\u306b\u304b\u304b\u308f\u3089\u305a\u3001\u63a5\u7d9a\u30a8\u30e9\u30fc\u306e\u5185\u5bb9\u306e\u30a4\u30d9\u30f3\u30c8\u30ed\u30b0\u306f\u51fa\u529b\u3055\u308c\u307e\u3059\u3002")))),(0,a.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Active Directory \u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u30b5\u30fc\u30d6\u30ec\u30c3\u30c8\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u793a\u3057\u307e\u3059\u3002\u8868\u4e2d\u306e\u659c\u4f53\u306e\u90e8\u5206\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5177\u4f53\u7684\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,a.kt)("th",{parentName:"tr",align:null},"\u88dc\u8db3\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u30fc\uff08",(0,a.kt)("em",{parentName:"td"},"\u30e6\u30fc\u30b6ID"),"\uff09\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u3092\u540c\u671f\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30b7\u30b9\u30c6\u30e0\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u53d6\u5f97\u3067\u304d\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u306f\u4e0d\u8a31\u53ef\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u9375\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u306f\u4e0d\u8a31\u53ef\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PW\u5909\u66f4\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u306f\u4e0d\u8a31\u53ef\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u5185\u5bb9\u306b\u30a8\u30e9\u30fc\u304c\u3042\u308a\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u306f\u4e0d\u8a31\u53ef\u306b\u306a\u308a\u307e\u3057\u305f\u3002AD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u9375\u304c\u9593\u9055\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5bfe\u8c61\u5916\u30e6\u30fc\u30b6\u30fc\uff08",(0,a.kt)("em",{parentName:"td"},"\u30e6\u30fc\u30b6ID"),"\uff09\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u3092\u8a31\u53ef\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u51e6\u7406\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002","[",(0,a.kt)("em",{parentName:"td"},"(","\u30a8\u30e9\u30fc\u8a73\u7d30\u30e1\u30c3\u30bb\u30fc\u30b8",")"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AD\u30d1\u30b9\u30ef\u30fc\u30c9\u540c\u671f\u51e6\u7406\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u30fc\uff08",(0,a.kt)("em",{parentName:"td"},"\u30e6\u30fc\u30b6ID"),"\uff09\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4\u6642\u306b\u30b5\u30fc\u30d0\u30fc\u304c\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3057\u305f\u3002","[",(0,a.kt)("em",{parentName:"td"},"(","\u30a8\u30e9\u30fc\u8a73\u7d30\u30e1\u30c3\u30bb\u30fc\u30b8",")"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u30fc\uff08",(0,a.kt)("em",{parentName:"td"},"\u30e6\u30fc\u30b6ID"),"\uff09\u306e\u53d6\u5f97\u6642\u306b\u8907\u6570\u306e\u30e6\u30fc\u30b6\u304c\u898b\u3064\u304b\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\xa0")))))}u.isMDXComponent=!0}}]);
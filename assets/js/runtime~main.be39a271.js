(()=>{"use strict";var e,a,c,f,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",55:"824d319c",82:"4a5138b0",254:"85f23710",282:"e79bab24",762:"06987bc5",1258:"c4d1d3c4",1352:"3a707431",1372:"1db64337",1629:"33029160",1814:"4176d97a",2074:"ff785dc4",2176:"0d4240ce",2235:"069f250c",3009:"c0d69c1b",3074:"b83b531e",3085:"1f391b9e",3237:"1df93b7f",3534:"4d3f11bc",4160:"a9ccfd68",4195:"b3580b99",4236:"7cb5fe82",4446:"6fb74485",4773:"70fcba28",4851:"3b03222d",5137:"41756578",5521:"f6801766",5553:"6c1f9c0f",5777:"b885ccb7",5884:"9f712086",6444:"7c7c23a0",6582:"fe4896ae",6773:"a4304116",7125:"7b05a9f7",7240:"2b3bc946",7304:"938ce50a",7318:"29ceafe1",7414:"393be207",7662:"3ed0ca09",7759:"a3e98a60",7918:"17896441",8063:"68f9cad8",8286:"d1028820",8724:"36ba4794",8819:"0ff18d39",9192:"c2b895b9",9205:"5152e615",9314:"01a2017c",9401:"20cf2f5d",9514:"1be78505",9817:"14eb3368",9844:"100bb39a",9969:"17599f9d"}[e]||e)+"."+{53:"6e46e58e",55:"b4e6d35a",82:"a5de6787",132:"64465aed",254:"3219aa32",282:"695cf4ac",762:"76d75290",1258:"c3e84d0a",1352:"0a08e2b2",1372:"6e289188",1629:"c822940d",1814:"887db9a1",2074:"87a31656",2176:"a4bac938",2235:"c4b1d2a7",3009:"4328b7a7",3074:"d75cd512",3085:"05a99ded",3237:"6b6390ad",3534:"72c19872",4160:"ad576e7e",4195:"fc8b8712",4236:"9ff3d89e",4446:"00336579",4773:"bf300fdc",4851:"cd00c40e",4972:"742cf320",5137:"98d9e3ba",5521:"a7697e41",5553:"3d26c9de",5777:"a064ccc9",5884:"cbb99093",6444:"fc18ea5e",6582:"a40117b9",6773:"29ee9970",7125:"dbd06166",7240:"76e0e134",7304:"edb2c518",7318:"83f06081",7414:"dd747fbd",7662:"0021aa6c",7759:"e88b872a",7918:"098a5ebf",8063:"1f2206ce",8286:"bf36ec01",8724:"eea4c710",8819:"a0ae7763",9192:"dfb7374a",9205:"823f826d",9314:"14499ed2",9401:"42a45cd1",9514:"3ba7bf8f",9817:"c47b4ab5",9844:"ee36038e",9969:"ea94be3f"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="teigi-doc:",b.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var u=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/",b.gca=function(e){return e={17896441:"7918",33029160:"1629",41756578:"5137","935f2afb":"53","824d319c":"55","4a5138b0":"82","85f23710":"254",e79bab24:"282","06987bc5":"762",c4d1d3c4:"1258","3a707431":"1352","1db64337":"1372","4176d97a":"1814",ff785dc4:"2074","0d4240ce":"2176","069f250c":"2235",c0d69c1b:"3009",b83b531e:"3074","1f391b9e":"3085","1df93b7f":"3237","4d3f11bc":"3534",a9ccfd68:"4160",b3580b99:"4195","7cb5fe82":"4236","6fb74485":"4446","70fcba28":"4773","3b03222d":"4851",f6801766:"5521","6c1f9c0f":"5553",b885ccb7:"5777","9f712086":"5884","7c7c23a0":"6444",fe4896ae:"6582",a4304116:"6773","7b05a9f7":"7125","2b3bc946":"7240","938ce50a":"7304","29ceafe1":"7318","393be207":"7414","3ed0ca09":"7662",a3e98a60:"7759","68f9cad8":"8063",d1028820:"8286","36ba4794":"8724","0ff18d39":"8819",c2b895b9:"9192","5152e615":"9205","01a2017c":"9314","20cf2f5d":"9401","1be78505":"9514","14eb3368":"9817","100bb39a":"9844","17599f9d":"9969"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();
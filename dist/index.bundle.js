(()=>{"use strict";var n,e,t,r,o,i,a,s,c,l,d,p,f,u,m={365:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),c=t.n(s),l=new URL(t(296),t.b),d=new URL(t(392),t.b),p=a()(o()),f=c()(l),u=c()(d);p.push([n.id,`@font-face {\n  font-family: 'robotoFont';\n  src: url(${f}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'madimiFont';\n  src: url(${u}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  font-family: 'robotoFont', sans-serif;\n  font-size: 20px;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  grid-template-columns: 1fr 5fr;\n}\n\na {\n  text-decoration: none;\n  color: black;\n  margin: 15px 0;\n}\n\ninput,\nlabel {\n  vertical-align: middle;\n}\n\ninput {\n  height: 25px;\n  width: 25px;\n  border: 1px solid #283618;\n  border-radius: 50%;\n  margin: 10px 5px 5px 0;\n  grid-row: 1 / 3;\n}\n\nfieldset {\n  border: none;\n  flex: 0 1 auto;\n}\n\n#header {\n  background-color: #dda15e;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 6fr 1fr;\n  justify-items: start;\n  align-items: center;\n}\n\n#name,\n#site-name {\n  font-family: 'madimiFont', sans-serif;;\n  font-weight: 800;\n}\n\n#name {\n  margin-left: 30px;\n  font-size: 24px;\n}\n\n#site-name {\n  margin-right: 100px;\n  font-size: 48px;\n}\n\n#sidebar {\n  font-size: 22px;\n  background-color: #eece9f;\n  display: grid;\n  grid-template-rows: 1fr 1fr 8fr 1fr;\n  padding: 20px 20px 20px 35px;\n}\n\n#add-project,\n.hash {\n  color: #283618;\n  font-weight: 600;\n}\n\n#add-project {\n  margin: 10px 0 30px 0;\n}\n\n#links {\n  display: flex;\n  flex-direction: column;\n}\n\n#main {\n  height: 100%;\n  background-color: #fefae0;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  border-left: 1px solid #dda15e;\n}\n\n#todo-title {\n  font-size: 32px;\n  font-weight: 600;\n  margin: 20px 0;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-list-item {\n  padding: 20px;\n  margin: 0 80px 0 10px;\n  border-top: 1px solid #dda15e;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 5fr 6fr;\n}\n\n.todo-list-item:last-child {\n  border-bottom: 1px solid #dda15e;\n}\n\n.text-right {\n  text-align: right;\n}`,""]);const m=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var f=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},392:(n,e,t)=>{n.exports=t.p+"f8a02729fa3101fe9c6d.ttf"},296:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.m=m,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(72),e=h.n(n),t=h(825),r=h.n(t),o=h(659),i=h.n(o),a=h(56),s=h.n(a),c=h(540),l=h.n(c),d=h(113),p=h.n(d),f=h(365),(u={}).styleTagTransform=p(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),e()(f.A,u),f.A&&f.A.locals&&f.A.locals,console.log("hello world")})();
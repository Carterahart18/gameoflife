(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e){e.exports={data:[[!1,!0,!1],[!1,!1,!0],[!0,!0,!0]]}},function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}for(var u=t(1),l=t(2),s=t(5),d=[[]],v=0;v<9;v++)for(var m=0;m<36;m++)d[v]||(d[v]=[]),d[v][m]=0;d[4][0]=!0,d[4][1]=!0,d[5][0]=!0,d[5][1]=!0,d[2][12]=!0,d[2][13]=!0,d[3][11]=!0,d[3][15]=!0,d[4][10]=!0,d[4][16]=!0,d[5][10]=!0,d[5][14]=!0,d[5][16]=!0,d[5][17]=!0,d[6][10]=!0,d[6][16]=!0,d[7][11]=!0,d[7][15]=!0,d[8][12]=!0,d[8][13]=!0,d[0][24]=!0,d[1][22]=!0,d[1][24]=!0,d[2][20]=!0,d[2][21]=!0,d[3][20]=!0,d[3][21]=!0,d[4][20]=!0,d[4][21]=!0,d[5][22]=!0,d[5][24]=!0,d[6][24]=!0,d[2][34]=!0,d[2][35]=!0,d[3][34]=!0,d[3][35]=!0;var b,g={data:d},E={GLIDER:"GLIDER",GLIDER_GUN:"GLIDER_GUN",SHIP_1:"SHIP_1",SHIP_2:"SHIP_2"},h=(b={},Object(l.a)(b,E.GLIDER,s),Object(l.a)(b,E.GLIDER_GUN,g),Object(l.a)(b,E.SHIP_1,[[]]),Object(l.a)(b,E.SHIP_2,[[]]),b),w=function(){for(var e=[[]],n=0;n<100;n++)for(var t=0;t<100;t++)e[n]||(e[n]=[]),e[n][t]=!1;return e},p=function(){for(var e=[[]],n=0;n<100;n++)for(var t=0;t<100;t++)e[n]||(e[n]=[]),e[n][t]=100*Math.random()>50;return e},P=function(e){var n=[[]];return e.forEach(function(t,a){t.forEach(function(t,r){var o=function(e,n,t){var a=0;return e[n-1]&&(e[n-1][t-1]&&a++,e[n-1][t]&&a++,e[n-1][t+1]&&a++),e[n][t-1]&&a++,e[n][t+1]&&a++,e[n+1]&&(e[n+1][t-1]&&a++,e[n+1][t]&&a++,e[n+1][t+1]&&a++),a}(e,a,r);n[a]||(n[a]=[]),o<=1?n[a][r]=!1:2===o?n[a][r]=e[a][r]:3===o?n[a][r]=!0:o>=4&&(n[a][r]=!1)})}),n},I=function(e){var n=[[]];return e.forEach(function(t,a){t.forEach(function(t,r){n[a]||(n[a]=[]),n[a][r]=e[a][r]})}),n},O=function(e,n,t,a){var r=I(e);return r[n]||(r[n]=[]),r[n][t]=a,r},j=function(e,n,t,a){for(var r=function(e){return h[e]&&h[e].data?h[e].data:[[]]}(a),o=I(e),c=0;c<r.length;c++)for(var i=0;i<r[c].length;i++){var f=i+n,u=c+t;o[f]||(o[f]=[]),o[f][u]=r[c][i]}return o};t(12);function G(e){return r.a.createElement("canvas",{className:"Canvas",height:e.height,id:"canvas",onMouseDown:e.onMouseDown,onMouseMove:e.onMouseMove,onMouseUp:e.onMouseUp,scale:e.scale,width:e.width})}t(13);function S(e){return r.a.createElement("div",{className:"Column ".concat(e.className)},e.children)}var k=function(e){var n=document.getElementById("canvas");e.forEach(function(t,a){t.forEach(function(t,r){e[a][r]?C(n,a,r,5):D(n,a,r,5)})})},C=function(e,n,t){e.getContext("2d").fillRect(5*n,5*t,5,5)},D=function(e,n,t){e.getContext("2d").clearRect(5*n,5*t,5,5)},N=function(e){var n=document.getElementById("canvas"),t=e.pageX-n.offsetLeft,a=e.pageY-n.offsetTop;return[Math.floor(t/5),Math.floor(a/5)]};function x(e){var n=e.activePrefab,t=e.currentGeneration,o=e.drawingPrefab,c=e.insertPrefab,i=e.modifyBoard,f=Object(a.useState)(!1),l=Object(u.a)(f,2),s=l[0],d=l[1];Object(a.useEffect)(function(){k(t)},[e.currentGeneration]);return r.a.createElement(S,{className:"Board-container"},r.a.createElement(G,{height:500,onMouseDown:function(e){if(!o){d(!0);var n=N(e),t=Object(u.a)(n,2),a=t[0],r=t[1];i(a,r,!0)}},onMouseMove:function(e){if(s&&!o){var n=N(e),t=Object(u.a)(n,2),a=t[0],r=t[1];i(a,r,!0)}},onMouseUp:function(e){if(d(!1),o){var t=N(e),a=Object(u.a)(t,2),r=a[0],i=a[1];c(r,i,n)}},scale:1,width:500}))}t(14);var R,L=(R="button",function(e){for(var n="".concat(R),t=e?Object.keys(e):[],a=0;a<t.length;a++)e[t[a]]&&(n+=" ".concat(R,"-").concat(t[a]));return n});function M(e){return r.a.createElement("button",{id:e.id,disabled:e.disabled,className:L({inline:e.inline,transparent:e.transparent}),onClick:e.onClick},e.text)}t(15);function _(e){return r.a.createElement("div",{className:"Row"},e.children)}function y(e){var n=e.activePrefab,t=e.drawingPrefab,a=e.setActivePrefab;return r.a.createElement(S,{className:"PrefabSelector-container"},r.a.createElement(_,null,r.a.createElement(M,{disabled:!t,transparent:n!==E.GLIDER,inline:!0,onClick:function(){return a(E.GLIDER)},text:"Glider"}),r.a.createElement(M,{disabled:!t,transparent:n!==E.GLIDER_GUN,inline:!0,onClick:function(){return a(E.GLIDER_GUN)},text:"Glider Gun"})),r.a.createElement(_,null,r.a.createElement(M,{disabled:!t,transparent:n!==E.SHIP_1,inline:!0,onClick:function(){return a(E.SHIP_1)},text:"TODO"}),r.a.createElement(M,{disabled:!t,transparent:n!==E.SHIP_2,inline:!0,onClick:function(){return a(E.SHIP_2)},text:"TODO"})))}t(16);function H(e){return r.a.createElement(S,{className:"ControlPanel-container"},r.a.createElement(M,{onClick:e.onToggle,text:e.running?"Stop":"Start"}),r.a.createElement(M,{disabled:e.running,onClick:e.onStep,text:"Step"}),r.a.createElement(M,{disabled:e.running,onClick:e.onRandomize,text:"Randomize"}),r.a.createElement(M,{onClick:e.onClear,text:"Clear"}),r.a.createElement(M,{transparent:!e.drawingPrefab,onClick:function(){return e.setDrawingPrefab(function(e){return!e})},text:"Draw Prefab"}),r.a.createElement(y,{activePrefab:e.activePrefab,drawingPrefab:e.drawingPrefab,setActivePrefab:e.setActivePrefab}))}t(17);function A(e){return r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",{className:"App-header-text"},e.text))}t(18);!function(){if("serviceWorker"in navigator){if(new URL("/gameoflife",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/gameoflife","/service-worker.js");i?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):f(e)})}}(),c.a.render(r.a.createElement(function(){var e=Object(a.useState)(w()),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(null),i=Object(u.a)(c,2),f=i[0],l=i[1],s=Object(a.useState)(!1),d=Object(u.a)(s,2),v=d[0],m=d[1],b=Object(a.useState)(E.GLIDER),g=Object(u.a)(b,2),h=g[0],I=g[1],G=Object(a.useState)(!1),S=Object(u.a)(G,2),k=S[0],C=S[1],D=function(){o(function(e){return P(e)})},N=function(){clearInterval(f),m(!1)};return r.a.createElement("div",{className:"App-container"},r.a.createElement(A,{text:"Conways Game of Life"}),r.a.createElement("div",{className:"App-main"},r.a.createElement(H,{activePrefab:h,drawingPrefab:k,onClear:function(){N(),o(w())},onRandomize:function(){o(p())},onStep:D,onToggle:function(){v?N():function(){var e=setInterval(function(){D()},35);l(e),m(!0)}()},running:v,setActivePrefab:I,setDrawingPrefab:C}),r.a.createElement(x,{activePrefab:h,currentGeneration:t,drawingPrefab:k,insertPrefab:function(e,n,a){o(j(t,e,n,a))},modifyBoard:function(e,n,a){o(O(t,e,n,a))}})))},null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.a414a981.chunk.js.map
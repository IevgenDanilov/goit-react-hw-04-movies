(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return M}));var n=r(55),o=r.n(n),c=r(56);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(54),f=r(0),l=r(3),p=r(9);function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=r(89),d=r(98),g=r.n(d),v=r(1),j=function(e){var t=e.label,r=h(e,["label"]),n=Object(b.generate)();return Object(v.jsxs)("div",{className:g.a.formGroup,children:[t&&Object(v.jsx)("label",{htmlFor:n}),Object(v.jsx)("input",i(i({},r),{},{id:n,className:g.a.input})),Object(v.jsx)("button",{className:g.a.btn,type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]})},m={searchMovie:""},O={type:"text",name:"searchMovie",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0438\u043b\u044c\u043c\u0443",required:!0,label:"\u041f\u043e\u0448\u0443\u043a"},x=function(e){var t=e.onSubmit,r=function(e,t){var r=Object(f.useState)(e),n=Object(s.a)(r,2),o=n[0],c=n[1];return[o,function(e){var t=e.target,r=t.type,n=t.name,o=t.value,a=t.checked,s="checkbox"===r?a:o;c((function(e){return i(i({},e),{},u({},n,s))}))},function(r){r.preventDefault(),t(o),c(i({},e))}]}(m,t),n=Object(s.a)(r,3),o=n[0],c=n[1],a=n[2];return Object(v.jsx)("form",{onSubmit:a,children:Object(v.jsx)(j,i(i({onChange:c},O),{},{value:o.searchMovie}))})},w={movies:[],isLoading:!1,error:null},y=r(53),_=r(10),P=r(99),S=r.n(P),M=function(){var e=Object(f.useState)(i({},w)),t=Object(s.a)(e,2),r=t[0],n=t[1],u=Object(l.g)(),a=Object(l.h)();Object(f.useEffect)((function(){var e=function(){var e=Object(c.a)(o.a.mark((function e(){var t,r,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new URLSearchParams(a.search),r=t.get("query"),e.next=5,Object(y.c)(r);case 5:c=e.sent,u=c.data,n((function(e){return i(i({},e),{},{isLoding:!1,movies:u.results,error:null})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n((function(t){return i(i({},t),{},{error:e.t0,isLoading:!1})}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();a.search&&(n((function(e){return i(i({},e),{},{isLoding:!0})})),e())}),[a.search]);var h=r.movies,b=r.loading;if(r.error)return Object(v.jsx)(l.a,{to:_.a.NOT_FOUND});if(b)return Object(v.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u043e\u0441\u0442\u043e\u0432...."});var d=h.map((function(e){var t=e.id,r=e.title;return Object(v.jsx)("li",{children:Object(v.jsx)(p.b,{to:{pathname:"/movies/".concat(t),state:{from:a}},className:S.a.item,children:r})},t)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x,{onSubmit:function(e){var t=e.searchMovie;u.push({pathname:a.pathname,search:"query=".concat(t)})}}),Object(v.jsx)("ol",{className:S.a.list,children:d})]})}},53:function(e,t,r){"use strict";r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(60),o=r.n(n);o.a.defaults.baseURL="https://api.themoviedb.org/3",o.a.defaults.params={api_key:"92328ae8dd5bcee1597a295c993c895b"};var c=function(){return o.a.get("/trending/movie/day")},u=function(e){return o.a.get("/movie/".concat(e,"?language=en-US"))},a=function(e){return o.a.get("/search/movie?language=en-US&query=".concat(e,"&page=1&include_adult=false"))},i=function(e){return o.a.get("/movie/".concat(e,"/credits?language=en-US"))},s=function(e){return o.a.get("/movie/".concat(e,"/reviews?language=en-US&page=1"))}},59:function(e,t,r){"use strict";var n,o,c,u=r(91),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){c=!1}function s(e){if(e){if(e!==n){if(e.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,r){return t!==r.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,i()}}else n!==a&&(n=a,i())}function f(){return c||(c=function(){n||s(a);for(var e,t=n.split(""),r=[],o=u.nextValue();t.length>0;)o=u.nextValue(),e=Math.floor(o*t.length),r.push(t.splice(e,1)[0]);return r.join("")}())}e.exports={get:function(){return n||a},characters:function(e){return s(e),n},seed:function(e){u.seed(e),o!==e&&(i(),o=e)},lookup:function(e){return f()[e]},shuffled:f}},89:function(e,t,r){"use strict";e.exports=r(90)},90:function(e,t,r){"use strict";var n=r(59),o=r(92),c=r(96),u=r(97)||0;function a(){return o(u)}e.exports=a,e.exports.generate=a,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return u=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=c},91:function(e,t,r){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},92:function(e,t,r){"use strict";var n,o,c=r(93);r(59);e.exports=function(e){var t="",r=Math.floor(.001*(Date.now()-1567752802062));return r===o?n++:(n=0,o=r),t+=c(7),t+=c(e),n>0&&(t+=c(n)),t+=c(r)}},93:function(e,t,r){"use strict";var n=r(59),o=r(94),c=r(95);e.exports=function(e){for(var t,r=0,u="";!t;)u+=c(o,n.get(),1),t=e<Math.pow(16,r+1),r++;return u}},94:function(e,t,r){"use strict";var n,o="object"===typeof window&&(window.crypto||window.msCrypto);n=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],r=0;r<e;r++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},95:function(e,t){e.exports=function(e,t,r){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*n*r/t.length),c="";;)for(var u=e(o),a=o;a--;)if((c+=t[u[a]&n]||"").length===+r)return c}},96:function(e,t,r){"use strict";var n=r(59);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},97:function(e,t,r){"use strict";e.exports=0},98:function(e,t,r){e.exports={formGroup:"InputField_formGroup__12DL1",input:"InputField_input__3E2hh",btn:"InputField_btn__2_GKI"}},99:function(e,t,r){e.exports={list:"MoviePage_list__3Z1bk",item:"MoviePage_item__3Xcnw"}}}]);
//# sourceMappingURL=4.6ebea716.chunk.js.map
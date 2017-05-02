!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){function e(t,n,r){return new Promise(function(e){f(n).then(function(){h[t]={template:c(n)(r.trim()),type:n},e(h[t])})})}function o(t,n,r){switch(n){case b:return t(r);case g:return t(r);case x:return Mustache.render(t,r);case j:return t.render(r);default:return console.log(t),console.log(r),p(t,r)}}function i(t,n){var r=document.querySelector(t),o=r.getAttribute("type"),i=r.innerHTML;if(!n){if(!o)throw new Error("Must provide `type` attribute for <script> templates (e.g., handlebars, jade, nunjucks, html)");if(-1!==o.indexOf("handlebars"))n=b;else if(-1!==o.indexOf("jade"))n=g;else if(-1!==o.indexOf("mustache"))n=x;else if(-1!==o.indexOf("nunjucks"))n=j;else{if(-1===o.indexOf("html"))return void v("Template type could not be inferred from the script tag. Please add a type.");n=w}}return new Promise(function(r){e(t,n,i).then(function(t){r(t,n)})})}function u(t,n){return new Promise(function(r){var o;o=new XMLHttpRequest,o.addEventListener("load",function(){e(t,n,o.response).then(function(t){r(t,n)})}),o.open("GET",t),o.send()})}function c(t){switch(t){case b:return s;case g:return a;case x:return s;case j:return l;default:return function(t){return t}}}function s(t){return Handlebars.compile(t)}function a(t){return jade.compile(t)}function l(t){return nunjucks.compile(t)}function f(t){return new Promise(function(n){if(!t||"html"===t)return n();var r=S[t];if(S[t]===!0)return n();r||(r=document.createElement("script"),S[t]=r,r.setAttribute("src",O[t]),m('Lazy-loading %s engine. Please add <script src="%s"> to your page.',t,O[t]),document.body.appendChild(r));var e=r.onload||function(){};r.onload=function(){e(),S[t]=!0,n()}})}var p=r(11),d=AFRAME.utils.debug,y=AFRAME.utils.extend,h={},v=d("template-component:error"),m=d("template-component:info"),b="handlebars",g="jade",x="mustache",j="nunjucks",w="html",S={};S[b]=!!window.Handlebars,S[g]=!!window.jade,S[x]=!!window.Mustache,S[j]=!!window.nunjucks;var O={};O[b]="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js",O[g]="https://cdnjs.cloudflare.com/ajax/libs/jade/1.11.0/jade.min.js",O[x]="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js",O[j]="https://cdnjs.cloudflare.com/ajax/libs/nunjucks/2.3.0/nunjucks.min.js",AFRAME.registerComponent("template",{schema:{insert:{"default":"beforeend"},type:{"default":""},src:{"default":""},data:{"default":""}},update:function(t){var n=this.data,r=this.el,e="#"===n.src[0]?i:u,o=h[n.src];if(t&&t.src!==n.src)for(;r.firstChild;)r.removeChild(r.firstChild);return o?void this.renderTemplate(o):void e(n.src,n.type).then(this.renderTemplate.bind(this))},renderTemplate:function(t){var n=this.el,r=this.data,e={};Object.keys(n.dataset).forEach(function(t){e[t]=n.dataset[t]}),r.data&&(e=y(e,n.getComputedAttribute(r.data)));var i=o(t.template,t.type,e);n.insertAdjacentHTML(r.insert,i)}}),AFRAME.registerComponent("template-set",{schema:{on:{type:"string"},src:{type:"string"},data:{type:"string"}},init:function(){var t=this.data,n=this.el;n.addEventListener(t.on,function(){n.setAttribute("template",{src:t.src,data:t.data})})}})},function(t,n){"use strict";var r=Array.prototype.forEach,e=Object.create;t.exports=function(t){var n=e(null);return r.call(arguments,function(t){n[t]=!0}),n}},function(t,n){"use strict";t.exports=function(t){if(null==t)throw new TypeError("Cannot use null or undefined");return t}},function(t,n,r){"use strict";t.exports=r(12)()?Array.from:r(13)},function(t,n){"use strict";var r=Array.prototype.forEach,e=Object.create,o=function(t,n){var r;for(r in t)n[r]=t[r]};t.exports=function(t){var n=e(null);return r.call(arguments,function(t){null!=t&&o(Object(t),n)}),n}},function(t,n,r){"use strict";t.exports=r(28)()?Object.assign:r(29)},function(t,n){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,n){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,n,r){"use strict";t.exports=r(33)()?String.prototype.contains:r(34)},function(t,n,r){"use strict";var e=r(3),o=r(1);t.exports=o.apply(null,e("\n\r\u2028\u2029"))},function(t,n,r){"use strict";var e,o,i,u,c,s,a,l,f,p,d=r(36);c=function(t){return"\\"===t?s:"$"===t?a:(o+=t,c)},s=function(t){return"\\"!==t&&"$"!==t&&(o+="\\"),o+=t,c},a=function(t){return"{"===t?(i.push(o),o="",l):"$"===t?(o+="$",a):(o+="$"+t,c)},l=function(t){var n,r=p.slice(e);return d(r,"}",function(t){return d.nest>=0?d.next():void(n=t)}),null!=n?(u.push(p.slice(e,e+n)),e+=n,o="",c):(n=r.length,e+=n,o+=r,l)},f=function(t){return"\\"!==t&&"}"!==t&&(o+="\\"),o+=t,l},t.exports=function(t){var n,r,d;for(o="",i=[],u=[],p=String(t),n=p.length,r=c,e=0;n>e;++e)r=r(p[e]);return r===c?i.push(o):r===s?i.push(o+"\\"):r===a?i.push(o+"$"):r===l?i[i.length-1]+="${"+o:r===f&&(i[i.length-1]+="${"+o+"\\"),d={literals:i,substitutions:u},i=u=null,d}},function(t,n,r){"use strict";var e=r(10),o=r(41);t.exports=function(t,n){return o(e(t),n,arguments[2])}},function(t,n){"use strict";t.exports=function(){var t,n,r=Array.from;return"function"!=typeof r?!1:(t=["raz","dwa"],n=r(t),Boolean(n&&n!==t&&"dwa"===n[1]))}},function(t,n,r){"use strict";var e=r(20).iterator,o=r(14),i=r(15),u=r(27),c=r(7),s=r(2),a=r(35),l=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},d=Object.defineProperty;t.exports=function(t){var n,r,y,h,v,m,b,g,x,j,w=arguments[1],S=arguments[2];if(t=Object(s(t)),null!=w&&c(w),this&&this!==Array&&i(this))n=this;else{if(!w){if(o(t))return v=t.length,1!==v?Array.apply(null,t):(h=new Array(1),h[0]=t[0],h);if(l(t)){for(h=new Array(v=t.length),r=0;v>r;++r)h[r]=t[r];return h}}h=[]}if(!l(t))if(void 0!==(x=t[e])){for(b=c(x).call(t),n&&(h=new n),g=b.next(),r=0;!g.done;)j=w?f.call(w,S,g.value,r):g.value,n?(p.value=j,d(h,r,p)):h[r]=j,g=b.next(),++r;v=r}else if(a(t)){for(v=t.length,n&&(h=new n),r=0,y=0;v>r;++r)j=t[r],v>r+1&&(m=j.charCodeAt(0),m>=55296&&56319>=m&&(j+=t[++r])),j=w?f.call(w,S,j,y):j,n?(p.value=j,d(h,y,p)):h[y]=j,++y;v=y}if(void 0===v)for(v=u(t.length),n&&(h=new n(v)),r=0;v>r;++r)j=w?f.call(w,S,t[r],r):t[r],n?(p.value=j,d(h,r,p)):h[r]=j;return n&&(p.value=null,h.length=v),h}},function(t,n){"use strict";var r=Object.prototype.toString,e=r.call(function(){return arguments}());t.exports=function(t){return r.call(t)===e}},function(t,n,r){"use strict";var e=Object.prototype.toString,o=e.call(r(16));t.exports=function(t){return"function"==typeof t&&e.call(t)===o}},function(t,n){"use strict";t.exports=function(){}},function(t,n,r){"use strict";t.exports=r(18)()?Math.sign:r(19)},function(t,n){"use strict";t.exports=function(){var t=Math.sign;return"function"!=typeof t?!1:1===t(10)&&-1===t(-20)}},function(t,n){"use strict";t.exports=function(t){return t=Number(t),isNaN(t)||0===t?t:t>0?1:-1}},function(t,n,r){"use strict";t.exports=r(21)()?Symbol:r(24)},function(t,n){"use strict";var r={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(n){return!1}return r[typeof Symbol.iterator]&&r[typeof Symbol.toPrimitive]?!!r[typeof Symbol.toStringTag]:!1}},function(t,n){"use strict";t.exports=function(t){return t?"symbol"==typeof t?!0:t.constructor?"Symbol"!==t.constructor.name?!1:"Symbol"===t[t.constructor.toStringTag]:!1:!1}},function(t,n,r){"use strict";var e,o=r(5),i=r(4),u=r(6),c=r(8);e=t.exports=function(t,n){var r,e,u,s,a;return arguments.length<2||"string"!=typeof t?(s=n,n=t,t=null):s=arguments[2],null==t?(r=u=!0,e=!1):(r=c.call(t,"c"),e=c.call(t,"e"),u=c.call(t,"w")),a={value:n,configurable:r,enumerable:e,writable:u},s?o(i(s),a):a},e.gs=function(t,n,r){var e,s,a,l;return"string"!=typeof t?(a=r,r=n,n=t,t=null):a=arguments[3],null==n?n=void 0:u(n)?null==r?r=void 0:u(r)||(a=r,r=void 0):(a=n,n=r=void 0),null==t?(e=!0,s=!1):(e=c.call(t,"c"),s=c.call(t,"e")),l={get:n,set:r,configurable:e,enumerable:s},a?o(i(a),l):l}},function(t,n,r){"use strict";var e,o,i,u,c=r(23),s=r(25),a=Object.create,l=Object.defineProperties,f=Object.defineProperty,p=Object.prototype,d=a(null);if("function"==typeof Symbol){e=Symbol;try{String(e()),u=!0}catch(y){}}var h=function(){var t=a(null);return function(n){for(var r,e,o=0;t[n+(o||"")];)++o;return n+=o||"",t[n]=!0,r="@@"+n,f(p,r,c.gs(null,function(t){e||(e=!0,f(this,r,c(t)),e=!1)})),r}}();i=function(t){if(this instanceof i)throw new TypeError("TypeError: Symbol is not a constructor");return o(t)},t.exports=o=function v(t){var n;if(this instanceof v)throw new TypeError("TypeError: Symbol is not a constructor");return u?e(t):(n=a(i.prototype),t=void 0===t?"":String(t),l(n,{__description__:c("",t),__name__:c("",h(t))}))},l(o,{"for":c(function(t){return d[t]?d[t]:d[t]=o(String(t))}),keyFor:c(function(t){var n;s(t);for(n in d)if(d[n]===t)return n}),hasInstance:c("",e&&e.hasInstance||o("hasInstance")),isConcatSpreadable:c("",e&&e.isConcatSpreadable||o("isConcatSpreadable")),iterator:c("",e&&e.iterator||o("iterator")),match:c("",e&&e.match||o("match")),replace:c("",e&&e.replace||o("replace")),search:c("",e&&e.search||o("search")),species:c("",e&&e.species||o("species")),split:c("",e&&e.split||o("split")),toPrimitive:c("",e&&e.toPrimitive||o("toPrimitive")),toStringTag:c("",e&&e.toStringTag||o("toStringTag")),unscopables:c("",e&&e.unscopables||o("unscopables"))}),l(i.prototype,{constructor:c(o),toString:c("",function(){return this.__name__})}),l(o.prototype,{toString:c(function(){return"Symbol ("+s(this).__description__+")"}),valueOf:c(function(){return s(this)})}),f(o.prototype,o.toPrimitive,c("",function(){var t=s(this);return"symbol"==typeof t?t:t.toString()})),f(o.prototype,o.toStringTag,c("c","Symbol")),f(i.prototype,o.toStringTag,c("c",o.prototype[o.toStringTag])),f(i.prototype,o.toPrimitive,c("c",o.prototype[o.toPrimitive]))},function(t,n,r){"use strict";var e=r(22);t.exports=function(t){if(!e(t))throw new TypeError(t+" is not a symbol");return t}},function(t,n,r){"use strict";var e=r(17),o=Math.abs,i=Math.floor;t.exports=function(t){return isNaN(t)?0:(t=Number(t),0!==t&&isFinite(t)?e(t)*i(o(t)):t)}},function(t,n,r){"use strict";var e=r(26),o=Math.max;t.exports=function(t){return o(0,e(t))}},function(t,n){"use strict";t.exports=function(){var t,n=Object.assign;return"function"!=typeof n?!1:(t={foo:"raz"},n(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,n,r){"use strict";var e=r(30),o=r(2),i=Math.max;t.exports=function(t,n){var r,u,c,s=i(arguments.length,2);for(t=Object(o(t)),c=function(e){try{t[e]=n[e]}catch(o){r||(r=o)}},u=1;s>u;++u)n=arguments[u],e(n).forEach(c);if(void 0!==r)throw r;return t}},function(t,n,r){"use strict";t.exports=r(31)()?Object.keys:r(32)},function(t,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,n){"use strict";var r=Object.keys;t.exports=function(t){return r(null==t?t:Object(t))}},function(t,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"!=typeof r.contains?!1:r.contains("dwa")===!0&&r.contains("foo")===!1}},function(t,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},function(t,n){"use strict";var r=Object.prototype.toString,e=r.call("");t.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||r.call(t)===e)||!1}},function(t,n,r){"use strict";var e,o,i,u,c,s,a,l,f,p,d,y,h,v,m,b,g,x,j,w,S,O,A,T,E,k,P,M=r(3),_=r(1),C=r(2),$=r(7),z=r(39),F=r(9),N=r(38),L=Object.prototype.hasOwnProperty,H=_.apply(null,M(";{=([,<>+-*/%&|^!~?:}")),R=_.apply(null,M(";{=([,<>+-*/%&|^!~?:})]."));e=function(t){if(y&&!(d>=t))for(;d!==t;){if(!y)return;L.call(N,y)?L.call(F,y)&&(v=d,++h):b=y,y=w[++d]}},o=function(t){null!=E&&x.push([k,E,t]),k={point:d+1,line:h,column:d+1-v},E=d},i=function(){var t;return k.raw=w.slice(E,d),j.push(k),x.length?(t=x.pop(),k=t[0],E=t[1],void(P=t[2])):(k=null,E=null,void(P=null))},u=function(){var t=P;return P=g,++g,e(d+1),o(t),c},s=function(){if("'"===y||'"'===y)return T=y,y=w[++d],a;if("("===y||"{"===y||"["===y)++g;else if(")"===y||"}"===y||"]"===y)P===--g&&i();else if("/"===y&&L.call(H,b))return y=w[++d],p;return y!==S||!O&&b&&!m&&!L.call(R,b)?(b=y,y=w[++d],c):A(d,b,g)},l=function(){for(;;){if(!y)return;if(L.call(F,y))return v=d+1,void++h;y=w[++d]}},f=function(){for(;;){if(!y)return;if("*"!==y)L.call(F,y)&&(v=d+1,++h),y=w[++d];else if(y=w[++d],"/"===y)return}},c=function(){var t;for(m=!1;;){if(!y)return;if(L.call(N,y))m=!0,L.call(F,y)&&(v=d+1,++h);else{if("/"!==y)break;if(t=w[d+1],"/"===t)y=w[d+=2],m=!0,l();else{if("*"!==t)break;y=w[d+=2],m=!0,f()}}y=w[++d]}return s},a=function(){for(;;){if(!y)return;if(y===T)return y=w[++d],b=T,c;"\\"===y&&L.call(F,w[++d])&&(v=d+1,++h),y=w[++d]}},p=function(){for(;;){if(!y)return;if("/"===y)return b="/",y=w[++d],c;"\\"===y&&++d,y=w[++d]}},t.exports=n=function(t,r,e){var o;if(w=String(C(t)),S=String(C(r)),1!==S.length)throw new TypeError(S+" should be one character long string");for(A=$(e),O=L.call(R,S),d=0,y=w[d],h=1,v=0,m=!1,b=null,g=0,x=[],j=[],n.forceStop=!1,o=c;o;)o=o();return j},Object.defineProperties(n,{$ws:z(c),$common:z(s),collectNest:z(u),move:z(e),index:z.gs(function(){return d}),line:z.gs(function(){return h}),nest:z.gs(function(){return g}),columnIndex:z.gs(function(){return v}),next:z(function(t){return y?(e(d+(t||1)),c()):void 0}),resume:z(function(){return s})})},function(t,n,r){"use strict";var e=r(3),o=r(1);t.exports=o.apply(null,e(" \f	\x0B​  ​᠎ ​  ​  ​  ​  ​  ​​​  ​　"))},function(t,n,r){"use strict";var e=r(1),o=r(9),i=r(37);t.exports=e.apply(null,Object.keys(o).concat(Object.keys(i)))},function(t,n,r){"use strict";var e,o=r(5),i=r(4),u=r(6),c=r(8);e=t.exports=function(t,n){var r,e,u,s,a;return arguments.length<2||"string"!=typeof t?(s=n,n=t,t=null):s=arguments[2],null==t?(r=u=!0,e=!1):(r=c.call(t,"c"),e=c.call(t,"e"),u=c.call(t,"w")),a={value:n,configurable:r,enumerable:e,writable:u},s?o(i(s),a):a},e.gs=function(t,n,r){var e,s,a,l;return"string"!=typeof t?(a=r,r=n,n=t,t=null):a=arguments[3],null==n?n=void 0:u(n)?null==r?r=void 0:u(r)||(a=r,r=void 0):(a=n,n=r=void 0),null==t?(e=!0,s=!1):(e=c.call(t,"c"),s=c.call(t,"e")),l={get:n,set:r,configurable:e,enumerable:s},a?o(i(a),l):l}},function(t,n){"use strict";var r=Array.prototype.reduce;t.exports=function(t){var n=arguments;return r.call(t,function(t,r,e){return t+(void 0===n[e]?"":String(n[e]))+r})}},function(t,n,r){"use strict";var e=r(42),o=r(40);t.exports=function(t,n){return o.apply(null,e(t,n,arguments[2]))}},function(t,n,r){"use strict";var e=r(2),o=r(4),i=Array.prototype.map,u=Object.keys,c=JSON.stringify;t.exports=function(t,n){var r,s,a,l=Object(arguments[2]);return e(t)&&e(t.literals)&&e(t.substitutions),n=o(n),r=u(n),s=r.join(", "),a=r.map(function(t){return n[t]}),[t.literals].concat(i.call(t.substitutions,function(t){var n;if(t){try{n=new Function(s,"return ("+t+")")}catch(r){throw new TypeError("Unable to compile expression:\n	args: "+c(s)+"\n	body: "+c(t)+"\n	error: "+r.stack)}try{return n.apply(null,a)}catch(r){if(l.partial)return"${"+t+"}";throw new TypeError("Unable to resolve expression:\n	args: "+c(s)+"\n	body: "+c(t)+"\n	error: "+r.stack)}}}))}}]);
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ca(a){if(!(a instanceof Array)){a=ba(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function ma(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
function na(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var oa=na(this),pa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function qa(a,b){if(b){for(var c=oa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&pa(c,d,{configurable:!0,writable:!0,value:f})}}
qa("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var k=this.j();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.i(function(){k.l()})}this.f.push(g)};
var e=oa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.j(m)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(m){return function(q){l||(l=!0,m.call(k,q))}}
var k=this,l=!1;return{resolve:g(this.C),reject:g(this.l)}};
b.prototype.C=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.H(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.A(g):this.w(g)}};
b.prototype.A=function(g){var k=void 0;try{k=g.then}catch(l){this.l(l);return}"function"==typeof k?this.L(k,g):this.w(g)};
b.prototype.l=function(g){this.D(2,g)};
b.prototype.w=function(g){this.D(1,g)};
b.prototype.D=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.i=k;this.F()};
b.prototype.F=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.H=function(g){var k=this.j();g.Kb(k.resolve,k.reject)};
b.prototype.L=function(g,k){var l=this.j();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(v,w){return"function"==typeof v?function(N){try{m(v(N))}catch(da){q(da)}}:w}
var m,q,u=new b(function(v,w){m=v;q=w});
this.Kb(l(g,m),l(k,q));return u};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Kb=function(g,k){function l(){switch(m.g){case 1:g(m.i);break;case 2:k(m.i);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(l):this.f.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=ba(g),q=m.next();!q.done;q=m.next())d(q.value).Kb(k,l)})};
b.all=function(g){var k=ba(g),l=k.next();return l.done?d([]):new b(function(m,q){function u(N){return function(da){v[N]=da;w--;0==w&&m(v)}}
var v=[],w=0;do v.push(void 0),w++,d(l.value).Kb(u(v.length-1),q),l=k.next();while(!l.done)})};
return b});
function ra(){ra=function(){};
oa.Symbol||(oa.Symbol=sa)}
function ta(a,b){this.f=a;pa(this,"description",{configurable:!0,writable:!0,value:b})}
ta.prototype.toString=function(){return this.f};
var sa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ta("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ua(){ra();var a=oa.Symbol.iterator;a||(a=oa.Symbol.iterator=oa.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&pa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return va(aa(this))}});
ua=function(){}}
function va(a){ua();a={next:a};a[oa.Symbol.iterator]=function(){return this};
return a}
function wa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
qa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
qa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function xa(a,b){ua();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
qa("Array.prototype.keys",function(a){return a?a:function(){return xa(this,function(b){return b})}});
qa("Array.prototype.values",function(a){return a?a:function(){return xa(this,function(b,c){return c})}});
function ya(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var za="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ya(d,e)&&(a[e]=d[e])}return a};
qa("Object.assign",function(a){return a||za});
qa("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
qa("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
qa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
qa("WeakMap",function(a){function b(l){this.f=(k+=Math.random()+1).toString();if(l){l=ba(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ya(l,g)){var m=new c;pa(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(q){if(q instanceof c)return q;e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),q=new a([[l,2],[m,3]]);if(2!=q.get(l)||3!=q.get(m))return!1;q["delete"](l);q.set(m,4);return!q.has(l)&&4==q.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ya(l,g))throw Error("WeakMap key fail: "+l);l[g][this.f]=m;return this};
b.prototype.get=function(l){return d(l)&&ya(l,g)?l[g][this.f]:void 0};
b.prototype.has=function(l){return d(l)&&ya(l,g)&&ya(l[g],this.f)};
b.prototype["delete"]=function(l){return d(l)&&ya(l,g)&&ya(l[g],this.f)?delete l[g][this.f]:!1};
return b});
qa("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.f;return va(function(){if(m){for(;m.head!=k.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var q=k.g[m];if(q&&ya(k.g,m))for(var u=0;u<q.length;u++){var v=q[u];if(l!==l&&v.key!==v.key||l===v.key)return{id:m,list:q,index:u,ca:v}}return{id:m,list:q,index:-1,ca:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(ba([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),q=m.next();if(q.done||q.value[0]!=k||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
ua();var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.g[m.id]=[]);m.ca?m.ca.value=l:(m.ca={next:this.f,previous:this.f.previous,head:this.f,key:k,value:l},m.list.push(m.ca),this.f.previous.next=m.ca,this.f.previous=m.ca,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.ca&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.ca.previous.next=k.ca.next,k.ca.next.previous=k.ca.previous,k.ca.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).ca};
e.prototype.get=function(k){return(k=d(this,k).ca)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,k.call(l,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
qa("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ua();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
qa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==wa(this,b,"includes").indexOf(b,c||0)}});
var Aa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ea(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
qa("Reflect.construct",function(){return Aa});
var Ba=Ba||{},n=this||self;function p(a,b,c){a=a.split(".");c=c||n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ca(a){if(a&&a!=n)return Da(a.document);null===Ea&&(Ea=Da(n.document));return Ea}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ea=null;function Da(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function r(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ga(){}
function Ha(a){a.da=void 0;a.getInstance=function(){return a.da?a.da:a.da=new a}}
function Ia(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ja(a){return"array"==Ia(a)}
function Ka(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){return"function"==Ia(a)}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=Ra:t=Ta;return t.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Va(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Wa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Wa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(Wa,Error);Wa.prototype.name="CustomError";var Xa;function Za(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Wa.call(this,d+c[e])}
y(Za,Wa);Za.prototype.name="AssertionError";var $a=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ab=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===
typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},cb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
z(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},eb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},fb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function gb(a,b,c){b=hb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function hb(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function ib(a,b){a:{var c="string"===typeof a?a.split(""):a;for(var d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){c=d;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function jb(a,b){return 0<=$a(a,b)}
function kb(a,b){jb(a,b)||a.push(b)}
function lb(a,b){var c=$a(a,b),d;(d=0<=c)&&mb(a,c);return d}
function mb(a,b){Array.prototype.splice.call(a,b,1)}
function nb(a,b){var c=hb(a,b,void 0);0<=c&&mb(a,c)}
function ob(a){return Array.prototype.concat.apply([],arguments)}
function pb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function rb(a,b,c,d){return Array.prototype.splice.apply(a,sb(arguments,1))}
function sb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function tb(a,b){if(!Ka(a)||!Ka(b)||a.length!=b.length)return!1;for(var c=a.length,d=ub,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function vb(a,b){return a>b?1:a<b?-1:0}
function ub(a,b){return a===b}
function wb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=wb.apply(null,sb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
function xb(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function yb(){return function(){return""}}
function zb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ab=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Bb=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");function Cb(a){return/^[\s\xa0]*$/.test(a)}
var Db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Eb(a,b){if(b)a=a.replace(Fb,"&amp;").replace(Gb,"&lt;").replace(Hb,"&gt;").replace(Ib,"&quot;").replace(Kb,"&#39;").replace(Lb,"&#0;");else{if(!Mb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Fb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Gb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Hb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ib,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Kb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Lb,"&#0;"))}return a}
var Fb=/&/g,Gb=/</g,Hb=/>/g,Ib=/"/g,Kb=/'/g,Lb=/\x00/g,Mb=/[\x00&<>"']/;
function Nb(a,b){for(var c=0,d=Db(String(a)).split("."),e=Db(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Ob(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Ob(0==k[2].length,0==l[2].length)||Ob(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Ob(a,b){return a<b?-1:a>b?1:0}
;var Pb;a:{var Qb=n.navigator;if(Qb){var Rb=Qb.userAgent;if(Rb){Pb=Rb;break a}}Pb=""}function A(a){return-1!=Pb.indexOf(a)}
;function Sb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Tb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Ub(a){var b=0,c;for(c in a)b++;return b}
function Vb(a,b){return Wb(a,b)}
function Xb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Yb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Wb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Zb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function $b(a){for(var b in a)return!1;return!0}
function bc(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function cc(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function dc(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ec(a){var b=Ia(a);if("object"==b||"array"==b){if(Ma(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ec(a[c]);return b}return a}
var fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fc.length;f++)c=fc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function hc(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return hc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function ic(){return A("Trident")||A("MSIE")}
function jc(){return A("Firefox")||A("FxiOS")}
function kc(){return A("Safari")&&!(lc()||A("Coast")||A("Opera")||A("Edge")||A("Edg/")||A("OPR")||jc()||A("Silk")||A("Android"))}
function lc(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
function mc(){return A("Android")&&!(lc()||jc()||A("Opera")||A("Silk"))}
;var nc={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function oc(a,b){this.f=a===pc&&b||"";this.g=qc}
oc.prototype.Ia=!0;oc.prototype.oa=function(){return this.f};
function uc(a){return a instanceof oc&&a.constructor===oc&&a.g===qc?a.f:"type_error:Const"}
var qc={},pc={},vc=new oc(pc,"");function wc(a,b){this.g=a===xc&&b||"";this.i=yc}
wc.prototype.Ia=!0;wc.prototype.oa=function(){return this.g.toString()};
wc.prototype.Cc=!0;wc.prototype.f=function(){return 1};
function zc(a){if(a instanceof wc&&a.constructor===wc&&a.i===yc)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var yc={},xc={};function Ac(a,b){this.g=a===Bc&&b||"";this.i=Cc}
Ac.prototype.Ia=!0;Ac.prototype.oa=function(){return this.g.toString()};
Ac.prototype.Cc=!0;Ac.prototype.f=function(){return 1};
function Dc(a){if(a instanceof Ac&&a.constructor===Ac&&a.i===Cc)return a.g;Ia(a);return"type_error:SafeUrl"}
var Ec=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,Fc=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Gc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Hc(a){if(a instanceof Ac)return a;a="object"==typeof a&&a.Ia?a.oa():String(a);Gc.test(a)||(a="about:invalid#zClosurez");return new Ac(Bc,a)}
function Ic(a,b){if(a instanceof Ac)return a;a="object"==typeof a&&a.Ia?a.oa():String(a);if(b&&/^data:/i.test(a)){var c=a.replace(/(%0A|%0D)/g,"");var d=c.match(Fc);d=d&&Ec.test(d[1]);c=new Ac(Bc,d?c:"about:invalid#zClosurez");if(c.oa()==a)return c}Gc.test(a)||(a="about:invalid#zClosurez");return new Ac(Bc,a)}
var Cc={},Bc={};function Jc(){this.f="";this.g=Kc}
Jc.prototype.Ia=!0;var Kc={};Jc.prototype.oa=function(){return this.f};
function Lc(a){var b=new Jc;b.f=a;return b}
var Mc=Lc("");function Nc(a){if(a instanceof Ac)return'url("'+Dc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof oc)a=uc(a);else{a=String(a);var b=a.replace(Oc,"$1").replace(Oc,"$1").replace(Pc,"url");if(Qc.test(b)){if(b=!Rc.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Sc(a)}a=b?Tc(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Za("Value does not allow [{;}], got: %s.",[a]);return a}
function Sc(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Qc=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Pc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Oc=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Rc=/\/\*/;function Tc(a){return a.replace(Pc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,k,l){f=k;return l});
b=Hc(d).oa();return c+f+b+f+e})}
;function Uc(){this.g="";this.j=Vc;this.i=null}
Uc.prototype.Cc=!0;Uc.prototype.f=function(){return this.i};
Uc.prototype.Ia=!0;Uc.prototype.oa=function(){return this.g.toString()};
function Wc(a){if(a instanceof Uc&&a.constructor===Uc&&a.j===Vc)return a.g;Ia(a);return"type_error:SafeHtml"}
function Xc(a){if(a instanceof Uc)return a;var b="object"==typeof a,c=null;b&&a.Cc&&(c=a.f());return Yc(Eb(b&&a.Ia?a.oa():String(a)),c)}
var Zc=/^[a-zA-Z0-9-]+$/,$c={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},ad={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function bd(a,b,c){var d=String(a);if(!Zc.test(d))throw Error("");if(d.toUpperCase()in ad)throw Error("");a=String(a);d=null;var e="<"+a,f="";if(b)for(u in b){if(!Zc.test(u))throw Error("");var g=b[u];if(null!=g){var k=u;var l=g;if(l instanceof oc)l=uc(l);else if("style"==k.toLowerCase()){g=void 0;if(!Na(l))throw Error("");if(!(l instanceof Jc)){var m="";for(g in l){if(!/^[-_a-zA-Z0-9]+$/.test(g))throw Error("Name allows only [-_a-zA-Z0-9], got: "+g);var q=l[g];null!=q&&(q=Array.isArray(q)?cb(q,Nc).join(" "):
Nc(q),m+=g+":"+q+";")}l=m?Lc(m):Mc}l instanceof Jc&&l.constructor===Jc&&l.g===Kc?g=l.f:(Ia(l),g="type_error:SafeStyle");l=g}else{if(/^on/i.test(k))throw Error("");if(k.toLowerCase()in $c)if(l instanceof wc)l=zc(l).toString();else if(l instanceof Ac)l=Dc(l);else if("string"===typeof l)l=Hc(l).oa();else throw Error("");}l.Ia&&(l=l.oa());k=k+'="'+Eb(String(l))+'"';f+=" "+k}}var u=e+f;null==c?c=[]:Array.isArray(c)||(c=[c]);!0===nc[a.toLowerCase()]?u+=">":(c=cd(c),u+=">"+Wc(c).toString()+"</"+a+">",d=
c.f());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return dd(u,d)}
function ed(a){function b(f){Array.isArray(f)?z(f,b):(f=Xc(f),e.push(Wc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=Xc(fd),d=c.f(),e=[];z(a,b);return Yc(e.join(Wc(c).toString()),d)}
function cd(a){return ed(Array.prototype.slice.call(arguments))}
var Vc={};function Yc(a,b){return dd(a,b)}
function dd(a,b){var c=new Uc;c.g=a;c.i=b;return c}
dd("<!DOCTYPE html>",0);var fd=dd("",0),gd=dd("<br>",0);var hd=zb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Wc(fd);return!b.parentElement});
function id(a,b){if(hd())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Wc(b)}
function md(a,b){id(a,b)}
function nd(a,b){var c=b instanceof Ac?b:Ic(b);a.href=Dc(c)}
function od(a,b){var c=b instanceof Ac?b:Ic(b,/^data:image\//i.test(b));a.src=Dc(c)}
function pd(a,b){a.src=zc(b);var c=Ca();c&&a.setAttribute("nonce",c)}
function qd(a,b){var c=b instanceof Ac?b:Ic(b);a.href=Dc(c)}
;function rd(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function sd(a){return encodeURIComponent(String(a))}
function td(a){return decodeURIComponent(a.replace(/\+/g," "))}
function ud(a){return a=Eb(a,void 0)}
function vd(a){return-1!=a.indexOf("&")?"document"in n?wd(a):xd(a):a}
function wd(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=n.document.createElement("div");return a.replace(yd,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=dd(d+" ",null),id(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function xd(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var yd=/&([^;\s<&]+);?/g,zd={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Ad={"'":"\\'"};function Bd(a){return null==a?"":String(a)}
function Cd(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Dd(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Ed(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Fd(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
function Gd(){return Fd()||A("iPad")||A("iPod")}
;function Hd(a){Hd[" "](a);return a}
Hd[" "]=Ga;function Id(a,b){try{return Hd(a[b]),!0}catch(c){}return!1}
function Jd(a,b){var c=Kd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ld=A("Opera"),B=ic(),Nd=A("Edge"),Od=Nd||B,Pd=A("Gecko")&&!(-1!=Pb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Qd=-1!=Pb.toLowerCase().indexOf("webkit")&&!A("Edge"),Rd=A("Macintosh"),Sd=A("Windows"),Td=A("Android"),Ud=Fd(),Vd=A("iPad"),Wd=A("iPod"),Xd=Gd();function Yd(){var a=n.document;return a?a.documentMode:void 0}
var Zd;a:{var $d="",ae=function(){var a=Pb;if(Pd)return/rv:([^\);]+)(\)|;)/.exec(a);if(Nd)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Qd)return/WebKit\/(\S+)/.exec(a);if(Ld)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ae&&($d=ae?ae[1]:"");if(B){var be=Yd();if(null!=be&&be>parseFloat($d)){Zd=String(be);break a}}Zd=$d}var ce=Zd,Kd={};function de(a){return Jd(a,function(){return 0<=Nb(ce,a)})}
function ee(a){return Number(fe)>=a}
var ge;if(n.document&&B){var he=Yd();ge=he?he:parseInt(ce,10)||void 0}else ge=void 0;var fe=ge;var ie=jc(),je=Fd()||A("iPod"),ke=A("iPad"),le=mc(),me=lc(),ne=kc()&&!Gd();var oe={},pe=null;function qe(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var re=qe("loadCastFramework")||qe("loadCastApplicationFramework");function se(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var te=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function ue(a){a.length?Ae(a.shift(),function(){ue(a)}):Be()}
function Ce(a){return"chrome-extension://"+a+"/cast_sender.js"}
function Ae(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Be(){var a=se();a&&a(!1,"No cast extension found")}
function De(){if(re){var a=2,b=se(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Ae("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Be,c)}}
function Ee(){De();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);ue(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
;var Fe=document,Ge=window;var He={};function Ie(a){this.f=a||{cookie:""}}
h=Ie.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.sj;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.Gc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Db(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Gc:0,path:b,domain:c});return d};
h.Aa=function(){return Je(this).keys};
h.qa=function(){return Je(this).values};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=Je(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Je(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ke=new Ie("undefined"==typeof document?null:document);function Le(a){var b=r("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Me[b]?b=Me[b]:(b=String(b),Me[b]||(c=/function\s+([^\(]+)/m.exec(b),Me[b]=c?c[1]:"[Anonymous]"),b=Me[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Me={};function Ne(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}
;var Oe=!B||ee(9),Pe=!Pd&&!B||B&&ee(9)||Pd&&de("1.9.1"),Qe=B&&!de("9"),Re=B||Ld||Qd;function Se(a,b,c){return a+c*(b-a)}
;function Te(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
h=Te.prototype;h.clone=function(){return new Te(this.x,this.y)};
h.equals=function(a){return a instanceof Te&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ue(a,b){return new Te(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ve(a,b){this.width=a;this.height=b}
h=Ve.prototype;h.clone=function(){return new Ve(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function We(a){return a?new Xe(Ye(a)):Xa||(Xa=new Xe)}
function D(a){return Ze(document,a)}
function Ze(a,b){return"string"===typeof b?a.getElementById(b):b}
function $e(a){return Ze(document,a)}
function af(a,b,c){return bf(document,a,b,c)}
function cf(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):bf(document,"*",a,b)}
function E(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=df("*",a,b);return d||null}
function bf(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&jb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function df(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):bf(d,a,b,c)[0]||null}
function ef(a,b){Sb(b,function(c,d){c&&"object"==typeof c&&c.Ia&&(c=c.oa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ff.hasOwnProperty(d)?a.setAttribute(ff[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ff={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function gf(a){a=a.document;a=hf(a)?a.documentElement:a.body;return new Ve(a.clientWidth,a.clientHeight)}
function jf(a){var b=kf(a);a=lf(a);return B&&de("10")&&a.pageYOffset!=b.scrollTop?new Te(b.scrollLeft,b.scrollTop):new Te(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function kf(a){return a.scrollingElement?a.scrollingElement:!Qd&&hf(a)?a.documentElement:a.body||a.documentElement}
function lf(a){return a.parentWindow||a.defaultView}
function mf(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Oe&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ud(g.name),'"');if(g.type){f.push(' type="',ud(g.type),'"');var k={};gc(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=nf(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):ef(f,g));2<d.length&&of(e,f,d,2);return f}
function of(a,b,c,d){function e(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(;d<c.length;d++){var f=c[d];!Ka(f)||Na(f)&&0<f.nodeType?e(f):z(pf(f)?pb(f):f,e)}}
function qf(a){return nf(document,a)}
function nf(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function rf(a){var b=document,c=nf(b,"DIV");B?(a=cd(gd,a),id(c,a),c.removeChild(c.firstChild)):id(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function hf(a){return"CSS1Compat"==a.compatMode}
function xf(a,b){of(Ye(a),a,arguments,1)}
function yf(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function zf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Af(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function Bf(a){return Pe&&void 0!=a.children?a.children:bb(a.childNodes,function(b){return 1==b.nodeType})}
function Cf(a){return void 0!==a.firstElementChild?a.firstElementChild:Df(a.firstChild,!0)}
function Df(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Ef(a){return Na(a)&&1==a.nodeType}
function Ff(a){var b;if(Re&&!(B&&de("9")&&!de("10")&&n.SVGElement&&a instanceof n.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Ef(b)?b:null}
function Gf(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ye(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Hf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else yf(a),a.appendChild(Ye(a).createTextNode(String(b)))}
function If(a,b){var c=[];return Jf(a,b,c,!0)?c[0]:void 0}
function Jf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Jf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Kf={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Lf={IMG:" ",BR:"\n"};function Mf(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Nf(a)||Of(a)):Nf(a)&&Of(a))&&B){var c;!Ma(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Nf(a){return B&&!de("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Of(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Pf(a){if(Qe&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Qf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Qe||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Qf(a,b,c){if(!(a.nodeName in Kf))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Lf)b.push(Lf[a.nodeName]);else for(a=a.firstChild;a;)Qf(a,b,c),a=a.nextSibling}
function pf(a){if(a&&"number"==typeof a.length){if(Na(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ma(a))return"function"==typeof a.item}return!1}
function Rf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Sf(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&jb(f.className.split(/\s+/),c))},!0,d)}
function F(a,b){return Rf(a,null,b,void 0)}
function Sf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Xe(a){this.f=a||n.document||document}
h=Xe.prototype;h.uc=function(){return Ze(this.f,void 0)};
h.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
h.createElement=function(a){return nf(this.f,a)};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=Ef;function Tf(a){Uf();return dd(a,null)}
function Vf(a){Uf();return new wc(xc,a)}
var Uf=Ga;var Wf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xf(a){return a.match(Wf)}
function Yf(a){return a?decodeURI(a):a}
function Zf(a){return Yf(Xf(a)[3]||null)}
function $f(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?td(f):"")}}
function ag(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function bg(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+sd(b)))}
function cg(a,b){for(var c=[],d=b||0;d<a.length;d+=2)bg(a[d],a[d+1],c);return c.join("&")}
function dg(a){var b=[],c;for(c in a)bg(c,a[c],b);return b.join("&")}
function eg(a,b){var c=2==arguments.length?cg(arguments[1],0):cg(arguments,1);return ag(a,c)}
function fg(a,b){var c=dg(b);return ag(a,c)}
function gg(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var hg=/#|$/;function ig(a,b){var c=a.search(hg),d=gg(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return td(a.substr(d,e-d))}
var jg=/[?&]($|#)/;function kg(a){for(var b=lg(),c=a.search(hg),d=0,e,f=[];0<=(e=gg(a,d,"lact",c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));a=f.join("").replace(jg,"$1");b=null!=b?"="+sd(b):"";return ag(a,"lact"+b)}
;function mg(a){try{return!!a&&null!=a.location.href&&Id(a,"foo")}catch(b){return!1}}
function ng(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function og(a){var b=[];ng(a,function(c){b.push(c)});
return b}
var pg={Fh:"allow-forms",Gh:"allow-modals",Hh:"allow-orientation-lock",Ih:"allow-pointer-lock",Jh:"allow-popups",Kh:"allow-popups-to-escape-sandbox",Lh:"allow-presentation",Mh:"allow-same-origin",Nh:"allow-scripts",Oh:"allow-top-navigation",Ph:"allow-top-navigation-by-user-activation"},qg=zb(function(){return og(pg)});
function rg(){var a=qf("IFRAME"),b={};z(qg(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function sg(){var a=tg(Ge),b=ug();this.i=a;this.pubWin=b;this.f=(this.iframeWin=Ge)||{};this.l=-1;this.A=!1;this.C="";this.w=this.g=0;this.j=this.D=this.F=""}
;function vg(){this.f=function(a){return void 0===a?!1:a};
this.g=function(a){return void 0===a?0:a}}
Ha(vg);function wg(){var a=void 0===a?!1:a;return vg.getInstance().f(a)}
function xg(){var a=void 0===a?0:a;return vg.getInstance().g(a)}
;function yg(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=yg.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new yg(this.top,this.right,this.bottom,this.left)};
function zg(a,b){return a&&b?b instanceof yg?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function Ag(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Bg(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Bg.prototype.clone=function(){return new Bg(this.left,this.top,this.width,this.height)};
Bg.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Bg.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Bg.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Cg={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"};function Dg(a){a=void 0===a?n:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(c){}try{if(b&&b.pageViewId&&b.canonicalUrl)return b}catch(c){}return null}
;function Eg(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(e){b&&b(e);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};
Ne(c,"load",d);Ne(c,"error",d)}c.src=a;n.google_image_requests.push(c)}
;function Fg(){return Qd?"Webkit":Pd?"Moz":B?"ms":Ld?"O":null}
function Gg(){return Qd?"-webkit":Pd?"-moz":B?"-ms":Ld?"-o":null}
;function Hg(a,b,c){if("string"===typeof b)(b=Ig(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ig(c,d);f&&(c.style[f]=e)}}
var Jg={};function Ig(a,b){var c=Jg[b];if(!c){var d=Dd(b);c=d;void 0===a.style[d]&&(d=Fg()+Ed(d),void 0!==a.style[d]&&(c=d));Jg[b]=c}return c}
function Kg(a,b){var c=Ye(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Lg(a,b){return Kg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Mg(a){return Lg(a,"position")}
function Ng(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Og(a){if(B&&!ee(8))return a.offsetParent;var b=Ye(a),c=Lg(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Lg(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Pg(a){for(var b=new yg(0,Infinity,Infinity,0),c=We(a),d=c.f.body,e=c.f.documentElement,f=kf(c.f);a=Og(a);)if(!(B&&0==a.clientWidth||Qd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Lg(a,"overflow")){var g=Qg(a),k=new Te(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=gf(lf(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Qg(a){var b=Ye(a),c=new Te(0,0);var d=b?Ye(b):document;d=!B||ee(9)||hf(We(d).f)?d.documentElement:d.body;if(a==d)return c;a=Ng(a);b=jf(We(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Rg(a){return Qg(a).x}
function Sg(a){a=Ng(a);return new Te(a.left,a.top)}
function Tg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Ug(a){var b=Vg;if("none"!=Lg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Vg(a){var b=a.offsetWidth,c=a.offsetHeight,d=Qd&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Ng(a),new Ve(a.right-a.left,a.bottom-a.top)):new Ve(b,c)}
function Wg(a){var b=Qg(a);a=Ug(a);return new Bg(b.x,b.y,a.width,a.height)}
function Xg(a){return"rtl"==Lg(a,"direction")}
function Yg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Zg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Yg(a,c):0}
var $g={thin:2,medium:4,thick:6};function ah(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in $g?$g[c]:Yg(a,c)}
;function bh(a,b){return typeof a===b}
function ch(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function dh(a){return!(!a||!a.call)&&bh(a,"function")}
function eh(a,b){if(a.filter)return a.filter(b,void 0);for(var c=[],d=0;d<a.length;d++)b.call(void 0,a[d],d,a)&&c.push(a[d]);return c}
function fh(a,b){var c=b.slice(-1),d="?"===c||"#"===c?"":"&",e=[b];ch(a,function(f,g){if(f||0===f||!1===f)bh(f,"boolean")&&(f=f?1:0),e.push(d),e.push(g),e.push("="),e.push(encodeURIComponent(String(f))),d="&"});
return e.join("")}
function gh(){var a=void 0===a?Ge:a;try{return a.history.length}catch(b){return 0}}
function wh(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=gh();a.u_java=!!Ge.navigator&&!bh(Ge.navigator.javaEnabled,"unknown")&&!!Ge.navigator.javaEnabled&&Ge.navigator.javaEnabled();Ge.screen&&(a.u_h=Ge.screen.height,a.u_w=Ge.screen.width,a.u_ah=Ge.screen.availHeight,a.u_aw=Ge.screen.availWidth,a.u_cd=Ge.screen.colorDepth);Ge.navigator&&Ge.navigator.plugins&&(a.u_nplug=Ge.navigator.plugins.length);Ge.navigator&&Ge.navigator.mimeTypes&&(a.u_nmime=Ge.navigator.mimeTypes.length)}
var xh=!!window.google_async_iframe_id,yh=xh&&window.parent||window;function ug(){if(xh&&!mg(yh)){var a="."+Fe.domain;try{for(;2<a.split(".").length&&!mg(yh);)Fe.domain=a=a.substr(a.indexOf(".")+1),yh=window.parent}catch(b){}mg(yh)||(yh=window)}return yh}
function zh(){var a,b=window.ActiveXObject;if(navigator.plugins&&navigator.mimeTypes.length){if((a=navigator.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else{if(navigator.userAgent&&0<=navigator.userAgent.indexOf("Windows CE")){var c=3;for(a=1;a;)try{a=new b("ShockwaveFlash.ShockwaveFlash."+(c+1)),c++}catch(d){a=null}return c.toString()}if(ic()){a=null;try{a=new b("ShockwaveFlash.ShockwaveFlash.7")}catch(d){c=0;try{a=new b("ShockwaveFlash.ShockwaveFlash.6"),
c=6,a.AllowScriptAccess="always"}catch(e){if(6===c)return c.toString()}try{a=new b("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(a)return c=a.GetVariable("$version").split(" ")[1],c.replace(/,/g,".")}}return"0"}
function tg(a){a=a.top;return mg(a)?a:null}
;var G={},Ah=(G.google_ad_channel="channel",G.google_ad_type="ad_type",G.google_ad_format="format",G.google_color_bg="color_bg",G.google_color_border="color_border",G.google_color_link="color_link",G.google_color_text="color_text",G.google_color_url="color_url",G.google_page_url="url",G.google_allow_expandable_ads="ea",G.google_ad_section="region",G.google_cpm="cpm",G.google_encoding="oe",G.google_safe="adsafe",G.google_flash_version="flash",G.google_font_face="f",G.google_font_size="fs",G.google_hints=
"hints",G.google_ad_host="host",G.google_ad_host_channel="h_ch",G.google_ad_host_tier_id="ht_id",G.google_kw_type="kw_type",G.google_kw="kw",G.google_contents="contents",G.google_targeting="targeting",G.google_adtest="adtest",G.google_alternate_color="alt_color",G.google_alternate_ad_url="alternate_ad_url",G.google_cust_age="cust_age",G.google_cust_ch="cust_ch",G.google_cust_gender="cust_gender",G.google_cust_interests="cust_interests",G.google_cust_job="cust_job",G.google_cust_l="cust_l",G.google_cust_lh=
"cust_lh",G.google_cust_u_url="cust_u_url",G.google_cust_id="cust_id",G.google_language="hl",G.google_city="gcs",G.google_country="gl",G.google_region="gr",G.google_content_recommendation_ad_positions="ad_pos",G.google_content_recommendation_columns_num="cr_col",G.google_content_recommendation_rows_num="cr_row",G.google_content_recommendation_ui_type="crui",G.google_content_recommendation_use_square_imgs="cr_sq_img",G.google_color_line="color_line",G.google_disable_video_autoplay="disable_video_autoplay",
G.google_full_width_responsive_allowed="fwr",G.google_full_width_responsive="fwrattr",G.efwr="efwr",G.google_pgb_reactive="pra",G.google_resizing_allowed="rs",G.google_resizing_height="rh",G.google_resizing_width="rw",G.rpe="rpe",G.google_responsive_formats="resp_fmts",G.google_safe_for_responsive_override="sfro",G.google_video_doc_id="video_doc_id",G.google_video_product_type="video_product_type",G.google_webgl_support="wgl",G.google_refresh_count="rc",G),H={},Bh=(H.google_ad_block="ad_block",H.google_ad_client=
"client",H.google_ad_output="output",H.google_ad_callback="callback",H.google_ad_height="h",H.google_ad_resize="twa",H.google_ad_slot="slotname",H.google_ad_unit_key="adk",H.google_ad_dom_fingerprint="adf",H.google_ad_width="w",H.google_captcha_token="captok",H.google_content_recommendation_columns_num="cr_col",H.google_content_recommendation_rows_num="cr_row",H.google_ctr_threshold="ctr_t",H.google_cust_criteria="cust_params",H.gfwrnwer="fwrn",H.gfwrnher="fwrnh",H.google_bfa="bfa",H.ebfa="ebfa",
H.ebfaca="ebfaca",H.google_image_size="image_size",H.google_last_modified_time="lmt",H.google_loeid="loeid",H.google_max_num_ads="num_ads",H.google_max_radlink_len="max_radlink_len",H.google_mtl="mtl",H.google_native_settings_key="nsk",H.google_enable_content_recommendations="ecr",H.google_num_radlinks="num_radlinks",H.google_num_radlinks_per_unit="num_radlinks_per_unit",H.google_pucrd="pucrd",H.google_reactive_plaf="plaf",H.google_reactive_plat="plat",H.google_reactive_fba="fba",H.google_reactive_sra_channels=
"plach",H.google_responsive_auto_format="rafmt",H.armr="armr",H.google_rl_dest_url="rl_dest_url",H.google_rl_filtering="rl_filtering",H.google_rl_mode="rl_mode",H.google_rt="rt",H.google_source_type="src_type",H.google_restrict_data_processing="rdp",H.google_tag_for_child_directed_treatment="tfcd",H.google_tag_for_under_age_of_consent="tfua",H.google_tag_origin="to",H.google_ad_semantic_area="sem",H.google_tfs="tfs",H.google_package="pwprc",H.google_tag_partner="tp",H.fra="fpla",H.google_ml_rank=
"mlr",H.google_apsail="psa",H),Ch={},Dh=(Ch.google_core_dbp="dbp",Ch.google_lact="lact",Ch.google_only_pyv_ads="pyv",Ch.google_scs="scs",Ch.google_video_url_to_fetch="durl",Ch.google_yt_pt="yt_pt",Ch.google_yt_up="yt_up",Ch);function Eh(a){var b=a.f;null==b.google_ad_output&&(b.google_ad_output="html");if(null!=b.google_ad_client){var c;(c=String(b.google_ad_client))?(c=c.toLowerCase())&&"ca-"!=c.substring(0,3)&&(c="ca-"+c):c="";b.google_ad_client=c}null!=b.google_ad_slot&&(b.google_ad_slot=String(b.google_ad_slot));if(null==b.google_flash_version){try{var d=zh()}catch(e){d="0"}b.google_flash_version=d}b.google_webgl_support=!!Ge.WebGLRenderingContext;b.google_ad_section=b.google_ad_section||b.google_ad_region||"";b.google_country=
b.google_country||b.google_gl||"";d=(new Date).getTime();Ja(b.google_color_bg)&&(b.google_color_bg=Fh(a,b.google_color_bg,d));Ja(b.google_color_text)&&(b.google_color_text=Fh(a,b.google_color_text,d));Ja(b.google_color_link)&&(b.google_color_link=Fh(a,b.google_color_link,d));Ja(b.google_color_url)&&(b.google_color_url=Fh(a,b.google_color_url,d));Ja(b.google_color_border)&&(b.google_color_border=Fh(a,b.google_color_border,d));Ja(b.google_color_line)&&(b.google_color_line=Fh(a,b.google_color_line,d))}
function Gh(){var a=window;ch(Ah,function(b,c){a[c]=null});
ch(Bh,function(b,c){a[c]=null});
ch(Dh,function(b,c){a[c]=null});
a.google_container_id=null;a.google_eids=null;a.google_page_location=null;a.google_referrer_url=null;a.google_enable_single_iframe=null;a.google_ad_region=null;a.google_gl=null;a.google_loader_used=null;a.google_loader_features_used=null;a.google_debug_params=null}
function Fh(a,b,c){a.g|=2;return b[c%b.length]}
;function Hh(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}
;var Ih=[/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,/^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,/^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];function Jh(a){return eb(Ih,function(b){return b.test(a)})}
function Kh(a){if(a=/[-\w]+\.[-\w]+$/.exec(a))switch(Cd(a[0].toLowerCase())){case 1967261364:return 0;case 3147493546:return 1;case 1567346461:return 2;case 2183041838:return 3;case 763236279:return 4;case 1342279801:return 5;case 526831769:return 6;case 352806002:return 7;case 2755048925:return 8;case 3306848407:return 9;case 2207000920:return 10;case 484037040:return 11;case 3506871055:return 12;case 672143848:return 13;case 2528751226:return 14;case 2744854768:return 15;case 3703278665:return 16;
case 2014749173:return 17;case 133063824:return 18;case 2749334602:return 19;case 3131239845:return 20;case 2074086763:return 21;case 795772493:return 22;case 290857819:return 23;case 3035947606:return 24;case 2983138003:return 25;case 2197138676:return 26;case 4216016165:return 27;case 239803524:return 28;case 975993579:return 29;case 1794940339:return 30;case 1314429186:return 31;case 1643618937:return 32;case 497159982:return 33;case 3882239661:return 34}return-1}
function Lh(a){if(!a.length)return 0;for(var b=[],c=0;34>=c;c++)b[c]=0;for(c=a.length-1;0<=c;c--){var d=Kh(a[c]);0<=d&&(b[34-d]=1)}return parseInt(b.join(""),2)}
;var Mh=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Nh(a){a=(this.g=a||n)||n;this.i=a.top==a?1:mg(a.top)?2:3;3!=this.i&&(this.lastModifiedTime=Date.parse(n.top.document.lastModified)/1E3);this.f=Oh(this.g)}
function Ph(a){for(var b=[],c=Math.min(a.f.length,27),d=1;d<c;d++)a.f[d]&&a.f[d].url&&(b[d-1]=a.f[d].url);return Qh(a,b.reverse())}
function Rh(a){var b=a.g.document&&a.g.document.scripts?a.g.document.scripts:[];if(!b)return 0;for(var c=[],d=b.length-1;0<=d&&26>c.length;)b[d].src&&c.unshift(b[d].src),d--;return Qh(a,c)}
function Qh(a,b){for(var c,d=0,e=(c=a.f[Math.max(a.f.length-1,0)].url||null)&&Zf(c),f=Math.min(b.length,26),g=0;g<f;g++)c=null!=b[g]&&Zf(b[g])||"",d*=4,c&&(e&&c==e?d+=3:Jh(b[g])?d+=2:c&&0<=Kh(c)&&(d+=1));return d}
function Sh(a){a=a.f;for(var b=[],c=a.length-1;0<c;c--){var d=a[c];d&&null!=d.url&&b.push(Zf(d.url))}return Lh(b)}
function Th(a){a=a.g.document&&a.g.document.scripts?a.g.document.scripts:[];if(!a)return 0;for(var b=[],c=a.length-1;0<=c;c--){var d=a[c];d&&null!=d.src&&b.push(Zf(d.src))}return Lh(b)}
function Oh(a){var b=a||n,c=[],d=null;do{var e=b;if(mg(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Uh(f||"",e));try{b=e.parent}catch(g){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.zd=!0);return c}
function Vh(a,b){this.f=a;this.g=b}
function Uh(a,b,c){this.url=a;this.qb=b;this.zd=!!c;this.depth=null}
;function Wh(){this.i="&";this.j=!1;this.g={};this.l=0;this.f=[]}
function Xh(a,b){var c={};c[a]=b;return[c]}
function Yh(a,b,c,d,e){var f=[];ng(a,function(g,k){var l=Zh(g,b,c,d,e);l&&f.push(k+"="+l)});
return f.join(b)}
function Zh(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Zh(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Yh(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
function $h(a,b,c,d){a.f.push(b);a.g[b]=Xh(c,d)}
function ai(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=bi(a)-c.length;if(0>d)return"";a.f.sort(function(q,u){return q-u});
c=null;for(var e="",f=0;f<a.f.length;f++)for(var g=a.f[f],k=a.g[g],l=0;l<k.length;l++){if(!d){c=null==c?g:c;break}var m=Yh(k[l],a.i,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.i;break}a.j&&(e=d,m[e-1]==a.i&&--e,b+=m.substr(0,e),e=a.i,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a+""}
function bi(a){var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
;function ci(){var a=void 0===a?Ge:a;this.g="http:"===a.location.protocol?"http:":"https:";this.f=Math.random()}
function di(){var a=ei,b=fi.google_srt;0<=b&&1>=b&&(a.f=b)}
function gi(a,b,c,d,e,f){if((d?a.f:Math.random())<(e||.01))try{if(c instanceof Wh)var g=c;else g=new Wh,ng(c,function(l,m){var q=g,u=q.l++,v=Xh(m,l);q.f.push(u);q.g[u]=v});
var k=ai(g,a.g,"/pagead/gen_204?id="+b+"&");k&&("undefined"===typeof f?Eg(k,null):Eg(k,void 0===f?null:f))}catch(l){}}
;var hi=null;function ii(a){this.g={};this.f={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.f[a[b]]=""}
function ji(){var a=ki(),b=new ii;ng(a.g,function(c,d){b.g[d]=c});
ng(a.f,function(c,d){b.f[d]=c});
return b}
function li(a){var b=mi();return b.f.hasOwnProperty(a)?b.f[a]:""}
function ni(a){var b=[];ng(a.g,function(c,d){b.push(d)});
ng(a.f,function(c){""!=c&&b.push(c)});
return b}
;function oi(){var a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):x()}
function pi(){var a=void 0===a?n:a;return(a=a.performance)&&a.now?a.now():null}
;function qi(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}
;var ri=n.performance,si=!!(ri&&ri.mark&&ri.measure&&ri.clearMarks),ti=zb(function(){var a;if(a=si){var b;if(null===hi){hi="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(hi=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=hi;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function ui(){var a=fi;this.events=[];this.g=a||n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.f=ti()||(null!=b?b:1>Math.random())}
ui.prototype.disable=function(){this.f=!1;this.events!=this.g.google_js_reporting_queue&&(ti()&&z(this.events,vi),this.events.length=0)};
function vi(a){a&&ri&&ti()&&(ri.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),ri.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
ui.prototype.start=function(a,b){if(!this.f)return null;var c=pi()||oi();c=new qi(a,b,c);var d="goog_"+c.label+"_"+c.uniqueId+"_start";ri&&ti()&&ri.mark(d);return c};
ui.prototype.end=function(a){if(this.f&&"number"===typeof a.value){var b=pi()||oi();a.duration=b-a.value;b="goog_"+a.label+"_"+a.uniqueId+"_end";ri&&ti()&&ri.mark(b);!this.f||2048<this.events.length||this.events.push(a)}};function wi(){var a=xi;this.l=ei;this.g=null;this.w=this.j;this.f=void 0===a?null:a;this.i=!1}
function yi(a,b,c){try{if(a.f&&a.f.f){var d=a.f.start(b.toString(),3);var e=c();a.f.end(d)}else e=c()}catch(g){c=!0;try{vi(d);var f=new Hh(g,{message:zi(g)});c=a.w(b,f,void 0,void 0)}catch(k){a.j(217,k)}if(!c)throw g;}return e}
function Ai(a,b){var c=Bi;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return yi(c,a,function(){return b.apply(void 0,e)})}}
wi.prototype.j=function(a,b,c,d,e){e=e||"jserror";try{var f=new Wh;f.j=!0;$h(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Hh(b,{message:zi(b)}));b.msg&&$h(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(this.g)try{this.g(g)}catch(w){}if(d)try{d(g)}catch(w){}b=[g];f.f.push(3);f.g[3]=b;var k=Oh(),l=new Uh(n.location.href,n,!1);b=null;var m=k.length-1;for(d=m;0<=d;--d){var q=k[d];!b&&Mh.test(q.url)&&(b=q);if(q.url&&!q.zd){l=q;break}}q=null;var u=k.length&&k[m].url;0!=l.depth&&u&&(q=k[m]);var v=
new Vh(l,q);v.g&&$h(f,4,"top",v.g.url||"");$h(f,5,"url",v.f.url||"");gi(this.l,e,f,this.i,c)}catch(w){try{gi(this.l,e,{context:"ecmserr",rctx:a,msg:zi(w),url:v&&v.f.url},this.i,c)}catch(N){}}return!0};
function zi(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
;var ei,Bi,Ci,fi=ug(),xi=new ui;
(function(){ei=new ci;"number"!==typeof fi.google_srt&&(fi.google_srt=Math.random());di();Bi=new wi;Bi.g=function(b){var c=Ge.jerExpIds;if(Ja(c)&&0!==c.length){var d=b.eid;if(d){c=[].concat(ca(d.split(",")),ca(c));d={};for(var e=0,f=0;f<c.length;){var g=c[f++];var k=g;k=Na(k)?"o"+Oa(k):(typeof k).charAt(0)+k;Object.prototype.hasOwnProperty.call(d,k)||(d[k]=!0,c[e++]=g)}c.length=e;b.eid=c.join(",")}else b.eid=c.join(",")}Ci&&(b.jc=Ci);(c=Ge.jerUserAgent)&&(b.useragent=c)};
Bi.i=!0;"complete"==fi.document.readyState?fi.google_measure_js_timing||xi.disable():xi.f&&Ne(fi,"load",function(){fi.google_measure_js_timing||xi.disable()});
var a=Fe.currentScript;Ci=a?a.dataset.jc:""})();
function Di(a,b){return Ai(a,b)}
;var Ei={Ki:0,fi:1,gi:2,li:8,Ui:9,Si:16,ai:17,Zh:24,Bi:25,Sh:26,Qh:27,Je:30,ti:32,xi:40};function Fi(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledInAsfe={};this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.tagSpecificState={};this.improveCollisionDetection=1;this.messageValidationEnabled=!1;this.floatingAdsStacking=new Gi}
function Hi(a){a.google_reactive_ads_global_state?null==a.google_reactive_ads_global_state.floatingAdsStacking&&(a.google_reactive_ads_global_state.floatingAdsStacking=new Gi):a.google_reactive_ads_global_state=new Fi;return a.google_reactive_ads_global_state}
function Gi(){this.maxZIndexRestrictions={};this.nextRestrictionId=0;this.maxZIndexListeners=[]}
;var Ii=728*1.38;function Ji(a){return a!=a.top?512:0}
function Ki(a,b){var c=Li(a).clientWidth;return c?c>(void 0===b?420:b)?32768:320>c?65536:0:16384}
function Mi(a){var b=Li(a).clientWidth;a=a.innerWidth;return(b=b&&a?b/a:0)?1.05<b?262144:.95>b?524288:0:131072}
function Li(a){a=a.document;var b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}}
function Ni(a,b){if(!a.adCount)return!1;if(1==b||2==b)return!(!a.adCount[1]&&!a.adCount[2]);var c=a.adCount[b];return c&&27!=b&&26!=b?1<=c:!1}
;function Oi(){this.F=this.F;this.D=this.D}
Oi.prototype.F=!1;Oi.prototype.O=function(){return this.F};
Oi.prototype.dispose=function(){this.F||(this.F=!0,this.K())};
function Pi(a,b){a.F?b():(a.D||(a.D=[]),a.D.push(b))}
Oi.prototype.K=function(){if(this.D)for(;this.D.length;)this.D.shift()()};
function Qi(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Ri=null;function Si(a,b){for(var c=0,d=a,e=0;a&&a!=a.parent;)if(a=a.parent,e++,mg(a))d=a,c=e;else if(b)break;return{qb:d,level:c}}
function Ti(){Ri||(Ri=Si(n,!0).qb);return Ri}
;function Ui(a){ii.call(this,a);this.dfltBktExt=this.g;this.lrsExt=this.f}
ma(Ui,ii);function Vi(){this.S={}}
function Wi(){if(Xi)return Xi;var a=Yi(),b=a.google_persistent_state_async;return null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?Xi=b:a.google_persistent_state_async=Xi=new Vi}
function Zi(a,b,c){b=$i[b]||"google_ps_"+b;a=a.S;var d=a[b];return void 0===d?a[b]=c:d}
function Yi(){var a=Dg();return(a?mg(a.master)?a.master:null:null)||ug()}
var Xi=null,aj={},$i=(aj[8]="google_prev_ad_formats_by_region",aj[9]="google_prev_ad_slotnames_by_region",aj);var bj=navigator;function cj(){try{return bj.javaEnabled()}catch(a){return!1}}
function dj(a){var b=1,c;if(void 0!=a&&""!=a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b}
function ej(a,b){if(!a||"none"==a)return 1;a=String(a);"auto"==a&&(a=b,"www."==a.substring(0,4)&&(a=a.substring(4,a.length)));return dj(a.toLowerCase())}
var fj=/^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,gj=/^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,hj=/^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;Qd&&qf("IFRAME");var ij={Th:"google_ads_preview",ci:"google_mc_lab",ii:"google_anchor_debug",hi:"google_bottom_anchor_debug",INTERSTITIAL:"google_ia_debug",ri:"google_scr_debug",wi:"google_ia_debug_allow_onclick",Hi:"googleads",Je:"google_pedestal_debug",Oi:"google_resize_debug",Vi:"google_shoppable_images_debug",Wi:"google_shoppable_images_cookie",Xi:"google_shoppable_images_forced",Pi:"google_responsive_slot_debug",Ri:"google_responsive_slot_preview",Qi:"google_responsive_dummy_ad"},jj={},kj=(jj.google_bottom_anchor_debug=
1,jj.google_anchor_debug=2,jj.google_ia_debug=8,jj.google_resize_debug=16,jj.google_scr_debug=9,jj.googleads=2,jj.google_pedestal_debug=30,jj);function lj(a,b){if(!a)return!1;var c=a.hash;if(!c||!c.indexOf)return!1;if(-1!=c.indexOf(b))return!0;var d=mj(b);return"go"!=d&&-1!=c.indexOf(d)?!0:!1}
function mj(a){var b="";ch(a.split("_"),function(c){b+=c.substr(0,2)});
return b}
;function nj(a,b){try{return(void 0===b?0:b)?(new Ve(a.innerWidth,a.innerHeight)).round():gf(a||window).round()}catch(c){return new Ve(-12245933,-12245933)}}
;function oj(a,b){var c;if("relative"===a)return b;c||(c="https");n.location&&"https:"==n.location.protocol&&"http"==c&&(c="https");return[c,"://",a,b].join("")}
;function pj(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0}
;function qj(a,b){ch(a,function(c,d){b[d]=c})}
function rj(a){var b=a.location.href;if(a==a.top)return{url:b,Ec:!0};var c=!1,d=a.document;d&&d.referrer&&(b=d.referrer,a.parent==a.top&&(c=!0));(a=a.location.ancestorOrigins)&&(a=a[a.length-1])&&-1==b.indexOf(a)&&(c=!1,b=a);return{url:b,Ec:c}}
function sj(){var a=ug();if(a==a.top)return 0;for(;a&&a!=a.top&&mg(a);a=a.parent){if(a.sf_)return 2;if(a.$sf)return 3;if(a.inGptIF)return 4;if(a.inDapIF)return 5}return 1}
;var tj={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1},uj=/(corp|borg)\.google\.com:\d+$/;function vj(a){a=a.google_reactive_ad_format;return Wb(Ei,a)?""+a:null}
function wj(a){return!!vj(a)||null!=a.google_pgb_reactive}
;var xj={13:"<<<LATENCY_REPORTING_FRACTION:j>>>",22:"<<<JS_RNG_EXP_FRACTION:j>>>",24:"<<<ENABLE_CMS_DETECTION_EXP_FRACTION:j>>>",28:"<<<OSD_ACTIVEVIEW_MEASURABLE_FRACTION:j>>>",29:"<<<PAGE_LATENCY_REPORTING_FRACTION:j>>>",60:"<<<REAL_USER_MONITORING_FRACTION:j>>>",66:"<<<REAL_USER_MONITORING_WITH_FLAGS_FRACTION:j>>>",79:"<<<CONTENT_RECOMMENDATION_PEDESTAL_MAX_WIDTH:j>>>",82:"<<<VIEW_OPTIMIZED_MOBILE_SCALING_FACTOR:j>>>",98:"<<<FULL_WIDTH_RESPONSIVE_ELIGIBILITY_FRACTION:j>>>",118:"<<<DISABLE_LAZY_LOAD:j>>>",
126:"<<<ACTIVE_VIEW_MEASUREMENT_STRATEGY_VERIFICATION_FRACTION:j>>>",128:"<<<SHOULD_USE_IAB_CMPS:j>>>",129:"<<<USE_IAB_CMPS_EXP_FRACTION:j>>>",136:"<<<FULL_WIDTH_MANUAL_RESPONSIVE_DISABLED_FRACTION:j>>>",137:"<<<RUM_SCROLL_METRICS_FRACTION:j>>>",149:"<<<AUTO_PAGE_LEVEL_TAG_LAB_MOD_LOWER:j>>>",150:"<<<AUTO_PAGE_LEVEL_TAG_LAB_MOD_WIDTH:j>>>",155:"<<<IMPROVE_COLLISION_DETECTION_HOLDBACK_FRACTION:j>>>",160:"<<<BIG_FORMAT_AD_MOD_LOWER:j>>>",161:"<<<BIG_FORMAT_AD_MOD_WIDTH:j>>>",177:"<<<PAGE_HEIGHT_LOGGING_FRACTION:j>>>",
179:"<<<AUTO_REACTIVE_REQUEST_MOD_LOWER:j>>>",180:"<<<AUTO_REACTIVE_REQUEST_MOD_WIDTH:j>>>"};var yj=null;function zj(){this.f=xj}
;var Aj=!B&&!kc();function ak(a,b){if(/-[a-z]/.test(b))return null;if(Aj&&a.dataset){if(mc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function bk(a){try{if(!a.localStorage)return!1;a.localStorage.setItem("__storage_test__","__storage_test__");var b=a.localStorage.getItem("__storage_test__");a.localStorage.removeItem("__storage_test__");return"__storage_test__"==b}catch(c){return!1}}
function ck(a){try{if(!bk(a)||!a.localStorage)return null;var b=a.localStorage.getItem("__lsv__");if(!b)return[];try{var c=JSON.parse(b)}catch(d){}return!Ja(c)||eb(c,function(d){return!Number.isInteger(d)})?(a.localStorage.removeItem("__lsv__"),[]):dk(c)}catch(d){return null}}
function dk(a){a=void 0===a?[]:a;var b=Date.now();return bb(a,function(c){return 36E5>b-c})}
function ek(a){return!!a&&1>a.length}
;var fk={},gk=(fk[16]=4,fk[27]=512,fk[26]=128,fk);
function hk(a,b,c){switch(c){case 0:return 0;case 1:case 2:var d=0;try{d|=Ji(a);var e=Math.min(a.screen.width||0,a.screen.height||0);d|=e?320>e?8192:0:2048;var f;if(f=a.navigator){var g=a.navigator.userAgent;f=/Firefox/.test(g)||/Android 2/.test(g)||/iPhone OS [34]_/.test(g)||/Windows Phone (?:OS )?[67]/.test(g)}d|=f?1048576:0}catch(u){d|=32}var k=0;try{k|=a.innerHeight>=a.innerWidth?0:8,k|=Ki(a,Ii),k|=Mi(a)}catch(u){k|=32}if(c=2==c){f=a.innerWidth;c=Hi(a).improveCollisionDetection;g=Math.round(a.innerWidth/
320*50+15);e=[];for(var l=0;3>l;l++)for(var m=0;3>m;m++)e.push({x:m/2*(f-0),y:l/2*(g-0)});a:{for(f=0;f<e.length;f++){b:{g=a;var q=e[f];l=c;m=g.document;m.elementFromPoint(q.x,q.y);b=q.x;q=q.y;m.hasOwnProperty("_goog_efp_called_")||(m._goog_efp_called_=m.elementFromPoint(b,q));if(m=m.elementFromPoint(b,q))if("fixed"==Mg(m))g=m;else{if(1==l){c:{g=g.document;for(l=m.offsetParent;l&&l!=g.body;l=l.offsetParent)if("fixed"==Mg(l)){g=l;break c}g=null}if(g)break b}g=null}else g=null}if(g){a=g;break a}}a=null}c=
null!=a}c&&!wg()&&(k|=16777216);return d|k;case 8:d=!("on"===b.google_adtest||lj(a.location,"google_ia_debug"));k=0;try{k|=Ji(a),k|=a.navigator&&/Android 2/.test(a.navigator.userAgent)?1048576:0}catch(u){k|=32}c=wg();e=0;try{e|=Ki(a,0<xg()?xg():Ii),e|=Mi(a),c||(e|=a.innerHeight>=a.innerWidth?0:8),d&&!ek(ck(a))&&(e|=134217728)}catch(u){e|=32}return k|e;case 9:d=wg()&&!("on"===b.google_adtest||lj(a.location,"google_scr_debug"));k=0;try{k|=Ji(a),k|=Mi(a),k|=Ki(a),k|=a.innerHeight>=a.innerWidth?0:8,k|=
a.navigator&&/Android 2/.test(a.navigator.userAgent)?1048576:0,d&&!ek(ck(a))&&(k|=134217728)}catch(u){k|=32}return k;case 16:return b.google_ad_resizable&&!b.google_reactive_ad_format&&a.navigator&&/iPhone|iPod|iPad|Android|BlackBerry/.test(a.navigator.userAgent)&&a.top==a?0:8388608;case 30:c=0;try{c|=Ji(a);c|=a.getComputedStyle?0:2097152;!(A("iPad")||A("Android")&&!A("Mobile")||A("Silk"))&&(A("iPod")||A("iPhone")||A("Android")||A("IEMobile"))||(c|=1048576);l=Math.floor(a.document.body.getBoundingClientRect().width);
yj||(yj=new zj);m=parseFloat(yj.f[79]);l<=(isNaN(m)?0:m)||(c|=32768);a:{k=a.document.getElementsByClassName("adsbygoogle");for(a=0;a<k.length;a++)if("autorelaxed"==ak(k[a],"adFormat")){d=!0;break a}d=!1}d&&(c|=33554432)}catch(u){c|=32}return c;case 26:d=0;try{d|=Ji(a),d|=a.getComputedStyle?0:2097152,d|=a.document.querySelectorAll&&a.document.querySelector?0:4194304,d|=Ki(a,1E4)}catch(u){d|=32}return d;case 27:d=0;try{d|=Ji(a),d|=a.getComputedStyle?0:2097152,d|=Ki(a,1E4)}catch(u){d|=32}return d;default:return 32}}
function ik(a){if(!a.hash)return null;var b=null;ch(ij,function(c){!b&&lj(a,c)&&(b=kj[c])});
return b}
function jk(a,b){if(!b)return null;var c=Hi(b),d=0;ch(Ei,function(e){var f=gk[e];f&&0===kk(a,b,e)&&(d|=f)});
c.wasPlaTagProcessed&&(d|=256);a.google_reactive_tag_first&&(d|=1024);return d?""+d:null}
function kk(a,b,c){if(!b)return 256;var d=0,e=Hi(b),f=Ni(e,c);if(a.google_reactive_ad_format==c||26!=c&&27!=c&&f)d|=64;var g=!1;ch(e.reactiveTypeDisabledByPublisher,function(k,l){String(c)===l&&(g=!0)});
g&&ik(b.location)!==c&&(d|=128);return d|hk(b,a,c)}
;var lk={ni:5,di:7,Ai:17,Uh:41,Li:62,Ei:67,Mi:82,Ni:83,Gi:87,Wh:89,bi:103,oi:106,bj:107,ki:108,Dh:124,aj:126,Eh:128,si:132,Ci:138,Fi:139},mk=null;function nk(a){try{return!!a&&Hd(!0)}catch(b){return!1}}
function ok(){if(nk(mk))return!0;var a=Wi();if(a=Zi(a,3,null)){if(a&&a.dfltBktExt&&a.lrsExt){var b=new Ui;b.g=a.dfltBktExt;b.dfltBktExt=b.g;b.f=a.lrsExt;b.lrsExt=b.f;a=b}else a=null;a||(a=new Ui,b={context:"ps::gpes::cf",url:ug().location.href},gi(ei,"jserror",b,!0,void 0,void 0))}return nk(a)?(mk=a,!0):!1}
function ki(){if(ok())return mk;var a=Wi(),b=new Ui(og(lk));return mk=a.S[$i[3]||"google_ps_3"]=b}
var pk=null;function mi(){pk||(pk=ji());return pk}
var qk={};ug();function rk(a){a=void 0===a?mi():a;return eh(ni(a),function(b){return!!qk[b]})}
function sk(a){a=void 0===a?mi():a;return eh(ni(a),function(b){return!qk[b]})}
;Hd("script");/*

 Copyright 2019 The AMP HTML Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var tk={"image-top":0,"image-middle":1,"image-side":2,"text-only":3,"in-article":4};function uk(a){this.j=[];this.g=a||window;this.f=0;this.i=null;this.l=0}
var vk;h=uk.prototype;h.Se=function(a,b){0!=this.f||0!=this.j.length||b&&b!=window?this.kd(a,b):(this.f=2,this.ge(new wk(a,window)))};
h.kd=function(a,b){this.j.push(new wk(a,b||this.g));xk(this)};
h.Ng=function(a){this.f=1;if(a){var b=Di(188,t(this.fe,this,!0));this.i=this.g.setTimeout(b,a)}};
h.fe=function(a){a&&++this.l;1==this.f&&(null!=this.i&&(this.g.clearTimeout(this.i),this.i=null),this.f=0);xk(this)};
h.eh=function(){return!(!window||!Array)};
h.cf=function(){return this.l};
function xk(a){var b=Di(189,t(a.gh,a));a.g.setTimeout(b,0)}
h.gh=function(){if(0==this.f&&this.j.length){var a=this.j.shift();this.f=2;var b=Di(190,t(this.ge,this,a));a.qb.setTimeout(b,0);xk(this)}};
h.ge=function(a){this.f=0;a.ta()};
function yk(a){try{return a.sz()}catch(b){return!1}}
uk.prototype.nq=uk.prototype.Se;uk.prototype.nqa=uk.prototype.kd;uk.prototype.al=uk.prototype.Ng;uk.prototype.rl=uk.prototype.fe;uk.prototype.sz=uk.prototype.eh;uk.prototype.tc=uk.prototype.cf;function wk(a,b){this.ta=a;this.qb=b}
;var zk=(new Date).getTime();function Ak(a,b,c){a-=b;return a>=(void 0===c?1E5:c)?"M":0<=a?a:"-M"}
;ud("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");function Bk(a){switch(a){case "":case "Test":case "Real":return!0;default:return!1}}
function Ck(a){var b=wg();this.i=a;this.g=void 0===b?!1:b;this.f=new Ie(a.document)}
Ck.prototype.read=function(){var a=this.f.get("__gads","");return this.g&&!Bk(a)?"Real":a};
Ck.prototype.write=function(a){var b=a.getValue();if(this.g){if(!Bk(this.f.get("__gads","")))return;Bk(b)||(b="Real")}this.f.set("__gads",b,{Gc:a.f()-this.i.Date.now()/1E3,path:a.i(),domain:a.g(),secure:!1})};var Dk=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ek=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,Fk=n,Gk,Hk;function Ik(){Fk=n;Gk=Fk.googleToken=Fk.googleToken||{};var a=x();Gk[1]&&Gk[3]>a&&0<Gk[2]||(Gk[1]="",Gk[2]=-1,Gk[3]=-1,Gk[4]="",Gk[6]="");Hk=Fk.googleIMState=Fk.googleIMState||{};a=Hk[1];Dk.test(a)&&!Ek.test(a)||(Hk[1]=".google.com");Ja(Hk[5])||(Hk[5]=[]);"boolean"!==typeof Hk[6]&&(Hk[6]=!1);Ja(Hk[7])||(Hk[7]=[]);"number"!==typeof Hk[8]&&(Hk[8]=0)}
;Hd("script");function Jk(a){try{var b=a.screenX;var c=a.screenY}catch(k){}try{var d=a.outerWidth;var e=a.outerHeight}catch(k){}try{var f=a.innerWidth;var g=a.innerHeight}catch(k){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,g]}
;var Kk=/^blogger$/,Lk=/^wordpress(.|\s|$)/i,Mk=/^joomla!/i,Nk=/^drupal/i,Ok=/\/wp-content\//,Pk=/\/wp-content\/plugins\/advanced-ads/,Qk=/\/wp-content\/themes\/genesis/,Rk=/\/wp-content\/plugins\/genesis/;
function Sk(a){for(var b=a.getElementsByTagName("script"),c=b.length,d=0;d<c;++d){var e=b[d];if(e.hasAttribute("src")){e=e.getAttribute("src");if(Pk.test(e))return 5;if(Rk.test(e))return 6}}b=a.getElementsByTagName("link");c=b.length;for(d=0;d<c;++d)if(e=b[d],e.hasAttribute("href")&&(e=e.getAttribute("href"),Qk.test(e)||Rk.test(e)))return 6;a=a.getElementsByTagName("meta");d=a.length;for(e=0;e<d;++e){var f=a[e];if("generator"==f.getAttribute("name")&&f.hasAttribute("content")){f=f.getAttribute("content");
if(Kk.test(f))return 1;if(Lk.test(f))return 2;if(Mk.test(f))return 3;if(Nk.test(f))return 4}}for(a=0;a<c;++a)if(d=b[a],"stylesheet"==d.getAttribute("rel")&&d.hasAttribute("href")&&(d=d.getAttribute("href"),Ok.test(d)))return 2;return 0}
;function Tk(){this.g=[];this.f=-1}
Tk.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Tk.prototype.get=function(a){return!!this.g[a]};
function Uk(a){-1==a.f&&(a.f=db(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Vk(){var a=new Tk;n.SVGElement&&n.document.createElementNS&&a.set(0);var b=rg();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);n.crypto&&n.crypto.subtle&&a.set(3);n.TextDecoder&&n.TextEncoder&&a.set(4);return Uk(a)}
;var Wk=zb(function(){if(B)return de("10.0");var a=qf("DIV"),b=Gg(),c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b=bd("div",{style:c});id(a,b);a=a.firstChild;b=a.style[Dd("transition")];return""!=("undefined"!==typeof b?b:a.style[Ig(a,"transition")]||"")});for(var Xk="margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),Yk=0;Yk<Xk.length;Yk++);Xk="margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");for(var Zk=0;Zk<Xk.length;Zk++);var $k=/[+, ]/;
function al(a){var b=a.f,c=ug().document,d={},e=ug(),f;var g=Si(ug(),!1).qb;var k=rj(g);a:{var l=ug(),m=b.google_ad_width||l.google_ad_width,q=b.google_ad_height||l.google_ad_height;if(l&&l.top==l)var u=!1;else{var v=c.documentElement;if(m&&q){var w=1,N=1;l.innerHeight?(w=l.innerWidth,N=l.innerHeight):v&&v.clientHeight?(w=v.clientWidth,N=v.clientHeight):c.body&&(w=c.body.clientWidth,N=c.body.clientHeight);if(N>2*q||w>2*m){u=!1;break a}}u=!0}}var da=f=u,fa=k.Ec,rc=ug();var La=rc.top==rc?0:mg(rc.top)?
1:2;var Ya=4;da||1!=La?da||2!=La?da&&1==La?Ya=7:da&&2==La&&(Ya=8):Ya=6:Ya=5;fa&&(Ya|=16);var ve=""+Ya;var we=sj();var Jn=g,Kn=f,Ln=!!b.google_page_url;d.google_iframing=ve;0!=we&&(d.google_iframing_environment=we);if(!Ln&&"ad.yieldmanager.com"==c.domain){for(var hh=c.URL.substring(c.URL.lastIndexOf("http"));-1<hh.indexOf("%");)try{hh=decodeURIComponent(hh)}catch(sc){break}b.google_page_url=hh;Ln=!!hh}Ln?(d.google_page_url=b.google_page_url,d.google_page_location=(Kn?c.referrer:c.URL)||"EMPTY"):(Kn&&
mg(e.top)&&c.referrer&&e.top.document.referrer===c.referrer?d.google_page_url=e.top.document.URL:d.google_page_url=Kn?c.referrer:c.URL,d.google_page_location=null);a:{if(c.URL==d.google_page_url)try{var Au=Date.parse(c.lastModified)/1E3;break a}catch(sc){}Au=null}d.google_last_modified_time=Au;if(Jn==Jn.top)var Bu=Jn.document.referrer;else{var Cu=Dg();Bu=Cu&&Cu.referrer||""}d.google_referrer_url=Bu;qj(d,b);var Bj=b.google_page_location||b.google_page_url;"EMPTY"==Bj&&(Bj=b.google_page_url);if(Bj){var tc=
Bj.toString();0==tc.indexOf("http://")?tc=tc.substring(7,tc.length):0==tc.indexOf("https://")&&(tc=tc.substring(8,tc.length));var Mn=tc.indexOf("/");-1==Mn&&(Mn=tc.length);var Du=tc.substring(0,Mn);if(uj.test(Du))var Nn=!1;else{var sf=Du.split("."),Cj=!1;3<=sf.length&&(Cj=sf[sf.length-3]in tj);2<=sf.length&&(Cj=Cj||sf[sf.length-2]in tj);Nn=Cj}}else Nn=!1;var Eu=Nn?"pagead2.googlesyndication.com":"googleads.g.doubleclick.net",C={};bl(a,C);Ik();C.adsid=Gk[1];Ik();C.pucrd=Gk[6];var ac=a.f,ih=a.f;C.dt=
zk;ih.google_async_iframe_id&&ih.google_bpp&&(C.bpp=ih.google_bpp);var Fu,JF=ug();a:{var KF=ug();try{var tf=KF.performance;if(tf&&tf.timing&&tf.now){var Gu=tf.timing.navigationStart+Math.round(tf.now())-tf.timing.domLoading;break a}}catch(sc){}Gu=null}var Hu=Gu;(Fu=Hu?Ak(Hu,JF.Date.now()-zk,1E6):null)&&(C.bdt=Fu);var Iu=ih.google_iframe_start_time;if("number"!==typeof Iu)var Ju=null;else ih.google_iframe_start_time=null,Ju=Ak(Iu,zk);var Ku=Ju;null!=Ku&&(C.fdt=Ku);C.idt=Ak(0,zk);var Dj=a.f;C.shv="r20100101";
C.cbv="/r20100101".replace("/","");"sa"==Dj.google_loader_used?C.ptt=5:"aa"==Dj.google_loader_used&&(C.ptt=9);/^\w{1,3}$/.test(Dj.google_loader_used)&&(C.saldr=Dj.google_loader_used);var On=Dg(a.pubWin);if(On){C.is_amp=1;var Pn=On||Dg();C.amp_v=Pn&&Pn.mode?+Pn.mode.version||null:null;var Qn=On||Dg();if(Qn&&Qn.container){for(var Lu=Qn.container.split(","),Mu=[],Rn=0;Rn<Lu.length;Rn++)Mu.push(Cg[Lu[Rn]]||"x");var Nu=Mu.join()}else Nu=null;var Ou=Nu;Ou&&(C.act=Ou)}ug()==window.top&&(C.abxe=1);if("_gfp_a_"in
a.pubWin){var Sn=a.pubWin._gfp_a_;if("boolean"!==typeof Sn)throw Error("Illegal value of _gfp_a_: "+Sn);if(Sn&&wg()){var Tn=(new Ck(a.pubWin)).read();Tn&&(C.cookie=Tn,C.crv="Test"!==Tn)}}var Md=Wi(),Pu=Zi(Md,8,{}),Ej=ac.google_ad_section;Pu[Ej]&&(C.prev_fmts=Pu[Ej]);var Qu=Zi(Md,9,{});Qu[Ej]&&(C.prev_slotnames=Qu[Ej].toLowerCase());var Un=Zi(Md,8,{}),Vn=Zi(Md,9,{}),uf=ac.google_ad_section,Wn=ac.google_ad_format,Xn=ac.google_ad_slot;Wn?Un[uf]=Un[uf]?Un[uf]+(","+Wn):Wn:Xn&&(Vn[uf]=Vn[uf]?Vn[uf]+(","+
Xn):Xn);var Ru=Zi(Md,15,0);0<Ru&&(C.nras=String(Ru));var Su=ug(),Tu=Dg(Su);if(Tu){var Yn=Tu||Dg();if(Yn){var Uu=Yn.pageViewId,Vu=Yn.clientId;"string"===typeof Vu&&(Uu+=Vu.replace(/\D/g,"").substr(0,6));var Wu=Uu}else Wu=null;var Xu=+Wu}else{var Yu=Si(Su,!1).qb,Zn=Yu.google_global_correlator;Zn||(Yu.google_global_correlator=Zn=1+Math.floor(Math.random()*Math.pow(2,43)));Xu=Zn}C.correlator=Zi(Md,7,Xu);mi().g["21060549"]&&(C.rume=1);if(ac.google_ad_channel){for(var Zu=Zi(Md,10,{}),$u="",av=ac.google_ad_channel.split($k),
$n=0;$n<av.length;$n++){var ao=av[$n];Zu[ao]?$u+=ao+"+":Zu[ao]=!0}C.pv_ch=$u}if(ac.google_ad_host_channel){for(var Fj=Zi(Md,11,[]),bv=ac.google_ad_host_channel.split("|"),Gj=-1,bo=[],jd=0;jd<bv.length;jd++){var cv=bv[jd].split($k);Fj[jd]||(Fj[jd]={});for(var jh="",co=0;co<cv.length;co++){var Hj=cv[co];""!==Hj&&(Fj[jd][Hj]?jh+="+"+Hj:Fj[jd][Hj]=!0)}jh=jh.slice(1);bo[jd]=jh;""!==jh&&(Gj=jd)}var eo="";if(-1<Gj){for(var fo=0;fo<Gj;fo++)eo+=bo[fo]+"|";eo+=bo[Gj]}C.pv_h_ch=eo}C.frm=ac.google_iframing;C.ife=
ac.google_iframing_environment;var dv=ac.google_ad_client;try{var ev=Ti(),Ij=ev.google_prev_clients;Ij||(Ij=ev.google_prev_clients={});if(dv in Ij)var go=1;else Ij[dv]=!0,go=2}catch(sc){go=0}C.pv=go;var ho=a.pubWin.document,fv=a.f,gv="";try{gv=ho.cookie}catch(sc){}var hv=ho.domain,kh=gv,Jj=a.pubWin.screen,LF=ho.referrer,MF=gh();if(Dg())var iv=ug().gaGlobal||{};else{var io=Math.round((new Date).getTime()/1E3),jo=fv.google_analytics_domain_name,Kj="undefined"==typeof jo?ej("auto",hv):ej(jo,hv),NF=-1<
kh.indexOf("__utma="+Kj+"."),OF=-1<kh.indexOf("__utmb="+Kj),ko;if(!(ko=Yi().gaGlobal)){var PF={};ko=Yi().gaGlobal=PF}var Sa=ko,jv=!1;if(NF){var lo=kh.split("__utma="+Kj+".")[1].split(";")[0].split(".");OF?Sa.sid=lo[3]+"":Sa.sid||(Sa.sid=io+"");Sa.vid=lo[0]+"."+lo[1];Sa.from_cookie=!0}else{Sa.sid||(Sa.sid=io+"");if(!Sa.vid){jv=!0;var QF=Math.round(2147483647*Math.random()),kv=MF,lv,xe=[bj.appName,bj.version,bj.language?bj.language:bj.browserLanguage,bj.platform,bj.userAgent,cj()?1:0].join("");if(Jj)xe+=
Jj.width+"x"+Jj.height+Jj.colorDepth;else if(n.java&&n.java.awt){var mv=n.java.awt.Toolkit.getDefaultToolkit().getScreenSize();xe+=mv.screen.width+"x"+mv.screen.height}xe=xe+kh+(LF||"");for(lv=xe.length;0<kv;)xe+=kv--^lv++;Sa.vid=(QF^dj(xe)&2147483647)+"."+io}Sa.from_cookie=!1}if(!Sa.cid){b:{var vf=jo,nv=999;vf&&(vf=0==vf.indexOf(".")?vf.substr(1):vf,nv=(""+vf).split(".").length);for(var ov,pv=999,Lj=kh.split(";"),lh=0;lh<Lj.length;lh++){var Mj=fj.exec(Lj[lh])||gj.exec(Lj[lh])||hj.exec(Lj[lh]);if(Mj){var mo=
Mj[1]||0;if(mo==nv){var qv=Mj[2];break b}mo<pv&&(pv=mo,ov=Mj[2])}}qv=ov}var mh=qv;jv&&mh&&-1!=mh.search(/^\d+\.\d+$/)?Sa.vid=mh:mh!=Sa.vid&&(Sa.cid=mh)}Sa.dh=Kj;Sa.hid||(Sa.hid=Math.round(2147483647*Math.random()));iv=Sa}var nh=iv;C.ga_vid=nh.vid;C.ga_sid=nh.sid;C.ga_hid=nh.hid;C.ga_fc=nh.from_cookie;C.ga_cid=nh.cid;C.ga_wpids=fv.google_analytics_uacct;var oh=a.pubWin,ph=new Nh(oh);oh.location&&oh.location.ancestorOrigins&&(C.iag=Ph(ph));C.icsg=Rh(ph);var no=ph.f[0].depth;no&&0<no&&(C.nhd=no);C.dssz=
oh.document.scripts?oh.document.scripts.length:0;C.mdo=Sh(ph);C.mso=Th(ph);var oo=ac.google_ad_layout;oo&&0<=tk[oo]&&(C.rplot=tk[oo]);wh(C);var rv=Dg(),Nj=rv&&rv.initialIntersection,po=(Nj&&Na(Nj.rootBounds)?new Ve(Nj.rootBounds.width,Nj.rootBounds.height):null)||nj(a.pubWin.top);po&&(C.biw=po.width,C.bih=po.height);var sv=a.pubWin;if(sv.top!=sv){var qo=nj(a.pubWin);qo&&(C.isw=qo.width,C.ish=qo.height)}var ye=a.pubWin;if(null!==ye&&ye!=ye.top){var Oj=[ye.document.URL];ye.name&&Oj.push(ye.name);var tv=
nj(ye,!1);Oj.push(tv.width.toString());Oj.push(tv.height.toString());var uv=Oj.join(""),vv=uv.length;if(0==vv)var ro=0;else{for(var wf=305419896,so=0;so<vv;so++)wf^=(wf<<5)+(wf>>2)+uv.charCodeAt(so)&4294967295;ro=0<wf?wf:4294967296+wf}}else ro=0;var wv=ro;0!==wv&&(C.ifk=wv);var Pj=tg(a.pubWin);if(Pj&&Pj.document){var Qj=Pj.document,qh=Pj;qh=void 0===qh?n:qh;var xv=Qj.scrollingElement||("CSS1Compat"==Qj.compatMode?Qj.documentElement:Qj.body);var yv=new Te(qh.pageXOffset||xv.scrollLeft,qh.pageYOffset||
xv.scrollTop)}else yv=new Te(-12245933,-12245933);var zv=yv;C.scr_x=Math.round(zv.x);C.scr_y=Math.round(zv.y);var Av=mi(),Bv=sk(Av),Rj=a.f.google_eids;if(Ja(Rj)){a.g|=64;for(var Sj=0;Sj<Rj.length;Sj++)"string"===typeof Rj[Sj]&&Bv.push(Rj[Sj])}C.eid=Bv.join();var Cv=rk(Av),Dv=a.f.google_loeid;"string"===typeof Dv&&(a.g|=4096,qb(Cv,Dv.split(",")));C.loeid=Cv.join();a.w&&(C.oid=a.w);if("423550201"===li(139)){var to=tg(a.pubWin);if(to){var uo=Li(to);C.pg_h=uo.scrollHeight==Li(to).clientHeight?uo.offsetHeight:
uo.scrollHeight}}var RF=Wi(),Ev=Zi(RF,20,{})[a.f.google_ad_client];Ev&&(C.psts=Ev.join());var vo=a.pubWin;if("number"!==typeof vo.goog_pvsid)try{Object.defineProperty(vo,"goog_pvsid",{value:Math.floor(Math.random()*Math.pow(2,52))})}catch(sc){}C.pvsid=Number(vo.goog_pvsid)||-1;a:{var Fv=a.pubWin,Tj=-1;try{Fv.localStorage&&(Tj=parseInt(Fv.localStorage.getItem("google_pem_mod"),10))}catch(sc){var Gv=null;break a}Gv=0<=Tj&&1E3>Tj?Tj:null}C.pem=Gv;var Jb=a.f,Uj=a.pubWin,SF=Ti();C.ref=Jb.google_referrer_url;
C.loc=Jb.google_page_location;var Vj=Dg(a.pubWin);if(Vj&&Na(Vj.data)&&"string"===typeof Vj.data.type){var wo=Vj.data.type.toLowerCase();var Hv="doubleclick"==wo||"adsense"==wo?null:wo}else Hv=null;var Iv=Hv;Iv&&(C.apn=Iv.substr(0,10));var rh=rj(SF);C.url||C.loc||!rh.url||(C.url=rh.url,rh.Ec||(C.usrc=1));rh.url!=(C.loc||C.url)&&(C.top=rh.url);Jb.google_async_rrc&&(C.rr=Jb.google_async_rrc);C.rx=0;var Jv;if(vk&&yk(vk))var Kv=vk;else{var xo=Ti(),kd=xo.google_jobrunner;Kv=kd&&(bh(kd,"object")||bh(kd,
"function"))&&yk(kd)&&dh(kd.nq)&&dh(kd.nqa)&&dh(kd.al)&&dh(kd.rl)?vk=kd:xo.google_jobrunner=vk=new uk(xo)}var Lv=Kv;(Jv=dh(Lv.tc)?Lv.tc():null)&&(C.jtc=Jv);0<=a.l&&(C.eae=a.l);var Mv=jk(Jb,a.i);Mv&&(C.fc=Mv);var Nv=Jb.google_ad_format;if(!(Nv&&0<Nv.indexOf("_0ads"))){var sh=(a.iframeWin||a.pubWin).document,Ov="";if(sh.documentMode){var ze=(new Xe(sh)).createElement("IFRAME");ze.frameBorder="0";ze.style.height=0;ze.style.width=0;ze.style.position="absolute";if(sh.body){sh.body.appendChild(ze);try{var Wj=
ze.contentWindow.document;Wj.open();Wj.write("<!DOCTYPE html>");Wj.close();Ov+=Wj.documentMode}catch(sc){}sh.body.removeChild(ze)}}C.docm=Ov}C.brdim=Jk(Uj).join();var TF="618018086"===li(67),Xj=0;void 0===n.postMessage&&(Xj|=1);if(TF){var Pv=Dg(Uj);Pv&&Pv.observeIntersection&&(Xj|=256);var Qv=Uj.document;Qv&&Ma(Qv.elementFromPoint)&&(Xj|=1024)}var Rv=Xj;0<Rv&&(C.osd=Rv);C.vis=pj(Uj.document);if(!wj(Jb)){a:{var th=Number(Jb.google_ad_width),uh=Number(Jb.google_ad_height);if(!(0<th&&0<uh)){b:{try{var yo=
String(Jb.google_ad_format);if(yo&&yo.match){var zo=yo.match(/(\d+)x(\d+)/i);if(zo){var Sv=parseInt(zo[1],10),Tv=parseInt(zo[2],10);if(0<Sv&&0<Tv){var Uv={width:Sv,height:Tv};break b}}}}catch(sc){}Uv=null}var Ao=Uv;if(!Ao){var Vv=null;break a}th=0<th?th:Ao.width;uh=0<uh?uh:Ao.height}Vv={width:th,height:uh}}var Bo=Vv;if(Bo){var Wv=0;a:{try{var Xv=Jb.google_async_iframe_id,Yv=ug().document;if(Xv)var Zv=Yv.getElementById(Xv);else{var $v=Yv.getElementsByTagName("script"),aw=$v[$v.length-1];Zv=aw&&aw.parentNode||
null}var bw=Zv;if(bw){for(var vh=[],Yj=bw,UF=0,VF=Date.now();100>=++UF&&50>Date.now()-VF&&(Yj=cl(Yj));)1===Yj.nodeType&&vh.push(Yj);b:{for(var Co=0;Co<vh.length;Co++){c:{var ld=vh[Co];try{if(ld.parentNode&&0<ld.offsetWidth&&0<ld.offsetHeight&&ld.style&&"none"!==ld.style.display&&"hidden"!==ld.style.visibility&&(!ld.style.opacity||0!==Number(ld.style.opacity))){var cw=ld.getBoundingClientRect();var dw=0<cw.right&&0<cw.bottom;break c}}catch(sc){}dw=!1}if(!dw){var ew=!1;break b}}ew=!0}if(ew){b:{for(var XF=
Date.now(),YF=/^html|body$/i,ZF=/^fixed/i,Do=0;Do<vh.length&&50>Date.now()-XF;Do++){var Zj=vh[Do];if(!YF.test(Zj.tagName)&&ZF.test(Zj.style.position||Mg(Zj))){var Eo=Zj;break b}}Eo=null}break a}}}catch(sc){}Eo=null}var Fo=Eo;Fo&&Fo.offsetWidth*Fo.offsetHeight<=4*Bo.width*Bo.height&&(Wv=1);C.pfx=Wv}}if("26835106"===li(41)&&a.i){try{var fw=a.i.document.getElementsByTagName("head")[0];var gw=fw?Sk(fw):0}catch(sc){gw=0}var hw=gw;0!==hw&&(C.cms=hw)}"r20100101"!==Jb.google_lrv&&(C.alvm=Jb.google_lrv||"none");
C.fu=a.g;C.bc=Vk();Ik();C.jar=Gk[4];var iw=a.f,$F=iw.google_ad_channel,jw="/pagead/ads?";"ca-pub-6219811747049371"===iw.google_ad_client&&dl.test($F)&&(jw="/pagead/lopri?");var Go=oj(Eu,jw);3===pj(a.pubWin.document)&&(a.A=!0,a.C=Go,Go=oj(Eu,"/pagead/blank.gif#?"));var bG=fh(C,Go+"");return b.google_ad_url=bG}
function cl(a){try{if(a.parentNode)return a.parentNode}catch(e){return null}if(9===a.nodeType)a:{try{var b=a?lf(a):window;if(b){var c=b.frameElement;if(c&&mg(b.parent)){var d=c;break a}}}catch(e){}d=null}else d=null;return d}
function el(a,b){a.F&&(b.us_privacy=a.F);a.D&&(b.gdpr_consent=a.D);a.j&&(b.addtl_consent=a.j)}
function bl(a,b){var c=a.f;ch(Bh,function(d,e){b[d]=c[e]});
el(a,b);ch(Ah,function(d,e){b[d]=c[e]});
ch(Dh,function(d,e){b[d]=c[e]});
wj(c)&&(b.fa=vj(c))}
var dl=/YtLoPri/;function fl(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
fl.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function gl(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function hl(a){n.setTimeout(function(){throw a;},0)}
var il;
function jl(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var e=qf("IFRAME");e.style.display="none";e.src=zc(new wc(xc,uc(vc))).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Wc(fd));e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(l){if(("*"==k||l.origin==
k)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!ic()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Yc;c.Yc=null;e()}};
return function(e){d.next={Yc:e};d=d.next;b.port2.postMessage(0)}}return function(e){n.setTimeout(e,0)}}
;function kl(){this.g=this.f=null}
var ml=new fl(function(){return new ll},function(a){a.reset()});
kl.prototype.add=function(a,b){var c=ml.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
kl.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function ll(){this.next=this.scope=this.ta=null}
ll.prototype.set=function(a,b){this.ta=a;this.scope=b;this.next=null};
ll.prototype.reset=function(){this.next=this.scope=this.ta=null};function nl(a,b){ol||pl();ql||(ol(),ql=!0);rl.add(a,b)}
var ol;function pl(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);ol=function(){a.then(sl)}}else ol=function(){var b=sl;
!Ma(n.setImmediate)||n.Window&&n.Window.prototype&&!A("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(il||(il=jl()),il(b)):n.setImmediate(b)}}
var ql=!1,rl=new kl;function sl(){for(var a;a=rl.remove();){try{a.ta.call(a.scope)}catch(b){hl(b)}gl(ml,a)}ql=!1}
;function tl(a){this.f=0;this.D=void 0;this.j=this.g=this.i=null;this.l=this.w=!1;if(a!=Ga)try{var b=this;a.call(void 0,function(c){ul(b,2,c)},function(c){ul(b,3,c)})}catch(c){ul(this,3,c)}}
function vl(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
vl.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var wl=new fl(function(){return new vl},function(a){a.reset()});
function xl(a,b,c){var d=wl.get();d.g=a;d.onRejected=b;d.context=c;return d}
function yl(a){if(a instanceof tl)return a;var b=new tl(Ga);ul(b,2,a);return b}
function zl(a,b,c){Al(a,b,c,null)||nl(Ua(b,a))}
function Bl(a){return new tl(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,q){d--;e[m]=q;0==d&&b(e)},g=function(m){c(m)},k=0,l;k<a.length;k++)l=a[k],zl(l,Ua(f,k),g);
else b(e)})}
tl.prototype.then=function(a,b,c){return Cl(this,Ma(a)?a:null,Ma(b)?b:null,c)};
tl.prototype.$goog_Thenable=!0;tl.prototype.cancel=function(a){if(0==this.f){var b=new Dl(a);nl(function(){El(this,b)},this)}};
function El(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?El(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Fl(c),Gl(c,e,3,b)))}a.i=null}else ul(a,3,b)}
function Hl(a,b){a.g||2!=a.f&&3!=a.f||Il(a);a.j?a.j.next=b:a.g=b;a.j=b}
function Cl(a,b,c,d){var e=xl(null,null,null);e.f=new tl(function(f,g){e.g=b?function(k){try{var l=b.call(d,k);f(l)}catch(m){g(m)}}:f;
e.onRejected=c?function(k){try{var l=c.call(d,k);void 0===l&&k instanceof Dl?g(k):f(l)}catch(m){g(m)}}:g});
e.f.i=a;Hl(a,e);return e.f}
tl.prototype.A=function(a){this.f=0;ul(this,2,a)};
tl.prototype.C=function(a){this.f=0;ul(this,3,a)};
function ul(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Al(c,a.A,a.C,a)||(a.D=c,a.f=b,a.i=null,Il(a),3!=b||c instanceof Dl||Jl(a,c)))}
function Al(a,b,c,d){if(a instanceof tl)return Hl(a,xl(b||Ga,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Na(a))try{var f=a.then;if(Ma(f))return Kl(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Kl(a,b,c,d,e){function f(l){k||(k=!0,d.call(e,l))}
function g(l){k||(k=!0,c.call(e,l))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Il(a){a.w||(a.w=!0,nl(a.F,a))}
function Fl(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
tl.prototype.F=function(){for(var a;a=Fl(this);)Gl(this,a,this.f,this.D);this.w=!1};
function Gl(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Ll(b,c,d);else try{b.i?b.g.call(b.context):Ll(b,c,d)}catch(e){Ml.call(null,e)}gl(wl,b)}
function Ll(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Jl(a,b){a.l=!0;nl(function(){a.l&&Ml.call(null,b)})}
var Ml=hl;function Dl(a){Wa.call(this,a)}
y(Dl,Wa);Dl.prototype.name="cancel";function Nl(a){this.f=a;a.then(t(function(){},this))}
function Ol(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=Pl(a,b).then(function(f){return f.apply(null,d)});
return new Nl(e)}
var Ql={};function Pl(a,b){var c=Ql[b];if(c)return c;c=(c=r(b))?yl(c):(new tl(function(d,e){var f=(new Xe(document)).createElement("SCRIPT");f.async=!0;pd(f,new wc(xc,uc(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};
f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){var d=r(b);
if(!d)throw Error("Failed to load "+b+" from "+a);return d});
return Ql[b]=c}
function Rl(a,b,c){a.f.then(function(d){var e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})}
;function Sl(a){this.f=a}
function Tl(a,b){var c=b||{};c=Ol(Ul,"help.service.Lazy.create",a,{apiKey:c.apiKey||c.apiKey,environment:c.ij||c.environment,helpCenterPath:c.lj||c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),nonce:c.nonce||c.nonce,productData:c.productData||c.productData,receiverUri:c.pj||c.receiverUri,renderApiUri:c.rj||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window});return new Sl(c)}
var Ul=new oc(pc,"https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");Sl.prototype.i=function(a){Rl(this.f,"startFeedback",arguments)};
Sl.prototype.j=function(a){Rl(this.f,"startHelp",arguments)};
Sl.prototype.g=function(a){Rl(this.f,"loadChatSupport",arguments)};function Vl(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Wl=window,Xl=document,Yl=Wl.location;function Zl(){}
var $l=/\[native code\]/;function am(a,b,c){return a[b]=a[b]||c}
function bm(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function cm(){var a;if((a=Object.create)&&$l.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var dm=am(Wl,"gapi",{});var em;em=am(Wl,"___jsl",cm());am(em,"I",0);am(em,"hel",10);function fm(){var a=Yl.href;if(em.dpo)var b=em.h;else{b=em.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function gm(a){var b=am(em,"PQ",[]);em.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function hm(a){return am(am(em,"H",cm()),a,cm())}
;function im(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var v=g,w=0;64>w;w+=4)v[w/4]=u[w]<<24|u[w+1]<<16|u[w+2]<<8|u[w+3];for(w=16;80>w;w++)u=v[w-3]^v[w-8]^v[w-14]^v[w-16],v[w]=(u<<1|u>>>31)&4294967295;u=e[0];var N=e[1],da=e[2],fa=e[3],rc=e[4];for(w=0;80>w;w++){if(40>w)if(20>w){var La=fa^N&(da^fa);var Ya=1518500249}else La=N^da^fa,Ya=1859775393;else 60>w?(La=N&da|fa&(N|da),Ya=2400959708):(La=N^da^fa,Ya=3395469782);La=((u<<5|u>>>27)&4294967295)+La+rc+Ya+v[w]&4294967295;rc=fa;fa=da;da=(N<<30|N>>>2)&4294967295;N=u;u=La}e[0]=e[0]+u&4294967295;
e[1]=e[1]+N&4294967295;e[2]=e[2]+da&4294967295;e[3]=e[3]+fa&4294967295;e[4]=e[4]+rc&4294967295}
function c(u,v){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var w=[],N=0,da=u.length;N<da;++N)w.push(u.charCodeAt(N));u=w}v||(v=u.length);w=0;if(0==m)for(;w+64<v;)b(u.slice(w,w+64)),w+=64,q+=64;for(;w<v;)if(f[m++]=u[w++],q++,64==m)for(m=0,b(f);w+64<v;)b(u.slice(w,w+64)),w+=64,q+=64}
function d(){var u=[],v=8*q;56>m?c(k,56-m):c(k,64-(m-56));for(var w=63;56<=w;w--)f[w]=v&255,v>>>=8;b(f);for(w=v=0;5>w;w++)for(var N=24;0<=N;N-=8)u[v++]=e[w]>>N&255;return u}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,q;a();return{reset:a,update:c,digest:d,Oe:function(){for(var u=d(),v="",w=0;w<u.length;w++)v+="0123456789ABCDEF".charAt(Math.floor(u[w]/16))+"0123456789ABCDEF".charAt(u[w]%16);return v}}}
;function jm(a,b,c){var d=[],e=[];if(1==(Ja(c)?2:1))return e=[b,a],z(d,function(k){e.push(k)}),km(e.join(" "));
var f=[],g=[];z(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(k){e.push(k)});
a=km(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function km(a){var b=im();b.update(a);return b.Oe().toLowerCase()}
;function lm(a){var b=Vl(String(n.location.href)),c;(c=n.__SAPISID||n.__APISID||n.__OVERRIDE_SID)?c=!0:(c=new Ie(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,c||(c=new Ie(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&c&&b?[b,jm(Vl(d),c,a||null)].join(" "):null}return null}
;var mm=am(em,"perf",cm());am(mm,"g",cm());var nm=am(mm,"i",cm());am(mm,"r",[]);cm();cm();function om(a,b,c){b&&0<b.length&&(b=pm(b),c&&0<c.length&&(b+="___"+pm(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=am(nm,"_p",cm()),am(b,c,cm())[a]=(new Date).getTime(),b=mm.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function pm(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var qm=cm(),rm=[];function sm(a){throw Error("Bad hint"+(a?": "+a:""));}
rm.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?em[b]=am(em,b,[]).concat(c):am(em,b,c)}if(b=a.u)a=am(em,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var tm=/^(\/[a-zA-Z0-9_\-]+)+$/,um=[/\/amp\//,/\/amp$/,/^\/amp$/],vm=/^[a-zA-Z0-9\-_\.,!]+$/,wm=/^gapi\.loaded_[0-9]+$/,xm=/^[a-zA-Z0-9,._-]+$/;function ym(a,b,c,d){var e=a.split(";"),f=e.shift(),g=qm[f],k=null;g?k=g(e,b,c,d):sm("no hint processor for: "+f);k||sm("failed to generate load url");b=k;c=b.match(zm);(d=b.match(Am))&&1===d.length&&Bm.test(b)&&c&&1===c.length||sm("failed sanity: "+a);return k}
function Cm(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=Dm(a);wm.test(c)||sm("invalid_callback");b=Em(b);d=d&&d.length?Em(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Rc?"/am="+e(a.Rc):"",a.ee?"/rs="+e(a.ee):"",a.Ie?"/t="+e(a.Ie):"","/cb=",e(c)].join("")}
function Dm(a){"/"!==a.charAt(0)&&sm("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))sm("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");tm.test(b)||sm("invalid_prefix");c=0;for(d=um.length;c<d;++c)um[c].test(b)&&sm("invalid_prefix");c=Fm(a,
"k",!0);d=Fm(a,"am");e=Fm(a,"rs");a=Fm(a,"t");return{pathPrefix:b,version:c,Rc:d,ee:e,Ie:a}}
function Em(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");xm.test(e)&&b.push(e)}return b.join(",")}
function Fm(a,b,c){a=a[b];!a&&c&&sm("missing: "+b);if(a){if(vm.test(a))return a;sm("invalid: "+b)}return null}
var Bm=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Am=/\/cb=/g,zm=/\/\//g;function Gm(){var a=fm();if(!a)throw Error("Bad hint");return a}
qm.m=function(a,b,c,d){(a=a[0])||sm("missing_hint");return"https://apis.google.com"+Cm(a,b,c,d)};
var Hm=decodeURI("%73cript"),Im=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Jm(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Km(){var a=em.nonce;return void 0!==a?a&&a===String(a)&&a.match(Im)?a:em.nonce=null:Xl.querySelector?(a=Xl.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Im)?em.nonce=a:em.nonce=null):null:null}
function Lm(a){if("loading"!=Xl.readyState)Mm(a);else{var b=Km(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+Hm+' src="'+encodeURI(a)+'"'+c+"></"+Hm+">";Xl.write(a)}}
function Mm(a){var b=Xl.createElement(Hm);b.setAttribute("src",a);a=Km();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Xl.getElementsByTagName(Hm)[0])?a.parentNode.insertBefore(b,a):(Xl.head||Xl.body||Xl.documentElement).appendChild(b)}
function Nm(a,b){var c=b&&b._c;if(c)for(var d=0;d<rm.length;d++){var e=rm[d][0],f=rm[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Om(a,b,c){Pm(function(){var d=b===fm()?am(dm,"_",cm()):cm();d=am(hm(b),"_",d);a(d)},c)}
function Qm(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Nm(a,c);var d=a?a.split(":"):[],e=c.h||Gm(),f=am(em,"ah",cm());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split(".");l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,q=m;m&&m.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(k)}var u=g.length;if(1<u){var v=c.callback;v&&(c.callback=function(){0==--u&&v()})}for(;d=g.shift();)Rm(d.features,c,d.hint)}else Rm(d||[],c,e)}
function Rm(a,b,c){function d(La,Ya){if(u)return 0;Wl.clearTimeout(q);v.push.apply(v,N);var ve=((dm||{}).config||{}).update;ve?ve(f):f&&am(em,"cu",[]).push(f);if(Ya){om("me0",La,w);try{Om(Ya,c,m)}finally{om("me1",La,w)}}return 1}
a=bm(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var q=null,u=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=am(hm(c),"r",[]).sort();var v=am(hm(c),"L",[]).sort(),w=[].concat(l);0<g&&(q=Wl.setTimeout(function(){u=!0;k()},g));
var N=Jm(a,v);if(N.length){N=Jm(a,l);var da=am(em,"CP",[]),fa=da.length;da[fa]=function(La){function Ya(){var we=da[fa+1];we&&we()}
function ve(we){da[fa]=null;d(N,La)&&gm(function(){e&&e();we()})}
if(!La)return 0;om("ml1",N,w);0<fa&&da[fa-1]?da[fa]=function(){ve(Ya)}:ve(Ya)};
if(N.length){var rc="loaded_"+em.I++;dm[rc]=function(La){da[fa](La);dm[rc]=null};
a=ym(c,N,"gapi."+rc,l);l.push.apply(l,N);om("ml0",N,w);b.sync||Wl.___gapisync?Lm(a):Mm(a)}else da[fa](Zl)}else d(N)&&e&&e()}
function Pm(a,b){if(em.hee&&0<em.hel)try{return a()}catch(c){b&&b(c),em.hel--,Qm("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
dm.load=function(a,b){return Pm(function(){return Qm(a,b)})};hc("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Sm(){}
Sm.prototype.f=null;Sm.prototype.getOptions=function(){var a;(a=this.f)||(a={},Tm(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Um;function Vm(){}
y(Vm,Sm);function Wm(a){return(a=Tm(a))?new ActiveXObject(a):new XMLHttpRequest}
function Tm(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Um=new Vm;function Xm(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
Xm.prototype.stopPropagation=function(){this.f=!0};
Xm.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ym=!B||ee(9),Zm=B&&!de("9"),$m=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{n.addEventListener("test",Ga,b),n.removeEventListener("test",Ga,b)}catch(c){}return a}();var an;an=Qd?"webkitTransitionEnd":Ld?"otransitionend":"transitionend";function bn(a,b){Xm.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
y(bn,Xm);var cn={2:"touch",3:"pen",4:"mouse"};
bn.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Pd&&(Id(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cn[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
bn.prototype.stopPropagation=function(){bn.J.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
bn.prototype.preventDefault=function(){bn.J.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Zm)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var dn="closure_listenable_"+(1E6*Math.random()|0),en=0;function fn(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Qb=e;this.key=++en;this.kb=this.Jb=!1}
function gn(a){a.kb=!0;a.listener=null;a.f=null;a.src=null;a.Qb=null}
;function hn(a){this.src=a;this.listeners={};this.f=0}
hn.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=jn(a,b,d,e);-1<g?(b=a[g],c||(b.Jb=!1)):(b=new fn(b,this.src,f,!!d,e),b.Jb=c,a.push(b));return b};
hn.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=jn(e,b,c,d);return-1<b?(gn(e[b]),mb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function kn(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(gn(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function jn(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.kb&&f.listener==b&&f.capture==!!c&&f.Qb==d)return e}return-1}
;var ln="closure_lm_"+(1E6*Math.random()|0),mn={},nn=0;function on(a,b,c,d,e){if(d&&d.once)return pn(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)on(a,b[f],c,d,e);return null}c=qn(c);return a&&a[dn]?a.i.add(String(b),c,!1,Na(d)?!!d.capture:!!d,e):rn(a,b,c,!1,d,e)}
function rn(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,k=sn(a);k||(a[ln]=k=new hn(a));c=k.add(b,c,d,g,f);if(c.f)return c;d=tn();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)$m||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(un(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");nn++;return c}
function tn(){var a=vn,b=Ym?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function pn(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)pn(a,b[f],c,d,e);return null}c=qn(c);return a&&a[dn]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):rn(a,b,c,!0,d,e)}
function wn(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)wn(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=qn(c),a&&a[dn])?a.i.remove(String(b),c,d,e):a&&(a=sn(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=jn(b,c,d,e)),(c=-1<a?b[a]:null)&&xn(c))}
function xn(a){if("number"!==typeof a&&a&&!a.kb){var b=a.src;if(b&&b[dn])kn(b.i,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(un(c),d):b.addListener&&b.removeListener&&b.removeListener(d);nn--;(c=sn(b))?(kn(c,a),0==c.f&&(c.src=null,b[ln]=null)):gn(a)}}}
function un(a){return a in mn?mn[a]:mn[a]="on"+a}
function yn(a,b,c,d){var e=!0;if(a=sn(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.kb&&(f=zn(f,d),e=e&&!1!==f)}return e}
function zn(a,b){var c=a.listener,d=a.Qb||a.src;a.Jb&&xn(a);return c.call(d,b)}
function vn(a,b){if(a.kb)return!0;if(!Ym){var c=b||r("window.event"),d=new bn(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var k=yn(c[g],f,!0,d);e=e&&k}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],k=yn(c[g],f,!1,d),e=e&&k}return e}return zn(a,new bn(b,this))}
function sn(a){a=a[ln];return a instanceof hn?a:null}
var An="__closure_events_fn_"+(1E9*Math.random()>>>0);function qn(a){if(Ma(a))return a;a[An]||(a[An]=function(b){return a.handleEvent(b)});
return a[An]}
;function Bn(){Oi.call(this);this.i=new hn(this);this.vb=this;this.ma=null}
y(Bn,Oi);Bn.prototype[dn]=!0;Bn.prototype.addEventListener=function(a,b,c,d){on(this,a,b,c,d)};
Bn.prototype.removeEventListener=function(a,b,c,d){wn(this,a,b,c,d)};
Bn.prototype.dispatchEvent=function(a){var b=this.ma;if(b){var c=[];for(var d=1;b;b=b.ma)c.push(b),++d}b=this.vb;d=a.type||a;if("string"===typeof a)a=new Xm(a,b);else if(a instanceof Xm)a.target=a.target||b;else{var e=a;a=new Xm(d,b);gc(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=Cn(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=Cn(g,d,!0,a)&&e,a.f||(e=Cn(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=Cn(g,d,!1,a)&&e;return e};
Bn.prototype.K=function(){Bn.J.K.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,gn(d[e]);delete a.listeners[c];a.f--}}this.ma=null};
function Cn(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.kb&&g.capture==c){var k=g.listener,l=g.Qb||g.src;g.Jb&&kn(a.i,g);e=!1!==k.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Dn(a,b){Bn.call(this);this.g=a||1;this.f=b||n;this.j=t(this.df,this);this.l=x()}
y(Dn,Bn);h=Dn.prototype;h.enabled=!1;h.ua=null;h.setInterval=function(a){this.g=a;this.ua&&this.enabled?(this.stop(),this.start()):this.ua&&this.stop()};
h.df=function(){if(this.enabled){var a=x()-this.l;0<a&&a<.8*this.g?this.ua=this.f.setTimeout(this.j,this.g-a):(this.ua&&(this.f.clearTimeout(this.ua),this.ua=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.ua||(this.ua=this.f.setTimeout(this.j,this.g),this.l=x())};
h.stop=function(){this.enabled=!1;this.ua&&(this.f.clearTimeout(this.ua),this.ua=null)};
h.K=function(){Dn.J.K.call(this);this.stop();delete this.f};
function En(a,b,c){if(Ma(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:n.setTimeout(a,b||0)}
;function Fn(a,b,c){Oi.call(this);this.j=null!=c?t(a,c):a;this.i=b;this.g=t(this.Eg,this);this.f=[]}
y(Fn,Oi);h=Fn.prototype;h.mb=!1;h.Fb=0;h.Wa=null;h.ef=function(a){this.f=arguments;this.Wa||this.Fb?this.mb=!0:Gn(this)};
h.stop=function(){this.Wa&&(n.clearTimeout(this.Wa),this.Wa=null,this.mb=!1,this.f=[])};
h.pause=function(){this.Fb++};
h.resume=function(){this.Fb--;this.Fb||!this.mb||this.Wa||(this.mb=!1,Gn(this))};
h.K=function(){Fn.J.K.call(this);this.stop()};
h.Eg=function(){this.Wa=null;this.mb&&!this.Fb&&(this.mb=!1,Gn(this))};
function Gn(a){a.Wa=En(a.g,a.i);a.j.apply(null,a.f)}
;function Hn(a){Oi.call(this);this.g=a;this.f={}}
y(Hn,Oi);var In=[];function Ho(a,b,c,d){Array.isArray(c)||(c&&(In[0]=c.toString()),c=In);for(var e=0;e<c.length;e++){var f=on(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function Io(a){Sb(a.f,function(b,c){this.f.hasOwnProperty(c)&&xn(b)},a);
a.f={}}
Hn.prototype.K=function(){Hn.J.K.call(this);Io(this)};
Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Jo(a,b,c,d){this.f=a;this.i=b;this.F=c;this.D=d||1;this.l=45E3;this.j=new Hn(this);this.g=new Dn;this.g.setInterval(250)}
h=Jo.prototype;h.Xa=null;h.wa=!1;h.pb=null;h.Oc=null;h.lb=null;h.nb=null;h.Ja=null;h.Pa=null;h.Za=null;h.Z=null;h.Hb=0;h.xa=null;h.lc=null;h.Na=null;h.Cb=-1;h.ie=!0;h.Ta=!1;h.Bc=0;h.Zb=null;var Ko={},Lo={};h=Jo.prototype;h.setTimeout=function(a){this.l=a};
function Mo(a,b,c){a.nb=1;a.Ja=No(b.clone());a.Za=c;a.w=!0;Oo(a,null)}
function Po(a,b,c,d,e){a.nb=1;a.Ja=No(b.clone());a.Za=null;a.w=c;e&&(a.ie=!1);Oo(a,d)}
function Oo(a,b){a.lb=x();Qo(a);a.Pa=a.Ja.clone();Ro(a.Pa,"t",a.D);a.Hb=0;a.Z=a.f.sc(a.f.Gb()?b:null);0<a.Bc&&(a.Zb=new Fn(t(a.qe,a,a.Z),a.Bc));Ho(a.j,a.Z,"readystatechange",a.Rg);var c=a.Xa?dc(a.Xa):{};a.Za?(a.lc="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Z.send(a.Pa,a.lc,a.Za,c)):(a.lc="GET",a.ie&&!Qd&&(c.Connection="close"),a.Z.send(a.Pa,a.lc,null,c));a.f.va(1)}
h.Rg=function(a){a=a.target;var b=this.Zb;b&&3==So(a)?b.ef():this.qe(a)};
h.qe=function(a){try{if(a==this.Z)a:{var b=So(this.Z),c=this.Z.w,d=this.Z.getStatus();if(B&&!ee(10)||Qd&&!de("420+")){if(4>b)break a}else if(3>b||3==b&&!Ld&&!To(this.Z))break a;this.Ta||4!=b||7==c||(8==c||0>=d?this.f.va(3):this.f.va(2));Uo(this);var e=this.Z.getStatus();this.Cb=e;var f=To(this.Z);(this.wa=200==e)?(4==b&&Vo(this),this.w?(Wo(this,b,f),Ld&&this.wa&&3==b&&(Ho(this.j,this.g,"tick",this.Pg),this.g.start())):Xo(this,f),this.wa&&!this.Ta&&(4==b?this.f.Vb(this):(this.wa=!1,Qo(this)))):(400==
e&&0<f.indexOf("Unknown SID")?(this.Na=3,Yo(13)):(this.Na=0,Yo(14)),Vo(this),Zo(this))}}catch(g){}finally{}};
function Wo(a,b,c){for(var d=!0;!a.Ta&&a.Hb<c.length;){var e=$o(a,c);if(e==Lo){4==b&&(a.Na=4,Yo(15),d=!1);break}else if(e==Ko){a.Na=4;Yo(16);d=!1;break}else Xo(a,e)}4==b&&0==c.length&&(a.Na=1,Yo(17),d=!1);a.wa=a.wa&&d;d||(Vo(a),Zo(a))}
h.Pg=function(){var a=So(this.Z),b=To(this.Z);this.Hb<b.length&&(Uo(this),Wo(this,a,b),this.wa&&4!=a&&Qo(this))};
function $o(a,b){var c=a.Hb,d=b.indexOf("\n",c);if(-1==d)return Lo;c=Number(b.substring(c,d));if(isNaN(c))return Ko;d+=1;if(d+c>b.length)return Lo;var e=b.substr(d,c);a.Hb=d+c;return e}
function ap(a,b){a.lb=x();Qo(a);var c=b?window.location.hostname:"";a.Pa=a.Ja.clone();bp(a.Pa,"DOMAIN",c);bp(a.Pa,"t",a.D);try{a.xa=new ActiveXObject("htmlfile")}catch(m){Vo(a);a.Na=7;Yo(22);Zo(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in Ad)g=Ad[k];else if(k in zd)g=Ad[k]=zd[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=Ad[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=dd(d+"</body></html>",null);a.xa.open();a.xa.write(Wc(c));a.xa.close();a.xa.parentWindow.m=t(a.Hg,a);a.xa.parentWindow.d=t(a.Yd,a,!0);a.xa.parentWindow.rpcClose=t(a.Yd,a,!1);c=a.xa.createElement("DIV");a.xa.parentWindow.document.body.appendChild(c);d=Hc(a.Pa.toString());d=ud(Dc(d));d=dd('<iframe src="'+d+'"></iframe>',null);id(c,d);a.f.va(1)}
h.Hg=function(a){cp(t(this.Gg,this,a),0)};
h.Gg=function(a){this.Ta||(Uo(this),Xo(this,a),Qo(this))};
h.Yd=function(a){cp(t(this.Fg,this,a),0)};
h.Fg=function(a){this.Ta||(Vo(this),this.wa=a,this.f.Vb(this),this.f.va(4))};
h.cancel=function(){this.Ta=!0;Vo(this)};
function Qo(a){a.Oc=x()+a.l;dp(a,a.l)}
function dp(a,b){if(null!=a.pb)throw Error("WatchDog timer not null");a.pb=cp(t(a.Kg,a),b)}
function Uo(a){a.pb&&(n.clearTimeout(a.pb),a.pb=null)}
h.Kg=function(){this.pb=null;var a=x();0<=a-this.Oc?(2!=this.nb&&this.f.va(3),Vo(this),this.Na=2,Yo(18),Zo(this)):dp(this,this.Oc-a)};
function Zo(a){a.f.yd()||a.Ta||a.f.Vb(a)}
function Vo(a){Uo(a);Qi(a.Zb);a.Zb=null;a.g.stop();Io(a.j);if(a.Z){var b=a.Z;a.Z=null;b.abort();b.dispose()}a.xa&&(a.xa=null)}
h.getLastError=function(){return this.Na};
function Xo(a,b){try{a.f.Td(a,b),a.f.va(4)}catch(c){}}
;function ep(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function fp(a){var b=[];gp(new hp,a,b);return b.join("")}
function hp(){}
function gp(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),gp(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ip(d,c),c.push(":"),gp(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ip(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var jp={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},kp=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ip(a,b){b.push('"',a.replace(kp,function(c){var d=jp[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),jp[c]=d);return d}),'"')}
;var lp="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function mp(){}
mp.prototype.next=function(){throw lp;};
mp.prototype.Ea=function(){return this};
function np(a){if(a instanceof mp)return a;if("function"==typeof a.Ea)return a.Ea(!1);if(Ka(a)){var b=0,c=new mp;c.next=function(){for(;;){if(b>=a.length)throw lp;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function op(a,b,c){if(Ka(a))try{z(a,b,c)}catch(d){if(d!==lp)throw d;}else{a=np(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==lp)throw d;}}}
function pp(a){if(Ka(a))return pb(a);a=np(a);var b=[];op(a,function(c){b.push(c)});
return b}
;function qp(a,b){this.g={};this.f=[];this.Ra=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof qp)for(c=a.Aa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=qp.prototype;h.qa=function(){rp(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
h.Aa=function(){rp(this);return this.f.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||sp;rp(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function sp(a,b){return a===b}
h.isEmpty=function(){return 0==this.i};
h.clear=function(){this.g={};this.Ra=this.i=this.f.length=0};
h.remove=function(a){return tp(this.g,a)?(delete this.g[a],this.i--,this.Ra++,this.f.length>2*this.i&&rp(this),!0):!1};
function rp(a){if(a.i!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];tp(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.i!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],tp(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return tp(this.g,a)?this.g[a]:b};
h.set=function(a,b){tp(this.g,a)||(this.i++,this.f.push(a),this.Ra++);this.g[a]=b};
h.forEach=function(a,b){for(var c=this.Aa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new qp(this)};
h.Ea=function(a){rp(this);var b=0,c=this.Ra,d=this,e=new mp;e.next=function(){if(c!=d.Ra)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw lp;var f=d.f[b++];return a?f:d.g[f]};
return e};
function tp(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function up(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if("string"===typeof a)return a.split("");if(Ka(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Xb(a)}
function vp(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ka(a)||"string"===typeof a)z(a,b,c);else{if(a.Aa&&"function"==typeof a.Aa)var d=a.Aa();else if(a.qa&&"function"==typeof a.qa)d=void 0;else if(Ka(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Yb(a);e=up(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function wp(a,b){this.i=this.F=this.j="";this.D=null;this.l=this.f="";this.w=!1;var c;a instanceof wp?(this.w=void 0!==b?b:a.w,xp(this,a.j),this.F=a.F,yp(this,a.i),zp(this,a.D),this.f=a.f,Ap(this,a.g.clone()),this.l=a.l):a&&(c=Xf(String(a)))?(this.w=!!b,xp(this,c[1]||"",!0),this.F=Bp(c[2]||""),yp(this,c[3]||"",!0),zp(this,c[4]),this.f=Bp(c[5]||"",!0),Ap(this,c[6]||"",!0),this.l=Bp(c[7]||"")):(this.w=!!b,this.g=new Cp(null,this.w))}
wp.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Dp(b,Ep,!0),":");var c=this.i;if(c||"file"==b)a.push("//"),(b=this.F)&&a.push(Dp(b,Ep,!0),"@"),a.push(sd(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,null!=c&&a.push(":",String(c));if(c=this.f)this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(Dp(c,"/"==c.charAt(0)?Fp:Gp,!0));(c=this.g.toString())&&a.push("?",c);(c=this.l)&&a.push("#",Dp(c,Hp));return a.join("")};
wp.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?xp(b,a.j):c=!!a.F;c?b.F=a.F:c=!!a.i;c?yp(b,a.i):c=null!=a.D;var d=a.f;if(c)zp(b,a.D);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.i&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.g.toString();c?Ap(b,a.g.clone()):c=!!a.l;c&&(b.l=a.l);return b};
wp.prototype.clone=function(){return new wp(this)};
function xp(a,b,c){a.j=c?Bp(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function yp(a,b,c){a.i=c?Bp(b,!0):b}
function zp(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.D=b}else a.D=null}
function Ap(a,b,c){b instanceof Cp?(a.g=b,Ip(a.g,a.w)):(c||(b=Dp(b,Jp)),a.g=new Cp(b,a.w))}
function bp(a,b,c){a.g.set(b,c)}
function Ro(a,b,c){Array.isArray(c)||(c=[String(c)]);Kp(a.g,b,c)}
function No(a){bp(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Lp(a){return a instanceof wp?a.clone():new wp(a,void 0)}
function Mp(a,b,c,d){var e=new wp(null,void 0);a&&xp(e,a);b&&yp(e,b);c&&zp(e,c);d&&(e.f=d);return e}
function Bp(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Dp(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Np),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Np(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Ep=/[#\/\?@]/g,Gp=/[#\?:]/g,Fp=/[#\?]/g,Jp=/[#\?@]/g,Hp=/#/g;function Cp(a,b){this.g=this.f=null;this.i=a||null;this.j=!!b}
function Op(a){a.f||(a.f=new qp,a.g=0,a.i&&$f(a.i,function(b,c){a.add(td(b),c)}))}
h=Cp.prototype;h.add=function(a,b){Op(this);this.i=null;a=Pp(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
h.remove=function(a){Op(this);a=Pp(this,a);return tp(this.f.g,a)?(this.i=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
h.clear=function(){this.f=this.i=null;this.g=0};
h.isEmpty=function(){Op(this);return 0==this.g};
function Qp(a,b){Op(a);b=Pp(a,b);return tp(a.f.g,b)}
h.forEach=function(a,b){Op(this);this.f.forEach(function(c,d){z(c,function(e){a.call(b,e,d,this)},this)},this)};
h.Aa=function(){Op(this);for(var a=this.f.qa(),b=this.f.Aa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.qa=function(a){Op(this);var b=[];if("string"===typeof a)Qp(this,a)&&(b=ob(b,this.f.get(Pp(this,a))));else{a=this.f.qa();for(var c=0;c<a.length;c++)b=ob(b,a[c])}return b};
h.set=function(a,b){Op(this);this.i=null;a=Pp(this,a);Qp(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.qa(a);return 0<c.length?String(c[0]):b};
function Kp(a,b,c){a.remove(b);0<c.length&&(a.i=null,a.f.set(Pp(a,b),pb(c)),a.g=a.g+c.length)}
h.toString=function(){if(this.i)return this.i;if(!this.f)return"";for(var a=[],b=this.f.Aa(),c=0;c<b.length;c++){var d=b[c],e=sd(d);d=this.qa(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+sd(d[f]));a.push(g)}}return this.i=a.join("&")};
h.clone=function(){var a=new Cp;a.i=this.i;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function Pp(a,b){var c=String(b);a.j&&(c=c.toLowerCase());return c}
function Ip(a,b){b&&!a.j&&(Op(a),a.i=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),Kp(this,e,c))},a));
a.j=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)vp(arguments[b],function(c,d){this.add(d,c)},this)};function Rp(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Sp(a,b,function(g){g?c(!0):n.setTimeout(function(){Rp(a,b,c,d,f)},f)})}}
function Sp(a,b,c){var d=new Image;d.onload=function(){try{Tp(d),c(!0)}catch(e){}};
d.onerror=function(){try{Tp(d),c(!1)}catch(e){}};
d.onabort=function(){try{Tp(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Tp(d),c(!1)}catch(e){}};
n.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
od(d,a)}
function Tp(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Up(){}
Up.prototype.stringify=function(a){return n.JSON.stringify(a,void 0)};
Up.prototype.parse=function(a){return n.JSON.parse(a,void 0)};function Vp(a){this.f=a;this.g=new Up}
h=Vp.prototype;h.zc=null;h.ha=null;h.ac=!1;h.me=null;h.Mb=null;h.Fc=null;h.Ac=null;h.ra=null;h.Ha=-1;h.Bb=null;h.wb=null;h.connect=function(a){this.Ac=a;a=Wp(this.f,null,this.Ac);Yo(3);this.me=x();var b=this.f.F;null!=b?(this.Bb=b[0],(this.wb=b[1])?(this.ra=1,Xp(this)):(this.ra=2,Yp(this))):(Ro(a,"MODE","init"),this.ha=new Jo(this,void 0,void 0,void 0),this.ha.Xa=this.zc,Po(this.ha,a,!1,null,!0),this.ra=0)};
function Xp(a){var b=Wp(a.f,a.wb,"/mail/images/cleardot.gif");No(b);Rp(b.toString(),5E3,t(a.Ne,a),3,2E3);a.va(1)}
h.Ne=function(a){if(a)this.ra=2,Yp(this);else{Yo(4);var b=this.f;b.Ba=b.Ka.Ha;Zp(b,9)}a&&this.va(2)};
function Yp(a){var b=a.f.A;if(null!=b)Yo(5),b?(Yo(11),$p(a.f,a,!1)):(Yo(12),$p(a.f,a,!0));else if(a.ha=new Jo(a,void 0,void 0,void 0),a.ha.Xa=a.zc,b=a.f,b=Wp(b,b.Gb()?a.Bb:null,a.Ac),Yo(5),!B||ee(10))Ro(b,"TYPE","xmlhttp"),Po(a.ha,b,!1,a.Bb,!1);else{Ro(b,"TYPE","html");var c=a.ha;a=!!a.Bb;c.nb=3;c.Ja=No(b.clone());ap(c,a)}}
h.sc=function(a){return this.f.sc(a)};
h.abort=function(){this.ha&&(this.ha.cancel(),this.ha=null);this.Ha=-1};
h.yd=function(){return!1};
h.Td=function(a,b){this.Ha=a.Cb;if(0==this.ra)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.Ba=this.Ha;Zp(c,2);return}this.Bb=c[0];this.wb=c[1]}else c=this.f,c.Ba=this.Ha,Zp(c,2);else if(2==this.ra)if(this.ac)Yo(7),this.Fc=x();else if("11111"==b){if(Yo(6),this.ac=!0,this.Mb=x(),c=this.Mb-this.me,!B||ee(10)||500>c)this.Ha=200,this.ha.cancel(),Yo(12),$p(this.f,this,!0)}else Yo(8),this.Mb=this.Fc=x(),this.ac=!1};
h.Vb=function(){this.Ha=this.ha.Cb;if(this.ha.wa)0==this.ra?this.wb?(this.ra=1,Xp(this)):(this.ra=2,Yp(this)):2==this.ra&&((!B||ee(10)?!this.ac:200>this.Fc-this.Mb)?(Yo(11),$p(this.f,this,!1)):(Yo(12),$p(this.f,this,!0)));else{0==this.ra?Yo(9):2==this.ra&&Yo(10);var a=this.f;this.ha.getLastError();a.Ba=this.Ha;Zp(a,2)}};
h.Gb=function(){return this.f.Gb()};
h.isActive=function(){return this.f.isActive()};
h.va=function(a){this.f.va(a)};function aq(a){if(n.JSON)try{return n.JSON.parse(a)}catch(b){}return ep(a)}
;function bq(a){Bn.call(this);this.headers=new qp;this.N=a||null;this.g=!1;this.L=this.f=null;this.Y="";this.w=0;this.j="";this.l=this.V=this.A=this.R=!1;this.H=0;this.C=null;this.ya="";this.ba=this.ia=!1}
y(bq,Bn);var cq=/^https?$/i,dq=["POST","PUT"];h=bq.prototype;
h.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.j="";this.w=0;this.R=!1;this.g=!0;this.f=this.N?Wm(this.N):Wm(Um);this.L=this.N?this.N.getOptions():Um.getOptions();this.f.onreadystatechange=t(this.Sd,this);try{this.getStatus(),this.V=!0,this.f.open(b,String(a),!0),this.V=!1}catch(f){this.getStatus();eq(this,f);return}a=c||"";var e=this.headers.clone();d&&vp(d,function(f,g){e.set(g,
f)});
d=gb(e.Aa(),fq);c=n.FormData&&a instanceof n.FormData;!jb(dq,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.ya&&(this.f.responseType=this.ya);"withCredentials"in this.f&&this.f.withCredentials!==this.ia&&(this.f.withCredentials=this.ia);try{gq(this),0<this.H&&(this.ba=hq(this.f),this.getStatus(),this.ba?(this.f.timeout=this.H,this.f.ontimeout=t(this.rd,this)):this.C=En(this.rd,this.H,this)),this.getStatus(),this.A=!0,this.f.send(a),this.A=!1}catch(f){this.getStatus(),eq(this,f)}};
function hq(a){return B&&de(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function fq(a){return"content-type"==a.toLowerCase()}
h.rd=function(){"undefined"!=typeof Ba&&this.f&&(this.j="Timed out after "+this.H+"ms, aborting",this.w=8,this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};
function eq(a,b){a.g=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.j=b;a.w=5;iq(a);jq(a)}
function iq(a){a.R||(a.R=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.f&&this.g&&(this.getStatus(),this.g=!1,this.l=!0,this.f.abort(),this.l=!1,this.w=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),jq(this))};
h.K=function(){this.f&&(this.g&&(this.g=!1,this.l=!0,this.f.abort(),this.l=!1),jq(this,!0));bq.J.K.call(this)};
h.Sd=function(){this.O()||(this.V||this.A||this.l?kq(this):this.vg())};
h.vg=function(){kq(this)};
function kq(a){if(a.g&&"undefined"!=typeof Ba)if(a.L[1]&&4==So(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==So(a))En(a.Sd,0,a);else if(a.dispatchEvent("readystatechange"),4==So(a)){a.getStatus();a.g=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Xf(String(a.Y))[1]||null;if(!f&&n.self&&n.self.location){var g=n.self.location.protocol;f=g.substr(0,g.length-1)}e=!cq.test(f?
f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.w=6;try{var k=2<So(a)?a.f.statusText:""}catch(l){k=""}a.j=k+" ["+a.getStatus()+"]";iq(a)}}finally{jq(a)}}}
function jq(a,b){if(a.f){gq(a);var c=a.f,d=a.L[0]?Ga:null;a.f=null;a.L=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function gq(a){a.f&&a.ba&&(a.f.ontimeout=null);a.C&&(n.clearTimeout(a.C),a.C=null)}
h.isActive=function(){return!!this.f};
function So(a){return a.f?a.f.readyState:0}
h.getStatus=function(){try{return 2<So(this)?this.f.status:-1}catch(a){return-1}};
function To(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
h.getLastError=function(){return"string"===typeof this.j?this.j:String(this.j)};function lq(a,b,c){this.f=1;this.g=[];this.j=[];this.l=new Up;this.F=a||null;this.A=null!=b?b:null;this.w=c||!1}
function mq(a,b){this.g=a;this.f=b;this.context=null}
h=lq.prototype;h.xb=null;h.ea=null;h.W=null;h.yc=null;h.Ob=null;h.Vc=null;h.Pb=null;h.Db=0;h.Sf=0;h.aa=null;h.Ma=null;h.Fa=null;h.Va=null;h.Ka=null;h.kc=null;h.hb=-1;h.Bd=-1;h.Ba=-1;h.fb=0;h.bb=0;h.Ua=8;var nq=new Bn;function oq(a){Xm.call(this,"statevent",a)}
y(oq,Xm);function pq(a,b){Xm.call(this,"timingevent",a);this.size=b}
y(pq,Xm);function qq(a){Xm.call(this,"serverreachability",a)}
y(qq,Xm);h=lq.prototype;h.connect=function(a,b,c,d,e){Yo(0);this.yc=b;this.xb=c||{};d&&void 0!==e&&(this.xb.OSID=d,this.xb.OAID=e);this.w?(cp(t(this.hd,this,a),100),rq(this)):this.hd(a)};
function sq(a){tq(a);if(3==a.f){var b=a.Db++,c=a.Ob.clone();bp(c,"SID",a.i);bp(c,"RID",b);bp(c,"TYPE","terminate");uq(a,c);b=new Jo(a,a.i,b,void 0);b.nb=2;b.Ja=No(c.clone());od(new Image,b.Ja.toString());b.lb=x();Qo(b)}vq(a)}
h.hd=function(a){this.Ka=new Vp(this);this.Ka.zc=null;this.Ka.g=this.l;this.Ka.connect(a)};
function rq(a){a.Te(1,0);a.Ob=Wp(a,null,a.yc);wq(a)}
function tq(a){a.Ka&&(a.Ka.abort(),a.Ka=null);a.W&&(a.W.cancel(),a.W=null);a.Fa&&(n.clearTimeout(a.Fa),a.Fa=null);xq(a);a.ea&&(a.ea.cancel(),a.ea=null);a.Ma&&(n.clearTimeout(a.Ma),a.Ma=null)}
function yq(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.g.push(new mq(a.Sf++,b));2!=a.f&&3!=a.f||wq(a)}
h.yd=function(){return 0==this.f};
function wq(a){a.ea||a.Ma||(a.Ma=cp(t(a.Xd,a),0),a.fb=0)}
h.Xd=function(a){this.Ma=null;zq(this,a)};
function zq(a,b){if(1==a.f){if(!b){a.Db=Math.floor(1E5*Math.random());var c=a.Db++,d=new Jo(a,"",c,void 0);d.Xa=null;var e=Aq(a),f=a.Ob.clone();bp(f,"RID",c);bp(f,"CVER","1");uq(a,f);Mo(d,f,e);a.ea=d;a.f=2}}else 3==a.f&&(b?Bq(a,b):0==a.g.length||a.ea||Bq(a))}
function Bq(a,b){if(b)if(6<a.Ua){a.g=a.j.concat(a.g);a.j.length=0;var c=a.Db-1;var d=Aq(a)}else c=b.F,d=b.Za;else c=a.Db++,d=Aq(a);var e=a.Ob.clone();bp(e,"SID",a.i);bp(e,"RID",c);bp(e,"AID",a.hb);uq(a,e);c=new Jo(a,a.i,c,a.fb+1);c.Xa=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ea=c;Mo(c,e,d)}
function uq(a,b){if(a.aa){var c=a.aa.nd();c&&Sb(c,function(d,e){bp(b,e,d)})}}
function Aq(a){var b=Math.min(a.g.length,1E3),c=["count="+b];if(6<a.Ua&&0<b){var d=a.g[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.g[e].g,g=a.g[e].f;f=6>=a.Ua?e:f-d;try{Sb(g,function(k,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(k))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.j=a.j.concat(a.g.splice(0,b));
return c.join("&")}
function Cq(a){a.W||a.Fa||(a.D=1,a.Fa=cp(t(a.Wd,a),0),a.bb=0)}
function Dq(a){if(a.W||a.Fa||3<=a.bb)return!1;a.D++;a.Fa=cp(t(a.Wd,a),Eq(a,a.bb));a.bb++;return!0}
h.Wd=function(){this.Fa=null;this.W=new Jo(this,this.i,"rpc",this.D);this.W.Xa=null;this.W.Bc=0;var a=this.Vc.clone();bp(a,"RID","rpc");bp(a,"SID",this.i);bp(a,"CI",this.kc?"0":"1");bp(a,"AID",this.hb);uq(this,a);if(!B||ee(10))bp(a,"TYPE","xmlhttp"),Po(this.W,a,!0,this.Pb,!1);else{bp(a,"TYPE","html");var b=this.W,c=!!this.Pb;b.nb=3;b.Ja=No(a.clone());ap(b,c)}};
function $p(a,b,c){a.kc=c;a.Ba=b.Ha;a.w||rq(a)}
h.Td=function(a,b){if(0!=this.f&&(this.W==a||this.ea==a))if(this.Ba=a.Cb,this.ea==a&&3==this.f)if(7<this.Ua){try{var c=this.l.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Fa){if(this.W)if(this.W.lb+3E3<this.ea.lb)xq(this),this.W.cancel(),this.W=null;else break a;Dq(this);Yo(19)}}else this.Bd=c[1],0<this.Bd-this.hb&&37500>c[2]&&this.kc&&0==this.bb&&!this.Va&&(this.Va=cp(t(this.Vf,this),6E3));else Zp(this,11)}else b!=He.Yh.f&&Zp(this,11);else if(this.W==a&&xq(this),
!Cb(b)){c=this.l.parse(b);Array.isArray(c);for(var d=0;d<c.length;d++){var e=c[d];this.hb=e[0];e=e[1];2==this.f?"c"==e[0]?(this.i=e[1],this.Pb=e[2],e=e[3],null!=e?this.Ua=e:this.Ua=6,this.f=3,this.aa&&this.aa.bd(),this.Vc=Wp(this,this.Gb()?this.Pb:null,this.yc),Cq(this)):"stop"==e[0]&&Zp(this,7):3==this.f&&("stop"==e[0]?Zp(this,7):"noop"!=e[0]&&this.aa&&this.aa.ad(e),this.bb=0)}}};
h.Vf=function(){null!=this.Va&&(this.Va=null,this.W.cancel(),this.W=null,Dq(this),Yo(20))};
function xq(a){null!=a.Va&&(n.clearTimeout(a.Va),a.Va=null)}
h.Vb=function(a){if(this.W==a){xq(this);this.W=null;var b=2}else if(this.ea==a)this.ea=null,b=1;else return;this.Ba=a.Cb;if(0!=this.f)if(a.wa)1==b?(b=x()-a.lb,nq.dispatchEvent(new pq(nq,a.Za?a.Za.length:0,b,this.fb)),wq(this),this.j.length=0):Cq(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ba)){if(d=1==b)this.ea||this.Ma||1==this.f||2<=this.fb?d=!1:(this.Ma=cp(t(this.Xd,this,a),Eq(this,this.fb)),this.fb++,d=!0);d=!(d||2==b&&Dq(this))}if(d)switch(c){case 1:Zp(this,5);break;case 4:Zp(this,
10);break;case 3:Zp(this,6);break;case 7:Zp(this,12);break;default:Zp(this,2)}}};
function Eq(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.Te=function(a){if(!jb(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function Zp(a,b){if(2==b||9==b){var c=null;a.aa&&(c=null);var d=t(a.fh,a);c||(c=new wp("//www.google.com/images/cleardot.gif"),No(c));Sp(c.toString(),1E4,d)}else Yo(2);Fq(a,b)}
h.fh=function(a){a?Yo(2):(Yo(1),Fq(this,8))};
function Fq(a,b){a.f=0;a.aa&&a.aa.Zc(b);vq(a);tq(a)}
function vq(a){a.f=0;a.Ba=-1;if(a.aa)if(0==a.j.length&&0==a.g.length)a.aa.pc();else{pb(a.j);var b=pb(a.g);a.j.length=0;a.g.length=0;a.aa.pc(b)}}
function Wp(a,b,c){var d=Lp(c);if(""!=d.i)b&&yp(d,b+"."+d.i),zp(d,d.D);else{var e=window.location;d=Mp(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.xb&&Sb(a.xb,function(f,g){bp(d,g,f)});
bp(d,"VER",a.Ua);uq(a,d);return d}
h.sc=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new bq;a.ia=!1;return a};
h.isActive=function(){return!!this.aa&&this.aa.isActive(this)};
function cp(a,b){if(!Ma(a))throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){a()},b)}
h.va=function(a){nq.dispatchEvent(new qq(nq,a))};
function Yo(a){nq.dispatchEvent(new oq(nq,a))}
h.Gb=function(){return!(!B||ee(10))};
function Gq(){}
h=Gq.prototype;h.bd=function(){};
h.ad=function(){};
h.Zc=function(){};
h.pc=function(){};
h.nd=function(){return{}};
h.isActive=function(){return!0};function Hq(){}
Ha(Hq);Hq.prototype.f=0;function Iq(a){Bn.call(this);this.H=a||We();this.ia=null;this.gb=!1;this.j=null;this.A=void 0;this.V=null;this.ya=!1}
y(Iq,Bn);h=Iq.prototype;h.Af=Hq.getInstance();h.getId=function(){return this.ia||(this.ia=":"+(this.Af.f++).toString(36))};
h.uc=function(){return this.j};
function Jq(a,b){return a.j?E(b,a.j||a.H.f):null}
function Kq(a,b){if(a.gb)throw Error("Component already rendered");if(b){a.ya=!0;var c=Ye(b);a.H&&a.H.f==c||(a.H=We(b));a.j=b;a.eb()}else throw Error("Invalid element to decorate");}
h.eb=function(){this.gb=!0;Lq(this,function(a){!a.gb&&a.uc()&&a.eb()})};
h.La=function(){Lq(this,function(a){a.gb&&a.La()});
this.A&&Io(this.A);this.gb=!1};
h.K=function(){this.gb&&this.La();this.A&&(this.A.dispose(),delete this.A);Lq(this,function(a){a.dispose()});
!this.ya&&this.j&&zf(this.j);this.j=this.V=null;Iq.J.K.call(this)};
function Lq(a,b){a.V&&z(a.V,b,void 0)}
;function Mq(a,b,c){Oi.call(this);this.f=a;this.j=b||0;this.g=c;this.i=t(this.qd,this)}
y(Mq,Oi);h=Mq.prototype;h.Ab=0;h.K=function(){Mq.J.K.call(this);this.stop();delete this.f;delete this.g};
h.start=function(a){this.stop();this.Ab=En(this.i,void 0!==a?a:this.j)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.Ab);this.Ab=0};
h.isActive=function(){return 0!=this.Ab};
h.qd=function(){this.Ab=0;this.f&&this.f.call(this.g)};function Nq(){this.g=-1}
;function Oq(){this.g=64;this.f=[];this.w=[];this.D=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
y(Oq,Nq);Oq.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Pq(a,b,c){c||(c=0);var d=a.D;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):
(f=c^g^k,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
Oq.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.w,f=this.i;d<b;){if(0==f)for(;d<=c;)Pq(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Pq(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Pq(this,e);f=0;break}}this.i=f;this.l+=b}};
Oq.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.w[c]=b&255,b/=256;Pq(this,this.w);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Qq(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Rq(a){return a.classList?a.classList:Qq(a).match(/\S+/g)||[]}
function Sq(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function I(a,b){return a.classList?a.classList.contains(b):jb(Rq(a),b)}
function J(a,b){if(a.classList)a.classList.add(b);else if(!I(a,b)){var c=Qq(a);Sq(a,c+(0<c.length?" "+b:b))}}
function Tq(a,b){if(a.classList)z(b,function(f){J(a,f)});
else{var c={};z(Rq(a),function(f){c[f]=!0});
z(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Sq(a,d)}}
function K(a,b){a.classList?a.classList.remove(b):I(a,b)&&Sq(a,bb(Rq(a),function(c){return c!=b}).join(" "))}
function Uq(a,b){a.classList?z(b,function(c){K(a,c)}):Sq(a,bb(Rq(a),function(c){return!jb(b,c)}).join(" "))}
function Vq(a,b,c){c?J(a,b):K(a,b)}
function Wq(a,b,c){I(a,b)&&(K(a,b),J(a,c))}
function Xq(a,b){var c=!I(a,b);Vq(a,b,c);return c}
;function Yq(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Zq(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function $q(a){return vd(Db(a.replace(ar,function(b,c){return br.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var br=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,ar=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function cr(a,b,c,d,e,f,g,k){this.f=a;this.l=b;this.i=c;this.w=d;this.j=e;this.D=f;this.g=g;this.F=k}
cr.prototype.clone=function(){return new cr(this.f,this.l,this.i,this.w,this.j,this.D,this.g,this.F)};
cr.prototype.equals=function(a){return this.f==a.f&&this.l==a.l&&this.i==a.i&&this.w==a.w&&this.j==a.j&&this.D==a.D&&this.g==a.g&&this.F==a.F};
function dr(a,b){if(0==b)return a.f;if(1==b)return a.g;var c=Se(a.f,a.i,b),d=Se(a.i,a.j,b),e=Se(a.j,a.g,b);c=Se(c,d,b);d=Se(d,e,b);return Se(c,d,b)}
function er(a,b){var c=(b-a.f)/(a.g-a.f);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=dr(a,c);var k=(dr(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=dr(a,c);return c}
function fr(a,b){var c=er(a,b);if(0==c)c=a.l;else if(1==c)c=a.F;else{var d=Se(a.l,a.w,c),e=Se(a.w,a.D,c),f=Se(a.D,a.F,c);d=Se(d,e,c);e=Se(e,f,c);c=Se(d,e,c)}return c}
;var gr=function(){if(Sd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Pb))?a[1]:"0"}return Rd?(a=/10[_.][0-9_.]+/,(a=a.exec(Pb))?a[0].replace(/_/g,"."):"10"):Td?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Pb))?a[1]:""):Ud||Vd||Wd?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Pb))?a[1].replace(/_/g,"."):""):""}();function hr(a){return(a=a.exec(Pb))?a[1]:""}
var ir=function(){if(ie)return hr(/Firefox\/([0-9.]+)/);if(B||Nd||Ld)return ce;if(me)return Gd()?hr(/CriOS\/([0-9.]+)/):hr(/Chrome\/([0-9.]+)/);if(ne&&!Gd())return hr(/Version\/([0-9.]+)/);if(je||ke){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Pb);if(a)return a[1]+"."+a[2]}else if(le)return(a=hr(/Android\s+([0-9.]+)/))?a:hr(/Version\/([0-9.]+)/);return""}();
function jr(a){return 0<=Nb(ir,a)}
;function kr(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=Mg(k)){var m=Qg(k);if(!l){l=Xg(k);var q;if(q=l){q=ne&&jr(10);var u;if(u=Xd)u=0<=Nb(gr,10);q=Pd||q||u}l=q?-k.scrollLeft:!l||Od&&de("8")||"visible"==Lg(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=Ue(m,new Te(l,k.scrollTop))}}}k=m||new Te;m=Wg(a);if(l=Pg(a)){var v=new Bg(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,v.left);q=Math.min(m.left+m.width,
v.left+v.width);l<=q&&(u=Math.max(m.top,v.top),v=Math.min(m.top+m.height,v.top+v.height),u<=v&&(m.left=l,m.top=u,m.width=q-l,m.height=v-u))}l=We(a);u=We(c);if(l.f!=u.f){q=l.f.body;u=lf(u.f);v=new Te(0,0);var w=(w=Ye(q))?lf(w):window;if(Id(w,"parent")){var N=q;do{var da=w==u?Qg(N):Sg(N);v.x+=da.x;v.y+=da.y}while(w&&w!=u&&w!=w.parent&&(N=w.frameElement)&&(w=w.parent))}q=Ue(v,Qg(q));!B||ee(9)||hf(l.f)||(q=Ue(q,jf(l.f)));m.left+=q.x;m.top+=q.y}a=lr(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new Te(b,
m.top+(a&1?m.height:0));b=Ue(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var fa;g&&(fa=Pg(c))&&(fa.top-=k.y,fa.right-=k.x,fa.bottom-=k.y,fa.left-=k.x);return mr(b,c,d,f,fa,g,void 0)}
function mr(a,b,c,d,e,f,g){a=a.clone();var k=lr(b,c);c=Ug(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,
m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new Bg(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new Te(f.left,f.top);a instanceof Te?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Tg(g,!1);b.style.top=Tg(a,!1);g=new Ve(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=hf(We(Ye(b)).f),!B||de("10")||a&&de("8")?(b=b.style,Pd?b.MozBoxSizing="border-box":Qd?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(B?(a=Zg(b,"paddingLeft"),f=Zg(b,"paddingRight"),d=Zg(b,"paddingTop"),k=Zg(b,"paddingBottom"),a=new yg(d,f,k,a)):(a=Kg(b,"paddingLeft"),f=Kg(b,"paddingRight"),d=Kg(b,"paddingTop"),k=Kg(b,"paddingBottom"),a=new yg(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(a))),B&&!ee(9)?(f=ah(b,"borderLeft"),d=ah(b,"borderRight"),k=ah(b,"borderTop"),b=ah(b,"borderBottom"),b=new yg(k,d,b,f)):(f=Kg(b,"borderLeftWidth"),d=Kg(b,"borderRightWidth"),k=Kg(b,"borderTopWidth"),b=Kg(b,"borderBottomWidth"),
b=new yg(parseFloat(k),parseFloat(d),parseFloat(b),parseFloat(f))),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function lr(a,b){return(b&8&&Xg(a)?b^4:b)&-9}
;function nr(a){Oi.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.g={};this.w=!!a}
y(nr,Oi);h=nr.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function or(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.sa(d),b.apply(void 0,arguments))},a)}
function pr(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=gb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.sa(b)}}
h.sa=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ga):(c&&lb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.ja=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];qr(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.sa(c)}}return 0!=e}return!1};
function qr(a,b,c){nl(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(z(b,this.sa,this),delete this.g[a])}else this.f.length=0,this.g={}};
function rr(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=rr(a,d);return c}
h.K=function(){nr.J.K.call(this);this.clear();this.i.length=0};function sr(a){this.f=a}
sr.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,fp(b))};
sr.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
sr.prototype.remove=function(a){this.f.remove(a)};function tr(a){this.f=a}
y(tr,sr);function ur(a){this.data=a}
function vr(a){return void 0===a||a instanceof ur?a:new ur(a)}
tr.prototype.set=function(a,b){tr.J.set.call(this,a,vr(b))};
tr.prototype.g=function(a){a=tr.J.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
tr.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function wr(a){this.f=a}
y(wr,tr);function xr(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
wr.prototype.set=function(a,b,c){if(b=vr(b)){if(c){if(c<x()){wr.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}wr.J.set.call(this,a,b)};
wr.prototype.g=function(a,b){var c=wr.J.g.call(this,a);if(c)if(!b&&xr(c))wr.prototype.remove.call(this,a);else return c};function yr(a){this.f=a}
y(yr,wr);function zr(a,b){var c=[];op(b,function(d){try{var e=yr.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):xr(e)&&c.push(d)},a);
return c}
function Ar(a,b){var c=zr(a,b);z(c,function(d){yr.prototype.remove.call(this,d)},a)}
;function Br(){}
;function Cr(){}
y(Cr,Br);Cr.prototype.clear=function(){var a=pp(this.Ea(!0)),b=this;z(a,function(c){b.remove(c)})};function Dr(a){this.f=a}
y(Dr,Cr);h=Dr.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.Ea=function(a){var b=0,c=this.f,d=new mp;d.next=function(){if(b>=c.length)throw lp;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function Er(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(Er,Dr);function Fr(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
y(Fr,Dr);function Gr(a,b){this.g=a;this.f=null;if(B&&!ee(9)){Hr||(Hr=new qp);this.f=Hr.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Hr.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
y(Gr,Cr);var Ir={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hr=null;function Jr(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ir[b]})}
h=Gr.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute(Jr(a),b);Kr(this)};
h.get=function(a){a=this.f.getAttribute(Jr(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute(Jr(a));Kr(this)};
h.Ea=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new mp;d.next=function(){if(b>=c.length)throw lp;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Kr(this)};
function Kr(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Lr(a,b){this.g=a;this.f=b+"::"}
y(Lr,Cr);Lr.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Lr.prototype.get=function(a){return this.g.get(this.f+a)};
Lr.prototype.remove=function(a){this.g.remove(this.f+a)};
Lr.prototype.Ea=function(a){var b=this.g.Ea(!0),c=this,d=new mp;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Mr(a){var b=new Er;return b.isAvailable()?a?new Lr(b,a):b:null}
;function Nr(){this.f=[];this.g=[]}
Nr.prototype.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
Nr.prototype.clear=function(){this.f=[];this.g=[]};
Nr.prototype.remove=function(a){var b=this.f;var c=ab(b,a);0<=c?(mb(b,c),b=!0):b=!1;return b||lb(this.g,a)};
Nr.prototype.qa=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};function Or(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||n,e=d.document,f=a.nonce||Ca(d);f&&!a.nonce&&(a.nonce=f);if("help"==a.flow){var g=r("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(g=1200>=k.length)&&(a.psdJson=k)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=
c+"/load.js?";for(var l in a)b=a[l],null==b||Na(b)||(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=We(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);pd(a,Vf(d));e.body.appendChild(a)}}
p("userfeedback.api.startFeedback",Or,void 0);p("userfeedback.api.isBrowserSupportedForGenie",function(){return Pr()},void 0);
function Pr(){return B?jr("8"):ie?jr("15"):ne?jr("5"):me||Nd}
p("userfeedback.api.isBrowserSupportedForHelp",Pr,void 0);function Qr(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Rr=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};p("yt.config_",Rr,void 0);function Sr(a){Qr(Rr,arguments)}
function L(a,b){return a in Rr?Rr[a]:b}
function Tr(){return L("ERRORS",[])}
function Ur(a){var b=Rr.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Vr=[];function Wr(a){Vr.forEach(function(b){return b(a)})}
function Xr(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Yr(b),Wr(b)}}:a}
function Yr(a){var b=r("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Tr(),b.push([a,"ERROR",void 0,void 0,void 0]),Sr("ERRORS",b))}
function Zr(a){var b=r("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Tr(),b.push([a,"WARNING",void 0,void 0,void 0]),Sr("ERRORS",b))}
;function $r(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=td(e[0]||""),g=td(e[1]||"");f in b?Ja(b[f])?qb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};Yr(k)}}}return b}
function as(a){var b=[];Sb(a,function(c,d){var e=sd(d),f;Ja(c)?f=c:f=[c];z(f,function(g){""==g?b.push(e):b.push(e+"="+sd(g))})});
return b.join("&")}
function bs(a){"?"==a.charAt(0)&&(a=a.substr(1));return $r(a)}
function cs(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),bs(1<a.length?a[1]:a[0])):{}}
function ds(a,b){return es(a,b||{},!0)}
function es(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=bs(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return fg(a,e)+d}
function fs(){var a=Zf(gs);return null!==a?a.split(".").reverse():null}
;function hs(a){var b=is;a=void 0===a?r("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(js(b),ks(b));b.ca_type="image";a&&(b.bid=a);return b}
function js(a){var b={};b.dt=zk;b.flash="0";a:{try{var c=a.f.top.location.href}catch(d){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);wh(b);return b}
function ks(a){var b=Jk(a.f),c=nj(a.f.top),d={};return d.bc=Vk(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=pj(a.g),d.wgl=!!Ge.WebGLRenderingContext,d}
var is=new function(){var a=window.document;this.f=window;this.g=a};
p("yt.ads_.signals_.getAdSignalsString",function(a){return as(hs(a))},void 0);x();function ls(a){a=ms(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ns(a,b){var c=ms(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function ms(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
;var os=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ps(){if(!os)return null;var a=os();return"open"in a?a:null}
;function M(a,b){Ma(a)&&(a=Xr(a));return window.setTimeout(a,b)}
function qs(a,b){Ma(a)&&(a=Xr(a));return window.setInterval(a,b)}
function O(a){window.clearTimeout(a)}
function rs(a){window.clearInterval(a)}
;var ss={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ts="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
us=!1;
function vs(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Xf(a)[1]||null,e=Zf(a);d&&e?(d=c,c=Xf(a),d=Xf(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Zf(c)==e&&(Number(Xf(c)[4]||null)||null)==(Number(Xf(a)[4]||null)||null):!0;d=ls("web_ajax_ignore_global_headers_if_set");for(var f in ss)e=L(ss[f]),!e||!c&&!ws(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||ws(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||ws(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=
typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||ws(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=as(hs(void 0));return b}
function xs(a){var b=window.location.search,c=Zf(a),d=Yf(Xf(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=bs(b),f={};z(ts,function(g){e[g]&&(f[g]=e[g])});
return es(a,f||{},!1)}
function ws(a,b){var c=L("CORS_HEADER_WHITELIST")||{},d=Zf(a);return d?(c=c[d])?jb(c,b):!1:!0}
function ys(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=zs(a,b);var d=As(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&O(f);var k=g.ok,l=function(m){m=m||{};var q=b.context||n;k?b.onSuccess&&b.onSuccess.call(q,m,g):b.onError&&b.onError.call(q,m,g);b.ka&&b.ka.call(q,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Od&&0<b.timeout&&(f=M(function(){e||(e=!0,O(f),b.Od.call(b.context||n))},b.timeout))}else Bs(a,b)}
function Bs(a,b){var c=b.format||"JSON";a=zs(a,b);var d=As(a,b),e=!1,f,g=Cs(a,function(k){if(!e){e=!0;f&&O(f);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||q||u)m=Ds(c,k,b.Ga);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};q=b.context||n;
l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.ka&&b.ka.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ya&&0<b.timeout&&(f=M(function(){e||(e=!0,g.abort(),O(f),b.Ya.call(b.context||n,g))},b.timeout));
return g}
function zs(a,b){b.mj&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0),d=b.Da;d&&(d[c]&&delete d[c],a=ds(a,d));return a}
function As(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.P,g=L("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.jj||Zf(a)&&!b.withCredentials&&Zf(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.P&&b.P[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=bs(e),gc(e,f),e=b.ae&&"JSON"==b.ae?JSON.stringify(e):dg(e));f=e||f&&!$b(f);!us&&f&&"POST"!=b.method&&(us=!0,Yr(Error("AJAX request with postData should use POST")));
return e}
function Ds(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Es(b):null)d={},z(b.getElementsByTagName("*"),function(e){d[e.tagName]=Fs(e)})}c&&Gs(d);
return d}
function Gs(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=dd(a[b],null):Gs(a[b])}}
function Es(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fs(a){var b="";z(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hs(a,b){if(!a)return null;var c=a.getElementsByTagName(b);return c&&0<c.length?Fs(c[0]):null}
var Is=Es;function Cs(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Xr(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ps();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;ls("debug_forward_web_query_parameters")&&(a=xs(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vs(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Js={},Ks=0;function Ls(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Pb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Dc(Hc(a)),"about:invalid#zClosurez"===a?a="":(a=Wc(Xc(a)).toString(),a=sd(fp(a))),Cb(a)||(a=mf("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Ye(a).body.appendChild(a))):e?Cs(a,b,"POST",e,d):L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Cs(a,b,"GET","",d):Ms(a,b)||Ns(a,b))}
function Ms(a,b){if(!Ur("web_use_beacon_api_for_ad_click_server_pings"))return!1;var c=Yf(Xf(a)[5]||null);return c&&-1!=c.indexOf("/aclk")&&"1"===ig(a,"ae")&&"1"===ig(a,"act")?Os(a)?(b&&b(),!0):!1:!1}
function Os(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Ns(a,b){var c=new Image,d=""+Ks++;Js[d]=c;c.onload=c.onerror=function(){b&&Js[d]&&b();delete Js[d]};
c.src=a}
;var Ps=0;function Qs(a){var b=a.__yt_uid_key;b||(b=Rs(),a.__yt_uid_key=b);return b}
function Ss(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?z(a.childNodes,function(c){b.appendChild(Ss(c))}):b.innerHTML=a.innerHTML;
return b}
function Ts(a,b){a=D(a);b=D(b);return!!Sf(a,function(c){return c===b},!0,void 0)}
function Us(a,b){var c=af(a,null,b);return c.length?c[0]:null}
function Vs(){var a=document,b;eb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Ws(){Vq(document.body,"hide-players",!1);z(cf("preserve-players"),function(a){K(a,"preserve-players")})}
var Rs=r("ytDomDomGetNextId")||function(){return++Ps};
p("ytDomDomGetNextId",Rs,void 0);var Xs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ys(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xs||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Zs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Ys.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ys.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ys.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $s=r("ytEventsEventsListeners")||{};p("ytEventsEventsListeners",$s,void 0);var at=r("ytEventsEventsCounter")||{count:0};p("ytEventsEventsCounter",at,void 0);
function bt(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Zb($s,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&cc(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function P(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bt(a,b,c,d);if(e)return e;e=++at.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new Ys(k);if(!Sf(k.relatedTarget,function(l){return l==a},!0))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new Ys(k);
k.currentTarget=a;return c.call(a,k)};
g=Xr(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ct()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);$s[e]=[a,b,c,g,d];return e}
function dt(a,b,c,d){var e=a||document;return P(e,b,function(f){var g=Sf(f.target,function(k){return k===e||d(k)},!0);
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function Q(a){a&&("string"==typeof a&&(a=[a]),z(a,function(b){if(b in $s){var c=$s[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ct()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete $s[b]}}))}
function et(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function ft(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
var ct=zb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function gt(a,b,c,d){return dt(a,b,c,function(e){return I(e,d)})}
function ht(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function it(a,b,c){var d=void 0===d?{}:d;var e=P(a,b,function(){Q(e);c.apply(a,arguments)},d)}
function jt(a){for(var b in $s)$s[b][0]==a&&Q(b)}
;var kt=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,lt=/^https?:\/\/(www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/slav)/,mt=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;function nt(a,b,c,d){!a&&(void 0===c?0:c)&&Zr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a}
function ot(a){var b=void 0===b?!1:b;if(!(b=nt(kt&&kt.test(a)?!0:!1,a,b,"Active View 3rd Party Integration URL"))){var c=void 0===c?!1:c;b=nt(lt&&lt.test(a)?!0:!1,a,c,"Google/YouTube Brand Lift URL")}if(!(c=b)){var d=void 0===d?!1:d;c=nt(mt&&mt.test(a)?!0:!1,a,d,"Nielsen OCR URL")}return c}
;var pt={Rh:"atp",Zi:"ska",Ji:"que",Di:"mus",Yi:"sus",mi:"dsp",Ti:"seq"};var qt=r("ytPubsubPubsubInstance")||new nr;nr.prototype.subscribe=nr.prototype.subscribe;nr.prototype.unsubscribeByKey=nr.prototype.sa;nr.prototype.publish=nr.prototype.ja;nr.prototype.clear=nr.prototype.clear;p("ytPubsubPubsubInstance",qt,void 0);var rt=r("ytPubsubPubsubSubscribedKeys")||{};p("ytPubsubPubsubSubscribedKeys",rt,void 0);var st=r("ytPubsubPubsubTopicToKeys")||{};p("ytPubsubPubsubTopicToKeys",st,void 0);var tt=r("ytPubsubPubsubIsSynchronous")||{};p("ytPubsubPubsubIsSynchronous",tt,void 0);
function R(a,b,c){var d=ut();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){rt[e]&&b.apply(c||window,f)};
try{tt[a]?g():M(g,0)}catch(k){Yr(k)}},c);
rt[e]=!0;st[a]||(st[a]=[]);st[a].push(e);return e}return 0}
function vt(a,b,c){var d=R(a,function(e){b.apply(c,arguments);wt(d)},c)}
function wt(a){var b=ut();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),z(a,function(c){b.unsubscribeByKey(c);delete rt[c]}))}
function S(a,b){var c=ut();return c?c.publish.apply(c,arguments):!1}
function xt(a,b){tt[a]=!0;var c=ut();c=c?c.publish.apply(c,arguments):!1;tt[a]=!1;return c}
function zt(a){var b=ut();if(b)if(b.clear(a),a)At(a);else for(var c in st)At(c)}
function ut(){return r("ytPubsubPubsubInstance")}
function At(a){st[a]&&(a=st[a],z(a,function(b){rt[b]&&delete rt[b]}),a.length=0)}
;var Bt=window,Ct=Bt.ytcsi&&Bt.ytcsi.now?Bt.ytcsi.now:Bt.performance&&Bt.performance.timing&&Bt.performance.now?function(){return Bt.performance.timing.navigationStart+Bt.performance.now()}:function(){return(new Date).getTime()};var Dt=ns("initial_gel_batch_timeout",1E3),Et=Math.pow(2,16)-1,Ft=null,Gt=0,Ht={log_event:"events",log_interaction:"interactions"},It=Object.create(null);It.log_event="GENERIC_EVENT_LOGGING";It.log_interaction="INTERACTION_LOGGING";var Jt=new Set(["log_event"]),Kt={},Lt=0,Mt=0,Nt=0,Ot=!0,Pt=r("ytLoggingTransportLogPayloadsQueue_")||{};p("ytLoggingTransportLogPayloadsQueue_",Pt,void 0);var Qt=r("ytLoggingTransportTokensToCttTargetIds_")||{};p("ytLoggingTransportTokensToCttTargetIds_",Qt,void 0);
var Rt=r("ytLoggingTransportDispatchedStats_")||{};p("ytLoggingTransportDispatchedStats_",Rt,void 0);var St=r("ytLoggingTransportCapturedTime_")||{};p("ytytLoggingTransportCapturedTime_",St,void 0);function Tt(){O(Lt);O(Mt);Mt=0;if(!$b(Pt)){for(var a in Pt){var b=Kt[a];b&&b.isReady()&&(Ut(a,b),delete Pt[a],Ot=!1)}$b(Pt)||Vt()}}
function Wt(){var a=[];for(e in Pt){var b=Rt[e]||{};Rt[e]=b;for(var c in Pt[e]){var d=Xt(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(Ct());for(var f in Rt)b=Rt[f],b.eventType=f in It?It[f]:"UNKNOWN_TYPE",c=St[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),St[f]=e,delete Rt[f];return a}
function Vt(){ls("web_gel_timeout_cap")&&!Mt&&(Mt=M(Tt,6E4));O(Lt);var a=L("LOGGING_BATCH_TIMEOUT",ns("web_gel_debounce_ms",1E4));ls("shorten_initial_gel_batch_timeout")&&Ot&&(a=Dt);Lt=M(Tt,a)}
function Xt(a,b){b=void 0===b?"":b;Pt[a]=Pt[a]||{};Pt[a][b]=Pt[a][b]||[];return Pt[a][b]}
function Ut(a,b){var c=Ht[a],d=Rt[a]||{};Rt[a]=d;var e=Math.round(Ct());for(u in Pt[a]){var f=ec,g=b.f||Yt();g={client:{hl:g.Hf,gl:g.Gf,clientName:g.Ff,clientVersion:g.innertubeContextClientVersion,configInfo:g.Ef}};var k=window.devicePixelRatio;k&&1!=k&&(g.client.screenDensityFloat=String(k));k=L("EXPERIMENTS_TOKEN","");""!==k&&(g.client.experimentsToken=k);var l=k=void 0,m=[],q=L("EXPERIMENTS_FORCED_FLAGS",{});for(l in q)m.push({key:l,value:String(q[l])});l=L("EXPERIMENT_FLAGS",{});for(k in l)k.startsWith("force_")&&
void 0===q[k]&&m.push({key:k,value:String(l[k])});k=m;0<k.length&&(g.request={internalExperimentFlags:k});L("DELEGATED_SESSION_ID")&&!ls("pageid_as_header_web")&&(g.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Xt(a,u);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Qt[u])a:{m=u;if(g.videoId)k="VIDEO";else if(g.playlistId)k="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:m,scope:k}]}delete Qt[u];f.requestTimeMs=e;ls("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(g=L("EVENT_ID",void 0))k=L("BATCH_CLIENT_COUNTER",void 0)||0,!k&&ls("web_client_counter_random_seed")&&(k=Math.floor(Math.random()*Et/2)),k++,k>Et&&(k=1),Sr("BATCH_CLIENT_COUNTER",k),g={serializedEventId:g,clientCounter:k},f.serializedClientEventId=g,Ft&&Gt&&ls("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Ft,roundtripMs:Gt}),
Ft=g,Gt=0;Zt(b,a,f,{retry:Jt.has(a),onSuccess:t($t,this,Ct())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var u=d.diffCount||0;d.averageTimeBetweenDispatchesMs=u?(d.averageTimeBetweenDispatchesMs*u+c)/(u+1):c;d.diffCount=u+1}d.previousDispatchMs=e}
function $t(a){Gt=Math.round(Ct()-a)}
;var au=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function bu(a){this.N=a;this.f=null;this.j=0;this.w=null;this.l=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.i=0;this.C=P(window,"mousemove",t(this.H,this));this.L=qs(t(this.A,this),25)}
y(bu,Oi);bu.prototype.H=function(a){void 0===a.f&&Zs(a);var b=a.f;void 0===a.g&&Zs(a);this.f=new Te(b,a.g)};
bu.prototype.A=function(){if(this.f){var a=au();if(0!=this.j){var b=this.w,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.g[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.N();this.l=d}this.j=a;this.w=this.f;this.i=(this.i+1)%4}};
bu.prototype.K=function(){rs(this.L);Q(this.C)};function cu(){}
function du(a,b){return eu(a,1,b)}
;function fu(){}
ma(fu,cu);function eu(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):M(a,c||0)}
fu.prototype.start=function(){var a=r("yt.scheduler.instance.start");a&&a()};
fu.prototype.pause=function(){var a=r("yt.scheduler.instance.pause");a&&a()};
Ha(fu);fu.getInstance();var gu={};
function hu(a){var b=void 0===a?{}:a;a=void 0===b.Cf?!0:b.Cf;b=void 0===b.Qg?!1:b.Qg;if(null==r("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?x()-Math.max(c,0):-1;p("_lact",c,window);p("_fact",c,window);-1==c&&iu();P(document,"keydown",iu);P(document,"keyup",iu);P(document,"mousedown",iu);P(document,"mouseup",iu);a&&(b?P(window,"touchmove",function(){ju("touchmove",200)},{passive:!0}):(P(window,"resize",function(){ju("resize",200)}),P(window,"scroll",function(){ju("scroll",200)})));
new bu(function(){ju("mouse",100)});
P(document,"touchstart",iu,{passive:!0});P(document,"touchend",iu,{passive:!0})}}
function ju(a,b){gu[a]||(gu[a]=!0,du(function(){iu();gu[a]=!1},b))}
function iu(){null==r("_lact",window)&&hu();var a=x();p("_lact",a,window);-1==r("_fact",window)&&p("_fact",a,window);(a=r("ytglobal.ytUtilActivityCallback_"))&&a()}
function lg(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;var ku=r("ytLoggingGelSequenceIdObj_")||{};p("ytLoggingGelSequenceIdObj_",ku,void 0);
function lu(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Ct());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:lg())};ls("log_sequence_info_on_gel_web")&&d.dc&&(a=e.context,b=d.dc,ku[b]=b in ku?ku[b]+1:0,a.sequence={index:ku[b],groupKey:b},d.Re&&delete ku[d.dc]);(d=d.jd)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Qt[d.token]=a,d=Xt("log_event",d.token)):d=Xt("log_event");d.push(e);c&&(Kt.log_event=new c);c=ns("web_logging_max_batch")||
100;e=Ct();d.length>=c?Tt():10<=e-Nt&&(Vt(),Nt=e)}
;function mu(){return"INNERTUBE_API_KEY"in Rr&&"INNERTUBE_API_VERSION"in Rr}
function Yt(){return{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),Ef:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ff:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Hf:L("INNERTUBE_CONTEXT_HL",void 0),Gf:L("INNERTUBE_CONTEXT_GL",void 0),If:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",Jf:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function nu(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.hj||L("AUTHORIZATION"))||(a?b="Bearer "+r("gapi.auth.getToken")().ej:b=lm([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),ls("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function ou(a){a=Object.assign({},a);delete a.Authorization;var b=lm();if(b){var c=new Oq;c.update(L("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ka(b);void 0===c&&(c=0);if(!pe){pe={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));oe[f]=g;for(var k=0;k<g.length;k++){var l=g[k];void 0===pe[l]&&(pe[l]=k)}}}c=oe[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],q=(f=e+1<b.length)?
b[e+1]:0;l=(g=e+2<b.length)?b[e+2]:0;k=m>>2;m=(m&3)<<4|q>>4;q=(q&15)<<2|l>>6;l&=63;g||(l=64,f||(q=64));d.push(c[k],c[m],c[q]||"",c[l]||"")}a.hash=d.join("")}return a}
;function pu(a,b,c,d,e,f){Ke.set(""+a,b,{Gc:c,path:d,domain:void 0===e?"youtube.com":e,secure:void 0===f?!1:f})}
function qu(a,b){return Ke.get(""+a,b)}
function ru(a,b,c){return Ke.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;function su(){var a;(a=Mr("yt.innertube"))||(a=new Gr("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new wr(a):null;this.g=document.domain||window.location.hostname}
su.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,x()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(fp(b))}catch(f){return}else e=escape(b);pu(a,e,c,"/",this.g)};
su.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=qu(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
su.prototype.remove=function(a){this.f&&this.f.remove(a);ru(a,"/",this.g)};var tu=new su;function uu(a,b,c,d){if(d)return null;d=tu.get("nextId",!0)||1;var e=tu.get("requests",!0)||{};e[d]={method:a,request:b,authState:ou(c),requestTime:Math.round(Ct())};tu.set("nextId",d+1,86400,!0);tu.set("requests",e,86400,!0);return d}
function vu(a){var b=tu.get("requests",!0)||{};delete b[a];tu.set("requests",b,86400,!0)}
function wu(a){var b=tu.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Ct())-d.requestTime)){var e=d.authState,f=ou(nu(!1));cc(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Ct())),Zt(a,d.method,e,{}));delete b[c]}}tu.set("requests",b,86400,!0)}}
;function xu(a){var b=this;this.f=null;a?this.f=a:ls("delay_gel_until_config_ready")?mu()&&(this.f=Yt()):this.f=Yt();eu(function(){wu(b)},0,5E3)}
xu.prototype.isReady=function(){!this.f&&mu()&&(this.f=Yt());return!!this.f};
function Zt(a,b,c,d){!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Zr(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",P:c,ae:"JSON",Ya:function(){d.Ya()},
Od:d.Ya,onSuccess:function(v,w){if(d.onSuccess)d.onSuccess(w)},
Nd:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,w){if(d.onError)d.onError(w)},
oj:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.If;g&&(f=g);g=a.f.Jf||!1;var k=nu(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=ds(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&ls("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=uu(b,c,k,g))){var q=e.onSuccess,u=e.Nd;e.onSuccess=function(v,w){vu(m);q(v,w)};
c.Nd=function(v,w){vu(m);u(v,w)}}try{ls("use_fetch_for_op_xhr")?ys(l,e):(e.method="POST",e.P||(e.P={}),Bs(l,e))}catch(v){if("InvalidAccessError"==v)m&&(vu(m),m=0),Zr(Error("An extension is blocking network request."));
else throw v;}m&&eu(function(){wu(a)},0,5E3)}
;var yu=x().toString();
function zu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=x();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(yu)for(a=1,b=0;b<yu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^yu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var kw=r("ytLoggingTimeDocumentNonce_")||zu();p("ytLoggingTimeDocumentNonce_",kw,void 0);var lw=0,mw=null,nw=null;function ow(a){this.f=a}
function pw(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=pw(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
ow.prototype.toString=function(){return JSON.stringify(pw(this))};function qw(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function rw(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function sw(a){return L(rw(void 0===a?0:a),void 0)}
p("yt_logging_screen.getRootVeType",sw,void 0);function tw(){var a=L("csn-to-ctt-auth-info");a||(a={},Sr("csn-to-ctt-auth-info",a));return a}
function uw(a){a=void 0===a?0:a;var b=L(qw(a));if(!b&&!L("USE_CSN_FALLBACK",!0))return null;b||0!=a||(ls("kevlar_client_side_screens")||ls("c3_client_side_screens")?b="UNDEFINED_CSN":b=L("EVENT_ID"));return b?b:null}
p("yt_logging_screen.getCurrentCsn",uw,void 0);function vw(a,b,c){var d=tw();(c=uw(c))&&delete d[c];b&&(d[a]=b)}
function ww(a){return tw()[a]}
p("yt_logging_screen.getCttAuthInfo",ww,void 0);p("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==L(qw(c))||b!==L(rw(c)))vw(a,d,c),Sr(qw(c),a),Sr(rw(c),b),0==c&&(b=function(){setTimeout(function(){a&&lu("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:kw,clientScreenNonce:a},xu)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())},void 0);function xw(a,b,c){var d=void 0===d?!0:d;var e=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Zf(window.location.href);f&&e.push(f);f=Zf(a);if(jb(e,f)||!f&&0==a.lastIndexOf("/",0))if(ls("autoescape_tempdata_url")&&(e=document.createElement("a"),nd(e,a),a=e.href),a){f=Xf(a);a=f[5];e=f[6];f=f[7];var g="";a&&(g+=a);e&&(g+="?"+e);f&&(g+="#"+f);a=g;e=a.indexOf("#");if(a=0>e?a:a.substr(0,e))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:uw()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+Cd(a).toString(36),
b=b?dg(b):"",pu(d,b,c||5,"/"))):(c=b,b="ST-"+Cd(a).toString(36),c=c?dg(c):"",pu(b,c,5,"/"))}}
;function yw(a,b){this.version=a;this.args=b}
;function zw(a,b){this.topic=a;this.f=b}
zw.prototype.toString=function(){return this.topic};var Aw=r("ytPubsub2Pubsub2Instance")||new nr;nr.prototype.subscribe=nr.prototype.subscribe;nr.prototype.unsubscribeByKey=nr.prototype.sa;nr.prototype.publish=nr.prototype.ja;nr.prototype.clear=nr.prototype.clear;p("ytPubsub2Pubsub2Instance",Aw,void 0);var Bw=r("ytPubsub2Pubsub2SubscribedKeys")||{};p("ytPubsub2Pubsub2SubscribedKeys",Bw,void 0);var Cw=r("ytPubsub2Pubsub2TopicToKeys")||{};p("ytPubsub2Pubsub2TopicToKeys",Cw,void 0);var Dw=r("ytPubsub2Pubsub2IsAsync")||{};
p("ytPubsub2Pubsub2IsAsync",Dw,void 0);p("ytPubsub2Pubsub2SkipSubKey",null,void 0);function T(a,b){var c=Ew();return c?c.publish.call(c,a.toString(),a,b):!1}
function Fw(a,b,c){var d=Ew();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var k=r("ytPubsub2Pubsub2SkipSubKey");k&&k==e||(k=function(){if(Bw[e])try{if(g&&a instanceof zw&&a!=f)try{var l=a.f,m=g;if(!m.args||!m.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!l.Ra){var q=new l;l.Ra=q.version}var u=l.Ra}catch(v){}if(!u||m.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(l,
pb(m.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,g)}catch(v){Yr(v)}},Dw[a.toString()]?r("yt.scheduler.instance")?du(k):M(k,0):k())});
Bw[e]=!0;Cw[a.toString()]||(Cw[a.toString()]=[]);Cw[a.toString()].push(e);return e}
function Gw(){var a=Hw,b=Fw(Iw,function(c){a.apply(void 0,arguments);Jw(b)},void 0);
return b}
function Jw(a){var b=Ew();b&&("number"===typeof a&&(a=[a]),z(a,function(c){b.unsubscribeByKey(c);delete Bw[c]}))}
function Ew(){return r("ytPubsub2Pubsub2Instance")}
;function Kw(a,b){yw.call(this,1,arguments)}
ma(Kw,yw);function Lw(a,b){yw.call(this,1,arguments)}
ma(Lw,yw);var Mw=new zw("aft-recorded",Kw),Nw=new zw("timing-sent",Lw);var Ow=window;function Pw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Qw=Ow.performance||Ow.mozPerformance||Ow.msPerformance||Ow.webkitPerformance||new Pw;var Rw=!1;function Sw(a){var b=Tw(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Uw(a){return!!r("yt.timing."+(a||"")+"pingSent_")}
function Vw(a){var b;(b=r("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},p("ytcsi."+(a||"")+"data_",b,void 0));return b}
function Ww(a){a=Vw(a);a.info||(a.info={});return a.info}
function Tw(a){a=Vw(a);a.tick||(a.tick={});return a.tick}
function Xw(a){var b=Vw(a).nonce;b||(b=zu(),Vw(a).nonce=b);return b}
function Yw(a){var b=Tw(a||""),c=Sw(a);c&&!Rw&&(T(Mw,new Kw(Math.round(c-b._start),a)),Rw=!0)}
;function Zw(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!$w(a)||c.some(function(e){return!$w(e)}))throw Error("Only objects may be merged.");
c=ba(c);for(d=c.next();!d.done;d=c.next())ax(a,d.value);return a}
function ax(a,b){for(var c in b)if($w(b[c])){if(c in a&&!$w(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ax(a[c],b[c])}else if(bx(b[c])){if(c in a&&!bx(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);cx(a[c],b[c])}else a[c]=b[c];return a}
function cx(a,b){for(var c=ba(b),d=c.next();!d.done;d=c.next())d=d.value,$w(d)?a.push(ax({},d)):bx(d)?a.push(cx([],d)):a.push(d);return a}
function $w(a){return"object"===typeof a&&!Array.isArray(a)}
function bx(a){return"object"===typeof a&&Array.isArray(a)}
;function dx(){var a=r("ytcsi.debug");a||(a=[],p("ytcsi.debug",a,void 0),p("ytcsi.reference",{},void 0));return a}
function ex(a){a=a||"";var b=r("ytcsi.reference");b||(dx(),b=r("ytcsi.reference"));if(b[a])return b[a];var c=dx(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d}
;function fx(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ca(c))}
ma(fx,Error);var gx=new Set,hx=0;function ix(a){var b=r("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,!1,void 0):(b=Tr(),b.push([a,"ERROR",void 0,void 0,!1,void 0]),Sr("ERRORS",b))}
function jx(a){var b=r("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,!1,void 0):(b=Tr(),b.push([a,"WARNING",void 0,void 0,!1,void 0]),Sr("ERRORS",b))}
function kx(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function lx(a,b,c){c=void 0===c?{}:c;var d=xu;L("ytLoggingEventsDefaultDisabled",!1)&&xu==xu&&(d=null);lu(a,b,d,c)}
function mx(){ls("log_web_meta")&&Wt().forEach(function(a){lx("delayedEventMetricCaptured",a)})}
;var nx=r("ytLoggingLatencyUsageStats_")||{};p("ytLoggingLatencyUsageStats_",nx,void 0);function ox(){this.f=0}
function px(){ox.f||(ox.f=new ox);return ox.f}
ox.prototype.tick=function(a,b,c){qx(this,"tick_"+a+"_"+b)||lx("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ox.prototype.info=function(a,b){var c=Object.keys(a).join("");qx(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,lx("latencyActionInfo",a))};
function qx(a,b){nx[b]=nx[b]||{count:0};var c=nx[b];c.count++;c.time=Ct();a.f||(a.f=eu(function(){var d=Ct(),e;for(e in nx)nx[e]&&6E4<d-nx[e].time&&delete nx[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new fx("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?jx(c):ix(c)),!0):!1}
;var U={},rx=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cpn="clientPlaybackNonce",U.cseg="creatorInfo.creatorSegment",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="getHomeRequestId",U.GetSearch_rid="getSearchRequestId",U.GetPlayer_rid="getPlayerRequestId",U.GetWatchNext_rid="getWatchNextRequestId",U.GetBrowse_rid=
"getBrowseRequestId",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.ncnp="webInfo.nonPreloadedNodeCount",U.prt=
"playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.aq="tvInfo.appQuality",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="mwebInfo.getSettingsRequestId",U.GetTrending_rid="mwebInfo.getTrendingRequestId",U.GetMusicSearchSuggestions_rid=
"musicInfo.getMusicSearchSuggestionsRequestId",U),sx="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),tx={},ux=(tx.mver="MEASUREMENT_VERSION_",tx.pis="PLAYER_INITIALIZED_STATE_",tx.yt_pt="LATENCY_PLAYER_",tx.pa="LATENCY_ACTION_",tx.yt_vst="VIDEO_STREAM_TYPE_",tx),vx=
"all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function wx(a){return!!L("FORCE_CSI_ON_GEL",!1)||ls("csi_on_gel")||!!Vw(a).useGel}
function xx(a,b,c){c=yx(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in rx){c=rx[a];jb(sx,c)&&(b=!!b);a in ux&&"string"===typeof b&&(b=ux[a]+b.toUpperCase());a=c.split(".");d=c={};for(var e=0;e<a.length-1;e++){var f=a[e];d[f]={};d=d[f]}d[a[a.length-1]]=b;return Zw({},c)}jb(vx,a)||jx(new fx("Unknown label logged with GEL CSI",a))}
function yx(a){a=Vw(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function zx(a,b,c){null!==b&&(Ww(c)[a]=b,wx(c)?(a=xx(a,b,c))&&Ax(a,c):ex(c||"").info[a]=b)}
function Ax(a,b){if(wx(b)){var c=ex(b||"");Zw(c.info,a);c=yx(b);"gelInfos"in c||(c.gelInfos={});Zw(c.gelInfos,a);c=Xw(b);px().info(a,c)}}
if(ls("overwrite_polyfill_on_logging_lib_loaded")){var Bx=window;Bx.ytcsi&&(Bx.ytcsi.info=zx)};function Cx(a,b,c){var d=Tw(c),e;if(e=ls("use_first_tick"))e=Tw(c),e=a in e;e||(b||"_"==a[0]||(e=a,Qw.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Qw.mark(e))),e=b||Ct(),d[a]=e,d=yx(c),d.gelTicks&&(d.gelTicks["tick_"+a]=!0),c||b||Ct(),wx(c)?(ex(c||"").tick[a]=b||Ct(),d=Xw(c),"_start"===a?(e=px(),qx(e,"baseline_"+d)||lx("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):px().tick(a,d,b),Yw(c),d=!0):d=!1,d||(Dx(!1,c),ex(c||"").tick[a]=b||Ct()))}
function Ex(a,b){if(null!==b)if(Ww(void 0)[a]=b,wx(void 0)){var c=xx(a,b,void 0);c&&Ax(c,void 0)}else ex("").info[a]=b}
function Dx(a,b){if(!Uw(b)){var c=L((b||"")+"TIMING_ACTION",void 0),d=Tw(b);if(r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&Sw(b))if(Yw(b),a||b)Fx(b);else{c=!0;var e=L("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in d)){c=!1;break}c&&Fx(b)}}}
function Fx(a){if(!wx(a)){var b=Tw(a),c=Ww(a),d=b._start,e=L("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:L((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=Qw.getEntriesByName?Qw.getEntriesByName(k)[0]:void 0)?c.h5jse=Math.round(c.h5jse-k.responseEnd):delete c.h5jse}b.aft=Sw(a);var l=Tw(a);k=l.pbr;var m=l.vc;l=l.pbs;k&&m&&l&&k<m&&m<l&&Ww(a).yt_pvis&&"youtube"==e&&(zx("yt_lt","hot_bg",a),e=b.vc,k=
b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var q in c)"_"!=q.charAt(0)&&(f[q]=c[q]);b.ps=Ct();q={};e=[];for(var u in b)"_"!=u.charAt(0)&&(k=Math.round(b[u]-d),q[u]=k,e.push(u+"."+k));f.rt=e.join(",");(b=r("ytdebug.logTiming"))&&b(f,q);c=!!c.ap;ls("debug_csi_data")&&(b=r("yt.timing.csiData"),b||(b=[],p("yt.timing.csiData",b,void 0)),b.push({page:location.href,time:new Date,args:f}));b="";for(var v in f)f.hasOwnProperty(v)&&(b+="&"+v+"="+f[v]);f="/csi_204?"+b.substring(1);if(window.navigator&&window.navigator.sendBeacon&&
c){var w=void 0===w?"":w;Os(f,w)||Ls(f,void 0,void 0,void 0,w)}else Ls(f);p("yt.timing."+(a||"")+"pingSent_",!0,void 0);T(Nw,new Lw(q.aft+(g||0),a))}}
t(Qw.clearResourceTimings||Qw.webkitClearResourceTimings||Qw.mozClearResourceTimings||Qw.msClearResourceTimings||Qw.oClearResourceTimings||Ga,Qw);function Gx(a,b,c,d){Oi.call(this);this.l=a;this.g=b;this.L=c;this.j=d;this.i=mf("DIV",{"class":"ads-mute-button"});Hf(this.i,String.fromCharCode(215));this.f=mf("DIV");md(this.f,Hx(this));this.w=E("ads-mute-undo",this.f);P(this.i,"click",t(this.A,this));this.l.firstElementChild.appendChild(this.i);a=Yb(this.g.mute_survey);xb(a);z(a,function(e){var f=mf("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),g=mf("SPAN",{"class":"yt-uix-form-input-radio-element"});f=mf("SPAN",{"class":"yt-uix-form-input-radio-container"},
f,g);f=mf("LABEL","ads-mute-option",f,e);P(f,"click",t(this.C,this,this.g.mute_survey[e]));this.f.firstChild.appendChild(f)},this);
P(this.f,"click",ft);P(this.w,"click",t(this.H,this));vt("dispose",this.dispose,this)}
y(Gx,Oi);function Hx(a){var b=a.g.mute_gone||fd,c=a.g.mute_question||fd;a=a.g.mute_undo||fd;return bd("div",{"class":"ads-mute-survey"},cd(bd("span",{"class":"ads-mute-check"}),bd("b",{},b)," ",c,bd("div",{"class":"ads-mute-undo"},a)))}
Gx.prototype.K=function(){z(cf("ads-mute-option",this.f),function(a){jt(a)});
jt(this.i);zf(this.i);jt(this.f);zf(this.f);jt(this.w)};
Gx.prototype.A=function(a){a.stopPropagation();a.preventDefault();this.j&&Ls(this.g.mute_url);this.l.firstElementChild.appendChild(this.f);J(Ff(this.f),"contains-mute-survey")};
Gx.prototype.H=function(a){a.stopPropagation();a.preventDefault();this.g.mute_undo_url&&this.j&&Ls(this.g.mute_undo_url);K(Ff(this.f),"contains-mute-survey");zf(this.f)};
Gx.prototype.C=function(a,b){b.stopPropagation();b.preventDefault();this.j&&Ls(a);zf(this.l);this.L();this.dispose()};function Ix(){var a=new Nh(Ge),b=a.f[0].depth,c={};c=(c.dssz=Fe.scripts?Fe.scripts.length:0,c.icsg=Rh(a),c.mdo=Sh(a),c.mso=Th(a),c);Ge.location&&Ge.location.ancestorOrigins&&(c.iag=Ph(a));0<b&&(c.nhd=b);return c}
;var Jx="",Kx=[],Lx="";function Mx(a,b){var c=a.media_template_data;(c=Ja(c)?gb(c,function(d){return!!d.imageUrl}):null)?(Lx=c.videoId,c={video_id:c.videoId,
ad_type:"watch_related",headline:vd(a.line1),image_url:c.imageUrl,description1:vd(a.line2),description2:vd(a.line3),channel_title:c.channelName,visible_url:vd(a.visible_url)},Jx=vd(a.url),(new wp(Jx)).g.get("adurl"),Cb(Bd(a.creative_view_url))||Kx.push(Nx(vd(a.creative_view_url))),Cb(Bd(a.p_creative_view_url))||Kx.push(Nx(vd(a.p_creative_view_url))),Cb(Bd(a.engaged_view_url))||Nx(vd(a.engaged_view_url)),Cb(Bd(a.p_engaged_view_url))||Nx(vd(a.p_engaged_view_url)),Cb(Bd(a.videoplaytime_25_url))||Nx(vd(a.videoplaytime_25_url)),
Cb(Bd(a.p_videoplaytime_25_url))||Nx(vd(a.p_videoplaytime_25_url)),Cb(Bd(a.videoplaytime_50_url))||Nx(vd(a.videoplaytime_50_url)),Cb(Bd(a.p_videoplaytime_50_url))||Nx(vd(a.p_videoplaytime_50_url)),Cb(Bd(a.videoplaytime_75_url))||Nx(vd(a.videoplaytime_75_url)),Cb(Bd(a.p_videoplaytime_75_url))||Nx(vd(a.p_videoplaytime_75_url)),Cb(Bd(a.videoplaytime_100_url))||Nx(vd(a.videoplaytime_100_url)),Cb(Bd(a.p_videoplaytime_100_url))||Nx(vd(a.p_videoplaytime_100_url)),Bs("/pyv?"+dg(c),{format:"XML",onSuccess:function(d,
e){b&&b(d,e)},
onError:function(){Ox()},
Ga:!0})):Ox()}
function Px(a){Cx("parc");0==a.length?Ox():Mx(a[0],function(b,c){var d=c.html_content,e=D(window.pyv_related_box_id||"watch-related");if(e){var f=e.innerHTML;d&&0!=f.indexOf(Wc(d).toString())&&e.insertBefore(rf(d),e.firstChild);if(d=D("pyv-watch-related-dest-url"))e=!L("PYV_DISABLE_MUTE")&&a[0].mute_url&&a[0].mute_survey,d.setAttribute("href",Jx),e&&(d=Ff(d),J(d,"contains-mute-button"),new Gx(d,a[0],Ga,!0));Cx("parn");Qx();z(Kx,function(g){Ls(g,void 0,ot(g))})}})}
window.google_ad_request_done=function(a){Px(a)};
function Rx(a){if(!a||Cb(a.responseText))Ox();else try{eval(a.responseText)}catch(b){throw Ox(),b;}}
function Sx(){var a={};return a.dff="times new roman",a.dfs="16",a.ppjl="u",a.rsz="||n|",a}
function Qx(){var a={ad_id:"",ad_sys:"",ad_v:Lx,break_type:6,content_v:L("VIDEO_ID",void 0),cpn:(r("yt.www.watch.player.getClientPlaybackNonce")||yb())(),device:"1",devicever:"html5",ei:L("GET_PLAYER_EVENT_ID",void 0),el:"detailpage",event:2,format:"2_6",mt:"0",ns:1,slot_pos:"0",ver:"2.0",wt:(new Date).getTime()};a=fg("/api/stats/ads",a);Ls(a,void 0,ot(a))}
function Ox(){var a=L("TIMING_WAIT",[]);lb(a,"parn")&&(Sr("TIMING_WAIT",a),Dx())}
function Nx(a){if("https:"==window.location.protocol){var b=new wp(a);if("https"==b.j)return a;xp(b,"https");return b.toString()}return a}
;function Tx(a,b,c){a&&(a.dataset?a.dataset[Ux(b)]=String(c):a.setAttribute("data-"+b,c))}
function V(a,b){return a?a.dataset?a.dataset[Ux(b)]:a.getAttribute("data-"+b):null}
function Vx(a,b){a&&(a.dataset?delete a.dataset[Ux(b)]:a.removeAttribute("data-"+b))}
var Wx={};function Ux(a){return Wx[a]||(Wx[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Xx=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Yx=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Zx(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Xx,""),c=c.replace(Yx,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b);return null}return $x(a,b,c)}
function $x(a,b,c){c=void 0===c?null:c;var d=ay(a),e=document.getElementById(d),f=e&&V(e,"loaded"),g=e&&!f;if(f)return b&&b(),e;b&&(f=R(d,b),b=""+Oa(b),by[b]=f);return g?e:e=cy(a,d,function(){V(e,"loaded")||(Tx(e,"loaded","true"),S(d),M(Ua(zt,d),0))},c)}
function cy(a,b,c,d){d=void 0===d?null:d;var e=qf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);pd(e,Vf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ay(a){var b=document.createElement("a");nd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Cd(a)}
var by={};function dy(a,b,c){Ls("/gen_204?a="+(a+(b?"&"+b:"")),c)}
;function ey(){this.i=1E3/24;this.g=null;this.f=[]}
var fy=new ey;ey.prototype.j=function(){for(var a=x(),b=this.f.length-1;0<=b;b--)gy(this.f[b],a)&&hy(this,b)};
ey.prototype.add=function(a){this.f.push(a);this.g||(this.g=qs(t(this.j,this),this.i))};
ey.prototype.remove=function(a){a=$a(this.f,a);0<=a&&hy(this,a)};
function hy(a,b){mb(a.f,b);a.f.length||(rs(a.g),delete a.g)}
;function iy(a,b){this.f=new cr(0,0,a.x,a.y,b.x,b.y,1,1)}
function jy(a){return a}
var ky=new iy({x:.25,y:.1},{x:.25,y:1});function ly(a){return fr(ky.f,a)}
var my=new iy({x:.42,y:0},{x:1,y:1});function ny(a){return fr(my.f,a)}
var oy=new iy({x:0,y:0},{x:.58,y:1});function py(a){return fr(oy.f,a)}
var qy=new iy({x:.42,y:0},{x:.58,y:1});function ry(a){return fr(qy.f,a)}
function sy(a){switch(a){case "linear":return jy;case "ease-in":return ny;case "ease-out":return py;case "ease-in-out":return ry;default:return ly}}
;function ty(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.Ub=c.ka||null;this.Nc=c.Nc||"ease";this.setup(c);c.nj||this.play()}
ty.prototype.setup=function(){};function uy(a,b){this.g=this.f=0;this.i=fy;this.D=null;ty.call(this,a,b)}
y(uy,ty);uy.prototype.setup=function(a){this.f=0;this.i=a.loop||fy;this.D=sy(this.Nc)};
uy.prototype.play=function(){this.g=x();gy(this,this.g);this.i.add(this)};
uy.prototype.pause=function(){this.i.remove(this)};
function gy(a,b){var c=1E3*a.duration;a.f=Math.min(a.f+(b-a.g),c);a.g=b;var d=a.D(a.f/c);d=a.w-(a.w-a.l)*d;a.j?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.f>=c)a.ka(),a.Ub&&M(t(a.Ub,n,a),0);return c}
uy.prototype.ka=function(){};function vy(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||dc(b);this.assets=a.assets||{};this.attrs=a.attrs||dc(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
vy.prototype.clone=function(){var a=new vy,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ia(c)?a[b]=dc(c):a[b]=c}return a};function wy(){return parseInt(L("DCLKSTAT",0),10)}
;function xy(){this.g=!1;this.f=null}
xy.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,Zx(b,function(){f.g=!1;if(window.botguard)yy(f,c,d);else{var g=ay(b),k=document.getElementById(g);k&&(zt(g),k.parentNode.removeChild(k));jx(new fx("Unable to load Botguard","from "+b))}},e)):a&&(eval(a),window.botguard?yy(this,c,d):jx(Error("Unable to load Botguard from JS")))};
function yy(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){jx(d)}c&&c(b)}
xy.prototype.dispose=function(){this.f=null};var zy=new xy;function Ay(){return!!zy.f}
function By(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return zy.f?zy.f.invoke(void 0,void 0,a):null}
;function Cy(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;qd(d.location,fg(a,b)+c)}
function Dy(a,b){b&&xw(a,b);(window.ytspf||{}).enabled?spf.navigate(a):Cy(a)}
function Ey(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));b&&xw(a,b);if(c)return!1;Dy(a);return!0}
;function Fy(){Oi.call(this);this.f=[]}
ma(Fy,Oi);Fy.prototype.K=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.callback)}Oi.prototype.K.call(this)};var Gy=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Hy(a,b){a=a||"";if(window.spf){var c=a.match(Gy);spf.style.load(a,c?c[1]:"",b);return null}return Iy(a,b)}
function Iy(a,b){var c=Jy(a),d=document.getElementById(c),e=d&&V(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(R(c,b),Oa(b));return f?d:d=Ky(a,c,function(){V(d,"loaded")||(Tx(d,"loaded","true"),S(c),M(Ua(zt,c),0))})}
function Ky(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Vf(a);d.rel="stylesheet";d.href=zc(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Jy(a){var b=qf("A");nd(b,new Ac(Bc,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Cd(a)}
;function Ly(a,b,c,d){Oi.call(this);var e=this;this.w=this.ya=a;this.ma=b;this.A=!1;this.api={};this.ba=this.L=null;this.H=new nr;Pi(this,Ua(Qi,this.H));this.j={};this.R=this.ia=this.g=this.oc=this.f=null;this.N=!1;this.l=this.C=null;this.Sa={};this.Ke=["onReady"];this.vb=null;this.Qc=NaN;this.V={};this.i=d;My(this);this.Ib("WATCH_LATER_VIDEO_ADDED",this.sg.bind(this));this.Ib("WATCH_LATER_VIDEO_REMOVED",this.tg.bind(this));this.Ib("onAdAnnounce",this.Me.bind(this));this.Le=new Fy(this);Pi(this,Ua(Qi,
this.Le));this.Y=0;c?this.Y=M(function(){e.loadNewVideoConfig(c)},0):d&&(Ny(this),Oy(this))}
ma(Ly,Oi);h=Ly.prototype;h.getId=function(){return this.ma};
h.loadNewVideoConfig=function(a){if(!this.O()){this.Y&&(O(this.Y),this.Y=0);a instanceof vy||(a=new vy(a));this.oc=a;this.f=a.clone();Ny(this);this.ia||(this.ia=Py(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.w.style.width=Tg(Number(a)||a,!0);if(a=this.f.attrs.height)this.w.style.height=Tg(Number(a)||a,!0);Oy(this);this.A&&Qy(this)}};
function Ny(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.g=b||a.g;"video-player"==a.g&&(a.g=a.ma,a.f.attrs.id=a.ma);a.w.id==a.g&&(a.g+="-player",a.f.attrs.id=a.g)}
h.Xe=function(){return this.oc};
function Qy(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Ry(a){var b=!0,c=Sy(a);c&&a.f&&(a=Ty(a),b=V(c,"version")===a);return b&&!!r("yt.player.Application.create")}
function Oy(a){if(!a.O()&&!a.N){var b=Ry(a);if(b&&"html5"==(Sy(a)?"html5":null))a.R="html5",a.A||Uy(a);else if(Vy(a),a.R="html5",b&&a.l)a.ya.appendChild(a.l),Uy(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==$r(d||"").player_bootstrap_method?r("yt.player.Application.createAlternate")||r("yt.player.Application.create"):r("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.ya,e,a.i);
Uy(a)};
a.N=!0;b?a.C():(Zx(Ty(a),a.C),Hy(a.i?a.i.cssUrl:a.f.assets.css),Wy(a)&&!c&&p("yt.player.Application.create",null,void 0))}}}
function Sy(a){var b=D(a.g);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.g));return b}
function Uy(a){if(!a.O()){var b=Sy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Xy(a)):a.Qc=M(function(){Uy(a)},50)}}
function Xy(a){My(a);a.A=!0;var b=Sy(a);b.addEventListener&&(a.L=Yy(a,b,"addEventListener"));b.removeEventListener&&(a.ba=Yy(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Yy(a,b,e))}for(var f in a.j)a.L(f,a.j[f]);Qy(a);a.ia&&a.ia(a.api);a.H.ja("onReady",a.api)}
function Yy(a,b,c){var d=b[c];return function(){try{return a.vb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.vb=e,Zr(e))}}}
function My(a){a.A=!1;if(a.ba)for(var b in a.j)a.ba(b,a.j[b]);for(var c in a.V)O(parseInt(c,10));a.V={};a.L=null;a.ba=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Ib.bind(a);a.api.removeEventListener=a.Tg.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ye.bind(a);a.api.getPlayerType=a.af.bind(a);a.api.getCurrentVideoConfig=a.Xe.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Qf.bind(a)}
h.Qf=function(){return this.A};
h.Ib=function(a,b){var c=this,d=Py(this,b);if(d){if(!jb(this.Ke,a)&&!this.j[a]){var e=Zy(this,a);this.L&&this.L(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.A&&M(function(){d(c.api)},0)}};
h.Tg=function(a,b){if(!this.O()){var c=Py(this,b);c&&pr(this.H,a,c)}};
function Py(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var d=r(b);d&&d.apply(n,arguments)};
a.Sa[b]=c}return c?c:null}
function Zy(a,b){var c="ytPlayer"+b+a.ma;a.j[b]=c;n[c]=function(d){var e=M(function(){if(!a.O()){a.H.ja(b,d);var f=a.V,g=String(e);g in f&&delete f[g]}},0);
bc(a.V,String(e))};
return c}
h.Me=function(a){S("a11y-announce",a)};
h.sg=function(a){S("WATCH_LATER_VIDEO_ADDED",a)};
h.tg=function(a){S("WATCH_LATER_VIDEO_REMOVED",a)};
h.af=function(){return this.R||(Sy(this)?"html5":null)};
h.Ye=function(){return this.vb};
function Vy(a){a.cancel();My(a);a.R=null;a.f&&(a.f.loaded=!1);var b=Sy(a);b&&(Ry(a)||!Wy(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));yf(a.ya)}
h.cancel=function(){if(this.C){var a=this.C;Ty(this)&&a&&(a=""+Oa(a),(a=by[a])&&wt(a))}O(this.Qc);this.N=!1};
h.K=function(){Vy(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){Yr(b)}this.Sa=null;for(var a in this.j)n[this.j[a]]=null;this.oc=this.f=this.api=null;delete this.ya;delete this.w;Oi.prototype.K.call(this)};
function Wy(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Ty(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var $y={},az="player_uid_"+(1E9*Math.random()>>>0);function bz(a){delete $y[a.getId()]}
function cz(){var a;if(a=document.getElementById("player-api")){var b=az+"_"+Oa(a),c=$y[b];c||(c=new Ly(a,b),$y[b]=c);a=c.api}else a=null;return a}
;var dz="",ez="",fz=!1;function gz(a,b){a||(a="");b||(b=!1);var c=D("watch-channel-brand-div");c&&Vq(c,"collapsible",b);if(c=D("google_companion_ad_div"))c.innerHTML=a}
function hz(a){var b=Math.round(1E4*Math.random());return['<iframe src="',a,'" name="ifr_300x250ad',b,'" id="ifr_300x250ad',b,'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")}
function iz(a){return!!a.match("/ad_companion.*render=video_wall_companion")}
function jz(){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div"}
function kz(){var a=document.getElementById("google_companion_ad_div");if(a&&(a=a.firstElementChild)){"DIV"==a.nodeName&&(a=a.firstElementChild);try{var b=encodeURIComponent(dz)+","+encodeURIComponent(ez);a.contentWindow.postMessage(b,"*");a.width=370;a.height=null!=dz?210:185}catch(c){}}}
function lz(){var a=document.getElementById("movie_player");a&&a.pauseVideo()}
function mz(a){if(!fz&&a)if(ls("remove_yt_uds")){fz=!0;window.google_ad_client=a.afv_vars.google_ad_client;window.google_page_url=a.afv_vars.google_page_url;window.google_page_location=window.location.href;var b=a.afc_vars,c;for(c in b){var d=b[c];if("no_initial_ads"==c&&d){Gh();return}if("format"!=c||Cb(Bd(d)))if("loeid"!=c||Cb(Bd(d))){var e="google_"+c;(Ah[e]||Bh[e]||Dh[e])&&(window[e]=d)}else window.google_loeid=Bd(d);else if(d=Bd(d),e=d.match(/(\d+)x(\d+)/))window.google_ad_width=e[1],window.google_ad_height=
e[2],window.google_ad_format=d}b=new sg;Eh(b);window.google_loader_used="yt";(b=al(b))&&nz(b);Gh()}else(b=r("google.ads.Ad"))?(fz=!0,new b(a.afv_vars.google_ad_client,"google_companion_ad_div",a.afc_vars)):M(function(){mz(a)},200)}
function nz(a){var b=D("google_companion_ad_div");null!=b&&(a=mf("IFRAME",{width:window.google_ad_width,height:window.google_ad_height,frameBorder:0,marginWidth:0,marginHeight:0,vpsace:0,hspace:0,allowTransparency:"true",scrolling:"no",src:a,style:{visibility:"visible"}}),b.appendChild(a))}
var oz=[];p("yt.www.watch.ads.setAdId",function(a){window.ad_debug=a},void 0);
p("yt.www.watch.ads.setCompanion",gz,void 0);p("yt.www.watch.ads.showForcedMpu",function(a){var b=hz(a);a=iz(a);gz(b,a)},void 0);
p("yt.www.watch.ads.setGutSlotSizes",function(){},void 0);
p("yt.www.watch.ads.handleSetCompanion",function(a){a=a.replace(";dc_seed=",";kmyd=watch-channel-brand-div;dc_seed=");var b=hz(a);a=iz(a);gz(b,a)},void 0);
p("yt.www.watch.ads.handleSetAfvCompanionVars",jz,void 0);p("yt.www.watch.ads.companionSetupComplete",kz,void 0);p("yt.www.watch.ads.pauseVideo",lz,void 0);p("yt.www.watch.ads.loadAfc",mz,void 0);p("yt.www.watch.ads.isAfcAdVisible",function(){var a=D("google_companion_ad_div");return a?(a=Cf(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1},void 0);
p("yt.www.watch.ads.checkInit",function(){},void 0);
p("yt.www.watch.ads.initVideoWallCompanionListeners",function(a,b){dz=a;ez=b;window.addEventListener("message",function(c){"companion-setup-complete"==c.data?kz():"pause-video"==c.data&&lz()},!1)},void 0);
p("yt.www.watch.ads.getGlobals",function(){return oz},void 0);
p("window.google_ad_request_done",window.kj,void 0);p("yt.www.ads.pyv.pyvWatchAfcCallback",Px,void 0);p("yt.www.ads.pyv.loadPyvAjax",function(a){var b=js(is);Va(b,ks(is));ls("desktop_pyv_on_watch_missing_params")&&(Va(b,Sx()),Va(b,Ix()));a=fg(a,b);ls("desktop_pyv_on_watch_override_lact")&&(a=kg(a));Bs(a,{format:"RAW",onSuccess:Rx,onError:function(){Ox()},
withCredentials:!0});Cx("parq")},void 0);
p("yt.www.watch.ads.restrictioncookie.spr",function(a){Ls(a+"mac_204?action_fcts=1");return!0},void 0);
p("yt.www.watch.ads.isPromotionShelfSlotExist",function(){return null!=D("promotion-shelf")},void 0);
p("yt.www.watch.ads.promotionShelfClear",function(){var a=D("promotion-shelf");a&&(J(a,"hid"),yf(a))},void 0);
p("yt.www.watch.ads.promotionShelfShow",function(a){var b=D("promotion-shelf");b&&(b.appendChild(a),K(b,"hid"))},void 0);
p("yt.www.watch.ads.addInstreamCompanionWtaUi",function(a){var b=D("google_companion_ad_div");if(b){var c=E("iv-cards-companion",b)||E("iv-website-companion",b)||b;J(b,"companion-with-wta");c.appendChild(a)}else Yr(Error("Cannot find google_companion_ad_div"))},void 0);
p("setAfvCompanionVars",jz,void 0);var pz=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};p("yt.msgs_",pz,void 0);function qz(a){Qr(pz,arguments)}
function rz(a,b,c){b=void 0===b?{}:b;a=(a=a in pz?pz[a]:c)||"";c={};for(var d in b){c.ub=d;var e=function(f){return function(){return String(b[f.ub])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.ub+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.ub,"gi"),e);c={ub:c.ub}}return a}
function sz(a){Qr(pz,arguments)}
;function tz(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?uz():vz())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function wz(a){var b=vz(),c=uz();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function xz(a){try{var b=vz(),c=uz();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function yz(){var a=uz();a&&Ar(a,a.f.Ea(!0))}
var uz=zb(function(){var a=new Er;return a.isAvailable()?new yr(a):null}),vz=zb(function(){var a=new Fr;
return a.isAvailable()?new yr(a):null});function zz(a,b){(a=D(a))&&a.style&&(a.style.display=b?"":"none",Vq(a,"hid",!b))}
function Az(a){return(a=D(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function Bz(a){if(a=D(a))Az(a)?(a.style.display="none",J(a,"hid")):(a.style.display="",K(a,"hid"))}
function Cz(a){z(arguments,function(b){!Ka(b)||b instanceof Element?zz(b,!0):z(b,function(c){Cz(c)})})}
function Dz(a){z(arguments,function(b){!Ka(b)||b instanceof Element?zz(b,!1):z(b,function(c){Dz(c)})})}
function Ez(a){z(arguments,function(b){Ka(b)?z(b,function(c){Ez(c)}):Bz(b)})}
var Fz={};function Gz(a){if(a in Fz)return Fz[a];var b;if((b=document.body.style)&&a in b)b=a;else{var c=Fg();c?(c=c.toLowerCase(),c+=Ed(a),b=void 0===b||c in b?c:null):b=null}return Fz[a]=b}
function Hz(a){if(!Wk()||!a)return null;var b=Gz("transitionProperty");b=Kg(a,b);var c=Gz("transitionDuration");a=Kg(a,c);if(!b||!a)return null;var d={},e=b.split(",");z(a.split(","),function(f,g){var k=e[g].trim();k&&(d[k]=-1<f.indexOf("ms")?parseInt(f,10):Math.round(1E3*parseFloat(f)))});
return d}
;var Iz={},Jz="ontouchstart"in document;function Kz(a,b,c){b in Iz||(Iz[b]=new nr);Iz[b].subscribe(a,c)}
function Lz(a,b,c){if(b in Iz){var d=Iz[b];pr(d,a,c);0>=rr(d)&&(d.dispose(),delete Iz[b])}}
function Mz(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Sf(c,function(e){return I(e,b)},!0,d)}
function Nz(a){var b="mouseover"==a.type&&"mouseenter"in Iz||"mouseout"==a.type&&"mouseleave"in Iz,c=a.type in Iz||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Iz[b];for(var d in c.g){var e=Mz(b,d,a.target);e&&!Sf(a.relatedTarget,function(f){return f==e},!0)&&c.ja(d,e,b,a)}}if(b=Iz[a.type])for(d in b.g)(e=Mz(a.type,d,a.target))&&b.ja(d,e,a.type,a)}}
P(document,"blur",Nz,!0);P(document,"change",Nz,!0);P(document,"click",Nz);P(document,"focus",Nz,!0);P(document,"mouseover",Nz);P(document,"mouseout",Nz);P(document,"mousedown",Nz);P(document,"keydown",Nz);P(document,"keyup",Nz);P(document,"keypress",Nz);P(document,"cut",Nz);P(document,"paste",Nz);Jz&&(P(document,"touchstart",Nz),P(document,"touchend",Nz),P(document,"touchcancel",Nz));function W(a){this.l=a;this.D={};this.C=[];this.A=[]}
h=W.prototype;h.U=function(a){return F(a,X(this))};
function X(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
h.unregister=function(){wt(this.C);this.C.length=0;Jw(this.A);this.A.length=0};
h.init=Ga;h.dispose=Ga;h.ga=function(a,b){this.C.push(R(a,b,this))};
function Oz(a,b,c){a.A.push(Fw(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);Kz(d,b,e);a.D[c]=e}
function Z(a,b,c,d){Lz(X(a,d),b,a.D[c]);delete a.D[c]}
h.za=function(a,b,c){var d=this.B(a,b);if(d&&(d=r(d))){var e=sb(arguments,2);rb(e,0,0,a);d.apply(null,e)}};
h.B=function(a,b){return V(a,b)};
function Pz(a,b){Tx(a,"tooltip-text",b)}
function Qz(a,b,c){return E(X(a,b),c)}
;function Rz(){W.call(this,"button");this.f=null;this.i=[];this.g={}}
y(Rz,W);Ha(Rz);h=Rz.prototype;h.register=function(){Y(this,"click",this.we);Y(this,"keydown",this.Ad);Y(this,"keypress",this.xe);this.ga("page-scroll",this.uf)};
h.unregister=function(){Z(this,"click",this.we);Z(this,"keydown",this.Ad);Z(this,"keypress",this.xe);Sz(this);this.g={};Rz.J.unregister.call(this)};
h.we=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Ad=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Tz(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=If(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Of;else"table"==e&&(f=this.Nf);f&&Uz(this,a,b,c,t(f,this))}}};
h.uf=function(){var a=this.g;if(0!=Ub(a))for(var b in a){var c=a[b],d=Vz(this,c);if(void 0==d||void 0==c)break;Wz(this,d,c,!0)}};
function Uz(a,b,c,d,e){var f=Az(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=Xz(a,c))?(b=Cf(d),"a"==b.tagName.toLowerCase()?Cy(b.href):ht(b,"click")):g&&Yz(a,b):f?27==d.keyCode?(Xz(a,c),Yz(a,b)):e(b,c,d):(a=I(b,X(a,"reverse"))?38:40,d.keyCode==a&&(ht(b,"click"),d.preventDefault()))}
h.xe=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Tz(this,a),Az(a)&&c.preventDefault())};
function Xz(a,b){var c=X(a,"menu-item-highlight"),d=E(c,b);d&&K(d,c);return d}
function Zz(a,b,c){J(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Oa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.Nf=function(a,b,c){var d=Xz(this,b),e=Us("table",b);b=af("td",null,e);d=$z(d,b,af("td",null,Us("tr",e)).length,c);-1!=d&&(Zz(this,a,b[d]),c.preventDefault())};
h.Of=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Xz(this,b);b=bb(af("li",null,b),Az);Zz(this,a,b[$z(d,b,1,c)]);c.preventDefault()}};
function $z(a,b,c,d){var e=b.length;a=$a(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function aA(a,b){var c=b.iframeMask;c||(c=qf("IFRAME"),c.src='javascript:""',Sq(c,X(a,"menu-mask")),Dz(c),b.iframeMask=c);return c}
function Wz(a,b,c,d){var e=F(b,X(a,"group")),f=!!a.B(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=Wg(b);if(I(b,X(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(q){}}I(b,"flip")&&(I(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.B(b,"button-has-sibling-menu")?l=Og(e):a.B(b,"button-menu-root-container")&&(l=bA(a,b));B&&!de("8")&&(l=null);if(l){var m=Wg(l);m=new yg(-m.top,m.left,m.top,-m.left)}l=new Te(0,1);I(b,X(a,"center-menu"))&&(l.x-=Math.round((Ug(c).width-Ug(b).width)/
2));d&&(l.y+=jf(document).y);if(a=aA(a,b))b=Ug(c),a.style.width=b.width+"px",a.style.height=b.height+"px",kr(e,f,a,g,l,m,197),d&&Hg(a,"position","fixed");kr(e,f,c,g,l,m,197)}
function bA(a,b){if(a.B(b,"button-menu-root-container")){var c=a.B(b,"button-menu-root-container");return F(b,c)}return document.body}
h.ze=function(a){if(a){var b=Tz(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.B(a,"button-has-sibling-menu")?c=a.parentNode:c=bA(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=aA(this,a);d&&c.appendChild(d);(c=!!this.B(a,"button-menu-fixed"))&&(this.g[Qs(a).toString()]=b);Wz(this,a,b,c);xt("yt-uix-button-menu-before-show",a,b);Cz(b);d&&Cz(d);
this.za(a,"button-menu-action",!0);J(a,X(this,"active"));b=t(this.ye,this,a,!1);d=t(this.ye,this,a,!0);c=t(this.ih,this,a,void 0);this.f&&Tz(this,this.f)==Tz(this,a)||Sz(this);S("yt-uix-button-menu-show",a);Q(this.i);this.i=[P(document,"click",d),P(document,"contextmenu",b),P(window,"resize",c)];this.f=a}}};
function Yz(a,b){if(b){var c=Tz(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Dz(c);a.za(b,"button-menu-action",!1);var d=aA(a,b),e=Qs(c).toString();delete a.g[e];M(function(){d&&d.parentNode&&(Dz(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=F(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));Uq(b,f);S("yt-uix-button-menu-hide",b);Q(a.i);a.i.length=0}}
h.ih=function(a,b){var c=Tz(this,a);if(c){b&&(b instanceof Uc?id(c,b):Hf(c,b));var d=!!this.B(a,"button-menu-fixed");Wz(this,a,c,d)}};
function Vz(a,b){return F(b.activeButtonNode||b.parentNode,X(a))}
h.ye=function(a,b,c){c=et(c);var d=F(c,X(this));if(d){d=Tz(this,d);var e=Tz(this,a);if(d==e)return}d=F(c,X(this,"menu"));e=d==Tz(this,a);var f=I(c,X(this,"menu-item")),g=I(c,X(this,"menu-close"));if(!d||e&&(f||g))Yz(this,a),d&&b&&this.B(a,"button-menu-indicate-selected")&&((a=E(X(this,"content"),a))&&Hf(a,Pf(c)),cA(this,d,c))};
function cA(a,b,c){var d=X(a,"menu-item-selected");z(cf(d,b),function(e){K(e,d)});
J(c.parentNode,d)}
function Tz(a,b){if(!b.widgetMenu){var c=a.B(b,"button-menu-id");c=c&&D(c);var d=X(a,"menu");c?Tq(c,[d,X(a,"menu-external")]):c=E(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return I(a,X(this,"toggled"))};
h.toggle=function(a){if(this.B(a,"button-toggle")){var b=F(a,X(this,"group")),c=X(this,"toggled"),d=I(a,c);if(b&&this.B(b,"button-toggle-group")){var e=this.B(b,"button-toggle-group");z(cf(X(this),b),function(f){f!=a||"optional"==e&&d?(K(f,c),f.removeAttribute("aria-pressed")):(J(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Xq(a,c)}};
h.click=function(a){if(Tz(this,a)){var b=Tz(this,a);if(b){var c=Vz(this,b);c&&c!=a?(Yz(this,c),M(t(this.ze,this,a),1)):Az(b)?Yz(this,a):this.ze(a)}a.focus()}this.za(a,"button-action")};
function Sz(a){a.f&&Yz(a,a.f)}
;function dA(a){W.call(this,a);this.i=null}
y(dA,W);h=dA.prototype;h.U=function(a){var b=W.prototype.U.call(this,a);return b?b:a};
h.register=function(){this.ga("yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){eA(this);dA.J.dispose.call(this)};
h.B=function(a,b){var c=dA.J.B.call(this,a,b);return c?c:(c=dA.J.B.call(this,a,"card-config"))&&(c=r(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.U(a);if(b){J(b,X(this,"active"));var c=fA(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;gA(this,a,c);var d=X(this,"card-visible"),e=this.B(a,"card-delegate-show")&&this.B(b,"card-action");this.za(b,"card-action",a);this.i=a;Dz(c);M(t(function(){e||(Cz(c),S("yt-uix-card-show",b,a,c));hA(c);J(c,d);S("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function fA(a,b,c){var d=c||b,e=X(a,"card");c=iA(a,d);var f=D(X(a,"card")+Qs(d));if(f)return a=E(X(a,"card-body"),f),Gf(a,c)||(zf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Qs(d);Sq(f,e);(d=a.B(d,"card-class"))&&Tq(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.B(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;zf(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function gA(a,b,c){var d=a.B(b,"orientation")||"horizontal",e=E(X(a,"anchor"),b)||b,f=a.B(b,"position"),g=!!a.B(b,"force-position"),k=a.B(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var q=13;var u=8}else m&&!l?(q=12,u=9):!m&&l?(q=9,u=12):(q=8,u=13);var v=Xg(document.body);f=Xg(b);v!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var w=new Te(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,w=new Te(b.offsetWidth+6,-12);var N=Ug(c);
f=Math.min(f,(d?N.height:N.width)-24-6);6>f&&(f=6,d?w.y+=12-b.offsetHeight/2:w.x+=12-b.offsetWidth/2);N=null;g||(N=10);b=X(a,"card-flip");a=X(a,"card-reverse");Vq(c,b,m);Vq(c,a,l);N=kr(e,q,c,u,w,null,N);!g&&N&&(N&48&&(m=!m,q^=4,u^=4),N&192&&(l=!l,q^=1,u^=1),Vq(c,b,m),Vq(c,a,l),kr(e,q,c,u,w));k&&(e=parseInt(c.style.top,10),g=jf(document).y,Hg(c,"position","fixed"),Hg(c,"top",e-g+"px"));v&&(c.style.right="",e=Wg(c),e.left=e.left||parseInt(c.style.left,10),g=gf(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=E("yt-uix-card-body-arrow",c);g=E("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!v&&m||v&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=E("yt-uix-card-arrow",c);m=E("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Ug(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.U(a)){var b=D(X(this,"card")+Qs(a));b&&(K(a,X(this,"active")),K(b,X(this,"card-visible")),Dz(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(zf(b.cardMask),b.cardMask=null))}};
function eA(a){a.i&&a.hide(a.i)}
h.hh=function(a,b){var c=this.U(a);if(c){if(b){var d=iA(this,c);if(!d)return;b instanceof Uc?id(d,b):Hf(d,b)}I(c,X(this,"active"))&&(c=fA(this,a,c),gA(this,a,c),Cz(c),hA(c))}};
h.isActive=function(a){return(a=this.U(a))?I(a,X(this,"active")):!1};
function iA(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.B(b,"card-id"))?D(c):E(d,b))||(c=document.createElement("div"));var f=c;K(f,d);J(f,e);b.cardContentNode=c}return c}
function hA(a){var b=a.cardMask;b||(b=qf("IFRAME"),b.src='javascript:""',Tq(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function jA(){W.call(this,"kbd-nav")}
var kA;y(jA,W);Ha(jA);h=jA.prototype;h.register=function(){Y(this,"keydown",this.Ae);this.ga("yt-uix-kbd-nav-move-in",this.Jd);this.ga("yt-uix-kbd-nav-move-in-to",this.Rf);this.ga("yt-uix-kbd-move-next",this.Kd);this.ga("yt-uix-kbd-nav-move-to",this.Nb)};
h.unregister=function(){Z(this,"keydown",this.Ae);Q(kA)};
h.Ae=function(a,b,c){var d=c.keyCode;if(a=F(a,X(this)))switch(d){case 13:case 32:this.Jd(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=ak(a,"kbdNavMoveOut");!c;){c=F(a.parentElement,X(this));if(!c)break a;c=ak(c,"kbdNavMoveOut")}c=D(c);this.Nb(c);S("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,X(this,"list")))switch(d){case 40:this.Kd(b,a);break;case 38:d=document.activeElement==a,a=lA(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),mA(this,a[b]))}c.preventDefault()}};
h.Jd=function(a){var b=ak(a,"kbdNavMoveIn");b=D(b);nA(this,a,b);this.Nb(b)};
h.Rf=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}nA(this,d,a);this.Nb(a)};
h.Nb=function(a){if(a)if(Mf(a))a.focus();else{var b=If(a,function(c){return Ef(c)?Mf(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function nA(a,b,c){if(b&&c)if(J(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Aj&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Kd=function(a,b){var c=document.activeElement==b,d=lA(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),mA(this,d[c]))};
function mA(a,b){if(b){var c=Rf(b,"LI");c&&(J(c,X(a,"highlight")),kA=P(b,"blur",t(function(d){K(d,X(this,"highlight"));Q(kA)},a,c)))}}
function lA(a){if("UL"!=a.tagName.toUpperCase())return[];a=bb(Bf(a),function(b){return"LI"==b.tagName.toUpperCase()});
return bb(cb(a,function(b){return Az(b)?If(b,function(c){return Ef(c)?Mf(c):!1}):!1}),function(b){return!!b})}
;function oA(){W.call(this,"menu");this.g=this.f=null;this.i={};this.w={};this.j=null}
y(oA,W);Ha(oA);function pA(a){var b=oA.getInstance();if(I(a,X(b)))return a;var c=b.U(a);return c?c:F(a,X(b,"content"))==b.f?b.g:null}
h=oA.prototype;h.register=function(){Y(this,"click",this.Be);Y(this,"mouseenter",this.qf);this.ga("page-scroll",this.vh);this.ga("yt-uix-kbd-nav-move-out-done",function(a){a=this.U(a);qA(this,a)});
this.j=new nr};
h.unregister=function(){Z(this,"click",this.Be);this.g=this.f=null;Q(wb(Xb(this.i)));this.i={};Sb(this.w,function(a){zf(a)},this);
this.w={};Qi(this.j);this.j=null;oA.J.unregister.call(this)};
h.Be=function(a,b,c){a&&(b=rA(this,a),!b.disabled&&Ts(c.target,b)&&sA(this,a))};
h.qf=function(a,b,c){a&&I(a,X(this,"hover"))&&Ts(c.target,rA(this,a))&&sA(this,a,!0)};
h.vh=function(){this.f&&this.g&&tA(this,this.g,this.f)};
function tA(a,b,c){var d=uA(a,b);if(d){var e=Ug(c);if(e instanceof Ve){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Tg(e,!0);d.style.height=Tg(f,!0)}c==a.f&&(e=9,f=8,I(b,X(a,"reversed"))&&(e^=1,f^=1),I(b,X(a,"flipped"))&&(e^=4,f^=4),a=new Te(0,1),d&&kr(b,e,d,f,a,null,197),kr(b,e,c,f,a,null,197))}
function sA(a,b,c){vA(a,b)&&!c?qA(a,b):(wA(a,b),!a.f||Ts(b,a.f)?a.Ce(b):or(a.j,t(a.Ce,a,b)))}
h.Ce=function(a){if(a){var b=xA(this,a);if(b){xt("yt-uix-menu-before-show",a,b);this.f?Ts(a,this.f)||qA(this,this.g):(this.g=a,this.f=b,I(a,X(this,"sibling-content"))||(zf(b),document.body.appendChild(b)),b.style.minWidth=rA(this,a).offsetWidth-2+"px");var c=uA(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);K(b,X(this,"content-hidden"));tA(this,a,b);Tq(rA(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);S("yt-uix-menu-show",a);yA(b);zA(this,a);S("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.wh,this,a),e=t(this.Lf,this,a);c=Oa(a).toString();this.i[c]=[P(b,"click",e),P(document,"click",d)];I(a,X(this,"indicate-selected"))&&(d=t(this.Mf,this,a),this.i[c].push(P(b,"click",d)));I(a,X(this,"hover"))&&(a=t(this.rf,this,a),this.i[c].push(P(document,"mousemove",a)))}}};
h.rf=function(a,b){var c=et(b);c&&(Ts(c,rA(this,a))||AA(this,c)||BA(this,a))};
h.wh=function(a,b){var c=et(b);if(c){if(AA(this,c)){var d=F(c,X(this,"content")),e=Rf(c,"LI");e&&d&&Gf(d,e)&&xt("yt-uix-menu-item-clicked",c);c=F(c,X(this,"close-on-select"));if(!c)return;d=pA(c)}qA(this,d||a)}};
function wA(a,b){if(b){var c=F(b,X(a,"content"));c&&z(cf(X(a),c),function(d){!Ts(d,b)&&vA(this,d)&&BA(this,d)},a)}}
function qA(a,b){if(b){var c=[];c.push(b);var d=xA(a,b);d&&(d=cf(X(a),d),d=pb(d),c=c.concat(d),z(c,function(e){vA(this,e)&&BA(this,e)},a))}}
function BA(a,b){if(b){var c=xA(a,b);Uq(rA(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,X(a,"content-hidden"));var d=xA(a,b);d&&ef(d,{"aria-expanded":"false"});(d=uA(a,b))&&d.parentNode&&zf(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.ja("ROOT_MENU_REMOVED"));S("yt-uix-menu-hide",b);c=Oa(b).toString();Q(a.i[c]);delete a.i[c]}}
h.Lf=function(a,b){var c=et(b);c&&CA(this,a,c)};
h.Mf=function(a,b){var c=et(b);if(c){var d=rA(this,a);if(d&&(c=Rf(c,"LI")))if(c=Pf(c).trim(),d.hasChildNodes()){var e=Rz.getInstance();(d=E(X(e,"content"),d))&&Hf(d,c)}else Hf(d,c)}};
function zA(a,b){var c=xA(a,b);if(c){z(c.children,function(e){"LI"==e.tagName&&ef(e,{role:"menuitem"})});
ef(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Oa(c),c.id=d);(c=rA(a,b))&&ef(c,{"aria-controls":d})}}
function CA(a,b,c){var d=xA(a,b);d&&I(b,X(a,"checked"))&&(a=Rf(c,"LI"))&&(a=E("yt-ui-menu-item-checked-hid",a))&&(z(cf("yt-ui-menu-item-checked",d),function(e){Wq(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Wq(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function vA(a,b){var c=xA(a,b);return c?!I(c,X(a,"content-hidden")):!1}
function yA(a){z(af("UL",null,a),function(b){b.tabIndex=0;var c=jA.getInstance();Tq(b,[X(c),X(c,"list")])})}
function xA(a,b){var c=V(b,"menu-content-id");return c&&(c=D(c))?(Tq(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:E(X(a,"content"),b)}
function uA(a,b){var c=Oa(b).toString(),d=a.w[c];if(!d){d=qf("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(Rq(b),function(f){e.push(f+"-mask")});
Tq(d,e);a.w[c]=d}return d||null}
function rA(a,b){return E(X(a,"trigger"),b)}
function AA(a,b){return Ts(b,a.f)||Ts(b,a.g)}
;function DA(){dA.call(this,"clickcard");this.f={};this.g={}}
y(DA,dA);Ha(DA);h=DA.prototype;h.register=function(){DA.J.register.call(this);Y(this,"click",this.fd,"target");Y(this,"click",this.cd,"close")};
h.unregister=function(){DA.J.unregister.call(this);Z(this,"click",this.fd,"target");Z(this,"click",this.cd,"close");for(var a in this.f)Q(this.f[a]);this.f={};for(a in this.g)Q(this.g[a]);this.g={}};
h.fd=function(a,b,c){c.preventDefault();b=Rf(c.target,"button");b&&b.disabled||(a=(b=this.B(a,"card-target"))?$e(b):a,b=this.U(a),this.B(b,"disabled")||(I(b,X(this,"active"))?(this.hide(a),K(b,X(this,"active"))):(this.show(a),J(b,X(this,"active")))))};
h.show=function(a){DA.J.show.call(this,a);var b=this.U(a),c=Oa(a).toString();if(!V(b,"click-outside-persists")){if(this.f[c])return;b=P(document,"click",t(this.gd,this,a));var d=P(window,"blur",t(this.gd,this,a));this.f[c]=[b,d]}a=P(window,"resize",t(this.hh,this,a,void 0));this.g[c]=a};
h.hide=function(a){DA.J.hide.call(this,a);a=Oa(a).toString();var b=this.f[a];b&&(Q(b),this.f[a]=null);if(b=this.g[a])Q(b),delete this.g[a]};
h.gd=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=F(b.target,c)||F(pA(b.target),c));(d=d||F(document.activeElement,c)||(document.activeElement?F(pA(document.activeElement),c):null))||this.hide(a)};
h.cd=function(a){(a=F(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function EA(){dA.call(this,"hovercard")}
y(EA,dA);Ha(EA);h=EA.prototype;h.register=function(){Y(this,"mouseenter",this.Dd,"target");Y(this,"mouseleave",this.Fd,"target");Y(this,"mouseenter",this.Ed,"card");Y(this,"mouseleave",this.Gd,"card")};
h.unregister=function(){Z(this,"mouseenter",this.Dd,"target");Z(this,"mouseleave",this.Fd,"target");Z(this,"mouseenter",this.Ed,"card");Z(this,"mouseleave",this.Gd,"card")};
h.Dd=function(a){if(FA!=a){FA&&(this.hide(FA),FA=null);var b=t(this.show,this,a),c=parseInt(this.B(a,"delay-show"),10);b=M(b,-1<c?c:200);Tx(a,"card-timer",b.toString());FA=a;a.alt&&(Tx(a,"card-alt",a.alt),a.alt="");a.title&&(Tx(a,"card-title",a.title),a.title="")}};
h.Fd=function(a){var b=parseInt(this.B(a,"card-timer"),10);O(b);this.U(a).isCardHidable=!0;b=parseInt(this.B(a,"delay-hide"),10);b=-1<b?b:200;M(t(this.zf,this,a),b);if(b=this.B(a,"card-alt"))a.alt=b;if(b=this.B(a,"card-title"))a.title=b};
h.zf=function(a){this.U(a).isCardHidable&&(this.hide(a),FA=null)};
h.Ed=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Gd=function(a){a&&this.hide(a.cardTargetNode)};
var FA=null;function GA(a,b,c,d,e,f){this.f=a;this.F=null;this.i=E("yt-dialog-fg",this.f)||this.f;if(a=E("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Oa(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.N=E("yt-dialog-focus-trap",this.f);this.R=!1;this.j=new nr;this.A=[];this.A.push(gt(this.f,"click",t(this.hg,this),"yt-dialog-dismiss"));this.A.push(P(this.N,"focus",t(this.Ue,this),!0));HA(this,"content");this.V=b;this.ma=c;this.Y=d;this.L=
e;this.ia=f;this.H=this.D=this.w=null}
var IA={LOADING:"loading",Vh:"content",dj:"working"};function JA(a,b,c){a.O()||a.j.subscribe((c?"pre-":"post-")+"all",b)}
function HA(a,b){var c=E("yt-dialog-fg-content",a.f),d=[];Sb(IA,function(e){d.push("yt-dialog-show-"+e)});
Uq(c,d);J(c,"yt-dialog-show-"+b)}
h=GA.prototype;
h.show=function(a){if(!this.O()){this.F=document.activeElement;if(!this.Y){this.g||(this.g=D("yt-dialog-bg"),this.g||(this.g=qf("div"),this.g.id="yt-dialog-bg",Sq(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var b=window,c=b.document;var d=0;if(c){d=c.body;var e=c.documentElement;if(e&&d)if(b=gf(b).height,hf(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);d=c>b?c>f?
c:f:c<f?c:f}else d=0}this.g.style.height=d+"px";Cz(this.g)}this.xd();d=KA(this);LA(d);this.w=P(document,"keydown",t(this.Kf,this));d=this.f;e=R("player-added",this.xd,this);Tx(d,"player-ready-pubsub-key",e);this.ma&&(this.D=P(document,"click",t(this.Mg,this)));Cz(this.f);this.i.setAttribute("tabindex","0");MA(this);this.L||J(document.body,"yt-dialog-active");Sz(Rz.getInstance());eA(DA.getInstance());eA(EA.getInstance());this.H=a;S("yt-ui-dialog-show-complete",this)}};
function NA(){return eb(cf("yt-dialog"),function(a){return Az(a)})}
h.xd=function(){if(!this.ia){var a=this.f;Vq(document.body,"hide-players",!0);a&&Vq(a,"preserve-players",!0)}};
function KA(a){var b=af("iframe",null,a.f);z(b,function(c){var d=V(c,"onload");d&&(d=r(d))&&P(c,"load",d);if(d=V(c,"src"))c.src=d},a);
return pb(b)}
function LA(a){z(document.getElementsByTagName("iframe"),function(b){-1==$a(a,b)&&J(b,"iframe-hid")})}
function OA(){z(cf("iframe-hid"),function(a){K(a,"iframe-hid")})}
h.hg=function(a){a=a.currentTarget;a.disabled||(a=V(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.O()){this.j.ja("pre-all");this.j.ja("pre-"+a);Dz(this.f);eA(DA.getInstance());eA(EA.getInstance());this.i.setAttribute("tabindex","-1");NA()||(Dz(this.g),this.L||K(document.body,"yt-dialog-active"),Ws(),OA());this.w&&(Q(this.w),this.w=null);this.D&&(Q(this.D),this.D=null);var b=this.f;if(b){var c=V(b,"player-ready-pubsub-key");c&&(wt(c),Vx(b,"player-ready-pubsub-key"))}this.j.ja("post-all");S("yt-ui-dialog-hide-complete",this);"cancel"==a&&S("yt-ui-dialog-cancelled",
this);this.j&&this.j.ja("post-"+a);this.H=null;this.F&&this.F.focus()}};
h.setTitle=function(a){Hf(E("yt-dialog-title",this.f),a)};
h.Kf=function(a){M(t(function(){this.V||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Mg=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.O=function(){return this.R};
h.dispose=function(){Az(this.f)&&this.dismiss("dispose");Q(this.A);this.A.length=0;M(t(function(){this.F=null},this),0);
this.N=this.i=null;this.j.dispose();this.j=null;this.R=!0};
h.Ue=function(a){a.stopPropagation();MA(this)};
function MA(a){M(t(function(){this.i&&this.i.focus()},a),0)}
p("yt.ui.Dialog",GA,void 0);function PA(a){Iq.call(this,a);this.ba=[];this.Sa=[]}
y(PA,Iq);function QA(a,b,c,d,e,f){b=gt(f||a.uc(),b,t(d,e||a),c);a.ba.push(b)}
PA.prototype.La=function(){z(this.ba,Q);wt(this.Sa);PA.J.La.call(this)};
PA.prototype.ga=function(a,b){var c=R(a,t(b,this));this.Sa.push(c)};function RA(){W.call(this,"form-input")}
y(RA,W);Ha(RA);h=RA.prototype;
h.register=function(){B&&!de(9)&&(Y(this,"click",this.Oa,"checkbox"),Y(this,"keypressed",this.Oa,"checkbox"),Y(this,"click",this.cc,"radio"),Y(this,"keypressed",this.cc,"radio"));B&&!de(10)&&Y(this,"click",this.ud,"placeholder");Y(this,"change",this.Oa,"checkbox");Y(this,"blur",this.Xc,"select-element");Y(this,"change",this.Qa,"select-element");Y(this,"keyup",this.Qa,"select-element");Y(this,"focus",this.md,"select-element");Y(this,"keyup",this.jb,"text");Y(this,"keyup",this.jb,"textarea");Y(this,
"keyup",this.jb,"bidi");Y(this,"click",this.vf,"reset")};
h.unregister=function(){B&&!de(9)&&(Z(this,"click",this.Oa,"checkbox"),Z(this,"keypressed",this.Oa,"checkbox"),Z(this,"click",this.cc,"radio"),Z(this,"keypressed",this.cc,"radio"));B&&!de(10)&&Z(this,"click",this.ud,"placeholder");Z(this,"change",this.Oa,"checkbox");Z(this,"blur",this.Xc,"select-element");Z(this,"change",this.Qa,"select-element");Z(this,"keyup",this.Qa,"select-element");Z(this,"focus",this.md,"select-element");Z(this,"keyup",this.jb,"text");Z(this,"keyup",this.jb,"textarea");Z(this,
"keyup",this.jb,"bidi");RA.J.unregister.call(this)};
h.Oa=function(a){var b=F(a,X(this,"checkbox-container"));a.checked&&I(b,"partial")&&(a.checked=!1,a.indeterminate=!1,K(b,"partial"));Vq(b,"checked",a.checked)};
h.Sg=function(a){var b=F(a,X(this,"radio-container"));b&&Vq(b,"checked",a.checked)};
h.cc=function(){SA()};
h.jb=function(a){var b=a.value;Bb.test(b)?a.dir="rtl":Ab.test(b)?a.dir="ltr":a.removeAttribute("dir");B&&!de(10)&&(b=F(a,X(this,"container")))&&Vq(b,X(this,"non-empty"),!!a.value)};
h.ud=function(a){(a=F(a,X(this,"container")))&&(a=Qz(this,"text",a)||Qz(this,"textarea",a))&&a.focus()};
h.md=function(a){var b=F(a,X(this,"select"));J(b,"focused");this.Qa(a)};
h.Xc=function(a){var b=F(a,X(this,"select"));K(b,"focused");this.Qa(a)};
h.Qa=function(a){var b=F(a,X(this,"select")),c=E(X(this,"select-value"),b),d=TA(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.za(a,"onchange-callback"),d=Ss(d),yf(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);Vq(b,X(this,"select-disabled"),a.disabled)};
h.vf=function(){var a=RA.getInstance();z(cf(X(a,"checkbox")),a.Oa,a);SA();UA()};
function TA(a){return a.options[Math.max(a.selectedIndex,0)]}
function VA(a,b){a.checked=b;RA.getInstance().Oa(a)}
function SA(){var a=RA.getInstance();z(cf(X(a,"radio")),a.Sg,a)}
function UA(){var a=RA.getInstance();z(cf(X(a,"select-element")),a.Qa,a)}
function WA(){var a;return(a=(XA||document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked'))?a.value:null}
;function YA(a,b){GA.call(this,a,!0,!1);this.Ca=b;this.l=Ff(a);this.C=null}
ma(YA,GA);YA.prototype.show=function(a){GA.prototype.show.call(this,a);this.C=new ZA(this.Ca,this.ba.bind(this));Kq(this.C,this.f)};
YA.prototype.dismiss=function(a){GA.prototype.dismiss.call(this,a);this.C=null;zf(this.l)};
YA.prototype.ba=function(a,b){var c=this,d=Ff(this.l);Af(a,this.l);this.l=Cf(d);d=new GA(E("yt-dialog",d),!1,!1);JA(d,function(e){zf(c.l);b(e)},!0);
d.show()};
function ZA(a,b){PA.call(this);this.Ca=a;this.L=b;this.f=this.C=this.g=this.l=this.w=null}
ma(ZA,PA);h=ZA.prototype;
h.eb=function(){PA.prototype.eb.call(this);this.w=Jq(this,"legal-report-details-form-renderer-description");this.l=Jq(this,"legal-report-details-form-renderer-issue-type-select");this.g=Jq(this,"legal-report-details-form-renderer-affiliation-select");this.C=Jq(this,"legal-report-details-form-renderer-name");this.f=Jq(this,"legal-report-details-form-renderer-submit-button");QA(this,"keyup","legal-report-details-form-renderer-description",this.Rb.bind(this));QA(this,"change","legal-report-details-form-renderer-issue-type-select",
this.Rb.bind(this));QA(this,"change","legal-report-details-form-renderer-affiliation-select",this.Rb.bind(this));QA(this,"click","yt-dialog-content",this.Rb.bind(this));QA(this,"click","legal-report-details-form-renderer-submit-button",this.Pf.bind(this));UA()};
h.La=function(){this.f=this.C=this.g=this.l=this.w=null;PA.prototype.La.call(this)};
h.Pf=function(){var a=V(this.f,"flag-url"),b=V(this.f,"flag-action"),c=this.w.value,d=parseInt(this.l.options[this.l.selectedIndex].value||"0",10),e=parseInt(this.g.options[this.g.selectedIndex].value||"0",10),f=this.C.value;a&&b&&c&&d&&e&&(b={flagging_action:b,report_issue:d,report_affiliation:e,report_description:c},f&&(b.report_full_name=f),this.f.disabled=!0,Bs(a,{format:"JSON",method:"POST",Ga:!0,onSuccess:this.Cg.bind(this),onError:this.Bg.bind(this),P:b}))};
h.Cg=function(a,b){var c=this;this.f.disabled=!1;if(b.html_content){var d=rf(b.html_content);this.L(d,function(){S("commentreported",c.Ca,b.feedback_text)})}else S("commentreported",this.Ca,b.feedback_text)};
h.Bg=function(){this.f.disabled=!1};
h.Rb=function(){this.f.disabled=this.w&&this.l&&this.g&&this.w.value&&this.l.selectedIndex&&this.g.selectedIndex?!1:!0};function $A(a){PA.call(this);this.Y=this.N=this.L=this.X=null;this.Ca=a;this.g=this.C=this.R=this.l=this.f=this.w=this.be=null}
y($A,PA);function aB(a){if("radio"==a.type)return a=F(a,"option-selectable-item-renderer-radio-container"),E("option-selectable-item-renderer-confirm-dialog",a);a=TA(a);return D(a?a.value||a.text:null)}
function bB(a){a=Rf(a,"LI");return E("option-item-supported-renderers-sub-options",a)}
h=$A.prototype;h.kg=function(a){a=a.target;UA();if(this.f){K(this.f,"option-selectable-item-renderer-radio-selected");var b=bB(this.f);b&&Dz(b)}this.l=null;this.f=a;J(this.f,"option-selectable-item-renderer-radio-selected");(a=bB(this.f))?(Cz(a),a=!!V(TA(E("yt-uix-form-input-select-element",a)),"disable-submit"),cB(this,a)):cB(this,!1);this.C&&(E("yt-uix-form-input-checkbox",this.C).checked=!1,Vq(this.C,"checked",!1));Dz(this.g);Cz(this.w);dB(this,this.f)};
function eB(a){if(a.L&&a.N){var b={flagging_action:a.L};Bs(a.N,{format:"JSON",method:"POST",Ga:!0,onSuccess:t(function(c,d){d.feedback_text&&(this.be=d.feedback_text);if(d.html_content){var e=rf(d.html_content);this.X?Af(e,this.X):document.body.appendChild(e);e=new GA(D("flagging-response-message-dialog"),!1,!0);JA(e,t(this.Yb,this),!0);e.show()}else this.Yb()},a),
onError:t(function(){cB(this,!1)},a),
P:b})}else fB(a)}
function fB(a){if(a.Y){var b={feedback_tokens:a.Y};Bs("/feed_change_ajax?action_give_feedback=1",{format:"JSON",method:"POST",Ga:!0,onSuccess:t(function(c,d){if(d.feedback_responses){var e=new GA(this.X,!1,!0);JA(e,t(this.Yb,this),!0);e.dismiss("close");gB(this,d)}else this.Yb()},a),
onError:t(function(){cB(this,!1)},a),
P:b})}}
function gB(a,b){var c=E("service-endpoint-replace-enclosing-action-notification",a.Ca);var d=a.Ca;var e=F(d,"yt-lockup"),f=F(d,"feed-item-container");if(e){var g=E("yt-lockup-notifications-container",e);d=E("yt-lockup-dismissable",e)}else if(f)g=E("feed-item-dismissal-notices",f),d=E("feed-item-dismissable",f);else return;g&&c&&(yf(g),xf(g,c));var k;g&&(k=function(){Cz(g);c&&Cz(c)});
d?hB(d,k):k&&k();S("yt-dom-content-change",e||f);e=document.createElement("div");b.feedback_responses.length?(k=b.feedback_responses[0].follow_up_confirmation_html,id(e,k)):e.innerHTML="Thanks for the report";e.className="follow-up-confirmation hid";k=E("replace-enclosing-action-options",c);c.insertBefore(e,c.firstChild);c.removeChild(k);J(E("replace-enclosing-action-message",c),"hid");K(E("follow-up-confirmation",c),"hid")}
function hB(a,b){Dz(a);b&&b();S("yt-dom-content-change",a)}
h.uh=function(){cB(this,!0);this.N=V(this.f,"flag-url");this.L=V(this.f,"flag-action");this.Y=V(this.f,"feedback-token");var a=aB(this.f),b=bB(this.f);b&&(a=aB(E("yt-uix-form-input-select-element",b)));a?(this.X?Af(a,this.X):document.body.appendChild(a),b=new GA(a,!1,!0),QA(this,"click","option-selectable-item-renderer-confirm-button",this.gg,null,a),b.show()):eB(this)};
h.gg=function(a){var b=F(a.target,"option-selectable-item-renderer-confirm-button"),c=V(b,"url");a=V(b,"flag-action");b=V(b,"flag-url");if(c){var d=Hc(c);d=Dc(d);c!=d&&Zr(Error("Unsafe window.open URL: "+c));c=d;window.open(c,Cd(c).toString(36))}a&&b&&(this.L=a,this.N=b);eB(this)};
h.Yb=function(){S("commentreported",this.Ca,this.be)};
h.Yf=function(a){this.l=TA(a.target);dB(this,this.l);a=!!V(this.l,"disable-submit");cB(this,a)};
h.fg=function(a){a.target.checked?(Dz(this.w),Cz(this.g)):(Dz(this.g),Cz(this.w))};
function cB(a,b){a.w.disabled=b;a.g&&(a.g.disabled=b)}
h.jg=function(){cB(this,!0);var a=V(this.g,"flag-url"),b=V(this.l?this.l:this.f,"flag-action");a&&b?(b={flagging_action:b,flagging_checkbox_checked:1},Bs(a,{format:"JSON",method:"POST",Ga:!0,onSuccess:t(function(c,d){if(d.html_content&&this.X){var e=rf(d.html_content),f=Ff(Ff(this.X));Af(e,Ff(this.X));this.X=e=E("yt-dialog",f);(new YA(e,this.Ca)).show()}else cB(this,!1)},this),
onError:t(function(){cB(this,!1)},this),
P:b})):cB(this,!1)};
function dB(a,b){b&&(V(b,"action-legal-checkbox-show")?Cz(a.R):V(b,"action-legal-checkbox-hide")&&Dz(a.R))}
h.eb=function(){$A.J.eb.call(this);this.w=Jq(this,"options-renderer-submit-button");this.X=F(this.w,"yt-dialog");this.R=Jq(this,"legal-report-checkbox-container");this.C=Jq(this,"legal-report-checkbox");this.g=Jq(this,"report-form-modal-renderer-next-button");QA(this,"click","options-renderer-submit-button",this.uh);QA(this,"click","option-selectable-item-renderer-radio",this.kg);QA(this,"change","yt-uix-form-input-select-element",this.Yf);QA(this,"click","legal-report-checkbox",this.fg);QA(this,
"click","report-form-modal-renderer-next-button",this.jg)};
h.La=function(){this.g=this.C=this.R=this.Ca=this.l=this.f=this.w=this.X=null;$A.J.La.call(this)};function iB(a){GA.call(this,a,!1,!0);this.ba=D("report-form-modal-renderer");this.l=null;this.f=a}
y(iB,GA);iB.prototype.C=function(){this.dismiss("close")};
iB.prototype.show=function(a){iB.J.show.call(this,a);this.l=new $A(this.H);Kq(this.l,E("yt-dialog-fg-content",this.f));vt("yt-ui-dialog-hide-complete",t(this.C,this))};
iB.prototype.dismiss=function(a){iB.J.dismiss.call(this,a);this.l&&(this.l=null);zf(this.ba)};function jB(){W.call(this,"report-thumb-wrap");this.f=null;this.g=!1}
ma(jB,W);jB.prototype.register=function(){Y(this,"click",this.i)};
jB.prototype.unregister=function(){Z(this,"click",this.i);W.prototype.unregister.call(this)};
jB.prototype.i=function(a){var b=pA(a);b=F(b,"yt-lockup");this.f=mf("DIV",{"class":"video-renderer-abuse"});var c=mf("DIV",{"class":"video-renderer-abuse-content"});this.f.appendChild(c);b.appendChild(this.f);kB(this,Cf(this.f),a,b);Cz(this.f)};
function kB(a,b,c,d){if(!a.g){var e=V(c,"url");(c=V(c,"params"))&&e&&(c={params:c},a.g=!0,Bs(e,{format:"JSON",method:"POST",Ga:!0,onSuccess:function(f,g){a.g=!1;if(!D("report-form-modal-renderer")){var k=rf(g.html_content);b.appendChild(k);(new iB(E("yt-dialog",D("report-form-modal-renderer")))).show(d)}},
onError:function(){a.g=!1},
P:c}))}}
Ha(jB);function lB(){W.call(this,"overlay");this.j=this.g=this.i=this.f=null}
y(lB,W);Ha(lB);h=lB.prototype;h.register=function(){Y(this,"click",this.Mc,"target");Y(this,"click",this.hide,"close");mB(this)};
h.unregister=function(){lB.J.unregister.call(this);Z(this,"click",this.Mc,"target");Z(this,"click",this.hide,"close");this.j&&(wt(this.j),this.j=null);this.g&&(Q(this.g),this.g=null)};
h.Mc=function(a){if(!this.f||!Az(this.f.f)){var b=this.U(a);a=nB(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.B(b,"disable-shortcuts")||!1,d=!!this.B(b,"disable-outside-click-dismiss")||!1;this.f=new GA(a,c);this.i=b;var e=E("yt-dialog-fg",a);if(e){var f=this.B(b,"overlay-class")||"",g=this.B(b,"overlay-style")||"default",k=this.B(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,k));Tq(e,f)}this.f.show();S("yt-uix-kbd-nav-move-to",e||a);mB(this);c||
d||(c=t(function(l){I(l.target,"yt-dialog-base")&&oB(this)},this),this.g=P(E("yt-dialog-base",a),"click",c));
this.za(b,"overlay-shown");S("yt-uix-overlay-shown",b)}}};
function mB(a){a.j||(a.j=R("yt-uix-overlay-hide",pB));a.f&&JA(a.f,function(){var b=lB.getInstance();b.i=null;b.f.dispose();b.f=null})}
function oB(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.za(b,"overlay-hidden");a.i=null;a.g&&(Q(a.g),a.g=null);a.f=null}}
function nB(a,b){var c;if(a)if(c=E("yt-dialog",a)){var d=D("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=F(b,"yt-dialog"));return c}
function qB(){var a=lB.getInstance();if(a.i)a=E("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=cf("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=F(a[b],"yt-dialog");if(Az(c)){a=a[b];break a}}a=null}return a}
h.hide=function(a){a&&a.disabled||S("yt-uix-overlay-hide")};
function pB(){oB(lB.getInstance())}
h.show=function(a){this.Mc(a)};function rB(){W.call(this,"char-counter")}
y(rB,W);Ha(rB);rB.prototype.register=function(){Y(this,"keydown",this.f,"input");Y(this,"paste",this.f,"input");Y(this,"cut",this.f,"input");Y(this,"blur",this.f,"input")};
rB.prototype.unregister=function(){Z(this,"keydown",this.f,"input");Z(this,"paste",this.f,"input");Z(this,"cut",this.f,"input");Z(this,"blur",this.f,"input")};
rB.prototype.f=function(a){var b=this.U(a);if(b){var c="true"==this.B(b,"count-char-by-size"),d=parseInt(this.B(b,"char-limit"),10);isNaN(d)||0>=d||M(t(function(){var e="true"==this.B(b,"use-plaintext-length");sB(a,c,e);var f=parseInt(this.B(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var g=d-tB(a,c,e);Vq(b,X(this,"maxed-out"),g<f);Vq(b,X(this,"maxed-out-singular"),1==Math.abs(g));"true"==this.B(b,"maxed-out-as-positive")&&(g=Math.abs(g));z(cf(X(this,"remaining"),b),function(k){Hf(k,g)})},this),
0)}};
function sB(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=tB(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var g=unescape(encodeURIComponent(e)).length;f++}while(g<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function tB(a,b,c){a=a.value;c&&(a=$q(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function uB(){W.call(this,"close")}
y(uB,W);Ha(uB);uB.prototype.register=function(){Y(this,"click",this.f)};
uB.prototype.unregister=function(){Z(this,"click",this.f)};
uB.prototype.f=function(a){var b,c=this.B(a,"close-parent-class"),d=this.B(a,"close-parent-id");d?b=D(d):c&&(b=F(a,c));b&&(Dz(b),c=this.B(a,"close-focus-target-id"))&&(c=D(c))&&(d=Rz.getInstance(),d.isToggled(c)&&d.toggle(c),c.focus());this.za(a,"close-callback",b)};function vB(){W.call(this,"expander")}
y(vB,W);Ha(vB);vB.prototype.register=function(){Y(this,"click",this.f,"head");Y(this,"keypress",this.g,"head")};
vB.prototype.unregister=function(){Z(this,"click",this.f,"head");Z(this,"keypress",this.g,"head")};
vB.prototype.f=function(a){wB(this,a)};
vB.prototype.g=function(a,b,c){c&&13==c.keyCode&&wB(this,a)};
function wB(a,b){var c=a.U(b);if(c){c&&(Mf(c)||ef(c,{tabIndex:"0"}),c.focus());Xq(c,X(a,"collapsed"));var d=!I(c,X(a,"collapsed"));S("yt-uix-expander-toggle",c,d);S("yt-dom-content-change",c);a.za(c,"expander-action")}}
;function xB(){W.call(this,"languagepicker");this.f={}}
y(xB,W);Ha(xB);h=xB.prototype;h.register=function(){Y(this,"click",this.td,"menu-item");Y(this,"keyup",this.he,"search-input");Y(this,"keydown",this.wd,"search-input");Y(this,"blur",this.vd,"search-input");Y(this,"focus",this.sd);this.ga("yt-uix-button-menu-before-show",this.pf);this.ga("yt-uix-button-menu-hide",this.nf)};
h.unregister=function(){Z(this,"click",this.td,"menu-item");Z(this,"keyup",this.he,"search-input");Z(this,"keydown",this.wd,"search-input");Z(this,"blur",this.vd,"search-input");Z(this,"focus",this.sd);Q(Xb(this.f));this.f={};xB.J.unregister.call(this)};
h.pf=function(a){if(I(a,"yt-languagepicker-button")){var b=Oa(a);a=P(a,"keydown",t(this.jf,this));this.f[b]=a}};
h.nf=function(a){I(a,"yt-languagepicker-button")&&(a=Oa(a),Q(this.f[a]),delete this.f[a])};
function yB(a,b){return fb(b,function(c){return!fb(a,function(d){return 0!=d.lastIndexOf(c,0)})})}
function zB(a,b,c){z(a,function(d){var e=ak(d,"value"),f=AB(d);zz(d,e!=c&&f&&yB(f,b))})}
function AB(a){if("undefined"===typeof a.f){var b=ak(a,"searchTerms");b?(a.f=[],z(b.split(";"),function(c){qb(a.f,BB(c))})):a.f=BB(Pf(a))}return a.f}
function BB(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function CB(a,b){var c=Rz.getInstance(),d=Vz(c,a);Xz(c,a);Zz(c,d,b)}
h.he=function(a){var b=this.U(a),c=Qz(this,"search-result",b),d=BB(a.value);if(d){var e=Bf(c);a=ak(b,"fallbackOption");zB(e,d,a);d=gb(e,Az);a=c.querySelector('li[data-value="'+a+'"]');zz(c,!(!d&&!a));d?CB(b,d):a&&(Cz(a),CB(b,a))}else zz(c,!1)};
h.wd=function(a,b,c){b=Rz.getInstance();a=this.U(a);var d=Vz(b,a);switch(c.keyCode){case 13:case 9:(b=Xz(b,a))&&ht(Cf(b),"click");c.preventDefault();break;case 27:Xz(b,a);Yz(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
h.td=function(a){var b=ak(a,"value"),c=this.U(a),d=ak(c,"languagepickerInputId");d=D(d);d.value=b;ht(d,"change");(d=Qz(this,"suggestions",c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=Qz(this,"selected",c))&&zf(b),a=a.cloneNode(!0),J(a,X(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function DB(a,b){var c=Rz.getInstance(),d=a.U(b);Vz(c,d).focus()}
h.vd=function(a){DB(this,a)};
h.sd=function(a,b,c){"INPUT"!=c.target.tagName&&DB(this,a)};
h.jf=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=Rz.getInstance();b=Tz(c,b);b=Qz(this,"search-input",b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var EB;function FB(){if(void 0===EB){var a=document.createElement("div");void 0!==a.style.MozTransition?EB="Moz":void 0!==a.style.WebkitTransition?EB="Webkit":void 0!==a.style.f?EB="O":EB=null}return EB}
;function GB(a,b){ty.call(this,a,b)}
y(GB,ty);function HB(a,b,c){b=FB()+b;a.el.style[b]=c}
GB.prototype.play=function(){this.el.style.opacity=this.g;M(t(function(){HB(this,"TransitionTimingFunction",this.Nc);HB(this,"TransitionDuration",this.duration+"s");HB(this,"TransitionProperty","opacity");it(this.el,Qd?"webkitTransitionEnd":Ld?"oTransitionEnd":"transitionend",t(function(){HB(this,"TransitionTimingFunction","");HB(this,"TransitionDuration","");HB(this,"TransitionProperty","");this.Ub&&this.Ub(this)},this));
this.el.style.opacity=this.f},this),20)};function IB(a,b){this.w=1;this.l=0;this.j=!1;uy.call(this,a,b)}
y(IB,uy);IB.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.w=isNaN(b)?1:b;this.l=isNaN(c)?0:c;this.j=void 0===this.el.style.opacity;IB.J.setup.call(this,a)};
IB.prototype.ka=function(){this.j&&1==this.l&&(this.el.style.filter="")};
function JB(a,b){this.g=1;this.f=0;ty.call(this,a,b)}
y(JB,GB);JB.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.g=isNaN(b)?1:b;this.f=isNaN(c)?0:c;JB.J.setup.call(this,a)};function KB(a,b,c){var d={duration:.5};d.start=b;d.end=c;FB()?new JB(a,d):new IB(a,d)}
;function LB(a){yw.call(this,1,arguments);this.csn=a}
ma(LB,yw);var Iw=new zw("screen-created",LB),MB=[],NB=0;function OB(a,b,c){MB.push({Og:a,payload:b,options:c});NB||(NB=Gw())}
function Hw(a){if(MB){for(var b=ba(MB),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,lu(c.Og,c.payload,null,c.options));MB.length=0}NB=0}
;function PB(a,b){z(b,function(c){var d=!0;d=void 0===d?!1:d;c={csn:a,ve:pw(c),eventType:d?16:8};d={jd:ww(a),dc:a,Re:d};"UNDEFINED_CSN"==a?OB("visualElementHidden",c,d):lu("visualElementHidden",c,xu,d)})}
;function QB(){W.call(this,"mouseover-img-wrap");this.j=this.f=!1;this.F=this.w=this.g=-1;this.i=""}
y(QB,W);Ha(QB);var RB=0,SB=0;h=QB.prototype;h.register=function(){Y(this,"mouseover",this.sb);Y(this,"focusin",this.sb);Y(this,"focus",this.sb);Y(this,"mouseout",this.rb);Y(this,"focusout",this.rb);Y(this,"blur",this.rb);Y(this,"click",this.De);Y(this,"mousedown",this.Hd)};
h.unregister=function(){O(RB);O(SB);Z(this,"mouseover",this.sb);Z(this,"focusin",this.sb);Z(this,"focus",this.sb);Z(this,"mouseout",this.rb);Z(this,"focusout",this.rb);Z(this,"blur",this.rb);Z(this,"click",this.De);Z(this,"mousedown",this.Hd);QB.J.unregister.call(this)};
function TB(a){a=a.getElementsByTagName("img");return 0<a.length?a[0]:null}
function UB(a){return(a=a.match(/\/([a-zA-Z0-9_-]{11})\//))?a[1]:""}
function VB(a,b){if(a.j){var c={isMovingThumbnail:a.f};if(a.f&&0<a.g){var d=a.F-a.w;0<a.w&&0<d&&(c.movingThumbnailLoadingDurationMs=Math.round(d));c.durationHoveredMs=Math.round(au()-a.g)}a.i&&(c.videoId=a.i);d=uw();var e=V(b,"visibility-tracking");d&&e&&(c={thumbnailHoveredData:c},e={csn:d,ve:pw(new ow({trackingParams:e})),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_HOVER"},c&&(e.clientData=c),c={jd:ww(d),dc:d},"UNDEFINED_CSN"==d?OB("visualElementGestured",e,c):lu("visualElementGestured",e,xu,
c));a.j=!1;a.f=!1;a.g=-1;a.w=-1;a.F=-1;a.i=""}}
function WB(a,b){var c=a.B(b,"mouseover-src");return mf("IMG",{"class":"mouseover-img",src:c,width:b.width,height:b.height})}
function XB(a){return E("mouseover-img",a)}
function YB(a,b,c){120!=b.naturalWidth?(a.g=au(),a.F=au(),RB=M(a.yf,2500),KB(b,0,1)):c&&KB(c,0,1)}
h.yf=function(a){O(RB);RB=0;var b=XB(a);b&&(KB(b,1,0),(a=E("mouseover-play",a))&&KB(a,0,1))};
function ZB(){var a=mf("DIV",{"class":"mouseover-play"}),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("width","48px");b.setAttribute("height","48px");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("fill","#fff");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M8 5v14l11-7z");b.appendChild(c);a.appendChild(b);return a}
function $B(a){return"none"!=(Kg(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display)}
h.Hd=function(a){O(SB);SB=0;(a=XB(a))&&!a.complete&&(od(a,""),a.onload=null,O(RB),RB=0)};
h.sb=function(a){var b=TB(a);if(b){var c=this.B(b,"mouseover-src"),d=E("mouseover-play",a),e=XB(a);if(!d||c&&!e)c?(this.f=!0,this.i=UB(c)):(this.f=!1,b.src&&(this.i=UB(b.src))),d||(d=ZB(),b.parentNode.appendChild(d)),O(SB),SB=0,this.j=!1,SB=M(function(){this.w=au();this.j=!0;d&&!c&&KB(d,0,1);c&&!e&&(e=WB(this,b),b.parentNode.appendChild(e),e.complete?YB(this,e,d):e.onload=function(){YB(this,e,d)}.bind(this))}.bind(this),150)}};
h.rb=function(a){var b=TB(a);if(null!=b){var c=this.B(b,"mouseover-src");b=this.B(b,"mouseover-log");var d=E("mouseover-play",a),e=XB(a);if(d&&!$B(d)||c&&e&&!$B(e))O(SB),SB=0,d&&d.parentNode.removeChild(d),e&&(e.onload=null,e.complete&&120!=e.naturalWidth||(this.g=0),O(RB),RB=0,od(e,""),e.parentNode.removeChild(e)),b&&VB(this,F(a,"yt-lockup-video"))}};
h.De=function(a){var b=TB(a);null!=b&&this.B(b,"mouseover-log")&&VB(this,F(a,"yt-lockup-video"))};function aC(){W.call(this,"redirect-link")}
y(aC,W);Ha(aC);aC.prototype.register=function(){Y(this,"click",this.f)};
aC.prototype.unregister=function(){Z(this,"click",this.f)};
aC.prototype.f=function(a){if(!V(a,"redirect-href-updated")){Tx(a,"redirect-href-updated","true");var b=L("XSRF_REDIRECT_TOKEN");if(b){var c={};c.q=a.href;c.redir_token=b;nd(a,fg("/redirect",c))}}};function bC(){W.call(this,"scroller");this.f={}}
y(bC,W);Ha(bC);h=bC.prototype;h.register=function(){Y(this,"mouseenter",this.Id);Y(this,"mouseleave",this.Sb)};
h.unregister=function(){Z(this,"mouseenter",this.Id);Z(this,"mouseleave",this.Sb);for(var a in this.f)this.Sb(this.f[a]);this.f={};bC.J.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.Sb(this.f[a]);this.f={}};
h.Id=function(a){var b=P(a,"mousewheel",t(this.sf,this,a));Tx(a,"scroller-mousewheel-listener",b);b=P(a,"scroll",t(this.xh,this,a));Tx(a,"scroller-scroll-listener",b);a&&(b=Oa(a).toString(),this.f[b]=a)};
h.Sb=function(a){var b=this.B(a,"scroller-mousewheel-listener")||"";Tx(a,"scroller-mousewheel-listener","");var c=this.B(a,"scroller-scroll-listener")||"";Tx(a,"scroller-scroll-listener","");Q(b);Q(c);Tx(a,"scroller-scroll-listener","");a&&(a=Oa(a).toString(),delete this.f[a])};
h.sf=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.B(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.xh=function(a){this.za(a,"scroll-action");S("yt-dom-content-change",a)};function cC(){W.call(this,"sessionlink")}
y(cC,W);Ha(cC);cC.prototype.register=function(){Y(this,"mousedown",this.f);Y(this,"click",this.f)};
cC.prototype.unregister=function(){Z(this,"mousedown",this.f);Z(this,"click",this.f)};
cC.prototype.f=function(a){dC(a)};
function dC(a){var b;if(b=V(a,"sessionlink-target")||a.href||""){var c=V(a,"sessionlink")||"";c=bs(c);(a=parseInt(V(a,"sessionlink-lifetime"),10))?xw(b,c,a):xw(b,c)}}
;function eC(a){W.call(this,a||"slider");this.g=0;this.f=null}
y(eC,W);Ha(eC);h=eC.prototype;h.register=function(){Y(this,"click",this.ed,"prev");Y(this,"click",this.dd,"next");Y(this,"keyup",this.Pd,"item");this.f=P(window,"resize",t(this.tf,this));this.ga("yt-uix-expander-toggle",this.hc)};
h.unregister=function(){Z(this,"click",this.ed,"prev");Z(this,"click",this.dd,"next");Z(this,"click",this.Pd,"item");Q(this.f);eC.J.unregister.call(this)};
h.hc=function(){z(cf(X(this)),function(a){fC(this,a)},this)};
h.tf=function(){O(this.g);this.g=M(t(this.hc,this),200)};
function gC(a,b,c){var d=a.U(b);if(!I(d,X(a,"is-moving"))){b=Qz(a,"list",d);var e=Qz(a,"body",d),f=pb(cf(X(a,"item"),d));if(f){var g=f[0];if("forward"==c){var k=hC(d,e,f);c=void 0!==k.nextElementSibling?k.nextElementSibling:Df(k.nextSibling,!0);if(!c)return;k=iC(a,c,e,f);g=c}else if("back"==c){k=jC(d,e,f);c=void 0!==k.previousElementSibling?k.previousElementSibling:Df(k.previousSibling,!1);if(!c)return;k=kC(a,c,e,f);g=c}J(d,X(a,"is-moving"));Xg(d)?b.style.right=(parseInt(b.style.right,10)||0)-k+"px":
b.style.left=(parseInt(b.style.left,10)||0)+k+"px";var l=M(t(a.ce,a,d,g),510);it(b,an,t(function(m){O(l);this.ce(d,m)},a,g))}}}
h.dd=function(a){gC(this,a,"forward")};
h.ed=function(a){gC(this,a,"back")};
h.Pd=function(a){(a=this.U(a))&&S("yt-dom-content-change",a)};
function jC(a,b,c){return Xg(a)?lC(a,b,c):mC(a,b,c)}
function hC(a,b,c){return Xg(a)?mC(a,b,c):lC(a,b,c)}
function mC(a,b,c){function d(f){return Rg(f)>e-1}
var e=Rg(b);return Xg(a)?ib(c,d):gb(c,d)}
function lC(a,b,c){function d(f){f=Rg(f)+f.offsetWidth;return e>f-1}
var e=Rg(b)+b.offsetWidth;return Xg(a)?gb(c,d):ib(c,d)}
function kC(a,b,c,d){var e=a.U(b);var f=Rg(c);var g=f+c.offsetWidth,k=Rg(b);b=k+b.offsetWidth;var l=d[0];d=Rg(l);l=d+l.offsetWidth;Xg(e)?(c=a.wc(e,c)-k,f=g-l):(c=a.xc(e,c)-b,f-=d);Vq(e,X(a,"at-tail"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Vq(e,X(a,"at-head"),!0);return f}
function iC(a,b,c,d){var e=a.U(b);var f=Rg(c);var g=f+c.offsetWidth,k=Rg(b);b=k+b.offsetWidth;var l=d[d.length-1];d=Rg(l);l=d+l.offsetWidth;Xg(e)?(c=a.xc(e,c)-b,f-=d):(c=a.wc(e,c)-k,f=g-l);Vq(e,X(a,"at-head"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Vq(e,X(a,"at-tail"),!0);return f}
h.wc=function(a,b){return Rg(b)};
h.xc=function(a,b){return Rg(b)+b.offsetWidth};
h.ce=function(a,b){a&&(K(a,X(this,"is-moving")),fC(this,a),S("yt-uix-slider-slide-shown",b),S("yt-dom-content-change",a))};
function fC(a,b){var c=Qz(a,"body",b),d=pb(cf(X(a,"item"),b));if(d&&d.length){var e=jC(b,c,d);c=hC(b,c,d);e=e==d[0];d=c==d[d.length-1]}else e=d=!0;Vq(b,X(a,"at-head"),e);Vq(b,X(a,"at-tail"),d);if(a.B(b,"disable-slider-buttons")){if(c=Qz(a,"prev",b))c.disabled=e;if(e=Qz(a,"next",b))e.disabled=d}}
;function nC(){W.call(this,"tabs")}
y(nC,W);Ha(nC);nC.prototype.register=function(){Y(this,"click",this.f,"tab");Y(this,"keydown",this.g,"tab")};
nC.prototype.unregister=function(){Z(this,"click",this.f,"tab");Z(this,"keydown",this.g,"tab");nC.J.unregister.call(this)};
nC.prototype.f=function(a){if(!I(a,"disabled")){var b=this.U(a),c=X(this,"selected"),d=this.B(b,"uix-tabs-selected-extra-class");if(b=E(c,b)){var e=oC(this,b);K(b,c);d&&K(b,d);Dz(e)}b=oC(this,a);J(a,c);d&&J(a,d);Cz(b);S("yt-uix-tabs-after-shown",a,b)}};
nC.prototype.g=function(a,b,c){13==c.keyCode&&this.f(a)};
function oC(a,b){var c=a.B(b,"uix-tabs-target-id");return D(c)}
;function pC(){W.call(this,"tile")}
y(pC,W);Ha(pC);pC.prototype.register=function(){Y(this,"click",this.f)};
pC.prototype.unregister=function(){Z(this,"click",this.f)};
pC.prototype.f=function(a,b,c){Rf(c.target,"a")||Rf(c.target,"button")||!(a=E(X(this,"link"),a))||(B&&!de(9)?a.click():(I(a,"yt-uix-sessionlink")&&dC(a),I(a,"spf-link")?Dy(a.href):Cy(a.href)))};function qC(){var a=void 0===a?!1:a;var b=Vs();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function rC(){W.call(this,"tooltip");this.f=0;this.g={}}
y(rC,W);Ha(rC);h=rC.prototype;h.register=function(){Y(this,"mouseover",this.nc);Y(this,"mouseout",this.ab);Y(this,"focus",this.ld);Y(this,"blur",this.Wc);Y(this,"click",this.ab);Y(this,"touchstart",this.ne);Y(this,"touchend",this.ec);Y(this,"touchcancel",this.ec)};
h.unregister=function(){Z(this,"mouseover",this.nc);Z(this,"mouseout",this.ab);Z(this,"focus",this.ld);Z(this,"blur",this.Wc);Z(this,"click",this.ab);Z(this,"touchstart",this.ne);Z(this,"touchend",this.ec);Z(this,"touchcancel",this.ec);this.dispose();rC.J.unregister.call(this)};
h.dispose=function(){for(var a in this.g)this.ab(this.g[a]);this.g={}};
h.nc=function(a){if(!(this.f&&1E3>x()-this.f)){var b=parseInt(this.B(a,"tooltip-hide-timer"),10);b&&(Vx(a,"tooltip-hide-timer"),O(b));b=t(function(){sC(this,a);Vx(a,"tooltip-show-timer")},this);
var c=parseInt(this.B(a,"tooltip-show-delay"),10)||0;b=M(b,c);Tx(a,"tooltip-show-timer",b.toString());a.title&&(Pz(a,tC(this,a)),a.title="");b=Oa(a).toString();this.g[b]=a}};
h.ab=function(a){var b=parseInt(this.B(a,"tooltip-show-timer"),10);b&&(O(b),Vx(a,"tooltip-show-timer"));b=t(function(){if(a){var c=D(uC(this,a));c&&(vC(c),zf(c),Vx(a,"content-id"));c=D(uC(this,a,"arialabel"));zf(c)}Vx(a,"tooltip-hide-timer")},this);
b=M(b,50);Tx(a,"tooltip-hide-timer",b.toString());if(b=this.B(a,"tooltip-text"))a.title=b;b=Oa(a).toString();delete this.g[b]};
h.ld=function(a,b){this.f=0;this.nc(a,b)};
h.Wc=function(a){this.f=0;this.ab(a)};
h.ne=function(a,b,c){c.changedTouches&&(this.f=0,(a=Mz(b,X(this),c.changedTouches[0].target))&&this.nc(a,b))};
h.ec=function(a,b,c){c.changedTouches&&(this.f=x(),(a=Mz(b,X(this),c.changedTouches[0].target))&&this.ab(a))};
function wC(a,b,c){Pz(b,c);a=a.B(b,"content-id");(a=D(a))&&Hf(a,c)}
function tC(a,b){return a.B(b,"tooltip-text")||b.title}
function sC(a,b){if(b){var c=tC(a,b);if(c){var d=D(uC(a,b));if(!d){d=document.createElement("div");d.id=uC(a,b);Sq(d,X(a,"tip"));var e=document.createElement("div");Sq(e,X(a,"tip-body"));var f=document.createElement("div");Sq(f,X(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");Sq(g,X(a,"tip-content"));var k=xC(a,b),l=uC(a,b,"content");g.id=l;Tx(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=Pf(b);l=uC(a,b,"arialabel");
f=document.createElement("div");J(f,X(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Hf(f,m);b.setAttribute("aria-labelledby",l);l=qC()||document.body;l.appendChild(f);l.appendChild(d);wC(a,b,c);(c=parseInt(a.B(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",J(g,X(a,"normal-wrap")));g=I(b,X(a,"reverse"));yC(a,b,d,e,k,g)||yC(a,b,d,e,k,!g);var q=X(a,"tip-visible");M(function(){J(d,q)},0)}}}}
function yC(a,b,c,d,e,f){Vq(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Ug(b);f=new Te((k.width-10)/2,f?k.height:0);var l=Qg(b);mr(new Te(l.x+f.x,l.y+f.y),c,g);f=gf(window);if(1==c.nodeType)var m=Sg(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new Te(c.clientX,c.clientY);c=Ug(d);var q=Math.floor(c.width/2);g=!!(f.height<m.y+k.height);k=!!(m.y<k.height);l=!!(m.x<q);f=!!(f.width<m.x+q);m=(c.width+3)/-2- -5;a=a.B(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function uC(a,b,c){a=X(a)+Qs(b);c&&(a+="-"+c);return a}
function xC(a,b){var c=null;Sd&&I(b,X(a,"masked"))&&((c=D("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Cz(c)):(c=qf("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",Sq(c,X(a,"tip-mask"))));return c}
function vC(a){var b=D("yt-uix-tooltip-shared-mask"),c=b&&Sf(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Dz(b),document.body.appendChild(b))}
;var zC=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};p("yt.uix.widgets_",zC,void 0);function AC(a){a=a.getInstance();var b=X(a);b in zC||(a.register(),a.ga("yt-uix-init-"+b,a.init),a.ga("yt-uix-dispose-"+b,a.dispose),zC[b]=a)}
;function BC(){this.i=[]}
h=BC.prototype;h.Md=function(){};
h.dispose=function(){this.i&&(Q(this.i),this.i=[]);this.Md()};
function CC(a,b,c,d,e){a.i.push(gt(b,c,t(d,a),e))}
h.redirect=function(a){Cy(a)};
function DC(a,b){if(!b)return!1;var c=b.redirect_url;if(!c)try{var d=Is(b);c=Hs(d,"redirect_url")}catch(e){c=null}if(!c)return!1;a.redirect(c);return!0}
h.Tb=function(){};
h.Tf=function(a,b,c){(c=JSON.parse(c.responseText))&&(a&&DC(this,c)||b&&b.call(this,c))};
function EC(a,b,c,d,e,f,g){a={format:b,method:"POST",onError:g||t(a.Tb,a),ka:void 0,onSuccess:f,P:e||{},Da:d||{},Ga:!0};Bs(c,a)}
;function FC(){this.i=[];this.D=this.w="";this.A=null;this.F=this.j=!1;this.C=null;this.L=this.H=""}
y(FC,BC);h=FC.prototype;h.Ld=function(){};
h.close=function(a){this.F=!1;this.f.dismiss(a||"close");this.dispose()};
h.create=function(a,b,c,d){this.F&&(b&&(this.A=b),c&&(this.C=c),a&&!this.j?this.Xg({},d):this.qc())};
h.open=function(a,b,c,d,e,f,g,k,l){this.w=a;this.H=b;if(this.l=D(this.w+"-lb")){(a=cz())&&a.pauseVideo&&a.pauseVideo();if(this.j)this.reset();else{this.f=new GA(this.l,k);try{this.f.setTitle("")}catch(m){}}GC(this,"loading");this.f.show();this.F=!0}d&&this.create(e,f,g,l)};
h.reset=function(){this.j&&HC(this)};
h.setClass=function(a,b){Vq(this.X,a,b)};
function IC(a,b){JA(a.f,b)}
h.Xg=function(a,b,c,d,e){arguments.length&&GC(this,e||"loading");var f=a||{};this.A&&(f.feature=this.A);this.C&&(f.next=this.C);EC(this,"XML",this.H,f,b||{},t(this.Uf,this,c),d)};
function GC(a,b){switch(b){case "content":HA(a.f,"content");break;case "loading":HA(a.f,"loading");break;case "working":HA(a.f,"working")}}
function HC(a,b){if(a.j){var c=b||a.L;if(c){if(a.D){var d=a.X;K(d,a.D);J(d,c)}else J(a.X,c);a.D=c}}}
h.qc=function(a,b){a&&id(D(this.w+"-dialog"),a);if(b)try{this.f.setTitle(b)}catch(c){}this.X=E("yt-dialog-fg",this.l);this.L=V(E("yt-pd-params",this.l),"start-page")||"";CC(this,this.X,"click",this.lg,"yt-pd-close");CC(this,this.X,"click",this.eg,"yt-pd-setclass");CC(this,this.X,"click",this.rg,"yt-pd-setpage");this.Ld();GC(this,"content");this.j=!0;HC(this)};
h.lg=function(){this.close("cancel")};
h.eg=function(a){a=F(a.target,"yt-pd-setclass");var b=V(a,"off");b&&this.setClass(b,!1);(a=V(a,"on"))&&this.setClass(a,!0)};
h.rg=function(a){a=F(a.target,"yt-pd-setpage");(a=V(a,"state-container-id"))&&HC(this,a)};
h.Tb=function(a){FC.J.Tb.call(this,a);this.close()};
h.Uf=function(a,b,c){var d=Is(b);if(d){var e=Hs(d,"not_eligible"),f=Hs(d,"error_message");e||f?this.Tb(b):DC(this,b)||(c=c.html_content||void 0,d=Hs(d,"title")||void 0,a?a(b,t(this.qc,this,c,d)):this.qc(c,d))}};function JC(){this.i=[];this.H=this.A=null;this.C=this.j=!1}
y(JC,BC);h=JC.prototype;h.Hc=function(){};
h.Xb=function(){};
h.init=function(a,b,c,d,e){this.A=a||null;this.H=b||null;c?d&&e&&(CC(this,d,"mousedown",this.Fe,e),CC(this,d,"click",this.le,e)):(this.Fe(),this.le())};
h.Lb=function(a,b){("string"===typeof a?r(a+".init"):a.init).apply(this,Array.prototype.slice.call(arguments,1))};
h.Fe=function(){this.j||(this.A&&Hy(this.A),this.H&&Zx(this.H,t(function(){(this.j=!0,this.C)&&this.Xb()},this)))};
h.le=function(a){this.Hc(a);this.C=!0;this.j&&this.C&&this.Xb()};var KC={};function LC(a){var b=Oa(a),c=KC[b];c||(c=new a,KC[b]=c);return c}
;function MC(){JC.call(this);this.l=null}
y(MC,JC);MC.prototype.Hc=function(a){a&&(this.l=V(a.currentTarget,"pageid"))};
MC.prototype.Xb=function(){this.Lb("yt.www.account.AddNewChannelDialog",this.l)};function NC(){JC.call(this);this.g=this.f=null;this.N=!1;this.w=this.D=this.F=null}
y(NC,JC);function OC(a,b,c,d,e){var f=LC(NC);b&&(f.f=b);c&&(f.F=c);d&&(f.D=d);e&&(f.w=e);f.init(L("CREATE_CHANNEL_CSS_URL",void 0),L("CREATE_CHANNEL_JS_URL",void 0),!a,D("body-container"),"create-channel-lightbox")}
NC.prototype.Hc=function(a){this.f||(a&&(a=V(a.currentTarget,"upsell"),"settings"==a||"upload"==a||"playlist"==a||"guide"==a||"comment"==a||"message"==a||"captions"==a||"live_chat"==a||"tbd_channel_account"==a)&&(this.f=a),this.f||(this.f="default"))};
NC.prototype.Xb=function(){switch(this.f){case "settings":this.g="/profile";break;case "guide":this.g=L("CREATE_CHANNEL_NEXT_URL_GUIDE",void 0);break;case "upload":this.g=L("CREATE_CHANNEL_NEXT_URL_UPLOAD",void 0);break;default:this.g=document.location.href}L("CREATE_CHANNEL_NEXT_URL")&&(this.g=L("CREATE_CHANNEL_NEXT_URL",void 0));if(!this.N){this.N=!0;var a=t(this.Tf,this,!1,this.R||null);EC(this,"JSON","/create_channel_ajax",{action_get_type:1},{},a)}};
NC.prototype.L=function(){var a=L("CREATE_CHANNEL_NEXT_URL",void 0);a&&("/"==a?Cy(a):window.history.back())};
NC.prototype.R=function(a){this.N=!1;if(a.open_generic_dialog)PC(this);else if("success"in a&&a.success)switch(a.type){case 15:case 17:case 18:this.Lb("yt.www.account.CreateCoreIdChannelDialog",this.L,this.f,this.g,this.F,this.D,this.w);break;case 8:Cy("/oops");break;case 5:Cy("/create_channel?action_blocked_misc=1");break;case 9:if("tbd_channel_account"==this.f){this.Lb("yt.www.account.CreateCoreIdChannelDialog",this.L,this.f,this.g,this.F,this.D,this.w);break}default:this.Lb("yt.www.account.CreateChannelDialog",
this.L,this.f,this.g)}else"redirect_url"in a&&a.redirect_url?Cy(a.redirect_url):Cy("/oops")};
function PC(a){var b=LC(FC),c=a.g;c&&(-1<c.indexOf("create_channel")||-1<c.indexOf("upload")||-1<c.indexOf("profile"))&&(c="/");b.open("create-channel-identity","/create_channel_ajax","create_channel_ajax",!0,!0,a.f,c);c&&IC(b,function(){Cy(c)})}
;function QC(a,b){if(Wk()){var c=Hz(a),d=0,e=Gg()+"-opacity";c&&(c.opacity||c[e])&&(d=c.opacity||c[e]);var f=M(function(){Q(g);b.call(a)},d+100),g=P(a,an,function(k){k.target==a&&"opacity"==k.propertyName&&(Q(g),O(f),b.call(a))})}else M(function(){b.call(a)},0)}
;var RC=Xb({SUCCESS:"yt-alert-success",ERROR:"yt-alert-error",cj:"yt-alert-warn",INFO:"yt-alert-info",Ii:"yt-alert-promo"});function SC(a,b,c){if(c){z(cf("yt-alert",c),function(e){QC(e,function(){e.parentNode&&e.parentNode.removeChild(e)});
J(e,"yt-alert-fading")});
b.removeAttribute("id");Uq(b,RC);J(b,"yt-alert-success");var d=E("yt-alert-content",b);(E("yt-alert-message",b)||d).innerHTML=a;c.appendChild(b);Cz(b)}}
;function TC(a,b){this.f=new GA(a,!0);this.l=b;this.j=this.g=this.w=""}
var UC=[],VC=[],WC=null;function XC(a,b,c,d){var e=D("feed-privacy-lb");e&&(WC=new TC(e,a),WC.w=b||"",WC.g=c||"",WC.j=d||"",a=WC,Hy(L("FEED_PRIVACY_CSS_URL",void 0)),YC(a,null,{channel_id:a.g,setting_type:a.l,playlist_id:a.j,video_id:a.w}))}
function ZC(a){XC("SUBSCRIPTIONS",void 0,a)}
function $C(a){XC("LIKES",a)}
function aD(a){XC("FAVORITES",a)}
function bD(a,b){XC("PLAYLISTS",a,void 0,b)}
function cD(a){XC("LIKE_PLAYLISTS",void 0,void 0,a)}
TC.prototype.dismiss=function(){this.f.dismiss("cancel")};
function YC(a,b,c){a={method:"POST",format:"XML",Da:b||{},P:c||{},Ga:!0,onSuccess:t(a.D,a),onError:t(a.F,a)};Bs("/feed_privacy_ajax",a)}
TC.prototype.D=function(a,b){var c=Is(a),d=Hs(c,"invalid_request"),e=Hs(c,"missing_setting_type"),f=Hs(c,"already_seen_dialog");if(!(d||e||f))if(d=D("feed-privacy-dialog"),e=cz(),c=Hs(c,"success_message")){f=D("alerts");var g=Wc(b.alert_template_html).toString();g=g.replace(/^[\s\xa0]+/,"");var k=String(g.substr(0,3)).toLowerCase();0==("<tr"<k?-1:"<tr"==k?0:1)?(g=rf(Tf("<table><tbody>"+g+"</tbody></table>")),g=Us("tr",g)):(k=document.createElement("div"),k.innerHTML=g,g=Cf(k));SC(c,g,f);jt(d);window.scroll(0,
0);this.dismiss();e&&e.playVideo&&e.playVideo()}else e&&e.pauseVideo&&e.pauseVideo(),id(d,b.html_content),VC.push(gt(d,"click",t(this.i,this,!1),"make-activity-public-button")),VC.push(gt(d,"click",t(this.i,this,!0),"make-activity-private-button")),S("yt-dom-content-change",d),HA(this.f,"content"),this.f.show()};
TC.prototype.F=function(){this.dismiss()};
TC.prototype.i=function(a){var b={};b[a?"action_make_private":"action_make_public"]="1";a={setting_type:this.l};HA(this.f,"working");YC(this,b,a)};function dD(){FC.call(this);this.g=[];Hy(L("IDENTITY_PROMPT_CSS_URL",void 0))}
y(dD,FC);h=dD.prototype;h.Ld=function(){this.g.push(gt(this.X,"click",t(this.kf,this),"identity-prompt-account-list-item"));this.g.push(gt(this.X,"click",t(this.xf,this),"specialized-identity-prompt-account-item"));this.g.push(gt(this.X,"click",t(this.gf,this),"authuser-mismatch-identity-prompt-account-item"))};
h.Md=function(){Q(this.g);this.g.length=0};
h.kf=function(a){var b=D("identity-prompt-form");a=af("input",void 0,a.currentTarget);b&&b.action&&a&&1==a.length&&(b.action=ds(b.action,{pageId:a[0].value}));var c=D("identity-prompt-confirm-button");c?c.disabled=!1:b&&a&&1==a.length&&(a[0].checked=!0,b.submit())};
h.xf=function(a){a=V(a.currentTarget,"switch-url");D("dont_ask_again").checked&&(a+="&dont_ask_again=on");Cy(a)};
h.gf=function(a){a=V(a.currentTarget,"switch-url");Cy(a)};function eD(a){this.g=a;this.f=null;a=fD(this.g);a=rd("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.i={}}
var gD=/__([a-z]+(?:_[a-z]+)*)__/g;function fD(a){var b=[],c={};a.replace(gD,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function hD(a,b){var c=t(function(d,e){return b[e]||this.i[e]||""},a);
return a.g.replace(a.f,c)}
;function iD(a){var b={};void 0!==jD()&&(b.ar=jD());void 0!==kD().nv&&(b.nv=kD().nv);Object.assign(a,b);a.o=kD().o;return a}
function jD(){if(void 0!==kD().earst){var a=lD+(Date.now()-mD);a=""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}else a=kD().ar;return a}
var lD=Date.now(),mD=Date.now();function kD(){return L("CREATOR_CONTEXT",nD)}
var nD={o:"U"},oD=kD().earst;void 0!==oD&&(lD=oD,mD=Date.now());function pD(){this.w=null;this.f=[];this.promo=null;this.l="";this.g=null;this.R=$e("mcn-affiliate-agreement-overlay-template");var a=D(this.R).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");this.N=new eD(a);this.i=!1}
y(pD,Oi);pD.prototype.init=function(a,b,c){this.promo=a;this.l=b;this.g=c;this.f.push(P(this.promo,"click",t(this.Y,this)));this.f.push(gt(this.g,"click",t(this.V,this),this.l));this.f.push(gt(this.g,"click",t(this.A,this),"yt-uix-overlay-close"));a=qB();this.f.push(gt(a,"click",t(this.A,this),"yt-dialog-close"));this.f.push(gt(this.g,"click",t(this.H,this),"mcn-affiliate-agreement-checkbox"));this.f.push(gt(this.g,"change",t(this.H,this),"commerce-creator-signup-text-fields"))};
pD.prototype.A=Ga;pD.prototype.H=function(){var a=$e("agreement-checkbox-1"),b=$e("agreement-checkbox-2"),c=$e("agreement-checkbox-3"),d=!0;this.i&&(d=I($e("sign-contract-form"),"ng-valid"));E(this.l,void 0).disabled=!(a.checked&&b.checked&&c.checked&&d)};
function qD(a,b,c,d,e){b=iD({action_load_agreement:1,is_modal:b});Bs("/account_mcn_affiliate_monetization_ajax",{method:"POST",Da:b,context:a,onSuccess:t(function(f,g){this.w=g.contract_tags;this.i="user_contact_info_form"in g;c(g);this.i&&(angular.module("mcnAffiliateAgreement",[]),angular.bootstrap(document,["mcnAffiliateAgreement"]))},a),
onError:t(function(){this.w=null;d()},a),
ka:function(){e()}})}
function rD(){var a=ud($e("full_name").value),b=ud($e("title").value),c=ud($e("email_address").value),d=ud($e("phone_number").value),e=ud($e("company_name").value);return{full_name:a,title:b,email_address:c,phone_number:d,company_name:e}}
function sD(a,b,c){$e("agreement-checkbox-1").disabled=!0;$e("agreement-checkbox-2").disabled=!0;$e("agreement-checkbox-3").disabled=!0;var d=$e("agreement-email-yes"),e=iD({action_sign_up:1});d={contract_tags:a.w.join(),has_commerce_feature:a.i,receive_emails:d.checked};if(a.i){var f=rD();gc(d,f)}Bs("/account_mcn_affiliate_monetization_ajax",{method:"POST",Da:e,P:d,context:a,onSuccess:t(function(){b()},a),
onError:t(function(){c()},a)})}
pD.prototype.K=function(){Q(this.f);this.f.length=0;pD.J.K.call(this)};function tD(a){pD.call(this);var b=$e("mcn-affiliate-signup-button");this.init(b,"mcn-affiliate-sign-agreement-button",$e("mcn-affiliate-agreement"));this.C=a;this.j=!1;if(L("SHOW_MCNA_YPE_MODAL")){this.j=!0;a=L("MCNA_YPE_CONTRACT_CSS_URL",void 0);var c=L("ACCOUNT_MONETIZATION_CSS_URL",void 0);Hy(L("MCNA_YPE_COMMERCE_CREATOR_CSS_URL",void 0));Hy(a);Hy(c);Zx(L("ANGULAR_JS",void 0));b.click()}}
y(tD,pD);
tD.prototype.Y=function(a){a.preventDefault();a.stopPropagation();var b=a.currentTarget;b.disabled=!0;qD(this,this.j,t(function(c){a.currentTarget.disabled=!1;var d=a.currentTarget;lB.getInstance().show(d);d=qB();E("yt-dialog-content",d).innerHTML=hD(this.N,{agreements_title:c.agreements_title,agreements_disclaimer:c.agreements_disclaimer,agreements:c.agreements,review_disclaimer:c.review_disclaimer,underage_message:c.underage_message,agreements_action_buttons:c.agreements_action_buttons,user_contact_info_form:c.user_contact_info_form});
a.currentTarget.disabled=!0},this),function(){Cz($e("mcn-affiliate-promo-error-msg"))},function(){b.disabled=!1})};
tD.prototype.V=function(a){a.preventDefault();a.stopPropagation();a=a.currentTarget;a.disabled||(a.disabled=!0,this.j||($e("agreement-close-button").disabled=!0),sD(this,t(this.L,this),function(){lB.getInstance().hide();Cz($e("mcn-affiliate-promo-error-msg"))}))};
tD.prototype.A=function(){if(this.j){var a=iD({action_ask_me_later:1});Bs("/account_mcn_affiliate_monetization_ajax",{method:"POST",Da:a,context:this})}};
tD.prototype.L=function(){this.C?Cy(this.C):(lB.getInstance().hide(),zz(this.promo,!1))};var uD=r("ytglobal.prefsUserPrefsPrefs_")||{};p("ytglobal.prefsUserPrefsPrefs_",uD,void 0);function vD(){this.f=L("ALT_PREF_COOKIE_NAME","PREF");var a=qu(this.f);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(uD[d]=c.toString())}}}
h=vD.prototype;h.get=function(a,b){wD(a);xD(a);var c=void 0!==uD[a]?uD[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){wD(a);xD(a);if(null==b)throw Error("ExpectedNotNull");uD[a]=b.toString()};
h.remove=function(a){wD(a);xD(a);delete uD[a]};
h.save=function(){pu(this.f,this.dump(),63072E3,"/")};
h.clear=function(){for(var a in uD)delete uD[a]};
h.dump=function(){var a=[],b;for(b in uD)a.push(b+"="+encodeURIComponent(String(uD[b])));return a.join("&")};
function xD(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function wD(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function yD(a){a=void 0!==uD[a]?uD[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ha(vD);function zD(a,b){Oi.call(this);this.g=a;this.l=b;this.f=null;this.i=D("page");this.f=P(D("premium-yva-close"),"click",t(this.pe,this));var c=this.g;vD.getInstance().get("HIDDEN_MASTHEAD_ID")==c||J(this.i,"masthead-ad-expanded");this.j=P(window,"message",t(this.ff,this))}
y(zD,Oi);var AD=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;h=zD.prototype;h.ff=function(a){a&&a.origin&&AD.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Ee()};
h.K=function(){zD.J.K.call(this);Q(this.f);Q(this.j);this.j=this.f=null};
h.Ee=function(){Dz("ad_creative_1");S("ads-masthead-hide");S("yt-dom-content-change");this.l&&Dz("ad_creative_collapse_btn_1");Cz("ad_creative_expand_btn_1");K(this.i,"masthead-ad-expanded");BD(this.g);dy("homepage_collapse_masthead_ad")};
h.pe=function(){Cz("ad_creative_expand_btn_1");zf(D("premium-yva"));zf(D("video-masthead"));S("yt-dom-content-change");BD(this.g)};
function BD(a){var b=vD.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()}
h.yh=function(){var a=vD.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();dy("homepage_expand_masthead_ad");Cy(document.location.href)};function CD(){eC.call(this,"shelfslider")}
y(CD,eC);Ha(CD);CD.prototype.wc=function(a){a=Xg(a)?Qz(this,"next",a):Qz(this,"prev",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Rg(a)+a.offsetWidth-NaN:Rg(a)+a.offsetWidth};
CD.prototype.xc=function(a){a=Xg(a)?Qz(this,"prev",a):Qz(this,"next",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Rg(a)+void 0:Rg(a)};var DD=!1,ED=!1;function FD(a){a=void 0===a?{}:a;Ma(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||gc(a,{_c:{jsl:{h:L("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||L("GAPI_HINT_OVERRIDE")){var b=cs(document.location.href).gapi_jsh;b&&gc(a,{_c:{jsl:{h:b}}})}Qm("client",a)}
;var GD=[],HD={},ID=[],JD=!1;function KD(){GD.push(gt(document.body,"click",LD,"yt-google-help-link"))}
function LD(a){a.preventDefault();var b=V(a.currentTarget,"ghelp-anchor")||a.currentTarget,c=V(a.currentTarget,"ghelp-tracking-param")||"";b=document.getElementById(b);var d=a.currentTarget,e=L("GOOGLE_HELP_CONTEXT",void 0);a=L("GOOGLE_HELP_PRODUCT_ID",void 0)||V(a.currentTarget,"feedback-product-id");d=!!V(d,"load-chat-support");MD(b,a,e,L("GOOGLE_HELP_PRODUCT_DATA"),d,!1,c)}
function ND(a,b){var c=L("FEEDBACK_LOCALE_LANGUAGE"),d=HD;gc(d,L("FEEDBACK_LOCALE_EXTRAS",{}));a&&gc(d,a);try{var e=cz();e&&e.pauseVideo&&e.pauseVideo();e&&(d.playback_id=e.getVideoData().cpn,e.getLastError&&(d.api_error=e.getLastError()))}catch(f){}b&&gc(d,{trackingParam:b});return{helpCenterPath:"/youtube",locale:c,productData:d}}
function OD(){var a=L("SESSION_INDEX"),b=L("FEEDBACK_BUCKET_ID"),c={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005",allowNonLoggedInFeedback:!0};a&&(c.authuser=a+"");b&&(c.bucket=b);return c}
function PD(a,b,c,d){a={context:b,anchor:a,enableSendFeedback:c?!1:!0,defaultHelpArticleId:d};gc(a,OD());return a}
function MD(a,b,c,d,e,f,g,k){var l=(b||"59")+"",m=ND(d,g),q=PD(a,c,f,k),u=e||ls("web_always_load_chat_support");FD(function(){var v=Tl(l,m);if(u&&!JD)try{v.g(q),JD=!0}catch(w){}v.j(q)});
return!1}
function QD(){(B?jr("7"):ie?jr("3.6"):ne?jr("5"):me||Nd)||z(cf("reportbug"),function(a){zz(a,!1)})}
;var RD,SD=[];function TD(a){UD("keyboard");27!=a.keyCode||a.event&&!1===a.event.returnValue||!document.activeElement||document.activeElement.blur()}
function VD(a){0>=a.event.clientX&&0>=a.event.clientY||UD("mouse")}
function UD(a){RD!==a&&(RD=a,Q(SD),SD.length=0,"keyboard"==RD?(WD(!0),SD=[P(window,"click",VD),P(window,"mousemove",VD)]):"mouse"==RD&&(WD(!1),SD=[P(window,"keydown",TD)]))}
function WD(a){Vq(document.documentElement,"no-focus-outline",!a)}
;function XD(a){var b=["guide"];b=YD(b);if(b.length){var c=a||{};c.frags=b.join(",");a=L("XSRF_FIELD_NAME",void 0);var d=L("XSRF_TOKEN",void 0),e="/watch_fragments_ajax";ls("use_watch_fragments2")&&(e="/watch_fragments2_ajax");c=fg(e,c);e={};e[a]=d;e.client_url=window.location.href;a=dg(e);ZD.push(spf.load(c,{method:"POST",postData:a,onDone:function(){if(jb(b,"guide")){var f=r("yt.www.guide.setup");f&&f(!1);f=L("GUIDE_SELECTED_ITEM",void 0);var g=r("yt.www.guide.selectGuideItem");g&&g(f);S("appbar-guide-delay-load")}S("yt-www-pageFrameCssNotifications-load")}}));
$D=ob($D,b)}}
function aE(){var a=cs(window.location.href);a.tr="nonwatch";XD(a)}
function YD(a){return bb(a,function(b){return!jb($D,b)})}
var ZD=[],$D=[],bE=[];function cE(a,b,c){dE("add_to_watch_later_list",a,b,c)}
function eE(a){dE("delete_from_watch_later_list",a,void 0,void 0)}
function dE(a,b,c,d){Bs(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",Da:{feature:b.feature||null,authuser:b.gj||null,pageid:b.pageId||null},P:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.qj||null,add_to_playlists:b.fj||null,plid:L("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(e,f){b.onSuccess.call(this,e,f)},
ka:b.ka,withCredentials:!!d})}
;var fE=[],gE="";function hE(){Kz("addto-watch-later-button","click",iE);Kz("addto-watch-later-button-success","click",jE);Kz("addto-watch-later-button-remove","click",kE);Kz("addto-watch-later-button-sign-in","click",lE);var a=D("shared-addto-watch-later-login");fE.push(gt(a,"click",mE,"sign-in-link"));fE.push(gt(a,"focusout",nE,"sign-in-link"))}
function lE(a){gE=V(a,"video-ids");var b=E("sign-in-link",D("shared-addto-watch-later-login"));b&&(J(a,"addto-wl-focused"),M(function(){b.focus()},0))}
function nE(){var a=E("addto-wl-focused");a&&(K(a,"addto-wl-focused"),M(function(){a.focus()},0))}
function mE(a){var b=ds("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:gE,next_url:document.location}),c=qf("form");c.action=b;c.method="POST";b=qf("input");b.type="hidden";b.name=L("XSRF_FIELD_NAME",void 0);b.value=L("XSRF_TOKEN",void 0);c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function iE(a){Wq(a,"addto-watch-later-button","addto-watch-later-button-loading");ef(a,{"aria-pressed":"true"});var b=V(a,"video-ids");cE({videoIds:b,onSuccess:function(c,d){var e=d.list_id;oE(e,b,a);S("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?oE(d.list_id,b,a):pE(a,d)}})}
function jE(a){Wq(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=V(a,"video-ids");eE({videoIds:b,onSuccess:function(){Wq(a,"addto-watch-later-button-loading","addto-watch-later-button");var c=rz("ADDTO_WATCH_LATER");wC(rC.getInstance(),a,c);S("WATCH_LATER_VIDEO_REMOVED")},
onError:function(c,d){pE(a,d)}})}
function kE(a){var b=V(a,"video-ids");eE({videoIds:b,onSuccess:function(c,d){S("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(c,d){pE(a,d)}})}
function oE(a,b,c){Wq(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=rz("ADDTO_WATCH_LATER_ADDED");wC(rC.getInstance(),c,d);S("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function pE(a,b){Wq(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||rz("ADDTO_WATCH_LATER_ERROR");wC(rC.getInstance(),a,c)}
;function qE(a){if(!rE||a)rE=gf(window);return rE}
function sE(){return tE=jf(document)}
function uE(){vE||(vE=du(wE,100))}
function wE(){vE=0;xE?xt("page-mouse",xE.f||new Te):Zr(Error("MouseTracker missing during publish."))}
function yE(){zE||(zE=du(AE,200))}
function AE(){zE=0;var a=qE(!0);xt("page-resize",a)}
function BE(){CE||(CE=du(DE,200))}
function DE(){CE=0;var a=sE();xt("page-scroll",a)}
var rE=null,tE=null,EE=[],xE=null,vE=0,zE=0,CE=0;var FE,GE,HE,IE,JE,KE,LE=0,ME=!1;function NE(){ME||(r("yt.www.page.visibilitymonitor").dispose(),GE={},HE={},FE={},IE={},KE=[],JE=OE(),KE.push(R("page-resize",PE)),KE.push(R("page-scroll",QE)),KE.push(R("yt-dom-content-change",RE)),ME=!0,SE(!0))}
function TE(){ME&&(wt(KE),UE(),GE={},HE={},FE={},IE={},KE.length=0,JE=null,ME=!1)}
function PE(){JE=OE();RE()}
function QE(){JE=OE();VE()}
function OE(){var a=sE(),b=qE();return new yg(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function WE(a){var b=Qs(a),c=FE[b];if(c)return c;c=P(a,"scroll",XE);return c=FE[b]={el:a,Wg:c,ob:null}}
function UE(){Sb(FE,function(a,b){var c=FE[b];c&&Q(c.Wg);delete FE[b]})}
function XE(a){RE(a.target)}
function YE(a,b){var c=[Qs(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function ZE(a,b){var c;b?c=a:c=Ff(a);return c?(c=F(c,"yt-viewport"))?WE(c):null:null}
function $E(a,b){if(a.ob&&!b)return a.ob;var c=aF(a.el),d=ZE(a.el);d&&(d=$E(d,b),c=bF(c,d));return a.ob=c}
function aF(a){var b=Qg(a);a=new Ve(a.offsetWidth,a.offsetHeight);return new yg(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function bF(a){var b=[],c=[],d=[],e=[];z(arguments,function(m){b.push(m.top);c.push(m.right);d.push(m.bottom);e.push(m.left)});
var f=Math.max.apply(Math,b),g=Math.min.apply(Math,c),k=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>k||l>g?new yg(0,0,0,0):new yg(f,g,k,l)}
function cF(a,b){var c=JE,d=aF(a);if(b.transform){var e=b.transform;Na(e)?(d.top-=e.top,d.right+=e.right,d.bottom+=e.bottom,d.left-=e.left):(d.top-=e,d.right+=Number(void 0),d.bottom+=Number(void 0),d.left-=Number(void 0))}var f;b.complete?f=zg:f=Ag;if(!f.call(yg,c,d))return!1;e=ZE(a);if(!e)return!0;$E(e);c=bF(c,e.ob);return f.call(yg,c,d)}
function dF(a,b,c){var d=YE(a,c);b.hasOwnProperty(d)||(b[d]=cF(a,c));return b[d]}
function eF(a,b,c){a=YE(a,c);if(!!IE[a]!=b)return b?"visible":"hidden"}
function fF(a,b){Sb(GE,function(c){if(c&&(!b||Gf(b,c.el))){var d=dF(c.el,a,c.options);(d=eF(c.el,d,c.options))&&d==c.type&&M(Ua(c.ta,c.el),0)}})}
function gF(a,b){Sb(HE,function(c){if(c&&(!b||Gf(c.el,b)||Gf(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],g=[];z(d,function(k){var l=dF(k,a,c.options);l?f.push(k):g.push(k);(l=eF(k,l,c.options))&&l==c.type&&e.push(k)});
e.length&&M(Ua(c.ta,e,f,g),0)}}})}
function VE(a){var b={};fF(b,a);gF(b,a);gc(IE,b)}
function hF(a,b,c,d){return Zb(GE,function(e){return e.el==a&&e.type==b&&e.ta==c&&cc(e.options,d)})}
function iF(a,b,c,d,e){return Zb(HE,function(f){return f.el==a&&f.type==b&&f.ta==c&&f.className==d&&cc(f.options,e)})}
function jF(a,b){z(cf("yt-viewport",b),a)}
function kF(a){jF(function(b){WE(b)},a);
Ef(a)&&ZE(a,!0)}
function lF(a,b){Sb(FE,function(c){b&&!Gf(b,c.el)||b==c.el||a(c)})}
function mF(a){var b=$E(a,!0);a=a.ob;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function RE(a){if(ME){var b;if(a)for(b=ZE(a,!0);b&&mF(b);)b=ZE(a);lF(function(c){delete c.ob},b?b.el:a);
VE(a)}}
function nF(a,b){if(!ME)throw Error("yt.www.page.visibilitymonitor is not initialized.");return cF(a,b||{})}
function oF(a,b,c,d){if(!ME)return"";d=d||{transform:void 0,complete:void 0};var e=hF(a,b,c,d);if(e)return e;kF(a);e=++LE+"";GE[e]={el:a,type:b,ta:c,options:d};return e}
function pF(a,b,c,d,e){if(!ME)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=iF(a,b,c,d,e);if(f)return f;kF(a);f=++LE+"";HE[f]={el:a,type:b,ta:c,filter:function(g){return cf(d,g)},
className:d,options:e};return f}
function qF(a){ME&&(delete GE[a],delete HE[a])}
function SE(a){var b=r("yt.www.page.visibilitymonitor");if(a||!b)p("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),p("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),p("yt.www.page.visibilitymonitor.init",NE,void 0),p("yt.www.page.visibilitymonitor.dispose",TE,void 0),p("yt.www.page.visibilitymonitor.refresh",RE,void 0),p("yt.www.page.visibilitymonitor.isVisible",nF,void 0),p("yt.www.page.visibilitymonitor.listen",oF,void 0),p("yt.www.page.visibilitymonitor.delegateByClass",
pF,void 0),p("yt.www.page.visibilitymonitor.unlistenByKey",qF,void 0)}
SE(!1);function rF(){(function(){try{for(var a=this;a.parent!=a;){if("$"==a.frameElement.src)throw Error("odd");a=a.parent}if(null!=a.frameElement)throw Error("busted");}catch(b){document.close(),document.open(),window.open("/","_top"),qd(top.location,"/")}})()}
function sF(a){"block"==a.responseText&&rF()}
if(window!=window.top){var gs=document.referrer;if(window.parent!=window.top)rF();else{var tF=fs();if(null===tF?0:"com"==tF[0]&&tF[1].match(/^youtube(?:kids|-nocookie)?$/))rF();else{var uF=fs();if(!(null===uF?0:"google"==uF[1]||"google"==uF[2]&&("au"==uF[0]&&"com"==uF[1]||"uk"==uF[0]&&"co"==uF[1]))){var vF={location:encodeURIComponent(gs),self:encodeURIComponent(window.location.href),user_agent:encodeURIComponent(navigator.userAgent)};Bs("/roger_rabbit",{format:"RAW",method:"POST",Da:vF,onSuccess:sF})}}}};function wF(a){yw.call(this,1,arguments);this.f=a}
y(wF,yw);function xF(a){yw.call(this,1,arguments);this.f=a}
y(xF,yw);function yF(a,b,c){yw.call(this,3,arguments);this.i=a;this.f=b;this.g=null!=c?!!c:null}
y(yF,yw);function zF(a,b){yw.call(this,1,arguments);this.button=a;this.f=b}
y(zF,yw);function AF(a,b,c,d,e,f){yw.call(this,2,arguments);this.g=a;this.f=b;this.j=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
y(AF,yw);function BF(a,b,c){yw.call(this,1,arguments);this.f=a;this.g=b}
y(BF,yw);function CF(a,b,c,d,e,f,g){yw.call(this,1,arguments);this.g=a;this.l=b;this.f=c;this.w=d||null;this.j=e||null;this.i=f||null;this.source=g||null}
y(CF,yw);
var DF=new zw("subscription-batch-subscribe",wF),EF=new zw("subscription-batch-unsubscribe",wF),FF=new zw("subscription-show-pref-overlay",zF),GF=new zw("subscription-subscribe",AF),HF=new zw("subscription-subscribe-loading",xF),IF=new zw("subscription-subscribe-loaded",xF),WF=new zw("subscription-subscribe-success",BF),aG=new zw("subscription-subscribe-external",AF),cG=new zw("subscription-unsubscribe",CF),dG=new zw("subscription-unsubscirbe-loading",xF),eG=new zw("subscription-unsubscribe-loaded",xF),
fG=new zw("subscription-unsubscribe-success",xF),gG=new zw("subscription-external-unsubscribe",CF),hG=new zw("subscription-enable-ypc",xF),iG=new zw("subscription-disable-ypc",xF),jG=new zw("subscription-prefs",yF),kG=new zw("subscription-prefs-success",yF),lG=new zw("subscription-prefs-failure",yF);var XA,mG=[],nG=[],oG=null,pG=null;function qG(a){oG=a.f;pG=a.g}
function rG(){if(oG){var a=gb(cf("overlay-confirmation-preferences-update-frequency",XA),function(b){return b.value==oG});
a&&(a.checked=!0,SA())}(a=E("receive-post-updates-checkbox",XA))&&null!==pG&&VA(a,pG)}
function sG(){return E("receive-post-updates-checkbox",XA)}
function tG(){var a=sG();a&&!a.disabled&&(pG=a.checked)}
function uG(){var a=sG();a&&("receive-no-updates"==WA()?(VA(a,!1),a.disabled=!0):(a.disabled=!1,null!==pG&&VA(a,pG)))}
function vG(a){a=F(a.currentTarget,"overlay-confirmation-content");var b=E("updates-frequency-menu",a);b&&(b.disabled=!E("receive-all-updates",a).checked)}
function wG(a){var b=a.currentTarget;a=V(b,"frequency");var c=Rz.getInstance();b=F(b,X(c,"menu"));c=Rz.getInstance();b=Vz(c,b);V(b,"frequency")!=a&&Tx(b,"frequency",a)}
function xG(a){XA||(XA=E("yt-dialog",E("subscription-preferences-overlay-container",Ff(a.button))));yG(!0);lB.getInstance().show(XA);var b={};b.c=a.f;Bs("/subscription_ajax?action_get_subscription_preferences_overlay=1",{method:"POST",P:b,Ga:!0,onSuccess:function(c,d){var e=d.content_html;yG(!1);id(E("subscription-preferences-overlay-content",XA),e);e=qB();var f=E("overlay-confirmation-save-button",e);Q(nG);nG.length=0;nG.push(P(f,"click",zG),gt(e,"click",vG,"receive-all-updates"),gt(e,"keypressed",
vG,"receive-all-updates"),gt(e,"click",tG,"receive-post-updates"),gt(e,"keypressed",tG,"receive-post-updates"),gt(e,"click",uG,"overlay-confirmation-preferences-update-frequency"),gt(e,"keypressed",uG,"overlay-confirmation-preferences-update-frequency"),gt(document.body,"click",wG,"updates-frequency-choice"));oG=WA();pG=(e=sG())?e.checked:null},
onError:function(){lB.getInstance().hide()}})}
function yG(a){var b=XA,c=E("subscription-preferences-overlay-content",b);zz(E("subscription-preferences-overlay-loading",b),a);zz(c,!a)}
function zG(a){var b=F(a.currentTarget,"yt-dialog-fg");if(b){a=V(a.currentTarget,"channel-external-id");var c=WA(),d=sG();if(c)a=new yF(a,c,d?d.checked:null);else{c=E("receive-all-updates",b);var e=E("updates-frequency-menu",b);b=!1;var f=!e||I(e,"hidden");f||"occasionally"!=V(e,"frequency")||(b=!0);e="receive-highlight-updates";c.checked&&!b?e="receive-all-updates":f||c.checked||(e="receive-no-updates");a=new yF(a,e,d?d.checked:null)}T(jG,a);lB.getInstance().hide()}}
;function AG(a,b){yw.call(this,1,arguments);this.container=a;this.offerId=b||null}
y(AG,yw);function BG(a){yw.call(this,1,arguments);this.callback=a}
y(BG,yw);function CG(a,b){yw.call(this,2,arguments);this.g=a;this.f=b}
y(CG,yw);function DG(a,b,c,d){yw.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
y(DG,yw);function EG(a,b){yw.call(this,1,arguments);this.g=a;this.f=b||null}
y(EG,yw);function FG(a){yw.call(this,1,arguments);this.f=a}
y(FG,yw);var GG=new zw("ypc-init-purchase-for-container",AG),HG=new zw("ypc-core-load",BG),IG=new zw("ypc-guide-sync-success",CG),JG=new zw("ypc-purchase-success",DG),KG=new zw("ypc-subscription-cancel",FG),LG=new zw("ypc-subscription-cancel-success",EG),MG=new zw("ypc-init-subscription",FG);var NG=!1,OG=[];function PG(a){a.f?NG?T(aG,a):T(HG,new BG(function(){T(MG,new FG(a.f))})):QG(a.g,a.j,a.i,a.source,a.params)}
function RG(a){a.f?NG?T(gG,a):T(HG,new BG(function(){T(KG,new FG(a.f))})):SG(a.g,a.l,a.j,a.i,a.source)}
function TG(a){UG(pb(a.f))}
function VG(a){WG(pb(a.f))}
function XG(a){YG(a.i,a.f,a.g)}
function ZG(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&T(WF,new BF(b,c,a.f.channelInfo))}
function $G(a){var b=a.f;Sb(a.g,function(c,d){T(WF,new BF(d,c,b[d]))})}
function aH(a){T(fG,new xF(a.g.itemId));a.f&&a.f.length&&(bH(a.f,fG),bH(a.f,hG))}
function QG(a,b,c,d,e){var f=new xF(a);T(HF,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&cH(b,c);Bs("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Da:g,P:c,onSuccess:function(k,l){var m=l.response;T(WF,new BF(a,m.id,m.channel_info));m.show_feed_privacy_dialog&&S("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
ka:function(){T(IF,f)}})}
function SG(a,b,c,d,e){var f=new xF(a);T(dG,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&cH(c,d);Bs("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Da:g,P:d,onSuccess:function(){T(fG,f)},
ka:function(){T(eG,f)}})}
function YG(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new yF(a,b,c);Bs("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",P:d,onError:function(){T(lG,e)},
onSuccess:function(){T(kG,e)}})}}
function UG(a){if(a.length){var b=rb(a,0,40);T("subscription-batch-subscribe-loading");bH(b,HF);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");bH(b,IF)};
Bs("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",P:c,onSuccess:function(e,f){d();var g=f.response,k=g.id;if(Ja(k)&&k.length==b.length){var l=g.channel_info_map;z(k,function(m,q){var u=b[q];T(WF,new BF(u,m,l[u]))});
a.length?UG(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function WG(a){if(a.length){var b=rb(a,0,40);T("subscription-batch-unsubscribe-loading");bH(b,dG);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");bH(b,eG)};
Bs("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",P:c,onSuccess:function(){d();bH(b,fG);a.length&&WG(a)},
onError:function(){d()}})}}
function bH(a,b){z(a,function(c){T(b,new xF(c))})}
function cH(a,b){var c=bs(a);Va(b,c)}
;var dH={},eH=[];function fH(a){a=F(a,"yt-uix-button-subscription-container");return E("yt-dialog",E("unsubscribe-confirmation-overlay-container",a))}
function gH(a,b){Q(eH);eH.length=0;dH[b]||(dH[b]=fH(a));lB.getInstance().show(dH[b]);var c=qB();return new tl(function(d){eH.push(gt(c,"click",function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function hH(a){for(var b=0,c=a.length;b<c;b++){var d;if(d=df("IMG",null,a[b])){var e=V(d,"thumb");e&&(d.src=e,Vx(d,"thumb"))}}}
;function iH(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function jH(){W.call(this,"simple-thumb-wrap")}
var kH,lH;y(jH,W);Ha(jH);var mH="",nH=/__VIDEO_ID__/g;
jH.prototype.register=function(){if(mH=L("WATCH_LATER_BUTTON",void 0))kH=L("WATCH_QUEUE_BUTTON",void 0),lH=L("WATCH_QUEUE_MENU",void 0),z(cf(X(this)),function(a){var b=iH(),c=F(a,"thumb-wrapper");if(!(c&&(b?E("addto-watch-later-button",c):E("addto-watch-later-button-sign-in",c)))){var d=this.B(a,"vid");b=mH.replace(nH,d);c=kH.replace(nH,d);d=lH.replace(nH,d);var e=F(a,"thumb-wrapper");e.appendChild(rf(Tf(b)));e.appendChild(rf(Tf(d)));e.appendChild(rf(Tf(c)));(a=F(a,"video-list-item"))&&K(a,"show-video-time")}},
this)};
jH.prototype.unregister=function(){jH.J.unregister.call(this);lH=kH=mH=""};function oH(a){var b=pH();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=R("LOGGED_IN",function(d){wt(L("LOGGED_IN_PUBSUB_KEY",void 0));Sr("LOGGED_IN",!0);a(d)});
Sr("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function pH(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=eg(a,"mode","subscribe");a=eg("/signin?context=popup","next",a);return a=eg(a,"feature","sub_button")}
p("yt.pubsub.publish",S,void 0);function qH(){W.call(this,"subscription-button")}
y(qH,W);Ha(qH);h=qH.prototype;h.register=function(){Y(this,"click",this.Pc);Oz(this,HF,this.Rd);Oz(this,IF,this.Qd);Oz(this,WF,this.Ah);Oz(this,dG,this.Rd);Oz(this,eG,this.Qd);Oz(this,fG,this.Ig);Oz(this,hG,this.pg);Oz(this,iG,this.og)};
h.unregister=function(){Z(this,"click",this.Pc);qH.J.unregister.call(this)};
h.isSubscribed=function(a){return!!this.B(a,"is-subscribed")};
h.Pc=function(a){var b=this.B(a,"href"),c=this.B(a,"insecure");if(b)a=this.B(a,"target")||"_self",window.open(b,a);else if(!c)if(iH()){b=this.yb(a);c=this.B(a,"clicktracking");var d=rH(this,a),e=this.B(a,"parent-url");if(this.B(a,"is-subscribed")){var f=this.B(a,"subscription-id"),g=new CF(b,f,d,a,c,e);this.B(a,"show-unsub-confirm-dialog")?gH(a,b).then(function(){T(cG,g)}):T(cG,g)}else a=this.B(a,"params"),T(GF,new AF(b,d,c,e,void 0,a))}else sH(this,a)};
h.Rd=function(a){this.tb(a.f,this.je,!0)};
h.Qd=function(a){this.tb(a.f,this.je,!1)};
h.Ah=function(a){this.tb(a.f,this.ke,!0,a.g)};
h.Ig=function(a){this.tb(a.f,this.ke,!1)};
h.pg=function(a){this.tb(a.f,this.Qe)};
h.og=function(a){this.tb(a.f,this.Pe)};
h.ke=function(a,b,c){b?(Tx(a,"is-subscribed","true"),c&&Tx(a,"subscription-id",c)):(Vx(a,"is-subscribed"),Vx(a,"subscription-id"));tH(this,a)};
h.yb=function(a){return this.B(a,"channel-external-id")};
function rH(a,b){if(!a.B(b,"ypc-enabled"))return null;var c=a.B(b,"ypc-item-type"),d=a.B(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.je=function(a,b){var c=F(a,"yt-uix-button-subscription-container");Vq(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function tH(a,b){var c=a.B(b,"style-type"),d=!!a.B(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;Vq(b,"yt-uix-button-subscribe"+c,!d);Vq(b,e,d);a.B(b,"subscriber-count-tooltip")&&!a.B(b,"subscriber-count-show-when-subscribed")&&(c=X(rC.getInstance()),Vq(b,c,!d),b.title=d?"":a.B(b,"subscriber-count-title"));d?M(function(){J(b,"hover-enabled")},1E3):K(b,"hover-enabled")}
h.Qe=function(a){var b=!!this.B(a,"ypc-item-type"),c=!!this.B(a,"ypc-item-id");!this.B(a,"ypc-enabled")&&b&&c&&(J(a,"ypc-enabled"),Tx(a,"ypc-enabled","true"))};
h.Pe=function(a){this.B(a,"ypc-enabled")&&(K(a,"ypc-enabled"),Vx(a,"ypc-enabled"))};
function uH(a,b){return bb(cf(X(a)),function(c){return b==this.yb(c)},a)}
h.zh=function(a,b,c){var d=sb(arguments,2);z(a,function(e){b.apply(this,ob(e,d))},this)};
h.tb=function(a,b,c){var d=uH(this,a);this.zh.apply(this,ob([d],sb(arguments,1)))};
function sH(a,b){var c=t(function(d){d.discoverable_subscriptions&&Sr("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Pc(b)},a);
oH(c)}
;function vH(){W.call(this,"subscription-preferences-button")}
y(vH,W);Ha(vH);vH.prototype.register=function(){Y(this,"click",this.He);Oz(this,WF,this.Ch);Oz(this,kG,this.Jg)};
vH.prototype.unregister=function(){Z(this,"click",this.He);vH.J.unregister.call(this)};
var wH={"receive-all-updates":"yt-uix-subscription-notifications-all","receive-highlight-updates":"yt-uix-subscription-notifications-highlights","receive-no-updates":"yt-uix-subscription-notifications-none"};h=vH.prototype;h.He=function(a){var b=this.yb(a);T(FF,new zF(a,b))};
h.oe=function(a,b){Uq(a,["yt-uix-subscription-notifications-all","yt-uix-subscription-notifications-highlights","yt-uix-subscription-notifications-none"]);J(a,b)};
h.Jg=function(a){this.Ge(a.i,this.oe,wH[a.f])};
h.Ch=function(a){this.Ge(a.f,this.oe,"yt-uix-subscription-notifications-highlights")};
h.yb=function(a){return this.B(a,"channel-external-id")};
h.Ge=function(a,b,c){var d=xH(this,a);this.Bh.apply(this,ob([d],sb(arguments,1)))};
function xH(a,b){return bb(cf(X(a)),function(c){return b==this.yb(c)},a)}
h.Bh=function(a,b,c){var d=sb(arguments,2);z(a,function(e){b.apply(this,ob(e,d))},this)};var yH=0,zH=[],AH=[],BH=0,CH={},DH={},FH=new Mq(EH,1E3);function GH(){BH++;var a=gf(window),b=new Bg(0,0,a.width,a.height);Ex("vph",a.height);Ex("vpw",a.width);Cx("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];FH.start();for(var e=0;e<c;e++){var f=a[e];HH(f,b)&&(f=IH(f),f.then(JH),d.push(f),zH.push(f))}Cx("vpcc");b=Bl(d).then(KH);Cl(b,null,LH,void 0);b.then(MH);zH.push(b);return b}
function MH(){FH.stop()}
function LH(){Cx("vpr")}
function HH(a,b){for(var c=a,d=[];c!=document.body;){var e=Qs(c);if(e in CH)return!0;if(e in DH)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return DH[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return DH[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)CH[d[c]]=!0;return!0}
function KH(a){var b=gf(window);b=new Bg(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;HH(a[d].Bf,b)&&c<f&&(c=f)}return c}
function IH(a){var b=BH;return new tl(function(c,d){var e={Bf:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){BH!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},AH.push(a))})}
function JH(a){FH.start();a=a.time;yH<a&&(yH=a,Cx("lim",a))}
function EH(){Cx("vptl",yH);Cx("vpl",yH)}
function NH(){zH.forEach(function(a){a.cancel()});
yH=zH.length=0;CH={};DH={};AH.forEach(function(a){a.slt=void 0});
AH.length=0}
;function OH(){Cx("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){Cx("cpt");S("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(Cx("cpt"),S("on_cpt_tick",(new Date).getTime())):setTimeout(function(){Cx("cpt");
S("on_cpt_tick",(new Date).getTime())},0);
PH();L("CSI_VIEWPORT")&&(QH=GH(),QH.then(function(a){Cx("vpl",a);QH=null},function(){}))}
function PH(){RH("init");var a=L("PAGE_NAME",void 0);a&&RH("init-"+a)}
var QH=null;function RH(a){r("yt.scheduler.instance")?SH.push(du(Ua(xt,a),0)):S(a)}
var SH=[];var TH;function UH(){if(!TH){var a=D("watch-queue");if(!a)return[];TH=E("watch-queue-items-list",a)}if(!TH)return[];var b=[];a=Bf(TH);z(a,function(c){(c=V(c,"video-id"))&&b.push(c)});
return b}
;function VH(a){this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Xf(a)[4]||null)||"";b&&(this.port=":"+b);this.domain=Zf(a)||"";a=Pb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Nb(a,"10.0")&&(this.g=!1))}
function WH(a,b){var c=a.f;a.g&&(c="https://"+a.domain+a.port+a.f);return fg(c+b,{})}
function XH(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:Ua(a.j,d,!0),onError:Ua(a.i,e),Ya:Ua(a.l,e)};c&&(a.P=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Bs(b,a)}
VH.prototype.j=function(a,b,c,d){b?a(d):a({text:c.responseText})};
VH.prototype.i=function(a,b){a(Error("Request error: "+b.status))};
VH.prototype.l=function(a){a(Error("request timed out"))};var YH=x(),ZH=null,$H=Array(50),aI=-1,bI=!1;function cI(){var a=dI;eI();ZH.push(a);fI(ZH)}
function gI(a,b){eI();var c=ZH,d=hI(a,String(b));0==c.length?iI(d):(fI(c),z(c,function(e){e(d)}))}
function jI(a){gI("CP",a)}
function eI(){ZH||(ZH=r("yt.mdx.remote.debug.handlers_")||[],p("yt.mdx.remote.debug.handlers_",ZH,void 0))}
function iI(a){var b=(aI+1)%50;aI=b;$H[b]=a;bI||(bI=49==b)}
function fI(a){var b=$H;if(b[0]){var c=aI,d=bI?c:-1;do{d=(d+1)%50;var e=b[d];z(a,function(f){f(e)})}while(d!=c);
$H=Array(50);aI=-1;bI=!1}}
function hI(a,b){var c=(x()-YH)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function kI(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function lI(a,b){return!!b&&(a.id==b||a.uuid==b)}
function mI(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function nI(a){return new kI(a)}
function oI(a){return Ja(a)?cb(a,nI):[]}
function pI(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function qI(a){return Ja(a)?"["+cb(a,pI).join(",")+"]":"null"}
;function rI(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function sI(a,b){return gb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function tI(a,b){return gb(a,function(c){return lI(c,b)})}
;function uI(a){a=void 0===a?!1:a;Oi.call(this);this.w=new nr(a);Pi(this,Ua(Qi,this.w))}
y(uI,Oi);uI.prototype.subscribe=function(a,b,c){return this.O()?0:this.w.subscribe(a,b,c)};
uI.prototype.Cd=function(a,b){this.O()||pr(this.w,a,b,void 0)};
uI.prototype.sa=function(a){return this.O()?!1:this.w.sa(a)};
uI.prototype.G=function(a,b){this.O()||this.w.ja.apply(this.w,arguments)};function vI(a){uI.call(this);this.C=a;this.f=[]}
y(vI,uI);vI.prototype.na=function(){return this.f};
vI.prototype.mc=function(a){return!!sI(this.f,a)};
vI.prototype.get=function(a){return a?tI(this.f,a):null};
function wI(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.f.push(b);return!0}
function xI(a,b){var c=a.f.length!=b.length;a.f=bb(a.f,function(f){return!!sI(b,f)});
for(var d=0,e=b.length;d<e;d++)c=wI(a,b[d])||c;return c}
function yI(a,b){var c=a.f.length;a.f=bb(a.f,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.f.length<c}
vI.prototype.info=function(a){gI(this.C,a)};function zI(a,b,c,d){uI.call(this);this.C=a;this.A=b;this.j=c;this.l=d;this.i=0;this.f=null;this.g=NaN}
ma(zI,uI);h=zI.prototype;h.start=function(){!this.f&&isNaN(this.g)&&this.Zd()};
h.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(O(this.g),this.g=NaN)};
h.K=function(){this.stop();uI.prototype.K.call(this)};
h.Zd=function(){this.g=NaN;this.f=Bs(WH(this.C,"/pairing/get_screen"),{method:"POST",P:{pairing_code:this.A},timeout:5E3,onSuccess:t(this.lh,this),onError:t(this.kh,this),Ya:t(this.mh,this)})};
h.lh=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.j;c.name=this.l;this.G("pairingComplete",new kI(c))};
h.kh=function(a){this.f=null;a.status&&404==a.status?this.i>=AI.length?this.G("pairingFailed",Error("DIAL polling timed out")):(a=AI[this.i],this.g=M(t(this.Zd,this),a),this.i++):this.G("pairingFailed",Error("Server error "+a.status))};
h.mh=function(){this.f=null;this.G("pairingFailed",Error("Server not responding"))};
var AI=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];function BI(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.i=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new qp;this.f=this.g="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",CI(this,a.capabilities||""),DI(this,a.experiments||""),this.g=
a.remoteControllerUrl||"",this.f=a.localChannelEncryptionKey||"")}
BI.prototype.copy=function(){var a=new BI({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.i=this.i;a.g=this.g;a.f=this.f;return a};
BI.prototype.equals=function(a){return a?this.id==a.id:!1};
function CI(a,b){a.capabilities.clear();bb(b.split(","),Ua(Vb,pt)).forEach(function(c){a.capabilities.add(c)})}
function DI(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;var EI;function FI(){var a=GI(),b=HI();if(II()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+(e-d>>>1);var k=vb(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:-d-1;0>d&&rb(c,-(d+1),0,b)}a=JI(a);if(0==a.length)try{ru("remote_sid")}catch(l){}else try{pu("remote_sid",a.join(","),-1,"/")}catch(l){}}
function GI(){var a=wz("yt-remote-connected-devices")||[];a.sort(vb);return a}
function JI(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return cb(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function KI(a){tz("yt-remote-connected-devices",a,86400)}
function HI(){if(LI)return LI;var a=wz("yt-remote-device-id");a||(a=rI(),tz("yt-remote-device-id",a,31536E3));for(var b=GI(),c=1,d=a;jb(b,d);)c++,d=a+"#"+c;return LI=d}
function MI(){return wz("yt-remote-session-browser-channel")}
function II(){return wz("yt-remote-session-screen-id")}
function NI(a){5<a.length&&(a=a.slice(a.length-5));var b=cb(OI(),function(d){return d.loungeToken}),c=cb(a,function(d){return d.loungeToken});
fb(c,function(d){return!jb(b,d)})&&PI();
tz("yt-remote-local-screens",a,31536E3)}
function OI(){return wz("yt-remote-local-screens")||[]}
function PI(){tz("yt-remote-lounge-token-expiration",!0,86400)}
function QI(a,b){tz("yt-remote-session-browser-channel",a);tz("yt-remote-session-screen-id",b);var c=GI(),d=HI();jb(c,d)||c.push(d);KI(c);FI()}
function RI(a){a||(xz("yt-remote-session-screen-id"),xz("yt-remote-session-video-id"));FI();a=GI();lb(a,HI());KI(a)}
function SI(){if(!EI){var a=Mr();a&&(EI=new sr(a))}return EI?!!EI.get("yt-remote-use-staging-server"):!1}
var LI="";function TI(a){vI.call(this,"LocalScreenService");this.i=a;this.g=NaN;UI(this);this.info("Initializing with "+qI(this.f))}
y(TI,vI);h=TI.prototype;h.start=function(){UI(this)&&this.G("screenChange");!wz("yt-remote-lounge-token-expiration")&&VI(this);O(this.g);this.g=M(t(this.start,this),1E4)};
h.add=function(a,b){UI(this);wI(this,a);WI(this,!1);this.G("screenChange");b(a);a.token||VI(this)};
h.remove=function(a,b){var c=UI(this);yI(this,a)&&(WI(this,!1),c=!0);b(a);c&&this.G("screenChange")};
h.ic=function(a,b,c,d){var e=UI(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,WI(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.G("screenChange")};
h.K=function(){O(this.g);TI.J.K.call(this)};
function VI(a){if(a.f.length){var b=cb(a.f,function(d){return d.id}),c=WH(a.i,"/pairing/get_lounge_token_batch");
XH(a.i,c,{screen_ids:b.join(",")},t(a.mf,a),t(a.lf,a))}}
h.mf=function(a){UI(this);var b=this.f.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}WI(this,!b);b&&gI(this.C,"Missed "+b+" lounge tokens.")};
h.lf=function(a){gI(this.C,"Requesting lounge tokens failed: "+a)};
function UI(a){var b=oI(OI());b=bb(b,function(c){return!c.uuid});
return xI(a,b)}
function WI(a,b){NI(cb(a.f,mI));b&&PI()}
;function XI(a,b){uI.call(this);this.A=b;var c=wz("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.A(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=jb(c,k)}this.f=d;this.l=a;this.i=this.j=NaN;this.g=null;YI("Initialized with "+fp(this.f))}
ma(XI,uI);h=XI.prototype;h.start=function(){var a=parseInt(wz("yt-remote-fast-check-period")||"0",10);(this.j=x()-144E5<a?0:a)?ZI(this):(this.j=x()+3E5,tz("yt-remote-fast-check-period",this.j),this.Ic())};
h.isEmpty=function(){return $b(this.f)};
h.update=function(){YI("Updating availability on schedule.");var a=this.A(),b=Tb(this.f,function(c,d){return c&&!!tI(a,d)},this);
$I(this,b)};
function aJ(a,b,c){var d=WH(a.l,"/pairing/get_screen_availability");XH(a.l,d,{lounge_token:b.token},t(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),t(function(){c(!1)},a))}
h.K=function(){O(this.i);this.i=NaN;this.g&&(this.g.abort(),this.g=null);uI.prototype.K.call(this)};
function $I(a,b){a:if(Ub(b)!=Ub(a.f))var c=!1;else{c=Yb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(YI("Updated online screens: "+fp(a.f)),a.f=b,a.G("screenChange"));bJ(a)}
function ZI(a){isNaN(a.i)||O(a.i);a.i=M(t(a.Ic,a),0<a.j&&a.j<x()?2E4:1E4)}
h.Ic=function(){O(this.i);this.i=NaN;this.g&&this.g.abort();var a=cJ(this);if(Ub(a)){var b=WH(this.l,"/pairing/get_screen_availability");this.g=XH(this.l,b,{lounge_token:Yb(a).join(",")},t(this.zg,this,a),t(this.yg,this))}else $I(this,{}),ZI(this)};
h.zg=function(a,b){this.g=null;var c=Yb(cJ(this));if(tb(c,Yb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;$I(this,d);ZI(this)}else this.T("Changing Screen set during request."),this.Ic()};
h.yg=function(a){this.T("Screen availability failed: "+a);this.g=null;ZI(this)};
function YI(a){gI("OnlineScreenService",a)}
h.T=function(a){gI("OnlineScreenService",a)};
function cJ(a){var b={};z(a.A(),function(c){c.token?b[c.token]=c.id:this.T("Requesting availability of screen w/o lounge token.")});
return b}
function bJ(a){a=Yb(Tb(a.f,function(b){return b}));
a.sort(vb);a.length?tz("yt-remote-online-screen-ids",a.join(","),60):xz("yt-remote-online-screen-ids")}
;function dJ(a){vI.call(this,"ScreenService");this.A=a;this.g=this.i=null;this.j=[];this.l={};eJ(this)}
y(dJ,vI);h=dJ.prototype;h.start=function(){this.i.start();this.g.start();this.f.length&&(this.G("screenChange"),this.g.isEmpty()||this.G("onlineScreenChange"))};
h.add=function(a,b,c){this.i.add(a,b,c)};
h.remove=function(a,b,c){this.i.remove(a,b,c);this.g.update()};
h.ic=function(a,b,c,d){this.i.mc(a)?this.i.ic(a,b,c,d):(a="Updating name of unknown screen: "+a.name,gI(this.C,a),d(Error(a)))};
h.na=function(a){return a?this.f:ob(this.f,bb(this.j,function(b){return!this.mc(b)},this))};
h.re=function(){return bb(this.na(!0),function(a){return!!this.g.f[a.id]},this)};
function fJ(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.l[b]);var g=a.na();if(g=(c?tI(g,c):null)||tI(g,b)){g.uuid=b;var k=gJ(a,g);aJ(a.g,k,function(l){e(l?k:null)})}else c?hJ(a,c,t(function(l){var m=gJ(this,new kI({name:d,
screenId:c,loungeToken:l,dialId:b||""}));aJ(this.g,m,function(q){e(q?m:null)})},a),f):e(null)}
h.se=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new zI(this.A,a,b,c);f.subscribe("pairingComplete",t(function(g){Qi(f);d(gJ(this,g))},this));
f.subscribe("pairingFailed",function(g){Qi(f);e(g)});
f.start();return t(f.stop,f)};
function iJ(a,b){for(var c=0,d=a.f.length;c<d;++c)if(a.f[c].name==b)return a.f[c];return null}
h.oh=function(a,b,c,d){Bs(WH(this.A,"/pairing/get_screen"),{method:"POST",P:{pairing_code:a},timeout:5E3,onSuccess:t(function(e,f){var g=new kI(f.screen||{});if(!g.name||iJ(this,g.name)){a:{var k=g.name;for(var l=2,m=b(k,l);iJ(this,m);){l++;if(20<l)break a;m=b(k,l)}k=m}g.name=k}c(gJ(this,g))},this),
onError:t(function(e){d(Error("pairing request failed: "+e.status))},this),
Ya:t(function(){d(Error("pairing request timed out."))},this)})};
h.K=function(){Qi(this.i);Qi(this.g);dJ.J.K.call(this)};
function hJ(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={P:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var k=g&&g.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Bs(WH(a.A,"/pairing/get_lounge_token_batch"),e)}
function jJ(a){a.f=a.i.na();var b=a.l,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.f.length;b<d;++b){var e=a.f[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+qI(a.f))}
h.wf=function(){jJ(this);this.G("screenChange");this.g.update()};
function eJ(a){kJ(a);a.i=new TI(a.A);a.i.subscribe("screenChange",t(a.wf,a));jJ(a);a.j=oI(wz("yt-remote-automatic-screen-cache")||[]);kJ(a);a.info("Initializing automatic screens: "+qI(a.j));a.g=new XI(a.A,t(a.na,a,!0));a.g.subscribe("screenChange",t(function(){this.G("onlineScreenChange")},a))}
function gJ(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=tI(a.j,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.j.push(b),tz("yt-remote-automatic-screen-cache",cb(a.j,mI)));kJ(a);a.l[b.uuid]=b.id;tz("yt-remote-device-id-map",a.l,31536E3);return b}
function kJ(a){a.l=wz("yt-remote-device-id-map")||{}}
dJ.prototype.dispose=dJ.prototype.dispose;function lJ(a,b,c){uI.call(this);this.V=c;this.L=a;this.f=b;this.i=null}
y(lJ,uI);h=lJ.prototype;h.Wb=function(a){this.i=a;this.G("sessionScreen",this.i)};
h.la=function(a){this.O()||(a&&mJ(this,""+a),this.i=null,this.G("sessionScreen",null))};
h.info=function(a){gI(this.V,a)};
function mJ(a,b){gI(a.V,b)}
h.ue=function(){return null};
h.Kc=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,t(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),t(function(){mJ(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.K=function(){this.Kc("");lJ.J.K.call(this)};function nJ(a,b){lJ.call(this,a,b,"CastSession");this.g=null;this.j=0;this.A=t(this.ph,this);this.l=t(this.Lg,this);this.j=M(t(function(){oJ(this,null)},this),12E4)}
y(nJ,lJ);h=nJ.prototype;h.Jc=function(a){if(this.g){if(this.g==a)return;mJ(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.A);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.l)}this.g=a;this.g.addUpdateListener(this.A);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.l);pJ(this)};
h.ib=function(a){this.info("launchWithParams no-op for Cast: "+fp(a))};
h.stop=function(){this.g?this.g.stop(t(function(){this.la()},this),t(function(){this.la(Error("Failed to stop receiver app."))},this)):this.la(Error("Stopping cast device witout session."))};
h.Kc=Ga;h.K=function(){this.info("disposeInternal");O(this.j);this.j=0;this.g&&(this.g.removeUpdateListener(this.A),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.l));this.g=null;nJ.J.K.call(this)};
function pJ(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+fp(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,Ga,t(function(){mJ(this,"Failed to send message: getMdxSessionStatus.")},a)):mJ(a,"Sending yt message without session: "+fp(b))}
h.Lg=function(a,b){if(!this.O())if(b){var c=aq(b);if(Na(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+fp(c));switch(d){case "mdxSessionStatus":oJ(this,c.screenId);break;default:mJ(this,"Unknown youtube message: "+d)}}else mJ(this,"Unable to parse message.")}else mJ(this,"No data in message.")};
function oJ(a,b){O(a.j);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.i||a.i.id!=b){var c=t(a.Wb,a),d=t(a.la,a);a.pd(b,c,d,5)}}else a.la(Error("Waiting for session status timed out."))}
h.pd=function(a,b,c,d){fJ(this.L,this.f.label,a,this.f.friendlyName,t(function(e){e?b(e):0<=d?(mJ(this,"Screen "+a+" appears to be offline. "+d+" retries left."),M(t(this.pd,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.ue=function(){return this.g};
h.ph=function(a){this.O()||a||(mJ(this,"Cast session died."),this.la())};function qJ(a,b,c){lJ.call(this,a,b,"DialSession");this.j=this.H=null;this.N="";this.Y=c;this.l=null;this.C=Ga;this.A=NaN;this.R=t(this.sh,this);this.g=Ga}
y(qJ,lJ);h=qJ.prototype;h.Jc=function(a){this.j=a;this.j.addUpdateListener(this.R)};
h.ib=function(a){this.l=a;this.C()};
h.stop=function(){this.g();this.g=Ga;O(this.A);this.j?this.j.stop(t(this.la,this,null),t(this.la,this,"Failed to stop DIAL device.")):this.la()};
h.K=function(){this.g();this.g=Ga;O(this.A);this.j&&this.j.removeUpdateListener(this.R);this.j=null;qJ.J.K.call(this)};
function rJ(a){a.g=a.L.se(a.N,a.f.label,a.f.friendlyName,t(function(b){this.g=Ga;this.Wb(b)},a),t(function(b){this.g=Ga;
this.la(b)},a))}
h.sh=function(a){this.O()||a||(mJ(this,"DIAL session died."),this.g(),this.g=Ga,this.la())};
function sJ(a){var b={};b.pairingCode=a.N;b.theme=a.Y;if(a.l){var c=a.l.currentTime||0;b.v=a.l.videoId;b.t=c}SI()&&(b.env_useStageMdx=1);return dg(b)}
h.Dc=function(a){this.N=rI();if(this.l){var b=new chrome.cast.DialLaunchResponse(!0,sJ(this));a(b);rJ(this)}else this.C=t(function(){O(this.A);this.C=Ga;this.A=NaN;var c=new chrome.cast.DialLaunchResponse(!0,sJ(this));a(c);rJ(this)},this),this.A=M(t(function(){this.C()},this),100)};
h.Df=function(a,b,c){fJ(this.L,this.H.receiver.label,a,this.f.friendlyName,t(function(d){d&&d.token?(this.Wb(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Dc(b,c)},this),t(function(d){mJ(this,"Failed to get DIAL screen: "+d);
this.Dc(b,c)},this))};function tJ(a,b){lJ.call(this,a,b,"ManualSession");this.g=M(t(this.ib,this,null),150)}
y(tJ,lJ);tJ.prototype.stop=function(){this.la()};
tJ.prototype.Jc=Ga;tJ.prototype.ib=function(){O(this.g);this.g=NaN;var a=tI(this.L.na(),this.f.label);a?this.Wb(a):this.la(Error("No such screen"))};
tJ.prototype.K=function(){O(this.g);this.g=NaN;tJ.J.K.call(this)};function uJ(a,b,c,d){uI.call(this);this.g=a;this.C=b||"233637DE";this.A=c||"cl";this.H=d||!1;this.f=null;this.l=!1;this.i=[];this.j=t(this.wg,this)}
y(uJ,uI);h=uJ.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.C);this.H||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=t(this.xg,this);c=new chrome.cast.ApiConfig(c,t(this.Ud,this),f,d,e);c.customDialLaunchCallback=t(this.ng,this);chrome.cast.initialize(c,t(function(){this.O()||(chrome.cast.addReceiverActionListener(this.j),
cI(),this.g.subscribe("onlineScreenChange",t(this.te,this)),this.i=vJ(this),chrome.cast.setCustomReceivers(this.i,Ga,t(function(g){this.T("Failed to set initial custom receivers: "+fp(g))},this)),this.G("yt-remote-cast2-availability-change",wJ(this)),b(!0))},this),t(function(g){this.T("Failed to initialize API: "+fp(g));
b(!1)},this))};
h.Zg=function(a,b){xJ("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.i;if(!a||c&&c.id!=a)xJ("Unsetting old screen status: "+this.f.f.friendlyName),yJ(this,null)}if(a&&b){if(!this.f){c=tI(this.g.na(),a);if(!c){xJ("setConnectedScreenStatus: Unknown screen.");return}var d=zJ(this,c);d||(xJ("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.i.push(d),chrome.cast.setCustomReceivers(this.i,
Ga,t(function(e){this.T("Failed to set initial custom receivers: "+fp(e))},this)));
xJ("setConnectedScreenStatus: new active receiver: "+d.friendlyName);yJ(this,new tJ(this.g,d),!0)}this.f.Kc(b)}else xJ("setConnectedScreenStatus: no screen.")};
function zJ(a,b){return b?gb(a.i,function(c){return lI(b,c.label)},a):null}
h.ah=function(a){this.O()?this.T("Setting connection data on disposed cast v2"):this.f?this.f.ib(a):this.T("Setting connection data without a session")};
h.rh=function(){this.O()?this.T("Stopping session on disposed cast v2"):this.f?(this.f.stop(),yJ(this,null)):xJ("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(t(this.Ud,this),t(this.Ag,this))};
h.K=function(){this.g.Cd("onlineScreenChange",t(this.te,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.j);lb(r("yt.mdx.remote.debug.handlers_")||[],dI);Qi(this.f);uJ.J.K.call(this)};
function xJ(a){gI("Controller",a)}
h.T=function(a){gI("Controller",a)};
function dI(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function wJ(a){return a.l||!!a.i.length||!!a.f}
function yJ(a,b,c){b!=a.f&&(Qi(a.f),(a.f=b)?(c?a.G("yt-remote-cast2-receiver-resumed",b.f):a.G("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",t(a.Vd,a,b)),b.i?a.G("yt-remote-cast2-session-change",b.i):c&&a.f.ib(null)):a.G("yt-remote-cast2-session-change",null))}
h.Vd=function(a,b){this.f==a&&(b||yJ(this,null),this.G("yt-remote-cast2-session-change",b))};
h.wg=function(a,b){if(!this.O())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),xJ("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)xJ("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{xJ("onReceiverAction_: Casting to active receiver.");this.f.i&&this.G("yt-remote-cast2-session-change",this.f.i);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:yJ(this,
new tJ(this.g,a));break;case chrome.cast.ReceiverType.DIAL:yJ(this,new qJ(this.g,a,this.A));break;case chrome.cast.ReceiverType.CAST:yJ(this,new nJ(this.g,a));break;default:this.T("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.T("Stopping receiver w/o session: "+a.friendlyName)}else this.T("onReceiverAction_ called without receiver.")};
h.ng=function(a){if(this.O())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.T("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.T("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.i)return xJ("Reselecting dial screen."),
this.G("yt-remote-cast2-session-change",this.f.i),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.T('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);yJ(this,new qJ(this.g,b,this.A))}b=this.f;b.H=a;return b.H.appState==chrome.cast.DialAppState.RUNNING?new Promise(t(b.Df,b,(b.H.extraData||{}).screenId||null)):new Promise(t(b.Dc,b))};
h.Ud=function(a){if(!this.O()){xJ("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)xJ("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),yJ(this,new nJ(this.g,b),!0);else{this.T("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=tI(this.g.na(),c.label);d&&lI(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(xJ("onSessionEstablished_: manual to cast session change "+b.friendlyName),Qi(this.f),this.f=new nJ(this.g,b),this.f.subscribe("sessionScreen",t(this.Vd,this,this.f)),this.f.ib(null));this.f.Jc(a)}}};
h.qh=function(){return this.f?this.f.ue():null};
h.Ag=function(a){this.O()||(this.T("Failed to estabilish a session: "+fp(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&yJ(this,null))};
h.xg=function(a){xJ("Receiver availability updated: "+a);if(!this.O()){var b=wJ(this);this.l=a==chrome.cast.ReceiverAvailability.AVAILABLE;wJ(this)!=b&&this.G("yt-remote-cast2-availability-change",wJ(this))}};
function vJ(a){var b=a.g.re(),c=a.f&&a.f.f;a=cb(b,function(d){c&&lI(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=zJ(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.te=function(){this.O()||(this.i=vJ(this),xJ("Updating custom receivers: "+fp(this.i)),chrome.cast.setCustomReceivers(this.i,Ga,t(function(){this.T("Failed to set custom receivers.")},this)),this.G("yt-remote-cast2-availability-change",wJ(this)))};
uJ.prototype.setLaunchParams=uJ.prototype.ah;uJ.prototype.setConnectedScreenStatus=uJ.prototype.Zg;uJ.prototype.stopSession=uJ.prototype.rh;uJ.prototype.getCastSession=uJ.prototype.qh;uJ.prototype.requestSession=uJ.prototype.requestSession;uJ.prototype.init=uJ.prototype.init;uJ.prototype.dispose=uJ.prototype.dispose;function AJ(a,b,c,d,e,f){BJ()?DJ(a,d,e,f)&&(EJ(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?FJ(b):(window.__onGCastApiAvailable=function(g,k){g?FJ(b):(GJ("Failed to load cast API: "+k),HJ(!1),EJ(!1),xz("yt-remote-cast-available"),xz("yt-remote-cast-receiver"),IJ(),b(!1))},c?Zx("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Ee():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?Be():(De(),ue(te.map(Ce))))):CJ("Cannot initialize because not running Chrome")}
function IJ(){CJ("dispose");var a=JJ();a&&a.dispose();p("yt.mdx.remote.cloudview.instance_",null,void 0);KJ(!1);wt(LJ);LJ.length=0}
function MJ(){CJ("clearCurrentReceiver");xz("yt-remote-cast-receiver")}
function NJ(){return wz("yt-remote-cast-installed")?JJ()?JJ().getCastSession():(GJ("getCastSelector: Cast is not initialized."),null):(GJ("getCastSelector: Cast API is not installed!"),null)}
function OJ(a,b){PJ()?JJ().setConnectedScreenStatus(a,b):GJ("setConnectedScreenStatus called before ready.")}
function BJ(){var a=0<=Pb.search(/ (CrMo|Chrome|CriOS)\//);return me||a}
function DJ(a,b,c,d){var e=!1;JJ()||(a=new uJ(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){tz("yt-remote-cast-available",f);xt("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){CJ("onReceiverSelected: "+f.friendlyName);
tz("yt-remote-cast-receiver",f);xt("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){CJ("onReceiverResumed: "+f.friendlyName);
tz("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){CJ("onSessionChange: "+pI(f));
f||xz("yt-remote-cast-receiver");xt("yt-remote-cast2-session-change",f)}),p("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
CJ("cloudview.createSingleton_: "+e);return e}
function JJ(){return r("yt.mdx.remote.cloudview.instance_")}
function FJ(a){HJ(!0);EJ(!1);JJ().init(!1,function(b){b?(KJ(!0),S("yt-remote-cast2-api-ready")):(GJ("Failed to initialize cast API."),HJ(!1),xz("yt-remote-cast-available"),xz("yt-remote-cast-receiver"),IJ());a(b)})}
function CJ(a){gI("cloudview",a)}
function GJ(a){gI("cloudview",a)}
function HJ(a){CJ("setCastInstalled_ "+a);tz("yt-remote-cast-installed",a)}
function PJ(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function KJ(a){CJ("setApiReady_ "+a);p("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function EJ(a){p("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var LJ=[];function QJ(a,b){this.action=a;this.params=b||{}}
;function RJ(a,b){Oi.call(this);this.f=new Mq(this.Dg,0,this);Pi(this,Ua(Qi,this.f));this.i=5E3;this.g=0;if(Ma(a))b&&(a=t(a,b));else if(a&&Ma(a.handleEvent))a=t(a.handleEvent,a);else throw Error("Invalid listener argument");this.j=a}
y(RJ,Oi);h=RJ.prototype;h.Dg=function(){this.i=Math.min(3E5,2*this.i);this.j();this.g&&this.start()};
h.start=function(){var a=this.i+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=x()+a};
h.stop=function(){this.f.stop();this.g=0};
h.isActive=function(){return this.f.isActive()};
h.reset=function(){this.f.stop();this.i=5E3};function SJ(a,b,c){this.H=a;this.w=b;this.i=new nr;this.g=new RJ(this.Vg,this);this.f=null;this.C=!1;this.l=null;this.A="";this.F=this.j=0;this.D=[];this.L=c||!1}
y(SJ,Gq);h=SJ.prototype;h.subscribe=function(a,b,c){return this.i.subscribe(a,b,c)};
h.Cd=function(a,b){pr(this.i,a,b,void 0)};
h.sa=function(a){return this.i.sa(a)};
h.G=function(a,b){this.i.ja.apply(this.i,arguments)};
h.dispose=function(){this.C||(this.C=!0,Qi(this.i),TJ(this),Qi(this.g),this.g=null)};
h.O=function(){return this.C};
function UJ(a){return{firstTestResults:[""],secondTestResults:!a.f.kc,sessionId:a.f.i,arrayId:a.f.hb}}
h.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.A="";this.g.stop();this.l=a||null;this.j=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new lq(c?c.firstTestResults:null,c?c.secondTestResults:null,this.L),e=this.f;e&&(e.aa=null);d.aa=this;this.f=d;e?this.f.connect(a,b,this.w,e.i,e.hb):c?this.f.connect(a,b,this.w,c.sessionId,c.arrayId):this.f.connect(a,b,this.w)}};
function TJ(a,b){a.F=b||0;a.g.stop();a.f&&(3==a.f.f&&zq(a.f),sq(a.f));a.F=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&gc(c,b);this.g.isActive()||2==(this.f?this.f.f:0)?this.D.push(c):VJ(this)&&yq(this.f,c)};
h.bd=function(){this.g.reset();this.l=null;this.j=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)yq(this.f,a[b])}this.G("handlerOpened")};
h.Zc=function(a){var b=2==a&&401==this.f.Ba;4==a||b||this.g.start();this.G("handlerError",a)};
h.pc=function(a){if(!this.g.isActive())this.G("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].f;d&&this.D.push(d)}};
h.nd=function(){var a={v:2};this.A&&(a.gsessionid=this.A);0!=this.j&&(a.ui=""+this.j);0!=this.F&&(a.ui=""+this.F);this.l&&gc(a,this.l);return a};
h.ad=function(a){"S"==a[0]?this.A=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),sq(this.f)):this.G("handlerMessage",new QJ(a[0],a[1]))};
function VJ(a){return!!a.f&&3==a.f.f}
function WJ(a,b){(a.w.loungeIdToken=b)||a.g.stop()}
h.Vg=function(){this.g.isActive();var a=this.f,b=0;a.W&&b++;a.ea&&b++;0==b&&this.connect(this.l,this.j)};function XJ(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.i=this.j=0;this.f=null;this.hasNext=this.w=!1;this.F=this.g=this.A=this.C=0;this.l=NaN;this.D=!1;this.reset(a)}
function YJ(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.w=!1;a.hasNext=!1;a.j=0;a.i=x();a.C=0;a.A=0;a.g=0;a.F=0;a.l=NaN;a.D=!1}
XJ.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";YJ(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.w=a.hasPrevious,this.hasNext=a.hasNext,this.j=a.playerTime,this.i=a.playerTimeAt,this.C=a.seekableStart,this.A=a.seekableEnd,this.g=a.duration,this.F=a.loadedTime,this.l=a.liveIngestionTime,this.D=
!isNaN(this.l))};
XJ.prototype.isAdPlaying=function(){return 1081==this.playerState};
function ZJ(a,b){a.j=b;a.i=x()}
function $J(a){switch(a.playerState){case 1:case 1081:return(x()-a.i)/1E3+a.j;case -1E3:return 0}return a.j}
XJ.prototype.getDuration=function(){return this.D?this.g+(1==this.playerState?(x()-this.i)/1E3:0):this.g};
function aK(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&YJ(a)}
function bK(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=ec(a.f);b.hasPrevious=a.w;b.hasNext=a.hasNext;b.playerTime=a.j;b.playerTimeAt=a.i;b.seekableStart=a.C;b.seekableEnd=a.A;b.duration=a.g;b.loadedTime=a.F;b.liveIngestionTime=a.l;return b}
XJ.prototype.clone=function(){return new XJ(bK(this))};function cK(a,b){uI.call(this);this.f=0;this.j=a;this.A=[];this.l=new Nr;this.i=this.g=null;this.L=t(this.Xf,this);this.C=t(this.Eb,this);this.H=t(this.Wf,this);this.N=t(this.mg,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Lc,this),dK(this))):c=3;0!=c&&(b?this.Lc(c):M(t(function(){this.Lc(c)},this),0));
var d=NJ();d&&eK(this,d);this.subscribe("yt-remote-cast2-session-change",this.N)}
ma(cK,uI);function fK(a){return new XJ(a.j.getPlayerContextData())}
h=cK.prototype;h.play=function(){1==this.f?(this.g?this.g.play(null,Ga,gK(this,"play")):hK(this,"play"),iK(this,1,$J(fK(this))),this.G("remotePlayerChange")):jK(this,this.play)};
h.pause=function(){1==this.f?(this.g?this.g.pause(null,Ga,gK(this,"pause")):hK(this,"pause"),iK(this,2,$J(fK(this))),this.G("remotePlayerChange")):jK(this,this.pause)};
h.seekTo=function(a){if(1==this.f){if(this.g){var b=fK(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.g.seek(c,Ga,gK(this,"seekTo",{newTime:a}))}else hK(this,"seekTo",{newTime:a});iK(this,3,a);this.G("remotePlayerChange")}else jK(this,Ua(this.seekTo,a))};
h.stop=function(){if(1==this.f){this.g?this.g.stop(null,Ga,gK(this,"stopVideo")):hK(this,"stopVideo");var a=fK(this);a.index=-1;a.videoId="";YJ(a);kK(this,a);this.G("remotePlayerChange")}else jK(this,this.stop)};
h.setVolume=function(a,b){if(1==this.f){var c=fK(this);if(this.i){if(c.volume!=a){var d=Math.round(a)/100;this.i.setReceiverVolumeLevel(d,t(function(){jI("set receiver volume: "+d)},this),t(function(){this.T("failed to set receiver volume.")},this))}c.muted!=b&&this.i.setReceiverMuted(b,t(function(){jI("set receiver muted: "+b)},this),t(function(){this.T("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);hK(this,"setVolume",e)}c.muted=b;c.volume=a;kK(this,c)}else jK(this,Ua(this.setVolume,a,b))};
h.setAudioTrack=function(a,b){if(1==this.f){var c=b.getLanguageInfo().getId();hK(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=fK(this);d.audioTrackId=c;kK(this,d)}else jK(this,Ua(this.setAudioTrack,a,b))};
h.Tc=function(a){1==this.f?hK(this,"addVideo",{videoId:a}):jK(this,Ua(this.Tc,a))};
h.Sc=function(a){1==this.f?hK(this,"addVideos",{listId:a}):jK(this,Ua(this.Sc,a))};
h.Uc=function(a){0==a.length?this.T("Ignore add videos request due to empty list"):1==this.f?hK(this,"addVideos",{videoIds:a.join(",")}):jK(this,Ua(this.Uc,a))};
h.de=function(a){1==this.f?hK(this,"removeVideo",{videoId:a}):jK(this,Ua(this.de,a))};
h.playVideo=function(a,b,c,d,e,f,g){var k=fK(this);c=c||0;var l={videoId:a,currentIndex:c};aK(k,a,c);void 0!==b&&(ZJ(k,b),l.currentTime=b);void 0!==d&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=fp(g));hK(this,"setPlaylist",l);d||kK(this,k)};
h.nextVideo=function(a,b){if(1==this.f){if(a&&b){var c=fK(this);aK(c,a,b);kK(this,c)}hK(this,"next")}else jK(this,Ua(this.nextVideo,a,b))};
h.dispose=function(){if(3!=this.f){var a=this.f;this.f=3;this.G("proxyStateChange",a,this.f)}uI.prototype.dispose.call(this)};
h.K=function(){lK(this);this.j=null;this.l.clear();eK(this,null);uI.prototype.K.call(this)};
function dK(a){z("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.A.push(this.j.subscribe(b,Ua(this.ug,b),this))},a)}
function lK(a){z(a.A,function(b){this.j.unsubscribeByKey(b)},a);
a.A.length=0}
function jK(a,b){var c=a.l;50>c.f.length+c.g.length&&a.l.g.push(b)}
function iK(a,b,c){var d=fK(a);ZJ(d,c);-1E3!=d.playerState&&(d.playerState=b);kK(a,d)}
function hK(a,b,c){a.j.sendMessage(b,c)}
function kK(a,b){lK(a);a.j.setPlayerContextData(bK(b));dK(a)}
h.Lc=function(a){if((a!=this.f||2==a)&&3!=this.f&&0!=a){var b=this.f;this.f=a;this.G("proxyStateChange",b,a);if(1==a)for(;!this.l.isEmpty();)b=a=this.l,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
h.ug=function(a,b){this.G(a,b)};
function eK(a,b){a.i&&(a.i.removeUpdateListener(a.L),a.i.removeMediaListener(a.C),a.Eb(null));a.i=b;a.i&&(jI("Setting cast session: "+a.i.sessionId),a.i.addUpdateListener(a.L),a.i.addMediaListener(a.C),a.i.media.length&&a.Eb(a.i.media[0]))}
h.Xf=function(a){if(!a)this.Eb(null),eK(this,null);else if(this.i.receiver.volume){a=this.i.receiver.volume;var b=fK(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)jI("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,kK(this,b)}};
h.Eb=function(a){jI("Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.H);if(this.g=a)this.g.addUpdateListener(this.H),mK(this),this.G("remotePlayerChange")};
function mK(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=fK(a);b.contentId!=d.videoId&&jI("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;ZJ(d,a.g.getEstimatedTime());kK(a,d)}else jI("No cast media video. Ignoring state update.")}
h.Wf=function(a){a?(mK(this),this.G("remotePlayerChange")):this.Eb(null)};
h.mg=function(){var a=NJ();a&&eK(this,a)};
h.T=function(a){gI("CP",a)};
function gK(a,b,c){return t(function(d){this.T("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.T("Retrying "+b+" using MDx browser channel."),hK(this,b,c))},a)}
;function nK(a,b,c){uI.call(this);this.l=NaN;this.V=!1;this.H=this.C=this.N=this.R=NaN;this.L=[];this.j=this.A=this.i=this.M=this.f=null;this.ma=a;this.L.push(P(window,"beforeunload",t(this.hf,this)));this.g=[];this.M=new XJ;this.Y=b.id;this.f=oK(this,c);this.f.subscribe("handlerOpened",this.dg,this);this.f.subscribe("handlerClosed",this.Zf,this);this.f.subscribe("handlerError",this.ag,this);this.f.subscribe("handlerMessage",this.cg,this);WJ(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.M.videoId;II()&&tz("yt-remote-session-video-id",d)},this)}
ma(nK,uI);h=nK.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime,m=b.locationInfo;void 0!==l&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);m&&(k.locationInfo=m);f&&(k.clickTrackingParams=f);c&&(k.listId=c);void 0!==g&&(k.currentIndex=g);c&&(this.M.listId=c);this.M.videoId=d;this.M.index=g||0;this.M.state=3;ZJ(this.M,l);this.j="UNSUPPORTED";pK("Connecting with setPlaylist and params: "+fp(k));this.f.connect({method:"setPlaylist",params:fp(k)},
a,MI())}else pK("Connecting without params"),this.f.connect({},a,MI());qK(this)};
h.dispose=function(){this.O()||(this.G("beforeDispose"),rK(this,3));uI.prototype.dispose.call(this)};
h.K=function(){sK(this);tK(this);uK(this);O(this.C);this.C=NaN;O(this.H);this.H=NaN;this.i=null;Q(this.L);this.L.length=0;this.f.dispose();uI.prototype.K.call(this);this.j=this.A=this.g=this.M=this.f=null};
function pK(a){gI("conn",a)}
h.hf=function(){this.cb(2)};
function oK(a,b){return new SJ(WH(a.ma,"/bc"),b)}
function rK(a,b){a.G("proxyStateChange",b)}
function qK(a){a.l=M(t(function(){pK("Connecting timeout");this.cb(1)},a),2E4)}
function sK(a){O(a.l);a.l=NaN}
function uK(a){O(a.R);a.R=NaN}
function vK(a){tK(a);a.N=M(t(function(){wK(this,"getNowPlaying")},a),2E4)}
function tK(a){O(a.N);a.N=NaN}
h.dg=function(){pK("Channel opened");this.V&&(this.V=!1,uK(this),this.R=M(t(function(){pK("Timing out waiting for a screen.");this.cb(1)},this),15E3));
QI(UJ(this.f),this.Y)};
h.Zf=function(){pK("Channel closed");isNaN(this.l)?RI(!0):RI();this.dispose()};
h.ag=function(a){RI();isNaN(this.zb())?(pK("Channel error: "+a+" without reconnection"),this.dispose()):(this.V=!0,pK("Channel error: "+a+" with reconnection in "+this.zb()+" ms"),rK(this,2))};
function xK(a,b){b&&(sK(a),uK(a));b==(VJ(a.f)&&isNaN(a.l))?b&&(rK(a,1),wK(a,"getSubtitlesTrack")):b?(a.od()&&a.M.reset(),rK(a,1),wK(a,"getNowPlaying"),yK(a)):a.cb(1)}
function zK(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.M.videoId&&($b(b.params)?a.M.f=null:a.M.f=b.params,a.G("remotePlayerChange"))}
function AK(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.M.listId=b.params.listId||a.M.listId;aK(a.M,c,d);a.G("remoteQueueChange")}
function BK(a,b){b.params=b.params||{};AK(a,b);CK(a,b);a.G("autoplayDismissed")}
function CK(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);ZJ(a.M,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.M.playerState&&(c=-1E3);a.M.playerState=c;c=Number(b.params.loadedTime);a.M.F=isNaN(c)?0:c;c=Number(b.params.duration);a.M.g=isNaN(c)?0:c;c=a.M;var d=Number(b.params.liveIngestionTime);c.l=d;c.D=isNaN(d)?!1:!0;c=a.M;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.A=isNaN(e)?0:e;1==a.M.playerState?
vK(a):tK(a);a.G("remotePlayerChange")}
function DK(a,b){if(-1E3!=a.M.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.M.playerState=c;c=parseInt(b.params.currentTime,10);ZJ(a.M,isNaN(c)?0:c);a.G("remotePlayerChange")}}
function EK(a,b){var c="true"==b.params.muted;a.M.volume=parseInt(b.params.volume,10);a.M.muted=c;a.G("remotePlayerChange")}
function FK(a,b){a.A=b.params.videoId;a.G("nowAutoplaying",parseInt(b.params.timeout,10))}
function GK(a,b){var c="true"==b.params.hasNext;a.M.w="true"==b.params.hasPrevious;a.M.hasNext=c;a.G("previousNextChange")}
h.cg=function(a){a.params?pK("Received: action="+a.action+", params="+fp(a.params)):pK("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=aq(a.params.devices);this.g=cb(a,function(c){return new BI(c)});
a=!!gb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
xK(this,a);break;case "loungeScreenDisconnected":nb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
xK(this,!1);break;case "remoteConnected":var b=new BI(aq(a.params.device));gb(this.g,function(c){return c.equals(b)})||kb(this.g,b);
break;case "remoteDisconnected":b=new BI(aq(a.params.device));nb(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":AK(this,a);break;case "nowPlaying":BK(this,a);break;case "onStateChange":CK(this,a);break;case "onAdStateChange":DK(this,a);break;case "onVolumeChanged":EK(this,a);break;case "onSubtitlesTrackChanged":zK(this,a);break;case "nowAutoplaying":FK(this,a);break;case "autoplayDismissed":this.G("autoplayDismissed");break;case "autoplayUpNext":this.A=a.params.videoId||null;this.G("autoplayUpNext",this.A);break;case "onAutoplayModeChanged":this.j=
a.params.autoplayMode;this.G("autoplayModeChange",this.j);"DISABLED"==this.j&&this.G("autoplayDismissed");break;case "onHasPreviousNextChanged":GK(this,a);break;case "requestAssistedSignIn":this.G("assistedSignInRequested",a.params.authCode);break;default:pK("Unrecognized action: "+a.action)}};
h.Ug=function(){if(this.i){var a=this.i;this.i=null;this.M.videoId!=a&&wK(this,"getNowPlaying")}};
h.bf=function(){var a=3;this.O()||(a=0,isNaN(this.zb())?VJ(this.f)&&isNaN(this.l)&&(a=1):a=2);return a};
h.cb=function(a){pK("Disconnecting with "+a);sK(this);this.G("beforeDisconnect",a);1==a&&RI();TJ(this.f,a);this.dispose()};
h.Ze=function(){var a=this.M;this.i&&(a=this.M.clone(),aK(a,this.i,a.index));return bK(a)};
h.bh=function(a){var b=new XJ(a);b.videoId&&b.videoId!=this.M.videoId&&(this.i=b.videoId,O(this.C),this.C=M(t(this.Ug,this),5E3));var c=[];this.M.listId==b.listId&&this.M.videoId==b.videoId&&this.M.index==b.index||c.push("remoteQueueChange");this.M.playerState==b.playerState&&this.M.volume==b.volume&&this.M.muted==b.muted&&$J(this.M)==$J(b)&&fp(this.M.f)==fp(b.f)||c.push("remotePlayerChange");this.M.reset(a);z(c,function(d){this.G(d)},this)};
h.od=function(){var a=this.f.w.id,b=gb(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
h.zb=function(){var a=this.f;return a.g.isActive()?a.g.g-x():NaN};
h.Ve=function(){return this.j||"UNSUPPORTED"};
h.We=function(){return this.A||""};
h.jh=function(){if(!isNaN(this.zb())){var a=this.f.g,b=a.f;b.stop();b.qd();a.start()}};
function yK(a){O(a.H);a.H=M(t(a.cb,a,1),864E5)}
function wK(a,b,c){c?pK("Sending: action="+b+", params="+fp(c)):pK("Sending: action="+b);a.f.sendMessage(b,c)}
h.Yg=function(a,b){wK(this,a,b);yK(this)};
nK.prototype.subscribe=nK.prototype.subscribe;nK.prototype.unsubscribeByKey=nK.prototype.sa;nK.prototype.getProxyState=nK.prototype.bf;nK.prototype.disconnect=nK.prototype.cb;nK.prototype.getPlayerContextData=nK.prototype.Ze;nK.prototype.setPlayerContextData=nK.prototype.bh;nK.prototype.getOtherConnectedRemoteId=nK.prototype.od;nK.prototype.getReconnectTimeout=nK.prototype.zb;nK.prototype.getAutoplayMode=nK.prototype.Ve;nK.prototype.getAutoplayVideoId=nK.prototype.We;nK.prototype.reconnect=nK.prototype.jh;
nK.prototype.sendMessage=nK.prototype.Yg;function HK(a){vI.call(this,"ScreenServiceProxy");this.da=a;this.g=[];this.g.push(this.da.$_s("screenChange",t(this.nh,this)));this.g.push(this.da.$_s("onlineScreenChange",t(this.qg,this)))}
ma(HK,vI);h=HK.prototype;h.na=function(a){return this.da.$_gs(a)};
h.mc=function(a){return!!this.da.$_c(a)};
h.get=function(a){return this.da.$_g(a)};
h.start=function(){this.da.$_st()};
h.add=function(a,b,c){this.da.$_a(a,b,c)};
h.remove=function(a,b,c){this.da.$_r(a,b,c)};
h.ic=function(a,b,c,d){this.da.$_un(a,b,c,d)};
h.K=function(){for(var a=0,b=this.g.length;a<b;++a)this.da.$_ubk(this.g[a]);this.g.length=0;this.da=null;vI.prototype.K.call(this)};
h.nh=function(){this.G("screenChange")};
h.qg=function(){this.G("onlineScreenChange")};
dJ.prototype.$_st=dJ.prototype.start;dJ.prototype.$_gspc=dJ.prototype.oh;dJ.prototype.$_gsppc=dJ.prototype.se;dJ.prototype.$_c=dJ.prototype.mc;dJ.prototype.$_g=dJ.prototype.get;dJ.prototype.$_a=dJ.prototype.add;dJ.prototype.$_un=dJ.prototype.ic;dJ.prototype.$_r=dJ.prototype.remove;dJ.prototype.$_gs=dJ.prototype.na;dJ.prototype.$_gos=dJ.prototype.re;dJ.prototype.$_s=dJ.prototype.subscribe;dJ.prototype.$_ubk=dJ.prototype.sa;function IK(){var a=L("MDX_CONFIG")||a;yz();FI();JK||(JK=new VH(a?a.loungeApiHost:void 0),SI()&&(JK.f="/api/loungedev"));KK||(KK=r("yt.mdx.remote.deferredProxies_")||[],p("yt.mdx.remote.deferredProxies_",KK,void 0));LK();var b=MK();if(!b){var c=new dJ(JK);p("yt.mdx.remote.screenService_",c,void 0);b=MK();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);AJ(c,function(k){k?NK()&&OJ(NK(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){xt("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!r("yt.mdx.remote.initialized_")&&(p("yt.mdx.remote.initialized_",!0,void 0),OK("Initializing: "+fp(a)),PK.push(R("yt-remote-cast2-availability-change",function(){xt("yt-remote-receiver-availability-change")})),PK.push(R("yt-remote-cast2-receiver-selected",function(){QK();
xt("yt-remote-auto-connect","cast-selector-receiver")})),PK.push(R("yt-remote-cast2-receiver-resumed",function(){xt("yt-remote-receiver-resumed","cast-selector-receiver")})),PK.push(R("yt-remote-cast2-session-change",RK)),PK.push(R("yt-remote-connection-change",function(k){k?OJ(NK(),"YouTube TV"):SK()||(OJ(null,null),MJ())})),d=TK(),a.isAuto&&(d.id+="#dial"),ls("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),OK(" -- with channel params: "+
fp(d)),UK(d),b.start(),NK()||VK())}
function WK(){wt(PK);PK.length=0;Qi(XK);XK=null;KK&&(z(KK,function(a){a(null)}),KK.length=0,KK=null,p("yt.mdx.remote.deferredProxies_",null,void 0));
JK=null}
function YK(){var a=NK();if(!a)return null;var b=MK().na();return tI(b,a)}
function RK(a){OK("remote.onCastSessionChange_: "+pI(a));if(a){var b=YK();b&&b.id==a.id?OJ(b.id,"YouTube TV"):(b&&ZK(),$K(a,1))}else aL()&&ZK()}
function ZK(){PJ()?JJ().stopSession():GJ("stopSession called before API ready.");var a=aL();a&&(a.disconnect(1),bL(null))}
function cL(){var a=aL();return a&&3!=a.getProxyState()?new cK(aL(),void 0):null}
function OK(a){gI("remote",a)}
function MK(){if(!XK){var a=r("yt.mdx.remote.screenService_");XK=a?new HK(a):null}return XK}
function NK(){return r("yt.mdx.remote.currentScreenId_")}
function dL(a){p("yt.mdx.remote.currentScreenId_",a,void 0)}
function QK(){p("yt.mdx.remote.connectData_",null,void 0)}
function aL(){return r("yt.mdx.remote.connection_")}
function bL(a){var b=aL();QK();a||dL("");p("yt.mdx.remote.connection_",a,void 0);KK&&(z(KK,function(c){c(a)}),KK.length=0);
b&&!a?xt("yt-remote-connection-change",!1):!b&&a&&xt("yt-remote-connection-change",!0)}
function SK(){var a=II();if(!a)return null;var b=MK().na();return tI(b,a)}
function $K(a,b){YK()&&YK();dL(a.id);var c=new nK(JK,a,TK());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){xt("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){aL()&&bL(null)});
bL(c)}
function VK(){var a=SK();a?(OK("Resume connection to: "+pI(a)),$K(a,0)):(RI(),MJ(),OK("Skipping connecting because no session screen found."))}
var JK=null,KK=null,XK=null;function LK(){var a=TK();if($b(a)){a=HI();var b=wz("yt-remote-session-name")||"",c=wz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};p("yt.mdx.remote.channelParams_",a,void 0)}}
function TK(){return r("yt.mdx.remote.channelParams_")||{}}
function UK(a){a?(tz("yt-remote-session-app",a.app),tz("yt-remote-session-name",a.name)):(xz("yt-remote-session-app"),xz("yt-remote-session-name"));p("yt.mdx.remote.channelParams_",a,void 0)}
var PK=[];var eL;function fL(a,b){this.type=a;this.videoIds=b||[]}
function gL(a,b,c){var d=[];0==d.length?c&&c():"string"===typeof a?hL(a,b,c):hL(d,b,c)}
function hL(a,b,c){var d="";"string"===typeof a&&(d=a,a=[d]);var e=new fL(0,a);eL&&iL(function(){d?eL.Tc(d):eL.Uc(a)},e,b,c)}
function jL(a,b,c){"string"===typeof a&&(a=[a]);var d=new fL(1,a);eL&&iL(function(){z(a,function(e){eL.de(e)})},d,b,c)}
function kL(a,b,c){var d=new fL(2);eL?iL(function(){eL.Sc(a)},d,b,c):c&&M(function(){c("Not implemented")},0)}
function lL(a,b){var c=new fL(2);eL?iL(function(){},c,a,b):b&&M(function(){b("Not implemented")},0)}
function mL(a){eL=a;eL.subscribe("remoteQueueChange",function(){S("queue-change",new fL(2))})}
function nL(){var a=cL();Qi(eL);eL=null;a?mL(a):S("queue-change",new fL(2))}
function iL(a,b,c,d){eL&&1==eL.f?(a.call(n),c&&M(function(){c()},0),void 0!==b&&S("queue-change",b)):d&&M(function(){d()},0)}
var oL=[];function pL(a,b){var c=L("RESUME_COOKIE_NAME",void 0);if(c){var d=qu(c,"").split(",");d=bb(d,function(e){return 0!=e.indexOf(a)&&!!e.length});
4<=d.length&&d.shift();d.push(a+":"+b);pu(c,d.join(","),1814400,"/")}}
function qL(a){var b=L("RESUME_COOKIE_NAME",void 0);if(b){var c=qu(b,"").split(",");c=bb(c,function(d){return 0!=d.indexOf(a)});
0==c.length?ru(b):pu(b,c.join(","),1814400,"/")}}
;function rL(){IK();oL.push(R("yt-remote-connection-change",nL));var a=cL();a&&mL(a);Kz("addto-watch-queue-button","click",sL);Kz("addto-tv-queue-button","click",sL);Kz("addto-watch-queue-button-success","click",tL);Kz("addto-watch-queue-menu-choice","click",uL);vL.push(R("watch-queue-update",wL));wL()}
function xL(a){return"tv-queue"==V(a,"style")?"addto-tv-queue-button":"addto-watch-queue-button"}
function sL(a){var b=xL(a);Wq(a,b,"addto-watch-queue-button-loading");var c=V(a,"video-ids"),d=V(a,"list-id"),e=tC(rC.getInstance(),a);d?kL(d,function(){yL(a)},function(f){zL(a,b,e,f)}):gL(c,function(){yL(a)},function(f){zL(a,b,e,f)})}
function uL(a){var b=V(a,"action");b=AL[b];var c=V(a,"video-ids");c&&("string"===typeof c&&(c=[c]),0==c.length&&b(a))}
function tL(a){Wq(a,"addto-watch-queue-button-success","addto-watch-queue-button-loading");var b=V(a,"video-ids"),c=V(a,"list-id"),d=tC(rC.getInstance(),a);c?lL(function(){BL(a)},function(e){zL(a,"addto-watch-queue-button-success",d,e)}):jL(b,function(){BL(a)},function(e){zL(a,"addto-watch-queue-button-success",d,e)})}
function yL(a){Wq(a,"addto-watch-queue-button-loading","addto-watch-queue-button-success");var b=rz("ADDTO_WATCH_QUEUE_ADDED");wC(rC.getInstance(),a,b);V(a,"list-id")?S("watch-queue-addto-playlist-added"):S("watch-queue-addto-video-added")}
function BL(a){var b=xL(a);Wq(a,"addto-watch-queue-button-loading",b);b="addto-watch-queue-button"==b?rz("ADDTO_WATCH_QUEUE"):rz("ADDTO_TV_QUEUE");wC(rC.getInstance(),a,b);V(a,"list-id")?S("watch-queue-addto-playlist-removed"):S("watch-queue-addto-video-removed")}
function zL(a,b,c,d){Wq(a,"addto-watch-queue-button-loading","addto-watch-queue-button-error");d=d||rz("ADDTO_WATCH_QUEUE_ERROR");wC(rC.getInstance(),a,d);M(function(){Wq(a,"addto-watch-queue-button-error",b);wC(rC.getInstance(),a,c)},5E3)}
function wL(){var a=UH();if(!tb(CL,a)){CL=a;var b={};z(CL,function(c){b[c]=!0});
z(cf("addto-queue-button"),function(c){var d=V(c,"video-ids");if(d&&"string"===typeof d){var e=xL(c);b[d]?(Wq(c,e,"addto-watch-queue-button-success"),d=rz("ADDTO_WATCH_QUEUE_ADDED")):(Wq(c,"addto-watch-queue-button-success",e),d="addto-watch-queue-button"==e?rz("ADDTO_WATCH_QUEUE"):rz("ADDTO_TV_QUEUE"));wC(rC.getInstance(),c,d)}})}}
var AL={"play-next":function(a){var b=V(a,"list-id");a=V(a,"video-ids");b?S("watch-queue-addto-playlist-play-next",b,a):S("watch-queue-addto-video-play-next",a)},
"play-now":function(a){var b=V(a,"list-id");a=V(a,"video-ids");b?S("watch-queue-addto-playlist-play-now",b,a):S("watch-queue-addto-video-play-now",a)}},vL=[],CL=[];var DL=[];var EL=[],FL=!1;function GL(a){var b=L("YPC_LOADER_CSS",void 0),c=L("YPC_LOADER_JS",void 0);FL&&(c="www/ypc_core");EL.length||(EL.push(new tl(function(d){Hy(b,d)})),EL.push(new tl(function(d){Zx(c,d)})));
Bl(EL).then(function(){a&&a()})}
;function HL(a,b,c,d,e,f,g,k,l,m,q,u,v){a={config:{couponCode:e,fromPurchaseIds:f,flowType:d},itemData:{itemId:c,itemType:b},offerData:{offerId:a}};if(g||k)b={},g&&(b.jwt=g),k&&(b.encryptedPurchaseParams=k),a.walletPrefetchdata=b;l&&(a.innertubeRequestParams=l);m&&(a.transactionAction=m);q&&(a.transactionParams=q);u&&(a.transactionLoggingParams=u);v&&(a.gtmData=v);return a}
function IL(a,b){if(!a)return null;var c=V(a,"ypc-item-type"),d=V(a,"ypc-item-id"),e=V(a,"ypc-offer-id"),f=V(a,"coupon-code"),g=V(a,"ypc-from-purchase-ids"),k=V(a,"ypc-gtm-data"),l=V(a,"ypc-offer-jwt"),m=V(a,"ypc-offer-encrypted-purchase-params"),q=V(a,"ypc-irp"),u=V(a,"ypc-transaction-action"),v=V(a,"ypc-transaction-params"),w=V(a,"ypc-serialized-transaction-flow-logging-params");return HL(e,c,d,b,f,g,l,m,q,u,v,w,k)}
function JL(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,g={};g.ypc_it=a.itemData.itemType;g.ypc_ii=b;g.ypc_ft=c;e&&(g.ypc_irp=e);d&&(g.ypc_oi=d);f&&(g.ypc_ta=f);return g}
;function KL(a,b,c,d,e){if(iH())GL(function(){r("yt.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=LL(f);Cy(f)}}
function ML(a){if(iH())GL(function(){r("yt.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=LL({});Cy(b)}}
function NL(a,b){if(iH())GL(function(){r("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=LL({ypc_ft:a,ypc_irp:b});Cy(c)}}
function OL(a,b,c){iH()?GL(function(){r("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=LL(b),Cy(b))}
function PL(a,b){if(iH())GL(function(){r("yt.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");}
function LL(a){a=ds(window.location.href,a);var b=L("YPC_SIGNIN_URL",void 0),c=cs(b)["continue"];c=ds(c,{next:a});return ds(b,{"continue":c})}
;var QL=[],RL=[];function SL(a){if(a=a.currentTarget)TL(a),(a=V(a,"ytr-prepurchase-html"))&&ML(vd(a))}
function UL(a){var b=a.currentTarget;if(b)if(a=V(b,"ypc-transaction-action"),b=IL(b,"D")){if(b.gtmData){var c=JSON.parse(b.gtmData);c&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(c))}(a="start_payment"==a)&&VL("inline-offer-button-click",b.itemData);OL(b,JL(b),a);setTimeout(Tt,0)}else Yr(Error("ypc-offer-button does not contain purchaseFlowData."))}
function WL(a){(a=a.currentTarget)&&XL(a)}
function YL(a){GL(a.callback)}
function ZL(a){VL("container-button-click-attempt");var b=E("ypc-checkout-button",a.container);(a=E("ytr-purchase-button",a.container))?(b=I(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&XL(b)}
function $L(a){var b=a.f;a=b.itemId;var c=b.itemType;b=b.flowType;VL("paid-subscribe-button-click",{itemType:c,itemId:a});KL(c,a,b)}
function XL(a){var b=V(a,"ypc-item-type"),c=V(a,"ypc-item-id"),d=V(a,"ypc-flow-type");a=V(a,"ypc-irp")||void 0;iH()?VL("purchase-button-click",{itemId:c,itemType:b}):VL("signin-button-click");KL(b,c,d,a)}
function aM(a){var b=a.currentTarget;a=V(b,"ypc-item-type");b=V(b,"ypc-item-id");a&&b&&(VL("unsubscribe-button-click",{itemId:b,itemType:a}),PL(a,b))}
function bM(a){var b=a.f;a=b.itemType;b=b.itemId;VL("paid-unsubscribe-button-click",{itemType:a,itemId:b});PL(a,b)}
function VL(a,b){var c={};gc(c,{label:a,pageName:L("PAGE_NAME")});b&&gc(c,b);dy("ypc-checkout",dg(c))}
function TL(a){var b;I(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":I(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=L(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))}
function cM(a){a=a.currentTarget;var b=V(a,"tab-id");if(b){for(var c=cf("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=cf("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");D(b).classList.add("active-tab");a.classList.add("active-tab")}}
function dM(a){if(a=a.currentTarget){TL(a);var b=IL(a,"U");b?(GL(function(){r("yt.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(Tt,0)):Yr(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}}
function eM(a){a=a.currentTarget;var b=V(a,"feedback-token");b&&(a={itct:V(a,"innertube-clicktracking"),feedback_tokens:[b],wait_for_response:1},Bs("/feed_change_ajax?action_give_feedback=1",{method:"POST",onSuccess:function(c,d){if(d&&d.actions){var e=d.actions.url_endpoint.url,f=window,g=new oc(pc,"_self");e=e instanceof Ac?e:Ic(e);(f||n).open(Dc(e),g?uc(g):"",void 0,void 0)}},
P:a}))}
;var fM=B&&8<=document.documentMode||Pd&&de("1.9.2")||Qd&&de("532.1"),gM=B&&!fM;function hM(){var a=iM,b=D("legacy-history-iframe");this.j=this.i=this.f=null;this.g=a;this.w=gM?b:null;this.F=window;this.l=this.F.location;this.A=this.l.href.split("#")[0];this.D=t(this.H,this)}
hM.prototype.C=function(a,b){this.i&&(Q(this.i),delete this.i);this.j&&(rs(this.j),delete this.j);if(a){this.f=jM(this);if(gM){var c=this.w.contentWindow.document.body;c&&c.innerHTML||kM(this,this.f)}b||this.g(this.f);fM?this.i=P(this.F,"hashchange",this.D):this.j=qs(this.D,200)}};
hM.prototype.H=function(){if(gM){var a=(a=this.w.contentWindow.document.body)?td(Pf(a).substring(1)):"";a!=this.f?(this.f=a,lM(this,a),this.g(a)):(a=jM(this),a!=this.f&&(this.f=a,kM(this,a),this.g(a)))}else a=jM(this),a!=this.f&&(this.f=a,this.g(a))};
function jM(a){a=a.l.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}
function lM(a,b){var c=a.A+"#"+b,d=a.l.href;d!=c&&d+"#"!=c&&qd(a.l,c)}
function kM(a,b){var c=a.w.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+sd(b);d!=e&&(d=cd(bd("title",{},window.document.title||""),bd("body")),c.open("text/html"),c.write(Wc(d)),Hf(c.body,e),c.close())}
hM.prototype.add=function(a,b,c){this.f=""+a;gM&&kM(this,a);lM(this,a);c||this.g(this.f)};function mM(){var a=iM;this.l=this.w=this.f=null;this.i=a;this.j=window;this.g=this.j.location;this.D=t(this.F,this)}
mM.prototype.A=function(a,b){this.l&&(Q(this.l),delete this.l);this.w&&(rs(this.w),delete this.w);a&&nM&&(this.f=this.g.href,b||this.i(this.f),this.l=P(this.j,"popstate",this.D))};
mM.prototype.F=function(a){var b=this.g.href;if((a=a.state)||b!=this.f)this.f=b,this.i(b,a)};
mM.prototype.add=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.pushState(b,"",a),this.f=a,c||this.i(a,b)};
mM.prototype.replace=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.replaceState(b,"",a),this.f=a,c||this.i(a,b)};
var nM=!!window.history.pushState&&(!Qd||Qd&&de("534.11"));function oM(){var a=pM("state");a.setEnabled.call(a,!0,!0)}
function qM(a){var b=null,c=pM();b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)}
function pM(a){var b=r("ytglobal.HistoryHistoryInstance");b||("state"==(void 0===a?"hash":a)?(b=new mM,mM.prototype.setEnabled=mM.prototype.A,mM.prototype.add=mM.prototype.add,mM.prototype.replace=mM.prototype.replace):(b=new hM,hM.prototype.setEnabled=hM.prototype.C,hM.prototype.add=hM.prototype.add,hM.prototype.replace=hM.prototype.add),p("ytglobal.HistoryHistoryInstance",b,void 0));return b}
function iM(a,b){S("navigate",a,b)}
;var rM={Xh:"ypc_cc",ji:"ypc_ft",vi:"ypc_irp",yi:"ypc_ii",zi:"ypc_it"};function sM(){var a=cs(window.location.href);if(nM){Sb(rM,function(c){c in a&&delete a[c]});
var b=fg(window.location.href.split("?",2)[0],a);oM();qM(b)}}
;function tM(a){FL=!!a;E("ypc-delayedloader-target")&&GL();a=cs(window.location.href);var b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,g=a.ypc_cc,k=a.ypc_ta;"channel"==L("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=L("CHANNEL_ID",void 0));if(f||c&&b)sM(),"start_payment"==k?(a=HL(e,b,c,d,g,null,"","",f,k),OL(a,JL(a),!0)):c&&b?KL(b,c,d,f,g):NL(d,f);QL.push(gt(document.body,"click",WL,"ypc-checkout-button"),gt(document.body,"click",UL,"ypc-offer-button"),gt(document.body,"click",dM,"ypc-complete-transaction-button"),
gt(document.body,"click",SL,"ytr-pre-purchase-button"),gt(document.documentElement,"click",aM,"ypc-unsubscribe-link"),gt(document.documentElement,"click",aM,"ypc-unsubscribe-button"),gt(document.documentElement,"click",cM,"offer-module-tab"),gt(document.documentElement,"click",eM,"yt-unlimited-more-offer-button"));RL.push(Fw(HG,YL),Fw(GG,ZL),Fw(MG,$L),Fw(KG,bM))}
;window.onload=function(){OH()};
window.onunload=function(){L("TIMING_REPORT_ON_UNLOAD")&&Dx(!0);if(!wx(void 0)&&!Uw(void 0)){var a=L("CSI_SERVICE_NAME","youtube");L("TIMING_ACTION",void 0)&&a&&(Cx("aa",void 0,void 0),zx("ap",1,void 0),zx("yt_fss","u",void 0),Fx(void 0))}if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"!=nw){nw="FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";a=-1;mw&&(a=Math.round(Ct()-mw));var b=String;var c=r("_fact",window);c=null==c||-1==c?-1:Math.max(x()-c,0);a={firstActivityMs:b(c),clientDocumentNonce:kw,index:String(lw),
lastEventDeltaMs:String(a),trigger:"FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"};lu("foregroundHeartbeat",a,xu);p("_fact",-1,window);lw++;mw=Ct()}a=(a=sw(0))?new ow({veType:a,youtubeData:void 0}):null;(b=uw())&&a&&PB(b,[a]);mx();Tt();a=SH;b=0;for(c=a.length;b<c;b++){var d=a[b];if(!isNaN(d)){var e=r("yt.scheduler.instance.cancelJob");e?e(d):O(d)}}SH.length=0;NH();QH&&(QH.cancel(),QH=null);(a=L("PAGE_NAME",void 0))&&xt("dispose-"+a);xt("dispose");xt("pageunload")};
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Ur("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var k=0,l=g.length;k<l;k++)if(0<g[k].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),a=Error(g),a.name="UnhandledWindowError",e=a,e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Yr(e):Zr(e))};
window.yt=window.yt||{};p("_gel",D,void 0);p("_hasclass",I,void 0);p("_addclass",J,void 0);p("_removeclass",K,void 0);p("_toggleclass",Xq,void 0);p("_showdiv",Cz,void 0);p("_hidediv",Dz,void 0);p("_ajax",Cs,void 0);p("yt.style.show",Cz,void 0);p("yt.style.hide",Dz,void 0);p("goog.bind",t,void 0);p("goog.dom.getElementByClass",E,void 0);p("goog.dom.getElementsByTagNameAndClass",af,void 0);p("goog.dom.getFirstElementChild",Cf,void 0);p("goog.array.forEach",z,void 0);p("goog.array.indexOf",$a,void 0);
p("goog.array.contains",jb,void 0);p("yt.setConfig",Sr,void 0);p("yt.config.set",Sr,void 0);p("yt.getConfig",L,void 0);p("yt.config.get",L,void 0);
p("yt.logging.errors.log",function(a,b,c,d,e,f){b=void 0===b?"ERROR":b;f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};d=void 0===b?"ERROR":b;d=void 0===d?"ERROR":d;f=window&&window.yterr||!1;if(a&&f&&!(5<=hx)&&(ls("console_log_js_exceptions")&&(f=[],f.push("Name: "+a.name),f.push("Message: "+a.message),a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params)),f.push("File name: "+a.fileName),f.push("Stacktrace: "+
a.stack),window.console.log(f.join("\n"),a)),0!==a.f)){f=a.g;b=a.columnNumber;if(a.args&&a.args.length)for(var g=0,k=0;k<a.args.length;k++){e=a.args[k];var l="params."+k;g+=l.length;if(e)if(Array.isArray(e))for(var m=c,q=0;q<e.length&&!(e[q]&&(g+=kx(q,e[q],l,m),500<g));q++);else if("object"===typeof e)for(m in m=void 0,q=c,e){if(e[m]&&(g+=kx(m,e[m],l,q),500<g))break}else c[l]=String(JSON.stringify(e)).substring(0,500),g+=c[l].length;else c[l]=String(JSON.stringify(e)).substring(0,500),g+=c[l].length;
if(500<=g)break}else if(a.hasOwnProperty("params"))if(e=a.params,"object"===typeof a.params)for(k in l=0,e){if(e[k]&&(g="params."+k,m=String(JSON.stringify(e[k])).substr(0,500),c[g]=m,l+=g.length+m.length,500<l))break}else c.params=String(JSON.stringify(e)).substr(0,500);a=Le(a);(f=f||a.stack)||(f="Not available");k=a.lineNumber.toString();isNaN(k)||!b||isNaN(b)||(k=k+":"+b);window.yterr&&Ma(window.yterr)&&(a.params=c,window.yterr(a));if(!(gx.has(a.message)||0<=f.indexOf("/YouTubeCenter.js")||0<=
f.indexOf("/mytube.js"))){d={Da:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:k,level:d,"client.name":c.name},P:{url:L("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(d["client.version"]=c.version);if(d.P){f&&(d.P.stack=f);f=ba(Object.keys(c));for(b=f.next();!b.done;b=f.next())b=b.value,d.P["client."+b]=c[b];if(c=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=ba(Object.keys(c)),b=f.next();!b.done;b=f.next())b=b.value,d.P[b]=c[b]}Bs(L("ECATCHER_REPORT_HOST",
"")+"/error_204",d);gx.add(a.message);hx++}}},void 0);
p("yt.setTimeout",M,void 0);p("yt.setInterval",qs,void 0);p("yt.clearTimeout",O,void 0);p("yt.clearInterval",rs,void 0);p("yt.timers.setTimeout",M,void 0);p("yt.timers.setInterval",qs,void 0);p("yt.timers.clearTimeout",O,void 0);p("yt.timers.clearInterval",rs,void 0);p("yt.setMsg",qz,void 0);p("yt.setGoogMsg",sz,void 0);p("yt.getMsg",rz,void 0);p("yt.msgs.set",qz,void 0);p("yt.msgs.setGoog",sz,void 0);p("yt.msgs.get",rz,void 0);p("yt.events.listen",P,void 0);
p("yt.events.unlisten",function(a,b,c,d){d=void 0===d?{}:d;(a=bt(a,b,c,d))&&Q(a)},void 0);
p("yt.events.stopPropagation",ft,void 0);p("yt.events.preventDefault",function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault();return!1},void 0);
p("yt.events.getTarget",et,void 0);p("yt.events.clear",function(){for(var a in $s)Q(a)},void 0);
p("yt.events.Event",Ys,void 0);Ys.prototype.preventDefault=Ys.prototype.preventDefault;Ys.prototype.stopPropagation=Ys.prototype.stopPropagation;p("yt.pubsub.subscribe",R,void 0);p("yt.pubsub.unsubscribeByKey",wt,void 0);p("yt.pubsub.publish",S,void 0);p("yt.pubsub2.publish",T,void 0);
R("init",function(){xE=new bu(uE);EE.push(P(window,"resize",yE));EE.push(P(window,"scroll",BE));J(document.body,"page-loaded");var a=vD.getInstance(),b=!!((yD("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;document.body&&I(document.body,"exp-invert-logo")&&(c&&!I(document.body,"inverted-hdpi")?J(document.body,"inverted-hdpi"):!c&&I(document.body,"inverted-hdpi")&&K(document.body,"inverted-hdpi"));if(b!=c){b="f"+(Math.floor(119/31)+1);var d=yD(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete uD[b]:(c=d.toString(16),uD[b]=c.toString());a.save()}});
R("dispose",yz);R("init",yz);UD("keyboard");p("yt.uix.FormInput.selectOnChangeActionIE",function(a){RA.getInstance().Qa(a)},void 0);
R("init",function(){UA()});
p("goog.i18n.bidi.setDirAttribute",function(a,b){var c=b.value,d="";Bb.test(c)?d="rtl":Bb.test(c)||(d="ltr");b.dir=d},void 0);
p("yt.style.toggle",Ez,void 0);p("yt.style.setDisplayed",zz,void 0);p("yt.style.isDisplayed",Az,void 0);p("yt.style.setVisible",function(a,b){if(a=D(a))a.style.visibility=b?"visible":"hidden"},void 0);
p("yt.net.ajax.sendWithOptionsFromUncompiled",function(a,b){return Bs(a,{format:b.format,method:b.method,postBody:b.postBody,onSuccess:b.onSuccess})},void 0);
p("yt.net.ajax.ResponseFormat.JSON","JSON",void 0);p("yt.net.ajax.ResponseFormat.RAW","RAW",void 0);p("yt.net.ajax.ResponseFormat.LEGACY_XML","XML",void 0);p("yt.net.ajax.getRootNode",Is,void 0);p("yt.net.ajax.getNodeValue",Hs,void 0);p("yt.net.scriptloader.load",Zx,void 0);p("yt.net.styleloader.load",Hy,void 0);
p("goog.dom.forms.getFormDataString",function(a){for(var b=[],c=a.elements,d,e=0;d=c.item(e);e++)if(d.form==a&&!d.disabled&&"FIELDSET"!=d.tagName){var f=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=Zq(d);if(null!=d)for(var g,k=0;g=d[k];k++)Yq(b,f,g);break;default:g=Zq(d),null!=g&&Yq(b,f,g)}}c=a.getElementsByTagName("INPUT");for(e=0;d=c[e];e++)d.form==a&&"image"==d.type.toLowerCase()&&(f=d.name,Yq(b,f,d.value),Yq(b,f+".x","0"),
Yq(b,f+".y","0"));return b.join("&")},void 0);
p("yt.uri.buildQueryData",dg,void 0);p("yt.uri.appendQueryData",fg,void 0);p("yt.www.feedback.init",KD,void 0);p("yt.www.feedback.start",function(a,b){try{var c=(a||"59")+"",d=ND(b),e=OD();ls("gfeedback_for_signed_out_users_enabled")?(e.productId=c,e.locale=d.locale,e.helpCenterPath=d.helpCenterPath,Or(e,d.productData)):Tl(c,d).i(e);return!1}catch(f){return!0}},void 0);
p("yt.www.feedback.startHelp",MD,void 0);p("yt.www.feedback.displayLink",QD,void 0);R("init",KD);R("init",QD);R("dispose",function(){wt(ID);Q(GD);ID.length=0;GD.length=0;HD={}});
p("yt.net.cookies.set",pu,void 0);p("yt.net.cookies.get",qu,void 0);p("yt.net.cookies.remove",ru,void 0);p("yt.window.redirect",Cy,void 0);
p("yt.window.popup",function(a,b){b=void 0===b?{}:b;b.target=b.target||"YouTube";b.width=b.width||"600";b.height=b.height||"600";var c;(c=b)||(c={});var d=window;var e=a instanceof Ac?a:Hc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,g=[],k;for(k in c)switch(k){case "width":case "height":case "top":case "left":g.push(k+"="+c[k]);break;case "target":case "noopener":case "noreferrer":break;default:g.push(k+"="+(c[k]?1:0))}g=g.join(",");if(Gd()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f)g=qf("A"),nd(g,e),g.setAttribute("target",f),c.noreferrer&&g.setAttribute("rel","noreferrer"),c=document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(c),d={};else if(c.noreferrer){if(d=d.open("",f,g),c=Dc(e),d&&(Od&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=dd('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+ud(c)+'">',null),e=d.document))e.write(Wc(c)),e.close()}else(d=d.open(Dc(e),
f,g))&&c.noopener&&(d.opener=null);c=d;if(!c)return null;c.opener||(c.opener=window);c.focus();return c},void 0);
p("yt.window.navigate",Dy,void 0);R("init",function(){eC.getInstance().hc();CD.getInstance().hc()});
R("init",function(){var a=!!E("guide-module-loading");window.spf&&spf.load&&a&&(L("GUIDE_DELAY_LOAD")||aE(),bE.push(R("appbar-show-guide",aE)))});
AC(Rz);AC(rB);AC(DA);AC(uB);AC(vB);AC(RA);AC(EA);AC(jA);AC(xB);AC(oA);AC(QB);AC(jB);AC(lB);AC(aC);AC(bC);AC(cC);AC(jH);AC(CD);AC(eC);AC(qH);AC(vH);AC(nC);AC(pC);AC(rC);
p("yt.player.instances.create",function(a,b){var c=a;var d=void 0===d?!0:d;c="string"===typeof c?$e(c):c;var e=az+"_"+Oa(c),f=$y[e];f&&d?b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(b.args||null):f.loadNewVideoConfig(b):(f=new Ly(c,e,b,void 0),$y[e]=f,S("player-added",f.api),Pi(f,Ua(bz,f)));c=f.api;return c},void 0);
p("yt.www.watch.player.seekTo",function(){},void 0);
p("yt.www.watch.player.saveResumeOffset",function(a){var b;(b=L("PAGE_NAME"))&&"watch"!=b?(jx(new fx("getPlayer called on:",b)),b=null):b=cz();if(b&&b.isReady()){a&&Sr("RESUME_COOKIE_NAME",a);a=L("VIDEO_ID",void 0);var c=b.getDuration();b=Math.floor(b.getCurrentTime());0==c||120>=b||b+120>=c?qL(a):pL(a,Math.floor(b))}},void 0);
p("yt.www.lists.data.addto.saveToWatchLater",cE,void 0);p("yt.www.lists.addtowatchlater.init",hE,void 0);R("init",hE);R("dispose",function(){Lz("addto-watch-later-button","click",iE);Lz("addto-watch-later-button-success","click",jE);Lz("addto-watch-later-button-remove","click",kE);Lz("addto-watch-later-button-sign-in","click",lE);Q(fE);fE=[]});
p("yt.www.watchqueue.addtowatchqueue.init",rL,void 0);R("init",rL);R("dispose",function(){wt(vL);vL.length=0;CL=[];Lz("addto-watch-queue-button","click",sL);Lz("addto-tv-queue-button","click",sL);Lz("addto-watch-queue-button-success","click",tL);Lz("addto-watch-queue-menu-choice","click",uL);Qi(eL);eL=null;wt(oL);oL.length=0;WK()});
p("yt.dom.datasets.get",V,void 0);p("yt.dom.datasets.set",Tx,void 0);p("yt.abuse.player.botguardInitialized",r("yt.abuse.player.botguardInitialized")||Ay,void 0);p("yt.abuse.player.invokeBotguard",r("yt.abuse.player.invokeBotguard")||By,void 0);p("yt.abuse.dclkstatus.checkDclkStatus",r("yt.abuse.dclkstatus.checkDclkStatus")||wy,void 0);p("yt.player.exports.navigate",r("yt.player.exports.navigate")||Ey,void 0);p("yt.util.activity.init",r("yt.util.activity.init")||hu,void 0);
p("yt.util.activity.getTimeSinceActive",r("yt.util.activity.getTimeSinceActive")||lg,void 0);p("yt.util.activity.setTimestamp",r("yt.util.activity.setTimestamp")||iu,void 0);
var uM=R("init",function(){NE();r("yt.www.page.visibilitymonitor.delegateByClass")(null,r("yt.www.page.visibilitymonitor.States.VISIBLE"),hH,"yt-thumb");r("yt.www.page.visibilitymonitor.delegateByClass")(null,r("yt.www.page.visibilitymonitor.States.VISIBLE"),hH,"yt-uix-simple-thumb-wrap");r("yt.www.page.visibilitymonitor.refresh")();Cx("tdl");wt(uM)});
R("init",function(){for(var a=0;a<document.forms.length;a++){for(var b=!1,c=0;c<DL.length;c++)document.forms[a].name==DL[c]&&(b=!0);c=document.forms[a];if("post"==c.method.toLowerCase()&&0==b){b=!1;for(var d=0;d<c.elements.length;d++)c.elements[d].name==L("XSRF_FIELD_NAME")&&(b=!0);b||(b=L("XSRF_TOKEN"),d=document.createElement("input"),d.setAttribute("name",L("XSRF_FIELD_NAME")),d.setAttribute("type","hidden"),d.setAttribute("value",b),c.appendChild(d))}}});
p("yt.www.ads.MastheadAd",zD,void 0);zD.prototype.collapse_ad=zD.prototype.Ee;zD.prototype.expand_ad=zD.prototype.yh;zD.prototype.userCollapsePremiumYva=zD.prototype.pe;p("yt.www.feed.ui.ads.workaroundIE",function(a){!ED&&DD&&(ED=!0,M(function(){a.focus()},0))},void 0);
p("yt.www.feed.ui.ads.workaroundLoad",function(){DD=!0},void 0);
p("yt.net.ping.send",Ls,void 0);p("yt.tracking.doubleclick.trackActivity",function(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+sd(L("DBLCLK_ADVERTISER_ID"))+";type="+sd(a)+";cat="+sd(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+sd(d)+"="+sd(c[d]);a+=";num="+x();c=qf("IFRAME");c.src=a;c.style.display="none";document.body.appendChild(c)},void 0);
p("yt.tracking.track",dy,void 0);p("yt.tracking.share",function(a,b,c,d,e,f){var g={};b&&(g.v=b);c&&(g.list=c);d&&(g.url=d);a={name:a,locale:e,feature:f};for(var k in g)a[k]=g[k];g=fg("/sharing_services",a);Ls(g)},void 0);
p("yt.www.subscription.autoaction.continueAction",function(a,b,c){T(GF,new AF(a,{itemType:b,itemId:c}))},void 0);
R("init",function(a){NG=!!a;OG.push(Fw(GF,PG),Fw(cG,RG));NG||OG.push(Fw(aG,PG),Fw(gG,RG),Fw(DF,TG),Fw(EF,VG),Fw(jG,XG),Fw(JG,ZG),Fw(LG,aH),Fw(IG,$G))});
R("init",function(){mG.push(Fw(FF,xG),Fw(lG,rG),Fw(kG,qG))});
R("dispose",function(){Jw(mG);mG.length=0;Q(nG);nG.length=0;XA&&(zf(XA),XA=null)});
R("init",function(){});
R("dispose",function(){Q(eH);eH.length=0;Object.keys(dH).forEach(function(a){zf(dH[a])});
dH={}});
R("init",function(){L("CREATE_CHANNEL_LIGHTBOX")&&OC();L("FEED_PRIVACY_LIGHTBOX_ENABLED")&&(UC.push(R("SHOW-FEED-PRIVACY-FAVORITE-DIALOG",aD)),UC.push(R("SHOW-FEED-PRIVACY-LIKE-DIALOG",$C)),UC.push(R("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG",bD)),UC.push(R("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG",cD)),UC.push(R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",ZC)));if(L("SHOW_IDENTITY_PROMPT_LIGHTBOX")){var a=LC(dD);var b=L("IDENTITY_PROMPT_NEXT_URL",document.location.href),c=L("IDENTITY_PROMPT_AUTHUSER",void 0),
d=L("IDENTITY_PROMPT_PAGEID",void 0),e={};c&&(e.authuser=c);d&&(e.pageid=d);a.open("identity-prompt","/identity_prompt_ajax","identity_prompt_ajax",!0,!0,void 0,b,!0,e)}L("SHOW_MCNA_YPE_MODAL")&&new tD("")});
R("dispose",function(){});
p("yt.www.account.AddNewChannelLoader.init",function(){var a=LC(MC);a.l=L("ADD_NEW_CHANNEL_PAGE_ID",void 0)||null;a.init(L("ADD_NEW_CHANNEL_CSS_URL",void 0),L("ADD_NEW_CHANNEL_JS_URL",void 0),!a.l,D("body-container"),"add-secondary-channel")},void 0);
p("yt.www.account.CreateChannelLoader.show",function(a,b,c,d){OC(!0,a,b,c,d)},void 0);
R("init",tM);p("yt.ypc.bootstrap.init",tM,void 0);var vM=R("init",function(){L("PAGEFRAME_JS")&&Zx(L("PAGEFRAME_JS",void 0),function(){r("ytbin.www.pageframe.setup")()});
wt(vM)});}).call(this);

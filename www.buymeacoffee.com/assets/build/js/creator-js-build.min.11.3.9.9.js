/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;

        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */

            var doc = null;

            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'),
                a = $form.attr2('action'),
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }

            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);(function () {

	nLazy = function(){
		$('.nl-image[data-background]:visible').each(function(){
			var $this = $(this)
			var src = $this.data('background')
			var imageTop = $this.offset().top
			var windowSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			var windowBottom = $(document).scrollTop() + windowSize
			if(imageTop <= windowBottom){
				$this.addClass('nl-loading')
				$img = $('<img>').attr('src', src).on('load', function(){
					$(this).remove()
					$this
						.css({
							'opacity': 0,
							'background-image': 'url(' + src + ')'
						})
						.removeClass('nl-loading placeholder-img')
						.addClass('nl-loaded')
						.animate({
							'opacity': 1
						}, 'fast')
						.removeAttr('data-background')
				})
			}
		})
	}

	$(window).scroll(nLazy)

})()
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        // if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);
/*! pace 1.0.2 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?e.push(Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0})):e.push(a[d]=b.prototype[d]):e.push(void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e,f){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return a.lengthComputable?h.progress=100*a.loaded/a.total:h.progress=h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.5
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=!1,h=c.$slider.width(),i=window.innerWidth||a(window).width();if("window"===c.respondTo?f=i:"slider"===c.respondTo?f=h:"min"===c.respondTo&&(f=Math.min(i,h)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick(e):(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh(b)),g=e):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick(e):(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh(b)),g=e):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh(b),g=e),b||g===!1||c.$slider.trigger("breakpoint",[c,g])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&"object"!=typeof c.options.prevArrow&&c.$prevArrow.remove(),c.$nextArrow&&"object"!=typeof c.options.nextArrow&&c.$nextArrow.remove(),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:1},200)},d.src=c,b.css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),c.$slides.eq(e).addClass("slick-active").attr("aria-hidden","false"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(e).addClass("slick-center")),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])
}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*! jQuery & Zepto Lazy v1.7.7 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
/*
 * easy-autocomplete
 * jQuery plugin for autocompletion
 *
 * @author Łukasz Pawełczak (http://github.com/pawelczak)
 * @version 1.3.5
 * Copyright  License:
 */

var EasyAutocomplete = function(a) {
        return a.Configuration = function(a) {
            function b() {
                if ("xml" === a.dataType && (a.getValue || (a.getValue = function(a) {
                        return $(a).text()
                    }), a.list || (a.list = {}), a.list.sort || (a.list.sort = {}), a.list.sort.method = function(b, c) {
                        return b = a.getValue(b), c = a.getValue(c), c > b ? -1 : b > c ? 1 : 0
                    }, a.list.match || (a.list.match = {}), a.list.match.method = function(a, b) {
                        return a.search(b) > -1
                    }), void 0 !== a.categories && a.categories instanceof Array) {
                    for (var b = [], c = 0, d = a.categories.length; d > c; c += 1) {
                        var e = a.categories[c];
                        for (var f in h.categories[0]) void 0 === e[f] && (e[f] = h.categories[0][f]);
                        b.push(e)
                    }
                    a.categories = b
                }
            }

            function c() {
                function b(a, c) {
                    var d = a || {};
                    for (var e in a) void 0 !== c[e] && null !== c[e] && ("object" != typeof c[e] || c[e] instanceof Array ? d[e] = c[e] : b(a[e], c[e]));
                    return void 0 !== c.data && null !== c.data && "object" == typeof c.data && (d.data = c.data), d
                }
                h = b(h, a)
            }

            function d() {
                if ("list-required" !== h.url && "function" != typeof h.url) {
                    var b = h.url;
                    h.url = function() {
                        return b
                    }
                }
                if (void 0 !== h.ajaxSettings.url && "function" != typeof h.ajaxSettings.url) {
                    var b = h.ajaxSettings.url;
                    h.ajaxSettings.url = function() {
                        return b
                    }
                }
                if ("string" == typeof h.listLocation) {
                    var c = h.listLocation;
                    "XML" === h.dataType.toUpperCase() ? h.listLocation = function(a) {
                        return $(a).find(c)
                    } : h.listLocation = function(a) {
                        return a[c]
                    }
                }
                if ("string" == typeof h.getValue) {
                    var d = h.getValue;
                    h.getValue = function(a) {
                        return a[d]
                    }
                }
                void 0 !== a.categories && (h.categoriesAssigned = !0)
            }

            function e() {
                void 0 !== a.ajaxSettings && "object" == typeof a.ajaxSettings ? h.ajaxSettings = a.ajaxSettings : h.ajaxSettings = {}
            }

            function f(a) {
                return void 0 !== h[a] && null !== h[a]
            }

            function g(a, b) {
                function c(b, d) {
                    for (var e in d) void 0 === b[e] && a.log("Property '" + e + "' does not exist in EasyAutocomplete options API."), "object" == typeof b[e] && -1 === $.inArray(e, i) && c(b[e], d[e])
                }
                c(h, b)
            }
            var h = {
                    data: "list-required",
                    url: "list-required",
                    dataType: "json",
                    listLocation: function(a) {
                        return a
                    },
                    xmlElementName: "",
                    getValue: function(a) {
                        return a
                    },
                    autocompleteOff: !0,
                    placeholder: !1,
                    ajaxCallback: function() {},
                    matchResponseProperty: !1,
                    list: {
                        sort: {
                            enabled: !1,
                            method: function(a, b) {
                                return a = h.getValue(a), b = h.getValue(b), b > a ? -1 : a > b ? 1 : 0
                            }
                        },
                        maxNumberOfElements: 6,
                        hideOnEmptyPhrase: !0,
                        match: {
                            enabled: !1,
                            caseSensitive: !1,
                            method: function(a, b) {
                                return a.search(b) > -1
                            }
                        },
                        showAnimation: {
                            type: "normal",
                            time: 400,
                            callback: function() {}
                        },
                        hideAnimation: {
                            type: "normal",
                            time: 400,
                            callback: function() {}
                        },
                        onClickEvent: function() {},
                        onSelectItemEvent: function() {},
                        onLoadEvent: function() {},
                        onChooseEvent: function() {},
                        onKeyEnterEvent: function() {},
                        onMouseOverEvent: function() {},
                        onMouseOutEvent: function() {},
                        onShowListEvent: function() {},
                        onHideListEvent: function() {}
                    },
                    highlightPhrase: !0,
                    theme: "",
                    cssClasses: "",
                    minCharNumber: 0,
                    requestDelay: 0,
                    adjustWidth: !0,
                    ajaxSettings: {},
                    preparePostData: function(a, b) {
                        return a
                    },
                    loggerEnabled: !0,
                    template: "",
                    categoriesAssigned: !1,
                    categories: [{
                        maxNumberOfElements: 4
                    }]
                },
                i = ["ajaxSettings", "template"];
            this.get = function(a) {
                return h[a]
            }, this.equals = function(a, b) {
                return !(!f(a) || h[a] !== b)
            }, this.checkDataUrlProperties = function() {
                return "list-required" !== h.url || "list-required" !== h.data
            }, this.checkRequiredProperties = function() {
                for (var a in h)
                    if ("required" === h[a]) return logger.error("Option " + a + " must be defined"), !1;
                return !0
            }, this.printPropertiesThatDoesntExist = function(a, b) {
                g(a, b)
            }, b(), c(), h.loggerEnabled === !0 && g(console, a), e(), d()
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.Logger = function() {
            this.error = function(a) {
                console.log("ERROR: " + a)
            }, this.warning = function(a) {
                console.log("WARNING: " + a)
            }
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.Constans = function() {
            var a = {
                CONTAINER_CLASS: "easy-autocomplete-container",
                CONTAINER_ID: "eac-container-",
                WRAPPER_CSS_CLASS: "easy-autocomplete"
            };
            this.getValue = function(b) {
                return a[b]
            }
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.ListBuilderService = function(a, b) {
            function c(b, c) {
                function d() {
                    var d, e = {};
                    return void 0 !== b.xmlElementName && (e.xmlElementName = b.xmlElementName), void 0 !== b.listLocation ? d = b.listLocation : void 0 !== a.get("listLocation") && (d = a.get("listLocation")), void 0 !== d ? "string" == typeof d ? e.data = $(c).find(d) : "function" == typeof d && (e.data = d(c)) : e.data = c, e
                }

                function e() {
                    var a = {};
                    return void 0 !== b.listLocation ? "string" == typeof b.listLocation ? a.data = c[b.listLocation] : "function" == typeof b.listLocation && (a.data = b.listLocation(c)) : a.data = c, a
                }
                var f = {};
                if (f = "XML" === a.get("dataType").toUpperCase() ? d() : e(), void 0 !== b.header && (f.header = b.header), void 0 !== b.maxNumberOfElements && (f.maxNumberOfElements = b.maxNumberOfElements), void 0 !== a.get("list").maxNumberOfElements && (f.maxListSize = a.get("list").maxNumberOfElements), void 0 !== b.getValue)
                    if ("string" == typeof b.getValue) {
                        var g = b.getValue;
                        f.getValue = function(a) {
                            return a[g]
                        }
                    } else "function" == typeof b.getValue && (f.getValue = b.getValue);
                else f.getValue = a.get("getValue");
                return f
            }

            function d(b) {
                var c = [];
                return void 0 === b.xmlElementName && (b.xmlElementName = a.get("xmlElementName")), $(b.data).find(b.xmlElementName).each(function() {
                    c.push(this)
                }), c
            }
            this.init = function(b) {
                var c = [],
                    d = {};
                return d.data = a.get("listLocation")(b), d.getValue = a.get("getValue"), d.maxListSize = a.get("list").maxNumberOfElements, c.push(d), c
            }, this.updateCategories = function(b, d) {
                if (a.get("categoriesAssigned")) {
                    b = [];
                    for (var e = 0; e < a.get("categories").length; e += 1) {
                        var f = c(a.get("categories")[e], d);
                        b.push(f)
                    }
                }
                return b
            }, this.convertXml = function(b) {
                if ("XML" === a.get("dataType").toUpperCase())
                    for (var c = 0; c < b.length; c += 1) b[c].data = d(b[c]);
                return b
            }, this.processData = function(c, d) {
                for (var e = 0, f = c.length; f > e; e += 1) c[e].data = b(a, c[e], d);
                return c
            }, this.checkIfDataExists = function(a) {
                for (var b = 0, c = a.length; c > b; b += 1)
                    if (void 0 !== a[b].data && a[b].data instanceof Array && a[b].data.length > 0) return !0;
                return !1
            }
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.proccess = function(b, c, d) {
            function e(a, c) {
                var d = [],
                    e = "";
                if (b.get("list").match.enabled)
                    for (var g = 0, h = a.length; h > g; g += 1) e = b.get("getValue")(a[g]), f(e, c) && d.push(a[g]);
                else d = a;
                return d
            }

            function f(a, c) {
                return b.get("list").match.caseSensitive || ("string" == typeof a && (a = a.toLowerCase()), c = c.toLowerCase()), !!b.get("list").match.method(a, c)
            }

            function g(a) {
                return void 0 !== c.maxNumberOfElements && a.length > c.maxNumberOfElements && (a = a.slice(0, c.maxNumberOfElements)), a
            }

            function h(a) {
                return b.get("list").sort.enabled && a.sort(b.get("list").sort.method), a
            }
            a.proccess.match = f;
            var i = c.data,
                j = d;
            return i = e(i, j), i = g(i), i = h(i)
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.Template = function(a) {
            var b = {
                    basic: {
                        type: "basic",
                        method: function(a) {
                            return a
                        },
                        cssClass: ""
                    },
                    description: {
                        type: "description",
                        fields: {
                            description: "description"
                        },
                        method: function(a) {
                            return a + " - description"
                        },
                        cssClass: "eac-description"
                    },
                    iconLeft: {
                        type: "iconLeft",
                        fields: {
                            icon: ""
                        },
                        method: function(a) {
                            return a
                        },
                        cssClass: "eac-icon-left"
                    },
                    iconRight: {
                        type: "iconRight",
                        fields: {
                            iconSrc: ""
                        },
                        method: function(a) {
                            return a
                        },
                        cssClass: "eac-icon-right"
                    },
                    links: {
                        type: "links",
                        fields: {
                            link: ""
                        },
                        method: function(a) {
                            return a
                        },
                        cssClass: ""
                    },
                    custom: {
                        type: "custom",
                        method: function() {},
                        cssClass: ""
                    }
                },
                c = function(a) {
                    var c, d = a.fields;
                    return "description" === a.type ? (c = b.description.method, "string" == typeof d.description ? c = function(a, b) {
                        return a + " - <span>" + b[d.description] + "</span>"
                    } : "function" == typeof d.description && (c = function(a, b) {
                        return a + " - <span>" + d.description(b) + "</span>"
                    }), c) : "iconRight" === a.type ? ("string" == typeof d.iconSrc ? c = function(a, b) {
                        return a + "<img class='eac-icon' src='" + b[d.iconSrc] + "' />"
                    } : "function" == typeof d.iconSrc && (c = function(a, b) {
                        return a + "<img class='eac-icon' src='" + d.iconSrc(b) + "' />"
                    }), c) : "iconLeft" === a.type ? ("string" == typeof d.iconSrc ? c = function(a, b) {
                        return "<img class='eac-icon' src='" + b[d.iconSrc] + "' />" + a
                    } : "function" == typeof d.iconSrc && (c = function(a, b) {
                        return "<img class='eac-icon' src='" + d.iconSrc(b) + "' />" + a
                    }), c) : "links" === a.type ? ("string" == typeof d.link ? c = function(a, b) {
                        return "<a href='" + b[d.link] + "' >" + a + "</a>"
                    } : "function" == typeof d.link && (c = function(a, b) {
                        return "<a href='" + d.link(b) + "' >" + a + "</a>"
                    }), c) : "custom" === a.type ? a.method : b.basic.method
                },
                d = function(a) {
                    return a && a.type && a.type && b[a.type] ? c(a) : b.basic.method
                },
                e = function(a) {
                    var c = function() {
                        return ""
                    };
                    return a && a.type && a.type && b[a.type] ? function() {
                        var c = b[a.type].cssClass;
                        return function() {
                            return c
                        }
                    }() : c
                };
            this.getTemplateClass = e(a), this.build = d(a)
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.main = function(b, c) {
            function d() {
                return 0 === t.length ? void p.error("Input field doesn't exist.") : o.checkDataUrlProperties() ? o.checkRequiredProperties() ? (e(), void g()) : void p.error("Will not work without mentioned properties.") : void p.error("One of options variables 'data' or 'url' must be defined.")
            }

            function e() {
                function a() {
                    var a = $("<div>"),
                        c = n.getValue("WRAPPER_CSS_CLASS");
                    o.get("theme") && "" !== o.get("theme") && (c += " eac-" + o.get("theme")), o.get("cssClasses") && "" !== o.get("cssClasses") && (c += " " + o.get("cssClasses")), "" !== q.getTemplateClass() && (c += " " + q.getTemplateClass()), a.addClass(c), t.wrap(a), o.get("adjustWidth") === !0 && b()
                }

                function b() {
                    var a = t.outerWidth();
                    t.parent().css("width", a)
                }

                function c() {
                    t.unwrap()
                }

                function d() {
                    var a = $("<div>").addClass(n.getValue("CONTAINER_CLASS"));
                    a.attr("id", f()).prepend($("<ul>")),
                        function() {
                            a.on("show.eac", function() {
                                switch (o.get("list").showAnimation.type) {
                                    case "slide":
                                        var b = o.get("list").showAnimation.time,
                                            c = o.get("list").showAnimation.callback;
                                        a.find("ul").slideDown(b, c);
                                        break;
                                    case "fade":
                                        var b = o.get("list").showAnimation.time,
                                            c = o.get("list").showAnimation.callback;
                                        a.find("ul").fadeIn(b), c;
                                        break;
                                    default:
                                        a.find("ul").show()
                                }
                                o.get("list").onShowListEvent()
                            }).on("hide.eac", function() {
                                switch (o.get("list").hideAnimation.type) {
                                    case "slide":
                                        var b = o.get("list").hideAnimation.time,
                                            c = o.get("list").hideAnimation.callback;
                                        a.find("ul").slideUp(b, c);
                                        break;
                                    case "fade":
                                        var b = o.get("list").hideAnimation.time,
                                            c = o.get("list").hideAnimation.callback;
                                        a.find("ul").fadeOut(b, c);
                                        break;
                                    default:
                                        a.find("ul").hide()
                                }
                                o.get("list").onHideListEvent()
                            }).on("selectElement.eac", function() {
                                a.find("ul li").removeClass("selected"), a.find("ul li").eq(w).addClass("selected"), o.get("list").onSelectItemEvent()
                            }).on("loadElements.eac", function(b, c, d) {
                                var e = "",
                                    f = a.find("ul");
                                f.empty().detach(), v = [];
                                for (var h = 0, i = 0, k = c.length; k > i; i += 1) {
                                    var l = c[i].data;
                                    if (0 !== l.length) {
                                        void 0 !== c[i].header && c[i].header.length > 0 && f.append("<div class='eac-category' >" + c[i].header + "</div>");
                                        for (var m = 0, n = l.length; n > m && h < c[i].maxListSize; m += 1) e = $("<li><div class='eac-item'></div></li>"),
                                            function() {
                                                var a = m,
                                                    b = h,
                                                    f = c[i].getValue(l[a]);
                                                e.find(" > div").on("click", function() {
                                                    t.val(f).trigger("change"), w = b, j(b), o.get("list").onClickEvent(), o.get("list").onChooseEvent()
                                                }).mouseover(function() {
                                                    w = b, j(b), o.get("list").onMouseOverEvent()
                                                }).mouseout(function() {
                                                    o.get("list").onMouseOutEvent()
                                                }).html(q.build(g(f, d), l[a]))
                                            }(), f.append(e), v.push(l[m]), h += 1
                                    }
                                }
                                a.append(f), o.get("list").onLoadEvent()
                            })
                        }(), t.after(a)
                }

                function e() {
                    t.next("." + n.getValue("CONTAINER_CLASS")).remove()
                }

                function g(a, b) {
                    return o.get("highlightPhrase") && "" !== b ? i(a, b) : a
                }

                function h(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }

                function i(a, b) {
                    var c = h(b);
                    return (a + "").replace(new RegExp("(" + c + ")", "gi"), "<b>$1</b>")
                }
                t.parent().hasClass(n.getValue("WRAPPER_CSS_CLASS")) && (e(), c()), a(), d(), u = $("#" + f()), o.get("placeholder") && t.attr("placeholder", o.get("placeholder"))
            }

            function f() {
                var a = t.attr("id");
                return a = n.getValue("CONTAINER_ID") + a
            }

            function g() {
                function a() {
                    s("autocompleteOff", !0) && n(), b(), c(), d(), e(), f(), g()
                }

                function b() {
                    t.focusout(function() {
                        var a, b = t.val();
                        o.get("list").match.caseSensitive || (b = b.toLowerCase());
                        for (var c = 0, d = v.length; d > c; c += 1)
                            if (a = o.get("getValue")(v[c]), o.get("list").match.caseSensitive || (a = a.toLowerCase()), a === b) return w = c, void j(w)
                    })
                }

                function c() {
                    t.off("keyup").keyup(function(a) {

                      // if ($('#profile_work').val() == '') {
                      //   // console.log(o.get("list"));
                      //   // $('#eac-container-profile_work ul').show();
                      //   u.trigger("show.eac");
                      //   // return o.get("list");
                      //
                      // }
                        function b(a) {
                            function b() {
                                var a = {},
                                    b = o.get("ajaxSettings") || {};
                                for (var c in b) a[c] = b[c];
                                return a
                            }

                            function c(a, b) {
                                return o.get("matchResponseProperty") !== !1 ? "string" == typeof o.get("matchResponseProperty") ? b[o.get("matchResponseProperty")] === a : "function" == typeof o.get("matchResponseProperty") ? o.get("matchResponseProperty")(b) === a : !0 : !0
                            }
                            if (!(a.length < o.get("minCharNumber"))) {
                                if ("list-required" !== o.get("data")) {
                                    var d = o.get("data"),
                                        e = r.init(d);
                                    e = r.updateCategories(e, d), e = r.processData(e, a), k(e, a), t.parent().find("li").length > 0 ? h() : i()
                                }
                                var f = b();
                                void 0 !== f.url && "" !== f.url || (f.url = o.get("url")), void 0 !== f.dataType && "" !== f.dataType || (f.dataType = o.get("dataType")), void 0 !== f.url && "list-required" !== f.url && (f.url = f.url(a), f.data = o.get("preparePostData")(f.data, a), $.ajax(f).done(function(b) {
                                    var d = r.init(b);
                                    d = r.updateCategories(d, b), d = r.convertXml(d), c(a, b) && (d = r.processData(d, a), k(d, a)), r.checkIfDataExists(d) && t.parent().find("li").length > 0 ? h() : i(), o.get("ajaxCallback")()
                                }).fail(function() {
                                    p.warning("Fail to load response data")
                                }).always(function() {}))
                            }
                        }
                        switch (a.keyCode) {
                            case 27:
                                i(), l();
                                break;
                            case 38:
                                a.preventDefault(), v.length > 0 && w > 0 && (w -= 1, t.val(o.get("getValue")(v[w])), j(w));
                                break;
                            case 40:
                                a.preventDefault(), v.length > 0 && w < v.length - 1 && (w += 1, t.val(o.get("getValue")(v[w])), j(w));
                                break;
                            default:
                                if (a.keyCode > 40 || 8 === a.keyCode) {
                                    var c = t.val();
                                    o.get("list").hideOnEmptyPhrase !== !0 || 8 !== a.keyCode || "" !== c ? o.get("requestDelay") > 0 ? (void 0 !== m && clearTimeout(m), m = setTimeout(function() {
                                        b(c)
                                    }, o.get("requestDelay"))) : b(c) : i()
                                }
                        }
                    })
                }

                function d() {
                    t.on("keydown", function(a) {
                        a = a || window.event;
                        var b = a.keyCode;
                        return 38 === b ? (suppressKeypress = !0, !1) : void 0
                    }).keydown(function(a) {
                        13 === a.keyCode && w > -1 && (t.val(o.get("getValue")(v[w])), o.get("list").onKeyEnterEvent(), o.get("list").onChooseEvent(), w = -1, i(), a.preventDefault())
                    })
                }

                function e() {
                    t.off("keypress")
                }

                function f() {
                    t.focus(function() {
                        "" !== t.val() && v.length > 0 && (w = -1, h())
                    })
                }

                function g() {
                    t.blur(function() {
                        setTimeout(function() {
                            w = -1, i()
                        }, 250)
                    })
                }

                function n() {
                    t.attr("autocomplete", "off")
                }
                a()
            }

            function h() {
                u.trigger("show.eac")
            }

            function i() {
                u.trigger("hide.eac")
            }

            function j(a) {
                u.trigger("selectElement.eac", a)
            }

            function k(a, b) {
                u.trigger("loadElements.eac", [a, b])
            }

            function l() {
                t.trigger("blur")
            }
            var m, n = new a.Constans,
                o = new a.Configuration(c),
                p = new a.Logger,
                q = new a.Template(c.template),
                r = new a.ListBuilderService(o, a.proccess),
                s = o.equals,
                t = b,
                u = "",
                v = [],
                w = -1;
            a.consts = n, this.getConstants = function() {
                return n
            }, this.getConfiguration = function() {
                return o
            }, this.getContainer = function() {
                return u
            }, this.getSelectedItemIndex = function() {
                return w
            }, this.getItems = function() {
                return v
            }, this.getItemData = function(a) {
                return v.length < a || void 0 === v[a] ? -1 : v[a]
            }, this.getSelectedItemData = function() {
                return this.getItemData(w)
            }, this.build = function() {
                e()
            }, this.init = function() {
                d()
            }
        }, a.eacHandles = [], a.getHandle = function(b) {
            return a.eacHandles[b]
        }, a.inputHasId = function(a) {
            return void 0 !== $(a).attr("id") && $(a).attr("id").length > 0
        }, a.assignRandomId = function(b) {
            var c = "";
            do c = "eac-" + Math.floor(1e4 * Math.random()); while (0 !== $("#" + c).length);
            elementId = a.consts.getValue("CONTAINER_ID") + c, $(b).attr("id", c)
        }, a.setHandle = function(b, c) {
            a.eacHandles[c] = b
        }, a
    }(EasyAutocomplete || {});
! function(a) {
    a.fn.easyAutocomplete = function(b) {
        return this.each(function() {
            var c = a(this),
                d = new EasyAutocomplete.main(c, b);
            EasyAutocomplete.inputHasId(c) || EasyAutocomplete.assignRandomId(c), d.init(), EasyAutocomplete.setHandle(d, c.attr("id"))
        })
    }, a.fn.getSelectedItemIndex = function() {
        var b = a(this).attr("id");
        return void 0 !== b ? EasyAutocomplete.getHandle(b).getSelectedItemIndex() : -1
    }, a.fn.getItems = function() {
        var b = a(this).attr("id");
        return void 0 !== b ? EasyAutocomplete.getHandle(b).getItems() : -1
    }, a.fn.getItemData = function(b) {
        var c = a(this).attr("id");
        return void 0 !== c && b > -1 ? EasyAutocomplete.getHandle(c).getItemData(b) : -1
    }, a.fn.getSelectedItemData = function() {
        var b = a(this).attr("id");
        return void 0 !== b ? EasyAutocomplete.getHandle(b).getSelectedItemData() : -1
    }
}(jQuery);
/**
 * Super simple wysiwyg editor v0.8.6
 * http://summernote.org/
 *
 * summernote.js
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license./
 *
 * Date: 2017-07-16T16:33Z
 */
(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {
  'use strict';

  var isSupportAmd = typeof define === 'function' && define.amd;

  /**
   * returns whether font is installed or not.
   *
   * @param {String} fontName
   * @return {Boolean}
   */
  var isFontInstalled = function (fontName) {
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
    var $tester = $('<div>').css({
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      fontSize: '200px'
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);

    var originalWidth = $tester.css('fontFamily', testFontName).width();
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

    $tester.remove();

    return originalWidth !== width;
  };

  var userAgent = navigator.userAgent;
  var isMSIE = /MSIE|Trident/i.test(userAgent);
  var browserVersion;
  if (isMSIE) {
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
    matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent);
    if (matches) {
      browserVersion = parseFloat(matches[1]);
    }
  }

  var isEdge = /Edge\/\d+/.test(userAgent);

  var hasCodeMirror = !!window.CodeMirror;
  if (!hasCodeMirror && isSupportAmd && typeof require !== 'undefined') {
    if (typeof require.resolve !== 'undefined') {
      try {
        // If CodeMirror can't be resolved, `require.resolve` will throw an
        // exception and `hasCodeMirror` won't be set to `true`.
        require.resolve('codemirror');
        hasCodeMirror = true;
      } catch (e) {
        // Do nothing.
      }
    } else if (typeof eval('require').specified !== 'undefined') {
      hasCodeMirror = eval('require').specified('codemirror');
    }
  }

  var isSupportTouch =
    (('ontouchstart' in window) ||
     (navigator.MaxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));

  /**
   * @class core.agent
   *
   * Object which check platform and agent
   *
   * @singleton
   * @alternateClassName agent
   */
  var agent = {
    isMac: navigator.appVersion.indexOf('Mac') > -1,
    isMSIE: isMSIE,
    isEdge: isEdge,
    isFF: !isEdge && /firefox/i.test(userAgent),
    isPhantom: /PhantomJS/i.test(userAgent),
    isWebkit: !isEdge && /webkit/i.test(userAgent),
    isChrome: !isEdge && /chrome/i.test(userAgent),
    isSafari: !isEdge && /safari/i.test(userAgent),
    browserVersion: browserVersion,
    jqueryVersion: parseFloat($.fn.jquery),
    isSupportAmd: isSupportAmd,
    isSupportTouch: isSupportTouch,
    hasCodeMirror: hasCodeMirror,
    isFontInstalled: isFontInstalled,
    isW3CRangeSupport: !!document.createRange
  };

  /**
   * @class core.func
   *
   * func utils (for high-order func's arg)
   *
   * @singleton
   * @alternateClassName func
   */
  var func = (function () {
    var eq = function (itemA) {
      return function (itemB) {
        return itemA === itemB;
      };
    };

    var eq2 = function (itemA, itemB) {
      return itemA === itemB;
    };

    var peq2 = function (propName) {
      return function (itemA, itemB) {
        return itemA[propName] === itemB[propName];
      };
    };

    var ok = function () {
      return true;
    };

    var fail = function () {
      return false;
    };

    var not = function (f) {
      return function () {
        return !f.apply(f, arguments);
      };
    };

    var and = function (fA, fB) {
      return function (item) {
        return fA(item) && fB(item);
      };
    };

    var self = function (a) {
      return a;
    };

    var invoke = function (obj, method) {
      return function () {
        return obj[method].apply(obj, arguments);
      };
    };

    var idCounter = 0;

    /**
     * generate a globally-unique id
     *
     * @param {String} [prefix]
     */
    var uniqueId = function (prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    };

    /**
     * returns bnd (bounds) from rect
     *
     * - IE Compatibility Issue: http://goo.gl/sRLOAo
     * - Scroll Issue: http://goo.gl/sNjUc
     *
     * @param {Rect} rect
     * @return {Object} bounds
     * @return {Number} bounds.top
     * @return {Number} bounds.left
     * @return {Number} bounds.width
     * @return {Number} bounds.height
     */
    var rect2bnd = function (rect) {
      var $document = $(document);
      return {
        top: rect.top + $document.scrollTop(),
        left: rect.left + $document.scrollLeft(),
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    };

    /**
     * returns a copy of the object where the keys have become the values and the values the keys.
     * @param {Object} obj
     * @return {Object}
     */
    var invertObject = function (obj) {
      var inverted = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          inverted[obj[key]] = key;
        }
      }
      return inverted;
    };

    /**
     * @param {String} namespace
     * @param {String} [prefix]
     * @return {String}
     */
    var namespaceToCamel = function (namespace, prefix) {
      prefix = prefix || '';
      return prefix + namespace.split('.').map(function (name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
      }).join('');
    };

    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     * @param {Function} func
     * @param {Number} wait
     * @param {Boolean} immediate
     * @return {Function}
     */
    var debounce = function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    };

    return {
      eq: eq,
      eq2: eq2,
      peq2: peq2,
      ok: ok,
      fail: fail,
      self: self,
      not: not,
      and: and,
      invoke: invoke,
      uniqueId: uniqueId,
      rect2bnd: rect2bnd,
      invertObject: invertObject,
      namespaceToCamel: namespaceToCamel,
      debounce: debounce
    };
  })();

  /**
   * @class core.list
   *
   * list utils
   *
   * @singleton
   * @alternateClassName list
   */
  var list = (function () {
    /**
     * returns the first item of an array.
     *
     * @param {Array} array
     */
    var head = function (array) {
      return array[0];
    };

    /**
     * returns the last item of an array.
     *
     * @param {Array} array
     */
    var last = function (array) {
      return array[array.length - 1];
    };

    /**
     * returns everything but the last entry of the array.
     *
     * @param {Array} array
     */
    var initial = function (array) {
      return array.slice(0, array.length - 1);
    };

    /**
     * returns the rest of the items in an array.
     *
     * @param {Array} array
     */
    var tail = function (array) {
      return array.slice(1);
    };

    /**
     * returns item of array
     */
    var find = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        var item = array[idx];
        if (pred(item)) {
          return item;
        }
      }
    };

    /**
     * returns true if all of the values in the array pass the predicate truth test.
     */
    var all = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!pred(array[idx])) {
          return false;
        }
      }
      return true;
    };

    /**
     * returns index of item
     */
    var indexOf = function (array, item) {
      return $.inArray(item, array);
    };

    /**
     * returns true if the value is present in the list.
     */
    var contains = function (array, item) {
      return indexOf(array, item) !== -1;
    };

    /**
     * get sum from a list
     *
     * @param {Array} array - array
     * @param {Function} fn - iterator
     */
    var sum = function (array, fn) {
      fn = fn || func.self;
      return array.reduce(function (memo, v) {
        return memo + fn(v);
      }, 0);
    };

    /**
     * returns a copy of the collection with array type.
     * @param {Collection} collection - collection eg) node.childNodes, ...
     */
    var from = function (collection) {
      var result = [], idx = -1, length = collection.length;
      while (++idx < length) {
        result[idx] = collection[idx];
      }
      return result;
    };

    /**
     * returns whether list is empty or not
     */
    var isEmpty = function (array) {
      return !array || !array.length;
    };

    /**
     * cluster elements by predicate function.
     *
     * @param {Array} array - array
     * @param {Function} fn - predicate function for cluster rule
     * @param {Array[]}
     */
    var clusterBy = function (array, fn) {
      if (!array.length) { return []; }
      var aTail = tail(array);
      return aTail.reduce(function (memo, v) {
        var aLast = last(memo);
        if (fn(last(aLast), v)) {
          aLast[aLast.length] = v;
        } else {
          memo[memo.length] = [v];
        }
        return memo;
      }, [[head(array)]]);
    };

    /**
     * returns a copy of the array with all false values removed
     *
     * @param {Array} array - array
     * @param {Function} fn - predicate function for cluster rule
     */
    var compact = function (array) {
      var aResult = [];
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (array[idx]) { aResult.push(array[idx]); }
      }
      return aResult;
    };

    /**
     * produces a duplicate-free version of the array
     *
     * @param {Array} array
     */
    var unique = function (array) {
      var results = [];

      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!contains(results, array[idx])) {
          results.push(array[idx]);
        }
      }

      return results;
    };

    /**
     * returns next item.
     * @param {Array} array
     */
    var next = function (array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) { return null; }

      return array[idx + 1];
    };

    /**
     * returns prev item.
     * @param {Array} array
     */
    var prev = function (array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) { return null; }

      return array[idx - 1];
    };

    return { head: head, last: last, initial: initial, tail: tail,
             prev: prev, next: next, find: find, contains: contains,
             all: all, sum: sum, from: from, isEmpty: isEmpty,
             clusterBy: clusterBy, compact: compact, unique: unique };
  })();


  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

  /**
   * @class core.dom
   *
   * Dom functions
   *
   * @singleton
   * @alternateClassName dom
   */
  var dom = (function () {
    /**
     * @method isEditable
     *
     * returns whether node is `note-editable` or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isEditable = function (node) {
      return node && $(node).hasClass('note-editable');
    };

    /**
     * @method isControlSizing
     *
     * returns whether node is `note-control-sizing` or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isControlSizing = function (node) {
      return node && $(node).hasClass('note-control-sizing');
    };

    /**
     * @method makePredByNodeName
     *
     * returns predicate which judge whether nodeName is same
     *
     * @param {String} nodeName
     * @return {Function}
     */
    var makePredByNodeName = function (nodeName) {
      nodeName = nodeName.toUpperCase();
      return function (node) {
        return node && node.nodeName.toUpperCase() === nodeName;
      };
    };

    /**
     * @method isText
     *
     *
     *
     * @param {Node} node
     * @return {Boolean} true if node's type is text(3)
     */
    var isText = function (node) {
      return node && node.nodeType === 3;
    };

    /**
     * @method isElement
     *
     *
     *
     * @param {Node} node
     * @return {Boolean} true if node's type is element(1)
     */
    var isElement = function (node) {
      return node && node.nodeType === 1;
    };

    /**
     * ex) br, col, embed, hr, img, input, ...
     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
     */
    var isVoid = function (node) {
      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(node.nodeName.toUpperCase());
    };

    var isPara = function (node) {
      if (isEditable(node)) {
        return false;
      }

      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
    };

    var isHeading = function (node) {
      return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
    };

    var isPre = makePredByNodeName('PRE');

    var isLi = makePredByNodeName('LI');

    var isPurePara = function (node) {
      return isPara(node) && !isLi(node);
    };

    var isTable = makePredByNodeName('TABLE');

    var isData = makePredByNodeName('DATA');

    var isInline = function (node) {
      return !isBodyContainer(node) &&
             !isList(node) &&
             !isHr(node) &&
             !isPara(node) &&
             !isTable(node) &&
             !isBlockquote(node) &&
             !isData(node);
    };

    var isList = function (node) {
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
    };

    var isHr = makePredByNodeName('HR');

    var isCell = function (node) {
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
    };

    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

    var isBodyContainer = function (node) {
      return isCell(node) || isBlockquote(node) || isEditable(node);
    };

    var isAnchor = makePredByNodeName('A');

    var isParaInline = function (node) {
      return isInline(node) && !!ancestor(node, isPara);
    };

    var isBodyInline = function (node) {
      return isInline(node) && !ancestor(node, isPara);
    };

    var isBody = makePredByNodeName('BODY');

    /**
     * returns whether nodeB is closest sibling of nodeA
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     * @return {Boolean}
     */
    var isClosestSibling = function (nodeA, nodeB) {
      return nodeA.nextSibling === nodeB ||
             nodeA.previousSibling === nodeB;
    };

    /**
     * returns array of closest siblings with node
     *
     * @param {Node} node
     * @param {function} [pred] - predicate function
     * @return {Node[]}
     */
    var withClosestSiblings = function (node, pred) {
      pred = pred || func.ok;

      var siblings = [];
      if (node.previousSibling && pred(node.previousSibling)) {
        siblings.push(node.previousSibling);
      }
      siblings.push(node);
      if (node.nextSibling && pred(node.nextSibling)) {
        siblings.push(node.nextSibling);
      }
      return siblings;
    };

    /**
     * blank HTML for cursor position
     * - [workaround] old IE only works with &nbsp;
     * - [workaround] IE11 and other browser works with bogus br
     */
    var blankHTML = agent.isMSIE && agent.browserVersion < 11 ? '&nbsp;' : '<br>';

    /**
     * @method nodeLength
     *
     * returns #text's text size or element's childNodes size
     *
     * @param {Node} node
     */
    var nodeLength = function (node) {
      if (isText(node)) {
        return node.nodeValue.length;
      }

      if (node) {
        return node.childNodes.length;
      }

      return 0;

    };

    /**
     * returns whether node is empty or not.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    var isEmpty = function (node) {
      var len = nodeLength(node);

      if (len === 0) {
        return true;
      } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
        // ex) <p><br></p>, <span><br></span>
        return true;
      } else if (list.all(node.childNodes, isText) && node.innerHTML === '') {
        // ex) <p></p>, <span></span>
        return true;
      }

      return false;
    };

    /**
     * padding blankHTML if node is empty (for cursor position)
     */
    var paddingBlankHTML = function (node) {
      if (!isVoid(node) && !nodeLength(node)) {
        node.innerHTML = blankHTML;
      }
    };

    /**
     * find nearest ancestor predicate hit
     *
     * @param {Node} node
     * @param {Function} pred - predicate function
     */
    var ancestor = function (node, pred) {
      while (node) {
        if (pred(node)) { return node; }
        if (isEditable(node)) { break; }

        node = node.parentNode;
      }
      return null;
    };

    /**
     * find nearest ancestor only single child blood line and predicate hit
     *
     * @param {Node} node
     * @param {Function} pred - predicate function
     */
    var singleChildAncestor = function (node, pred) {
      node = node.parentNode;

      while (node) {
        if (nodeLength(node) !== 1) { break; }
        if (pred(node)) { return node; }
        if (isEditable(node)) { break; }

        node = node.parentNode;
      }
      return null;
    };

    /**
     * returns new array of ancestor nodes (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [optional] pred - predicate function
     */
    var listAncestor = function (node, pred) {
      pred = pred || func.fail;

      var ancestors = [];
      ancestor(node, function (el) {
        if (!isEditable(el)) {
          ancestors.push(el);
        }

        return pred(el);
      });
      return ancestors;
    };

    /**
     * find farthest ancestor predicate hit
     */
    var lastAncestor = function (node, pred) {
      var ancestors = listAncestor(node);
      return list.last(ancestors.filter(pred));
    };

    /**
     * returns common ancestor node between two nodes.
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     */
    var commonAncestor = function (nodeA, nodeB) {
      var ancestors = listAncestor(nodeA);
      for (var n = nodeB; n; n = n.parentNode) {
        if ($.inArray(n, ancestors) > -1) { return n; }
      }
      return null; // difference document area
    };

    /**
     * listing all previous siblings (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [optional] pred - predicate function
     */
    var listPrev = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; }
        nodes.push(node);
        node = node.previousSibling;
      }
      return nodes;
    };

    /**
     * listing next siblings (until predicate hit).
     *
     * @param {Node} node
     * @param {Function} [pred] - predicate function
     */
    var listNext = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; }
        nodes.push(node);
        node = node.nextSibling;
      }
      return nodes;
    };

    /**
     * listing descendant nodes
     *
     * @param {Node} node
     * @param {Function} [pred] - predicate function
     */
    var listDescendant = function (node, pred) {
      var descendants = [];
      pred = pred || func.ok;

      // start DFS(depth first search) with node
      (function fnWalk(current) {
        if (node !== current && pred(current)) {
          descendants.push(current);
        }
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
          fnWalk(current.childNodes[idx]);
        }
      })(node);

      return descendants;
    };

    /**
     * wrap node with new tag.
     *
     * @param {Node} node
     * @param {Node} tagName of wrapper
     * @return {Node} - wrapper
     */
    var wrap = function (node, wrapperName) {
      var parent = node.parentNode;
      var wrapper = $('<' + wrapperName + '>')[0];

      parent.insertBefore(wrapper, node);
      wrapper.appendChild(node);

      return wrapper;
    };

    /**
     * insert node after preceding
     *
     * @param {Node} node
     * @param {Node} preceding - predicate function
     */
    var insertAfter = function (node, preceding) {
      var next = preceding.nextSibling, parent = preceding.parentNode;
      if (next) {
        parent.insertBefore(node, next);
      } else {
        parent.appendChild(node);
      }
      return node;
    };

    /**
     * append elements.
     *
     * @param {Node} node
     * @param {Collection} aChild
     */
    var appendChildNodes = function (node, aChild) {
      $.each(aChild, function (idx, child) {
        node.appendChild(child);
      });
      return node;
    };

    /**
     * returns whether boundaryPoint is left edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isLeftEdgePoint = function (point) {
      return point.offset === 0;
    };

    /**
     * returns whether boundaryPoint is right edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isRightEdgePoint = function (point) {
      return point.offset === nodeLength(point.node);
    };

    /**
     * returns whether boundaryPoint is edge or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isEdgePoint = function (point) {
      return isLeftEdgePoint(point) || isRightEdgePoint(point);
    };

    /**
     * returns whether node is left edge of ancestor or not.
     *
     * @param {Node} node
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isLeftEdgeOf = function (node, ancestor) {
      while (node && node !== ancestor) {
        if (position(node) !== 0) {
          return false;
        }
        node = node.parentNode;
      }

      return true;
    };

    /**
     * returns whether node is right edge of ancestor or not.
     *
     * @param {Node} node
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isRightEdgeOf = function (node, ancestor) {
      if (!ancestor) {
        return false;
      }
      while (node && node !== ancestor) {
        if (position(node) !== nodeLength(node.parentNode) - 1) {
          return false;
        }
        node = node.parentNode;
      }

      return true;
    };

    /**
     * returns whether point is left edge of ancestor or not.
     * @param {BoundaryPoint} point
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isLeftEdgePointOf = function (point, ancestor) {
      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
    };

    /**
     * returns whether point is right edge of ancestor or not.
     * @param {BoundaryPoint} point
     * @param {Node} ancestor
     * @return {Boolean}
     */
    var isRightEdgePointOf = function (point, ancestor) {
      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
    };

    /**
     * returns offset from parent.
     *
     * @param {Node} node
     */
    var position = function (node) {
      var offset = 0;
      while ((node = node.previousSibling)) {
        offset += 1;
      }
      return offset;
    };

    var hasChildren = function (node) {
      return !!(node && node.childNodes && node.childNodes.length);
    };

    /**
     * returns previous boundaryPoint
     *
     * @param {BoundaryPoint} point
     * @param {Boolean} isSkipInnerOffset
     * @return {BoundaryPoint}
     */
    var prevPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (point.offset === 0) {
        if (isEditable(point.node)) {
          return null;
        }

        node = point.node.parentNode;
        offset = position(point.node);
      } else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset - 1];
        offset = nodeLength(node);
      } else {
        node = point.node;
        offset = isSkipInnerOffset ? 0 : point.offset - 1;
      }

      return {
        node: node,
        offset: offset
      };
    };

    /**
     * returns next boundaryPoint
     *
     * @param {BoundaryPoint} point
     * @param {Boolean} isSkipInnerOffset
     * @return {BoundaryPoint}
     */
    var nextPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (nodeLength(point.node) === point.offset) {
        if (isEditable(point.node)) {
          return null;
        }

        node = point.node.parentNode;
        offset = position(point.node) + 1;
      } else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset];
        offset = 0;
      } else {
        node = point.node;
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
      }

      return {
        node: node,
        offset: offset
      };
    };

    /**
     * returns whether pointA and pointB is same or not.
     *
     * @param {BoundaryPoint} pointA
     * @param {BoundaryPoint} pointB
     * @return {Boolean}
     */
    var isSamePoint = function (pointA, pointB) {
      return pointA.node === pointB.node && pointA.offset === pointB.offset;
    };

    /**
     * returns whether point is visible (can set cursor) or not.
     *
     * @param {BoundaryPoint} point
     * @return {Boolean}
     */
    var isVisiblePoint = function (point) {
      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
        return true;
      }

      var leftNode = point.node.childNodes[point.offset - 1];
      var rightNode = point.node.childNodes[point.offset];
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
        return true;
      }

      return false;
    };

    /**
     * @method prevPointUtil
     *
     * @param {BoundaryPoint} point
     * @param {Function} pred
     * @return {BoundaryPoint}
     */
    var prevPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
        }

        point = prevPoint(point);
      }

      return null;
    };

    /**
     * @method nextPointUntil
     *
     * @param {BoundaryPoint} point
     * @param {Function} pred
     * @return {BoundaryPoint}
     */
    var nextPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
        }

        point = nextPoint(point);
      }

      return null;
    };

    /**
     * returns whether point has character or not.
     *
     * @param {Point} point
     * @return {Boolean}
     */
    var isCharPoint = function (point) {
      if (!isText(point.node)) {
        return false;
      }

      var ch = point.node.nodeValue.charAt(point.offset - 1);
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
    };

    /**
     * @method walkPoint
     *
     * @param {BoundaryPoint} startPoint
     * @param {BoundaryPoint} endPoint
     * @param {Function} handler
     * @param {Boolean} isSkipInnerOffset
     */
    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
      var point = startPoint;

      while (point) {
        handler(point);

        if (isSamePoint(point, endPoint)) {
          break;
        }

        var isSkipOffset = isSkipInnerOffset &&
                           startPoint.node !== point.node &&
                           endPoint.node !== point.node;
        point = nextPoint(point, isSkipOffset);
      }
    };

    /**
     * @method makeOffsetPath
     *
     * return offsetPath(array of offset) from ancestor
     *
     * @param {Node} ancestor - ancestor node
     * @param {Node} node
     */
    var makeOffsetPath = function (ancestor, node) {
      var ancestors = listAncestor(node, func.eq(ancestor));
      return ancestors.map(position).reverse();
    };

    /**
     * @method fromOffsetPath
     *
     * return element from offsetPath(array of offset)
     *
     * @param {Node} ancestor - ancestor node
     * @param {array} offsets - offsetPath
     */
    var fromOffsetPath = function (ancestor, offsets) {
      var current = ancestor;
      for (var i = 0, len = offsets.length; i < len; i++) {
        if (current.childNodes.length <= offsets[i]) {
          current = current.childNodes[current.childNodes.length - 1];
        } else {
          current = current.childNodes[offsets[i]];
        }
      }
      return current;
    };

    /**
     * @method splitNode
     *
     * split element or #text
     *
     * @param {BoundaryPoint} point
     * @param {Object} [options]
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
     * @return {Node} right node of boundaryPoint
     */
    var splitNode = function (point, options) {
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;

      // edge case
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
        if (isLeftEdgePoint(point)) {
          return point.node;
        } else if (isRightEdgePoint(point)) {
          return point.node.nextSibling;
        }
      }

      // split #text
      if (isText(point.node)) {
        return point.node.splitText(point.offset);
      } else {
        var childNode = point.node.childNodes[point.offset];
        var clone = insertAfter(point.node.cloneNode(false), point.node);
        appendChildNodes(clone, listNext(childNode));

        if (!isSkipPaddingBlankHTML) {
          paddingBlankHTML(point.node);
          paddingBlankHTML(clone);
        }

        return clone;
      }
    };

    /**
     * @method splitTree
     *
     * split tree by point
     *
     * @param {Node} root - split root
     * @param {BoundaryPoint} point
     * @param {Object} [options]
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
     * @return {Node} right node of boundaryPoint
     */
    var splitTree = function (root, point, options) {
      // ex) [#text, <span>, <p>]
      var ancestors = listAncestor(point.node, func.eq(root));

      if (!ancestors.length) {
        return null;
      } else if (ancestors.length === 1) {
        return splitNode(point, options);
      }

      return ancestors.reduce(function (node, parent) {
        if (node === point.node) {
          node = splitNode(point, options);
        }

        return splitNode({
          node: parent,
          offset: node ? dom.position(node) : nodeLength(parent)
        }, options);
      });
    };

    /**
     * split point
     *
     * @param {Point} point
     * @param {Boolean} isInline
     * @return {Object}
     */
    var splitPoint = function (point, isInline) {
      // find splitRoot, container
      //  - inline: splitRoot is a child of paragraph
      //  - block: splitRoot is a child of bodyContainer
      var pred = isInline ? isPara : isBodyContainer;
      var ancestors = listAncestor(point.node, pred);
      var topAncestor = list.last(ancestors) || point.node;

      var splitRoot, container;
      if (pred(topAncestor)) {
        splitRoot = ancestors[ancestors.length - 2];
        container = topAncestor;
      } else {
        splitRoot = topAncestor;
        container = splitRoot.parentNode;
      }

      // if splitRoot is exists, split with splitTree
      var pivot = splitRoot && splitTree(splitRoot, point, {
        isSkipPaddingBlankHTML: isInline,
        isNotSplitEdgePoint: isInline
      });

      // if container is point.node, find pivot with point.offset
      if (!pivot && container === point.node) {
        pivot = point.node.childNodes[point.offset];
      }

      return {
        rightNode: pivot,
        container: container
      };
    };

    var create = function (nodeName) {
      return document.createElement(nodeName);
    };

    var createText = function (text) {
      return document.createTextNode(text);
    };

    /**
     * @method remove
     *
     * remove node, (isRemoveChild: remove child or not)
     *
     * @param {Node} node
     * @param {Boolean} isRemoveChild
     */
    var remove = function (node, isRemoveChild) {
      if (!node || !node.parentNode) { return; }
      if (node.removeNode) { return node.removeNode(isRemoveChild); }

      var parent = node.parentNode;
      if (!isRemoveChild) {
        var nodes = [];
        var i, len;
        for (i = 0, len = node.childNodes.length; i < len; i++) {
          nodes.push(node.childNodes[i]);
        }

        for (i = 0, len = nodes.length; i < len; i++) {
          parent.insertBefore(nodes[i], node);
        }
      }

      parent.removeChild(node);
    };

    /**
     * @method removeWhile
     *
     * @param {Node} node
     * @param {Function} pred
     */
    var removeWhile = function (node, pred) {
      while (node) {
        if (isEditable(node) || !pred(node)) {
          break;
        }

        var parent = node.parentNode;
        remove(node);
        node = parent;
      }
    };

    /**
     * @method replace
     *
     * replace node with provided nodeName
     *
     * @param {Node} node
     * @param {String} nodeName
     * @return {Node} - new node
     */
    var replace = function (node, nodeName) {
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
        return node;
      }

      var newNode = create(nodeName);

      if (node.style.cssText) {
        newNode.style.cssText = node.style.cssText;
      }

      appendChildNodes(newNode, list.from(node.childNodes));
      insertAfter(newNode, node);
      remove(node);

      return newNode;
    };

    var isTextarea = makePredByNodeName('TEXTAREA');

    /**
     * @param {jQuery} $node
     * @param {Boolean} [stripLinebreaks] - default: false
     */
    var value = function ($node, stripLinebreaks) {
      var val = isTextarea($node[0]) ? $node.val() : $node.html();
      if (stripLinebreaks) {
        return val.replace(/[\n\r]/g, '');
      }
      return val;
    };

    /**
     * @method html
     *
     * get the HTML contents of node
     *
     * @param {jQuery} $node
     * @param {Boolean} [isNewlineOnBlock]
     */
    var html = function ($node, isNewlineOnBlock) {
      var markup = value($node);

      if (isNewlineOnBlock) {
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
        markup = markup.replace(regexTag, function (match, endSlash, name) {
          name = name.toUpperCase();
          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                                       !!endSlash;
          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
        });
        markup = $.trim(markup);
      }

      return markup;
    };

    var posFromPlaceholder = function (placeholder) {
      var $placeholder = $(placeholder);
      var pos = $placeholder.offset();
      var height = $placeholder.outerHeight(true); // include margin

      return {
        left: pos.left,
        top: pos.top + height
      };
    };

    var attachEvents = function ($node, events) {
      Object.keys(events).forEach(function (key) {
        $node.on(key, events[key]);
      });
    };

    var detachEvents = function ($node, events) {
      Object.keys(events).forEach(function (key) {
        $node.off(key, events[key]);
      });
    };

    /**
     * @method isCustomStyleTag
     *
     * assert if a node contains a "note-styletag" class,
     * which implies that's a custom-made style tag node
     *
     * @param {Node} an HTML DOM node
     */
    var isCustomStyleTag = function (node) {
      return node && !dom.isText(node) && list.contains(node.classList, 'note-styletag');
    };

    return {
      /** @property {String} NBSP_CHAR */
      NBSP_CHAR: NBSP_CHAR,
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
      /** @property {String} blank */
      blank: blankHTML,
      /** @property {String} emptyPara */
      emptyPara: '<p>' + blankHTML + '</p>',
      makePredByNodeName: makePredByNodeName,
      isEditable: isEditable,
      isControlSizing: isControlSizing,
      isText: isText,
      isElement: isElement,
      isVoid: isVoid,
      isPara: isPara,
      isPurePara: isPurePara,
      isHeading: isHeading,
      isInline: isInline,
      isBlock: func.not(isInline),
      isBodyInline: isBodyInline,
      isBody: isBody,
      isParaInline: isParaInline,
      isPre: isPre,
      isList: isList,
      isTable: isTable,
      isData: isData,
      isCell: isCell,
      isBlockquote: isBlockquote,
      isBodyContainer: isBodyContainer,
      isAnchor: isAnchor,
      isDiv: makePredByNodeName('DIV'),
      isLi: isLi,
      isBR: makePredByNodeName('BR'),
      isSpan: makePredByNodeName('SPAN'),
      isB: makePredByNodeName('B'),
      isU: makePredByNodeName('U'),
      isS: makePredByNodeName('S'),
      isI: makePredByNodeName('I'),
      isImg: makePredByNodeName('IMG'),
      isTextarea: isTextarea,
      isEmpty: isEmpty,
      isEmptyAnchor: func.and(isAnchor, isEmpty),
      isClosestSibling: isClosestSibling,
      withClosestSiblings: withClosestSiblings,
      nodeLength: nodeLength,
      isLeftEdgePoint: isLeftEdgePoint,
      isRightEdgePoint: isRightEdgePoint,
      isEdgePoint: isEdgePoint,
      isLeftEdgeOf: isLeftEdgeOf,
      isRightEdgeOf: isRightEdgeOf,
      isLeftEdgePointOf: isLeftEdgePointOf,
      isRightEdgePointOf: isRightEdgePointOf,
      prevPoint: prevPoint,
      nextPoint: nextPoint,
      isSamePoint: isSamePoint,
      isVisiblePoint: isVisiblePoint,
      prevPointUntil: prevPointUntil,
      nextPointUntil: nextPointUntil,
      isCharPoint: isCharPoint,
      walkPoint: walkPoint,
      ancestor: ancestor,
      singleChildAncestor: singleChildAncestor,
      listAncestor: listAncestor,
      lastAncestor: lastAncestor,
      listNext: listNext,
      listPrev: listPrev,
      listDescendant: listDescendant,
      commonAncestor: commonAncestor,
      wrap: wrap,
      insertAfter: insertAfter,
      appendChildNodes: appendChildNodes,
      position: position,
      hasChildren: hasChildren,
      makeOffsetPath: makeOffsetPath,
      fromOffsetPath: fromOffsetPath,
      splitTree: splitTree,
      splitPoint: splitPoint,
      create: create,
      createText: createText,
      remove: remove,
      removeWhile: removeWhile,
      replace: replace,
      html: html,
      value: value,
      posFromPlaceholder: posFromPlaceholder,
      attachEvents: attachEvents,
      detachEvents: detachEvents,
      isCustomStyleTag: isCustomStyleTag
    };
  })();

  /**
   * @param {jQuery} $note
   * @param {Object} options
   * @return {Context}
   */
  var Context = function ($note, options) {
    var self = this;

    var ui = $.summernote.ui;
    this.memos = {};
    this.modules = {};
    this.layoutInfo = {};
    this.options = options;

    /**
     * create layout and initialize modules and other resources
     */
    this.initialize = function () {
      this.layoutInfo = ui.createLayout($note, options);
      this._initialize();
      $note.hide();
      return this;
    };

    /**
     * destroy modules and other resources and remove layout
     */
    this.destroy = function () {
      this._destroy();
      $note.removeData('summernote');
      ui.removeLayout($note, this.layoutInfo);
    };

    /**
     * destory modules and other resources and initialize it again
     */
    this.reset = function () {
      var disabled = self.isDisabled();
      this.code(dom.emptyPara);
      this._destroy();
      this._initialize();

      if (disabled) {
        self.disable();
      }
    };

    this._initialize = function () {
      // add optional buttons
      var buttons = $.extend({}, this.options.buttons);
      Object.keys(buttons).forEach(function (key) {
        self.memo('button.' + key, buttons[key]);
      });

      var modules = $.extend({}, this.options.modules, $.summernote.plugins || {});

      // add and initialize modules
      Object.keys(modules).forEach(function (key) {
        self.module(key, modules[key], true);
      });

      Object.keys(this.modules).forEach(function (key) {
        self.initializeModule(key);
      });
    };

    this._destroy = function () {
      // destroy modules with reversed order
      Object.keys(this.modules).reverse().forEach(function (key) {
        self.removeModule(key);
      });

      Object.keys(this.memos).forEach(function (key) {
        self.removeMemo(key);
      });
      // trigger custom onDestroy callback
      this.triggerEvent('destroy', this);
    };

    this.code = function (html) {
      var isActivated = this.invoke('codeview.isActivated');

      if (html === undefined) {
        this.invoke('codeview.sync');
        return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
      } else {
        if (isActivated) {
          this.layoutInfo.codable.val(html);
        } else {
          this.layoutInfo.editable.html(html);
        }
        $note.val(html);
        this.triggerEvent('change', html);
      }
    };

    this.isDisabled = function () {
      return this.layoutInfo.editable.attr('contenteditable') === 'false';
    };

    this.enable = function () {
      this.layoutInfo.editable.attr('contenteditable', true);
      this.invoke('toolbar.activate', true);
      this.triggerEvent('disable', false);
    };

    this.disable = function () {
      // close codeview if codeview is opend
      if (this.invoke('codeview.isActivated')) {
        this.invoke('codeview.deactivate');
      }
      this.layoutInfo.editable.attr('contenteditable', false);
      this.invoke('toolbar.deactivate', true);

      this.triggerEvent('disable', true);
    };

    this.triggerEvent = function () {
      var namespace = list.head(arguments);
      var args = list.tail(list.from(arguments));

      var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
      if (callback) {
        callback.apply($note[0], args);
      }
      $note.trigger('summernote.' + namespace, args);
    };

    this.initializeModule = function (key) {
      var module = this.modules[key];
      module.shouldInitialize = module.shouldInitialize || func.ok;
      if (!module.shouldInitialize()) {
        return;
      }

      // initialize module
      if (module.initialize) {
        module.initialize();
      }

      // attach events
      if (module.events) {
        dom.attachEvents($note, module.events);
      }
    };

    this.module = function (key, ModuleClass, withoutIntialize) {
      if (arguments.length === 1) {
        return this.modules[key];
      }

      this.modules[key] = new ModuleClass(this);

      if (!withoutIntialize) {
        this.initializeModule(key);
      }
    };

    this.removeModule = function (key) {
      var module = this.modules[key];
      if (module.shouldInitialize()) {
        if (module.events) {
          dom.detachEvents($note, module.events);
        }

        if (module.destroy) {
          module.destroy();
        }
      }

      delete this.modules[key];
    };

    this.memo = function (key, obj) {
      if (arguments.length === 1) {
        return this.memos[key];
      }
      this.memos[key] = obj;
    };

    this.removeMemo = function (key) {
      if (this.memos[key] && this.memos[key].destroy) {
        this.memos[key].destroy();
      }

      delete this.memos[key];
    };

    /**
     *Some buttons need to change their visual style immediately once they get pressed
     */
    this.createInvokeHandlerAndUpdateState = function (namespace, value) {
      return function (event) {
        self.createInvokeHandler(namespace, value)(event);
        self.invoke('buttons.updateCurrentStyle');
      };
    };

    this.createInvokeHandler = function (namespace, value) {
      return function (event) {
        event.preventDefault();
        var $target = $(event.target);
        self.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
      };
    };

    this.invoke = function () {
      var namespace = list.head(arguments);
      var args = list.tail(list.from(arguments));

      var splits = namespace.split('.');
      var hasSeparator = splits.length > 1;
      var moduleName = hasSeparator && list.head(splits);
      var methodName = hasSeparator ? list.last(splits) : list.head(splits);

      var module = this.modules[moduleName || 'editor'];
      if (!moduleName && this[methodName]) {
        return this[methodName].apply(this, args);
      } else if (module && module[methodName] && module.shouldInitialize()) {
        return module[methodName].apply(module, args);
      }
    };

    return this.initialize();
  };

  $.fn.extend({
    /**
     * Summernote API
     *
     * @param {Object|String}
     * @return {this}
     */
    summernote: function () {
      var type = $.type(list.head(arguments));
      var isExternalAPICalled = type === 'string';
      var hasInitOptions = type === 'object';

      var options = hasInitOptions ? list.head(arguments) : {};

      options = $.extend({}, $.summernote.options, options);

      // Update options
      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);
      options.icons = $.extend(true, {}, $.summernote.options.icons, options.icons);
      options.tooltip = options.tooltip === 'auto' ? !agent.isSupportTouch : options.tooltip;

      this.each(function (idx, note) {
        var $note = $(note);
        if (!$note.data('summernote')) {
          var context = new Context($note, options);
          $note.data('summernote', context);
          $note.data('summernote').triggerEvent('init', context.layoutInfo);
        }
      });

      var $note = this.first();
      if ($note.length) {
        var context = $note.data('summernote');
        if (isExternalAPICalled) {
          return context.invoke.apply(context, list.from(arguments));
        } else if (options.focus) {
          context.invoke('editor.focus');
        }
      }

      return this;
    }
  });


  var Renderer = function (markup, children, options, callback) {
    this.render = function ($parent) {
      var $node = $(markup);

      if (options && options.contents) {
        $node.html(options.contents);
      }

      if (options && options.className) {
        $node.addClass(options.className);
      }

      if (options && options.data) {
        $.each(options.data, function (k, v) {
          $node.attr('data-' + k, v);
        });
      }

      if (options && options.click) {
        $node.on('click', options.click);
      }

      if (children) {
        var $container = $node.find('.note-children-container');
        children.forEach(function (child) {
          child.render($container.length ? $container : $node);
        });
      }

      if (callback) {
        callback($node, options);
      }

      if (options && options.callback) {
        options.callback($node);
      }

      if ($parent) {
        $parent.append($node);
      }

      return $node;
    };
  };

  var renderer = {
    create: function (markup, callback) {
      return function () {
        var children = $.isArray(arguments[0]) ? arguments[0] : [];
        var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
        if (options && options.children) {
          children = options.children;
        }
        return new Renderer(markup, children, options, callback);
      };
    }
  };

  var editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>');
  var toolbar = renderer.create('<div class="note-toolbar panel-heading"/>');
  var editingArea = renderer.create('<div class="note-editing-area"/>');
  var codable = renderer.create('<textarea class="note-codable"/>');
  var editable = renderer.create('<div class="note-editable panel-body" contentEditable="true"/>');
  var statusbar = renderer.create([
    '<div class="note-statusbar">',
    '  <div class="note-resizebar">',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '    <div class="note-icon-bar"/>',
    '  </div>',
    '</div>'
  ].join(''));

  var airEditor = renderer.create('<div class="note-editor"/>');
  var airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>');

  var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');

  var dropdown = renderer.create('<div class="dropdown-menu">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
      var value = (typeof item === 'string') ? item : (item.value || '');
      var content = options.template ? options.template(item) : item;
      var option = (typeof item === 'object') ? item.option : undefined;

      var dataValue = 'data-value="' + value + '"';
      var dataOption = (option !== undefined) ? ' data-option="' + option + '"' : '';
      return '<li><a rel="nofollow" target="_blank" href="#" ' + (dataValue + dataOption) + '>' + content + '</a></li>';
    }).join('') : options.items;

    $node.html(markup);
  });

  var dropdownCheck = renderer.create('<div class="dropdown-menu note-check">', function ($node, options) {
    var markup = $.isArray(options.items) ? options.items.map(function (item) {
      var value = (typeof item === 'string') ? item : (item.value || '');
      var content = options.template ? options.template(item) : item;
      return '<li><a rel="nofollow" target="_blank" href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a></li>';
    }).join('') : options.items;
    $node.html(markup);
  });

  var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
    var contents = [];
    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
      var eventName = options.eventName;
      var colors = options.colors[row];
      var buttons = [];
      for (var col = 0, colSize = colors.length; col < colSize; col++) {
        var color = colors[col];
        buttons.push([
          '<button type="button" class="note-color-btn"',
          'style="background-color:', color, '" ',
          'data-event="', eventName, '" ',
          'data-value="', color, '" ',
          'title="', color, '" ',
          'data-toggle="button" tabindex="-1"></button>'
        ].join(''));
      }
      contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
    }
    $node.html(contents.join(''));

    $node.find('.note-color-btn').tooltip({
      container: 'body',
      trigger: 'hover',
      placement: 'bottom'
    });
  });

  var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function ($node, options) {
    if (options.fade) {
      $node.addClass('fade');
    }
    $node.html([
      '<div class="modal-dialog">',
      '  <div class="modal-content">',
      (options.title ?
      '    <div class="modal-header">' +
      '      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
      '      <h4 class="modal-title">' + options.title + '</h4>' +
      '    </div>' : ''
      ),
      '    <div class="modal-body">' + options.body + '</div>',
      (options.footer ?
      '    <div class="modal-footer">' + options.footer + '</div>' : ''
      ),
      '  </div>',
      '</div>'
    ].join(''));
  });

  var popover = renderer.create([
    '<div class="note-popover popover in">',
    '  <div class="arrow"/>',
    '  <div class="popover-content note-children-container"/>',
    '</div>'
  ].join(''), function ($node, options) {
    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';

    $node.addClass(direction);

    if (options.hideArrow) {
      $node.find('.arrow').hide();
    }
  });

  var icon = function (iconClassName, tagName) {
    tagName = tagName || 'i';
    return '<' + tagName + ' class="' + iconClassName + '"/>';
  };

  var ui = {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    dropdown: dropdown,
    dropdownCheck: dropdownCheck,
    palette: palette,
    dialog: dialog,
    popover: popover,
    icon: icon,
    options: {},

    button: function ($node, options) {
      return renderer.create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function ($node, options) {
        if (options && options.tooltip && self.options.tooltip) {
          $node.attr({
            title: options.tooltip
          }).tooltip({
            container: 'body',
            trigger: 'hover',
            placement: 'bottom'
          });
        }
      })($node, options);
    },

    toggleBtn: function ($btn, isEnable) {
      $btn.toggleClass('disabled', !isEnable);
      $btn.attr('disabled', !isEnable);
    },

    toggleBtnActive: function ($btn, isActive) {
      $btn.toggleClass('active', isActive);
    },

    onDialogShown: function ($dialog, handler) {
      $dialog.one('shown.bs.modal', handler);
    },

    onDialogHidden: function ($dialog, handler) {
      $dialog.one('hidden.bs.modal', handler);
    },

    showDialog: function ($dialog) {
      $dialog.modal('show');
    },

    hideDialog: function ($dialog) {
      $dialog.modal('hide');
    },

    createLayout: function ($note, options) {
      self.options = options;
      var $editor = (options.airMode ? ui.airEditor([
        ui.editingArea([
          ui.airEditable()
        ])
      ]) : ui.editor([
        ui.toolbar(),
        ui.editingArea([
          ui.codable(),
          ui.editable()
        ]),
        ui.statusbar()
      ])).render();

      $editor.insertAfter($note);

      return {
        note: $note,
        editor: $editor,
        toolbar: $editor.find('.note-toolbar'),
        editingArea: $editor.find('.note-editing-area'),
        editable: $editor.find('.note-editable'),
        codable: $editor.find('.note-codable'),
        statusbar: $editor.find('.note-statusbar')
      };
    },

    removeLayout: function ($note, layoutInfo) {
      $note.html(layoutInfo.editable.html());
      layoutInfo.editor.remove();
      $note.show();
    }
  };

  $.summernote = $.summernote || {
    lang: {}
  };

  $.extend($.summernote.lang, {
    'en-US': {
      font: {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        clear: 'Remove Font Style',
        height: 'Line Height',
        name: 'Font Family',
        strikethrough: 'Strikethrough',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Font Size'
      },
      image: {
        image: 'Picture',
        insert: 'Insert Image',
        resizeFull: 'Resize Full',
        resizeHalf: 'Resize Half',
        resizeQuarter: 'Resize Quarter',
        floatLeft: 'Float Left',
        floatRight: 'Float Right',
        floatNone: 'Float None',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Drag image or text here',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Select from files',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Image URL',
        remove: 'Remove Image'
      },
      video: {
        video: 'Video',
        videoLink: 'Video Link',
        insert: 'Insert Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Insert Link',
        unlink: 'Unlink',
        edit: 'Edit',
        textToDisplay: 'Text to display',
        url: 'To what URL should this link go?',
        openInNewWindow: 'Open in new window'
      },
      table: {
        table: 'Table',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Insert Horizontal Rule'
      },
      style: {
        style: 'Style',
        p: 'Normal',
        // blockquote: 'Quote',
        // pre: 'Code',
        h1: 'H1',
        h2: 'H2',
        // h3: 'Header 3',
        h4: 'Header 4',
        // h5: 'Header 5',
        // h6: 'Header 6'
      },
      lists: {
        unordered: 'Unordered list',
        ordered: 'Ordered list'
      },
      options: {
        help: 'Help',
        fullscreen: 'Full Screen',
        codeview: 'Code View'
      },
      paragraph: {
        paragraph: 'Paragraph',
        outdent: 'Outdent',
        indent: 'Indent',
        left: 'Align left',
        center: 'Align center',
        right: 'Align right',
        justify: 'Justify full'
      },
      color: {
        recent: 'Recent Color',
        more: 'More Color',
        background: 'Background Color',
        foreground: 'Foreground Color',
        transparent: 'Transparent',
        setTransparent: 'Set transparent',
        reset: 'Reset',
        resetToDefault: 'Reset to default'
      },
      shortcut: {
        shortcuts: 'Keyboard shortcuts',
        close: 'Close',
        textFormatting: 'Text formatting',
        action: 'Action',
        paragraphFormatting: 'Paragraph formatting',
        documentStyle: 'Document Style',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        // 'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        // 'formatH5': 'Change current block\'s format as H5',
        // 'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'Undo',
        redo: 'Redo'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });


  /**
   * @class core.key
   *
   * Object for keycodes.
   *
   * @singleton
   * @alternateClassName key
   */
  var key = (function () {
    var keyMap = {
      'BACKSPACE': 8,
      'TAB': 9,
      'ENTER': 13,
      'SPACE': 32,

      // Arrow
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40,

      // Number: 0-9
      'NUM0': 48,
      'NUM1': 49,
      'NUM2': 50,
      'NUM3': 51,
      'NUM4': 52,
      'NUM5': 53,
      'NUM6': 54,
      'NUM7': 55,
      'NUM8': 56,

      // Alphabet: a-z
      'B': 66,
      'E': 69,
      'I': 73,
      'J': 74,
      'K': 75,
      'L': 76,
      'R': 82,
      'S': 83,
      'U': 85,
      'V': 86,
      'Y': 89,
      'Z': 90,

      'SLASH': 191,
      'LEFTBRACKET': 219,
      'BACKSLASH': 220,
      'RIGHTBRACKET': 221
    };

    return {
      /**
       * @method isEdit
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isEdit: function (keyCode) {
        return list.contains([
          keyMap.BACKSPACE,
          keyMap.TAB,
          keyMap.ENTER,
          keyMap.SPACE
        ], keyCode);
      },
      /**
       * @method isMove
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isMove: function (keyCode) {
        return list.contains([
          keyMap.LEFT,
          keyMap.UP,
          keyMap.RIGHT,
          keyMap.DOWN
        ], keyCode);
      },
      /**
       * @property {Object} nameFromCode
       * @property {String} nameFromCode.8 "BACKSPACE"
       */
      nameFromCode: func.invertObject(keyMap),
      code: keyMap
    };
  })();

  var range = (function () {

    /**
     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
     *
     * @param {TextRange} textRange
     * @param {Boolean} isStart
     * @return {BoundaryPoint}
     *
     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
     */
    var textRangeToPoint = function (textRange, isStart) {
      var container = textRange.parentElement(), offset;

      var tester = document.body.createTextRange(), prevContainer;
      var childNodes = list.from(container.childNodes);
      for (offset = 0; offset < childNodes.length; offset++) {
        if (dom.isText(childNodes[offset])) {
          continue;
        }
        tester.moveToElementText(childNodes[offset]);
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
          break;
        }
        prevContainer = childNodes[offset];
      }

      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
        var textRangeStart = document.body.createTextRange(), curTextNode = null;
        textRangeStart.moveToElementText(prevContainer || container);
        textRangeStart.collapse(!prevContainer);
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;

        var pointTester = textRange.duplicate();
        pointTester.setEndPoint('StartToStart', textRangeStart);
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;

        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
        }

        /* jshint ignore:start */
        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
        /* jshint ignore:end */

        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
            textCount === curTextNode.nodeValue.length) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
        }

        container = curTextNode;
        offset = textCount;
      }

      return {
        cont: container,
        offset: offset
      };
    };

    /**
     * return TextRange from boundary point (inspired by google closure-library)
     * @param {BoundaryPoint} point
     * @return {TextRange}
     */
    var pointToTextRange = function (point) {
      var textRangeInfo = function (container, offset) {
        var node, isCollapseToStart;

        if (dom.isText(container)) {
          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
          var prevContainer = list.last(prevTextNodes).previousSibling;
          node =  prevContainer || container.parentNode;
          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
          isCollapseToStart = !prevContainer;
        } else {
          node = container.childNodes[offset] || container;
          if (dom.isText(node)) {
            return textRangeInfo(node, 0);
          }

          offset = 0;
          isCollapseToStart = false;
        }

        return {
          node: node,
          collapseToStart: isCollapseToStart,
          offset: offset
        };
      };

      var textRange = document.body.createTextRange();
      var info = textRangeInfo(point.node, point.offset);

      textRange.moveToElementText(info.node);
      textRange.collapse(info.collapseToStart);
      textRange.moveStart('character', info.offset);
      return textRange;
    };

    /**
     * Wrapped Range
     *
     * @constructor
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     */
    var WrappedRange = function (sc, so, ec, eo) {
      this.sc = sc;
      this.so = so;
      this.ec = ec;
      this.eo = eo;

      // nativeRange: get nativeRange from sc, so, ec, eo
      var nativeRange = function () {
        if (agent.isW3CRangeSupport) {
          var w3cRange = document.createRange();
          w3cRange.setStart(sc, so);
          w3cRange.setEnd(ec, eo);

          return w3cRange;
        } else {
          var textRange = pointToTextRange({
            node: sc,
            offset: so
          });

          textRange.setEndPoint('EndToEnd', pointToTextRange({
            node: ec,
            offset: eo
          }));

          return textRange;
        }
      };

      this.getPoints = function () {
        return {
          sc: sc,
          so: so,
          ec: ec,
          eo: eo
        };
      };

      this.getStartPoint = function () {
        return {
          node: sc,
          offset: so
        };
      };

      this.getEndPoint = function () {
        return {
          node: ec,
          offset: eo
        };
      };

      /**
       * select update visible range
       */
      this.select = function () {
        var nativeRng = nativeRange();
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (selection.rangeCount > 0) {
            selection.removeAllRanges();
          }
          selection.addRange(nativeRng);
        } else {
          nativeRng.select();
        }

        return this;
      };

      /**
       * Moves the scrollbar to start container(sc) of current range
       *
       * @return {WrappedRange}
       */
      this.scrollIntoView = function (container) {
        var height = $(container).height();
        if (container.scrollTop + height < this.sc.offsetTop) {
          container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
        }

        return this;
      };

      /**
       * @return {WrappedRange}
       */
      this.normalize = function () {

        /**
         * @param {BoundaryPoint} point
         * @param {Boolean} isLeftToRight
         * @return {BoundaryPoint}
         */
        var getVisiblePoint = function (point, isLeftToRight) {
          if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
              (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
              (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
              (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
            return point;
          }

          // point on block's edge
          var block = dom.ancestor(point.node, dom.isBlock);
          if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
              ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {

            // returns point already on visible point
            if (dom.isVisiblePoint(point)) {
              return point;
            }
            // reverse direction
            isLeftToRight = !isLeftToRight;
          }

          var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) :
                                          dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
          return nextPoint || point;
        };

        var endPoint = getVisiblePoint(this.getEndPoint(), false);
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
      };

      /**
       * returns matched nodes on range
       *
       * @param {Function} [pred] - predicate function
       * @param {Object} [options]
       * @param {Boolean} [options.includeAncestor]
       * @param {Boolean} [options.fullyContains]
       * @return {Node[]}
       */
      this.nodes = function (pred, options) {
        pred = pred || func.ok;

        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;

        // TODO compare points and sort
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();

        var nodes = [];
        var leftEdgeNodes = [];

        dom.walkPoint(startPoint, endPoint, function (point) {
          if (dom.isEditable(point.node)) {
            return;
          }

          var node;
          if (fullyContains) {
            if (dom.isLeftEdgePoint(point)) {
              leftEdgeNodes.push(point.node);
            }
            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
              node = point.node;
            }
          } else if (includeAncestor) {
            node = dom.ancestor(point.node, pred);
          } else {
            node = point.node;
          }

          if (node && pred(node)) {
            nodes.push(node);
          }
        }, true);

        return list.unique(nodes);
      };

      /**
       * returns commonAncestor of range
       * @return {Element} - commonAncestor
       */
      this.commonAncestor = function () {
        return dom.commonAncestor(sc, ec);
      };

      /**
       * returns expanded range by pred
       *
       * @param {Function} pred - predicate function
       * @return {WrappedRange}
       */
      this.expand = function (pred) {
        var startAncestor = dom.ancestor(sc, pred);
        var endAncestor = dom.ancestor(ec, pred);

        if (!startAncestor && !endAncestor) {
          return new WrappedRange(sc, so, ec, eo);
        }

        var boundaryPoints = this.getPoints();

        if (startAncestor) {
          boundaryPoints.sc = startAncestor;
          boundaryPoints.so = 0;
        }

        if (endAncestor) {
          boundaryPoints.ec = endAncestor;
          boundaryPoints.eo = dom.nodeLength(endAncestor);
        }

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
      };

      /**
       * @param {Boolean} isCollapseToStart
       * @return {WrappedRange}
       */
      this.collapse = function (isCollapseToStart) {
        if (isCollapseToStart) {
          return new WrappedRange(sc, so, sc, so);
        } else {
          return new WrappedRange(ec, eo, ec, eo);
        }
      };

      /**
       * splitText on range
       */
      this.splitText = function () {
        var isSameContainer = sc === ec;
        var boundaryPoints = this.getPoints();

        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
          ec.splitText(eo);
        }

        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
          boundaryPoints.sc = sc.splitText(so);
          boundaryPoints.so = 0;

          if (isSameContainer) {
            boundaryPoints.ec = boundaryPoints.sc;
            boundaryPoints.eo = eo - so;
          }
        }

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
      };

      /**
       * delete contents on range
       * @return {WrappedRange}
       */
      this.deleteContents = function () {
        if (this.isCollapsed()) {
          return this;
        }

        var rng = this.splitText();
        var nodes = rng.nodes(null, {
          fullyContains: true
        });

        // find new cursor point
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
          return !list.contains(nodes, point.node);
        });

        var emptyParents = [];
        $.each(nodes, function (idx, node) {
          // find empty parents
          var parent = node.parentNode;
          if (point.node !== parent && dom.nodeLength(parent) === 1) {
            emptyParents.push(parent);
          }
          dom.remove(node, false);
        });

        // remove empty parents
        $.each(emptyParents, function (idx, node) {
          dom.remove(node, false);
        });

        return new WrappedRange(
          point.node,
          point.offset,
          point.node,
          point.offset
        ).normalize();
      };

      /**
       * makeIsOn: return isOn(pred) function
       */
      var makeIsOn = function (pred) {
        return function () {
          var ancestor = dom.ancestor(sc, pred);
          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
        };
      };

      // isOnEditable: judge whether range is on editable or not
      this.isOnEditable = makeIsOn(dom.isEditable);
      // isOnList: judge whether range is on list node or not
      this.isOnList = makeIsOn(dom.isList);
      // isOnAnchor: judge whether range is on anchor node or not
      this.isOnAnchor = makeIsOn(dom.isAnchor);
      // isOnCell: judge whether range is on cell node or not
      this.isOnCell = makeIsOn(dom.isCell);
      // isOnData: judge whether range is on data node or not
      this.isOnData = makeIsOn(dom.isData);

      /**
       * @param {Function} pred
       * @return {Boolean}
       */
      this.isLeftEdgeOf = function (pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
          return false;
        }

        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
      };

      /**
       * returns whether range was collapsed or not
       */
      this.isCollapsed = function () {
        return sc === ec && so === eo;
      };

      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange}
       */
      this.wrapBodyInlineWithPara = function () {
        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
          sc.innerHTML = dom.emptyPara;
          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);
        }

        /**
         * [workaround] firefox often create range on not visible point. so normalize here.
         *  - firefox: |<p>text</p>|
         *  - chrome: <p>|text|</p>
         */
        var rng = this.normalize();
        if (dom.isParaInline(sc) || dom.isPara(sc)) {
          return rng;
        }

        // find inline top ancestor
        var topAncestor;
        if (dom.isInline(rng.sc)) {
          var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
          topAncestor = list.last(ancestors);
          if (!dom.isInline(topAncestor)) {
            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
          }
        } else {
          topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
        }

        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

        // wrap with paragraph
        if (inlineSiblings.length) {
          var para = dom.wrap(list.head(inlineSiblings), 'p');
          dom.appendChildNodes(para, list.tail(inlineSiblings));
        }

        return this.normalize();
      };

      /**
       * insert node at current cursor
       *
       * @param {Node} node
       * @return {Node}
       */
      this.insertNode = function (node) {
        var rng = this.wrapBodyInlineWithPara().deleteContents();
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

        if (info.rightNode) {
          info.rightNode.parentNode.insertBefore(node, info.rightNode);
        } else {
          info.container.appendChild(node);
        }

        return node;
      };

      /**
       * insert html at current cursor
       */
      this.pasteHTML = function (markup) {
        var contentsContainer = $('<div></div>').html(markup)[0];
        var childNodes = list.from(contentsContainer.childNodes);

        var rng = this.wrapBodyInlineWithPara().deleteContents();

        return childNodes.reverse().map(function (childNode) {
          return rng.insertNode(childNode);
        }).reverse();
      };

      /**
       * returns text in range
       *
       * @return {String}
       */
      this.toString = function () {
        var nativeRng = nativeRange();
        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
      };

      /**
       * returns range for word before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
      this.getWordRange = function (findAfter) {
        var endPoint = this.getEndPoint();

        if (!dom.isCharPoint(endPoint)) {
          return this;
        }

        var startPoint = dom.prevPointUntil(endPoint, function (point) {
          return !dom.isCharPoint(point);
        });

        if (findAfter) {
          endPoint = dom.nextPointUntil(endPoint, function (point) {
            return !dom.isCharPoint(point);
          });
        }

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
      };

      /**
       * create offsetPath bookmark
       *
       * @param {Node} editable
       */
      this.bookmark = function (editable) {
        return {
          s: {
            path: dom.makeOffsetPath(editable, sc),
            offset: so
          },
          e: {
            path: dom.makeOffsetPath(editable, ec),
            offset: eo
          }
        };
      };

      /**
       * create offsetPath bookmark base on paragraph
       *
       * @param {Node[]} paras
       */
      this.paraBookmark = function (paras) {
        return {
          s: {
            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),
            offset: so
          },
          e: {
            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),
            offset: eo
          }
        };
      };

      /**
       * getClientRects
       * @return {Rect[]}
       */
      this.getClientRects = function () {
        var nativeRng = nativeRange();
        return nativeRng.getClientRects();
      };
    };

  /**
   * @class core.range
   *
   * Data structure
   *  * BoundaryPoint: a point of dom tree
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
   *
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
   *
   * @singleton
   * @alternateClassName range
   */
    return {
      /**
       * create Range Object From arguments or Browser Selection
       *
       * @param {Node} sc - start container
       * @param {Number} so - start offset
       * @param {Node} ec - end container
       * @param {Number} eo - end offset
       * @return {WrappedRange}
       */
      create: function (sc, so, ec, eo) {
        if (arguments.length === 4) {
          return new WrappedRange(sc, so, ec, eo);
        } else if (arguments.length === 2) { //collapsed
          ec = sc;
          eo = so;
          return new WrappedRange(sc, so, ec, eo);
        } else {
          var wrappedRange = this.createFromSelection();
          if (!wrappedRange && arguments.length === 1) {
            wrappedRange = this.createFromNode(arguments[0]);
            return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
          }
          return wrappedRange;
        }
      },

      createFromSelection: function () {
        var sc, so, ec, eo;
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (!selection || selection.rangeCount === 0) {
            return null;
          } else if (dom.isBody(selection.anchorNode)) {
            // Firefox: returns entire body as range on initialization.
            // We won't never need it.
            return null;
          }

          var nativeRng = selection.getRangeAt(0);
          sc = nativeRng.startContainer;
          so = nativeRng.startOffset;
          ec = nativeRng.endContainer;
          eo = nativeRng.endOffset;
        } else { // IE8: TextRange
          var textRange = document.selection.createRange();
          var textRangeEnd = textRange.duplicate();
          textRangeEnd.collapse(false);
          var textRangeStart = textRange;
          textRangeStart.collapse(true);

          var startPoint = textRangeToPoint(textRangeStart, true),
          endPoint = textRangeToPoint(textRangeEnd, false);

          // same visible point case: range was collapsed.
          if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
              dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
              endPoint.node.nextSibling === startPoint.node) {
            startPoint = endPoint;
          }

          sc = startPoint.cont;
          so = startPoint.offset;
          ec = endPoint.cont;
          eo = endPoint.offset;
        }

        return new WrappedRange(sc, so, ec, eo);
      },

      /**
       * @method
       *
       * create WrappedRange from node
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNode: function (node) {
        var sc = node;
        var so = 0;
        var ec = node;
        var eo = dom.nodeLength(ec);

        // browsers can't target a picture or void node
        if (dom.isVoid(sc)) {
          so = dom.listPrev(sc).length - 1;
          sc = sc.parentNode;
        }
        if (dom.isBR(ec)) {
          eo = dom.listPrev(ec).length - 1;
          ec = ec.parentNode;
        } else if (dom.isVoid(ec)) {
          eo = dom.listPrev(ec).length;
          ec = ec.parentNode;
        }

        return this.create(sc, so, ec, eo);
      },

      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeBefore: function (node) {
        return this.createFromNode(node).collapse(true);
      },

      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeAfter: function (node) {
        return this.createFromNode(node).collapse();
      },

      /**
       * @method
       *
       * create WrappedRange from bookmark
       *
       * @param {Node} editable
       * @param {Object} bookmark
       * @return {WrappedRange}
       */
      createFromBookmark: function (editable, bookmark) {
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
        var so = bookmark.s.offset;
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
        var eo = bookmark.e.offset;
        return new WrappedRange(sc, so, ec, eo);
      },

      /**
       * @method
       *
       * create WrappedRange from paraBookmark
       *
       * @param {Object} bookmark
       * @param {Node[]} paras
       * @return {WrappedRange}
       */
      createFromParaBookmark: function (bookmark, paras) {
        var so = bookmark.s.offset;
        var eo = bookmark.e.offset;
        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);
        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);

        return new WrappedRange(sc, so, ec, eo);
      }
    };
  })();

  /**
   * @class core.async
   *
   * Async functions which returns `Promise`
   *
   * @singleton
   * @alternateClassName async
   */
  var async = (function () {
    /**
     * @method readFileAsDataURL
     *
     * read contents of file as representing URL
     *
     * @param {File} file
     * @return {Promise} - then: dataUrl
     */
    var readFileAsDataURL = function (file) {
      return $.Deferred(function (deferred) {
        $.extend(new FileReader(), {
          onload: function (e) {
            var dataURL = e.target.result;
            deferred.resolve(dataURL);
          },
          onerror: function () {
            deferred.reject(this);
          }
        }).readAsDataURL(file);
      }).promise();
    };

    /**
     * @method createImage
     *
     * create `<image>` from url string
     *
     * @param {String} url
     * @return {Promise} - then: $image
     */
    var createImage = function (url) {
      return $.Deferred(function (deferred) {
        var $img = $('<img>');

        $img.one('load', function () {
          $img.off('error abort');
          deferred.resolve($img);
        }).one('error abort', function () {
          $img.off('load').detach();
          deferred.reject($img);
        }).css({
          display: 'none'
        }).appendTo(document.body).attr('src', url);
      }).promise();
    };

    return {
      readFileAsDataURL: readFileAsDataURL,
      createImage: createImage
    };
  })();

  /**
   * @class editing.History
   *
   * Editor History
   *
   */
  var History = function ($editable) {
    var stack = [], stackOffset = -1;
    var editable = $editable[0];

    var makeSnapshot = function () {
      var rng = range.create(editable);
      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};

      return {
        contents: $editable.html(),
        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
      };
    };

    var applySnapshot = function (snapshot) {
      if (snapshot.contents !== null) {
        $editable.html(snapshot.contents);
      }
      if (snapshot.bookmark !== null) {
        range.createFromBookmark(editable, snapshot.bookmark).select();
      }
    };

    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */
    this.rewind = function () {
      // Create snap shot if not yet recorded
      if ($editable.html() !== stack[stackOffset].contents) {
        this.recordUndo();
      }

      // Return to the first available snapshot.
      stackOffset = 0;

      // Apply that snapshot.
      applySnapshot(stack[stackOffset]);
    };

    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */
    this.reset = function () {
      // Clear the stack.
      stack = [];

      // Restore stackOffset to its original value.
      stackOffset = -1;

      // Clear the editable area.
      $editable.html('');

      // Record our first snapshot (of nothing).
      this.recordUndo();
    };

    /**
     * undo
     */
    this.undo = function () {
      // Create snap shot if not yet recorded
      if ($editable.html() !== stack[stackOffset].contents) {
        this.recordUndo();
      }

      if (0 < stackOffset) {
        stackOffset--;
        applySnapshot(stack[stackOffset]);
      }
    };

    /**
     * redo
     */
    this.redo = function () {
      if (stack.length - 1 > stackOffset) {
        stackOffset++;
        applySnapshot(stack[stackOffset]);
      }
    };

    /**
     * recorded undo
     */
    this.recordUndo = function () {
      stackOffset++;

      // Wash out stack after stackOffset
      if (stack.length > stackOffset) {
        stack = stack.slice(0, stackOffset);
      }

      // Create new snapshot and push it to the end
      stack.push(makeSnapshot());
    };
  };

  /**
   * @class editing.Style
   *
   * Style
   *
   */
  var Style = function () {
    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    var jQueryCSS = function ($obj, propertyNames) {
      if (agent.jqueryVersion < 1.9) {
        var result = {};
        $.each(propertyNames, function (idx, propertyName) {
          result[propertyName] = $obj.css(propertyName);
        });
        return result;
      }
      return $obj.css.call($obj, propertyNames);
    };

    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    this.fromNode = function ($node) {
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
      var styleInfo = jQueryCSS($node, properties) || {};
      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
      return styleInfo;
    };

    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */
    this.stylePara = function (rng, styleInfo) {
      $.each(rng.nodes(dom.isPara, {
        includeAncestor: true
      }), function (idx, para) {
        $(para).css(styleInfo);
      });
    };

    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */
    this.styleNodes = function (rng, options) {
      rng = rng.splitText();

      var nodeName = options && options.nodeName || 'SPAN';
      var expandClosestSibling = !!(options && options.expandClosestSibling);
      var onlyPartialContains = !!(options && options.onlyPartialContains);

      if (rng.isCollapsed()) {
        return [rng.insertNode(dom.create(nodeName))];
      }

      var pred = dom.makePredByNodeName(nodeName);
      var nodes = rng.nodes(dom.isText, {
        fullyContains: true
      }).map(function (text) {
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
      });

      if (expandClosestSibling) {
        if (onlyPartialContains) {
          var nodesInRange = rng.nodes();
          // compose with partial contains predication
          pred = func.and(pred, function (node) {
            return list.contains(nodesInRange, node);
          });
        }

        return nodes.map(function (node) {
          var siblings = dom.withClosestSiblings(node, pred);
          var head = list.head(siblings);
          var tails = list.tail(siblings);
          $.each(tails, function (idx, elem) {
            dom.appendChildNodes(head, elem.childNodes);
            dom.remove(elem);
          });
          return list.head(siblings);
        });
      } else {
        return nodes;
      }
    };

    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */
    this.current = function (rng) {
      var $cont = $(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
      var styleInfo = this.fromNode($cont);

      // document.queryCommandState for toggle state
      // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
      try {
        styleInfo = $.extend(styleInfo, {
          'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
          'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
          'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
          'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
          'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
          'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
          'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
        });
      } catch (e) {}

      // list-style-type to list-style(unordered, ordered)
      if (!rng.isOnList()) {
        styleInfo['list-style'] = 'none';
      } else {
        var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
        var isUnordered = $.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
      }

      var para = dom.ancestor(rng.sc, dom.isPara);
      if (para && para.style['line-height']) {
        styleInfo['line-height'] = para.style.lineHeight;
      } else {
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
        styleInfo['line-height'] = lineHeight.toFixed(1);
      }

      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
      styleInfo.range = rng;

      return styleInfo;
    };
  };


  /**
   * @class editing.Bullet
   *
   * @alternateClassName Bullet
   */
  var Bullet = function () {
    var self = this;

    /**
     * toggle ordered list
     */
    this.insertOrderedList = function (editable) {
      this.toggleList('OL', editable);
    };

    /**
     * toggle unordered list
     */
    this.insertUnorderedList = function (editable) {
      this.toggleList('UL', editable);
    };

    /**
     * indent
     */
    this.indent = function (editable) {
      var self = this;
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.wrapList(paras, head.parentNode.nodeName);
        } else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              return (parseInt(val, 10) || 0) + 25;
            });
          });
        }
      });

      rng.select();
    };

    /**
     * outdent
     */
    this.outdent = function (editable) {
      var self = this;
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.releaseList([paras]);
        } else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              val = (parseInt(val, 10) || 0);
              return val > 25 ? val - 25 : '';
            });
          });
        }
      });

      rng.select();
    };

    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */
    this.toggleList = function (listName, editable) {
      var rng = range.create(editable).wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
      var bookmark = rng.paraBookmark(paras);
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      // paragraph to list
      if (list.find(paras, dom.isPurePara)) {
        var wrappedParas = [];
        $.each(clustereds, function (idx, paras) {
          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));
        });
        paras = wrappedParas;
      // list to paragraph or change list style
      } else {
        var diffLists = rng.nodes(dom.isList, {
          includeAncestor: true
        }).filter(function (listNode) {
          return !$.nodeName(listNode, listName);
        });

        if (diffLists.length) {
          $.each(diffLists, function (idx, listNode) {
            dom.replace(listNode, listName);
          });
        } else {
          paras = this.releaseList(clustereds, true);
        }
      }

      range.createFromParaBookmark(bookmark, paras).select();
    };

    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */
    this.wrapList = function (paras, listName) {
      var head = list.head(paras);
      var last = list.last(paras);

      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

      // P to LI
      paras = paras.map(function (para) {
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
      });

      // append to list(<ul>, <ol>)
      dom.appendChildNodes(listNode, paras);

      if (nextList) {
        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
        dom.remove(nextList);
      }

      return paras;
    };

    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */
    this.releaseList = function (clustereds, isEscapseToBody) {
      var releasedParas = [];

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        var last = list.last(paras);

        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
                                         head.parentNode;
        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
          node: last.parentNode,
          offset: dom.position(last) + 1
        }, {
          isSkipPaddingBlankHTML: true
        }) : null;

        var middleList = dom.splitTree(headList, {
          node: head.parentNode,
          offset: dom.position(head)
        }, {
          isSkipPaddingBlankHTML: true
        });

        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
                                  list.from(middleList.childNodes).filter(dom.isLi);

        // LI to P
        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
          paras = paras.map(function (para) {
            return dom.replace(para, 'P');
          });
        }

        $.each(list.from(paras).reverse(), function (idx, para) {
          dom.insertAfter(para, headList);
        });

        // remove empty lists
        var rootLists = list.compact([headList, middleList, lastList]);
        $.each(rootLists, function (idx, rootList) {
          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
          $.each(listNodes.reverse(), function (idx, listNode) {
            if (!dom.nodeLength(listNode)) {
              dom.remove(listNode, true);
            }
          });
        });

        releasedParas = releasedParas.concat(paras);
      });

      return releasedParas;
    };
  };


  /**
   * @class editing.Typing
   *
   * Typing
   *
   */
  var Typing = function () {

    // a Bullet instance to toggle lists off
    var bullet = new Bullet();

    /**
     * insert tab
     *
     * @param {WrappedRange} rng
     * @param {Number} tabsize
     */
    this.insertTab = function (rng, tabsize) {
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
      rng = rng.deleteContents();
      rng.insertNode(tab, true);

      rng = range.create(tab, tabsize);
      rng.select();
    };

    /**
     * insert paragraph
     */
    this.insertParagraph = function (editable) {
      var rng = range.create(editable);

      // deleteContents on range.
      rng = rng.deleteContents();

      // Wrap range if it needs to be wrapped by paragraph
      rng = rng.wrapBodyInlineWithPara();

      // finding paragraph
      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

      var nextPara;
      // on paragraph: split paragraph
      if (splitRoot) {
        // if it is an empty line with li
        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
          // toogle UL/OL and escape
          bullet.toggleList(splitRoot.parentNode.nodeName);
          return;
        // if it is an empty line with para on blockquote
        } else if (dom.isEmpty(splitRoot) && dom.isPara(splitRoot) && dom.isBlockquote(splitRoot.parentNode)) {
          // escape blockquote
          dom.insertAfter(splitRoot, splitRoot.parentNode);
          nextPara = splitRoot;
        // if new line has content (not a line break)
        } else {
          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

          $.each(emptyAnchors, function (idx, anchor) {
            dom.remove(anchor);
          });

          // replace empty heading, pre or custom-made styleTag with P tag
          if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
            nextPara = dom.replace(nextPara, 'p');
          }
        }
      // no paragraph: insert empty paragraph
      } else {
        var next = rng.sc.childNodes[rng.so];
        nextPara = $(dom.emptyPara)[0];
        if (next) {
          rng.sc.insertBefore(nextPara, next);
        } else {
          rng.sc.appendChild(nextPara);
        }
      }

      range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    };
  };


  /**
   * @class Create a virtual table to create what actions to do in change.
   * @param {object} startPoint Cell selected to apply change.
   * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
   * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
   * @param {object} domTable Dom element of table to make changes.
   */
  var TableResultAction = function (startPoint, where, action, domTable) {
    var _startPoint = { 'colPos': 0, 'rowPos': 0 };
    var _virtualTable = [];
    var _actionCellList = [];

    //////////////////////////////////////////////
    // Private functions
    //////////////////////////////////////////////

    /**
     * Set the startPoint of action.
     */
    function setStartPoint() {
      if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
        console.error('Impossible to identify start Cell point.', startPoint);
        return;
      }
      _startPoint.colPos = startPoint.cellIndex;
      if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
        console.error('Impossible to identify start Row point.', startPoint);
        return;
      }
      _startPoint.rowPos = startPoint.parentElement.rowIndex;
    }

    /**
     * Define virtual table position info object.
     *
     * @param {int} rowIndex Index position in line of virtual table.
     * @param {int} cellIndex Index position in column of virtual table.
     * @param {object} baseRow Row affected by this position.
     * @param {object} baseCell Cell affected by this position.
     * @param {bool} isSpan Inform if it is an span cell/row.
     */
    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
      var objPosition = {
        'baseRow': baseRow,
        'baseCell': baseCell,
        'isRowSpan': isRowSpan,
        'isColSpan': isColSpan,
        'isVirtual': isVirtualCell
      };
      if (!_virtualTable[rowIndex]) {
        _virtualTable[rowIndex] = [];
      }
      _virtualTable[rowIndex][cellIndex] = objPosition;
    }

    /**
     * Create action cell object.
     *
     * @param {object} virtualTableCellObj Object of specific position on virtual table.
     * @param {enum} resultAction Action to be applied in that item.
     */
    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
      return {
        'baseCell': virtualTableCellObj.baseCell,
        'action': resultAction,
        'virtualTable': {
          'rowIndex': virtualRowPosition,
          'cellIndex': virtualColPosition
        }
      };
    }

    /**
     * Recover free index of row to append Cell.
     *
     * @param {int} rowIndex Index of row to find free space.
     * @param {int} cellIndex Index of cell to find free space in table.
     */
    function recoverCellIndex(rowIndex, cellIndex) {
      if (!_virtualTable[rowIndex]) {
        return cellIndex;
      }
      if (!_virtualTable[rowIndex][cellIndex]) {
        return cellIndex;
      }

      var newCellIndex = cellIndex;
      while (_virtualTable[rowIndex][newCellIndex]) {
        newCellIndex++;
        if (!_virtualTable[rowIndex][newCellIndex]) {
          return newCellIndex;
        }
      }
    }

    /**
     * Recover info about row and cell and add information to virtual table.
     *
     * @param {object} row Row to recover information.
     * @param {object} cell Cell to recover information.
     */
    function addCellInfoToVirtual(row, cell) {
      var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
      var cellHasColspan = (cell.colSpan > 1);
      var cellHasRowspan = (cell.rowSpan > 1);
      var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
      setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);

      // Add span rows to virtual Table.
      var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
      if (rowspanNumber > 1) {
        for (var rp = 1; rp < rowspanNumber; rp++) {
          var rowspanIndex = row.rowIndex + rp;
          adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
        }
      }

      // Add span cols to virtual table.
      var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
      if (colspanNumber > 1) {
        for (var cp = 1; cp < colspanNumber; cp++) {
          var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
          adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
          setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
        }
      }
    }

    /**
     * Process validation and adjust of start point if needed
     *
     * @param {int} rowIndex
     * @param {int} cellIndex
     * @param {object} cell
     * @param {bool} isSelectedCell
     */
    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
      if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
        _startPoint.colPos++;
      }
    }

    /**
     * Create virtual table of cells with all cells, including span cells.
     */
    function createVirtualTable() {
      var rows = domTable.rows;
      for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var cells = rows[rowIndex].cells;
        for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
        }
      }
    }

    /**
     * Get action to be applied on the cell.
     *
     * @param {object} cell virtual table cell to apply action
     */
    function getDeleteResultActionToCell(cell) {
      switch (where) {
        case TableResultAction.where.Column:
          if (cell.isColSpan) {
            return TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
        case TableResultAction.where.Row:
          if (!cell.isVirtual && cell.isRowSpan) {
            return TableResultAction.resultAction.AddCell;
          }
          else if (cell.isRowSpan) {
            return TableResultAction.resultAction.SubtractSpanCount;
          }
          break;
      }
      return TableResultAction.resultAction.RemoveCell;
    }

    /**
     * Get action to be applied on the cell.
     *
     * @param {object} cell virtual table cell to apply action
     */
    function getAddResultActionToCell(cell) {
      switch (where) {
        case TableResultAction.where.Column:
          if (cell.isColSpan) {
            return TableResultAction.resultAction.SumSpanCount;
          } else if(cell.isRowSpan && cell.isVirtual) {
            return TableResultAction.resultAction.Ignore;
          }
          break;
        case TableResultAction.where.Row:
          if (cell.isRowSpan) {
            return TableResultAction.resultAction.SumSpanCount;
          } else if (cell.isColSpan && cell.isVirtual) {
            return TableResultAction.resultAction.Ignore;
          }
          break;
      }
      return TableResultAction.resultAction.AddCell;
    }

    function init() {
      setStartPoint();
      createVirtualTable();
    }

    //////////////////////////////////////////////
    // Public functions
    //////////////////////////////////////////////

    /**
     * Recover array os what to do in table.
     */
    this.getActionList = function () {
      var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
      var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;

      var actualPosition = 0;
      var canContinue = true;
      while (canContinue) {
        var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
        var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
        var row = _virtualTable[rowPosition];
        if (!row) {
          canContinue = false;
          return _actionCellList;
        }
        var cell = row[colPosition];
        if (!cell) {
          canContinue = false;
          return _actionCellList;
        }

        // Define action to be applied in this cell
        var resultAction = TableResultAction.resultAction.Ignore;
        switch (action) {
          case TableResultAction.requestAction.Add:
            resultAction = getAddResultActionToCell(cell);
            break;
          case TableResultAction.requestAction.Delete:
            resultAction = getDeleteResultActionToCell(cell);
            break;
        }
        _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
        actualPosition++;
      }

      return _actionCellList;
    };

    init();
  };
  /**
  *
  * Where action occours enum.
  */
  TableResultAction.where = { 'Row': 0, 'Column': 1 };
  /**
  *
  * Requested action to apply enum.
  */
  TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
  /**
  *
  * Result action to be executed enum.
  */
  TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };

  /**
   *
   * @class editing.Table
   *
   * Table
   *
   */
  var Table = function () {
    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    this.tab = function (rng, isShift) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var table = dom.ancestor(cell, dom.isTable);
      var cells = dom.listDescendant(table, dom.isCell);

      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
      if (nextCell) {
        range.create(nextCell, 0).select();
      }
    };

    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */
    this.addRow = function (rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);

      var currentTr = $(cell).closest('tr');
      var trAttributes = this.recoverAttributes(currentTr);
      var html = $('<tr' + trAttributes + '></tr>');

      var vTable = new TableResultAction(cell, TableResultAction.where.Row,
        TableResultAction.requestAction.Add, $(currentTr).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var idCell = 0; idCell < actions.length; idCell++) {
        var currentCell = actions[idCell];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);
        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
            break;
          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'top') {
              var baseCellTr = currentCell.baseCell.parent;
              var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
              if (isTopFromRowSpan) {
                var newTd = $('<div></div>').append($('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                html.append(newTd);
                break;
              }
            }
            var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
            rowspanNumber++;
            currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
            break;
        }
      }

      if (position === 'top') {
        currentTr.before(html);
      }
      else {
        var cellHasRowspan = (cell.rowSpan > 1);
        if (cellHasRowspan) {
          var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
          $($(currentTr).parent().find('tr')[lastTrIndex]).after($(html));
          return;
        }
        currentTr.after(html);
      }
    };

    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */
    this.addCol = function (rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var rowsGroup = $(row).siblings();
      rowsGroup.push(row);

      var vTable = new TableResultAction(cell, TableResultAction.where.Column,
        TableResultAction.requestAction.Add, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        var currentCell = actions[actionIndex];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);
        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            if (position === 'right') {
              $(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
            } else {
              $(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }
            break;
          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'right') {
              var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
              colspanNumber++;
              currentCell.baseCell.setAttribute('colSpan', colspanNumber);
            } else {
              $(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }
            break;
        }
      }
    };

    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */
    this.recoverAttributes = function (el) {
      var resultStr = '';

      if (!el) {
        return resultStr;
      }

      var attrList = el.attributes || [];

      for (var i = 0; i < attrList.length; i++) {
        if (attrList[i].name.toLowerCase() === 'id') {
          continue;
        }

        if (attrList[i].specified) {
          resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
        }
      }

      return resultStr;
    };

    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteRow = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var cellPos = row.children('td, th').index($(cell));
      var rowPos = row[0].rowIndex;

      var vTable = new TableResultAction(cell, TableResultAction.where.Row,
        TableResultAction.requestAction.Delete, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        var baseCell = actions[actionIndex].baseCell;
        var virtualPosition = actions[actionIndex].virtualTable;
        var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
        var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;
          case TableResultAction.resultAction.AddCell:
            var nextRow = row.next('tr')[0];
            if (!nextRow) { continue; }
            var cloneRow = row[0].cells[cellPos];
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                nextRow.cells[cellPos].innerHTML = '';
              } else if (rowspanNumber === 2) {
                nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                nextRow.cells[cellPos].removeAttribute('rowSpan');
                nextRow.cells[cellPos].innerHTML = '';
              }
            }
            continue;
          case TableResultAction.resultAction.SubtractSpanCount:
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                baseCell.setAttribute('rowSpan', rowspanNumber);
                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              } else if (rowspanNumber === 2) {
                baseCell.removeAttribute('rowSpan');
                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              }
            }
            continue;
          case TableResultAction.resultAction.RemoveCell:
            // Do not need remove cell because row will be deleted.
            continue;
        }
      }
      row.remove();
    };

    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteCol = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = $(cell).closest('tr');
      var cellPos = row.children('td, th').index($(cell));

      var vTable = new TableResultAction(cell, TableResultAction.where.Column,
        TableResultAction.requestAction.Delete, $(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }
        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;
          case TableResultAction.resultAction.SubtractSpanCount:
            var baseCell = actions[actionIndex].baseCell;
            var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
            if (hasColspan) {
              var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
              if (colspanNumber > 2) {
                colspanNumber--;
                baseCell.setAttribute('colSpan', colspanNumber);
                if (baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              } else if (colspanNumber === 2) {
                baseCell.removeAttribute('colSpan');
                if (baseCell.cellIndex === cellPos) { baseCell.innerHTML = ''; }
              }
            }
            continue;
          case TableResultAction.resultAction.RemoveCell:
            dom.remove(actions[actionIndex].baseCell, true);
            continue;
        }
      }
    };

    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */
    this.createTable = function (colCount, rowCount, options) {
      var tds = [], tdHTML;
      for (var idxCol = 0; idxCol < colCount; idxCol++) {
        tds.push('<td>' + dom.blank + '</td>');
      }
      tdHTML = tds.join('');

      var trs = [], trHTML;
      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
        trs.push('<tr>' + tdHTML + '</tr>');
      }
      trHTML = trs.join('');
      var $table = $('<table>' + trHTML + '</table>');
      if (options && options.tableClassName) {
        $table.addClass(options.tableClassName);
      }

      return $table[0];
    };

    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */
    this.deleteTable = function (rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      $(cell).closest('table').remove();
    };
  };


  var KEY_BOGUS = 'bogus';

  /**
   * @class Editor
   */
  var Editor = function (context) {
    var self = this;

    var $note = context.layoutInfo.note;
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var options = context.options;
    var lang = options.langInfo;

    var editable = $editable[0];
    var lastRange = null;

    var style = new Style();
    var table = new Table();
    var typing = new Typing();
    var bullet = new Bullet();
    var history = new History($editable);

    this.initialize = function () {
      // bind custom events
      $editable.on('keydown', function (event) {
        if (event.keyCode === key.code.ENTER) {
          context.triggerEvent('enter', event);
        }
        context.triggerEvent('keydown', event);

        if (!event.isDefaultPrevented()) {
          if (options.shortcuts) {
            self.handleKeyMap(event);
          } else {
            self.preventDefaultEditableShortCuts(event);
          }
        }
      }).on('keyup', function (event) {
        context.triggerEvent('keyup', event);
      }).on('focus', function (event) {
        context.triggerEvent('focus', event);
      }).on('blur', function (event) {
        context.triggerEvent('blur', event);
      }).on('mousedown', function (event) {
        context.triggerEvent('mousedown', event);
      }).on('mouseup', function (event) {
        context.triggerEvent('mouseup', event);
      }).on('scroll', function (event) {
        context.triggerEvent('scroll', event);
      }).on('paste', function (event) {
        context.triggerEvent('paste', event);
      });

      // init content before set event
      $editable.html(dom.html($note) || dom.emptyPara);

      // [workaround] IE doesn't have input events for contentEditable
      // - see: https://goo.gl/4bfIvA
      var changeEventName = agent.isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
      $editable.on(changeEventName, func.debounce(function () {
        context.triggerEvent('change', $editable.html());
      }, 250));

      $editor.on('focusin', function (event) {
        context.triggerEvent('focusin', event);
      }).on('focusout', function (event) {
        context.triggerEvent('focusout', event);
      });

      if (!options.airMode) {
        if (options.width) {
          $editor.outerWidth(options.width);
        }
        if (options.height) {
          $editable.outerHeight(options.height);
        }
        if (options.maxHeight) {
          $editable.css('max-height', options.maxHeight);
        }
        if (options.minHeight) {
          $editable.css('min-height', options.minHeight);
        }
      }

      history.recordUndo();
    };

    this.destroy = function () {
      $editable.off();
    };

    this.handleKeyMap = function (event) {
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      var keys = [];

      if (event.metaKey) { keys.push('CMD'); }
      if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }
      if (event.shiftKey) { keys.push('SHIFT'); }

      var keyName = key.nameFromCode[event.keyCode];
      if (keyName) {
        keys.push(keyName);
      }

      var eventName = keyMap[keys.join('+')];
      if (eventName) {
        event.preventDefault();
        context.invoke(eventName);
      } else if (key.isEdit(event.keyCode)) {
        this.afterCommand();
      }
    };

    this.preventDefaultEditableShortCuts = function (event) {
      // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
      if ((event.ctrlKey || event.metaKey) &&
        list.contains([66, 73, 85], event.keyCode)) {
        event.preventDefault();
      }
    };

    /**
     * create range
     * @return {WrappedRange}
     */
    this.createRange = function () {
      this.focus();
      return range.create(editable);
    };

    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */
    this.saveRange = function (thenCollapse) {
      lastRange = this.createRange();
      if (thenCollapse) {
        lastRange.collapse().select();
      }
    };

    /**
     * restoreRange
     *
     * restore lately range
     */
    this.restoreRange = function () {
      if (lastRange) {
        lastRange.select();
        this.focus();
      }
    };

    this.saveTarget = function (node) {
      $editable.data('target', node);
    };

    this.clearTarget = function () {
      $editable.removeData('target');
    };

    this.restoreTarget = function () {
      return $editable.data('target');
    };

    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */
    this.currentStyle = function () {
      var rng = range.create();
      if (rng) {
        rng = rng.normalize();
      }
      return rng ? style.current(rng) : style.fromNode($editable);
    };

    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */
    this.styleFromNode = function ($node) {
      return style.fromNode($node);
    };

    /**
     * undo
     */
    this.undo = function () {
      context.triggerEvent('before.command', $editable.html());
      history.undo();
      context.triggerEvent('change', $editable.html());
    };
    context.memo('help.undo', lang.help.undo);

    /**
     * redo
     */
    this.redo = function () {
      context.triggerEvent('before.command', $editable.html());
      history.redo();
      context.triggerEvent('change', $editable.html());
    };
    context.memo('help.redo', lang.help.redo);

    /**
     * before command
     */
    var beforeCommand = this.beforeCommand = function () {
      context.triggerEvent('before.command', $editable.html());
      // keep focus on editable before command execution
      self.focus();
    };

    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */
    var afterCommand = this.afterCommand = function (isPreventTrigger) {
      history.recordUndo();
      if (!isPreventTrigger) {
        context.triggerEvent('change', $editable.html());
      }
    };

    /* jshint ignore:start */
    // native commands(with execCommand), generate function for execCommand
    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'formatBlock', 'removeFormat',
                    'backColor', 'foreColor', 'fontName'];

    for (var idx = 0, len = commands.length; idx < len; idx ++) {
      this[commands[idx]] = (function (sCmd) {
        return function (value) {
          beforeCommand();
          document.execCommand(sCmd, false, value);
          afterCommand(true);
        };
      })(commands[idx]);
      context.memo('help.' + commands[idx], lang.help[commands[idx]]);
    }
    /* jshint ignore:end */

    /**
     * handle tab key
     */
    this.tab = function () {
      var rng = this.createRange();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng);
      } else {
        beforeCommand();
        typing.insertTab(rng, options.tabSize);
        afterCommand();
      }
    };
    context.memo('help.tab', lang.help.tab);

    /**
     * handle shift+tab key
     */
    this.untab = function () {
      var rng = this.createRange();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng, true);
      }
    };
    context.memo('help.untab', lang.help.untab);

    /**
     * run given function between beforeCommand and afterCommand
     */
    this.wrapCommand = function (fn) {
      return function () {
        beforeCommand();
        fn.apply(self, arguments);
        afterCommand();
      };
    };

    /**
     * insert paragraph
     */
    this.insertParagraph = this.wrapCommand(function () {
      typing.insertParagraph(editable);
    });
    context.memo('help.insertParagraph', lang.help.insertParagraph);

    this.insertOrderedList = this.wrapCommand(function () {
      bullet.insertOrderedList(editable);
    });
    context.memo('help.insertOrderedList', lang.help.insertOrderedList);

    this.insertUnorderedList = this.wrapCommand(function () {
      bullet.insertUnorderedList(editable);
    });
    context.memo('help.insertUnorderedList', lang.help.insertUnorderedList);

    this.indent = this.wrapCommand(function () {
      bullet.indent(editable);
    });
    context.memo('help.indent', lang.help.indent);

    this.outdent = this.wrapCommand(function () {
      bullet.outdent(editable);
    });
    context.memo('help.outdent', lang.help.outdent);

    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */
    this.insertImage = function (src, param) {
      return async.createImage(src, param).then(function ($image) {
        beforeCommand();

        if (typeof param === 'function') {
          param($image);
        } else {
          if (typeof param === 'string') {
            $image.attr('data-filename', param);
          }
          $image.css('width', Math.min($editable.width(), $image.width()));
        }

        $image.show();
        range.create(editable).insertNode($image[0]);
        range.createFromNodeAfter($image[0]).select();
        afterCommand();
      }).fail(function (e) {
        context.triggerEvent('image.upload.error', e);
      });
    };

    /**
     * insertImages
     * @param {File[]} files
     */
    this.insertImages = function (files) {
      $.each(files, function (idx, file) {
        var filename = file.name;
        if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {
          context.triggerEvent('image.upload.error', lang.image.maximumFileSizeError);
        } else {
          async.readFileAsDataURL(file).then(function (dataURL) {
            return self.insertImage(dataURL, filename);
          }).fail(function () {
            context.triggerEvent('image.upload.error');
          });
        }
      });
    };

    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */
    this.insertImagesOrCallback = function (files) {
      var callbacks = options.callbacks;

      // If onImageUpload options setted
      if (callbacks.onImageUpload) {
        context.triggerEvent('image.upload', files);
      // else insert Image as dataURL
      } else {
        this.insertImages(files);
      }
    };

    /**
     * insertNode
     * insert node
     * @param {Node} node
     */
    this.insertNode = this.wrapCommand(function (node) {
      var rng = this.createRange();
      rng.insertNode(node);
      range.createFromNodeAfter(node).select();
    });

    /**
     * insert text
     * @param {String} text
     */
    this.insertText = this.wrapCommand(function (text) {
      var rng = this.createRange();
      var textNode = rng.insertNode(dom.createText(text));
      range.create(textNode, dom.nodeLength(textNode)).select();
    });

    /**
     * return selected plain text
     * @return {String} text
     */
    this.getSelectedText = function () {
      var rng = this.createRange();

      // if range on anchor, expand range with anchor
      if (rng.isOnAnchor()) {
        rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
      }

      return rng.toString();
    };

    /**
     * paste HTML
     * @param {String} markup
     */
    this.pasteHTML = this.wrapCommand(function (markup) {
      var contents = this.createRange().pasteHTML(markup);
      range.createFromNodeAfter(list.last(contents)).select();
    });

    /**
     * formatBlock
     *
     * @param {String} tagName
     */
    this.formatBlock = this.wrapCommand(function (tagName, $target) {
      var onApplyCustomStyle = context.options.callbacks.onApplyCustomStyle;
      if (onApplyCustomStyle) {
        onApplyCustomStyle.call(this, $target, context, this.onFormatBlock);
      } else {
        this.onFormatBlock(tagName);
      }
    });

    this.onFormatBlock = function (tagName) {
      // [workaround] for MSIE, IE need `<`
      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
      document.execCommand('FormatBlock', false, tagName);
    };

    this.formatPara = function () {
      this.formatBlock('P');
    };
    context.memo('help.formatPara', lang.help.formatPara);

    /* jshint ignore:start */
    for (var idx = 1; idx <= 6; idx ++) {
      this['formatH' + idx] = function (idx) {
        return function () {
          this.formatBlock('H' + idx);
        };
      }(idx);
      context.memo('help.formatH'+idx, lang.help['formatH' + idx]);
    };
    /* jshint ignore:end */

    /**
     * fontSize
     *
     * @param {String} value - px
     */
    this.fontSize = function (value) {
      var rng = this.createRange();

      if (rng && rng.isCollapsed()) {
        var spans = style.styleNodes(rng);
        var firstSpan = list.head(spans);

        $(spans).css({
          'font-size': value + 'px'
        });

        // [workaround] added styled bogus span for style
        //  - also bogus character needed for cursor position
        if (firstSpan && !dom.nodeLength(firstSpan)) {
          firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
          range.createFromNodeAfter(firstSpan.firstChild).select();
          $editable.data(KEY_BOGUS, firstSpan);
        }
      } else {
        beforeCommand();
        $(style.styleNodes(rng)).css({
          'font-size': value + 'px'
        });
        afterCommand();
      }
    };

    /**
     * insert horizontal rule
     */
    this.insertHorizontalRule = this.wrapCommand(function () {
      var hrNode = this.createRange().insertNode(dom.create('HR'));
      if (hrNode.nextSibling) {
        range.create(hrNode.nextSibling, 0).normalize().select();
      }
    });
    context.memo('help.insertHorizontalRule', lang.help.insertHorizontalRule);

    /**
     * remove bogus node and character
     */
    this.removeBogus = function () {
      var bogusNode = $editable.data(KEY_BOGUS);
      if (!bogusNode) {
        return;
      }

      var textNode = list.find(list.from(bogusNode.childNodes), dom.isText);

      var bogusCharIdx = textNode.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR);
      if (bogusCharIdx !== -1) {
        textNode.deleteData(bogusCharIdx, 1);
      }

      if (dom.isEmpty(bogusNode)) {
        dom.remove(bogusNode);
      }

      $editable.removeData(KEY_BOGUS);
    };

    /**
     * lineHeight
     * @param {String} value
     */
    this.lineHeight = this.wrapCommand(function (value) {
      style.stylePara(this.createRange(), {
        lineHeight: value
      });
    });

    /**
     * unlink
     *
     * @type command
     */
    this.unlink = function () {
      var rng = this.createRange();
      if (rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        rng = range.createFromNode(anchor);
        rng.select();

        beforeCommand();
        document.execCommand('unlink');
        afterCommand();
      }
    };

    /**
     * create link (command)
     *
     * @param {Object} linkInfo
     */
    this.createLink = this.wrapCommand(function (linkInfo) {
      var linkUrl = linkInfo.url;
      var linkText = linkInfo.text;
      var isNewWindow = linkInfo.isNewWindow;
      var rng = linkInfo.range || this.createRange();
      var isTextChanged = rng.toString() !== linkText;

      // handle spaced urls from input
      if (typeof linkUrl === 'string') {
        linkUrl = linkUrl.trim();
      }

      if (options.onCreateLink) {
        linkUrl = options.onCreateLink(linkUrl);
      } else {
        // if url doesn't match an URL schema, set http:// as default
        linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl) ?
          linkUrl : 'http://' + linkUrl;
      }

      var anchors = [];
      if (isTextChanged) {
        rng = rng.deleteContents();
        var anchor = rng.insertNode($('<A target="_blank" rel="nofollow">' + linkText + '</A>')[0]);
        anchors.push(anchor);
      } else {
        anchors = style.styleNodes(rng, {
          nodeName: 'A',
          expandClosestSibling: true,
          onlyPartialContains: true
        });
      }

      $.each(anchors, function (idx, anchor) {
        if (isNewWindow) {
          $(anchor).attr('target', '_blank');
          $(anchor).attr('rel', 'nofollow');
        } else {
          $(anchor).removeAttr('target');
          $(anchor).removeAttr('rel');
        }
        $(anchor).attr('href', linkUrl);
      });

      var startRange = range.createFromNodeBefore(list.head(anchors));
      var startPoint = startRange.getStartPoint();
      var endRange = range.createFromNodeAfter(list.last(anchors));
      var endPoint = endRange.getEndPoint();

      range.create(
        startPoint.node,
        startPoint.offset,
        endPoint.node,
        endPoint.offset
      ).select();
    });

    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */
    this.getLinkInfo = function () {
      var rng = this.createRange().expand(dom.isAnchor);

      // Get the first anchor on range(for edit).
      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));
      var linkInfo = {
        range: rng,
        text: rng.toString(),
        url: $anchor.length ? $anchor.attr('href') : ''
      };

      // Define isNewWindow when anchor exists.
      if ($anchor.length) {
        linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
      }

      return linkInfo;
    };

    /**
     * setting color
     *
     * @param {Object} sObjColor  color code
     * @param {String} sObjColor.foreColor foreground color
     * @param {String} sObjColor.backColor background color
     */
    this.color = this.wrapCommand(function (colorInfo) {
      var foreColor = colorInfo.foreColor;
      var backColor = colorInfo.backColor;

      if (foreColor) { document.execCommand('foreColor', false, foreColor); }
      if (backColor) { document.execCommand('backColor', false, backColor); }
    });

    /**
     * insert Table
     *
     * @param {String} dimension of table (ex : "5x5")
     */
    this.insertTable = this.wrapCommand(function (dim) {
      var dimension = dim.split('x');

      var rng = this.createRange().deleteContents();
      rng.insertNode(table.createTable(dimension[0], dimension[1], options));
    });

     /**
     * @method addRow
     *
     *
     */
    this.addRow = function (position) {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.addRow(rng, position);
        afterCommand();
      }
    };

     /**
     * @method addCol
     *
     *
     */
    this.addCol = function (position) {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.addCol(rng, position);
        afterCommand();
      }
    };

    /**
     * @method deleteRow
     *
     *
     */
    this.deleteRow = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteRow(rng);
        afterCommand();
      }
    };

    /**
     * @method deleteCol
     *
     *
     */
    this.deleteCol = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteCol(rng);
        afterCommand();
      }
    };

    /**
     * @method deleteTable
     *
     *
     */
    this.deleteTable = function () {
      var rng = this.createRange($editable);
      if (rng.isCollapsed() && rng.isOnCell()) {
        beforeCommand();
        table.deleteTable(rng);
        afterCommand();
      }
    };

    /**
     * float me
     *
     * @param {String} value
     */
    this.floatMe = this.wrapCommand(function (value) {
      var $target = $(this.restoreTarget());
      $target.css('float', value);
    });

    /**
     * resize overlay element
     * @param {String} value
     */
    this.resize = this.wrapCommand(function (value) {
      var $target = $(this.restoreTarget());
      $target.css({
        width: value * 100 + '%',
        height: ''
      });
    });

    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */
    this.resizeTo = function (pos, $target, bKeepRatio) {
      var imageSize;
      if (bKeepRatio) {
        var newRatio = pos.y / pos.x;
        var ratio = $target.data('ratio');
        imageSize = {
          width: ratio > newRatio ? pos.x : pos.y / ratio,
          height: ratio > newRatio ? pos.x * ratio : pos.y
        };
      } else {
        imageSize = {
          width: pos.x,
          height: pos.y
        };
      }

      $target.css(imageSize);
    };

    /**
     * remove media object
     */
    this.removeMedia = this.wrapCommand(function () {
      var $target = $(this.restoreTarget()).detach();
      context.triggerEvent('media.delete', $target, $editable);
    });

    /**
     * returns whether editable area has focus or not.
     */
    this.hasFocus = function () {
      return $editable.is(':focus');
    };

    /**
     * set focus
     */
    this.focus = function () {
      // [workaround] Screen will move when page is scolled in IE.
      //  - do focus when not focused
      if (!this.hasFocus()) {
        $editable.focus();
      }
    };

    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */
    this.isEmpty = function () {
      return dom.isEmpty($editable[0]) || dom.emptyPara === $editable.html();
    };

    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */
    this.empty = function () {
      context.invoke('code', dom.emptyPara);
    };
  };

  var Clipboard = function (context) {
    var self = this;

    var $editable = context.layoutInfo.editable;

    this.events = {
      'summernote.keydown': function (we, e) {
        if (self.needKeydownHook()) {
          if ((e.ctrlKey || e.metaKey) && e.keyCode === key.code.V) {
            context.invoke('editor.saveRange');
            self.$paste.focus();

            setTimeout(function () {
              self.pasteByHook();
            }, 0);
          }
        }
      }
    };

    this.needKeydownHook = function () {
      return (agent.isMSIE && agent.browserVersion > 10) || agent.isFF;
    };

    this.initialize = function () {
      // [workaround] getting image from clipboard
      //  - IE11 and Firefox: CTRL+v hook
      //  - Webkit: event.clipboardData
      if (this.needKeydownHook()) {
        this.$paste = $('<div tabindex="-1" />').attr('contenteditable', true).css({
          position: 'absolute',
          left: -100000,
          opacity: 0
        });
        $editable.before(this.$paste);

        this.$paste.on('paste', function (event) {
          context.triggerEvent('paste', event);
        });
      } else {
        $editable.on('paste', this.pasteByEvent);
      }
    };

    this.destroy = function () {
      if (this.needKeydownHook()) {
        this.$paste.remove();
        this.$paste = null;
      }
    };

    this.pasteByHook = function () {
      var node = this.$paste[0].firstChild;

      var src = node && node.src;
      if (dom.isImg(node) && src.indexOf('data:') === 0) {
        var decodedData = atob(node.src.split(',')[1]);
        var array = new Uint8Array(decodedData.length);
        for (var i = 0; i < decodedData.length; i++) {
          array[i] = decodedData.charCodeAt(i);
        }

        var blob = new Blob([array], { type: 'image/png' });
        blob.name = 'clipboard.png';

        context.invoke('editor.restoreRange');
        context.invoke('editor.focus');
        context.invoke('editor.insertImagesOrCallback', [blob]);
      } else {
        var pasteContent = $('<div />').html(this.$paste.html()).html();
        context.invoke('editor.restoreRange');
        context.invoke('editor.focus');

        if (pasteContent) {
          context.invoke('editor.pasteHTML', pasteContent);
        }
      }

      this.$paste.empty();
    };

    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */
    this.pasteByEvent = function (event) {
      var clipboardData = event.originalEvent.clipboardData;
      if (clipboardData && clipboardData.items && clipboardData.items.length) {
        var item = list.head(clipboardData.items);
        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
          context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
        }
        context.invoke('editor.afterCommand');
      }
    };
  };

  var Dropzone = function (context) {
    var $document = $(document);
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var options = context.options;
    var lang = options.langInfo;
    var documentEventHandlers = {};

    var $dropzone = $([
      '<div class="note-dropzone">',
      '  <div class="note-dropzone-message"/>',
      '</div>'
    ].join('')).prependTo($editor);

    var detachDocumentEvent = function () {
      Object.keys(documentEventHandlers).forEach(function (key) {
        $document.off(key.substr(2).toLowerCase(), documentEventHandlers[key]);
      });
      documentEventHandlers = {};
    };

    /**
     * attach Drag and Drop Events
     */
    this.initialize = function () {
      if (options.disableDragAndDrop) {
        // prevent default drop event
        documentEventHandlers.onDrop = function (e) {
          e.preventDefault();
        };
        $document.on('drop', documentEventHandlers.onDrop);
      } else {
        this.attachDragAndDropEvent();
      }
    };

    /**
     * attach Drag and Drop Events
     */
    this.attachDragAndDropEvent = function () {
      var collection = $(),
          $dropzoneMessage = $dropzone.find('.note-dropzone-message');

      documentEventHandlers.onDragenter = function (e) {
        var isCodeview = context.invoke('codeview.isActivated');
        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;
        if (!isCodeview && !collection.length && hasEditorSize) {
          $editor.addClass('dragover');
          $dropzone.width($editor.width());
          $dropzone.height($editor.height());
          $dropzoneMessage.text(lang.image.dragImageHere);
        }
        collection = collection.add(e.target);
      };

      documentEventHandlers.onDragleave = function (e) {
        collection = collection.not(e.target);
        if (!collection.length) {
          $editor.removeClass('dragover');
        }
      };

      documentEventHandlers.onDrop = function () {
        collection = $();
        $editor.removeClass('dragover');
      };

      // show dropzone on dragenter when dragging a object to document
      // -but only if the editor is visible, i.e. has a positive width and height
      $document.on('dragenter', documentEventHandlers.onDragenter)
        .on('dragleave', documentEventHandlers.onDragleave)
        .on('drop', documentEventHandlers.onDrop);

      // change dropzone's message on hover.
      $dropzone.on('dragenter', function () {
        $dropzone.addClass('hover');
        $dropzoneMessage.text(lang.image.dropImage);
      }).on('dragleave', function () {
        $dropzone.removeClass('hover');
        $dropzoneMessage.text(lang.image.dragImageHere);
      });

      // attach dropImage
      $dropzone.on('drop', function (event) {
        var dataTransfer = event.originalEvent.dataTransfer;

        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
          event.preventDefault();
          $editable.focus();
          context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
        } else {
          $.each(dataTransfer.types, function (idx, type) {
            var content = dataTransfer.getData(type);

            if (type.toLowerCase().indexOf('text') > -1) {
              context.invoke('editor.pasteHTML', content);
            } else {
              $(content).each(function () {
                context.invoke('editor.insertNode', this);
              });
            }
          });
        }
      }).on('dragover', false); // prevent default dragover event
    };

    this.destroy = function () {
      detachDocumentEvent();
    };
  };


  var CodeMirror;
  if (agent.hasCodeMirror) {
    if (agent.isSupportAmd) {
      require(['codemirror'], function (cm) {
        CodeMirror = cm;
      });
    } else {
      CodeMirror = window.CodeMirror;
    }
  }

  /**
   * @class Codeview
   */
  var Codeview = function (context) {
    var $editor = context.layoutInfo.editor;
    var $editable = context.layoutInfo.editable;
    var $codable = context.layoutInfo.codable;
    var options = context.options;

    this.sync = function () {
      var isCodeview = this.isActivated();
      if (isCodeview && agent.hasCodeMirror) {
        $codable.data('cmEditor').save();
      }
    };

    /**
     * @return {Boolean}
     */
    this.isActivated = function () {
      return $editor.hasClass('codeview');
    };

    /**
     * toggle codeview
     */
    this.toggle = function () {
      if (this.isActivated()) {
        this.deactivate();
      } else {
        this.activate();
      }
      context.triggerEvent('codeview.toggled');
    };

    /**
     * activate code view
     */
    this.activate = function () {
      $codable.val(dom.html($editable, options.prettifyHtml));
      $codable.height($editable.height());

      context.invoke('toolbar.updateCodeview', true);
      $editor.addClass('codeview');
      $codable.focus();

      // activate CodeMirror as codable
      if (agent.hasCodeMirror) {
        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

        // CodeMirror TernServer
        if (options.codemirror.tern) {
          var server = new CodeMirror.TernServer(options.codemirror.tern);
          cmEditor.ternServer = server;
          cmEditor.on('cursorActivity', function (cm) {
            server.updateArgHints(cm);
          });
        }

        // CodeMirror hasn't Padding.
        cmEditor.setSize(null, $editable.outerHeight());
        $codable.data('cmEditor', cmEditor);
      }
    };

    /**
     * deactivate code view
     */
    this.deactivate = function () {
      // deactivate CodeMirror as codable
      if (agent.hasCodeMirror) {
        var cmEditor = $codable.data('cmEditor');
        $codable.val(cmEditor.getValue());
        cmEditor.toTextArea();
      }

      var value = dom.value($codable, options.prettifyHtml) || dom.emptyPara;
      var isChange = $editable.html() !== value;

      $editable.html(value);
      $editable.height(options.height ? $codable.height() : 'auto');
      $editor.removeClass('codeview');

      if (isChange) {
        context.triggerEvent('change', $editable.html(), $editable);
      }

      $editable.focus();

      context.invoke('toolbar.updateCodeview', false);
    };

    this.destroy = function () {
      if (this.isActivated()) {
        this.deactivate();
      }
    };
  };

  var EDITABLE_PADDING = 24;

  var Statusbar = function (context) {
    var $document = $(document);
    var $statusbar = context.layoutInfo.statusbar;
    var $editable = context.layoutInfo.editable;
    var options = context.options;

    this.initialize = function () {
      if (options.airMode || options.disableResizeEditor) {
        this.destroy();
        return;
      }

      $statusbar.on('mousedown', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var editableTop = $editable.offset().top - $document.scrollTop();
        var onMouseMove = function (event) {
          var height = event.clientY - (editableTop + EDITABLE_PADDING);

          height = (options.minheight > 0) ? Math.max(height, options.minheight) : height;
          height = (options.maxHeight > 0) ? Math.min(height, options.maxHeight) : height;

          $editable.height(height);
        };

        $document
          .on('mousemove', onMouseMove)
          .one('mouseup', function () {
            $document.off('mousemove', onMouseMove);
          });
      });
    };

    this.destroy = function () {
      $statusbar.off();
      $statusbar.remove();
    };
  };

  var Fullscreen = function (context) {
    var self = this;
    var $editor = context.layoutInfo.editor;
    var $toolbar = context.layoutInfo.toolbar;
    var $editable = context.layoutInfo.editable;
    var $codable = context.layoutInfo.codable;

    var $window = $(window);
    var $scrollbar = $('html, body');

    this.resizeTo = function (size) {
      $editable.css('height', size.h);
      $codable.css('height', size.h);
      if ($codable.data('cmeditor')) {
        $codable.data('cmeditor').setsize(null, size.h);
      }
    };

    this.onResize = function () {
      self.resizeTo({
        h: $window.height() - $toolbar.outerHeight()
      });
    };

    /**
     * toggle fullscreen
     */
    this.toggle = function () {
      $editor.toggleClass('fullscreen');
      if (this.isFullscreen()) {
        $editable.data('orgHeight', $editable.css('height'));
        $window.on('resize', this.onResize).trigger('resize');
        $scrollbar.css('overflow', 'hidden');
      } else {
        $window.off('resize', this.onResize);
        this.resizeTo({ h: $editable.data('orgHeight') });
        $scrollbar.css('overflow', 'visible');
      }

      context.invoke('toolbar.updateFullscreen', this.isFullscreen());
    };

    this.isFullscreen = function () {
      return $editor.hasClass('fullscreen');
    };
  };

  var Handle = function (context) {
    var self = this;

    var $document = $(document);
    var $editingArea = context.layoutInfo.editingArea;
    var options = context.options;

    this.events = {
      'summernote.mousedown': function (we, e) {
        if (self.update(e.target)) {
          e.preventDefault();
        }
      },
      'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
        self.update();
      },
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.initialize = function () {
      this.$handle = $([
        '<div class="note-handle">',
        '<div class="note-control-selection">',
        '<div class="note-control-selection-bg"></div>',
        '<div class="note-control-holder note-control-nw"></div>',
        '<div class="note-control-holder note-control-ne"></div>',
        '<div class="note-control-holder note-control-sw"></div>',
        '<div class="',
        (options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
        ' note-control-se"></div>',
        (options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
        '</div>',
        '</div>'
      ].join('')).prependTo($editingArea);

      this.$handle.on('mousedown', function (event) {
        if (dom.isControlSizing(event.target)) {
          event.preventDefault();
          event.stopPropagation();

          var $target = self.$handle.find('.note-control-selection').data('target'),
              posStart = $target.offset(),
              scrollTop = $document.scrollTop();

          var onMouseMove = function (event) {
            context.invoke('editor.resizeTo', {
              x: event.clientX - posStart.left,
              y: event.clientY - (posStart.top - scrollTop)
            }, $target, !event.shiftKey);

            self.update($target[0]);
          };

          $document
            .on('mousemove', onMouseMove)
            .one('mouseup', function (e) {
              e.preventDefault();
              $document.off('mousemove', onMouseMove);
              context.invoke('editor.afterCommand');
            });

          if (!$target.data('ratio')) { // original ratio.
            $target.data('ratio', $target.height() / $target.width());
          }
        }
      });
    };

    this.destroy = function () {
      this.$handle.remove();
    };

    this.update = function (target) {
      if (context.isDisabled()) {
        return false;
      }

      var isImage = dom.isImg(target);
      var $selection = this.$handle.find('.note-control-selection');

      context.invoke('imagePopover.update', target);

      if (isImage) {
        var $image = $(target);
        var pos = $image.position();

        // include margin
        var imageSize = {
          w: $image.outerWidth(true),
          h: $image.outerHeight(true)
        };

        $selection.css({
          display: 'block',
          left: pos.left,
          top: pos.top,
          width: imageSize.w,
          height: imageSize.h
        }).data('target', $image); // save current image element.

        var sizingText = imageSize.w + 'x' + imageSize.h;
        $selection.find('.note-control-selection-info').text(sizingText);
        context.invoke('editor.saveTarget', target);
      } else {
        this.hide();
      }

      return isImage;
    };

    /**
     * hide
     *
     * @param {jQuery} $handle
     */
    this.hide = function () {
      context.invoke('editor.clearTarget');
      this.$handle.children().hide();
    };
  };

  var AutoLink = function (context) {
    var self = this;
    var defaultScheme = 'http://';
    var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

    this.events = {
      'summernote.keyup': function (we, e) {
        if (!e.isDefaultPrevented()) {
          self.handleKeyup(e);
        }
      },
      'summernote.keydown': function (we, e) {
        self.handleKeydown(e);
      }
    };

    this.initialize = function () {
      this.lastWordRange = null;
    };

    this.destroy = function () {
      this.lastWordRange = null;
    };

    this.replace = function () {
      if (!this.lastWordRange) {
        return;
      }

      var keyword = this.lastWordRange.toString();
      var match = keyword.match(linkPattern);

      if (match && (match[1] || match[2])) {
        var link = match[1] ? keyword : defaultScheme + keyword;
        var node = $('<a />').html(keyword).attr({'target':'_blank','rel':'nofollow', 'href': link})[0];

        this.lastWordRange.insertNode(node);
        this.lastWordRange = null;
        context.invoke('editor.focus');
      }

    };

    this.handleKeydown = function (e) {
      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        var wordRange = context.invoke('editor.createRange').getWordRange();
        this.lastWordRange = wordRange;
      }
    };

    this.handleKeyup = function (e) {
      if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
        this.replace();
      }
    };
  };

  /**
   * textarea auto sync.
   */
  var AutoSync = function (context) {
    var $note = context.layoutInfo.note;

    this.events = {
      'summernote.change': function () {
        $note.val(context.invoke('code'));
      }
    };

    this.shouldInitialize = function () {
      return dom.isTextarea($note[0]);
    };
  };

  var Placeholder = function (context) {
    var self = this;
    var $editingArea = context.layoutInfo.editingArea;
    var options = context.options;

    this.events = {
      'summernote.init summernote.change': function () {
        self.update();
      },
      'summernote.codeview.toggled': function () {
        self.update();
      }
    };

    this.shouldInitialize = function () {
      return !!options.placeholder;
    };

    this.initialize = function () {
      this.$placeholder = $('<div class="note-placeholder">');
      this.$placeholder.on('click', function () {
        context.invoke('focus');
      }).text(options.placeholder).prependTo($editingArea);
    };

    this.destroy = function () {
      this.$placeholder.remove();
    };

    this.update = function () {
      var isShow = !context.invoke('codeview.isActivated') && context.invoke('editor.isEmpty');
      this.$placeholder.toggle(isShow);
    };
  };

  var Buttons = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $toolbar = context.layoutInfo.toolbar;
    var options = context.options;
    var lang = options.langInfo;

    var invertedKeyMap = func.invertObject(options.keyMap[agent.isMac ? 'mac' : 'pc']);

    var representShortcut = this.representShortcut = function (editorMethod) {
      var shortcut = invertedKeyMap[editorMethod];
      if (!options.shortcuts || !shortcut) {
        return '';
      }

      if (agent.isMac) {
        shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
      }

      shortcut = shortcut.replace('BACKSLASH', '\\')
                         .replace('SLASH', '/')
                         .replace('LEFTBRACKET', '[')
                         .replace('RIGHTBRACKET', ']');

      return ' (' + shortcut + ')';
    };

    this.initialize = function () {
      this.addToolbarButtons();
      this.addImagePopoverButtons();
      this.addLinkPopoverButtons();
      this.addTablePopoverButtons();
      this.fontInstalledMap = {};
    };

    this.destroy = function () {
      delete this.fontInstalledMap;
    };

    this.isFontInstalled = function (name) {
      if (!self.fontInstalledMap.hasOwnProperty(name)) {
        self.fontInstalledMap[name] = agent.isFontInstalled(name) ||
          list.contains(options.fontNamesIgnoreCheck, name);
      }

      return self.fontInstalledMap[name];
    };

    this.addToolbarButtons = function () {
      context.memo('button.style', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.magic) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.style.style,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'dropdown-style',
            items: context.options.styleTags,
            template: function (item) {

              if (typeof item === 'string') {
                item = { tag: item, title: (lang.style.hasOwnProperty(item) ? lang.style[item] : item) };
              }

              var tag = item.tag;
              var title = item.title;
              var style = item.style ? ' style="' + item.style + '" ' : '';
              var className = item.className ? ' class="' + item.className + '"' : '';

              return '<' + tag + style + className + '>' + title + '</' + tag +  '>';
            },
            click: context.createInvokeHandler('editor.formatBlock')
          })
        ]).render();
      });

      context.memo('button.bold', function () {
        return ui.button({
          className: 'note-btn-bold',
          contents: ui.icon(options.icons.bold),
          tooltip: lang.font.bold + representShortcut('bold'),
          click: context.createInvokeHandlerAndUpdateState('editor.bold')
        }).render();
      });

      context.memo('button.italic', function () {
        return ui.button({
          className: 'note-btn-italic',
          contents: ui.icon(options.icons.italic),
          tooltip: lang.font.italic + representShortcut('italic'),
          click: context.createInvokeHandlerAndUpdateState('editor.italic')
        }).render();
      });

      context.memo('button.underline', function () {
        return ui.button({
          className: 'note-btn-underline',
          contents: ui.icon(options.icons.underline),
          tooltip: lang.font.underline + representShortcut('underline'),
          click: context.createInvokeHandlerAndUpdateState('editor.underline')
        }).render();
      });

      context.memo('button.clear', function () {
        return ui.button({
          contents: ui.icon(options.icons.eraser),
          tooltip: lang.font.clear + representShortcut('removeFormat'),
          click: context.createInvokeHandler('editor.removeFormat')
        }).render();
      });

      context.memo('button.strikethrough', function () {
        return ui.button({
          className: 'note-btn-strikethrough',
          contents: ui.icon(options.icons.strikethrough),
          tooltip: lang.font.strikethrough + representShortcut('strikethrough'),
          click: context.createInvokeHandlerAndUpdateState('editor.strikethrough')
        }).render();
      });

      context.memo('button.superscript', function () {
        return ui.button({
          className: 'note-btn-superscript',
          contents: ui.icon(options.icons.superscript),
          tooltip: lang.font.superscript,
          click: context.createInvokeHandlerAndUpdateState('editor.superscript')
        }).render();
      });

      context.memo('button.subscript', function () {
        return ui.button({
          className: 'note-btn-subscript',
          contents: ui.icon(options.icons.subscript),
          tooltip: lang.font.subscript,
          click: context.createInvokeHandlerAndUpdateState('editor.subscript')
        }).render();
      });

      context.memo('button.fontname', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: '<span class="note-current-fontname"/> ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.font.name,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            className: 'dropdown-fontname',
            checkClassName: options.icons.menuCheck,
            items: options.fontNames.filter(self.isFontInstalled),
            template: function (item) {
              return '<span style="font-family:' + item + '">' + item + '</span>';
            },
            click: context.createInvokeHandlerAndUpdateState('editor.fontName')
          })
        ]).render();
      });

      context.memo('button.fontsize', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: '<span class="note-current-fontsize"/>' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.font.size,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            className: 'dropdown-fontsize',
            checkClassName: options.icons.menuCheck,
            items: options.fontSizes,
            click: context.createInvokeHandler('editor.fontSize')
          })
        ]).render();
      });

      context.memo('button.color', function () {
        return ui.buttonGroup({
          className: 'note-color',
          children: [
            ui.button({
              className: 'note-current-color-button',
              contents: ui.icon(options.icons.font + ' note-recent-color'),
              tooltip: lang.color.recent,
              click: function (e) {
                var $button = $(e.currentTarget);
                context.invoke('editor.color', {
                  backColor: $button.attr('data-backColor'),
                  foreColor: $button.attr('data-foreColor')
                });
              },
              callback: function ($button) {
                var $recentColor = $button.find('.note-recent-color');
                $recentColor.css('background-color', '#FFFF00');
                $button.attr('data-backColor', '#FFFF00');
              }
            }),
            ui.button({
              className: 'dropdown-toggle',
              contents: ui.icon(options.icons.caret, 'span'),
              tooltip: lang.color.more,
              data: {
                toggle: 'dropdown'
              }
            }),
            ui.dropdown({
              items: [
                '<li>',
                '<div class="btn-group">',
                '  <div class="note-palette-title">' + lang.color.background + '</div>',
                '  <div>',
                '    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">',
                lang.color.transparent,
                '    </button>',
                '  </div>',
                '  <div class="note-holder" data-event="backColor"/>',
                '</div>',
                '<div class="btn-group">',
                '  <div class="note-palette-title">' + lang.color.foreground + '</div>',
                '  <div>',
                '    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">',
                lang.color.resetToDefault,
                '    </button>',
                '  </div>',
                '  <div class="note-holder" data-event="foreColor"/>',
                '</div>',
                '</li>'
              ].join(''),
              callback: function ($dropdown) {
                $dropdown.find('.note-holder').each(function () {
                  var $holder = $(this);
                  $holder.append(ui.palette({
                    colors: options.colors,
                    eventName: $holder.data('event')
                  }).render());
                });
              },
              click: function (event) {
                var $button = $(event.target);
                var eventName = $button.data('event');
                var value = $button.data('value');

                if (eventName && value) {
                  var key = eventName === 'backColor' ? 'background-color' : 'color';
                  var $color = $button.closest('.note-color').find('.note-recent-color');
                  var $currentButton = $button.closest('.note-color').find('.note-current-color-button');

                  $color.css(key, value);
                  $currentButton.attr('data-' + eventName, value);
                  context.invoke('editor.' + eventName, value);
                }
              }
            })
          ]
        }).render();
      });

      context.memo('button.ul',  function () {
        return ui.button({
          contents: ui.icon(options.icons.unorderedlist),
          tooltip: lang.lists.unordered + representShortcut('insertUnorderedList'),
          click: context.createInvokeHandler('editor.insertUnorderedList')
        }).render();
      });

      context.memo('button.ol', function () {
        return ui.button({
          contents: ui.icon(options.icons.orderedlist),
          tooltip: lang.lists.ordered + representShortcut('insertOrderedList'),
          click:  context.createInvokeHandler('editor.insertOrderedList')
        }).render();
      });

      var justifyLeft = ui.button({
        contents: ui.icon(options.icons.alignLeft),
        tooltip: lang.paragraph.left + representShortcut('justifyLeft'),
        click: context.createInvokeHandler('editor.justifyLeft')
      });

      var justifyCenter = ui.button({
        contents: ui.icon(options.icons.alignCenter),
        tooltip: lang.paragraph.center + representShortcut('justifyCenter'),
        click: context.createInvokeHandler('editor.justifyCenter')
      });

      var justifyRight = ui.button({
        contents: ui.icon(options.icons.alignRight),
        tooltip: lang.paragraph.right + representShortcut('justifyRight'),
        click: context.createInvokeHandler('editor.justifyRight')
      });

      var justifyFull = ui.button({
        contents: ui.icon(options.icons.alignJustify),
        tooltip: lang.paragraph.justify + representShortcut('justifyFull'),
        click: context.createInvokeHandler('editor.justifyFull')
      });

      var outdent = ui.button({
        contents: ui.icon(options.icons.outdent),
        tooltip: lang.paragraph.outdent + representShortcut('outdent'),
        click: context.createInvokeHandler('editor.outdent')
      });

      var indent = ui.button({
        contents: ui.icon(options.icons.indent),
        tooltip: lang.paragraph.indent + representShortcut('indent'),
        click: context.createInvokeHandler('editor.indent')
      });

      context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
      context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
      context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
      context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
      context.memo('button.outdent', func.invoke(outdent, 'render'));
      context.memo('button.indent', func.invoke(indent, 'render'));

      context.memo('button.paragraph', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.alignLeft) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.paragraph.paragraph,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown([
            ui.buttonGroup({
              className: 'note-align',
              children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
            }),
            ui.buttonGroup({
              className: 'note-list',
              children: [outdent, indent]
            })
          ])
        ]).render();
      });

      context.memo('button.height', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.textHeight) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.font.height,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdownCheck({
            items: options.lineHeights,
            checkClassName: options.icons.menuCheck,
            className: 'dropdown-line-height',
            click: context.createInvokeHandler('editor.lineHeight')
          })
        ]).render();
      });

      context.memo('button.table', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: ui.icon(options.icons.table) + ' ' + ui.icon(options.icons.caret, 'span'),
            tooltip: lang.table.table,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'note-table',
            items: [
              '<div class="note-dimension-picker">',
              '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
              '  <div class="note-dimension-picker-highlighted"/>',
              '  <div class="note-dimension-picker-unhighlighted"/>',
              '</div>',
              '<div class="note-dimension-display">1 x 1</div>'
            ].join('')
          })
        ], {
          callback: function ($node) {
            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
            $catcher.css({
              width: options.insertTableMaxSize.col + 'em',
              height: options.insertTableMaxSize.row + 'em'
            }).mousedown(context.createInvokeHandler('editor.insertTable'))
              .on('mousemove', self.tableMoveHandler);
          }
        }).render();
      });

      context.memo('button.link', function () {
        return ui.button({
          contents: ui.icon(options.icons.link),
          tooltip: lang.link.link + representShortcut('linkDialog.show'),
          click: context.createInvokeHandler('linkDialog.show')
        }).render();
      });

      context.memo('button.picture', function () {
        return ui.button({
          contents: ui.icon(options.icons.picture),
          tooltip: lang.image.image,
          click: context.createInvokeHandler('imageDialog.show')
        }).render();
      });

      context.memo('button.video', function () {
        return ui.button({
          contents: ui.icon(options.icons.video),
          tooltip: lang.video.video,
          click: context.createInvokeHandler('videoDialog.show')
        }).render();
      });

      context.memo('button.hr', function () {
        return ui.button({
          contents: ui.icon(options.icons.minus),
          tooltip: lang.hr.insert + representShortcut('insertHorizontalRule'),
          click: context.createInvokeHandler('editor.insertHorizontalRule')
        }).render();
      });

      context.memo('button.fullscreen', function () {
        return ui.button({
          className: 'btn-fullscreen',
          contents: ui.icon(options.icons.arrowsAlt),
          tooltip: lang.options.fullscreen,
          click: context.createInvokeHandler('fullscreen.toggle')
        }).render();
      });

      context.memo('button.codeview', function () {
        return ui.button({
          className: 'btn-codeview',
          contents: ui.icon(options.icons.code),
          tooltip: lang.options.codeview,
          click: context.createInvokeHandler('codeview.toggle')
        }).render();
      });

      context.memo('button.redo', function () {
        return ui.button({
          contents: ui.icon(options.icons.redo),
          tooltip: lang.history.redo + representShortcut('redo'),
          click: context.createInvokeHandler('editor.redo')
        }).render();
      });

      context.memo('button.undo', function () {
        return ui.button({
          contents: ui.icon(options.icons.undo),
          tooltip: lang.history.undo + representShortcut('undo'),
          click: context.createInvokeHandler('editor.undo')
        }).render();
      });

      context.memo('button.help', function () {
        return ui.button({
          contents: ui.icon(options.icons.question),
          tooltip: lang.options.help,
          click: context.createInvokeHandler('helpDialog.show')
        }).render();
      });
    };

    /**
     * image : [
     *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
     *   ['remove', ['removeMedia']]
     * ],
     */
    this.addImagePopoverButtons = function () {
      // Image Size Buttons
      context.memo('button.imageSize100', function () {
        return ui.button({
          contents: '<span class="note-fontsize-10">100%</span>',
          tooltip: lang.image.resizeFull,
          click: context.createInvokeHandler('editor.resize', '1')
        }).render();
      });
      context.memo('button.imageSize50', function () {
        return  ui.button({
          contents: '<span class="note-fontsize-10">50%</span>',
          tooltip: lang.image.resizeHalf,
          click: context.createInvokeHandler('editor.resize', '0.5')
        }).render();
      });
      context.memo('button.imageSize25', function () {
        return ui.button({
          contents: '<span class="note-fontsize-10">25%</span>',
          tooltip: lang.image.resizeQuarter,
          click: context.createInvokeHandler('editor.resize', '0.25')
        }).render();
      });

      // Float Buttons
      context.memo('button.floatLeft', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignLeft),
          tooltip: lang.image.floatLeft,
          click: context.createInvokeHandler('editor.floatMe', 'left')
        }).render();
      });

      context.memo('button.floatRight', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignRight),
          tooltip: lang.image.floatRight,
          click: context.createInvokeHandler('editor.floatMe', 'right')
        }).render();
      });

      context.memo('button.floatNone', function () {
        return ui.button({
          contents: ui.icon(options.icons.alignJustify),
          tooltip: lang.image.floatNone,
          click: context.createInvokeHandler('editor.floatMe', 'none')
        }).render();
      });

      // Remove Buttons
      context.memo('button.removeMedia', function () {
        return ui.button({
          contents: ui.icon(options.icons.trash),
          tooltip: lang.image.remove,
          click: context.createInvokeHandler('editor.removeMedia')
        }).render();
      });
    };

    this.addLinkPopoverButtons = function () {
      context.memo('button.linkDialogShow', function () {
        return ui.button({
          contents: ui.icon(options.icons.link),
          tooltip: 'Link',
          // tooltip: lang.link.edit,
          click: context.createInvokeHandler('linkDialog.show')
        }).render();
      });

      context.memo('button.unlink', function () {
        return ui.button({
          contents: ui.icon(options.icons.unlink),
          tooltip: lang.link.unlink,
          click: context.createInvokeHandler('editor.unlink')
        }).render();
      });
    };

    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */
    this.addTablePopoverButtons = function () {
      context.memo('button.addRowUp', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowAbove),
          tooltip: lang.table.addRowAbove,
          click: context.createInvokeHandler('editor.addRow', 'top')
        }).render();
      });
      context.memo('button.addRowDown', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowBelow),
          tooltip: lang.table.addRowBelow,
          click: context.createInvokeHandler('editor.addRow', 'bottom')
        }).render();
      });
      context.memo('button.addColLeft', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colBefore),
          tooltip: lang.table.addColLeft,
          click: context.createInvokeHandler('editor.addCol', 'left')
        }).render();
      });
      context.memo('button.addColRight', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colAfter),
          tooltip: lang.table.addColRight,
          click: context.createInvokeHandler('editor.addCol', 'right')
        }).render();
      });
      context.memo('button.deleteRow', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.rowRemove),
          tooltip: lang.table.delRow,
          click: context.createInvokeHandler('editor.deleteRow')
        }).render();
      });
      context.memo('button.deleteCol', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.colRemove),
          tooltip: lang.table.delCol,
          click: context.createInvokeHandler('editor.deleteCol')
        }).render();
      });
      context.memo('button.deleteTable', function () {
        return ui.button({
          className: 'btn-md',
          contents: ui.icon(options.icons.trash),
          tooltip: lang.table.delTable,
          click: context.createInvokeHandler('editor.deleteTable')
        }).render();
      });
    };

    this.build = function ($container, groups) {
      for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
        var group = groups[groupIdx];
        var groupName = group[0];
        var buttons = group[1];

        var $group = ui.buttonGroup({
          className: 'note-' + groupName
        }).render();

        for (var idx = 0, len = buttons.length; idx < len; idx++) {
          var button = context.memo('button.' + buttons[idx]);
          if (button) {
            $group.append(typeof button === 'function' ? button(context) : button);
          }
        }
        $group.appendTo($container);
      }
    };

    this.updateCurrentStyle = function () {
      var styleInfo = context.invoke('editor.currentStyle');
      this.updateBtnStates({
        '.note-btn-bold': function () {
          return styleInfo['font-bold'] === 'bold';
        },
        '.note-btn-italic': function () {
          return styleInfo['font-italic'] === 'italic';
        },
        '.note-btn-underline': function () {
          return styleInfo['font-underline'] === 'underline';
        },
        '.note-btn-subscript': function () {
          return styleInfo['font-subscript'] === 'subscript';
        },
        '.note-btn-superscript': function () {
          return styleInfo['font-superscript'] === 'superscript';
        },
        '.note-btn-strikethrough': function () {
          return styleInfo['font-strikethrough'] === 'strikethrough';
        }
      });

      if (styleInfo['font-family']) {
        var fontNames = styleInfo['font-family'].split(',').map(function (name) {
          return name.replace(/[\'\"]/g, '')
            .replace(/\s+$/, '')
            .replace(/^\s+/, '');
        });
        var fontName = list.find(fontNames, self.isFontInstalled);

        $toolbar.find('.dropdown-fontname li a').each(function () {
          // always compare string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (fontName + '');
          this.className = isChecked ? 'checked' : '';
        });
        $toolbar.find('.note-current-fontname').text(fontName);
      }

      if (styleInfo['font-size']) {
        var fontSize = styleInfo['font-size'];
        $toolbar.find('.dropdown-fontsize li a').each(function () {
          // always compare with string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (fontSize + '');
          this.className = isChecked ? 'checked' : '';
        });
        $toolbar.find('.note-current-fontsize').text(fontSize);
      }

      if (styleInfo['line-height']) {
        var lineHeight = styleInfo['line-height'];
        $toolbar.find('.dropdown-line-height li a').each(function () {
          // always compare with string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (lineHeight + '');
          this.className = isChecked ? 'checked' : '';
        });
      }
    };

    this.updateBtnStates = function (infos) {
      $.each(infos, function (selector, pred) {
        ui.toggleBtnActive($toolbar.find(selector), pred());
      });
    };

    this.tableMoveHandler = function (event) {
      var PX_PER_EM = 18;
      var $picker = $(event.target.parentNode); // target is mousecatcher
      var $dimensionDisplay = $picker.next();
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

      var posOffset;
      // HTML5 with jQuery - e.offsetX is undefined in Firefox
      if (event.offsetX === undefined) {
        var posCatcher = $(event.target).offset();
        posOffset = {
          x: event.pageX - posCatcher.left,
          y: event.pageY - posCatcher.top
        };
      } else {
        posOffset = {
          x: event.offsetX,
          y: event.offsetY
        };
      }

      var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
      };

      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
      $catcher.data('value', dim.c + 'x' + dim.r);

      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
        $unhighlighted.css({ width: dim.c + 1 + 'em'});
      }

      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
        $unhighlighted.css({ height: dim.r + 1 + 'em'});
      }

      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    };
  };

  var Toolbar = function (context) {
    var ui = $.summernote.ui;

    var $note = context.layoutInfo.note;
    var $toolbar = context.layoutInfo.toolbar;
    var options = context.options;

    this.shouldInitialize = function () {
      return !options.airMode;
       // return true;
    };

    this.initialize = function () {
      options.toolbar = options.toolbar || [];

      if (!options.toolbar.length) {
        $toolbar.hide();
      } else {
        context.invoke('buttons.build', $toolbar, options.toolbar);
      }

      if (options.toolbarContainer) {
        $toolbar.appendTo(options.toolbarContainer);
      }

      $note.on('summernote.keyup summernote.mouseup summernote.change', function () {
        context.invoke('buttons.updateCurrentStyle');
      });

      context.invoke('buttons.updateCurrentStyle');
    };

    this.destroy = function () {
      $toolbar.children().remove();
    };

    this.updateFullscreen = function (isFullscreen) {
      ui.toggleBtnActive($toolbar.find('.btn-fullscreen'), isFullscreen);
    };

    this.updateCodeview = function (isCodeview) {
      ui.toggleBtnActive($toolbar.find('.btn-codeview'), isCodeview);
      if (isCodeview) {
        this.deactivate();
      } else {
        this.activate();
      }
    };

    this.activate = function (isIncludeCodeview) {
      var $btn = $toolbar.find('button');
      if (!isIncludeCodeview) {
        $btn = $btn.not('.btn-codeview');
      }
      ui.toggleBtn($btn, true);
    };

    this.deactivate = function (isIncludeCodeview) {
      var $btn = $toolbar.find('button');
      if (!isIncludeCodeview) {
        $btn = $btn.not('.btn-codeview');
      }
      ui.toggleBtn($btn, false);
    };
  };

  var LinkDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group">' +
                   '<label>' + lang.link.textToDisplay + '</label>' +
                   '<input class="note-link-text form-control" type="text" />' +
                 '</div>' +
                 '<div class="form-group">' +
                   '<label>' + lang.link.url + '</label>' +
                   '<input class="note-link-url form-control" type="text" value="http://" />' +
                 '</div>' +
                 (!options.disableLinkTarget ?
                   '<div class="checkbox" style="display:none">' +
                     '<label for="sn-checkbox-open-in-new-window">' +
                       '<input type="checkbox" id="sn-checkbox-open-in-new-window" checked />' + lang.link.openInNewWindow +
                     '</label>' +
                   '</div>' : ''
                 );


                 var specialKeys = new Array();
                       specialKeys.push(8); //Backspace
                       specialKeys.push(9); //Tab
                       specialKeys.push(46); //Delete
                       specialKeys.push(36); //Home
                       specialKeys.push(35); //End
                       specialKeys.push(37); //Left
                       specialKeys.push(39); //Right
                       specialKeys.push(32); //Right
                       function IsAlphaNumericWithSpace(e) {
                           var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
                           var ret = ((keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
                           // document.getElementById("error").style.display = ret ? "none" : "inline";
                           return ret;
                       }


      var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';

      this.$dialog = ui.dialog({
        className: 'link-dialog',
        title: lang.link.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    /**
     * toggle update button
     */
    this.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
      ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    };

    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */
    this.showLinkDialog = function (linkInfo) {
      return $.Deferred(function (deferred) {
        var $linkText = self.$dialog.find('.note-link-text'),
        $linkUrl = self.$dialog.find('.note-link-url'),
        $linkBtn = self.$dialog.find('.note-link-btn'),
        $openInNewWindow = self.$dialog.find('input[type=checkbox]');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          // if no url was given, copy text to url
          if (!linkInfo.url) {
            //linkInfo.url = linkInfo.text;
          }

          // checking for special characters before pasting the selected text in text field
          // var regex = new RegExp("^[0-9a-zA-Z \b]+$");
          //  if (!regex.test(linkInfo.text)) {
          //    $linkText.val('');
          //  }
          //  else {
             $linkText.val(linkInfo.text);
          //  }


          var handleLinkTextUpdate = function () {
            self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            // if linktext was modified by keyup,
            // stop cloning text from linkUrl
            linkInfo.text = $linkText.val();
          };

          $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
            setTimeout(handleLinkTextUpdate, 0);
          });

          var handleLinkUrlUpdate = function () {
            self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
            // display same link on `Text to display` input
            // when create a new link
            if (!linkInfo.text) {
              $linkText.val($linkUrl.val());
            }
          };

          $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
            setTimeout(handleLinkUrlUpdate, 0);
          }).val(linkInfo.url).trigger('focus');

          self.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          self.bindEnterKey($linkUrl, $linkBtn);
          self.bindEnterKey($linkText, $linkBtn);

          var isChecked = linkInfo.isNewWindow !== undefined ?
            linkInfo.isNewWindow : context.options.linkTargetBlank;

          $openInNewWindow.prop('checked', isChecked);

          $linkBtn.one('click', function (event) {
            event.preventDefault();

            deferred.resolve({
              range: linkInfo.range,
              url: $linkUrl.val(),
              text: $linkText.val(),
              isNewWindow: $openInNewWindow.is(':checked')
            });
            self.$dialog.modal('hide');
          });
        });

        ui.onDialogHidden(self.$dialog, function () {
          // detach events
          $linkText.off('input paste keypress');
          $linkUrl.off('input paste keypress');
          $linkBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      }).promise();
    };

    /**
     * @param {Object} layoutInfo
     */
    this.show = function () {
      var linkInfo = context.invoke('editor.getLinkInfo');

      context.invoke('editor.saveRange');
      this.showLinkDialog(linkInfo).then(function (linkInfo) {
        context.invoke('editor.restoreRange');
        context.invoke('editor.createLink', linkInfo);
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };
    context.memo('help.linkDialog.show', options.langInfo.help['linkDialog.show']);
  };

  var LinkPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
        self.update();
      },
      'summernote.disable summernote.dialog.shown': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.link);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-link-popover',
        callback: function ($node) {
          var $content = $node.find('.popover-content');
          $content.prepend('<span><a target="_blank" rel="nofollow"></a>&nbsp;</span>');
        }
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.link);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function () {
      // Prevent focusing on editable when invoke('code') is executed
      if (!context.invoke('editor.hasFocus')) {
        this.hide();
        return;
      }

      var rng = context.invoke('editor.createRange');
      if (rng.isCollapsed() && rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        var href = $(anchor).attr('href');
        this.$popover.find('a').attr('href', href).html(href);

        var pos = dom.posFromPlaceholder(anchor);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var ImageDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var imageLimitation = '';
      if (options.maximumImageFileSize) {
        var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
        var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                           ' ' + ' KMGTP'[unit] + 'B';
        imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
      }

      var body = '<div class="form-group note-group-select-from-files">' +
                   '<label>' + lang.image.selectFromFiles + '</label>' +
                   '<input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' +
                   imageLimitation +
                 '</div>' +
                 '<div class="form-group note-group-image-url" style="overflow:auto;">' +
                   '<label>' + lang.image.url + '</label>' +
                   '<input class="note-image-url form-control col-md-12" type="text" />' +
                 '</div>';
      var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.image.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    this.show = function () {
      context.invoke('editor.saveRange');
      this.showImageDialog().then(function (data) {
        // [workaround] hide dialog before restore range for IE range focus
        ui.hideDialog(self.$dialog);
        context.invoke('editor.restoreRange');

        if (typeof data === 'string') { // image url
          context.invoke('editor.insertImage', data);
        } else { // array of files
          context.invoke('editor.insertImagesOrCallback', data);
        }
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };

    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    this.showImageDialog = function () {
      return $.Deferred(function (deferred) {
        var $imageInput = self.$dialog.find('.note-image-input'),
            $imageUrl = self.$dialog.find('.note-image-url'),
            $imageBtn = self.$dialog.find('.note-image-btn');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          // Cloning imageInput to clear element.
          $imageInput.replaceWith($imageInput.clone()
            .on('change', function () {
              deferred.resolve(this.files || this.value);
            })
            .val('')
          );

          $imageBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($imageUrl.val());
          });

          $imageUrl.on('keyup paste', function () {
            var url = $imageUrl.val();
            ui.toggleBtn($imageBtn, url);
          }).val('').trigger('focus');
          self.bindEnterKey($imageUrl, $imageBtn);
        });

        ui.onDialogHidden(self.$dialog, function () {
          $imageInput.off('change');
          $imageUrl.off('keyup paste keypress');
          $imageBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };


  /**
   * Image popover module
   *  mouse events that show/hide popover will be handled by Handle.js.
   *  Handle.js will receive the events and invoke 'imagePopover.update'.
   */
  var ImagePopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.image);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-image-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.image);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function (target) {
      if (dom.isImg(target)) {
        var pos = dom.posFromPlaceholder(target);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var TablePopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    this.events = {
      'summernote.mousedown': function (we, e) {
        self.update(e.target);
      },
      'summernote.keyup summernote.scroll summernote.change': function () {
        self.update();
      },
      'summernote.disable': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return !list.isEmpty(options.popover.table);
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-table-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.table);

      // [workaround] Disable Firefox's default table editor
      if (agent.isFF) {
        document.execCommand('enableInlineTableEditing', false, false);
      }
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function (target) {
      if (context.isDisabled()) {
        return false;
      }

      var isCell = dom.isCell(target);

      if (isCell) {
        var pos = dom.posFromPlaceholder(target);
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }

      return isCell;
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var VideoDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = '<div class="form-group row-fluid">' +
          '<label>' + lang.video.url + ' <small class="text-muted">' + lang.video.providers + '</small></label>' +
          '<input class="note-video-url form-control span12" type="text" />' +
          '</div>';
      var footer = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + lang.video.insert + '</button>';

      this.$dialog = ui.dialog({
        title: lang.video.insert,
        fade: options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    this.bindEnterKey = function ($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === key.code.ENTER) {
          $btn.trigger('click');
        }
      });
    };

    this.createVideoNode = function (url) {
      // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
      var ytRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      var ytMatch = url.match(ytRegExp);

      var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
      var igMatch = url.match(igRegExp);

      var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
      var vMatch = url.match(vRegExp);

      var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
      var vimMatch = url.match(vimRegExp);

      var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
      var dmMatch = url.match(dmRegExp);

      var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
      var youkuMatch = url.match(youkuRegExp);

      var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
      var qqMatch = url.match(qqRegExp);

      var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
      var qqMatch2 = url.match(qqRegExp2);

      var mp4RegExp = /^.+.(mp4|m4v)$/;
      var mp4Match = url.match(mp4RegExp);

      var oggRegExp = /^.+.(ogg|ogv)$/;
      var oggMatch = url.match(oggRegExp);

      var webmRegExp = /^.+.(webm)$/;
      var webmMatch = url.match(webmRegExp);

      var $video;
      if (ytMatch && ytMatch[1].length === 11) {
        var youtubeId = ytMatch[1];
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', '//www.youtube.com/embed/' + youtubeId)
            .attr('width', '640').attr('height', '360');
      } else if (igMatch && igMatch[0].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
            .attr('width', '612').attr('height', '710')
            .attr('scrolling', 'no')
            .attr('allowtransparency', 'true');
      } else if (vMatch && vMatch[0].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', vMatch[0] + '/embed/simple')
            .attr('width', '600').attr('height', '600')
            .attr('class', 'vine-embed');
      } else if (vimMatch && vimMatch[3].length) {
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
            .attr('width', '640').attr('height', '360');
      } else if (dmMatch && dmMatch[2].length) {
        $video = $('<iframe>')
            .attr('frameborder', 0)
            .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
            .attr('width', '640').attr('height', '360');
      } else if (youkuMatch && youkuMatch[1].length) {
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('height', '498')
            .attr('width', '510')
            .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
      } else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
        var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1]:qqMatch2[2]);
        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
            .attr('frameborder', 0)
            .attr('height', '310')
            .attr('width', '500')
            .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
      } else if (mp4Match || oggMatch || webmMatch) {
        $video = $('<video controls>')
            .attr('src', url)
            .attr('width', '640').attr('height', '360');
      } else {
        // this is not a known video link. Now what, Cat? Now what?
        return false;
      }

      $video.addClass('note-video-clip');

      return $video[0];
    };

    this.show = function () {
      var text = context.invoke('editor.getSelectedText');
      context.invoke('editor.saveRange');
      this.showVideoDialog(text).then(function (url) {
        // [workaround] hide dialog before restore range for IE range focus
        ui.hideDialog(self.$dialog);
        context.invoke('editor.restoreRange');

        // build node
        var $node = self.createVideoNode(url);

        if ($node) {
          // insert video node
          context.invoke('editor.insertNode', $node);
        }
      }).fail(function () {
        context.invoke('editor.restoreRange');
      });
    };

    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */
    this.showVideoDialog = function (text) {
      return $.Deferred(function (deferred) {
        var $videoUrl = self.$dialog.find('.note-video-url'),
            $videoBtn = self.$dialog.find('.note-video-btn');

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');

          $videoUrl.val(text).on('input', function () {
            ui.toggleBtn($videoBtn, $videoUrl.val());
          }).trigger('focus');

          $videoBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($videoUrl.val());
          });

          self.bindEnterKey($videoUrl, $videoBtn);
        });

        ui.onDialogHidden(self.$dialog, function () {
          $videoUrl.off('input');
          $videoBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };

  var HelpDialog = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var $editor = context.layoutInfo.editor;
    var options = context.options;
    var lang = options.langInfo;

    this.createShortCutList = function () {
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      return Object.keys(keyMap).map(function (key) {
        var command = keyMap[key];
        var $row = $('<div><div class="help-list-item"/></div>');
        $row.append($('<label><kbd>' + key + '</kdb></label>').css({
          'width': 180,
          'margin-right': 10
        })).append($('<span/>').html(context.memo('help.' + command) || command));
        return $row.html();
      }).join('');
    };

    this.initialize = function () {
      var $container = options.dialogsInBody ? $(document.body) : $editor;

      var body = [
        '<p class="text-center">',
        '<a href="http://summernote.org/" target="_blank">Summernote 0.8.6</a> · ',
        '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
        '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
        '</p>'
      ].join('');

      this.$dialog = ui.dialog({
        title: lang.options.help,
        fade: options.dialogsFade,
        body: this.createShortCutList(),
        footer: body,
        callback: function ($node) {
          $node.find('.modal-body').css({
            'max-height': 300,
            'overflow': 'scroll'
          });
        }
      }).render().appendTo($container);
    };

    this.destroy = function () {
      ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    };

    /**
     * show help dialog
     *
     * @return {Promise}
     */
    this.showHelpDialog = function () {
      return $.Deferred(function (deferred) {
        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent('dialog.shown');
          deferred.resolve();
        });
        ui.showDialog(self.$dialog);
      }).promise();
    };

    this.show = function () {
      context.invoke('editor.saveRange');
      this.showHelpDialog().then(function () {
        context.invoke('editor.restoreRange');
      });
    };
  };

  var AirPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var options = context.options;

    var AIR_MODE_POPOVER_X_OFFSET = 20;

    this.events = {
      'summernote.keyup summernote.mouseup summernote.scroll': function () {
        self.update();
      },
      'summernote.disable summernote.change summernote.dialog.shown': function () {
        self.hide();
      },
      'summernote.focusout': function (we, e) {
        // [workaround] Firefox doesn't support relatedTarget on focusout
        //  - Ignore hide action on focus out in FF.
        if (agent.isFF) {
          return;
        }

        if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(self.$popover[0]))) {
          self.hide();
        }
      }
    };

    this.shouldInitialize = function () {
      return options.airMode && !list.isEmpty(options.popover.air);
         // return true;
    };

    this.initialize = function () {
      this.$popover = ui.popover({
        className: 'note-air-popover'
      }).render().appendTo('body');
      var $content = this.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.air);
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.update = function () {
      var styleInfo = context.invoke('editor.currentStyle');
      if (styleInfo.range && !styleInfo.range.isCollapsed()) {
        var rect = list.last(styleInfo.range.getClientRects());
        if (rect) {
          var bnd = func.rect2bnd(rect);
          this.$popover.css({
            display: 'block',
            left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
            top: bnd.top + bnd.height
          });
        }
      } else {
        this.hide();
      }
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };

  var HintPopover = function (context) {
    var self = this;
    var ui = $.summernote.ui;

    var POPOVER_DIST = 5;
    var hint = context.options.hint || [];
    var direction = context.options.hintDirection || 'bottom';
    var hints = $.isArray(hint) ? hint : [hint];

    this.events = {
      'summernote.keyup': function (we, e) {
        if (!e.isDefaultPrevented()) {
          self.handleKeyup(e);
        }
      },
      'summernote.keydown': function (we, e) {
        self.handleKeydown(e);
      },
      'summernote.disable summernote.dialog.shown': function () {
        self.hide();
      }
    };

    this.shouldInitialize = function () {
      return hints.length > 0;
    };

    this.initialize = function () {
      this.lastWordRange = null;
      this.$popover = ui.popover({
        className: 'note-hint-popover',
        hideArrow: true,
        direction: ''
      }).render().appendTo('body');

      this.$popover.hide();

      this.$content = this.$popover.find('.popover-content');

      this.$content.on('click', '.note-hint-item', function () {
        self.$content.find('.active').removeClass('active');
        $(this).addClass('active');
        self.replace();
      });
    };

    this.destroy = function () {
      this.$popover.remove();
    };

    this.selectItem = function ($item) {
      this.$content.find('.active').removeClass('active');
      $item.addClass('active');

      this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
    };

    this.moveDown = function () {
      var $current = this.$content.find('.note-hint-item.active');
      var $next = $current.next();

      if ($next.length) {
        this.selectItem($next);
      } else {
        var $nextGroup = $current.parent().next();

        if (!$nextGroup.length) {
          $nextGroup = this.$content.find('.note-hint-group').first();
        }

        this.selectItem($nextGroup.find('.note-hint-item').first());
      }
    };

    this.moveUp = function () {
      var $current = this.$content.find('.note-hint-item.active');
      var $prev = $current.prev();

      if ($prev.length) {
        this.selectItem($prev);
      } else {
        var $prevGroup = $current.parent().prev();

        if (!$prevGroup.length) {
          $prevGroup = this.$content.find('.note-hint-group').last();
        }

        this.selectItem($prevGroup.find('.note-hint-item').last());
      }
    };

    this.replace = function () {
      var $item = this.$content.find('.note-hint-item.active');

      if ($item.length) {
        var node = this.nodeFromItem($item);
        // XXX: consider to move codes to editor for recording redo/undo.
        this.lastWordRange.insertNode(node);
        range.createFromNode(node).collapse().select();

        this.lastWordRange = null;
        this.hide();
        context.triggerEvent('change', context.layoutInfo.editable.html(), context.layoutInfo.editable);
        context.invoke('editor.focus');
      }

    };

    this.nodeFromItem = function ($item) {
      var hint = hints[$item.data('index')];
      var item = $item.data('item');
      var node = hint.content ? hint.content(item) : item;
      if (typeof node === 'string') {
        node = dom.createText(node);
      }
      return node;
    };

    this.createItemTemplates = function (hintIdx, items) {
      var hint = hints[hintIdx];
      return items.map(function (item, idx) {
        var $item = $('<div class="note-hint-item"/>');
        $item.append(hint.template ? hint.template(item) : item + '');
        $item.data({
          'index': hintIdx,
          'item': item
        });

        if (hintIdx === 0 && idx === 0) {
          $item.addClass('active');
        }
        return $item;
      });
    };

    this.handleKeydown = function (e) {
      if (!this.$popover.is(':visible')) {
        return;
      }

      if (e.keyCode === key.code.ENTER) {
        e.preventDefault();
        this.replace();
      } else if (e.keyCode === key.code.UP) {
        e.preventDefault();
        this.moveUp();
      } else if (e.keyCode === key.code.DOWN) {
        e.preventDefault();
        this.moveDown();
      }
    };

    this.searchKeyword = function (index, keyword, callback) {
      var hint = hints[index];
      if (hint && hint.match.test(keyword) && hint.search) {
        var matches = hint.match.exec(keyword);
        hint.search(matches[1], callback);
      } else {
        callback();
      }
    };

    this.createGroup = function (idx, keyword) {
      var $group = $('<div class="note-hint-group note-hint-group-' + idx + '"/>');
      this.searchKeyword(idx, keyword, function (items) {
        items = items || [];
        if (items.length) {
          $group.html(self.createItemTemplates(idx, items));
          self.show();
        }
      });

      return $group;
    };

    this.handleKeyup = function (e) {
      if (list.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
        if (e.keyCode === key.code.ENTER) {
          if (this.$popover.is(':visible')) {
            return;
          }
        }
      } else {
        var wordRange = context.invoke('editor.createRange').getWordRange();
        var keyword = wordRange.toString();
        if (hints.length && keyword) {
          this.$content.empty();

          var bnd = func.rect2bnd(list.last(wordRange.getClientRects()));
          if (bnd) {

            this.$popover.hide();

            this.lastWordRange = wordRange;

            hints.forEach(function (hint, idx) {
              if (hint.match.test(keyword)) {
                self.createGroup(idx, keyword).appendTo(self.$content);
              }
            });

            // set position for popover after group is created
            if (direction === 'top') {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
              });
            } else {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top + bnd.height + POPOVER_DIST
              });
            }

          }
        } else {
          this.hide();
        }
      }
    };

    this.show = function () {
      this.$popover.show();
    };

    this.hide = function () {
      this.$popover.hide();
    };
  };


  $.summernote = $.extend($.summernote, {
    version: '0.8.6',
    ui: ui,
    dom: dom,

    plugins: {},

    options: {
      modules: {
        'editor': Editor,
        'clipboard': Clipboard,
        'dropzone': Dropzone,
        'codeview': Codeview,
        'statusbar': Statusbar,
        'fullscreen': Fullscreen,
        'handle': Handle,
        // FIXME: HintPopover must be front of autolink
        //  - Script error about range when Enter key is pressed on hint popover
        'hintPopover': HintPopover,
        'autoLink': AutoLink,
        'autoSync': AutoSync,
        'placeholder': Placeholder,
        'buttons': Buttons,
        'toolbar': Toolbar,
        'linkDialog': LinkDialog,
        'linkPopover': LinkPopover,
        'imageDialog': ImageDialog,
        'imagePopover': ImagePopover,
        'tablePopover': TablePopover,
        'videoDialog': VideoDialog,
        'helpDialog': HelpDialog,
        'airPopover': AirPopover
      },

      buttons: {},

      lang: 'en-US',

      // toolbar
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        // ['fontname', ['fontname']],
        // ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        // ['table', ['table']],
        // ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
        // ['link', ['linkDialogShow', 'unlink']]
      ],

      // popover
      popover: {
        image: [
          ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
          ['float', ['floatLeft', 'floatRight', 'floatNone']],
          ['remove', ['removeMedia']]
        ],
        link: [
          ['link', ['linkDialogShow', 'unlink']]
        ],
        table: [
          ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
          ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
        ],
        air: [
          ['color', ['color']],
          ['font', ['bold', 'underline', 'clear']],
          ['para', ['ul', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture']]
        ]
      },

      // air mode: inline editor
      airMode: false,

      width: null,
      height: null,
      linkTargetBlank: true,

      focus: false,
      tabSize: 4,
      styleWithSpan: true,
      shortcuts: true,
      textareaAutoSync: true,
      direction: null,
      tooltip: 'auto',

      styleTags: ['p', 'h1', 'h2', 'h4'],

      fontNames: [
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
        'Tahoma', 'Times New Roman', 'Verdana'
      ],

      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],

      // pallete colors(n x n)
      colors: [
        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
      ],

      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

      tableClassName: 'table table-bordered',

      insertTableMaxSize: {
        col: 10,
        row: 10
      },

      dialogsInBody: false,
      dialogsFade: false,

      maximumImageFileSize: null,

      callbacks: {
        onInit: null,
        onFocus: null,
        onBlur: null,
        onEnter: null,
        onKeyup: null,
        onKeydown: null,
        onImageUpload: null,
        onImageUploadError: null
      },

      codemirror: {
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true
      },

      keyMap: {
        pc: {
          'ENTER': 'insertParagraph',
          'CTRL+Z': 'undo',
          'CTRL+Y': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CTRL+B': 'bold',
          'CTRL+I': 'italic',
          'CTRL+U': 'underline',
          'CTRL+SHIFT+S': 'strikethrough',
          'CTRL+BACKSLASH': 'removeFormat',
          'CTRL+SHIFT+L': 'justifyLeft',
          'CTRL+SHIFT+E': 'justifyCenter',
          'CTRL+SHIFT+R': 'justifyRight',
          'CTRL+SHIFT+J': 'justifyFull',
          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
          'CTRL+SHIFT+NUM8': 'insertOrderedList',
          'CTRL+LEFTBRACKET': 'outdent',
          'CTRL+RIGHTBRACKET': 'indent',
          'CTRL+NUM0': 'formatPara',
          'CTRL+NUM1': 'formatH1',
          'CTRL+NUM2': 'formatH2',
          // 'CTRL+NUM3': 'formatH3',
          'CTRL+NUM4': 'formatH4',
          // 'CTRL+NUM5': 'formatH5',
          // 'CTRL+NUM6': 'formatH6',
          'CTRL+ENTER': 'insertHorizontalRule',
          'CTRL+K': 'linkDialog.show'
        },

        mac: {
          'ENTER': 'insertParagraph',
          'CMD+Z': 'undo',
          'CMD+SHIFT+Z': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CMD+B': 'bold',
          'CMD+I': 'italic',
          'CMD+U': 'underline',
          'CMD+SHIFT+S': 'strikethrough',
          'CMD+BACKSLASH': 'removeFormat',
          'CMD+SHIFT+L': 'justifyLeft',
          'CMD+SHIFT+E': 'justifyCenter',
          'CMD+SHIFT+R': 'justifyRight',
          'CMD+SHIFT+J': 'justifyFull',
          'CMD+SHIFT+NUM7': 'insertUnorderedList',
          'CMD+SHIFT+NUM8': 'insertOrderedList',
          'CMD+LEFTBRACKET': 'outdent',
          'CMD+RIGHTBRACKET': 'indent',
          'CMD+NUM0': 'formatPara',
          'CMD+NUM1': 'formatH1',
          'CMD+NUM2': 'formatH2',
          // 'CMD+NUM3': 'formatH3',
          'CMD+NUM4': 'formatH4',
          // 'CMD+NUM5': 'formatH5',
          // 'CMD+NUM6': 'formatH6',
          'CMD+ENTER': 'insertHorizontalRule',
          'CMD+K': 'linkDialog.show'
        }
      },
      icons: {
        'align': 'note-icon-align',
        'alignCenter': 'note-icon-align-center',
        'alignJustify': 'note-icon-align-justify',
        'alignLeft': 'note-icon-align-left',
        'alignRight': 'note-icon-align-right',
        'rowBelow': 'note-icon-row-below',
        'colBefore': 'note-icon-col-before',
        'colAfter': 'note-icon-col-after',
        'rowAbove': 'note-icon-row-above',
        'rowRemove': 'note-icon-row-remove',
        'colRemove': 'note-icon-col-remove',
        'indent': 'note-icon-align-indent',
        'outdent': 'note-icon-align-outdent',
        'arrowsAlt': 'note-icon-arrows-alt',
        'bold': 'note-icon-bold',
        'caret': 'note-icon-caret',
        'circle': 'note-icon-circle',
        'close': 'note-icon-close',
        'code': 'note-icon-code',
        'eraser': 'note-icon-eraser',
        'font': 'note-icon-font',
        'frame': 'note-icon-frame',
        'italic': 'note-icon-italic',
        'link': 'note-icon-link',
        'unlink': 'note-icon-chain-broken',
        'magic': 'note-icon-magic',
        'menuCheck': 'note-icon-check',
        'minus': 'note-icon-minus',
        'orderedlist': 'note-icon-orderedlist',
        'pencil': 'note-icon-pencil',
        'picture': 'note-icon-picture',
        'question': 'note-icon-question',
        'redo': 'note-icon-redo',
        'square': 'note-icon-square',
        'strikethrough': 'note-icon-strikethrough',
        'subscript': 'note-icon-subscript',
        'superscript': 'note-icon-superscript',
        'table': 'note-icon-table',
        'textHeight': 'note-icon-text-height',
        'trash': 'note-icon-trash',
        'underline': 'note-icon-underline',
        'undo': 'note-icon-undo',
        'unorderedlist': 'note-icon-unorderedlist',
        'video': 'note-icon-video'
      }
    }
  });

}));
'use strict';
var Config = {};
Config.Emoji = {
    "00a9": ["\u00A9", ["copyright"]],
    "00ae": ["\u00AE", ["registered"]],
    "203c": ["\u203C", ["bangbang"]],
    "2049": ["\u2049", ["interrobang"]],
    "2122": ["\u2122", ["tm"]],
    "2139": ["\u2139", ["information_source"]],
    "2194": ["\u2194", ["left_right_arrow"]],
    "2195": ["\u2195", ["arrow_up_down"]],
    "2196": ["\u2196", ["arrow_upper_left"]],
    "2197": ["\u2197", ["arrow_upper_right"]],
    "2198": ["\u2198", ["arrow_lower_right"]],
    "2199": ["\u2199", ["arrow_lower_left"]],
    "21a9": ["\u21A9", ["leftwards_arrow_with_hook"]],
    "21aa": ["\u21AA", ["arrow_right_hook"]],
    "231a": ["\u231A", ["watch"]],
    "231b": ["\u231B", ["hourglass"]],
    "23e9": ["\u23E9", ["fast_forward"]],
    "23ea": ["\u23EA", ["rewind"]],
    "23eb": ["\u23EB", ["arrow_double_up"]],
    "23ec": ["\u23EC", ["arrow_double_down"]],
    "23f0": ["\u23F0", ["alarm_clock"]],
    "23f3": ["\u23F3", ["hourglass_flowing_sand"]],
    "24c2": ["\u24C2", ["m"]],
    "25aa": ["\u25AA", ["black_small_square"]],
    "25ab": ["\u25AB", ["white_small_square"]],
    "25b6": ["\u25B6", ["arrow_forward"]],
    "25c0": ["\u25C0", ["arrow_backward"]],
    "25fb": ["\u25FB", ["white_medium_square"]],
    "25fc": ["\u25FC", ["black_medium_square"]],
    "25fd": ["\u25FD", ["white_medium_small_square"]],
    "25fe": ["\u25FE", ["black_medium_small_square"]],
    "2600": ["\u2600", ["sunny"]],
    "2601": ["\u2601", ["cloud"]],
    "260e": ["\u260E", ["phone", "telephone"]],
    "2611": ["\u2611", ["ballot_box_with_check"]],
    "2614": ["\u2614", ["umbrella"]],
    "2615": ["\u2615", ["coffee"]],
    "261d": ["\u261D", ["point_up"]],
    "263a": ["\u263A", ["relaxed"]],
    "2648": ["\u2648", ["aries"]],
    "2649": ["\u2649", ["taurus"]],
    "264a": ["\u264A", ["gemini"]],
    "264b": ["\u264B", ["cancer"]],
    "264c": ["\u264C", ["leo"]],
    "264d": ["\u264D", ["virgo"]],
    "264e": ["\u264E", ["libra"]],
    "264f": ["\u264F", ["scorpius"]],
    "2650": ["\u2650", ["sagittarius"]],
    "2651": ["\u2651", ["capricorn"]],
    "2652": ["\u2652", ["aquarius"]],
    "2653": ["\u2653", ["pisces"]],
    "2660": ["\u2660", ["spades"]],
    "2663": ["\u2663", ["clubs"]],
    "2665": ["\u2665", ["hearts"]],
    "2666": ["\u2666", ["diamonds"]],
    "2668": ["\u2668", ["hotsprings"]],
    "267b": ["\u267B", ["recycle"]],
    "267f": ["\u267F", ["wheelchair"]],
    "2693": ["\u2693", ["anchor"]],
    "26a0": ["\u26A0", ["warning"]],
    "26a1": ["\u26A1", ["zap"]],
    "26aa": ["\u26AA", ["white_circle"]],
    "26ab": ["\u26AB", ["black_circle"]],
    "26bd": ["\u26BD", ["soccer"]],
    "26be": ["\u26BE", ["baseball"]],
    "26c4": ["\u26C4", ["snowman"]],
    "26c5": ["\u26C5", ["partly_sunny"]],
    "26ce": ["\u26CE", ["ophiuchus"]],
    "26d4": ["\u26D4", ["no_entry"]],
    "26ea": ["\u26EA", ["church"]],
    "26f2": ["\u26F2", ["fountain"]],
    "26f3": ["\u26F3", ["golf"]],
    "26f5": ["\u26F5", ["boat", "sailboat"]],
    "26fa": ["\u26FA", ["tent"]],
    "26fd": ["\u26FD", ["fuelpump"]],
    "2702": ["\u2702", ["scissors"]],
    "2705": ["\u2705", ["white_check_mark"]],
    "2708": ["\u2708", ["airplane"]],
    "2709": ["\u2709", ["email", "envelope"]],
    "270a": ["\u270A", ["fist"]],
    "270b": ["\u270B", ["hand", "raised_hand"]],
    "270c": ["\u270C", ["v"]],
    "270f": ["\u270F", ["pencil2"]],
    "2712": ["\u2712", ["black_nib"]],
    "2714": ["\u2714", ["heavy_check_mark"]],
    "2716": ["\u2716", ["heavy_multiplication_x"]],
    "2728": ["\u2728", ["sparkles"]],
    "2733": ["\u2733", ["eight_spoked_asterisk"]],
    "2734": ["\u2734", ["eight_pointed_black_star"]],
    "2744": ["\u2744", ["snowflake"]],
    "2747": ["\u2747", ["sparkle"]],
    "274c": ["\u274C", ["x"]],
    "274e": ["\u274E", ["negative_squared_cross_mark"]],
    "2753": ["\u2753", ["question"]],
    "2754": ["\u2754", ["grey_question"]],
    "2755": ["\u2755", ["grey_exclamation"]],
    "2757": ["\u2757", ["exclamation", "heavy_exclamation_mark"]],
    "2764": ["\u2764", ["heart"], "<3"],
    "2795": ["\u2795", ["heavy_plus_sign"]],
    "2796": ["\u2796", ["heavy_minus_sign"]],
    "2797": ["\u2797", ["heavy_division_sign"]],
    "27a1": ["\u27A1", ["arrow_right"]],
    "27b0": ["\u27B0", ["curly_loop"]],
    "27bf": ["\u27BF", ["loop"]],
    "2934": ["\u2934", ["arrow_heading_up"]],
    "2935": ["\u2935", ["arrow_heading_down"]],
    "2b05": ["\u2B05", ["arrow_left"]],
    "2b06": ["\u2B06", ["arrow_up"]],
    "2b07": ["\u2B07", ["arrow_down"]],
    "2b1b": ["\u2B1B", ["black_large_square"]],
    "2b1c": ["\u2B1C", ["white_large_square"]],
    "2b50": ["\u2B50", ["star"]],
    "2b55": ["\u2B55", ["o"]],
    "3030": ["\u3030", ["wavy_dash"]],
    "303d": ["\u303D", ["part_alternation_mark"]],
    "3297": ["\u3297", ["congratulations"]],
    "3299": ["\u3299", ["secret"]],
    "1f004": ["\uD83C\uDC04", ["mahjong"]],
    "1f0cf": ["\uD83C\uDCCF", ["black_joker"]],
    "1f170": ["\uD83C\uDD70", ["a"]],
    "1f171": ["\uD83C\uDD71", ["b"]],
    "1f17e": ["\uD83C\uDD7E", ["o2"]],
    "1f17f": ["\uD83C\uDD7F", ["parking"]],
    "1f18e": ["\uD83C\uDD8E", ["ab"]],
    "1f191": ["\uD83C\uDD91", ["cl"]],
    "1f192": ["\uD83C\uDD92", ["cool"]],
    "1f193": ["\uD83C\uDD93", ["free"]],
    "1f194": ["\uD83C\uDD94", ["id"]],
    "1f195": ["\uD83C\uDD95", ["new"]],
    "1f196": ["\uD83C\uDD96", ["ng"]],
    "1f197": ["\uD83C\uDD97", ["ok"]],
    "1f198": ["\uD83C\uDD98", ["sos"]],
    "1f199": ["\uD83C\uDD99", ["up"]],
    "1f19a": ["\uD83C\uDD9A", ["vs"]],
    "1f201": ["\uD83C\uDE01", ["koko"]],
    "1f202": ["\uD83C\uDE02", ["sa"]],
    "1f21a": ["\uD83C\uDE1A", ["u7121"]],
    "1f22f": ["\uD83C\uDE2F", ["u6307"]],
    "1f232": ["\uD83C\uDE32", ["u7981"]],
    "1f233": ["\uD83C\uDE33", ["u7a7a"]],
    "1f234": ["\uD83C\uDE34", ["u5408"]],
    "1f235": ["\uD83C\uDE35", ["u6e80"]],
    "1f236": ["\uD83C\uDE36", ["u6709"]],
    "1f237": ["\uD83C\uDE37", ["u6708"]],
    "1f238": ["\uD83C\uDE38", ["u7533"]],
    "1f239": ["\uD83C\uDE39", ["u5272"]],
    "1f23a": ["\uD83C\uDE3A", ["u55b6"]],
    "1f250": ["\uD83C\uDE50", ["ideograph_advantage"]],
    "1f251": ["\uD83C\uDE51", ["accept"]],
    "1f300": ["\uD83C\uDF00", ["cyclone"]],
    "1f301": ["\uD83C\uDF01", ["foggy"]],
    "1f302": ["\uD83C\uDF02", ["closed_umbrella"]],
    "1f303": ["\uD83C\uDF03", ["night_with_stars"]],
    "1f304": ["\uD83C\uDF04", ["sunrise_over_mountains"]],
    "1f305": ["\uD83C\uDF05", ["sunrise"]],
    "1f306": ["\uD83C\uDF06", ["city_sunset"]],
    "1f307": ["\uD83C\uDF07", ["city_sunrise"]],
    "1f308": ["\uD83C\uDF08", ["rainbow"]],
    "1f309": ["\uD83C\uDF09", ["bridge_at_night"]],
    "1f30a": ["\uD83C\uDF0A", ["ocean"]],
    "1f30b": ["\uD83C\uDF0B", ["volcano"]],
    "1f30c": ["\uD83C\uDF0C", ["milky_way"]],
    "1f30d": ["\uD83C\uDF0D", ["earth_africa"]],
    "1f30e": ["\uD83C\uDF0E", ["earth_americas"]],
    "1f30f": ["\uD83C\uDF0F", ["earth_asia"]],
    "1f310": ["\uD83C\uDF10", ["globe_with_meridians"]],
    "1f311": ["\uD83C\uDF11", ["new_moon"]],
    "1f312": ["\uD83C\uDF12", ["waxing_crescent_moon"]],
    "1f313": ["\uD83C\uDF13", ["first_quarter_moon"]],
    "1f314": ["\uD83C\uDF14", ["moon", "waxing_gibbous_moon"]],
    "1f315": ["\uD83C\uDF15", ["full_moon"]],
    "1f316": ["\uD83C\uDF16", ["waning_gibbous_moon"]],
    "1f317": ["\uD83C\uDF17", ["last_quarter_moon"]],
    "1f318": ["\uD83C\uDF18", ["waning_crescent_moon"]],
    "1f319": ["\uD83C\uDF19", ["crescent_moon"]],
    "1f320": ["\uD83C\uDF20", ["stars"]],
    "1f31a": ["\uD83C\uDF1A", ["new_moon_with_face"]],
    "1f31b": ["\uD83C\uDF1B", ["first_quarter_moon_with_face"]],
    "1f31c": ["\uD83C\uDF1C", ["last_quarter_moon_with_face"]],
    "1f31d": ["\uD83C\uDF1D", ["full_moon_with_face"]],
    "1f31e": ["\uD83C\uDF1E", ["sun_with_face"]],
    "1f31f": ["\uD83C\uDF1F", ["star2"]],
    "1f330": ["\uD83C\uDF30", ["chestnut"]],
    "1f331": ["\uD83C\uDF31", ["seedling"]],
    "1f332": ["\uD83C\uDF32", ["evergreen_tree"]],
    "1f333": ["\uD83C\uDF33", ["deciduous_tree"]],
    "1f334": ["\uD83C\uDF34", ["palm_tree"]],
    "1f335": ["\uD83C\uDF35", ["cactus"]],
    "1f337": ["\uD83C\uDF37", ["tulip"]],
    "1f338": ["\uD83C\uDF38", ["cherry_blossom"]],
    "1f339": ["\uD83C\uDF39", ["rose"]],
    "1f33a": ["\uD83C\uDF3A", ["hibiscus"]],
    "1f33b": ["\uD83C\uDF3B", ["sunflower"]],
    "1f33c": ["\uD83C\uDF3C", ["blossom"]],
    "1f33d": ["\uD83C\uDF3D", ["corn"]],
    "1f33e": ["\uD83C\uDF3E", ["ear_of_rice"]],
    "1f33f": ["\uD83C\uDF3F", ["herb"]],
    "1f340": ["\uD83C\uDF40", ["four_leaf_clover"]],
    "1f341": ["\uD83C\uDF41", ["maple_leaf"]],
    "1f342": ["\uD83C\uDF42", ["fallen_leaf"]],
    "1f343": ["\uD83C\uDF43", ["leaves"]],
    "1f344": ["\uD83C\uDF44", ["mushroom"]],
    "1f345": ["\uD83C\uDF45", ["tomato"]],
    "1f346": ["\uD83C\uDF46", ["eggplant"]],
    "1f347": ["\uD83C\uDF47", ["grapes"]],
    "1f348": ["\uD83C\uDF48", ["melon"]],
    "1f349": ["\uD83C\uDF49", ["watermelon"]],
    "1f34a": ["\uD83C\uDF4A", ["tangerine"]],
    "1f34b": ["\uD83C\uDF4B", ["lemon"]],
    "1f34c": ["\uD83C\uDF4C", ["banana"]],
    "1f34d": ["\uD83C\uDF4D", ["pineapple"]],
    "1f34e": ["\uD83C\uDF4E", ["apple"]],
    "1f34f": ["\uD83C\uDF4F", ["green_apple"]],
    "1f350": ["\uD83C\uDF50", ["pear"]],
    "1f351": ["\uD83C\uDF51", ["peach"]],
    "1f352": ["\uD83C\uDF52", ["cherries"]],
    "1f353": ["\uD83C\uDF53", ["strawberry"]],
    "1f354": ["\uD83C\uDF54", ["hamburger"]],
    "1f355": ["\uD83C\uDF55", ["pizza"]],
    "1f356": ["\uD83C\uDF56", ["meat_on_bone"]],
    "1f357": ["\uD83C\uDF57", ["poultry_leg"]],
    "1f358": ["\uD83C\uDF58", ["rice_cracker"]],
    "1f359": ["\uD83C\uDF59", ["rice_ball"]],
    "1f35a": ["\uD83C\uDF5A", ["rice"]],
    "1f35b": ["\uD83C\uDF5B", ["curry"]],
    "1f35c": ["\uD83C\uDF5C", ["ramen"]],
    "1f35d": ["\uD83C\uDF5D", ["spaghetti"]],
    "1f35e": ["\uD83C\uDF5E", ["bread"]],
    "1f35f": ["\uD83C\uDF5F", ["fries"]],
    "1f360": ["\uD83C\uDF60", ["sweet_potato"]],
    "1f361": ["\uD83C\uDF61", ["dango"]],
    "1f362": ["\uD83C\uDF62", ["oden"]],
    "1f363": ["\uD83C\uDF63", ["sushi"]],
    "1f364": ["\uD83C\uDF64", ["fried_shrimp"]],
    "1f365": ["\uD83C\uDF65", ["fish_cake"]],
    "1f366": ["\uD83C\uDF66", ["icecream"]],
    "1f367": ["\uD83C\uDF67", ["shaved_ice"]],
    "1f368": ["\uD83C\uDF68", ["ice_cream"]],
    "1f369": ["\uD83C\uDF69", ["doughnut"]],
    "1f36a": ["\uD83C\uDF6A", ["cookie"]],
    "1f36b": ["\uD83C\uDF6B", ["chocolate_bar"]],
    "1f36c": ["\uD83C\uDF6C", ["candy"]],
    "1f36d": ["\uD83C\uDF6D", ["lollipop"]],
    "1f36e": ["\uD83C\uDF6E", ["custard"]],
    "1f36f": ["\uD83C\uDF6F", ["honey_pot"]],
    "1f370": ["\uD83C\uDF70", ["cake"]],
    "1f371": ["\uD83C\uDF71", ["bento"]],
    "1f372": ["\uD83C\uDF72", ["stew"]],
    "1f373": ["\uD83C\uDF73", ["egg"]],
    "1f374": ["\uD83C\uDF74", ["fork_and_knife"]],
    "1f375": ["\uD83C\uDF75", ["tea"]],
    "1f376": ["\uD83C\uDF76", ["sake"]],
    "1f377": ["\uD83C\uDF77", ["wine_glass"]],
    "1f378": ["\uD83C\uDF78", ["cocktail"]],
    "1f379": ["\uD83C\uDF79", ["tropical_drink"]],
    "1f37a": ["\uD83C\uDF7A", ["beer"]],
    "1f37b": ["\uD83C\uDF7B", ["beers"]],
    "1f37c": ["\uD83C\uDF7C", ["baby_bottle"]],
    "1f380": ["\uD83C\uDF80", ["ribbon"]],
    "1f381": ["\uD83C\uDF81", ["gift"]],
    "1f382": ["\uD83C\uDF82", ["birthday"]],
    "1f383": ["\uD83C\uDF83", ["jack_o_lantern"]],
    "1f384": ["\uD83C\uDF84", ["christmas_tree"]],
    "1f385": ["\uD83C\uDF85", ["santa"]],
    "1f386": ["\uD83C\uDF86", ["fireworks"]],
    "1f387": ["\uD83C\uDF87", ["sparkler"]],
    "1f388": ["\uD83C\uDF88", ["balloon"]],
    "1f389": ["\uD83C\uDF89", ["tada"]],
    "1f38a": ["\uD83C\uDF8A", ["confetti_ball"]],
    "1f38b": ["\uD83C\uDF8B", ["tanabata_tree"]],
    "1f38c": ["\uD83C\uDF8C", ["crossed_flags"]],
    "1f38d": ["\uD83C\uDF8D", ["bamboo"]],
    "1f38e": ["\uD83C\uDF8E", ["dolls"]],
    "1f38f": ["\uD83C\uDF8F", ["flags"]],
    "1f390": ["\uD83C\uDF90", ["wind_chime"]],
    "1f391": ["\uD83C\uDF91", ["rice_scene"]],
    "1f392": ["\uD83C\uDF92", ["school_satchel"]],
    "1f393": ["\uD83C\uDF93", ["mortar_board"]],
    "1f3a0": ["\uD83C\uDFA0", ["carousel_horse"]],
    "1f3a1": ["\uD83C\uDFA1", ["ferris_wheel"]],
    "1f3a2": ["\uD83C\uDFA2", ["roller_coaster"]],
    "1f3a3": ["\uD83C\uDFA3", ["fishing_pole_and_fish"]],
    "1f3a4": ["\uD83C\uDFA4", ["microphone"]],
    "1f3a5": ["\uD83C\uDFA5", ["movie_camera"]],
    "1f3a6": ["\uD83C\uDFA6", ["cinema"]],
    "1f3a7": ["\uD83C\uDFA7", ["headphones"]],
    "1f3a8": ["\uD83C\uDFA8", ["art"]],
    "1f3a9": ["\uD83C\uDFA9", ["tophat"]],
    "1f3aa": ["\uD83C\uDFAA", ["circus_tent"]],
    "1f3ab": ["\uD83C\uDFAB", ["ticket"]],
    "1f3ac": ["\uD83C\uDFAC", ["clapper"]],
    "1f3ad": ["\uD83C\uDFAD", ["performing_arts"]],
    "1f3ae": ["\uD83C\uDFAE", ["video_game"]],
    "1f3af": ["\uD83C\uDFAF", ["dart"]],
    "1f3b0": ["\uD83C\uDFB0", ["slot_machine"]],
    "1f3b1": ["\uD83C\uDFB1", ["8ball"]],
    "1f3b2": ["\uD83C\uDFB2", ["game_die"]],
    "1f3b3": ["\uD83C\uDFB3", ["bowling"]],
    "1f3b4": ["\uD83C\uDFB4", ["flower_playing_cards"]],
    "1f3b5": ["\uD83C\uDFB5", ["musical_note"]],
    "1f3b6": ["\uD83C\uDFB6", ["notes"]],
    "1f3b7": ["\uD83C\uDFB7", ["saxophone"]],
    "1f3b8": ["\uD83C\uDFB8", ["guitar"]],
    "1f3b9": ["\uD83C\uDFB9", ["musical_keyboard"]],
    "1f3ba": ["\uD83C\uDFBA", ["trumpet"]],
    "1f3bb": ["\uD83C\uDFBB", ["violin"]],
    "1f3bc": ["\uD83C\uDFBC", ["musical_score"]],
    "1f3bd": ["\uD83C\uDFBD", ["running_shirt_with_sash"]],
    "1f3be": ["\uD83C\uDFBE", ["tennis"]],
    "1f3bf": ["\uD83C\uDFBF", ["ski"]],
    "1f3c0": ["\uD83C\uDFC0", ["basketball"]],
    "1f3c1": ["\uD83C\uDFC1", ["checkered_flag"]],
    "1f3c2": ["\uD83C\uDFC2", ["snowboarder"]],
    "1f3c3": ["\uD83C\uDFC3", ["runner", "running"]],
    "1f3c4": ["\uD83C\uDFC4", ["surfer"]],
    "1f3c6": ["\uD83C\uDFC6", ["trophy"]],
    "1f3c7": ["\uD83C\uDFC7", ["horse_racing"]],
    "1f3c8": ["\uD83C\uDFC8", ["football"]],
    "1f3c9": ["\uD83C\uDFC9", ["rugby_football"]],
    "1f3ca": ["\uD83C\uDFCA", ["swimmer"]],
    "1f3e0": ["\uD83C\uDFE0", ["house"]],
    "1f3e1": ["\uD83C\uDFE1", ["house_with_garden"]],
    "1f3e2": ["\uD83C\uDFE2", ["office"]],
    "1f3e3": ["\uD83C\uDFE3", ["post_office"]],
    "1f3e4": ["\uD83C\uDFE4", ["european_post_office"]],
    "1f3e5": ["\uD83C\uDFE5", ["hospital"]],
    "1f3e6": ["\uD83C\uDFE6", ["bank"]],
    "1f3e7": ["\uD83C\uDFE7", ["atm"]],
    "1f3e8": ["\uD83C\uDFE8", ["hotel"]],
    "1f3e9": ["\uD83C\uDFE9", ["love_hotel"]],
    "1f3ea": ["\uD83C\uDFEA", ["convenience_store"]],
    "1f3eb": ["\uD83C\uDFEB", ["school"]],
    "1f3ec": ["\uD83C\uDFEC", ["department_store"]],
    "1f3ed": ["\uD83C\uDFED", ["factory"]],
    "1f3ee": ["\uD83C\uDFEE", ["izakaya_lantern", "lantern"]],
    "1f3ef": ["\uD83C\uDFEF", ["japanese_castle"]],
    "1f3f0": ["\uD83C\uDFF0", ["european_castle"]],
    "1f400": ["\uD83D\uDC00", ["rat"]],
    "1f401": ["\uD83D\uDC01", ["mouse2"]],
    "1f402": ["\uD83D\uDC02", ["ox"]],
    "1f403": ["\uD83D\uDC03", ["water_buffalo"]],
    "1f404": ["\uD83D\uDC04", ["cow2"]],
    "1f405": ["\uD83D\uDC05", ["tiger2"]],
    "1f406": ["\uD83D\uDC06", ["leopard"]],
    "1f407": ["\uD83D\uDC07", ["rabbit2"]],
    "1f408": ["\uD83D\uDC08", ["cat2"]],
    "1f409": ["\uD83D\uDC09", ["dragon"]],
    "1f40a": ["\uD83D\uDC0A", ["crocodile"]],
    "1f40b": ["\uD83D\uDC0B", ["whale2"]],
    "1f40c": ["\uD83D\uDC0C", ["snail"]],
    "1f40d": ["\uD83D\uDC0D", ["snake"]],
    "1f40e": ["\uD83D\uDC0E", ["racehorse"]],
    "1f40f": ["\uD83D\uDC0F", ["ram"]],
    "1f410": ["\uD83D\uDC10", ["goat"]],
    "1f411": ["\uD83D\uDC11", ["sheep"]],
    "1f412": ["\uD83D\uDC12", ["monkey"]],
    "1f413": ["\uD83D\uDC13", ["rooster"]],
    "1f414": ["\uD83D\uDC14", ["chicken"]],
    "1f415": ["\uD83D\uDC15", ["dog2"]],
    "1f416": ["\uD83D\uDC16", ["pig2"]],
    "1f417": ["\uD83D\uDC17", ["boar"]],
    "1f418": ["\uD83D\uDC18", ["elephant"]],
    "1f419": ["\uD83D\uDC19", ["octopus"]],
    "1f41a": ["\uD83D\uDC1A", ["shell"]],
    "1f41b": ["\uD83D\uDC1B", ["bug"]],
    "1f41c": ["\uD83D\uDC1C", ["ant"]],
    "1f41d": ["\uD83D\uDC1D", ["bee", "honeybee"]],
    "1f41e": ["\uD83D\uDC1E", ["beetle"]],
    "1f41f": ["\uD83D\uDC1F", ["fish"]],
    "1f420": ["\uD83D\uDC20", ["tropical_fish"]],
    "1f421": ["\uD83D\uDC21", ["blowfish"]],
    "1f422": ["\uD83D\uDC22", ["turtle"]],
    "1f423": ["\uD83D\uDC23", ["hatching_chick"]],
    "1f424": ["\uD83D\uDC24", ["baby_chick"]],
    "1f425": ["\uD83D\uDC25", ["hatched_chick"]],
    "1f426": ["\uD83D\uDC26", ["bird"]],
    "1f427": ["\uD83D\uDC27", ["penguin"]],
    "1f428": ["\uD83D\uDC28", ["koala"]],
    "1f429": ["\uD83D\uDC29", ["poodle"]],
    "1f42a": ["\uD83D\uDC2A", ["dromedary_camel"]],
    "1f42b": ["\uD83D\uDC2B", ["camel"]],
    "1f42c": ["\uD83D\uDC2C", ["dolphin", "flipper"]],
    "1f42d": ["\uD83D\uDC2D", ["mouse"]],
    "1f42e": ["\uD83D\uDC2E", ["cow"]],
    "1f42f": ["\uD83D\uDC2F", ["tiger"]],
    "1f430": ["\uD83D\uDC30", ["rabbit"]],
    "1f431": ["\uD83D\uDC31", ["cat"]],
    "1f432": ["\uD83D\uDC32", ["dragon_face"]],
    "1f433": ["\uD83D\uDC33", ["whale"]],
    "1f434": ["\uD83D\uDC34", ["horse"]],
    "1f435": ["\uD83D\uDC35", ["monkey_face"]],
    "1f436": ["\uD83D\uDC36", ["dog"]],
    "1f437": ["\uD83D\uDC37", ["pig"]],
    "1f438": ["\uD83D\uDC38", ["frog"]],
    "1f439": ["\uD83D\uDC39", ["hamster"]],
    "1f43a": ["\uD83D\uDC3A", ["wolf"]],
    "1f43b": ["\uD83D\uDC3B", ["bear"]],
    "1f43c": ["\uD83D\uDC3C", ["panda_face"]],
    "1f43d": ["\uD83D\uDC3D", ["pig_nose"]],
    "1f43e": ["\uD83D\uDC3E", ["feet", "paw_prints"]],
    "1f440": ["\uD83D\uDC40", ["eyes"]],
    "1f442": ["\uD83D\uDC42", ["ear"]],
    "1f443": ["\uD83D\uDC43", ["nose"]],
    "1f444": ["\uD83D\uDC44", ["lips"]],
    "1f445": ["\uD83D\uDC45", ["tongue"]],
    "1f446": ["\uD83D\uDC46", ["point_up_2"]],
    "1f447": ["\uD83D\uDC47", ["point_down"]],
    "1f448": ["\uD83D\uDC48", ["point_left"]],
    "1f449": ["\uD83D\uDC49", ["point_right"]],
    "1f44a": ["\uD83D\uDC4A", ["facepunch", "punch"]],
    "1f44b": ["\uD83D\uDC4B", ["wave"]],
    "1f44c": ["\uD83D\uDC4C", ["ok_hand"]],
    "1f44d": ["\uD83D\uDC4D", ["+1", "thumbsup"]],
    "1f44e": ["\uD83D\uDC4E", ["-1", "thumbsdown"]],
    "1f44f": ["\uD83D\uDC4F", ["clap"]],
    "1f450": ["\uD83D\uDC50", ["open_hands"]],
    "1f451": ["\uD83D\uDC51", ["crown"]],
    "1f452": ["\uD83D\uDC52", ["womans_hat"]],
    "1f453": ["\uD83D\uDC53", ["eyeglasses"]],
    "1f454": ["\uD83D\uDC54", ["necktie"]],
    "1f455": ["\uD83D\uDC55", ["shirt", "tshirt"]],
    "1f456": ["\uD83D\uDC56", ["jeans"]],
    "1f457": ["\uD83D\uDC57", ["dress"]],
    "1f458": ["\uD83D\uDC58", ["kimono"]],
    "1f459": ["\uD83D\uDC59", ["bikini"]],
    "1f45a": ["\uD83D\uDC5A", ["womans_clothes"]],
    "1f45b": ["\uD83D\uDC5B", ["purse"]],
    "1f45c": ["\uD83D\uDC5C", ["handbag"]],
    "1f45d": ["\uD83D\uDC5D", ["pouch"]],
    "1f45e": ["\uD83D\uDC5E", ["mans_shoe", "shoe"]],
    "1f45f": ["\uD83D\uDC5F", ["athletic_shoe"]],
    "1f460": ["\uD83D\uDC60", ["high_heel"]],
    "1f461": ["\uD83D\uDC61", ["sandal"]],
    "1f462": ["\uD83D\uDC62", ["boot"]],
    "1f463": ["\uD83D\uDC63", ["footprints"]],
    "1f464": ["\uD83D\uDC64", ["bust_in_silhouette"]],
    "1f465": ["\uD83D\uDC65", ["busts_in_silhouette"]],
    "1f466": ["\uD83D\uDC66", ["boy"]],
    "1f467": ["\uD83D\uDC67", ["girl"]],
    "1f468": ["\uD83D\uDC68", ["man"]],
    "1f469": ["\uD83D\uDC69", ["woman"]],
    "1f46a": ["\uD83D\uDC6A", ["family"]],
    "1f46b": ["\uD83D\uDC6B", ["couple"]],
    "1f46c": ["\uD83D\uDC6C", ["two_men_holding_hands"]],
    "1f46d": ["\uD83D\uDC6D", ["two_women_holding_hands"]],
    "1f46e": ["\uD83D\uDC6E", ["cop"]],
    "1f46f": ["\uD83D\uDC6F", ["dancers"]],
    "1f470": ["\uD83D\uDC70", ["bride_with_veil"]],
    "1f471": ["\uD83D\uDC71", ["person_with_blond_hair"]],
    "1f472": ["\uD83D\uDC72", ["man_with_gua_pi_mao"]],
    "1f473": ["\uD83D\uDC73", ["man_with_turban"]],
    "1f474": ["\uD83D\uDC74", ["older_man"]],
    "1f475": ["\uD83D\uDC75", ["older_woman"]],
    "1f476": ["\uD83D\uDC76", ["baby"]],
    "1f477": ["\uD83D\uDC77", ["construction_worker"]],
    "1f478": ["\uD83D\uDC78", ["princess"]],
    "1f479": ["\uD83D\uDC79", ["japanese_ogre"]],
    "1f47a": ["\uD83D\uDC7A", ["japanese_goblin"]],
    "1f47b": ["\uD83D\uDC7B", ["ghost"]],
    "1f47c": ["\uD83D\uDC7C", ["angel"]],
    "1f47d": ["\uD83D\uDC7D", ["alien"]],
    "1f47e": ["\uD83D\uDC7E", ["space_invader"]],
    "1f47f": ["\uD83D\uDC7F", ["imp"]],
    "1f480": ["\uD83D\uDC80", ["skull"]],
    "1f481": ["\uD83D\uDC81", ["information_desk_person"]],
    "1f482": ["\uD83D\uDC82", ["guardsman"]],
    "1f483": ["\uD83D\uDC83", ["dancer"]],
    "1f484": ["\uD83D\uDC84", ["lipstick"]],
    "1f485": ["\uD83D\uDC85", ["nail_care"]],
    "1f486": ["\uD83D\uDC86", ["massage"]],
    "1f487": ["\uD83D\uDC87", ["haircut"]],
    "1f488": ["\uD83D\uDC88", ["barber"]],
    "1f489": ["\uD83D\uDC89", ["syringe"]],
    "1f48a": ["\uD83D\uDC8A", ["pill"]],
    "1f48b": ["\uD83D\uDC8B", ["kiss"]],
    "1f48c": ["\uD83D\uDC8C", ["love_letter"]],
    "1f48d": ["\uD83D\uDC8D", ["ring"]],
    "1f48e": ["\uD83D\uDC8E", ["gem"]],
    "1f48f": ["\uD83D\uDC8F", ["couplekiss"]],
    "1f490": ["\uD83D\uDC90", ["bouquet"]],
    "1f491": ["\uD83D\uDC91", ["couple_with_heart"]],
    "1f492": ["\uD83D\uDC92", ["wedding"]],
    "1f493": ["\uD83D\uDC93", ["heartbeat"]],
    "1f494": ["\uD83D\uDC94", ["broken_heart"], "<\/3"],
    "1f495": ["\uD83D\uDC95", ["two_hearts"]],
    "1f496": ["\uD83D\uDC96", ["sparkling_heart"]],
    "1f497": ["\uD83D\uDC97", ["heartpulse"]],
    "1f498": ["\uD83D\uDC98", ["cupid"]],
    "1f499": ["\uD83D\uDC99", ["blue_heart"], "<3"],
    "1f49a": ["\uD83D\uDC9A", ["green_heart"], "<3"],
    "1f49b": ["\uD83D\uDC9B", ["yellow_heart"], "<3"],
    "1f49c": ["\uD83D\uDC9C", ["purple_heart"], "<3"],
    "1f49d": ["\uD83D\uDC9D", ["gift_heart"]],
    "1f49e": ["\uD83D\uDC9E", ["revolving_hearts"]],
    "1f49f": ["\uD83D\uDC9F", ["heart_decoration"]],
    "1f4a0": ["\uD83D\uDCA0", ["diamond_shape_with_a_dot_inside"]],
    "1f4a1": ["\uD83D\uDCA1", ["bulb"]],
    "1f4a2": ["\uD83D\uDCA2", ["anger"]],
    "1f4a3": ["\uD83D\uDCA3", ["bomb"]],
    "1f4a4": ["\uD83D\uDCA4", ["zzz"]],
    "1f4a5": ["\uD83D\uDCA5", ["boom", "collision"]],
    "1f4a6": ["\uD83D\uDCA6", ["sweat_drops"]],
    "1f4a7": ["\uD83D\uDCA7", ["droplet"]],
    "1f4a8": ["\uD83D\uDCA8", ["dash"]],
    "1f4a9": ["\uD83D\uDCA9", ["hankey", "poop", "shit"]],
    "1f4aa": ["\uD83D\uDCAA", ["muscle"]],
    "1f4ab": ["\uD83D\uDCAB", ["dizzy"]],
    "1f4ac": ["\uD83D\uDCAC", ["speech_balloon"]],
    "1f4ad": ["\uD83D\uDCAD", ["thought_balloon"]],
    "1f4ae": ["\uD83D\uDCAE", ["white_flower"]],
    "1f4af": ["\uD83D\uDCAF", ["100"]],
    "1f4b0": ["\uD83D\uDCB0", ["moneybag"]],
    "1f4b1": ["\uD83D\uDCB1", ["currency_exchange"]],
    "1f4b2": ["\uD83D\uDCB2", ["heavy_dollar_sign"]],
    "1f4b3": ["\uD83D\uDCB3", ["credit_card"]],
    "1f4b4": ["\uD83D\uDCB4", ["yen"]],
    "1f4b5": ["\uD83D\uDCB5", ["dollar"]],
    "1f4b6": ["\uD83D\uDCB6", ["euro"]],
    "1f4b7": ["\uD83D\uDCB7", ["pound"]],
    "1f4b8": ["\uD83D\uDCB8", ["money_with_wings"]],
    "1f4b9": ["\uD83D\uDCB9", ["chart"]],
    "1f4ba": ["\uD83D\uDCBA", ["seat"]],
    "1f4bb": ["\uD83D\uDCBB", ["computer"]],
    "1f4bc": ["\uD83D\uDCBC", ["briefcase"]],
    "1f4bd": ["\uD83D\uDCBD", ["minidisc"]],
    "1f4be": ["\uD83D\uDCBE", ["floppy_disk"]],
    "1f4bf": ["\uD83D\uDCBF", ["cd"]],
    "1f4c0": ["\uD83D\uDCC0", ["dvd"]],
    "1f4c1": ["\uD83D\uDCC1", ["file_folder"]],
    "1f4c2": ["\uD83D\uDCC2", ["open_file_folder"]],
    "1f4c3": ["\uD83D\uDCC3", ["page_with_curl"]],
    "1f4c4": ["\uD83D\uDCC4", ["page_facing_up"]],
    "1f4c5": ["\uD83D\uDCC5", ["date"]],
    "1f4c6": ["\uD83D\uDCC6", ["calendar"]],
    "1f4c7": ["\uD83D\uDCC7", ["card_index"]],
    "1f4c8": ["\uD83D\uDCC8", ["chart_with_upwards_trend"]],
    "1f4c9": ["\uD83D\uDCC9", ["chart_with_downwards_trend"]],
    "1f4ca": ["\uD83D\uDCCA", ["bar_chart"]],
    "1f4cb": ["\uD83D\uDCCB", ["clipboard"]],
    "1f4cc": ["\uD83D\uDCCC", ["pushpin"]],
    "1f4cd": ["\uD83D\uDCCD", ["round_pushpin"]],
    "1f4ce": ["\uD83D\uDCCE", ["paperclip"]],
    "1f4cf": ["\uD83D\uDCCF", ["straight_ruler"]],
    "1f4d0": ["\uD83D\uDCD0", ["triangular_ruler"]],
    "1f4d1": ["\uD83D\uDCD1", ["bookmark_tabs"]],
    "1f4d2": ["\uD83D\uDCD2", ["ledger"]],
    "1f4d3": ["\uD83D\uDCD3", ["notebook"]],
    "1f4d4": ["\uD83D\uDCD4", ["notebook_with_decorative_cover"]],
    "1f4d5": ["\uD83D\uDCD5", ["closed_book"]],
    "1f4d6": ["\uD83D\uDCD6", ["book", "open_book"]],
    "1f4d7": ["\uD83D\uDCD7", ["green_book"]],
    "1f4d8": ["\uD83D\uDCD8", ["blue_book"]],
    "1f4d9": ["\uD83D\uDCD9", ["orange_book"]],
    "1f4da": ["\uD83D\uDCDA", ["books"]],
    "1f4db": ["\uD83D\uDCDB", ["name_badge"]],
    "1f4dc": ["\uD83D\uDCDC", ["scroll"]],
    "1f4dd": ["\uD83D\uDCDD", ["memo", "pencil"]],
    "1f4de": ["\uD83D\uDCDE", ["telephone_receiver"]],
    "1f4df": ["\uD83D\uDCDF", ["pager"]],
    "1f4e0": ["\uD83D\uDCE0", ["fax"]],
    "1f4e1": ["\uD83D\uDCE1", ["satellite"]],
    "1f4e2": ["\uD83D\uDCE2", ["loudspeaker"]],
    "1f4e3": ["\uD83D\uDCE3", ["mega"]],
    "1f4e4": ["\uD83D\uDCE4", ["outbox_tray"]],
    "1f4e5": ["\uD83D\uDCE5", ["inbox_tray"]],
    "1f4e6": ["\uD83D\uDCE6", ["package"]],
    "1f4e7": ["\uD83D\uDCE7", ["e-mail"]],
    "1f4e8": ["\uD83D\uDCE8", ["incoming_envelope"]],
    "1f4e9": ["\uD83D\uDCE9", ["envelope_with_arrow"]],
    "1f4ea": ["\uD83D\uDCEA", ["mailbox_closed"]],
    "1f4eb": ["\uD83D\uDCEB", ["mailbox"]],
    "1f4ec": ["\uD83D\uDCEC", ["mailbox_with_mail"]],
    "1f4ed": ["\uD83D\uDCED", ["mailbox_with_no_mail"]],
    "1f4ee": ["\uD83D\uDCEE", ["postbox"]],
    "1f4ef": ["\uD83D\uDCEF", ["postal_horn"]],
    "1f4f0": ["\uD83D\uDCF0", ["newspaper"]],
    "1f4f1": ["\uD83D\uDCF1", ["iphone"]],
    "1f4f2": ["\uD83D\uDCF2", ["calling"]],
    "1f4f3": ["\uD83D\uDCF3", ["vibration_mode"]],
    "1f4f4": ["\uD83D\uDCF4", ["mobile_phone_off"]],
    "1f4f5": ["\uD83D\uDCF5", ["no_mobile_phones"]],
    "1f4f6": ["\uD83D\uDCF6", ["signal_strength"]],
    "1f4f7": ["\uD83D\uDCF7", ["camera"]],
    "1f4f9": ["\uD83D\uDCF9", ["video_camera"]],
    "1f4fa": ["\uD83D\uDCFA", ["tv"]],
    "1f4fb": ["\uD83D\uDCFB", ["radio"]],
    "1f4fc": ["\uD83D\uDCFC", ["vhs"]],
    "1f500": ["\uD83D\uDD00", ["twisted_rightwards_arrows"]],
    "1f501": ["\uD83D\uDD01", ["repeat"]],
    "1f502": ["\uD83D\uDD02", ["repeat_one"]],
    "1f503": ["\uD83D\uDD03", ["arrows_clockwise"]],
    "1f504": ["\uD83D\uDD04", ["arrows_counterclockwise"]],
    "1f505": ["\uD83D\uDD05", ["low_brightness"]],
    "1f506": ["\uD83D\uDD06", ["high_brightness"]],
    "1f507": ["\uD83D\uDD07", ["mute"]],
    "1f508": ["\uD83D\uDD09", ["speaker"]],
    "1f509": ["\uD83D\uDD09", ["sound"]],
    "1f50a": ["\uD83D\uDD0A", ["loud_sound"]],
    "1f50b": ["\uD83D\uDD0B", ["battery"]],
    "1f50c": ["\uD83D\uDD0C", ["electric_plug"]],
    "1f50d": ["\uD83D\uDD0D", ["mag"]],
    "1f50e": ["\uD83D\uDD0E", ["mag_right"]],
    "1f50f": ["\uD83D\uDD0F", ["lock_with_ink_pen"]],
    "1f510": ["\uD83D\uDD10", ["closed_lock_with_key"]],
    "1f511": ["\uD83D\uDD11", ["key"]],
    "1f512": ["\uD83D\uDD12", ["lock"]],
    "1f513": ["\uD83D\uDD13", ["unlock"]],
    "1f514": ["\uD83D\uDD14", ["bell"]],
    "1f515": ["\uD83D\uDD15", ["no_bell"]],
    "1f516": ["\uD83D\uDD16", ["bookmark"]],
    "1f517": ["\uD83D\uDD17", ["link"]],
    "1f518": ["\uD83D\uDD18", ["radio_button"]],
    "1f519": ["\uD83D\uDD19", ["back"]],
    "1f51a": ["\uD83D\uDD1A", ["end"]],
    "1f51b": ["\uD83D\uDD1B", ["on"]],
    "1f51c": ["\uD83D\uDD1C", ["soon"]],
    "1f51d": ["\uD83D\uDD1D", ["top"]],
    "1f51e": ["\uD83D\uDD1E", ["underage"]],
    "1f51f": ["\uD83D\uDD1F", ["keycap_ten"]],
    "1f520": ["\uD83D\uDD20", ["capital_abcd"]],
    "1f521": ["\uD83D\uDD21", ["abcd"]],
    "1f522": ["\uD83D\uDD22", ["1234"]],
    "1f523": ["\uD83D\uDD23", ["symbols"]],
    "1f524": ["\uD83D\uDD24", ["abc"]],
    "1f525": ["\uD83D\uDD25", ["fire"]],
    "1f526": ["\uD83D\uDD26", ["flashlight"]],
    "1f527": ["\uD83D\uDD27", ["wrench"]],
    "1f528": ["\uD83D\uDD28", ["hammer"]],
    "1f529": ["\uD83D\uDD29", ["nut_and_bolt"]],
    "1f52a": ["\uD83D\uDD2A", ["hocho"]],
    "1f52b": ["\uD83D\uDD2B", ["gun"]],
    "1f52c": ["\uD83D\uDD2C", ["microscope"]],
    "1f52d": ["\uD83D\uDD2D", ["telescope"]],
    "1f52e": ["\uD83D\uDD2E", ["crystal_ball"]],
    "1f52f": ["\uD83D\uDD2F", ["six_pointed_star"]],
    "1f530": ["\uD83D\uDD30", ["beginner"]],
    "1f531": ["\uD83D\uDD31", ["trident"]],
    "1f532": ["\uD83D\uDD32", ["black_square_button"]],
    "1f533": ["\uD83D\uDD33", ["white_square_button"]],
    "1f534": ["\uD83D\uDD34", ["red_circle"]],
    "1f535": ["\uD83D\uDD35", ["large_blue_circle"]],
    "1f536": ["\uD83D\uDD36", ["large_orange_diamond"]],
    "1f537": ["\uD83D\uDD37", ["large_blue_diamond"]],
    "1f538": ["\uD83D\uDD38", ["small_orange_diamond"]],
    "1f539": ["\uD83D\uDD39", ["small_blue_diamond"]],
    "1f53a": ["\uD83D\uDD3A", ["small_red_triangle"]],
    "1f53b": ["\uD83D\uDD3B", ["small_red_triangle_down"]],
    "1f53c": ["\uD83D\uDD3C", ["arrow_up_small"]],
    "1f53d": ["\uD83D\uDD3D", ["arrow_down_small"]],
    "1f550": ["\uD83D\uDD50", ["clock1"]],
    "1f551": ["\uD83D\uDD51", ["clock2"]],
    "1f552": ["\uD83D\uDD52", ["clock3"]],
    "1f553": ["\uD83D\uDD53", ["clock4"]],
    "1f554": ["\uD83D\uDD54", ["clock5"]],
    "1f555": ["\uD83D\uDD55", ["clock6"]],
    "1f556": ["\uD83D\uDD56", ["clock7"]],
    "1f557": ["\uD83D\uDD57", ["clock8"]],
    "1f558": ["\uD83D\uDD58", ["clock9"]],
    "1f559": ["\uD83D\uDD59", ["clock10"]],
    "1f55a": ["\uD83D\uDD5A", ["clock11"]],
    "1f55b": ["\uD83D\uDD5B", ["clock12"]],
    "1f55c": ["\uD83D\uDD5C", ["clock130"]],
    "1f55d": ["\uD83D\uDD5D", ["clock230"]],
    "1f55e": ["\uD83D\uDD5E", ["clock330"]],
    "1f55f": ["\uD83D\uDD5F", ["clock430"]],
    "1f560": ["\uD83D\uDD60", ["clock530"]],
    "1f561": ["\uD83D\uDD61", ["clock630"]],
    "1f562": ["\uD83D\uDD62", ["clock730"]],
    "1f563": ["\uD83D\uDD63", ["clock830"]],
    "1f564": ["\uD83D\uDD64", ["clock930"]],
    "1f565": ["\uD83D\uDD65", ["clock1030"]],
    "1f566": ["\uD83D\uDD66", ["clock1130"]],
    "1f567": ["\uD83D\uDD67", ["clock1230"]],
    "1f5fb": ["\uD83D\uDDFB", ["mount_fuji"]],
    "1f5fc": ["\uD83D\uDDFC", ["tokyo_tower"]],
    "1f5fd": ["\uD83D\uDDFD", ["statue_of_liberty"]],
    "1f5fe": ["\uD83D\uDDFE", ["japan"]],
    "1f5ff": ["\uD83D\uDDFF", ["moyai"]],
    "1f600": ["\uD83D\uDE00", ["grinning"]],
    "1f601": ["\uD83D\uDE01", ["grin"]],
    "1f602": ["\uD83D\uDE02", ["joy"]],
    "1f603": ["\uD83D\uDE03", ["smiley"], ":)"],
    "1f604": ["\uD83D\uDE04", ["smile"], ":)"],
    "1f605": ["\uD83D\uDE05", ["sweat_smile"]],
    "1f606": ["\uD83D\uDE06", ["satisfied"]],
    "1f607": ["\uD83D\uDE07", ["innocent"]],
    "1f608": ["\uD83D\uDE08", ["smiling_imp"]],
    "1f609": ["\uD83D\uDE09", ["wink"], ";)"],
    "1f60a": ["\uD83D\uDE0A", ["blush"]],
    "1f60b": ["\uD83D\uDE0B", ["yum"]],
    "1f60c": ["\uD83D\uDE0C", ["relieved"]],
    "1f60d": ["\uD83D\uDE0D", ["heart_eyes"]],
    "1f60e": ["\uD83D\uDE0E", ["sunglasses"]],
    "1f60f": ["\uD83D\uDE0F", ["smirk"]],
    "1f610": ["\uD83D\uDE10", ["neutral_face"]],
    "1f611": ["\uD83D\uDE11", ["expressionless"]],
    "1f612": ["\uD83D\uDE12", ["unamused"]],
    "1f613": ["\uD83D\uDE13", ["sweat"]],
    "1f614": ["\uD83D\uDE14", ["pensive"]],
    "1f615": ["\uD83D\uDE15", ["confused"]],
    "1f616": ["\uD83D\uDE16", ["confounded"]],
    "1f617": ["\uD83D\uDE17", ["kissing"]],
    "1f618": ["\uD83D\uDE18", ["kissing_heart"]],
    "1f619": ["\uD83D\uDE19", ["kissing_smiling_eyes"]],
    "1f61a": ["\uD83D\uDE1A", ["kissing_closed_eyes"]],
    "1f61b": ["\uD83D\uDE1B", ["stuck_out_tongue"]],
    "1f61c": ["\uD83D\uDE1C", ["stuck_out_tongue_winking_eye"], ";p"],
    "1f61d": ["\uD83D\uDE1D", ["stuck_out_tongue_closed_eyes"]],
    "1f61e": ["\uD83D\uDE1E", ["disappointed"], ":("],
    "1f61f": ["\uD83D\uDE1F", ["worried"]],
    "1f620": ["\uD83D\uDE20", ["angry"]],
    "1f621": ["\uD83D\uDE21", ["rage"]],
    "1f622": ["\uD83D\uDE22", ["cry"], ":'("],
    "1f623": ["\uD83D\uDE23", ["persevere"]],
    "1f624": ["\uD83D\uDE24", ["triumph"]],
    "1f625": ["\uD83D\uDE25", ["disappointed_relieved"]],
    "1f626": ["\uD83D\uDE26", ["frowning"]],
    "1f627": ["\uD83D\uDE27", ["anguished"]],
    "1f628": ["\uD83D\uDE28", ["fearful"]],
    "1f629": ["\uD83D\uDE29", ["weary"]],
    "1f62a": ["\uD83D\uDE2A", ["sleepy"]],
    "1f62b": ["\uD83D\uDE2B", ["tired_face"]],
    "1f62c": ["\uD83D\uDE2C", ["grimacing"]],
    "1f62d": ["\uD83D\uDE2D", ["sob"], ":'("],
    "1f62e": ["\uD83D\uDE2E", ["open_mouth"]],
    "1f62f": ["\uD83D\uDE2F", ["hushed"]],
    "1f630": ["\uD83D\uDE30", ["cold_sweat"]],
    "1f631": ["\uD83D\uDE31", ["scream"]],
    "1f632": ["\uD83D\uDE32", ["astonished"]],
    "1f633": ["\uD83D\uDE33", ["flushed"]],
    "1f634": ["\uD83D\uDE34", ["sleeping"]],
    "1f635": ["\uD83D\uDE35", ["dizzy_face"]],
    "1f636": ["\uD83D\uDE36", ["no_mouth"]],
    "1f637": ["\uD83D\uDE37", ["mask"]],
    "1f638": ["\uD83D\uDE38", ["smile_cat"]],
    "1f639": ["\uD83D\uDE39", ["joy_cat"]],
    "1f63a": ["\uD83D\uDE3A", ["smiley_cat"]],
    "1f63b": ["\uD83D\uDE3B", ["heart_eyes_cat"]],
    "1f63c": ["\uD83D\uDE3C", ["smirk_cat"]],
    "1f63d": ["\uD83D\uDE3D", ["kissing_cat"]],
    "1f63e": ["\uD83D\uDE3E", ["pouting_cat"]],
    "1f63f": ["\uD83D\uDE3F", ["crying_cat_face"]],
    "1f640": ["\uD83D\uDE40", ["scream_cat"]],
    "1f645": ["\uD83D\uDE45", ["no_good"]],
    "1f646": ["\uD83D\uDE46", ["ok_woman"]],
    "1f647": ["\uD83D\uDE47", ["bow"]],
    "1f648": ["\uD83D\uDE48", ["see_no_evil"]],
    "1f649": ["\uD83D\uDE49", ["hear_no_evil"]],
    "1f64a": ["\uD83D\uDE4A", ["speak_no_evil"]],
    "1f64b": ["\uD83D\uDE4B", ["raising_hand"]],
    "1f64c": ["\uD83D\uDE4C", ["raised_hands"]],
    "1f64d": ["\uD83D\uDE4D", ["person_frowning"]],
    "1f64e": ["\uD83D\uDE4E", ["person_with_pouting_face"]],
    "1f64f": ["\uD83D\uDE4F", ["pray"]],
    "1f680": ["\uD83D\uDE80", ["rocket"]],
    "1f681": ["\uD83D\uDE81", ["helicopter"]],
    "1f682": ["\uD83D\uDE82", ["steam_locomotive"]],
    "1f683": ["\uD83D\uDE83", ["railway_car"]],
    "1f68b": ["\uD83D\uDE8B", ["train"]],
    "1f684": ["\uD83D\uDE84", ["bullettrain_side"]],
    "1f685": ["\uD83D\uDE85", ["bullettrain_front"]],
    "1f686": ["\uD83D\uDE86", ["train2"]],
    "1f687": ["\uD83D\uDE87", ["metro"]],
    "1f688": ["\uD83D\uDE88", ["light_rail"]],
    "1f689": ["\uD83D\uDE89", ["station"]],
    "1f68a": ["\uD83D\uDE8A", ["tram"]],
    "1f68c": ["\uD83D\uDE8C", ["bus"]],
    "1f68d": ["\uD83D\uDE8D", ["oncoming_bus"]],
    "1f68e": ["\uD83D\uDE8E", ["trolleybus"]],
    "1f68f": ["\uD83D\uDE8F", ["busstop"]],
    "1f690": ["\uD83D\uDE90", ["minibus"]],
    "1f691": ["\uD83D\uDE91", ["ambulance"]],
    "1f692": ["\uD83D\uDE92", ["fire_engine"]],
    "1f693": ["\uD83D\uDE93", ["police_car"]],
    "1f694": ["\uD83D\uDE94", ["oncoming_police_car"]],
    "1f695": ["\uD83D\uDE95", ["taxi"]],
    "1f696": ["\uD83D\uDE96", ["oncoming_taxi"]],
    "1f697": ["\uD83D\uDE97", ["car", "red_car"]],
    "1f698": ["\uD83D\uDE98", ["oncoming_automobile"]],
    "1f699": ["\uD83D\uDE99", ["blue_car"]],
    "1f69a": ["\uD83D\uDE9A", ["truck"]],
    "1f69b": ["\uD83D\uDE9B", ["articulated_lorry"]],
    "1f69c": ["\uD83D\uDE9C", ["tractor"]],
    "1f69d": ["\uD83D\uDE9D", ["monorail"]],
    "1f69e": ["\uD83D\uDE9E", ["mountain_railway"]],
    "1f69f": ["\uD83D\uDE9F", ["suspension_railway"]],
    "1f6a0": ["\uD83D\uDEA0", ["mountain_cableway"]],
    "1f6a1": ["\uD83D\uDEA1", ["aerial_tramway"]],
    "1f6a2": ["\uD83D\uDEA2", ["ship"]],
    "1f6a3": ["\uD83D\uDEA3", ["rowboat"]],
    "1f6a4": ["\uD83D\uDEA4", ["speedboat"]],
    "1f6a5": ["\uD83D\uDEA5", ["traffic_light"]],
    "1f6a6": ["\uD83D\uDEA6", ["vertical_traffic_light"]],
    "1f6a7": ["\uD83D\uDEA7", ["construction"]],
    "1f6a8": ["\uD83D\uDEA8", ["rotating_light"]],
    "1f6a9": ["\uD83D\uDEA9", ["triangular_flag_on_post"]],
    "1f6aa": ["\uD83D\uDEAA", ["door"]],
    "1f6ab": ["\uD83D\uDEAB", ["no_entry_sign"]],
    "1f6ac": ["\uD83D\uDEAC", ["smoking"]],
    "1f6ad": ["\uD83D\uDEAD", ["no_smoking"]],
    "1f6ae": ["\uD83D\uDEAE", ["put_litter_in_its_place"]],
    "1f6af": ["\uD83D\uDEAF", ["do_not_litter"]],
    "1f6b0": ["\uD83D\uDEB0", ["potable_water"]],
    "1f6b1": ["\uD83D\uDEB1", ["non-potable_water"]],
    "1f6b2": ["\uD83D\uDEB2", ["bike"]],
    "1f6b3": ["\uD83D\uDEB3", ["no_bicycles"]],
    "1f6b4": ["\uD83D\uDEB4", ["bicyclist"]],
    "1f6b5": ["\uD83D\uDEB5", ["mountain_bicyclist"]],
    "1f6b6": ["\uD83D\uDEB6", ["walking"]],
    "1f6b7": ["\uD83D\uDEB7", ["no_pedestrians"]],
    "1f6b8": ["\uD83D\uDEB8", ["children_crossing"]],
    "1f6b9": ["\uD83D\uDEB9", ["mens"]],
    "1f6ba": ["\uD83D\uDEBA", ["womens"]],
    "1f6bb": ["\uD83D\uDEBB", ["restroom"]],
    "1f6bc": ["\uD83D\uDEBC", ["baby_symbol"]],
    "1f6bd": ["\uD83D\uDEBD", ["toilet"]],
    "1f6be": ["\uD83D\uDEBE", ["wc"]],
    "1f6bf": ["\uD83D\uDEBF", ["shower"]],
    "1f6c0": ["\uD83D\uDEC0", ["bath"]],
    "1f6c1": ["\uD83D\uDEC1", ["bathtub"]],
    "1f6c2": ["\uD83D\uDEC2", ["passport_control"]],
    "1f6c3": ["\uD83D\uDEC3", ["customs"]],
    "1f6c4": ["\uD83D\uDEC4", ["baggage_claim"]],
    "1f6c5": ["\uD83D\uDEC5", ["left_luggage"]],
    "0023": ["\u0023\u20E3", ["hash"]],
    "0030": ["\u0030\u20E3", ["zero"]],
    "0031": ["\u0031\u20E3", ["one"]],
    "0032": ["\u0032\u20E3", ["two"]],
    "0033": ["\u0033\u20E3", ["three"]],
    "0034": ["\u0034\u20E3", ["four"]],
    "0035": ["\u0035\u20E3", ["five"]],
    "0036": ["\u0036\u20E3", ["six"]],
    "0037": ["\u0037\u20E3", ["seven"]],
    "0038": ["\u0038\u20E3", ["eight"]],
    "0039": ["\u0039\u20E3", ["nine"]],
    "1f1e8-1f1f3": ["\uD83C\uDDE8\uD83C\uDDF3", ["cn"]],
    "1f1e9-1f1ea": ["\uD83C\uDDE9\uD83C\uDDEA", ["de"]],
    "1f1ea-1f1f8": ["\uD83C\uDDEA\uD83C\uDDF8", ["es"]],
    "1f1eb-1f1f7": ["\uD83C\uDDEB\uD83C\uDDF7", ["fr"]],
    "1f1ec-1f1e7": ["\uD83C\uDDEC\uD83C\uDDE7", ["gb", "uk"]],
    "1f1ee-1f1f9": ["\uD83C\uDDEE\uD83C\uDDF9", ["it"]],
    "1f1ef-1f1f5": ["\uD83C\uDDEF\uD83C\uDDF5", ["jp"]],
    "1f1f0-1f1f7": ["\uD83C\uDDF0\uD83C\uDDF7", ["kr"]],
    "1f1f7-1f1fa": ["\uD83C\uDDF7\uD83C\uDDFA", ["ru"]],
    "1f1fa-1f1f8": ["\uD83C\uDDFA\uD83C\uDDF8", ["us"]]
}

Config.EmojiCategories = [
    ["1f604", "1f603", "1f600", "1f60a", "263a", "1f609", "1f60d", "1f618", "1f61a", "1f617", "1f619", "1f61c", "1f61d", "1f61b", "1f633", "1f601", "1f614", "1f60c", "1f612", "1f61e", "1f623", "1f622", "1f602", "1f62d", "1f62a", "1f625", "1f630", "1f605", "1f613", "1f629", "1f62b", "1f628", "1f631", "1f620", "1f621", "1f624", "1f616", "1f606", "1f60b", "1f637", "1f60e", "1f634", "1f635", "1f632", "1f61f", "1f626", "1f627", "1f608", "1f47f", "1f62e", "1f62c", "1f610", "1f615", "1f62f", "1f636", "1f607", "1f60f", "1f611", "1f472", "1f473", "1f46e", "1f477", "1f482", "1f476", "1f466", "1f467", "1f468", "1f469", "1f474", "1f475", "1f471", "1f47c", "1f478", "1f63a", "1f638", "1f63b", "1f63d", "1f63c", "1f640", "1f63f", "1f639", "1f63e", "1f479", "1f47a", "1f648", "1f649", "1f64a", "1f480", "1f47d", "1f4a9", "1f525", "2728", "1f31f", "1f4ab", "1f4a5", "1f4a2", "1f4a6", "1f4a7", "1f4a4", "1f4a8", "1f442", "1f440", "1f443", "1f445", "1f444", "1f44d", "1f44e", "1f44c", "1f44a", "270a", "270c", "1f44b", "270b", "1f450", "1f446", "1f447", "1f449", "1f448", "1f64c", "1f64f", "261d", "1f44f", "1f4aa", "1f6b6", "1f3c3", "1f483", "1f46b", "1f46a", "1f46c", "1f46d", "1f48f", "1f491", "1f46f", "1f646", "1f645", "1f481", "1f64b", "1f486", "1f487", "1f485", "1f470", "1f64e", "1f64d", "1f647", "1f3a9", "1f451", "1f452", "1f45f", "1f45e", "1f461", "1f460", "1f462", "1f455", "1f454", "1f45a", "1f457", "1f3bd", "1f456", "1f458", "1f459", "1f4bc", "1f45c", "1f45d", "1f45b", "1f453", "1f380", "1f302", "1f484", "1f49b", "1f499", "1f49c", "1f49a", "2764", "1f494", "1f497", "1f493", "1f495", "1f496", "1f49e", "1f498", "1f48c", "1f48b", "1f48d", "1f48e", "1f464", "1f465", "1f4ac", "1f463", "1f4ad"],
    ["1f436", "1f43a", "1f431", "1f42d", "1f439", "1f430", "1f438", "1f42f", "1f428", "1f43b", "1f437", "1f43d", "1f42e", "1f417", "1f435", "1f412", "1f434", "1f411", "1f418", "1f43c", "1f427", "1f426", "1f424", "1f425", "1f423", "1f414", "1f40d", "1f422", "1f41b", "1f41d", "1f41c", "1f41e", "1f40c", "1f419", "1f41a", "1f420", "1f41f", "1f42c", "1f433", "1f40b", "1f404", "1f40f", "1f400", "1f403", "1f405", "1f407", "1f409", "1f40e", "1f410", "1f413", "1f415", "1f416", "1f401", "1f402", "1f432", "1f421", "1f40a", "1f42b", "1f42a", "1f406", "1f408", "1f429", "1f43e", "1f490", "1f338", "1f337", "1f340", "1f339", "1f33b", "1f33a", "1f341", "1f343", "1f342", "1f33f", "1f33e", "1f344", "1f335", "1f334", "1f332", "1f333", "1f330", "1f331", "1f33c", "1f310", "1f31e", "1f31d", "1f31a", "1f311", "1f312", "1f313", "1f314", "1f315", "1f316", "1f317", "1f318", "1f31c", "1f31b", "1f319", "1f30d", "1f30e", "1f30f", "1f30b", "1f30c", "1f320", "2b50", "2600", "26c5", "2601", "26a1", "2614", "2744", "26c4", "1f300", "1f301", "1f308", "1f30a"],
    ["1f38d", "1f49d", "1f38e", "1f392", "1f393", "1f38f", "1f386", "1f387", "1f390", "1f391", "1f383", "1f47b", "1f385", "1f384", "1f381", "1f38b", "1f389", "1f38a", "1f388", "1f38c", "1f52e", "1f3a5", "1f4f7", "1f4f9", "1f4fc", "1f4bf", "1f4c0", "1f4bd", "1f4be", "1f4bb", "1f4f1", "260e", "1f4de", "1f4df", "1f4e0", "1f4e1", "1f4fa", "1f4fb", "1f50a", "1f509", "1f508", "1f507", "1f514", "1f515", "1f4e3", "1f4e2", "23f3", "231b", "23f0", "231a", "1f513", "1f512", "1f50f", "1f510", "1f511", "1f50e", "1f4a1", "1f526", "1f506", "1f505", "1f50c", "1f50b", "1f50d", "1f6c0", "1f6c1", "1f6bf", "1f6bd", "1f527", "1f529", "1f528", "1f6aa", "1f6ac", "1f4a3", "1f52b", "1f52a", "1f48a", "1f489", "1f4b0", "1f4b4", "1f4b5", "1f4b7", "1f4b6", "1f4b3", "1f4b8", "1f4f2", "1f4e7", "1f4e5", "1f4e4", "2709", "1f4e9", "1f4e8", "1f4ef", "1f4eb", "1f4ea", "1f4ec", "1f4ed", "1f4ee", "1f4e6", "1f4dd", "1f4c4", "1f4c3", "1f4d1", "1f4ca", "1f4c8", "1f4c9", "1f4dc", "1f4cb", "1f4c5", "1f4c6", "1f4c7", "1f4c1", "1f4c2", "2702", "1f4cc", "1f4ce", "2712", "270f", "1f4cf", "1f4d0", "1f4d5", "1f4d7", "1f4d8", "1f4d9", "1f4d3", "1f4d4", "1f4d2", "1f4da", "1f4d6", "1f516", "1f4db", "1f52c", "1f52d", "1f4f0", "1f3a8", "1f3ac", "1f3a4", "1f3a7", "1f3bc", "1f3b5", "1f3b6", "1f3b9", "1f3bb", "1f3ba", "1f3b7", "1f3b8", "1f47e", "1f3ae", "1f0cf", "1f3b4", "1f004", "1f3b2", "1f3af", "1f3c8", "1f3c0", "26bd", "26be", "1f3be", "1f3b1", "1f3c9", "1f3b3", "26f3", "1f6b5", "1f6b4", "1f3c1", "1f3c7", "1f3c6", "1f3bf", "1f3c2", "1f3ca", "1f3c4", "1f3a3", "2615", "1f375", "1f376", "1f37c", "1f37a", "1f37b", "1f378", "1f379", "1f377", "1f374", "1f355", "1f354", "1f35f", "1f357", "1f356", "1f35d", "1f35b", "1f364", "1f371", "1f363", "1f365", "1f359", "1f358", "1f35a", "1f35c", "1f372", "1f362", "1f361", "1f373", "1f35e", "1f369", "1f36e", "1f366", "1f368", "1f367", "1f382", "1f370", "1f36a", "1f36b", "1f36c", "1f36d", "1f36f", "1f34e", "1f34f", "1f34a", "1f34b", "1f352", "1f347", "1f349", "1f353", "1f351", "1f348", "1f34c", "1f350", "1f34d", "1f360", "1f346", "1f345", "1f33d"],
    ["1f3e0", "1f3e1", "1f3eb", "1f3e2", "1f3e3", "1f3e5", "1f3e6", "1f3ea", "1f3e9", "1f3e8", "1f492", "26ea", "1f3ec", "1f3e4", "1f307", "1f306", "1f3ef", "1f3f0", "26fa", "1f3ed", "1f5fc", "1f5fe", "1f5fb", "1f304", "1f305", "1f303", "1f5fd", "1f309", "1f3a0", "1f3a1", "26f2", "1f3a2", "1f6a2", "26f5", "1f6a4", "1f6a3", "2693", "1f680", "2708", "1f4ba", "1f681", "1f682", "1f68a", "1f689", "1f69e", "1f686", "1f684", "1f685", "1f688", "1f687", "1f69d", "1f683", "1f68b", "1f68e", "1f68c", "1f68d", "1f699", "1f698", "1f697", "1f695", "1f696", "1f69b", "1f69a", "1f6a8", "1f693", "1f694", "1f692", "1f691", "1f690", "1f6b2", "1f6a1", "1f69f", "1f6a0", "1f69c", "1f488", "1f68f", "1f3ab", "1f6a6", "1f6a5", "26a0", "1f6a7", "1f530", "26fd", "1f3ee", "1f3b0", "2668", "1f5ff", "1f3aa", "1f3ad", "1f4cd", "1f6a9", "1f1ef-1f1f5", "1f1f0-1f1f7", "1f1e9-1f1ea", "1f1e8-1f1f3", "1f1fa-1f1f8", "1f1eb-1f1f7", "1f1ea-1f1f8", "1f1ee-1f1f9", "1f1f7-1f1fa", "1f1ec-1f1e7"],
    ["0031", "0032", "0033", "0034", "0035", "0036", "0037", "0038", "0039", "0030", "1f51f", "1f522", "0023", "1f523", "2b06", "2b07", "2b05", "27a1", "1f520", "1f521", "1f524", "2197", "2196", "2198", "2199", "2194", "2195", "1f504", "25c0", "25b6", "1f53c", "1f53d", "21a9", "21aa", "2139", "23ea", "23e9", "23eb", "23ec", "2935", "2934", "1f197", "1f500", "1f501", "1f502", "1f195", "1f199", "1f192", "1f193", "1f196", "1f4f6", "1f3a6", "1f201", "1f22f", "1f233", "1f235", "1f234", "1f232", "1f250", "1f239", "1f23a", "1f236", "1f21a", "1f6bb", "1f6b9", "1f6ba", "1f6bc", "1f6be", "1f6b0", "1f6ae", "1f17f", "267f", "1f6ad", "1f237", "1f238", "1f202", "24c2", "1f6c2", "1f6c4", "1f6c5", "1f6c3", "1f251", "3299", "3297", "1f191", "1f198", "1f194", "1f6ab", "1f51e", "1f4f5", "1f6af", "1f6b1", "1f6b3", "1f6b7", "1f6b8", "26d4", "2733", "2747", "274e", "2705", "2734", "1f49f", "1f19a", "1f4f3", "1f4f4", "1f170", "1f171", "1f18e", "1f17e", "1f4a0", "27bf", "267b", "2648", "2649", "264a", "264b", "264c", "264d", "264e", "264f", "2650", "2651", "2652", "2653", "26ce", "1f52f", "1f3e7", "1f4b9", "1f4b2", "1f4b1", "00a9", "00ae", "2122", "274c", "203c", "2049", "2757", "2753", "2755", "2754", "2b55", "1f51d", "1f51a", "1f519", "1f51b", "1f51c", "1f503", "1f55b", "1f567", "1f550", "1f55c", "1f551", "1f55d", "1f552", "1f55e", "1f553", "1f55f", "1f554", "1f560", "1f555", "1f556", "1f557", "1f558", "1f559", "1f55a", "1f561", "1f562", "1f563", "1f564", "1f565", "1f566", "2716", "2795", "2796", "2797", "2660", "2665", "2663", "2666", "1f4ae", "1f4af", "2714", "2611", "1f518", "1f517", "27b0", "3030", "303d", "1f531", "25fc", "25fb", "25fe", "25fd", "25aa", "25ab", "1f53a", "1f532", "1f533", "26ab", "26aa", "1f534", "1f535", "1f53b", "2b1c", "2b1b", "1f536", "1f537", "1f538", "1f539"]
];



Config.EmojiCategorySpritesheetDimens = [
    [7, 27],
    [4, 29],
    [7, 33],
    [3, 34],
    [7, 34]
];


Config.emoji_data = {
    "00a9": [
        ["\u00A9"], "\uE24E", "\uDBBA\uDF29", ["copyright"], 0, 0
    ],
    "00ae": [
        ["\u00AE"], "\uE24F", "\uDBBA\uDF2D", ["registered"], 0, 1
    ],
    "203c": [
        ["\u203C\uFE0F", "\u203C"], "", "\uDBBA\uDF06", ["bangbang"], 0, 2
    ],
    "2049": [
        ["\u2049\uFE0F", "\u2049"], "", "\uDBBA\uDF05", ["interrobang"], 0, 3
    ],
    "2122": [
        ["\u2122"], "\uE537", "\uDBBA\uDF2A", ["tm"], 0, 4
    ],
    "2139": [
        ["\u2139\uFE0F", "\u2139"], "", "\uDBBA\uDF47", ["information_source"], 0, 5
    ],
    "2194": [
        ["\u2194\uFE0F", "\u2194"], "", "\uDBBA\uDEF6", ["left_right_arrow"], 0, 6
    ],
    "2195": [
        ["\u2195\uFE0F", "\u2195"], "", "\uDBBA\uDEF7", ["arrow_up_down"], 0, 7
    ],
    "2196": [
        ["\u2196\uFE0F", "\u2196"], "\uE237", "\uDBBA\uDEF2", ["arrow_upper_left"], 0, 8
    ],
    "2197": [
        ["\u2197\uFE0F", "\u2197"], "\uE236", "\uDBBA\uDEF0", ["arrow_upper_right"], 0, 9
    ],
    "2198": [
        ["\u2198\uFE0F", "\u2198"], "\uE238", "\uDBBA\uDEF1", ["arrow_lower_right"], 0, 10
    ],
    "2199": [
        ["\u2199\uFE0F", "\u2199"], "\uE239", "\uDBBA\uDEF3", ["arrow_lower_left"], 0, 11
    ],
    "21a9": [
        ["\u21A9\uFE0F", "\u21A9"], "", "\uDBBA\uDF83", ["leftwards_arrow_with_hook"], 0, 12
    ],
    "21aa": [
        ["\u21AA\uFE0F", "\u21AA"], "", "\uDBBA\uDF88", ["arrow_right_hook"], 0, 13
    ],
    "231a": [
        ["\u231A\uFE0F", "\u231A"], "", "\uDBB8\uDC1D", ["watch"], 0, 14
    ],
    "231b": [
        ["\u231B\uFE0F", "\u231B"], "", "\uDBB8\uDC1C", ["hourglass"], 0, 15
    ],
    "23e9": [
        ["\u23E9"], "\uE23C", "\uDBBA\uDEFE", ["fast_forward"], 0, 16
    ],
    "23ea": [
        ["\u23EA"], "\uE23D", "\uDBBA\uDEFF", ["rewind"], 0, 17
    ],
    "23eb": [
        ["\u23EB"], "", "\uDBBA\uDF03", ["arrow_double_up"], 0, 18
    ],
    "23ec": [
        ["\u23EC"], "", "\uDBBA\uDF02", ["arrow_double_down"], 0, 19
    ],
    "23f0": [
        ["\u23F0"], "\uE02D", "\uDBB8\uDC2A", ["alarm_clock"], 0, 20
    ],
    "23f3": [
        ["\u23F3"], "", "\uDBB8\uDC1B", ["hourglass_flowing_sand"], 0, 21
    ],
    "24c2": [
        ["\u24C2\uFE0F", "\u24C2"], "\uE434", "\uDBB9\uDFE1", ["m"], 0, 22
    ],
    "25aa": [
        ["\u25AA\uFE0F", "\u25AA"], "\uE21A", "\uDBBA\uDF6E", ["black_small_square"], 0, 23
    ],
    "25ab": [
        ["\u25AB\uFE0F", "\u25AB"], "\uE21B", "\uDBBA\uDF6D", ["white_small_square"], 0, 24
    ],
    "25b6": [
        ["\u25B6\uFE0F", "\u25B6"], "\uE23A", "\uDBBA\uDEFC", ["arrow_forward"], 0, 25
    ],
    "25c0": [
        ["\u25C0\uFE0F", "\u25C0"], "\uE23B", "\uDBBA\uDEFD", ["arrow_backward"], 0, 26
    ],
    "25fb": [
        ["\u25FB\uFE0F", "\u25FB"], "\uE21B", "\uDBBA\uDF71", ["white_medium_square"], 0, 27
    ],
    "25fc": [
        ["\u25FC\uFE0F", "\u25FC"], "\uE21A", "\uDBBA\uDF72", ["black_medium_square"], 0, 28
    ],
    "25fd": [
        ["\u25FD\uFE0F", "\u25FD"], "\uE21B", "\uDBBA\uDF6F", ["white_medium_small_square"], 0, 29
    ],
    "25fe": [
        ["\u25FE\uFE0F", "\u25FE"], "\uE21A", "\uDBBA\uDF70", ["black_medium_small_square"], 1, 0
    ],
    "2600": [
        ["\u2600\uFE0F", "\u2600"], "\uE04A", "\uDBB8\uDC00", ["sunny"], 1, 1
    ],
    "2601": [
        ["\u2601\uFE0F", "\u2601"], "\uE049", "\uDBB8\uDC01", ["cloud"], 1, 2
    ],
    "260e": [
        ["\u260E\uFE0F", "\u260E"], "\uE009", "\uDBB9\uDD23", ["phone", "telephone"], 1, 3
    ],
    "2611": [
        ["\u2611\uFE0F", "\u2611"], "", "\uDBBA\uDF8B", ["ballot_box_with_check"], 1, 4
    ],
    "2614": [
        ["\u2614\uFE0F", "\u2614"], "\uE04B", "\uDBB8\uDC02", ["umbrella"], 1, 5
    ],
    "2615": [
        ["\u2615\uFE0F", "\u2615"], "\uE045", "\uDBBA\uDD81", ["coffee"], 1, 6
    ],
    "261d": [
        ["\u261D\uFE0F", "\u261D"], "\uE00F", "\uDBBA\uDF98", ["point_up"], 1, 7
    ],
    "263a": [
        ["\u263A\uFE0F", "\u263A"], "\uE414", "\uDBB8\uDF36", ["relaxed"], 1, 8
    ],
    "2648": [
        ["\u2648\uFE0F", "\u2648"], "\uE23F", "\uDBB8\uDC2B", ["aries"], 1, 9
    ],
    "2649": [
        ["\u2649\uFE0F", "\u2649"], "\uE240", "\uDBB8\uDC2C", ["taurus"], 1, 10
    ],
    "264a": [
        ["\u264A\uFE0F", "\u264A"], "\uE241", "\uDBB8\uDC2D", ["gemini"], 1, 11
    ],
    "264b": [
        ["\u264B\uFE0F", "\u264B"], "\uE242", "\uDBB8\uDC2E", ["cancer"], 1, 12
    ],
    "264c": [
        ["\u264C\uFE0F", "\u264C"], "\uE243", "\uDBB8\uDC2F", ["leo"], 1, 13
    ],
    "264d": [
        ["\u264D\uFE0F", "\u264D"], "\uE244", "\uDBB8\uDC30", ["virgo"], 1, 14
    ],
    "264e": [
        ["\u264E\uFE0F", "\u264E"], "\uE245", "\uDBB8\uDC31", ["libra"], 1, 15
    ],
    "264f": [
        ["\u264F\uFE0F", "\u264F"], "\uE246", "\uDBB8\uDC32", ["scorpius"], 1, 16
    ],
    "2650": [
        ["\u2650\uFE0F", "\u2650"], "\uE247", "\uDBB8\uDC33", ["sagittarius"], 1, 17
    ],
    "2651": [
        ["\u2651\uFE0F", "\u2651"], "\uE248", "\uDBB8\uDC34", ["capricorn"], 1, 18
    ],
    "2652": [
        ["\u2652\uFE0F", "\u2652"], "\uE249", "\uDBB8\uDC35", ["aquarius"], 1, 19
    ],
    "2653": [
        ["\u2653\uFE0F", "\u2653"], "\uE24A", "\uDBB8\uDC36", ["pisces"], 1, 20
    ],
    "2660": [
        ["\u2660\uFE0F", "\u2660"], "\uE20E", "\uDBBA\uDF1B", ["spades"], 1, 21
    ],
    "2663": [
        ["\u2663\uFE0F", "\u2663"], "\uE20F", "\uDBBA\uDF1D", ["clubs"], 1, 22
    ],
    "2665": [
        ["\u2665\uFE0F", "\u2665"], "\uE20C", "\uDBBA\uDF1A", ["hearts"], 1, 23
    ],
    "2666": [
        ["\u2666\uFE0F", "\u2666"], "\uE20D", "\uDBBA\uDF1C", ["diamonds"], 1, 24
    ],
    "2668": [
        ["\u2668\uFE0F", "\u2668"], "\uE123", "\uDBB9\uDFFA", ["hotsprings"], 1, 25
    ],
    "267b": [
        ["\u267B\uFE0F", "\u267B"], "", "\uDBBA\uDF2C", ["recycle"], 1, 26
    ],
    "267f": [
        ["\u267F\uFE0F", "\u267F"], "\uE20A", "\uDBBA\uDF20", ["wheelchair"], 1, 27
    ],
    "2693": [
        ["\u2693\uFE0F", "\u2693"], "\uE202", "\uDBB9\uDCC1", ["anchor"], 1, 28
    ],
    "26a0": [
        ["\u26A0\uFE0F", "\u26A0"], "\uE252", "\uDBBA\uDF23", ["warning"], 1, 29
    ],
    "26a1": [
        ["\u26A1\uFE0F", "\u26A1"], "\uE13D", "\uDBB8\uDC04", ["zap"], 2, 0
    ],
    "26aa": [
        ["\u26AA\uFE0F", "\u26AA"], "\uE219", "\uDBBA\uDF65", ["white_circle"], 2, 1
    ],
    "26ab": [
        ["\u26AB\uFE0F", "\u26AB"], "\uE219", "\uDBBA\uDF66", ["black_circle"], 2, 2
    ],
    "26bd": [
        ["\u26BD\uFE0F", "\u26BD"], "\uE018", "\uDBB9\uDFD4", ["soccer"], 2, 3
    ],
    "26be": [
        ["\u26BE\uFE0F", "\u26BE"], "\uE016", "\uDBB9\uDFD1", ["baseball"], 2, 4
    ],
    "26c4": [
        ["\u26C4\uFE0F", "\u26C4"], "\uE048", "\uDBB8\uDC03", ["snowman"], 2, 5
    ],
    "26c5": [
        ["\u26C5\uFE0F", "\u26C5"], "\uE04A\uE049", "\uDBB8\uDC0F", ["partly_sunny"], 2, 6
    ],
    "26ce": [
        ["\u26CE"], "\uE24B", "\uDBB8\uDC37", ["ophiuchus"], 2, 7
    ],
    "26d4": [
        ["\u26D4\uFE0F", "\u26D4"], "\uE137", "\uDBBA\uDF26", ["no_entry"], 2, 8
    ],
    "26ea": [
        ["\u26EA\uFE0F", "\u26EA"], "\uE037", "\uDBB9\uDCBB", ["church"], 2, 9
    ],
    "26f2": [
        ["\u26F2\uFE0F", "\u26F2"], "\uE121", "\uDBB9\uDCBC", ["fountain"], 2, 10
    ],
    "26f3": [
        ["\u26F3\uFE0F", "\u26F3"], "\uE014", "\uDBB9\uDFD2", ["golf"], 2, 11
    ],
    "26f5": [
        ["\u26F5\uFE0F", "\u26F5"], "\uE01C", "\uDBB9\uDFEA", ["boat", "sailboat"], 2, 12
    ],
    "26fa": [
        ["\u26FA\uFE0F", "\u26FA"], "\uE122", "\uDBB9\uDFFB", ["tent"], 2, 13
    ],
    "26fd": [
        ["\u26FD\uFE0F", "\u26FD"], "\uE03A", "\uDBB9\uDFF5", ["fuelpump"], 2, 14
    ],
    "2702": [
        ["\u2702\uFE0F", "\u2702"], "\uE313", "\uDBB9\uDD3E", ["scissors"], 2, 15
    ],
    "2705": [
        ["\u2705"], "", "\uDBBA\uDF4A", ["white_check_mark"], 2, 16
    ],
    "2708": [
        ["\u2708\uFE0F", "\u2708"], "\uE01D", "\uDBB9\uDFE9", ["airplane"], 2, 17
    ],
    "2709": [
        ["\u2709\uFE0F", "\u2709"], "\uE103", "\uDBB9\uDD29", ["email", "envelope"], 2, 18
    ],
    "270a": [
        ["\u270A"], "\uE010", "\uDBBA\uDF93", ["fist"], 2, 19
    ],
    "270b": [
        ["\u270B"], "\uE012", "\uDBBA\uDF95", ["hand", "raised_hand"], 2, 20
    ],
    "270c": [
        ["\u270C\uFE0F", "\u270C"], "\uE011", "\uDBBA\uDF94", ["v"], 2, 21
    ],
    "270f": [
        ["\u270F\uFE0F", "\u270F"], "\uE301", "\uDBB9\uDD39", ["pencil2"], 2, 22
    ],
    "2712": [
        ["\u2712\uFE0F", "\u2712"], "", "\uDBB9\uDD36", ["black_nib"], 2, 23
    ],
    "2714": [
        ["\u2714\uFE0F", "\u2714"], "", "\uDBBA\uDF49", ["heavy_check_mark"], 2, 24
    ],
    "2716": [
        ["\u2716\uFE0F", "\u2716"], "\uE333", "\uDBBA\uDF53", ["heavy_multiplication_x"], 2, 25
    ],
    "2728": [
        ["\u2728"], "\uE32E", "\uDBBA\uDF60", ["sparkles"], 2, 26
    ],
    "2733": [
        ["\u2733\uFE0F", "\u2733"], "\uE206", "\uDBBA\uDF62", ["eight_spoked_asterisk"], 2, 27
    ],
    "2734": [
        ["\u2734\uFE0F", "\u2734"], "\uE205", "\uDBBA\uDF61", ["eight_pointed_black_star"], 2, 28
    ],
    "2744": [
        ["\u2744\uFE0F", "\u2744"], "", "\uDBB8\uDC0E", ["snowflake"], 2, 29
    ],
    "2747": [
        ["\u2747\uFE0F", "\u2747"], "\uE32E", "\uDBBA\uDF77", ["sparkle"], 3, 0
    ],
    "274c": [
        ["\u274C"], "\uE333", "\uDBBA\uDF45", ["x"], 3, 1
    ],
    "274e": [
        ["\u274E"], "\uE333", "\uDBBA\uDF46", ["negative_squared_cross_mark"], 3, 2
    ],
    "2753": [
        ["\u2753"], "\uE020", "\uDBBA\uDF09", ["question"], 3, 3
    ],
    "2754": [
        ["\u2754"], "\uE336", "\uDBBA\uDF0A", ["grey_question"], 3, 4
    ],
    "2755": [
        ["\u2755"], "\uE337", "\uDBBA\uDF0B", ["grey_exclamation"], 3, 5
    ],
    "2757": [
        ["\u2757\uFE0F", "\u2757"], "\uE021", "\uDBBA\uDF04", ["exclamation", "heavy_exclamation_mark"], 3, 6
    ],
    "2764": [
        ["\u2764\uFE0F", "\u2764"], "\uE022", "\uDBBA\uDF0C", ["heart"], 3, 7, "<3"
    ],
    "2795": [
        ["\u2795"], "", "\uDBBA\uDF51", ["heavy_plus_sign"], 3, 8
    ],
    "2796": [
        ["\u2796"], "", "\uDBBA\uDF52", ["heavy_minus_sign"], 3, 9
    ],
    "2797": [
        ["\u2797"], "", "\uDBBA\uDF54", ["heavy_division_sign"], 3, 10
    ],
    "27a1": [
        ["\u27A1\uFE0F", "\u27A1"], "\uE234", "\uDBBA\uDEFA", ["arrow_right"], 3, 11
    ],
    "27b0": [
        ["\u27B0"], "", "\uDBBA\uDF08", ["curly_loop"], 3, 12
    ],
    "27bf": [
        ["\u27BF"], "\uE211", "\uDBBA\uDC2B", ["loop"], 3, 13
    ],
    "2934": [
        ["\u2934\uFE0F", "\u2934"], "\uE236", "\uDBBA\uDEF4", ["arrow_heading_up"], 3, 14
    ],
    "2935": [
        ["\u2935\uFE0F", "\u2935"], "\uE238", "\uDBBA\uDEF5", ["arrow_heading_down"], 3, 15
    ],
    "2b05": [
        ["\u2B05\uFE0F", "\u2B05"], "\uE235", "\uDBBA\uDEFB", ["arrow_left"], 3, 16
    ],
    "2b06": [
        ["\u2B06\uFE0F", "\u2B06"], "\uE232", "\uDBBA\uDEF8", ["arrow_up"], 3, 17
    ],
    "2b07": [
        ["\u2B07\uFE0F", "\u2B07"], "\uE233", "\uDBBA\uDEF9", ["arrow_down"], 3, 18
    ],
    "2b1b": [
        ["\u2B1B\uFE0F", "\u2B1B"], "\uE21A", "\uDBBA\uDF6C", ["black_large_square"], 3, 19
    ],
    "2b1c": [
        ["\u2B1C\uFE0F", "\u2B1C"], "\uE21B", "\uDBBA\uDF6B", ["white_large_square"], 3, 20
    ],
    "2b50": [
        ["\u2B50\uFE0F", "\u2B50"], "\uE32F", "\uDBBA\uDF68", ["star"], 3, 21
    ],
    "2b55": [
        ["\u2B55\uFE0F", "\u2B55"], "\uE332", "\uDBBA\uDF44", ["o"], 3, 22
    ],
    "3030": [
        ["\u3030"], "", "\uDBBA\uDF07", ["wavy_dash"], 3, 23
    ],
    "303d": [
        ["\u303D\uFE0F", "\u303D"], "\uE12C", "\uDBBA\uDC1B", ["part_alternation_mark"], 3, 24
    ],
    "3297": [
        ["\u3297\uFE0F", "\u3297"], "\uE30D", "\uDBBA\uDF43", ["congratulations"], 3, 25
    ],
    "3299": [
        ["\u3299\uFE0F", "\u3299"], "\uE315", "\uDBBA\uDF2B", ["secret"], 3, 26
    ],
    "1f004": [
        ["\uD83C\uDC04\uFE0F", "\uD83C\uDC04"], "\uE12D", "\uDBBA\uDC0B", ["mahjong"], 3, 27
    ],
    "1f0cf": [
        ["\uD83C\uDCCF"], "", "\uDBBA\uDC12", ["black_joker"], 3, 28
    ],
    "1f170": [
        ["\uD83C\uDD70"], "\uE532", "\uDBB9\uDD0B", ["a"], 3, 29
    ],
    "1f171": [
        ["\uD83C\uDD71"], "\uE533", "\uDBB9\uDD0C", ["b"], 4, 0
    ],
    "1f17e": [
        ["\uD83C\uDD7E"], "\uE535", "\uDBB9\uDD0E", ["o2"], 4, 1
    ],
    "1f17f": [
        ["\uD83C\uDD7F\uFE0F", "\uD83C\uDD7F"], "\uE14F", "\uDBB9\uDFF6", ["parking"], 4, 2
    ],
    "1f18e": [
        ["\uD83C\uDD8E"], "\uE534", "\uDBB9\uDD0D", ["ab"], 4, 3
    ],
    "1f191": [
        ["\uD83C\uDD91"], "", "\uDBBA\uDF84", ["cl"], 4, 4
    ],
    "1f192": [
        ["\uD83C\uDD92"], "\uE214", "\uDBBA\uDF38", ["cool"], 4, 5
    ],
    "1f193": [
        ["\uD83C\uDD93"], "", "\uDBBA\uDF21", ["free"], 4, 6
    ],
    "1f194": [
        ["\uD83C\uDD94"], "\uE229", "\uDBBA\uDF81", ["id"], 4, 7
    ],
    "1f195": [
        ["\uD83C\uDD95"], "\uE212", "\uDBBA\uDF36", ["new"], 4, 8
    ],
    "1f196": [
        ["\uD83C\uDD96"], "", "\uDBBA\uDF28", ["ng"], 4, 9
    ],
    "1f197": [
        ["\uD83C\uDD97"], "\uE24D", "\uDBBA\uDF27", ["ok"], 4, 10
    ],
    "1f198": [
        ["\uD83C\uDD98"], "", "\uDBBA\uDF4F", ["sos"], 4, 11
    ],
    "1f199": [
        ["\uD83C\uDD99"], "\uE213", "\uDBBA\uDF37", ["up"], 4, 12
    ],
    "1f19a": [
        ["\uD83C\uDD9A"], "\uE12E", "\uDBBA\uDF32", ["vs"], 4, 13
    ],
    "1f201": [
        ["\uD83C\uDE01"], "\uE203", "\uDBBA\uDF24", ["koko"], 4, 14
    ],
    "1f202": [
        ["\uD83C\uDE02"], "\uE228", "\uDBBA\uDF3F", ["sa"], 4, 15
    ],
    "1f21a": [
        ["\uD83C\uDE1A\uFE0F", "\uD83C\uDE1A"], "\uE216", "\uDBBA\uDF3A", ["u7121"], 4, 16
    ],
    "1f22f": [
        ["\uD83C\uDE2F\uFE0F", "\uD83C\uDE2F"], "\uE22C", "\uDBBA\uDF40", ["u6307"], 4, 17
    ],
    "1f232": [
        ["\uD83C\uDE32"], "", "\uDBBA\uDF2E", ["u7981"], 4, 18
    ],
    "1f233": [
        ["\uD83C\uDE33"], "\uE22B", "\uDBBA\uDF2F", ["u7a7a"], 4, 19
    ],
    "1f234": [
        ["\uD83C\uDE34"], "", "\uDBBA\uDF30", ["u5408"], 4, 20
    ],
    "1f235": [
        ["\uD83C\uDE35"], "\uE22A", "\uDBBA\uDF31", ["u6e80"], 4, 21
    ],
    "1f236": [
        ["\uD83C\uDE36"], "\uE215", "\uDBBA\uDF39", ["u6709"], 4, 22
    ],
    "1f237": [
        ["\uD83C\uDE37"], "\uE217", "\uDBBA\uDF3B", ["u6708"], 4, 23
    ],
    "1f238": [
        ["\uD83C\uDE38"], "\uE218", "\uDBBA\uDF3C", ["u7533"], 4, 24
    ],
    "1f239": [
        ["\uD83C\uDE39"], "\uE227", "\uDBBA\uDF3E", ["u5272"], 4, 25
    ],
    "1f23a": [
        ["\uD83C\uDE3A"], "\uE22D", "\uDBBA\uDF41", ["u55b6"], 4, 26
    ],
    "1f250": [
        ["\uD83C\uDE50"], "\uE226", "\uDBBA\uDF3D", ["ideograph_advantage"], 4, 27
    ],
    "1f251": [
        ["\uD83C\uDE51"], "", "\uDBBA\uDF50", ["accept"], 4, 28
    ],
    "1f300": [
        ["\uD83C\uDF00"], "\uE443", "\uDBB8\uDC05", ["cyclone"], 4, 29
    ],
    "1f301": [
        ["\uD83C\uDF01"], "", "\uDBB8\uDC06", ["foggy"], 5, 0
    ],
    "1f302": [
        ["\uD83C\uDF02"], "\uE43C", "\uDBB8\uDC07", ["closed_umbrella"], 5, 1
    ],
    "1f303": [
        ["\uD83C\uDF03"], "\uE44B", "\uDBB8\uDC08", ["night_with_stars"], 5, 2
    ],
    "1f304": [
        ["\uD83C\uDF04"], "\uE04D", "\uDBB8\uDC09", ["sunrise_over_mountains"], 5, 3
    ],
    "1f305": [
        ["\uD83C\uDF05"], "\uE449", "\uDBB8\uDC0A", ["sunrise"], 5, 4
    ],
    "1f306": [
        ["\uD83C\uDF06"], "\uE146", "\uDBB8\uDC0B", ["city_sunset"], 5, 5
    ],
    "1f307": [
        ["\uD83C\uDF07"], "\uE44A", "\uDBB8\uDC0C", ["city_sunrise"], 5, 6
    ],
    "1f308": [
        ["\uD83C\uDF08"], "\uE44C", "\uDBB8\uDC0D", ["rainbow"], 5, 7
    ],
    "1f309": [
        ["\uD83C\uDF09"], "\uE44B", "\uDBB8\uDC10", ["bridge_at_night"], 5, 8
    ],
    "1f30a": [
        ["\uD83C\uDF0A"], "\uE43E", "\uDBB8\uDC38", ["ocean"], 5, 9
    ],
    "1f30b": [
        ["\uD83C\uDF0B"], "", "\uDBB8\uDC3A", ["volcano"], 5, 10
    ],
    "1f30c": [
        ["\uD83C\uDF0C"], "\uE44B", "\uDBB8\uDC3B", ["milky_way"], 5, 11
    ],
    "1f30d": [
        ["\uD83C\uDF0D"], "", "", ["earth_africa"], 5, 12
    ],
    "1f30e": [
        ["\uD83C\uDF0E"], "", "", ["earth_americas"], 5, 13
    ],
    "1f30f": [
        ["\uD83C\uDF0F"], "", "\uDBB8\uDC39", ["earth_asia"], 5, 14
    ],
    "1f310": [
        ["\uD83C\uDF10"], "", "", ["globe_with_meridians"], 5, 15
    ],
    "1f311": [
        ["\uD83C\uDF11"], "", "\uDBB8\uDC11", ["new_moon"], 5, 16
    ],
    "1f312": [
        ["\uD83C\uDF12"], "", "", ["waxing_crescent_moon"], 5, 17
    ],
    "1f313": [
        ["\uD83C\uDF13"], "\uE04C", "\uDBB8\uDC13", ["first_quarter_moon"], 5, 18
    ],
    "1f314": [
        ["\uD83C\uDF14"], "\uE04C", "\uDBB8\uDC12", ["moon", "waxing_gibbous_moon"], 5, 19
    ],
    "1f315": [
        ["\uD83C\uDF15"], "", "\uDBB8\uDC15", ["full_moon"], 5, 20
    ],
    "1f316": [
        ["\uD83C\uDF16"], "", "", ["waning_gibbous_moon"], 5, 21
    ],
    "1f317": [
        ["\uD83C\uDF17"], "", "", ["last_quarter_moon"], 5, 22
    ],
    "1f318": [
        ["\uD83C\uDF18"], "", "", ["waning_crescent_moon"], 5, 23
    ],
    "1f319": [
        ["\uD83C\uDF19"], "\uE04C", "\uDBB8\uDC14", ["crescent_moon"], 5, 24
    ],
    "1f31a": [
        ["\uD83C\uDF1A"], "", "", ["new_moon_with_face"], 5, 25
    ],
    "1f31b": [
        ["\uD83C\uDF1B"], "\uE04C", "\uDBB8\uDC16", ["first_quarter_moon_with_face"], 5, 26
    ],
    "1f31c": [
        ["\uD83C\uDF1C"], "", "", ["last_quarter_moon_with_face"], 5, 27
    ],
    "1f31d": [
        ["\uD83C\uDF1D"], "", "", ["full_moon_with_face"], 5, 28
    ],
    "1f31e": [
        ["\uD83C\uDF1E"], "", "", ["sun_with_face"], 5, 29
    ],
    "1f31f": [
        ["\uD83C\uDF1F"], "\uE335", "\uDBBA\uDF69", ["star2"], 6, 0
    ],
    "1f320": [
        ["\uD83C\uDF20"], "", "\uDBBA\uDF6A", ["stars"], 6, 1
    ],
    "1f330": [
        ["\uD83C\uDF30"], "", "\uDBB8\uDC4C", ["chestnut"], 6, 2
    ],
    "1f331": [
        ["\uD83C\uDF31"], "\uE110", "\uDBB8\uDC3E", ["seedling"], 6, 3
    ],
    "1f332": [
        ["\uD83C\uDF32"], "", "", ["evergreen_tree"], 6, 4
    ],
    "1f333": [
        ["\uD83C\uDF33"], "", "", ["deciduous_tree"], 6, 5
    ],
    "1f334": [
        ["\uD83C\uDF34"], "\uE307", "\uDBB8\uDC47", ["palm_tree"], 6, 6
    ],
    "1f335": [
        ["\uD83C\uDF35"], "\uE308", "\uDBB8\uDC48", ["cactus"], 6, 7
    ],
    "1f337": [
        ["\uD83C\uDF37"], "\uE304", "\uDBB8\uDC3D", ["tulip"], 6, 8
    ],
    "1f338": [
        ["\uD83C\uDF38"], "\uE030", "\uDBB8\uDC40", ["cherry_blossom"], 6, 9
    ],
    "1f339": [
        ["\uD83C\uDF39"], "\uE032", "\uDBB8\uDC41", ["rose"], 6, 10
    ],
    "1f33a": [
        ["\uD83C\uDF3A"], "\uE303", "\uDBB8\uDC45", ["hibiscus"], 6, 11
    ],
    "1f33b": [
        ["\uD83C\uDF3B"], "\uE305", "\uDBB8\uDC46", ["sunflower"], 6, 12
    ],
    "1f33c": [
        ["\uD83C\uDF3C"], "\uE305", "\uDBB8\uDC4D", ["blossom"], 6, 13
    ],
    "1f33d": [
        ["\uD83C\uDF3D"], "", "\uDBB8\uDC4A", ["corn"], 6, 14
    ],
    "1f33e": [
        ["\uD83C\uDF3E"], "\uE444", "\uDBB8\uDC49", ["ear_of_rice"], 6, 15
    ],
    "1f33f": [
        ["\uD83C\uDF3F"], "\uE110", "\uDBB8\uDC4E", ["herb"], 6, 16
    ],
    "1f340": [
        ["\uD83C\uDF40"], "\uE110", "\uDBB8\uDC3C", ["four_leaf_clover"], 6, 17
    ],
    "1f341": [
        ["\uD83C\uDF41"], "\uE118", "\uDBB8\uDC3F", ["maple_leaf"], 6, 18
    ],
    "1f342": [
        ["\uD83C\uDF42"], "\uE119", "\uDBB8\uDC42", ["fallen_leaf"], 6, 19
    ],
    "1f343": [
        ["\uD83C\uDF43"], "\uE447", "\uDBB8\uDC43", ["leaves"], 6, 20
    ],
    "1f344": [
        ["\uD83C\uDF44"], "", "\uDBB8\uDC4B", ["mushroom"], 6, 21
    ],
    "1f345": [
        ["\uD83C\uDF45"], "\uE349", "\uDBB8\uDC55", ["tomato"], 6, 22
    ],
    "1f346": [
        ["\uD83C\uDF46"], "\uE34A", "\uDBB8\uDC56", ["eggplant"], 6, 23
    ],
    "1f347": [
        ["\uD83C\uDF47"], "", "\uDBB8\uDC59", ["grapes"], 6, 24
    ],
    "1f348": [
        ["\uD83C\uDF48"], "", "\uDBB8\uDC57", ["melon"], 6, 25
    ],
    "1f349": [
        ["\uD83C\uDF49"], "\uE348", "\uDBB8\uDC54", ["watermelon"], 6, 26
    ],
    "1f34a": [
        ["\uD83C\uDF4A"], "\uE346", "\uDBB8\uDC52", ["tangerine"], 6, 27
    ],
    "1f34b": [
        ["\uD83C\uDF4B"], "", "", ["lemon"], 6, 28
    ],
    "1f34c": [
        ["\uD83C\uDF4C"], "", "\uDBB8\uDC50", ["banana"], 6, 29
    ],
    "1f34d": [
        ["\uD83C\uDF4D"], "", "\uDBB8\uDC58", ["pineapple"], 7, 0
    ],
    "1f34e": [
        ["\uD83C\uDF4E"], "\uE345", "\uDBB8\uDC51", ["apple"], 7, 1
    ],
    "1f34f": [
        ["\uD83C\uDF4F"], "\uE345", "\uDBB8\uDC5B", ["green_apple"], 7, 2
    ],
    "1f350": [
        ["\uD83C\uDF50"], "", "", ["pear"], 7, 3
    ],
    "1f351": [
        ["\uD83C\uDF51"], "", "\uDBB8\uDC5A", ["peach"], 7, 4
    ],
    "1f352": [
        ["\uD83C\uDF52"], "", "\uDBB8\uDC4F", ["cherries"], 7, 5
    ],
    "1f353": [
        ["\uD83C\uDF53"], "\uE347", "\uDBB8\uDC53", ["strawberry"], 7, 6
    ],
    "1f354": [
        ["\uD83C\uDF54"], "\uE120", "\uDBBA\uDD60", ["hamburger"], 7, 7
    ],
    "1f355": [
        ["\uD83C\uDF55"], "", "\uDBBA\uDD75", ["pizza"], 7, 8
    ],
    "1f356": [
        ["\uD83C\uDF56"], "", "\uDBBA\uDD72", ["meat_on_bone"], 7, 9
    ],
    "1f357": [
        ["\uD83C\uDF57"], "", "\uDBBA\uDD76", ["poultry_leg"], 7, 10
    ],
    "1f358": [
        ["\uD83C\uDF58"], "\uE33D", "\uDBBA\uDD69", ["rice_cracker"], 7, 11
    ],
    "1f359": [
        ["\uD83C\uDF59"], "\uE342", "\uDBBA\uDD61", ["rice_ball"], 7, 12
    ],
    "1f35a": [
        ["\uD83C\uDF5A"], "\uE33E", "\uDBBA\uDD6A", ["rice"], 7, 13
    ],
    "1f35b": [
        ["\uD83C\uDF5B"], "\uE341", "\uDBBA\uDD6C", ["curry"], 7, 14
    ],
    "1f35c": [
        ["\uD83C\uDF5C"], "\uE340", "\uDBBA\uDD63", ["ramen"], 7, 15
    ],
    "1f35d": [
        ["\uD83C\uDF5D"], "\uE33F", "\uDBBA\uDD6B", ["spaghetti"], 7, 16
    ],
    "1f35e": [
        ["\uD83C\uDF5E"], "\uE339", "\uDBBA\uDD64", ["bread"], 7, 17
    ],
    "1f35f": [
        ["\uD83C\uDF5F"], "\uE33B", "\uDBBA\uDD67", ["fries"], 7, 18
    ],
    "1f360": [
        ["\uD83C\uDF60"], "", "\uDBBA\uDD74", ["sweet_potato"], 7, 19
    ],
    "1f361": [
        ["\uD83C\uDF61"], "\uE33C", "\uDBBA\uDD68", ["dango"], 7, 20
    ],
    "1f362": [
        ["\uD83C\uDF62"], "\uE343", "\uDBBA\uDD6D", ["oden"], 7, 21
    ],
    "1f363": [
        ["\uD83C\uDF63"], "\uE344", "\uDBBA\uDD6E", ["sushi"], 7, 22
    ],
    "1f364": [
        ["\uD83C\uDF64"], "", "\uDBBA\uDD7F", ["fried_shrimp"], 7, 23
    ],
    "1f365": [
        ["\uD83C\uDF65"], "", "\uDBBA\uDD73", ["fish_cake"], 7, 24
    ],
    "1f366": [
        ["\uD83C\uDF66"], "\uE33A", "\uDBBA\uDD66", ["icecream"], 7, 25
    ],
    "1f367": [
        ["\uD83C\uDF67"], "\uE43F", "\uDBBA\uDD71", ["shaved_ice"], 7, 26
    ],
    "1f368": [
        ["\uD83C\uDF68"], "", "\uDBBA\uDD77", ["ice_cream"], 7, 27
    ],
    "1f369": [
        ["\uD83C\uDF69"], "", "\uDBBA\uDD78", ["doughnut"], 7, 28
    ],
    "1f36a": [
        ["\uD83C\uDF6A"], "", "\uDBBA\uDD79", ["cookie"], 7, 29
    ],
    "1f36b": [
        ["\uD83C\uDF6B"], "", "\uDBBA\uDD7A", ["chocolate_bar"], 8, 0
    ],
    "1f36c": [
        ["\uD83C\uDF6C"], "", "\uDBBA\uDD7B", ["candy"], 8, 1
    ],
    "1f36d": [
        ["\uD83C\uDF6D"], "", "\uDBBA\uDD7C", ["lollipop"], 8, 2
    ],
    "1f36e": [
        ["\uD83C\uDF6E"], "", "\uDBBA\uDD7D", ["custard"], 8, 3
    ],
    "1f36f": [
        ["\uD83C\uDF6F"], "", "\uDBBA\uDD7E", ["honey_pot"], 8, 4
    ],
    "1f370": [
        ["\uD83C\uDF70"], "\uE046", "\uDBBA\uDD62", ["cake"], 8, 5
    ],
    "1f371": [
        ["\uD83C\uDF71"], "\uE34C", "\uDBBA\uDD6F", ["bento"], 8, 6
    ],
    "1f372": [
        ["\uD83C\uDF72"], "\uE34D", "\uDBBA\uDD70", ["stew"], 8, 7
    ],
    "1f373": [
        ["\uD83C\uDF73"], "\uE147", "\uDBBA\uDD65", ["egg"], 8, 8
    ],
    "1f374": [
        ["\uD83C\uDF74"], "\uE043", "\uDBBA\uDD80", ["fork_and_knife"], 8, 9
    ],
    "1f375": [
        ["\uD83C\uDF75"], "\uE338", "\uDBBA\uDD84", ["tea"], 8, 10
    ],
    "1f376": [
        ["\uD83C\uDF76"], "\uE30B", "\uDBBA\uDD85", ["sake"], 8, 11
    ],
    "1f377": [
        ["\uD83C\uDF77"], "\uE044", "\uDBBA\uDD86", ["wine_glass"], 8, 12
    ],
    "1f378": [
        ["\uD83C\uDF78"], "\uE044", "\uDBBA\uDD82", ["cocktail"], 8, 13
    ],
    "1f379": [
        ["\uD83C\uDF79"], "\uE044", "\uDBBA\uDD88", ["tropical_drink"], 8, 14
    ],
    "1f37a": [
        ["\uD83C\uDF7A"], "\uE047", "\uDBBA\uDD83", ["beer"], 8, 15
    ],
    "1f37b": [
        ["\uD83C\uDF7B"], "\uE30C", "\uDBBA\uDD87", ["beers"], 8, 16
    ],
    "1f37c": [
        ["\uD83C\uDF7C"], "", "", ["baby_bottle"], 8, 17
    ],
    "1f380": [
        ["\uD83C\uDF80"], "\uE314", "\uDBB9\uDD0F", ["ribbon"], 8, 18
    ],
    "1f381": [
        ["\uD83C\uDF81"], "\uE112", "\uDBB9\uDD10", ["gift"], 8, 19
    ],
    "1f382": [
        ["\uD83C\uDF82"], "\uE34B", "\uDBB9\uDD11", ["birthday"], 8, 20
    ],
    "1f383": [
        ["\uD83C\uDF83"], "\uE445", "\uDBB9\uDD1F", ["jack_o_lantern"], 8, 21
    ],
    "1f384": [
        ["\uD83C\uDF84"], "\uE033", "\uDBB9\uDD12", ["christmas_tree"], 8, 22
    ],
    "1f385": [
        ["\uD83C\uDF85"], "\uE448", "\uDBB9\uDD13", ["santa"], 8, 23
    ],
    "1f386": [
        ["\uD83C\uDF86"], "\uE117", "\uDBB9\uDD15", ["fireworks"], 8, 24
    ],
    "1f387": [
        ["\uD83C\uDF87"], "\uE440", "\uDBB9\uDD1D", ["sparkler"], 8, 25
    ],
    "1f388": [
        ["\uD83C\uDF88"], "\uE310", "\uDBB9\uDD16", ["balloon"], 8, 26
    ],
    "1f389": [
        ["\uD83C\uDF89"], "\uE312", "\uDBB9\uDD17", ["tada"], 8, 27
    ],
    "1f38a": [
        ["\uD83C\uDF8A"], "", "\uDBB9\uDD20", ["confetti_ball"], 8, 28
    ],
    "1f38b": [
        ["\uD83C\uDF8B"], "", "\uDBB9\uDD21", ["tanabata_tree"], 8, 29
    ],
    "1f38c": [
        ["\uD83C\uDF8C"], "\uE143", "\uDBB9\uDD14", ["crossed_flags"], 9, 0
    ],
    "1f38d": [
        ["\uD83C\uDF8D"], "\uE436", "\uDBB9\uDD18", ["bamboo"], 9, 1
    ],
    "1f38e": [
        ["\uD83C\uDF8E"], "\uE438", "\uDBB9\uDD19", ["dolls"], 9, 2
    ],
    "1f38f": [
        ["\uD83C\uDF8F"], "\uE43B", "\uDBB9\uDD1C", ["flags"], 9, 3
    ],
    "1f390": [
        ["\uD83C\uDF90"], "\uE442", "\uDBB9\uDD1E", ["wind_chime"], 9, 4
    ],
    "1f391": [
        ["\uD83C\uDF91"], "\uE446", "\uDBB8\uDC17", ["rice_scene"], 9, 5
    ],
    "1f392": [
        ["\uD83C\uDF92"], "\uE43A", "\uDBB9\uDD1B", ["school_satchel"], 9, 6
    ],
    "1f393": [
        ["\uD83C\uDF93"], "\uE439", "\uDBB9\uDD1A", ["mortar_board"], 9, 7
    ],
    "1f3a0": [
        ["\uD83C\uDFA0"], "", "\uDBB9\uDFFC", ["carousel_horse"], 9, 8
    ],
    "1f3a1": [
        ["\uD83C\uDFA1"], "\uE124", "\uDBB9\uDFFD", ["ferris_wheel"], 9, 9
    ],
    "1f3a2": [
        ["\uD83C\uDFA2"], "\uE433", "\uDBB9\uDFFE", ["roller_coaster"], 9, 10
    ],
    "1f3a3": [
        ["\uD83C\uDFA3"], "\uE019", "\uDBB9\uDFFF", ["fishing_pole_and_fish"], 9, 11
    ],
    "1f3a4": [
        ["\uD83C\uDFA4"], "\uE03C", "\uDBBA\uDC00", ["microphone"], 9, 12
    ],
    "1f3a5": [
        ["\uD83C\uDFA5"], "\uE03D", "\uDBBA\uDC01", ["movie_camera"], 9, 13
    ],
    "1f3a6": [
        ["\uD83C\uDFA6"], "\uE507", "\uDBBA\uDC02", ["cinema"], 9, 14
    ],
    "1f3a7": [
        ["\uD83C\uDFA7"], "\uE30A", "\uDBBA\uDC03", ["headphones"], 9, 15
    ],
    "1f3a8": [
        ["\uD83C\uDFA8"], "\uE502", "\uDBBA\uDC04", ["art"], 9, 16
    ],
    "1f3a9": [
        ["\uD83C\uDFA9"], "\uE503", "\uDBBA\uDC05", ["tophat"], 9, 17
    ],
    "1f3aa": [
        ["\uD83C\uDFAA"], "", "\uDBBA\uDC06", ["circus_tent"], 9, 18
    ],
    "1f3ab": [
        ["\uD83C\uDFAB"], "\uE125", "\uDBBA\uDC07", ["ticket"], 9, 19
    ],
    "1f3ac": [
        ["\uD83C\uDFAC"], "\uE324", "\uDBBA\uDC08", ["clapper"], 9, 20
    ],
    "1f3ad": [
        ["\uD83C\uDFAD"], "\uE503", "\uDBBA\uDC09", ["performing_arts"], 9, 21
    ],
    "1f3ae": [
        ["\uD83C\uDFAE"], "", "\uDBBA\uDC0A", ["video_game"], 9, 22
    ],
    "1f3af": [
        ["\uD83C\uDFAF"], "\uE130", "\uDBBA\uDC0C", ["dart"], 9, 23
    ],
    "1f3b0": [
        ["\uD83C\uDFB0"], "\uE133", "\uDBBA\uDC0D", ["slot_machine"], 9, 24
    ],
    "1f3b1": [
        ["\uD83C\uDFB1"], "\uE42C", "\uDBBA\uDC0E", ["8ball"], 9, 25
    ],
    "1f3b2": [
        ["\uD83C\uDFB2"], "", "\uDBBA\uDC0F", ["game_die"], 9, 26
    ],
    "1f3b3": [
        ["\uD83C\uDFB3"], "", "\uDBBA\uDC10", ["bowling"], 9, 27
    ],
    "1f3b4": [
        ["\uD83C\uDFB4"], "", "\uDBBA\uDC11", ["flower_playing_cards"], 9, 28
    ],
    "1f3b5": [
        ["\uD83C\uDFB5"], "\uE03E", "\uDBBA\uDC13", ["musical_note"], 9, 29
    ],
    "1f3b6": [
        ["\uD83C\uDFB6"], "\uE326", "\uDBBA\uDC14", ["notes"], 10, 0
    ],
    "1f3b7": [
        ["\uD83C\uDFB7"], "\uE040", "\uDBBA\uDC15", ["saxophone"], 10, 1
    ],
    "1f3b8": [
        ["\uD83C\uDFB8"], "\uE041", "\uDBBA\uDC16", ["guitar"], 10, 2
    ],
    "1f3b9": [
        ["\uD83C\uDFB9"], "", "\uDBBA\uDC17", ["musical_keyboard"], 10, 3
    ],
    "1f3ba": [
        ["\uD83C\uDFBA"], "\uE042", "\uDBBA\uDC18", ["trumpet"], 10, 4
    ],
    "1f3bb": [
        ["\uD83C\uDFBB"], "", "\uDBBA\uDC19", ["violin"], 10, 5
    ],
    "1f3bc": [
        ["\uD83C\uDFBC"], "\uE326", "\uDBBA\uDC1A", ["musical_score"], 10, 6
    ],
    "1f3bd": [
        ["\uD83C\uDFBD"], "", "\uDBB9\uDFD0", ["running_shirt_with_sash"], 10, 7
    ],
    "1f3be": [
        ["\uD83C\uDFBE"], "\uE015", "\uDBB9\uDFD3", ["tennis"], 10, 8
    ],
    "1f3bf": [
        ["\uD83C\uDFBF"], "\uE013", "\uDBB9\uDFD5", ["ski"], 10, 9
    ],
    "1f3c0": [
        ["\uD83C\uDFC0"], "\uE42A", "\uDBB9\uDFD6", ["basketball"], 10, 10
    ],
    "1f3c1": [
        ["\uD83C\uDFC1"], "\uE132", "\uDBB9\uDFD7", ["checkered_flag"], 10, 11
    ],
    "1f3c2": [
        ["\uD83C\uDFC2"], "", "\uDBB9\uDFD8", ["snowboarder"], 10, 12
    ],
    "1f3c3": [
        ["\uD83C\uDFC3"], "\uE115", "\uDBB9\uDFD9", ["runner", "running"], 10, 13
    ],
    "1f3c4": [
        ["\uD83C\uDFC4"], "\uE017", "\uDBB9\uDFDA", ["surfer"], 10, 14
    ],
    "1f3c6": [
        ["\uD83C\uDFC6"], "\uE131", "\uDBB9\uDFDB", ["trophy"], 10, 15
    ],
    "1f3c7": [
        ["\uD83C\uDFC7"], "", "", ["horse_racing"], 10, 16
    ],
    "1f3c8": [
        ["\uD83C\uDFC8"], "\uE42B", "\uDBB9\uDFDD", ["football"], 10, 17
    ],
    "1f3c9": [
        ["\uD83C\uDFC9"], "", "", ["rugby_football"], 10, 18
    ],
    "1f3ca": [
        ["\uD83C\uDFCA"], "\uE42D", "\uDBB9\uDFDE", ["swimmer"], 10, 19
    ],
    "1f3e0": [
        ["\uD83C\uDFE0"], "\uE036", "\uDBB9\uDCB0", ["house"], 10, 20
    ],
    "1f3e1": [
        ["\uD83C\uDFE1"], "\uE036", "\uDBB9\uDCB1", ["house_with_garden"], 10, 21
    ],
    "1f3e2": [
        ["\uD83C\uDFE2"], "\uE038", "\uDBB9\uDCB2", ["office"], 10, 22
    ],
    "1f3e3": [
        ["\uD83C\uDFE3"], "\uE153", "\uDBB9\uDCB3", ["post_office"], 10, 23
    ],
    "1f3e4": [
        ["\uD83C\uDFE4"], "", "", ["european_post_office"], 10, 24
    ],
    "1f3e5": [
        ["\uD83C\uDFE5"], "\uE155", "\uDBB9\uDCB4", ["hospital"], 10, 25
    ],
    "1f3e6": [
        ["\uD83C\uDFE6"], "\uE14D", "\uDBB9\uDCB5", ["bank"], 10, 26
    ],
    "1f3e7": [
        ["\uD83C\uDFE7"], "\uE154", "\uDBB9\uDCB6", ["atm"], 10, 27
    ],
    "1f3e8": [
        ["\uD83C\uDFE8"], "\uE158", "\uDBB9\uDCB7", ["hotel"], 10, 28
    ],
    "1f3e9": [
        ["\uD83C\uDFE9"], "\uE501", "\uDBB9\uDCB8", ["love_hotel"], 10, 29
    ],
    "1f3ea": [
        ["\uD83C\uDFEA"], "\uE156", "\uDBB9\uDCB9", ["convenience_store"], 11, 0
    ],
    "1f3eb": [
        ["\uD83C\uDFEB"], "\uE157", "\uDBB9\uDCBA", ["school"], 11, 1
    ],
    "1f3ec": [
        ["\uD83C\uDFEC"], "\uE504", "\uDBB9\uDCBD", ["department_store"], 11, 2
    ],
    "1f3ed": [
        ["\uD83C\uDFED"], "\uE508", "\uDBB9\uDCC0", ["factory"], 11, 3
    ],
    "1f3ee": [
        ["\uD83C\uDFEE"], "\uE30B", "\uDBB9\uDCC2", ["izakaya_lantern", "lantern"], 11, 4
    ],
    "1f3ef": [
        ["\uD83C\uDFEF"], "\uE505", "\uDBB9\uDCBE", ["japanese_castle"], 11, 5
    ],
    "1f3f0": [
        ["\uD83C\uDFF0"], "\uE506", "\uDBB9\uDCBF", ["european_castle"], 11, 6
    ],
    "1f400": [
        ["\uD83D\uDC00"], "", "", ["rat"], 11, 7
    ],
    "1f401": [
        ["\uD83D\uDC01"], "", "", ["mouse2"], 11, 8
    ],
    "1f402": [
        ["\uD83D\uDC02"], "", "", ["ox"], 11, 9
    ],
    "1f403": [
        ["\uD83D\uDC03"], "", "", ["water_buffalo"], 11, 10
    ],
    "1f404": [
        ["\uD83D\uDC04"], "", "", ["cow2"], 11, 11
    ],
    "1f405": [
        ["\uD83D\uDC05"], "", "", ["tiger2"], 11, 12
    ],
    "1f406": [
        ["\uD83D\uDC06"], "", "", ["leopard"], 11, 13
    ],
    "1f407": [
        ["\uD83D\uDC07"], "", "", ["rabbit2"], 11, 14
    ],
    "1f408": [
        ["\uD83D\uDC08"], "", "", ["cat2"], 11, 15
    ],
    "1f409": [
        ["\uD83D\uDC09"], "", "", ["dragon"], 11, 16
    ],
    "1f40a": [
        ["\uD83D\uDC0A"], "", "", ["crocodile"], 11, 17
    ],
    "1f40b": [
        ["\uD83D\uDC0B"], "", "", ["whale2"], 11, 18
    ],
    "1f40c": [
        ["\uD83D\uDC0C"], "", "\uDBB8\uDDB9", ["snail"], 11, 19
    ],
    "1f40d": [
        ["\uD83D\uDC0D"], "\uE52D", "\uDBB8\uDDD3", ["snake"], 11, 20
    ],
    "1f40e": [
        ["\uD83D\uDC0E"], "\uE134", "\uDBB9\uDFDC", ["racehorse"], 11, 21
    ],
    "1f40f": [
        ["\uD83D\uDC0F"], "", "", ["ram"], 11, 22
    ],
    "1f410": [
        ["\uD83D\uDC10"], "", "", ["goat"], 11, 23
    ],
    "1f411": [
        ["\uD83D\uDC11"], "\uE529", "\uDBB8\uDDCF", ["sheep"], 11, 24
    ],
    "1f412": [
        ["\uD83D\uDC12"], "\uE528", "\uDBB8\uDDCE", ["monkey"], 11, 25
    ],
    "1f413": [
        ["\uD83D\uDC13"], "", "", ["rooster"], 11, 26
    ],
    "1f414": [
        ["\uD83D\uDC14"], "\uE52E", "\uDBB8\uDDD4", ["chicken"], 11, 27
    ],
    "1f415": [
        ["\uD83D\uDC15"], "", "", ["dog2"], 11, 28
    ],
    "1f416": [
        ["\uD83D\uDC16"], "", "", ["pig2"], 11, 29
    ],
    "1f417": [
        ["\uD83D\uDC17"], "\uE52F", "\uDBB8\uDDD5", ["boar"], 12, 0
    ],
    "1f418": [
        ["\uD83D\uDC18"], "\uE526", "\uDBB8\uDDCC", ["elephant"], 12, 1
    ],
    "1f419": [
        ["\uD83D\uDC19"], "\uE10A", "\uDBB8\uDDC5", ["octopus"], 12, 2
    ],
    "1f41a": [
        ["\uD83D\uDC1A"], "\uE441", "\uDBB8\uDDC6", ["shell"], 12, 3
    ],
    "1f41b": [
        ["\uD83D\uDC1B"], "\uE525", "\uDBB8\uDDCB", ["bug"], 12, 4
    ],
    "1f41c": [
        ["\uD83D\uDC1C"], "", "\uDBB8\uDDDA", ["ant"], 12, 5
    ],
    "1f41d": [
        ["\uD83D\uDC1D"], "", "\uDBB8\uDDE1", ["bee", "honeybee"], 12, 6
    ],
    "1f41e": [
        ["\uD83D\uDC1E"], "", "\uDBB8\uDDE2", ["beetle"], 12, 7
    ],
    "1f41f": [
        ["\uD83D\uDC1F"], "\uE019", "\uDBB8\uDDBD", ["fish"], 12, 8
    ],
    "1f420": [
        ["\uD83D\uDC20"], "\uE522", "\uDBB8\uDDC9", ["tropical_fish"], 12, 9
    ],
    "1f421": [
        ["\uD83D\uDC21"], "\uE019", "\uDBB8\uDDD9", ["blowfish"], 12, 10
    ],
    "1f422": [
        ["\uD83D\uDC22"], "", "\uDBB8\uDDDC", ["turtle"], 12, 11
    ],
    "1f423": [
        ["\uD83D\uDC23"], "\uE523", "\uDBB8\uDDDD", ["hatching_chick"], 12, 12
    ],
    "1f424": [
        ["\uD83D\uDC24"], "\uE523", "\uDBB8\uDDBA", ["baby_chick"], 12, 13
    ],
    "1f425": [
        ["\uD83D\uDC25"], "\uE523", "\uDBB8\uDDBB", ["hatched_chick"], 12, 14
    ],
    "1f426": [
        ["\uD83D\uDC26"], "\uE521", "\uDBB8\uDDC8", ["bird"], 12, 15
    ],
    "1f427": [
        ["\uD83D\uDC27"], "\uE055", "\uDBB8\uDDBC", ["penguin"], 12, 16
    ],
    "1f428": [
        ["\uD83D\uDC28"], "\uE527", "\uDBB8\uDDCD", ["koala"], 12, 17
    ],
    "1f429": [
        ["\uD83D\uDC29"], "\uE052", "\uDBB8\uDDD8", ["poodle"], 12, 18
    ],
    "1f42a": [
        ["\uD83D\uDC2A"], "", "", ["dromedary_camel"], 12, 19
    ],
    "1f42b": [
        ["\uD83D\uDC2B"], "\uE530", "\uDBB8\uDDD6", ["camel"], 12, 20
    ],
    "1f42c": [
        ["\uD83D\uDC2C"], "\uE520", "\uDBB8\uDDC7", ["dolphin", "flipper"], 12, 21
    ],
    "1f42d": [
        ["\uD83D\uDC2D"], "\uE053", "\uDBB8\uDDC2", ["mouse"], 12, 22
    ],
    "1f42e": [
        ["\uD83D\uDC2E"], "\uE52B", "\uDBB8\uDDD1", ["cow"], 12, 23
    ],
    "1f42f": [
        ["\uD83D\uDC2F"], "\uE050", "\uDBB8\uDDC0", ["tiger"], 12, 24
    ],
    "1f430": [
        ["\uD83D\uDC30"], "\uE52C", "\uDBB8\uDDD2", ["rabbit"], 12, 25
    ],
    "1f431": [
        ["\uD83D\uDC31"], "\uE04F", "\uDBB8\uDDB8", ["cat"], 12, 26
    ],
    "1f432": [
        ["\uD83D\uDC32"], "", "\uDBB8\uDDDE", ["dragon_face"], 12, 27
    ],
    "1f433": [
        ["\uD83D\uDC33"], "\uE054", "\uDBB8\uDDC3", ["whale"], 12, 28
    ],
    "1f434": [
        ["\uD83D\uDC34"], "\uE01A", "\uDBB8\uDDBE", ["horse"], 12, 29
    ],
    "1f435": [
        ["\uD83D\uDC35"], "\uE109", "\uDBB8\uDDC4", ["monkey_face"], 13, 0
    ],
    "1f436": [
        ["\uD83D\uDC36"], "\uE052", "\uDBB8\uDDB7", ["dog"], 13, 1
    ],
    "1f437": [
        ["\uD83D\uDC37"], "\uE10B", "\uDBB8\uDDBF", ["pig"], 13, 2
    ],
    "1f438": [
        ["\uD83D\uDC38"], "\uE531", "\uDBB8\uDDD7", ["frog"], 13, 3
    ],
    "1f439": [
        ["\uD83D\uDC39"], "\uE524", "\uDBB8\uDDCA", ["hamster"], 13, 4
    ],
    "1f43a": [
        ["\uD83D\uDC3A"], "\uE52A", "\uDBB8\uDDD0", ["wolf"], 13, 5
    ],
    "1f43b": [
        ["\uD83D\uDC3B"], "\uE051", "\uDBB8\uDDC1", ["bear"], 13, 6
    ],
    "1f43c": [
        ["\uD83D\uDC3C"], "", "\uDBB8\uDDDF", ["panda_face"], 13, 7
    ],
    "1f43d": [
        ["\uD83D\uDC3D"], "\uE10B", "\uDBB8\uDDE0", ["pig_nose"], 13, 8
    ],
    "1f43e": [
        ["\uD83D\uDC3E"], "\uE536", "\uDBB8\uDDDB", ["feet", "paw_prints"], 13, 9
    ],
    "1f440": [
        ["\uD83D\uDC40"], "\uE419", "\uDBB8\uDD90", ["eyes"], 13, 10
    ],
    "1f442": [
        ["\uD83D\uDC42"], "\uE41B", "\uDBB8\uDD91", ["ear"], 13, 11
    ],
    "1f443": [
        ["\uD83D\uDC43"], "\uE41A", "\uDBB8\uDD92", ["nose"], 13, 12
    ],
    "1f444": [
        ["\uD83D\uDC44"], "\uE41C", "\uDBB8\uDD93", ["lips"], 13, 13
    ],
    "1f445": [
        ["\uD83D\uDC45"], "\uE409", "\uDBB8\uDD94", ["tongue"], 13, 14
    ],
    "1f446": [
        ["\uD83D\uDC46"], "\uE22E", "\uDBBA\uDF99", ["point_up_2"], 13, 15
    ],
    "1f447": [
        ["\uD83D\uDC47"], "\uE22F", "\uDBBA\uDF9A", ["point_down"], 13, 16
    ],
    "1f448": [
        ["\uD83D\uDC48"], "\uE230", "\uDBBA\uDF9B", ["point_left"], 13, 17
    ],
    "1f449": [
        ["\uD83D\uDC49"], "\uE231", "\uDBBA\uDF9C", ["point_right"], 13, 18
    ],
    "1f44a": [
        ["\uD83D\uDC4A"], "\uE00D", "\uDBBA\uDF96", ["facepunch", "punch"], 13, 19
    ],
    "1f44b": [
        ["\uD83D\uDC4B"], "\uE41E", "\uDBBA\uDF9D", ["wave"], 13, 20
    ],
    "1f44c": [
        ["\uD83D\uDC4C"], "\uE420", "\uDBBA\uDF9F", ["ok_hand"], 13, 21
    ],
    "1f44d": [
        ["\uD83D\uDC4D"], "\uE00E", "\uDBBA\uDF97", ["+1", "thumbsup"], 13, 22
    ],
    "1f44e": [
        ["\uD83D\uDC4E"], "\uE421", "\uDBBA\uDFA0", ["-1", "thumbsdown"], 13, 23
    ],
    "1f44f": [
        ["\uD83D\uDC4F"], "\uE41F", "\uDBBA\uDF9E", ["clap"], 13, 24
    ],
    "1f450": [
        ["\uD83D\uDC50"], "\uE422", "\uDBBA\uDFA1", ["open_hands"], 13, 25
    ],
    "1f451": [
        ["\uD83D\uDC51"], "\uE10E", "\uDBB9\uDCD1", ["crown"], 13, 26
    ],
    "1f452": [
        ["\uD83D\uDC52"], "\uE318", "\uDBB9\uDCD4", ["womans_hat"], 13, 27
    ],
    "1f453": [
        ["\uD83D\uDC53"], "", "\uDBB9\uDCCE", ["eyeglasses"], 13, 28
    ],
    "1f454": [
        ["\uD83D\uDC54"], "\uE302", "\uDBB9\uDCD3", ["necktie"], 13, 29
    ],
    "1f455": [
        ["\uD83D\uDC55"], "\uE006", "\uDBB9\uDCCF", ["shirt", "tshirt"], 14, 0
    ],
    "1f456": [
        ["\uD83D\uDC56"], "", "\uDBB9\uDCD0", ["jeans"], 14, 1
    ],
    "1f457": [
        ["\uD83D\uDC57"], "\uE319", "\uDBB9\uDCD5", ["dress"], 14, 2
    ],
    "1f458": [
        ["\uD83D\uDC58"], "\uE321", "\uDBB9\uDCD9", ["kimono"], 14, 3
    ],
    "1f459": [
        ["\uD83D\uDC59"], "\uE322", "\uDBB9\uDCDA", ["bikini"], 14, 4
    ],
    "1f45a": [
        ["\uD83D\uDC5A"], "\uE006", "\uDBB9\uDCDB", ["womans_clothes"], 14, 5
    ],
    "1f45b": [
        ["\uD83D\uDC5B"], "", "\uDBB9\uDCDC", ["purse"], 14, 6
    ],
    "1f45c": [
        ["\uD83D\uDC5C"], "\uE323", "\uDBB9\uDCF0", ["handbag"], 14, 7
    ],
    "1f45d": [
        ["\uD83D\uDC5D"], "", "\uDBB9\uDCF1", ["pouch"], 14, 8
    ],
    "1f45e": [
        ["\uD83D\uDC5E"], "\uE007", "\uDBB9\uDCCC", ["mans_shoe", "shoe"], 14, 9
    ],
    "1f45f": [
        ["\uD83D\uDC5F"], "\uE007", "\uDBB9\uDCCD", ["athletic_shoe"], 14, 10
    ],
    "1f460": [
        ["\uD83D\uDC60"], "\uE13E", "\uDBB9\uDCD6", ["high_heel"], 14, 11
    ],
    "1f461": [
        ["\uD83D\uDC61"], "\uE31A", "\uDBB9\uDCD7", ["sandal"], 14, 12
    ],
    "1f462": [
        ["\uD83D\uDC62"], "\uE31B", "\uDBB9\uDCD8", ["boot"], 14, 13
    ],
    "1f463": [
        ["\uD83D\uDC63"], "\uE536", "\uDBB9\uDD53", ["footprints"], 14, 14
    ],
    "1f464": [
        ["\uD83D\uDC64"], "", "\uDBB8\uDD9A", ["bust_in_silhouette"], 14, 15
    ],
    "1f465": [
        ["\uD83D\uDC65"], "", "", ["busts_in_silhouette"], 14, 16
    ],
    "1f466": [
        ["\uD83D\uDC66"], "\uE001", "\uDBB8\uDD9B", ["boy"], 14, 17
    ],
    "1f467": [
        ["\uD83D\uDC67"], "\uE002", "\uDBB8\uDD9C", ["girl"], 14, 18
    ],
    "1f468": [
        ["\uD83D\uDC68"], "\uE004", "\uDBB8\uDD9D", ["man"], 14, 19
    ],
    "1f469": [
        ["\uD83D\uDC69"], "\uE005", "\uDBB8\uDD9E", ["woman"], 14, 20
    ],
    "1f46a": [
        ["\uD83D\uDC6A"], "", "\uDBB8\uDD9F", ["family"], 14, 21
    ],
    "1f46b": [
        ["\uD83D\uDC6B"], "\uE428", "\uDBB8\uDDA0", ["couple"], 14, 22
    ],
    "1f46c": [
        ["\uD83D\uDC6C"], "", "", ["two_men_holding_hands"], 14, 23
    ],
    "1f46d": [
        ["\uD83D\uDC6D"], "", "", ["two_women_holding_hands"], 14, 24
    ],
    "1f46e": [
        ["\uD83D\uDC6E"], "\uE152", "\uDBB8\uDDA1", ["cop"], 14, 25
    ],
    "1f46f": [
        ["\uD83D\uDC6F"], "\uE429", "\uDBB8\uDDA2", ["dancers"], 14, 26
    ],
    "1f470": [
        ["\uD83D\uDC70"], "", "\uDBB8\uDDA3", ["bride_with_veil"], 14, 27
    ],
    "1f471": [
        ["\uD83D\uDC71"], "\uE515", "\uDBB8\uDDA4", ["person_with_blond_hair"], 14, 28
    ],
    "1f472": [
        ["\uD83D\uDC72"], "\uE516", "\uDBB8\uDDA5", ["man_with_gua_pi_mao"], 14, 29
    ],
    "1f473": [
        ["\uD83D\uDC73"], "\uE517", "\uDBB8\uDDA6", ["man_with_turban"], 15, 0
    ],
    "1f474": [
        ["\uD83D\uDC74"], "\uE518", "\uDBB8\uDDA7", ["older_man"], 15, 1
    ],
    "1f475": [
        ["\uD83D\uDC75"], "\uE519", "\uDBB8\uDDA8", ["older_woman"], 15, 2
    ],
    "1f476": [
        ["\uD83D\uDC76"], "\uE51A", "\uDBB8\uDDA9", ["baby"], 15, 3
    ],
    "1f477": [
        ["\uD83D\uDC77"], "\uE51B", "\uDBB8\uDDAA", ["construction_worker"], 15, 4
    ],
    "1f478": [
        ["\uD83D\uDC78"], "\uE51C", "\uDBB8\uDDAB", ["princess"], 15, 5
    ],
    "1f479": [
        ["\uD83D\uDC79"], "", "\uDBB8\uDDAC", ["japanese_ogre"], 15, 6
    ],
    "1f47a": [
        ["\uD83D\uDC7A"], "", "\uDBB8\uDDAD", ["japanese_goblin"], 15, 7
    ],
    "1f47b": [
        ["\uD83D\uDC7B"], "\uE11B", "\uDBB8\uDDAE", ["ghost"], 15, 8
    ],
    "1f47c": [
        ["\uD83D\uDC7C"], "\uE04E", "\uDBB8\uDDAF", ["angel"], 15, 9
    ],
    "1f47d": [
        ["\uD83D\uDC7D"], "\uE10C", "\uDBB8\uDDB0", ["alien"], 15, 10
    ],
    "1f47e": [
        ["\uD83D\uDC7E"], "\uE12B", "\uDBB8\uDDB1", ["space_invader"], 15, 11
    ],
    "1f47f": [
        ["\uD83D\uDC7F"], "\uE11A", "\uDBB8\uDDB2", ["imp"], 15, 12
    ],
    "1f480": [
        ["\uD83D\uDC80"], "\uE11C", "\uDBB8\uDDB3", ["skull"], 15, 13
    ],
    "1f481": [
        ["\uD83D\uDC81"], "\uE253", "\uDBB8\uDDB4", ["information_desk_person"], 15, 14
    ],
    "1f482": [
        ["\uD83D\uDC82"], "\uE51E", "\uDBB8\uDDB5", ["guardsman"], 15, 15
    ],
    "1f483": [
        ["\uD83D\uDC83"], "\uE51F", "\uDBB8\uDDB6", ["dancer"], 15, 16
    ],
    "1f484": [
        ["\uD83D\uDC84"], "\uE31C", "\uDBB8\uDD95", ["lipstick"], 15, 17
    ],
    "1f485": [
        ["\uD83D\uDC85"], "\uE31D", "\uDBB8\uDD96", ["nail_care"], 15, 18
    ],
    "1f486": [
        ["\uD83D\uDC86"], "\uE31E", "\uDBB8\uDD97", ["massage"], 15, 19
    ],
    "1f487": [
        ["\uD83D\uDC87"], "\uE31F", "\uDBB8\uDD98", ["haircut"], 15, 20
    ],
    "1f488": [
        ["\uD83D\uDC88"], "\uE320", "\uDBB8\uDD99", ["barber"], 15, 21
    ],
    "1f489": [
        ["\uD83D\uDC89"], "\uE13B", "\uDBB9\uDD09", ["syringe"], 15, 22
    ],
    "1f48a": [
        ["\uD83D\uDC8A"], "\uE30F", "\uDBB9\uDD0A", ["pill"], 15, 23
    ],
    "1f48b": [
        ["\uD83D\uDC8B"], "\uE003", "\uDBBA\uDC23", ["kiss"], 15, 24
    ],
    "1f48c": [
        ["\uD83D\uDC8C"], "\uE103\uE328", "\uDBBA\uDC24", ["love_letter"], 15, 25
    ],
    "1f48d": [
        ["\uD83D\uDC8D"], "\uE034", "\uDBBA\uDC25", ["ring"], 15, 26
    ],
    "1f48e": [
        ["\uD83D\uDC8E"], "\uE035", "\uDBBA\uDC26", ["gem"], 15, 27
    ],
    "1f48f": [
        ["\uD83D\uDC8F"], "\uE111", "\uDBBA\uDC27", ["couplekiss"], 15, 28
    ],
    "1f490": [
        ["\uD83D\uDC90"], "\uE306", "\uDBBA\uDC28", ["bouquet"], 15, 29
    ],
    "1f491": [
        ["\uD83D\uDC91"], "\uE425", "\uDBBA\uDC29", ["couple_with_heart"], 16, 0
    ],
    "1f492": [
        ["\uD83D\uDC92"], "\uE43D", "\uDBBA\uDC2A", ["wedding"], 16, 1
    ],
    "1f493": [
        ["\uD83D\uDC93"], "\uE327", "\uDBBA\uDF0D", ["heartbeat"], 16, 2
    ],
    "1f494": [
        ["\uD83D\uDC94"], "\uE023", "\uDBBA\uDF0E", ["broken_heart"], 16, 3, "<\/3"
    ],
    "1f495": [
        ["\uD83D\uDC95"], "\uE327", "\uDBBA\uDF0F", ["two_hearts"], 16, 4
    ],
    "1f496": [
        ["\uD83D\uDC96"], "\uE327", "\uDBBA\uDF10", ["sparkling_heart"], 16, 5
    ],
    "1f497": [
        ["\uD83D\uDC97"], "\uE328", "\uDBBA\uDF11", ["heartpulse"], 16, 6
    ],
    "1f498": [
        ["\uD83D\uDC98"], "\uE329", "\uDBBA\uDF12", ["cupid"], 16, 7
    ],
    "1f499": [
        ["\uD83D\uDC99"], "\uE32A", "\uDBBA\uDF13", ["blue_heart"], 16, 8, "<3"
    ],
    "1f49a": [
        ["\uD83D\uDC9A"], "\uE32B", "\uDBBA\uDF14", ["green_heart"], 16, 9, "<3"
    ],
    "1f49b": [
        ["\uD83D\uDC9B"], "\uE32C", "\uDBBA\uDF15", ["yellow_heart"], 16, 10, "<3"
    ],
    "1f49c": [
        ["\uD83D\uDC9C"], "\uE32D", "\uDBBA\uDF16", ["purple_heart"], 16, 11, "<3"
    ],
    "1f49d": [
        ["\uD83D\uDC9D"], "\uE437", "\uDBBA\uDF17", ["gift_heart"], 16, 12
    ],
    "1f49e": [
        ["\uD83D\uDC9E"], "\uE327", "\uDBBA\uDF18", ["revolving_hearts"], 16, 13
    ],
    "1f49f": [
        ["\uD83D\uDC9F"], "\uE204", "\uDBBA\uDF19", ["heart_decoration"], 16, 14
    ],
    "1f4a0": [
        ["\uD83D\uDCA0"], "", "\uDBBA\uDF55", ["diamond_shape_with_a_dot_inside"], 16, 15
    ],
    "1f4a1": [
        ["\uD83D\uDCA1"], "\uE10F", "\uDBBA\uDF56", ["bulb"], 16, 16
    ],
    "1f4a2": [
        ["\uD83D\uDCA2"], "\uE334", "\uDBBA\uDF57", ["anger"], 16, 17
    ],
    "1f4a3": [
        ["\uD83D\uDCA3"], "\uE311", "\uDBBA\uDF58", ["bomb"], 16, 18
    ],
    "1f4a4": [
        ["\uD83D\uDCA4"], "\uE13C", "\uDBBA\uDF59", ["zzz"], 16, 19
    ],
    "1f4a5": [
        ["\uD83D\uDCA5"], "", "\uDBBA\uDF5A", ["boom", "collision"], 16, 20
    ],
    "1f4a6": [
        ["\uD83D\uDCA6"], "\uE331", "\uDBBA\uDF5B", ["sweat_drops"], 16, 21
    ],
    "1f4a7": [
        ["\uD83D\uDCA7"], "\uE331", "\uDBBA\uDF5C", ["droplet"], 16, 22
    ],
    "1f4a8": [
        ["\uD83D\uDCA8"], "\uE330", "\uDBBA\uDF5D", ["dash"], 16, 23
    ],
    "1f4a9": [
        ["\uD83D\uDCA9"], "\uE05A", "\uDBB9\uDCF4", ["hankey", "poop", "shit"], 16, 24
    ],
    "1f4aa": [
        ["\uD83D\uDCAA"], "\uE14C", "\uDBBA\uDF5E", ["muscle"], 16, 25
    ],
    "1f4ab": [
        ["\uD83D\uDCAB"], "\uE407", "\uDBBA\uDF5F", ["dizzy"], 16, 26
    ],
    "1f4ac": [
        ["\uD83D\uDCAC"], "", "\uDBB9\uDD32", ["speech_balloon"], 16, 27
    ],
    "1f4ad": [
        ["\uD83D\uDCAD"], "", "", ["thought_balloon"], 16, 28
    ],
    "1f4ae": [
        ["\uD83D\uDCAE"], "", "\uDBBA\uDF7A", ["white_flower"], 16, 29
    ],
    "1f4af": [
        ["\uD83D\uDCAF"], "", "\uDBBA\uDF7B", ["100"], 17, 0
    ],
    "1f4b0": [
        ["\uD83D\uDCB0"], "\uE12F", "\uDBB9\uDCDD", ["moneybag"], 17, 1
    ],
    "1f4b1": [
        ["\uD83D\uDCB1"], "\uE149", "\uDBB9\uDCDE", ["currency_exchange"], 17, 2
    ],
    "1f4b2": [
        ["\uD83D\uDCB2"], "\uE12F", "\uDBB9\uDCE0", ["heavy_dollar_sign"], 17, 3
    ],
    "1f4b3": [
        ["\uD83D\uDCB3"], "", "\uDBB9\uDCE1", ["credit_card"], 17, 4
    ],
    "1f4b4": [
        ["\uD83D\uDCB4"], "", "\uDBB9\uDCE2", ["yen"], 17, 5
    ],
    "1f4b5": [
        ["\uD83D\uDCB5"], "\uE12F", "\uDBB9\uDCE3", ["dollar"], 17, 6
    ],
    "1f4b6": [
        ["\uD83D\uDCB6"], "", "", ["euro"], 17, 7
    ],
    "1f4b7": [
        ["\uD83D\uDCB7"], "", "", ["pound"], 17, 8
    ],
    "1f4b8": [
        ["\uD83D\uDCB8"], "", "\uDBB9\uDCE4", ["money_with_wings"], 17, 9
    ],
    "1f4b9": [
        ["\uD83D\uDCB9"], "\uE14A", "\uDBB9\uDCDF", ["chart"], 17, 10
    ],
    "1f4ba": [
        ["\uD83D\uDCBA"], "\uE11F", "\uDBB9\uDD37", ["seat"], 17, 11
    ],
    "1f4bb": [
        ["\uD83D\uDCBB"], "\uE00C", "\uDBB9\uDD38", ["computer"], 17, 12
    ],
    "1f4bc": [
        ["\uD83D\uDCBC"], "\uE11E", "\uDBB9\uDD3B", ["briefcase"], 17, 13
    ],
    "1f4bd": [
        ["\uD83D\uDCBD"], "\uE316", "\uDBB9\uDD3C", ["minidisc"], 17, 14
    ],
    "1f4be": [
        ["\uD83D\uDCBE"], "\uE316", "\uDBB9\uDD3D", ["floppy_disk"], 17, 15
    ],
    "1f4bf": [
        ["\uD83D\uDCBF"], "\uE126", "\uDBBA\uDC1D", ["cd"], 17, 16
    ],
    "1f4c0": [
        ["\uD83D\uDCC0"], "\uE127", "\uDBBA\uDC1E", ["dvd"], 17, 17
    ],
    "1f4c1": [
        ["\uD83D\uDCC1"], "", "\uDBB9\uDD43", ["file_folder"], 17, 18
    ],
    "1f4c2": [
        ["\uD83D\uDCC2"], "", "\uDBB9\uDD44", ["open_file_folder"], 17, 19
    ],
    "1f4c3": [
        ["\uD83D\uDCC3"], "\uE301", "\uDBB9\uDD40", ["page_with_curl"], 17, 20
    ],
    "1f4c4": [
        ["\uD83D\uDCC4"], "\uE301", "\uDBB9\uDD41", ["page_facing_up"], 17, 21
    ],
    "1f4c5": [
        ["\uD83D\uDCC5"], "", "\uDBB9\uDD42", ["date"], 17, 22
    ],
    "1f4c6": [
        ["\uD83D\uDCC6"], "", "\uDBB9\uDD49", ["calendar"], 17, 23
    ],
    "1f4c7": [
        ["\uD83D\uDCC7"], "\uE148", "\uDBB9\uDD4D", ["card_index"], 17, 24
    ],
    "1f4c8": [
        ["\uD83D\uDCC8"], "\uE14A", "\uDBB9\uDD4B", ["chart_with_upwards_trend"], 17, 25
    ],
    "1f4c9": [
        ["\uD83D\uDCC9"], "", "\uDBB9\uDD4C", ["chart_with_downwards_trend"], 17, 26
    ],
    "1f4ca": [
        ["\uD83D\uDCCA"], "\uE14A", "\uDBB9\uDD4A", ["bar_chart"], 17, 27
    ],
    "1f4cb": [
        ["\uD83D\uDCCB"], "\uE301", "\uDBB9\uDD48", ["clipboard"], 17, 28
    ],
    "1f4cc": [
        ["\uD83D\uDCCC"], "", "\uDBB9\uDD4E", ["pushpin"], 17, 29
    ],
    "1f4cd": [
        ["\uD83D\uDCCD"], "", "\uDBB9\uDD3F", ["round_pushpin"], 18, 0
    ],
    "1f4ce": [
        ["\uD83D\uDCCE"], "", "\uDBB9\uDD3A", ["paperclip"], 18, 1
    ],
    "1f4cf": [
        ["\uD83D\uDCCF"], "", "\uDBB9\uDD50", ["straight_ruler"], 18, 2
    ],
    "1f4d0": [
        ["\uD83D\uDCD0"], "", "\uDBB9\uDD51", ["triangular_ruler"], 18, 3
    ],
    "1f4d1": [
        ["\uD83D\uDCD1"], "\uE301", "\uDBB9\uDD52", ["bookmark_tabs"], 18, 4
    ],
    "1f4d2": [
        ["\uD83D\uDCD2"], "\uE148", "\uDBB9\uDD4F", ["ledger"], 18, 5
    ],
    "1f4d3": [
        ["\uD83D\uDCD3"], "\uE148", "\uDBB9\uDD45", ["notebook"], 18, 6
    ],
    "1f4d4": [
        ["\uD83D\uDCD4"], "\uE148", "\uDBB9\uDD47", ["notebook_with_decorative_cover"], 18, 7
    ],
    "1f4d5": [
        ["\uD83D\uDCD5"], "\uE148", "\uDBB9\uDD02", ["closed_book"], 18, 8
    ],
    "1f4d6": [
        ["\uD83D\uDCD6"], "\uE148", "\uDBB9\uDD46", ["book", "open_book"], 18, 9
    ],
    "1f4d7": [
        ["\uD83D\uDCD7"], "\uE148", "\uDBB9\uDCFF", ["green_book"], 18, 10
    ],
    "1f4d8": [
        ["\uD83D\uDCD8"], "\uE148", "\uDBB9\uDD00", ["blue_book"], 18, 11
    ],
    "1f4d9": [
        ["\uD83D\uDCD9"], "\uE148", "\uDBB9\uDD01", ["orange_book"], 18, 12
    ],
    "1f4da": [
        ["\uD83D\uDCDA"], "\uE148", "\uDBB9\uDD03", ["books"], 18, 13
    ],
    "1f4db": [
        ["\uD83D\uDCDB"], "", "\uDBB9\uDD04", ["name_badge"], 18, 14
    ],
    "1f4dc": [
        ["\uD83D\uDCDC"], "", "\uDBB9\uDCFD", ["scroll"], 18, 15
    ],
    "1f4dd": [
        ["\uD83D\uDCDD"], "\uE301", "\uDBB9\uDD27", ["memo", "pencil"], 18, 16
    ],
    "1f4de": [
        ["\uD83D\uDCDE"], "\uE009", "\uDBB9\uDD24", ["telephone_receiver"], 18, 17
    ],
    "1f4df": [
        ["\uD83D\uDCDF"], "", "\uDBB9\uDD22", ["pager"], 18, 18
    ],
    "1f4e0": [
        ["\uD83D\uDCE0"], "\uE00B", "\uDBB9\uDD28", ["fax"], 18, 19
    ],
    "1f4e1": [
        ["\uD83D\uDCE1"], "\uE14B", "\uDBB9\uDD31", ["satellite"], 18, 20
    ],
    "1f4e2": [
        ["\uD83D\uDCE2"], "\uE142", "\uDBB9\uDD2F", ["loudspeaker"], 18, 21
    ],
    "1f4e3": [
        ["\uD83D\uDCE3"], "\uE317", "\uDBB9\uDD30", ["mega"], 18, 22
    ],
    "1f4e4": [
        ["\uD83D\uDCE4"], "", "\uDBB9\uDD33", ["outbox_tray"], 18, 23
    ],
    "1f4e5": [
        ["\uD83D\uDCE5"], "", "\uDBB9\uDD34", ["inbox_tray"], 18, 24
    ],
    "1f4e6": [
        ["\uD83D\uDCE6"], "\uE112", "\uDBB9\uDD35", ["package"], 18, 25
    ],
    "1f4e7": [
        ["\uD83D\uDCE7"], "\uE103", "\uDBBA\uDF92", ["e-mail"], 18, 26
    ],
    "1f4e8": [
        ["\uD83D\uDCE8"], "\uE103", "\uDBB9\uDD2A", ["incoming_envelope"], 18, 27
    ],
    "1f4e9": [
        ["\uD83D\uDCE9"], "\uE103", "\uDBB9\uDD2B", ["envelope_with_arrow"], 18, 28
    ],
    "1f4ea": [
        ["\uD83D\uDCEA"], "\uE101", "\uDBB9\uDD2C", ["mailbox_closed"], 18, 29
    ],
    "1f4eb": [
        ["\uD83D\uDCEB"], "\uE101", "\uDBB9\uDD2D", ["mailbox"], 19, 0
    ],
    "1f4ec": [
        ["\uD83D\uDCEC"], "", "", ["mailbox_with_mail"], 19, 1
    ],
    "1f4ed": [
        ["\uD83D\uDCED"], "", "", ["mailbox_with_no_mail"], 19, 2
    ],
    "1f4ee": [
        ["\uD83D\uDCEE"], "\uE102", "\uDBB9\uDD2E", ["postbox"], 19, 3
    ],
    "1f4ef": [
        ["\uD83D\uDCEF"], "", "", ["postal_horn"], 19, 4
    ],
    "1f4f0": [
        ["\uD83D\uDCF0"], "", "\uDBBA\uDC22", ["newspaper"], 19, 5
    ],
    "1f4f1": [
        ["\uD83D\uDCF1"], "\uE00A", "\uDBB9\uDD25", ["iphone"], 19, 6
    ],
    "1f4f2": [
        ["\uD83D\uDCF2"], "\uE104", "\uDBB9\uDD26", ["calling"], 19, 7
    ],
    "1f4f3": [
        ["\uD83D\uDCF3"], "\uE250", "\uDBBA\uDC39", ["vibration_mode"], 19, 8
    ],
    "1f4f4": [
        ["\uD83D\uDCF4"], "\uE251", "\uDBBA\uDC3A", ["mobile_phone_off"], 19, 9
    ],
    "1f4f5": [
        ["\uD83D\uDCF5"], "", "", ["no_mobile_phones"], 19, 10
    ],
    "1f4f6": [
        ["\uD83D\uDCF6"], "\uE20B", "\uDBBA\uDC38", ["signal_strength"], 19, 11
    ],
    "1f4f7": [
        ["\uD83D\uDCF7"], "\uE008", "\uDBB9\uDCEF", ["camera"], 19, 12
    ],
    "1f4f9": [
        ["\uD83D\uDCF9"], "\uE03D", "\uDBB9\uDCF9", ["video_camera"], 19, 13
    ],
    "1f4fa": [
        ["\uD83D\uDCFA"], "\uE12A", "\uDBBA\uDC1C", ["tv"], 19, 14
    ],
    "1f4fb": [
        ["\uD83D\uDCFB"], "\uE128", "\uDBBA\uDC1F", ["radio"], 19, 15
    ],
    "1f4fc": [
        ["\uD83D\uDCFC"], "\uE129", "\uDBBA\uDC20", ["vhs"], 19, 16
    ],
    "1f500": [
        ["\uD83D\uDD00"], "", "", ["twisted_rightwards_arrows"], 19, 17
    ],
    "1f501": [
        ["\uD83D\uDD01"], "", "", ["repeat"], 19, 18
    ],
    "1f502": [
        ["\uD83D\uDD02"], "", "", ["repeat_one"], 19, 19
    ],
    "1f503": [
        ["\uD83D\uDD03"], "", "\uDBBA\uDF91", ["arrows_clockwise"], 19, 20
    ],
    "1f504": [
        ["\uD83D\uDD04"], "", "", ["arrows_counterclockwise"], 19, 21
    ],
    "1f505": [
        ["\uD83D\uDD05"], "", "", ["low_brightness"], 19, 22
    ],
    "1f506": [
        ["\uD83D\uDD06"], "", "", ["high_brightness"], 19, 23
    ],
    "1f507": [
        ["\uD83D\uDD07"], "", "", ["mute"], 19, 24
    ],
    "1f508": [
        ["\uD83D\uDD08"], "", "", ["speaker"], 19, 25
    ],
    "1f509": [
        ["\uD83D\uDD09"], "", "", ["sound"], 19, 26
    ],
    "1f50a": [
        ["\uD83D\uDD0A"], "\uE141", "\uDBBA\uDC21", ["loud_sound"], 19, 27
    ],
    "1f50b": [
        ["\uD83D\uDD0B"], "", "\uDBB9\uDCFC", ["battery"], 19, 28
    ],
    "1f50c": [
        ["\uD83D\uDD0C"], "", "\uDBB9\uDCFE", ["electric_plug"], 19, 29
    ],
    "1f50d": [
        ["\uD83D\uDD0D"], "\uE114", "\uDBBA\uDF85", ["mag"], 20, 0
    ],
    "1f50e": [
        ["\uD83D\uDD0E"], "\uE114", "\uDBBA\uDF8D", ["mag_right"], 20, 1
    ],
    "1f50f": [
        ["\uD83D\uDD0F"], "\uE144", "\uDBBA\uDF90", ["lock_with_ink_pen"], 20, 2
    ],
    "1f510": [
        ["\uD83D\uDD10"], "\uE144", "\uDBBA\uDF8A", ["closed_lock_with_key"], 20, 3
    ],
    "1f511": [
        ["\uD83D\uDD11"], "\uE03F", "\uDBBA\uDF82", ["key"], 20, 4
    ],
    "1f512": [
        ["\uD83D\uDD12"], "\uE144", "\uDBBA\uDF86", ["lock"], 20, 5
    ],
    "1f513": [
        ["\uD83D\uDD13"], "\uE145", "\uDBBA\uDF87", ["unlock"], 20, 6
    ],
    "1f514": [
        ["\uD83D\uDD14"], "\uE325", "\uDBB9\uDCF2", ["bell"], 20, 7
    ],
    "1f515": [
        ["\uD83D\uDD15"], "", "", ["no_bell"], 20, 8
    ],
    "1f516": [
        ["\uD83D\uDD16"], "", "\uDBBA\uDF8F", ["bookmark"], 20, 9
    ],
    "1f517": [
        ["\uD83D\uDD17"], "", "\uDBBA\uDF4B", ["link"], 20, 10
    ],
    "1f518": [
        ["\uD83D\uDD18"], "", "\uDBBA\uDF8C", ["radio_button"], 20, 11
    ],
    "1f519": [
        ["\uD83D\uDD19"], "\uE235", "\uDBBA\uDF8E", ["back"], 20, 12
    ],
    "1f51a": [
        ["\uD83D\uDD1A"], "", "\uDBB8\uDC1A", ["end"], 20, 13
    ],
    "1f51b": [
        ["\uD83D\uDD1B"], "", "\uDBB8\uDC19", ["on"], 20, 14
    ],
    "1f51c": [
        ["\uD83D\uDD1C"], "", "\uDBB8\uDC18", ["soon"], 20, 15
    ],
    "1f51d": [
        ["\uD83D\uDD1D"], "\uE24C", "\uDBBA\uDF42", ["top"], 20, 16
    ],
    "1f51e": [
        ["\uD83D\uDD1E"], "\uE207", "\uDBBA\uDF25", ["underage"], 20, 17
    ],
    "1f51f": [
        ["\uD83D\uDD1F"], "", "\uDBBA\uDC3B", ["keycap_ten"], 20, 18
    ],
    "1f520": [
        ["\uD83D\uDD20"], "", "\uDBBA\uDF7C", ["capital_abcd"], 20, 19
    ],
    "1f521": [
        ["\uD83D\uDD21"], "", "\uDBBA\uDF7D", ["abcd"], 20, 20
    ],
    "1f522": [
        ["\uD83D\uDD22"], "", "\uDBBA\uDF7E", ["1234"], 20, 21
    ],
    "1f523": [
        ["\uD83D\uDD23"], "", "\uDBBA\uDF7F", ["symbols"], 20, 22
    ],
    "1f524": [
        ["\uD83D\uDD24"], "", "\uDBBA\uDF80", ["abc"], 20, 23
    ],
    "1f525": [
        ["\uD83D\uDD25"], "\uE11D", "\uDBB9\uDCF6", ["fire"], 20, 24
    ],
    "1f526": [
        ["\uD83D\uDD26"], "", "\uDBB9\uDCFB", ["flashlight"], 20, 25
    ],
    "1f527": [
        ["\uD83D\uDD27"], "", "\uDBB9\uDCC9", ["wrench"], 20, 26
    ],
    "1f528": [
        ["\uD83D\uDD28"], "\uE116", "\uDBB9\uDCCA", ["hammer"], 20, 27
    ],
    "1f529": [
        ["\uD83D\uDD29"], "", "\uDBB9\uDCCB", ["nut_and_bolt"], 20, 28
    ],
    "1f52a": [
        ["\uD83D\uDD2A"], "", "\uDBB9\uDCFA", ["hocho", "knife"], 20, 29
    ],
    "1f52b": [
        ["\uD83D\uDD2B"], "\uE113", "\uDBB9\uDCF5", ["gun"], 21, 0
    ],
    "1f52c": [
        ["\uD83D\uDD2C"], "", "", ["microscope"], 21, 1
    ],
    "1f52d": [
        ["\uD83D\uDD2D"], "", "", ["telescope"], 21, 2
    ],
    "1f52e": [
        ["\uD83D\uDD2E"], "\uE23E", "\uDBB9\uDCF7", ["crystal_ball"], 21, 3
    ],
    "1f52f": [
        ["\uD83D\uDD2F"], "\uE23E", "\uDBB9\uDCF8", ["six_pointed_star"], 21, 4
    ],
    "1f530": [
        ["\uD83D\uDD30"], "\uE209", "\uDBB8\uDC44", ["beginner"], 21, 5
    ],
    "1f531": [
        ["\uD83D\uDD31"], "\uE031", "\uDBB9\uDCD2", ["trident"], 21, 6
    ],
    "1f532": [
        ["\uD83D\uDD32"], "\uE21A", "\uDBBA\uDF64", ["black_square_button"], 21, 7
    ],
    "1f533": [
        ["\uD83D\uDD33"], "\uE21B", "\uDBBA\uDF67", ["white_square_button"], 21, 8
    ],
    "1f534": [
        ["\uD83D\uDD34"], "\uE219", "\uDBBA\uDF63", ["red_circle"], 21, 9
    ],
    "1f535": [
        ["\uD83D\uDD35"], "\uE21A", "\uDBBA\uDF64", ["large_blue_circle"], 21, 10
    ],
    "1f536": [
        ["\uD83D\uDD36"], "\uE21B", "\uDBBA\uDF73", ["large_orange_diamond"], 21, 11
    ],
    "1f537": [
        ["\uD83D\uDD37"], "\uE21B", "\uDBBA\uDF74", ["large_blue_diamond"], 21, 12
    ],
    "1f538": [
        ["\uD83D\uDD38"], "\uE21B", "\uDBBA\uDF75", ["small_orange_diamond"], 21, 13
    ],
    "1f539": [
        ["\uD83D\uDD39"], "\uE21B", "\uDBBA\uDF76", ["small_blue_diamond"], 21, 14
    ],
    "1f53a": [
        ["\uD83D\uDD3A"], "", "\uDBBA\uDF78", ["small_red_triangle"], 21, 15
    ],
    "1f53b": [
        ["\uD83D\uDD3B"], "", "\uDBBA\uDF79", ["small_red_triangle_down"], 21, 16
    ],
    "1f53c": [
        ["\uD83D\uDD3C"], "", "\uDBBA\uDF01", ["arrow_up_small"], 21, 17
    ],
    "1f53d": [
        ["\uD83D\uDD3D"], "", "\uDBBA\uDF00", ["arrow_down_small"], 21, 18
    ],
    "1f550": [
        ["\uD83D\uDD50"], "\uE024", "\uDBB8\uDC1E", ["clock1"], 21, 19
    ],
    "1f551": [
        ["\uD83D\uDD51"], "\uE025", "\uDBB8\uDC1F", ["clock2"], 21, 20
    ],
    "1f552": [
        ["\uD83D\uDD52"], "\uE026", "\uDBB8\uDC20", ["clock3"], 21, 21
    ],
    "1f553": [
        ["\uD83D\uDD53"], "\uE027", "\uDBB8\uDC21", ["clock4"], 21, 22
    ],
    "1f554": [
        ["\uD83D\uDD54"], "\uE028", "\uDBB8\uDC22", ["clock5"], 21, 23
    ],
    "1f555": [
        ["\uD83D\uDD55"], "\uE029", "\uDBB8\uDC23", ["clock6"], 21, 24
    ],
    "1f556": [
        ["\uD83D\uDD56"], "\uE02A", "\uDBB8\uDC24", ["clock7"], 21, 25
    ],
    "1f557": [
        ["\uD83D\uDD57"], "\uE02B", "\uDBB8\uDC25", ["clock8"], 21, 26
    ],
    "1f558": [
        ["\uD83D\uDD58"], "\uE02C", "\uDBB8\uDC26", ["clock9"], 21, 27
    ],
    "1f559": [
        ["\uD83D\uDD59"], "\uE02D", "\uDBB8\uDC27", ["clock10"], 21, 28
    ],
    "1f55a": [
        ["\uD83D\uDD5A"], "\uE02E", "\uDBB8\uDC28", ["clock11"], 21, 29
    ],
    "1f55b": [
        ["\uD83D\uDD5B"], "\uE02F", "\uDBB8\uDC29", ["clock12"], 22, 0
    ],
    "1f55c": [
        ["\uD83D\uDD5C"], "", "", ["clock130"], 22, 1
    ],
    "1f55d": [
        ["\uD83D\uDD5D"], "", "", ["clock230"], 22, 2
    ],
    "1f55e": [
        ["\uD83D\uDD5E"], "", "", ["clock330"], 22, 3
    ],
    "1f55f": [
        ["\uD83D\uDD5F"], "", "", ["clock430"], 22, 4
    ],
    "1f560": [
        ["\uD83D\uDD60"], "", "", ["clock530"], 22, 5
    ],
    "1f561": [
        ["\uD83D\uDD61"], "", "", ["clock630"], 22, 6
    ],
    "1f562": [
        ["\uD83D\uDD62"], "", "", ["clock730"], 22, 7
    ],
    "1f563": [
        ["\uD83D\uDD63"], "", "", ["clock830"], 22, 8
    ],
    "1f564": [
        ["\uD83D\uDD64"], "", "", ["clock930"], 22, 9
    ],
    "1f565": [
        ["\uD83D\uDD65"], "", "", ["clock1030"], 22, 10
    ],
    "1f566": [
        ["\uD83D\uDD66"], "", "", ["clock1130"], 22, 11
    ],
    "1f567": [
        ["\uD83D\uDD67"], "", "", ["clock1230"], 22, 12
    ],
    "1f5fb": [
        ["\uD83D\uDDFB"], "\uE03B", "\uDBB9\uDCC3", ["mount_fuji"], 22, 13
    ],
    "1f5fc": [
        ["\uD83D\uDDFC"], "\uE509", "\uDBB9\uDCC4", ["tokyo_tower"], 22, 14
    ],
    "1f5fd": [
        ["\uD83D\uDDFD"], "\uE51D", "\uDBB9\uDCC6", ["statue_of_liberty"], 22, 15
    ],
    "1f5fe": [
        ["\uD83D\uDDFE"], "", "\uDBB9\uDCC7", ["japan"], 22, 16
    ],
    "1f5ff": [
        ["\uD83D\uDDFF"], "", "\uDBB9\uDCC8", ["moyai"], 22, 17
    ],
    "1f600": [
        ["\uD83D\uDE00"], "", "", ["grinning"], 22, 18, ":D"
    ],
    "1f601": [
        ["\uD83D\uDE01"], "\uE404", "\uDBB8\uDF33", ["grin"], 22, 19
    ],
    "1f602": [
        ["\uD83D\uDE02"], "\uE412", "\uDBB8\uDF34", ["joy"], 22, 20
    ],
    "1f603": [
        ["\uD83D\uDE03"], "\uE057", "\uDBB8\uDF30", ["smiley"], 22, 21, ":)"
    ],
    "1f604": [
        ["\uD83D\uDE04"], "\uE415", "\uDBB8\uDF38", ["smile"], 22, 22, ":)"
    ],
    "1f605": [
        ["\uD83D\uDE05"], "\uE415\uE331", "\uDBB8\uDF31", ["sweat_smile"], 22, 23
    ],
    "1f606": [
        ["\uD83D\uDE06"], "\uE40A", "\uDBB8\uDF32", ["satisfied"], 22, 24
    ],
    "1f607": [
        ["\uD83D\uDE07"], "", "", ["innocent"], 22, 25
    ],
    "1f608": [
        ["\uD83D\uDE08"], "", "", ["smiling_imp"], 22, 26
    ],
    "1f609": [
        ["\uD83D\uDE09"], "\uE405", "\uDBB8\uDF47", ["wink"], 22, 27, ";)"
    ],
    "1f60a": [
        ["\uD83D\uDE0A"], "\uE056", "\uDBB8\uDF35", ["blush"], 22, 28
    ],
    "1f60b": [
        ["\uD83D\uDE0B"], "\uE056", "\uDBB8\uDF2B", ["yum"], 22, 29
    ],
    "1f60c": [
        ["\uD83D\uDE0C"], "\uE40A", "\uDBB8\uDF3E", ["relieved"], 23, 0
    ],
    "1f60d": [
        ["\uD83D\uDE0D"], "\uE106", "\uDBB8\uDF27", ["heart_eyes"], 23, 1
    ],
    "1f60e": [
        ["\uD83D\uDE0E"], "", "", ["sunglasses"], 23, 2
    ],
    "1f60f": [
        ["\uD83D\uDE0F"], "\uE402", "\uDBB8\uDF43", ["smirk"], 23, 3
    ],
    "1f610": [
        ["\uD83D\uDE10"], "", "", ["neutral_face"], 23, 4
    ],
    "1f611": [
        ["\uD83D\uDE11"], "", "", ["expressionless"], 23, 5
    ],
    "1f612": [
        ["\uD83D\uDE12"], "\uE40E", "\uDBB8\uDF26", ["unamused"], 23, 6
    ],
    "1f613": [
        ["\uD83D\uDE13"], "\uE108", "\uDBB8\uDF44", ["sweat"], 23, 7
    ],
    "1f614": [
        ["\uD83D\uDE14"], "\uE403", "\uDBB8\uDF40", ["pensive"], 23, 8
    ],
    "1f615": [
        ["\uD83D\uDE15"], "", "", ["confused"], 23, 9
    ],
    "1f616": [
        ["\uD83D\uDE16"], "\uE407", "\uDBB8\uDF3F", ["confounded"], 23, 10
    ],
    "1f617": [
        ["\uD83D\uDE17"], "", "", ["kissing"], 23, 11
    ],
    "1f618": [
        ["\uD83D\uDE18"], "\uE418", "\uDBB8\uDF2C", ["kissing_heart"], 23, 12
    ],
    "1f619": [
        ["\uD83D\uDE19"], "", "", ["kissing_smiling_eyes"], 23, 13
    ],
    "1f61a": [
        ["\uD83D\uDE1A"], "\uE417", "\uDBB8\uDF2D", ["kissing_closed_eyes"], 23, 14
    ],
    "1f61b": [
        ["\uD83D\uDE1B"], "", "", ["stuck_out_tongue"], 23, 15, ":p"
    ],
    "1f61c": [
        ["\uD83D\uDE1C"], "\uE105", "\uDBB8\uDF29", ["stuck_out_tongue_winking_eye"], 23, 16, ";p"
    ],
    "1f61d": [
        ["\uD83D\uDE1D"], "\uE409", "\uDBB8\uDF2A", ["stuck_out_tongue_closed_eyes"], 23, 17
    ],
    "1f61e": [
        ["\uD83D\uDE1E"], "\uE058", "\uDBB8\uDF23", ["disappointed"], 23, 18, ":("
    ],
    "1f61f": [
        ["\uD83D\uDE1F"], "", "", ["worried"], 23, 19
    ],
    "1f620": [
        ["\uD83D\uDE20"], "\uE059", "\uDBB8\uDF20", ["angry"], 23, 20
    ],
    "1f621": [
        ["\uD83D\uDE21"], "\uE416", "\uDBB8\uDF3D", ["rage"], 23, 21
    ],
    "1f622": [
        ["\uD83D\uDE22"], "\uE413", "\uDBB8\uDF39", ["cry"], 23, 22, ":'("
    ],
    "1f623": [
        ["\uD83D\uDE23"], "\uE406", "\uDBB8\uDF3C", ["persevere"], 23, 23
    ],
    "1f624": [
        ["\uD83D\uDE24"], "\uE404", "\uDBB8\uDF28", ["triumph"], 23, 24
    ],
    "1f625": [
        ["\uD83D\uDE25"], "\uE401", "\uDBB8\uDF45", ["disappointed_relieved"], 23, 25
    ],
    "1f626": [
        ["\uD83D\uDE26"], "", "", ["frowning"], 23, 26
    ],
    "1f627": [
        ["\uD83D\uDE27"], "", "", ["anguished"], 23, 27
    ],
    "1f628": [
        ["\uD83D\uDE28"], "\uE40B", "\uDBB8\uDF3B", ["fearful"], 23, 28
    ],
    "1f629": [
        ["\uD83D\uDE29"], "\uE403", "\uDBB8\uDF21", ["weary"], 23, 29
    ],
    "1f62a": [
        ["\uD83D\uDE2A"], "\uE408", "\uDBB8\uDF42", ["sleepy"], 24, 0
    ],
    "1f62b": [
        ["\uD83D\uDE2B"], "\uE406", "\uDBB8\uDF46", ["tired_face"], 24, 1
    ],
    "1f62c": [
        ["\uD83D\uDE2C"], "", "", ["grimacing"], 24, 2
    ],
    "1f62d": [
        ["\uD83D\uDE2D"], "\uE411", "\uDBB8\uDF3A", ["sob"], 24, 3, ":'("
    ],
    "1f62e": [
        ["\uD83D\uDE2E"], "", "", ["open_mouth"], 24, 4
    ],
    "1f62f": [
        ["\uD83D\uDE2F"], "", "", ["hushed"], 24, 5
    ],
    "1f630": [
        ["\uD83D\uDE30"], "\uE40F", "\uDBB8\uDF25", ["cold_sweat"], 24, 6
    ],
    "1f631": [
        ["\uD83D\uDE31"], "\uE107", "\uDBB8\uDF41", ["scream"], 24, 7
    ],
    "1f632": [
        ["\uD83D\uDE32"], "\uE410", "\uDBB8\uDF22", ["astonished"], 24, 8
    ],
    "1f633": [
        ["\uD83D\uDE33"], "\uE40D", "\uDBB8\uDF2F", ["flushed"], 24, 9
    ],
    "1f634": [
        ["\uD83D\uDE34"], "", "", ["sleeping"], 24, 10
    ],
    "1f635": [
        ["\uD83D\uDE35"], "\uE406", "\uDBB8\uDF24", ["dizzy_face"], 24, 11
    ],
    "1f636": [
        ["\uD83D\uDE36"], "", "", ["no_mouth"], 24, 12
    ],
    "1f637": [
        ["\uD83D\uDE37"], "\uE40C", "\uDBB8\uDF2E", ["mask"], 24, 13
    ],
    "1f638": [
        ["\uD83D\uDE38"], "\uE404", "\uDBB8\uDF49", ["smile_cat"], 24, 14
    ],
    "1f639": [
        ["\uD83D\uDE39"], "\uE412", "\uDBB8\uDF4A", ["joy_cat"], 24, 15
    ],
    "1f63a": [
        ["\uD83D\uDE3A"], "\uE057", "\uDBB8\uDF48", ["smiley_cat"], 24, 16
    ],
    "1f63b": [
        ["\uD83D\uDE3B"], "\uE106", "\uDBB8\uDF4C", ["heart_eyes_cat"], 24, 17
    ],
    "1f63c": [
        ["\uD83D\uDE3C"], "\uE404", "\uDBB8\uDF4F", ["smirk_cat"], 24, 18
    ],
    "1f63d": [
        ["\uD83D\uDE3D"], "\uE418", "\uDBB8\uDF4B", ["kissing_cat"], 24, 19
    ],
    "1f63e": [
        ["\uD83D\uDE3E"], "\uE416", "\uDBB8\uDF4E", ["pouting_cat"], 24, 20
    ],
    "1f63f": [
        ["\uD83D\uDE3F"], "\uE413", "\uDBB8\uDF4D", ["crying_cat_face"], 24, 21
    ],
    "1f640": [
        ["\uD83D\uDE40"], "\uE403", "\uDBB8\uDF50", ["scream_cat"], 24, 22
    ],
    "1f645": [
        ["\uD83D\uDE45"], "\uE423", "\uDBB8\uDF51", ["no_good"], 24, 23
    ],
    "1f646": [
        ["\uD83D\uDE46"], "\uE424", "\uDBB8\uDF52", ["ok_woman"], 24, 24
    ],
    "1f647": [
        ["\uD83D\uDE47"], "\uE426", "\uDBB8\uDF53", ["bow"], 24, 25
    ],
    "1f648": [
        ["\uD83D\uDE48"], "", "\uDBB8\uDF54", ["see_no_evil"], 24, 26
    ],
    "1f649": [
        ["\uD83D\uDE49"], "", "\uDBB8\uDF56", ["hear_no_evil"], 24, 27
    ],
    "1f64a": [
        ["\uD83D\uDE4A"], "", "\uDBB8\uDF55", ["speak_no_evil"], 24, 28
    ],
    "1f64b": [
        ["\uD83D\uDE4B"], "\uE012", "\uDBB8\uDF57", ["raising_hand"], 24, 29
    ],
    "1f64c": [
        ["\uD83D\uDE4C"], "\uE427", "\uDBB8\uDF58", ["raised_hands"], 25, 0
    ],
    "1f64d": [
        ["\uD83D\uDE4D"], "\uE403", "\uDBB8\uDF59", ["person_frowning"], 25, 1
    ],
    "1f64e": [
        ["\uD83D\uDE4E"], "\uE416", "\uDBB8\uDF5A", ["person_with_pouting_face"], 25, 2
    ],
    "1f64f": [
        ["\uD83D\uDE4F"], "\uE41D", "\uDBB8\uDF5B", ["pray"], 25, 3
    ],
    "1f680": [
        ["\uD83D\uDE80"], "\uE10D", "\uDBB9\uDFED", ["rocket"], 25, 4
    ],
    "1f681": [
        ["\uD83D\uDE81"], "", "", ["helicopter"], 25, 5
    ],
    "1f682": [
        ["\uD83D\uDE82"], "", "", ["steam_locomotive"], 25, 6
    ],
    "1f683": [
        ["\uD83D\uDE83"], "\uE01E", "\uDBB9\uDFDF", ["railway_car"], 25, 7
    ],
    "1f684": [
        ["\uD83D\uDE84"], "\uE435", "\uDBB9\uDFE2", ["bullettrain_side"], 25, 8
    ],
    "1f685": [
        ["\uD83D\uDE85"], "\uE01F", "\uDBB9\uDFE3", ["bullettrain_front"], 25, 9
    ],
    "1f686": [
        ["\uD83D\uDE86"], "", "", ["train2"], 25, 10
    ],
    "1f687": [
        ["\uD83D\uDE87"], "\uE434", "\uDBB9\uDFE0", ["metro"], 25, 11
    ],
    "1f688": [
        ["\uD83D\uDE88"], "", "", ["light_rail"], 25, 12
    ],
    "1f689": [
        ["\uD83D\uDE89"], "\uE039", "\uDBB9\uDFEC", ["station"], 25, 13
    ],
    "1f68a": [
        ["\uD83D\uDE8A"], "", "", ["tram"], 25, 14
    ],
    "1f68b": [
        ["\uD83D\uDE8B"], "", "", ["train"], 25, 15
    ],
    "1f68c": [
        ["\uD83D\uDE8C"], "\uE159", "\uDBB9\uDFE6", ["bus"], 25, 16
    ],
    "1f68d": [
        ["\uD83D\uDE8D"], "", "", ["oncoming_bus"], 25, 17
    ],
    "1f68e": [
        ["\uD83D\uDE8E"], "", "", ["trolleybus"], 25, 18
    ],
    "1f68f": [
        ["\uD83D\uDE8F"], "\uE150", "\uDBB9\uDFE7", ["busstop"], 25, 19
    ],
    "1f690": [
        ["\uD83D\uDE90"], "", "", ["minibus"], 25, 20
    ],
    "1f691": [
        ["\uD83D\uDE91"], "\uE431", "\uDBB9\uDFF3", ["ambulance"], 25, 21
    ],
    "1f692": [
        ["\uD83D\uDE92"], "\uE430", "\uDBB9\uDFF2", ["fire_engine"], 25, 22
    ],
    "1f693": [
        ["\uD83D\uDE93"], "\uE432", "\uDBB9\uDFF4", ["police_car"], 25, 23
    ],
    "1f694": [
        ["\uD83D\uDE94"], "", "", ["oncoming_police_car"], 25, 24
    ],
    "1f695": [
        ["\uD83D\uDE95"], "\uE15A", "\uDBB9\uDFEF", ["taxi"], 25, 25
    ],
    "1f696": [
        ["\uD83D\uDE96"], "", "", ["oncoming_taxi"], 25, 26
    ],
    "1f697": [
        ["\uD83D\uDE97"], "\uE01B", "\uDBB9\uDFE4", ["car", "red_car"], 25, 27
    ],
    "1f698": [
        ["\uD83D\uDE98"], "", "", ["oncoming_automobile"], 25, 28
    ],
    "1f699": [
        ["\uD83D\uDE99"], "\uE42E", "\uDBB9\uDFE5", ["blue_car"], 25, 29
    ],
    "1f69a": [
        ["\uD83D\uDE9A"], "\uE42F", "\uDBB9\uDFF1", ["truck"], 26, 0
    ],
    "1f69b": [
        ["\uD83D\uDE9B"], "", "", ["articulated_lorry"], 26, 1
    ],
    "1f69c": [
        ["\uD83D\uDE9C"], "", "", ["tractor"], 26, 2
    ],
    "1f69d": [
        ["\uD83D\uDE9D"], "", "", ["monorail"], 26, 3
    ],
    "1f69e": [
        ["\uD83D\uDE9E"], "", "", ["mountain_railway"], 26, 4
    ],
    "1f69f": [
        ["\uD83D\uDE9F"], "", "", ["suspension_railway"], 26, 5
    ],
    "1f6a0": [
        ["\uD83D\uDEA0"], "", "", ["mountain_cableway"], 26, 6
    ],
    "1f6a1": [
        ["\uD83D\uDEA1"], "", "", ["aerial_tramway"], 26, 7
    ],
    "1f6a2": [
        ["\uD83D\uDEA2"], "\uE202", "\uDBB9\uDFE8", ["ship"], 26, 8
    ],
    "1f6a3": [
        ["\uD83D\uDEA3"], "", "", ["rowboat"], 26, 9
    ],
    "1f6a4": [
        ["\uD83D\uDEA4"], "\uE135", "\uDBB9\uDFEE", ["speedboat"], 26, 10
    ],
    "1f6a5": [
        ["\uD83D\uDEA5"], "\uE14E", "\uDBB9\uDFF7", ["traffic_light"], 26, 11
    ],
    "1f6a6": [
        ["\uD83D\uDEA6"], "", "", ["vertical_traffic_light"], 26, 12
    ],
    "1f6a7": [
        ["\uD83D\uDEA7"], "\uE137", "\uDBB9\uDFF8", ["construction"], 26, 13
    ],
    "1f6a8": [
        ["\uD83D\uDEA8"], "\uE432", "\uDBB9\uDFF9", ["rotating_light"], 26, 14
    ],
    "1f6a9": [
        ["\uD83D\uDEA9"], "", "\uDBBA\uDF22", ["triangular_flag_on_post"], 26, 15
    ],
    "1f6aa": [
        ["\uD83D\uDEAA"], "", "\uDBB9\uDCF3", ["door"], 26, 16
    ],
    "1f6ab": [
        ["\uD83D\uDEAB"], "", "\uDBBA\uDF48", ["no_entry_sign"], 26, 17
    ],
    "1f6ac": [
        ["\uD83D\uDEAC"], "\uE30E", "\uDBBA\uDF1E", ["smoking"], 26, 18
    ],
    "1f6ad": [
        ["\uD83D\uDEAD"], "\uE208", "\uDBBA\uDF1F", ["no_smoking"], 26, 19
    ],
    "1f6ae": [
        ["\uD83D\uDEAE"], "", "", ["put_litter_in_its_place"], 26, 20
    ],
    "1f6af": [
        ["\uD83D\uDEAF"], "", "", ["do_not_litter"], 26, 21
    ],
    "1f6b0": [
        ["\uD83D\uDEB0"], "", "", ["potable_water"], 26, 22
    ],
    "1f6b1": [
        ["\uD83D\uDEB1"], "", "", ["non-potable_water"], 26, 23
    ],
    "1f6b2": [
        ["\uD83D\uDEB2"], "\uE136", "\uDBB9\uDFEB", ["bike"], 26, 24
    ],
    "1f6b3": [
        ["\uD83D\uDEB3"], "", "", ["no_bicycles"], 26, 25
    ],
    "1f6b4": [
        ["\uD83D\uDEB4"], "", "", ["bicyclist"], 26, 26
    ],
    "1f6b5": [
        ["\uD83D\uDEB5"], "", "", ["mountain_bicyclist"], 26, 27
    ],
    "1f6b6": [
        ["\uD83D\uDEB6"], "\uE201", "\uDBB9\uDFF0", ["walking"], 26, 28
    ],
    "1f6b7": [
        ["\uD83D\uDEB7"], "", "", ["no_pedestrians"], 26, 29
    ],
    "1f6b8": [
        ["\uD83D\uDEB8"], "", "", ["children_crossing"], 27, 0
    ],
    "1f6b9": [
        ["\uD83D\uDEB9"], "\uE138", "\uDBBA\uDF33", ["mens"], 27, 1
    ],
    "1f6ba": [
        ["\uD83D\uDEBA"], "\uE139", "\uDBBA\uDF34", ["womens"], 27, 2
    ],
    "1f6bb": [
        ["\uD83D\uDEBB"], "\uE151", "\uDBB9\uDD06", ["restroom"], 27, 3
    ],
    "1f6bc": [
        ["\uD83D\uDEBC"], "\uE13A", "\uDBBA\uDF35", ["baby_symbol"], 27, 4
    ],
    "1f6bd": [
        ["\uD83D\uDEBD"], "\uE140", "\uDBB9\uDD07", ["toilet"], 27, 5
    ],
    "1f6be": [
        ["\uD83D\uDEBE"], "\uE309", "\uDBB9\uDD08", ["wc"], 27, 6
    ],
    "1f6bf": [
        ["\uD83D\uDEBF"], "", "", ["shower"], 27, 7
    ],
    "1f6c0": [
        ["\uD83D\uDEC0"], "\uE13F", "\uDBB9\uDD05", ["bath"], 27, 8
    ],
    "1f6c1": [
        ["\uD83D\uDEC1"], "", "", ["bathtub"], 27, 9
    ],
    "1f6c2": [
        ["\uD83D\uDEC2"], "", "", ["passport_control"], 27, 10
    ],
    "1f6c3": [
        ["\uD83D\uDEC3"], "", "", ["customs"], 27, 11
    ],
    "1f6c4": [
        ["\uD83D\uDEC4"], "", "", ["baggage_claim"], 27, 12
    ],
    "1f6c5": [
        ["\uD83D\uDEC5"], "", "", ["left_luggage"], 27, 13
    ],
    "0023-20e3": [
        ["\u0023\uFE0F\u20E3", "\u0023\u20E3"], "\uE210", "\uDBBA\uDC2C", ["hash"], 27, 14
    ],
    "0030-20e3": [
        ["\u0030\uFE0F\u20E3", "\u0030\u20E3"], "\uE225", "\uDBBA\uDC37", ["zero"], 27, 15
    ],
    "0031-20e3": [
        ["\u0031\uFE0F\u20E3", "\u0031\u20E3"], "\uE21C", "\uDBBA\uDC2E", ["one"], 27, 16
    ],
    "0032-20e3": [
        ["\u0032\uFE0F\u20E3", "\u0032\u20E3"], "\uE21D", "\uDBBA\uDC2F", ["two"], 27, 17
    ],
    "0033-20e3": [
        ["\u0033\uFE0F\u20E3", "\u0033\u20E3"], "\uE21E", "\uDBBA\uDC30", ["three"], 27, 18
    ],
    "0034-20e3": [
        ["\u0034\uFE0F\u20E3", "\u0034\u20E3"], "\uE21F", "\uDBBA\uDC31", ["four"], 27, 19
    ],
    "0035-20e3": [
        ["\u0035\uFE0F\u20E3", "\u0035\u20E3"], "\uE220", "\uDBBA\uDC32", ["five"], 27, 20
    ],
    "0036-20e3": [
        ["\u0036\uFE0F\u20E3", "\u0036\u20E3"], "\uE221", "\uDBBA\uDC33", ["six"], 27, 21
    ],
    "0037-20e3": [
        ["\u0037\uFE0F\u20E3", "\u0037\u20E3"], "\uE222", "\uDBBA\uDC34", ["seven"], 27, 22
    ],
    "0038-20e3": [
        ["\u0038\uFE0F\u20E3", "\u0038\u20E3"], "\uE223", "\uDBBA\uDC35", ["eight"], 27, 23
    ],
    "0039-20e3": [
        ["\u0039\uFE0F\u20E3", "\u0039\u20E3"], "\uE224", "\uDBBA\uDC36", ["nine"], 27, 24
    ],
    "1f1e8-1f1f3": [
        ["\uD83C\uDDE8\uD83C\uDDF3"], "\uE513", "\uDBB9\uDCED", ["cn"], 27, 25
    ],
    "1f1e9-1f1ea": [
        ["\uD83C\uDDE9\uD83C\uDDEA"], "\uE50E", "\uDBB9\uDCE8", ["de"], 27, 26
    ],
    "1f1ea-1f1f8": [
        ["\uD83C\uDDEA\uD83C\uDDF8"], "\uE511", "\uDBB9\uDCEB", ["es"], 27, 27
    ],
    "1f1eb-1f1f7": [
        ["\uD83C\uDDEB\uD83C\uDDF7"], "\uE50D", "\uDBB9\uDCE7", ["fr"], 27, 28
    ],
    "1f1ec-1f1e7": [
        ["\uD83C\uDDEC\uD83C\uDDE7"], "\uE510", "\uDBB9\uDCEA", ["gb", "uk"], 27, 29
    ],
    "1f1ee-1f1f9": [
        ["\uD83C\uDDEE\uD83C\uDDF9"], "\uE50F", "\uDBB9\uDCE9", ["it"], 28, 0
    ],
    "1f1ef-1f1f5": [
        ["\uD83C\uDDEF\uD83C\uDDF5"], "\uE50B", "\uDBB9\uDCE5", ["jp"], 28, 1
    ],
    "1f1f0-1f1f7": [
        ["\uD83C\uDDF0\uD83C\uDDF7"], "\uE514", "\uDBB9\uDCEE", ["kr"], 28, 2
    ],
    "1f1f7-1f1fa": [
        ["\uD83C\uDDF7\uD83C\uDDFA"], "\uE512", "\uDBB9\uDCEC", ["ru"], 28, 3
    ],
    "1f1fa-1f1f8": [
        ["\uD83C\uDDFA\uD83C\uDDF8"], "\uE50C", "\uDBB9\uDCE6", ["us"], 28, 4
    ]
};

Config.smileys = {
    "<3": "heart",
    "<\/3": "broken_heart",
    ":)": "blush",
    "(:": "blush",
    ":-)": "blush",
    "C:": "smile",
    "c:": "smile",
    ":D": "smile",
    ":-D": "smile",
    ";)": "wink",
    ";-)": "wink",
    "):": "disappointed",
    ":(": "disappointed",
    ":-(": "disappointed",
    ":'(": "cry",
    "=)": "smiley",
    "=-)": "smiley",
    ":*": "kiss",
    ":-*": "kiss",
    ":>": "laughing",
    ":->": "laughing",
    "8)": "sunglasses",
    ":\\\\": "confused",
    ":-\\\\": "confused",
    ":\/": "confused",
    ":-\/": "confused",
    ":|": "neutral_face",
    ":-|": "neutral_face",
    ":o": "open_mouth",
    ":-o": "open_mouth",
    ">:(": "angry",
    ">:-(": "angry",
    ":p": "stuck_out_tongue",
    ":-p": "stuck_out_tongue",
    ":P": "stuck_out_tongue",
    ":-P": "stuck_out_tongue",
    ":b": "stuck_out_tongue",
    ":-b": "stuck_out_tongue",
    ";p": "stuck_out_tongue_winking_eye",
    ";-p": "stuck_out_tongue_winking_eye",
    ";b": "stuck_out_tongue_winking_eye",
    ";-b": "stuck_out_tongue_winking_eye",
    ";P": "stuck_out_tongue_winking_eye",
    ";-P": "stuck_out_tongue_winking_eye",
    ":o)": "monkey_face",
    "D:": "anguished"
};

Config.inits = {};
Config.map = {};

Config.mapcolon = {};
var a = [];
Config.reversemap = {};

Config.init_emoticons = function()
{
    if (Config.inits.emoticons)
        return;
    Config.init_colons(); // we require this for the emoticons map
    Config.inits.emoticons = 1;

    var a = [];
    Config.map.emoticons = {};
    for (var i in Config.emoticons_data)
    {
        // because we never see some characters in our text except as
        // entities, we must do some replacing
        var emoticon = i.replace(/\&/g, '&amp;').replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;');

        if (!Config.map.colons[emoji.emoticons_data[i]])
            continue;

        Config.map.emoticons[emoticon] = Config.map.colons[Config.emoticons_data[i]];
        a.push(Config.escape_rx(emoticon));
    }
    Config.rx_emoticons = new RegExp(
        ('(^|\\s)(' + a.join('|') + ')(?=$|[\\s|\\?\\.,!])'), 'g');
};
Config.init_colons = function()
{
    if (Config.inits.colons)
        return;
    Config.inits.colons = 1;
    Config.rx_colons = new RegExp('\:[^\\s:]+\:', 'g');
    Config.map.colons = {};
    for (var i in Config.data)
    {
        for (var j = 0; j < Config.data[i][3].length; j++)
        {
            Config.map.colons[emoji.data[i][3][j]] = i;
        }
    }
};
Config.init_unified = function()
{
    if (Config.inits.unified)
        return;
    Config.inits.unified = 1;

    buildMap();

};


Config.escape_rx = function(text)
{
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

function buildMap()
{

    var colons = [],codes=[];
    for (var i in Config.emoji_data)
    {
        for (var j = 0; j < Config.emoji_data[i][0].length; j++)
        {
            colons.push(Config.escape_rx (":"+Config.emoji_data[i][3][0])+":");
            codes.push(Config.emoji_data[i][0][0]);

            // it is a map of {"colon smiley":"unicode char"}
            Config.map[Config.emoji_data[i][3][0]] = Config.emoji_data[i][0][0];
            Config.mapcolon[":"+Config.emoji_data[i][3][0]+":"] = Config.emoji_data[i][0][0];
            // it is a map of {"unicode char": "colon smiley"}
            Config.reversemap[Config.emoji_data[i][0][0]] = Config.emoji_data[i][3][0];
        }

        Config.rx_colons = new RegExp('(' + colons.join('|') + ')', "g");
        Config.rx_codes = new RegExp('(' + codes.join('|') + ')', "g");
    }
}
'use strict';

function cancelEvent (event) {
  event = event || window.event;
  if (event) {
    event = event.originalEvent || event;

    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
  }

  return false;
}

function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

//ConfigStorage
(function(window)
{
    var keyPrefix = '';
    var noPrefix = false;
    var cache = {};
    var useCs = !!(window.chrome && chrome.storage && chrome.storage.local);
    var useLs = !useCs && !!window.localStorage;

    function storageSetPrefix(newPrefix)
    {
        keyPrefix = newPrefix;
    }

    function storageSetNoPrefix()
    {
        noPrefix = true;
    }

    function storageGetPrefix()
    {
        if (noPrefix)
        {
            noPrefix = false;
            return '';
        }
        return keyPrefix;
    }

    function storageGetValue()
    {
        var keys = Array.prototype.slice.call(arguments),
            callback = keys.pop(),
            result = [],
            single = keys.length == 1,
            value,
            allFound = true,
            prefix = storageGetPrefix(),
            i, key;

        for (i = 0; i < keys.length; i++)
        {
            key = keys[i] = prefix + keys[i];
            if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined)
            {
                result.push(cache[key]);
            }
            else if (useLs)
            {
                try
                {
                    value = localStorage.getItem(key);
                }
                catch (e)
                {
                    useLs = false;
                }
                try
                {
                    value = (value === undefined || value === null) ? false : JSON.parse(value);
                }
                catch (e)
                {
                    value = false;
                }
                result.push(cache[key] = value);
            }
            else if (!useCs)
            {
                result.push(cache[key] = false);
            }
            else
            {
                allFound = false;
            }
        }

        if (allFound)
        {
            return callback(single ? result[0] : result);
        }

        chrome.storage.local.get(keys, function(resultObj)
        {
            var value;
            result = [];
            for (i = 0; i < keys.length; i++)
            {
                key = keys[i];
                value = resultObj[key];
                value = value === undefined || value === null ? false : JSON.parse(value);
                result.push(cache[key] = value);
            }

            callback(single ? result[0] : result);
        });
    };

    function storageSetValue(obj, callback)
    {
        var keyValues = {},
            prefix = storageGetPrefix(),
            key, value;

        for (key in obj)
        {
            if (obj.hasOwnProperty(key))
            {
                value = obj[key];
                key = prefix + key;
                cache[key] = value;
                value = JSON.stringify(value);
                if (useLs)
                {
                    try
                    {
                        localStorage.setItem(key, value);
                    }
                    catch (e)
                    {
                        useLs = false;
                    }
                }
                else
                {
                    keyValues[key] = value;
                }
            }
        }

        if (useLs || !useCs)
        {
            if (callback)
            {
                callback();
            }
            return;
        }

        chrome.storage.local.set(keyValues, callback);
    };

    function storageRemoveValue()
    {
        var keys = Array.prototype.slice.call(arguments),
            prefix = storageGetPrefix(),
            i, key, callback;

        if (typeof keys[keys.length - 1] === 'function')
        {
            callback = keys.pop();
        }

        for (i = 0; i < keys.length; i++)
        {
            key = keys[i] = prefix + keys[i];
            delete cache[key];
            if (useLs)
            {
                try
                {
                    localStorage.removeItem(key);
                }
                catch (e)
                {
                    useLs = false;
                }
            }
        }
        if (useCs)
        {
            chrome.storage.local.remove(keys, callback);
        }
        else if (callback)
        {
            callback();
        }
    };

    window.ConfigStorage = {
        prefix: storageSetPrefix,
        noPrefix: storageSetNoPrefix,
        get: storageGetValue,
        set: storageSetValue,
        remove: storageRemoveValue
    };


})(this);
/**
 * emojiarea - A rich textarea control that supports emojis, WYSIWYG-style.
 * Copyright (c) 2012 DIY Co
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@diy.org>
 */

/**
 * This file also contains some modifications by Igor Zhukov in order to add
 * custom scrollbars to EmojiMenu See keyword `MODIFICATION` in source code.
 */
(function($, window, document) {

  var ELEMENT_NODE = 1;
  var TEXT_NODE = 3;
  var TAGS_BLOCK = [ 'p', 'div', 'pre', 'form' ];
  var KEY_ESC = 27;
  var KEY_TAB = 9;
  /* Keys that are not intercepted and canceled when the textbox has reached its max length:
        Backspace, Tab, Ctrl, Alt, Left Arrow, Up Arrow, Right Arrow, Down Arrow, Cmd Key, Delete
  */
  var MAX_LENGTH_ALLOWED_KEYS = [8, 9, 17, 18, 37, 38, 39, 40, 91, 46];

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /*
   * ! MODIFICATION START Options 'spritesheetPath', 'spritesheetDimens',
   * 'iconSize' added by Andre Staltz.
   */
  $.emojiarea = {
    assetsPath : '',
    iconSize : 25,
    icons : {},
  };
  var defaultRecentEmojis = ':joy:,:kissing_heart:,:heart:,:heart_eyes:,:blush:,:grin:,:+1:,:relaxed:,:pensive:,:smile:,:sob:,:kiss:,:unamused:,:flushed:,:stuck_out_tongue_winking_eye:,:see_no_evil:,:wink:,:smiley:,:cry:,:stuck_out_tongue_closed_eyes:,:scream:,:rage:,:smirk:,:disappointed:,:sweat_smile:,:kissing_closed_eyes:,:speak_no_evil:,:relieved:,:grinning:,:yum:,:laughing:,:ok_hand:,:neutral_face:,:confused:'
      .split(',');
  /* ! MODIFICATION END */

  $.fn.emojiarea = function(options) {
    options = $.extend({}, options);
    return this
      .each(function () {
        var originalInput = $(this);
        if ('contentEditable' in document.body
          && options.wysiwyg !== false) {
          var id = getGuid();
          new EmojiArea_WYSIWYG(originalInput, id, $.extend({}, options));
        } else {
          var id = getGuid();
          new EmojiArea_Plain(originalInput, id, options);
        }
        originalInput.attr(
          {
            'data-emojiable': 'converted',
            'data-id': id,
            'data-type': 'original-input'
          });
      });
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  var util = {};

  util.restoreSelection = (function() {
    if (window.getSelection) {
      return function(savedSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        for (var i = 0, len = savedSelection.length; i < len; ++i) {
          sel.addRange(savedSelection[i]);
        }
      };
    } else if (document.selection && document.selection.createRange) {
      return function(savedSelection) {
        if (savedSelection) {
          savedSelection.select();
        }
      };
    }
  })();

  util.saveSelection = (function() {
    if (window.getSelection) {
      return function() {
        var sel = window.getSelection(), ranges = [];
        if (sel.rangeCount) {
          for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            ranges.push(sel.getRangeAt(i));
          }
        }
        return ranges;
      };
    } else if (document.selection && document.selection.createRange) {
      return function() {
        var sel = document.selection;
        return (sel.type.toLowerCase() !== 'none') ? sel.createRange()
            : null;
      };
    }
  })();

  util.replaceSelection = (function() {
    if (window.getSelection) {
      return function(content) {
        var range, sel = window.getSelection();
        var node = typeof content === 'string' ? document
            .createTextNode(content) : content;
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          //range.insertNode(document.createTextNode(''));
          range.insertNode(node);
          range.setStart(node, 0);

          window.setTimeout(function() {
            range = document.createRange();
            range.setStartAfter(node);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }, 0);
        }
      }
    } else if (document.selection && document.selection.createRange) {
      return function(content) {
        var range = document.selection.createRange();
        if (typeof content === 'string') {
          range.text = content;
        } else {
          range.pasteHTML(content.outerHTML);
        }
      }
    }
  })();

  util.insertAtCursor = function(text, el) {
    text = ' ' + text;
    var val = el.value, endIndex, startIndex, range;
    if (typeof el.selectionStart != 'undefined'
        && typeof el.selectionEnd != 'undefined') {
      startIndex = el.selectionStart;
      endIndex = el.selectionEnd;
      el.value = val.substring(0, startIndex) + text
          + val.substring(el.selectionEnd);
      el.selectionStart = el.selectionEnd = startIndex + text.length;
    } else if (typeof document.selection != 'undefined'
        && typeof document.selection.createRange != 'undefined') {
      el.focus();
      range = document.selection.createRange();
      range.text = text;
      range.select();
    }
  };

  util.extend = function(a, b) {
    if (typeof a === 'undefined' || !a) {
      a = {};
    }
    if (typeof b === 'object') {
      for ( var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
    }
    return a;
  };

  util.escapeRegex = function(str) {
    return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  };

  util.htmlEntities = function(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };

  /*
   * ! MODIFICATION START This function was added by Igor Zhukov to save
   * recent used emojis.
   */
  util.emojiInserted = function(emojiKey, menu) {
    ConfigStorage.get('emojis_recent', function(curEmojis) {
      curEmojis = curEmojis || defaultRecentEmojis || [];

      var pos = curEmojis.indexOf(emojiKey);
      if (!pos) {
        return false;
      }
      if (pos != -1) {
        curEmojis.splice(pos, 1);
      }
      curEmojis.unshift(emojiKey);
      if (curEmojis.length > 42) {
        curEmojis = curEmojis.slice(42);
      }

      ConfigStorage.set({
        emojis_recent : curEmojis
      });
    })
  };
  /* ! MODIFICATION END */

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  var EmojiArea = function() {
  };

  EmojiArea.prototype.setup = function() {
    var self = this;

    this.$editor.on('focus', function() {
      self.hasFocus = true;
    });
    this.$editor.on('blur', function() {
      self.hasFocus = false;
    });

    // Assign a unique instance of an emojiMenu to
    self.emojiMenu = new EmojiMenu(self);

    this.setupButton();
  };

  EmojiArea.prototype.setupButton = function() {
    var self = this;
    var $button = $('[data-id=' + this.id + '][data-type=picker]');

    $button.on('click', function(e) {
      self.emojiMenu.show(self);
    });

    this.$button = $button;
    this.$dontHideOnClick = 'emoji-picker';
  };

  /*
   * ! MODIFICATION START This function was modified by Andre Staltz so that
   * the icon is created from a spritesheet.
   */
  EmojiArea.createIcon = function(emoji, menu) {
    var category = emoji[0];
    var row = emoji[1];
    var column = emoji[2];
    var name = emoji[3];
    var filename = $.emojiarea.assetsPath + '/emoji_spritesheet_!.png';
    var blankGifPath = $.emojiarea.assetsPath + '/blank.gif';
    var iconSize = menu && Config.Mobile ? 26 : $.emojiarea.iconSize
    var xoffset = -(iconSize * column);
    var yoffset = -(iconSize * row);
    var scaledWidth = (Config.EmojiCategorySpritesheetDimens[category][1] * iconSize);
    var scaledHeight = (Config.EmojiCategorySpritesheetDimens[category][0] * iconSize);

    var style = 'display:inline-block;';
    style += 'width:' + iconSize + 'px;';
    style += 'height:' + iconSize + 'px;';
    style += 'background:url(\'' + filename.replace('!', category) + '\') '
        + xoffset + 'px ' + yoffset + 'px no-repeat;';
    style += 'background-size:' + scaledWidth + 'px ' + scaledHeight
        + 'px;';
    return '<img src="' + blankGifPath + '" class="img" style="'
        + style + '" alt="' + util.htmlEntities(name) + '">';
  };

  $.emojiarea.createIcon = EmojiArea.createIcon;
  /* ! MODIFICATION END */

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  /**
   * Editor (plain-text)
   *
   * @constructor
   * @param {object}
   *            $textarea
   * @param {object}
   *            options
   */

  var EmojiArea_Plain = function($textarea, id, options) {
    this.options = options;
    this.$textarea = $textarea;
    this.$editor = $textarea;
    this.id = id;
    this.setup();
  };

  EmojiArea_Plain.prototype.insert = function(emoji) {
    if (!$.emojiarea.icons.hasOwnProperty(emoji))
      return;
    util.insertAtCursor(emoji, this.$textarea[0]);
    /*
     * MODIFICATION: Following line was added by Igor Zhukov, in order to
     * save recent emojis
     */
    util.emojiInserted(emoji, this.menu);
    this.$textarea.trigger('change');
  };

  EmojiArea_Plain.prototype.val = function() {
    if (this.$textarea == '\n')
      return '';
    return this.$textarea.val();
  };

  util.extend(EmojiArea_Plain.prototype, EmojiArea.prototype);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /**
   * Editor (rich)
   *
   * @constructor
   * @param {object}
   *            $textarea
   * @param {object}
   *            options
   */

  var EmojiArea_WYSIWYG = function($textarea, id, options) {
    var self = this;

    this.options = options || {};
    if ($($textarea).attr('data-emoji-input') === 'unicode')
      this.options.inputMethod = 'unicode';
    else
      this.options.inputMethod = 'image';
    this.id = id;
    this.$textarea = $textarea;
    this.emojiPopup = options.emojiPopup;
    this.$editor = $('<div>').addClass('emoji-wysiwyg-editor').addClass($($textarea)[0].className);
    this.$editor.data('self', this);

    if ($textarea.attr('maxlength')) {
      this.$editor.attr('maxlength', $textarea.attr('maxlength'));
    }
    var unicodeToImageText = this.emojiPopup.unicodeToImage($textarea.val());
    this.$editor.html(unicodeToImageText);
    if ($($textarea).attr('data-disabled') === 'true') {
      this.$editor.attr({
        'data-id': id,
        'data-type': 'input',
        'placeholder': $textarea.attr('placeholder'),
        'contenteditable': 'false',
        'ondragenter' : 'event.preventDefault(); event.dataTransfer.dropEffect = "none"',
        'ondragover' : 'event.preventDefault(); event.dataTransfer.dropEffect = "none"',
        'data-toggle': 'modal',
        'data-target': '#'+$textarea.attr('data-mtarget'),
        // 'onpaste': 'return false;'
      });
    }
    else {
      this.$editor.attr({
        'data-id': id,
        'data-type': 'input',
        'placeholder': $textarea.attr('placeholder'),
        'contenteditable': 'true',
        'ondragenter' : 'event.preventDefault(); event.dataTransfer.dropEffect = "none"',
        'ondragover' : 'event.preventDefault(); event.dataTransfer.dropEffect = "none"'
        // 'onpaste': 'return false;'
      });
    }

    /*
     * ! MODIFICATION START Following code was modified by Igor Zhukov, in
     * order to improve rich text paste
     */
    var changeEvents = 'blur change';
    if (!this.options.norealTime) {
      changeEvents += ' keyup';
    }
    this.$editor.on(changeEvents, function(e) {
      return self.onChange.apply(self, [ e ]);
    });
    /* ! MODIFICATION END */

    this.$editor.on('mousedown focus', function() {
      document.execCommand('enableObjectResizing', false, false);
    });
    this.$editor.on('blur', function() {
      document.execCommand('enableObjectResizing', true, true);
    });

    var editorDiv = this.$editor;
    this.$editor.on("change keydown keyup resize scroll", function(e) {
      if(MAX_LENGTH_ALLOWED_KEYS.indexOf(e.which) == -1 &&
        !((e.ctrlKey || e.metaKey) && e.which == 65) && // Ctrl + A
        !((e.ctrlKey || e.metaKey) && e.which == 67) && // Ctrl + C
        editorDiv.text().length + editorDiv.find('img').length >= editorDiv.attr('maxlength'))
      {
        e.preventDefault();
      }
      self.updateBodyPadding(editorDiv);
    });

    if (this.options.onPaste) {
      var self = this;
      this.$editor.on("paste", function (e) {
        e.preventDefault();

        if ((e.originalEvent || e).clipboardData) {
          var content = (e.originalEvent || e).clipboardData.getData('text/plain');
          var finalText = self.options.onPaste(content);
          document.execCommand('insertText', false, finalText);
        }
        else if (window.clipboardData) {
          var content = window.clipboardData.getData('Text');
          var finalText = self.options.onPaste(content);
          document.selection.createRange().pasteHTML(finalText);
        }
        editorDiv.scrollTop(editorDiv[0].scrollHeight);
      });
    }

    $textarea.after("<i class='emoji-picker-icon emoji-picker " + this.options.popupButtonClasses + "' data-id='" + id + "' data-type='picker'></i>");

    $textarea.hide().after(this.$editor);
    this.setup();

    /*
     * MODIFICATION: Following line was modified by Igor Zhukov, in order to
     * improve emoji insert behaviour
     */
    $(document.body).on('mousedown', function() {

      if (self.hasFocus) {
        self.selection = util.saveSelection();
        // console.log(self.selection[0].commonAncestorContainer.innerText + '\u0020');
      }
    });
  };

  EmojiArea_WYSIWYG.prototype.updateBodyPadding = function(target) {
    var emojiPicker = $('[data-id=' + this.id + '][data-type=picker]');
    if ($(target).hasScrollbar()) {
      if (!(emojiPicker.hasClass('parent-has-scroll')))
        emojiPicker.addClass('parent-has-scroll');
      if (!($(target).hasClass('parent-has-scroll')))
        $(target).addClass('parent-has-scroll');
    } else {
      if ((emojiPicker.hasClass('parent-has-scroll')))
        emojiPicker.removeClass('parent-has-scroll');
      if (($(target).hasClass('parent-has-scroll')))
        $(target).removeClass('parent-has-scroll');
    }
  };

  EmojiArea_WYSIWYG.prototype.onChange = function(e) {
    this.$textarea.val(this.val()).trigger('change');
  };

  EmojiArea_WYSIWYG.prototype.insert = function(emoji) {
    var content;
    /*
     * MODIFICATION: Following line was modified by Andre Staltz, to use new
     * implementation of createIcon function.
     */
    var insertionContent = '';
    if (this.options.inputMethod == 'unicode') {
      insertionContent = this.emojiPopup.colonToUnicode(emoji) + '\u00A0';
    } else {
      var $img = $(EmojiArea.createIcon($.emojiarea.icons[emoji]));
      if ($img[0].attachEvent) {
        $img[0].attachEvent('onresizestart', function(e) {
          e.returnValue = false;
        }, false);
      }
      insertionContent = $img[0];
    }

    this.$editor.trigger('focus');
    if (this.selection) {
      util.restoreSelection(this.selection);
    }
    try {
      util.replaceSelection(insertionContent);
    } catch (e) {
    }

    /*
     * MODIFICATION: Following line was added by Igor Zhukov, in order to
     * save recent emojis
     */
    util.emojiInserted(emoji, this.menu);

    this.onChange();
  };

  EmojiArea_WYSIWYG.prototype.val = function() {
    var lines = [];
    var line = [];
    var emojiPopup = this.emojiPopup;

    var flush = function() {
      lines.push(line.join(''));
      line = [];
    };

    var sanitizeNode = function(node) {
      if (node.nodeType === TEXT_NODE) {
        line.push(node.nodeValue);
      } else if (node.nodeType === ELEMENT_NODE) {
        var tagName = node.tagName.toLowerCase();
        var isBlock = TAGS_BLOCK.indexOf(tagName) !== -1;

        if (isBlock && line.length)
          flush();

        if (tagName === 'img') {
          var alt = node.getAttribute('alt') || '';
          if (alt) {
              line.push(alt);
          }
          return;
        } else if (tagName === 'br') {
          flush();
        }

        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
           sanitizeNode(children[i]);
        }

        if (isBlock && line.length)
          flush();
      }
    };

    var children = this.$editor[0].childNodes;
    for (var i = 0; i < children.length; i++) {
      sanitizeNode(children[i]);
    }

    if (line.length)
      flush();

    var returnValue = lines.join('\n');
    return emojiPopup.colonToUnicode(returnValue);
  };

  util.extend(EmojiArea_WYSIWYG.prototype, EmojiArea.prototype);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  jQuery.fn.hasScrollbar = function() {
    var scrollHeight = this.get(0).scrollHeight;

    //safari's scrollHeight includes padding
    //if ($.browser.safari)
//      scrollHeight -= parseInt(this.css('padding-top')) + parseInt(this.css('padding-bottom'));
    if (this.outerHeight() < scrollHeight)
      return true;
    else
      return false;
  }

  /**
   * Emoji Dropdown Menu
   *
   * @constructor
   * @param {object}
   *            emojiarea
   */
  var EmojiMenu = function(emojiarea) {
    var self = this;
    self.id = emojiarea.id;
    var $body = $(document.body);
    var $window = $(window);

    this.visible = false;
    this.emojiarea = emojiarea;
    EmojiMenu.menuZIndex = 5000;
    this.$menu = $('<div>');
    this.$menu.addClass('emoji-menu');
    this.$menu.attr('data-id', self.id);
    this.$menu.attr('data-type', 'menu');
    this.$menu.hide();

    this.$itemsTailWrap = $('<div class="emoji-items-wrap1"></div>')
        .appendTo(this.$menu);
    this.$categoryTabs = $(
        '<table class="emoji-menu-tabs"><tr>'
            + '<td><a class="emoji-menu-tab icon-recent" ></a></td>'
            + '<td><a class="emoji-menu-tab icon-smile" ></a></td>'
            + '<td><a class="emoji-menu-tab icon-flower"></a></td>'
            + '<td><a class="emoji-menu-tab icon-bell"></a></td>'
            // + '<td><a class="emoji-menu-tab icon-car"></a></td>'
            // + '<td><a class="emoji-menu-tab icon-grid"></a></td>'
            + '</tr></table>').appendTo(this.$itemsTailWrap);
    this.$itemsWrap = $(
        '<div class="emoji-items-wrap mobile_scrollable_wrap"></div>')
        .appendTo(this.$itemsTailWrap);
    this.$items = $('<div class="emoji-items">').appendTo(
        this.$itemsWrap);

    this.emojiarea.$editor.after(this.$menu)

    $body.on('keydown', function(e) {
      if (e.keyCode === KEY_ESC || e.keyCode === KEY_TAB) {
        self.hide();
      }
    });

    /*
     * ! MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
     * to hide menu on message submit with keyboard
     */
    $body.on('message_send', function(e) {
      self.hide();
    });

    $body.on('mouseup', function(e) {
      /*
       * ! MODIFICATION START Following code was added by Igor Zhukov, in
       * order to prevent close on click on EmojiMenu scrollbar
       */
      e = e.originalEvent || e;
      var target = e.originalTarget || e.target || window;

      if ($(target).hasClass(self.emojiarea.$dontHideOnClick)) {
        return;
      }

      while (target && target != window) {
        target = target.parentNode;
        if (target == self.$menu[0] || self.emojiarea
            && target == self.emojiarea.$button[0]) {
          return;
        }
      }
      /* ! MODIFICATION END */
      self.hide();
    });

    this.$menu.on('mouseup', 'a', function(e) {
      e.stopPropagation();
      return false;
    });

    this.$menu.on('click', 'a', function(e) {

      self.emojiarea.updateBodyPadding(self.emojiarea.$editor);
      if ($(this).hasClass('emoji-menu-tab')) {
        if (self.getTabIndex(this) !== self.currentCategory) {
          self.selectCategory(self.getTabIndex(this));
        }
        return false;
      }

      var emoji = $('.label', $(this)).text();
      window.setTimeout(function() {
        self.onItemSelected(emoji);
        if (e.ctrlKey || e.metaKey) {
          self.hide();
        }
      }, 0);
      e.stopPropagation();
      return false;
    });

    this.selectCategory(0);
  };

  /*
   * ! MODIFICATION START Following code was added by Andre Staltz, to
   * implement category selection.
   */
  EmojiMenu.prototype.getTabIndex = function(tab) {
    return this.$categoryTabs.find('.emoji-menu-tab').index(tab);
  };

  EmojiMenu.prototype.selectCategory = function(category) {
    var self = this;
    this.$categoryTabs.find('.emoji-menu-tab').each(function(index) {
      if (index === category) {
        this.className += '-selected';
      } else {
        this.className = this.className.replace('-selected', '');
      }
    });
    this.currentCategory = category;
    this.load(category);
  };
  /* ! MODIFICATION END */

  EmojiMenu.prototype.onItemSelected = function(emoji) {
    if(this.emojiarea.$editor.text().length + this.emojiarea.$editor.find('img').length >= this.emojiarea.$editor.attr('maxlength'))
    {
      return;
    }
    this.emojiarea.insert(emoji);
  };

  /*
   * MODIFICATION: The following function argument was modified by Andre
   * Staltz, in order to load only icons from a category. Also function was
   * modified by Igor Zhukov in order to display recent emojis from
   * localStorage
   */
  EmojiMenu.prototype.load = function(category) {
    var html = [];
    var options = $.emojiarea.icons;
    var path = $.emojiarea.assetsPath;
    var self = this;
    if (path.length && path.charAt(path.length - 1) !== '/') {
      path += '/';
    }

    /*
     * ! MODIFICATION: Following function was added by Igor Zhukov, in order
     * to add scrollbars to EmojiMenu
     */
    var updateItems = function() {
      self.$items.html(html.join(''));
    }

    if (category > 0) {
      for ( var key in options) {
        /*
         * MODIFICATION: The following 2 lines were modified by Andre
         * Staltz, in order to load only icons from the specified
         * category.
         */
        if (options.hasOwnProperty(key)
            && options[key][0] === (category - 1)) {
          html.push('<a href="javascript:void(0)" title="'
              + util.htmlEntities(key) + '">'
              + EmojiArea.createIcon(options[key], true)
              + '<span class="label">' + util.htmlEntities(key)
              + '</span></a>');
        }
      }
      updateItems();
    } else {
      ConfigStorage.get('emojis_recent', function(curEmojis) {
        curEmojis = curEmojis || defaultRecentEmojis || [];
        var key, i;
        for (i = 0; i < curEmojis.length; i++) {
          key = curEmojis[i]
          if (options[key]) {
            html.push('<a href="javascript:void(0)" title="'
                + util.htmlEntities(key) + '">'
                + EmojiArea.createIcon(options[key], true)
                + '<span class="label">'
                + util.htmlEntities(key) + '</span></a>');
          }
        }
        updateItems();
      });
    }
  };

  EmojiMenu.prototype.hide = function(callback) {
    this.visible = false;
    this.$menu.hide("fast");
    $(this.$menu).siblings('.emoji-picker').removeClass('emoji-opened');
  };

  EmojiMenu.prototype.show = function(emojiarea) {
    /*
     * MODIFICATION: Following line was modified by Igor Zhukov, in order to
     * improve EmojiMenu behaviour
     */
    if (this.visible)
      return this.hide();
    $(this.$menu).css('z-index', ++EmojiMenu.menuZIndex);
    $(this.$menu).siblings('.emoji-picker').addClass('emoji-opened');
    this.$menu.show("fast");
    /*
     * MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
     * to update EmojiMenu contents
     */
    if (!this.currentCategory) {
      this.load(0);
    }
    this.visible = true;
  };

})(jQuery, window, document);
// Generated by CoffeeScript 1.9.3
(function() {
  this.EmojiPicker = (function() {
    function EmojiPicker(options) {
      var ref, ref1;
      if (options == null) {
        options = {};
      }
      $.emojiarea.iconSize = (ref = options.iconSize) != null ? ref : 25;
      $.emojiarea.assetsPath = (ref1 = options.assetsPath) != null ? ref1 : '';
      this.generateEmojiIconSets(options);
      if (!options.emojiable_selector) {
        options.emojiable_selector = '[data-emojiable=true]';
      }
      this.options = options;
    }

    EmojiPicker.prototype.discover = function() {
      return $(this.options.emojiable_selector).emojiarea($.extend({
        emojiPopup: this,
        norealTime: true
      }, this.options));
    };

    EmojiPicker.prototype.generateEmojiIconSets = function(options) {
      var column, dataItem, hex, i, icons, j, name, reverseIcons, row, totalColumns;
      icons = {};
      reverseIcons = {};
      i = void 0;
      j = void 0;
      hex = void 0;
      name = void 0;
      dataItem = void 0;
      row = void 0;
      column = void 0;
      totalColumns = void 0;
      j = 0;
      while (j < Config.EmojiCategories.length) {
        totalColumns = Config.EmojiCategorySpritesheetDimens[j][1];
        i = 0;
        while (i < Config.EmojiCategories[j].length) {
          dataItem = Config.Emoji[Config.EmojiCategories[j][i]];
          name = dataItem[1][0];
          row = Math.floor(i / totalColumns);
          column = i % totalColumns;
          icons[':' + name + ':'] = [j, row, column, ':' + name + ':'];
          reverseIcons[name] = dataItem[0];
          i++;
        }
        j++;
      }
      $.emojiarea.icons = icons;
      return $.emojiarea.reverseIcons = reverseIcons;
    };

    EmojiPicker.prototype.colonToUnicode = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_colons) {
        Config.init_unified();
      }
      return input.replace(Config.rx_colons, function(m) {
        var val;
        val = Config.mapcolon[m];
        if (val) {
          return val;
        } else {
          return '';
        }
      });
    };

    EmojiPicker.prototype.unicodeToImage = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_codes) {
        Config.init_unified();
      }
      return input.replace(Config.rx_codes, function(m) {
        var $img, val;
        val = Config.reversemap[m];
        if (val) {
          val = ':' + val + ':';
          $img = $.emojiarea.createIcon($.emojiarea.icons[val]);
          return $img;
        } else {
          return '';
        }
      });
    };

    EmojiPicker.prototype.colonToImage = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_colons) {
        Config.init_unified();
      }
      return input.replace(Config.rx_colons, function(m) {
        var $img;
        if (m) {
          $img = $.emojiarea.createIcon($.emojiarea.icons[m]);
          return $img;
        } else {
          return '';
        }
      });
    };

    return EmojiPicker;

  })();

}).call(this);

//# sourceMappingURL=emoji-picker.js.map
// Wrap in IIFE
$(function($) {

	'use strict';

	/**
	 * Simple lightbox.
	 */

	// Lazy load
	function img_lazy_load_gallery() {
		$("img.laazy-lightbox").each(function() {
				var $this = $(this);
				$this.unveil(300, function() {
					$this.load(function() {
						$this.parents('figure').siblings('.gallery-lightbox-loader').hide();
						$this.removeClass('hidden');
					});
				});
			});
	}

	 // Constructor
	function MBox(selector, clicked, options = null) {
		this.settings = this.mergeOptions(options);

		if($(selector).hasClass('open-gallery-modal')) {
			this.selector = $(selector).parents('.gallery-carousel').find('.carousel-inner');
			this.openerType = 'button';
		}
		else {
			this.selector = $(selector);
			this.openerType = 'image';
		}

		if($(selector).hasClass('gallery-post')) {
			this.posttype = 'gallery-post';
		}



		this.images = this.getImages();
		this.imagesCount = this.images.length;
		this.currentImage = clicked;
		this.currentImageNo = 0;
		this.currentPageNo = 0;
		this.scrollPosition = $(window).scrollTop();
		this.navigation = '';

		this.mBox = this.build();


		this.updateVars();
		this.createNavigation();
		this.addEventListeners();

		this.open();

	}

	MBox.prototype = {

		// Set default options.
		defaults: {
			imagesPerPage: 3,
			displayNavigation: true,
			displayTitle: true,
			rounded: false,
			displayThumbnails: true,
			keyboardNavigation: true
		},

		mergeOptions: function(options) {

			return $.extend({}, this.defaults, options);

		},

		// Fetch images from a selector.
		// @return jQuery
		getImages: function() {
			var tag = this.selector[0].tagName;

			// Check if working with collection or single image.
			if(tag == 'IMG') {
				return $(this.selector[0]);
			}
			else {

				var images = this.selector.find('img').toArray(); // Find original images.
				var arr = new Array();

				images.forEach(function(element) {

					if(element.className != ''){
						var img = $('<img/>', {
							'src': element.src,
							'name': element.name,
						});

					// Check for attributes.
					if(element.title !== '') img.attr('title', element.title);
					if(element.alt !== '') img.attr('alt', element.alt);

					arr.push(img); // Add to images array.
					}

				});

				arr = $(arr).map(function() {

					return this.toArray(); // it will be an jQuery selection.
				});

				return arr;

			}

		},

		// @todo additional parameters like % etc.?
		// @return {string}
		calculatePosition: function(position) {

			return position + 25 + 'px';

		},

		// To make gallery plugin plug & play, its interface is build here.
		// @return jQuery
		build: function() {

			var container = this.createContainer();

			// Current image.
			var currentImageBox = $('<div/>', {
				'class': 'mBox-current'
			}).prependTo(container);



			if(this.posttype == 'gallery-post') {
				$('<img/>', {
					'class': 'laazy-lightbox hidden',
					'src': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAABCAYAAAA8YlcZAAAAE0lEQVR42mN8+frtf4ZRMAqoDADJaAPC1+m3pQAAAABJRU5ErkJggg==',
					'data-src': this.currentImage.name,
					'title': this.currentImage.title
				}).prependTo(currentImageBox).wrap('<figure class = "image"></figure>');
				currentImageBox.append('<div class="gallery-lightbox-loader circle-loader r-wh-45"></div>');

				img_lazy_load_gallery();

				this.currentImgNum = this.currentImage.getAttribute('data-num');
				this.totalImgNum = this.currentImage.getAttribute('data-total');
			}
			else {
				$('<img/>', {
					'src': this.currentImage.src,
					'title': this.currentImage.title
				}).prependTo(currentImageBox).wrap('<figure class = "image"></figure>');
			}


			// Image x of xx count.
			// $('<p/>', {
			// 	'class': 'mBox-navigation-txt'
            // }).appendTo(currentImageBox).wrap('<div class = "small mBox-navigation-count"></div>');
            // Still working on current image.

			// No need to show navigation/thumbnails for a single image.
			if(this.imagesCount > 1) {
				// Next & previous navigation arrows.
				var navigationArrows = $('<div/>').addClass('mBox-navigation').css('display', 'none');

				// $('<i class="glyphicon glyphicon-menu-left mBox-previous float-left" aria-hidden="true"></i>').appendTo(navigationArrows);

				// $('<i class="glyphicon glyphicon-menu-right mBox-next float-right" aria-hidden="true"></i>').appendTo(navigationArrows);

				$('<a href="javascript:void(null)" class="mBox-previous float-left"><svg class="lightbox-navigations" width="35px" height="35px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g class="to-op-1" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5"> <g class="w-to-b-stroke" id="Image-preview--modal" transform="translate(-84.000000, -516.000000)" stroke="#FFFFFF"> <g id="Group-38" transform="translate(84.000000, 516.000000)"> <g id="previous"> <circle class="b-to-w-fill" id="Oval-Copy" stroke-width="0.5" fill="#000000" cx="24" cy="24" r="23.75"></circle> <polyline id="Path-2-Copy-2" points="28 16 20 24.5 28 33"></polyline> </g> </g> </g> </g></svg></a>').appendTo(navigationArrows);

				$('<a href="javascript:void(null)" class="mBox-next float-right"><svg class="rotate-180 lightbox-navigations" width="35px" height="35px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g class="to-op-1" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5"> <g class="w-to-b-stroke" id="Image-preview--modal" transform="translate(-84.000000, -516.000000)" stroke="#FFFFFF"> <g id="Group-38" transform="translate(84.000000, 516.000000)"> <g id="previous"> <circle class="b-to-w-fill" id="Oval-Copy" stroke-width="0.5" fill="#000000" cx="24" cy="24" r="23.75"></circle> <polyline id="Path-2-Copy-2" points="28 16 20 24.5 28 33"></polyline> </g> </g> </g> </g></svg></a>').appendTo(navigationArrows);


				this.navigation = navigationArrows.appendTo(currentImageBox);

				if(this.settings.displayThumbnails) {

					// Thumbnails (on the bottom of the gallery).
					var thumbnails = $('<div/>').addClass('mBox-content').appendTo(container);
					var imgCount = $('<div/>').addClass('text-center gallery-pagination-wrapper').appendTo(container);

					// Pagination. Add before anything else.
					$('<p/>', {
						'class': 'gallery-pagination fs-18 color-80 av-roman'
					}).appendTo(imgCount);

					this.updatePagination();

					$('<p/>', {
						'class': 'mb-1 mt-1 mBox-thumbnail-pagination'
					}).appendTo(thumbnails);

					var thumbnailsImages = $('<div/>', {
						'class': 'mBox-images'
					}).prependTo(thumbnails); // Prepend it!

					var width = 100 / this.settings.imagesPerPage + '%'; // Calculate width.

					// Append to thumbnails div.
					this.images.each(function() {

						$(this).addClass('mBox-thumbnail').appendTo(thumbnailsImages);
						$(this).wrap('<div class = "mBox-image" style = "width: ' + width + ';"></div>'); // @ size of the tile should be a size of images per page.

					});
				}

			}

			// Close button. Add last.
			$('<button/>', {
				'class': 'mBox-close point dialog-close'
			}).append('<div class="close-gallery-outer"><div class="close-gallery-inner"></div></div>').prependTo(container);

			return container;

		},

		// Separate method to easily maintain the main container.
		// @return jQuery
		createContainer: function() {

			var container = $('<div/>').attr('id', 'mBox').appendTo('body');  // Very important to append it to the body.#

			// Check if user scrolled down and update the position.
			if(this.scrollPosition > 0) {

				// var top = this.calculatePosition(this.scrollPosition);
                // var top = 0;
				// container.css('top', top);

			}

			return container;

		},

		// Run this method only once.
		createNavigation: function() {

			var navigationCount = $('p.mBox-navigation-txt');

			navigationCount.text('Image ');

			$('<span />', {
				'class': 'mBox-current-image-no',
				'text': (this.currentImageNo + 1)
			}).appendTo(navigationCount);

			if(this.settings.displayTitle == true) {

				var title = (this.currentImage.attr('title')) ? this.currentImage.attr('title') : '';

				$('<span />', {
					'class': 'mBox-current-image-title',
					'text': title
				}).appendTo(navigationCount);

			}

			if(this.imagesCount > 1) {

				var thumbnailPagination = $('p.mBox-thumbnail-pagination');

				navigationCount.append(' of ' + this.imagesCount); // Add to the end.

				// Navigation arrows are hidden by default.
				if((this.currentImageNo + 1) != this.imagesCount) {
					$('.mBox-next').removeClass('hide');
				}
				if(this.currentImageNo != 0) {
					$('.mBox-previous').removeClass('hide');
				}

				// Create pagination if needed.
				if(this.imagesCount > this.settings.imagesPerPage) {

					var totalPages = Math.ceil(this.imagesCount / this.settings.imagesPerPage);

					for(var i = 0; i < totalPages; i++) {
						var circ = $('<i/>', {
							'class': 'fas fa-circle point',
							'data-page-number': i
						}).appendTo(thumbnailPagination);
						if(i === this.currentPageNo) circ.addClass('active'); // Add active class to the 'current page' circle.
					}

					// Move to right thumbnail page if featured image is not the first one.
					if(Math.floor(this.currentImageNo / this.settings.imagesPerPage) !== this.currentPageNo) {

						var left = Math.floor(this.currentImageNo / this.settings.imagesPerPage); // Calculate the right page number.

						$('.mBox-thumbnail-pagination i').removeClass('active');
						$('.mBox-thumbnail-pagination i[data-page-number = ' + left + ']').addClass('active');

						this.currentPageNo = left; // Set new page number before multiplying by 100.

						left = left * 100;

						$('.mBox-images').css('left', '-' + left + '%'); // Animation not needed here.
					}
				}

			}

		},

		// @return jQuery
		createThumbnails: function() {

			var images = new Array();

			this.images.forEach(function(element) {

				var img = $('<img/>', {
					'class': 'img-fluid mBox-thumbnail',
					'src': element.src,
				});

				// Check for attributes.
				if(element.title !== '') img.attr('title', element.title);
				if(element.alt !== '') img.attr('alt', element.alt);

				images.push(img); // Add to images array.

			});

			images = $(images).map(function() {
				return this.toArray(); // it will be an jQuery selection.
			});

			return images;

		},

		// @param no {int}
		navigationUpdate: function(no) {

			this.currentImageNo = no; // Update current image number otherwise arrow navigation is not gonna work.

			$('.mBox-current-image-no').text(no + 1);

			if(this.settings.displayTitle == true) {

				var title = ($(this.currentImage).attr('title')) ? $(this.currentImage).attr('title') : '';

				$('.mBox-current-image-title').text(title);
				$('.mBox-current img').addClass('img-responsive');

			}

			// Update navigation arrows.

			if((no + 1) != this.imagesCount) $('.mBox-next').removeClass('hide');
			else $('.mBox-next').addClass('hide');
			if(no != 0) $('.mBox-previous').removeClass('hide');
			else $('.mBox-previous').addClass('hide');

			// Upadate thumbnails page when moving out of current one using arrows.

			if(this.imagesCount > this.settings.imagesPerPage) {

				if(Math.floor(this.currentImageNo / this.settings.imagesPerPage) !== this.currentPageNo) {

					var left = Math.floor(this.currentImageNo / this.settings.imagesPerPage); // Calculate current page number.

					$('.mBox-thumbnail-pagination i').removeClass('active');
					$('.mBox-thumbnail-pagination i[data-page-number = ' + left + ']').addClass('active');

					this.currentPageNo = left; // Set new page number before multiplying by 100.

					left = left * 100;

					$('.mBox-images').animate({'left': '-' + left + '%'}, 'slow');

				}

			}
		},

		// Run when changing the image.
		// @param newCurrent {jQuery}
		updateCurrentImage: function(newCurrent) {
			this.currentImage.attr('class', 'hidden laazy-lightbox');
			this.currentImage.attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAABCAYAAAA8YlcZAAAAE0lEQVR42mN8+frtf4ZRMAqoDADJaAPC1+m3pQAAAABJRU5ErkJggg==');
			if(newCurrent.attr('name') != '') {
				this.currentImage.attr('data-src', newCurrent.attr('name'));
			}
			else {
				this.currentImage.attr('data-src', newCurrent.attr('src'));
			}
			$('.gallery-lightbox-loader').show();
			img_lazy_load_gallery();

			if(newCurrent.attr('title')) this.currentImage.attr('title', newCurrent.attr('title'));
			else this.currentImage.removeAttr('title');

			if(newCurrent.attr('alt')) this.currentImage.attr('title', newCurrent.attr('alt'));
			else this.currentImage.removeAttr('alt');

		},

		// Some variables needs to be updated when interface is ready.
		updateVars: function() {

			this.currentImage = $('.mBox-current img'); // current_image var points now to the featured image.

			//if(this.imagesCount > 1) this.images = $('.mBox-images img'); // Images array points to the thumbnails right now.

			this.currentImageNo = this.getCurrentNumber(this.currentImage.attr('src'));

		},

		// To find out what is the index number of the current image in the images array, compare all src's.
		// @param src {string}
		// @return int
		getCurrentNumber: function(src) {

			if(this.imagesCount > 1) {

				var index = 0;

				this.images.each(function(no) {
					if(this.name != '') {
						if(this.name === src) {
							index = no;
							return false; // Break the loop here.
						}
					}
					else {
						if(this.src === src) {
							index = no;
							return false; // Break the loop here.
						}
					}
				});

				return index;
			}
			else {
				return 0;
			}

		},

		updatePagination: function() {
			if(this.currentImgNum != null && this.currentImgNum != 'undefined' && this.currentImgNum != 'NAN' && this.totalImgNum != null && this.totalImgNum != 'undefined' && this.totalImgNum != 'NAN') {
				$('.gallery-pagination').html('<span class="color-white">'+this.currentImgNum+'</span>/'+this.totalImgNum);
			}
		},

		// Listen to user interacting with the gallery.
		addEventListeners: function() {

			if(this.settings.keyboardNavigation == true) {

				// Keyboard events
				$(document).on('keyup', $.proxy(function(e) {

					switch(e.keyCode) {
						case 27:
							this.close();
						break;
						case 39:
							this.next();
						break;
						case 37:
							this.previous();
						break;

					}

				}, this));

			}

			// Close events
			$('button.mBox-close').on('click', $.proxy(function() {
				this.close();
			}, this));

			// Listen to the scroll event to keep, box in the view.
			$(window).scroll($.proxy(function() {

				// var top = this.calculatePosition($(window).scrollTop());

				// this.mBox.css('top', top);

			}, this));

			//
			// Images events
			//

			// Change currently displayed image on click on thumbnail.
			$('img.mBox-thumbnail').on('click', $.proxy(function(e) {

				var newSrc = e.target.src; // This variable must be created and used inside next function.

				var no = this.getCurrentNumber(newSrc);

				var newCurrent = $(this.images[no]);

				if(this.currentImage.attr('src') != newSrc) {
					$(this.currentImage).fadeOut('fast', $.proxy(function() {

						this.updateCurrentImage(newCurrent);
						this.navigationUpdate(no);

					}, this)).fadeIn('fast');

				}
			}, this));

			// Next & previous arrows.
			$('.mBox-next').on('click', $.proxy(function(e) {
				this.next();

			}, this));

			$('.mBox-previous').on('click', $.proxy(function(e) {

				this.previous();

			}, this));

			// Thumbnail navigation
			$('.mBox-thumbnail-pagination i').on('click', $.proxy(function(e) {

				var $this = $(e.target);

				var pageNo = $this.data('page-number'); // Get a page number.

				// No need to do anything when clicking on current page.
				if(pageNo !== this.currentPageNo) {
					this.currentPageNo = pageNo;
					$('.mBox-thumbnail-pagination i').removeClass('active');
					$this.addClass('active');

					// Each page takes a 100% width. To move between pages, set left.

					var left = pageNo * 100;
					$('.mBox-images').animate({'left': '-' + left + '%'}, 'slow');
				}
			}, this));

			// Display navigation when mouse enters lightbox.
			if(this.imagesCount > 1 && this.settings.displayNavigation == true) {

				$('.mBox-current').on('mouseenter', $.proxy(function(e) {

					if(this.settings.displayNavigation == true) {

						this.navigation.css('display', 'block');

					}

				}, this));

				$('.mBox-current').on('mouseleave', $.proxy(function(e) {

					if(this.settings.displayNavigation == true) {

						this.navigation.css('display', 'none');

					}

				}, this));

			}


		},

		next: function() {
			
			var nextNo = this.currentImageNo + 1; // Next = increase current by 1 :)
			if(nextNo < this.imagesCount) {
				this.currentImgNum = parseInt(this.currentImgNum) + 1;
				this.updatePagination();


				var newCurrent = $(this.images[nextNo]);

				if(this.currentImage.attr('src') != newCurrent.attr('src')) {

					this.currentImage.fadeOut('fast', $.proxy(function() {

						this.updateCurrentImage(newCurrent);
						this.navigationUpdate(this.currentImageNo + 1);

					}, this)).fadeIn('fast');

				}
			}

		},

		previous: function() {

			var previousNo = this.currentImageNo - 1;
				
			if(previousNo >= 0) {
				this.currentImgNum -= 1;
				this.updatePagination();

				var newCurrent = $(this.images[previousNo]);

				if(this.currentImage.attr('src') != newCurrent.attr('src')) {

					this.currentImage.fadeOut('fast', $.proxy(function() {

						this.updateCurrentImage(newCurrent);
						this.navigationUpdate(this.currentImageNo - 1);

					}, this)).fadeIn('fast');

				}

			}

		},

		open: function() {

			if($(document).find('.body-overlay').length == 0) $('body').append('<div class = "body-overlay"></div>'); // Overlay.

			this.mBox.fadeIn('slow');

		},

		close: function() {

			$('.body-overlay').fadeOut(function() {

				this.remove(); // Run after fade out is completed.

			});

			this.mBox.fadeOut(function() {

				this.remove();

			});

		},

		destroy: function() {

			this.mBox.remove();

		}

	}

	// Register new jQuery plugin.
	$.fn.mBox = function(options) {

		$(this).on('click', function(e) {

			var clicked = e.target;

			if(clicked.tagName == 'IMG') {

				new MBox(this, clicked, options);

			}

		});

		return this; // return this to enable method chaining.

	}

}(jQuery));
/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
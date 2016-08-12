/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*!
 * fullPage 2.8.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
          return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    // Default options for iScroll.js used when using scrollOverflow
    var iscrollOptions = {
        scrollbars: true,
        mouseWheel: true,
        hideScrollbars: false,
        fadeScrollbars: false,
        disableMouse: true
    };

    $.fn.fullpage = function(options) {
        //only once my friend!
        if($('html').hasClass(ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowHandler: iscrollHandler,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,


            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
        iscrollOptions.click = isTouch; // see #2035

        //extending iScroll options with the user custom ones
        iscrollOptions = $.extend(iscrollOptions, options.scrollOverflowOptions);

        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        FP.setAutoScrolling = function(value, type){
            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                FP.setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                FP.setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                silentScroll(0);

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        };

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        FP.setRecordHistory = function(value, type){
            setVariableState('recordHistory', value, type);
        };

        /**
        * Defines the scrolling speed
        */
        FP.setScrollingSpeed = function(value, type){
            setVariableState('scrollingSpeed', value, type);
        };

        /**
        * Sets fitToSection
        */
        FP.setFitToSection = function(value, type){
            setVariableState('fitToSection', value, type);
        };

        /**
        * Sets lockAnchors
        */
        FP.setLockAnchors = function(value){
            options.lockAnchors = value;
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        FP.setMouseWheelScrolling = function (value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        FP.setAllowScrolling = function (value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else if(value){
                FP.setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                FP.setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
        */
        FP.setKeyboardScrolling = function (value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                options.keyboardScrolling = value;
            }
        };

        /**
        * Moves the page up one section.
        */
        FP.moveSectionUp = function(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        };

        /**
        * Moves the page down one section.
        */
        FP.moveSectionDown = function (){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        };

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        FP.silentMoveTo = function(sectionAnchor, slideAnchor){
            FP.setScrollingSpeed (0, 'internal');
            FP.moveTo(sectionAnchor, slideAnchor);
            FP.setScrollingSpeed (originals.scrollingSpeed, 'internal');
        };

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        FP.moveTo = function (sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        };

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        FP.moveSlideRight = function(section){
            moveSlide('next', section);
        };

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        FP.moveSlideLeft = function(section){
            moveSlide('prev', section);
        };

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        FP.reBuild = function(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height();  //updating global var

            $(SECTION_SEL).each(function(){
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if(options.scrollOverflow){
                    if(slides.length){
                        slides.each(function(){
                            createSlimScrolling($(this));
                        });
                    }else{
                        createSlimScrolling($(this));
                    }
                }

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                FP.silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        };

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        FP.setResponsive = function (active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    FP.setAutoScrolling(false, 'internal');
                    FP.setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                }
            }
            else if(isResponsive){
                FP.setAutoScrolling(originals.autoScrolling, 'internal');
                FP.setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
            }
        };

        if($(this).length){
            init();
            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;


            setOptionsFromDOM();

            prepareDom();
            FP.setAllowScrolling(true);

            FP.setAutoScrolling(options.autoScrolling, 'internal');

            //the starting point is a slide?
            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);

            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( activeSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0))){
                silentLandscapeScroll(activeSlide);
            }

            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents(){
            $window
                //when scrolling...
                .on('scroll', scrollHandler)

                //detecting any change on the URL to scroll to the given anchor link
                //(a way to detect back history button as we play with the hashes on the URL)
                .on('hashchange', hashChangeHandler)

                //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
                .blur(blurHandler)

                //when resizing the site, we adjust the heights of the sections, slimScroll...
                .resize(resizeHandler);

            $document
                //Sliding with arrow keys, both, vertical and horizontal
                .keydown(keydownHandler)

                //to prevent scrolling while zooming
                .keyup(keyUpHandler)

                //Scrolls to the section when clicking the navigation bullet
                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

                //Scrolls the slider to the given slide destination for the given section
                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                $document.on('mouseenter', options.normalScrollElements, function () {
                    FP.setMouseWheelScrolling(false);
                });

                $document.on('mouseleave', options.normalScrollElements, function(){
                    FP.setMouseWheelScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                options.anchors = sections.filter('[data-anchor]').map(function(){
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltipos option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function(){
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage optionss.
        */
        function prepareDom(){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initilizing it again

            addInternalSelectors();

             //styling the sections / slides / menu
            $(SECTION_SEL).each(function(index){
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();
            enableVidemoAPI();

            if(options.scrollOverflow){
                if(document.readyState === 'complete'){
                    createSlimScrollingHandler();
                }
                //after DOM and images are loaded
                $window.on('load', createSlimScrollingHandler);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function(index) {
                $(this).css('width', slideWidth + '%');

                if(options.verticalCentered){
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
                silentLandscapeScroll(startingSlide);
            }else{
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }

            section.css('height', windowsHeight + 'px');

            if(options.paddingTop){
                section.css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(section.hasClass(ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            //adding internal class names to void problem with common ones
            container.find(options.sectionSelector).each(function(){
                $(this).addClass(SECTION);
            });
            container.find(options.slideSelector).each(function(){
                $(this).addClass(SLIDE);
            });
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function() {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /**
        * Creates the slim scroll scrollbar for the sections and slides inside them.
        */
        function createSlimScrollingHandler(){
            $(SECTION_SEL).each(function(){
                var slides = $(this).find(SLIDE_SEL);

                if(slides.length){
                    slides.each(function(){
                        createSlimScrolling($(this));
                    });
                }else{
                    createSlimScrolling($(this));
                }

            });
            afterRenderActions();
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            container.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var sign = getUrlParamSign($(this).attr('src'));
                $(this).attr('src', $(this).attr('src') + sign + 'enablejsapi=1');
            });
        }

        /*
        * Enables the Vimeo videos API so we can control their flow if necessary.
        */
        function enableVidemoAPI(){
            container.find('iframe[src*="player.vimeo.com/"]').each(function(){
                var sign = getUrlParamSign($(this).attr('src'));
                $(this).attr('src', $(this).attr('src') + sign + 'api=1');
            });
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            if(options.scrollOverflowHandler.afterRender){
                options.scrollOverflowHandler.afterRender(section);
            }
            lazyLoad(section);
            playMedia(section);

            $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            $.isFunction( options.afterRender ) && options.afterRender.call(container);
        }


        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + ($window.height() / 2.0);
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections =  document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't take most of the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);

                    if(activeSlide.length){
                        var slideAnchorLink = activeSlide.data('anchor');
                        var slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;

                            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                        }
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking fitToSection again in case it was set to false before the timeout delay
                        if(canScroll && options.fitToSection){
                            //allows to scroll to an active section and
                            //if the section is already active, we prevent firing callbacks
                            if($(SECTION_ACTIVE_SEL).is(currentSection)){
                                isResizing = true;
                            }
                            scrollPage($(SECTION_ACTIVE_SEL));

                            isResizing = false;
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if(movement == 'up'){
                return bottom >= ($window.scrollTop() + $window.height());
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            if (!isScrollAllowed.m[type]){
                return;
            }
            var check, scrollSection;

            if(type == 'down'){
                check = 'bottom';
                scrollSection = FP.moveSectionDown;
            }else{
                check = 'top';
                scrollSection = FP.moveSectionUp;
            }

            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }


        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

                if (canScroll && !slideMoving) { //if theres any #
                    var touchEvents = getEventsPage(e);

                    touchEndY = touchEvents.y;
                    touchEndX = touchEvents.x;

                    //if movement in the X axys is greater than in the Y and the currect section has slides...
                    if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
                            if (touchStartX > touchEndX) {
                                if(isScrollAllowed.m.right){
                                    FP.moveSlideRight(); //next
                                }
                            } else {
                                if(isScrollAllowed.m.left){
                                    FP.moveSlideLeft(); //prev
                                }
                            }
                        }
                    }

                    //vertical scrolling (only when autoScrolling is enabled)
                    else if(options.autoScrolling){

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                            if (touchStartY > touchEndY) {
                                scrolling('down', scrollable);
                            } else if (touchEndY > touchStartY) {
                                scrolling('up', scrollable);
                            }
                        }
                    }
                }
            }

        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement (el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements) ) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $htmlBody.stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down', scrollable);

                        //scrolling up?
                        }else {
                            scrolling('up', scrollable);
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'prev'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'prev'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because he `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $(SLIDE_ACTIVE_SEL).each(function(){
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown =  elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(element.outerHeight() > windowsHeight){
                //scrolling up? 
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

            if(v.activeSlide.length){
                var slideAnchorLink = v.activeSlide.data('anchor');
                var slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if($.isFunction(options.onLeave) && !v.localIsResizing){
                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
                    return;
                }
            }

            stopMedia(v.activeSection);

            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);
            options.scrollOverflowHandler.onLeave();


            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {
                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = WRAPPER_SEL;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            }
            else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
            options.scrollOverflowHandler.afterLoad();

            playMedia(v.element);
            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            var destiny = getSlideOrSection(destiny);

            destiny.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                $(this).attr('src', $(this).data('src'));
                $(this).removeAttr('data-src');

                if($(this).is('source')){
                    $(this).closest('video').get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var destiny = getSlideOrSection(destiny);

            //playing HTML5 media elements
            destiny.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            destiny.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && element.hasAttribute('data-autoplay')){
                    element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }
            });
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var destiny = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            destiny.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            destiny.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')){
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if( slide.length ) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var section = decodeURIComponent(value[0]);
            var slide = decodeURIComponent(value[1]);

            if(section){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(section, slide);
                }else{
                    FP.silentMoveTo(section, slide);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var value =  window.location.hash.replace('#', '').split('/');
                var section = decodeURIComponent(value[0]);
                var slide = decodeURIComponent(value[1]);

                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);


                if(section.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
                        scrollPageAndSlide(section, slide);
                    }
                }
            }
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {

            clearTimeout(keydownId);

            var activeElement = $(':focus');

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    FP.moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    FP.moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        FP.moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        FP.moveSectionUp();
                        break;
                    }
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        FP.moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        FP.moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        FP.moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        FP.moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        FP.moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    FP.moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    FP.moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny){
            var destinyPos = destiny.position();
            var slideIndex = destiny.index();
            var section = slides.closest(SECTION_SEL);
            var sectionIndex = section.index(SECTION_SEL);
            var anchorLink = section.data('anchor');
            var slidesNav = section.find(SLIDES_NAV_SEL);
            var slideAnchor = getAnchor(destiny);
            var prevSlide = section.find(SLIDE_ACTIVE_SEL);

            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            var localIsResizing = isResizing;

            if(options.onSlideLeave){
                var prevSlideIndex = prevSlide.index();
                var xMovement = getXmovement(prevSlideIndex, slideIndex);

                //if the site is not just resizing and readjusting the slides
                if(!localIsResizing && xMovement!=='none'){
                    if($.isFunction( options.onSlideLeave )){
                        if(options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement, slideIndex ) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }
            stopMedia(prevSlide);

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            if(!localIsResizing){
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE)){
                setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
            }

            var afterSlideLoads = function(){
                //if the site is not just resizing and readjusting the slides
                if(!localIsResizing){
                    $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
                }
                playMedia(destiny);

                //letting them slide again
                slideMoving = false;
            };

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL), options.scrollingSpeed>0).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    afterSlideLoads();
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function() {

                    afterSlideLoads();
                });
            }

            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        FP.reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    FP.reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                FP.setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                FP.setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                FP.setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass(NO_TRANSITION);
        }

        /**
         * Activating the website navigation dots according to the given slide name.
         */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if(name){
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                }else{
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
         * Activating the website main menu elements according to the given slide name.
         */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        /**
        * Checks if the element needs scrollbar and if the user wants to apply it.
        * If so it creates it.
        *
        * @param {Object} element   jQuery object of the section or slide
        */
        function createSlimScrolling(element){
            //User doesn't want scrollbar here? Sayonara baby!
            if(element.hasClass('fp-noscroll')) return;

            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            var scrollOverflowHandler = options.scrollOverflowHandler;
            var wrap = scrollOverflowHandler.wrapContent();
            //in case element is a slide
            var section = element.closest(SECTION_SEL);
            var scrollable = scrollOverflowHandler.scrollable(element);
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if(scrollable.length){
                contentHeight = scrollOverflowHandler.scrollHeight(element);
            }else{
                contentHeight = element.get(0).scrollHeight;
                if(options.verticalCentered){
                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if ( contentHeight > scrollHeight) {
                //did we already have an scrollbar ? Updating it
                if(scrollable.length){
                    scrollOverflowHandler.update(element, scrollHeight);
                }
                //creating the scrolling
                else{
                    if(options.verticalCentered){
                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
                    }else{
                        element.wrapInner(wrap);
                    }
                    scrollOverflowHandler.create(element, scrollHeight);
                }
            }
            //removing the scrolling when it is not necessary anymore
            else{
                scrollOverflowHandler.remove(element);
            }

            //undo
            element.css('overflow', '');
        }

        function addTableClass(element){
            element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass(SECTION)){
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass(NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            //section
            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( (sectionAnchor -1) );
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

            if(!slide.length){
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor){
            if(typeof slideAnchor !== 'undefined'){
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny =  getSlideByAnchor(slideAnchor, section);

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if(typeof anchor === 'undefined'){
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container
                .on('mousedown', mouseDownHandler)
                .on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container
                .off('mousedown', mouseDownHandler)
                .off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down);
                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            FP.setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            FP.setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            if(options.scrollBar){
                container.scrollTop(top);
            }
            else if (options.css3) {
                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else {
                container.css('top', -top);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            switch (direction){
                case 'up': isScrollAllowed[type].up = value; break;
                case 'down': isScrollAllowed[type].down = value; break;
                case 'left': isScrollAllowed[type].left = value; break;
                case 'right': isScrollAllowed[type].right = value; break;
                case 'all':
                    if(type == 'm'){
                        FP.setAllowScrolling(value);
                    }else{
                        FP.setKeyboardScrolling(value);
                    }
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        FP.destroy = function(all){
            FP.setAutoScrolling(false, 'internal');
            FP.setAllowScrolling(false);
            FP.setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        };

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                $(this).attr('src', $(this).data('src'));
                $(this).removeAttr('data-src');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
                options.scrollOverflowHandler.remove($(this));
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function(index, value){
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            if($('html').hasClass(ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollBar && options.scrollOverflow){
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && options.scrollBar){
                options.continuousVertical = false;
                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function() {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function() {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }
    }; //end of $.fn.fullpage

    if(typeof IScroll !== 'undefined'){
        /*
        * Turns iScroll `mousewheel` option off dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener('wheel', this);
            this.wrapper.addEventListener('mousewheel', this);
            this.wrapper.addEventListener('DOMMouseScroll', this);
        };

        /*
        * Turns iScroll `mousewheel` option on dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener('wheel', this);
            this.wrapper.removeEventListener('mousewheel', this);
            this.wrapper.removeEventListener('DOMMouseScroll', this);
        };
    }

    /**
     * An object to handle overflow scrolling.
     * This uses jquery.slimScroll to accomplish overflow scrolling.
     * It is possible to pass in an alternate scrollOverflowHandler
     * to the fullpage.js option that implements the same functions
     * as this handler.
     *
     * @type {Object}
     */
    var iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],

        /**
        * Turns off iScroll for the destination section.
        * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
        * scroll the destination section/slide before the sections animations ends.
        */
        onLeave: function(){
            var scroller = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL).data('iscrollInstance');
            if(typeof scroller !== 'undefined' && scroller){
                scroller.wheelOff();
            }
        },

        // Turns on iScroll on section load
        afterLoad: function(){
            var scroller = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL).data('iscrollInstance');
            if(typeof scroller !== 'undefined' && scroller){
                  scroller.wheelOn();
            }
        },

        /**
         * Called when overflow scrolling is needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        create: function(element, scrollHeight) {
            var scrollable = element.find(SCROLLABLE_SEL);

            scrollable.height(scrollHeight);
            scrollable.each(function() {
                var $this = jQuery(this);
                var iScrollInstance = $this.data('iscrollInstance');
                if (iScrollInstance) {
                    $.each(iscrollHandler.iScrollInstances, function(){
                        $(this).destroy();
                    });
                }

                iScrollInstance = new IScroll($this.get(0), iscrollOptions);
                iscrollHandler.iScrollInstances.push(iScrollInstance);
                $this.data('iscrollInstance', iScrollInstance);
            });
        },

        /**
         * Return a boolean depending on whether the scrollable element is a
         * the end or at the start of the scrolling depending on the given type.
         *
         * @param  {String}  type       Either 'top' or 'bottom'
         * @param  {Object}  scrollable jQuery object for the scrollable element
         * @return {Boolean}
         */
        isScrolled: function(type, scrollable) {
            var scroller = scrollable.data('iscrollInstance');
            
            //no scroller? 
            if (!scroller) {
                return true;
            }

            if (type === 'top') {
                return scroller.y >= 0 && !scrollable.scrollTop();
            } else if (type === 'bottom') {
                return (0 - scroller.y) + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        },

        /**
         * Returns the scrollable element for the given section.
         * If there are landscape slides, will only return a scrollable element
         * if it is in the active slide.
         *
         * @param  {Object}  activeSection jQuery object containing current section
         * @return {Boolean}
         */
        scrollable: function(activeSection){
            // if there are landscape slides, we check if the scrolling bar is in the current one or not
            if (activeSection.find(SLIDES_WRAPPER_SEL).length) {
                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
            }
            return activeSection.find(SCROLLABLE_SEL);
        },

        /**
         * Returns the scroll height of the wrapped content.
         * If this is larger than the window height minus section padding,
         * overflow scrolling is needed.
         *
         * @param  {Object} element jQuery object containing current section
         * @return {Number}
         */
        scrollHeight: function(element) {
            return element.find(SCROLLABLE_SEL).children().first().get(0).scrollHeight;
        },

        /**
         * Called when overflow scrolling is no longer needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         */
        remove: function(element) {
            var scrollable = element.find(SCROLLABLE_SEL);
            if (scrollable.length) {
                var iScrollInstance = scrollable.data('iscrollInstance');
                iScrollInstance.destroy();

                scrollable.data('iscrollInstance', null);
            }
            element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
        },

        /**
         * Called when overflow scrolling has already been setup but the
         * window height has potentially changed.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        update: function(element, scrollHeight) {
            //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
            //short period of time.
            //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
            clearTimeout(iscrollHandler.refreshId);
            iscrollHandler.refreshId = setTimeout(function(){
                $.each(iscrollHandler.iScrollInstances, function(){
                    $(this).get(0).refresh();
                });
            }, 150);

            //updating the wrappers height
            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
        },

        /**
         * Called to get any additional elements needed to wrap the section
         * content in order to facilitate overflow scrolling.
         *
         * @return {String|Object} Can be a string containing HTML,
         *                         a DOM element, or jQuery object.
         */
        wrapContent: function() {
            return '<div class="' + SCROLLABLE + '"><div class="fp-scroller"></div></div>';
        }
    };

});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));



$('.jsChangeLanguageItem').on('click', function () {
  $(this).addClass('_active').siblings().removeClass('_active');
});
$(document).ready(function() {
  $('#fullpage').fullpage({
    // fixedElements: '.footer',
    normalScrollElements: '.footer',
    paddingTop: '100px',
    slidesNavigation: false,
    controlArrows: false,
    afterRender: function(){
      $('.js-slick').slick({
        infinite: true,
        rtl: false,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '.js-slick-arrow-prev',
        nextArrow: '.js-slick-arrow-next',
        draggable: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }]
      });

      $('.js-slick-vertical').slick({
        // infinite: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        // prevArrow: '.js-slick-arrow-prev',
        // nextArrow: '.js-slick-arrow-next',
        draggable: true,
        vertical: true,
        // verticalSwiping: true,
        // centerMode: true,
        autoplay: true,
        // adaptiveHeight: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }]
      });
      $('.slick-current').next().addClass('slick-vertical-slide--active');
      $('.js-slick-vertical').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-current').next().addClass('slick-vertical-slide--active').siblings().removeClass('slick-vertical-slide--active');
      });
    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      if(index == 9 && direction =='down'){
        $('.header').slideUp(300);
      }

      else if(index == 10 && direction == 'up'){
        $('.header').slideDown(300);
      }
    }
  });
});


$('a[data-click="modal"]').click(function (e) {
  e.preventDefault();
  $('.modal, .mask').addClass('active');
});

$('.mask').click(function () {
  $('.mask, .modal').removeClass('active');
});









// $(document).ready(function () {
  // $('.js-slick').slick({
  // // normal options...
  // infinite: false,
  // adaptiveHeight: true,

  // slidesToShow: 1,
  // arrows: true,
  // prevArrow: '.js-slick-arrow-prev',
  // nextArrow: '.js-slick-arrow-next',
  // draggable: true,
  // // the magic
  // responsive: [{

  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       infinite: true
  //     }

  //   }, {

  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       // dots: true
  //     }

  //   }]
  // });
// });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzIiwibm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2pxdWVyeS5mdWxsUGFnZS5qcyIsIm5vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyIsIm1hcmt1cC9jb21wb25lbnRzL2NhbGwtbWUvY2FsbC1tZS5qcyIsIm1hcmt1cC9jb21wb25lbnRzL2NhbGxiYWNrLWZvcm0vY2FsbGJhY2stZm9ybS5qcyIsIm1hcmt1cC9jb21wb25lbnRzL2NoYW5nZS1sYW5ndWFnZS9jaGFuZ2UtbGFuZ3VhZ2UuanMiLCJtYXJrdXAvY29tcG9uZW50cy9mdWxscGFnZS5qcy9mdWxscGFnZS5qcyIsIm1hcmt1cC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJtYXJrdXAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwibWFya3VwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuanMiLCJtYXJrdXAvY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXQuanMiLCJtYXJrdXAvY29tcG9uZW50cy9zZWN0aW9uLWNvbnRhY3Qvc2VjdGlvbi1jb250YWN0LmpzIiwibWFya3VwL2NvbXBvbmVudHMvc2VjdGlvbi1lZHVjYXRpb24vc2VjdGlvbi1lZHVjYXRpb24uanMiLCJtYXJrdXAvY29tcG9uZW50cy9zZWN0aW9uLWVsaXRlL3NlY3Rpb24tZWxpdGUuanMiLCJtYXJrdXAvY29tcG9uZW50cy9zZWN0aW9uLWdhbGxlcnkvc2VjdGlvbi1nYWxsZXJ5LmpzIiwibWFya3VwL2NvbXBvbmVudHMvc2VjdGlvbi1tYXAvc2VjdGlvbi1tYXAuanMiLCJtYXJrdXAvY29tcG9uZW50cy9zZWN0aW9uLXJldmlld3Mvc2VjdGlvbi1yZXZpZXdzLmpzIiwibWFya3VwL2NvbXBvbmVudHMvc2VjdGlvbi10ZWFjaGVycy9zZWN0aW9uLXRlYWNoZXJzLmpzIiwibWFya3VwL2NvbXBvbmVudHMvc2VjdGlvbi10b3Avc2VjdGlvbi10b3AuanMiLCJtYXJrdXAvY29tcG9uZW50cy9zbGljay5qcy9zbGljay5qcyIsIm1hcmt1cC9jb21wb25lbnRzL3RvcC1tZW51L3RvcC1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2gzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1MEZBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My4xLjAgfCAoYykgalF1ZXJ5IEZvdW5kYXRpb24gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZixmPWMuc2xpY2UsZz1jLmNvbmNhdCxoPWMucHVzaCxpPWMuaW5kZXhPZixqPXt9LGs9ai50b1N0cmluZyxsPWouaGFzT3duUHJvcGVydHksbT1sLnRvU3RyaW5nLG49bS5jYWxsKE9iamVjdCksbz17fTtmdW5jdGlvbiBwKGEsYil7Yj1ifHxkO3ZhciBjPWIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtjLnRleHQ9YSxiLmhlYWQuYXBwZW5kQ2hpbGQoYykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKX12YXIgcT1cIjMuMS4wXCIscj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgci5mbi5pbml0KGEsYil9LHM9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHQ9L14tbXMtLyx1PS8tKFthLXpdKS9nLHY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtyLmZuPXIucHJvdG90eXBlPXtqcXVlcnk6cSxjb25zdHJ1Y3RvcjpyLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZi5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/YTwwP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTpmLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1yLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gci5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKGE8MD9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZjPGI/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmgsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxyLmV4dGVuZD1yLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fHIuaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aDxpO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihyLmlzUGxhaW5PYmplY3QoZCl8fChlPXIuaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmci5pc0FycmF5KGMpP2M6W10pOmY9YyYmci5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1yLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sci5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisocStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1yLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9ci50eXBlKGEpO3JldHVybihcIm51bWJlclwiPT09Ynx8XCJzdHJpbmdcIj09PWIpJiYhaXNOYU4oYS1wYXJzZUZsb2F0KGEpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiEoIWF8fFwiW29iamVjdCBPYmplY3RdXCIhPT1rLmNhbGwoYSkpJiYoIShiPWUoYSkpfHwoYz1sLmNhbGwoYixcImNvbnN0cnVjdG9yXCIpJiZiLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJm0uY2FsbChjKT09PW4pKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9qW2suY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7cChhKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodCxcIm1zLVwiKS5yZXBsYWNlKHUsdil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZih3KGEpKXtmb3IoYz1hLmxlbmd0aDtkPGM7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShzLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHcoT2JqZWN0KGEpKT9yLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmguY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTppLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7ZDxjO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2Y8ZztmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPTAsaD1bXTtpZih3KGEpKWZvcihkPWEubGVuZ3RoO2Y8ZDtmKyspZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZiBpbiBhKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBnLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksci5pc0Z1bmN0aW9uKGEpKXJldHVybiBkPWYuY2FsbChhcmd1bWVudHMsMiksZT1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZi5jYWxsKGFyZ3VtZW50cykpKX0sZS5ndWlkPWEuZ3VpZD1hLmd1aWR8fHIuZ3VpZCsrLGV9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Om99KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihyLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxyLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2pbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHcoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1yLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09YyYmIXIuaXNXaW5kb3coYSkmJihcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpfXZhciB4PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPXt9Lmhhc093blByb3BlcnR5LEQ9W10sRT1ELnBvcCxGPUQucHVzaCxHPUQucHVzaCxIPUQuc2xpY2UsST1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsSz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTD1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsTT1cIlxcXFxbXCIrSytcIiooXCIrTCtcIikoPzpcIitLK1wiKihbKl4kfCF+XT89KVwiK0srXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitMK1wiKSl8KVwiK0srXCIqXFxcXF1cIixOPVwiOihcIitMK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitNK1wiKSopfC4qKVxcXFwpfClcIixPPW5ldyBSZWdFeHAoSytcIitcIixcImdcIiksUD1uZXcgUmVnRXhwKFwiXlwiK0srXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0srXCIrJFwiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrSytcIiosXCIrSytcIipcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0srXCIqKFs+K35dfFwiK0srXCIpXCIrSytcIipcIiksUz1uZXcgUmVnRXhwKFwiPVwiK0srXCIqKFteXFxcXF0nXFxcIl0qPylcIitLK1wiKlxcXFxdXCIsXCJnXCIpLFQ9bmV3IFJlZ0V4cChOKSxVPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0wrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTCtcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0wrXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrSytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0srXCIqKD86KFsrLV18KVwiK0srXCIqKFxcXFxkKyl8KSlcIitLK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0orXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitLK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitLK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitLK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxXPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWD0vXmhcXGQkL2ksWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sJD0vWyt+XS8sXz1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrSytcIj98KFwiK0srXCIpfC4pXCIsXCJpZ1wiKSxhYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6ZDwwP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxiYT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXHg4MC1cXHVGRkZGXFx3LV0vZyxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBiP1wiXFwwXCI9PT1hP1wiXFx1ZmZmZFwiOmEuc2xpY2UoMCwtMSkrXCJcXFxcXCIrYS5jaGFyQ29kZUF0KGEubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIithfSxkYT1mdW5jdGlvbigpe20oKX0sZWE9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7Ry5hcHBseShEPUguY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRFt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7Rz17YXBwbHk6RC5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtGLmFwcGx5KGEsSC5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscz1iJiZiLm93bmVyRG9jdW1lbnQsdz1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXcmJjkhPT13JiYxMSE9PXcpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT13JiYobD1aLmV4ZWMoYSkpKWlmKGY9bFsxXSl7aWYoOT09PXcpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZihzJiYoaj1zLmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihsWzJdKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1sWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09dylzPWIscj1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYmEsY2EpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLG89ZyhhKSxoPW8ubGVuZ3RoO3doaWxlKGgtLSlvW2hdPVwiI1wiK2srXCIgXCIrc2Eob1toXSk7cj1vLmpvaW4oXCIsXCIpLHM9JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxifWlmKHIpdHJ5e3JldHVybiBHLmFwcGx5KGQscy5xdWVyeVNlbGVjdG9yQWxsKHIpKSxkfWNhdGNoKHgpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFAsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiZhLnNvdXJjZUluZGV4LWIuc291cmNlSW5kZXg7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJsYWJlbFwiaW4gYiYmYi5kaXNhYmxlZD09PWF8fFwiZm9ybVwiaW4gYiYmYi5kaXNhYmxlZD09PWF8fFwiZm9ybVwiaW4gYiYmYi5kaXNhYmxlZD09PSExJiYoYi5pc0Rpc2FibGVkPT09YXx8Yi5pc0Rpc2FibGVkIT09IWEmJihcImxhYmVsXCJpbiBifHwhZWEoYikpIT09YSl9fWZ1bmN0aW9uIHBhKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISFiJiZcIkhUTUxcIiE9PWIubm9kZU5hbWV9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksdiE9PW4mJihlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1ZLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwKXJldHVybiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSl9LHI9W10scT1bXSwoYy5xc2E9WS50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0srXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0srXCIqKD86dmFsdWV8XCIrSitcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXthLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitLK1wiKlsqXiR8IX5dPz1cIiksMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxvLmFwcGVuZENoaWxkKGEpLmRpc2FibGVkPSEwLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9WS50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiKlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE4pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9WS50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8WS50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0koayxhKS1JKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SShrLGEpLUkoayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/bGEoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShTLFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmQy5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXNjYXBlPWZ1bmN0aW9uKGEpe3JldHVybihhK1wiXCIpLnJlcGxhY2UoYmEsY2EpfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6VixhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShfLGFhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKF8sYWEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBWLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVC50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0srXCIpXCIrYStcIihcIitLK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6IWJ8fChlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKE8sXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWImJihlPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SShhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUCxcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoXyxhYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFUudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOm9hKCExKSxkaXNhYmxlZDpvYSghMCksY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnBhKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6cGEoZnVuY3Rpb24oYSxiLGMpe3JldHVybltjPDA/YytiOmNdfSksZXZlbjpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHJhKCl7fXJhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcmEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1RLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1SLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFAsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVZbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHNhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2I8YztiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1iLm5leHQsZj1lfHxkLGc9YyYmXCJwYXJlbnROb2RlXCI9PT1mLGg9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxlKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpcmV0dXJuIGEoYixjLGUpfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG09W3csaF07aWYoaSl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZykmJmEoYixjLGkpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKWlmKGw9Ylt1XXx8KGJbdV09e30pLGs9bFtiLnVuaXF1ZUlEXXx8KGxbYi51bmlxdWVJRF09e30pLGUmJmU9PT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpYj1iW2RdfHxiO2Vsc2V7aWYoKGo9a1tmXSkmJmpbMF09PT13JiZqWzFdPT09aClyZXR1cm4gbVsyXT1qWzJdO2lmKGtbZl09bSxtWzJdPWEoYixjLGkpKXJldHVybiEwfX19ZnVuY3Rpb24gdWEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZDxlO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aDxpO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB4YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD14YShkKSksZSYmIWVbdV0mJihlPXhhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHZhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6d2EocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXdhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9JKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj13YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6Ry5hcHBseShnLHIpfSl9ZnVuY3Rpb24geWEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD10YShmdW5jdGlvbihhKXtyZXR1cm4gSShiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07aTxmO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVt0YSh1YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtlPGY7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4geGEoaT4xJiZ1YShtKSxpPjEmJnNhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUCxcIiQxXCIpLGMsaTxlJiZ5YShhLnNsaWNlKGksZSkpLGU8ZiYmeWEoYT1hLnNsaWNlKGUpKSxlPGYmJnNhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHVhKG0pfWZ1bmN0aW9uIHphKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1FLmNhbGwoaSkpO3U9d2EodSl9Ry5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXlhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx6YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVYubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLCQudGVzdChqWzBdLnR5cGUpJiZxYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmc2EoaiksIWEpcmV0dXJuIEcuYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsIWJ8fCQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtpZighYylyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtpZighYyYmXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBhLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEosZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKCFjKXJldHVybiBhW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtyLmZpbmQ9eCxyLmV4cHI9eC5zZWxlY3RvcnMsci5leHByW1wiOlwiXT1yLmV4cHIucHNldWRvcyxyLnVuaXF1ZVNvcnQ9ci51bmlxdWU9eC51bmlxdWVTb3J0LHIudGV4dD14LmdldFRleHQsci5pc1hNTERvYz14LmlzWE1MLHIuY29udGFpbnM9eC5jb250YWlucyxyLmVzY2FwZVNlbGVjdG9yPXguZXNjYXBlO3ZhciB5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZyKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sej1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sQT1yLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LEI9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2ksQz0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gRChhLGIsYyl7aWYoci5pc0Z1bmN0aW9uKGIpKXJldHVybiByLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiByLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKEMudGVzdChiKSlyZXR1cm4gci5maWx0ZXIoYixhLGMpO2I9ci5maWx0ZXIoYixhKX1yZXR1cm4gci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09YyYmMT09PWEubm9kZVR5cGV9KX1yLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/ci5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpyLmZpbmQubWF0Y2hlcyhhLHIuZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sci5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMubGVuZ3RoLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2socihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2I8ZDtiKyspaWYoci5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihjPXRoaXMucHVzaFN0YWNrKFtdKSxiPTA7YjxkO2IrKylyLmZpbmQoYSxlW2JdLGMpO3JldHVybiBkPjE/ci51bmlxdWVTb3J0KGMpOmN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhRCh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZBLnRlc3QoYSk/cihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBFLEY9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sRz1yLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxFLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkYuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiByP2JbMF06YixyLm1lcmdlKHRoaXMsci5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSksQi50ZXN0KGVbMV0pJiZyLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYilyLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJih0aGlzWzBdPWYsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6ci5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKHIpOnIubWFrZUFycmF5KGEsdGhpcyl9O0cucHJvdG90eXBlPXIuZm4sRT1yKGQpO3ZhciBIPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEk9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ci5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1yKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGM7YSsrKWlmKHIuY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPVwic3RyaW5nXCIhPXR5cGVvZiBhJiZyKGEpO2lmKCFBLnRlc3QoYSkpZm9yKDtkPGU7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP3IudW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aS5jYWxsKHIoYSksdGhpc1swXSk6aS5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLnVuaXF1ZVNvcnQoci5tZXJnZSh0aGlzLmdldCgpLHIoYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gSihhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9ci5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEooYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBKKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4geigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHooYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxyLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1yLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1yLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoSVthXXx8ci51bmlxdWVTb3J0KGUpLEgudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBLPS9cXFMrL2c7ZnVuY3Rpb24gTChhKXt2YXIgYj17fTtyZXR1cm4gci5lYWNoKGEubWF0Y2goSyl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9ci5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9MKGEpOnIuZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1hLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe3IuZWFjaChiLGZ1bmN0aW9uKGIsYyl7ci5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ci50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1yLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGM8PWgmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9yLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8Ynx8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfTtmdW5jdGlvbiBNKGEpe3JldHVybiBhfWZ1bmN0aW9uIE4oYSl7dGhyb3cgYX1mdW5jdGlvbiBPKGEsYixjKXt2YXIgZDt0cnl7YSYmci5pc0Z1bmN0aW9uKGQ9YS5wcm9taXNlKT9kLmNhbGwoYSkuZG9uZShiKS5mYWlsKGMpOmEmJnIuaXNGdW5jdGlvbihkPWEudGhlbik/ZC5jYWxsKGEsYixjKTpiLmNhbGwodm9pZCAwLGEpfWNhdGNoKGEpe2MuY2FsbCh2b2lkIDAsYSl9fXIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihiKXt2YXIgYz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGQ9XCJwZW5kaW5nXCIsZT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGhlbihudWxsLGEpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGIpe3IuZWFjaChjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5pc0Z1bmN0aW9uKGFbZFs0XV0pJiZhW2RbNF1dO2ZbZFsxXV0oZnVuY3Rpb24oKXt2YXIgYT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZyLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhiLm5vdGlmeSkuZG9uZShiLnJlc29sdmUpLmZhaWwoYi5yZWplY3QpOmJbZFswXStcIldpdGhcIl0odGhpcyxlP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24oYixkLGUpe3ZhciBmPTA7ZnVuY3Rpb24gZyhiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaD10aGlzLGk9YXJndW1lbnRzLGo9ZnVuY3Rpb24oKXt2YXIgYSxqO2lmKCEoYjxmKSl7aWYoYT1kLmFwcGx5KGgsaSksYT09PWMucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7aj1hJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJiZhLnRoZW4sci5pc0Z1bmN0aW9uKGopP2U/ai5jYWxsKGEsZyhmLGMsTSxlKSxnKGYsYyxOLGUpKTooZisrLGouY2FsbChhLGcoZixjLE0sZSksZyhmLGMsTixlKSxnKGYsYyxNLGMubm90aWZ5V2l0aCkpKTooZCE9PU0mJihoPXZvaWQgMCxpPVthXSksKGV8fGMucmVzb2x2ZVdpdGgpKGgsaSkpfX0saz1lP2o6ZnVuY3Rpb24oKXt0cnl7aigpfWNhdGNoKGEpe3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmci5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGEsay5zdGFja1RyYWNlKSxiKzE+PWYmJihkIT09TiYmKGg9dm9pZCAwLGk9W2FdKSxjLnJlamVjdFdpdGgoaCxpKSl9fTtiP2soKTooci5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihrLnN0YWNrVHJhY2U9ci5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksYS5zZXRUaW1lb3V0KGspKX19cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYSl7Y1swXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGUpP2U6TSxhLm5vdGlmeVdpdGgpKSxjWzFdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oYik/YjpNKSksY1syXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGQpP2Q6TikpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3IuZXh0ZW5kKGEsZSk6ZX19LGY9e307cmV0dXJuIHIuZWFjaChjLGZ1bmN0aW9uKGEsYil7dmFyIGc9YlsyXSxoPWJbNV07ZVtiWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2Q9aH0sY1szLWFdWzJdLmRpc2FibGUsY1swXVsyXS5sb2NrKSxnLmFkZChiWzNdLmZpcmUpLGZbYlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZltiWzBdK1wiV2l0aFwiXSh0aGlzPT09Zj92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGZbYlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGUucHJvbWlzZShmKSxiJiZiLmNhbGwoZixmKSxmfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGgsYz1iLGQ9QXJyYXkoYyksZT1mLmNhbGwoYXJndW1lbnRzKSxnPXIuRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtkW2FdPXRoaXMsZVthXT1hcmd1bWVudHMubGVuZ3RoPjE/Zi5jYWxsKGFyZ3VtZW50cyk6YywtLWJ8fGcucmVzb2x2ZVdpdGgoZCxlKX19O2lmKGI8PTEmJihPKGEsZy5kb25lKGgoYykpLnJlc29sdmUsZy5yZWplY3QpLFwicGVuZGluZ1wiPT09Zy5zdGF0ZSgpfHxyLmlzRnVuY3Rpb24oZVtjXSYmZVtjXS50aGVuKSkpcmV0dXJuIGcudGhlbigpO3doaWxlKGMtLSlPKGVbY10saChjKSxnLnJlamVjdCk7cmV0dXJuIGcucHJvbWlzZSgpfX0pO3ZhciBQPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihiLGMpe2EuY29uc29sZSYmYS5jb25zb2xlLndhcm4mJmImJlAudGVzdChiLm5hbWUpJiZhLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2IubWVzc2FnZSxiLnN0YWNrLGMpfSxyLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGIpe2Euc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGJ9KX07dmFyIFE9ci5EZWZlcnJlZCgpO3IuZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIFEudGhlbihhKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGEpe3IucmVhZHlFeGNlcHRpb24oYSl9KSx0aGlzfSxyLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9yLnJlYWR5V2FpdCsrOnIucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tci5yZWFkeVdhaXQ6ci5pc1JlYWR5KXx8KHIuaXNSZWFkeT0hMCxhIT09ITAmJi0tci5yZWFkeVdhaXQ+MHx8US5yZXNvbHZlV2l0aChkLFtyXSkpfX0pLHIucmVhZHkudGhlbj1RLnRoZW47ZnVuY3Rpb24gUigpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixSKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUiksci5yZWFkeSgpfVwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQoci5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixSKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUikpO3ZhciBTPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PXIudHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVMoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsXG5yLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwocihhKSxjKX0pKSxiKSlmb3IoO2g8aTtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxUPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gVSgpe3RoaXMuZXhwYW5kbz1yLmV4cGFuZG8rVS51aWQrK31VLnVpZD0xLFUucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LFQoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbci5jYW1lbENhc2UoYildPWM7ZWxzZSBmb3IoZCBpbiBiKWVbci5jYW1lbENhc2UoZCldPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bci5jYW1lbENhc2UoYildfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz90aGlzLmdldChhLGIpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1kKXtpZih2b2lkIDAhPT1iKXtyLmlzQXJyYXkoYik/Yj1iLm1hcChyLmNhbWVsQ2FzZSk6KGI9ci5jYW1lbENhc2UoYiksYj1iIGluIGQ/W2JdOmIubWF0Y2goSyl8fFtdKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZFtiW2NdXX0odm9pZCAwPT09Ynx8ci5pc0VtcHR5T2JqZWN0KGQpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhci5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIFY9bmV3IFUsVz1uZXcgVSxYPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxZPS9bQS1aXS9nO2Z1bmN0aW9uIFooYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShZLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jfHxcImZhbHNlXCIhPT1jJiYoXCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6WC50ZXN0KGMpP0pTT04ucGFyc2UoYyk6Yyl9Y2F0Y2goZSl7fVcuc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBXLmhhc0RhdGEoYSl8fFYuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcuYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVi5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1YucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1XLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVYuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxaKGYsZCxlW2RdKSkpO1Yuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vy5zZXQodGhpcyxhKX0pOlModGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVcuZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVooZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1cucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vi5nZXQoYSxiKSxjJiYoIWR8fHIuaXNBcnJheShjKT9kPVYuYWNjZXNzKGEsYixyLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPXIucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9ci5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtyLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBWLmdldChhLGMpfHxWLmFjY2VzcyhhLGMse2VtcHR5OnIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Vi5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxyLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP3IucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9ci5xdWV1ZSh0aGlzLGEsYik7ci5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmci5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9ci5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Vi5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgJD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsXz1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIiskK1wiKShbYS16JV0qKSRcIixcImlcIiksYWE9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGJhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PWEuc3R5bGUuZGlzcGxheXx8XCJcIj09PWEuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSkmJlwibm9uZVwiPT09ci5jc3MoYSxcImRpc3BsYXlcIil9LGNhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTtmdW5jdGlvbiBkYShhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gci5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChyLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0oci5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmXy5leGVjKHIuY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsci5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgZWE9e307ZnVuY3Rpb24gZmEoYSl7dmFyIGIsYz1hLm93bmVyRG9jdW1lbnQsZD1hLm5vZGVOYW1lLGU9ZWFbZF07cmV0dXJuIGU/ZTooYj1jLmJvZHkuYXBwZW5kQ2hpbGQoYy5jcmVhdGVFbGVtZW50KGQpKSxlPXIuY3NzKGIsXCJkaXNwbGF5XCIpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxcIm5vbmVcIj09PWUmJihlPVwiYmxvY2tcIiksZWFbZF09ZSxlKX1mdW5jdGlvbiBnYShhLGIpe2Zvcih2YXIgYyxkLGU9W10sZj0wLGc9YS5sZW5ndGg7ZjxnO2YrKylkPWFbZl0sZC5zdHlsZSYmKGM9ZC5zdHlsZS5kaXNwbGF5LGI/KFwibm9uZVwiPT09YyYmKGVbZl09Vi5nZXQoZCxcImRpc3BsYXlcIil8fG51bGwsZVtmXXx8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmYmEoZCkmJihlW2ZdPWZhKGQpKSk6XCJub25lXCIhPT1jJiYoZVtmXT1cIm5vbmVcIixWLnNldChkLFwiZGlzcGxheVwiLGMpKSk7Zm9yKGY9MDtmPGc7ZisrKW51bGwhPWVbZl0mJihhW2ZdLnN0eWxlLmRpc3BsYXk9ZVtmXSk7cmV0dXJuIGF9ci5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gZ2EodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gZ2EodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtiYSh0aGlzKT9yKHRoaXMpLnNob3coKTpyKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBoYT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxpYT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksamE9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxrYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2thLm9wdGdyb3VwPWthLm9wdGlvbixrYS50Ym9keT1rYS50Zm9vdD1rYS5jb2xncm91cD1rYS5jYXB0aW9uPWthLnRoZWFkLGthLnRoPWthLnRkO2Z1bmN0aW9uIGxhKGEsYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZyLm5vZGVOYW1lKGEsYik/ci5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBtYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylWLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxWLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIG5hPS88fCYjP1xcdys7LztmdW5jdGlvbiBvYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG49MCxvPWEubGVuZ3RoO248bztuKyspaWYoZj1hW25dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1yLnR5cGUoZikpci5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYobmEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oaWEuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT1rYVtoXXx8a2EuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStyLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7ci5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixuPTA7d2hpbGUoZj1tW24rK10paWYoZCYmci5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1yLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPWxhKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmbWEoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKWphLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksby5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLG8ubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgcGE9ZC5kb2N1bWVudEVsZW1lbnQscWE9L15rZXkvLHJhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxzYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHRhKCl7cmV0dXJuITB9ZnVuY3Rpb24gdWEoKXtyZXR1cm4hMX1mdW5jdGlvbiB2YSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gd2EoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKXdhKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9dWE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gcigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1yLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1yLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVYuZ2V0KGEpO2lmKHEpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IocGEsZSksYy5ndWlkfHwoYy5ndWlkPXIuZ3VpZCsrKSwoaT1xLmV2ZW50cyl8fChpPXEuZXZlbnRzPXt9KSwoZz1xLmhhbmRsZSl8fChnPXEuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiByJiZyLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9yLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChLKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9c2EuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuJiYobD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LGs9ci5leHRlbmQoe3R5cGU6bixvcmlnVHlwZTpwLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmci5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpvLmpvaW4oXCIuXCIpfSxmKSwobT1pW25dKXx8KG09aVtuXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLG8sZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobixnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLHIuZXZlbnQuZ2xvYmFsW25dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1WLmhhc0RhdGEoYSkmJlYuZ2V0KGEpO2lmKHEmJihpPXEuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goSyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPXNhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbil7bD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbT1pW25dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitvLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcCE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxvLHEuaGFuZGxlKSE9PSExfHxyLnJlbW92ZUV2ZW50KGEsbixxLmhhbmRsZSksZGVsZXRlIGlbbl0pfWVsc2UgZm9yKG4gaW4gaSlyLmV2ZW50LnJlbW92ZShhLG4rYltqXSxjLGQsITApO3IuaXNFbXB0eU9iamVjdChpKSYmVi5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXt2YXIgYj1yLmV2ZW50LmZpeChhKSxjLGQsZSxmLGcsaCxpPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxqPShWLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXXx8W10saz1yLmV2ZW50LnNwZWNpYWxbYi50eXBlXXx8e307Zm9yKGlbMF09YixjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKylpW2NdPWFyZ3VtZW50c1tjXTtpZihiLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGIpIT09ITEpe2g9ci5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYixqKSxjPTA7d2hpbGUoKGY9aFtjKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7Yi5jdXJyZW50VGFyZ2V0PWYuZWxlbSxkPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tkKytdKSYmIWIuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSliLnJuYW1lc3BhY2UmJiFiLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChiLmhhbmRsZU9iaj1nLGIuZGF0YT1nLmRhdGEsZT0oKHIuZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGIucmVzdWx0PWUpPT09ITEmJihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGIpLGIucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8aXNOYU4oYS5idXR0b24pfHxhLmJ1dHRvbjwxKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZD1bXSxjPTA7YzxoO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P3IoZSx0aGlzKS5pbmRleChpKT4tMTpyLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT12YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT12YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmci5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHIubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3RhOnVhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6dWEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6dWEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6dWEsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dGEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dGEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXRhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnFhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZyYS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gd2EodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB3YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9dWEpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHhhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLHlhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLHphPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQWE9L150cnVlXFwvKC4qKS8sQmE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIENhKGEsYil7cmV0dXJuIHIubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZyLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YTphfWZ1bmN0aW9uIERhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEVhKGEpe3ZhciBiPUFhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBGYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFYuaGFzRGF0YShhKSYmKGY9Vi5hY2Nlc3MoYSksZz1WLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Vy5oYXNEYXRhKGEpJiYoaD1XLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFcuc2V0KGIsaSkpfX1mdW5jdGlvbiBHYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZoYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIEhhKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJnphLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxIYShmLGIsYyxkKX0pO2lmKG0mJihlPW9hKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChsYShlLFwic2NyaXB0XCIpLERhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxsYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEVhKSxsPTA7bDxpO2wrKylqPWhbbF0samEudGVzdChqLnR5cGV8fFwiXCIpJiYhVi5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKEJhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBJYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobGEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZtYShsYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoeGEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bGEoaCksZj1sYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUdhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fGxhKGEpLGc9Z3x8bGEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylGYShmW2RdLGdbZF0pO2Vsc2UgRmEoYSxoKTtyZXR1cm4gZz1sYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm1hKGcsIWkmJmxhKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVChjKSl7aWYoYj1jW1YuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tWLmV4cGFuZG9dPXZvaWQgMH1jW1cuZXhwYW5kb10mJihjW1cuZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gSWEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBJYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1DYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUNhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKGxhKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYheWEudGVzdChhKSYmIWthWyhpYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKGxhKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobGEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIEphPS9ebWFyZ2luLyxLYT1uZXcgUmVnRXhwKFwiXihcIiskK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLExhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX07IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2lmKGkpe2kuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGkuaW5uZXJIVE1MPVwiXCIscGEuYXBwZW5kQ2hpbGQoaCk7dmFyIGI9YS5nZXRDb21wdXRlZFN0eWxlKGkpO2M9XCIxJVwiIT09Yi50b3AsZz1cIjJweFwiPT09Yi5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PWIud2lkdGgsaS5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGY9XCI0cHhcIj09PWIubWFyZ2luUmlnaHQscGEucmVtb3ZlQ2hpbGQoaCksaT1udWxsfX12YXIgYyxlLGYsZyxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnN0eWxlJiYoaS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsby5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxoLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGguYXBwZW5kQ2hpbGQoaSksci5leHRlbmQobyx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBiKCksY30sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGZ9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBiKCksZ319KSl9KCk7ZnVuY3Rpb24gTWEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxMYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fHIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1yLnN0eWxlKGEsYikpLCFvLnBpeGVsTWFyZ2luUmlnaHQoKSYmS2EudGVzdChnKSYmSmEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBOYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgT2E9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFBhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxRYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LFJhPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxTYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gVGEoYSl7aWYoYSBpbiBTYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPVJhLmxlbmd0aDt3aGlsZShjLS0paWYoYT1SYVtjXStiLGEgaW4gU2EpcmV0dXJuIGF9ZnVuY3Rpb24gVWEoYSxiLGMpe3ZhciBkPV8uZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIFZhKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYythYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIithYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrYWFbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrYWFbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2FhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFdhKGEsYixjKXt2YXIgZCxlPSEwLGY9TGEoYSksZz1cImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZihhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoZD1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2JdKSxkPD0wfHxudWxsPT1kKXtpZihkPU1hKGEsYixmKSwoZDwwfHxudWxsPT1kKSYmKGQ9YS5zdHlsZVtiXSksS2EudGVzdChkKSlyZXR1cm4gZDtlPWcmJihvLmJveFNpemluZ1JlbGlhYmxlKCl8fGQ9PT1hLnN0eWxlW2JdKSxkPXBhcnNlRmxvYXQoZCl8fDB9cmV0dXJuIGQrVmEoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGUsZikrXCJweFwifXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9TWEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9ci5jc3NQcm9wc1toXXx8KHIuY3NzUHJvcHNbaF09VGEoaCl8fGgpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPV8uZXhlYyhjKSkmJmVbMV0mJihjPWRhKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwoci5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxvLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpO3JldHVybiBiPXIuY3NzUHJvcHNbaF18fChyLmNzc1Byb3BzW2hdPVRhKGgpfHxoKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPU1hKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gUWEmJihlPVFhW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLHIuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtpZihjKXJldHVybiFPYS50ZXN0KHIuY3NzKGEsXCJkaXNwbGF5XCIpKXx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9XYShhLGIsZCk6Y2EoYSxQYSxmdW5jdGlvbigpe3JldHVybiBXYShhLGIsZCl9KX0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJkxhKGEpLGc9ZCYmVmEoYSxiLGQsXCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPV8uZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9ci5jc3MoYSxiKSksVWEoYSxjLGcpfX19KSxyLmNzc0hvb2tzLm1hcmdpbkxlZnQ9TmEoby5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtpZihiKXJldHVybihwYXJzZUZsb2F0KE1hKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LWNhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTtkPDQ7ZCsrKWVbYSthYVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxKYS50ZXN0KGEpfHwoci5jc3NIb29rc1thK2JdLnNldD1VYSl9KSxyLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFModGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihyLmlzQXJyYXkoYikpe2ZvcihkPUxhKGEpLGU9Yi5sZW5ndGg7ZzxlO2crKylmW2JbZ11dPXIuY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9yLnN0eWxlKGEsYixjKTpyLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX19KTtmdW5jdGlvbiBYYShhLGIsYyxkLGUpe3JldHVybiBuZXcgWGEucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1yLlR3ZWVuPVhhLFhhLnByb3RvdHlwZT17Y29uc3RydWN0b3I6WGEsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8ci5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChyLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPVhhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpYYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1YYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9ci5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOlhhLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LFhhLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1YYS5wcm90b3R5cGUsWGEucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9ci5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe3IuZnguc3RlcFthLnByb3BdP3IuZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtyLmNzc1Byb3BzW2EucHJvcF1dJiYhci5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93OnIuc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LFhhLnByb3BIb29rcy5zY3JvbGxUb3A9WGEucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sci5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LHIuZng9WGEucHJvdG90eXBlLmluaXQsci5meC5zdGVwPXt9O3ZhciBZYSxaYSwkYT0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sX2E9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBhYigpe1phJiYoYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWIpLHIuZngudGljaygpKX1mdW5jdGlvbiBiYigpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtZYT12b2lkIDB9KSxZYT1yLm5vdygpfWZ1bmN0aW9uIGNiKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDtkPDQ7ZCs9Mi1iKWM9YWFbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gZGIoYSxiLGMpe2Zvcih2YXIgZCxlPShnYi50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChnYi50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2Y8ZztmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIGViKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9XCJ3aWR0aFwiaW4gYnx8XCJoZWlnaHRcImluIGIsbT10aGlzLG49e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmYmEoYSkscT1WLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChnPXIuX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWcudW5xdWV1ZWQmJihnLnVucXVldWVkPTAsaD1nLmVtcHR5LmZpcmUsZy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7Zy51bnF1ZXVlZHx8aCgpfSksZy51bnF1ZXVlZCsrLG0uYWx3YXlzKGZ1bmN0aW9uKCl7bS5hbHdheXMoZnVuY3Rpb24oKXtnLnVucXVldWVkLS0sci5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxnLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLCRhLnRlc3QoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW5bZF09cSYmcVtkXXx8ci5zdHlsZShhLGQpfWlmKGk9IXIuaXNFbXB0eU9iamVjdChiKSxpfHwhci5pc0VtcHR5T2JqZWN0KG4pKXtsJiYxPT09YS5ub2RlVHlwZSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9cSYmcS5kaXNwbGF5LG51bGw9PWomJihqPVYuZ2V0KGEsXCJkaXNwbGF5XCIpKSxrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLFwibm9uZVwiPT09ayYmKGo/az1qOihnYShbYV0sITApLGo9YS5zdHlsZS5kaXNwbGF5fHxqLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksZ2EoW2FdKSkpLChcImlubGluZVwiPT09a3x8XCJpbmxpbmUtYmxvY2tcIj09PWsmJm51bGwhPWopJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJmbG9hdFwiKSYmKGl8fChtLmRvbmUoZnVuY3Rpb24oKXtvLmRpc3BsYXk9an0pLG51bGw9PWomJihrPW8uZGlzcGxheSxqPVwibm9uZVwiPT09az9cIlwiOmspKSxvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbS5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpLGk9ITE7Zm9yKGQgaW4gbilpfHwocT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Vi5hY2Nlc3MoYSxcImZ4c2hvd1wiLHtkaXNwbGF5Omp9KSxmJiYocS5oaWRkZW49IXApLHAmJmdhKFthXSwhMCksbS5kb25lKGZ1bmN0aW9uKCl7cHx8Z2EoW2FdKSxWLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihkIGluIG4pci5zdHlsZShhLGQsbltkXSl9KSksaT1kYihwP3FbZF06MCxkLG0pLGQgaW4gcXx8KHFbZF09aS5zdGFydCxwJiYoaS5lbmQ9aS5zdGFydCxpLnN0YXJ0PTApKX19ZnVuY3Rpb24gZmIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1yLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLHIuaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9ci5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIGdiKGEsYixjKXt2YXIgZCxlLGY9MCxnPWdiLnByZWZpbHRlcnMubGVuZ3RoLGg9ci5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9WWF8fGJiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2c8aTtnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSxmPDEmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOnIuZXh0ZW5kKHt9LGIpLG9wdHM6ci5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOnIuZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6WWF8fGJiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1yLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2M8ZDtjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKGZiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2Y8ZztmKyspaWYoZD1nYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gci5pc0Z1bmN0aW9uKGQuc3RvcCkmJihyLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9ci5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIHIubWFwKGssZGIsaiksci5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksci5meC50aW1lcihyLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1yLkFuaW1hdGlvbj1yLmV4dGVuZChnYix7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gZGEoYy5lbGVtLGEsXy5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEspO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxnYi50d2VlbmVyc1tjXT1nYi50d2VlbmVyc1tjXXx8W10sZ2IudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbZWJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/Z2IucHJlZmlsdGVycy51bnNoaWZ0KGEpOmdiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZT1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmZ8fGQuaGlkZGVuP2UuZHVyYXRpb249MDplLmR1cmF0aW9uPVwibnVtYmVyXCI9PXR5cGVvZiBlLmR1cmF0aW9uP2UuZHVyYXRpb246ZS5kdXJhdGlvbiBpbiByLmZ4LnNwZWVkcz9yLmZ4LnNwZWVkc1tlLmR1cmF0aW9uXTpyLmZ4LnNwZWVkcy5fZGVmYXVsdCxudWxsIT1lLnF1ZXVlJiZlLnF1ZXVlIT09ITB8fChlLnF1ZXVlPVwiZnhcIiksZS5vbGQ9ZS5jb21wbGV0ZSxlLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ci5pc0Z1bmN0aW9uKGUub2xkKSYmZS5vbGQuY2FsbCh0aGlzKSxlLnF1ZXVlJiZyLmRlcXVldWUodGhpcyxlLnF1ZXVlKX0sZX0sci5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoYmEpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ci5pc0VtcHR5T2JqZWN0KGEpLGY9ci5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPWdiKHRoaXMsci5leHRlbmQoe30sYSksZik7KGV8fFYuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1yLnRpbWVycyxnPVYuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJl9hLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fHIuZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Vi5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1yLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsci5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7YjxnO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxyLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9ci5mbltiXTtyLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShjYihiLCEwKSxhLGQsZSl9fSksci5lYWNoKHtzbGlkZURvd246Y2IoXCJzaG93XCIpLHNsaWRlVXA6Y2IoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmNiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLHIudGltZXJzPVtdLHIuZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPXIudGltZXJzO2ZvcihZYT1yLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fHIuZnguc3RvcCgpLFlhPXZvaWQgMH0sci5meC50aW1lcj1mdW5jdGlvbihhKXtyLnRpbWVycy5wdXNoKGEpLGEoKT9yLmZ4LnN0YXJ0KCk6ci50aW1lcnMucG9wKCl9LHIuZnguaW50ZXJ2YWw9MTMsci5meC5zdGFydD1mdW5jdGlvbigpe1phfHwoWmE9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWIpOmEuc2V0SW50ZXJ2YWwoci5meC50aWNrLHIuZnguaW50ZXJ2YWwpKX0sci5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jYW5jZWxBbmltYXRpb25GcmFtZT9hLmNhbmNlbEFuaW1hdGlvbkZyYW1lKFphKTphLmNsZWFySW50ZXJ2YWwoWmEpLFphPW51bGx9LHIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHIuZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1yLmZ4P3IuZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixvLmNoZWNrT249XCJcIiE9PWEudmFsdWUsby5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLG8ucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGhiLGliPXIuZXhwci5hdHRySGFuZGxlO3IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFModGhpcyxyLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksci5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP3IucHJvcChhLGIsYyk6KDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoZT1yLmF0dHJIb29rc1tiLnRvTG93ZXJDYXNlKCldfHwoci5leHByLm1hdGNoLmJvb2wudGVzdChiKT9oYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgci5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1yLmZpbmQuYXR0cihhLGIpLG51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighby5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZyLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPWImJmIubWF0Y2goSyk7XG5pZihlJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWVbZCsrXSlhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxoYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP3IucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LHIuZWFjaChyLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1pYltiXXx8ci5maW5kLmF0dHI7aWJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZz1iLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGR8fChmPWliW2ddLGliW2ddPWUsZT1udWxsIT1jKGEsYixkKT9nOm51bGwsaWJbZ109ZiksZX19KTt2YXIgamI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxrYj0vXig/OmF8YXJlYSkkL2k7ci5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyh0aGlzLHIucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbci5wcm9wRml4W2FdfHxhXX0pfX0pLHIuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmci5pc1hNTERvYyhhKXx8KGI9ci5wcm9wRml4W2JdfHxiLGU9ci5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6amIudGVzdChhLm5vZGVOYW1lKXx8a2IudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxvLm9wdFNlbGVjdGVkfHwoci5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHIuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtyLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGxiPS9bXFx0XFxyXFxuXFxmXS9nO2Z1bmN0aW9uIG1iKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1yLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixtYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChLKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1tYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShsYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9ci50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLG1iKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEspfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPW1iKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGxiLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPXIudHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLG1iKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPXIodGhpcyksZj1hLm1hdGNoKEspfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9bWIodGhpcyksYiYmVi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOlYuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrbWIoYykrXCIgXCIpLnJlcGxhY2UobGIsXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIG5iPS9cXHIvZyxvYj0vW1xceDIwXFx0XFxyXFxuXFxmXSsvZztyLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9ci5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLHIodGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpyLmlzQXJyYXkoZSkmJihlPXIubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1yLnZhbEhvb2tzW3RoaXMudHlwZV18fHIudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9ci52YWxIb29rc1tlLnR5cGVdfHxyLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShuYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLHIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6ci50cmltKHIudGV4dChhKSkucmVwbGFjZShvYixcIiBcIil9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT1lPDA/aDpmP2U6MDtpPGg7aSsrKWlmKGM9ZFtpXSwoYy5zZWxlY3RlZHx8aT09PWUpJiYhYy5kaXNhYmxlZCYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFyLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1yKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9ci5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPXIuaW5BcnJheShyLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxyLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7ci52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7aWYoci5pc0FycmF5KGIpKXJldHVybiBhLmNoZWNrZWQ9ci5pbkFycmF5KHIoYSkudmFsKCksYik+LTF9fSxvLmNoZWNrT258fChyLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBwYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87ci5leHRlbmQoci5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixrLG0sbixvPVtlfHxkXSxwPWwuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWwuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIXBiLnRlc3QocCtyLmV2ZW50LnRyaWdnZXJlZCkmJihwLmluZGV4T2YoXCIuXCIpPi0xJiYocT1wLnNwbGl0KFwiLlwiKSxwPXEuc2hpZnQoKSxxLnNvcnQoKSksaz1wLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitwLGI9YltyLmV4cGFuZG9dP2I6bmV3IHIuRXZlbnQocCxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9cS5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpyLm1ha2VBcnJheShjLFtiXSksbj1yLmV2ZW50LnNwZWNpYWxbcF18fHt9LGZ8fCFuLnRyaWdnZXJ8fG4udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW4ubm9CdWJibGUmJiFyLmlzV2luZG93KGUpKXtmb3Ioaj1uLmRlbGVnYXRlVHlwZXx8cCxwYi50ZXN0KGorcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmby5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9b1tnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6bi5iaW5kVHlwZXx8cCxtPShWLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmVi5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1rJiZoW2tdLG0mJm0uYXBwbHkmJlQoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXAsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5fZGVmYXVsdCYmbi5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpIT09ITF8fCFUKGUpfHxrJiZyLmlzRnVuY3Rpb24oZVtwXSkmJiFyLmlzV2luZG93KGUpJiYoaT1lW2tdLGkmJihlW2tdPW51bGwpLHIuZXZlbnQudHJpZ2dlcmVkPXAsZVtwXSgpLHIuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtrXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ci5leHRlbmQobmV3IHIuRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7ci5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxyLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtpZihjKXJldHVybiByLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApfX0pLHIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxyLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksby5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLG8uZm9jdXNpbnx8ci5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtyLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsci5ldmVudC5maXgoYSkpfTtyLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vi5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxWLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVYuYWNjZXNzKGQsYiktMTtlP1YuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksVi5yZW1vdmUoZCxiKSl9fX0pO3ZhciBxYj1hLmxvY2F0aW9uLHJiPXIubm93KCksc2I9L1xcPy87ci5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIHRiPS9cXFtcXF0kLyx1Yj0vXFxyP1xcbi9nLHZiPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx3Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24geGIoYSxiLGMsZCl7dmFyIGU7aWYoci5pc0FycmF5KGIpKXIuZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8dGIudGVzdChhKT9kKGEsZSk6eGIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1yLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYil4YihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfXIucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmlzRnVuY3Rpb24oYik/YigpOmI7ZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1jP1wiXCI6Yyl9O2lmKHIuaXNBcnJheShhKXx8YS5qcXVlcnkmJiFyLmlzUGxhaW5PYmplY3QoYSkpci5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSl4YihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKX0sci5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiByLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9ci5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9yLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFyKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ3Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhdmIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IWhhLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9cih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOnIuaXNBcnJheShjKT9yLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UodWIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh1YixcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgeWI9LyUyMC9nLHpiPS8jLiokLyxBYj0vKFs/Jl0pXz1bXiZdKi8sQmI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxDYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxEYj0vXig/OkdFVHxIRUFEKSQvLEViPS9eXFwvXFwvLyxGYj17fSxHYj17fSxIYj1cIiovXCIuY29uY2F0KFwiKlwiKSxJYj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0liLmhyZWY9cWIuaHJlZjtmdW5jdGlvbiBKYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goSyl8fFtdO2lmKHIuaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBLYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1HYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLHIuZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIExiKGEsYil7dmFyIGMsZCxlPXIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJnIuZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBNYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfWlmKGYpcmV0dXJuIGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fXIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpxYi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOkNiLnRlc3QocWIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkhiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpyLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9MYihMYihhLHIuYWpheFNldHRpbmdzKSxiKTpMYihyLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpKYihGYiksYWpheFRyYW5zcG9ydDpKYihHYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbSxuLG89ci5hamF4U2V0dXAoe30sYykscD1vLmNvbnRleHR8fG8scT1vLmNvbnRleHQmJihwLm5vZGVUeXBlfHxwLmpxdWVyeSk/cihwKTpyLmV2ZW50LHM9ci5EZWZlcnJlZCgpLHQ9ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx1PW8uc3RhdHVzQ29kZXx8e30sdj17fSx3PXt9LHg9XCJjYW5jZWxlZFwiLHk9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZihrKXtpZighaCl7aD17fTt3aGlsZShiPUJiLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaz9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ayYmKGE9d1thLnRvTG93ZXJDYXNlKCldPXdbYS50b0xvd2VyQ2FzZSgpXXx8YSx2W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWsmJihvLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZihrKXkuYWx3YXlzKGFbeS5zdGF0dXNdKTtlbHNlIGZvcihiIGluIGEpdVtiXT1bdVtiXSxhW2JdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8eDtyZXR1cm4gZSYmZS5hYm9ydChiKSxBKDAsYiksdGhpc319O2lmKHMucHJvbWlzZSh5KSxvLnVybD0oKGJ8fG8udXJsfHxxYi5ocmVmKStcIlwiKS5yZXBsYWNlKEViLHFiLnByb3RvY29sK1wiLy9cIiksby50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG8ubWV0aG9kfHxvLnR5cGUsby5kYXRhVHlwZXM9KG8uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEspfHxbXCJcIl0sbnVsbD09by5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9by51cmwsai5ocmVmPWouaHJlZixvLmNyb3NzRG9tYWluPUliLnByb3RvY29sK1wiLy9cIitJYi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeil7by5jcm9zc0RvbWFpbj0hMH19aWYoby5kYXRhJiZvLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygby5kYXRhJiYoby5kYXRhPXIucGFyYW0oby5kYXRhLG8udHJhZGl0aW9uYWwpKSxLYihGYixvLGMseSksaylyZXR1cm4geTtsPXIuZXZlbnQmJm8uZ2xvYmFsLGwmJjA9PT1yLmFjdGl2ZSsrJiZyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksby50eXBlPW8udHlwZS50b1VwcGVyQ2FzZSgpLG8uaGFzQ29udGVudD0hRGIudGVzdChvLnR5cGUpLGY9by51cmwucmVwbGFjZSh6YixcIlwiKSxvLmhhc0NvbnRlbnQ/by5kYXRhJiZvLnByb2Nlc3NEYXRhJiYwPT09KG8uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihvLmRhdGE9by5kYXRhLnJlcGxhY2UoeWIsXCIrXCIpKToobj1vLnVybC5zbGljZShmLmxlbmd0aCksby5kYXRhJiYoZis9KHNiLnRlc3QoZik/XCImXCI6XCI/XCIpK28uZGF0YSxkZWxldGUgby5kYXRhKSxvLmNhY2hlPT09ITEmJihmPWYucmVwbGFjZShBYixcIlwiKSxuPShzYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrcmIrKyArbiksby51cmw9ZituKSxvLmlmTW9kaWZpZWQmJihyLmxhc3RNb2RpZmllZFtmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixyLmxhc3RNb2RpZmllZFtmXSksci5ldGFnW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsci5ldGFnW2ZdKSksKG8uZGF0YSYmby5oYXNDb250ZW50JiZvLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixvLmNvbnRlbnRUeXBlKSx5LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixvLmRhdGFUeXBlc1swXSYmby5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXT9vLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW8uZGF0YVR5cGVzWzBdP1wiLCBcIitIYitcIjsgcT0wLjAxXCI6XCJcIik6by5hY2NlcHRzW1wiKlwiXSk7Zm9yKG0gaW4gby5oZWFkZXJzKXkuc2V0UmVxdWVzdEhlYWRlcihtLG8uaGVhZGVyc1ttXSk7aWYoby5iZWZvcmVTZW5kJiYoby5iZWZvcmVTZW5kLmNhbGwocCx5LG8pPT09ITF8fGspKXJldHVybiB5LmFib3J0KCk7aWYoeD1cImFib3J0XCIsdC5hZGQoby5jb21wbGV0ZSkseS5kb25lKG8uc3VjY2VzcykseS5mYWlsKG8uZXJyb3IpLGU9S2IoR2IsbyxjLHkpKXtpZih5LnJlYWR5U3RhdGU9MSxsJiZxLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt5LG9dKSxrKXJldHVybiB5O28uYXN5bmMmJm8udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LmFib3J0KFwidGltZW91dFwiKX0sby50aW1lb3V0KSk7dHJ5e2s9ITEsZS5zZW5kKHYsQSl9Y2F0Y2goeil7aWYoayl0aHJvdyB6O0EoLTEseil9fWVsc2UgQSgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBBKGIsYyxkLGgpe3ZhciBqLG0sbix2LHcseD1jO2t8fChrPSEwLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix5LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmYjwzMDB8fDMwND09PWIsZCYmKHY9TWIobyx5LGQpKSx2PU5iKG8sdix5LGopLGo/KG8uaWZNb2RpZmllZCYmKHc9eS5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKHIubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eS5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKHIuZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1vLnR5cGU/eD1cIm5vY29udGVudFwiOjMwND09PWI/eD1cIm5vdG1vZGlmaWVkXCI6KHg9di5zdGF0ZSxtPXYuZGF0YSxuPXYuZXJyb3Isaj0hbikpOihuPXgsIWImJnh8fCh4PVwiZXJyb3JcIixiPDAmJihiPTApKSkseS5zdGF0dXM9Yix5LnN0YXR1c1RleHQ9KGN8fHgpK1wiXCIsaj9zLnJlc29sdmVXaXRoKHAsW20seCx5XSk6cy5yZWplY3RXaXRoKHAsW3kseCxuXSkseS5zdGF0dXNDb2RlKHUpLHU9dm9pZCAwLGwmJnEudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt5LG8saj9tOm5dKSx0LmZpcmVXaXRoKHAsW3kseF0pLGwmJihxLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeSxvXSksLS1yLmFjdGl2ZXx8ci5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geX0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHIuZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHIuZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksci5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe3JbYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIHIuaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLHIuYWpheChyLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sci5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksci5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gci5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxyLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gdGhpc1swXSYmKHIuaXNGdW5jdGlvbihhKSYmKGE9YS5jYWxsKHRoaXNbMF0pKSxiPXIoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiByLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPXIodGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9ci5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnBhcmVudChhKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtyKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLHIuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4hci5leHByLnBzZXVkb3MudmlzaWJsZShhKX0sci5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hIShhLm9mZnNldFdpZHRofHxhLm9mZnNldEhlaWdodHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LHIuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX07dmFyIE9iPXswOjIwMCwxMjIzOjIwNH0sUGI9ci5hamF4U2V0dGluZ3MueGhyKCk7by5jb3JzPSEhUGImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBQYixvLmFqYXg9UGI9ISFQYixyLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYil7dmFyIGMsZDtpZihvLmNvcnN8fFBiJiYhYi5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoT2JbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19KSxyLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oYSl7YS5jcm9zc0RvbWFpbiYmKGEuY29udGVudHMuc2NyaXB0PSExKX0pLHIuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiByLmdsb2JhbEV2YWwoYSksYX19fSksci5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxyLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7Yj1yKFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZmKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxkLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIFFiPVtdLFJiPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87ci5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9UWIucG9wKCl8fHIuZXhwYW5kbytcIl9cIityYisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksci5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihSYi50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJjA9PT0oYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmUmIudGVzdChiLmRhdGEpJiZcImRhdGFcIik7aWYoaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0pcmV0dXJuIGU9Yi5qc29ucENhbGxiYWNrPXIuaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKFJiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KHNiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fHIuZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/cihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxRYi5wdXNoKGUpKSxnJiZyLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSxvLmNyZWF0ZUhUTUxEb2N1bWVudD1mdW5jdGlvbigpe3ZhciBhPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09YS5jaGlsZE5vZGVzLmxlbmd0aH0oKSxyLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuW107XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpO3ZhciBlLGYsZztyZXR1cm4gYnx8KG8uY3JlYXRlSFRNTERvY3VtZW50PyhiPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLGU9Yi5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxlLmhyZWY9ZC5sb2NhdGlvbi5ocmVmLGIuaGVhZC5hcHBlbmRDaGlsZChlKSk6Yj1kKSxmPUIuZXhlYyhhKSxnPSFjJiZbXSxmP1tiLmNyZWF0ZUVsZW1lbnQoZlsxXSldOihmPW9hKFthXSxiLGcpLGcmJmcubGVuZ3RoJiZyKGcpLnJlbW92ZSgpLHIubWVyZ2UoW10sZi5jaGlsZE5vZGVzKSl9LHIuZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPXIudHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksci5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmci5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9yKFwiPGRpdj5cIikuYXBwZW5kKHIucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sci5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksci5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ3JlcChyLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gU2IoYSl7cmV0dXJuIHIuaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31yLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPXIuY3NzKGEsXCJwb3NpdGlvblwiKSxsPXIoYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1yLmNzcyhhLFwidG9wXCIpLGk9ci5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxyLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsci5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxyLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7ci5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZCxlLGY9dGhpc1swXTtpZihmKXJldHVybiBmLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhkPWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZC53aWR0aHx8ZC5oZWlnaHQ/KGU9Zi5vd25lckRvY3VtZW50LGM9U2IoZSksYj1lLmRvY3VtZW50RWxlbWVudCx7dG9wOmQudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDpkLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTpkKTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PXIuY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksci5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZD17dG9wOmQudG9wK3IuY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxsZWZ0OmQubGVmdCtyLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApfSkse3RvcDpiLnRvcC1kLnRvcC1yLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1yLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09ci5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fHBhfSl9fSksci5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7ci5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gUyh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1TYihhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPU5hKG8ucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe2lmKGMpcmV0dXJuIGM9TWEoYSxiKSxLYS50ZXN0KGMpP3IoYSkucG9zaXRpb24oKVtiXStcInB4XCI6Y30pfSksci5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe3IuZm5bZF09ZnVuY3Rpb24oZSxmKXt2YXIgZz1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxoPWN8fChlPT09ITB8fGY9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYixjLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGIpPzA9PT1kLmluZGV4T2YoXCJvdXRlclwiKT9iW1wiaW5uZXJcIithXTpiLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhmPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGZbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxmW1wib2Zmc2V0XCIrYV0sZltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZT9yLmNzcyhiLGMsaCk6ci5zdHlsZShiLGMsZSxoKX0sYixnP2U6dm9pZCAwLGcpfX0pfSksci5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxyLnBhcnNlSlNPTj1KU09OLnBhcnNlLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBUYj1hLmpRdWVyeSxVYj1hLiQ7cmV0dXJuIHIubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09ciYmKGEuJD1VYiksYiYmYS5qUXVlcnk9PT1yJiYoYS5qUXVlcnk9VGIpLHJ9LGJ8fChhLmpRdWVyeT1hLiQ9cikscn0pO1xuIiwiLyohXHJcbiAqIGZ1bGxQYWdlIDIuOC4yXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qc1xyXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDE1IGFsdmFyb3RyaWdvLmNvbSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cclxuICovXHJcbihmdW5jdGlvbihnbG9iYWwsIGZhY3RvcnkpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24oJCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhY3RvcnkoJCwgZ2xvYmFsLCBnbG9iYWwuZG9jdW1lbnQsIGdsb2JhbC5NYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCBnbG9iYWwsIGdsb2JhbC5kb2N1bWVudCwgZ2xvYmFsLk1hdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmYWN0b3J5KGpRdWVyeSwgZ2xvYmFsLCBnbG9iYWwuZG9jdW1lbnQsIGdsb2JhbC5NYXRoKTtcclxuICAgIH1cclxufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBNYXRoLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBrZWVwaW5nIGNlbnRyYWwgc2V0IG9mIGNsYXNzbmFtZXMgYW5kIHNlbGVjdG9yc1xyXG4gICAgdmFyIFdSQVBQRVIgPSAgICAgICAgICAgICAgICdmdWxscGFnZS13cmFwcGVyJztcclxuICAgIHZhciBXUkFQUEVSX1NFTCA9ICAgICAgICAgICAnLicgKyBXUkFQUEVSO1xyXG5cclxuICAgIC8vIHNsaW1zY3JvbGxcclxuICAgIHZhciBTQ1JPTExBQkxFID0gICAgICAgICAgICAnZnAtc2Nyb2xsYWJsZSc7XHJcbiAgICB2YXIgU0NST0xMQUJMRV9TRUwgPSAgICAgICAgJy4nICsgU0NST0xMQUJMRTtcclxuXHJcbiAgICAvLyB1dGlsXHJcbiAgICB2YXIgUkVTUE9OU0lWRSA9ICAgICAgICAgICAgJ2ZwLXJlc3BvbnNpdmUnO1xyXG4gICAgdmFyIE5PX1RSQU5TSVRJT04gPSAgICAgICAgICdmcC1ub3RyYW5zaXRpb24nO1xyXG4gICAgdmFyIERFU1RST1lFRCA9ICAgICAgICAgICAgICdmcC1kZXN0cm95ZWQnO1xyXG4gICAgdmFyIEVOQUJMRUQgPSAgICAgICAgICAgICAgICdmcC1lbmFibGVkJztcclxuICAgIHZhciBWSUVXSU5HX1BSRUZJWCA9ICAgICAgICAnZnAtdmlld2luZyc7XHJcbiAgICB2YXIgQUNUSVZFID0gICAgICAgICAgICAgICAgJ2FjdGl2ZSc7XHJcbiAgICB2YXIgQUNUSVZFX1NFTCA9ICAgICAgICAgICAgJy4nICsgQUNUSVZFO1xyXG4gICAgdmFyIENPTVBMRVRFTFkgPSAgICAgICAgICAgICdmcC1jb21wbGV0ZWx5JztcclxuICAgIHZhciBDT01QTEVURUxZX1NFTCA9ICAgICAgICAnLicgKyBDT01QTEVURUxZO1xyXG5cclxuICAgIC8vIHNlY3Rpb25cclxuICAgIHZhciBTRUNUSU9OX0RFRkFVTFRfU0VMID0gICAnLnNlY3Rpb24nO1xyXG4gICAgdmFyIFNFQ1RJT04gPSAgICAgICAgICAgICAgICdmcC1zZWN0aW9uJztcclxuICAgIHZhciBTRUNUSU9OX1NFTCA9ICAgICAgICAgICAnLicgKyBTRUNUSU9OO1xyXG4gICAgdmFyIFNFQ1RJT05fQUNUSVZFX1NFTCA9ICAgIFNFQ1RJT05fU0VMICsgQUNUSVZFX1NFTDtcclxuICAgIHZhciBTRUNUSU9OX0ZJUlNUX1NFTCA9ICAgICBTRUNUSU9OX1NFTCArICc6Zmlyc3QnO1xyXG4gICAgdmFyIFNFQ1RJT05fTEFTVF9TRUwgPSAgICAgIFNFQ1RJT05fU0VMICsgJzpsYXN0JztcclxuICAgIHZhciBUQUJMRV9DRUxMID0gICAgICAgICAgICAnZnAtdGFibGVDZWxsJztcclxuICAgIHZhciBUQUJMRV9DRUxMX1NFTCA9ICAgICAgICAnLicgKyBUQUJMRV9DRUxMO1xyXG4gICAgdmFyIEFVVE9fSEVJR0hUID0gICAgICAgICAgICdmcC1hdXRvLWhlaWdodCc7XHJcbiAgICB2YXIgQVVUT19IRUlHSFRfU0VMID0gICAgICAgJy5mcC1hdXRvLWhlaWdodCc7XHJcbiAgICB2YXIgTk9STUFMX1NDUk9MTCA9ICAgICAgICAgJ2ZwLW5vcm1hbC1zY3JvbGwnO1xyXG4gICAgdmFyIE5PUk1BTF9TQ1JPTExfU0VMID0gICAgICcuZnAtbm9ybWFsLXNjcm9sbCc7XHJcblxyXG4gICAgLy8gc2VjdGlvbiBuYXZcclxuICAgIHZhciBTRUNUSU9OX05BViA9ICAgICAgICAgICAnZnAtbmF2JztcclxuICAgIHZhciBTRUNUSU9OX05BVl9TRUwgPSAgICAgICAnIycgKyBTRUNUSU9OX05BVjtcclxuICAgIHZhciBTRUNUSU9OX05BVl9UT09MVElQID0gICAnZnAtdG9vbHRpcCc7XHJcbiAgICB2YXIgU0VDVElPTl9OQVZfVE9PTFRJUF9TRUw9Jy4nK1NFQ1RJT05fTkFWX1RPT0xUSVA7XHJcbiAgICB2YXIgU0hPV19BQ1RJVkVfVE9PTFRJUCA9ICAgJ2ZwLXNob3ctYWN0aXZlJztcclxuXHJcbiAgICAvLyBzbGlkZVxyXG4gICAgdmFyIFNMSURFX0RFRkFVTFRfU0VMID0gICAgICcuc2xpZGUnO1xyXG4gICAgdmFyIFNMSURFID0gICAgICAgICAgICAgICAgICdmcC1zbGlkZSc7XHJcbiAgICB2YXIgU0xJREVfU0VMID0gICAgICAgICAgICAgJy4nICsgU0xJREU7XHJcbiAgICB2YXIgU0xJREVfQUNUSVZFX1NFTCA9ICAgICAgU0xJREVfU0VMICsgQUNUSVZFX1NFTDtcclxuICAgIHZhciBTTElERVNfV1JBUFBFUiA9ICAgICAgICAnZnAtc2xpZGVzJztcclxuICAgIHZhciBTTElERVNfV1JBUFBFUl9TRUwgPSAgICAnLicgKyBTTElERVNfV1JBUFBFUjtcclxuICAgIHZhciBTTElERVNfQ09OVEFJTkVSID0gICAgICAnZnAtc2xpZGVzQ29udGFpbmVyJztcclxuICAgIHZhciBTTElERVNfQ09OVEFJTkVSX1NFTCA9ICAnLicgKyBTTElERVNfQ09OVEFJTkVSO1xyXG4gICAgdmFyIFRBQkxFID0gICAgICAgICAgICAgICAgICdmcC10YWJsZSc7XHJcblxyXG4gICAgLy8gc2xpZGUgbmF2XHJcbiAgICB2YXIgU0xJREVTX05BViA9ICAgICAgICAgICAgJ2ZwLXNsaWRlc05hdic7XHJcbiAgICB2YXIgU0xJREVTX05BVl9TRUwgPSAgICAgICAgJy4nICsgU0xJREVTX05BVjtcclxuICAgIHZhciBTTElERVNfTkFWX0xJTktfU0VMID0gICBTTElERVNfTkFWX1NFTCArICcgYSc7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XID0gICAgICAgICAgJ2ZwLWNvbnRyb2xBcnJvdyc7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX1NFTCA9ICAgICAgJy4nICsgU0xJREVTX0FSUk9XO1xyXG4gICAgdmFyIFNMSURFU19QUkVWID0gICAgICAgICAgICdmcC1wcmV2JztcclxuICAgIHZhciBTTElERVNfUFJFVl9TRUwgPSAgICAgICAnLicgKyBTTElERVNfUFJFVjtcclxuICAgIHZhciBTTElERVNfQVJST1dfUFJFViA9ICAgICBTTElERVNfQVJST1cgKyAnICcgKyBTTElERVNfUFJFVjtcclxuICAgIHZhciBTTElERVNfQVJST1dfUFJFVl9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX1BSRVZfU0VMO1xyXG4gICAgdmFyIFNMSURFU19ORVhUID0gICAgICAgICAgICdmcC1uZXh0JztcclxuICAgIHZhciBTTElERVNfTkVYVF9TRUwgPSAgICAgICAnLicgKyBTTElERVNfTkVYVDtcclxuICAgIHZhciBTTElERVNfQVJST1dfTkVYVCA9ICAgICBTTElERVNfQVJST1cgKyAnICcgKyBTTElERVNfTkVYVDtcclxuICAgIHZhciBTTElERVNfQVJST1dfTkVYVF9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX05FWFRfU0VMO1xyXG5cclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgdmFyICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgb3B0aW9ucyBmb3IgaVNjcm9sbC5qcyB1c2VkIHdoZW4gdXNpbmcgc2Nyb2xsT3ZlcmZsb3dcclxuICAgIHZhciBpc2Nyb2xsT3B0aW9ucyA9IHtcclxuICAgICAgICBzY3JvbGxiYXJzOiB0cnVlLFxyXG4gICAgICAgIG1vdXNlV2hlZWw6IHRydWUsXHJcbiAgICAgICAgaGlkZVNjcm9sbGJhcnM6IGZhbHNlLFxyXG4gICAgICAgIGZhZGVTY3JvbGxiYXJzOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlTW91c2U6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5mdWxscGFnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICAvL29ubHkgb25jZSBteSBmcmllbmQhXHJcbiAgICAgICAgaWYoJCgnaHRtbCcpLmhhc0NsYXNzKEVOQUJMRUQpKXsgZGlzcGxheVdhcm5pbmdzKCk7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAvLyBjb21tb24galF1ZXJ5IG9iamVjdHNcclxuICAgICAgICB2YXIgJGh0bWxCb2R5ID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgdmFyIEZQID0gJC5mbi5mdWxscGFnZTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHNvbWUgZGVmYXVsdHMsIGV4dGVuZGluZyB0aGVtIHdpdGggYW55IG9wdGlvbnMgdGhhdCB3ZXJlIHByb3ZpZGVkXHJcbiAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuICAgICAgICAgICAgLy9uYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIG1lbnU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmNob3JzOltdLFxyXG4gICAgICAgICAgICBsb2NrQW5jaG9yczogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uUG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25Ub29sdGlwczogW10sXHJcbiAgICAgICAgICAgIHNob3dBY3RpdmVUb29sdGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzTmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc05hdlBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgc2Nyb2xsQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgaHlicmlkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIGNzczM6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbGluZ1NwZWVkOiA3MDAsXHJcbiAgICAgICAgICAgIGF1dG9TY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGZpdFRvU2VjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZml0VG9TZWN0aW9uRGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJyxcclxuICAgICAgICAgICAgZWFzaW5nY3NzMzogJ2Vhc2UnLFxyXG4gICAgICAgICAgICBsb29wQm90dG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcFRvcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BIb3Jpem9udGFsOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250aW51b3VzVmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBub3JtYWxTY3JvbGxFbGVtZW50czogbnVsbCxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXI6IGlzY3JvbGxIYW5kbGVyLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvd09wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgICAgIHRvdWNoU2Vuc2l0aXZpdHk6IDUsXHJcbiAgICAgICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZDogNSxcclxuICAgICAgICAgICAgYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjogbnVsbCxcclxuXHJcbiAgICAgICAgICAgIC8vQWNjZXNzaWJpbGl0eVxyXG4gICAgICAgICAgICBrZXlib2FyZFNjcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0ZUFuY2hvcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVjb3JkSGlzdG9yeTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIC8vZGVzaWduXHJcbiAgICAgICAgICAgIGNvbnRyb2xBcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xBcnJvd0NvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQ2VudGVyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNlY3Rpb25zQ29sb3IgOiBbXSxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgICAgICAgICAgZml4ZWRFbGVtZW50czogbnVsbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogMCwgLy9iYWNrd2FyZHMgY29tcGFiaXRpbGl0eSB3aXRoIHJlc3BvbnNpdmVXaWRkdGhcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlSGVpZ2h0OiAwLFxyXG5cclxuICAgICAgICAgICAgLy9DdXN0b20gc2VsZWN0b3JzXHJcbiAgICAgICAgICAgIHNlY3Rpb25TZWxlY3RvcjogU0VDVElPTl9ERUZBVUxUX1NFTCxcclxuICAgICAgICAgICAgc2xpZGVTZWxlY3RvcjogU0xJREVfREVGQVVMVF9TRUwsXHJcblxyXG5cclxuICAgICAgICAgICAgLy9ldmVudHNcclxuICAgICAgICAgICAgYWZ0ZXJMb2FkOiBudWxsLFxyXG4gICAgICAgICAgICBvbkxlYXZlOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlbmRlcjogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZXNpemU6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVCdWlsZDogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uU2xpZGVMZWF2ZTogbnVsbFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL2ZsYWcgdG8gYXZvaWQgdmVyeSBmYXN0IHNsaWRpbmcgZm9yIGxhbmRzY2FwZSBzbGlkZXJzXHJcbiAgICAgICAgdmFyIHNsaWRlTW92aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBpc1RvdWNoRGV2aWNlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxwbGF5Ym9va3xzaWxrfEJsYWNrQmVycnl8QkIxMHxXaW5kb3dzIFBob25lfFRpemVufEJhZGF8d2ViT1N8SUVNb2JpbGV8T3BlcmEgTWluaSkvKTtcclxuICAgICAgICB2YXIgaXNUb3VjaCA9ICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKSB8fCAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHdpbmRvd3NIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzV2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZERlc3Rpbnk7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZFNsaWRlO1xyXG4gICAgICAgIHZhciBjYW5TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzY3JvbGxpbmdzID0gW107XHJcbiAgICAgICAgdmFyIGNvbnRyb2xQcmVzc2VkO1xyXG4gICAgICAgIHZhciBpc1Njcm9sbEFsbG93ZWQgPSB7fTtcclxuICAgICAgICBpc1Njcm9sbEFsbG93ZWQubSA9IHsgICd1cCc6dHJ1ZSwgJ2Rvd24nOnRydWUsICdsZWZ0Jzp0cnVlLCAncmlnaHQnOnRydWUgfTtcclxuICAgICAgICBpc1Njcm9sbEFsbG93ZWQuayA9ICQuZXh0ZW5kKHRydWUse30sIGlzU2Nyb2xsQWxsb3dlZC5tKTtcclxuXHJcbiAgICAgICAgLy90aW1lb3V0c1xyXG4gICAgICAgIHZhciByZXNpemVJZDtcclxuICAgICAgICB2YXIgYWZ0ZXJTZWN0aW9uTG9hZHNJZDtcclxuICAgICAgICB2YXIgYWZ0ZXJTbGlkZUxvYWRzSWQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbElkO1xyXG4gICAgICAgIHZhciBzY3JvbGxJZDI7XHJcbiAgICAgICAgdmFyIGtleWRvd25JZDtcclxuICAgICAgICB2YXIgb3JpZ2luYWxzID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpOyAvL2RlZXAgY29weVxyXG5cclxuICAgICAgICBkaXNwbGF5V2FybmluZ3MoKTtcclxuXHJcbiAgICAgICAgLy9maXhpbmcgYnVnIGluIGlTY3JvbGwgd2l0aCBsaW5rczogaHR0cHM6Ly9naXRodWIuY29tL2N1YmlxL2lzY3JvbGwvaXNzdWVzLzc4M1xyXG4gICAgICAgIGlzY3JvbGxPcHRpb25zLmNsaWNrID0gaXNUb3VjaDsgLy8gc2VlICMyMDM1XHJcblxyXG4gICAgICAgIC8vZXh0ZW5kaW5nIGlTY3JvbGwgb3B0aW9ucyB3aXRoIHRoZSB1c2VyIGN1c3RvbSBvbmVzXHJcbiAgICAgICAgaXNjcm9sbE9wdGlvbnMgPSAkLmV4dGVuZChpc2Nyb2xsT3B0aW9ucywgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd09wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL2Vhc2VJbk91dEN1YmljIGFuaW1hdGlvbiBpbmNsdWRlZCBpbiB0aGUgcGx1Z2luXHJcbiAgICAgICAgJC5leHRlbmQoJC5lYXNpbmcseyBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtyZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO319KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBhdXRvU2Nyb2xsIG9wdGlvbi5cclxuICAgICAgICAqIEl0IGNoYW5nZXMgdGhlIHNjcm9sbCBiYXIgdmlzaWJpbGl0eSBhbmQgdGhlIGhpc3Rvcnkgb2YgdGhlIHNpdGUgYXMgYSByZXN1bHQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBGUC5zZXRBdXRvU2Nyb2xsaW5nID0gZnVuY3Rpb24odmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBzZXRWYXJpYWJsZVN0YXRlKCdhdXRvU2Nyb2xsaW5nJywgdmFsdWUsIHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgICRodG1sQm9keS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdycgOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgRlAuc2V0UmVjb3JkSGlzdG9yeShvcmlnaW5hbHMucmVjb3JkSGlzdG9yeSwgJ2ludGVybmFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mb3IgSUUgdG91Y2ggZGV2aWNlc1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvdWNoLWFjdGlvbic6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92aW5nIHRoZSBjb250YWluZXIgdXBcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGwoZWxlbWVudC5wb3NpdGlvbigpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICRodG1sQm9keS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdycgOiAndmlzaWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcgOiAnaW5pdGlhbCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIEZQLnNldFJlY29yZEhpc3RvcnkoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZm9yIElFIHRvdWNoIGRldmljZXNcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvdWNoLWFjdGlvbic6ICcnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGwoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdGhlIHBhZ2UgdG8gdGhlIHNlY3Rpb24gd2l0aCBubyBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRodG1sQm9keS5zY3JvbGxUb3AoZWxlbWVudC5wb3NpdGlvbigpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERlZmluZXMgd2hldGVyIHRvIHJlY29yZCB0aGUgaGlzdG9yeSBmb3IgZWFjaCBoYXNoIGNoYW5nZSBpbiB0aGUgVVJMLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAuc2V0UmVjb3JkSGlzdG9yeSA9IGZ1bmN0aW9uKHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgncmVjb3JkSGlzdG9yeScsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERlZmluZXMgdGhlIHNjcm9sbGluZyBzcGVlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAuc2V0U2Nyb2xsaW5nU3BlZWQgPSBmdW5jdGlvbih2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ3Njcm9sbGluZ1NwZWVkJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBmaXRUb1NlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIEZQLnNldEZpdFRvU2VjdGlvbiA9IGZ1bmN0aW9uKHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnZml0VG9TZWN0aW9uJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBsb2NrQW5jaG9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAuc2V0TG9ja0FuY2hvcnMgPSBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubG9ja0FuY2hvcnMgPSB2YWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbCBvciB0aGUgdHJhY2twYWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBGUC5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nID0gZnVuY3Rpb24gKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgYWRkTW91c2VXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkZE1pZGRsZVdoZWVsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmxpdHkgb2Ygc2Nyb2xsaW5nIHRocm91Z2ggc2VjdGlvbnMgYnkgdXNpbmcgdGhlIG1vdXNlIHdoZWVsL3RyYWNrcGFkIG9yIHRvdWNoIGdlc3R1cmVzLlxyXG4gICAgICAgICogT3B0aW9uYWxseSBhIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGUgZGlyZWN0aW9uIGZvciB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgYXBwbGllZC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0gZGlyZWN0aW9ucyBzdHJpbmcgY29udGFpbmluZyB0aGUgZGlyZWN0aW9uIG9yIGRpcmVjdGlvbnMgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAuc2V0QWxsb3dTY3JvbGxpbmcgPSBmdW5jdGlvbiAodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkaXJlY3Rpb25zLCBmdW5jdGlvbiAoaW5kZXgsIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdtJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIEZQLnNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb3VjaEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBGUC5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVRvdWNoSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2libGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUga2V5Ym9hcmQgYXJyb3cga2V5c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAuc2V0S2V5Ym9hcmRTY3JvbGxpbmcgPSBmdW5jdGlvbiAodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkaXJlY3Rpb25zLCBmdW5jdGlvbiAoaW5kZXgsIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdrJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmtleWJvYXJkU2Nyb2xsaW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBwYWdlIHVwIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAubW92ZVNlY3Rpb25VcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBwcmV2ID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLnByZXYoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy9sb29waW5nIHRvIHRoZSBib3R0b20gaWYgdGhlcmUncyBubyBtb3JlIHNlY3Rpb25zIGFib3ZlXHJcbiAgICAgICAgICAgIGlmICghcHJldi5sZW5ndGggJiYgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXYgPSAkKFNFQ1RJT05fU0VMKS5sYXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShwcmV2LCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgZG93biBvbmUgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIEZQLm1vdmVTZWN0aW9uRG93biA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5uZXh0KFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9vcGluZyB0byB0aGUgdG9wIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzZWN0aW9ucyBiZWxvd1xyXG4gICAgICAgICAgICBpZighbmV4dC5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIChvcHRpb25zLmxvb3BCb3R0b20gfHwgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwpKXtcclxuICAgICAgICAgICAgICAgIG5leHQgPSAkKFNFQ1RJT05fU0VMKS5maXJzdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihuZXh0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKG5leHQsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlIHdpdGggbm8gYW5pbWF0aW9uLlxyXG4gICAgICAgICogQW5jaG9ycyBvciBpbmRleCBwb3NpdGlvbnMgY2FuIGJlIHVzZWQgYXMgcGFyYW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAuc2lsZW50TW92ZVRvID0gZnVuY3Rpb24oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICBGUC5zZXRTY3JvbGxpbmdTcGVlZCAoMCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIEZQLm1vdmVUbyhzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIEZQLnNldFNjcm9sbGluZ1NwZWVkIChvcmlnaW5hbHMuc2Nyb2xsaW5nU3BlZWQsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlLlxyXG4gICAgICAgICogQW5jaG9ycyBvciBpbmRleCBwb3NpdGlvbnMgY2FuIGJlIHVzZWQgYXMgcGFyYW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAubW92ZVRvID0gZnVuY3Rpb24gKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlQW5jaG9yICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihkZXN0aW55Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShkZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIHJpZ2h0IHRoZSBzbGlkZXIgb2YgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICogT3B0aW9uYWwgYHNlY3Rpb25gIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgRlAubW92ZVNsaWRlUmlnaHQgPSBmdW5jdGlvbihzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCduZXh0Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgbGVmdCB0aGUgc2xpZGVyIG9mIHRoZSBhY3RpdmUgc2VjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIEZQLm1vdmVTbGlkZUxlZnQgPSBmdW5jdGlvbihzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCdwcmV2Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiByZXNpemluZyBpcyBmaW5pc2hlZCwgd2UgYWRqdXN0IHRoZSBzbGlkZXMgc2l6ZXMgYW5kIHBvc2l0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEZQLnJlQnVpbGQgPSBmdW5jdGlvbihyZXNpemluZyl7XHJcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lci5oYXNDbGFzcyhERVNUUk9ZRUQpKXsgcmV0dXJuOyB9ICAvL25vdGhpbmcgdG8gZG8gaWYgdGhlIHBsdWdpbiB3YXMgZGVzdHJveWVkXHJcblxyXG4gICAgICAgICAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvd3NIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpOyAgLy91cGRhdGluZyBnbG9iYWwgdmFyXHJcblxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzV3JhcCA9ICQodGhpcykuZmluZChTTElERVNfV1JBUFBFUl9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQodGhpcykuZmluZChTTElERV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlLWNlbGwgZm9yIElFIGFuZCBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZChUQUJMRV9DRUxMX1NFTCkuY3NzKCdoZWlnaHQnLCBnZXRUYWJsZUhlaWdodCgkKHRoaXMpKSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCB3aW5kb3dzSGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9yZXNpemluZyB0aGUgc2Nyb2xsaW5nIGRpdnNcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNsaWRlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2xpbVNjcm9sbGluZygkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNsaW1TY3JvbGxpbmcoJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBwb3NpdGlvbiBmbyB0aGUgRlVMTCBXSURUSCBzbGlkZXMuLi5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXNXcmFwLCBzbGlkZXNXcmFwLmZpbmQoU0xJREVfQUNUSVZFX1NFTCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkluZGV4ID0gYWN0aXZlU2VjdGlvbi5pbmRleChTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2lzbid0IGl0IHRoZSBmaXJzdCBzZWN0aW9uP1xyXG4gICAgICAgICAgICBpZihzZWN0aW9uSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RpbmcgdGhlIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBGUC5zaWxlbnRNb3ZlVG8oc2VjdGlvbkluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVzaXplICkgJiYgcmVzaXppbmcgJiYgb3B0aW9ucy5hZnRlclJlc2l6ZS5jYWxsKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlQnVpbGQgKSAmJiAhcmVzaXppbmcgJiYgb3B0aW9ucy5hZnRlclJlQnVpbGQuY2FsbChjb250YWluZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVHVybnMgZnVsbFBhZ2UuanMgdG8gbm9ybWFsIHNjcm9sbGluZyBtb2RlIHdoZW4gdGhlIHZpZXdwb3J0IGB3aWR0aGAgb3IgYGhlaWdodGBcclxuICAgICAgICAqIGFyZSBzbWFsbGVyIHRoYW4gdGhlIHNldCBsaW1pdCB2YWx1ZXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBGUC5zZXRSZXNwb25zaXZlID0gZnVuY3Rpb24gKGFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHZhciBpc1Jlc3BvbnNpdmUgPSAkYm9keS5oYXNDbGFzcyhSRVNQT05TSVZFKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBpZighaXNSZXNwb25zaXZlKXtcclxuICAgICAgICAgICAgICAgICAgICBGUC5zZXRBdXRvU2Nyb2xsaW5nKGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBGUC5zZXRGaXRUb1NlY3Rpb24oZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoUkVTUE9OU0lWRSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihpc1Jlc3BvbnNpdmUpe1xyXG4gICAgICAgICAgICAgICAgRlAuc2V0QXV0b1Njcm9sbGluZyhvcmlnaW5hbHMuYXV0b1Njcm9sbGluZywgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICBGUC5zZXRGaXRUb1NlY3Rpb24ob3JpZ2luYWxzLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKFJFU1BPTlNJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYoJCh0aGlzKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgLy9pZiBjc3MzIGlzIG5vdCBzdXBwb3J0ZWQsIGl0IHdpbGwgdXNlIGpRdWVyeSBhbmltYXRpb25zXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY3NzMyl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNzczMgPSBzdXBwb3J0M2QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxCYXIgPSBvcHRpb25zLnNjcm9sbEJhciB8fCBvcHRpb25zLmh5YnJpZDtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRPcHRpb25zRnJvbURPTSgpO1xyXG5cclxuICAgICAgICAgICAgcHJlcGFyZURvbSgpO1xyXG4gICAgICAgICAgICBGUC5zZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIEZQLnNldEF1dG9TY3JvbGxpbmcob3B0aW9ucy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhlIHN0YXJ0aW5nIHBvaW50IGlzIGEgc2xpZGU/XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy90aGUgYWN0aXZlIHNlY3Rpb24gaXNuJ3QgdGhlIGZpcnN0IG9uZT8gSXMgbm90IHRoZSBmaXJzdCBzbGlkZSBvZiB0aGUgZmlyc3Qgc2VjdGlvbj8gVGhlbiB3ZSBsb2FkIHRoYXQgc2VjdGlvbi9zbGlkZSBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICBpZiggYWN0aXZlU2xpZGUubGVuZ3RoICYmICAoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSAhPT0gMCB8fCAoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSA9PT0gMCAmJiBhY3RpdmVTbGlkZS5pbmRleCgpICE9PSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKGFjdGl2ZVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9zZXR0aW5nIHRoZSBjbGFzcyBmb3IgdGhlIGJvZHkgZWxlbWVudFxyXG4gICAgICAgICAgICBzZXRCb2R5Q2xhc3MoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9BbmNob3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkd2luZG93Lm9uKCdsb2FkJywgc2Nyb2xsVG9BbmNob3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50cygpe1xyXG4gICAgICAgICAgICAkd2luZG93XHJcbiAgICAgICAgICAgICAgICAvL3doZW4gc2Nyb2xsaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAub24oJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9kZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXHJcbiAgICAgICAgICAgICAgICAub24oJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21taW5nIGJhY2suXHJcbiAgICAgICAgICAgICAgICAuYmx1cihibHVySGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cclxuICAgICAgICAgICAgICAgIC5yZXNpemUocmVzaXplSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAkZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC8vU2xpZGluZyB3aXRoIGFycm93IGtleXMsIGJvdGgsIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICAua2V5ZG93bihrZXlkb3duSGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RvIHByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIHpvb21pbmdcclxuICAgICAgICAgICAgICAgIC5rZXl1cChrZXlVcEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TY3JvbGxzIHRvIHRoZSBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgdGhlIG5hdmlnYXRpb24gYnVsbGV0XHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBTRUNUSU9OX05BVl9TRUwgKyAnIGEnLCBzZWN0aW9uQnVsbGV0SGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL1Njcm9sbHMgdGhlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUgZGVzdGluYXRpb24gZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBTTElERVNfTkFWX0xJTktfU0VMLCBzbGlkZUJ1bGxldEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIFNFQ1RJT05fTkFWX1RPT0xUSVBfU0VMLCB0b29sdGlwVGV4dEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9TY3JvbGxpbmcgaG9yaXpvbnRhbGx5IHdoZW4gY2xpY2tpbmcgb24gdGhlIHNsaWRlciBjb250cm9scy5cclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBTTElERVNfQVJST1dfU0VMLCBzbGlkZUFycm93SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgKiBBcHBseWluZyBub3JtYWxTY3JvbGwgZWxlbWVudHMuXHJcbiAgICAgICAgICAgICogSWdub3JpbmcgdGhlIHNjcm9sbHMgb3ZlciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9ycy5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cyl7XHJcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oJ21vdXNlZW50ZXInLCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRlAuc2V0TW91c2VXaGVlbFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oJ21vdXNlbGVhdmUnLCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZQLnNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXR0aW5nIG9wdGlvbnMgZnJvbSBET00gZWxlbWVudHMgaWYgdGhleSBhcmUgbm90IHByb3ZpZGVkLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0T3B0aW9uc0Zyb21ET00oKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gY29udGFpbmVyLmZpbmQob3B0aW9ucy5zZWN0aW9uU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgLy9ubyBhbmNob3JzIG9wdGlvbj8gQ2hlY2tpbmcgZm9yIHRoZW0gaW4gdGhlIERPTSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmFuY2hvcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuYW5jaG9ycyA9IHNlY3Rpb25zLmZpbHRlcignW2RhdGEtYW5jaG9yXScpLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmRhdGEoJ2FuY2hvcicpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5nZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9ubyB0b29sdGlwb3Mgb3B0aW9uPyBDaGVja2luZyBmb3IgdGhlbSBpbiB0aGUgRE9NIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwcyA9IHNlY3Rpb25zLmZpbHRlcignW2RhdGEtdG9vbHRpcF0nKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKCd0b29sdGlwJykudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFdvcmtzIG92ZXIgdGhlIERPTSBzdHJ1Y3R1cmUgdG8gc2V0IGl0IHVwIGZvciB0aGUgY3VycmVudCBmdWxscGFnZSBvcHRpb25zcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHByZXBhcmVEb20oKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYWRkaW5nIGEgY2xhc3MgdG8gcmVjb2duaXplIHRoZSBjb250YWluZXIgaW50ZXJuYWxseSBpbiB0aGUgY29kZVxyXG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoV1JBUFBFUik7XHJcbiAgICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhFTkFCTEVEKTtcclxuXHJcbiAgICAgICAgICAgIC8vZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcy9pc3N1ZXMvMTUwMlxyXG4gICAgICAgICAgICB3aW5kb3dzSGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcyhERVNUUk9ZRUQpOyAvL2luIGNhc2UgaXQgd2FzIGRlc3Ryb3llZCBiZWZvcmUgaW5pdGlsaXppbmcgaXQgYWdhaW5cclxuXHJcbiAgICAgICAgICAgIGFkZEludGVybmFsU2VsZWN0b3JzKCk7XHJcblxyXG4gICAgICAgICAgICAgLy9zdHlsaW5nIHRoZSBzZWN0aW9ucyAvIHNsaWRlcyAvIG1lbnVcclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCkuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzID0gc2VjdGlvbi5maW5kKFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVNZW51KHNlY3Rpb24sIGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdzIGFueSBzbGlkZVxyXG4gICAgICAgICAgICAgICAgaWYgKG51bVNsaWRlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNsaWRlcyhzZWN0aW9uLCBzbGlkZXMsIG51bVNsaWRlcyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWJsZUNsYXNzKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2ZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gYmUgbW92ZWQgb3V0IG9mIHRoZSBwbHVnaW4gY29udGFpbmVyIGR1ZSB0byBwcm9ibGVtcyB3aXRoIENTUzMuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZml4ZWRFbGVtZW50cyAmJiBvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLmZpeGVkRWxlbWVudHMpLmFwcGVuZFRvKCRib2R5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy92ZXJ0aWNhbCBjZW50ZXJlZCBvZiB0aGUgbmF2aWdhdGlvbiArIGFjdGl2ZSBidWxsZXRcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5uYXZpZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgIGFkZFZlcnRpY2FsTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbmFibGVZb3V0dWJlQVBJKCk7XHJcbiAgICAgICAgICAgIGVuYWJsZVZpZGVtb0FQSSgpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTbGltU2Nyb2xsaW5nSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hZnRlciBET00gYW5kIGltYWdlcyBhcmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAkd2luZG93Lm9uKCdsb2FkJywgY3JlYXRlU2xpbVNjcm9sbGluZ0hhbmRsZXIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFmdGVyUmVuZGVyQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFN0eWxlcyB0aGUgaG9yaXpvbnRhbCBzbGlkZXMgZm9yIGEgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlU2xpZGVzKHNlY3Rpb24sIHNsaWRlcywgbnVtU2xpZGVzKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gbnVtU2xpZGVzICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVXaWR0aCA9IDEwMCAvIG51bVNsaWRlcztcclxuXHJcbiAgICAgICAgICAgIHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19DT05UQUlORVIgKyAnXCIgLz4nKTtcclxuICAgICAgICAgICAgc2xpZGVzLnBhcmVudCgpLndyYXAoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX1dSQVBQRVIgKyAnXCIgLz4nKTtcclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfQ09OVEFJTkVSX1NFTCkuY3NzKCd3aWR0aCcsIHNsaWRlcldpZHRoICsgJyUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG51bVNsaWRlcyA+IDEpe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5jb250cm9sQXJyb3dzKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTbGlkZUFycm93cyhzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNsaWRlc05hdmlnYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFNsaWRlc05hdmlnYXRpb24oc2VjdGlvbiwgbnVtU2xpZGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd3aWR0aCcsIHNsaWRlV2lkdGggKyAnJScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMudmVydGljYWxDZW50ZXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFibGVDbGFzcygkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhcnRpbmdTbGlkZSA9IHNlY3Rpb24uZmluZChTTElERV9BQ1RJVkVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlIHNsaWRlIHdvbid0IGJlIGFuIHN0YXJ0aW5nIHBvaW50LCB0aGUgZGVmYXVsdCB3aWxsIGJlIHRoZSBmaXJzdCBvbmVcclxuICAgICAgICAgICAgLy90aGUgYWN0aXZlIHNlY3Rpb24gaXNuJ3QgdGhlIGZpcnN0IG9uZT8gSXMgbm90IHRoZSBmaXJzdCBzbGlkZSBvZiB0aGUgZmlyc3Qgc2VjdGlvbj8gVGhlbiB3ZSBsb2FkIHRoYXQgc2VjdGlvbi9zbGlkZSBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICBpZiggc3RhcnRpbmdTbGlkZS5sZW5ndGggJiYgICgkKFNFQ1RJT05fQUNUSVZFX1NFTCkuaW5kZXgoU0VDVElPTl9TRUwpICE9PSAwIHx8ICgkKFNFQ1RJT05fQUNUSVZFX1NFTCkuaW5kZXgoU0VDVElPTl9TRUwpID09PSAwICYmIHN0YXJ0aW5nU2xpZGUuaW5kZXgoKSAhPT0gMCkpKXtcclxuICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbChzdGFydGluZ1NsaWRlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXMuZXEoMCkuYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdHlsaW5nIHZlcnRpY2FsIHNlY3Rpb25zXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpe1xyXG4gICAgICAgICAgICAvL2lmIG5vIGFjdGl2ZSBzZWN0aW9uIGlzIGRlZmluZWQsIHRoZSAxc3Qgb25lIHdpbGwgYmUgdGhlIGRlZmF1bHQgb25lXHJcbiAgICAgICAgICAgIGlmKCFpbmRleCAmJiAkKFNFQ1RJT05fQUNUSVZFX1NFTCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb24uY3NzKCdoZWlnaHQnLCB3aW5kb3dzSGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnBhZGRpbmdUb3Ape1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5jc3MoJ3BhZGRpbmctdG9wJywgb3B0aW9ucy5wYWRkaW5nVG9wKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nQm90dG9tKXtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uY3NzKCdwYWRkaW5nLWJvdHRvbScsIG9wdGlvbnMucGFkZGluZ0JvdHRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zZWN0aW9uc0NvbG9yW2luZGV4XSAhPT0gICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIG9wdGlvbnMuc2VjdGlvbnNDb2xvcltpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYW5jaG9yc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmF0dHIoJ2RhdGEtYW5jaG9yJywgb3B0aW9ucy5hbmNob3JzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlcyB0byB0aGUgbWVudSBlbGVtZW50cyBhbmQgYWN0aXZhdGVzIHRoZSBjdXJyZW50IG9uZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlTWVudShzZWN0aW9uLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbmNob3JzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vYWN0aXZhdGluZyB0aGUgbWVudSAvIG5hdiBlbGVtZW50IG9uIGxvYWRcclxuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb24uaGFzQ2xhc3MoQUNUSVZFKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KG9wdGlvbnMuYW5jaG9yc1tpbmRleF0sIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9tb3ZpbmcgdGhlIG1lbnUgb3V0c2lkZSB0aGUgbWFpbiBjb250YWluZXIgaWYgaXQgaXMgaW5zaWRlIChhdm9pZCBwcm9ibGVtcyB3aXRoIGZpeGVkIHBvc2l0aW9ucyB3aGVuIHVzaW5nIENTUzMgdHJhbmZvcm1zKVxyXG4gICAgICAgICAgICBpZihvcHRpb25zLm1lbnUgJiYgb3B0aW9ucy5jc3MzICYmICQob3B0aW9ucy5tZW51KS5jbG9zZXN0KFdSQVBQRVJfU0VMKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmFwcGVuZFRvKCRib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGludGVybmFsIGNsYXNzZXMgdG8gYmUgYWJsZSB0byBwcm92aWRlIGN1c3RvbWl6YWJsZSBzZWxlY3RvcnNcclxuICAgICAgICAqIGtlZXBpbmcgdGhlIGxpbmsgd2l0aCB0aGUgc3R5bGUgc2hlZXQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRJbnRlcm5hbFNlbGVjdG9ycygpe1xyXG4gICAgICAgICAgICAvL2FkZGluZyBpbnRlcm5hbCBjbGFzcyBuYW1lcyB0byB2b2lkIHByb2JsZW0gd2l0aCBjb21tb24gb25lc1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZChvcHRpb25zLnNlY3Rpb25TZWxlY3RvcikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhTRUNUSU9OKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKG9wdGlvbnMuc2xpZGVTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhTTElERSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDcmVhdGVzIHRoZSBjb250cm9sIGFycm93cyBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNsaWRlQXJyb3dzKHNlY3Rpb24pe1xyXG4gICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKS5hZnRlcignPGRpdiBjbGFzcz1cIicgKyBTTElERVNfQVJST1dfUFJFViArICdcIj48L2Rpdj48ZGl2IGNsYXNzPVwiJyArIFNMSURFU19BUlJPV19ORVhUICsgJ1wiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jb250cm9sQXJyb3dDb2xvciE9JyNmZmYnKXtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfQVJST1dfTkVYVF9TRUwpLmNzcygnYm9yZGVyLWNvbG9yJywgJ3RyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICcrb3B0aW9ucy5jb250cm9sQXJyb3dDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0FSUk9XX1BSRVZfU0VMKS5jc3MoJ2JvcmRlci1jb2xvcicsICd0cmFuc3BhcmVudCAnKyBvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yICsgJyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5sb29wSG9yaXpvbnRhbCl7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0FSUk9XX1BSRVZfU0VMKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyBhIHZlcnRpY2FsIG5hdmlnYXRpb24gYmFyLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVmVydGljYWxOYXZpZ2F0aW9uKCl7XHJcbiAgICAgICAgICAgICRib2R5LmFwcGVuZCgnPGRpdiBpZD1cIicgKyBTRUNUSU9OX05BViArICdcIj48dWw+PC91bD48L2Rpdj4nKTtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQoU0VDVElPTl9OQVZfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIG5hdi5hZGRDbGFzcyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnNob3dBY3RpdmVUb29sdGlwID8gU0hPV19BQ1RJVkVfVE9PTFRJUCArICcgJyArIG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uIDogb3B0aW9ucy5uYXZpZ2F0aW9uUG9zaXRpb247XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkKFNFQ1RJT05fU0VMKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFuY2hvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG9wdGlvbnMuYW5jaG9yc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSAnPGxpPjxhIGhyZWY9XCIjJyArIGxpbmsgKyAnXCI+PHNwYW4+PC9zcGFuPjwvYT4nO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRvb2x0aXAgaWYgbmVlZGVkIChkZWZpbmVkIGJ5IHVzZXIpXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9vbHRpcCA9IG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9vbHRpcCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaSArPSAnPGRpdiBjbGFzcz1cIicgKyBTRUNUSU9OX05BVl9UT09MVElQICsgJyAnICsgb3B0aW9ucy5uYXZpZ2F0aW9uUG9zaXRpb24gKyAnXCI+JyArIHRvb2x0aXAgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSArPSAnPC9saT4nO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdi5maW5kKCd1bCcpLmFwcGVuZChsaSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2VudGVyaW5nIGl0IHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLmNzcygnbWFyZ2luLXRvcCcsICctJyArICgkKFNFQ1RJT05fTkFWX1NFTCkuaGVpZ2h0KCkvMikgKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIC8vYWN0aXZhdGluZyB0aGUgY3VycmVudCBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuZmluZCgnbGknKS5lcSgkKFNFQ1RJT05fQUNUSVZFX1NFTCkuaW5kZXgoU0VDVElPTl9TRUwpKS5maW5kKCdhJykuYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyB0aGUgc2xpbSBzY3JvbGwgc2Nyb2xsYmFyIGZvciB0aGUgc2VjdGlvbnMgYW5kIHNsaWRlcyBpbnNpZGUgdGhlbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNsaW1TY3JvbGxpbmdIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKHRoaXMpLmZpbmQoU0xJREVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzbGlkZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTbGltU2Nyb2xsaW5nKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2xpbVNjcm9sbGluZygkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZnRlclJlbmRlckFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBFbmFibGVzIHRoZSBZb3V0dWJlIHZpZGVvcyBBUEkgc28gd2UgY2FuIGNvbnRyb2wgdGhlaXIgZmxvdyBpZiBuZWNlc3NhcnkuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBlbmFibGVZb3V0dWJlQVBJKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBzaWduID0gZ2V0VXJsUGFyYW1TaWduKCQodGhpcykuYXR0cignc3JjJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCAkKHRoaXMpLmF0dHIoJ3NyYycpICsgc2lnbiArICdlbmFibGVqc2FwaT0xJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIEVuYWJsZXMgdGhlIFZpbWVvIHZpZGVvcyBBUEkgc28gd2UgY2FuIGNvbnRyb2wgdGhlaXIgZmxvdyBpZiBuZWNlc3NhcnkuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBlbmFibGVWaWRlbW9BUEkoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ2lmcmFtZVtzcmMqPVwicGxheWVyLnZpbWVvLmNvbS9cIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2lnbiA9IGdldFVybFBhcmFtU2lnbigkKHRoaXMpLmF0dHIoJ3NyYycpKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3JjJywgJCh0aGlzKS5hdHRyKCdzcmMnKSArIHNpZ24gKyAnYXBpPTEnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogUmV0dXJucyB0aGUgcHJlZml4IHNpZ24gdG8gdXNlIGZvciBhIG5ldyBwYXJhbWV0ZXIgaW4gYW4gZXhpc3RlbiBVUkwuXHJcbiAgICAgICAgKlxyXG4gICAgICAgICogQHJldHVybiB7U3RyaW5nfSAgPyB8ICZcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFVybFBhcmFtU2lnbih1cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gKCAhL1xcPy8udGVzdCggdXJsICkgKSA/ICc/JyA6ICcmJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWN0aW9ucyBhbmQgY2FsbGJhY2tzIHRvIGZpcmUgYWZ0ZXJSZW5kZXJcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyUmVuZGVyQWN0aW9ucygpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoQ09NUExFVEVMWSk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlclJlbmRlcil7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlclJlbmRlcihzZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXp5TG9hZChzZWN0aW9uKTtcclxuICAgICAgICAgICAgcGxheU1lZGlhKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyTG9hZCApICYmIG9wdGlvbnMuYWZ0ZXJMb2FkLmNhbGwoc2VjdGlvbiwgc2VjdGlvbi5kYXRhKCdhbmNob3InKSwgKHNlY3Rpb24uaW5kZXgoU0VDVElPTl9TRUwpICsgMSkpO1xyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZW5kZXIgKSAmJiBvcHRpb25zLmFmdGVyUmVuZGVyLmNhbGwoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbGFzdFNjcm9sbCA9IDA7XHJcblxyXG4gICAgICAgIC8vd2hlbiBzY3JvbGxpbmcuLi5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmF1dG9TY3JvbGxpbmcgfHwgb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbERpcmVjdGlvbiA9IGdldFNjcm9sbERpcmVjdGlvbihjdXJyZW50U2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgIHZhciB2aXNpYmxlU2VjdGlvbkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JlZW5fbWlkID0gY3VycmVudFNjcm9sbCArICgkd2luZG93LmhlaWdodCgpIC8gMi4wKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0F0Qm90dG9tID0gJGJvZHkuaGVpZ2h0KCkgLSAkd2luZG93LmhlaWdodCgpID09PSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2hlbiB1c2luZyBgYXV0by1oZWlnaHRgIGZvciBhIHNtYWxsIGxhc3Qgc2VjdGlvbiBpdCB3b24ndCB0YWtlIG1vc3Qgb2YgdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBpZihpc0F0Qm90dG9tKXtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gc2VjdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3Rha2luZyB0aGUgc2VjdGlvbiB3aGljaCBpcyBzaG93aW5nIG1vcmUgY29udGVudCBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGljayB0aGUgdGhlIGxhc3Qgc2VjdGlvbiB3aGljaCBwYXNzZXMgdGhlIG1pZGRsZSBsaW5lIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLm9mZnNldFRvcCA8PSBzY3JlZW5fbWlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc0NvbXBsZXRlbHlJblZpZXdQb3J0KHNjcm9sbERpcmVjdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEkKFNFQ1RJT05fQUNUSVZFX1NFTCkuaGFzQ2xhc3MoQ09NUExFVEVMWSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuYWRkQ2xhc3MoQ09NUExFVEVMWSkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9nZXRpbmcgdGhlIGxhc3Qgb25lLCB0aGUgY3VycmVudCBvbmUgb24gdGhlIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb24gPSAkKHNlY3Rpb25zKS5lcSh2aXNpYmxlU2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NldHRpbmcgdGhlIHZpc2libGUgc2VjdGlvbiBhcyBhY3RpdmUgd2hlbiBtYW51YWxseSBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICAgIC8vZXhlY3V0aW5nIG9ubHkgb25jZSB0aGUgZmlyc3QgdGltZSB3ZSByZWFjaCB0aGUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnRTZWN0aW9uLmhhc0NsYXNzKEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVhdmluZ1NlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uSW5kZXggPSBsZWF2aW5nU2VjdGlvbi5pbmRleChTRUNUSU9OX1NFTCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQoY3VycmVudFNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmNob3JMaW5rICA9IGN1cnJlbnRTZWN0aW9uLmRhdGEoJ2FuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBjdXJyZW50U2VjdGlvbi5pbmRleChTRUNUSU9OX1NFTCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IGN1cnJlbnRTZWN0aW9uLmZpbmQoU0xJREVfQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbmsgPSBhY3RpdmVTbGlkZS5kYXRhKCdhbmNob3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb24uYWRkQ2xhc3MoQUNUSVZFKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKEFDVElWRSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMub25MZWF2ZSApICYmIG9wdGlvbnMub25MZWF2ZS5jYWxsKCBsZWF2aW5nU2VjdGlvbiwgbGVhdmluZ1NlY3Rpb25JbmRleCwgc2VjdGlvbkluZGV4LCB5TW92ZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJMb2FkICkgJiYgb3B0aW9ucy5hZnRlckxvYWQuY2FsbCggY3VycmVudFNlY3Rpb24sIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wTWVkaWEobGVhdmluZ1NlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZChjdXJyZW50U2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlNZWRpYShjdXJyZW50U2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZU1lbnVBbmROYXYoYW5jaG9yTGluaywgc2VjdGlvbkluZGV4IC0gMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLmFuY2hvcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmVlZGVkIHRvIGVudGVyIGluIGhhc2hDaGFuZ2UgZXZlbnQgd2hlbiB1c2luZyB0aGUgbWVudSB3aXRoIGFuY2hvciBsaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNjcm9sbGVkRGVzdGlueSA9IGFuY2hvckxpbms7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3JMaW5rLCBhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NtYWxsIHRpbWVvdXQgaW4gb3JkZXIgdG8gYXZvaWQgZW50ZXJpbmcgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHNjcm9sbGluZyBpcyBub3QgZmluaXNoZWQgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbElkKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZvciB0aGUgYXV0byBhZGp1c3Qgb2YgdGhlIHZpZXdwb3J0IHRvIGZpdCBhIHdob2xlIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSWQyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGZpdFRvU2VjdGlvbiBhZ2FpbiBpbiBjYXNlIGl0IHdhcyBzZXQgdG8gZmFsc2UgYmVmb3JlIHRoZSB0aW1lb3V0IGRlbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhblNjcm9sbCAmJiBvcHRpb25zLmZpdFRvU2VjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsbG93cyB0byBzY3JvbGwgdG8gYW4gYWN0aXZlIHNlY3Rpb24gYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSBzZWN0aW9uIGlzIGFscmVhZHkgYWN0aXZlLCB3ZSBwcmV2ZW50IGZpcmluZyBjYWxsYmFja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pcyhjdXJyZW50U2VjdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFnZSgkKFNFQ1RJT05fQUNUSVZFX1NFTCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuZml0VG9TZWN0aW9uRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYWN0aXZlIHNlY3Rpb24gaGFzIHNlZW4gaW4gaXRzIHdob2xlIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzQ29tcGxldGVseUluVmlld1BvcnQobW92ZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgJHdpbmRvdy5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG1vdmVtZW50ID09ICd1cCcpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdHRvbSA+PSAoJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b3AgPD0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgZGlyZWN0b24gb2YgdGhlIHRoZSBzY3JvbGxpbmcgZmlyZWQgYnkgdGhlIHNjcm9sbCBldmVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNjcm9sbERpcmVjdGlvbihjdXJyZW50U2Nyb2xsKXtcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsID8gJ2Rvd24nIDogJ3VwJztcclxuXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgLy9uZWVkZWQgZm9yIGF1dG8taGVpZ2h0IHNlY3Rpb25zIHRvIGRldGVybWluZSBpZiB3ZSB3YW50IHRvIHNjcm9sbCB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgZGVzdGluYXRpb25cclxuICAgICAgICAgICAgcHJldmlvdXNEZXN0VG9wID0gY3VycmVudFNjcm9sbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgdGhlIHdheSBvZiBzY3JvbGxpbmcgdXAgb3IgZG93bjpcclxuICAgICAgICAqIGJ5ICdhdXRvbWF0aWNhbGx5JyBzY3JvbGxpbmcgYSBzZWN0aW9uIG9yIGJ5IHVzaW5nIHRoZSBkZWZhdWx0IGFuZCBub3JtYWwgc2Nyb2xsaW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsaW5nKHR5cGUsIHNjcm9sbGFibGUpe1xyXG4gICAgICAgICAgICBpZiAoIWlzU2Nyb2xsQWxsb3dlZC5tW3R5cGVdKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY2hlY2ssIHNjcm9sbFNlY3Rpb247XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdkb3duJyl7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9ICdib3R0b20nO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbiA9IEZQLm1vdmVTZWN0aW9uRG93bjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9ICd0b3AnO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbiA9IEZQLm1vdmVTZWN0aW9uVXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbGFibGUubGVuZ3RoID4gMCApe1xyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGUgc2Nyb2xsYmFyIGF0IHRoZSBzdGFydC9lbmQgb2YgdGhlIHNjcm9sbD9cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmlzU2Nyb2xsZWQoY2hlY2ssIHNjcm9sbGFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlZCB1cC9kb3duXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgdG91Y2hTdGFydFkgPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICAgICAgdmFyIHRvdWNoRW5kWSA9IDA7XHJcbiAgICAgICAgdmFyIHRvdWNoRW5kWCA9IDA7XHJcblxyXG4gICAgICAgIC8qIERldGVjdGluZyB0b3VjaCBldmVudHNcclxuXHJcbiAgICAgICAgKiBBcyB3ZSBhcmUgY2hhbmdpbmcgdGhlIHRvcCBwcm9wZXJ0eSBvZiB0aGUgcGFnZSBvbiBzY3JvbGxpbmcsIHdlIGNhbiBub3QgdXNlIHRoZSB0cmFkaXRpb25hbCB3YXkgdG8gZGV0ZWN0IGl0LlxyXG4gICAgICAgICogVGhpcyB3YXksIHRoZSB0b3VjaHN0YXJ0IGFuZCB0aGUgdG91Y2ggbW92ZXMgc2hvd3MgYW4gc21hbGwgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW0gd2hpY2ggaXMgdGhlXHJcbiAgICAgICAgKiB1c2VkIG9uZSB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgZSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsOiBpZiBvbmUgb2YgdGhlIG5vcm1hbFNjcm9sbEVsZW1lbnRzIGlzbid0IHdpdGhpbiBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZCBob3BzIHVwIHRoZSBET00gY2hhaW5cclxuICAgICAgICAgICAgaWYgKCFjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQoZXZlbnQudGFyZ2V0KSAmJiBpc1JlYWxseVRvdWNoKGUpICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBlYXNpbmcgb24gaU9TIGRldmljZXNcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbGFibGUgPSBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxhYmxlKGFjdGl2ZVNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYW5TY3JvbGwgJiYgIXNsaWRlTW92aW5nKSB7IC8vaWYgdGhlcmVzIGFueSAjXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoRXZlbnRzID0gZ2V0RXZlbnRzUGFnZShlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmRZID0gdG91Y2hFdmVudHMueTtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSB0b3VjaEV2ZW50cy54O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIG1vdmVtZW50IGluIHRoZSBYIGF4eXMgaXMgZ3JlYXRlciB0aGFuIGluIHRoZSBZIGFuZCB0aGUgY3VycmVjdCBzZWN0aW9uIGhhcyBzbGlkZXMuLi5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCkubGVuZ3RoICYmIE1hdGguYWJzKHRvdWNoU3RhcnRYIC0gdG91Y2hFbmRYKSA+IChNYXRoLmFicyh0b3VjaFN0YXJ0WSAtIHRvdWNoRW5kWSkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoJHdpbmRvdy5vdXRlcldpZHRoKCkgLyAxMDAgKiBvcHRpb25zLnRvdWNoU2Vuc2l0aXZpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hTdGFydFggPiB0b3VjaEVuZFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZQLm1vdmVTbGlkZVJpZ2h0KCk7IC8vbmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZQLm1vdmVTbGlkZUxlZnQoKTsgLy9wcmV2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsIHNjcm9sbGluZyAob25seSB3aGVuIGF1dG9TY3JvbGxpbmcgaXMgZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0b3VjaFN0YXJ0WSAtIHRvdWNoRW5kWSkgPiAoJHdpbmRvdy5oZWlnaHQoKSAvIDEwMCAqIG9wdGlvbnMudG91Y2hTZW5zaXRpdml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaFN0YXJ0WSA+IHRvdWNoRW5kWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygnZG93bicsIHNjcm9sbGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaEVuZFkgPiB0b3VjaFN0YXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygndXAnLCBzY3JvbGxhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBsb29wIHVwIHRoZSBwYXJlbnQgbm9kZXMgdG8gY2hlY2sgaWYgb25lIG9mIHRoZW0gZXhpc3RzIGluIG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHNcclxuICAgICAgICAgKiBDdXJyZW50bHkgd29ya3Mgd2VsbCBmb3IgaU9TIC0gQW5kcm9pZCBtaWdodCBuZWVkIHNvbWUgdGVzdGluZ1xyXG4gICAgICAgICAqIEBwYXJhbSAge0VsZW1lbnR9IGVsICB0YXJnZXQgZWxlbWVudCAvIGpxdWVyeSBzZWxlY3RvciAoaW4gc3Vic2VxdWVudCBub2RlcylcclxuICAgICAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICBob3AgY3VycmVudCBob3AgY29tcGFyZWQgdG8gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGRcclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZXJlIGlzIGEgbWF0Y2ggdG8gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUGFyZW50Rm9yTm9ybWFsU2Nyb2xsRWxlbWVudCAoZWwsIGhvcCkge1xyXG4gICAgICAgICAgICBob3AgPSBob3AgfHwgMDtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQoZWwpLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvcCA8IG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkICYmXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaXMob3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cykgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3AgPT0gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQocGFyZW50LCArK2hvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQXMgSUUgPj0gMTAgZmlyZXMgYm90aCB0b3VjaCBhbmQgbW91c2UgZXZlbnRzIHdoZW4gdXNpbmcgYSBtb3VzZSBpbiBhIHRvdWNoc2NyZWVuXHJcbiAgICAgICAgKiB0aGlzIHdheSB3ZSBtYWtlIHN1cmUgdGhhdCBpcyByZWFsbHkgYSB0b3VjaCBldmVudCB3aGF0IElFIGlzIGRldGVjdGluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzUmVhbGx5VG91Y2goZSl7XHJcbiAgICAgICAgICAgIC8vaWYgaXMgbm90IElFICAgfHwgIElFIGlzIGRldGVjdGluZyBgdG91Y2hgIG9yIGBwZW5gXHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZS5wb2ludGVyVHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgZS5wb2ludGVyVHlwZSAhPSAnbW91c2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBIYW5kbGVyIGZvciB0aGUgdG91Y2ggc3RhcnQgZXZlbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCl7XHJcbiAgICAgICAgICAgIHZhciBlID0gZXZlbnQub3JpZ2luYWxFdmVudDtcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcHBpbmcgdGhlIGF1dG8gc2Nyb2xsIHRvIGFkanVzdCB0byBhIHNlY3Rpb25cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNSZWFsbHlUb3VjaChlKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFkgPSB0b3VjaEV2ZW50cy55O1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaEV2ZW50cy54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGxhc3QgYG51bWJlcmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QXZlcmFnZShlbGVtZW50cywgbnVtYmVyKXtcclxuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL3Rha2luZyBgbnVtYmVyYCBlbGVtZW50cyBmcm9tIHRoZSBlbmQgdG8gbWFrZSB0aGUgYXZlcmFnZSwgaWYgdGhlcmUgYXJlIG5vdCBlbm91Z2h0LCAxXHJcbiAgICAgICAgICAgIHZhciBsYXN0RWxlbWVudHMgPSBlbGVtZW50cy5zbGljZShNYXRoLm1heChlbGVtZW50cy5sZW5ndGggLSBudW1iZXIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXN0RWxlbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc3VtID0gc3VtICsgbGFzdEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHN1bS9udW1iZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZWN0aW5nIG1vdXNld2hlZWwgc2Nyb2xsaW5nXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBodHRwOi8vYmxvZ3Muc2l0ZXBvaW50c3RhdGljLmNvbS9leGFtcGxlcy90ZWNoL21vdXNlLXdoZWVsL2luZGV4Lmh0bWxcclxuICAgICAgICAgKiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vaHRtbDUtamF2YXNjcmlwdC1tb3VzZS13aGVlbC9cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gTW91c2VXaGVlbEhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGwgPSAkKENPTVBMRVRFTFlfU0VMKS5oYXNDbGFzcyhOT1JNQUxfU0NST0xMKTtcclxuXHJcbiAgICAgICAgICAgIC8vYXV0b3Njcm9sbGluZyBhbmQgbm90IHpvb21pbmc/XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhY29udHJvbFByZXNzZWQgJiYgIWlzTm9ybWFsU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8vIGNyb3NzLWJyb3dzZXIgd2hlZWwgZGVsdGFcclxuICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVkgfHwgLWUuZGV0YWlsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGhvcml6b250YWxEZXRlY3Rpb24gPSB0eXBlb2YgZS53aGVlbERlbHRhWCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGUuZGVsdGFYICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICAgICAgICAgIHZhciBpc1Njcm9sbGluZ1ZlcnRpY2FsbHkgPSAoTWF0aC5hYnMoZS53aGVlbERlbHRhWCkgPCBNYXRoLmFicyhlLndoZWVsRGVsdGEpKSB8fCAoTWF0aC5hYnMoZS5kZWx0YVggKSA8IE1hdGguYWJzKGUuZGVsdGFZKSB8fCAhaG9yaXpvbnRhbERldGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9MaW1pdGluZyB0aGUgYXJyYXkgdG8gMTUwIChsZXRzIG5vdCB3YXN0ZSBtZW1vcnkhKVxyXG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsaW5ncy5sZW5ndGggPiAxNDkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ3Muc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2tlZXBpbmcgcmVjb3JkIG9mIHRoZSBwcmV2aW91cyBzY3JvbGxpbmdzXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdzLnB1c2goTWF0aC5hYnModmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgdG8gc2Nyb2xsIHRoZSBzaXRlIG9uIG1vdXNlIHdoZWVsIHdoZW4gc2Nyb2xsYmFyIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbGFibGUgPSBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxhYmxlKGFjdGl2ZVNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3Qgc2Nyb2xsIGFuZCB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IGN1clRpbWUtcHJldlRpbWU7XHJcbiAgICAgICAgICAgICAgICBwcmV2VGltZSA9IGN1clRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9oYXZlbid0IHRoZXkgc2Nyb2xsZWQgaW4gYSB3aGlsZT9cclxuICAgICAgICAgICAgICAgIC8vKGVub3VnaCB0byBiZSBjb25zaWRlciBhIGRpZmZlcmVudCBzY3JvbGxpbmcgYWN0aW9uIHRvIHNjcm9sbCBhbm90aGVyIHNlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICBpZih0aW1lRGlmZiA+IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbXB0eWluZyB0aGUgYXJyYXksIHdlIGRvbnQgY2FyZSBhYm91dCBvbGQgc2Nyb2xsaW5ncyBmb3Igb3VyIGF2ZXJhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VFbmQgPSBnZXRBdmVyYWdlKHNjcm9sbGluZ3MsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZU1pZGRsZSA9IGdldEF2ZXJhZ2Uoc2Nyb2xsaW5ncywgNzApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FjY2VsZXJhdGluZyA9IGF2ZXJhZ2VFbmQgPj0gYXZlcmFnZU1pZGRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90byBhdm9pZCBkb3VibGUgc3dpcGVzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNBY2NlbGVyYXRpbmcgJiYgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93bj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJywgc2Nyb2xsYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCd1cCcsIHNjcm9sbGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgLy9zdG9wcGluZyB0aGUgYXV0byBzY3JvbGwgdG8gYWRqdXN0IHRvIGEgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgYSBzbGlkZXIgdG8gdGhlIGdpdmVuIGRpcmVjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShkaXJlY3Rpb24sIHNlY3Rpb24pe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IHR5cGVvZiBzZWN0aW9uID09PSAndW5kZWZpbmVkJyA/ICQoU0VDVElPTl9BQ1RJVkVfU0VMKSA6IHNlY3Rpb247XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSBhY3RpdmVTZWN0aW9uLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKTtcclxuICAgICAgICAgICAgdmFyIG51bVNsaWRlcyA9IHNsaWRlcy5maW5kKFNMSURFX1NFTCkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIG9uZSBzbGlkZSBuZWVkZWQgYW5kIG5vdGhpbmcgc2hvdWxkIGJlIHNsaWRpbmdcclxuICAgICAgICAgICAgaWYgKCFzbGlkZXMubGVuZ3RoIHx8IHNsaWRlTW92aW5nIHx8IG51bVNsaWRlcyA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IHNsaWRlcy5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLnByZXYoU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLm5leHQoU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pc24ndCB0aGVyZSBhIG5leHQgc2xpZGUgaW4gdGhlIHNlY3VlbmNlP1xyXG4gICAgICAgICAgICBpZighZGVzdGlueS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgLy9yZXNwZWN0IGxvb3BIb3Jpem9udGFsIHNldHRpblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxvb3BIb3Jpem9udGFsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbnkgPSBjdXJyZW50U2xpZGUuc2libGluZ3MoJzpsYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLnNpYmxpbmdzKCc6Zmlyc3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1haW50YWlucyB0aGUgYWN0aXZlIHNsaWRlcyBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAqIChCZWNhdXNlIGhlIGBzY3JvbGxgIGFuaW1hdGlvbiBtaWdodCBnZXQgbG9zdCB3aXRoIHNvbWUgYWN0aW9ucywgc3VjaCBhcyB3aGVuIHVzaW5nIGNvbnRpbnVvdXNWZXJ0aWNhbClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGtlZXBTbGlkZXNQb3NpdGlvbigpe1xyXG4gICAgICAgICAgICAkKFNMSURFX0FDVElWRV9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbCgkKHRoaXMpLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNEZXN0VG9wID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIFkgcG9zaXRpb24gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24gYW5kXHJcbiAgICAgICAgKiB0aGUgaGVpZ2h0IG9mIHRoZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVzdGluYXRpb25Qb3NpdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIGVsZW1Qb3NpdGlvbiA9IGVsZW1lbnQucG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIG9mIHRoZSBkZXNpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbVBvc2l0aW9uLnRvcDtcclxuICAgICAgICAgICAgdmFyIGlzU2Nyb2xsaW5nRG93biA9ICBlbGVtUG9zaXRpb24udG9wID4gcHJldmlvdXNEZXN0VG9wO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkJvdHRvbSA9IHBvc2l0aW9uIC0gd2luZG93c0hlaWdodCArIGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgdmFyIGJpZ1NlY3Rpb25zRGVzdGluYXRpb24gPSBvcHRpb25zLmJpZ1NlY3Rpb25zRGVzdGluYXRpb247XHJcblxyXG4gICAgICAgICAgICAvL2lzIHRoZSBkZXN0aW5hdGlvbiBlbGVtZW50IGJpZ2dlciB0aGFuIHRoZSB2aWV3cG9ydD9cclxuICAgICAgICAgICAgaWYoZWxlbWVudC5vdXRlckhlaWdodCgpID4gd2luZG93c0hlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cD8gXHJcbiAgICAgICAgICAgICAgICBpZighaXNTY3JvbGxpbmdEb3duICYmICFiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uIHx8IGJpZ1NlY3Rpb25zRGVzdGluYXRpb24gPT09ICdib3R0b20nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBzZWN0aW9uQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3NlY3Rpb25zIGVxdWFsIG9yIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgaGVpZ2h0ICYmIHNjcm9sbGluZyBkb3duPyB8fCAgaXMgcmVzaXppbmcgYW5kIGl0cyBpbiB0aGUgbGFzdCBzZWN0aW9uXHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNTY3JvbGxpbmdEb3duIHx8IChpc1Jlc2l6aW5nICYmIGVsZW1lbnQuaXMoJzpsYXN0LWNoaWxkJykpICl7XHJcbiAgICAgICAgICAgICAgICAvL1RoZSBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgS2VlcGluZyByZWNvcmQgb2YgdGhlIGxhc3Qgc2Nyb2xsZWQgcG9zaXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLlxyXG4gICAgICAgICAgICBObyBjb252ZW50aW9uYWwgbWV0aG9kcyBjYW4gYmUgdXNlZCBhcyB0aGUgc2Nyb2xsIGJhciBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICBBTkQgdGhlIHNlY3Rpb24gbWlnaHQgbm90IGJlIGFjdGl2ZSBpZiBpdCBpcyBhdXRvLWhlaWdodCBhbmQgZGlkbnQgcmVhY2ggdGhlIG1pZGRsZVxyXG4gICAgICAgICAgICBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdGhlIHNpdGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHNjcm9sbHMgdG8gdGhlIHNsaWRlIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxQYWdlKGVsZW1lbnQsIGNhbGxiYWNrLCBpc01vdmVtZW50VXApe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcpeyByZXR1cm47IH0gLy90aGVyZSdzIG5vIGVsZW1lbnQgdG8gc2Nyb2xsLCBsZWF2aW5nIHRoZSBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgdmFyIGR0b3AgPSBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy9sb2NhbCB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdmFyIHYgPSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgaXNNb3ZlbWVudFVwOiBpc01vdmVtZW50VXAsXHJcbiAgICAgICAgICAgICAgICBkdG9wOiBkdG9wLFxyXG4gICAgICAgICAgICAgICAgeU1vdmVtZW50OiBnZXRZbW92ZW1lbnQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBlbGVtZW50LmRhdGEoJ2FuY2hvcicpLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBlbGVtZW50LmluZGV4KFNFQ1RJT05fU0VMKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlOiBlbGVtZW50LmZpbmQoU0xJREVfQUNUSVZFX1NFTCksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uOiAkKFNFQ1RJT05fQUNUSVZFX1NFTCksXHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nU2VjdGlvbjogJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSArIDEsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYWNoaW5nIHRoZSB2YWx1ZSBvZiBpc1Jlc2l6aW5nIGF0IHRoZSBtb21tZW50IHRoZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuICAgICAgICAgICAgICAgIC8vYmVjYXVzZSBpdCB3aWxsIGJlIGNoZWNrZWQgbGF0ZXIgaW5zaWRlIGEgc2V0VGltZW91dCBhbmQgdGhlIHZhbHVlIG1pZ2h0IGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxJc1Jlc2l6aW5nOiBpc1Jlc2l6aW5nXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL3F1aXRpbmcgd2hlbiBkZXN0aW5hdGlvbiBzY3JvbGwgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgb25lXHJcbiAgICAgICAgICAgIGlmKCh2LmFjdGl2ZVNlY3Rpb24uaXMoZWxlbWVudCkgJiYgIWlzUmVzaXppbmcpIHx8IChvcHRpb25zLnNjcm9sbEJhciAmJiAkd2luZG93LnNjcm9sbFRvcCgpID09PSB2LmR0b3AgJiYgIWVsZW1lbnQuaGFzQ2xhc3MoQVVUT19IRUlHSFQpICkpeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGlmKHYuYWN0aXZlU2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbmsgPSB2LmFjdGl2ZVNsaWRlLmRhdGEoJ2FuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlSW5kZXggPSB2LmFjdGl2ZVNsaWRlLmluZGV4KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB3ZSBuZWVkIHRvIHdyYXAgYXJvdW5kXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgdHlwZW9mICh2LmlzTW92ZW1lbnRVcCkgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgICAgICgoIXYuaXNNb3ZlbWVudFVwICYmIHYueU1vdmVtZW50ID09ICd1cCcpIHx8IC8vIEludGVuZGluZyB0byBzY3JvbGwgZG93biBidXQgYWJvdXQgdG8gZ28gdXAgb3JcclxuICAgICAgICAgICAgICAgICh2LmlzTW92ZW1lbnRVcCAmJiB2LnlNb3ZlbWVudCA9PSAnZG93bicpKSkgeyAvLyBpbnRlbmRpbmcgdG8gc2Nyb2xsIHVwIGJ1dCBhYm91dCB0byBnbyBkb3duXHJcblxyXG4gICAgICAgICAgICAgICAgdiA9IGNyZWF0ZUluZmluaXRlU2VjdGlvbnModik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2FsbGJhY2sgKG9uTGVhdmUpIGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgIGlmKCQuaXNGdW5jdGlvbihvcHRpb25zLm9uTGVhdmUpICYmICF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLm9uTGVhdmUuY2FsbCh2LmFjdGl2ZVNlY3Rpb24sIHYubGVhdmluZ1NlY3Rpb24sICh2LnNlY3Rpb25JbmRleCArIDEpLCB2LnlNb3ZlbWVudCkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0b3BNZWRpYSh2LmFjdGl2ZVNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhBQ1RJVkUpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgbGF6eUxvYWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLm9uTGVhdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ByZXZlbnRpbmcgZnJvbSBhY3RpdmF0aW5nIHRoZSBNb3VzZVdoZWVsSGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAvL21vcmUgdGhhbiBvbmNlIGlmIHRoZSBwYWdlIGlzIHNjcm9sbGluZ1xyXG4gICAgICAgICAgICBjYW5TY3JvbGwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yTGluaywgdi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAgICAgICBwZXJmb3JtTW92ZW1lbnQodik7XHJcblxyXG4gICAgICAgICAgICAvL2ZsYWcgdG8gYXZvaWQgY2FsbGluZ24gYHNjcm9sbFBhZ2UoKWAgdHdpY2UgaW4gY2FzZSBvZiB1c2luZyBhbmNob3IgbGlua3NcclxuICAgICAgICAgICAgbGFzdFNjcm9sbGVkRGVzdGlueSA9IHYuYW5jaG9yTGluaztcclxuXHJcbiAgICAgICAgICAgIC8vYXZvaWQgZmlyaW5nIGl0IHR3aWNlIChhcyBpdCBkb2VzIGFsc28gb24gc2Nyb2xsKVxyXG4gICAgICAgICAgICBhY3RpdmF0ZU1lbnVBbmROYXYodi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBlcmZvcm1zIHRoZSBtb3ZlbWVudCAoYnkgQ1NTMyBvciBieSBqUXVlcnkpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwZXJmb3JtTW92ZW1lbnQodil7XHJcbiAgICAgICAgICAgIC8vIHVzaW5nIENTUzMgdHJhbnNsYXRlIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY3NzMyAmJiBvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIHYuZHRvcCArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZXZlbiB3aGVuIHRoZSBzY3JvbGxpbmdTcGVlZCBpcyAwIHRoZXJlJ3MgYSBsaXR0bGUgZGVsYXksIHdoaWNoIG1pZ2h0IGNhdXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmdTcGVlZCB0byBjaGFuZ2UgaW4gY2FzZSBvZiB1c2luZyBzaWxlbnRNb3ZlVG8oKTtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXNpbmcgalF1ZXJ5IGFuaW1hdGVcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxTZXR0aW5ncyA9IGdldFNjcm9sbFNldHRpbmdzKHYpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCkuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZXR0aW5ncy5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgb3B0aW9ucy5lYXNpbmcpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uICgpIHsgLy9vbmx5IG9uZSBzaW5nbGUgY2FsbGJhY2sgaW4gY2FzZSBvZiBhbmltYXRpbmcgIGBodG1sLCBib2R5YFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhhY2shXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0aW1lb3V0IHByZXZlbnRzIHNldHRpbmcgdGhlIG1vc3QgZG9taW5hbnQgc2VjdGlvbiBpbiB0aGUgdmlld3BvcnQgYXMgXCJhY3RpdmVcIiB3aGVuIHRoZSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGVkIHRvIGEgc21hbGxlciBzZWN0aW9uIGJ5IHVzaW5nIHRoZSBtb3VzZXdoZWVsIChhdXRvIHNjcm9sbGluZykgcmF0aGVyIHRoYW4gZHJhZ2luZyB0aGUgc2Nyb2xsIGJhci5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdXNpbmcgc2Nyb2xsQmFyOnRydWUgSXQgc2VlbXMgbGlrZSB0aGUgc2Nyb2xsIGV2ZW50cyBzdGlsbCBnZXR0aW5nIHByb3BhZ2F0ZWQgZXZlbiBhZnRlciB0aGUgc2Nyb2xsaW5nIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgc2Nyb2xsaW5nIHNldHRpbmdzIGRlcGVuZGluZyBvbiB0aGUgcGx1Z2luIGF1dG9TY3JvbGxpbmcgb3B0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTY3JvbGxTZXR0aW5ncyh2KXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwub3B0aW9ucyA9IHsgJ3RvcCc6IC12LmR0b3B9O1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSBXUkFQUEVSX1NFTDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwub3B0aW9ucyA9IHsgJ3Njcm9sbFRvcCc6IHYuZHRvcH07XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwuZWxlbWVudCA9ICdodG1sLCBib2R5JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNjcm9sbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBzZWN0aW9ucyBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lIHRvIGNyZWF0ZSB0aGUgaW5maW5pdGUgZWZmZWN0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5maW5pdGVTZWN0aW9ucyh2KXtcclxuICAgICAgICAgICAgLy8gU2Nyb2xsaW5nIGRvd25cclxuICAgICAgICAgICAgaWYgKCF2LmlzTW92ZW1lbnRVcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBhbGwgcHJldmlvdXMgc2VjdGlvbnMgdG8gYWZ0ZXIgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuYWZ0ZXIodi5hY3RpdmVTZWN0aW9uLnByZXZBbGwoU0VDVElPTl9TRUwpLmdldCgpLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IC8vIFNjcm9sbGluZyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBhbGwgbmV4dCBzZWN0aW9ucyB0byBiZWZvcmUgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuYmVmb3JlKHYuYWN0aXZlU2VjdGlvbi5uZXh0QWxsKFNFQ1RJT05fU0VMKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBkaXNwbGF5ZWQgcG9zaXRpb24gKG5vdyB0aGF0IHdlIGNoYW5nZWQgdGhlIGVsZW1lbnQgb3JkZXIpXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgkKFNFQ1RJT05fQUNUSVZFX1NFTCkucG9zaXRpb24oKS50b3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzYXZlIGZvciBsYXRlciB0aGUgZWxlbWVudHMgdGhhdCBzdGlsbCBuZWVkIHRvIGJlIHJlb3JkZXJlZFxyXG4gICAgICAgICAgICB2LndyYXBBcm91bmRFbGVtZW50cyA9IHYuYWN0aXZlU2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFuaW1hdGlvbiB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdi5kdG9wID0gdi5lbGVtZW50LnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICB2LnlNb3ZlbWVudCA9IGdldFltb3ZlbWVudCh2LmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEZpeCBzZWN0aW9uIG9yZGVyIGFmdGVyIGNvbnRpbnVvdXNWZXJ0aWNhbCBjaGFuZ2VzIGhhdmUgYmVlbiBhbmltYXRlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyICh2KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCBpcyBpbiBlZmZlY3QgKGFuZCBhdXRvU2Nyb2xsaW5nIHdvdWxkIGFsc28gYmUgaW4gZWZmZWN0IHRoZW4pLFxyXG4gICAgICAgICAgICAvLyBmaW5pc2ggbW92aW5nIHRoZSBlbGVtZW50cyBhcm91bmQgc28gdGhlIGRpcmVjdCBuYXZpZ2F0aW9uIHdpbGwgZnVuY3Rpb24gbW9yZSBzaW1wbHlcclxuICAgICAgICAgICAgaWYgKCF2LndyYXBBcm91bmRFbGVtZW50cyB8fCAhdi53cmFwQXJvdW5kRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2LmlzTW92ZW1lbnRVcCkge1xyXG4gICAgICAgICAgICAgICAgJChTRUNUSU9OX0ZJUlNUX1NFTCkuYmVmb3JlKHYud3JhcEFyb3VuZEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoU0VDVElPTl9MQVNUX1NFTCkuYWZ0ZXIodi53cmFwQXJvdW5kRWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaWxlbnRTY3JvbGwoJChTRUNUSU9OX0FDVElWRV9TRUwpLnBvc2l0aW9uKCkudG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBhY3RpdmUgc2xpZGVzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGtlZXBTbGlkZXNQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWN0aW9ucyB0byBkbyBvbmNlIHRoZSBzZWN0aW9uIGlzIGxvYWRlZC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyU2VjdGlvbkxvYWRzICh2KXtcclxuICAgICAgICAgICAgY29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyKHYpO1xyXG5cclxuICAgICAgICAgICAgLy9jYWxsYmFjayAoYWZ0ZXJMb2FkKSBpZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlckxvYWQpICYmICF2LmxvY2FsSXNSZXNpemluZyAmJiBvcHRpb25zLmFmdGVyTG9hZC5jYWxsKHYuZWxlbWVudCwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmFmdGVyTG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgcGxheU1lZGlhKHYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHYuZWxlbWVudC5hZGRDbGFzcyhDT01QTEVURUxZKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKENPTVBMRVRFTFkpO1xyXG5cclxuICAgICAgICAgICAgY2FuU2Nyb2xsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICQuaXNGdW5jdGlvbih2LmNhbGxiYWNrKSAmJiB2LmNhbGxiYWNrLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIExhenkgbG9hZHMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxhenlMb2FkKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgZGVzdGlueS5maW5kKCdpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY10nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsICQodGhpcykuZGF0YSgnc3JjJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuaXMoJ3NvdXJjZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3ZpZGVvJykuZ2V0KDApLmxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBsYXlzIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlNZWRpYShkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vcGxheWluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xyXG4gICAgICAgICAgICBkZXN0aW55LmZpbmQoJ3ZpZGVvLCBhdWRpbycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKS5nZXQoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgJiYgdHlwZW9mIGVsZW1lbnQucGxheSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3lvdXR1YmUgdmlkZW9zXHJcbiAgICAgICAgICAgIGRlc3RpbnkuZmluZCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCAveW91dHViZVxcLmNvbVxcL2VtYmVkXFwvLy50ZXN0KCQodGhpcykuYXR0cignc3JjJykpICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBsYXlWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFN0b3BzIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BNZWRpYShkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcHBpbmcgSFRNTDUgbWVkaWEgZWxlbWVudHNcclxuICAgICAgICAgICAgZGVzdGlueS5maW5kKCd2aWRlbywgYXVkaW8nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta2VlcHBsYXlpbmcnKSAmJiB0eXBlb2YgZWxlbWVudC5wYXVzZSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy95b3V0dWJlIHZpZGVvc1xyXG4gICAgICAgICAgICBkZXN0aW55LmZpbmQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggL3lvdXR1YmVcXC5jb21cXC9lbWJlZFxcLy8udGVzdCgkKHRoaXMpLmF0dHIoJ3NyYycpKSAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta2VlcHBsYXlpbmcnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5nZXQoMCkuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsJyonKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGFjdGl2ZSBzbGlkZSAob3Igc2VjdGlvbikgZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gZGVzdGlueS5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICBpZiggc2xpZGUubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9ICQoc2xpZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdGlueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0byB0aGUgYW5jaG9yIGluIHRoZSBVUkwgd2hlbiBsb2FkaW5nIHRoZSBzaXRlXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxUb0FuY2hvcigpe1xyXG4gICAgICAgICAgICAvL2dldHRpbmcgdGhlIGFuY2hvciBsaW5rIGluIHRoZSBVUkwgYW5kIGRlbGV0aW5nIHRoZSBgI2BcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWVbMF0pO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWVbMV0pO1xyXG5cclxuICAgICAgICAgICAgaWYoc2VjdGlvbil7ICAvL2lmIHRoZXJlcyBhbnkgI1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hbmltYXRlQW5jaG9yKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbiwgc2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgRlAuc2lsZW50TW92ZVRvKHNlY3Rpb24sIHNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcclxuICAgICAgICAqIChhIHdheSB0byBkZXRlY3QgYmFjayBoaXN0b3J5IGJ1dHRvbiBhcyB3ZSBwbGF5IHdpdGggdGhlIGhhc2hlcyBvbiB0aGUgVVJMKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaGFzaENoYW5nZUhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaWYoIWlzU2Nyb2xsaW5nICYmICFvcHRpb25zLmxvY2tBbmNob3JzKXtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZVswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWVbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3doZW4gbW92aW5nIHRvIGEgc2xpZGUgaW4gdGhlIGZpcnN0IHNlY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lIChmaXJzdCB0aW1lIHRvIGFkZCBhbiBhbmNob3IgdG8gdGhlIFVSTClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNGaXJzdFNsaWRlTW92ZSA9ICAodHlwZW9mIGxhc3RTY3JvbGxlZERlc3RpbnkgPT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNGaXJzdFNjcm9sbE1vdmUgPSAodHlwZW9mIGxhc3RTY3JvbGxlZERlc3RpbnkgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzbGlkZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIXNsaWRlTW92aW5nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8qaW4gb3JkZXIgdG8gY2FsbCBzY3JvbGxwYWdlKCkgb25seSBvbmNlIGZvciBlYWNoIGRlc3RpbmF0aW9uIGF0IGEgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIEl0IGlzIGNhbGxlZCB0d2ljZSBmb3IgZWFjaCBzY3JvbGwgb3RoZXJ3aXNlLCBhcyBpbiBjYXNlIG9mIHVzaW5nIGFuY2hvcmxpbmtzIGBoYXNoQ2hhbmdlYFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50IGlzIGZpcmVkIG9uIGV2ZXJ5IHNjcm9sbCB0b28uKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHNlY3Rpb24gJiYgc2VjdGlvbiAhPT0gbGFzdFNjcm9sbGVkRGVzdGlueSkgJiYgIWlzRmlyc3RTbGlkZU1vdmUgfHwgaXNGaXJzdFNjcm9sbE1vdmUgfHwgKCFzbGlkZU1vdmluZyAmJiBsYXN0U2Nyb2xsZWRTbGlkZSAhPSBzbGlkZSApKSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbiwgc2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TbGlkaW5nIHdpdGggYXJyb3cga2V5cywgYm90aCwgdmVydGljYWwgYW5kIGhvcml6b250YWxcclxuICAgICAgICBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlKSB7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoa2V5ZG93bklkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gJCgnOmZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICBpZighYWN0aXZlRWxlbWVudC5pcygndGV4dGFyZWEnKSAmJiAhYWN0aXZlRWxlbWVudC5pcygnaW5wdXQnKSAmJiAhYWN0aXZlRWxlbWVudC5pcygnc2VsZWN0JykgJiZcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYXR0cignY29udGVudEVkaXRhYmxlJykgIT09IFwidHJ1ZVwiICYmIGFjdGl2ZUVsZW1lbnQuYXR0cignY29udGVudEVkaXRhYmxlJykgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmtleWJvYXJkU2Nyb2xsaW5nICYmIG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5Q29kZSA9IGUud2hpY2g7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBzY3JvbGwgd2l0aCBhcnJvdyBrZXlzICYgc3BhY2ViYXIgJiBQYWdlIFVwICYgRG93biBrZXlzXHJcbiAgICAgICAgICAgICAgICB2YXIga2V5Q29udHJvbHMgPSBbNDAsIDM4LCAzMiwgMzMsIDM0XTtcclxuICAgICAgICAgICAgICAgIGlmKCQuaW5BcnJheShrZXlDb2RlLCBrZXlDb250cm9scykgPiAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xQcmVzc2VkID0gZS5jdHJsS2V5O1xyXG5cclxuICAgICAgICAgICAgICAgIGtleWRvd25JZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBvbmtleWRvd24oZSk7XHJcbiAgICAgICAgICAgICAgICB9LDE1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvb2x0aXBUZXh0SGFuZGxlcigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90byBwcmV2ZW50IHNjcm9sbGluZyB3aGlsZSB6b29taW5nXHJcbiAgICAgICAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBpZihpc1dpbmRvd0ZvY3VzZWQpeyAvL3RoZSBrZXl1cCBnZXRzIGZpcmVkIG9uIG5ldyB0YWIgY3RybCArIHQgaW4gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgY29udHJvbFByZXNzZWQgPSBlLmN0cmxLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIC8vbWlkZGxlIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdW5iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIC8vbWlkZGxlIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vZmYoJ21vdXNlbW92ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Njcm9sbGluZyBob3Jpem9udGFsbHkgd2hlbiBjbGlja2luZyBvbiB0aGUgc2xpZGVyIGNvbnRyb2xzLlxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlQXJyb3dIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJCh0aGlzKS5jbG9zZXN0KFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFNMSURFU19QUkVWKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgRlAubW92ZVNsaWRlTGVmdChzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5tLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICBGUC5tb3ZlU2xpZGVSaWdodChzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy93aGVuIG9wZW5pbmcgYSBuZXcgdGFiIChjdHJsICsgdCksIGBjb250cm9sYCB3b24ndCBiZSBwcmVzc2VkIHdoZW4gY29tbWluZyBiYWNrLlxyXG4gICAgICAgIGZ1bmN0aW9uIGJsdXJIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlzV2luZG93Rm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cm9sUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TY3JvbGxzIHRvIHRoZSBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgdGhlIG5hdmlnYXRpb24gYnVsbGV0XHJcbiAgICAgICAgZnVuY3Rpb24gc2VjdGlvbkJ1bGxldEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgpO1xyXG4gICAgICAgICAgICBzY3JvbGxQYWdlKCQoU0VDVElPTl9TRUwpLmVxKGluZGV4KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Njcm9sbHMgdGhlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUgZGVzdGluYXRpb24gZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVCdWxsZXRIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKHRoaXMpLmNsb3Nlc3QoU0VDVElPTl9TRUwpLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBzbGlkZXMuZmluZChTTElERV9TRUwpLmVxKCQodGhpcykuY2xvc2VzdCgnbGknKS5pbmRleCgpKTtcclxuXHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBLZXlkb3duIGV2ZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbmtleWRvd24oZSl7XHJcbiAgICAgICAgICAgIHZhciBzaGlmdFByZXNzZWQgPSBlLnNoaWZ0S2V5O1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICAvL3VwXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgY2FzZSAzMzpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLm1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9kb3duXHJcbiAgICAgICAgICAgICAgICBjYXNlIDMyOiAvL3NwYWNlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpZnRQcmVzc2VkICYmIGlzU2Nyb2xsQWxsb3dlZC5rLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRlAubW92ZVNlY3Rpb25VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5kb3duKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRlAubW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSG9tZVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNjpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLm1vdmVUbygxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9FbmRcclxuICAgICAgICAgICAgICAgIGNhc2UgMzU6XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLmRvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGUC5tb3ZlVG8oICQoU0VDVElPTl9TRUwpLmxlbmd0aCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL2xlZnRcclxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLm1vdmVTbGlkZUxlZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLm1vdmVTbGlkZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBleGl0IHRoaXMgaGFuZGxlciBmb3Igb3RoZXIga2V5c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVjdGluZyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtb3VzZSBtb3ZlbWVudC5cclxuICAgICAgICAqIFVzZWQgb25seSBmb3IgdGhlIG1pZGRsZSBidXR0b24gb2YgdGhlIG1vdXNlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIG9sZFBhZ2VZID0gMDtcclxuICAgICAgICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBpZihjYW5TY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIHVwXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5wYWdlWSA8IG9sZFBhZ2VZICYmIGlzU2Nyb2xsQWxsb3dlZC5tLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICBGUC5tb3ZlU2VjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIGRvd25cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZS5wYWdlWSA+IG9sZFBhZ2VZICYmIGlzU2Nyb2xsQWxsb3dlZC5tLmRvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgIEZQLm1vdmVTZWN0aW9uRG93bigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyBob3Jpem9udGFsIHNsaWRlcnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnlQb3MgPSBkZXN0aW55LnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUluZGV4ID0gZGVzdGlueS5pbmRleCgpO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNsaWRlcy5jbG9zZXN0KFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IHNlY3Rpb24uaW5kZXgoU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yTGluayA9IHNlY3Rpb24uZGF0YSgnYW5jaG9yJyk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXNOYXYgPSBzZWN0aW9uLmZpbmQoU0xJREVTX05BVl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBnZXRBbmNob3IoZGVzdGlueSk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSBzZWN0aW9uLmZpbmQoU0xJREVfQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2NhY2hpbmcgdGhlIHZhbHVlIG9mIGlzUmVzaXppbmcgYXQgdGhlIG1vbW1lbnQgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAvL2JlY2F1c2UgaXQgd2lsbCBiZSBjaGVja2VkIGxhdGVyIGluc2lkZSBhIHNldFRpbWVvdXQgYW5kIHRoZSB2YWx1ZSBtaWdodCBjaGFuZ2VcclxuICAgICAgICAgICAgdmFyIGxvY2FsSXNSZXNpemluZyA9IGlzUmVzaXppbmc7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLm9uU2xpZGVMZWF2ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldlNsaWRlSW5kZXggPSBwcmV2U2xpZGUuaW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIHZhciB4TW92ZW1lbnQgPSBnZXRYbW92ZW1lbnQocHJldlNsaWRlSW5kZXgsIHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgICAgIGlmKCFsb2NhbElzUmVzaXppbmcgJiYgeE1vdmVtZW50IT09J25vbmUnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZigkLmlzRnVuY3Rpb24oIG9wdGlvbnMub25TbGlkZUxlYXZlICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLm9uU2xpZGVMZWF2ZS5jYWxsKCBwcmV2U2xpZGUsIGFuY2hvckxpbmssIChzZWN0aW9uSW5kZXggKyAxKSwgcHJldlNsaWRlSW5kZXgsIHhNb3ZlbWVudCwgc2xpZGVJbmRleCApID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0b3BNZWRpYShwcmV2U2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgZGVzdGlueS5hZGRDbGFzcyhBQ1RJVkUpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgaWYoIWxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBsYXp5TG9hZChkZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwgJiYgb3B0aW9ucy5jb250cm9sQXJyb3dzKXtcclxuICAgICAgICAgICAgICAgIC8vaGlkZGluZyBpdCBmb3IgdGhlIGZpc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0FSUk9XX1BSRVZfU0VMKS50b2dnbGUoc2xpZGVJbmRleCE9PTApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaGlkZGluZyBpdCBmb3IgdGhlIGxhc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0FSUk9XX05FWFRfU0VMKS50b2dnbGUoIWRlc3RpbnkuaXMoJzpsYXN0LWNoaWxkJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL29ubHkgY2hhbmdpbmcgdGhlIFVSTCBpZiB0aGUgc2xpZGVzIGFyZSBpbiB0aGUgY3VycmVudCBzZWN0aW9uIChub3QgZm9yIHJlc2l6ZSByZS1hZGp1c3RpbmcpXHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb24uaGFzQ2xhc3MoQUNUSVZFKSl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShzbGlkZUluZGV4LCBzbGlkZUFuY2hvciwgYW5jaG9yTGluaywgc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFmdGVyU2xpZGVMb2FkcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgICAgICBpZighbG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJTbGlkZUxvYWQgKSAmJiBvcHRpb25zLmFmdGVyU2xpZGVMb2FkLmNhbGwoIGRlc3RpbnksIGFuY2hvckxpbmssIChzZWN0aW9uSW5kZXggKyAxKSwgc2xpZGVBbmNob3IsIHNsaWRlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGxheU1lZGlhKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vbGV0dGluZyB0aGVtIHNsaWRlIGFnYWluXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgtJyArIE1hdGgucm91bmQoZGVzdGlueVBvcy5sZWZ0KSArICdweCwgMHB4LCAwcHgpJztcclxuXHJcbiAgICAgICAgICAgICAgICBhZGRBbmltYXRpb24oc2xpZGVzLmZpbmQoU0xJREVTX0NPTlRBSU5FUl9TRUwpLCBvcHRpb25zLnNjcm9sbGluZ1NwZWVkPjApLmNzcyhnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnNjcm9sbGluZ1NwZWVkLCBvcHRpb25zLmVhc2luZyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgOiBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdClcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQsIG9wdGlvbnMuZWFzaW5nLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVzTmF2LmZpbmQoQUNUSVZFX1NFTCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgc2xpZGVzTmF2LmZpbmQoJ2xpJykuZXEoc2xpZGVJbmRleCkuZmluZCgnYScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNIZWlnaHQgPSB3aW5kb3dzSGVpZ2h0O1xyXG5cclxuICAgICAgICAvL3doZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgaXQgbmVlZHMgdG8gZ2V0IHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVidWlsZCBpbW1lZGlhdGVseSBvbiB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5Ym9hcmQgaXMgTk9UIHZpc2libGVcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlRWxlbWVudC5pcygndGV4dGFyZWEnKSAmJiAhYWN0aXZlRWxlbWVudC5pcygnaW5wdXQnKSAmJiAhYWN0aXZlRWxlbWVudC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFraW5nIHN1cmUgdGhlIGNoYW5nZSBpbiB0aGUgdmlld3BvcnQgc2l6ZSBpcyBlbm91Z2ggdG8gZm9yY2UgYSByZWJ1aWxkLiAoMjAgJSBvZiB0aGUgd2luZG93IHRvIGF2b2lkIHByb2JsZW1zIHdoZW4gaGlkZGluZyBzY3JvbGwgYmFycylcclxuICAgICAgICAgICAgICAgICAgICBpZiggTWF0aC5hYnMoY3VycmVudEhlaWdodCAtIHByZXZpb3VzSGVpZ2h0KSA+ICgyMCAqIE1hdGgubWF4KHByZXZpb3VzSGVpZ2h0LCBjdXJyZW50SGVpZ2h0KSAvIDEwMCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRlAucmVCdWlsZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL2luIG9yZGVyIHRvIGNhbGwgdGhlIGZ1bmN0aW9ucyBvbmx5IHdoZW4gdGhlIHJlc2l6ZSBpcyBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyOTg2MTIvanF1ZXJ5LWhvdy10by1jYWxsLXJlc2l6ZS1ldmVudC1vbmx5LW9uY2UtaXRzLWZpbmlzaGVkLXJlc2l6aW5nXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2l6ZUlkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZQLnJlQnVpbGQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAzNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBpZiB0aGUgc2l0ZSBuZWVkcyB0byBnZXQgcmVzcG9uc2l2ZSBhbmQgZGlzYWJsZXMgYXV0b1Njcm9sbGluZyBpZiBzby5cclxuICAgICAgICAqIEEgY2xhc3MgYGZwLXJlc3BvbnNpdmVgIGlzIGFkZGVkIHRvIHRoZSBwbHVnaW4ncyBjb250YWluZXIgaW4gY2FzZSB0aGUgdXNlciB3YW50cyB0byB1c2UgaXQgZm9yIGhpcyBvd24gcmVzcG9uc2l2ZSBDU1MuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZXNwb25zaXZlKCl7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aExpbWl0ID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IG9wdGlvbnMucmVzcG9uc2l2ZVdpZHRoOyAvL2JhY2t3YXJkcyBjb21wYXRpYmxpdHlcclxuICAgICAgICAgICAgdmFyIGhlaWdodExpbWl0ID0gb3B0aW9ucy5yZXNwb25zaXZlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy9vbmx5IGNhbGN1bGF0aW5nIHdoYXQgd2UgbmVlZC4gUmVtZW1iZXIgaXRzIGNhbGxlZCBvbiB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAgICAgICAgICB2YXIgaXNCcmVha2luZ1BvaW50V2lkdGggPSB3aWR0aExpbWl0ICYmICR3aW5kb3cub3V0ZXJXaWR0aCgpIDwgd2lkdGhMaW1pdDtcclxuICAgICAgICAgICAgdmFyIGlzQnJlYWtpbmdQb2ludEhlaWdodCA9IGhlaWdodExpbWl0ICYmICR3aW5kb3cuaGVpZ2h0KCkgPCBoZWlnaHRMaW1pdDtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpZHRoTGltaXQgJiYgaGVpZ2h0TGltaXQpe1xyXG4gICAgICAgICAgICAgICAgRlAuc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRXaWR0aCB8fCBpc0JyZWFraW5nUG9pbnRIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYod2lkdGhMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBGUC5zZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludFdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGhlaWdodExpbWl0KXtcclxuICAgICAgICAgICAgICAgIEZQLnNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIHRyYW5zaXRpb24gYW5pbWF0aW9ucyBmb3IgdGhlIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb24gPSAnYWxsICcgKyBvcHRpb25zLnNjcm9sbGluZ1NwZWVkICsgJ21zICcgKyBvcHRpb25zLmVhc2luZ2NzczM7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6IHRyYW5zaXRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZSB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbmltYXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZENsYXNzKE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWN0aXZhdGluZyB0aGUgd2Vic2l0ZSBuYXZpZ2F0aW9uIGRvdHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTmF2RG90cyhuYW1lLCBzZWN0aW9uSW5kZXgpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLm5hdmlnYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLmZpbmQoQUNUSVZFX1NFTCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIGlmKG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5maW5kKCdhW2hyZWY9XCIjJyArIG5hbWUgKyAnXCJdJykuYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5maW5kKCdsaScpLmVxKHNlY3Rpb25JbmRleCkuZmluZCgnYScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFjdGl2YXRpbmcgdGhlIHdlYnNpdGUgbWFpbiBtZW51IGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gc2xpZGUgbmFtZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZU1lbnVFbGVtZW50KG5hbWUpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLm1lbnUpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmZpbmQoQUNUSVZFX1NFTCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgICQob3B0aW9ucy5tZW51KS5maW5kKCdbZGF0YS1tZW51YW5jaG9yPVwiJytuYW1lKydcIl0nKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdG8gYWN0aXZlIHRoZSBjdXJyZW50IG1lbnUgYW5kIHZlcnRpY2FsIG5hdiBpdGVtcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTWVudUFuZE5hdihhbmNob3IsIGluZGV4KXtcclxuICAgICAgICAgICAgYWN0aXZhdGVNZW51RWxlbWVudChhbmNob3IpO1xyXG4gICAgICAgICAgICBhY3RpdmF0ZU5hdkRvdHMoYW5jaG9yLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVucyBgdXBgIG9yIGBkb3duYCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cclxuICAgICAgICAqIGZyb20gdGhlIGN1cnJlbnQgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFltb3ZlbWVudChkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGZyb21JbmRleCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciB0b0luZGV4ID0gZGVzdGlueS5pbmRleChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIGlmKCBmcm9tSW5kZXggPT0gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZyb21JbmRleCA+IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdkb3duJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dW5zIGByaWdodGAgb3IgYGxlZnRgIGRlcGVuZGluZyBvbiB0aGUgc2Nyb2xsaW5nIG1vdmVtZW50IHRvIHJlYWNoIGl0cyBkZXN0aW5hdGlvblxyXG4gICAgICAgICogZnJvbSB0aGUgY3VycmVudCBzbGlkZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFhtb3ZlbWVudChmcm9tSW5kZXgsIHRvSW5kZXgpe1xyXG4gICAgICAgICAgICBpZiggZnJvbUluZGV4ID09IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmcm9tSW5kZXggPiB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBpZiB0aGUgZWxlbWVudCBuZWVkcyBzY3JvbGxiYXIgYW5kIGlmIHRoZSB1c2VyIHdhbnRzIHRvIGFwcGx5IGl0LlxyXG4gICAgICAgICogSWYgc28gaXQgY3JlYXRlcyBpdC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAgIGpRdWVyeSBvYmplY3Qgb2YgdGhlIHNlY3Rpb24gb3Igc2xpZGVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNsaW1TY3JvbGxpbmcoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIC8vVXNlciBkb2Vzbid0IHdhbnQgc2Nyb2xsYmFyIGhlcmU/IFNheW9uYXJhIGJhYnkhXHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaGFzQ2xhc3MoJ2ZwLW5vc2Nyb2xsJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vbmVlZGVkIHRvIG1ha2UgYHNjcm9sbEhlaWdodGAgd29yayB1bmRlciBPcGVyYSAxMlxyXG4gICAgICAgICAgICBlbGVtZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciB3cmFwID0gc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLndyYXBDb250ZW50KCk7XHJcbiAgICAgICAgICAgIC8vaW4gY2FzZSBlbGVtZW50IGlzIGEgc2xpZGVcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBlbGVtZW50LmNsb3Nlc3QoU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IHNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxhYmxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgd2FzIHNjcm9sbCwgdGhlIGNvbnRlbnRIZWlnaHQgd2lsbCBiZSB0aGUgb25lIGluIHRoZSBzY3JvbGxhYmxlIHNlY3Rpb25cclxuICAgICAgICAgICAgaWYoc2Nyb2xsYWJsZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgY29udGVudEhlaWdodCA9IHNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxIZWlnaHQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudEhlaWdodCA9IGVsZW1lbnQuZ2V0KDApLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMudmVydGljYWxDZW50ZXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEhlaWdodCA9IGVsZW1lbnQuZmluZChUQUJMRV9DRUxMX1NFTCkuZ2V0KDApLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNjcm9sbEhlaWdodCA9IHdpbmRvd3NIZWlnaHQgLSBwYXJzZUludChzZWN0aW9uLmNzcygncGFkZGluZy1ib3R0b20nKSkgLSBwYXJzZUludChzZWN0aW9uLmNzcygncGFkZGluZy10b3AnKSk7XHJcblxyXG4gICAgICAgICAgICAvL25lZWRzIHNjcm9sbD9cclxuICAgICAgICAgICAgaWYgKCBjb250ZW50SGVpZ2h0ID4gc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2RpZCB3ZSBhbHJlYWR5IGhhdmUgYW4gc2Nyb2xsYmFyID8gVXBkYXRpbmcgaXRcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbGFibGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIudXBkYXRlKGVsZW1lbnQsIHNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0aW5nIHRoZSBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKFRBQkxFX0NFTExfU0VMKS53cmFwSW5uZXIod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQud3JhcElubmVyKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuY3JlYXRlKGVsZW1lbnQsIHNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZW1vdmluZyB0aGUgc2Nyb2xsaW5nIHdoZW4gaXQgaXMgbm90IG5lY2Vzc2FyeSBhbnltb3JlXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXIucmVtb3ZlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3VuZG9cclxuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ292ZXJmbG93JywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVGFibGVDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhUQUJMRSkud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwiJyArIFRBQkxFX0NFTEwgKyAnXCIgc3R5bGU9XCJoZWlnaHQ6JyArIGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpICsgJ3B4O1wiIC8+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRUYWJsZUhlaWdodChlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25IZWlnaHQgPSB3aW5kb3dzSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nVG9wIHx8IG9wdGlvbnMucGFkZGluZ0JvdHRvbSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZighc2VjdGlvbi5oYXNDbGFzcyhTRUNUSU9OKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiA9IGVsZW1lbnQuY2xvc2VzdChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdzID0gcGFyc2VJbnQoc2VjdGlvbi5jc3MoJ3BhZGRpbmctdG9wJykpICsgcGFyc2VJbnQoc2VjdGlvbi5jc3MoJ3BhZGRpbmctYm90dG9tJykpO1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkhlaWdodCA9ICh3aW5kb3dzSGVpZ2h0IC0gcGFkZGluZ3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbkhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBhIGNzczMgdHJhbnNmb3JtIHByb3BlcnR5IHRvIHRoZSBjb250YWluZXIgY2xhc3Mgd2l0aCBvciB3aXRob3V0IGFuaW1hdGlvbiBkZXBlbmRpbmcgb24gdGhlIGFuaW1hdGVkIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCBhbmltYXRlZCl7XHJcbiAgICAgICAgICAgIGlmKGFuaW1hdGVkKXtcclxuICAgICAgICAgICAgICAgIGFkZEFuaW1hdGlvbihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuY3NzKGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2QpKTtcclxuXHJcbiAgICAgICAgICAgIC8vc3luY3Jvbm91c2x5IHJlbW92aW5nIHRoZSBjbGFzcyBhZnRlciB0aGUgYW5pbWF0aW9uIGhhcyBiZWVuIGFwcGxpZWQuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcyhOT19UUkFOU0lUSU9OKTtcclxuICAgICAgICAgICAgfSwxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgYSBzZWN0aW9uIGJ5IGl0cyBhbmNob3IgLyBpbmRleFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2VjdGlvbkJ5QW5jaG9yKHNlY3Rpb25BbmNob3Ipe1xyXG4gICAgICAgICAgICAvL3NlY3Rpb25cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBjb250YWluZXIuZmluZChTRUNUSU9OX1NFTCArICdbZGF0YS1hbmNob3I9XCInK3NlY3Rpb25BbmNob3IrJ1wiXScpO1xyXG4gICAgICAgICAgICBpZighc2VjdGlvbi5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbiA9ICQoU0VDVElPTl9TRUwpLmVxKCAoc2VjdGlvbkFuY2hvciAtMSkgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgYSBzbGlkZSBpbnNpZGUgYSBnaXZlbiBzZWN0aW9uIGJ5IGl0cyBhbmNob3IgLyBpbmRleFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2xpZGVCeUFuY2hvcihzbGlkZUFuY2hvciwgc2VjdGlvbil7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSBzZWN0aW9uLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gIHNsaWRlcy5maW5kKFNMSURFX1NFTCArICdbZGF0YS1hbmNob3I9XCInK3NsaWRlQW5jaG9yKydcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFzbGlkZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2xpZGUgPSBzbGlkZXMuZmluZChTTElERV9TRUwpLmVxKHNsaWRlQW5jaG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzZWN0aW9uIGFuZCBzbGlkZSBhbmNob3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxQYWdlQW5kU2xpZGUoZGVzdGlueSwgc2xpZGUpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGdldFNlY3Rpb25CeUFuY2hvcihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vZGVmYXVsdCBzbGlkZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2xpZGUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3dlIG5lZWQgdG8gc2Nyb2xsIHRvIHRoZSBzZWN0aW9uIGFuZCB0aGVuIHRvIHRoZSBzbGlkZVxyXG4gICAgICAgICAgICBpZiAoZGVzdGlueSAhPT0gbGFzdFNjcm9sbGVkRGVzdGlueSAmJiAhc2VjdGlvbi5oYXNDbGFzcyhBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2Uoc2VjdGlvbiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTbGlkZXIoc2VjdGlvbiwgc2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pZiB3ZSB3ZXJlIGFscmVhZHkgaW4gdGhlIHNlY3Rpb25cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFNsaWRlcihzZWN0aW9uLCBzbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0aGUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZSBkZXN0aW5hdGlvbiBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFNsaWRlcihzZWN0aW9uLCBzbGlkZUFuY2hvcil7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBzbGlkZUFuY2hvciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9IHNlY3Rpb24uZmluZChTTElERVNfV1JBUFBFUl9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSAgZ2V0U2xpZGVCeUFuY2hvcihzbGlkZUFuY2hvciwgc2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGVzdGlueS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgYSBsYW5kc2NhcGUgbmF2aWdhdGlvbiBiYXIgd2l0aCBkb3RzIGZvciBob3Jpem9udGFsIHNsaWRlcnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXNOYXZpZ2F0aW9uKHNlY3Rpb24sIG51bVNsaWRlcyl7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19OQVYgKyAnXCI+PHVsPjwvdWw+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSBzZWN0aW9uLmZpbmQoU0xJREVTX05BVl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy90b3Agb3IgYm90dG9tXHJcbiAgICAgICAgICAgIG5hdi5hZGRDbGFzcyhvcHRpb25zLnNsaWRlc05hdlBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPCBudW1TbGlkZXM7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBuYXYuZmluZCgndWwnKS5hcHBlbmQoJzxsaT48YSBocmVmPVwiI1wiPjxzcGFuPjwvc3Bhbj48L2E+PC9saT4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jZW50ZXJpbmcgaXRcclxuICAgICAgICAgICAgbmF2LmNzcygnbWFyZ2luLWxlZnQnLCAnLScgKyAobmF2LndpZHRoKCkvMikgKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIG5hdi5maW5kKCdsaScpLmZpcnN0KCkuZmluZCgnYScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgd2Vic2l0ZSBkZXBlbmRpbmcgb24gdGhlIGFjdGl2ZSBzZWN0aW9uL3NsaWRlLlxyXG4gICAgICAgICogSXQgY2hhbmdlcyB0aGUgVVJMIGhhc2ggd2hlbiBuZWVkZWQgYW5kIHVwZGF0ZXMgdGhlIGJvZHkgY2xhc3MuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTdGF0ZShzbGlkZUluZGV4LCBzbGlkZUFuY2hvciwgYW5jaG9yTGluaywgc2VjdGlvbkluZGV4KXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25IYXNoID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmFuY2hvcnMubGVuZ3RoICYmICFvcHRpb25zLmxvY2tBbmNob3JzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lzbid0IGl0IHRoZSBmaXJzdCBzbGlkZT9cclxuICAgICAgICAgICAgICAgIGlmKHNsaWRlSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBhbmNob3JMaW5rICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25IYXNoID0gYW5jaG9yTGluaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2xpZGUgd2l0aG91dCBhbmNob3IgbGluaz8gV2UgdGFrZSB0aGUgaW5kZXggaW5zdGVhZC5cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2Ygc2xpZGVBbmNob3IgPT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVBbmNob3IgPSBzbGlkZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNjcm9sbGVkU2xpZGUgPSBzbGlkZUFuY2hvcjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxIYXNoKHNlY3Rpb25IYXNoICsgJy8nICsgc2xpZGVBbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZmlyc3Qgc2xpZGUgd29uJ3QgaGF2ZSBzbGlkZSBhbmNob3IsIGp1c3QgdGhlIHNlY3Rpb24gb25lXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0eXBlb2Ygc2xpZGVJbmRleCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxlZFNsaWRlID0gc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXJsSGFzaChhbmNob3JMaW5rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3NlY3Rpb24gd2l0aG91dCBzbGlkZXNcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXJsSGFzaChhbmNob3JMaW5rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0Qm9keUNsYXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIFVSTCBoYXNoLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0VXJsSGFzaCh1cmwpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnJlY29yZEhpc3Rvcnkpe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHVybDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL01vYmlsZSBDaHJvbWUgZG9lc24ndCB3b3JrIHRoZSBub3JtYWwgd2F5LCBzby4uLiBsZXRzIHVzZSBIVE1MNSBmb3IgcGhvbmVzIDopXHJcbiAgICAgICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSggYmFzZVVybCArICcjJyArIHVybCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGFuY2hvciBmb3IgdGhlIGdpdmVuIHNsaWRlIC8gc2VjdGlvbi4gSXRzIGluZGV4IHdpbGwgYmUgdXNlZCBpZiB0aGVyZSdzIG5vbmUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRBbmNob3IoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSBlbGVtZW50LmRhdGEoJ2FuY2hvcicpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbGVtZW50LmluZGV4KCk7XHJcblxyXG4gICAgICAgICAgICAvL1NsaWRlIHdpdGhvdXQgYW5jaG9yIGxpbms/IFdlIHRha2UgdGhlIGluZGV4IGluc3RlYWQuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhbmNob3IgPT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGFuY2hvciA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGEgY2xhc3MgZm9yIHRoZSBib2R5IG9mIHRoZSBwYWdlIGRlcGVuZGluZyBvbiB0aGUgYWN0aXZlIHNlY3Rpb24gLyBzbGlkZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keUNsYXNzKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSBzZWN0aW9uLmZpbmQoU0xJREVfQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkFuY2hvciA9IGdldEFuY2hvcihzZWN0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlQW5jaG9yID0gZ2V0QW5jaG9yKHNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKHNlY3Rpb25BbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgaWYoc2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgJy0nICsgc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2hhbmdpbmcgc2xhc2ggZm9yIGRhc2ggdG8gbWFrZSBpdCBhIHZhbGlkIENTUyBzdHlsZVxyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCcvJywgJy0nKS5yZXBsYWNlKCcjJywnJyk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHByZXZpb3VzIGFuY2hvciBjbGFzc2VzXHJcbiAgICAgICAgICAgIHZhciBjbGFzc1JlID0gbmV3IFJlZ0V4cCgnXFxcXGJcXFxccz8nICsgVklFV0lOR19QUkVGSVggKyAnLVteXFxcXHNdK1xcXFxiJywgXCJnXCIpO1xyXG4gICAgICAgICAgICAkYm9keVswXS5jbGFzc05hbWUgPSAkYm9keVswXS5jbGFzc05hbWUucmVwbGFjZShjbGFzc1JlLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAvL2FkZGluZyB0aGUgY3VycmVudCBhbmNob3JcclxuICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoVklFV0lOR19QUkVGSVggKyAnLScgKyB0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ2hlY2tzIGZvciB0cmFuc2xhdGUzZCBzdXBwb3J0XHJcbiAgICAgICAgKiBAcmV0dXJuIGJvb2xlYW5cclxuICAgICAgICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTY2MTY3MS9kZXRlY3RpbmctdHJhbnNmb3JtLXRyYW5zbGF0ZTNkLXN1cHBvcnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN1cHBvcnQzZCgpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgICAgICAgICAgICAgaGFzM2QsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd3ZWJraXRUcmFuc2Zvcm0nOictd2Via2l0LXRyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09UcmFuc2Zvcm0nOictby10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdtc1RyYW5zZm9ybSc6Jy1tcy10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNb3pUcmFuc2Zvcm0nOictbW96LXRyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6J3RyYW5zZm9ybSdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGJvZHkgdG8gZ2V0IHRoZSBjb21wdXRlZCBzdHlsZS5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgdCBpbiB0cmFuc2Zvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlW3RdID0gJ3RyYW5zbGF0ZTNkKDFweCwxcHgsMXB4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzM2QgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh0cmFuc2Zvcm1zW3RdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGhhczNkICE9PSB1bmRlZmluZWQgJiYgaGFzM2QubGVuZ3RoID4gMCAmJiBoYXMzZCAhPT0gJ25vbmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmVtb3ZlcyB0aGUgYXV0byBzY3JvbGxpbmcgYWN0aW9uIGZpcmVkIGJ5IHRoZSBtb3VzZSB3aGVlbCBhbmQgdHJhY2twYWQuXHJcbiAgICAgICAgKiBBZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIG1vdXNld2hlZWwgYW5kIHRyYWNrcGFkIG1vdmVtZW50cyB3b24ndCBzY3JvbGwgdGhyb3VnaCBzZWN0aW9ucy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9JRTksIENocm9tZSwgU2FmYXJpLCBPcGVyXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignTW96TW91c2VQaXhlbFNjcm9sbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vb2xkIEZpcmVmb3hcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRldGFjaEV2ZW50KCdvbm1vdXNld2hlZWwnLCBNb3VzZVdoZWVsSGFuZGxlcik7IC8vSUUgNi83LzhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIHRoZSBhdXRvIHNjcm9sbGluZyBhY3Rpb24gZm9yIHRoZSBtb3VzZSB3aGVlbCBhbmQgdHJhY2twYWQuXHJcbiAgICAgICAgKiBBZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIG1vdXNld2hlZWwgYW5kIHRyYWNrcGFkIG1vdmVtZW50cyB3aWxsIHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zXHJcbiAgICAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvd2hlZWxcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZE1vdXNlV2hlZWxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSAnJztcclxuICAgICAgICAgICAgdmFyIF9hZGRFdmVudExpc3RlbmVyO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgICAgICAgICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhZGRFdmVudExpc3RlbmVyXCI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIgPSBcImF0dGFjaEV2ZW50XCI7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSAnb24nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgLy8gZGV0ZWN0IGF2YWlsYWJsZSB3aGVlbCBldmVudFxyXG4gICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICdvbndoZWVsJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA/ICd3aGVlbCcgOiAvLyBNb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBcIndoZWVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gJ21vdXNld2hlZWwnIDogLy8gV2Via2l0IGFuZCBJRSBzdXBwb3J0IGF0IGxlYXN0IFwibW91c2V3aGVlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAnRE9NTW91c2VTY3JvbGwnOyAvLyBsZXQncyBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcclxuXHJcblxyXG4gICAgICAgICAgICBpZihzdXBwb3J0ID09ICdET01Nb3VzZVNjcm9sbCcpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbIF9hZGRFdmVudExpc3RlbmVyIF0ocHJlZml4ICsgJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBNb3pNb3VzZVBpeGVsU2Nyb2xsIGluIG9sZGVyIEZpcmVmb3hcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50WyBfYWRkRXZlbnRMaXN0ZW5lciBdKHByZWZpeCArIHN1cHBvcnQsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyBwcmVzc2VkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRNaWRkbGVXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFVuYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTWlkZGxlV2hlZWxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2Vkb3duJywgbW91c2VEb3duSGFuZGxlcilcclxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgdGhlIHBvc3NpYmlsaXR5IHRvIGF1dG8gc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnMgb24gdG91Y2ggZGV2aWNlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvdWNoSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgLy9NaWNyb3NvZnQgcG9pbnRlcnNcclxuICAgICAgICAgICAgICAgIHZhciBNU1BvaW50ZXIgPSBnZXRNU1BvaW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFdSQVBQRVJfU0VMKS5vZmYoJ3RvdWNoc3RhcnQgJyArICBNU1BvaW50ZXIuZG93bikub24oJ3RvdWNoc3RhcnQgJyArIE1TUG9pbnRlci5kb3duLCB0b3VjaFN0YXJ0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAkKFdSQVBQRVJfU0VMKS5vZmYoJ3RvdWNobW92ZSAnICsgTVNQb2ludGVyLm1vdmUpLm9uKCd0b3VjaG1vdmUgJyArIE1TUG9pbnRlci5tb3ZlLCB0b3VjaE1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmVzIHRoZSBhdXRvIHNjcm9sbGluZyBmb3IgdG91Y2ggZGV2aWNlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvdWNoSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgLy9NaWNyb3NvZnQgcG9pbnRlcnNcclxuICAgICAgICAgICAgICAgIHZhciBNU1BvaW50ZXIgPSBnZXRNU1BvaW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFdSQVBQRVJfU0VMKS5vZmYoJ3RvdWNoc3RhcnQgJyArIE1TUG9pbnRlci5kb3duKTtcclxuICAgICAgICAgICAgICAgICQoV1JBUFBFUl9TRUwpLm9mZigndG91Y2htb3ZlICcgKyBNU1BvaW50ZXIubW92ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZXR1cm5zIGFuZCBvYmplY3Qgd2l0aCBNaWNyb3NvZnQgcG9pbnRlcnMgKGZvciBJRTwxMSBhbmQgZm9yIElFID49IDExKVxyXG4gICAgICAgICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2RuMzA0ODg2KHY9dnMuODUpLmFzcHhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldE1TUG9pbnRlcigpe1xyXG4gICAgICAgICAgICB2YXIgcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC8vSUUgPj0gMTEgJiByZXN0IG9mIGJyb3dzZXJzXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5Qb2ludGVyRXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHsgZG93bjogJ3BvaW50ZXJkb3duJywgbW92ZTogJ3BvaW50ZXJtb3ZlJ307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vSUUgPCAxMVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHsgZG93bjogJ01TUG9pbnRlckRvd24nLCBtb3ZlOiAnTVNQb2ludGVyTW92ZSd9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgcGFnZVggYW5kIHBhZ2VZIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzL2lzc3Vlcy8xOTQjaXNzdWVjb21tZW50LTM0MDY5ODU0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRFdmVudHNQYWdlKGUpe1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBldmVudHMueSA9ICh0eXBlb2YgZS5wYWdlWSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGUucGFnZVkgfHwgZS5wYWdlWCkgPyBlLnBhZ2VZIDogZS50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgICAgICAgICAgZXZlbnRzLnggPSAodHlwZW9mIGUucGFnZVggIT09ICd1bmRlZmluZWQnICYmIChlLnBhZ2VZIHx8IGUucGFnZVgpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWCk7XHJcblxyXG4gICAgICAgICAgICAvL2luIHRvdWNoIGRldmljZXMgd2l0aCBzY3JvbGxCYXI6dHJ1ZSwgZS5wYWdlWSBpcyBkZXRlY3RlZCwgYnV0IHdlIGhhdmUgdG8gZGVhbCB3aXRoIHRvdWNoIGV2ZW50cy4gIzEwMDhcclxuICAgICAgICAgICAgaWYoaXNUb3VjaCAmJiBpc1JlYWxseVRvdWNoKGUpICYmIG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy55ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBhY3RpdmUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNpbGVudExhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZSwgbm9DYWxsYmFja3Mpe1xyXG4gICAgICAgICAgICBGUC5zZXRTY3JvbGxpbmdTcGVlZCAoMCwgJ2ludGVybmFsJyk7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2Ygbm9DYWxsYmFja3MgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyBmaXJpbmcgY2FsbGJhY2tzIGFmdGVyU2xpZGVMb2FkIGV0Yy5cclxuICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoYWN0aXZlU2xpZGUuY2xvc2VzdChTTElERVNfV1JBUFBFUl9TRUwpLCBhY3RpdmVTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2Ygbm9DYWxsYmFja3MgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRlAuc2V0U2Nyb2xsaW5nU3BlZWQob3JpZ2luYWxzLnNjcm9sbGluZ1NwZWVkLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBwYWdlIHRvIHRoZSBnaXZlbiBZIHBvc2l0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2lsZW50U2Nyb2xsKHRvcCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AodG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmNzczMpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgwcHgsIC0nICsgdG9wICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNzcygndG9wJywgLXRvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dXJucyB0aGUgY3Jvc3MtYnJvd3NlciB0cmFuc2Zvcm0gc3RyaW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOnRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFsbG93aW5nIG9yIGRpc2FsbG93aW5nIHRoZSBtb3VzZS9zd2lwZSBzY3JvbGwgaW4gYSBnaXZlbiBkaXJlY3Rpb24uIChub3QgZm9yIGtleWJvYXJkKVxyXG4gICAgICAgICogQHR5cGUgIG0gKG1vdXNlKSBvciBrIChrZXlib2FyZClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldElzU2Nyb2xsQWxsb3dlZCh2YWx1ZSwgZGlyZWN0aW9uLCB0eXBlKXtcclxuICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOiBpc1Njcm9sbEFsbG93ZWRbdHlwZV0udXAgPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzogaXNTY3JvbGxBbGxvd2VkW3R5cGVdLmRvd24gPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzogaXNTY3JvbGxBbGxvd2VkW3R5cGVdLmxlZnQgPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6IGlzU2Nyb2xsQWxsb3dlZFt0eXBlXS5yaWdodCA9IHZhbHVlOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnbScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBGUC5zZXRBbGxvd1Njcm9sbGluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLnNldEtleWJvYXJkU2Nyb2xsaW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBEZXN0cm95cyBmdWxscGFnZS5qcyBwbHVnaW4gZXZlbnRzIGFuZCBvcHRpbmFsbHkgaXRzIGh0bWwgbWFya3VwIGFuZCBzdHlsZXNcclxuICAgICAgICAqL1xyXG4gICAgICAgIEZQLmRlc3Ryb3kgPSBmdW5jdGlvbihhbGwpe1xyXG4gICAgICAgICAgICBGUC5zZXRBdXRvU2Nyb2xsaW5nKGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgRlAuc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBGUC5zZXRLZXlib2FyZFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhERVNUUk9ZRUQpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2xpZGVMb2Fkc0lkKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2VjdGlvbkxvYWRzSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQyKTtcclxuXHJcbiAgICAgICAgICAgICR3aW5kb3dcclxuICAgICAgICAgICAgICAgIC5vZmYoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgICRkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snLCBTRUNUSU9OX05BVl9TRUwgKyAnIGEnKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlcicsIFNFQ1RJT05fTkFWX1NFTCArICcgbGknKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZScsIFNFQ1RJT05fTkFWX1NFTCArICcgbGknKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snLCBTTElERVNfTkFWX0xJTktfU0VMKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VvdmVyJywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cylcclxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlb3V0Jywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cyk7XHJcblxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snLCBTTElERVNfQVJST1dfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhZnRlclNsaWRlTG9hZHNJZCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhZnRlclNlY3Rpb25Mb2Fkc0lkKTtcclxuXHJcbiAgICAgICAgICAgIC8vbGV0cyBtYWtlIGEgbWVzcyFcclxuICAgICAgICAgICAgaWYoYWxsKXtcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3lTdHJ1Y3R1cmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZW1vdmVzIGlubGluZSBzdHlsZXMgYWRkZWQgYnkgZnVsbHBhZ2UuanNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lTdHJ1Y3R1cmUoKXtcclxuICAgICAgICAgICAgLy9yZXNldGluZyB0aGUgYHRvcGAgb3IgYHRyYW5zbGF0ZWAgcHJvcGVydGllcyB0byAwXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9hZGluZyBhbGwgdGhlIGxhenkgbG9hZCBjb250ZW50XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCdpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY10nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsICQodGhpcykuZGF0YSgnc3JjJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMICsgJywgJyArIFNMSURFU19OQVZfU0VMICsgICcsICcgKyBTTElERVNfQVJST1dfU0VMKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgaW5saW5lIHN0eWxlc1xyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKS5jc3MoIHtcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnJyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoU0xJREVfU0VMKS5jc3MoIHtcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXHJcbiAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbEJvZHkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIC5mcC1lbmFibGVkIGNsYXNzXHJcbiAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcyhFTkFCTEVEKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSAuZnAtcmVzcG9uc2l2ZSBjbGFzc1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyhSRVNQT05TSVZFKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgb2YgdGhlIC5mcC12aWV3aW5nLSBjbGFzc2VzXHJcbiAgICAgICAgICAgICQuZWFjaCgkYm9keS5nZXQoMCkuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksIGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoVklFV0lOR19QUkVGSVgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGFkZGVkIGNsYXNzZXNcclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCArICcsICcgKyBTTElERV9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnJlbW92ZSgkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoVEFCTEUgKyAnICcgKyBBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9VbndyYXBwaW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoVEFCTEVfQ0VMTF9TRUwgKyAnLCAnICsgU0xJREVTX0NPTlRBSU5FUl9TRUwgKyAnLCAnICsgU0xJREVTX1dSQVBQRVJfU0VMKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3Vud3JhcCBub3QgYmVpbmcgdXNlIGluIGNhc2UgdGhlcmUncyBubyBjaGlsZCBlbGVtZW50IGluc2lkZSBhbmQgaXRzIGp1c3QgdGV4dFxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBubyBhbmltYXRpb25cclxuICAgICAgICAgICAgJGh0bWxCb2R5LnNjcm9sbFRvcCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3Zpbmcgc2VsZWN0b3JzXHJcbiAgICAgICAgICAgIHZhciB1c2VkU2VsZWN0b3JzID0gW1NFQ1RJT04sIFNMSURFLCBTTElERVNfQ09OVEFJTkVSXTtcclxuICAgICAgICAgICAgJC5lYWNoKHVzZWRTZWxlY3RvcnMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuJyArIHZhbHVlKS5yZW1vdmVDbGFzcyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFNldHMgdGhlIHN0YXRlIGZvciBhIHZhcmlhYmxlIHdpdGggbXVsdGlwbGUgc3RhdGVzIChvcmlnaW5hbCwgYW5kIHRlbXBvcmFsKVxyXG4gICAgICAgICogU29tZSB2YXJpYWJsZXMgc3VjaCBhcyBgYXV0b1Njcm9sbGluZ2Agb3IgYHJlY29yZEhpc3RvcnlgIG1pZ2h0IGNoYW5nZSBhdXRvbWF0aWNhbGx5IGl0cyBzdGF0ZSB3aGVuIHVzaW5nIGByZXNwb25zaXZlYCBvciBgYXV0b1Njcm9sbGluZzpmYWxzZWAuXHJcbiAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBib3RoIHN0YXRlcywgdGhlIG9yaWdpbmFsIGFuZCB0aGUgdGVtcG9yYWwgb25lLlxyXG4gICAgICAgICogSWYgdHlwZSBpcyBub3QgJ2ludGVybmFsJywgdGhlbiB3ZSBhc3N1bWUgdGhlIHVzZXIgaXMgZ2xvYmFsbHkgY2hhbmdpbmcgdGhlIHZhcmlhYmxlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0VmFyaWFibGVTdGF0ZSh2YXJpYWJsZSwgdmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBvcHRpb25zW3ZhcmlhYmxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZih0eXBlICE9PSAnaW50ZXJuYWwnKXtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsc1t2YXJpYWJsZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEaXNwbGF5cyB3YXJuaW5nc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheVdhcm5pbmdzKCl7XHJcbiAgICAgICAgICAgIGlmKCQoJ2h0bWwnKS5oYXNDbGFzcyhFTkFCTEVEKSl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ0Z1bGxwYWdlLmpzIGNhbiBvbmx5IGJlIGluaXRpYWxpemVkIG9uY2UgYW5kIHlvdSBhcmUgZG9pbmcgaXQgbXVsdGlwbGUgdGltZXMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgbXV0dWFsbHkgZXhjbHVzaXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJlxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmxvb3BCb3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxCYXIgJiYgb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9uIGBzY3JvbGxCYXJgIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBzY3JvbGxPdmVyZmxvd2AuIFNlY3Rpb25zIHdpdGggc2Nyb2xsT3ZlcmZsb3cgbWlnaHQgbm90IHdvcmsgd2VsbCBpbiBGaXJlZm94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmIG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9uIGBzY3JvbGxCYXJgIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2FuY2hvcnMgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBlbGVtZW50IElEIG9yIE5BTUVcclxuICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMuYW5jaG9ycywgZnVuY3Rpb24oaW5kZXgsIG5hbWUpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FzZSBpbnNlbnNpdGl2ZSBzZWxlY3RvcnMgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE5NDY1MTg3LzEwODEzOTYpXHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUF0dHIgPSAkZG9jdW1lbnQuZmluZCgnW25hbWVdJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoJ25hbWUnKSAmJiAkKHRoaXMpLmF0dHIoJ25hbWUnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZEF0dHIgPSAkZG9jdW1lbnQuZmluZCgnW2lkXScpLmZpbHRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKCdpZCcpICYmICQodGhpcykuYXR0cignaWQnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlkQXR0ci5sZW5ndGggfHwgbmFtZUF0dHIubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdkYXRhLWFuY2hvciB0YWdzIGNhbiBub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyBhbnkgYGlkYCBlbGVtZW50IG9uIHRoZSBzaXRlIChvciBgbmFtZWAgZWxlbWVudCBmb3IgSUUpLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkQXR0ci5sZW5ndGggJiYgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGBpZGAgcHJvcGVydHknKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lQXR0ci5sZW5ndGggJiYgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGBuYW1lYCBwcm9wZXJ0eScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2hvd3MgYSBtZXNzYWdlIGluIHRoZSBjb25zb2xlIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yKHR5cGUsIHRleHQpe1xyXG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGVbdHlwZV0gJiYgY29uc29sZVt0eXBlXSgnZnVsbFBhZ2U6ICcgKyB0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyAvL2VuZCBvZiAkLmZuLmZ1bGxwYWdlXHJcblxyXG4gICAgaWYodHlwZW9mIElTY3JvbGwgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAvKlxyXG4gICAgICAgICogVHVybnMgaVNjcm9sbCBgbW91c2V3aGVlbGAgb3B0aW9uIG9mZiBkeW5hbWljYWxseVxyXG4gICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2N1YmlxL2lzY3JvbGwvaXNzdWVzLzEwMzZcclxuICAgICAgICAqL1xyXG4gICAgICAgIElTY3JvbGwucHJvdG90eXBlLndoZWVsT24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogVHVybnMgaVNjcm9sbCBgbW91c2V3aGVlbGAgb3B0aW9uIG9uIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vY3ViaXEvaXNjcm9sbC9pc3N1ZXMvMTAzNlxyXG4gICAgICAgICovXHJcbiAgICAgICAgSVNjcm9sbC5wcm90b3R5cGUud2hlZWxPZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IHRvIGhhbmRsZSBvdmVyZmxvdyBzY3JvbGxpbmcuXHJcbiAgICAgKiBUaGlzIHVzZXMganF1ZXJ5LnNsaW1TY3JvbGwgdG8gYWNjb21wbGlzaCBvdmVyZmxvdyBzY3JvbGxpbmcuXHJcbiAgICAgKiBJdCBpcyBwb3NzaWJsZSB0byBwYXNzIGluIGFuIGFsdGVybmF0ZSBzY3JvbGxPdmVyZmxvd0hhbmRsZXJcclxuICAgICAqIHRvIHRoZSBmdWxscGFnZS5qcyBvcHRpb24gdGhhdCBpbXBsZW1lbnRzIHRoZSBzYW1lIGZ1bmN0aW9uc1xyXG4gICAgICogYXMgdGhpcyBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHZhciBpc2Nyb2xsSGFuZGxlciA9IHtcclxuICAgICAgICByZWZyZXNoSWQ6IG51bGwsXHJcbiAgICAgICAgaVNjcm9sbEluc3RhbmNlczogW10sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVHVybnMgb2ZmIGlTY3JvbGwgZm9yIHRoZSBkZXN0aW5hdGlvbiBzZWN0aW9uLlxyXG4gICAgICAgICogV2hlbiBzY3JvbGxpbmcgdmVyeSBmYXN0IG9uIHNvbWUgdHJhY2twYWRzIChhbmQgQXBwbGUgbGFwdG9wcykgdGhlIGluZXJ0aWFsIHNjcm9sbGluZyB3b3VsZFxyXG4gICAgICAgICogc2Nyb2xsIHRoZSBkZXN0aW5hdGlvbiBzZWN0aW9uL3NsaWRlIGJlZm9yZSB0aGUgc2VjdGlvbnMgYW5pbWF0aW9ucyBlbmRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpLmRhdGEoJ2lzY3JvbGxJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnICYmIHNjcm9sbGVyKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbGVyLndoZWVsT2ZmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBUdXJucyBvbiBpU2Nyb2xsIG9uIHNlY3Rpb24gbG9hZFxyXG4gICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpLmRhdGEoJ2lzY3JvbGxJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnICYmIHNjcm9sbGVyKXtcclxuICAgICAgICAgICAgICAgICAgc2Nyb2xsZXIud2hlZWxPbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gb3ZlcmZsb3cgc2Nyb2xsaW5nIGlzIG5lZWRlZCBmb3IgYSBzZWN0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50ICAgICAgalF1ZXJ5IG9iamVjdCBjb250YWluaW5nIGN1cnJlbnQgc2VjdGlvblxyXG4gICAgICAgICAqIEBwYXJhbSAge051bWJlcn0gc2Nyb2xsSGVpZ2h0IEN1cnJlbnQgd2luZG93IGhlaWdodCBpbiBwaXhlbHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQsIHNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IGVsZW1lbnQuZmluZChTQ1JPTExBQkxFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBzY3JvbGxhYmxlLmhlaWdodChzY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICBzY3JvbGxhYmxlLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaVNjcm9sbEluc3RhbmNlID0gJHRoaXMuZGF0YSgnaXNjcm9sbEluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaVNjcm9sbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGlzY3JvbGxIYW5kbGVyLmlTY3JvbGxJbnN0YW5jZXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlTY3JvbGxJbnN0YW5jZSA9IG5ldyBJU2Nyb2xsKCR0aGlzLmdldCgwKSwgaXNjcm9sbE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaXNjcm9sbEhhbmRsZXIuaVNjcm9sbEluc3RhbmNlcy5wdXNoKGlTY3JvbGxJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnLCBpU2Nyb2xsSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm4gYSBib29sZWFuIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgaXMgYVxyXG4gICAgICAgICAqIHRoZSBlbmQgb3IgYXQgdGhlIHN0YXJ0IG9mIHRoZSBzY3JvbGxpbmcgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7U3RyaW5nfSAgdHlwZSAgICAgICBFaXRoZXIgJ3RvcCcgb3IgJ2JvdHRvbSdcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBzY3JvbGxhYmxlIGpRdWVyeSBvYmplY3QgZm9yIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnRcclxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzU2Nyb2xsZWQ6IGZ1bmN0aW9uKHR5cGUsIHNjcm9sbGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vbm8gc2Nyb2xsZXI/IFxyXG4gICAgICAgICAgICBpZiAoIXNjcm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Nyb2xsZXIueSA+PSAwICYmICFzY3JvbGxhYmxlLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAgLSBzY3JvbGxlci55KSArIHNjcm9sbGFibGUuc2Nyb2xsVG9wKCkgKyAxICsgc2Nyb2xsYWJsZS5pbm5lckhlaWdodCgpID49IHNjcm9sbGFibGVbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgc2Nyb2xsYWJsZSBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gc2VjdGlvbi5cclxuICAgICAgICAgKiBJZiB0aGVyZSBhcmUgbGFuZHNjYXBlIHNsaWRlcywgd2lsbCBvbmx5IHJldHVybiBhIHNjcm9sbGFibGUgZWxlbWVudFxyXG4gICAgICAgICAqIGlmIGl0IGlzIGluIHRoZSBhY3RpdmUgc2xpZGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBhY3RpdmVTZWN0aW9uIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNjcm9sbGFibGU6IGZ1bmN0aW9uKGFjdGl2ZVNlY3Rpb24pe1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbGFuZHNjYXBlIHNsaWRlcywgd2UgY2hlY2sgaWYgdGhlIHNjcm9sbGluZyBiYXIgaXMgaW4gdGhlIGN1cnJlbnQgb25lIG9yIG5vdFxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVTZWN0aW9uLmZpbmQoU0NST0xMQUJMRV9TRUwpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHNjcm9sbCBoZWlnaHQgb2YgdGhlIHdyYXBwZWQgY29udGVudC5cclxuICAgICAgICAgKiBJZiB0aGlzIGlzIGxhcmdlciB0aGFuIHRoZSB3aW5kb3cgaGVpZ2h0IG1pbnVzIHNlY3Rpb24gcGFkZGluZyxcclxuICAgICAgICAgKiBvdmVyZmxvdyBzY3JvbGxpbmcgaXMgbmVlZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIG92ZXJmbG93IHNjcm9sbGluZyBpcyBubyBsb25nZXIgbmVlZGVkIGZvciBhIHNlY3Rpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgICAgICBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gZWxlbWVudC5maW5kKFNDUk9MTEFCTEVfU0VMKTtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaVNjcm9sbEluc3RhbmNlID0gc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgICAgIGlTY3JvbGxJbnN0YW5jZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpLmZpcnN0KCkudW53cmFwKCkudW53cmFwKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gb3ZlcmZsb3cgc2Nyb2xsaW5nIGhhcyBhbHJlYWR5IGJlZW4gc2V0dXAgYnV0IHRoZVxyXG4gICAgICAgICAqIHdpbmRvdyBoZWlnaHQgaGFzIHBvdGVudGlhbGx5IGNoYW5nZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgICAgICBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICogQHBhcmFtICB7TnVtYmVyfSBzY3JvbGxIZWlnaHQgQ3VycmVudCB3aW5kb3cgaGVpZ2h0IGluIHBpeGVsc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8vdXNpbmcgYSB0aW1lb3V0IGluIG9yZGVyIHRvIGV4ZWN1dGUgdGhlIHJlZnJlc2ggZnVuY3Rpb24gb25seSBvbmNlIHdoZW4gYHVwZGF0ZWAgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIGFcclxuICAgICAgICAgICAgLy9zaG9ydCBwZXJpb2Qgb2YgdGltZS5cclxuICAgICAgICAgICAgLy9pdCBhbHNvIGNvbWVzIG9uIGhhbmR5IGJlY2F1c2UgaVNjcm9sbCByZXF1aXJlcyB0aGUgdXNlIG9mIHRpbWVvdXQgd2hlbiB1c2luZyBgcmVmcmVzaGAuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpc2Nyb2xsSGFuZGxlci5yZWZyZXNoSWQpO1xyXG4gICAgICAgICAgICBpc2Nyb2xsSGFuZGxlci5yZWZyZXNoSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goaXNjcm9sbEhhbmRsZXIuaVNjcm9sbEluc3RhbmNlcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmdldCgwKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRpbmcgdGhlIHdyYXBwZXJzIGhlaWdodFxyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNzcygnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0ICsgJ3B4JykucGFyZW50KCkuY3NzKCdoZWlnaHQnLCBzY3JvbGxIZWlnaHQgKyAncHgnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsZWQgdG8gZ2V0IGFueSBhZGRpdGlvbmFsIGVsZW1lbnRzIG5lZWRlZCB0byB3cmFwIHRoZSBzZWN0aW9uXHJcbiAgICAgICAgICogY29udGVudCBpbiBvcmRlciB0byBmYWNpbGl0YXRlIG92ZXJmbG93IHNjcm9sbGluZy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ3xPYmplY3R9IENhbiBiZSBhIHN0cmluZyBjb250YWluaW5nIEhUTUwsXHJcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgYSBET00gZWxlbWVudCwgb3IgalF1ZXJ5IG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB3cmFwQ29udGVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyBTQ1JPTExBQkxFICsgJ1wiPjxkaXYgY2xhc3M9XCJmcC1zY3JvbGxlclwiPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0pOyIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS42LjBcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbihmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMSkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigncmVhZHkuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMSkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLFxuICAgICAgICAgICAgICAgICcqOm5vdCguc2xpY2stYXJyb3cpJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZTtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXR0cigncm9sZScsICdsaXN0Ym94Jyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdyb2xlJzogJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGkgKyAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICduYXZpZ2F0aW9uJyArIF8uaW5zdGFuY2VVaWQgKyBpICsgJycsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSArICcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maXJzdCgpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpLmVuZCgpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2J1dHRvbicpLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJykuZW5kKClcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2JykuYXR0cigncm9sZScsICd0b29sYmFyJyk7XG4gICAgICAgIH1cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigncmVhZHkuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhpbmRleCk7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcztcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoc3dpcGVEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwiIiwiIiwiJCgnLmpzQ2hhbmdlTGFuZ3VhZ2VJdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmFkZENsYXNzKCdfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnX2FjdGl2ZScpO1xufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAvLyBmaXhlZEVsZW1lbnRzOiAnLmZvb3RlcicsXG4gICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6ICcuZm9vdGVyJyxcbiAgICBwYWRkaW5nVG9wOiAnMTAwcHgnLFxuICAgIHNsaWRlc05hdmlnYXRpb246IGZhbHNlLFxuICAgIGNvbnRyb2xBcnJvd3M6IGZhbHNlLFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmpzLXNsaWNrJykuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJy5qcy1zbGljay1hcnJvdy1wcmV2JyxcbiAgICAgICAgbmV4dEFycm93OiAnLmpzLXNsaWNrLWFycm93LW5leHQnLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9KTtcblxuICAgICAgJCgnLmpzLXNsaWNrLXZlcnRpY2FsJykuc2xpY2soe1xuICAgICAgICAvLyBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgLy8gcHJldkFycm93OiAnLmpzLXNsaWNrLWFycm93LXByZXYnLFxuICAgICAgICAvLyBuZXh0QXJyb3c6ICcuanMtc2xpY2stYXJyb3ctbmV4dCcsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICAgIC8vIHZlcnRpY2FsU3dpcGluZzogdHJ1ZSxcbiAgICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgICAkKCcuc2xpY2stY3VycmVudCcpLm5leHQoKS5hZGRDbGFzcygnc2xpY2stdmVydGljYWwtc2xpZGUtLWFjdGl2ZScpO1xuICAgICAgJCgnLmpzLXNsaWNrLXZlcnRpY2FsJykub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XG4gICAgICAgICQoJy5zbGljay1jdXJyZW50JykubmV4dCgpLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbC1zbGlkZS0tYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwtc2xpZGUtLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkxlYXZlOiBmdW5jdGlvbihpbmRleCwgbmV4dEluZGV4LCBkaXJlY3Rpb24pe1xuICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uID0gJCh0aGlzKTtcblxuICAgICAgaWYoaW5kZXggPT0gOSAmJiBkaXJlY3Rpb24gPT0nZG93bicpe1xuICAgICAgICAkKCcuaGVhZGVyJykuc2xpZGVVcCgzMDApO1xuICAgICAgfVxuXG4gICAgICBlbHNlIGlmKGluZGV4ID09IDEwICYmIGRpcmVjdGlvbiA9PSAndXAnKXtcbiAgICAgICAgJCgnLmhlYWRlcicpLnNsaWRlRG93bigzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTsiLCIiLCIiLCIkKCdhW2RhdGEtY2xpY2s9XCJtb2RhbFwiXScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLm1vZGFsLCAubWFzaycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbn0pO1xuXG4kKCcubWFzaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgJCgnLm1hc2ssIC5tb2RhbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbn0pOyIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gJCgnLmpzLXNsaWNrJykuc2xpY2soe1xuICAvLyAvLyBub3JtYWwgb3B0aW9ucy4uLlxuICAvLyBpbmZpbml0ZTogZmFsc2UsXG4gIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuXG4gIC8vIHNsaWRlc1RvU2hvdzogMSxcbiAgLy8gYXJyb3dzOiB0cnVlLFxuICAvLyBwcmV2QXJyb3c6ICcuanMtc2xpY2stYXJyb3ctcHJldicsXG4gIC8vIG5leHRBcnJvdzogJy5qcy1zbGljay1hcnJvdy1uZXh0JyxcbiAgLy8gZHJhZ2dhYmxlOiB0cnVlLFxuICAvLyAvLyB0aGUgbWFnaWNcbiAgLy8gcmVzcG9uc2l2ZTogW3tcblxuICAvLyAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgLy8gICAgIHNldHRpbmdzOiB7XG4gIC8vICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgLy8gICAgICAgaW5maW5pdGU6IHRydWVcbiAgLy8gICAgIH1cblxuICAvLyAgIH0sIHtcblxuICAvLyAgICAgYnJlYWtwb2ludDogNjAwLFxuICAvLyAgICAgc2V0dGluZ3M6IHtcbiAgLy8gICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAvLyAgICAgICAvLyBkb3RzOiB0cnVlXG4gIC8vICAgICB9XG5cbiAgLy8gICB9XVxuICAvLyB9KTtcbi8vIH0pO1xuXG4iLCIiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

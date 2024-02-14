// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var u=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":u(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):p.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,i,a,o,u,p,l,f;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",p=1,l=0;l<r.length;l++)if(s(i=r[l]))u+=i;else{if(e=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),u+=i.arg||"",p+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,i,n;for(t=[],n=0,i=T.exec(r);i;)(e=r.slice(n,T.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=T.lastIndex,i=T.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function I(r){return"string"==typeof r}function C(r){var e,t;if(!I(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var R,O=Object.prototype,_=O.toString,L=O.__defineGetter__,Z=O.__defineSetter__,W=O.__lookupGetter__,P=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===_.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===_.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(r,e)||P.call(r,e)?(i=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var N=R;function B(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function X(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"boolean"==typeof r}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=M();function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,H=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&H.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",Y=q()?function(r){var e,t,i;if(null==r)return D.call(r);t=r[Q],e=J(r,Q);try{r[Q]=void 0}catch(e){return D.call(r)}return i=D.call(r),e?r[Q]=t:delete r[Q],i}:function(r){return D.call(r)},rr=Boolean,er=Boolean.prototype.toString,tr=q();function ir(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function nr(r){return U(r)||ir(r)}function ar(r){return"number"==typeof r}function or(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function cr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+or(n):or(n)+r,i&&(r="-"+r)),r}X(nr,"isPrimitive",U),X(nr,"isObject",ir);var sr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase;function pr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!ar(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=cr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=cr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ur.call(r.specifier)?ur.call(t):sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function lr(r){return"string"==typeof r}var fr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,hr=String.prototype.replace,wr=/e\+(\d)$/,br=/e-(\d)$/,yr=/^(\d+)$/,vr=/^(\d+)e/,mr=/\.0$/,Er=/\.0*e/,xr=/(\..*[^0])0*e/;function kr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":fr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=hr.call(t,xr,"$1e"),t=hr.call(t,Er,"e"),t=hr.call(t,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=hr.call(t,wr,"e+0$1"),t=hr.call(t,br,"e-0$1"),r.alternate&&(t=hr.call(t,yr,"$1."),t=hr.call(t,vr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===dr.call(r.specifier)?dr.call(t):gr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Vr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Sr(i):Sr(i)+r}var jr=String.fromCharCode,Ar=isNaN,Tr=Array.isArray;function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Fr(r){var e,t,i,n,a,o,c,s,u;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(lr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=$r(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ar(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ar(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=pr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Ar(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ar(a)?String(i.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=kr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=cr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Vr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Rr(r){var e,t,i,n;for(t=[],n=0,i=Ir.exec(r);i;)(e=r.slice(n,Ir.lastIndex-i[0].length)).length&&t.push(e),t.push(Cr(i)),n=Ir.lastIndex,i=Ir.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function _r(r){var e,t;if(!Or(r))throw new TypeError(_r("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Rr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Fr.apply(null,e)}function Lr(){return new Function("return this;")()}var Zr="object"==typeof self?self:null,Wr="object"==typeof window?window:null,Pr="object"==typeof globalThis?globalThis:null;function Nr(r){if(arguments.length){if(!U(r))throw new TypeError(_r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Lr()}if(Pr)return Pr;if(Zr)return Zr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}var Br=Nr(),Gr=Br.document&&Br.document.childNodes,Xr=Int8Array,Ur=M();function Mr(){return Ur&&"symbol"==typeof Symbol.toStringTag}var zr=Object.prototype.toString,qr="function"==typeof Symbol?Symbol:void 0,Dr="function"==typeof qr?qr.toStringTag:"",Hr=Mr()?function(r){var e,t,i;if(null==r)return zr.call(r);t=r[Dr],e=J(r,Dr);try{r[Dr]=void 0}catch(e){return zr.call(r)}return i=zr.call(r),e?r[Dr]=t:delete r[Dr],i}:function(r){return zr.call(r)};function Jr(){return/^\s*function\s*([^(]*)/i}var Kr,Qr=/^\s*function\s*([^(]*)/i;B(Jr,"REGEXP",Qr),Kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Hr(r)};var Yr=Kr;function re(r){return"number"==typeof r}function ee(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function te(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ee(n):ee(n)+r,i&&(r="-"+r)),r}var ie=String.prototype.toLowerCase,ne=String.prototype.toUpperCase;function ae(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!re(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=te(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=te(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ne.call(r.specifier)?ne.call(t):ie.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function oe(r){return"string"==typeof r}var ce=Math.abs,se=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,pe=String.prototype.replace,le=/e\+(\d)$/,fe=/e-(\d)$/,ge=/^(\d+)$/,de=/^(\d+)e/,he=/\.0$/,we=/\.0*e/,be=/(\..*[^0])0*e/;function ye(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!re(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ce(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=pe.call(t,be,"$1e"),t=pe.call(t,we,"e"),t=pe.call(t,he,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=pe.call(t,le,"e+0$1"),t=pe.call(t,fe,"e-0$1"),r.alternate&&(t=pe.call(t,ge,"$1."),t=pe.call(t,de,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ue.call(r.specifier)?ue.call(t):se.call(t)}function ve(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function me(r,e,t){var i=e-r.length;return i<0?r:r=t?r+ve(i):ve(i)+r}var Ee=String.fromCharCode,xe=isNaN,ke=Array.isArray;function Se(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ve(r){var e,t,i,n,a,o,c,s,u;if(!ke(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(oe(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Se(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,xe(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,xe(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ae(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!xe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=xe(a)?String(i.arg):Ee(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=ye(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=te(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=me(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var je=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ae(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Te(r){var e,t,i,n;for(t=[],n=0,i=je.exec(r);i;)(e=r.slice(n,je.lastIndex-i[0].length)).length&&t.push(e),t.push(Ae(i)),n=je.lastIndex,i=je.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function $e(r){return"string"==typeof r}function Fe(r){var e,t;if(!$e(r))throw new TypeError(Fe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Te(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ve.apply(null,e)}function Ie(r){return null!==r&&"object"==typeof r}var Ce=function(r){if("function"!=typeof r)throw new TypeError(Fe("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Yr(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Ie);function Re(r){var e,t,i,n;if(("Object"===(t=Hr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Qr.exec(i.toString()))return e[1]}return Ie(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}B(Ie,"isObjectLikeArray",Ce);var Oe="function"==typeof G||"object"==typeof Xr||"function"==typeof Gr?function(r){return Re(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Re(r).toLowerCase():e};function _e(r){return"function"===Oe(r)}var Le=/./,Ze=Nr(),We=Ze.document&&Ze.document.childNodes,Pe=Int8Array,Ne=M(),Be=Object.prototype.toString,Ge="function"==typeof Symbol?Symbol:void 0,Xe="function"==typeof Ge?Ge.toStringTag:"",Ue=Ne&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Be.call(r);t=r[Xe],e=J(r,Xe);try{r[Xe]=void 0}catch(e){return Be.call(r)}return i=Be.call(r),e?r[Xe]=t:delete r[Xe],i}:function(r){return Be.call(r)};function Me(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ze(){return/^\s*function\s*([^(]*)/i}var qe,De=/^\s*function\s*([^(]*)/i;Me(ze,"REGEXP",De),qe=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ue(r)};var He=qe;function Je(r){return"number"==typeof r}function Ke(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Qe(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Ke(n):Ke(n)+r,i&&(r="-"+r)),r}var Ye=String.prototype.toLowerCase,rt=String.prototype.toUpperCase;function et(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Je(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Qe(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Qe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===rt.call(r.specifier)?rt.call(t):Ye.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function tt(r){return"string"==typeof r}var it=Math.abs,nt=String.prototype.toLowerCase,at=String.prototype.toUpperCase,ot=String.prototype.replace,ct=/e\+(\d)$/,st=/e-(\d)$/,ut=/^(\d+)$/,pt=/^(\d+)e/,lt=/\.0$/,ft=/\.0*e/,gt=/(\..*[^0])0*e/;function dt(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Je(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":it(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ot.call(t,gt,"$1e"),t=ot.call(t,ft,"e"),t=ot.call(t,lt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ot.call(t,ct,"e+0$1"),t=ot.call(t,st,"e-0$1"),r.alternate&&(t=ot.call(t,ut,"$1."),t=ot.call(t,pt,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===at.call(r.specifier)?at.call(t):nt.call(t)}function ht(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function wt(r,e,t){var i=e-r.length;return i<0?r:r=t?r+ht(i):ht(i)+r}var bt=String.fromCharCode,yt=isNaN,vt=Array.isArray;function mt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Et(r){var e,t,i,n,a,o,c,s,u;if(!vt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(tt(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=mt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,yt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,yt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=et(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!yt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=yt(a)?String(i.arg):bt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=dt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Qe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=wt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function St(r){var e,t,i,n;for(t=[],n=0,i=xt.exec(r);i;)(e=r.slice(n,xt.lastIndex-i[0].length)).length&&t.push(e),t.push(kt(i)),n=xt.lastIndex,i=xt.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Vt(r){return"string"==typeof r}function jt(r){var e,t;if(!Vt(r))throw new TypeError(jt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[St(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Et.apply(null,e)}function At(r){return null!==r&&"object"==typeof r}var Tt=function(r){if("function"!=typeof r)throw new TypeError(jt("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!He(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(At);function $t(r){var e,t,i,n;if(("Object"===(t=Ue(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=De.exec(i.toString()))return e[1]}return At(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Me(At,"isObjectLikeArray",Tt);var Ft="function"==typeof Le||"object"==typeof Pe||"function"==typeof We?function(r){return $t(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?$t(r).toLowerCase():e};function It(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Ft(r)}(r.next)}function Ct(r){return"number"==typeof r}var Rt=Number,Ot=Rt.prototype.toString,_t=Mr();function Lt(r){return"object"==typeof r&&(r instanceof Rt||(_t?function(r){try{return Ot.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Hr(r)))}function Zt(r){return Ct(r)||Lt(r)}B(Zt,"isPrimitive",Ct),B(Zt,"isObject",Lt);var Wt,Pt="function"==typeof qr&&"symbol"==typeof qr("foo")&&J(qr,"iterator")&&"symbol"==typeof qr.iterator?Symbol.iterator:null,Nt=M(),Bt=Object.prototype.toString,Gt="function"==typeof Symbol?Symbol:void 0,Xt="function"==typeof Gt?Gt.toStringTag:"",Ut=Nt&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Bt.call(r);t=r[Xt],e=J(r,Xt);try{r[Xt]=void 0}catch(e){return Bt.call(r)}return i=Bt.call(r),e?r[Xt]=t:delete r[Xt],i}:function(r){return Bt.call(r)};Wt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ut(r)};var Mt=Wt,zt=/./,qt=Nr(),Dt=qt.document&&qt.document.childNodes,Ht=Int8Array;function Jt(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Kt(){return/^\s*function\s*([^(]*)/i}var Qt=/^\s*function\s*([^(]*)/i;function Yt(r){return"number"==typeof r}function ri(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ei(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ri(n):ri(n)+r,i&&(r="-"+r)),r}Jt(Kt,"REGEXP",Qt);var ti=String.prototype.toLowerCase,ii=String.prototype.toUpperCase;function ni(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Yt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ei(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ei(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ii.call(r.specifier)?ii.call(t):ti.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ai(r){return"string"==typeof r}var oi=Math.abs,ci=String.prototype.toLowerCase,si=String.prototype.toUpperCase,ui=String.prototype.replace,pi=/e\+(\d)$/,li=/e-(\d)$/,fi=/^(\d+)$/,gi=/^(\d+)e/,di=/\.0$/,hi=/\.0*e/,wi=/(\..*[^0])0*e/;function bi(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Yt(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":oi(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ui.call(t,wi,"$1e"),t=ui.call(t,hi,"e"),t=ui.call(t,di,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ui.call(t,pi,"e+0$1"),t=ui.call(t,li,"e-0$1"),r.alternate&&(t=ui.call(t,fi,"$1."),t=ui.call(t,gi,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===si.call(r.specifier)?si.call(t):ci.call(t)}function yi(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function vi(r,e,t){var i=e-r.length;return i<0?r:r=t?r+yi(i):yi(i)+r}var mi=String.fromCharCode,Ei=isNaN,xi=Array.isArray;function ki(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Si(r){var e,t,i,n,a,o,c,s,u;if(!xi(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ai(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=ki(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ei(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ei(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ni(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Ei(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ei(a)?String(i.arg):mi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=bi(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ei(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=vi(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Vi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ji(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ai(r){var e,t,i,n;for(t=[],n=0,i=Vi.exec(r);i;)(e=r.slice(n,Vi.lastIndex-i[0].length)).length&&t.push(e),t.push(ji(i)),n=Vi.lastIndex,i=Vi.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Ti(r){return"string"==typeof r}function $i(r){var e,t;if(!Ti(r))throw new TypeError($i("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ai(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Si.apply(null,e)}function Fi(r){return null!==r&&"object"==typeof r}var Ii=function(r){if("function"!=typeof r)throw new TypeError($i("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Mt(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Fi);function Ci(r){var e,t,i,n;if(("Object"===(t=Ut(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Qt.exec(i.toString()))return e[1]}return Fi(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Jt(Fi,"isObjectLikeArray",Ii);var Ri="function"==typeof zt||"object"==typeof Ht||"function"==typeof Dt?function(r){return Ci(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ci(r).toLowerCase():e};function Oi(r){return"function"===Ri(r)}var _i=Object,Li=/./,Zi=Nr(),Wi=Zi.document&&Zi.document.childNodes,Pi=Int8Array,Ni=M(),Bi=Object.prototype.toString,Gi="function"==typeof Symbol?Symbol:void 0,Xi="function"==typeof Gi?Gi.toStringTag:"",Ui=Ni&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Bi.call(r);t=r[Xi],e=J(r,Xi);try{r[Xi]=void 0}catch(e){return Bi.call(r)}return i=Bi.call(r),e?r[Xi]=t:delete r[Xi],i}:function(r){return Bi.call(r)};function Mi(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function zi(){return/^\s*function\s*([^(]*)/i}var qi,Di=/^\s*function\s*([^(]*)/i;Mi(zi,"REGEXP",Di),qi=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ui(r)};var Hi=qi;function Ji(r){return"number"==typeof r}function Ki(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Qi(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Ki(n):Ki(n)+r,i&&(r="-"+r)),r}var Yi=String.prototype.toLowerCase,rn=String.prototype.toUpperCase;function en(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ji(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Qi(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Qi(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===rn.call(r.specifier)?rn.call(t):Yi.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function tn(r){return"string"==typeof r}var nn=Math.abs,an=String.prototype.toLowerCase,on=String.prototype.toUpperCase,cn=String.prototype.replace,sn=/e\+(\d)$/,un=/e-(\d)$/,pn=/^(\d+)$/,ln=/^(\d+)e/,fn=/\.0$/,gn=/\.0*e/,dn=/(\..*[^0])0*e/;function hn(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ji(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":nn(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=cn.call(t,dn,"$1e"),t=cn.call(t,gn,"e"),t=cn.call(t,fn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=cn.call(t,sn,"e+0$1"),t=cn.call(t,un,"e-0$1"),r.alternate&&(t=cn.call(t,pn,"$1."),t=cn.call(t,ln,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===on.call(r.specifier)?on.call(t):an.call(t)}function wn(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function bn(r,e,t){var i=e-r.length;return i<0?r:r=t?r+wn(i):wn(i)+r}var yn=String.fromCharCode,vn=isNaN,mn=Array.isArray;function En(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xn(r){var e,t,i,n,a,o,c,s,u;if(!mn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(tn(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=En(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,vn(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,vn(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=en(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!vn(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=vn(a)?String(i.arg):yn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=hn(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Qi(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=bn(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var kn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sn(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Vn(r){var e,t,i,n;for(t=[],n=0,i=kn.exec(r);i;)(e=r.slice(n,kn.lastIndex-i[0].length)).length&&t.push(e),t.push(Sn(i)),n=kn.lastIndex,i=kn.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function jn(r){return"string"==typeof r}function An(r){var e,t;if(!jn(r))throw new TypeError(An("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Vn(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return xn.apply(null,e)}function Tn(r){return null!==r&&"object"==typeof r}var $n=function(r){if("function"!=typeof r)throw new TypeError(An("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Hi(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Tn);function Fn(r){var e,t,i,n;if(("Object"===(t=Ui(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Di.exec(i.toString()))return e[1]}return Tn(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Mi(Tn,"isObjectLikeArray",$n);var In,Cn,Rn="function"==typeof Li||"object"==typeof Pi||"function"==typeof Wi?function(r){return Fn(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Fn(r).toLowerCase():e},On=Object.getPrototypeOf;Cn=Object.getPrototypeOf,In="function"===Rn(Cn)?On:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Ui(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _n=In,Ln=Object.prototype;function Zn(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Mt(r)}(r)&&(e=function(r){return null==r?null:(r=_i(r),_n(r))}(r),!e||!J(r,"constructor")&&J(e,"constructor")&&Oi(e.constructor)&&"[object Function]"===Ut(e.constructor)&&J(e,"isPrototypeOf")&&Oi(e.isPrototypeOf)&&(e===Ln||function(r){var e;for(e in r)if(!J(r,e))return!1;return!0}(r)))}function Wn(r,e){return Zn(e)?(J(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(Fe("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Pn(r,e,t){var i,n,a,o;if(!It(r))throw new TypeError(Fe("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!_e(e))throw new TypeError(Fe("invalid argument. Second argument must be a function. Value: `%s`.",e));if(i={invalid:NaN},arguments.length>2&&(a=Wn(i,t)))throw a;return B(n={},"next",c),B(n,"return",s),Pt&&_e(r[Pt])&&B(n,Pt,u),n;function c(){var t;return o?{done:!0}:(t=r.next()).done?(o=!0,t):{value:Ct(t.value)?e(t.value):i.invalid,done:!1}}function s(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function u(){return Pn(r[Pt](),e,i)}}function Nn(r){return r*r}return function(r){return Pn(r,Nn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAbs2=e();
//# sourceMappingURL=browser.js.map

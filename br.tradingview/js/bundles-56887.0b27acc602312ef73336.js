"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[56887],{625422:(d,u,f)=>{u.transformPoint=u.translationMatrix=u.scalingMatrix=u.rotationMatrix=void 0;var e=f(86441);u.rotationMatrix=function(d){var u=Math.cos(d),f=Math.sin(d);return[[u,-f,0],[f,u,0],[0,0,1]]},u.scalingMatrix=function(d,u){return[[d,0,0],[0,u,0],[0,0,1]]},u.translationMatrix=function(d,u){return[[1,0,d],[0,1,u],[0,0,1]]},u.transformPoint=function(d,u){for(var f=[u.x,u.y,1],c=[0,0,0],t=0;t<3;t++)for(var a=0;a<3;a++)c[t]+=f[a]*d[t][a];return new e.Point(c[0],c[1])}},144315:(d,u,f)=>{f.d(u,{default:()=>H});var e=f(396335);const c=function(d,u){for(var f=-1,e=null==d?0:d.length;++f<e&&!1!==u(d[f],f,d););return d};var t=f(866934),a=f(175969),r=f(933358);const n=function(d,u){return d&&(0,a.default)(u,(0,r.default)(u),d)};var o=f(364162);const b=function(d,u){return d&&(0,a.default)(u,(0,o.default)(u),d)};var i=f(157508),l=f(458555),s=f(112644);const v=function(d,u){return(0,a.default)(d,(0,s.default)(d),u)};var j=f(749605);const p=function(d,u){return(0,a.default)(d,(0,j.default)(d),u)};var g=f(885747),y=f(847651),h=f(903427),m=Object.prototype.hasOwnProperty;const x=function(d){var u=d.length,f=new d.constructor(u);return u&&"string"==typeof d[0]&&m.call(d,"index")&&(f.index=d.index,f.input=d.input),f};var A=f(544702);const w=function(d,u){var f=u?(0,A.default)(d.buffer):d.buffer;return new d.constructor(f,d.byteOffset,d.byteLength)};var C=/\w*$/;const N=function(d){var u=new d.constructor(d.source,C.exec(d));return u.lastIndex=d.lastIndex,u};var O=f(503060),S=O.default?O.default.prototype:void 0,I=S?S.valueOf:void 0;const M=function(d){return I?Object(I.call(d)):{}};var k=f(839895);const F=function(d,u,f){var e=d.constructor;switch(u){case"[object ArrayBuffer]":return(0,A.default)(d);case"[object Boolean]":case"[object Date]":return new e(+d);case"[object DataView]":return w(d,f);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,k.default)(d,f);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(d);case"[object RegExp]":return N(d);case"[object Set]":return new e;case"[object Symbol]":return M(d)}};var P=f(852222),U=f(854814),E=f(925247),z=f(383527);const D=function(d){return(0,z.default)(d)&&"[object Map]"==(0,h.default)(d)};var B=f(395256),V=f(159283),G=V.default&&V.default.isMap;const L=G?(0,B.default)(G):D;var R=f(598279);const T=function(d){return(0,z.default)(d)&&"[object Set]"==(0,h.default)(d)};var $=V.default&&V.default.isSet;const q=$?(0,B.default)($):T;var W={}
;W["[object Arguments]"]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object DataView]"]=W["[object Boolean]"]=W["[object Date]"]=W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Map]"]=W["[object Number]"]=W["[object Object]"]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object Symbol]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Error]"]=W["[object Function]"]=W["[object WeakMap]"]=!1;const H=function d(u,f,a,o,s,j){var m,A=1&f,w=2&f,C=4&f;if(a&&(m=s?a(u,o,s,j):a(u)),void 0!==m)return m;if(!(0,R.default)(u))return u;var N=(0,U.default)(u);if(N){if(m=x(u),!A)return(0,l.default)(u,m)}else{var O=(0,h.default)(u),S="[object Function]"==O||"[object GeneratorFunction]"==O;if((0,E.default)(u))return(0,i.default)(u,A);if("[object Object]"==O||"[object Arguments]"==O||S&&!s){if(m=w||S?{}:(0,P.default)(u),!A)return w?p(u,b(m,u)):v(u,n(m,u))}else{if(!W[O])return s?u:{};m=F(u,O,A)}}j||(j=new e.default);var I=j.get(u);if(I)return I;j.set(u,m),q(u)?u.forEach((function(e){m.add(d(e,f,a,e,u,j))})):L(u)&&u.forEach((function(e,c){m.set(c,d(e,f,a,c,u,j))}));var M=C?w?y.default:g.default:w?keysIn:r.default,k=N?void 0:M(u);return c(k||u,(function(e,c){k&&(e=u[c=e]),(0,t.default)(m,c,d(e,f,a,c,u,j))})),m}},43688:(d,u,f)=>{f.d(u,{default:()=>e});const e=function(d,u,f){var e=-1,c=d.length;u<0&&(u=-u>c?0:c+u),(f=f>c?c:f)<0&&(f+=c),c=u>f?0:f-u>>>0,u>>>=0;for(var t=Array(c);++e<c;)t[e]=d[e+u];return t}},677013:(d,u,f)=>{f.d(u,{default:()=>o});var e=f(383821);const c=function(d){var u=null==d?0:d.length;return u?d[u-1]:void 0};var t=f(580838),a=f(43688);const r=function(d,u){return u.length<2?d:(0,t.default)(d,(0,a.default)(u,0,-1))};var n=f(887844);const o=function(d,u){return u=(0,e.default)(u,d),null==(d=r(d,u))||delete d[(0,n.default)(c(u))]}},847651:(d,u,f)=>{f.d(u,{default:()=>a});var e=f(44631),c=f(749605),t=f(364162);const a=function(d){return(0,e.default)(d,t.default,c.default)}},749605:(d,u,f)=>{f.d(u,{default:()=>r});var e=f(920883),c=f(156838),t=f(112644),a=f(335987);const r=Object.getOwnPropertySymbols?function(d){for(var u=[];d;)(0,e.default)(u,(0,t.default)(d)),d=(0,c.default)(d);return u}:a.default},822914:(d,u,f)=>{f.d(u,{default:()=>c});var e=f(144315);const c=function(d){return(0,e.default)(d,5)}},702040:(d,u,f)=>{f.d(u,{default:()=>c});var e=f(677013);const c=function(d,u){return null==d||(0,e.default)(d,u)}},818438:(d,u,f)=>{f.d(u,{default:()=>e});const e=function(){var d={base:"https://twemoji.maxcdn.com/v/13.0.1/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;if(u<65536)return r(u);return r(55296+((u-=65536)>>10),56320+(1023&u))},toCodePoint:p},onerror:function(){this.parentNode&&this.parentNode.replaceChild(n(this.alt,!1),this)},parse:function(u,f){f&&"function"!=typeof f||(f={callback:f});return("string"==typeof u?l:i)(u,{callback:f.callback||o,
attributes:"function"==typeof f.attributes?f.attributes:v,base:"string"==typeof f.base?f.base:d.base,ext:f.ext||d.ext,size:f.folder||(e=f.size||d.size,"number"==typeof e?e+"x"+e:e),className:f.className||d.className,onerror:f.onerror||d.onerror});var e},replace:j,test:function(d){f.lastIndex=0;var u=f.test(d);return f.lastIndex=0,u}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"
},f=/(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,e=/\uFE0F/g,c=String.fromCharCode(8205),t=/[&<>'"]/g,a=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,r=String.fromCharCode
;return d;function n(d,u){return document.createTextNode(u?d.replace(e,""):d)}function o(d,u){return"".concat(u.base,u.size,"/",d,u.ext)}function b(d){return p(d.indexOf(c)<0?d.replace(e,""):d)}function i(d,u){for(var e,c,t,r,o,i,l,s,v,j,p,g,y,h=function d(u,f){for(var e,c,t=u.childNodes,r=t.length;r--;)3===(c=(e=t[r]).nodeType)?f.push(e):1!==c||"ownerSVGElement"in e||a.test(e.nodeName.toLowerCase())||d(e,f);return f}(d,[]),m=h.length;m--;){for(t=!1,r=document.createDocumentFragment(),i=(o=h[m]).nodeValue,s=0;l=f.exec(i);){if((v=l.index)!==s&&r.appendChild(n(i.slice(s,v),!0)),g=b(p=l[0]),s=v+p.length,y=u.callback(g,u),g&&y){for(c in(j=new Image).onerror=u.onerror,j.setAttribute("draggable","false"),e=u.attributes(p,g))e.hasOwnProperty(c)&&0!==c.indexOf("on")&&!j.hasAttribute(c)&&j.setAttribute(c,e[c]);j.className=u.className,j.alt=p,j.src=y,t=!0,r.appendChild(j)}j||r.appendChild(n(p,!1)),j=null}t&&(s<i.length&&r.appendChild(n(i.slice(s),!0)),o.parentNode.replaceChild(r,o))}return d}function l(d,u){return j(d,(function(d){var f,e,c=d,a=b(d),r=u.callback(a,u);if(a&&r){for(e in c="<img ".concat('class="',u.className,'" ','draggable="false" ','alt="',d,'"',' src="',r,'"'),f=u.attributes(d,a))f.hasOwnProperty(e)&&0!==e.indexOf("on")&&-1===c.indexOf(" "+e+"=")&&(c=c.concat(" ",e,'="',f[e].replace(t,s),'"'));c=c.concat("/>")}return c}))}function s(d){return u[d]}function v(){return null}function j(d,u){return String(d).replace(f,u)}function p(d,u){for(var f=[],e=0,c=0,t=0;t<d.length;)e=d.charCodeAt(t++),c?(f.push((65536+(c-55296<<10)+(e-56320)).toString(16)),c=0):55296<=e&&e<=56319?c=e:f.push(e.toString(16));return f.join(u||"-")}}()}}]);
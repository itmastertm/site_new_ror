/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.6.2 (2020-12-08)
 */

!function(){"use strict";var n,t,e,r,o,u,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(n){return function(){return n}},a=c(!1),s=c(!0),f=function(){return l},l=(n=function(n){return n.isNone()},{fold:function(n,t){return n()},is:a,isSome:a,isNone:s,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(undefined),or:e,orThunk:t,map:f,each:function(){},bind:f,exists:a,forall:s,filter:f,equals:n,equals_:n,toArray:function(){return[]},toString:c("none()")}),d=function(e){var n=c(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:s,isNone:a,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return d(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:l},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(a,function(n){return t(e,n)})}};return o},m=function(n){return null===n||n===undefined?l:d(n)},v=function(t){return function(n){return typeof n===t}},g=(r="string",function(n){return e=typeof(t=n),(null===t?"null":"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e)===r;var t,e}),h=v("boolean"),p=v("number"),y=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}},b=Object.keys,w=function(n,t){for(var e=b(n),r=0,o=e.length;r<o;r++){var u=e[r];t(n[u],u)}},N=("undefined"!=typeof window||Function("return this;")(),function(n){return n.dom.nodeValue}),T=(o=3,function(n){return n.dom.nodeType===o}),k=function(n,t,e){!function(n,t,e){if(!(g(e)||h(e)||p(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple");n.setAttribute(t,e+"")}(n.dom,t,e)},A=function(n,t){n.dom.removeAttribute(t)},O=function(n,t){var e,r,o=(e=t,null===(r=n.dom.getAttribute(e))?undefined:r);return o===undefined||""===o?[]:o.split(" ")},C=function(n){return n.dom.classList!==undefined},S=function(n,t){return o=t,u=O(e=n,r="class").concat([o]),k(e,r,u.join(" ")),!0;var e,r,o,u},D=function(n,t){return o=t,0<(u=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r];t(u,r)&&e.push(u)}return e}(O(e=n,r="class"),function(n){return n!==o})).length?k(e,r,u.join(" ")):A(e,r),!1;var e,r,o,u},E=function(n){0===(C(n)?n.dom.classList:O(n,"class")).length&&A(n,"class")},L=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:n}},x={fromHtml:function(n,t){var e=(t||document).createElement("div");if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return L(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n);return L(e)},fromText:function(n,t){var e=(t||document).createTextNode(n);return L(e)},fromDom:L,fromPoint:function(n,t,e){return m(n.dom.elementFromPoint(t,e)).map(L)}},V={"\xa0":"nbsp","\xad":"shy"},B=function(n,t){var e="";return w(n,function(n,t){e+=t}),new RegExp("["+e+"]",t?"g":"")},P=B(V),_=B(V,!0),j=(u="",w(V,function(n){u&&(u+=","),u+="span.mce-"+n}),u),M="mce-nbsp",q=function(n){return'<span data-mce-bogus="1" class="mce-'+V[n]+'">'+n+"</span>"},H=function(n){var t=N(n);return T(n)&&t!==undefined&&P.test(t)},F=function(n,t){var e=[],r=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o];r[o]=t(u,o)}return r}(n.dom.childNodes,x.fromDom);return y(r,function(n){t(n)&&(e=e.concat([n])),e=e.concat(F(n,t))}),e},I=function(n){return"span"===n.nodeName.toLowerCase()&&n.classList.contains("mce-nbsp-wrap")},U=function(c,n){var t=F(x.fromDom(n),H);y(t,function(n){var t,e,r=n.dom.parentNode;if(I(r))t=x.fromDom(r),e=M,C(t)?t.dom.classList.add(e):S(t,e);else{for(var o=c.dom.encode(N(n)).replace(_,q),u=c.dom.create("div",null,o),i=void 0;i=u.lastChild;)c.dom.insertAfter(i,n.dom);c.dom.remove(n.dom)}})},K=function(r,n){var t=r.dom.select(j,n);y(t,function(n){var t,e;I(n)?(t=x.fromDom(n),e=M,C(t)?t.dom.classList.remove(e):D(t,e),E(t)):r.dom.remove(n,!0)})},R=function(n){var t=n.getBody(),e=n.selection.getBookmark(),r=(r=function(n,t){for(;n.parentNode;){if(n.parentNode===t)return n;n=n.parentNode}}(n.selection.getNode(),t))!==undefined?r:t;K(n,r),U(n,r),n.selection.moveToBookmark(e)},z=function(n,t){var e,r;e=n,r=t.get(),e.fire("VisualChars",{state:r});var o=n.getBody();(!0===t.get()?U:K)(n,o)},G=function(n,t){n.addCommand("mceVisualChars",function(){!function(n,t){t.set(!t.get());var e=n.selection.getBookmark();z(n,t),n.selection.moveToBookmark(e)}(n,t)})},J=tinymce.util.Tools.resolve("tinymce.util.Delay"),Q=function(e,r){return function(t){t.setActive(r.get());var n=function(n){return t.setActive(n.state)};return e.on("VisualChars",n),function(){return e.off("VisualChars",n)}}};i.add("visualchars",function(n){var t,e,r,o,u,i,c,a,s,f,l=(t=n.getParam("visualchars_default_state",!1),e=t,{get:function(){return e},set:function(n){e=n}});return G(n,l),o=l,(r=n).ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:function(){return r.execCommand("mceVisualChars")},onSetup:Q(r,o)}),r.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:function(){return r.execCommand("mceVisualChars")},onSetup:Q(r,o)}),u=n,i=l,c=J.debounce(function(){R(u)},300),!1!==u.getParam("forced_root_block")&&u.on("keydown",function(n){!0===i.get()&&(13===n.keyCode?R(u):c())}),u.on("remove",c.stop),s=l,(a=n).on("init",function(){z(a,s)}),f=l,{isEnabled:function(){return f.get()}}})}();

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.6.2 (2020-12-08)
 */

!function(){"use strict";var e,n,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.util.I18n"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(t){return t.getParam("toc_class","mce-toc")},m=function(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"},a=(e="mcetoc_",n=0,function(){var t=(new Date).getTime().toString(32);return e+t+(n++).toString(32)}),v=function(n){var t,o=l(n),e=m(n),r=function(t){for(var e=[],n=1;n<=t;n++)e.push("h"+n);return e.join(",")}(1<=(t=parseInt(n.getParam("toc_depth","3"),10))&&t<=9?t:3),i=n.$(r);return i.length&&/^h[1-9]$/i.test(e)&&(i=i.filter(function(t,e){return!n.dom.hasClass(e.parentNode,o)})),c.map(i,function(t){var e=t.id;return{id:e||a(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}})},u=function(t){var e,n,o,r,i,c,l,a="",u=v(t),d=function(t){for(var e=9,n=0;n<t.length;n++)if(t[n].level<e&&(e=t[n].level),1===e)return e;return e}(u)-1;if(!u.length)return"";for(a+=(i=m(t),c=f.translate("Table of Contents"),l="</"+i+">","<"+i+' contenteditable="true">'+s.DOM.encode(c)+l),e=0;e<u.length;e++){if((o=u[e]).element.id=o.id,r=u[e+1]&&u[e+1].level,d===o.level)a+="<li>";else for(n=d;n<o.level;n++)a+="<ul><li>";if(a+='<a href="#'+o.id+'">'+o.title+"</a>",r!==o.level&&r)for(n=o.level;r<n;n--)a+="</li></ul><li>";else a+="</li>",r||(a+="</ul>");d=o.level}return a},i=function(t){var e,n,o,r,i=l(t),c=t.$("."+i);o=t,!(r=c).length||0<o.dom.getParents(r[0],".mce-offscreen-selection").length?t.insertContent((n=u(e=t),'<div class="'+e.dom.encode(l(e))+'" contenteditable="false">'+n+"</div>")):d(t)},d=function(t){var e=l(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(u(t))})},o=function(n){return function(t){var e=function(){return t.setDisabled(n.mode.isReadOnly()||!(0<v(n).length))};return e(),n.on("LoadContent SetContent change",e),function(){return n.on("LoadContent SetContent change",e)}}},g=function(t){var e;t.ui.registry.addButton("toc",{icon:"toc",tooltip:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:o(t)}),t.ui.registry.addButton("tocupdate",{icon:"reload",tooltip:"Update",onAction:function(){return t.execCommand("mceUpdateToc")}}),t.ui.registry.addMenuItem("toc",{icon:"toc",text:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:o(t)}),t.ui.registry.addContextToolbar("toc",{items:"tocupdate",predicate:(e=t,function(t){return t&&e.dom.is(t,"."+l(e))&&e.getBody().contains(t)}),scope:"node",position:"node"})};t.add("toc",function(t){var e,n,o,r;(e=t).addCommand("mceInsertToc",function(){i(e)}),e.addCommand("mceUpdateToc",function(){d(e)}),g(t),o=(n=t).$,r=l(n),n.on("PreProcess",function(t){var e=o("."+r,t.node);e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))}),n.on("SetContent",function(){var t=o("."+r);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})})}();

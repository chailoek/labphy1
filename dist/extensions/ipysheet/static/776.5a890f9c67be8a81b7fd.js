"use strict";(self.webpackChunkipysheet=self.webpackChunkipysheet||[]).push([[776],{1150:(n,o,t)=>{t.d(o,{Z:()=>l});var r=t(8081),e=t.n(r),a=t(3645),d=t.n(a)()(e());d.push([n.id,"/* handsontable layout*/\n\n/* These properties can be overridden with the Layout widget.\n *\n *  - overflow: hidden;\n *   the first parent element with defined dimension and overflow: hidden is considered as the container for the spreadsheet\n *\n *  - height: 250px;\n *   we used a fixed value in pixels for the the natural height because `auto` yields a zero-height table in the Jupyter notebook.\n *\n */\n .handsontable.jupyter-widgets {\n    overflow: hidden;\n    height: 250px;\n }\n \n /* handsontable theme */\n .p-Widget .handsontable .table caption + thead tr:first-child th,\n .p-Widget .handsontable .table caption + thead tr:first-child td,\n .p-Widget .handsontable .table colgroup + thead tr:first-child th,\n .p-Widget .handsontable .table colgroup + thead tr:first-child td,\n .p-Widget .handsontable .table thead:first-child tr:first-child th,\n .p-Widget .handsontable .table thead:first-child tr:first-child td {\n   border-top: 1px solid var(--jp-border-color1);\n }\n \n .p-Widget .handsontable .table-bordered th:first-child,\n .p-Widget .handsontable .table-bordered td:first-child {\n   border-left: 1px solid var(--jp-border-color1);\n }\n \n .p-Widget .handsontable tr {\n   background-color: var(--jp-layout-color0);\n }\n \n .p-Widget .handsontable .table-striped > tbody > tr:nth-of-type(even) {\n   background-color: var(--jp-layout-color0);\n }\n \n .p-Widget .handsontable th,\n .p-Widget .handsontable td {\n   background-color: var(--jp-layout-color0);\n   color: var(--jp-content-font-color0);\n   font-size: var(--jp-ui-font-size1);\n   font-family: var(--jp-ui-font-family);\n   border-right: 1px solid var(--jp-border-color2);\n   border-bottom: 1px solid var(--jp-border-color2);\n }\n \n .p-Widget .handsontable td.htInvalid {\n   background-color: var(--jp-error-color0) !important; /*gives priority over td.area selection background*/\n }\n \n .p-Widget .handsontable th:last-child {\n   border-right: 1px solid var(--jp-border-color2);\n   border-bottom: 1px solid var(--jp-border-color2);\n }\n \n .p-Widget .handsontable tr:first-child th.htNoFrame,\n .p-Widget .handsontable th:first-child.htNoFrame,\n .p-Widget .handsontable th.htNoFrame {\n   background-color: var(--jp-layout-color0);\n }\n \n .p-Widget .handsontable th {\n   background-color: var(--jp-layout-color2);\n   color: var(--jp-content-font-color0);\n }\n \n .p-Widget .handsontable th.active {\n   background-color: var(--jp-layout-color3);\n }\n \n .p-Widget .handsontable .manualColumnResizer:hover,\n .p-Widget .handsontable .manualColumnResizer.active,\n .p-Widget .handsontable .manualRowResizer:hover,\n .p-Widget .handsontable .manualRowResizer.active {\n   background-color: var(--jp-brand-color1);\n }\n \n .p-Widget .handsontable .manualColumnResizerGuide {\n   background-color: var(--jp-brand-color1);\n }\n \n .p-Widget .handsontable .manualRowResizerGuide {\n   background-color: var(--jp-brand-color1);\n }\n \n .p-Widget .handsontable td.area:before,\n .p-Widget .handsontable td.area-1:before,\n .p-Widget .handsontable td.area-2:before,\n .p-Widget .handsontable td.area-3:before,\n .p-Widget .handsontable td.area-4:before,\n .p-Widget .handsontable td.area-5:before,\n .p-Widget .handsontable td.area-6:before,\n .p-Widget .handsontable td.area-7:before {\n   background-color: var(--jp-brand-color2);\n }\n \n .p-Widget .handsontable tbody th.ht__highlight,\n .p-Widget .handsontable thead th.ht__highlight {\n   background-color: var(--jp-layout-color3);\n }\n \n .p-Widget .handsontable tbody th.ht__active_highlight,\n .p-Widget .handsontable thead th.ht__active_highlight {\n   background-color: var(--jp-brand-color1);\n   color: white;\n }\n \n .p-Widget .handsontableInput {\n   box-shadow: 0 0 0 2px var(--jp-brand-color0) inset;\n   color: var(--jp-content-font-color0);\n   background-color: var(--jp-layout-color0);\n }\n \n .p-Widget .handsontable.listbox .ht_master table {\n   border: 1px solid var(--jp-border-color2);\n   background-color: var(--jp-layout-color0);\n }\n \n .p-Widget .handsontable.listbox tr td.current,\n .p-Widget .handsontable.listbox tr:hover td {\n   background-color: var(--jp-layout-color1);\n }\n \n .p-Widget .handsontable td.htSearchResult {\n   background: var(--jp-accent-color1);\n   color: white;\n }\n \n .p-Widget .htBordered.htTopBorderSolid {\n   border-top-color: var(--jp-border-color2);\n }\n .p-Widget .htBordered.htRightBorderSolid {\n   border-right-color: var(--jp-border-color2);\n }\n .p-Widget .htBordered.htBottomBorderSolid {\n   border-bottom-color: var(--jp-border-color2);\n }\n .p-Widget .htBordered.htLeftBorderSolid {\n   border-left-color: var(--jp-border-color2);\n }\n \n .p-Widget .handsontable tbody tr th:nth-last-child(2) {\n   border-right: 1px solid var(--jp-border-color2);\n }\n \n .p-Widget .handsontable thead tr:nth-last-child(2) th.htGroupIndicatorContainer {\n   border-bottom: 1px solid var(--jp-border-color2);\n }\n \n .p-Widget .ht_clone_top_left_corner thead tr th:nth-last-child(2) {\n   border-right: 1px solid var(--jp-border-color2);\n }\n \n .p-Widget .handsontable .wtBorder.current {\n   background-color: var(--jp-brand-color0) !important;\n   border-color: var(--jp-layout-color0) !important;\n }\n \n .p-Widget .handsontable .wtBorder.area {\n   background-color: var(--jp-brand-color0) !important;\n   border-color: var(--jp-layout-color0) !important;\n }\n \n /* Pikaday styling */\n .pika-single {\n     color: var(--jp-content-font-color0);\n     background: var(--jp-layout-color0);\n     border: 1px solid var(--jp-border-color2);\n     border-bottom-color: var(--jp-border-color2);\n     font-family: var(--jp-ui-font-family);\n }\n \n .pika-label {\n     background-color: var(--jp-layout-color0);\n }\n \n .pika-table th {\n     color: var(--jp-content-font-color1);\n }\n \n .pika-button {\n     color: var(--jp-content-font-color2);\n     background: var(--jp-layout-color2);\n }\n \n .pika-week {\n     font-size: var(--jp-ui-font-size1);\n     color: var(--jp-content-font-color1);\n }\n \n .is-today .pika-button {\n     color: var(--jp-content-font-color2);\n }\n \n .is-selected .pika-button {\n     color: var(--jp-layout-color0);\n     background: var(--jp-layout-color2);\n     box-shadow: inset 0 1px 3px var(--jp-brand-color0)\n }\n \n .is-inrange .pika-button {\n     background: var(--jp-brand-color1)\n }\n \n .is-startrange .pika-button {\n     color: var(--jp-layout-color0);\n     background: var(--jp-layout-color2);\n }\n \n .is-endrange .pika-button {\n     color: var(--jp-layout-color0);\n     background: var(--jp-layout-color2);\n }\n \n .is-disabled .pika-button,\n .is-outside-current-month .pika-button {\n     color: var(--jp-content-font-color1);\n }\n \n .pika-button:hover {\n     color: var(--jp-layout-color0);\n     background: var(--jp-layout-color2);\n }\n \n .pika-prev,\n .pika-next {\n     background-color: var(--jp-layout-color2);\n }\n ",""]);const l=d},3645:n=>{n.exports=function(n){var o=[];return o.toString=function(){return this.map((function(o){var t="",r=void 0!==o[5];return o[4]&&(t+="@supports (".concat(o[4],") {")),o[2]&&(t+="@media ".concat(o[2]," {")),r&&(t+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),t+=n(o),r&&(t+="}"),o[2]&&(t+="}"),o[4]&&(t+="}"),t})).join("")},o.i=function(n,t,r,e,a){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(r)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(d[i]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&d[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),e&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=e):p[4]="".concat(e)),o.push(p))}},o}},8081:n=>{n.exports=function(n){return n[1]}},9259:(n,o,t)=>{var r=t(3379),e=t.n(r),a=t(7795),d=t.n(a),l=t(569),i=t.n(l),c=t(3565),p=t.n(c),s=t(9216),h=t.n(s),b=t(4589),u=t.n(b),v=t(1150),g={};g.styleTagTransform=u(),g.setAttributes=p(),g.insert=i().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=h(),e()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals},3379:n=>{var o=[];function t(n){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},d=[],l=0;l<n.length;l++){var i=n[l],c=r.base?i[0]+r.base:i[0],p=a[c]||0,s="".concat(c," ").concat(p);a[c]=p+1;var h=t(s),b={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==h)o[h].references++,o[h].updater(b);else{var u=e(b,r);r.byIndex=l,o.splice(l,0,{identifier:s,updater:u,references:1})}d.push(s)}return d}function e(n,o){var t=o.domAPI(o);return t.update(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap&&o.supports===n.supports&&o.layer===n.layer)return;t.update(n=o)}else t.remove()}}n.exports=function(n,e){var a=r(n=n||[],e=e||{});return function(n){n=n||[];for(var d=0;d<a.length;d++){var l=t(a[d]);o[l].references--}for(var i=r(n,e),c=0;c<a.length;c++){var p=t(a[c]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}a=i}}},569:n=>{var o={};n.exports=function(n,t){var r=function(n){if(void 0===o[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}o[n]=t}return o[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:n=>{n.exports=function(n){var o=document.createElement("style");return n.setAttributes(o,n.attributes),n.insert(o,n.options),o}},3565:(n,o,t)=>{n.exports=function(n){var o=t.nc;o&&n.setAttribute("nonce",o)}},7795:n=>{n.exports=function(n){var o=n.insertStyleElement(n);return{update:function(t){!function(n,o,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var e=void 0!==t.layer;e&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,e&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(r,n,o.options)}(o,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)}}}},4589:n=>{n.exports=function(n,o){if(o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}},3776:(n,o,t)=>{t.r(o),t(9259)}}]);
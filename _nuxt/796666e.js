(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{727:function(t,n,e){"use strict";var r=e(2),o=e(301).trim;r({target:"String",proto:!0,forced:e(728)("trim")},{trim:function(){return o(this)}})},728:function(t,n,e){"use strict";var r=e(105).PROPER,o=e(3),c=e(302);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},729:function(t,n,e){"use strict";var r=e(10),o=(e(727),e(54),{props:{items:{type:Array,required:!0}}}),c=e(33),l={components:{Toc:Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"toc"},[n("ul",t._l(t.items,(function(i){return n("li",{key:i[2]},[n("a",{attrs:{href:i[2]}},[t._v(t._s(i[1]))])])})),0)])}),[],!1,null,null,null).exports},props:{content:{type:String,required:!0}},data:function(){return{title:"",toc:[],htmlContent:""}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$mdParse(t.content);case 2:a=n.sent,t.title=a.title,t.htmlContent=a.htmlContent,t.toc=a.toc;case 6:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.title.trim()+" - Ticivara Robe Sewing"}}},m=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-container container"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),n("Toc",{attrs:{items:t.toc}}),t._v(" "),n("div",{staticClass:"page-content",domProps:{innerHTML:t._s(t.htmlContent)}})],1)])}),[],!1,null,null,null);n.a=m.exports},893:function(t,n,e){"use strict";e.r(n);var r={components:{MarkdownPage:e(729).a},fetch:function(t){t.store.commit("setLangFromPath",t.route.path)},asyncData:function(t){return{pageText:"data:text/markdown;charset=utf-8;base64,IyBQREYgZm9yIFByaW50aW5nCgotIFtBNSBzaXplIChQREYpXSgvcGRmL3RpY2l2YXJhLWVuZ2xpc2gucGRmKQoKWyFbVGljaXZhcmEgUERGXSgvcGRmL3RpY2l2YXJhLWVuZ2xpc2gtdGh1bWIuanBnKV0oL3BkZi90aWNpdmFyYS1lbmdsaXNoLnBkZikKCg=="}}},o=e(33),component=Object(o.a)(r,(function(){return(0,this._self._c)("MarkdownPage",{attrs:{content:this.pageText}})}),[],!1,null,null,null);n.default=component.exports}}]);
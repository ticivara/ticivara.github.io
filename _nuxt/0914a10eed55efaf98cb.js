(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{592:function(t,e,n){"use strict";n(32);var c=n(3),l={props:{items:{type:Array,required:!0}}},r=n(14),o={components:{Toc:Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toc"},[n("ul",t._l(t.items,(function(i){return n("li",{key:i[2]},[n("a",{attrs:{href:i[2]}},[t._v(t._s(i[1]))])])})),0)])}),[],!1,null,null,null).exports},props:{content:{type:String,required:!0}},data:function(){return{title:"",toc:[],htmlContent:""}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$mdParse(t.content);case 2:a=e.sent,t.title=a.title,t.htmlContent=a.htmlContent,t.toc=a.toc;case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title.trim()+" - Ticivara Robe Sewing"}}},m=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-container container"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),n("Toc",{attrs:{items:t.toc}}),t._v(" "),n("div",{staticClass:"page-content",domProps:{innerHTML:t._s(t.htmlContent)}})],1)])}),[],!1,null,null,null);e.a=m.exports},720:function(t,e){t.exports="data:text/markdown;base64,IyBUb29scyBDaGVja2xpc3QKCjwhLS0gbm9leHBvcnRfbGF0ZXhfYmVnaW4gLS0+CjxmaWd1cmU+CgohW3Nld2luZyB0b29sc10oL2ltZy90b29scy9zZXdpbmctdG9vbHNfdzUwMC5qcGcpCgo8L2ZpZ3VyZT4KPCEtLSBub2V4cG9ydF9sYXRleF9lbmQgLS0+CgojIyBDaGVja2xpc3QgYmVmb3JlIHNld2luZwoKLSB0aHJlYWQKLSBzZXdpbmcgbWFjaGluZSBjb25kaXRpb24KICAtIG5lZWRsZSwgYm9iYmluLCBlbmdpbmUKICAtIGV4dHJhIG5lZWRsZXMgaW4gY2FzZSBpdCBicmVha3MKLSBzdGFuZGluZyBsYW1wIHRvIGRpcmVjdCBsaWdodCBvbiB0aGUgc2V3aW5nIG1hY2hpbmUKLSBleHRlbnNpb24gbGVhZAotIGxhcmdlIHNoYXJwIHNjaXNzb3JzCi0gc2hvcnQgdHJpbW1pbmcgc2Npc3NvcnMKLSB0YXBlIG1lYXN1cmUKLSBsb25nIHN0cmFpZ2h0IGVkZ2UKLSBydWxlcgotIG1hcmtpbmcgcGVuY2lsICgyQiAtIDRCIHNvZnQpCi0gcGVuY2lsIHNoYXJwZW5lcgotIHBpbnMKLSB1bmRvIHRvb2wsIHBpY2tlciBhbmQgYmxhZGUKLSBmYWJyaWMgZHllCi0gcm90YXJ5IGN1dHRlcgotIGN1dHRpbmcgYm9hcmQKLSBpcm9uCi0gaXJvbmluZyBib2FyZAotIHB1cmUgd2F0ZXIgZm9yIHRoZSBpcm9uIChkaXN0aWxsZWQgb3IgZnJvbSBhIGRlaHVtaWRpZmllcikKLSBjdXR0aW5nIHBhdHRlcm4KLSBjb250YWluZXIgdG8gY29sbGVjdCBjdXQtb2ZmIHNjcmFwcyBhbmQgdGhyZWFkCgo="},741:function(t,e,n){"use strict";n.r(e);var c=n(720),l=n.n(c),r={components:{MarkdownPage:n(592).a},fetch:function(t){t.store.commit("setLangFromPath",t.route.path)},asyncData:function(t){return{pageText:l.a}}},o=n(14),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("MarkdownPage",{attrs:{content:this.pageText}})}),[],!1,null,null,null);e.default=component.exports}}]);
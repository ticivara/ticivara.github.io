(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{727:function(G,l,Z){"use strict";var c=Z(2),B=Z(301).trim;c({target:"String",proto:!0,forced:Z(728)("trim")},{trim:function(){return B(this)}})},728:function(G,l,Z){"use strict";var c=Z(105).PROPER,B=Z(3),I=Z(302);G.exports=function(G){return B((function(){return!!I[G]()||"​᠎"!=="​᠎"[G]()||c&&I[G].name!==G}))}},729:function(G,l,Z){"use strict";var c=Z(10),B=(Z(727),Z(54),{props:{items:{type:Array,required:!0}}}),I=Z(33),d={components:{Toc:Object(I.a)(B,(function(){var G=this,l=G._self._c;return l("div",{staticClass:"toc"},[l("ul",G._l(G.items,(function(i){return l("li",{key:i[2]},[l("a",{attrs:{href:i[2]}},[G._v(G._s(i[1]))])])})),0)])}),[],!1,null,null,null).exports},props:{content:{type:String,required:!0}},data:function(){return{title:"",toc:[],htmlContent:""}},created:function(){var G=this;return Object(c.a)(regeneratorRuntime.mark((function l(){var a;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,G.$mdParse(G.content);case 2:a=l.sent,G.title=a.title,G.htmlContent=a.htmlContent,G.toc=a.toc;case 6:case"end":return l.stop()}}),l)})))()},head:function(){return{title:this.title.trim()+" - Ticivara Robe Sewing"}}},m=Object(I.a)(d,(function(){var G=this,l=G._self._c;return l("div",{staticClass:"markdown-container container"},[l("div",{staticClass:"content"},[l("h1",{staticClass:"page-title"},[G._v(G._s(G.title))]),G._v(" "),l("Toc",{attrs:{items:G.toc}}),G._v(" "),l("div",{staticClass:"page-content",domProps:{innerHTML:G._s(G.htmlContent)}})],1)])}),[],!1,null,null,null);l.a=m.exports},894:function(G,l,Z){"use strict";Z.r(l);var c={components:{MarkdownPage:Z(729).a},fetch:function(G){G.store.commit("setLangFromPath",G.route.path)},asyncData:function(G){return{pageText:"data:text/markdown;charset=utf-8;base64,IyBTYWJvbmcgU2V3aW5nIEd1aWRlCgojIyBQbGFubmluZyB0aGUgY3V0dGluZyBsYXlvdXQKCk1lYXN1cmUgdGhlIGNsb3RoIGFuZCBwbGFuIGhvdyB0aGUgc2Fib25nIGFuZCB0aGUgYm9yZGVycyBhcmUgZ29pbmcgdG8gZml0LgoKSWYgdGhlIGNsb3RoIGlzIG5vdCB3aWRlIGVub3VnaCBmb3IgdGhlIHNhYm9uZyB0byBiZSBkcmF3biBhbmQgY3V0IGFzIG9uZSBwaWVjZSwgZGV0ZXJtaW5lIHdoaWNoCmtoYW5kYXMgd2lsbCBiZSBjdXQgb3V0IHNlcGFyYXRlbHkuIERyYXcgdGhlbSBob3Jpem9udGFsbHkgb24gdGhlIGNsb3RoLCBpbnN0ZWFkIG9mIHRoZSB2ZXJ0aWNhbApvcmllbnRhdGlvbiBzZWVuIG9uIHRoZSBwYXR0ZXJuIGRpYWdyYW0uCgpPbiB0aGUgZHJhd2luZywgdGhlIGN1dHRpbmcgbGluZXMgYXJlIHRoZSBsb25nIHZlcnRpY2FsIGxpbmVzLgoKSW4gdGhlIGNhc2Ugb2Ygc2VwYXJhdGUga2hhbmRhcywgdGhlIHBhdHRlcm4gY2FsY3VsYXRvciBpbXBsaWVzIGEgMWNtIGN1dHRpbmcgYnVmZmVyIGF0IHRoZSBzaWRlCmVkZ2VzIHdoZXJlIGtoYW5kaGFzIHdpbGwgYmUgam9pbmVkLCBhbmQgNS0xMGNtIHNoaWZ0aW5nIGJ1ZmZlcnMgYXQgdGhlIHRvcCBhbmQgYm90dG9tIGVkZ2Ugb2YgdGhlCmtoYW5kaGFzLgoKVGhlIHNlcGFyYXRlIGtoYW5kYXMgd2lsbCBiZSBqb2luZWQgYWxvbmcgdGhlc2UgbGluZXMgYWZ0ZXIgdGhlIGZpcnN0IGFuZCBzZWNvbmQgc2V3aW5nIGlzCmNvbXBsZXRlZC4KClRoZSB0aHJlYWQgb3JpZW50YXRpb24gb2YgdGhlIGNsb3RoIGhhcyB0byBiZSBvYnNlcnZlZCBhbmQga2VwdCBjb25zaXN0ZW50IGJldHdlZW4gdGhlIHNlcGFyYXRlCnBpZWNlcy4gVGhlIGNsb3RoIHN0cmVjaGVzIHRvIGEgZGlmZmVyZW50IGRlZ3JlZSB3aGVuIHB1bGxlZCBpbiB0aGUgdmVydGljYWwgb3IgaG9yaXpvbnRhbApkaXJlY3Rpb24uIElmIHRoaXMgaXMgbWl4ZWQgdXAsIHRoZSBkaWZmZXJlbnQgb3JpZW50YXRpb24gd2lsbCBjYXVzZSB0aGUgbWF0ZXJpYWwgdG8gd3JpbmtsZS4KClRoZSBib3JkZXJzIG1heSBmaXQgaW4gb25lIGxlbmd0aCwgYnV0IG1heSBoYXZlIHRvIGJlIHNld24gZnJvbSBqb2luaW5nIHNlcGFyYXRlIHBpZWNlcyB0byBtYWludGFpbgp0aGUgdGhyZWFkIG9yaWVudGF0aW9uLgoKRmlyc3QsIGRldGVybWluZSBob3cgbXVjaCBvZiB0aGUgdG90YWwgY2xvdGggaXMgZ29pbmcgdG8gYmUgbmVlZGVkIHRvIGZpdCB0aGUgc2Fib25nIGFuZCB0aGUKYm9yZGVycywgYW5kIGN1dCBvZmYgdGhpcyBhcHByaXhpbWF0ZSBzaXplIGZyb20gdGhlIG1haW4gY2xvdGggcm9sbC4KCldhc2ggaXQgYXQgNDAgZGVncmVlcywgdG8gbWFrZSBzdXJlIHRoZSBjbG90aCBzaHJpbmtzIGJlZm9yZSBkcmF3aW5nIHRoZSBtYXJrcy4KCkRyeSBhbmQgaXJvbi4KCjwhLS0gbGF0ZXgKXGNsZWFycGFnZQotLT4KCiMjIE1hcmtpbmcgdGhlIGNsb3RoCgpEZXRlcm1pbmUgdGhlIGZpbmFsIHNpemUgd2l0aCB0aGUgcGF0dGVybiBjYWxjdWxhdG9yIGFuZCBtYXJrIHRoZSBjbG90aC4KCktlZXAgaW4gbWluZCB0aGUgdG9wIGFuZCBib3R0b20gc2lkZSBvZiB0aGUgY2xvdGguIFRoZSB0b3Agc2lkZSBpcyBnb2luZyB0byBiZSBzbGlnaHRseSBtb3JlCnJlZmxlY3RpdmUgd2hlbiBsb29raW5nIGF0IGl0IGZyb20gYSBsb3cgYW5nbGUuCgojIyBGaXJzdCBzZXdpbmcKClN0YXJ0IHdpdGggdGhlIGJyb2tlbiBsaW5lcy4gUGluY2ggdGhlIGNsb3RoIGFuZCBjcmVhc2UgaXQgYWxvbmcgdGhlIGRyYXduIGxpbmUuCgpGb2xkIGFuZCBtYWtlIHRoZSBmaXJzdCBzZXdpbmcsIGF0IGFib3V0IDVtbSBmcm9tIHRoZSBlZGdlLgoKS2VlcCBpbiBtaW5kIHRvIG5vdCBzZXcgdG9vIG5hcnJvdywgdGhlIHNlY29uZCBzZXdpbmcgd2lsbCBiZSBtYWRlIGJldHdlZW4gdGhpcyBzZXduIGxpbmUgYW5kIHRoZQplZGdlIG9mIHRoZSBmb2xkLgoKPGZpZ3VyZT4KClshW0ZpcnN0IHNld2luZyBicm9rZW4gbGluZXNdKC9pbWcvc2Fib25nL3Bob3Rvcy9maXJzdC1zZXdpbmctYnJva2VuLWxpbmVzLXc1MDAuanBnKV0oL2ltZy9zYWJvbmcvcGhvdG9zL2ZpcnN0LXNld2luZy1icm9rZW4tbGluZXMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtGaXJzdCBzZXdpbmcgaG9yaXpvbnRhbCBsaW5lc10oL2ltZy9zYWJvbmcvcGhvdG9zL2ZpcnN0LXNld2luZy1ob3Jpei1saW5lcy13NTAwLmpwZyldKC9pbWcvc2Fib25nL3Bob3Rvcy9maXJzdC1zZXdpbmctaG9yaXotbGluZXMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCk9ic2VydmUgdGhlIHNlcXVlbmNlIG9mIHRoZSBsaW5lczogKDEpIGJyb2tlbiB2ZXJ0aWNhbCwgKDIpIHNob3J0IGhvcml6b250YWwsICgzKSBsb25nIHZlcnRpY2FsLgoKVGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIHRoZSBsaW5lcyBkb24ndCBuZWVkIHRvIGJlIGxvY2tlZCB3aXRoIHJldmVyc2Ugc2V3aW5nLiBBcm91bmQgdGhlIGVkZ2Ugb2YKdGhlIGNsb3RoLCB0aGUgaGVtIGFuZCB0aGUgYm9kZXIgd2lsbCBsb2NrIHRoZSB0aHJlYWRzLiBBdCB0aGUga3VzaXMgd2hlcmUgdGhlIGJyb2tlbiBsaW5lcyBlbmQsIHRoZQpuZXh0IGxpbmUgd2lsbCBjcm9zcyBpdCBhbmQgbG9jayB0aGUgdGhyZWFkLgoKV2hlbiBzZXdpbmcgdGhlIGJyb2tlbiBsaW5lcywgb25lIG1heSBzdGFydCBhdCBvbmUgZW5kIG9mIHRoZSBjbG90aCwgc3RvcCB3aGVyZSB0aGUgbGluZSBjcm9zc2VzIHRoZQprdXNpLiBUaGUgbmVlZGxlIGNhbiBiZSB0aGVuIGxpZnRlZCBhY3Jvc3MgdGhlIGt1c2ksIGNvbnRpbnVpbmcgdG8gc2V3IHRoZSBicm9rZW4gbGluZSBvbiB0aGUgb3RoZXIKc2lkZSBvZiB0aGUga3VzaS4KCkFmdGVyIG9uZSBncm91cCBvZiBsaW5lcyBpcyBmaW5pc2hlZCwgc3VjaCBhcyBhZnRlciB0aGUgYnJva2VuIGxpbmVzLCBwaW5jaCBhbmQgY3JlYXNlIHRoZSBjbG90aAphbG9uZyBvbmUgb2YgdGhlIGxpbmVzIGluIHRoZSBuZXh0IGdyb3VwLiBGb2xkIGFuZCBzZXcgYWxvbmcgdGhlIGVkZ2UsIGNsb3NpbmcgdGhlIFQgYXQgdGhlIHBsYWNlCndoZXJlIHRoZSBsaW5lcyBtZWV0LgoKIyMgU2Vjb25kIHNld2luZwoKVGhlIHNlY29uZCBzZXdpbmcgaXMgaW4gdGhlIHNhbWUgc2VxdWVuY2UgYXMgdGhlIGZpcnN0LgoKRm9yIHRoZSBzZWNvbmQgc2V3aW5nLCBmb2xkIHRoZSBjbG90aCBvdXR3YXJkIGZyb20gdGhlIGt1c2lzLCBmbGF0dGVuIGFuZCBzZXcgYmV0d2VlbiB0aGUgZmlyc3QKc2V3aW5nIGFuZCB0aGUgZWRnZSBvZiB0aGUgZm9sZC4KCjxmaWd1cmU+CgpbIVtTZWNvbmQgc2V3aW5nIGJyb2tlbiBsaW5lcyAxXSgvaW1nL3NhYm9uZy9waG90b3Mvc2Vjb25kLXNld2luZy1icm9rZW4tbGluZXMtMS13NTAwLmpwZyldKC9pbWcvc2Fib25nL3Bob3Rvcy9zZWNvbmQtc2V3aW5nLWJyb2tlbi1saW5lcy0xLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbU2Vjb25kIHNld2luZyBicm9rZW4gbGluZXMgMl0oL2ltZy9zYWJvbmcvcGhvdG9zL3NlY29uZC1zZXdpbmctYnJva2VuLWxpbmVzLTItdzUwMC5qcGcpXSgvaW1nL3NhYm9uZy9waG90b3Mvc2Vjb25kLXNld2luZy1icm9rZW4tbGluZXMtMi1vcmlnLmpwZykKCjwvZmlndXJlPgoKPGZpZ3VyZT4KClshW1NlY29uZCBzZXdpbmcgbGluZXNdKC9pbWcvc2Fib25nL3Bob3Rvcy9zZWNvbmQtc2V3aW5nLWxpbmVzLXc1MDAuanBnKV0oL2ltZy9zYWJvbmcvcGhvdG9zL3NlY29uZC1zZXdpbmctbGluZXMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KClRoaXMgd2F5IG9uIHRoZSBvdXRzaWRlIG9mIHRoZSBjbG90aCB0aGVyZSB3aWxsIGJlIG9uZSB2aXNpYmxlIHNld2luZyBsaW5lLCBhbmQKb24gdGhlIGluc2lkZSB0aGVyZSB3aWxsIGJlIHR3by4KCkluIHRoZSBzZWNvbmQgc2V3aW5nLCB0aGUgZm9sZGluZyBkaXJlY3Rpb24gaGFzIHRvIGJlIG9ic2VydmVkIHNvIHRoYXQgdGhlIGt1c2lzCmFyZSBsb3dlciB0aGFuIHRoZSBtaWRkbGUgc2VjdGlvbnMuCgpJZiBpdCB3YXMgY3V0IGZyb20gc2VwYXJhdGUgcGllY2VzLCB0aGVzZSBoYXZlIHRvIGJlIGpvaW5lZCBub3cuIFRoZSBqb2luIGhhcyB0byBoaWRlIGJvdGggb3BlbgplZGdlcy4gVGhlIGpvaW5pbmcgZm9sZCBpcyBtYWRlIGJ5IHR3byBzZXdpbmcgbGluZXMsIHdoaWNoIGFyZSBlZmZlY3RpdmVseSB0aGUgZmlyc3QgYW5kIHNlY29uZApzZXdpbmcgYWxvbmcgdGhlIGxvbmcgdmVydGljYWwgbGluZXMuCgojIyBUcmltIGFuZCBGb2xkIGEgSGVtCgpXaGVuIHNld2luZyB0aGUgcGF0dGVybiBvbiBhIHNpbmdsZSBwaWVjZSBvZiBtYWluIGNsb3RoLCB0aGUgc2V3aW5nIGxpbmVzIHB1bGwgaW4gdGhlIGZhYnJpYyBhbmQgdGhlCmVkZ2Ugb2YgdGhlIGNsb3RoIGlzIG5vIGxvbmdlciBnb2luZyB0byBiZSBhIHN0cmFpZ2h0IGxpbmUuIFRoZSB2YXJpYXRpb24gaXMgdXN1YWxseSBhYm91dCAzLTVtbS4KClBsYWNlIGEgcnVsZXIgYWxvbmcgdGhlIGVkZ2VzIGFuZCBkZXRlcm1pbmUgaWYgdGhlIGVkZ2UgaGFzIHRvIGJlIHRyaW1tZWQgdG8gbWFrZSB0aGVtIHN0cmFpZ2h0LgoKV2hlbiBzZXdpbmcgZnJvbSBzZXBhcmF0ZSBwaWVjZXMsIHRoZSBwbGFjZXMgd2hlcmUgcGFuZWxzIGFyZSBqb2luZWQgdXN1YWxseSBoYXZlIHNvbWUgdmFyaWF0aW9uIGluCnRoZSBhbGlnbm1lbnQgYXMgd2VsbCwgYW5kIHRoZXkgbWF5IG5lZWQgdG8gYmUgdHJpbW1lZCBhbG9uZyB0aGUgZWRnZXMgYWxsIGFyb3VuZCB0aGUgY2xvdGgsIHRvCmNyZWF0ZSBldmVuIGFuZCBzdHJhaWdodCBlZGdlcy4KCkFmdGVyIHRyaW1taW5nIHRoZSBlZGdlcywgZm9sZCB1cCAxY20gb24gdGhlIGVkZ2Ugb2YgdGhlIGNsb3RoIHRvIG1ha2UgYSBoZW0sIGJ1dCBpbnN0ZWFkIG9mIHNld2luZywKaXQgaXMgc3VmZmljaWVudCB0byBpcm9uIGFuZCBwaW4gaXQuIFdoZW4gcGxhY2luZyB0aGUgYm9yZGVyIG9uIHRvcCwgc2V3aW5nIHRoZSBib3JkZXIgaXMgZ29pbmcgdG8KZml4IHRoZSBoZW0gaW4gcGxhY2UgYXMgd2VsbC4KCiMjIEJvcmRlcnMKCkFkZCB0aGUgW2JvcmRlcnNdKC9lbi9ib3JkZXJzKS4KCg=="}}},B=Z(33),component=Object(B.a)(c,(function(){return(0,this._self._c)("MarkdownPage",{attrs:{content:this.pageText}})}),[],!1,null,null,null);l.default=component.exports}}]);
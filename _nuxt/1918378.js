(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{730:function(l,Z,G){"use strict";var c=G(2),d=G(300).trim;c({target:"String",proto:!0,forced:G(731)("trim")},{trim:function(){return d(this)}})},731:function(l,Z,G){"use strict";var c=G(105).PROPER,d=G(3),m=G(301);l.exports=function(l){return d((function(){return!!m[l]()||"​᠎"!=="​᠎"[l]()||c&&m[l].name!==l}))}},732:function(l,Z,G){"use strict";var c=G(10),d=(G(730),G(54),{props:{items:{type:Array,required:!0}}}),m=G(33),W={components:{Toc:Object(m.a)(d,(function(){var l=this,Z=l._self._c;return Z("div",{staticClass:"toc"},[Z("ul",l._l(l.items,(function(i){return Z("li",{key:i[2]},[Z("a",{attrs:{href:i[2]}},[l._v(l._s(i[1]))])])})),0)])}),[],!1,null,null,null).exports},props:{content:{type:String,required:!0}},data:function(){return{title:"",toc:[],htmlContent:""}},created:function(){var l=this;return Object(c.a)(regeneratorRuntime.mark((function Z(){var a;return regeneratorRuntime.wrap((function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l.$mdParse(l.content);case 2:a=Z.sent,l.title=a.title,l.htmlContent=a.htmlContent,l.toc=a.toc;case 6:case"end":return Z.stop()}}),Z)})))()},head:function(){return{title:this.title.trim()+" - Ticivara Robe Sewing"}}},X=Object(m.a)(W,(function(){var l=this,Z=l._self._c;return Z("div",{staticClass:"markdown-container container"},[Z("div",{staticClass:"content"},[Z("h1",{staticClass:"page-title"},[l._v(l._s(l.title))]),l._v(" "),Z("Toc",{attrs:{items:l.toc}}),l._v(" "),Z("div",{staticClass:"page-content",domProps:{innerHTML:l._s(l.htmlContent)}})],1)])}),[],!1,null,null,null);Z.a=X.exports},890:function(l,Z,G){"use strict";G.r(Z);var c={components:{MarkdownPage:G(732).a},fetch:function(l){l.store.commit("setLangFromPath",l.route.path)},asyncData:function(l){return{pageText:"data:text/markdown;charset=utf-8;base64,IyBDaXZhcmEgU2V3aW5nIEd1aWRlCgojIyBNYXJraW5nIHRoZSBjbG90aAoKTGF5IG91dCB0aGUgY2xvdGggd2l0aCB0aGUgKipib3R0b20gc2lkZSBmYWNpbmcgdXAqKi4gKFNlZSBob3cgdG8gW2RldGVybWluZSB0aGUgdG9wIGFuZCBib3R0b20gc2lkZV0oL2VuL3NhYm9uZy1ndWlkZSNkZXRlcm1pbmUtdGhlLXRvcC1hbmQtYm90dG9tLXNpZGUpLikKCkZvciBhICoqY2l2YXJhKiosIGRyYXcgdGhlIG1hcmtzIG9uIHRoZSAqKmJvdHRvbSBzaWRlKiouCgo8IS0tIGxhdGV4ClxiZWdpbnttdWx0aWNvbHN9ezJ9ClxzZXRsZW5ndGh7XG5leHRQaG90b1dpZHRofXtcbGluZXdpZHRofQotLT4KCjxmaWd1cmU+CgohW2xheSBvdXQgdGhlIGNsb3RoXSgvaW1nL2NpdmFyYS9lbi9sYXktb3V0LXRoZS1jbG90aC13NTAwLmpwZykKCjwvZmlndXJlPgoKPCEtLSBsYXRleApcY29sdW1uYnJlYWsKLS0+CgpNYXJrIHRoZSBkaWFncmFtIGxpbmVzIG9uIHRoZSBjbG90aCB3aXRoIGEgcGVuY2lsLiBOb3RlIHRoYXQgdGhlIHZlcnRpY2FsIGJ1ZmZlciBsZW5ndGggZm9yIHRoZQpzcXVhcmluZyBzdGFnZSBpcyBhbHJlYWR5IGluY2x1ZGVkIGF0IHRoZSBlbmRzIG9mIHRoZSBwYW5lbHMuIFRoaXMgd2lsbCBhbGxvdyAxMGNtIHZlcnRpY2FsCm1hbm9ldXZyaW5nIHdoZW4gam9pbmVkIHRoZSBjbG90aCBoYXMgdG8gYmUgdHJpbW1lZC4KCllvdSBjYW4gbWFyayB0aGUgcGFuZWxzIGpvaW5lZCBlbmQtdG8tZW5kLCBhbmQgdGhlIHZlcnRpY2FsIGJ1ZmZlciB3aWxsIGJlIGxlZnQgaW4gYmV0d2Vlbi4KCjwhLS0gbGF0ZXgKXGVuZHttdWx0aWNvbHN9CgpcY2xlYXJwYWdlCi0tPgoKPGZpZ3VyZT4KClshW01hcmsgdGhlIGRpYWdyYW0gbGluZXNdKC9pbWcvY2l2YXJhL2VuL21hcmstZGlhZ3JhbS1saW5lcy13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL21hcmstZGlhZ3JhbS1saW5lcy1vcmlnLmpwZykKCjwvZmlndXJlPgoKPGZpZ3VyZT4KClshW2VuZC10by1lbmRdKC9pbWcvY2l2YXJhL2VuL2VuZC10by1lbmQtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9lbmQtdG8tZW5kLW9yaWcuanBnKQoKPC9maWd1cmU+CgpSZW1lbWJlciB0byBsZWF2ZSBjbG90aCBmb3IgdGhlIGJvcmRlcnMgYWxvbmcgdGhlIGVkZ2VzIG9mIHRoZSBjbG90aC4gVGhlIHRocmVhZCBvcmllbnRhdGlvbiBvZiB0aGUKYm9yZGVyIHN0cmlwcyBoYXZlIHRvIGJlIHRoZSBzYW1lIGFzIHdoZW4gdGhleSBhcmUgcGxhY2VkIG9uIHRoZSBjbG90aCwgb3RoZXJ3aXNlIHRoZSBib3JkZXIgd2lsbApzaHJpbmsgaW4gYSBkaWZmZXJlbnQgZGlyZWN0aW9uIGZyb20gdGhlIGNsb3RoIHVuZGVyIGl0LiBTbWFsbCBib3JkZXIgcGllY2VzIGNhbiBiZSBqb2luZWQgaWYgdGhlCmVudGlyZSBsZW5ndGggY2FuJ3QgYmUgb2J0YWluZWQgZnJvbSB0aGUgc2lkZXMgb2YgdGhlIGNsb3RoLgoKV2hlbiB0aGUgc2l6ZSBvZiB0aGUgY2xvdGggYWxsb3csIHRoZSBsb25nIGJvcmRlcnMgY2FuIGJlIGN1dCBvdXQgZnJvbSB0aGUgaG9yaXpvbnRhbCBsZW5ndGgsIGFuZAp0aGUgc2hvcnQgYm9yZGVycyBmcm9tIHRoZSB2ZXJ0aWNhbCBsZW5ndGggb2YgdGhlIGNsb3RoLgoKQ3V0IG91dCB0aGUgcGFuZWxzLiBUYWtlIGNhcmUgdG8gbWFrZSBjbGVhbiBjdXRzIGF0IHRoZSBlZGdlcyB3aGljaCB3aWxsIGJlIGpvaW5lZCwgaWYgdGhlIGNsb3RoIGlzCm5vdCBjdXQgc3RyYWlnaHQgb3IgdGhlIHRocmVhZCBpcyBhbGxvd2VkIHRvIGZyYXksIGl0IHdpbGwgbWFrZSBqb2luaW5nIHRoZSBlZGdlcyBkaWZmaWN1bHQuCgo8ZmlndXJlPgoKIVtjdXQtdGhlLWNsb3RoXSgvaW1nL2NpdmFyYS9lbi9jdXQtdGhlLWNsb3RoLXc1MDAuanBnKQoKPC9maWd1cmU+Cgo8IS0tIGxhdGV4ClxzZXRsZW5ndGh7XG5leHRQaG90b1dpZHRofXswLjZcdGV4dHdpZHRofQotLT4KCjxmaWd1cmU+CgohW2Nsb3RoLWFscmVhZHktY3V0XSgvaW1nL2NpdmFyYS9lbi9jbG90aC1hbHJlYWR5LWN1dC13NTAwLmpwZykKCjwvZmlndXJlPgoKPCEtLSBsYXRleApcY2xlYXJwYWdlCi0tPgoKIyMgRmlyc3QgYW5kIHNlY29uZCBzZXdpbmcKCk1ha2UgdGhlIGZpcnN0IHNld2luZyBhbmQgc2Vjb25kIHNld2luZywgc2FtZSBtZXRob2QgYW5kIHNld2luZyBvcmRlciBhcyB3aXRoIHRoZQpbc2Fib25nXSgvZW4vc2Fib25nLWd1aWRlKS4gRmlyc3QgKDEpIHRoZSBicm9rZW4gdmVydGljYWwgbGluZXMsICgyKSB0aGVuIHRoZSBzaG9ydCBob3Jpem9udGFscyAoMykKYW5kIHRoZSBsb25nIGNvbnRpbnVvdXMgdmVydGljYWwgbGluZXMuCgpUaGUgZmluaXNoZWQgc2V3aW5nIHdpbGwgc2hvdyBvbmUgdGhyZWFkIG9uIHRoZSBvdXRzaWRlLCBhbmQgdHdvIHRocmVhZHMgb24gdGhlIGluc2lkZS4KCjxmaWd1cmU+CgpbIVtmaXJzdC1hbmQtc2Vjb25kLXNld2luZ10oL2ltZy9jaXZhcmEvZW4vZmlyc3QtYW5kLXNlY29uZC1zZXdpbmctdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9maXJzdC1hbmQtc2Vjb25kLXNld2luZy1vcmlnLmpwZykKCjwvZmlndXJlPgoKSWYgeW91IGlyb24gdGhlIGZvbGRzIGJlZm9yZSBzZXdpbmcgaXQsIHRoZSBjcmVhc2Ugd2lsbCBob2xkIGJldHRlciBhbmQgdGhlIGNsb3RoIG5lZWRzIGxlc3MKYXJyYW5naW5nIHdoaWxlIG9uIHRoZSBzZXdpbmcgbWFjaGluZS4KCjxmaWd1cmU+CgohW2lyb24tdGhlLWZvbGRdKC9pbWcvY2l2YXJhL2VuL2lyb24tdGhlLWZvbGQtdzUwMC5qcGcpCgo8L2ZpZ3VyZT4KClN0YXJ0IHNld2luZyB0aGUgYnJva2VuIGxpbmVzIGZyb20gdGhlIG91dHNpZGUgb2YgdGhlIGNsb3RoIHRvd2FyZCB0aGUga3VzaS4KCjxmaWd1cmU+CgpbIVtmaXJzdC1zZXdpbmddKC9pbWcvY2l2YXJhL2VuL2ZpcnN0LXNld2luZy13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2ZpcnN0LXNld2luZy1vcmlnLmpwZykKCjwvZmlndXJlPgoKV2hlbiB5b3UgcmVhY2ggdGhlIGt1c2ksIHlvdSBjYW4gbGlmdCB0aGUgbmVlZGxlLCBwdWxsIG91dCBhIGJpdCBvZiB0aHJlYWQsIHB1bGwgdGhlIGNsb3RoIHRvIHNraXAKb3ZlciB0aGUga3VzaSwgYW5kIGNvbnRpbnVlIHNld2luZyBvbiB0aGUgb3RoZXIgc2lkZS4KCjxmaWd1cmU+CgpbIVtza2lwcGluZy10aGUta3VzaV0oL2ltZy9jaXZhcmEvZW4vc2tpcHBpbmctdGhlLWt1c2ktdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9za2lwcGluZy10aGUta3VzaS1vcmlnLmpwZykKCjwvZmlndXJlPgoKTGF0ZXIsIHlvdSBjYW4gc2VjdXJlIHRoZSBsb29zZSB0aHJlYWRzIGJ5IHR5aW5nIGtub3RzIG9uIHRoZSBlbmQgYXQgdGhlIGt1c2kuIFRoaXMgYWxsb3dzIHRvCnBpbnBvaW50IGNhcmVmdWxseSB3aGVyZSB0aGUgc2V3biBsaW5lIHN0b3BzLCBpLmUuIGhvdyBjbG9zZSB0byB0aGUgbGluZS4gQW4gYWx0ZXJuYXRpdmUgbWV0aG9kIGlzCnRvIGdvIHJldmVyc2UgYW5kIGZvcndhcmQgd2l0aCB0aGUgc2V3aW5nIG1hY2hpbmUgYXQgdGhlc2UgcGxhY2VzIHRvIGxvY2sgdGhlIHRocmVhZC4KClRoZSB0aHJlYWQgaGFzIHRvIGJlIHNlY3VyZWQgb25lIHdheSBvciBhbm90aGVyLCBiZWNhdXNlIGlmIGxlZnQgbG9vc2UsIGl0IGNhbiB1bmRvIGl0c2VsZiBhbmQgdW5yYXZlbCB0aGUgc2V3aW5nLgoKVGhlIG91dGVyIGVkZ2VzIG9mIHRoZSB0aHJlYWQgKGF0IHRoZSBlbmQgb2YgdGhlIGNsb3RoKSBkb24ndCBoYXZlIHRvIGJlIHRpZWQsIGJlY2F1c2UgaXQgd2lsbCBiZQpjbG9zZWQgd2hlbiBhZGRpbmcgdGhlIGJvcmRlci4KCjwhLS0gbGF0ZXgKXGNsZWFycGFnZQotLT4KCiMjIEpvaW5pbmc6IG1ldGhvZCBvdmVydmlldwoKUGxhY2UgdGhlIHR3byBsYXllciBvbiB0b3Agb2YgZWFjaCBvdGhlciwgYWxpZ25lZCBhdCB0aGUgam9pbmluZyBlZGdlLCB3aXRoIHRoZSBmcm9udCBzaWRlcyBmYWNpbmcKZWFjaCBvdGhlci4gVGhlIGZyb250LCBvciBvdXRlciBzaWRlIGlzIHdoZXJlIHlvdSBzZWUgYSBzaW5nbGUgbGluZSBvZiBzZXdpbmcgYXQgdGhlIGt1c2kuCgo8ZmlndXJlPgoKWyFbam9pbi1sYXllcnMtb24tdG9wXSgvaW1nL2NpdmFyYS9lbi9qb2luLWxheWVycy1vbi10b3AtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWxheWVycy1vbi10b3Atb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtqb2luLWxheWVycy1vbi10b3AtMl0oL2ltZy9jaXZhcmEvZW4vam9pbi1sYXllcnMtb24tdG9wLTItdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWxheWVycy1vbi10b3AtMi1vcmlnLmpwZykKCjwvZmlndXJlPgoKVGhlIHdpZHRoIG9mIHRoZSBmb2xkIGlzIGRldGVybWluZWQgYnkgdGhlIGRpc3RhbmNlIG9mIHRoZSBmaXJzdCBqb2luaW5nIHRocmVhZCB0byB0aGUgZWRnZSBvZiB0aGUKdXBwZXIgbGF5ZXIsIHdoaWNoIGhhcyBpdHMgYmFjayBzaWRlIGZhY2luZyB1cC4gVGhlIGxvd2VyIGxheWVyIGV4dGVuZHMgYmV5b25kIHRoYXQgZWRnZS4KCk9uIHRoZSBsb3dlciBjbG90aCBsYXllciwgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHNld24gbGluZSB0byB0aGUgZWRnZSBoYXMgdG8gYmUgYXQgbGVhc3QgdHdpY2UgYXMKd2lkZSBvciBtb3JlLCBhcyB0aGUgZm9sZCB0aGF0IHlvdSBkZXRlcm1pbmVkIG9uIHRoZSB1cHBlciBsYXllci4KCklmIHRoZSBmb2xkIGlzIGFib3V0IDVtbSwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIHNob3VsZCBiZSBhYm91dCAxMCB0byAxNW1tLgoKSWYgeW91IG1ha2UgdGhlIGZvbGQgdG9vIG5hcnJvdywgdGhlcmUgd29uJ3QgYmUgc3BhY2UgdG8gYWRkIHRoZSBzZWNvbmQgam9pbmluZyB0aHJlYWQuCgoKU2V3IHRoZSB0d28gbGF5ZXJzLgoKPGZpZ3VyZT4KClshW2pvaW4tc2V3aW5nLTFdKC9pbWcvY2l2YXJhL2VuL2pvaW4tc2V3aW5nLTEtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLXNld2luZy0xLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbam9pbi1kaXN0YW5jZV0oL2ltZy9jaXZhcmEvZW4vam9pbi1kaXN0YW5jZS13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2pvaW4tZGlzdGFuY2Utb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjwhLS0gbGF0ZXgKXGNsZWFycGFnZQotLT4KCk9wZW4gdXAgdGhlIHR3byBsYXllcnMsIGFuZCBpcm9uIHRoZW0gdG93YXJkIHRoZSBsb25nIG92ZXJsYXAuIFRoZSBzaG9ydCBvdmVybGFwIGxpZXMgb24gdG9wIG9mIHRoZSBsb25nLgoKPGZpZ3VyZT4KClshW2pvaW4tZm9sZC1vdXRdKC9pbWcvY2l2YXJhL2VuL2pvaW4tZm9sZC1vdXQtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWZvbGQtb3V0LW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbam9pbi1mb2xkLW91dC1pcm9uXSgvaW1nL2NpdmFyYS9lbi9qb2luLWZvbGQtb3V0LWlyb24tdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWZvbGQtb3V0LWlyb24tb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCldoaWxlIGlyb25pbmcsIHB1bGwgdGhlIGNsb3RoIHRpZ2h0IGFnYWluc3QgdGhlIHNld2luZyBsaW5lLCBzbyB0aGF0IHRoZSBpcm9uZWQgbGluZSBkb2Vzbid0IGFkZCBhCmdhcCB3aGVyZSB0aGUgY2xvdGggaXMgbG9vc2UuCgo8ZmlndXJlPgoKWyFbam9pbi1mb2xkLWlyb25lZF0oL2ltZy9jaXZhcmEvZW4vam9pbi1mb2xkLWlyb25lZC13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2pvaW4tZm9sZC1pcm9uZWQtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCkZvbGQgdGhlIGxvbmcgb3ZlcmxhcCBvbiB0b3Agb2YgdGhlIHNob3J0IG92ZXJsYXAsIG1haW50YWluaW5nIHRoZSBlZGdlIG9mIHRoZSBjbG90aCBiZWxvdy4gWW91IHR1cm4KdGhlIGNsb3RoIG92ZXIgdGhlIGVkZ2UsIG5vdCBmb2xkaW5nIHRoZSBlZGdlIGFsb25nIHRoZSBzZXdpbmcgbGluZS4KCjxmaWd1cmU+CgpbIVtqb2luLWZvbGQtb3Zlci1pcm9uXSgvaW1nL2NpdmFyYS9lbi9qb2luLWZvbGQtb3Zlci1pcm9uLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1mb2xkLW92ZXItaXJvbi1vcmlnLmpwZykKCjwvZmlndXJlPgoKPCEtLSBsYXRleApcY2xlYXJwYWdlCi0tPgoKVHJpbSBvZmYgdGhlIGV4Y2VzcyBjbG90aC4KCjwhLS0gbGF0ZXgKXGJlZ2lue211bHRpY29sc317Mn0KXHNldGxlbmd0aHtcbmV4dFBob3RvV2lkdGh9e1xsaW5ld2lkdGh9Ci0tPgoKPGZpZ3VyZT4KClshW2pvaW4tdHJpbS1leGNlc3NdKC9pbWcvY2l2YXJhL2VuL2pvaW4tdHJpbS1leGNlc3MtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLXRyaW0tZXhjZXNzLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8IS0tIGxhdGV4Clxjb2x1bW5icmVhawpcc2V0bGVuZ3Roe1xuZXh0UGhvdG9XaWR0aH17XGxpbmV3aWR0aH0KLS0+Cgo8ZmlndXJlPgoKWyFbam9pbi10cmltLWV4Y2Vzcy0yXSgvaW1nL2NpdmFyYS9lbi9qb2luLXRyaW0tZXhjZXNzLTItdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLXRyaW0tZXhjZXNzLTItb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjwhLS0gbGF0ZXgKXGVuZHttdWx0aWNvbHN9CgpcdnNwYWNlKnstXGJhc2VsaW5lc2tpcH0KXGVubGFyZ2V0aGlzcGFnZSp7XGJhc2VsaW5lc2tpcH0KLS0+CgpGb2xkIGJvdGggb3ZlcmxhcHMgdW5kZXJuZWF0aCwgdHVybiB0aGUgbG9uZyBvdmVybGFwIG92ZXIgc2hvcnQgb25lIGFsb25nIHRoZSBlZGdlLCBhbmQgY3JlYXNlIGl0CndpdGggdGhlIGlyb24uCgo8ZmlndXJlPgoKWyFbam9pbi1mb2xkLWJvdGhdKC9pbWcvY2l2YXJhL2VuL2pvaW4tZm9sZC1ib3RoLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1mb2xkLWJvdGgtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KClNldyBhbG9uZyB0aGUgZWRnZSBvZiB0aGUgZm9sZC4KCjxmaWd1cmU+CgpbIVtqb2luLXNldy1ib3RoXSgvaW1nL2NpdmFyYS9lbi9qb2luLXNldy1ib3RoLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1zZXctYm90aC1vcmlnLmpwZykKCjwvZmlndXJlPgoKVGhlIGpvaW4gaXMgY29tcGxldGUuCgo8ZmlndXJlPgoKWyFbam9pbi1jb21wbGV0ZS1iYWNrXSgvaW1nL2NpdmFyYS9lbi9qb2luLWNvbXBsZXRlLWJhY2stdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWNvbXBsZXRlLWJhY2stb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtqb2luLWNvbXBsZXRlLWZyb250XSgvaW1nL2NpdmFyYS9lbi9qb2luLWNvbXBsZXRlLWZyb250LXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1jb21wbGV0ZS1mcm9udC1vcmlnLmpwZykKCjwvZmlndXJlPgoKV2hlbiB5b3UgbG9vayBhdCB0aGUgZnJvbnQgc2lkZSwgdGhlIGt1c2kgaXMgbG93ZXIgdGhhbiB0aGUgYXJlYSBuZXh0IHRvIGl0IG9uIHRoZSByaWdodC4KCklmIHlvdSBjb21wYXJlIGl0IHRvIHJpY2UgcGFkZGllcywgdGhlIGt1c2lzIGFyZSB0aGUgcGF0aHMgYmV0d2VlbiB0aGUgZmllbGRzIG9mIHJpY2UuIFdoZW4gdGhlIHJpY2UKaGFzIGdyb3duIGFuZCBpcyByZWFkeSB0byBiZSBoYXJ2ZXN0ZWQsIHRoZSBmaWVsZCBpcyBoaWdoZXIgdGhhbiB0aGUgcGF0aC4KCiMjIEpvaW5pbmc6IG1hcmtpbmcgdGhlIHBvc2l0aW9uCgpXaGVuIHRoZSBmaXJzdCBhbmQgc2Vjb25kIHNld2luZyBpcyBjb21wbGV0ZWQgb24gdGhlIHRocmVlIHBpZWNlcywgbGF5IHRoZW0gb3V0IGluIHRoZSB3YXkgdGhleSB3aWxsCmJlIHNld24gdG9nZXRoZXIsIHRvIG1hcmsgdGhlIGNsb3RoIGZvciBqb2luaW5nLgoKVXNlIGEgbG9uZyBydWxlciB0byBhbGlnbiB0aGUgaG9yaXpvbnRhbCBrdXNpcyBhY3Jvc3MgdGhlIHRocmVlIHBpZWNlcy4KCjwhLS0gbGF0ZXgKXGJlZ2lue211bHRpY29sc317Mn0KXHNldGxlbmd0aHtcbmV4dFBob3RvV2lkdGh9e1xsaW5ld2lkdGh9Ci0tPgoKPGZpZ3VyZT4KClshW2xheS1vdXQtcGllY2VzXSgvaW1nL2NpdmFyYS9lbi9sYXktb3V0LXBpZWNlcy13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2xheS1vdXQtcGllY2VzLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8IS0tIGxhdGV4Clxjb2x1bW5icmVhawpcc2V0bGVuZ3Roe1xuZXh0UGhvdG9XaWR0aH17XGxpbmV3aWR0aH0KLS0+Cgo8ZmlndXJlPgoKWyFbbWFyay1qb2luaW5nLXBvaW50c10oL2ltZy9jaXZhcmEvZW4vbWFyay1qb2luaW5nLXBvaW50cy13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL21hcmstam9pbmluZy1wb2ludHMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjwhLS0gbGF0ZXgKXGVuZHttdWx0aWNvbHN9Ci0tPgoKTWFrZSBhIHBlbmNpbCBtYXJrIHdoZXJlIHRoZSBrdXNpcyBhcmUgZ29pbmcgdG8gbWVldC4gVGhlIGNsb3RoIG1heSBtb3ZlIG9yIHN0cmVjaCBhbG9uZyB0aGUgY3V0CmxpbmUsIGFuZCB0aGUgZW5kcyB3aWxsIGJlIHRyaW1tZWQgb2ZmIGF0IHRoZSBzcXVhcmluZyBzdGFnZSwgYnV0IHRoZSBrdXNpcyBoYXZlIHRvIHN0YXkgaW4gbGluZS4KClVzZSBwZW5jaWwgbWFya3Mgc3VjaCBhcyBhIFYtc2hhcGUsIHRvIG1ha2UgdGhlbSByZWNvZ25pemFibHkgZGlmZmVyZW50IGFuZCBhdm9pZCBtaXhpbmcgdGhlbSB1cCB3aXRoIHRoZSBsaW5lcyBvZiBvdGhlciBtYXJrcy4KCk1hcmsgYm90aCBlZGdlcyBvZiB0aGUgY2xvdGggc28gdGhhdCB0aGUgcG9zaXRpb24gaXMgbm90IGxvc3QgbGF0ZXIuCgo8ZmlndXJlPgoKWyFbbWFyay1rdXNpc10oL2ltZy9jaXZhcmEvZW4vbWFyay1rdXNpcy13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL21hcmsta3VzaXMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KClBpbiB0aGUgdHdvIHNpZGVzIHRvZ2V0aGVyIHdoZXJlIHRoZSBrdXNpcyBtZWV0IHRoZSBvdGhlciBzaWRlLCBzbyB0aGF0IHRoZXNlIHBvaW50cyBkb24ndCBtb3ZlLgoKT24gdGhlIHVwcGVyIGxheWVyLCB0d28gdGhyZWFkcyBzaG91bGQgYmUgc2Vlbiwgb24gdGhlIGxvd2VyIGxheWVyLCBvbmx5IG9uZSB0aHJlYWQuCgo8ZmlndXJlPgoKWyFbcGluLXRoZS1qb2luXSgvaW1nL2NpdmFyYS9lbi9waW4tdGhlLWpvaW4tdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9waW4tdGhlLWpvaW4tb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtwaW4tdGhlLWpvaW4tY2xvc2VdKC9pbWcvY2l2YXJhL2VuL3Bpbi10aGUtam9pbi1jbG9zZS13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL3Bpbi10aGUtam9pbi1jbG9zZS1vcmlnLmpwZykKCjwvZmlndXJlPgoKU2V3aW5nIHRoZW0gdG9nZXRoZXIgd2lsbCBzdGFydCBmcm9tIHRoZSBrdXNpLCB0b3dhcmQgdGhlIG91dGVyIGVkZ2UuCgpUaGUgY2xvdGggdG93YXJkIHRoZSBlZGdlcyBjYW4gYmUgYWxsb3dlZCB0byBtb3ZlIGFuZCBzdHJlY2ggYSBiaXQsIHRoZSBvdXRlciBlZGdlcyBkb24ndCBoYXZlIHRvCm1lZXQgZXhhY3RseS4KClRoZSBrdXNpcyBtdXN0IHJlbWFpbiBpbiB0aGUgcGlubmVkIHBvc2l0aW9ucy4gSWYgdGhlcmUgaXMgYW4gZXh0cmEgb3IgbWlzc2luZyBmZXcgY20gaW4gdGhlIGNsb3RoCmJldHdlZW4gdGhlIHR3byBrdXNpcywgb3IgYSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHVwcGVyIGFuZCBsb3dlciBsYXllciwgdGhlIGNsb3RoIGhhcyB0byBiZQpzdHJlY2hlZCBvciBnYXRoZXJlZCB1cCB0byBhYnNvcmIgdGhlIGRpZmZlcmVuY2UuCgo8IS0tIGxhdGV4ClxjbGVhcnBhZ2UKLS0+CgojIyBKb2luaW5nOiBmaXJzdCBzZXdpbmcKClN0YXJ0IHNld2luZyBmcm9tIG9uZSBlbmQgb2YgdGhlIGt1c2ksIGFjcm9zcyB0aGUga3VzaSBhbmQgbW92aW5nIG91dHdhcmQuCgpXaGVuIHN0YXJ0aW5nIGZyb20gb25lIHNpZGUsIHRoZSBrdXNpIHNob3dzIHRoZSBzZXdpbmcgbGluZXM6Cgo8ZmlndXJlPgoKWyFbc2V3aW5nLWZyb20ta3VzaV0oL2ltZy9jaXZhcmEvZW4vc2V3aW5nLWZyb20ta3VzaS13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL3Nld2luZy1mcm9tLWt1c2ktb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCldoZW4gc3RhcnRpbmcgZnJvbSBhbm90aGVyIHNpZGUsIHRoZSBzZXdpbmcgbGluZXMgYXJlIG5vdCB2aXNpYmxlOgoKPGZpZ3VyZT4KClshW3Nld2luZy1mcm9tLWt1c2ktMl0oL2ltZy9jaXZhcmEvZW4vc2V3aW5nLWZyb20ta3VzaS0yLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vc2V3aW5nLWZyb20ta3VzaS0yLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbc2V3aW5nLWZyb20ta3VzaS0zXSgvaW1nL2NpdmFyYS9lbi9zZXdpbmctZnJvbS1rdXNpLTMtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9zZXdpbmctZnJvbS1rdXNpLTMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtzZXdpbmctZnJvbS1rdXNpLTRdKC9pbWcvY2l2YXJhL2VuL3Nld2luZy1mcm9tLWt1c2ktNC13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL3Nld2luZy1mcm9tLWt1c2ktNC1vcmlnLmpwZykKCjwvZmlndXJlPgoKV2hlbiB5b3UgaGF2ZSBzZXduIHRvIHRoZSBlbmQsIHR1cm4gdGhlIGNsb3RoIGFyb3VuZCwgc3RhcnQgZnJvbSB0aGUga3VzaSBhZ2FpbiBpbiB0aGUgb3RoZXIKZGlyZWN0aW9uLgoKKElmIHlvdSBzdGFydCBzZXdpbmcgZnJvbSB0aGUgb3V0c2lkZSBpbiwgdGhlIGt1c2lzIHdpbGwgbm90IG5lY2Vzc2FyeSBtZWV0LikKCjwhLS0gbGF0ZXgKXGNsZWFycGFnZQotLT4KCiMjIEpvaW5pbmc6IGZvbGRpbmcgYW5kIHNlY29uZCBzZXdpbmcKClRoZSBmb2xsb3dpbmcgcGhvdG9zIHNob3cgdGhlIGFib3ZlIGpvaW5pbmcgbWV0aG9kIG9uIHRoZSBjaXZhcmEgY2xvdGguCgo8ZmlndXJlPgoKWyFbam9pbi1pcm9uLWNpdmFyYV0oL2ltZy9jaXZhcmEvZW4vam9pbi1pcm9uLWNpdmFyYS13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2pvaW4taXJvbi1jaXZhcmEtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjwhLS0gbGF0ZXgKXHNldGxlbmd0aHtcbmV4dFBob3RvV2lkdGh9ezAuNVx0ZXh0d2lkdGh9Ci0tPgoKPGZpZ3VyZT4KClshW2pvaW4taXJvbi1jaXZhcmEtMl0oL2ltZy9jaXZhcmEvZW4vam9pbi1pcm9uLWNpdmFyYS0yLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1pcm9uLWNpdmFyYS0yLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbam9pbi1pcm9uLWNpdmFyYS0zXSgvaW1nL2NpdmFyYS9lbi9qb2luLWlyb24tY2l2YXJhLTMtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWlyb24tY2l2YXJhLTMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtqb2luLWlyb24tY2l2YXJhLTZdKC9pbWcvY2l2YXJhL2VuL2pvaW4taXJvbi1jaXZhcmEtNi13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2pvaW4taXJvbi1jaXZhcmEtNi1vcmlnLmpwZykKCjwvZmlndXJlPgoKPGZpZ3VyZT4KClshW2pvaW4taXJvbi1jaXZhcmEtNmFdKC9pbWcvY2l2YXJhL2VuL2pvaW4taXJvbi1jaXZhcmEtNmEtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWlyb24tY2l2YXJhLTZhLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbam9pbi1pcm9uLWNpdmFyYS00XSgvaW1nL2NpdmFyYS9lbi9qb2luLWlyb24tY2l2YXJhLTQtdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWlyb24tY2l2YXJhLTQtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtqb2luLWlyb24tY2l2YXJhLTVdKC9pbWcvY2l2YXJhL2VuL2pvaW4taXJvbi1jaXZhcmEtNS13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2pvaW4taXJvbi1jaXZhcmEtNS1vcmlnLmpwZykKCjwvZmlndXJlPgoKPGZpZ3VyZT4KClshW2pvaW4tY2l2YXJhLXRyaW1dKC9pbWcvY2l2YXJhL2VuL2pvaW4tY2l2YXJhLXRyaW0tdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWNpdmFyYS10cmltLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbam9pbi1jaXZhcmEtdHJpbS0yXSgvaW1nL2NpdmFyYS9lbi9qb2luLWNpdmFyYS10cmltLTItdzUwMC5qcGcpXSgvaW1nL2NpdmFyYS9lbi9qb2luLWNpdmFyYS10cmltLTItb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtqb2luLWNpdmFyYS1mb2xkLW92ZXJdKC9pbWcvY2l2YXJhL2VuL2pvaW4tY2l2YXJhLWZvbGQtb3Zlci13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL2pvaW4tY2l2YXJhLWZvbGQtb3Zlci1vcmlnLmpwZykKCjwvZmlndXJlPgoKPGZpZ3VyZT4KClshW2pvaW4tY2l2YXJhLWZvbGQtaXJvbl0oL2ltZy9jaXZhcmEvZW4vam9pbi1jaXZhcmEtZm9sZC1pcm9uLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1jaXZhcmEtZm9sZC1pcm9uLW9yaWcuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbam9pbi1jaXZhcmEtZm9sZC1zZXdpbmddKC9pbWcvY2l2YXJhL2VuL2pvaW4tY2l2YXJhLWZvbGQtc2V3aW5nLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vam9pbi1jaXZhcmEtZm9sZC1zZXdpbmctb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjwhLS0gbGF0ZXgKXGNsZWFycGFnZQotLT4KCiMjIFNxdWFyaW5nCgpMYXkgb3V0IHRoZSBqb2luZWQgY2xvdGgsIHRvcCBzaWRlIGZhY2luZyBkb3duLiBZb3Ugc2hvdWxkIHNlZSB0aGUgdHdvIHRocmVhZHMgb2YgdGhlIGJhY2ssIG9yIGlubmVyIHNpZGUuCgpUYXBlIHRoZSBjbG90aCB0byB0aGUgZmxvb3IuIFlvdSBvbmx5IHdhbnQgaXQgdG8gbGllIGZsYXQsIG5vdCBzdHJlY2hlZC4gSWYgdGhlIHNoYXBlIG9mIHRoZSBjbG90aAppcyBkaXN0b3J0ZWQsIHRoZSB0cmltbWluZyBsaW5lcyB3aWxsIGJlIHdhdnkuIEF0dGFjaCB0aGUgdGFwZSBhdCB0aGUgc2V3biBsaW5lcywgd2hlcmUgdGhlIGNsb3RoCmRvZXNuJ3Qgc3RyZWNoIGFzIG11Y2guCgpVc2UgdGhlIHNob3J0IHNpZGUgYXMgdGhlIGJhc2UgYW5kIGFsaWduIHRoZSBydWxlcnMgYXQgOTAgZGVncmVlcy4KCkZpbmQgdGhlIGxpbmUgd2hpY2ggeW91IGNhbiBjdXQgc3RyYWlnaHQgYWxvbmcgdGhlIGVkZ2Ugd2l0aG91dCBnYXBzLgoKPCEtLSBsYXRleApcYmVnaW57bXVsdGljb2xzfXsyfQpcc2V0bGVuZ3Roe1xuZXh0UGhvdG9XaWR0aH17XGxpbmV3aWR0aH0KLS0+Cgo8ZmlndXJlPgoKWyFbc3F1YXJpbmctY2l2YXJhLWxheS1vdXRdKC9pbWcvY2l2YXJhL2VuL3NxdWFyaW5nLWNpdmFyYS1sYXktb3V0LXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vc3F1YXJpbmctY2l2YXJhLWxheS1vdXQtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjwhLS0gbGF0ZXgKXGNvbHVtbmJyZWFrClxzZXRsZW5ndGh7XG5leHRQaG90b1dpZHRofXtcbGluZXdpZHRofQotLT4KCjxmaWd1cmU+CgpbIVtzcXVhcmluZy1jaXZhcmEtcnVsZXJzXSgvaW1nL2NpdmFyYS9lbi9zcXVhcmluZy1jaXZhcmEtcnVsZXJzLXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vc3F1YXJpbmctY2l2YXJhLXJ1bGVycy1vcmlnLmpwZykKCjwvZmlndXJlPgoKPCEtLSBsYXRleApcZW5ke211bHRpY29sc30KLS0+CgpNYXJrIHRoZSBsaW5lIHdpdGggYSBwZW5jaWwuCgpMYXRlciwgd2hlbiB5b3UgcHV0IHRoZSBib3JkZXIgb24gdGhlIGNsb3RoLCBpbiB0aGUgYm9yZGVyIGFyZWEgdGhlIGNsb3RoIGlzIGRvdWJsZWQgYW5kIGxlc3MgcHJvbmUKdG8gc3RyZWNoaW5nIHRoYW4gdGhlIG1pZGRsZSBwYXJ0IG9mIHRoZSByb2JlLiBUaGUgcmVzdWx0IGlzIHRoYXQgb3ZlciB0aW1lLCB0aGUgbWlkZGxlIHBhcnQgb2YgdGhlCnJvYmUgc2FncyBhbmQgZG9lc24ndCBmb2xkIGludG8gYSBuZWF0IGxpbmUuCgpUaGlzIGNhbiBiZSBjb3VudGVyYWN0ZWQgYnkgc2hvcnRlbmluZyB0aGUgY2xvdGggYXQgdGhlIG1pZGRsZS4KCkZpbmQgdGhlIGhvcml6b250YWwgY2VudGVyIHBvaW50IG9mIHRoZSByb2JlIGFuZCBtYXJrIGEgcG9pbnQgMS41Y20gYWJvdmUgdGhlIGxpbmUgYXQgdGhlIGVkZ2UuCk1hcmsgYSBsaW5lIGZyb20gdGhpcyBwb2ludCB0byB0aGUgY29ybmVycywgY3JlYXRpbmcgYSByb29mIG9yIGDOm2Agc2hhcGUuIERvIHRoaXMgYXQgYm90aCB0aGUgdG9wCmFuZCBib3R0b20gc2lkZS4KCjxmaWd1cmU+CgpbIVtzcXVhcmluZy1jaXZhcmEtbWlkcG9pbnRdKC9pbWcvY2l2YXJhL2VuL3NxdWFyaW5nLWNpdmFyYS1taWRwb2ludC13NTAwLmpwZyldKC9pbWcvY2l2YXJhL2VuL3NxdWFyaW5nLWNpdmFyYS1taWRwb2ludC1vcmlnLmpwZykKCjwvZmlndXJlPgoKQ3V0IHRoZSBjbG90aCBhbG9uZyB0aGUgbWFya2VkIGxpbmVzLgoKPGZpZ3VyZT4KClshW3NxdWFyaW5nLWN1dF0oL2ltZy9jaXZhcmEvZW4vc3F1YXJpbmctY3V0LXc1MDAuanBnKV0oL2ltZy9jaXZhcmEvZW4vc3F1YXJpbmctY3V0LW9yaWcuanBnKQoKPC9maWd1cmU+CgojIyBCb3JkZXJzCgpBZGQgdGhlIFtib3JkZXJzXSgvZW4vYm9yZGVycykuCgo="}}},d=G(33),component=Object(d.a)(c,(function(){return(0,this._self._c)("MarkdownPage",{attrs:{content:this.pageText}})}),[],!1,null,null,null);Z.default=component.exports}}]);
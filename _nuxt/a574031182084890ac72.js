(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{592:function(Z,c,l){"use strict";l(32);var G=l(3),m={props:{items:{type:Array,required:!0}}},y=l(14),d={components:{Toc:Object(y.a)(m,(function(){var Z=this,c=Z.$createElement,l=Z._self._c||c;return l("div",{staticClass:"toc"},[l("ul",Z._l(Z.items,(function(i){return l("li",{key:i[2]},[l("a",{attrs:{href:i[2]}},[Z._v(Z._s(i[1]))])])})),0)])}),[],!1,null,null,null).exports},props:{content:{type:String,required:!0}},data:function(){return{title:"",toc:[],htmlContent:""}},created:function(){var Z=this;return Object(G.a)(regeneratorRuntime.mark((function c(){var a;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Z.$mdParse(Z.content);case 2:a=c.sent,Z.title=a.title,Z.htmlContent=a.htmlContent,Z.toc=a.toc;case 6:case"end":return c.stop()}}),c)})))()},head:function(){return{title:this.title.trim()+" - Ticivara Robe Sewing"}}},t=Object(y.a)(d,(function(){var Z=this,c=Z.$createElement,l=Z._self._c||c;return l("div",{staticClass:"markdown-container container"},[l("div",{staticClass:"content"},[l("h1",{staticClass:"page-title"},[Z._v(Z._s(Z.title))]),Z._v(" "),l("Toc",{attrs:{items:Z.toc}}),Z._v(" "),l("div",{staticClass:"page-content",domProps:{innerHTML:Z._s(Z.htmlContent)}})],1)])}),[],!1,null,null,null);c.a=t.exports},657:function(Z,c){Z.exports="data:text/markdown;base64,IyBCb3JkZXJzCgojIyBDdXR0aW5nCgpJZiB0aGVyZSBpcyBzcGFjZSBmb3IgaXQgb24gdGhlIGNsb3RoLCB1c2UgdGhlIHJlbWFpbmluZyBwYXJ0IGF0IHRoZSB0b3AgZm9yIHRoZQpsb25nIGJvcmRlcnMsIGFuZCB0aGUgc2lkZSBmb3IgdGhlIHNob3J0IGJvcmRlcnMuIEN1dHRpbmcgdGhlbSB0aGlzIHdheQpwcmVzZXJ2ZXMgdGhlIHRocmVhZCBhbGlnbm1lbnQuCgo8ZmlndXJlPgoKIVtib3JkZXJzIHZlcnRpY2FsXSgvaW1nL3NhbmdoYXRpL2ZpZ3VyZXMvYm9yZGVyLW9yaWVudGF0aW9uLXZlcnRpY2FsLmpwZykKCjwvZmlndXJlPgoKVGhlIHRocmVhZCBoYXMgdG8gYmUgYWxpZ25lZCBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gaW4gdGhlIGJvcmRlcnMgYW5kIHRoZSBtYWluCmNsb3RoLCBvdGhlcndpc2UgZHVyaW5nIHdhc2hpbmcgdGhlIGJvcmRlciBhbmQgbWFpbiBjbG90aCB3aWxsIHNocmluayBhdCBhCmRpZmZlcmVudCByYXRlIGFuZCBwcm9kdWNlIHdyaW5rbGVzLgoKVGhlc2UgYXJlIHJlYWR5IHRvIGlyb24gYW5kIHVzZWQgbGF0ZXIuCgpGb2xkIGFuZCBpcm9uIHRoZSBlZGdlcyBieSBnZW50bHkgdGFwcGluZyB3aXRoIHRoZSBpcm9uLiBBIHN0cm9uZyBmb3JjZSBvbiB0aGUKaXJvbiB3aWxsIHB1c2ggdGhlIGVkZ2VzIG91dC4gMC41IGNtIGlzIHN1ZmZpY2llbnQgYWxvbmcgdGhlIGVkZ2VzLgoKQWZ0ZXIgaXJvbmluZywgcm9sbCB1cCB0aGUgYm9yZGVycyB0byBwcmVzZXJ2ZSB0aGUgaXJvbmVkIGVkZ2VzLiBUaWUgdXAgdGhlCnJvbGxzIHdpdGggdGhlIHRyaW0gZnJvbSB0aGUgZWRnZXMuCgo8ZmlndXJlPgoKWyFbYm9yZGVycyByb2xsZWQgdXBdKC9pbWcvc2FuZ2hhdGkvcGhvdG9zL2JvcmRlcnMtcm9sbGVkLXVwLXc1MDAuanBnKV0oL2ltZy9zYW5naGF0aS9waG90b3MvYm9yZGVycy1yb2xsZWQtdXAtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCldoZW4gdGhlIGJvcmRlcnMgaGF2ZSB0byBiZSBjdXQgYXQgYSBkaWZmZXJlbnQgb3JpZW50YXRpb24sIHNlY3Rpb25zIG9mIGl0CmhhdmUgdG8gYmUgam9pbmVkIHVwIHRvIHByZXNlcnZlIHRoZSB0aHJlYWQgYWxpZ25tZW50LgoKVGhlIHNob3J0IGJvcmRlcnMgc29tZXRpbWVzIGhhdmUgdG8gYmUgY3V0IGhvcml6b250YWxseSBmcm9tIHRoZSBjbG90aC4gQ3V0IHRoZQpsZW5ndGggdG8gcGllY2VzIHdoaWNoIGFyZSB0aGUgd2lkdGggb2YgdGhlIGJvcmRlciwgYW5kIGpvaW4gdGhlbSBvbmUgYWZ0ZXIgdGhlCm90aGVyLgoKPGZpZ3VyZT4KCiFbYm9yZGVycyBob3Jpem9udGFsXSgvaW1nL3NhbmdoYXRpL2ZpZ3VyZXMvYm9yZGVyLW9yaWVudGF0aW9uLWhvcml6b250YWwuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKIVtib3JkZXIgY3V0IGFuZCBqb2luXSgvaW1nL3NhbmdoYXRpL2ZpZ3VyZXMvYm9yZGVyLWN1dC1hbmQtam9pbi5qcGcpCgo8L2ZpZ3VyZT4KClRoaXMgd2lsbCBwcmVzZXJ2ZSB0aGUgdGhyZWFkIG9yaWVudGF0aW9uIHdoZW4gdGhlIGJvcmRlciBpcyBiZSBwbGFjZWQgb24gdGhlCm1haW4gY2xvdGguCgo8ZmlndXJlPgoKIVtib3JkZXIgb3JpZW50YXRpb25dKC9pbWcvc2FuZ2hhdGkvZmlndXJlcy9ib3JkZXItb3JpZW50YXRpb24tb24tY2xvdGguanBnKQoKPC9maWd1cmU+CgojIyBTZXdpbmcKCkZpbmQgdGhlIGRpc3RhbmNlIGF0IHdoaWNoIHRoZSBqb2luZWQga2hhbmRoYXMgY2FuIGJlIGN1dC4KClRha2UgdGhlIGxpbmUgb2YgdGhlIGt1c2lzIGFuZCBtZWFzdXJlIHdoaWNoIGVkZ2UgaXMgdGhlIGNsb3Nlc3QuIERyYXcgdGhhdApsaW5lLgoKPGZpZ3VyZT4KCiFbdHJpbSBhcmVhXSgvaW1nL2JvcmRlcnMvZmlndXJlcy90cmltLWFyZWEuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbbWFyayB0cmltIGFyZWEgbG9uZyBzaWRlc10oL2ltZy9ib3JkZXJzL3Bob3Rvcy9tYXJrLXRyaW0tYXJlYS13NTAwLmpwZyldKC9pbWcvYm9yZGVycy9waG90b3MvbWFyay10cmltLWFyZWEtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVttYXJrIHRyaW0gYXJlYSBzaG9ydCBzaWRlc10oL2ltZy9ib3JkZXJzL3Bob3Rvcy9tYXJrLXRyaW0tYXJlYS1zaWRlLXc1MDAuanBnKV0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9tYXJrLXRyaW0tYXJlYS1zaWRlLW9yaWcuanBnKQoKPC9maWd1cmU+CgpLZWVwIGluIG1pbmQgdGhhdCAxY20gd2lsbCBiZSB0YWtlbiB1cCBieSBoZSBoZW0gZm9yIHRoZSBib3JkZXIuCgpUaGUgZHJhd24gYXJlYSBpcyB0aGUgYXZhaWxhYmxlIG1heGltdW0gc2l6ZSBmb3IgdGhlIHJvYmUuIElmIHRoaXMgaXMgbGFyZ2VyCnRoYW4gZGVzaXJlZCwgbWVhc3VyZSBiYWNrIGZyb20gdGhlIGVkZ2VzIGV2ZW5seSBhbmQgZHJhdyB0aGUgbGluZXMgZm9yIGFuIGV2ZW4Kc2l6ZS4KClRyaW0gYWxsIGFyb3VuZC4KCkV4YW1pbmUgYm90aCBzaWRlcyBvZiB0aGUgY2xvdGggZm9yIGFueSBkZWZlY3RzIGFuZCBjaG9vc2Ugd2hpY2ggc2lkZSBpcyBiZXR0ZXIuClRoYXQgd2lsbCBiZSBvdXRzaWRlLCB0aGUgYm9yZGVycyB3aWxsIGJlIHBsYWNlZCB0aGVyZS4KClBsYWNlIHRoZSBjbG90aCBvbiB0aGUgaXJvbmluZyBib2FyZCB3aXRoIHRoZSBvdXRzaWRlIHVwLiBGb2xkIHVwIDFjbSwgaXJvbiB0aGUKZWRnZSBieSB0YXBwaW5nIHdpdGggdGhlIGlyb24sIGFuZCBwaW4gaXQgYXMgeW91IGdvIGFsbCBhcm91bmQgdGhlIGNsb3RoLgoKPGZpZ3VyZT4KClshW2lyb24gdGhlIGVkZ2VzXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2lyb24tZWRnZXMtYW5kLXBpbi13NTAwLmpwZyldKC9pbWcvYm9yZGVycy9waG90b3MvaXJvbi1lZGdlcy1hbmQtcGluLW9yaWcuanBnKQoKPC9maWd1cmU+CgpTcHJlYWQgdGhlIGNsb3RoIG9uIHRoZSBmbG9vciB3aXRoIHRoZSBvdXRzaWRlIHVwIGFuZCBwbGFjZSB0aGUgYm9yZGVycyBhbG9uZwp0aGUgZWRnZS4gUGluIGl0IGFuZCBzZXcgYm90aCBzaWRlcyB0byBhYm91dCAzMGNtIGRpc3RhbmNlIGZyb20gdGhlIGNvcm5lcnMsIHNvCnRoYXQgdGhlIGVuZHMgYXQgdGhlIGNvcm5lcnMgYXJlIGZyZWUgdG8gbWFuaXB1bGF0ZS4KCjxmaWd1cmU+CgpbIVtwaW4gYm9yZGVyc10oL2ltZy9ib3JkZXJzL3Bob3Rvcy9waW4tYm9yZGVycy13NTAwLmpwZyldKC9pbWcvYm9yZGVycy9waG90b3MvcGluLWJvcmRlcnMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgohW3NldyBzaWRlc10oL2ltZy9ib3JkZXJzL2ZpZ3VyZXMvc2V3LXNpZGVzLmpwZykKCjwvZmlndXJlPgoKQWZ0ZXIgc2V3aW5nLCBhcnJhbmdlIG9uZSBjb3JuZXIgb24gdGhlIGlyb25pbmcgYm9hcmQgYW5kIGlyb24gdGhlIGVkZ2VzIGZsYXQuClRha2UgY2FyZSB0aGF0IHRoZSBlZGdlcyBzaG91bGQgbWVldCBhdCB0aGUgZXhhY3QgY29ybmVyIG9mIHRoZSBtYWluIGNsb3RoLgoKPGZpZ3VyZT4KClshW2lyb24gZmxhdF0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9jb3JuZXItMDEtYXJyYW5nZS1hbmQtaXJvbi1mbGF0LXc1MDAuanBnKV0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9jb3JuZXItMDEtYXJyYW5nZS1hbmQtaXJvbi1mbGF0LW9yaWcuanBnKQoKPC9maWd1cmU+CgpEcmF3IHRoZSBkaWFnb25hbCBvbiBib3RoIGJvcmRlciBsYXllcnMuCgo8ZmlndXJlPgoKWyFbZHJhdyBkaWFnb25hbCB0b3BdKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTAyLW1hcmstZGlhZ29uYWwtdG9wLXc1MDAuanBnKV0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9jb3JuZXItMDItbWFyay1kaWFnb25hbC10b3Atb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtkcmF3IGRpYWdvbmFsIGJvdHRvbV0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9jb3JuZXItMDMtbWFyay1kaWFnb25hbC1ib3R0b20tdzUwMC5qcGcpXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0wMy1tYXJrLWRpYWdvbmFsLWJvdHRvbS1vcmlnLmpwZykKCjwvZmlndXJlPgoKRm9sZCBvdXQgdGhlIGJvcmRlciwgbWVhc3VyZSAxY20gZnJvbSB0aGUgZGlhZ29uYWwgb24gdGhlIGZsYXAgYW5kIHRyaW0uCgpJdCBpcyBkaWZmaWN1bHQgdG8gYWxpZ24gdGhlIGZsYXBzIHVzaW5nIHRoZSBkaWFnb25hbCBtYXJrLCBzaW5jZSBpdCBpcyBjb3ZlcmVkLgpVc2UgdGhlIDFjbSBkaXN0YW5jZSBjdXQgZWRnZSB0byBhbGlnbiB0aGUgZmxhcHMgYW5kIHBpbiB0aGVtIGJlZm9yZSBqb2luaW5nLgoKPGZpZ3VyZT4KCiFbY29ybmVyIDAxIGN1dF0oL2ltZy9ib3JkZXJzL2ZpZ3VyZXMvY29ybmVyLTAxLWN1dC5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgohW2Nvcm5lciAwMiBjdXRdKC9pbWcvYm9yZGVycy9maWd1cmVzL2Nvcm5lci0wMi1jdXQuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKIVtjb3JuZXIgMDMgcmV2ZXJzZV0oL2ltZy9ib3JkZXJzL2ZpZ3VyZXMvY29ybmVyLTAzLXJldmVyc2UuanBnKQoKPC9maWd1cmU+Cgo8ZmlndXJlPgoKWyFbbWFyayBmbGFwIHRvIHRyaW1dKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTA1LW1hcmstZmxhcC10by10cmltLXc1MDAuanBnKV0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9jb3JuZXItMDUtbWFyay1mbGFwLXRvLXRyaW0tb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVt0cmltIHRoZSBmbGFwXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0wNi10cmltLWZsYXAtdzUwMC5qcGcpXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0wNi10cmltLWZsYXAtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCkpvaW4gdGhlIHR3byBmbGFwcy4KCjxmaWd1cmU+CgpbIVt0cmltIG90aGVyIGZsYXBdKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTA5LXRyaW0tdzUwMC5qcGcpXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0wOS10cmltLW9yaWcuanBnKQoKPC9maWd1cmU+CgpDdXQgb2ZmIHRoZSBlZGdlIGNvcm5lcnMgYXQgYSBsb3dlciB0aGFuIDQ1IGRlZ3JlZSBhbmdsZSB0byBub3QgbGV0IGxvb3NlIGVkZ2VzCnByb3RydWRlIG9uIHRoZSBzaWRlcy4gVHJpbSBhbnkgc21hbGwgaXJyZWd1bGFyaXRpZXMgd2hpY2ggbWF5IHByb3RydWRlLgoKRm9sZCBvdXQgdGhlIGZsYXBzIGFuZCBpcm9uIGZsYXQuCgo8ZmlndXJlPgoKWyFbZm9sZCBhbmQgaXJvbl0oL2ltZy9ib3JkZXJzL3Bob3Rvcy9jb3JuZXItMTAtZmxhdHRlbi13NTAwLmpwZyldKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTEwLWZsYXR0ZW4tb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCkZvbGQgYmFjayBvbiB0aGUgY29ybmVyLCBhcnJhbmdlIHRoZSBlZGdlcyBhbmQgY29ybmVycyBjYXJlZnVsbHkgYW5kIHBpbiB0aGVtLgoKPGZpZ3VyZT4KClshW3BpbiB0byB0aGUgY2xvdGhdKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTExLXBpbi10by1jbG90aC13NTAwLmpwZyldKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTExLXBpbi10by1jbG90aC1vcmlnLmpwZykKCjwvZmlndXJlPgoKRmlyc3Qgc2V3IHRoZSBpbm5lciBlZGdlcywgdXAgdG8gdGhlIGlubmVyIGNvcm5lciwgdGhlbiBhY3Jvc3MgdGhlIGRpYWdvbmFsLCB0aGVuCmRvd24gYWxvbmcgdGhlIGRpYWdvbmFsIG9uIHRoZSBvdGhlciBzaWRlIGFuZCBvZmYgdGhlIGNvcm5lci4KClRoZW4gc2V3IHRoZSBvdXRlciBlZGdlLgoKPGZpZ3VyZT4KCiFbY29ybmVyIHNld2luZyBzZXF1ZW5jZV0oL2ltZy9ib3JkZXJzL2ZpZ3VyZXMvY29ybmVyLXNld2luZy1zZXF1ZW5jZS5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtjb3JuZXIgc2V3aW5nIGxpbmVzXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0xMi1zZXdpbmctbGluZXMtdzUwMC5qcGcpXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0xMi1zZXdpbmctbGluZXMtb3JpZy5qcGcpCgo8L2ZpZ3VyZT4KCjxmaWd1cmU+CgpbIVtpbm5lciBjb3JuZXJdKC9pbWcvYm9yZGVycy9waG90b3MvY29ybmVyLTEzLXNld2luZy1pbm5lci1jb3JuZXItdzUwMC5qcGcpXSgvaW1nL2JvcmRlcnMvcGhvdG9zL2Nvcm5lci0xMy1zZXdpbmctaW5uZXItY29ybmVyLW9yaWcuanBnKQoKPC9maWd1cmU+CgpSZXBlYXQgd2l0aCB0aGUgb3RoZXIgY29ybmVycyBhbmQgdGhlIGJvcmRlciBpcyBmaW5pc2hlZC4KCg=="},727:function(Z,c,l){"use strict";l.r(c);var G=l(657),m=l.n(G),y={components:{MarkdownPage:l(592).a},fetch:function(Z){Z.store.commit("setLangFromPath",Z.route.path)},asyncData:function(Z){return{pageText:m.a}}},d=l(14),component=Object(d.a)(y,(function(){var Z=this.$createElement;return(this._self._c||Z)("MarkdownPage",{attrs:{content:this.pageText}})}),[],!1,null,null,null);c.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{734:function(t,e,r){"use strict";r.d(e,"i",(function(){return d})),r.d(e,"k",(function(){return text})),r.d(e,"n",(function(){return c})),r.d(e,"l",(function(){return h})),r.d(e,"m",(function(){return v})),r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"f",(function(){return w})),r.d(e,"h",(function(){return k})),r.d(e,"c",(function(){return C})),r.d(e,"g",(function(){return j})),r.d(e,"j",(function(){return O})),r.d(e,"e",(function(){return x})),r.d(e,"d",(function(){return y}));r(107),r(752),r(303),r(753),r(754),r(57),r(16),r(18),r(137),r(35),r(38),r(727),r(755),r(756),r(757),r(758),r(759),r(760),r(761),r(762),r(763),r(764),r(765),r(766),r(767),r(768),r(769),r(770),r(771),r(772),r(773),r(774),r(775),r(776),r(777),r(778),r(37),r(36),r(108),r(779),r(305);var _=r(780),o=r.n(_),l=r(748),n=r.n(l);function d(s){return Number.parseFloat(s).toFixed(1)}function text(t,e,s,r,_){!function(t,s,e,r,_,o,l,n){var d=(o+e)*_,c=(n-r+l)*_;t.font='28px "Fira Sans"',t.fillStyle="#000000",t.fillText(s,d,c)}(t,s,r,_,e.pattern_scale,e.pos_text_offset_x,e.pos_text_offset_y,e.pos_pattern_height)}function c(t,e,s,r,_,o){!function(t,s,e,r,_,o,l,n,d){var c=(l+r)*o,h=(d-_+n)*o;t.font=String(e)+' "Butler"',t.fillStyle="#000000",t.fillText(s,c,h)}(t,s,r,_,o,e.pattern_scale,e.pos_text_offset_x,e.pos_text_offset_y,e.pos_pattern_height)}function h(t,e,s,r,_){text(t,e,d(s),r,_)}function v(t,e,s,r,_){var o="";Number.parseFloat(s)>=0&&(o="+"),text(t,e,o+d(s),r,_)}var f=["k1_a","k1_b","k2_a","k2_b","k3_a","k3_b","k4_a","k4_b"],m=["k1_a","k2_a","k3_a","k4_a"];function w(t,i){var e=-1;switch(i){case 0:case 2:case 4:case 6:e=-1;break;case 1:e=0;break;case 3:e=1;break;case 5:e=2;break;case 7:e=3}return e>=0&&t.kusi_cuts[m[e]]}function k(t,e){if(e<0)return 0;for(var a=0,i=0,r=Number(t.kusi_cutting_buffer);i<=e&&i<f.length;)a+=Number(t.kusi_buffers[f[i]]),w(t,i)&&(a+=r),i++;return a}function C(t,e){var r,_,o=Number(t.width),l=Number(t.height),n=Number(t.edge_buffer),d=Number(t.height_stitch_buffer),c=Number(t.vertical_buffer_width),h=Number(t.kusi_width),v=Number(t.border_width);0===t.border_type?(r=o*(1+t.shrink_percent_width/100),_=l*(1+t.shrink_percent_height/100)+d):(r=(o-2*v)*(1+t.shrink_percent_width/100),_=(l-2*v)*(1+t.shrink_percent_height/100)+d);var f,m,w,C,j=r+2*n+k(t,2*(e-1)-1),N=_+2*c;0===t.border_type?(f=(o-2*v-(e-1)*h)/e,m=(l-2*v-2*h)/3):(f=(o-(e-1)*h)/e,m=(l-2*h)/3),0===t.border_type?(w=v/f,C=v/m):(w=0,C=0);var O,x,y,P,S=r-(e-1)*h,R=_-2*h;return 0===t.border_type?(y=(O=S/(e+2*w))*w,P=(x=R/(3+2*C))*C):(O=S/e,x=R/3,y=v,P=v),{cut_width:j,cut_height:N,mandala_width:O,mandala_height:x,border_width:y,border_height:P}}function j(pattern,t,e){var canvas=document.getElementById(pattern.canvas_id);if(null!==canvas){var r=canvas.getContext("2d"),img=new Image;img.onload=function(){e(r,img)},0===t.border_type?img.src=pattern.overlapping_img_src:img.src=pattern.joined_img_src}else console.log("Error: Can't find canvas: "+pattern.canvas_id)}function N(t,e,r){var _=function(t){for(var e=t.split(","),r=atob(e[1]),_=r.length,o=new Uint8Array(_);_--;)o[_]=r.charCodeAt(_);return o}(document.getElementById(e).toDataURL("image/jpeg",.95)),img=new o.a.Image(_);t.cell("",{padding:0,y:600}).image(img,{width:830,align:"center"});var l="0x2D79B9";t.cell("",{paddingLeft:10*o.a.mm}).text().add("Ticivara Robe Sewing - ",{fontSize:9}).add("ticivara.github.io",{fontSize:9,link:"https://ticivara.github.io",color:l}).add(" - ",{fontSize:9}).add("[parameters link]",{fontSize:9,link:r,color:l})}function O(t,e,r){var _=new o.a.Document({width:841.896,height:595.296,padding:0,font:n.a,properties:{title:e.title,creator:"Ticivara Robe Sewing"}});t.forEach((function(i,e){N(_,i.canvas_id,r),e<t.length-1&&_.pageBreak()})),_.asBuffer().then((function(t){var r=new Blob([t],{type:"application/pdf"}),_=URL.createObjectURL(r),link=document.createElement("a");link.style.display="none",link.download=e.title.replace(/[^a-zA-Z0-9-_ ]/g,"").trim()+".pdf",link.href=_,document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),URL.revokeObjectURL(link.href)}),100)}))}function x(t){var e=encodeURIComponent(JSON.stringify(t)),p=window.location.port,r="";return 3e3!==p&&9e3!==p||(r=":"+p),window.location.protocol+"//"+window.location.hostname+r+window.location.pathname+"?robe="+e}function y(t,e){var r=t,_=Object.keys(e);if(_.length>0&&_.includes("robe")){var a,o=decodeURIComponent(e.robe);try{a=JSON.parse(o)}catch(t){console.log("Parse error: Robe data is not well-formatted JSON string.")}void 0!==a&&Object.keys(a).includes("title")&&(r.robe=a)}return r}},744:function(t,e){},789:function(t,e){},790:function(t,e){},819:function(t,e,r){"use strict";r(303);var _=r(734);function o(t,e,r,o,b,l,n,d){Object(_.l)(t,e,r*e.val_mandala_height+o*e.val_kusi_width+b*e.val_border_height+l*e.val_vertical_buffer_width,n+r*e.pos_mandala_width+o*e.pos_kusi_width+b*e.pos_border_width+l*e.pos_vertical_buffer_width,d)}function l(t,e,r,o,l,b,n,d,c){Object(_.l)(t,e,r*e.val_mandala_width+o*(e.val_kusi_width+e.val_vertical_kusi_buffer)+l*e.val_kusi_cutting_buffer+b*e.val_border_width+n*e.val_edge_buffer,d+e.pos_pattern_width,c+r*e.pos_mandala_height+o*e.pos_kusi_width+l*e.pos_edge_buffer+b*e.pos_border_width+n*e.pos_edge_buffer)}function n(t,e,r,n){Object(_.g)(t[0],n,(function(t,img){!function(t,e,r,img,o){var a=Object(_.c)(o,9),l={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},n={robe:o,pos_pattern_width:260,pos_pattern_height:170,pos_img_offset_x:10,pos_img_offset_y:10,pos_text_offset_x:10,pos_text_offset_y:10,pos_edge_buffer:1,pos_border_width:5.91,pos_kusi_width:2.53,pos_mandala_width:13.09,pos_mandala_height:24.43,pattern_scale:12,val_edge_buffer:Number(o.edge_buffer),val_height_stitch_buffer:Number(o.height_stitch_buffer),val_vertical_buffer_width:Number(o.vertical_buffer_width),val_kusi_cutting_buffer:Number(o.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(o.vertical_kusi_buffer),val_inner_width:Number(o.width),val_inner_height:Number(o.height),val_kusi_width:Number(o.kusi_width),val_cut_width:l.val_cut_width,val_cut_height:l.val_cut_height,val_mandala_width:l.val_mandala_width,val_mandala_height:l.val_mandala_height,val_border_width:l.val_border_width,val_border_height:l.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var d=n.pattern_scale;t.drawImage(img,n.pos_img_offset_x*d,n.pos_img_offset_y*d,n.pos_pattern_width*d,n.pos_pattern_height*d),Object(_.n)(t,n,n.robe.title,"100px",-.5,164),Object(_.k)(t,n,"Final Width: "+Object(_.i)(n.val_inner_width),5,140),Object(_.k)(t,n,"Final Height: "+Object(_.i)(n.val_inner_height),5,136),Object(_.k)(t,n,"Cut Width: "+Object(_.i)(n.val_cut_width),5,132),Object(_.k)(t,n,"Cut Height: "+Object(_.i)(n.val_cut_height),5,128),Object(_.k)(t,n,"edge buffer: "+Object(_.i)(n.val_edge_buffer),5,122),Object(_.k)(t,n,"vertical cutting buffer: "+Object(_.i)(n.val_vertical_buffer_width),5,118),Object(_.k)(t,n,"kusi cutting buffer: "+Object(_.i)(n.val_kusi_cutting_buffer),5,114),Object(_.k)(t,n,"vertical kusi buffer: "+Object(_.i)(n.val_vertical_kusi_buffer),5,110),Object(_.k)(t,n,"height stitch buffer: "+Object(_.i)(n.val_height_stitch_buffer),5,106),Object(_.k)(t,n,"a, border width: "+Object(_.i)(n.val_border_width),5,98),Object(_.k)(t,n,"b, border height: "+Object(_.i)(n.val_border_height),5,94),Object(_.k)(t,n,"k, kusi width: "+Object(_.i)(n.val_kusi_width),5,90),Object(_.k)(t,n,"m, middle section width: "+Object(_.i)(n.val_mandala_width),5,86),Object(_.k)(t,n,"d, middle section height: "+Object(_.i)(n.val_mandala_height),5,82),Object(_.l)(t,n,n.val_cut_width,245,164),Object(_.l)(t,n,n.val_cut_height,255,155),Object(_.l)(t,n,n.val_border_width,104.5,82),Object(_.l)(t,n,n.val_border_height,112,74.2),Object(_.l)(t,n,n.val_kusi_width,112,130),Object(_.l)(t,n,n.val_kusi_width+n.val_vertical_kusi_buffer,122,74.2),Object(_.l)(t,n,n.val_mandala_width,130,82),Object(_.l)(t,n,n.val_mandala_height,130,89),Object(_.m)(t,n,n.val_vertical_kusi_buffer,123,137),Object(_.m)(t,n,n.val_kusi_cutting_buffer,154.2,86),Object(_.m)(t,n,n.val_kusi_cutting_buffer,198.6,86),Object(_.l)(t,n,n.val_vertical_buffer_width,209,73),Object(_.l)(t,n,n.val_vertical_buffer_width,209,160),Object(_.l)(t,n,n.val_edge_buffer,249,133)}(t,e,r,img,n)})),Object(_.g)(t[1],n,(function(t,img){!function(t,e,r,img,n){var a=Object(_.c)(n,9),d={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},c={robe:n,pos_pattern_width:260,pos_pattern_height:135,pos_img_offset_x:10,pos_img_offset_y:20,pos_text_offset_x:10,pos_text_offset_y:20,pos_edge_buffer:1.11,pos_vertical_buffer_width:11.1,pos_border_width:15.54,pos_kusi_width:6.66,pos_mandala_width:64.37,pos_mandala_height:34.4,pattern_scale:12,val_edge_buffer:Number(n.edge_buffer),val_vertical_buffer_width:Number(n.vertical_buffer_width),val_kusi_cutting_buffer:Number(n.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(n.vertical_kusi_buffer),val_inner_width:Number(n.width),val_inner_height:Number(n.height),val_kusi_width:Number(n.kusi_width),val_cut_width:d.val_cut_width,val_cut_height:d.val_cut_height,val_mandala_width:d.val_mandala_width,val_mandala_height:d.val_mandala_height,val_border_width:d.val_border_width,val_border_height:d.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var h=c.pattern_scale;t.drawImage(img,c.pos_img_offset_x*h,c.pos_img_offset_y*h,c.pos_pattern_width*h,c.pos_pattern_height*h),o(t,c,0,0,0,1,.5,-2),o(t,c,0,0,1,1,.5,-2),o(t,c,1,0,1,1,.5,-2),o(t,c,1,1,1,1,.5,-2),o(t,c,2,1,1,1,.5,-2),o(t,c,2,2,1,1,.5,-2),o(t,c,3,2,1,1,.5,-2),o(t,c,3,2,2,1,.5,-2),o(t,c,3,2,2,2,.5,-2),l(t,c,0,0,0,0,1,1,1),l(t,c,0,0,0,1,1,1,1),l(t,c,1,0,0,1,1,1,1),l(t,c,1,1,0,1,1,1,1),l(t,c,2,1,0,1,1,1,1),l(t,c,2,2,0,1,1,1,1),l(t,c,3,2,0,1,1,1,1),l(t,c,3,2,1,1,1,1,3)}(t,e,r,img,n)})),Object(_.g)(t[2],n,(function(t,img){!function(t,e,r,img,n){var a=Object(_.c)(n,9),d={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},c={robe:n,pos_pattern_width:260,pos_pattern_height:135,pos_img_offset_x:10,pos_img_offset_y:20,pos_text_offset_x:10,pos_text_offset_y:20,pos_edge_buffer:1.11,pos_vertical_buffer_width:11.1,pos_border_width:15.54,pos_kusi_width:6.66,pos_mandala_width:64.37,pos_mandala_height:34.4,pattern_scale:12,val_edge_buffer:Number(n.edge_buffer),val_vertical_buffer_width:Number(n.vertical_buffer_width),val_kusi_cutting_buffer:Number(n.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(n.vertical_kusi_buffer),val_inner_width:Number(n.width),val_inner_height:Number(n.height),val_kusi_width:Number(n.kusi_width),val_cut_width:d.val_cut_width,val_cut_height:d.val_cut_height,val_mandala_width:d.val_mandala_width,val_mandala_height:d.val_mandala_height,val_border_width:d.val_border_width,val_border_height:d.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var h=c.pattern_scale;t.drawImage(img,c.pos_img_offset_x*h,c.pos_img_offset_y*h,c.pos_pattern_width*h,c.pos_pattern_height*h),o(t,c,0,0,0,1,.5,0),o(t,c,0,0,1,1,.5,0),o(t,c,1,0,1,1,.5,0),o(t,c,1,1,1,1,.5,0),o(t,c,2,1,1,1,.5,0),o(t,c,2,2,1,1,.5,0),o(t,c,3,2,1,1,.5,0),o(t,c,3,2,2,1,.5,0),o(t,c,3,2,2,2,.5,0),l(t,c,0,0,1,0,0,1,3),l(t,c,0,1,1,0,0,1,3),l(t,c,1,1,1,0,0,1,3),l(t,c,1,2,1,0,0,1,3),l(t,c,2,2,1,0,0,1,3),l(t,c,2,3,1,0,0,1,3),l(t,c,3,3,1,0,0,1,3),l(t,c,3,4,1,0,0,1,3),l(t,c,3,4,2,0,0,1,5)}(t,e,r,img,n)})),Object(_.g)(t[3],n,(function(t,img){!function(t,e,r,img,n){var a=Object(_.c)(n,9),d={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},c={robe:n,pos_pattern_width:260,pos_pattern_height:135,pos_img_offset_x:10,pos_img_offset_y:20,pos_text_offset_x:10,pos_text_offset_y:20,pos_edge_buffer:1.11,pos_vertical_buffer_width:11.1,pos_border_width:15.54,pos_kusi_width:6.66,pos_mandala_width:64.37,pos_mandala_height:34.4,pattern_scale:12,val_edge_buffer:Number(n.edge_buffer),val_vertical_buffer_width:Number(n.vertical_buffer_width),val_kusi_cutting_buffer:Number(n.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(n.vertical_kusi_buffer),val_inner_width:Number(n.width),val_inner_height:Number(n.height),val_kusi_width:Number(n.kusi_width),val_cut_width:d.val_cut_width,val_cut_height:d.val_cut_height,val_mandala_width:d.val_mandala_width,val_mandala_height:d.val_mandala_height,val_border_width:d.val_border_width,val_border_height:d.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var h=c.pattern_scale;t.drawImage(img,c.pos_img_offset_x*h,c.pos_img_offset_y*h,c.pos_pattern_width*h,c.pos_pattern_height*h),o(t,c,0,0,0,1,.5,-2),o(t,c,0,0,1,1,.5,-2),o(t,c,1,0,1,1,.5,-2),o(t,c,1,1,1,1,.5,-2),o(t,c,2,1,1,1,.5,-2),o(t,c,2,2,1,1,.5,-2),o(t,c,3,2,1,1,.5,-2),o(t,c,3,2,2,1,.5,-2),o(t,c,3,2,2,2,.5,-2),l(t,c,0,0,0,0,1,1,1),l(t,c,0,0,0,1,1,1,1),l(t,c,1,0,0,1,1,1,1),l(t,c,1,1,0,1,1,1,1),l(t,c,2,1,0,1,1,1,1),l(t,c,2,2,0,1,1,1,1),l(t,c,3,2,0,1,1,1,1),l(t,c,3,2,1,1,1,1,3)}(t,e,r,img,n)}))}var d={width:3500,height:2400,show_more_controls:!1,robe:{title:"Civara "+(new Date).getFullYear(),border_type:0,width:355,height:214,edge_buffer:1,height_stitch_buffer:4,vertical_buffer_width:15,border_width:16,kusi_width:6.5,kusi_cutting_buffer:1.5,vertical_kusi_buffer:0,shrink_percent_width:0,shrink_percent_height:0,kusi_buffers:{k1_a:0,k1_b:0,k2_a:0,k2_b:0,k3_a:0,k3_b:0,k4_a:0,k4_b:0},kusi_cuts:{k1_a:!1,k2_a:!1,k3_a:!1,k4_a:!1}}},c=[{canvas_id:"civara-guide-canvas",overlapping_img_src:"/img/civara-guide.svg",joined_img_src:"/img/civara-guide.svg"},{canvas_id:"civara-panels-1-2-3-canvas",overlapping_img_src:"/img/civara-panels-1-2-3.svg",joined_img_src:"/img/civara-panels-1-2-3.svg"},{canvas_id:"civara-panels-4-5-6-canvas",overlapping_img_src:"/img/civara-panels-4-5-6.svg",joined_img_src:"/img/civara-panels-4-5-6.svg"},{canvas_id:"civara-panels-7-8-9-canvas",overlapping_img_src:"/img/civara-panels-7-8-9.svg",joined_img_src:"/img/civara-panels-7-8-9.svg"}],h={data:function(){return Object(_.d)(d,this.$route.query)},computed:{robeParamsUrl:function(){return Object(_.e)(this.robe)}},mounted:function(){this.updateCanvas()},updated:function(){this.updateCanvas()},methods:{updateCanvas:function(){n(c,this.width,this.height,this.robe)},downloadPdf:function(){Object(_.j)(c,this.robe,this.robeParamsUrl)}}},v=r(33),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"parameters"},[e("div",{attrs:{id:"simple_controls"}},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6"},[e("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.title,expression:"robe.title"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.robe.title},on:{input:function(e){e.target.composing||t.$set(t.robe,"title",e.target.value)}}})])])])])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("div",{staticClass:"field is-horizontal"},[t._m(1),t._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.width,expression:"robe.width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.width},on:{input:function(e){e.target.composing||t.$set(t.robe,"width",e.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"field is-horizontal"},[t._m(2),t._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.height,expression:"robe.height"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.height},on:{input:function(e){e.target.composing||t.$set(t.robe,"height",e.target.value)}}})])])])])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("div",{staticClass:"field is-horizontal"},[t._m(3),t._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.shrink_percent_width,expression:"robe.shrink_percent_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.shrink_percent_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"shrink_percent_width",e.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"field is-horizontal"},[t._m(4),t._v(" "),e("div",{staticClass:"field-body"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.shrink_percent_height,expression:"robe.shrink_percent_height"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.shrink_percent_height},on:{input:function(e){e.target.composing||t.$set(t.robe,"shrink_percent_height",e.target.value)}}})])])])])])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Border width:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.border_width,expression:"robe.border_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.border_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"border_width",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Kusi width:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_width,expression:"robe.kusi_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.kusi_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"kusi_width",e.target.value)}}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Kusi cutting buffer:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_cutting_buffer,expression:"robe.kusi_cutting_buffer"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_cutting_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"kusi_cutting_buffer",e.target.value)}}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Vertical kusi buffer:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.vertical_kusi_buffer,expression:"robe.vertical_kusi_buffer"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.vertical_kusi_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"vertical_kusi_buffer",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Edge buffer:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.edge_buffer,expression:"robe.edge_buffer"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.edge_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"edge_buffer",e.target.value)}}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Vertical buffer width:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.vertical_buffer_width,expression:"robe.vertical_buffer_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.vertical_buffer_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"vertical_buffer_width",e.target.value)}}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Height stitch buffer:")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.height_stitch_buffer,expression:"robe.height_stitch_buffer"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.height_stitch_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"height_stitch_buffer",e.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"field is-pulled-right"},[e("div",{staticClass:"control"},[e("button",{class:[t.show_more_controls?"is-info":"","button"],on:{click:function(e){t.show_more_controls=!t.show_more_controls}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}]},[t._v("Less parameters")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.show_more_controls,expression:"!show_more_controls"}]},[t._v("More parameters")])])])])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",on:{click:function(e){return t.downloadPdf()}}},[e("span",[t._v("Download PDF")])])]),t._v(" "),e("div",{staticClass:"control"},[e("a",{staticClass:"button is-text",attrs:{href:t.robeParamsUrl}},[t._v("Parameters Link")])])])])])]),t._v(" "),e("canvas",{staticClass:"pattern",attrs:{id:"civara-guide-canvas",width:t.width,height:t.height}}),t._v(" "),e("canvas",{staticClass:"pattern",attrs:{id:"civara-panels-1-2-3-canvas",width:t.width,height:t.height}}),t._v(" "),e("canvas",{staticClass:"pattern",attrs:{id:"civara-panels-4-5-6-canvas",width:t.width,height:t.height}}),t._v(" "),e("canvas",{staticClass:"pattern",attrs:{id:"civara-panels-7-8-9-canvas",width:t.width,height:t.height}})])}),[function(){var t=this._self._c;return t("div",{staticClass:"field-label"},[t("label",{staticClass:"label"},[this._v("Title:")])])},function(){var t=this._self._c;return t("div",{staticClass:"field-label"},[t("label",{staticClass:"label"},[this._v("Final width:")])])},function(){var t=this._self._c;return t("div",{staticClass:"field-label"},[t("label",{staticClass:"label"},[this._v("Final height:")])])},function(){var t=this._self._c;return t("div",{staticClass:"field-label"},[t("label",{staticClass:"label"},[this._v("Shrinking width %:")])])},function(){var t=this._self._c;return t("div",{staticClass:"field-label"},[t("label",{staticClass:"label"},[this._v("Shrinking height %:")])])}],!1,null,null,null);e.a=component.exports}}]);
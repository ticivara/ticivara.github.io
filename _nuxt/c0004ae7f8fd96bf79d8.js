(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{595:function(t,e,r){"use strict";r.d(e,"i",(function(){return d})),r.d(e,"k",(function(){return text})),r.d(e,"n",(function(){return c})),r.d(e,"l",(function(){return h})),r.d(e,"m",(function(){return v})),r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"f",(function(){return w})),r.d(e,"h",(function(){return k})),r.d(e,"c",(function(){return C})),r.d(e,"g",(function(){return j})),r.d(e,"j",(function(){return N})),r.d(e,"e",(function(){return x})),r.d(e,"d",(function(){return y}));r(83),r(117),r(24),r(19),r(62),r(34),r(614),r(118),r(597),r(615);var _=r(616),l=r.n(_),n=r(611),o=r.n(n);function d(s){return Number.parseFloat(s).toFixed(1)}function text(t,e,s,r,_){!function(t,s,e,r,_,l,n,o){var d=(l+e)*_,c=(o-r+n)*_;t.font='28px "Fira Sans"',t.fillStyle="#000000",t.fillText(s,d,c)}(t,s,r,_,e.pattern_scale,e.pos_text_offset_x,e.pos_text_offset_y,e.pos_pattern_height)}function c(t,e,s,r,_,l){!function(t,s,e,r,_,l,n,o,d){var c=(n+r)*l,h=(d-_+o)*l;t.font=String(e)+' "Butler"',t.fillStyle="#000000",t.fillText(s,c,h)}(t,s,r,_,l,e.pattern_scale,e.pos_text_offset_x,e.pos_text_offset_y,e.pos_pattern_height)}function h(t,e,s,r,_){text(t,e,d(s),r,_)}function v(t,e,s,r,_){var l="";Number.parseFloat(s)>=0&&(l="+"),text(t,e,l+d(s),r,_)}var f=["k1_a","k1_b","k2_a","k2_b","k3_a","k3_b","k4_a","k4_b"],m=["k1_a","k2_a","k3_a","k4_a"];function w(t,i){var e=-1;switch(i){case 0:e=-1;break;case 1:e=0;break;case 2:e=-1;break;case 3:e=1;break;case 4:e=-1;break;case 5:e=2;break;case 6:e=-1;break;case 7:e=3}return e>=0&&t.kusi_cuts[m[e]]}function k(t,e){if(e<0)return 0;for(var a=0,i=0,r=Number(t.kusi_cutting_buffer);i<=e&&i<f.length;)a+=Number(t.kusi_buffers[f[i]]),w(t,i)&&(a+=r),i++;return a}function C(t,e){var r,_,l=Number(t.width),n=Number(t.height),o=Number(t.edge_buffer),d=Number(t.vertical_buffer_width),c=Number(t.kusi_width),h=Number(t.border_width);0===t.border_type?(r=l*(1+t.shrink_percent_width/100),_=n*(1+t.shrink_percent_height/100)):(r=(l-2*h)*(1+t.shrink_percent_width/100),_=(n-2*h)*(1+t.shrink_percent_height/100));var v,f,m,w,C=r+2*o+k(t,2*(e-1)-1),j=_+2*d;0===t.border_type?(v=(l-2*h-(e-1)*c)/e,f=(n-2*h-2*c)/3):(v=(l-(e-1)*c)/e,f=(n-2*c)/3),0===t.border_type?(m=h/v,w=h/f):(m=0,w=0);var O,N,x,y,S=r-(e-1)*c,P=_-2*c;return 0===t.border_type?(x=(O=S/(e+2*m))*m,y=(N=P/(3+2*w))*w):(O=S/e,N=P/3,x=h,y=h),{cut_width:C,cut_height:j,mandala_width:O,mandala_height:N,border_width:x,border_height:y}}function j(pattern,t,e){var canvas=document.getElementById(pattern.canvas_id);if(null!==canvas){var r=canvas.getContext("2d"),img=new Image;img.onload=function(){e(r,img)},0===t.border_type?img.src=pattern.overlapping_img_src:img.src=pattern.joined_img_src}else console.log("Error: Can't find canvas: "+pattern.canvas_id)}function O(t,e,r){var _=function(t){for(var e=t.split(","),r=atob(e[1]),_=r.length,l=new Uint8Array(_);_--;)l[_]=r.charCodeAt(_);return l}(document.getElementById(e).toDataURL("image/jpeg",.95)),img=new l.a.Image(_);t.cell("",{padding:0,y:600}).image(img,{width:830,align:"center"});t.cell("",{paddingLeft:10*l.a.mm}).text().add("Ticivara Robe Sewing - ",{fontSize:9}).add("ticivara.github.io",{fontSize:9,link:"https://ticivara.github.io",color:"0x2D79B9"}).add(" - ",{fontSize:9}).add("[parameters link]",{fontSize:9,link:r,color:"0x2D79B9"})}function N(t,e,r){var _=new l.a.Document({width:841.896,height:595.296,padding:0,font:o.a,properties:{title:e.title,creator:"Ticivara Robe Sewing"}});t.forEach((function(i,e){O(_,i.canvas_id,r),e<t.length-1&&_.pageBreak()})),_.asBuffer().then((function(t){var r=new Blob([t],{type:"application/pdf"}),_=URL.createObjectURL(r),link=document.createElement("a");link.style.display="none",link.download=e.title.replace(/[^a-zA-Z0-9-_ ]/g,"").trim()+".pdf",link.href=_,document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),URL.revokeObjectURL(link.href)}),100)}))}function x(t){var e=encodeURIComponent(JSON.stringify(t)),p=window.location.port,r="";return 3e3!==p&&9e3!==p||(r=":"+p),window.location.protocol+"//"+window.location.hostname+r+window.location.pathname+"?robe="+e}function y(t,e){var r=t,_=Object.keys(e);if(_.length>0&&_.includes("robe")){var a,l=decodeURIComponent(e.robe);try{a=JSON.parse(l)}catch(t){console.log("Parse error: Robe data is not well-formatted JSON string.")}void 0!==a&&Object.keys(a).includes("title")&&(r.robe=a)}return r}},607:function(t,e){},623:function(t,e){},624:function(t,e){},656:function(t,e,r){"use strict";r(597);var _=r(595);function l(t,e,r,l,b,n,o,d){Object(_.l)(t,e,r*e.val_mandala_height+l*e.val_kusi_width+b*e.val_border_height+n*e.val_vertical_buffer_width,o+r*e.pos_mandala_width+l*e.pos_kusi_width+b*e.pos_border_width+n*e.pos_vertical_buffer_width,d)}function n(t,e,r,l,n,b,o,d,c){Object(_.l)(t,e,r*e.val_mandala_width+l*(e.val_kusi_width+e.val_vertical_kusi_buffer)+n*e.val_kusi_cutting_buffer+b*e.val_border_width+o*e.val_edge_buffer,d+e.pos_pattern_width,c+r*e.pos_mandala_height+l*e.pos_kusi_width+n*e.pos_edge_buffer+b*e.pos_border_width+o*e.pos_edge_buffer)}function o(t,e,r,o){Object(_.g)(t[0],o,(function(t,img){!function(t,e,r,img,l){var a=Object(_.c)(l,9),n={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},o={robe:l,pos_pattern_width:260,pos_pattern_height:170,pos_img_offset_x:10,pos_img_offset_y:10,pos_text_offset_x:10,pos_text_offset_y:10,pos_edge_buffer:1,pos_border_width:5.91,pos_kusi_width:2.53,pos_mandala_width:13.09,pos_mandala_height:24.43,pattern_scale:12,val_edge_buffer:Number(l.edge_buffer),val_vertical_buffer_width:Number(l.vertical_buffer_width),val_kusi_cutting_buffer:Number(l.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(l.vertical_kusi_buffer),val_inner_width:Number(l.width),val_inner_height:Number(l.height),val_kusi_width:Number(l.kusi_width),val_cut_width:n.val_cut_width,val_cut_height:n.val_cut_height,val_mandala_width:n.val_mandala_width,val_mandala_height:n.val_mandala_height,val_border_width:n.val_border_width,val_border_height:n.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var d=o.pattern_scale;t.drawImage(img,o.pos_img_offset_x*d,o.pos_img_offset_y*d,o.pos_pattern_width*d,o.pos_pattern_height*d),Object(_.n)(t,o,o.robe.title,"100px",-.5,164),Object(_.k)(t,o,"Final Width: "+Object(_.i)(o.val_inner_width),5,140),Object(_.k)(t,o,"Final Height: "+Object(_.i)(o.val_inner_height),5,136),Object(_.k)(t,o,"Cut Width: "+Object(_.i)(o.val_cut_width),5,132),Object(_.k)(t,o,"Cut Height: "+Object(_.i)(o.val_cut_height),5,128),Object(_.k)(t,o,"edge buffer: "+Object(_.i)(o.val_edge_buffer),5,122),Object(_.k)(t,o,"vertical cutting buffer: "+Object(_.i)(o.val_vertical_buffer_width),5,118),Object(_.k)(t,o,"kusi cutting buffer: "+Object(_.i)(o.val_kusi_cutting_buffer),5,114),Object(_.k)(t,o,"vertical kusi buffer: "+Object(_.i)(o.val_vertical_kusi_buffer),5,110),Object(_.k)(t,o,"a, border width: "+Object(_.i)(o.val_border_width),5,102),Object(_.k)(t,o,"b, border height: "+Object(_.i)(o.val_border_height),5,98),Object(_.k)(t,o,"k, kusi width: "+Object(_.i)(o.val_kusi_width),5,94),Object(_.k)(t,o,"m, mandala width: "+Object(_.i)(o.val_mandala_width),5,90),Object(_.k)(t,o,"d, mandala height: "+Object(_.i)(o.val_mandala_height),5,86),Object(_.l)(t,o,o.val_cut_width,245,164),Object(_.l)(t,o,o.val_cut_height,255,155),Object(_.l)(t,o,o.val_border_width,104.5,82),Object(_.l)(t,o,o.val_border_height,112,74.2),Object(_.l)(t,o,o.val_kusi_width,112,130),Object(_.l)(t,o,o.val_kusi_width+o.val_vertical_kusi_buffer,123.5,74.2),Object(_.l)(t,o,o.val_mandala_width,130,82),Object(_.l)(t,o,o.val_mandala_height,130,89),Object(_.m)(t,o,o.val_vertical_kusi_buffer,123,137),Object(_.m)(t,o,o.val_kusi_cutting_buffer,154.2,86),Object(_.l)(t,o,o.val_vertical_buffer_width,209,73),Object(_.l)(t,o,o.val_vertical_buffer_width,209,160),Object(_.l)(t,o,o.val_edge_buffer,249,133)}(t,e,r,img,o)})),Object(_.g)(t[1],o,(function(t,img){!function(t,e,r,img,o){var a=Object(_.c)(o,9),d={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},c={robe:o,pos_pattern_width:270,pos_pattern_height:140,pos_img_offset_x:5,pos_img_offset_y:20,pos_text_offset_x:10,pos_text_offset_y:20,pos_edge_buffer:1.11,pos_vertical_buffer_width:11.1,pos_border_width:15.54,pos_kusi_width:6.66,pos_mandala_width:64.37,pos_mandala_height:34.4,pattern_scale:12,val_edge_buffer:Number(o.edge_buffer),val_vertical_buffer_width:Number(o.vertical_buffer_width),val_kusi_cutting_buffer:Number(o.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(o.vertical_kusi_buffer),val_inner_width:Number(o.width),val_inner_height:Number(o.height),val_kusi_width:Number(o.kusi_width),val_cut_width:d.val_cut_width,val_cut_height:d.val_cut_height,val_mandala_width:d.val_mandala_width,val_mandala_height:d.val_mandala_height,val_border_width:d.val_border_width,val_border_height:d.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var h=c.pattern_scale;t.drawImage(img,c.pos_img_offset_x*h,c.pos_img_offset_y*h,c.pos_pattern_width*h,c.pos_pattern_height*h),l(t,c,0,0,0,1,.5,-2),l(t,c,0,0,1,1,.5,-2),l(t,c,1,0,1,1,.5,-2),l(t,c,1,1,1,1,.5,-2),l(t,c,2,1,1,1,.5,-2),l(t,c,2,2,1,1,.5,-2),l(t,c,3,2,1,1,.5,-2),l(t,c,3,2,2,1,.5,-2),l(t,c,3,2,2,2,.5,-2),n(t,c,0,0,0,0,1,-9,1),n(t,c,0,0,0,1,1,-9,1),n(t,c,1,0,0,1,1,-9,0),n(t,c,1,0,2,1,1,-9,1),n(t,c,1,1,2,1,1,-9,1),n(t,c,2,1,2,1,1,-9,0),n(t,c,2,1,4,1,1,-9,1),n(t,c,2,2,4,1,1,-9,1),n(t,c,3,2,4,1,1,-9,1),n(t,c,3,2,5,1,1,-9,3)}(t,e,r,img,o)})),Object(_.g)(t[2],o,(function(t,img){!function(t,e,r,img,o){var a=Object(_.c)(o,9),d={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},c={robe:o,pos_pattern_width:270,pos_pattern_height:137,pos_img_offset_x:5,pos_img_offset_y:20,pos_text_offset_x:10,pos_text_offset_y:20,pos_edge_buffer:1.11,pos_vertical_buffer_width:11.1,pos_border_width:15.54,pos_kusi_width:6.66,pos_mandala_width:64.37,pos_mandala_height:34.4,pattern_scale:12,val_edge_buffer:Number(o.edge_buffer),val_vertical_buffer_width:Number(o.vertical_buffer_width),val_kusi_cutting_buffer:Number(o.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(o.vertical_kusi_buffer),val_inner_width:Number(o.width),val_inner_height:Number(o.height),val_kusi_width:Number(o.kusi_width),val_cut_width:d.val_cut_width,val_cut_height:d.val_cut_height,val_mandala_width:d.val_mandala_width,val_mandala_height:d.val_mandala_height,val_border_width:d.val_border_width,val_border_height:d.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var h=c.pattern_scale;t.drawImage(img,c.pos_img_offset_x*h,c.pos_img_offset_y*h,c.pos_pattern_width*h,c.pos_pattern_height*h),l(t,c,0,0,0,1,.5,-2),l(t,c,0,0,1,1,.5,-2),l(t,c,1,0,1,1,.5,-2),l(t,c,1,1,1,1,.5,-2),l(t,c,2,1,1,1,.5,-2),l(t,c,2,2,1,1,.5,-2),l(t,c,3,2,1,1,.5,-2),l(t,c,3,2,2,1,.5,-2),l(t,c,3,2,2,2,.5,-2),n(t,c,0,0,0,0,1,-9,1),n(t,c,0,1,0,0,1,-9,1),n(t,c,1,1,0,0,1,-9,-1),n(t,c,1,1,2,0,1,-9,1),n(t,c,1,2,2,0,1,-9,1),n(t,c,2,2,2,0,1,-9,1),n(t,c,2,3,2,0,1,-9,-1),n(t,c,2,3,4,0,1,-9,1),n(t,c,3,3,4,0,1,-9,1),n(t,c,3,4,4,0,1,-9,1),n(t,c,3,4,5,0,1,-9,3)}(t,e,r,img,o)})),Object(_.g)(t[3],o,(function(t,img){!function(t,e,r,img,o){var a=Object(_.c)(o,9),d={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},c={robe:o,pos_pattern_width:270,pos_pattern_height:140,pos_img_offset_x:5,pos_img_offset_y:20,pos_text_offset_x:10,pos_text_offset_y:20,pos_edge_buffer:1.11,pos_vertical_buffer_width:11.1,pos_border_width:15.54,pos_kusi_width:6.66,pos_mandala_width:64.37,pos_mandala_height:34.4,pattern_scale:12,val_edge_buffer:Number(o.edge_buffer),val_vertical_buffer_width:Number(o.vertical_buffer_width),val_kusi_cutting_buffer:Number(o.kusi_cutting_buffer),val_vertical_kusi_buffer:Number(o.vertical_kusi_buffer),val_inner_width:Number(o.width),val_inner_height:Number(o.height),val_kusi_width:Number(o.kusi_width),val_cut_width:d.val_cut_width,val_cut_height:d.val_cut_height,val_mandala_width:d.val_mandala_width,val_mandala_height:d.val_mandala_height,val_border_width:d.val_border_width,val_border_height:d.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var h=c.pattern_scale;t.drawImage(img,c.pos_img_offset_x*h,c.pos_img_offset_y*h,c.pos_pattern_width*h,c.pos_pattern_height*h),l(t,c,0,0,0,1,.5,-2),l(t,c,0,0,1,1,.5,-2),l(t,c,1,0,1,1,.5,-2),l(t,c,1,1,1,1,.5,-2),l(t,c,2,1,1,1,.5,-2),l(t,c,2,2,1,1,.5,-2),l(t,c,3,2,1,1,.5,-2),l(t,c,3,2,2,1,.5,-2),l(t,c,3,2,2,2,.5,-2),n(t,c,0,0,0,0,1,-9,1),n(t,c,0,0,0,1,1,-9,1),n(t,c,1,0,0,1,1,-9,-1),n(t,c,1,0,2,1,1,-9,1),n(t,c,1,1,2,1,1,-9,1),n(t,c,2,1,2,1,1,-9,-1),n(t,c,2,1,4,1,1,-9,1),n(t,c,2,2,4,1,1,-9,1),n(t,c,3,2,4,1,1,-9,1),n(t,c,3,2,5,1,1,-9,3)}(t,e,r,img,o)}))}var d={width:3500,height:2400,show_more_controls:!1,robe:{title:"Sanghati "+(new Date).getFullYear(),border_type:0,width:355,height:214,edge_buffer:1,vertical_buffer_width:15,border_width:16,kusi_width:6.5,kusi_cutting_buffer:1,vertical_kusi_buffer:0,shrink_percent_width:0,shrink_percent_height:0,kusi_buffers:{k1_a:0,k1_b:0,k2_a:0,k2_b:0,k3_a:0,k3_b:0,k4_a:0,k4_b:0},kusi_cuts:{k1_a:!1,k2_a:!1,k3_a:!1,k4_a:!1}}},c=[{canvas_id:"sanghati-guide-canvas",overlapping_img_src:"/img/sanghati-guide.svg",joined_img_src:"/img/sanghati-guide.svg"},{canvas_id:"sanghati-panels-1-2-3-canvas",overlapping_img_src:"/img/sanghati-panels-1-2-3.svg",joined_img_src:"/img/sanghati-panels-1-2-3.svg"},{canvas_id:"sanghati-panels-4-5-6-canvas",overlapping_img_src:"/img/sanghati-panels-4-5-6.svg",joined_img_src:"/img/sanghati-panels-4-5-6.svg"},{canvas_id:"sanghati-panels-7-8-9-canvas",overlapping_img_src:"/img/sanghati-panels-7-8-9.svg",joined_img_src:"/img/sanghati-panels-7-8-9.svg"}],h={data:function(){return Object(_.d)(d,this.$route.query)},computed:{robeParamsUrl:function(){return Object(_.e)(this.robe)}},mounted:function(){this.updateCanvas()},updated:function(){this.updateCanvas()},methods:{updateCanvas:function(){o(c,this.width,this.height,this.robe)},downloadPdf:function(){Object(_.j)(c,this.robe,this.robeParamsUrl)}}},v=r(14),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"parameters"},[r("div",{attrs:{id:"simple_controls"}},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-6"},[r("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.title,expression:"robe.title"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.robe.title},on:{input:function(e){e.target.composing||t.$set(t.robe,"title",e.target.value)}}})])])])])]),t._v(" "),r("div",{staticClass:"column is-3"},[r("div",{staticClass:"field is-horizontal"},[t._m(1),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.width,expression:"robe.width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.width},on:{input:function(e){e.target.composing||t.$set(t.robe,"width",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(2),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.height,expression:"robe.height"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.height},on:{input:function(e){e.target.composing||t.$set(t.robe,"height",e.target.value)}}})])])])])]),t._v(" "),r("div",{staticClass:"column is-3"},[r("div",{staticClass:"field is-horizontal"},[t._m(3),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.shrink_percent_width,expression:"robe.shrink_percent_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.shrink_percent_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"shrink_percent_width",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(4),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.shrink_percent_height,expression:"robe.shrink_percent_height"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.shrink_percent_height},on:{input:function(e){e.target.composing||t.$set(t.robe,"shrink_percent_height",e.target.value)}}})])])])])])])]),t._v(" "),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[r("label",{staticClass:"label"},[t._v("Border width:")]),t._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.border_width,expression:"robe.border_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.border_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"border_width",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"column"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[r("label",{staticClass:"label"},[t._v("Kusi width:")]),t._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_width,expression:"robe.kusi_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.kusi_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"kusi_width",e.target.value)}}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[r("label",{staticClass:"label"},[t._v("Kusi cutting buffer:")]),t._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_cutting_buffer,expression:"robe.kusi_cutting_buffer"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_cutting_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"kusi_cutting_buffer",e.target.value)}}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[r("label",{staticClass:"label"},[t._v("Vertical kusi buffer:")]),t._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.vertical_kusi_buffer,expression:"robe.vertical_kusi_buffer"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.vertical_kusi_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"vertical_kusi_buffer",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"column"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[r("label",{staticClass:"label"},[t._v("Edge buffer:")]),t._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.edge_buffer,expression:"robe.edge_buffer"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.edge_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"edge_buffer",e.target.value)}}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field"},[r("label",{staticClass:"label"},[t._v("Vertical buffer width:")]),t._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.vertical_buffer_width,expression:"robe.vertical_buffer_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.vertical_buffer_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"vertical_buffer_width",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"field is-pulled-right"},[r("div",{staticClass:"control"},[r("button",{class:[t.show_more_controls?"is-info":"","button"],on:{click:function(e){t.show_more_controls=!t.show_more_controls}}},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}]},[t._v("Less parameters")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.show_more_controls,expression:"!show_more_controls"}]},[t._v("More parameters")])])])])])]),t._v(" "),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"field is-grouped"},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary",on:{click:function(e){return t.downloadPdf()}}},[r("span",[t._v("Download PDF")])])]),t._v(" "),r("div",{staticClass:"control"},[r("a",{staticClass:"button is-text",attrs:{href:t.robeParamsUrl}},[t._v("Parameters Link")])])])])])]),t._v(" "),r("canvas",{staticClass:"pattern",attrs:{id:"sanghati-guide-canvas",width:t.width,height:t.height}}),t._v(" "),r("canvas",{staticClass:"pattern",attrs:{id:"sanghati-panels-1-2-3-canvas",width:t.width,height:t.height}}),t._v(" "),r("canvas",{staticClass:"pattern",attrs:{id:"sanghati-panels-4-5-6-canvas",width:t.width,height:t.height}}),t._v(" "),r("canvas",{staticClass:"pattern",attrs:{id:"sanghati-panels-7-8-9-canvas",width:t.width,height:t.height}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Title:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Final width:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Final height:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Shrinking width %:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Shrinking height %:")])])}],!1,null,null,null);e.a=component.exports}}]);
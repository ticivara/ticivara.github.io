(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{612:function(t,e,r){"use strict";r.d(e,"i",(function(){return d})),r.d(e,"k",(function(){return text})),r.d(e,"n",(function(){return _})),r.d(e,"l",(function(){return v})),r.d(e,"m",(function(){return h})),r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return f})),r.d(e,"f",(function(){return C})),r.d(e,"h",(function(){return k})),r.d(e,"c",(function(){return w})),r.d(e,"g",(function(){return M})),r.d(e,"j",(function(){return N})),r.d(e,"e",(function(){return j})),r.d(e,"d",(function(){return A}));r(70),r(89),r(21),r(12),r(55),r(43),r(632),r(125),r(614),r(633);var o=r(634),l=r.n(o),n=r(628),c=r.n(n);function d(s){return Number.parseFloat(s).toFixed(1)}function text(t,e,s,r,o){!function(t,s,e,r,o,l,n,c){var d=(l+e)*o,_=(c-r+n)*o;t.font='28px "Fira Sans"',t.fillStyle="#000000",t.fillText(s,d,_)}(t,s,r,o,e.pattern_scale,e.pos_text_offset_x,e.pos_text_offset_y,e.pos_pattern_height)}function _(t,e,s,r,o,l){!function(t,s,e,r,o,l,n,c,d){var _=(n+r)*l,v=(d-o+c)*l;t.font=String(e)+' "Butler"',t.fillStyle="#000000",t.fillText(s,_,v)}(t,s,r,o,l,e.pattern_scale,e.pos_text_offset_x,e.pos_text_offset_y,e.pos_pattern_height)}function v(t,e,s,r,o){text(t,e,d(s),r,o)}function h(t,e,s,r,o){var l="";Number.parseFloat(s)>=0&&(l="+"),text(t,e,l+d(s),r,o)}var m=["k1_a","k1_b","k2_a","k2_b","k3_a","k3_b","k4_a","k4_b"],f=["k1_a","k2_a","k3_a","k4_a"];function C(t,i){var e=-1;switch(i){case 0:e=-1;break;case 1:e=0;break;case 2:e=-1;break;case 3:e=1;break;case 4:e=-1;break;case 5:e=2;break;case 6:e=-1;break;case 7:e=3}return e>=0&&t.kusi_cuts[f[e]]}function k(t,e){if(e<0)return 0;for(var a=0,i=0,r=Number(t.kusi_cutting_buffer);i<=e&&i<m.length;)a+=Number(t.kusi_buffers[m[i]]),C(t,i)&&(a+=r),i++;return a}function w(t,e){var r,o,l=Number(t.width),n=Number(t.height),c=Number(t.edge_buffer),d=Number(t.vertical_buffer_width),_=Number(t.kusi_width),v=Number(t.border_width);0===t.border_type?(r=l*(1+t.shrink_percent_width/100),o=n*(1+t.shrink_percent_height/100)):(r=(l-2*v)*(1+t.shrink_percent_width/100),o=(n-2*v)*(1+t.shrink_percent_height/100));var h,m,f,C,w=r+2*c+k(t,2*(e-1)-1),M=o+2*d;0===t.border_type?(h=(l-2*v-(e-1)*_)/e,m=(n-2*v-2*_)/3):(h=(l-(e-1)*_)/e,m=(n-2*_)/3),0===t.border_type?(f=v/h,C=v/m):(f=0,C=0);var I,N,j,A,D=r-(e-1)*_,y=o-2*_;return 0===t.border_type?(j=(I=D/(e+2*f))*f,A=(N=y/(3+2*C))*C):(I=D/e,N=y/3,j=v,A=v),{cut_width:w,cut_height:M,mandala_width:I,mandala_height:N,border_width:j,border_height:A}}function M(pattern,t,e){var canvas=document.getElementById(pattern.canvas_id);if(null!==canvas){var r=canvas.getContext("2d"),img=new Image;img.onload=function(){e(r,img)},0===t.border_type?img.src=pattern.overlapping_img_src:img.src=pattern.joined_img_src}else console.log("Error: Can't find canvas: "+pattern.canvas_id)}function I(t,e,r){var o=function(t){for(var e=t.split(","),r=atob(e[1]),o=r.length,l=new Uint8Array(o);o--;)l[o]=r.charCodeAt(o);return l}(document.getElementById(e).toDataURL("image/jpeg",.95)),img=new l.a.Image(o);t.cell("",{padding:0,y:600}).image(img,{width:830,align:"center"});t.cell("",{paddingLeft:10*l.a.mm}).text().add("Ticivara Robe Sewing - ",{fontSize:9}).add("ticivara.github.io",{fontSize:9,link:"https://ticivara.github.io",color:"0x2D79B9"}).add(" - ",{fontSize:9}).add("[parameters link]",{fontSize:9,link:r,color:"0x2D79B9"})}function N(t,e,r){var o=new l.a.Document({width:841.896,height:595.296,padding:0,font:c.a,properties:{title:e.title,creator:"Ticivara Robe Sewing"}});t.forEach((function(i,e){I(o,i.canvas_id,r),e<t.length-1&&o.pageBreak()})),o.asBuffer().then((function(t){var r=new Blob([t],{type:"application/pdf"}),o=URL.createObjectURL(r),link=document.createElement("a");link.style.display="none",link.download=e.title.replace(/[^a-zA-Z0-9-_ ]/g,"").trim()+".pdf",link.href=o,document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),URL.revokeObjectURL(link.href)}),100)}))}function j(t){var e=encodeURIComponent(JSON.stringify(t)),p=window.location.port,r="";return 3e3!==p&&9e3!==p||(r=":"+p),window.location.protocol+"//"+window.location.hostname+r+window.location.pathname+"?robe="+e}function A(t,e){var r=t,o=Object.keys(e);if(o.length>0&&o.includes("robe")){var a,l=decodeURIComponent(e.robe);try{a=JSON.parse(l)}catch(t){console.log("Parse error: Robe data is not well-formatted JSON string.")}void 0!==a&&Object.keys(a).includes("title")&&(r.robe=a)}return r}},624:function(t,e){},629:function(t,e,r){t.exports=r.p+"img/scissors-white.583c9f5.svg"},630:function(t,e,r){t.exports=r.p+"img/scissors-black.4381631.svg"},642:function(t,e){},643:function(t,e){},668:function(t,e,r){"use strict";r(614);var o=r(612),l=new Image;function n(t,e,r,l){var n,c,d;0===e.robe.border_type?(n=2,c=8):(n=2,c=16),d=r<0?0:Number(e.robe.kusi_buffers[o.a[r]]),Object(o.l)(t,e,e.val_mandala_width+d,e.pos_edge_buffer+e.pos_border_width+l*(e.pos_mandala_width+e.pos_kusi_width)+e.pos_mandala_width/2-n,c)}function c(t,e,r,l){var n,c;0===e.robe.border_type?(n=2,c=8):(n=2,c=16);var a=e.val_kusi_width+Number(e.robe.kusi_buffers[o.a[r]]);Object(o.f)(e.robe,r)&&(a+=Number(e.robe.kusi_cutting_buffer)),Object(o.l)(t,e,a,e.pos_edge_buffer+e.pos_border_width+(l-1)*e.pos_kusi_width+l*e.pos_mandala_width+e.pos_kusi_width/2-n,c)}function d(t,e,r){var l,n;0===e.robe.border_type?(l=8.8,n=3.5):(l=14,n=3.5),Object(o.l)(t,e,e.val_kusi_width,l,e.pos_edge_buffer+e.pos_border_width+e.pos_mandala_height+r*(e.pos_mandala_height+e.pos_kusi_width)+e.pos_kusi_width/2-n)}function _(t,e,r,l,n,b,c,d){Object(o.m)(t,e,e.robe.kusi_buffers[o.a[r]],-5.5+d+l*e.pos_mandala_width+n*e.pos_kusi_width+b*e.pos_border_width+c*e.pos_edge_buffer,100.2),Object(o.f)(e.robe,r)&&Object(o.m)(t,e,e.robe.kusi_cutting_buffer,-5.5+d+l*e.pos_mandala_width+n*e.pos_kusi_width+b*e.pos_border_width+c*e.pos_edge_buffer,90)}function v(t,e,r){var l,n;0===e.robe.border_type?(l=8,n=3.5):(l=14,n=3.5),Object(o.l)(t,e,e.val_mandala_height,l,e.pos_edge_buffer+e.pos_border_width+r*(e.pos_mandala_height+e.pos_kusi_width)+e.pos_mandala_height/2-n)}function h(t,e,r,l,b,n,c){var d,_;0===e.robe.border_type?(d=0,_=95):(d=12.5,_=83),Object(o.l)(t,e,r*e.val_mandala_width+Math.floor((l+1)/2)*e.val_kusi_width+Object(o.h)(e.robe,l)+b*e.val_border_width+n*e.val_edge_buffer,d+c+r*e.pos_mandala_width+Math.floor((l+1)/2)*e.pos_kusi_width+b*e.pos_border_width+n*e.pos_edge_buffer,_)}function m(t,e,r,l,b,n,c){var d,_;0===e.robe.border_type?(d=223,_=-2):(d=212.5,_=10.5),Object(o.l)(t,e,r*e.val_mandala_height+l*e.val_kusi_width+b*e.val_border_height+n*e.val_edge_buffer,d,_+c+r*e.pos_mandala_height+l*e.pos_kusi_width+b*e.pos_border_width+n*e.pos_edge_buffer)}function f(t,e,r){var n=(r+1)*e.pos_mandala_width+r*e.pos_kusi_width+e.pos_border_width+e.pos_edge_buffer;r>=2&&(n+=e.pos_kusi_width),r>=4&&(n+=e.pos_kusi_width);var c=e.pattern_scale,d=(e.pos_img_offset_x+n)*c,_=(e.pos_img_offset_y+1)*c;e.robe.kusi_cuts[o.b[r]]&&(t.strokeStyle="#0000FF",t.lineWidth=5,t.beginPath(),t.moveTo(d,_),t.lineTo(d,122*c),t.stroke(),t.lineWidth=1,0===e.robe.border_type?t.drawImage(l,d-3*c,(e.pos_img_offset_y+21.5)*c,6*c,6*c):t.drawImage(l,d-3*c,(e.pos_img_offset_y+23)*c,6*c,6*c))}function C(t,e,r,l){Object(o.g)(t[0],l,(function(t,img){!function(t,e,r,img,l){var a=Object(o.c)(l,5),C={val_cut_width:a.cut_width,val_cut_height:a.cut_height,val_mandala_width:a.mandala_width,val_mandala_height:a.mandala_height,val_border_width:a.border_width,val_border_height:a.border_height},k={robe:l,pos_pattern_width:232,pos_pattern_height:145,pos_img_offset_x:5,pos_img_offset_y:10,pos_text_offset_x:6,pos_text_offset_y:-30,pos_edge_buffer:1,pos_border_width:12.5,pos_kusi_width:6,pos_mandala_width:36.2,pos_mandala_height:21,pattern_scale:14,val_edge_buffer:Number(l.edge_buffer),val_vertical_buffer_width:Number(l.vertical_buffer_width),val_inner_width:Number(l.width),val_inner_height:Number(l.height),val_kusi_width:Number(l.kusi_width),val_cut_width:C.val_cut_width,val_cut_height:C.val_cut_height,val_mandala_width:C.val_mandala_width,val_mandala_height:C.val_mandala_height,val_border_width:C.val_border_width,val_border_height:C.val_border_height};t.fillStyle="white",t.fillRect(0,0,e,r);var w=k.pattern_scale;t.drawImage(img,k.pos_img_offset_x*w,k.pos_img_offset_y*w,k.pos_pattern_width*w,k.pos_pattern_height*w),Object(o.n)(t,k,k.robe.title,"60px",0,-12),Object(o.k)(t,k,"Final Width: "+Object(o.i)(k.val_inner_width)+", Final Height: "+Object(o.i)(k.val_inner_height),0,-19),Object(o.k)(t,k,"Cut Width: "+Object(o.i)(k.val_cut_width)+", Cut Height: "+Object(o.i)(k.val_cut_height),0,-22),Object(o.k)(t,k,"a, border width: "+Object(o.i)(k.val_border_width),40,-19),Object(o.k)(t,k,"b, border height: "+Object(o.i)(k.val_border_height),40,-22),Object(o.k)(t,k,"e, edge buffer: "+Object(o.i)(k.val_edge_buffer),40,-25),Object(o.k)(t,k,"k, kusi width: "+Object(o.i)(k.val_kusi_width),40,-28),Object(o.k)(t,k,"m, middle section width: "+Object(o.i)(k.val_mandala_width),40,-31),Object(o.k)(t,k,"d, middle section height: "+Object(o.i)(k.val_mandala_height),40,-34),0===k.robe.border_type?(Object(o.l)(t,k,k.val_edge_buffer,2,5),Object(o.l)(t,k,k.val_edge_buffer,k.pos_pattern_width-6,5)):(Object(o.l)(t,k,k.val_edge_buffer,7,16),Object(o.l)(t,k,k.val_edge_buffer,k.pos_pattern_width-11,16)),Object(o.l)(t,k,k.val_border_width,5,8),Object(o.l)(t,k,k.val_border_width,k.pos_pattern_width-9,8),Object(o.l)(t,k,k.val_border_height,9,3),Object(o.l)(t,k,k.val_border_height,k.pos_pattern_width-13,3),f(t,k,0),f(t,k,1),f(t,k,2),f(t,k,3),n(t,k,0,0),n(t,k,2,1),n(t,k,4,2),n(t,k,6,3),n(t,k,-1,4),c(t,k,1,1),c(t,k,3,2),c(t,k,5,3),c(t,k,7,4),d(t,k,0),d(t,k,1),_(t,k,0,1,0,1,1,-.2),_(t,k,1,1,1,1,1,0),_(t,k,2,2,1,1,1,-.2),_(t,k,3,2,2,1,1,0),_(t,k,4,3,2,1,1,-.2),_(t,k,5,3,3,1,1,0),_(t,k,6,4,3,1,1,-.2),_(t,k,7,4,4,1,1,0),v(t,k,0),v(t,k,1),v(t,k,2),0===k.robe.border_type?(h(t,k,0,-1,0,1,1),h(t,k,0,-1,1,1,0),h(t,k,1,0,1,1,-6),h(t,k,1,1,1,1,-5.2),h(t,k,2,2,1,1,-6),h(t,k,2,3,1,1,-5.2),h(t,k,3,4,1,1,-7),h(t,k,3,5,1,1,-6.2),h(t,k,4,6,1,1,-7),h(t,k,4,7,1,1,-6.2),h(t,k,5,7,1,1,-7),h(t,k,5,7,2,1,-8),h(t,k,5,7,2,2,0)):(h(t,k,0,-1,0,0,-6),h(t,k,0,-1,0,1,0),h(t,k,1,0,0,1,-6),h(t,k,1,1,0,1,-5.2),h(t,k,2,2,0,1,-6),h(t,k,2,3,0,1,-5.2),h(t,k,3,4,0,1,-7),h(t,k,3,5,0,1,-6.2),h(t,k,4,6,0,1,-7),h(t,k,4,7,0,1,-6.2),h(t,k,5,7,0,1,-7),h(t,k,5,7,0,2,1)),0===k.robe.border_type?(m(t,k,0,0,0,1,1),m(t,k,0,0,1,1,0),m(t,k,1,0,1,1,0),m(t,k,1,1,1,1,0),m(t,k,2,1,1,1,0),m(t,k,2,2,1,1,0),m(t,k,3,2,1,1,0),m(t,k,3,2,2,1,-6.5),m(t,k,3,2,2,2,0)):(m(t,k,0,0,0,0,-4),m(t,k,0,0,0,1,1),m(t,k,1,0,0,1,0),m(t,k,1,1,0,1,0),m(t,k,2,1,0,1,0),m(t,k,2,2,0,1,0),m(t,k,3,2,0,1,-6.5),m(t,k,3,2,0,2,1))}(t,e,r,img,l)}))}l.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjUxMiIKICAgaGVpZ2h0PSI1MTIiCiAgIHZpZXdCb3g9IjAgMCAxMzUuNDY2NjYgMTM1LjQ2NjY3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4OTUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMGJldGEyICgyYjcxZDI1LCAyMDE5LTEyLTAzKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ic2Npc3NvcnMtYmxhY2stZG93bi5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4ODkiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuNDk0OTc0NzUiCiAgICAgaW5rc2NhcGU6Y3g9Ijg3My4yNDQ5NCIKICAgICBpbmtzY2FwZTpjeT0iMjU2LjE4NyIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6c25hcC1wYWdlPSJ0cnVlIgogICAgIHNob3dndWlkZXM9InRydWUiCiAgICAgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLW9iamVjdC1taWRwb2ludHM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1nbG9iYWw9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwNDMiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjM3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iNjcuNzMzMzI5LDY3LjczMzMzNiIKICAgICAgIG9yaWVudGF0aW9uPSIxLDAiCiAgICAgICBpZD0iZ3VpZGUxNTU0IiAvPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iNjcuNzMzMzI2LDY3LjczMzMzOSIKICAgICAgIG9yaWVudGF0aW9uPSIwLC0xIgogICAgICAgaWQ9Imd1aWRlMTU1NiIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4OTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjE1NzIxIgogICAgICAgZD0iTSA1Mi40OTgwNzMsMTA2LjgzOTA4IDY3Ljk0ODkwNyw4MC42MTg0NjUgNjQuNjQxMDQ4LDc0LjQ0MTA5NiBDIDYxLjMwMTc4MSw2OC4yMDUwOTIgNTkuOTI3Njk0LDY2LjU5NDU4IDU4Ljg1ODU3LDY3LjY2MzcwNCA1OC41MzY5MjksNjcuOTg1MzQ2IDUzLjEwMzc3Miw4MS4wOTQ3NDIgNDYuNzg0OTI2LDk2Ljc5NTY1OSAzNi4yMTk5NzIsMTIzLjA0NzE4IDMzLjgzNTA4NywxMzEuMDc0NDYgMzYuMTcxNjcyLDEzMi41MTg1NSBjIDAuNDgxNTYsMC4yOTc2MiA3LjgyODQzOCwtMTEuMjU4MTUgMTYuMzI2NDAxLC0yNS42Nzk0NyB6IG0gNDcuNTA1NjM3LDIxLjgwMzMzIEMgOTkuOTkxNDU0LDEyNy4wNTEyNSA5NC42MDk0MjUsMTEyLjQ3MDQ5IDg4LjA0MzQ5NCw5Ni4yNDA3MDkgTCA3Ni4xMDU0NDcsNjYuNzMyMDI4IDc4LjU1NTUzOSw2Mi4zOTM0OTcgYyAxLjM0NzU1MywtMi4zODYxOTMgNS4wNTM4MDcsLTcuMTUxODY0IDguMjM2MTE0LC0xMC41OTAzODcgNS42MjA2OCwtNi4wNzMyMTIgNy44NTgyODIsLTcuMjIyOTgzIDE4LjEzNjc2NywtOS4zMTkzOTcgNy42MDcwNSwtMS41NTE1NDYgMTQuODQzNTIsLTExLjczNzcyMyAxNC44NDM1MiwtMjAuODkzOTc3IDAsLTYuMjU0OTkgLTIuMDg2MjgsLTEwLjc2Nzg1OCAtNi44MTg5NSwtMTQuNzUwMTMyIEMgMTA1Ljg1MzU3LDAuODY1ODM0MTcgOTcuMDY4NTk3LDEuODYyOTM3IDkyLjg0MTU0OSw5LjEyMjI3MiA5MC4yODA3OTMsMTMuNTIgNzYuMTc5MjU3LDQ0LjEyODA5OCA3NC4wNDI3NDksNDkuOTI2MDI2IGMgLTIuMDA5MDM3LDUuNDUxOTk5IC01LjUxMzM4LDcuNzIwMTYgLTkuMjc3Nzk0LDYuMDA0OTc3IEMgNjMuMTk1NzEyLDU1LjIxNjAxMSA2Mi45NDgzMDMsNTQuODA4MjQ0IDYxLjkxMTc4Myw1Mi44NTAzMjIgNjAuODc1MjY0LDUwLjg5MjQgNDQuNjUzNjM0LDExLjE0NDg1NiA0MC40NDI3MDIsNi42MDExNzc0IDM2LjIzMTc1MiwyLjA1NzQ5OTMgMjkuNTQ2MjY3LDIuNTkyNzIwOCAyNC4wMDI3OTcsNS45NzI2MDkyIGMgLTE1LjA0MTkyMDQsOS4xNzExODY4IC04LjM3NTQ1LDM0LjkzNjE0NTggOS43MTQ5LDM3LjU0NjYyOTggNi42OTg0ODUsMC45NjY2MSAxMi45OTA0MTksNS41NDg5MzcgMTYuMjAxNDY1LDkuODYwODI4IDMuMjExMDQ5LDQuMzExODkgOC4wMTY3MzEsMTAuNjQxMTU4IDEwLjIwMzkzNCwxMS42MTYxNTUgMi4xODcyMDMsMC45NzUgOS40NTc5NDcsMTQuMDc4NjQ4IDE5LjE5MTQ2OSwzMS4yODU4ODggOS43MzM1MjMsMTcuMjA3MjQgMTguMzc1NDY3LDMyLjE3ODU1IDE5LjIwNDMxOSwzMy4yNjk2IDEuMzY0MzkxLDEuNzk1OTggMS41MDQ4OTYsMS43MDk5NCAxLjQ4NDgyNiwtMC45MDkzIHogTSA5Mi45NzgzMjYsMzQuNjYwNjQgYyAtMi41Mzc3NzYsLTMuOTk5NjYxIDAuODc1NzAzLC0xNS43Mzc3ODIgNi4yMzc1MDQsLTIxLjQ0OTI1OSAzLjM2MTkyLC0zLjU4MTE3NDYgOC4xOTgzLC0zLjM4OTEwOTYgMTEuMjE0NSwwLjQ0NTM1OSA2LjgzMzM2LDguNjg3MjE2IC0xLjg2NTQ5LDI0LjY4NTc0OSAtMTIuNTUxNjE0LDIzLjA4NDMzNCAtMi4xNzYxMTUsLTAuMzI2MTAxIC00LjM4MTI5LC0xLjI2MjMwNSAtNC45MDAzOSwtMi4wODA0MzQgeiBtIC02Mi45ODIyMzksMC4zODA1OTkgYyAtNi45Njg1OCwtNC4yNDk0MzEgLTkuNjI1NSwtMTUuNTQzMjc3IC01LjAzMDgxLC0yMS4zODQ0OTQgMy4wNTA0NCwtMy44NzgwMDg2IDcuMjM2MTcsLTMuOTM0NTM4NiAxMS4wMjE4MzUsLTAuMTQ4ODgyIDYuNDc4NjAxLDYuNDc4NTk5IDkuNzA2Nzk5LDE5Ljk0Nzk1OSA1LjM4NDMxNywyMi40NjU1NzEgLTMuMTE4MTM3LDEuODE2MTQ2IC03LjQ1MDU4MiwxLjQ2MTA5OSAtMTEuMzc1MzQyLC0wLjkzMjIxOSB6IgogICAgICAgaWQ9InBhdGgxNTUwIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0ic2Njc3Njc2NzY3Nzc3Nzc3Njenpzc3p6c2Njc3NzY3Njc2NzY2MiIC8+CiAgPC9nPgo8L3N2Zz4K";var k={width:3500,height:2400,show_more_controls:!1,robe:{title:"Sabong "+(new Date).getFullYear(),border_type:0,width:228,height:99,edge_buffer:1,vertical_buffer_width:1,border_width:12,kusi_width:6,kusi_cutting_buffer:.5,shrink_percent_width:0,shrink_percent_height:0,kusi_buffers:{k1_a:0,k1_b:.5,k2_a:0,k2_b:.5,k3_a:0,k3_b:.5,k4_a:0,k4_b:.5},kusi_cuts:{k1_a:!1,k2_a:!1,k3_a:!1,k4_a:!1}}},w=[{canvas_id:"sabong-pattern-canvas",overlapping_img_src:"/img/sabong-pattern-overlapping-border.svg",joined_img_src:"/img/sabong-pattern-joined-border.svg"}],M={data:function(){return Object(o.d)(k,this.$route.query)},computed:{robeParamsUrl:function(){return Object(o.e)(this.robe)}},mounted:function(){this.updateCanvas()},updated:function(){this.updateCanvas()},methods:{updateCanvas:function(){C(w,this.width,this.height,this.robe)},setBufferWidth:function(t){var e=t.target.value;this.robe.edge_buffer=Number(e),this.robe.vertical_buffer_width=Number(e)},setBorderType:function(t){this.robe.border_type=Number(t)},downloadPdf:function(){Object(o.j)(w,this.robe,this.robeParamsUrl)}}},I=r(16),component=Object(I.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"parameters"},[o("div",{attrs:{id:"simple_controls"}},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-6"},[o("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.title,expression:"robe.title"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.robe.title},on:{input:function(e){e.target.composing||t.$set(t.robe,"title",e.target.value)}}})])])])]),t._v(" "),o("div",{staticClass:"field is-horizontal is-pulled-right"},[t._m(1),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("div",{staticClass:"field has-addons"},[o("p",{staticClass:"control"},[o("button",{class:[0===t.robe.border_type?"is-info is-selected":"","button"],on:{click:function(e){return t.setBorderType(0)}}},[o("span",[t._v("Overlapping")])])]),t._v(" "),o("p",{staticClass:"control"},[o("button",{class:[1===t.robe.border_type?"is-info is-selected":"","button"],on:{click:function(e){return t.setBorderType(1)}}},[o("span",[t._v("Joined")])])])])])])])])]),t._v(" "),o("div",{staticClass:"column is-3"},[o("div",{staticClass:"field is-horizontal"},[t._m(2),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.width,expression:"robe.width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.width},on:{input:function(e){e.target.composing||t.$set(t.robe,"width",e.target.value)}}})])])])]),t._v(" "),o("div",{staticClass:"field is-horizontal"},[t._m(3),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.height,expression:"robe.height"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.height},on:{input:function(e){e.target.composing||t.$set(t.robe,"height",e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"column is-3"},[o("div",{staticClass:"field is-horizontal"},[t._m(4),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.shrink_percent_width,expression:"robe.shrink_percent_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.shrink_percent_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"shrink_percent_width",e.target.value)}}})])])])]),t._v(" "),o("div",{staticClass:"field is-horizontal"},[t._m(5),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.shrink_percent_height,expression:"robe.shrink_percent_height"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.shrink_percent_height},on:{input:function(e){e.target.composing||t.$set(t.robe,"shrink_percent_height",e.target.value)}}})])])])])])])]),t._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field is-horizontal"},[t._m(6),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_width,expression:"robe.kusi_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.kusi_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"kusi_width",e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field is-horizontal"},[t._m(7),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.border_width,expression:"robe.border_width"}],staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.border_width},on:{input:function(e){e.target.composing||t.$set(t.robe,"border_width",e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],staticClass:"field is-horizontal"},[t._m(8),t._v(" "),o("div",{staticClass:"field-body"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{staticClass:"input",attrs:{type:"number",step:"1",min:"0"},domProps:{value:t.robe.edge_buffer},on:{change:function(e){return t.setBufferWidth(e)}}})])])])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field is-pulled-right"},[o("div",{staticClass:"control"},[o("button",{class:[t.show_more_controls?"is-info":"","button"],on:{click:function(e){t.show_more_controls=!t.show_more_controls}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}]},[t._v("Less parameters")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.show_more_controls,expression:"!show_more_controls"}]},[t._v("More parameters")])])])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.show_more_controls,expression:"show_more_controls"}],attrs:{id:"advanced_controls"}},[o("p",[t._v("\n        Kusi buffers widths:\n      ")]),t._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k1-a:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k1_a,expression:"robe.kusi_buffers.k1_a"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k1_a},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k1_a",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column",staticStyle:{"border-right":"1px solid black"}},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k1-b:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k1_b,expression:"robe.kusi_buffers.k1_b"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k1_b},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k1_b",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k2-a:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k2_a,expression:"robe.kusi_buffers.k2_a"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k2_a},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k2_a",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column",staticStyle:{"border-right":"1px solid black"}},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k2-b:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k2_b,expression:"robe.kusi_buffers.k2_b"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k2_b},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k2_b",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k3-a:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k3_a,expression:"robe.kusi_buffers.k3_a"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k3_a},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k3_a",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column",staticStyle:{"border-right":"1px solid black"}},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k3-b:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k3_b,expression:"robe.kusi_buffers.k3_b"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k3_b},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k3_b",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k4-a:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k4_a,expression:"robe.kusi_buffers.k4_a"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k4_a},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k4_a",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("k4-b:")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_buffers.k4_b,expression:"robe.kusi_buffers.k4_b"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_buffers.k4_b},on:{input:function(e){e.target.composing||t.$set(t.robe.kusi_buffers,"k4_b",e.target.value)}}})])])])])]),t._v(" "),t._m(9),t._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.robe.kusi_cutting_buffer,expression:"robe.kusi_cutting_buffer"}],staticClass:"input",attrs:{type:"number",step:"0.1",min:"0"},domProps:{value:t.robe.kusi_cutting_buffer},on:{input:function(e){e.target.composing||t.$set(t.robe,"kusi_cutting_buffer",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("button",{class:[t.robe.kusi_cuts.k1_a?"is-info":"","button"],on:{click:function(e){t.robe.kusi_cuts.k1_a=!t.robe.kusi_cuts.k1_a}}},[o("span",{staticClass:"icon is-small"},[t.robe.kusi_cuts.k1_a?o("img",{attrs:{src:r(629)}}):o("img",{attrs:{src:r(630)}})]),t._v(" "),o("span",[t._v("k1-a")])])])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("button",{class:[t.robe.kusi_cuts.k2_a?"is-info":"","button"],on:{click:function(e){t.robe.kusi_cuts.k2_a=!t.robe.kusi_cuts.k2_a}}},[o("span",{staticClass:"icon is-small"},[t.robe.kusi_cuts.k2_a?o("img",{attrs:{src:r(629)}}):o("img",{attrs:{src:r(630)}})]),t._v(" "),o("span",[t._v("k2-a")])])])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("button",{class:[t.robe.kusi_cuts.k3_a?"is-info":"","button"],on:{click:function(e){t.robe.kusi_cuts.k3_a=!t.robe.kusi_cuts.k3_a}}},[o("span",{staticClass:"icon is-small"},[t.robe.kusi_cuts.k3_a?o("img",{attrs:{src:r(629)}}):o("img",{attrs:{src:r(630)}})]),t._v(" "),o("span",[t._v("k3-a")])])])])]),t._v(" "),o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("div",{staticClass:"control"},[o("button",{class:[t.robe.kusi_cuts.k4_a?"is-info":"","button"],on:{click:function(e){t.robe.kusi_cuts.k4_a=!t.robe.kusi_cuts.k4_a}}},[o("span",{staticClass:"icon is-small"},[t.robe.kusi_cuts.k4_a?o("img",{attrs:{src:r(629)}}):o("img",{attrs:{src:r(630)}})]),t._v(" "),o("span",[t._v("k4-a")])])])])])]),t._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{staticClass:"field is-grouped"},[o("div",{staticClass:"control"},[o("button",{staticClass:"button is-primary",on:{click:function(e){return t.downloadPdf()}}},[o("span",[t._v("Download PDF")])])]),t._v(" "),o("div",{staticClass:"control"},[o("a",{staticClass:"button is-text",attrs:{href:t.robeParamsUrl}},[t._v("Parameters Link")])])])])])]),t._v(" "),o("canvas",{staticClass:"pattern",attrs:{id:"sabong-pattern-canvas",width:t.width,height:t.height}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Title:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Border type:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Final width:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Final height:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Shrinking width %:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Shrinking height %:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Kusi width:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Border width:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("Edge buffer:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",[this._v("\n          Kusi cutting buffer, added on the kusi side of the cutting line:\n        ")])])])}],!1,null,null,null);e.a=component.exports}}]);
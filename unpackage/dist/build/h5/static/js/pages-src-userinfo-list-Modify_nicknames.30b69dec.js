(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-src-userinfo-list-Modify_nicknames"],{"0b07":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("882e"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return d(t)||u(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(a=(o=u.next()).done);a=!0)if(n.push(o.value),e&&n.length===e)break}catch(d){r=!0,i=d}finally{try{a||null==u["return"]||u["return"]()}finally{if(r)throw i}}return n}function d(t){if(Array.isArray(t))return t}var l={data:function(){return{rechargeType:null,modify:null}},methods:{get_modify:function(){var t=JSON.parse(JSON.parse(plus.storage.getItem("storage")));uni.request({url:a.default+"member/name_reset",data:{id:t.id,name:this.modify},header:{token:t.token},method:"POST"}).then(function(t){var e=i(t,2),n=e[0],a=e[1];a?(console.log(a.data),plus.nativeUI.alert(a.data.message),0==a.data.error_code&&uni.navigateBack({delta:1})):console.log(n.data)})}}};e.default=l},1606:function(t,e,n){"use strict";n.r(e);var a=n("f031"),r=n("7526");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("5cc3");var o=n("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"f0ae99d8",null);e["default"]=u.exports},"5cc3":function(t,e,n){"use strict";var a=n("9ad5"),r=n.n(a);r.a},7526:function(t,e,n){"use strict";n.r(e);var a=n("0b07"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"9ad5":function(t,e,n){var a=n("b663");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("19796e06",a,!0,{sourceMap:!1,shadowMode:!1})},b663:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".titlebox[data-v-f0ae99d8]{margin-top:%?40?%}.inputext[data-v-f0ae99d8]{border:#212a3c %?1?% solid;border-radius:%?15?%;height:%?80?%;margin-top:%?15?%;font-size:%?28?%;color:#fff}.landing[data-v-f0ae99d8]{height:%?84?%;line-height:%?84?%;border-radius:%?10?%;font-size:%?32?%;background:-webkit-gradient(linear,left top,right top,from(#4286de),to(#5091e6));background:-o-linear-gradient(left,#4286de,#5091e6);background:linear-gradient(left,#4286de,#5091e6);margin-top:%?40?%}",""])},f031:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{padding:"40upx"}},[n("v-uni-view",{staticClass:"titlebox"},[n("v-uni-input",{staticClass:"inputext",attrs:{placeholder:"修改昵称(不超过6个字符)"},model:{value:t.modify,callback:function(e){t.modify=e},expression:"modify"}})],1),n("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.get_modify(e)}}},[t._v("保存并使用")])],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}}]);
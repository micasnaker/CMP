(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/src/userinfo/list/Modify_nicknames"],{1113:function(e,t,n){"use strict";var r=n("2a9c"),a=n.n(r);a.a},1606:function(e,t,n){"use strict";n.r(t);var r=n("a129"),a=n("7526");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("1113");var o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports},"2a9c":function(e,t,n){},7526:function(e,t,n){"use strict";n.r(t);var r=n("b181"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},a129:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},b181:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("882e"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return c(e)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done);r=!0)if(n.push(o.value),t&&n.length===t)break}catch(c){a=!0,u=c}finally{try{r||null==i["return"]||i["return"]()}finally{if(a)throw u}}return n}function c(e){if(Array.isArray(e))return e}var l={data:function(){return{rechargeType:null,modify:null}},methods:{get_modify:function(){var t=JSON.parse(JSON.parse(plus.storage.getItem("storage")));e.request({url:r.default+"member/name_reset",data:{id:t.id,name:this.modify},header:{token:t.token},method:"POST"}).then(function(t){var n=u(t,2),r=n[0],a=n[1];a?(console.log(a.data," at pages\\src\\userinfo\\list\\Modify_nicknames.vue:35"),plus.nativeUI.alert(a.data.message),0==a.data.error_code&&e.navigateBack({delta:1})):console.log(r.data," at pages\\src\\userinfo\\list\\Modify_nicknames.vue:43")})}}};t.default=l}).call(this,n("6e42")["default"])}},[["2cea","common/runtime","common/vendor"]]]);
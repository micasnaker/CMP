(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-src-userinfo-list-weChat"],{"1cfd":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".titlebox[data-v-9de3f6aa]{margin-top:%?40?%}.inputext[data-v-9de3f6aa]{border:#212a3c %?1?% solid;border-radius:%?15?%;height:%?80?%;margin-top:%?15?%;font-size:%?28?%;color:#fff}.landing[data-v-9de3f6aa]{height:%?84?%;line-height:%?84?%;border-radius:%?10?%;font-size:%?32?%;background:-webkit-gradient(linear,left top,right top,from(#4286de),to(#5091e6));background:-o-linear-gradient(left,#4286de,#5091e6);background:linear-gradient(left,#4286de,#5091e6);margin-top:%?40?%}",""])},"2d31":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticStyle:{padding:"40upx"}},[n("v-uni-view",{staticClass:"titlebox"},[n("v-uni-input",{staticClass:"inputext",attrs:{placeholder:null==e.message.weixin?"请输入微信账号":e.message.weixin},model:{value:e.wechat,callback:function(t){e.wechat=t},expression:"wechat"}})],1),n("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.get_wechat(t)}}},[e._v("保存并使用")]),n("v-uni-view",{staticStyle:{width:"162upx",height:"130upx",margin:"0 auto","margin-top":"90%"}},[n("v-uni-image",{staticStyle:{width:"162upx",height:"130upx"},attrs:{src:"../../../../static/pay/wx_pay.png"}})],1)],1)},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"37aa":function(e,t,n){"use strict";var r=n("4a9a"),a=n.n(r);a.a},"4a9a":function(e,t,n){var r=n("1cfd");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("0fae80e6",r,!0,{sourceMap:!1,shadowMode:!1})},"5b17":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=u(n("8024")),i=u(n("882e"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return l(e)||c(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(n.push(u.value),t&&n.length===t)break}catch(s){a=!0,i=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw i}}return n}function l(e){if(Array.isArray(e))return e}function d(e,t,n,r,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function u(e){d(i,r,a,u,o,"next",e)}function o(e){d(i,r,a,u,o,"throw",e)}u(void 0)})}}var p={data:function(){return{rechargeType:null,wechat:null,message:null}},onLoad:function(){this.get_message()},methods:{get_message:function(){var e=f(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.default.get_message();case 2:this.message=e.sent,console.log(this.message);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),get_wechat:function(){var e=JSON.parse(JSON.parse(plus.storage.getItem("storage")));uni.request({url:i.default+"member/weixin_set",data:{id:e.id,weixin:this.wechat},header:{token:e.token},method:"POST"}).then(function(e){var t=o(e,2),n=t[0],r=t[1];r?(console.log(r.data),plus.nativeUI.alert(r.data.message),0==r.data.error_code&&uni.navigateBack({delta:1})):console.log(n.data)})}}};t.default=p},8024:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a")),a=i(n("882e"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return c(e)||s(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(n.push(u.value),t&&n.length===t)break}catch(s){a=!0,i=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw i}}return n}function c(e){if(Array.isArray(e))return e}function l(e,t,n,r,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function u(e){l(i,r,a,u,o,"next",e)}function o(e){l(i,r,a,u,o,"throw",e)}u(void 0)})}}var f=function(){var e=d(r.default.mark(function e(){var t,n,i,o,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=JSON.parse(JSON.parse(plus.storage.getItem("storage"))),e.prev=1,e.next=4,uni.request({url:a.default+"my_info",data:{id:t.id},header:{token:t.token},method:"POST"});case 4:if(n=e.sent,i=u(n,2),o=i[0],s=i[1],!o){e.next=11;break}return plus.nativeUI.alert("网络请求超时！"),e.abrupt("return",!1);case 11:return 2018==s.data.error_code?(plus.nativeUI.alert("登录过期，请重新登录！"),uni.reLaunch({url:"/pages/verification-login"})):2019==s.data.error_code&&(plus.nativeUI.alert("异地登录警告：请尽快修改您的登录密码！"),uni.reLaunch({url:"/pages/verification-login"})),e.abrupt("return",s.data.data);case 15:return e.prev=15,e.t0=e["catch"](1),console.log(JSON.stringify(e.t0)),e.abrupt("return",!1);case 19:case"end":return e.stop()}},e,this,[[1,15]])}));return function(){return e.apply(this,arguments)}}(),p={get_message:f};t.default=p},a34a:function(e,t,n){e.exports=n("bbdd")},bbdd:function(e,t,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("96cf"),a)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(u){r.regeneratorRuntime=void 0}},bdd3:function(e,t,n){"use strict";n.r(t);var r=n("5b17"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a},c97c:function(e,t,n){"use strict";n.r(t);var r=n("2d31"),a=n("bdd3");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("37aa");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"9de3f6aa",null);t["default"]=o.exports}}]);
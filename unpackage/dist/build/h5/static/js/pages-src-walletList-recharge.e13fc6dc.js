(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-src-walletList-recharge"],{"0ffb":function(t,e,n){"use strict";n.r(e);var r=n("34eb"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"34eb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("9171")),i=u(n("8024"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,a,i,u){try{var o=t[i](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function u(t){o(i,r,a,u,s,"next",t)}function s(t){o(i,r,a,u,s,"throw",t)}u(void 0)})}}var c={data:function(){return{rechargeType:null,array:["USDT"],res:[],number:1,num:null,TransactionID:null,message:null,upLoadClicktag:0}},onLoad:function(){this.get_message()},methods:{copy:function(){uni.setClipboardData({data:this.message.common_qianbao,success:function(){}})},go_announcement:function(){uni.navigateTo({url:"./recharge_announcement"})},get_message:function(){var t=s(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.default.get_message();case 2:this.message=t.sent,console.log(this.message);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),bindPickerChange:function(t){this.number=parseInt(t.target.value)+1,this.rechargeType=this.array[t.target.value]},get_conduct:function(){var t=s(r.default.mark(function t(){var e,n,i=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!=this.upLoadClicktag){t.next=13;break}return this.upLoadClicktag=1,e=JSON.parse(JSON.parse(plus.storage.getItem("storage"))),n={id:e.id,type:this.number,num:this.num,trans_no:this.TransactionID,common_qianbao:this.message.common_qianbao},t.next=6,a.default.httpRequest("chongzhi",n);case 6:this.res=t.sent,console.log(JSON.stringify(this.res)+111111),plus.nativeUI.toast(this.res.message),uni.navigateBack({delta:1}),setTimeout(function(){i.upLoadClicktag=0},3e3),t.next=14;break;case 13:plus.nativeUI.alert("请勿频繁操作！");case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getcopy:function(){uni.getClipboardData({success:function(t){console.log(t.data)}})}}};e.default=c},8024:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),a=i(n("882e"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return c(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(s){a=!0,i=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw i}}return n}function c(t){if(Array.isArray(t))return t}function l(t,e,n,r,a,i,u){try{var o=t[i](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function u(t){l(i,r,a,u,o,"next",t)}function o(t){l(i,r,a,u,o,"throw",t)}u(void 0)})}}var f=function(){var t=d(r.default.mark(function t(){var e,n,i,o,s;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=JSON.parse(JSON.parse(plus.storage.getItem("storage"))),t.prev=1,t.next=4,uni.request({url:a.default+"my_info",data:{id:e.id},header:{token:e.token},method:"POST"});case 4:if(n=t.sent,i=u(n,2),o=i[0],s=i[1],!o){t.next=11;break}return plus.nativeUI.alert("网络请求超时！"),t.abrupt("return",!1);case 11:return 2018==s.data.error_code?(plus.nativeUI.alert("登录过期，请重新登录！"),uni.reLaunch({url:"/pages/verification-login"})):2019==s.data.error_code&&(plus.nativeUI.alert("异地登录警告：请尽快修改您的登录密码！"),uni.reLaunch({url:"/pages/verification-login"})),t.abrupt("return",s.data.data);case 15:return t.prev=15,t.t0=t["catch"](1),console.log(JSON.stringify(t.t0)),t.abrupt("return",!1);case 19:case"end":return t.stop()}},t,this,[[1,15]])}));return function(){return t.apply(this,arguments)}}(),p={get_message:f};e.default=p},8457:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".tis[data-v-3845bee8]{font-size:%?24?%;color:#4286de}.typetext[data-v-3845bee8]{color:#349cfe}.titlebox[data-v-3845bee8]{margin-top:%?40?%}.inputext[data-v-3845bee8]{border:#212a3c %?1?% solid;border-radius:%?15?%;height:%?80?%;margin-top:%?15?%;font-size:%?28?%;color:#fff}.landing[data-v-3845bee8]{height:%?84?%;line-height:%?84?%;border-radius:%?10?%;font-size:%?32?%;background:-webkit-gradient(linear,left top,right top,from(#4286de),to(#5091e6));background:-o-linear-gradient(left,#4286de,#5091e6);background:linear-gradient(left,#4286de,#5091e6);margin-top:%?60?%}",""])},"8dbc":function(t,e,n){"use strict";var r=n("d7e0"),a=n.n(r);a.a},9171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),a=i(n("882e"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return c(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(s){a=!0,i=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw i}}return n}function c(t){if(Array.isArray(t))return t}function l(t,e,n,r,a,i,u){try{var o=t[i](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function u(t){l(i,r,a,u,o,"next",t)}function o(t){l(i,r,a,u,o,"throw",t)}u(void 0)})}}var f=function(){var t=d(r.default.mark(function t(e,n){var i,o,s,c,l;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=JSON.parse(JSON.parse(plus.storage.getItem("storage"))),t.prev=1,t.next=4,uni.request({url:a.default+e,data:n,header:{token:i.token},method:"POST"});case 4:if(o=t.sent,s=u(o,2),c=s[0],l=s[1],!c){t.next=11;break}return console.log(c),t.abrupt("return",!1);case 11:return t.abrupt("return",l.data);case 14:return t.prev=14,t.t0=t["catch"](1),console.log(JSON.stringify(t.t0)),t.abrupt("return",!1);case 18:case"end":return t.stop()}},t,this,[[1,14]])}));return function(e,n){return t.apply(this,arguments)}}(),p={httpRequest:f};e.default=p},9419:function(t,e,n){"use strict";n.r(e);var r=n("baeb"),a=n("0ffb");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("8dbc");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"3845bee8",null);e["default"]=o.exports},a34a:function(t,e,n){t.exports=n("bbdd")},baeb:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{padding:"40upx"}},[n("v-uni-view",{staticClass:"titlebox"},[n("v-uni-view",{staticClass:"typetext"},[t._v("充值类型：")]),n("v-uni-picker",{attrs:{value:t.index,range:t.array},on:{change:function(e){e=t.$handleEvent(e),t.bindPickerChange(e)}}},[n("v-uni-input",{staticStyle:{border:"#212a3c 1upx solid","border-radius":"15upx",height:"80upx","margin-top":"15upx","font-size":"28upx"},attrs:{disabled:"disabled",placeholder:null==t.rechargeType?"USDT":t.rechargeType}}),n("v-uni-image",{staticStyle:{width:"30upx",height:"30upx",float:"right","margin-top":"-50upx","margin-right":"20upx"},attrs:{src:"../../../static/img/triangle.png"}})],1)],1),n("v-uni-view",{staticClass:"titlebox"},[n("v-uni-view",{staticClass:"typetext"},[t._v("充值金额：")]),n("v-uni-input",{staticClass:"inputext",attrs:{type:"number",placeholder:"请输入充值金额"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),n("v-uni-view",{staticClass:"titlebox"},[n("v-uni-view",{staticClass:"typetext",on:{click:function(e){e=t.$handleEvent(e),t.getcopy(e)}}},[t._v("订单流水号：")]),n("v-uni-input",{staticClass:"inputext",attrs:{placeholder:"请输入订单流水号"},model:{value:t.TransactionID,callback:function(e){t.TransactionID=e},expression:"TransactionID"}})],1),n("v-uni-view",{staticClass:"titlebox"},[n("v-uni-view",{staticClass:"typetext"},[t._v("充值地址：")]),n("v-uni-view",[n("v-uni-input",{staticClass:"inputext",staticStyle:{width:"80%"},attrs:{disabled:"",placeholder:t.message.common_qianbao}}),n("v-uni-view",{staticStyle:{float:"right","margin-top":"-60upx"}},[n("v-uni-image",{staticStyle:{width:"40upx",height:"40upx"},attrs:{src:"../../../static/img/jia.png"},on:{click:function(e){e=t.$handleEvent(e),t.copy(e)}}})],1)],1),n("v-uni-view",{staticClass:"tis",staticStyle:{color:"red"}},[t._v("*为了您的资金安全，点击复制充值地址，请勿手动输入转账(充值)地址！")])],1),n("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.get_conduct(e)}}},[t._v("确认")]),n("v-uni-view",{staticStyle:{width:"70%",margin:"0 auto","text-align":"center",color:"#576984","margin-top":"40upx","text-decoration":"underline"},on:{click:function(e){e=t.$handleEvent(e),t.go_announcement(e)}}},[t._v("关于CMP平台USDT充值规则的公告")])],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),a)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(u){r.regeneratorRuntime=void 0}},d7e0:function(t,e,n){var r=n("8457");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("446bbb71",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
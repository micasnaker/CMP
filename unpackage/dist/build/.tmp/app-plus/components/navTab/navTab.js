(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/navTab/navTab"],{"098e":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"0b4e":function(t,n,e){"use strict";e.r(n);var i=e("098e"),a=e("cb72");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("97b6");var c=e("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},4920:function(t,n,e){},"97b6":function(t,n,e){"use strict";var i=e("4920"),a=e.n(i);a.a},b8c0:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"navTab",props:{tabBars:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var n=this;t.getSystemInfo({success:function(t){n.isWidth=t.windowWidth/n.tabBars.length}}),this.toView="id0"},methods:{navClick:function(t){this.$parent.currentTab=t,this.tabClick=t,this.isLeft=t*this.isWidth}}};n.default=e}).call(this,e("6e42")["default"])},cb72:function(t,n,e){"use strict";e.r(n);var i=e("b8c0"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/navTab/navTab-create-component',
    {
        'components/navTab/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("0b4e"))
        })
    },
    [['components/navTab/navTab-create-component']]
]);                

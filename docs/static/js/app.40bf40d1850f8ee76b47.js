webpackJsonp([7],{"1BTd":function(t,e){},"20Zl":function(t,e){},C5kf:function(t,e,n){"use strict";var o={open:!1,address:null},a={wallet:function(t){return t}},i={openWallet:function(t,e){var n=t.commit;t.state;n("openWallet",e)}},r={openWallet:function(t,e){t.open=!0,t.address=e}};e.a={state:o,getters:a,mutations:r,actions:i}},IcnI:function(t,e,n){"use strict";var o=n("7+uW"),a=n("NYxO"),i=n("cpjA"),r=n("C5kf");o.a.use(a.a),e.a=new a.a.Store({modules:{app:i.a,wallet:r.a}})},M93x:function(t,e,n){"use strict";function o(t){n("1BTd")}var a=n("xJD8"),i=n("v03e"),r=n("VU/8"),s=o,c=r(a.a,i.a,!1,s,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("M93x"),i=n("IcnI"),r=n("YaEn"),s=n("Yk46"),c=n.n(s);o.a.use(c.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,store:i.a,template:"<App/>",components:{App:a.a}})},YaEn:function(t,e,n){"use strict";function o(t){return function(){return n("mUJ2")("./"+t+".vue")}}var a=n("7+uW"),i=n("/ocq");a.a.use(i.a),e.a=new i.a({hashbang:!1,routes:[{path:"/",name:"Main",component:o("Main")},{path:"/new-wallet",name:"NewWallet",component:o("NewWallet")},{path:"/open-wallet",name:"OpenWallet",component:o("OpenWallet")},{path:"/wallet",name:"Wallet",component:o("Wallet")}]})},aQpR:function(t,e,n){"use strict";e.a={name:"topHeader",data:function(){return{}},computed:{networkType:function(){return this.$store.getters.networkType},blockHeight:function(){return this.$store.getters.blockHeight}},methods:{switchNetwork:function(){this.$store.dispatch("switchNetwork")}},mounted:function(){}}},cpjA:function(t,e,n){"use strict";var o={MAIN:"Main",TEST:"Test"},a={network:o.TEST,blockHeight:0,sendFormVisible:!1},i={app:function(t){return t},networkType:function(t){return t.network},blockHeight:function(t){return t.blockHeight}},r={switchNetwork:function(t){var e=t.commit;t.state;e("switchNetwork")},toggleSendForm:function(t){var e=t.commit;t.state;e("toggleSendForm")},setDBHeight:function(t,e){var n=t.commit;t.state;n("setDBHeight",e)}},s={switchNetwork:function(t){t.network===o.MAIN?t.network=o.TEST:t.network===o.TEST&&(t.network=o.MAIN)},toggleSendForm:function(t){t.sendFormVisible=!t.sendFormVisible},setDBHeight:function(t,e){t.blockHeight=e}};e.a={state:a,getters:i,mutations:s,actions:r}},gyMJ:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n("mtWM"),a=n.n(o),i=n("IcnI"),r=function(){return"Main"===i.a.getters.networkType?"https://node1.arknet.cloud":"Test"===i.a.getters.networkType?"http://167.114.29.52:4002":void 0},s=function(){return a.a.get(r()+"/api/blocks/getHeight").then(function(t){return t.data.height}).catch(function(t){t&&console.log(t)})}},gyoV:function(t,e){},hU6u:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui menu"},[n("router-link",{staticClass:"header item",attrs:{to:{name:"Main"}}},[t._v("\n      Ark Web Wallet\n    ")]),t._v(" "),n("div",{staticClass:"right menu"},[n("div",{staticClass:"item"},[n("i",{staticClass:"icon cube"}),t._v("\n        "+t._s(t.blockHeight.toLocaleString())+"\n      ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){e.preventDefault(),t.switchNetwork()}}},[n("i",{staticClass:"icon disk outline"}),t._v("\n        "+t._s(t.networkType)+"\n      ")])])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},kVq8:function(t,e){},mUJ2:function(t,e,n){function o(t){var e=a[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./Main.vue":["s6+2",5],"./NewWallet.vue":["3aU6",1],"./OpenWallet.vue":["7AwU",2],"./Send.vue":["RuoX",4],"./Transaction.vue":["P8ll",3],"./Wallet.vue":["uBEm",0],"./layouts/TopHeader.vue":["mbc/"]};o.keys=function(){return Object.keys(a)},o.id="mUJ2",t.exports=o},"mbc/":function(t,e,n){"use strict";function o(t){n("gyoV")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("aQpR"),i=n("hU6u"),r=n("VU/8"),s=o,c=r(a.a,i.a,!1,s,"data-v-829481e0",null);e.default=c.exports},v03e:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("top-header"),t._v(" "),n("router-view")],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},xJD8:function(t,e,n){"use strict";var o=n("gyMJ"),a=n("kVq8"),i=(n.n(a),n("20Zl")),r=(n.n(i),n("mbc/"));e.a={name:"app",components:{TopHeader:r.default},watch:{networkType:function(t){this.getDBHeight()}},computed:{networkType:function(){return this.$store.getters.networkType}},methods:{getDBHeight:function(){var t=this;Object(o.a)().then(function(e){t.$store.dispatch("setDBHeight",e)})}},mounted:function(){var t=this;this.getDBHeight(),setInterval(function(){t.getDBHeight()},15e3)}}}},["NHnr"]);
//# sourceMappingURL=app.40bf40d1850f8ee76b47.js.map
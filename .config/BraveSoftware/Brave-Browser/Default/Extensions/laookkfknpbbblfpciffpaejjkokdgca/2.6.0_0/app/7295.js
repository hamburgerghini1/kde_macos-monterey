(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[7295],{84748:(t,e,s)=>{(t.exports=s(23645)(!1)).push([t.id,"\n.thanks[data-v-18f29881] { height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;\n}\nh3[data-v-18f29881] { line-height: 1.8;\n}\n.icon-check[data-v-18f29881] { --icon-size: 50px;\n}\n",""])},24952:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDM3LjAxOSA3NC45OEMzODguNjY3IDI2LjYyOSAzMjQuMzggMCAyNTYgMCAxODcuNjE5IDAgMTIzLjMzMiAyNi42MjkgNzQuOTggNzQuOTggMjYuNjI5IDEyMy4zMzIgMCAxODcuNjIgMCAyNTZzMjYuNjI5IDEzMi42NjcgNzQuOTggMTgxLjAxOUMxMjMuMzMyIDQ4NS4zNzEgMTg3LjYyIDUxMiAyNTYgNTEyczEzMi42NjctMjYuNjI5IDE4MS4wMTktNzQuOThDNDg1LjM3MSAzODguNjY3IDUxMiAzMjQuMzggNTEyIDI1NnMtMjYuNjI5LTEzMi42NjctNzQuOTgxLTE4MS4wMnptLTU4LjcxMyAxMjAuMDkzTDIzNS4yNDEgMzM4LjEzOWExNC45NTMgMTQuOTUzIDAgMCAxLTEwLjYwNiA0LjM5MyAxNC45NTMgMTQuOTUzIDAgMCAxLTEwLjYwNy00LjM5M2wtODAuMzM0LTgwLjMzM2MtNS44NTgtNS44NTctNS44NTgtMTUuMzU0IDAtMjEuMjEzIDUuODU3LTUuODU4IDE1LjM1NS01Ljg1OCAyMS4yMTMgMGw2OS43MjggNjkuNzI3IDEzMi40NTgtMTMyLjQ2YzUuODU3LTUuODU4IDE1LjM1NS01Ljg1OCAyMS4yMTMgMCA1Ljg1OCA1Ljg1OCA1Ljg1OCAxNS4zNTUgMCAyMS4yMTN6IiBmaWxsPSIjMGZjMTAwIiAvPjwvc3ZnPgo="},57295:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>u});var M=function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("div",{staticClass:"thanks",attrs:{"data-test":"thanks"}},[M("div",{staticClass:"icon-check-wrapper"},[M("inline-svg",{staticClass:"icon icon-check",attrs:{src:s(24952)}})],1),t._v(" "),t._m(0),t._v(" "),t.subscribedAccount?M("div",[M("p",[t._v("Please log in to "),M("b",[t._v(t._s(t.subscribedAccount))]),M("br"),t._v(" to enjoy your new Plus features.")]),t._v(" "),M("button",{staticClass:"button",on:{click:t.login}},[t._v("Log In")])]):M("div",[M("p",[t._v("Refresh the page to enjoy your new Plus features.")]),t._v(" "),M("button",{staticClass:"button",attrs:{"data-test":"reload-btn"},on:{click:t.refresh}},[t._v("Refresh")])])])};M._withStripped=!0;const c={name:"Thanks",created(){this.subscribedAccount=localStorage.getItem("subscribedAccount"),localStorage.removeItem("subscribedAccount"),this.$e.on("modal:interceptSubStepCompletion",this.refresh),document.activeElement.blur(),localStorage.removeItem("upgrade-data")},destroyed(){this.$e.off("modal:interceptSubStepCompletion",this.refresh)},methods:{refresh(){location.reload()},login(){m.commandManager.execute("account.login")}}};s(94035);var n=(0,s(51900).Z)(c,M,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[t._v("You are now subscribed to Momentum Plus."),s("br"),t._v("Thank you!")])}],!1,null,"18f29881",null);n.options.__file="source/addins-vue/modal/upgrade/Thanks.vue";const u=n.exports},94035:(t,e,s)=>{var M=s(84748);M.__esModule&&(M=M.default),"string"==typeof M&&(M=[[t.id,M,""]]),M.locals&&(t.exports=M.locals),(0,s(45346).Z)("2b1cc6d3",M,!1,{ssrId:!0})}}]);
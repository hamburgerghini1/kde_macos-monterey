(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[384],{48713:(e,t,s)=>{"use strict";s.d(t,{Z:()=>M});var n=s(20144),a=s(88026),i=s(51726),r=s.n(i),o=s(34952),c=s(12096),u=s(60607);let d={};const l={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),d[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",d[e.dataset.mobileClickHandlerId]),delete d[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};n.Z.use(a.Z,{name:"unreactive"}),n.Z.use(r()),n.Z.use(o.InlineSvgPlugin),n.Z.prototype.$xhr=u.Z,n.Z.prototype.$e=c.Z,n.Z.directive("mobile-click",l),new n.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),n.Z.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const M=n.Z},30384:(e,t,s)=>{"use strict";s.r(t);var n=s(48713),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flash-message-container"},[n("transition",{attrs:{name:"slide-down-fade",mode:"out-in"}},[e.activeMessage?n("div",{key:e.activeMessage.id,staticClass:"flash-message",attrs:{"data-test":"flash-message"}},[e.activeMessage.error?n("inline-svg",{staticClass:"icon icon-alert",attrs:{src:s(17954)}}):e._e(),e._v(" "),n("div",{staticClass:"message"},[e._v("\n\t\t\t\t"+e._s(e.activeMessage.message)+"\n\t\t\t\t"),e.activeMessage.error?n("span",[e._v("If the problem persists, please "),n("a",{attrs:{href:"https://momentumdash.com/contact",target:"_blank"}},[e._v("contact us")]),e._v(".")]):e._e()]),e._v(" "),e.activeMessage.error?n("div",{staticClass:"icon-wrapper close",attrs:{"data-test":"close"},on:{click:e.dismiss}},[n("inline-svg",{staticClass:"icon icon-close",attrs:{src:s(52545)}})],1):e._e()],1):e._e()])],1)};a._withStripped=!0;var i=s(84613),r=s(72783);const o={name:"FlashMessage",data:()=>({queue:[]}),computed:{activeMessage(){return this.queue[0]}},watch:{activeMessage(e){clearTimeout(this.timeout),e&&!e.error&&(this.timeout=setTimeout(this.dismiss,4e3))}},created(){i.Z.serviceWorker.bus.addRecurringCrossTabMessageListener({msgId:"flashMessage",success:this.onMessage}),m.on("flashMessage",this.onMessage),this.$e.addCrossTabMessageListener("flashMessage:dismiss",this.removeFromQueueById)},methods:{dismiss(){var e;this.$e.sendCrossTabMessage("flashMessage:dismiss",null===(e=this.activeMessage)||void 0===e?void 0:e.id),this.queue.splice(0,1)},onMessage(e){e.id||(e.id=(0,r.uuidv4)()),this.queue.push(e)},removeFromQueueById(e){this.queue=this.queue.filter((t=>t.id!==e))}}};s(97825);var c=(0,s(51900).Z)(o,a,[],!1,null,"e2f433c8",null);c.options.__file="source/addins-vue/flashMessage/FlashMessage.vue";const u=c.exports,d=document.querySelector(".top-row"),l=document.createElement("div");d.appendChild(l),new n.Z({render:e=>e(u)}).$mount(l)},67686:(e,t,s)=>{(e.exports=s(23645)(!1)).push([e.id,"\n.flash-message-container[data-v-e2f433c8] { position: absolute; inset: 1.5em 0 auto; z-index: 10; display: flex; justify-content: center; pointer-events: none;\n}\n.flash-message[data-v-e2f433c8] { max-width: 600px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; background-color: var(--color-bg); border-radius: 100px; color: var(--color-text); pointer-events: all;\n}\n.icon-alert[data-v-e2f433c8] { --icon-size: 20px; flex-shrink: 0;\n}\n.message a[data-v-e2f433c8] { color: var(--color-text); text-decoration: underline; transition: opacity 0.05s ease;\n}\n.message a[data-v-e2f433c8]:hover { opacity: 0.8;\n}\n.message a[data-v-e2f433c8]:hover:active { opacity: 1; transition-duration: 0s;\n}\n.close[data-v-e2f433c8]:after { --icon-wrapper-size: 30px;\n}\n.icon-close[data-v-e2f433c8] { --icon-size: 10px;\n}\n",""])},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s,n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s})).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(n[i]=!0)}for(a=0;a<e.length;a++){var r=e[a];null!=r[0]&&n[r[0]]||(s&&!r[2]?r[2]=s:s&&(r[2]="("+r[2]+") and ("+s+")"),t.push(r))}},t}},52545:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K"},17954:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQgMzJDNjQgNDkuNjczMSA0OS42NzMxIDY0IDMyIDY0QzE0LjMyNjkgNjQgMCA0OS42NzMxIDAgMzJDMCAxNC4zMjY5IDE0LjMyNjkgMCAzMiAwQzQ5LjY3MzEgMCA2NCAxNC4zMjY5IDY0IDMyWk0yOCA0NkMyOCA0My43OTA5IDI5Ljc5MDkgNDIgMzIgNDJDMzQuMjA5MSA0MiAzNiA0My43OTA5IDM2IDQ2QzM2IDQ4LjIwOTEgMzQuMjA5MSA1MCAzMiA1MEMyOS43OTA5IDUwIDI4IDQ4LjIwOTEgMjggNDZaTTMyIDE1QzI5Ljc5MDkgMTUgMjggMTYuNzkwOSAyOCAxOVYzM0MyOCAzNS4yMDkxIDI5Ljc5MDkgMzcgMzIgMzdDMzQuMjA5MSAzNyAzNiAzNS4yMDkxIDM2IDMzVjE5QzM2IDE2Ljc5MDkgMzQuMjA5MSAxNSAzMiAxNVoiIC8+Cjwvc3ZnPgo="},51900:(e,t,s)=>{"use strict";function n(e,t,s,n,a,i,r,o){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=s,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):a&&(c=o?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}s.d(t,{Z:()=>n})},97825:(e,t,s)=>{var n=s(67686);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,s(45346).Z)("7dc12104",n,!1,{ssrId:!0})},45346:(e,t,s)=>{"use strict";function n(e,t){for(var s=[],n={},a=0;a<t.length;a++){var i=t[a],r=i[0],o={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};n[r]?n[r].parts.push(o):s.push(n[r]={id:r,parts:[o]})}return s}s.d(t,{Z:()=>m});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,u=!1,d=function(){},l=null,M="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,s,a){u=s,l=a||{};var r=n(e,t);return p(r),function(t){for(var s=[],a=0;a<r.length;a++){var o=r[a];(c=i[o.id]).refs--,s.push(c)}for(t?p(r=n(e,t)):r=[],a=0;a<s.length;a++){var c;if(0===(c=s[a]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function p(e){for(var t=0;t<e.length;t++){var s=e[t],n=i[s.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](s.parts[a]);for(;a<s.parts.length;a++)n.parts.push(v(s.parts[a]));n.parts.length>s.parts.length&&(n.parts.length=s.parts.length)}else{var r=[];for(a=0;a<s.parts.length;a++)r.push(v(s.parts[a]));i[s.id]={id:s.id,refs:1,parts:r}}}}function f(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function v(e){var t,s,n=document.querySelector("style["+M+'~="'+e.id+'"]');if(n){if(u)return d;n.parentNode.removeChild(n)}if(g){var a=c++;n=o||(o=f()),t=y.bind(null,n,a,!1),s=y.bind(null,n,a,!0)}else n=f(),t=z.bind(null,n),s=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else s()}}var h,I=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function y(e,t,s,n){var a=s?"":n.css;if(e.styleSheet)e.styleSheet.cssText=I(t,a);else{var i=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function z(e,t){var s=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),l.ssrId&&e.setAttribute(M,t.id),a&&(s+="\n/*# sourceURL="+a.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}}}]);
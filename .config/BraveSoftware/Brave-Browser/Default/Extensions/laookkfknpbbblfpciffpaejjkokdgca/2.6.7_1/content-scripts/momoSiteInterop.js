!function(){if(chrome&&chrome.runtime){var e=chrome.runtime.getURL(""),n=e.startsWith("chrome-extension:")?"chrome-extension":e.startsWith("moz-extension:")?"moz-extension":null;if(n){var a=document.createElement("input");a.type="hidden",a.id="momentumPlatform",a.value=n,document.body.appendChild(a)}var t=chrome.runtime.getManifest();if(t){var o=document.createElement("input");o.type="hidden",o.id="momentumVersion",o.value=t.version,document.body.appendChild(o)}window.addEventListener("message",function(n){if(n.source===window&&n.data.type){var e=n.data.type;if("momentum:oneTimeLogin"===e){var a=!!n.data.openNewTab,t=!!n.data.updateSenderTab;chrome.runtime.sendMessage({type:"oneTimeLogin",payload:n.data.payload,openNewTab:a,updateSenderTab:t},function(e){window.postMessage({type:"momentum:callback:oneTimeLogin",callbackId:n.data.callbackId,payload:e},window.origin)})}else"momentum:authState"===e?chrome.runtime.sendMessage(n.data):"momentum:checkUserId"===e?chrome.runtime.sendMessage({type:"checkUserId",payload:n.data.data},function(e){window.postMessage({type:"momentum:callback:checkUserId",payload:e},window.origin)}):"momentum:openNew"===e&&chrome.runtime.sendMessage(n.data)}},!1)}}();
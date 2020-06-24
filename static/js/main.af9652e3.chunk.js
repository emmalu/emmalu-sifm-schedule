(this["webpackJsonpsea-island-fm"]=this["webpackJsonpsea-island-fm"]||[]).push([[0],{42:function(e,t,a){e.exports=a(53)},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=(a(47),a(34)),s=a(36),l=(a(48),a(84)),u=a(81),d=a(79),f=a(82),h=a(78),m=a(21),v=a.n(m),p=a(26),g=a(31),k=a(32),b=a(22),w=a(35),E=a(37),y=a(33),x=a.n(y),j=a(77),W=a(76),O=a(85),D=function(e){Object(E.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state={week:"",data:[],dataFields:[],firstWeekDate:""},n.getData=n.getData.bind(Object(b.a)(n)),n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.getCsvData()}},{key:"fetchCsv",value:function(){var e=Object(p.a)(v.a.mark((function e(){var t,a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/Schedule.csv");case 2:return t=e.sent,a=t.body.getReader(),n=new TextDecoder("utf-8"),e.next=7,a.read();case 7:return r=e.sent,e.abrupt("return",n.decode(r.value));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(e){var t=e.data.filter((function(e){return""!==e.Vendor})),a=e.meta.fields,n=e.meta.fields[2].replace("-"," ");this.setState({data:t,dataFields:a,firstWeekDate:n})}},{key:"getCsvData",value:function(){var e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCsv();case 2:t=e.sent,console.log(t),x.a.parse(t,{header:!0,complete:this.getData});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"chunk",value:function(e,t){for(var a=[],n=t;n>0;n--)a.push(e.splice(0,Math.ceil(e.length/n)));return a}},{key:"renderVendors",value:function(e,t){var a=this.state.data,n=1+e,i=this.state.dataFields[n],c=a.filter((function(e){return"TRUE"===e[i]})),o=this.chunk(c,3);return r.a.createElement(W.a,{className:"VendorList"},o[t].map((function(e){return r.a.createElement(O.a,{key:e.Vendor,className:e["Vendor Type"]},e.Vendor)})))}},{key:"renderWeek",value:function(e){var t=1+e,a=this.state.dataFields[t];return r.a.createElement("h3",null,a)}},{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"data-controller"},r.a.createElement("h3",null,this.renderWeek(e.week)),r.a.createElement(j.a,{container:!0,direction:"row",justify:"space-around",alignItems:"top",spacing:2},r.a.createElement(j.a,{item:!0,xs:12,sm:4},this.renderVendors(e.week,0)),r.a.createElement(j.a,{item:!0,xs:12,sm:4},this.renderVendors(e.week,1)),r.a.createElement(j.a,{item:!0,xs:12,sm:4},this.renderVendors(e.week,2))))}}]),a}(n.Component);var N=function(){function e(e){var t=e.children,a=e.value,n=e.index,i=Object(s.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),a===n&&r.a.createElement(u.a,{p:3},r.a.createElement(h.a,null,t)))}function t(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var a=r.a.useState(0),n=Object(o.a)(a,2),i=n[0],c=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Vendor Schedule"),r.a.createElement(l.a,{position:"static",className:"Tab-Bar"},r.a.createElement(f.a,{value:i,onChange:function(e,t){c(t)},"aria-label":"Schedule Navigation",centered:!0},r.a.createElement(d.a,Object.assign({label:"This Week "},t(0))),r.a.createElement(d.a,Object.assign({label:"Next Week"},t(1))),r.a.createElement(d.a,Object.assign({label:"The Week After"},t(2))))),r.a.createElement(e,{value:i,index:0},r.a.createElement(D,{week:1})),r.a.createElement(e,{value:i,index:1},r.a.createElement(D,{week:2})),r.a.createElement(e,{value:i,index:2},r.a.createElement(D,{week:3}))))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sifm-schedule",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sifm-schedule","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.af9652e3.chunk.js.map
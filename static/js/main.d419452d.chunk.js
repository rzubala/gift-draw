(this["webpackJsonpgift-drawing"]=this["webpackJsonpgift-drawing"]||[]).push([[0],[,function(e,t,n){e.exports={Persons:"Persons_Persons__SEKnd",Center:"Persons_Center__1rLmt",InfoText:"Persons_InfoText__1oyl_",Success:"Persons_Success__1u9th",Error:"Persons_Error__2qCTG"}},,,,,,,,function(e,t,n){e.exports={Person:"Person_Person__1oOnS"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,function(e,t,n){e.exports={InputText:"InputText_InputText__1TyfP"}},function(e,t,n){e.exports={Loader:"Loader_Loader__ANdA0",spin:"Loader_spin__3pTHl"}},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=(n(21),n(2)),i=n.n(s),l=n(6),u=n(5),m=n(3),d=n(13),f=n.n(d),p=function(e){return r.a.createElement("input",{value:e.value,onChange:e.changed,className:f.a.InputText,type:"text",placeholder:e.placeholder})},v=n(8),h=function e(t,n,a){Object(v.a)(this,e),this.id=t,this.name=n,this.email=a},_=n(9),b=n.n(_),g=function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(m.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(),f=Object(m.a)(d,2),v=f[0],_=f[1];Object(a.useEffect)((function(){var t=e.data.name;t&&0!==t.length?o(t):o("");var n=e.data.email;n&&0!==n.length?u(n):u("");var a=e.data.id;a&&0!==a.length?_(a):_("")}),[e.data]);return r.a.createElement("div",{className:b.a.Person},r.a.createElement(p,{value:c,changed:function(t){return n=t.target.value,o(n),void e.onUpdate(new h(v,n,l));var n},className:b.a.PersonName,placeholder:"Imi\u0119"}),r.a.createElement(p,{value:l,changed:function(t){return n=t.target.value,u(n),void e.onUpdate(new h(v,c,n));var n},className:b.a.PersonEmail,placeholder:"Email"}))},E=n(10),j=n.n(E),x=function(e){return r.a.createElement("button",{className:[j.a.Button,j.a[e.btnType]].join(" "),onClick:e.onClicked},e.children)},w=n(14),N=n.n(w),O=function(e){return r.a.createElement("div",{className:N.a.Loader})},y=n(1),k=n.n(y),T=n(15),P=function e(t,n,a){Object(v.a)(this,e),this.name=t,this.email=n,this.to=a},S=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,c,o,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&!(t.length<2)){e.next=2;break}return e.abrupt("return",C(!1));case 2:if((n=t.filter((function(e){return e.name.length>0&&e.email.length>0})))&&!(n.length<2)){e.next=5;break}return e.abrupt("return",C(!1));case 5:a=!0,r=I(n),c=Object(T.a)(r),e.prev=8,c.s();case 10:if((o=c.n()).done){e.next=20;break}return s=o.value,console.log("Ticket from ",s.name,s.email," to ",s.to),e.next=15,B(s.name,s.email,s.to);case 15:l=e.sent,a&=l,console.log("send result",l);case 18:e.next=10;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(8),c.e(e.t0);case 25:return e.prev=25,c.f(),e.finish(25);case 28:return e.abrupt("return",C(a));case 29:case"end":return e.stop()}}),e,null,[[8,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=Object(u.a)(e),n=Object(u.a)(e),a=[],r=function(){var e=t.shift(),r=n.filter((function(t){return t.id!==e.id})),c=r[Math.floor(Math.random()*r.length)],o=n.findIndex((function(e){return e.id===c.id}));n.splice(o,1),a.push(new P(e.name,e.email,c.name))};do{r()}while(t.length>0);return a},C=function(e){return e?"ok":"error"},B=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={service_id:"service_".concat("4i66flw"),template_id:"template_".concat("gjlo5p4"),user_id:"user_".concat("gkMpfertGe7lwIlEFmfzX"),template_params:{from_name:t,to_name:a,to_email:n,message:"Test wiadomo\u015bci"}},c={"Content-Type":"application/json"},o=JSON.stringify(r),e.next=5,fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:c,body:o});case 5:if(s=e.sent,console.log(s),s.ok){e.next=12;break}return console.log("error!"),e.abrupt("return",!1);case 12:return s.statusText,e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),L=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),d=Object(m.a)(s,2),f=d[0],p=d[1],v=Object(a.useState)(!1),_=Object(m.a)(v,2),b=_[0],E=_[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,S(c);case 3:t=e.sent,p(t),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){var t=c.findIndex((function(t){return t.id===e.id})),n=Object(u.a)(c);n[t]=e,o(n)},N=c.map((function(e){return r.a.createElement(g,{key:e.id,data:e,onUpdate:w})}));0===c.length&&(N=r.a.createElement("div",{className:k.a.InfoText},"Prosz\u0119 doda\u0107 osoby i adresy mailowe"));var y=null;b&&(y=r.a.createElement("div",{className:k.a.Center},r.a.createElement(O,null)));var T=null;b||f&&0!==f.length||(T=r.a.createElement("div",{className:k.a.Center},r.a.createElement(x,{btnType:"Success",onClicked:function(){var e=1;c.length>0&&(e=c.reduce((function(e,t,n,a){return a[n].id>e?a[n].id:e}),0)+1);var t=[].concat(Object(u.a)(c),[new h(e,"","")]);o(t)}},"Dodaj"),r.a.createElement(x,{btnType:"Danger",onClicked:j},"Losuj")));var P=null;return!b&&f&&f.length>0&&(P=r.a.createElement("div",{className:k.a.Center},"ok"===f?r.a.createElement("div",{className:[k.a.InfoText,k.a.Success].join(" ")},"Wiadomo\u015bci zosta\u0142y wys\u0142ane."):null,"error"===f?r.a.createElement("div",{className:[k.a.InfoText,k.a.Error].join(" ")},"Wyst\u0105pi\u0142 b\u0142\u0105d podczas wysy\u0142ania wiadomo\u015bci!"):null)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:k.a.Persons},N),T,y,P)},z=(n(23),function(e){return r.a.createElement("div",{className:"santa"},r.a.createElement("div",{className:"circles"}),r.a.createElement("div",{className:"snow"}),r.a.createElement("div",{className:"hat"},r.a.createElement("div",{className:"hat-end"})),r.a.createElement("div",{className:"face"},r.a.createElement("div",{className:"eyes"}),r.a.createElement("div",{className:"mouth"})),r.a.createElement("div",{className:"dirty-overflow"},r.a.createElement("div",{className:"body"})))});var D=function(){return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.d419452d.chunk.js.map
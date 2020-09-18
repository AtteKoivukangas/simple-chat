(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{104:function(e,t){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),u=n.n(c),o=n(12),i=n(50),s=n(52),l=n(8),m={username:"",roomId:"",typing:!1},p=function(e){return{type:"SET_TYPING",typing:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERNAME":return Object(l.a)(Object(l.a)({},e),{},{username:t.username});case"SET_ROOM_ID":return Object(l.a)(Object(l.a)({},e),{},{roomId:t.roomId});case"SET_TYPING":return Object(l.a)(Object(l.a)({},e),{},{typing:t.typing});default:return e}},E=n(53),f=n.n(E),v=function(e,t){return{type:"ADD_MESSAGE",message:{content:e,username:t,id:f.a.generate()}}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return e.concat(t.message);default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_PARTICIPANTS":return t.participants;case"SET_PARTICIPANT_TYPING":return e.map((function(e){return e.username!==t.data.username?e:Object(l.a)(Object(l.a)({},e),{},{typing:t.data.typing})}));case"ADD_PARTICIPANT":return e.concat(t.participant);case"REMOVE_PARTICIPANT":return e.filter((function(e){return e.username!==t.username}));default:return e}},g={message:"",timeoutID:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return e.timeoutID&&clearTimeout(e.timeoutID),{message:t.data.message,timeoutID:t.data.timeoutID};case"CLEAR_NOTIFICATION":return g;default:return e}},N=Object(o.combineReducers)({user:d,messages:b,participants:O,notification:h}),I=Object(o.createStore)((function(e,t){return"RESET_REDUX_STORE"===t.type&&(e=void 0),N(e,t)}),Object(i.composeWithDevTools)(Object(o.applyMiddleware)(s.a))),T=(n(70),n(2)),y=n(3),S=n(9),_=function(){var e=Object(y.c)((function(e){return e.participants})).map((function(e){return e.username}));return r.a.createElement("div",{className:"border-bottom"},r.a.createElement("span",{style:{color:"blue"}},"Online: "),e.join(", "))},j=function(){var e=Object(y.c)((function(e){return e.user.roomId}));return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Room ID")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text bg-white"},e),r.a.createElement("button",{className:"btn btn-outline-primary",type:"button",onClick:function(){!function(e){var t=document.createElement("textarea");t.style.position="absolute",t.style.left="-9999px",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}("".concat(window.location.host,"/join/").concat(e))}},"Copy link")))},R=n(30),A=n.n(R),C=n(54),D=n(55),x=n.n(D)()("/"),M=function(e,t){I.dispatch(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return function(n){var a=setTimeout((function(){n({type:"CLEAR_NOTIFICATION"})}),t);n({type:"SET_NOTIFICATION",data:{message:e,timeoutID:a}})}}(e,t))},P=function(e){return I.getState().user.username!==e};x.on("ROOM_MESSAGE",(function(e){var t=e.username,n=e.content;P(t)&&I.dispatch(v(n,t))})),x.on("USER_CONNECTED_TO_ROOM",(function(e){var t=e.username;I.dispatch(function(e){return{type:"ADD_PARTICIPANT",participant:{username:e,typing:!1}}}(t)),I.dispatch(v("".concat(t," connected")))})),x.on("USER_DISCONNECTED_FROM_ROOM",(function(e){var t=e.username;I.dispatch(function(e){return{type:"REMOVE_PARTICIPANT",username:e}}(t)),I.dispatch(v("".concat(t," disconnected")))})),x.on("USER_TYPING",(function(e){var t=e.username,n=e.typing;P(t)&&I.dispatch(function(e,t){return{type:"SET_PARTICIPANT_TYPING",data:{username:e,typing:t}}}(t,n))})),x.on("ERROR_MESSAGE",(function(e){M(e)})),x.on("connect_error",(function(){M("Server is down",1e4)})),x.on("JOINED_ROOM",(function(e){var t=e.data,n=t.username,a=t.roomId,r=t.participants;I.dispatch(function(e){return{type:"SET_USERNAME",username:e}}(n)),I.dispatch(function(e){return{type:"SET_ROOM_ID",roomId:e}}(a)),I.dispatch({type:"INIT_PARTICIPANTS",participants:r.map((function(e){return function(e){return{username:e,typing:!1}}(e)}))})}));var k=x,w=function(){var e=Object(y.b)(),t=function(){var t=Object(C.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k.emit("LEAVE_ROOM"),e({type:"RESET_REDUX_STORE"});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("span",{id:"leave-room-button",onClick:t},"Leave room")},G=function(){var e=Object(y.b)(),t=function(e,t){var n=Object(a.useState)(t||""),r=Object(S.a)(n,2),c=r[0],u=r[1],o=function(e){var t=e.target;u(t.value)};return{type:e,value:c,reset:function(){u("")},parseForInput:function(){return{type:e,value:c,onChange:o}}}}("text"),n=Object(y.c)((function(e){return e.user})),c=Object(a.useState)(""),u=Object(S.a)(c,2),o=u[0],i=u[1];Object(a.useEffect)((function(){k.emit("SET_TYPING",{typing:n.typing})}),[n.typing]);return r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.value.trim()&&(e(p(!1)),e(v(t.value,n.username)),k.emit("SEND_MESSAGE",t.value),t.reset())}},r.a.createElement("div",{className:"input-group mt-2"},r.a.createElement("input",Object.assign({className:"form-control",placeholder:"@".concat(n.username)},t.parseForInput(),{required:!0,onKeyDown:function(t){if("Enter"!==t.key){e(p(!0));var n=setTimeout((function(){e(p(!1))}),1e3);clearTimeout(o),i(n)}}})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Send"))))},U=function(){var e=Object(y.c)((function(e){return e.participants})).filter((function(e){return e.typing})).map((function(e){return e.username})),t="";return 1===e.length?t="".concat(e[0]," is typing..."):2===e.length?t="".concat(e[0]," and ").concat(e[1]," are typing..."):e.length>2&&(t="".concat(e[0]," and ").concat(e.length-1," others are typing...")),r.a.createElement("div",null,r.a.createElement("span",{id:"typing-label"},t))},F=function(e){var t=e.username,n=e.contents;return r.a.createElement("div",{className:"pt-3 text-left"},r.a.createElement("p",{className:"pb-3 mb-0 border-bottom border-gray"},t&&r.a.createElement("strong",{className:"d-block text-gray-dark"},t),n.map((function(e,t){return r.a.createElement("span",{className:"d-block",key:t},e)}))))},J=function(e){var t=e.messages;return r.a.createElement("div",null,function(){var e=[];if(!t.length)return e;for(var n=t[0].username,a=[t[0].content],r=t.length,c=1;c<=r;c++){if(c===r){e.push({username:n,contents:a,id:t[r-1].id});break}var u=t[c];u.username!==n?(e.push({username:n,contents:a,id:t[c-1].id}),n=u.username,a=[u.content]):a.push(u.content)}return e}().map((function(e){return r.a.createElement(F,{username:e.username,contents:e.contents,key:e.id})})))},Y=function(){var e=Object(T.f)(),t=Object(y.c)((function(e){return e.user.roomId})),n=Object(a.useState)(null),c=Object(S.a)(n,2),u=c[0],o=c[1],i=Object(y.c)((function(e){return e.messages}));return t||e.push("/"),Object(a.useEffect)((function(){u&&u.scrollIntoView()}),[i,u]),r.a.createElement("div",{className:"message-display mx-auto"},r.a.createElement(w,null),r.a.createElement("div",{className:"p-3 mb-3 bg-white rounded box-shadow"},r.a.createElement(_,null),r.a.createElement("div",{className:"message-board"},r.a.createElement(J,{messages:i}),r.a.createElement("div",{ref:function(e){return o(e)}})),r.a.createElement(U,null),r.a.createElement(G,null)),r.a.createElement(j,null))},q=n(11),L=function(e){var t=e.value,n=e.onChange,a=e.placeholder,c=void 0===a?"":a,u=e.prependText,o=e.required,i=void 0!==o&&o;return r.a.createElement("div",{className:"react-input"},r.a.createElement("div",{className:"input-group mb-3"},u&&r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},u)),r.a.createElement("input",{value:t,onChange:n,className:"form-control",placeholder:c,required:i})))},V=function(e){var t=e.action,n=Object(T.g)().id,c=Object(a.useState)(""),u=Object(S.a)(c,2),o=u[0],i=u[1],s=Object(a.useState)(n||""),l=Object(S.a)(s,2),m=l[0],p=l[1],d=function(){var e={msg:"",disabled:!0};return o.length<3?e.msg="Enter atleast 3 letters":(e.msg="CREATE_ROOM"===t?"Create room":"Join room",e.disabled=!1),e},E="CREATE_ROOM"===t?"success":"primary";return r.a.createElement("div",null,r.a.createElement("div",{className:"header-background"},r.a.createElement(q.b,{className:"pl-3",to:"/"},"back"),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Enter a username"))),r.a.createElement("form",{className:"text-center mt-3",onSubmit:function(e){e.preventDefault(),k.emit(t,{username:o,roomId:m.trim()})}},r.a.createElement(L,{value:o,onChange:function(e){var t=e.target;return i(t.value)},placeholder:"Username",prependText:"@",required:!0}),"JOIN_ROOM"===t&&r.a.createElement(L,{value:m,onChange:function(e){var t=e.target;return p(t.value)},placeholder:"ID",prependText:"Room ID",required:!0}),r.a.createElement("button",{type:"submit",disabled:d().disabled,className:"btn btn-".concat(E," btn-lg")},d().msg)))},z=n(110),X=function(){var e=Object(T.f)();return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"header-background"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Simple chat"),r.a.createElement("p",null,"Setup chat in seconds"))),r.a.createElement("div",{className:"p-5"},r.a.createElement(z.a,{variant:"success",size:"lg",onClick:function(){return e.push("/create")}},"Create")," ",r.a.createElement(z.a,{variant:"primary",size:"lg",onClick:function(){return e.push("/join")}},"Join")))},B=function(){var e=Object(y.c)((function(e){return e.notification}));return e.message?r.a.createElement("div",{id:"notification",className:"p-3 box-shadow"},r.a.createElement("span",null,e.message)):null},K=function(){var e=Object(T.f)(),t=Object(y.c)((function(e){return e.user.roomId}));return Object(a.useEffect)((function(){t&&e.push("/room/live")}),[t]),r.a.createElement("div",{className:"container",id:"app"},r.a.createElement(B,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",component:X,exact:!0}),r.a.createElement(T.a,{path:"/create",exact:!0},r.a.createElement(V,{action:"CREATE_ROOM"})),r.a.createElement(T.a,{path:["/join/:id","/join"],exact:!0},r.a.createElement(V,{action:"JOIN_ROOM"})),r.a.createElement(T.a,{path:"/room/live",component:Y,exact:!0})))};u.a.render(r.a.createElement(q.a,null,r.a.createElement(y.a,{store:I},r.a.createElement(K,null))),document.getElementById("root"))},56:function(e,t,n){e.exports=n(108)},70:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.29be7ad2.chunk.js.map
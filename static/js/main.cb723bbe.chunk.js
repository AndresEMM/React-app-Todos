(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},29:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(18),c=a.n(o),s=(a(28),a(22)),l=a(5),i=a(6),d=a(9),m=a(8),u=a(7),p=a(19),h=a.n(p),b=(a(29),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{href:"",className:"text-white"},this.props.t1,r.a.createElement("span",{className:"badge badge-pill badge-light ml-2"},this.props.tasks)))}}]),a}(n.Component)),f=a(20),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={id:0,title:"",responsible:"",description:"",done:!1,priority:"low"},e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(i.a)(a,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(f.a)({},n,a)),console.log("writing:",e.target.value,e.target.name)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.id=this.props.todosLenght,this.props.onAddTodo(this.state.id,this.state),console.log("Sending the data..."),this.state.id=0}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("form",{className:"card-body",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"title",onChange:this.handleInput,className:"form-control",placeholder:"Title",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"responsible",onChange:this.handleInput,className:"form-control",placeholder:"Responsible",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"description",onChange:this.handleInput,className:"form-control",placeholder:"Description",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"priority",className:"form-control",onChange:this.handleInput},r.a.createElement("option",{style:{backgroundColor:"red"}},"Low"),r.a.createElement("option",{style:{backgroundColor:"yellow"}},"Medium"),r.a.createElement("option",{style:{backgroundColor:"green"}},"High"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary",style:g},"Save")))}}]),a}(n.Component),g={fontSize:"15px"},E=v,y=a(16),N=a.n(y),k=a(21),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={posts:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({posts:a}),console.log(a);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card mt-4 mb-4"},r.a.createElement("h1",null,"Publicaciones"),r.a.createElement("div",{className:"row mr-2 ml-2 mb-4"},this.state.posts.map((function(e){return r.a.createElement("div",{className:"col-md-4",key:e.id},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,e.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.body))))})))))}}]),a}(n.Component),O=a(14);a(41);O.initializeApp({apiKey:"AIzaSyAWMiPRYz8_KEc_fNXZuLgAsAf2GdvleTY",authDomain:"react-proyects.firebaseapp.com",databaseURL:"https://react-proyects.firebaseio.com",projectId:"react-proyects",storageBucket:"react-proyects.appspot.com",messagingSenderId:"588061054655",appId:"1:588061054655:web:86a9048d54aeaabd36d80a",measurementId:"G-RG9WPS6JLX"}),O.analytics();var w=O.database(),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={fb:[]},e.handlerAddTodo=e.handlerAddTodo.bind(Object(d.a)(e)),e.removeTodo=e.removeTodo.bind(Object(d.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.ref().child("todos").on("value",(function(t){e.setState({fb:t.val()})}))}},{key:"handlerAddTodo",value:function(e,t){this.setState({fb:[].concat(Object(s.a)(this.state.fb),[t])}),w.ref().child("todos").child(e).update(t)}},{key:"removeTodo",value:function(e){window.confirm("\xbfEstas seguro de que deseas eliminar esta tarea?")&&(this.setState({fb:this.state.fb.filter((function(t,a){return a!==e}))}),w.ref().child("todos").child(e).remove())}},{key:"styleCompleted",value:function(e){return{fontSize:"20px",color:this.state.fb[e].done?"gray":"black",textDecoration:this.state.fb[e].done?"line-through":"none"}}},{key:"checkDone",value:function(e){var t=this.state.fb.map((function(t){return t.id===e&&(t.done=!t.done),t}));this.setState({todos:t}),w.ref().child("todos").child(e).update(t[e])}},{key:"render",value:function(){var e=this,t=this.state.fb.map((function(t){return r.a.createElement("div",{className:"col-md-4",key:t.id,style:e.styleCompleted(t.id)},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("input",{type:"checkbox",defaultChecked:t.done,onChange:e.checkDone.bind(e,t.id)}),r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,t.title),r.a.createElement("span",{className:"badge badge-pill badge-danger ml-2"},t.priority)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.description),r.a.createElement("p",null,r.a.createElement("mark",null,t.responsible))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:e.removeTodo.bind(e,t.id)},"Delete"))))}));return r.a.createElement("div",{className:"App"},r.a.createElement(b,{t1:"Nav 01",tasks:this.state.fb.length}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement(E,{onDuplicateTodo:this.removeTodo,onAddTodo:this.handlerAddTodo,todosLenght:this.state.fb.length})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"row"},t)),r.a.createElement(j,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cb723bbe.chunk.js.map
(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(25),a=n.n(s),i=(n(45),n(46),n(4)),r=n(8),o=n(9),j=n(10),l=[{name:"Home",url:"/",cName:"nav-links"},{name:"About Me",url:"/about",cName:"nav-links"},{name:"Resume",url:"/resume",cName:"nav-links"},{name:"Projects",url:"/projects",cName:"nav-links"},{name:"Contact",url:"/contact",cName:"nav-links"}],u=(n(47),n(2)),m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={isClicked:!1},e.handleClick=function(){e.setState({isClicked:!e.state.isClicked})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"NavbarItems",children:[Object(u.jsx)("h1",{className:"navbar-logo",children:"Nayeon Hyun"}),Object(u.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(u.jsx)("i",{className:this.state.isClicked?"fas fa-times":"fas fa-bars"})}),Object(u.jsx)("ul",{className:this.state.isClicked?"nav-menu active":"nav-menu",children:l.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:e.cName,href:e.url,children:e.name})},t)}))})]})}}]),n}(c.Component),b=n(7),h=(n(49),n.p+"static/media/bitmoji-3.67854da7.png"),d=n(30);function x(){var e=Object(u.jsx)("a",{className:"link",href:"/about",children:"About Me"}),t=Object(u.jsx)("a",{className:"link",href:"/resume",children:"Resume"}),n=Object(u.jsx)("a",{className:"link",href:"/projects",children:"Projects"}),c=Object(u.jsx)("a",{className:"link",href:"/contact",children:"Contact"});return Object(u.jsxs)("div",{className:"linkContainer",children:[e,t,n,c]})}var O=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},f=function(e,t,n){return"perspective(4000px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(1)")};var v=function(){var e=Object(c.useState)(1),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(d.useSpring)((function(){return{xys:[0,0,1],config:{mass:10,tension:200,friction:50}}})),i=Object(b.a)(a,2),r=i[0],o=i[1];return Object(u.jsx)("div",{className:"homeContainer",children:Object(u.jsxs)(d.animated.div,{className:"homepageItems",onClick:function(){s(n+1)},onMouseMove:function(e){var t=e.clientX,n=e.clientY;return o({xys:O(t,n)})},onMouseLeave:function(){return o({xys:[0,0,1]})},style:{transform:r.xys.to(f)},children:[Object(u.jsxs)("div",{className:"textContainer",children:[Object(u.jsx)("div",{className:"whiteBox"}),Object(u.jsx)("p",{className:"text",children:"Hi I'm Nayeon! \n I make cool stuff with codes. \n Including this site! \n Check out more by \n clicking one of the options below."}),Object(u.jsx)(x,{className:"HomepageButtons"}),Object(u.jsx)("p",{children:n})]}),Object(u.jsx)("img",{src:h,className:"bitmoji"})]})})},p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("h1",{children:"Projects"})]})},N=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("h1",{children:"Resume"})]})},k=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(m,{}),Object(u.jsx)("h1",{children:"About"})]})},C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("h1",{children:"Contact"})]})},g=n(39),y=n(5);var w=function(){return Object(u.jsx)(g.a,{basename:"",children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(y.c,{children:["`   ",Object(u.jsx)(y.a,{exact:!0,path:"/",component:v}),Object(u.jsx)(y.a,{exact:!0,path:"/about",component:k}),Object(u.jsx)(y.a,{exact:!0,path:"/contact",component:C}),Object(u.jsx)(y.a,{exact:!0,path:"/projects",component:p}),Object(u.jsx)(y.a,{exact:!0,path:"/resume",component:N})]})})})};a.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.8ae7f990.chunk.js.map
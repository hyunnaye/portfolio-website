(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{49:function(e,a,c){},50:function(e,a,c){},51:function(e,a,c){},54:function(e,a,c){},55:function(e,a,c){},61:function(e,a,c){"use strict";c.r(a);var s=c(2),t=c(20),n=c.n(t),i=(c(49),c(50),c(8)),o=(c(51),c.p+"static/media/bitmoji-3.67854da7.png"),l=c(32),r=c(1);function A(){var e=Object(r.jsx)("a",{className:"pageLink",href:"/experience",children:"Experience"}),a=Object(r.jsx)("a",{className:"pageLink",href:"/projects",children:"Projects"}),c=Object(r.jsx)("a",{className:"pageLink pcOnly",href:"//www.linkedin.com/in/nayeon-hyun-9b08a119a/",children:"LinkedIn"}),s=Object(r.jsx)("a",{className:"pageLink pcOnly",href:"//www.github.com/in/hyunnaye/",children:"GitHub"});return Object(r.jsxs)("div",{className:"linkContainer",children:[e,a,c,s]})}var h=function(e,a){return[-(a-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},d=function(e,a,c){return"perspective(3000px) rotateX(".concat(e,"deg) rotateY(").concat(a,"deg) scale(1)")};var j=function(){var e=Object(s.useState)(!0),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useSpring)((function(){return{xys:[0,0,1],config:{mass:10,tension:200,friction:50}}})),j=Object(i.a)(n,2),m=j[0],b=j[1];return Object(r.jsxs)("div",{className:"homeContainer",onClick:function(){!function(e,a,c){e?(c({xys:[0,0,1]}),a(!e)):a(!e)}(c,t,b)},children:[Object(r.jsxs)(l.animated.div,{className:"homepageItems",onMouseMove:c?function(e){var a=e.clientX,c=e.clientY;return b({xys:h(a,c)})}:null,onMouseLeave:c?function(){return b({xys:[0,0,1]})}:null,style:{transform:m.xys.to(d)},children:[Object(r.jsx)("div",{className:"textContainer",children:Object(r.jsxs)("div",{className:"whiteBox",children:[Object(r.jsx)("p",{className:"text",children:"Hi I'm Nayeon! \n I make cool stuff with codes. \n Including this site! \n Check out the pages below for more."}),Object(r.jsx)(A,{className:"HomepageButtons"})]})}),Object(r.jsx)("div",{className:"imageContainer",children:Object(r.jsx)("img",{src:o,className:"bitmoji",alt:"icon"})})]}),Object(r.jsxs)("div",{className:"iconContainer mobileOnly",children:[Object(r.jsx)("a",{className:"fab fa-linkedin linkIcon",href:"//www.linkedin.com/in/nayeon-hyun-9b08a119a/",children:" "}),Object(r.jsx)("a",{className:"fab fa-github linkIcon",href:"//www.github.com/hyunnaye",children:" "})]}),Object(r.jsx)("p",{className:"animationText",children:"Hover animation can be enabled/disabled by clicking"})]})},m=c(6),b=c(10),x=c(11),u=c(12),O=[{name:"Home",url:"/",cName:"nav-links"},{name:"Experience",url:"/experience",cName:"nav-links"},{name:"Projects",url:"/projects",cName:"nav-links"}],g=(c(54),function(e){Object(x.a)(c,e);var a=Object(u.a)(c);function c(){var e;Object(m.a)(this,c);for(var s=arguments.length,t=new Array(s),n=0;n<s;n++)t[n]=arguments[n];return(e=a.call.apply(a,[this].concat(t))).state={isClicked:!1},e.handleClick=function(){e.setState({isClicked:!e.state.isClicked})},e}return Object(b.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("nav",{className:"NavbarItems",children:[Object(r.jsx)("a",{className:"navbar-logo",href:"/",children:"Nayeon Hyun"}),Object(r.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(r.jsx)("i",{className:this.state.isClicked?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:this.state.isClicked?"nav-menu active":"nav-menu",children:[O.map((function(e,a){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:e.cName,href:e.url,children:e.name})},a)})),Object(r.jsx)("a",{className:"fab fa-linkedin navIconPC navIcon",href:"//www.linkedin.com/in/nayeon-hyun-9b08a119a/",children:" "}),Object(r.jsx)("a",{className:"fab fa-github navIconPC navIcon",href:"//www.github.com/hyunnaye",children:" "}),Object(r.jsxs)("div",{className:"navIconMobile",children:[Object(r.jsx)("a",{className:"fab fa-linkedin navIcon",href:"//www.linkedin.com/in/nayeon-hyun-9b08a119a/",children:" "}),Object(r.jsx)("a",{className:"fab fa-github navIcon",href:"//www.github.com/hyunnaye",children:" "})]})]})]})}}]),c}(s.Component)),f=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{}),Object(r.jsx)("h1",{children:"Projects"})]})},p=c(68),w=c(67),N=c(64),B=c(65),E=c(66),v=(c(55),c.p+"static/media/cookout.e289b014.png"),Q=c.p+"static/media/neurotechuoft.21293cc6.jpg",C=c.p+"static/media/uoftlaw.e3e26442.jpg",k=c.p+"static/media/woodsworth.f2115f85.jpeg",P=c.p+"static/media/wrisc.1ca76c46.png",y=c.p+"static/media/uoft.8de741e4.png",U=function(e){return Object(r.jsx)("div",{className:"h-100",children:Object(r.jsxs)(p.a,{style:{width:"80%"},className:"card h-100",children:[Object(r.jsx)(p.a.Img,{variant:"top",src:e.img}),Object(r.jsxs)(p.a.Body,{className:"cardBody h-100",children:[Object(r.jsx)(p.a.Text,{className:"cardTitle",children:e.title}),Object(r.jsx)(p.a.Text,{className:"cardCompany",children:e.company}),Object(r.jsx)(p.a.Text,{className:"cardDuration",children:e.duration}),Object(r.jsx)(p.a.Text,{style:{height:e.height},className:"cardDescription h-100",children:e.description})]})]})})},S=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"dropdown",onClick:function(){return e.setTechExp(!e.techExp)},children:[Object(r.jsx)("h2",{className:"header",children:"Technical Experience"}),Object(r.jsx)("i",{className:e.techExp?"fas arrow fa-chevron-up":"fas arrow fa-chevron-down"})]}),Object(r.jsx)(w.a,{in:e.techExp,style:{width:"100%"},children:Object(r.jsx)(N.a,{children:Object(r.jsxs)(B.a,{className:"row",style:{minHeight:646},children:[Object(r.jsx)(E.a,{xs:12,md:4,className:"col",children:Object(r.jsx)(U,{title:"Frontend Web Developer",img:Q,company:"Neurotech UofT",duration:"July 2021 - Present",description:"Sole front-end web developer for NeurotechUofT. Use of ReactJS and Bootstrap.",height:"240px"})}),Object(r.jsx)(E.a,{xs:12,md:4,className:"col",children:Object(r.jsx)(U,{title:"Mobile App Developer",img:v,company:"Cookout",duration:"May 2021 - Present",description:"1 of 3 app developers for a startup company, Cookout.\r Languages used: React Native for front-end, Java and\r Springboot for backend"})}),Object(r.jsx)(E.a,{xs:12,md:4,className:"col",children:Object(r.jsx)(U,{title:"Project Lead",img:C,duration:"May 2020 - Present",company:"University of Toronto Faculty of Law",description:"Solely created a digital signage system that is used to\r display information all throughout the Law campus.\r This project required skills of Drupal 8, CSS, JavaScript,\r Bootstrap, Git, and compiling with Sass."})})]})})})]})},T=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"dropdown",onClick:function(){return e.setNonTechExp(!e.nonTechExp)},children:[Object(r.jsx)("h2",{className:"header",children:"Non-Technical Experience"}),Object(r.jsx)("i",{className:e.nonTechExp?"fas arrow fa-chevron-up":"fas arrow fa-chevron-down"})]}),Object(r.jsx)(w.a,{in:e.nonTechExp,style:{width:"100%"},children:Object(r.jsx)(N.a,{children:Object(r.jsxs)(B.a,{className:"row",style:{minHeight:847},children:[Object(r.jsx)(E.a,{xs:12,md:4,className:"col",children:Object(r.jsx)(U,{title:"Vice President of Public Relations",img:P,company:"WRiSC UofT",duration:"May 2020 - May 2021",description:"Woodsworth Racialized Students' Collective (WRISC) is a club that strives to advocate for racialized students in UofT Woodsworth College. \r As the VP of Public Relations, completed tasks like promoting \r racial advocacy through social media posts, news, and photos during events.\r WRiSC received WCSA\u2019s Club of the Year award during the time of this position."})}),Object(r.jsx)(E.a,{xs:12,md:4,className:"col",children:Object(r.jsx)(U,{title:"Orientation Leader",img:k,duration:"Sep 2020 - Sep 2020",company:"University of Toronto - Woodsworth College",description:"Created a welcoming and inclusive environment for first year students by facillitating activities and games during Orientation Week.\r Ensured that incoming students' comfort and safety were the highest priority and acted as a role model"})}),Object(r.jsx)(E.a,{xs:12,md:4,className:"col",children:Object(r.jsx)(U,{title:"Tutor",img:"data:image/jpeg;base64,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",company:"CAUSE Tutoring",duration:"Nov 2019 - Apr 2019",description:"Mathematics and Reading Tutor at CAUSE; a non-profit organization whom aim to enhance access to education among the homeless, \r vulnerable, and at-risk population in downtown Ottawa and Toronto."})})]})})})]})},I=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"dropdown",onClick:function(){return e.setSkills(!e.skills)},children:[Object(r.jsx)("h2",{className:"header",children:"Skills"}),Object(r.jsx)("i",{className:e.skills?"fas arrow fa-chevron-up":"fas arrow fa-chevron-down"})]}),Object(r.jsx)(w.a,{in:e.skills,style:{width:"100%"},children:Object(r.jsxs)(N.a,{children:[Object(r.jsxs)(B.a,{className:"row rowSkillPC rowSkill",children:[Object(r.jsxs)(E.a,{xs:12,md:4,className:"col colSkill",children:[Object(r.jsx)("h5",{className:"h5",children:"Python"}),Object(r.jsx)("h5",{className:"h5",children:"C"}),Object(r.jsx)("h5",{className:"h5",children:"Bootstrap"}),Object(r.jsx)("h5",{className:"h5",children:"HTML"})]}),Object(r.jsxs)(E.a,{xs:12,md:4,className:"col colSkill",children:[Object(r.jsx)("h5",{className:"h5",children:"Java"}),Object(r.jsx)("h5",{className:"h5",children:"React/React Native"}),Object(r.jsx)("h5",{className:"h5",children:"Git"}),Object(r.jsx)("h5",{className:"h5",children:"CSS"})]}),Object(r.jsxs)(E.a,{xs:12,md:4,className:"col colSkill",children:[Object(r.jsx)("h5",{className:"h5",children:"Object Oriented Programming"}),Object(r.jsx)("h5",{className:"h5",children:"Drupal"}),Object(r.jsx)("h5",{className:"h5",children:"UI/UX Design with Figma "})]})]}),Object(r.jsx)(B.a,{className:"row rowSkillMobile rowSkill",children:Object(r.jsxs)(E.a,{xs:12,md:4,className:"col colSkill",children:[Object(r.jsx)("h5",{className:"h5",children:"Python"}),Object(r.jsx)("h5",{className:"h5",children:"Java"}),Object(r.jsx)("h5",{className:"h5",children:"C"}),Object(r.jsx)("h5",{className:"h5",children:"Object Oriented Programming"}),Object(r.jsx)("h5",{className:"h5",children:"React/React Native"}),Object(r.jsx)("h5",{className:"h5",children:"Git"}),Object(r.jsx)("h5",{className:"h5",children:"Bootstrap"}),Object(r.jsx)("h5",{className:"h5",children:"HTML"}),Object(r.jsx)("h5",{className:"h5",children:"CSS"}),Object(r.jsx)("h5",{className:"h5",children:"Drupal"}),Object(r.jsx)("h5",{className:"h5",children:"UI/UX Design with Figma"})]})})]})})]})},M=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:e.education?"dropdown":"dropdown border border-1 border-secondary",onClick:function(){return e.setEducation(!e.education)},children:[Object(r.jsx)("h2",{className:"header",children:"Education"}),Object(r.jsx)("i",{className:e.education?"fas arrow fa-chevron-up":"fas arrow fa-chevron-down"})]}),Object(r.jsx)(w.a,{in:e.education,className:"educationCollapse",children:Object(r.jsx)(N.a,{children:Object(r.jsxs)(B.a,{className:"row",children:[Object(r.jsx)(E.a,{xs:12,lg:4,className:"col",children:Object(r.jsx)("img",{src:y,alt:"uoft logo",className:"uoftLogo"})}),Object(r.jsxs)(E.a,{xs:12,lg:7,className:"col educationDesc",children:[Object(r.jsx)("h4",{className:"educationH4",children:"University of Toronto"}),Object(r.jsx)("h4",{className:"educationH4",children:"Honours Bachelor of Science"}),Object(r.jsx)("h4",{className:"educationH4",children:"Bioinformatics and Computational Biology Specialist"}),Object(r.jsx)("h5",{className:"educationH5",children:"Sep 2019 - May 2024"})]})]})})})]})},F=function(){var e=Object(s.useState)(!1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(s.useState)(!1),o=Object(i.a)(n,2),l=o[0],A=o[1],h=Object(s.useState)(!1),d=Object(i.a)(h,2),j=d[0],m=d[1],b=Object(s.useState)(!1),x=Object(i.a)(b,2),u=x[0],O=x[1];return Object(r.jsxs)("div",{className:"pageContainer",style:{position:"relative"},children:[Object(r.jsx)("div",{style:{position:"sticky",top:0,zIndex:5},children:Object(r.jsx)(g,{})}),Object(r.jsx)("h1",{className:"title",children:"Skills and Experiences"}),Object(r.jsxs)("div",{className:"dropdownContainer",children:[Object(r.jsx)(M,{education:c,setEducation:t}),Object(r.jsx)(I,{skills:l,setSkills:A}),Object(r.jsx)(S,{techExp:j,setTechExp:m}),Object(r.jsx)(T,{nonTechExp:u,setNonTechExp:O})]})]})},D=c(43),K=c(7);var R=function(){return Object(r.jsx)(D.a,{basename:"",children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(K.c,{children:["`   ",Object(r.jsx)(K.a,{exact:!0,path:"/",component:j}),Object(r.jsx)(K.a,{exact:!0,path:"/projects",component:f}),Object(r.jsx)(K.a,{exact:!0,path:"/experience",component:F})]})})})};n.a.render(Object(r.jsx)(R,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.32213ace.chunk.js.map
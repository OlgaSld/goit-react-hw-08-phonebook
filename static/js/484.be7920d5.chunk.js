"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[484],{484:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,o,i,s,d,c,l,p,u,x,m,f=t(9434),h=t(6916),b=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},j=(0,h.P1)([b,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=t(2791),y=t(3634),w=t(168),P=t(5867),z=P.ZP.h1(r||(r=(0,w.Z)(["\n  margin-top: 50px;\n  margin-left: 20px;\n  font-size: 36px;\n  font-weight: 700;\n"]))),C=P.ZP.h2(a||(a=(0,w.Z)(["\n  margin-top: 30px;\n  margin-left: 20px;\n  font-size: 36px;\n  font-weight: 700;\n"]))),k=t(5705),A=t(6727),F=(0,P.ZP)(k.l0)(o||(o=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    gap: 20px;\n    padding: 0 15px;\n"]))),N=P.ZP.label(i||(i=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    font-size: 20px;\n    color: #000;\n    margin-bottom: 15px;\n"]))),_=(0,P.ZP)(k.gN)(s||(s=(0,w.Z)(["\n  padding: 10px 10px;\n  border: 1px solid;\n  border-radius: 4px;\n  font-size: 16px;\n"]))),I=(0,P.ZP)(k.Bc)(d||(d=(0,w.Z)(["\n    font-size: 16px;\n    color: red;\n"]))),L=P.ZP.button(c||(c=(0,w.Z)(["\n  display: block;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n"]))),q=t(184),B=A.Ry().shape({name:A.Z_().min(2,"Too short!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}).required(),number:A.Z_().min(7,"Invalid phone!").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}).required()}),J=function(){var n=(0,f.I0)(),e=(0,f.v9)(b);return(0,q.jsx)(k.J9,{initialValues:{name:"",number:"",filter:""},validationSchema:B,onSubmit:function(t,r){var a={name:t.name,number:t.number};e.find((function(n){return n.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(a.name," is already in contacts")):(n((0,y.uK)(a)),r.resetForm())},children:(0,q.jsxs)(F,{children:[(0,q.jsxs)(N,{children:["Name",(0,q.jsx)(_,{name:"name",placeholder:"Name"}),(0,q.jsx)(I,{name:"name",component:"div"})]}),(0,q.jsxs)(N,{children:["Number",(0,q.jsx)(_,{name:"number",type:"tel",placeholder:"Phone Number"}),(0,q.jsx)(I,{name:"number",component:"div"})]}),(0,q.jsx)(L,{type:"submit",children:"Add contact"})]})})},K=P.ZP.label(l||(l=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    font-size: 20px;\n    color: #000;\n    margin-bottom: 15px;\n"]))),R=P.ZP.input(p||(p=(0,w.Z)(["\n    width: 400px;\n    padding: 10px 10px;\n    border: 1px solid;\n    border-radius: 4px;\n    font-size: 16px;\n\n    &hover, &focus {\n    border: 3px solid blue;\n    }\n"]))),S=t(3767),D=function(n){var e=n.value,t=(0,f.I0)();return(0,q.jsxs)(K,{children:["Find contacts by name",(0,q.jsx)(R,{name:"filter",type:"text",value:e,onChange:function(n){return t((0,S.s)(n.target.value))}})]})},E=P.ZP.ul(u||(u=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 600px;\n    padding: 12px;\n    border-radius: 4px;\n"]))),G=P.ZP.li(x||(x=(0,w.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n  margin-bottom: 5px;\n  font-size: 24px;\n  color: #000;\n"]))),M=P.ZP.button(m||(m=(0,w.Z)(["\n  display: block;\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 4px;\n\n  &:hover, &:focus {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n"]))),T=function(){var n=(0,f.I0)(),e=(0,f.v9)(j);return(0,q.jsx)(E,{children:e.map((function(e){return(0,q.jsxs)(G,{children:[(0,q.jsxs)(q.Fragment,{children:[e.name," : ",e.number]}),(0,q.jsx)(M,{type:"button",onClick:function(){return n((0,y.GK)(e.id))},children:"Delete"})]},e.id)}))})},V=t(6907),Y=function(){var n=(0,f.I0)(),e=(0,f.v9)(g),t=(0,f.v9)(Z);return(0,v.useEffect)((function(){n((0,y.yF)())}),[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(V.ql,{children:(0,q.jsx)("title",{children:"Your contacts"})}),(0,q.jsx)(z,{children:"Phonebook"}),(0,q.jsx)(J,{}),(0,q.jsx)(C,{children:"Contacts"}),(0,q.jsx)(D,{}),e&&!t&&(0,q.jsx)("b",{children:"Request in progress..."}),(0,q.jsx)(T,{})]})}}}]);
//# sourceMappingURL=484.be7920d5.chunk.js.map
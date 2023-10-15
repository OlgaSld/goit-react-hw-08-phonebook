"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[484],{484:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var o,t,a,i,s,l,c,d,p,u,x,m,f=r(9434),h=r(6916),g=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},y=(0,h.P1)([g,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=r(2791),j=r(3634),w=r(168),P=r(5867),k=P.ZP.h1(o||(o=(0,w.Z)(["\n  margin-top: 50px;\n  margin-left: 30px;\n  font-size: 36px;\n  font-weight: 700;\n  color: gray;\n  font-style: italic;\n"]))),z=P.ZP.h2(t||(t=(0,w.Z)(["\n  margin-top: 30px;\n  margin-left: 30px;\n  font-size: 36px;\n  font-weight: 700;\n  color: gray;\n  font-style: italic;\n"]))),C=r(5705),A=r(6727),F=(0,P.ZP)(C.l0)(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  gap: 20px;\n  padding: 0 15px;\n  margin-left: 20px;\n"]))),N=P.ZP.label(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  font-size: 20px;\n  color: gray;\n  margin-bottom: 15px;\n"]))),_=(0,P.ZP)(C.gN)(s||(s=(0,w.Z)(["\n  padding: 10px 10px;\n  border: 2px solid gray;\n  border-radius: 4px;\n  font-size: 16px;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    border-color: violet;\n  }\n"]))),I=(0,P.ZP)(C.Bc)(l||(l=(0,w.Z)(["\n  font-size: 16px;\n  color: red;\n"]))),L=P.ZP.button(c||(c=(0,w.Z)(["\n  display: block;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  border: 2px solid violet;\n  background-color: white;\n  color: gray;\n  font-size: 20px;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.1);\n    background-color: violet;\n    color: gray;\n  }\n"]))),q=r(184),B=A.Ry().shape({name:A.Z_().min(2,"Too short!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}).required(),number:A.Z_().min(7,"Invalid phone!").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}).required()}),J=function(){var n=(0,f.I0)(),e=(0,f.v9)(g);return(0,q.jsx)(C.J9,{initialValues:{name:"",number:"",filter:""},validationSchema:B,onSubmit:function(r,o){var t={name:r.name,number:r.number};e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):(n((0,j.uK)(t)),o.resetForm())},children:(0,q.jsxs)(F,{children:[(0,q.jsxs)(N,{children:["Name",(0,q.jsx)(_,{name:"name",placeholder:"Name"}),(0,q.jsx)(I,{name:"name",component:"div"})]}),(0,q.jsxs)(N,{children:["Number",(0,q.jsx)(_,{name:"number",type:"tel",placeholder:"Phone Number"}),(0,q.jsx)(I,{name:"number",component:"div"})]}),(0,q.jsx)(L,{type:"submit",children:"Add contact"})]})})},K=P.ZP.label(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  font-size: 20px;\n  color: gray;\n  margin-bottom: 15px;\n  margin-left: 30px;\n"]))),R=P.ZP.input(p||(p=(0,w.Z)(["\n  width: 400px;\n  padding: 10px 10px;\n  border: 1px solid;\n  border-radius: 4px;\n  font-size: 16px;\n\n  &hover,\n  &focus {\n    border: 3px solid violet;\n  }\n"]))),S=r(3767),D=function(n){var e=n.value,r=(0,f.I0)();return(0,q.jsxs)(K,{children:["Find contacts by name",(0,q.jsx)(R,{name:"filter",type:"text",value:e,onChange:function(n){return r((0,S.s)(n.target.value))}})]})},E=P.ZP.ul(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  padding: 12px;\n  border-radius: 4px;\n"]))),G=P.ZP.li(x||(x=(0,w.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n  margin-bottom: 5px;\n  font-size: 24px;\n  color: gray;\n"]))),M=P.ZP.button(m||(m=(0,w.Z)(["\n  display: block;\n  width: 100px;\n  margin-left: auto;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 4px;\n  background-color: white;\n  border: 2px solid violet;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.1);\n    background-color: violet;\n    color: gray;\n  }\n"]))),T=function(){var n=(0,f.I0)(),e=(0,f.v9)(y);return(0,q.jsx)(E,{children:e.map((function(e){return(0,q.jsxs)(G,{children:[(0,q.jsxs)(q.Fragment,{children:[e.name," : ",e.number]}),(0,q.jsx)(M,{type:"button",onClick:function(){return n((0,j.GK)(e.id))},children:"Delete"})]},e.id)}))})},V=function(){var n=(0,f.I0)(),e=(0,f.v9)(b),r=(0,f.v9)(Z);return(0,v.useEffect)((function(){n((0,j.yF)())}),[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(k,{children:"Phonebook"}),(0,q.jsx)(J,{}),(0,q.jsx)(z,{children:"Contacts"}),(0,q.jsx)(D,{}),e&&!r&&(0,q.jsx)("b",{children:"Request in progress..."}),(0,q.jsx)(T,{})]})}}}]);
//# sourceMappingURL=484.56a9f221.chunk.js.map
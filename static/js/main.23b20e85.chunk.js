(this["webpackJsonptest-exel-api"]=this["webpackJsonptest-exel-api"]||[]).push([[0],{10:function(t,e,n){t.exports={Serch:"Filter_Serch__273gP",SerchInput:"Filter_SerchInput__1prjd",Download:"Filter_Download__1l25T"}},18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__2VmIl",TaskEditor_label:"ContactForm_TaskEditor_label__24XaN",TaskEditor_input:"ContactForm_TaskEditor_input__1cYE0",TaskEditorinput:"ContactForm_TaskEditorinput__1vSEy",TaskEditor_button:"ContactForm_TaskEditor_button__A0dZ7"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(12),r=n.n(s),o=(n(18),n(13)),i=n(3),l=n(5),u=n(6),d=n(8),b=n(7),h=(n(19),n(24)),j=n(9),m=n.n(j),_=n(0),f=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(_.jsx)("ul",{className:m.a.TaskList,children:e.map((function(t){return Object(_.jsxs)("li",{className:m.a.TaskList_item,children:[t.name," : ",t.number,Object(_.jsx)("button",{className:m.a.TaskList_button,type:"button",name:"delte",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})},p=n(10),O=n.n(p);function x(t){var e=t.value,n=t.onChangeFilter;return Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{className:O.a.Serch,children:"FIND CONTACTS BY NAME"}),Object(_.jsx)("input",{className:O.a.SerchInput,type:"text",placeholder:"Enter contact name",value:e,onChange:function(t){return n(t.target.value)}}),Object(_.jsx)("a",{placeholder:"download contact list",className:O.a.Download,download:"contact list.xls",href:"#",onclick:"return ExcellentExport.excel(this, 'datatable', 'Sheet Name Here');",name:"download contact list",children:"Download contact list"}),Object(_.jsxs)("table",{id:"datatable",children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"100"})," ",Object(_.jsx)("td",{children:"200"})," ",Object(_.jsx)("td",{children:"300"})]}),Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:"400"})," ",Object(_.jsx)("td",{children:"500"})," ",Object(_.jsx)("td",{children:"600"})]})]})]})}var k=n(4),v=n(2),C=n.n(v),T=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(k.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(i.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:C.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:C.a.TaskEditor_label,children:["Name",Object(_.jsx)("input",{className:C.a.TaskEditor_input,type:"text",placeholder:"Enter name",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(_.jsxs)("label",{className:C.a.TaskEditor_label,children:["Number",Object(_.jsx)("input",{className:C.a.TaskEditor_input,type:"number",placeholder:"123-45-67",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(_.jsx)("button",{className:C.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),E=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}},g=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error}},S=(n(21),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=t.state.contacts.map((function(t){return t.name})).includes(e.name),a=t.state.contacts.map((function(t){return t.number})).includes(e.number);if(n||a)alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else if(0===e.number.length)alert("Fields must be filled!");else{var c=Object(i.a)(Object(i.a)({},e),{},{id:Object(h.a)()});t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[c])}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=g("contacts");t?this.setState({contacts:t}):E("contacts",[])}},{key:"componentDidUpdate",value:function(){var t=this.state.contacts;E("contacts",t)}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(T,{onAddContact:this.addContact}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(x,{value:t,onChangeFilter:this.changeFilter}),Object(_.jsx)(f,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(a.Component));r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__quLFu",TaskList_item:"ContactList_TaskList_item__2C0yM",TaskList_text:"ContactList_TaskList_text__1mE_B",TaskList_actions:"ContactList_TaskList_actions__1igkD",TaskList_button:"ContactList_TaskList_button__1So71"}}},[[22,1,2]]]);
//# sourceMappingURL=main.23b20e85.chunk.js.map
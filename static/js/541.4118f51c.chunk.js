"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[541],{541:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(791),a=r(434),c=r(861),u=r(687),s=r.n(u),o=r(382),i=r(243);i.Z.defaults.baseURL="https://connections-api.herokuapp.com/";var p=(0,o.hg)("contacts/fetchAll",function(){var t=(0,c.Z)(s().mark((function t(e,r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/contacts");case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",r.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()),h=((0,o.hg)("contacts/addContact",function(){var t=(0,c.Z)(s().mark((function t(e,r){var n,a,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,a=e.number,t.prev=1,t.next=4,i.Z.post("/contacts",{name:n,number:a});case 4:return c=t.sent,t.abrupt("return",c.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r.rejectWithValue(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()),(0,o.hg)("contacts/deleteContact",function(){var t=(0,c.Z)(s().mark((function t(e,r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.delete("/contacts/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",r.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()),function(t){return t.contacts.loading}),f=r(184);function l(){var t=(0,a.I0)(),e=(0,a.v9)(h);return(0,n.useEffect)((function(){t(p())}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("title",{children:"Your tasks"}),(0,f.jsx)("div",{children:e&&"Request in progress..."}),(0,f.jsx)("h3",{children:"contacts!"})]})}}}]);
//# sourceMappingURL=541.4118f51c.chunk.js.map
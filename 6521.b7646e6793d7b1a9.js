"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(P,c,i)=>{i.r(c),i.d(c,{ion_input_password_toggle:()=>e});var r=i(3649),l=i(4929),u=i(333),d=i(3992),p=i(6482);const e=(()=>{let a=class{constructor(s){(0,r.r)(this,s),this.togglePasswordVisibility=()=>{const{inputElRef:n}=this;n&&(n.type="text"===n.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(s){"text"===s||"password"===s||(0,l.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${s}" is not compatible.`,this.el)}connectedCallback(){const{el:s}=this,n=this.inputElRef=s.closest("ion-input");n?this.type=n.type:(0,l.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",s)}disconnectedCallback(){this.inputElRef=null}render(){var s,n;const{color:_,type:E}=this,g=(0,p.b)(this),I=null!==(s=this.showIcon)&&void 0!==s?s:d.x,C=null!==(n=this.hideIcon)&&void 0!==n?n:d.y,y="text"===E;return(0,r.h)(r.f,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:(0,u.c)(_,{[g]:!0})},(0,r.h)("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:g,color:_,fill:"clear",shape:"round","aria-checked":y?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:b=>{b.preventDefault()},onClick:this.togglePasswordVisibility},(0,r.h)("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:y?C:I})))}get el(){return(0,r.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};return a.style={ios:"",md:""},a})()},333:(P,c,i)=>{i.d(c,{c:()=>u,g:()=>p,h:()=>l,o:()=>h});var r=i(467);const l=(o,t)=>null!==t.closest(o),u=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(o).forEach(e=>t[e]=!0),t},f=/^[a-z][a-z0-9+\-.]*:/,h=function(){var o=(0,r.A)(function*(t,e,a,s){if(null!=t&&"#"!==t[0]&&!f.test(t)){const n=document.querySelector("ion-router");if(n)return null!=e&&e.preventDefault(),n.push(t,a,s)}return!1});return function(e,a,s,n){return o.apply(this,arguments)}}()}}]);
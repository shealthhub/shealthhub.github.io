"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8671],{8671:(T,p,i)=>{i.r(p),i.d(p,{Tab5PageModule:()=>M});var a=i(5150),c=i(177),u=i(4341),h=i(1307),d=i(8986),t=i(3953),m=i(1626);let f=(()=>{var e;class o{constructor(n){this.http=n,this.apiUrl="https://api.openai.com/v1/chat/completions"}getChatCompletion(n){const r=new m.Lr({"Content-Type":"application/json",Authorization:"Bearer "});return this.http.post(this.apiUrl,{model:"gpt-3.5-turbo",messages:[{role:"user",content:n}]},{headers:r})}}return(e=o).\u0275fac=function(n){return new(n||e)(t.KVO(m.Qq))},e.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),o})();const b=(e,o)=>({"user-message":e,"assistant-message":o});function C(e,o){if(1&e&&(t.j41(0,"div",11)(1,"p"),t.EFF(2),t.k0s()()),2&e){const s=o.$implicit;t.Y8G("ngClass",t.l_i(2,b,"user"===s.role,"assistant"===s.role)),t.R7$(2),t.JRh(s.content)}}const v=[{path:"",component:(()=>{var e;class o{constructor(n){this.openaiService=n,this.messages=[],this.userInput=""}sendPrompt(){this.userInput.trim()&&(this.messages.push({role:"user",content:this.userInput}),this.userInput="",this.openaiService.getChatCompletion(this.messages).subscribe(r=>{this.messages.push({role:"assistant",content:r.choices[0].message.content})},r=>{console.error("Error fetching chat completion:",r)}))}}return(e=o).\u0275fac=function(n){return new(n||e)(t.rXU(f))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-tab5"]],decls:17,vars:4,consts:[["side","end"],[3,"translucent"],["slot","start"],["slot","primary"],["alt","logo","src","assets/icon/scania.svg","height","40px",1,"logo"],["slot","secondary"],["id","container",3,"fullscreen"],[1,"chat-container"],[3,"ngClass",4,"ngFor","ngForOf"],["rows","3","placeholder","Enter your message",3,"ngModelChange","ngModel"],[3,"click"],[3,"ngClass"]],template:function(n,r){1&n&&(t.nrm(0,"ion-menu",0),t.j41(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-buttons",2),t.nrm(4,"ion-menu-button"),t.k0s(),t.j41(5,"ion-buttons",3),t.nrm(6,"img",4)(7,"ion-menu-button"),t.k0s(),t.j41(8,"ion-title",5),t.EFF(9," Scania Health Hub "),t.k0s()()(),t.j41(10,"ion-content",6)(11,"div",7),t.DNE(12,C,3,5,"div",8),t.k0s(),t.j41(13,"ion-item")(14,"ion-textarea",9),t.mxI("ngModelChange",function(g){return t.DH7(r.userInput,g)||(r.userInput=g),g}),t.k0s(),t.j41(15,"ion-button",10),t.bIt("click",function(){return r.sendPrompt()}),t.EFF(16,"Send"),t.k0s()()()),2&n&&(t.R7$(),t.Y8G("translucent",!0),t.R7$(9),t.Y8G("fullscreen",!0),t.R7$(2),t.Y8G("ngForOf",r.messages),t.R7$(2),t.R50("ngModel",r.userInput))},dependencies:[a.Jm,a.QW,a.W9,a.eU,a.uz,a.oS,a.MC,a.nc,a.BC,a.ai,a.Gw,c.YU,c.Sq,u.BC,u.vS],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: #041E42;--color: #fafafa;--border-width: 2px 0;--min-height: 66px}.chat-container[_ngcontent-%COMP%]{padding:15px}.user-message[_ngcontent-%COMP%]{text-align:right;background-color:#d4edda;padding:10px;border-radius:8px;margin-bottom:10px;align-self:flex-end}.assistant-message[_ngcontent-%COMP%]{text-align:left;background-color:#f8d7da;padding:10px;border-radius:8px;margin-bottom:10px;align-self:flex-start}ion-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}ion-textarea[_ngcontent-%COMP%]{flex:1;margin-right:10px}"]}),o})()}];let P=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[d.iI.forChild(v),d.iI]}),o})(),M=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[a.bv,c.MD,u.YN,h.S,P]}),o})()}}]);
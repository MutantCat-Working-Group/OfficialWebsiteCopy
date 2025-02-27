import{d as $,v as j,f as p,k as T,o as y,c as _,a as r,t as s,b as t,w as h,u,j as v,F as k,h as U,r as w,g as N,s as W,_ as D}from"./index-GugOsoPB.js";const E={style:{height:"35px",display:"flex","align-items":"center","justify-content":"center","margin-top":"5px"},class:"hidden-sm-and-down"},M={class:"apps"},S=["onClick"],F={class:"icon"},Q=["src"],A={class:"card__body"},B=$({__name:"List",setup(G){const V=j.useI18n(),{t:e}=V,i=p(""),d=p(""),c=p(""),m=p(""),I=p([{name:e("apps.ChangePrinter.ChangePrinter"),info:e("apps.ChangePrinter.ChangePrinterInfo"),icon:"https://s2.loli.net/2025/02/13/tDhysgvb5oGQqPT.png",url:"/software/changeprinter",platform:["Windows","Android"],framework:["x64","X32"],type:["办公软件","开发者工具"]},{name:e("apps.IPaperDoll.IPaperDoll"),info:e("apps.IPaperDoll.IPaperDollInfo"),icon:"https://s2.loli.net/2024/02/18/mLQZxGjneVrclOg.png",url:"/software/ipaperdoll",platform:["Android"],framework:["x86"],type:["办公软件","开发者工具"]},{name:e("apps.honeycombTools.honeycombTools"),info:e("apps.honeycombTools.honeycombToolsInfo"),icon:"https://s2.loli.net/2024/03/06/gTFN1fcst8QGeaZ.jpg",url:"/software/honeycomb",platform:["Windows"],framework:["x86"],type:["办公软件","开发者工具"]},{name:e("apps.UCatch.UCatch"),info:e("apps.UCatch.UCatchInfo"),icon:"https://s2.loli.net/2025/01/13/tQasPmZpRLgjud4.jpg",url:"/software/ucatch",platform:["Windows"],framework:["x64"],type:["办公软件","开发者工具"]},{name:e("apps.CloudStep.CloudStep"),info:e("apps.CloudStep.CloudStepInfo"),icon:"https://s2.loli.net/2024/03/17/o3R6NUMbxwEd1zQ.jpg",url:"/software/cloudstep",platform:["Windows","Linux"],framework:["x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.Echoes.Echoes"),info:e("apps.Echoes.EchoesInfo"),icon:"https://s2.loli.net/2024/04/05/xFopiS8CgBswb9y.jpg",url:"/software/echoes",platform:["Windows","Linux"],framework:["x86","x64"],type:["办公软件","开发者工具"]}]),b=p([]);function g(){b.value=I.value.filter(a=>{const o=m.value?a.name.includes(m.value):!0,n=d.value?a.platform.includes(d.value):!0,f=c.value?a.framework.includes(c.value):!0,x=i.value?a.type.includes(i.value):!0;return o&&n&&f&&x})}function P(){i.value="",d.value="",c.value="",m.value="",g()}return T(()=>{g()}),(a,o)=>{const n=w("el-option"),f=w("el-select"),x=w("el-input"),C=w("el-button");return y(),_(k,null,[r("div",E,[r("span",null,s(a.$t("reuse.type")),1),t(f,{placeholder:u(e)("reuse.type"),style:{width:"120px",margin:"0 15px"},modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=l=>i.value=l)},{default:h(()=>[t(n,{label:"办公软件",value:"办公软件"}),t(n,{label:"开发者工具",value:"开发者工具"})]),_:1},8,["placeholder","modelValue"]),v(" "+s(a.$t("reuse.platforms"))+" ",1),t(f,{placeholder:u(e)("reuse.platforms"),style:{width:"120px",margin:"0 15px"},modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=l=>d.value=l)},{default:h(()=>[t(n,{label:"Windows",value:"Windows"}),t(n,{label:"Android",value:"Android"}),t(n,{label:"Linux",value:"Linux"})]),_:1},8,["placeholder","modelValue"]),v(" "+s(a.$t("reuse.framework"))+" ",1),t(f,{placeholder:u(e)("reuse.framework"),style:{width:"120px",margin:"0 15px"},modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=l=>c.value=l)},{default:h(()=>[t(n,{label:"x86",value:"x86"}),t(n,{label:"x64",value:"x64"})]),_:1},8,["placeholder","modelValue"]),v(" "+s(a.$t("reuse.name"))+" ",1),t(x,{placeholder:u(e)("reuse.name"),style:{width:"120px",margin:"0 15px"},modelValue:m.value,"onUpdate:modelValue":o[3]||(o[3]=l=>m.value=l)},null,8,["placeholder","modelValue"]),t(C,{onClick:o[4]||(o[4]=l=>g())},{default:h(()=>[v(s(a.$t("reuse.filter")),1)]),_:1}),t(C,{onClick:o[5]||(o[5]=l=>P())},{default:h(()=>[v(s(a.$t("reuse.reset")),1)]),_:1})]),r("div",M,[(y(!0),_(k,null,U(b.value,(l,L)=>(y(),_("div",{class:"card app",key:L,onClick:Z=>u(N)(u(W)+l.url)},[r("div",F,[r("img",{style:{width:"80px",height:"80px","border-radius":"15px"},src:l.icon},null,8,Q)]),r("strong",null,s(l.name),1),r("div",A,s(l.info),1),r("span",null,s(a.$t("reuse.getNow")),1)],8,S))),128))])],64)}}}),q=D(B,[["__scopeId","data-v-1283cedf"]]);export{q as default};

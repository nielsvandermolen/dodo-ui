(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o["Dodo-UI"]={},o.Vue))})(this,function(o,n){"use strict";function a(){return{gapSizes:{0:0,xs:4,s:8,m:16,l:32,xl:64}}}var f="";const u=n.defineComponent({props:{gap:null,pad:null,column:{type:Boolean},grow:{type:Boolean},justify:null,align:null,wrap:{type:Boolean},background:null},setup(s){const t=s,{gapSizes:p}=a();function i(e){return e.split(" ").map(l=>(p[l]||"0")+"px").join(" ")}const r=n.computed(()=>{let e="";return t.gap&&(e+=`gap:${i(t.gap)};`),t.pad&&(e+=`padding:${i(t.pad)};`),t.column&&(e+="flex-flow:column;"),t.grow&&(e+="flex-grow:1;"),t.wrap&&(e+="flex-wrap:wrap;"),t.justify&&(e+=`justify-content:${t.justify};`),t.align&&(e+=`align-items:${t.align};`),t.background&&(e+=`background:${t.background};`),e});return(e,l)=>(n.openBlock(),n.createElementBlock("div",{class:"Flex",style:n.normalizeStyle(n.unref(r))},[n.renderSlot(e.$slots,"default")],4))}});var d="";const c=n.defineComponent({props:{column:null,gap:null},setup(s){const t=s,{gapSizes:p}=a();function i(e){return e.split(" ").map(l=>(p[l]||"0")+"px").join(" ")}const r=n.computed(()=>{let e="";return e+=`grid-template-columns: repeat(auto-fill, minmax(${t.column}, 1fr));`,t.gap&&(e+=`gap:${i(t.gap)};`),e});return(e,l)=>(n.openBlock(),n.createElementBlock("div",{class:"GridResponsive",style:n.normalizeStyle(n.unref(r))},[n.renderSlot(e.$slots,"default")],4))}});o.Flex=u,o.GridResponsive=c,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

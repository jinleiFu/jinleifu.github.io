"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[504],{5504:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var d=a(6252);const t={class:"area-container"};var r=a(2262);const n=(0,d.aZ)({props:{code:[Number,String]},setup(e,{emit:s}){const a=(0,r.qj)({addressOpt:[],address:[],cityCode:""});return(0,d.bv)((()=>{})),{...(0,r.BK)(a),addressChange:e=>{s("onChooseAddress",e)},getCityCodeSearchParents:()=>{cityCodeSearchParents(a.cityCode).then((e=>{getCityCodeAll(e.data,a.address,"code")}))}}}}),o=(0,a(3744).Z)(n,[["render",function(e,s,a,r,n,o){const c=(0,d.up)("a-cascader");return(0,d.wg)(),(0,d.iD)("div",t,[(0,d.Wm)(c,(0,d.dG)({value:e.address,"onUpdate:value":s[0]||(s[0]=s=>e.address=s),class:"form-ipt",options:e.addressOpt,placeholder:"请选择省市区"},e.$attrs,{onChange:e.addressChange}),null,16,["value","options","onChange"])])}]])}}]);
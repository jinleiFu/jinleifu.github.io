(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[554],{3692:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>F});var a=l(6252),o=l(3577);const i=e=>((0,a.dD)("data-v-798a7864"),e=e(),(0,a.Cn)(),e),n={class:"upload-excel"},s={class:"download-wrap"},c=i((()=>(0,a._)("div",{class:"icon-wrap"},[(0,a._)("img",{src:"/upload/download_icon.png",class:"icon"})],-1))),d={class:"content-wrap"},r=i((()=>(0,a._)("div",{class:"title"},"下载模版",-1))),p=i((()=>(0,a._)("div",{class:"tips"}," 为提高导入的成功率，请下载并使用系统提供的模版。 ",-1))),m=(0,a.Uk)(" 下载模版 "),u={class:"upload-wrap"},f=i((()=>(0,a._)("div",{class:"icon-wrap"},[(0,a._)("img",{src:"/upload/upload_icon.png",class:"icon"})],-1))),_={class:"content-wrap"},w=i((()=>(0,a._)("div",{class:"title"},"上传文件",-1))),v=i((()=>(0,a._)("div",{class:"tips"},"仅支持XLSX，XLS，CSV，文件大小≤4M。",-1))),x=(0,a.Uk)("选取文件"),y={class:"completed-wrap"},h=i((()=>(0,a._)("div",{class:"completed-item"},[(0,a._)("span",null,"导入成功："),(0,a._)("span",{class:"success"},"2"),(0,a._)("span",null,"条")],-1))),g=i((()=>(0,a._)("div",{class:"completed-item"},[(0,a._)("span",null,"导入失败："),(0,a._)("span",{class:"dander"},"1"),(0,a._)("span",null,"条")],-1))),b={class:"completed-item"},C={style:{display:"flex","align-items":"center"}},k=i((()=>(0,a._)("span",{style:{"margin-left":"12px"}},"导入完成",-1))),I=(0,a.Uk)(" 知道了 ");var S=l(2262),D=l(7869),U=l.n(D),E=l(7928),L=l(2610);const W=(0,a.aZ)({name:"UploadExcel",components:{CheckCircleFilled:L.Z},props:{visible:{type:Boolean,default:!1},action:{type:String,default:""},templateUrl:{type:String,default:""},columns:{type:Array,default:()=>[]},headerIndex:{type:Number,default:0},failedName:{type:String,default:"导入失败数据"}},setup(e,{emit:t}){const l=(0,S.qj)({importVisible:!1,loadingImport:!1,importCompleted:!1,excelList:[],excelData:[],failedExceData:[]});function o({columns:e=[],excelData:t=[],targetType:l="en"}={}){return t.map((t=>Object.entries(t).reduce(((t,a)=>{const[o,i]=a;let n="";return"en"===l?n=(e.find((e=>e.title===o))||{})?.key:"zh"===l&&(n=(e.find((e=>e.key===o))||{})?.title),n&&(t[n]=i),t}),{})))}function i(){l.excelList=[],l.importVisible=!1,t("update:visible",!1)}return(0,a.YP)((()=>e.visible),(e=>{l.importVisible=e})),{...(0,S.BK)(l),handleImport:async function(){const t=await(a=l.excelList[0],new Promise((t=>{const l=new FileReader;l.onload=l=>{const a=l.target.result,o=U().read(a,{type:"binary"}),i=o.SheetNames,n=o.Sheets[i[0]],s=U().utils.sheet_to_json(n,{range:e.headerIndex});t(s)},l.readAsBinaryString(a)})));var a;const n=o({columns:(0,S.IU)(e.columns),excelData:t,targetType:"en"});l.excelData=n,console.log("导入数据",n);const s=await async function(e){return new Promise((t=>{l.loadingImport=!0,setTimeout((()=>{i(),l.loadingImport=!1,l.importCompleted=!0,t(e.slice(2))}),1500)}))}(n);l.failedExceData=s,console.log("导入失败数据",s)},closeImportModel:i,downloadTemplate:function(){if(!e.templateUrl)return void E.Z.warning("暂无模板可供下载");const t=document.createElement("a");t.href=e.templateUrl,document.body.appendChild(t),t.click(),t.remove()},handleRemoveExcel:function(e){const t=l.excelList.indexOf(e);l.excelList.splice(t,1)},beforeUploadExcel:function(e){return l.excelList=[e],!1},downloadFailedData:function(){!function(t){const l={SheetNames:["Sheet1"],Sheets:{Sheet1:U().utils.json_to_sheet(t,{header:e.columns.map((e=>e.title))})}};U().writeFile(l,`${e.failedName}.xlsx`)}(o({columns:(0,S.IU)(e.columns),excelData:l.failedExceData,targetType:"zh"}))}}}}),F=(0,l(3744).Z)(W,[["render",function(e,t,l,i,S,D){const U=(0,a.up)("a-button"),E=(0,a.up)("a-upload"),L=(0,a.up)("a-modal"),W=(0,a.up)("CheckCircleFilled");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(L,{visible:e.importVisible,title:"导入数据",width:"432px",centered:"",onCancel:e.closeImportModel},{footer:(0,a.w5)((()=>[(0,a.Wm)(U,{type:"primary",style:{color:"#fff"},loading:e.loadingImport,disabled:0===e.excelList.length,onClick:e.handleImport},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.loadingImport?"导入中":"开始导入"),1)])),_:1},8,["loading","disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a._)("div",s,[c,(0,a._)("div",d,[r,p,(0,a.Wm)(U,{type:"primary",ghost:"",onClick:e.downloadTemplate},{default:(0,a.w5)((()=>[m])),_:1},8,["onClick"])])]),(0,a._)("div",u,[f,(0,a._)("div",_,[w,v,(0,a.Wm)(E,{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","file-list":e.excelList,remove:e.handleRemoveExcel,"before-upload":e.beforeUploadExcel},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{type:"primary",ghost:""},{default:(0,a.w5)((()=>[x])),_:1})])),_:1},8,["file-list","remove","before-upload"])])])])),_:1},8,["visible","onCancel"]),(0,a.Wm)(L,{visible:e.importCompleted,width:"317px",centered:"",closable:!1,onCancel:t[2]||(t[2]=()=>e.importCompleted=!1)},{title:(0,a.w5)((()=>[(0,a._)("div",C,[(0,a.Wm)(W,{style:{fontSize:"18px",color:"#17BE6B"}}),k])])),footer:(0,a.w5)((()=>[(0,a.Wm)(U,{type:"primary",style:{color:"#fff"},onClick:t[1]||(t[1]=()=>e.importCompleted=!1)},{default:(0,a.w5)((()=>[I])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("div",y,[h,g,(0,a._)("div",b,[(0,a._)("span",{class:"dander",style:{cursor:"pointer"},onClick:t[0]||(t[0]=(...t)=>e.downloadFailedData&&e.downloadFailedData(...t))}," 下载导入失败数据 ")])])])),_:1},8,["visible"])])}],["__scopeId","data-v-798a7864"]])},5382:()=>{},3201:()=>{},1219:()=>{}}]);
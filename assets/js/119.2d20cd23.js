(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[119],{7119:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>$});var a=n(6252),s=n(3577);const r={class:"snapshot-list-wrapper"},i={class:"range-picker-wrapper"},o={class:"table-wrapper"},u=["title"],l=["onClick"],h={class:"pagination-wrapper"};var d=n(7484),c=n.n(d),f=n(2262),p=n(2119),g=n(3232);const m=(0,a.aZ)({name:"SnapshotList",components:{CalendarOutlined:g.Z},props:{snapshotTmplType:{type:String,required:!0},snapshotDataId:{type:String,required:!0}},setup(t){const e=(0,p.tv)(),n=(0,f.qj)({logData:[],logLoading:!1,logTotal:0,snapshotComponent:"",snapshotData:{},search:{snapshotTmplType:t.snapshotTmplType,snapshotDataId:t.snapshotDataId,pageNum:1,pageSize:30,startTime:null,endTime:null},dates:[],datesValue:null});async function s(){n.logLoading=!0;try{const{data:t,total:e}=await snapshotList(n.search);n.logData=t,n.logTotal=e,n.logLoading=!1}catch(t){n.logLoading=!1}}return(0,a.YP)((()=>t.snapshotDataId),(t=>{t&&(n.search.pageNum=1,n.search.startTime=null,n.search.endTime=null,n.datesValue=null,n.search.snapshotDataId=t,s())}),{immediate:!0}),{...(0,f.BK)(n),handleChangeData:function(t,e){n.datesValue=t,n.search.startTime=e[0]?new Date(e[0]).getTime():null,n.search.endTime=e[1]?new Date(`${e[1]} 23:59:59`).getTime():null,n.search.pageNum=1,s()},getSnapshotList:s,disabledDate:function(t){if(!n.dates||0===n.dates.length)return!1;const e=t.diff(n.dates[0],"days");return Math.abs(e)>180},handleOpenChange:function(t){t&&(n.dates=[])},handleCalendarChange:function(t){n.dates=t},handleClickSnapshotId:function(t){const n=e.resolve(`/snapshot-details?snapshotId=${t}`);window.open(n.href)},dayjs:c()}}}),$=(0,n(3744).Z)(m,[["render",function(t,e,n,d,c,f){const p=(0,a.up)("CalendarOutlined"),g=(0,a.up)("a-range-picker"),m=(0,a.up)("a-table-column"),$=(0,a.up)("a-table"),D=(0,a.up)("pagination");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a.Wm)(g,{value:t.datesValue,"onUpdate:value":e[0]||(e[0]=e=>t.datesValue=e),format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"],disabledDate:t.disabledDate,onChange:t.handleChangeData,onOpenChange:t.handleOpenChange,onCalendarChange:t.handleCalendarChange},{suffixIcon:(0,a.w5)((()=>[(0,a.Wm)(p)])),_:1},8,["value","disabledDate","onChange","onOpenChange","onCalendarChange"])]),(0,a._)("div",o,[(0,a.Wm)($,{bordered:"","data-source":t.logData,pagination:!1,loading:t.logLoading,rowKey:"snapshotId"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"时间",align:"center",ellipsis:""},{default:(0,a.w5)((({record:e})=>[(0,a._)("span",null,(0,s.zw)(e.snapshotTime?t.dayjs(e.snapshotTime).format("YYYY-MM-DD HH:mm"):"-"),1)])),_:1}),(0,a.Wm)(m,{title:"操作人",align:"center",ellipsis:""},{default:(0,a.w5)((({record:t})=>[(0,a._)("span",{title:t.fullName+"("+t.mobileNumber+")"},[(0,a._)("span",null,(0,s.zw)(t.fullName||"-")+"(",1),(0,a._)("span",null,(0,s.zw)(t.mobileNumber||"-")+")",1)],8,u)])),_:1}),(0,a.Wm)(m,{align:"center",title:"操作",ellipsis:""},{default:(0,a.w5)((({record:t})=>[(0,a._)("span",null,(0,s.zw)(t.opTypeStr||"-"),1)])),_:1}),(0,a.Wm)(m,{title:"快照",align:"center"},{default:(0,a.w5)((({record:e})=>[(0,a._)("div",{style:{color:"#007aff",cursor:"pointer","white-space":"nowrap",overflow:"hidden"},onClick:n=>t.handleClickSnapshotId(e.snapshotId)},(0,s.zw)(e.snapshotId),9,l)])),_:1})])),_:1},8,["data-source","loading"]),(0,a._)("div",h,[(0,a.Wm)(D,{current:t.search.pageNum,"onUpdate:current":e[1]||(e[1]=e=>t.search.pageNum=e),size:"small",total:t.logTotal,"page-size":t.search.pageSize,onChange:t.getSnapshotList},null,8,["current","total","page-size","onChange"])])])])}],["__scopeId","data-v-300bfa30"]])},7484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",a="second",s="minute",r="hour",i="day",o="week",u="month",l="quarter",h="year",d="date",c="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},$={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(a,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(a,u),r=n-s<0,i=e.clone().add(a+(r?-1:1),u);return+(-(a+(n-s)/(r?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:o,d:i,D:d,h:r,m:s,s:a,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",w={};w[D]=g;var y=function(t){return t instanceof _},v=function(t,e,n){var a;if(!t)return D;if("string"==typeof t)w[t]&&(a=t),e&&(w[t]=e,a=t);else{var s=t.name;w[s]=t,a=s}return!n&&a&&(D=a),a||!n&&D},M=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},S=$;S.l=v,S.i=y,S.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function g(t){this.$L=v(t.locale,null,!0),this.parse(t)}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(f);if(a){var s=a[2]-1||0,r=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],s,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],s,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===c)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,l=!!S.u(e)||e,c=S.p(t),f=function(t,e){var a=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?a:a.endOf(i)},p=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,$=this.$D,D="set"+(this.$u?"UTC":"");switch(c){case h:return l?f(1,0):f(31,11);case u:return l?f(1,m):f(0,m+1);case o:var w=this.$locale().weekStart||0,y=(g<w?g+7:g)-w;return f(l?$-y:$+(6-y),m);case i:case d:return p(D+"Hours",0);case r:return p(D+"Minutes",1);case s:return p(D+"Seconds",2);case a:return p(D+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,l=S.p(t),c="set"+(this.$u?"UTC":""),f=(o={},o[i]=c+"Date",o[d]=c+"Date",o[u]=c+"Month",o[h]=c+"FullYear",o[r]=c+"Hours",o[s]=c+"Minutes",o[a]=c+"Seconds",o[n]=c+"Milliseconds",o)[l],p=l===i?this.$D+(e-this.$W):e;if(l===u||l===h){var g=this.clone().set(d,1);g.$d[f](p),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[S.p(t)]()},m.add=function(n,l){var d,c=this;n=Number(n);var f=S.p(l),p=function(t){var e=M(c);return S.w(e.date(e.date()+Math.round(t*n)),c)};if(f===u)return this.set(u,this.$M+n);if(f===h)return this.set(h,this.$y+n);if(f===i)return p(1);if(f===o)return p(7);var g=(d={},d[s]=t,d[r]=e,d[a]=1e3,d)[f]||1,m=this.$d.getTime()+n*g;return S.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var a=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),r=this.$H,i=this.$m,o=this.$M,u=n.weekdays,l=n.months,h=function(t,n,s,r){return t&&(t[n]||t(e,a))||s[n].substr(0,r)},d=function(t){return S.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:h(n.monthsShort,o,l,3),MMMM:h(l,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:S.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,i,!0),A:f(r,i,!1),m:String(i),mm:S.s(i,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return a.replace(p,(function(t,e){return e||g[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,c){var f,p=S.p(d),g=M(n),m=(g.utcOffset()-this.utcOffset())*t,$=this-g,D=S.m(this,g);return D=(f={},f[h]=D/12,f[u]=D,f[l]=D/3,f[o]=($-m)/6048e5,f[i]=($-m)/864e5,f[r]=$/e,f[s]=$/t,f[a]=$/1e3,f)[p]||$,c?D:S.a(D)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return w[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=v(t,e,!0);return a&&(n.$L=a),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),C=_.prototype;return M.prototype=C,[["$ms",n],["$s",a],["$m",s],["$H",r],["$W",i],["$M",u],["$y",h],["$D",d]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,_,M),t.$i=!0),M},M.locale=v,M.isDayjs=y,M.unix=function(t){return M(1e3*t)},M.en=w[D],M.Ls=w,M.p={},M}()}}]);
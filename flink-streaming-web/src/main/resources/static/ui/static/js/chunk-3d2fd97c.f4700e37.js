(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d2fd97c"],{"0fe7":function(e,t,r){},"8a53":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],class:"fl-jartask-container fl-task-edit"+(e.isReadOnly?" fl-task-edit__isRead":"")},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"返回",placement:"right"}},[r("i",{ref:"backbutton",staticClass:"el-icon-d-arrow-left fl-back",on:{click:function(t){return e.handleBack()}}})]),r("el-form",{ref:"taskform",attrs:{model:e.form,rules:e.rules,disabled:e.isReadOnly,"label-width":"100px",size:"small"}},["history"===e.params.flag?r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"版本号",prop:"version"}},[r("el-input",{model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"备份时间",prop:"createTime","label-width":"100px"}},[r("el-input",{attrs:{value:e.formatDateTime(e.form.createTime)}})],1)],1)],1):e._e(),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"任务编号",prop:"id"}},[r("el-input",{attrs:{placeholder:"任务编号",disabled:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:22}},[r("el-form-item",{attrs:{label:"运行配置",prop:"flinkRunConfig"}},[r("el-input",{attrs:{placeholder:"请输入任务提交所需的资源参数如： -p 2  -Dtaskmanager.numberOfTaskSlots=2 -Dyarn.application.queue=default"},model:{value:e.form.flinkRunConfig,callback:function(t){e.$set(e.form,"flinkRunConfig",t)},expression:"form.flinkRunConfig"}})],1)],1),r("el-col",{attrs:{span:2}},[r("el-form-item",{attrs:{label:"参数说明","label-width":"100px"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("a",{staticStyle:{color:"blue"},attrs:{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/config/",target:"_blank"}},[e._v("参数说明")]),r("el-popover",{attrs:{placement:"right",trigger:"hover"}},["LOCAL"===e.form.deployModeEnum?[e._v(" 在LOCAL模式下无需配置 ")]:"YARN_PER"===e.form.deployModeEnum||"YARN_APPLICATION"===e.form.deployModeEnum?[e._v(" 参数如 ： -p 2 -Dyarn.application.queue=default -Dtaskmanager.numberOfTaskSlots=2 -Djobmanager.memory.process.size=1024m -Dtaskmanager.memory.process.size=2048m ")]:"STANDALONE"===e.form.deployModeEnum?[e._v(" -d,--detached 如果存在，则以分离模式运行作业"),r("br"),e._v(" -p,--parallelism <parallelism> 运行程序的并行性。用于覆盖配置中指定的默认值的可选标志"),r("br"),e._v(" -s,--fromSavepoint <savepointPath> 从savepointPath中恢复任务(如：-s hdfs:///flink/savepoint-1537)"),r("br"),e._v(" 其他运行参数可通过 flink -h查看 ")]:[e._v(" 请选择运行模式 ")],r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})],2)],1)])],1)],1),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"任务名称",prop:"jobName"}},[r("el-input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.form.jobName,callback:function(t){e.$set(e.form,"jobName",t)},expression:"form.jobName"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"主类名",prop:"customMainClass"}},[r("el-input",{attrs:{placeholder:"如：com.test.DemoTest"},model:{value:e.form.customMainClass,callback:function(t){e.$set(e.form,"customMainClass",t)},expression:"form.customMainClass"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"任务描述",prop:"jobDesc"}},[r("el-input",{attrs:{placeholder:"请输入任务描述"},model:{value:e.form.jobDesc,callback:function(t){e.$set(e.form,"jobDesc",t)},expression:"form.jobDesc"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"Jar包地址",prop:"customJarUrl"}},[r("el-input",{attrs:{placeholder:"如：http://ccblog.cn/xx.jar 或者 xxx.jar"},model:{value:e.form.customJarUrl,callback:function(t){e.$set(e.form,"customJarUrl",t)},expression:"form.customJarUrl"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",[r("a",{staticStyle:{color:"red"},attrs:{href:"#/flink/jarManage/index",target:"_blank"}},[e._v("点击jar管理")])])],1)],1),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"运行模式",prop:"deployModeEnum"}},[r("el-select",{staticClass:"fl-form-item",attrs:{placeholder:"请选择运行模式"},model:{value:e.form.deployModeEnum,callback:function(t){e.$set(e.form,"deployModeEnum",t)},expression:"form.deployModeEnum"}},[r("el-option",{attrs:{label:"Local Cluster",value:"LOCAL"}}),r("el-option",{attrs:{label:"Standalone Cluster",value:"STANDALONE"}}),r("el-option",{attrs:{label:"YARN PER",value:"YARN_PER"}}),r("el-option",{attrs:{label:"YARN APPLICATION",value:"YARN_APPLICATION"}})],1)],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"运行参数",prop:"customArgs"}},[r("el-input",{attrs:{placeholder:"如：--xxTestParma 100"},model:{value:e.form.customArgs,callback:function(t){e.$set(e.form,"customArgs",t)},expression:"form.customArgs"}})],1)],1)],1),r("el-row",{staticClass:"fl-alarm-row"},[r("el-col",{attrs:{xs:16,sm:16,md:14,lg:12}},[r("el-form-item",{attrs:{label:"告警配置",prop:"alarmTypes"}},[r("el-checkbox-group",{model:{value:e.form.alarmTypes,callback:function(t){e.$set(e.form,"alarmTypes",t)},expression:"form.alarmTypes"}},[r("el-checkbox",{attrs:{label:1}},[e._v("钉钉告警")]),r("el-checkbox",{attrs:{label:2}},[e._v("Http回调告警")]),r("el-checkbox",{attrs:{label:3}},[e._v("任务退出自动拉起")])],1)],1)],1),r("el-col",{attrs:{xs:4,sm:4,md:5,lg:6}},[r("el-form-item",{attrs:{label:"开启状态"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66",disabled:""},model:{value:e.form.isOpen,callback:function(t){e.$set(e.form,"isOpen",t)},expression:"form.isOpen"}})],1)],1),r("el-col",{attrs:{xs:4,sm:4,md:5,lg:6}},[r("el-form-item",{attrs:{label:"运行状态"}},[-2===e.form.status||"UNKNOWN"===e.form.status?r("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):-1===e.form.status||"FAIL"===e.form.status?r("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):0===e.form.status||"STOP"===e.form.status?r("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):1===e.form.status||"RUN"===e.form.status?r("el-tag",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):2===e.form.status||"STARTING"===e.form.status?r("el-tag",{attrs:{size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):3===e.form.status||"SUCCESS"===e.form.status?r("el-tag",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):r("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))])],1)],1)],1),!1===e.isReadOnly?r("el-row",{staticClass:"fl-button-row"},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitTask()}}},[e._v("提 交")])],1)],1)],1):e._e()],1)],1)},s=[],o=(r("ac1f"),r("5319"),r("a15b"),r("b199")),n={name:"JarTask",data:function(){return{loading:!1,params:{flag:"",data:{},context:""},isReadOnly:!1,form:{id:"",jobName:"",jobDesc:"",jobType:1,deployModeEnum:"",flinkRunConfig:"",flinkSql:"",alarmTypes:[],customArgs:"",customMainClass:"",customJarUrl:"",isOpen:"",status:""},rules:{jobName:[{required:!0,message:"请输入任务名称",trigger:"blur"}],jobDesc:[{required:!0,message:"请输入任务描述",trigger:"blur"}],deployModeEnum:[{required:!0,message:"请选择运行模式",trigger:"blur"}],customMainClass:[{required:!0,message:"请输入主类名",trigger:"blur"}],customJarUrl:[{required:!0,message:"请输入Jar包地址",trigger:"blur"}]}}},mounted:function(){var e=this.$route.params;this.params.flag=e.flag,this.params.context=e.context,this.params.data=e.data;var t=e.data;this.isReadOnly=!("create"===e.flag||"update"===e.flag),this.form.id=t.id?t.id:"",this.form.jobName=t.jobName?t.jobName:"",this.form.jobDesc=t.jobDesc?t.jobDesc:"",this.form.jobType=t.jobTypeEnum?this.getJobType(t.jobTypeEnum):0,this.form.deployModeEnum=t.deployModeEnum?t.deployModeEnum:"",this.form.flinkRunConfig=t.flinkRunConfig?t.flinkRunConfig:"",this.form.alarmTypes=t.alarmTypes?t.alarmTypes:[],this.form.customArgs=t.customArgs?t.customArgs:"",this.form.customMainClass=t.customMainClass?t.customMainClass:"",this.form.customJarUrl=t.customJarUrl?t.customJarUrl:"",this.form.isOpen=t.isOpen?t.isOpen:"",this.form.status=t.status?t.status:"",this.form.version=t.version?t.version:"",this.form.createTime=t.createTime?t.createTime:""},methods:{handleBack:function(){var e="history"===this.params.flag?"HistoryTask":"FlinkTaskManage";this.$router.replace({name:e,params:this.params.context})},submitTask:function(){var e=this;this.$refs.taskform.validate((function(t){if(!t)return!1;var r=e.form.jobName,a=e.form.alarmTypes.join(","),s={id:e.form.id,jobName:e.form.jobName,jobDesc:e.form.jobDesc,deployMode:e.form.deployModeEnum,flinkRunConfig:e.form.flinkRunConfig,jobType:e.form.jobType,alarmTypes:a,customArgs:e.form.customArgs,customMainClass:e.form.customMainClass,customJarUrl:e.form.customJarUrl,extJarPath:e.form.extJarPath};s.id||"create"!==e.params.flag?s.id&&"update"===e.params.flag&&Object(o["f"])(s).then((function(t){e.loading=!1;var a=t.code,s=(t.data,t.success),o=t.message;"200"===a&&s?(e.$message({type:"success",message:"修改任务[".concat(r,"]成功！")}),e.$refs.backbutton.click()):e.$message({type:"error",message:o||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)})):Object(o["a"])(s).then((function(t){e.loading=!1;var a=t.code,s=(t.data,t.success),o=t.message;"200"===a&&s?(e.$message({type:"success",message:"新增任务[".concat(r,"]成功！")}),e.$refs.backbutton.click()):e.$message({type:"error",message:o||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)}))}))},formatDateTime:function(e){return this.dayjs(e).format("YYYY-MM-DD HH:mm:ss")},getStatusDesc:function(e){switch(e){case-2:return"未知";case-1:return"失败";case 0:return"停止";case 1:return"运行中";case 2:return"启动中";case 3:return"提交成功";case"UNKNOWN":return"未知";case"FAIL":return"失败";case"STOP":return"停止";case"RUN":return"运行中";case"STARTING":return"启动中";case"SUCCESS":return"提交成功";default:return e+"　"}},getJobType:function(e){switch(e){case"SQL_STREAMING":return 0;case"SQL_BATCH":return 2;case"JAR":return 1;default:return e}}}},l=n,i=(r("cb61"),r("2877")),c=Object(i["a"])(l,a,s,!1,null,"342aee86",null);t["default"]=c.exports},b199:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"i",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"l",(function(){return c})),r.d(t,"m",(function(){return u})),r.d(t,"k",(function(){return m})),r.d(t,"j",(function(){return f})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return d})),r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return g})),r.d(t,"f",(function(){return h})),r.d(t,"g",(function(){return y}));var a=r("b775"),s=r("4328"),o=r.n(s);function n(e,t,r,s,n,l,i){return Object(a["a"])({url:"/listTask",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{pageNum:e,pageSize:t,jobName:r,jobId:s,jobType:n,status:l,open:i}})}function l(e){return Object(a["a"])({url:"/open",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function i(e){return Object(a["a"])({url:"/close",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function c(e){return Object(a["a"])({url:"/start",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function u(e){return Object(a["a"])({url:"/stop",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function m(e,t){return Object(a["a"])({url:"/start",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e,savepointId:t}})}function f(e){return Object(a["a"])({url:"/savepoint",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function p(e){return Object(a["a"])({url:"/copyConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function d(e){return Object(a["a"])({url:"/delete",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{id:e}})}function b(e){return Object(a["a"])({url:"/checkfSql",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:{flinkSql:e}})}function g(e){return Object(a["a"])({url:"/addConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:e})}function h(e){return Object(a["a"])({url:"/editConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:e})}function y(e){return Object(a["a"])({url:"/jobConfigHistoryPage",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return o.a.stringify(e)}],data:e})}},cb61:function(e,t,r){"use strict";r("0fe7")}}]);
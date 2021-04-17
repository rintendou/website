(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{558:function(t,e,a){},618:function(t,e,a){"use strict";var o=a(558);a.n(o).a},635:function(t,e,a){"use strict";a.r(e);a(172),a(299);var o=a(557),n=a.n(o),s={data:function(){return{loading:!1,successDialogVisible:!1,convertedBackupData:{filename:"",text:[],noConverted:[]}}},methods:{sendRequest:function(t){var e=this;console.log("Sending the backup to the server"),console.log("Tachiyomi backup:"),console.log(t.file);var a=new FormData;a.append("backupFile",t.file,t.file.name);var o={url:"https://convert.stormcloud.host",method:"POST",timeout:0,mimeType:"multipart/form-data",contentType:!1,processData:!1,data:a};console.log("Settings:"),console.log(o),this.$data.loading=!0,n()(o).then((function(t){console.log("Success"),console.log(t);var a=(new Date).toDateString()+"-PaperbackConversion.json";e.$data.convertedBackupData.filename=a,e.$data.convertedBackupData.text=t.data.paperbackBackup,e.$data.convertedBackupData.noConverted=t.data.noConvert,console.log("Filename:",e.$data.convertedBackupData.filename,"Paperback backup:",e.$data.convertedBackupData.text,"Unresolved items:",e.$data.convertedBackupData.noConverted),e.$data.successDialogVisible=!0,e.$data.loading=!1}),(function(t){console.log("Error"),console.log(t.response.data),e.$alert(t.response.data,"The conversion failed",{confirmButtonText:"Cancel",type:"warning"}).then((function(){e.$message({type:"error",message:"Conversion failed"})})),e.$data.loading=!1})),this.$refs.upload.clearFiles()},downloadData:function(){var t=document.createElement("a");t.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.$data.convertedBackupData.text))),t.setAttribute("download",this.$data.convertedBackupData.filename),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},c=(a(618),a(38)),i=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("ElDialog",{attrs:{title:"Successful backup conversion",visible:t.successDialogVisible,center:"",width:"80%"},on:{"update:visible":function(e){t.successDialogVisible=e}}},[a("div",{staticClass:"downloadBackup"},[a("ElButton",{attrs:{type:"primary",plain:""},on:{click:t.downloadData}},[t._v("Download Paperback backup "),a("i",{staticClass:"el-icon-download"})])],1),t._v(" "),0!=t.convertedBackupData.noConverted.length?a("div",[a("p",[t._v("\n\t\t\t\tThe conversion was successful but\n\t\t\t\t"+t._s(t.convertedBackupData.noConverted.length)+" items could not\n\t\t\t\tbe resolved\n\t\t\t")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Source Id")]),t._v(" "),a("th",[t._v("Manga Title")])])]),t._v(" "),a("tbody",t._l(t.convertedBackupData.noConverted,(function(e){return a("tr",{key:e.sourceId},[a("td",{staticClass:"sourceID"},[t._v(t._s(e.sourceId))]),t._v(" "),a("td",[t._v(t._s(e.mangaTitle))])])})),0)])]):t._e()]),t._v(" "),t._m(0),t._v(" "),a("ElUpload",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"upload",staticClass:"upload-backup",attrs:{drag:"",action:"#","http-request":t.sendRequest}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("\n\t\t\tDrop backup here or "),a("em",[t._v("click to upload")])]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n\t\t\tUpload a Tachiyomi "),a("code",[t._v(".proto.gz")]),t._v(" backup\n\t\t")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"instruction"},[this._v("Provide a Tachiyomi "),e("code",[this._v(".gz")]),this._v(" Backup")])}],!1,null,null,null);e.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"/qKq":function(a,e,t){"use strict";t("07d7"),t("FZtP"),t("FNk8");var r=t("LvDl"),l=t.n(r),s=t("oVt+"),o=t("sove"),n=t("R5cT"),i=t("KaE5"),d=t("AeMN"),u=t("JtJI"),c=t("GUe+"),p=t("mwM1"),m=t("Ed67"),b=t("giZP"),g=t("Snq/"),f=t.n(g),_={components:{BOverlay:p.a,BRow:s.a,BCol:o.a,BForm:m.a,BFormGroup:b.a,BFormInput:n.a,vSelect:f.a},props:{form:{type:Object,required:!0},data:{required:!0},ref_gelar_depan:{type:Array,required:!0},ref_gelar_belakang:{type:Array,required:!0},ref_dudi:{type:Array,required:!0},loading_modal:{type:Boolean,default:function(){return!1}},isAsesor:{type:Boolean,default:function(){return!1}}}},h=t("KHd+"),w=Object(h.a)(_,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"danger"}},[t("b-form",{on:{submit:function(e){return e.preventDefault(),a.handleSubmit(e)}}},[a.data?t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Nama Lengkap","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.nama_lengkap,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Gelar Depan","label-cols-md":"3"}},[t("v-select",{attrs:{multiple:"",options:a.ref_gelar_depan,reduce:function(a){return a.gelar_akademik_id},label:"kode",placeholder:"== Pilih Gelar Depan =="},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n              Tidak ada data untuk ditampilkan\n            ")]}}],null,!1,1385440287),model:{value:a.form.gelar_depan,callback:function(e){a.$set(a.form,"gelar_depan",e)},expression:"form.gelar_depan"}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Gelar Belakang","label-cols-md":"3"}},[t("v-select",{attrs:{multiple:"",options:a.ref_gelar_belakang,reduce:function(a){return a.gelar_akademik_id},label:"kode",placeholder:"== Pilih Gelar Depan =="},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n              Tidak ada data untuk ditampilkan\n            ")]}}],null,!1,1385440287),model:{value:a.form.gelar_belakang,callback:function(e){a.$set(a.form,"gelar_belakang",e)},expression:"form.gelar_belakang"}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"NUPTK","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.nuptk,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"NIP","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.nip,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"NIK","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.nik,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Jenis Kelamin","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:"L"==a.data.jenis_kelamin?"Laki-laki":"Perempuan",disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Tempat Lahir","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.tempat_lahir,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Tanggal Lahir","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.tanggal_lahir_indo,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Agama","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.agama_id?a.data.agama.nama:"",disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Alamat","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.alamat,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"RT","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.rt,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"RW","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.rw,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Desa/Kelurahan","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.desa_kelurahan,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Kecamatan","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.kecamatan,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Kodepos","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.kode_pos,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Telp/HP","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.no_hp,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Email","label-cols-md":"3"}},[t("b-form-input",{attrs:{value:a.data.email,disabled:""}})],1)],1),a._v(" "),a.isAsesor?t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"DUDI","label-cols-md":"3"}},[t("v-select",{attrs:{options:a.ref_dudi,reduce:function(a){return a.dudi_id},label:"nama",placeholder:"== Pilih DUDI =="},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n              Tidak ada data untuk ditampilkan\n            ")]}}],null,!1,1385440287),model:{value:a.form.dudi_id,callback:function(e){a.$set(a.form,"dudi_id",e)},expression:"form.dudi_id"}})],1)],1):a._e()],1):a._e()],1)],1)}),[],!1,null,null,null).exports,k={components:{BRow:s.a,BCol:o.a,BFormInput:n.a,BTable:i.a,BSpinner:d.a,BPagination:u.a,BButton:c.a,BOverlay:p.a,DetilPtk:w,vSelect:f.a},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},meta:{required:!0},isBusy:{type:Boolean,default:function(){return!0}},isAsesor:{type:Boolean,default:function(){return!1}}},data:function(){return{loading:!1,loading_modal:!1,sortBy:null,sortDesc:!1,judul:null,guru_id:"",data:null,form:{gelar_depan:[],gelar_belakang:[],dudi_id:""},ref_gelar_depan:[],ref_gelar_belakang:[],ref_dudi:[]}},watch:{sortBy:function(a){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})},sortDesc:function(a){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})}},methods:{detil:function(a){var e=this;this.loading=!0,this.guru_id=a.guru_id,this.$http.post("/guru/detil",{guru_id:this.guru_id,sekolah_id:a.sekolah_id,asesor:this.isAsesor}).then((function(a){e.loading=!1;var t=a.data;console.log(t),e.data=t.guru;var r=[];t.guru.gelar_depan.forEach((function(a,e){r.push(a.gelar_akademik_id)}));var l=[];t.guru.gelar_belakang.forEach((function(a,e){l.push(a.gelar_akademik_id)})),e.form.gelar_depan=r,e.form.gelar_belakang=l,e.ref_gelar_depan=t.ref_gelar_depan,e.ref_gelar_belakang=t.ref_gelar_belakang,e.ref_dudi=t.ref_dudi,e.form.dudi_id=t.dudi_id,e.judul="DETIL "+t.guru.nama_lengkap,e.$refs["detil-modal"].show()}))},handleOk:function(a){a.preventDefault(),this.handleSubmit()},handleSubmit:function(){var a=this;this.loading_modal=!0,this.$http.post("/guru/update",{guru_id:this.guru_id,gelar_depan:this.form.gelar_depan,gelar_belakang:this.form.gelar_belakang,sekolah_id:this.user.sekolah_id,dudi_id:this.form.dudi_id,asesor:this.isAsesor}).then((function(e){a.loading_modal=!1;var t=e.data;a.$swal({icon:t.icon,title:t.title,text:t.text,customClass:{confirmButton:"btn btn-success"}}).then((function(e){a.$refs["detil-modal"].hide(),a.loadPerPage(a.meta.per_page)}))}))},loadPerPage:function(a){this.$emit("per_page",this.meta.per_page)},changePage:function(a){this.$emit("pagination",a)},search:l.a.debounce((function(a){this.$emit("search",a)}),500)}},v=(t("eJjg"),Object(h.a)(k,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("b-row",[t("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[t("v-select",{attrs:{options:[10,25,50,100],clearable:!1,searchable:!1},on:{input:a.loadPerPage},model:{value:a.meta.per_page,callback:function(e){a.$set(a.meta,"per_page",e)},expression:"meta.per_page"}})],1),a._v(" "),t("b-col",{attrs:{md:"4","offset-md":"4"}},[t("b-form-input",{attrs:{placeholder:"Cari data..."},on:{input:a.search}})],1)],1),a._v(" "),t("b-overlay",{attrs:{show:a.loading,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"warning"}},[t("b-table",{attrs:{responsive:"",bordered:"",striped:"",items:a.items,fields:a.fields,"sort-by":a.sortBy,"sort-desc":a.sortDesc,"show-empty":"",busy:a.isBusy},on:{"update:sortBy":function(e){a.sortBy=e},"update:sort-by":function(e){a.sortBy=e},"update:sortDesc":function(e){a.sortDesc=e},"update:sort-desc":function(e){a.sortDesc=e}},scopedSlots:a._u([{key:"empty",fn:function(e){return[t("p",{staticClass:"text-center"},[a._v("Tidak ada data untuk ditampilkan")])]}},{key:"table-busy",fn:function(){return[t("div",{staticClass:"text-center text-danger my-2"},[t("b-spinner",{staticClass:"align-middle"}),a._v(" "),t("strong",[a._v("Loading...")])],1)]},proxy:!0},{key:"cell(ttl)",fn:function(e){return[a._v("\n        "+a._s(e.item.tempat_lahir)+", "+a._s(e.item.tanggal_lahir_indo)+"\n      ")]}},{key:"cell(actions)",fn:function(e){return[t("b-button",{attrs:{variant:"warning",size:"sm"},on:{click:function(t){return a.detil(e.item)}}},[a._v("Detil")])]}}])})],1),a._v(" "),t("b-row",{staticClass:"mt-2"},[t("b-col",{attrs:{md:"6"}},[t("p",[a._v("Menampilkan "+a._s(a.meta.from?a.meta.from:0)+" sampai "+a._s(a.meta.to)+" dari "+a._s(a.meta.total)+" entri")])]),a._v(" "),t("b-col",{attrs:{md:"6"}},[t("b-pagination",{attrs:{"total-rows":a.meta.total,"per-page":a.meta.per_page,align:"right","aria-controls":"dw-datatable"},on:{change:a.changePage},model:{value:a.meta.current_page,callback:function(e){a.$set(a.meta,"current_page",e)},expression:"meta.current_page"}})],1)],1),a._v(" "),t("b-modal",{ref:"detil-modal",attrs:{size:"lg",title:a.judul,"ok-title":"Simpan","cancel-title":"Tutup"},on:{ok:a.handleOk},scopedSlots:a._u([{key:"modal-footer",fn:function(e){var r=e.ok,l=e.cancel;return[t("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"secondary"}},[t("b-button",{on:{click:function(a){return l()}}},[a._v("Tutup")])],1),a._v(" "),t("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"primary"}},[t("b-button",{attrs:{variant:"primary"},on:{click:function(a){return r()}}},[a._v("Perbaharui")])],1)]}}])},[t("detil-ptk",{attrs:{data:a.data,loading_modal:a.loading_modal,ref_gelar_depan:a.ref_gelar_depan,ref_gelar_belakang:a.ref_gelar_belakang,form:a.form,isAsesor:a.isAsesor,ref_dudi:a.ref_dudi}})],1)],1)}),[],!1,null,null,null));e.a=v.exports},"3ERt":function(a,e,t){"use strict";t.r(e);t("rB9j"),t("hByQ");var r=t("IF94"),l=t("/qKq"),s={components:{BCard:r.a,Datatable:l.a},data:function(){return{isAsesor:!1,isBusy:!0,fields:[{key:"nama_lengkap",label:"Nama",sortable:!0,thClass:"text-center"},{key:"jenis_kelamin",label:"L/P",sortable:!0,thClass:"text-center",tdClass:"text-center"},{key:"ttl",label:"Tempat, Tanggal Lahir",sortable:!1,thClass:"text-center"},{key:"email",label:"Email",sortable:!0,thClass:"text-center"},{key:"actions",label:"Aksi",sortable:!1,thClass:"text-center",tdClass:"text-center"}],items:[],meta:{},current_page:1,per_page:10,search:"",sortBy:"nama",sortByDesc:!1}},created:function(){this.loadPostsData()},methods:{handleEvent:function(){this.loadPostsData()},loadPostsData:function(){var a=this;this.isBusy=!0;var e=this.current_page;this.$http.get("/guru",{params:{jenis_gtk:"guru",user_id:this.user.user_id,sekolah_id:this.user.sekolah_id,semester_id:this.user.semester.semester_id,periode_aktif:this.user.semester.nama,page:e,per_page:this.per_page,q:this.search,sortby:this.sortBy,sortbydesc:this.sortByDesc?"DESC":"ASC"}}).then((function(e){var t=e.data.data;a.isBusy=!1,a.items=t.data,a.meta={total:t.total,current_page:t.current_page,per_page:t.per_page,from:t.from,to:t.to,role_id:a.role_id,roles:e.data.roles}}))},handlePerPage:function(a){this.per_page=a,this.loadPostsData()},handlePagination:function(a){this.current_page=a,this.loadPostsData()},handleSearch:function(a){this.search=a,this.loadPostsData()},handleSort:function(a){a.sortBy&&(this.sortBy=a.sortBy,this.sortByDesc=a.sortDesc,this.loadPostsData())}}},o=t("KHd+"),n=Object(o.a)(s,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-card",[t("datatable",{attrs:{isAsesor:a.isAsesor,isBusy:a.isBusy,items:a.items,fields:a.fields,meta:a.meta},on:{per_page:a.handlePerPage,pagination:a.handlePagination,search:a.handleSearch,sort:a.handleSort}})],1)}),[],!1,null,null,null);e.default=n.exports},"61sx":function(a,e,t){var r=t("JPst"),l=t("nm7J");(e=r(!1)).i(l),e.push([a.i,"[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),a.exports=e},"6wC5":function(a,e,t){var r=t("61sx");"string"==typeof r&&(r=[[a.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,l);r.locals&&(a.exports=r.locals)},eJjg:function(a,e,t){"use strict";t("6wC5")}}]);
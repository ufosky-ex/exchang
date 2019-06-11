define("static/front/dist/script/page_otc",["./module_validator","./module_swal","./module_effect","./module_tpl","./module_utils","./module_table","./module_core","./module_ajax"],function(require,exports){function getCurrencyByCountry(flag){var currency=$("#countryCode")[0].options[$("#countryCode")[0].selectedIndex].getAttribute("currency");$("#chooseCurrency").select2("val",currency),$("#peggingPriceUnit").length>0&&$("#peggingPriceUnit").text(currency+"/"+$("input[name=coin]:checked").val())}function getPayMethodByCountry(){$.ajax({type:"POST",url:BASE_PATH+"/ad/ajaxGetPayMethod",data:"country="+$("#countryCode").val(),success:function(data){var topPayList=data.topPayList,countryPayList=data.countryPayList,otherPayList=data.otherPayList,code=new String(""),list=code.split(","),paymethod=$("#countryPayMethod .chosen-select");paymethod.html("");var html="";if(topPayList.length>0){var topLength=topPayList.length>=3?3:topPayList.length;for(html+="<optgroup label='热门'>",i=0;i<topLength;i++)html+="<option  value='"+topPayList[i].payCode+"' name='"+topPayList[i].name+"'>"+topPayList[i].name+"</option>";html+="</optgroup>"}if(countryPayList.length>0){for(html+="<optgroup  label='支持'>",i=0;i<countryPayList.length;i++)html+=list.length>0&&list.indexOf(countryPayList[i].payCode)>-1?"<option selected='selected'  value='"+countryPayList[i].payCode+"' name='"+countryPayList[i].name+"'>"+countryPayList[i].name+"</option>":"<option  value='"+countryPayList[i].payCode+"' name='"+countryPayList[i].name+"'>"+countryPayList[i].name+"</option>";html+="</optgroup>"}if(otherPayList.length>0){for(html+="<optgroup  label='其他'>",i=0;i<otherPayList.length;i++)html+=list.length>0&&list.indexOf(otherPayList[i].payCode)>-1?"<option selected='selected' value='"+otherPayList[i].payCode+"' name='"+otherPayList[i].name+"'>"+otherPayList[i].name+"</option>":"<option  value='"+otherPayList[i].payCode+"' name='"+otherPayList[i].name+"'>"+otherPayList[i].name+"</option>";html+="</optgroup>"}paymethod.append(html),paymethod.trigger("liszt:updated"),paymethod.chosen()}})}function currencyChange(id){var currency=$("#"+id).select2("val"),digitCurrency=$("input[name=coin]:checked").val();document.getElementById("peggingPriceUnit").innerText=currency+"/"+digitCurrency,$(".digitCurrencySpan").html(digitCurrency),$(".currency-type").html(currency)}function index(){effect.select2(),core.list({url:BASE_PATH+"/otc/ad/"+_default.coin+"/4/0"}).then(function(data1){tpl.render({tplId:"#buyTpl",renderId:"#buyRender",data:data1})}),core.list({url:BASE_PATH+"/otc/ad/"+_default.coin+"/4/1"}).then(function(data1){tpl.render({tplId:"#sellTpl",renderId:"#sellRender",data:data1})})}function loadAd(){function actionFormatter(value,row,index){var actions=new Array,handler="";return 0==row.otcType&&(handler='<div class="pull-right "><a class="btn btn-info btn-xs " href="/otc/info/'+row.id+'" ><i class="fa fa-edit"></i>购买'+row.coin+"</a>"),1==row.otcType&&(handler='<div class="pull-right "><a class="btn btn-info btn-xs " href="/otc/info/'+row.id+'" ><i class="fa fa-edit"></i>出售'+row.coin+"</a>"),actions.push(handler),actions.join("")}var conf={url:BASE_PATH+"/otc/findAdList",columns:[{field:"userNick",title:"用户",formatter:function(value,row,index){return' <a href="/otc/user/'+row.userId+'"><img class="user-head img-circle" style="width: 40px;height: 40px" src='+FILE_PATH+row.userAvatar+' alt=""></a><a href="/otc/user/'+row.userId+'">   '+value+'</a><span class="state ONLINE"></span>'}},{field:"trustNum",align:"center",title:"信用",formatter:function(value,row,index){return"<span>交易笔数:"+row.exchangeNum+"笔</span> | <span>信任人数:"+row.trustNum+"人</span>"}},{field:"payType",align:"center",title:"付款方式"},{field:"minMoney",align:"center",title:"限额",formatter:function(value,row,index){return"<span>"+value+"</span> - <span>"+row.maxMoney+"</span>  "+row.currency}},{field:"price",title:"价格",align:"right",formatter:function(value,row,index){return value+" "+row.currency}},{title:"操作",align:"center",formatter:actionFormatter}]};table.initTable($("#table"),conf)}function list(){loadAd(),effect.select2(),$("#countryCode").change(function(){getCurrencyByCountry(!0)}),core.list({url:BASE_PATH+"/otc/coins"}).then(function(data){tpl.render({tplId:"#coinsTpl",renderId:"#coinsRender",data:data}),effect.select2(),loadAd()})}function add(){effect.select2(),$("#chooseCurrency").change(function(){currencyChange("chooseCurrency")}),$("#countryCode").change(function(){getCurrencyByCountry(!0),getPayMethodByCountry()}),core.list({url:BASE_PATH+"/otc/coins"}).then(function(data){tpl.render({tplId:"#coinsTpl",renderId:"#coinsRender",data:data}),getCurrencyByCountry(!1),$(".coin_def").length>0&&($("input:radio[name='coin'][value='"+$(".coin_def").val()+"']").prop("checked","checked"),currencyChange("chooseCurrency")),$("input:radio[name=coin]").change(function(){currencyChange("chooseCurrency")})}),formSubmit()}function user(){function actionFormatter(value,row,index){var actions=new Array,handler="";return 0==row.otcType&&(handler='<div class="pull-right "><a class="btn btn-info btn-xs " href="/otc/info/'+row.id+'" ><i class="fa fa-edit"></i>购买'+row.coin+"</a>"),1==row.otcType&&(handler='<div class="pull-right "><a class="btn btn-info btn-xs " href="/otc/info/'+row.id+'" ><i class="fa fa-edit"></i>出售'+row.coin+"</a>"),actions.push(handler),actions.join("")}var uId=$("#uId").val();core.get({url:BASE_PATH+"/member/user/findBaseInfo/"+uId}).then(function(data){return tpl.render({tplId:"#userTpl",renderId:"#userRender",data:data.data}),data});var conf={url:BASE_PATH+"/otc/findAdList",columns:[{field:"userNick",title:"用户",formatter:function(value,row,index){return' <a href="#"><img class="user-head img-circle" style="width: 40px;height: 40px" src='+FILE_PATH+row.userAvatar+' alt=""></a><a href="">   '+value+'</a><span class="state ONLINE"></span>'}},{field:"trustNum",align:"center",title:"信用",formatter:function(value,row,index){return"<span>交易笔数:"+row.exchangeNum+"笔</span> | <span>信任人数:"+row.trustNum+"人</span>"}},{field:"payType",align:"center",title:"付款方式"},{field:"minMoney",align:"center",title:"限额",formatter:function(value,row,index){return"<span>"+value+"</span> - <span>"+row.maxMoney+"</span>  "+row.currency}},{field:"price",title:"价格",align:"right",formatter:function(value,row,index){return value+" "+row.currency}},{title:"操作",align:"center",formatter:actionFormatter}]};table.initTable($("#table"),conf)}function userProject(){function actionFormatter(value,row,index){var actions=new Array,status="";switch(row.status){case 0:status='<div class="pull-right "><button class="open"><i class="fa fa fa-eye"></i>发布</button>';break;case 1:status='<div class="pull-right "><a class="cancel" href="javascript:void(0)" ><i class="fa fa-eye-slash"></i>关闭</a>'}var edit='<div class="pull-right "><a class="edit" href="javascript:void(0)" ><i class="fa fa-edit"></i>修改</a>',remove='<div class="pull-right "><a class="remove" href="javascript:void(0)" ><i class="fa fa-trash-o"></i>删除</a>';return actions.push(edit),actions.push(status),actions.push(remove),actions.join("")}window.operateEvents={"click .edit":function(e,value,row,index){window.location.href="/otc/user/project/update/"+row.id},"click .open":function(e,value,row,index){core.save({url:BASE_PATH+"/otc/user/project/check",data:{id:row.id}}).then(function(data){if(data.success)swal.swalBase(data.msg,"","success");else{var errInfo="";void 0!=data.data&&(errInfo=data.data.join("")),swal.swalError(data.msg,errInfo)}}).fail(function(jqXHR,textStatus){swal.swalError(textStatus,jqXHR.status),_option.callback({},form)})},"click .cancel":function(e,value,row,index){core.save({url:BASE_PATH+"/otc/user/project/cancel",data:{id:row.id}}).then(function(data){if(data.success)swal.swalBase(data.msg,"","success");else{var errInfo="";void 0!=data.data&&(errInfo=data.data.join("")),swal.swalError(data.msg,errInfo)}}).fail(function(jqXHR,textStatus){swal.swalError(textStatus,jqXHR.status),_option.callback({},form)})},"click .remove":function(e,value,row,index){var ids=new Array;ids.push(row.id),core.save({url:BASE_PATH+"/otc/user/project/remove",data:{ids:row.id}}).then(function(data){if(data.success)swal.swalBase(data.msg,"","success");else{var errInfo="";void 0!=data.data&&(errInfo=data.data.join("")),swal.swalError(data.msg,errInfo)}}).fail(function(jqXHR,textStatus){swal.swalError(textStatus,jqXHR.status),_option.callback({},form)})}};var conf={url:BASE_PATH+"/otc/user/projectData",columns:[{field:"projectNum",align:"center",title:"广告编号"},{field:"otcType",align:"center",title:"广告类型",formatter:function(value,row,index){var type="";return 0==row.otcType&&(type="出售"),1==row.otcType&&(type="购买"),type+"("+row.coin+")"}},{field:"country",align:"center",title:"国家"},{field:"price",title:"价格",align:"right",formatter:function(value,row,index){return value+" "+row.currency}},{field:"payType",align:"center",title:"付款方式"},{field:"minMoney",align:"center",title:"限额",formatter:function(value,row,index){return"<span>"+value+"</span> - <span>"+row.maxMoney+"</span>  "+row.currency}},{field:"status",align:"center",title:"状态",formatter:function(value,row,index){switch(value){case 0:return"未发布";case 1:return"已发布";case 2:return"已完成";case 3:return"已关闭"}}},{field:"createTime",align:"center",title:"创建时间",formatter:function(value,row,index){return U.dateFormat(value,"yyyy-MM-dd")}},{title:"操作",align:"center",events:operateEvents,formatter:actionFormatter}]};table.initTable($("#table"),conf)}function userOrder(){function actionFormatter(value,row,index){var actions=new Array,currentStatus=$("#status").val(),cancel='<div class="pull-right "><a class="cancel" href="javascript:void(0)" >取消</a>',paySucess='<div class="pull-right "><a class="paySucess" href="javascript:void(0)" >已付款</a>',orderSuccess='<div class="pull-right "><a class="orderSuccess" href="javascript:void(0)" >已完成</a>';return 0==currentStatus&&(actions.push(cancel),actions.push(paySucess)),1==currentStatus&&actions.push(orderSuccess),actions.join("")}$("#order_search").find("li>a").each(function(e){$(this).on("click",function(){$("#order_search").find("li>a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var status=$(this).attr("data-status");$("#status").val(status),table.refresh($("#table"))})});var conf={url:BASE_PATH+"/otc/order/user/listData",columns:[{field:"orderNum",align:"center",title:"订单编号"},{field:"orderType",align:"center",title:"类型",formatter:function(value,row,index){var type="";return 0==value&&(type="出售"),1==value&&(type="购买"),type+"（"+row.orderCoin+"）"}},{field:"projectUserNick",align:"center",title:"交易对象",formatter:function(value,row,index){return"<a class='text-info' href='/otc/user/"+row.projectUserId+"'>"+value+"</a>"}},{field:"orderCount",title:"数量",align:"right",formatter:function(value,row,index){return value}},{field:"orderMoney",align:"right",title:"金额",formatter:function(value,row,index){return value+" "+row.currency}},{field:"orderFee",align:"right",title:"手续费"},{field:"createTime",align:"center",title:"创建时间",formatter:function(value,row,index){return U.dateFormat(value,"yyyy-MM-dd")}},{field:"orderRemarkNum",align:"center",title:"付款参考号"},{title:"操作",align:"center",formatter:actionFormatter}]};table.initTable($("#table"),conf)}function info(){var adId=$("#adId").val();core.list({url:BASE_PATH+"/otc/infoData/"+adId}).then(function(data){return data.userAuth=core.isLogin(),tpl.render({tplId:"#infoTpl",renderId:"#infoRender",data:data}),orderFormSubmit(),data}).then(function(data){core.get({url:BASE_PATH+"/member/user/findBaseInfo/"+data.userId}).then(function(data){tpl.render({tplId:"#userTpl",renderId:"#userRender",data:data.data})})})}function orderFormSubmit(){var rules={rules:{projectId:{required:!0,maxlength:64,number:!0},orderType:{required:!0,maxlength:5,number:!0},orderCoin:{required:!0,maxlength:30},currency:{required:!0,maxlength:30},orderMoney:{required:!0,maxlength:20,number:!0},orderCount:{required:!0,maxlength:20,number:!0}},messages:{}};mVad({forms:$(".form"),tip:".form_tip",rules:rules,postData:function(data){return data},formSubmit:function(_option,form){core.save(_option.ajaxData).then(function(data){if(data.success)swal.swalBase(data.msg,"","success");else{var errInfo="";void 0!=data.data&&(errInfo=data.data.join("")),swal.swalError(data.msg,errInfo)}_option.callback(data,form)}).fail(function(jqXHR,textStatus){swal.swalError(textStatus,jqXHR.status),_option.callback({},form)})}})}function formSubmit(){var rules={rules:{otcType:{required:!0,maxlength:5,number:!0},coin:{required:!0,maxlength:30},country:{required:!0,maxlength:50},currency:{required:!0,maxlength:30},price:{required:!0,maxlength:20,number:!0},exchangeName:{required:!0,maxlength:50},overflowMoney:{maxlength:20,number:!0},payType:{required:!0,maxlength:30},payRemarks:{maxlength:255},transaction:{maxlength:255},maxMoney:{maxlength:20,number:!0},minMoney:{maxlength:20,number:!0},status:{maxlength:5,number:!0},adress:{maxlength:255}},messages:{}};mVad({forms:$(".form"),tip:".form_tip",rules:rules,postData:function(data){var fixed=$("#fixed").val(),automatic=$("#automatic").val(),belived=$("#belived").val(),security=$("#security").val();return data.push({name:"fixed",value:"on"==fixed?1:0}),data.push({name:"automatic",value:"on"==automatic?1:0}),data.push({name:"belived",value:"on"==belived?1:0}),data.push({name:"security",value:"on"==security?1:0}),data},formSubmit:function(_option,form){core.save(_option.ajaxData).then(function(data){if(data.success)swal.swalBase(data.msg,"","success");else{var errInfo="";void 0!=data.data&&(errInfo=data.data.join("")),swal.swalError(data.msg,errInfo)}_option.callback(data,form)}).fail(function(jqXHR,textStatus){swal.swalError(textStatus,jqXHR.status),_option.callback({},form)})}})}function userFinance(){core.list({url:BASE_PATH+"/otc/user/financeData"}).then(function(data){tpl.render({tplId:"#financeTpl",renderId:"#financeRender",data:data.data})})}function recharge(){core.list({url:BASE_PATH+"/otc/coins"}).then(function(data){tpl.render({tplId:"#coinsTpl",renderId:"#coinsRender",data:data})})}function deposit(){}function init(){}var _default={coin:"BTC"},mVad=require("./module_validator"),swal=require("./module_swal"),effect=require("./module_effect"),tpl=require("./module_tpl"),table=require("./module_table"),U=require("./module_utils"),core=require("./module_core");exports.list=list,exports.init=init,exports.add=add,exports.index=index,exports.info=info,exports.user=user,exports.userProject=userProject,exports.userOrder=userOrder,exports.userFinance=userFinance,exports.recharge=recharge,exports.deposit=deposit}),function(window){var BitValidator=function(options){var load_btn=null,_default={forms:null,beforeSend:function(_form){},process:null,rules:{},beforeValidation:function(){},beforeSubmit:function(_form){var _btn=_form.find(":submit");load_btn=Ladda.create(_btn[0]),load_btn.start(),_btn.prop("disabled",!0)},formSubmit:null,callback:function(_data,_form){var _btn=_form.find(":submit");load_btn.stop(),_btn.prop("disabled",!1)},single:null,changes:null,ignoreHidden:!0,ajaxPost:!0,ajaxError:null,ajaxData:null,instant:!1,postData:null,tip:"",is_focus:!0,dataType:{}},_option=$.extend(_default,options),_form=$(options.forms),_init={fn_init:function(obj){var _submit=obj.find(":submit");_submit.prop("disabled")&&!_submit.data("disabled")&&_submit.prop("disabled",!1),_option.beforeSend&&_option.beforeSend(obj),_option.rules.errorPlacement=function(error,element){element.next().length>0?error.insertAfter(element.parent("div")):error.insertAfter(element)},obj.validate(_option.rules),obj.find(":reset").click(function(){obj.validate().resetForm()}),obj.submit(function(e){if(e.preventDefault(),_option.beforeValidation&&_option.beforeValidation($(this)),!obj.validate(_option.rules).form())return!1;var isBeforeSubmit=_option.beforeSubmit&&_option.beforeSubmit($(this));return isBeforeSubmit!==!1&&(_option.ajaxPost?(_init.fn_ajax($(this)),!1):void 0)})},fn_ajax:function(obj){var _url,_data,_method;_url=obj.attr("action"),_method=obj.attr("method")||"post",_data=_option.postData?_option.postData(obj.serializeArray()):obj.serializeArray();var _async=!0;1==obj.attr("data-async")&&(_async=!1),_option.ajaxData={data:_data,url:_url,type:_method,async:_async},_option.formSubmit(_option,obj)}};_form&&_form.length>0&&_form.each(function(){var _this=$(this);_init.fn_init(_this)})};"function"==typeof define?define("static/front/dist/script/module_validator",[],function(){return BitValidator}):"undefined"!=typeof exports?module.exports=BitValidator:window.BitValidator=BitValidator}(window),define("static/front/dist/script/module_swal",[],function(require,exports,module){function swalBase(title,text,state){swal({title:title,text:text,type:void 0===state?"":state})}function swalSuccess(title,text){swal({title:title,text:text,type:"success"})}function swalError(title,text){swal({title:title,text:text,type:"error"})}function swalWarning(title,text){swal({title:title,text:text,type:"warning"})}function swalConfirm(title,text,confirmButtonText,callback){swal({title:void 0===title?"确认该操作吗?":title,text:void 0===text?"":text,type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:void 0===confirmButtonText?"确认":confirmButtonText,closeOnConfirm:!1},callback)}exports.swalBase=swalBase,exports.swalSuccess=swalSuccess,exports.swalError=swalError,exports.swalWarning=swalWarning,exports.swalConfirm=swalConfirm}),define("static/front/dist/script/module_effect",[],function(require,exports,module){module.exports={piechart:function(){var _container=jQuery(".piechart");_container.length>0&&jQuery(".piechart").each(function(){var _t=jQuery(this),_size=_t.attr("data-size")||150,_animate=_t.attr("data-animate")||"3000";_t.easyPieChart({size:_size,animate:_animate,scaleColor:!1,trackColor:_t.attr("data-trackcolor")||"rgba(0,0,0,0.04)",lineWidth:_t.attr("data-width")||"2",lineCap:"square",barColor:_t.attr("data-color")||"#0093BF"}),jQuery("*",this).attr("style","line-height:"+_size+"px !important; height:"+_size+"px !important; width:"+_size+"px !important")})},countTo:function(){jQuery(".countTo").appear(function(){var _t=jQuery(this),_from=_t.attr("data-from")||0,_speed=_t.attr("data-speed")||1300,_refreshInterval=_t.attr("data-refreshInterval")||60;_t.countTo({from:parseInt(_from),to:_t.html(),speed:parseInt(_speed),refreshInterval:parseInt(_refreshInterval)})})},countDown:function(){var _container=jQuery(".countdown"),_container2=jQuery(".countdown-download");(_container.length>0||_container2.length>0)&&(_container.each(function(){var _t=jQuery(this),_date=_t.attr("data-from"),_labels=_t.attr("data-labels");if(_labels&&(_labels=_labels.split(",")),_date){var _d=new Date(_date);jQuery(this).countdown({until:new Date(_d),labels:_labels||["Years","Months","Weeks","Days","Hours","Minutes","Seconds"]})}}),_container2.bind("click",function(e){e.preventDefault();var _t=jQuery(this),cd_container=_t.attr("data-for"),_countdown=jQuery("#"+cd_container+" span.download-wait>.countdown"),_seconds=parseInt(_t.attr("data-seconds")),_dataURL=_t.attr("href");return _t.fadeOut(250,function(){jQuery("#"+cd_container).fadeIn(250,function(){var currentDate=new Date;currentDate.setSeconds(currentDate.getSeconds()+_seconds),_countdown.countdown({until:currentDate,format:"S",expiryUrl:_dataURL,onExpiry:function(){jQuery("#"+cd_container+" span.download-message").removeClass("hide"),jQuery("#"+cd_container+" span.download-wait").addClass("hide")}})})}),!1}))},toggle:function(){var previewParClosedHeight=25;jQuery("div.toggle.active > p").addClass("preview-active"),jQuery("div.toggle.active > div.toggle-content").slideDown(400),jQuery("div.toggle > label").click(function(e){var parentSection=jQuery(this).parent(),parentWrapper=jQuery(this).parents("div.toggle"),previewPar=!1,isAccordion=parentWrapper.hasClass("toggle-accordion");if(isAccordion&&"undefined"!=typeof e.originalEvent&&parentWrapper.find("div.toggle.active > label").trigger("click"),parentSection.toggleClass("active"),parentSection.find("> p").get(0)){previewPar=parentSection.find("> p");var previewParCurrentHeight=previewPar.css("height"),previewParAnimateHeight=previewPar.css("height");previewPar.css("height","auto"),previewPar.css("height",previewParCurrentHeight)}var toggleContent=parentSection.find("> div.toggle-content");parentSection.hasClass("active")?(jQuery(previewPar).animate({height:previewParAnimateHeight},350,function(){jQuery(this).addClass("preview-active")}),toggleContent.slideDown(350)):(jQuery(previewPar).animate({height:previewParClosedHeight},350,function(){jQuery(this).removeClass("preview-active")}),toggleContent.slideUp(350))})},pickers:function(callBack){var _container_1=jQuery(".datepicker");_container_1.length>0&&jQuery().datepicker&&_container_1.each(function(){var _t=jQuery(this),_lang=_t.attr("data-lang")||"en";jQuery(this).datepicker({format:_t.attr("data-format")||"yyyy-mm-dd",language:_lang,rtl:"true"==_t.attr("data-RTL"),changeMonth:"false"!=_t.attr("data-changeMonth"),todayBtn:"false"!=_t.attr("data-todayBtn")&&"linked",calendarWeeks:"false"!=_t.attr("data-calendarWeeks"),autoclose:"false"!=_t.attr("data-autoclose"),todayHighlight:"false"!=_t.attr("data-todayHighlight"),onRender:function(date){}}).on("changeDate",function(ev){}).data("datepicker")});var _container_2=jQuery(".rangepicker");_container_2.length>0&&jQuery().datepicker&&_container_2.each(function(){var _t=jQuery(this),_format=_t.attr("data-format").toUpperCase()||"YYYY-MM-DD";_t.daterangepicker({format:_format,startDate:_t.attr("data-from"),endDate:_t.attr("data-to"),ranges:{Today:[moment(),moment()],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()]}},function(start,end,label){callBack&&callBack(start.format("YYYY-MM-DD"),end.format("YYYY-MM-DD"))})});var _container_3=jQuery(".timepicker");_container_3.length>0&&jQuery().timepicki&&_container_3.timepicki()},select2:function(){var _container=jQuery("select.select2");_container.length>0&&_container.each(function(){var _t=jQuery(this);_t.hasClass("select2-custom")||_t.select2()})},bgimage:function(){var _t=jQuery("section[data-background], section div[data-background]");_t.length>0&&jQuery(_t).each(function(){var _this=jQuery(this),data_background=_this.attr("data-background")||"";if(""!=data_background){var data_background_delay=_this.attr("data-background-delay")||3e3,data_background_fade=_this.attr("data-background-fade")||750,_db=data_background.split(","),_db=data_background.replace(" ","").split(",");_db[1]?_this.backstretch(_db,{duration:parseInt(data_background_delay),fade:parseInt(data_background_fade)}):_this.backstretch(_db),jQuery(".bs-next",_this).bind("click",function(e){e.preventDefault(),_this.data("backstretch").next()}),jQuery(".bs-prev",_this).bind("click",function(e){e.preventDefault(),_this.data("backstretch").prev()}),jQuery(window).resize(function(){window.afterResizeBkstr&&clearTimeout(window.afterResizeBkstr),window.afterResizeBkstr=setTimeout(function(){_this.data("backstretch").next()},350)})}});var data_background=jQuery("body").attr("data-background")||"";""!=data_background&&data_background&&(jQuery.backstretch(data_background),jQuery("body").addClass("transparent"))},toastr:function(options){var _default={title:"",content:"",type:"info",closeButton:!1,progressBar:!0,showMethod:"slideDown",positionClass:"toast-top-center",timeOut:3e3},_option=$.extend(_default,options);toastr.options=_option,debugger,"success"==_option.type?toastr.success(_option.title,_option.content):"warning"==_option.type?toastr.warning(_option.title,_option.content):"error"==_option.type?toastr.error(_option.title,_option.content):"info"==_option.type&&toastr.info(_option.title,_option.content)},sliderFull:function(){_headerHeight=0,jQuery("#header").hasClass("transparent")||jQuery("#header").hasClass("translucent")?_headerHeight=0:(_headerHeight=jQuery("#header").outerHeight()||0,jQuery("#topBar").length>0&&(_topBarHeight=jQuery("#topBar").outerHeight()||0,_headerHeight+=_topBarHeight)),_screenHeight=jQuery(window).height()-_headerHeight,jQuery(".banner-bottom-menu").length>0&&(_screenHeight-=jQuery(".banner-bottom-menu").height()),jQuery("#header").hasClass("static")&&(_screenHeight=jQuery(window).height()),jQuery("#slider").hasClass("halfheight")&&jQuery("#slider.halfheight").height(_screenHeight/2),jQuery("#slider").hasClass("thirdheight")&&jQuery("#slider.thirdheight").height(_screenHeight/1.5),jQuery("#slider").hasClass("fullheight")&&(jQuery("#slider.fullheight").height(_screenHeight),jQuery("#slider.fullheight-min").css({"min-height":_screenHeight+"px"})),window.width<960&&jQuery("#slider.mobile-fullheight").height(_screenHeight)},afterResize:function(){jQuery(window).resize(function(){window.afterResizeApp&&clearTimeout(window.afterResizeApp),window.afterResizeApp=setTimeout(function(){window.width=jQuery(window).width(),window.height=jQuery(window).height(),jQuery(".flexslider").length>0&&jQuery(".flexslider").resize()},300)})}}}),define("static/front/dist/script/module_tpl",["static/front/dist/script/module_utils"],function(require,exports,module){function render(options){var op=options||{},tpl=$.templates(op.tplId);tpl.link(op.renderId,op.data),helpers()}function helpers(){$.views.helpers({formatterIcon:function(icon){if(icon.match(/^fa /))return icon.replace("fa ","")},strNewLine:function(str,chr){return null!=str?U.replaceAll(str,chr,"<br>"):""},formatDate:function(date,format){return U.dateFormat(date,format)}})}var U=require("static/front/dist/script/module_utils");exports.render=render}),define("static/front/dist/script/module_utils",[],function(require,exports,module){module.exports={strContains:function(str,substr){return new RegExp(substr).test(str)},replaceAll:function(str,chr,newChar){return str.replace(new RegExp(chr,"gm"),newChar)},strSubstring:function(s,l,r){var replace="",len=l?l:30,value=s?s:"",length=value.length;return length&&length>len&&(length=len,replace=r?r:"..."),"<span title ='"+s+"'>"+value.substring(0,length)+replace+"</span>"},timer:function(countdown,btn){var _this=btn;_this.attr("disabled","true"),_this.html(countdown+"秒后重新获取");var timer=setInterval(function(){0==countdown?(clearInterval(timer),_this.removeAttr("disabled"),_this.html("重新发送验证码")):(countdown--,_this.html(countdown+"秒后重新获取"))},1e3)},dateFormat:function(date,format){var d=new Date(date),zeroize=function(value,length){length||(length=2),value=String(value);for(var i=0,zeros="";i<length-value.length;i++)zeros+="0";return zeros+value};return format.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g,function($0){switch($0){case"d":return d.getDate();case"dd":return zeroize(d.getDate());case"ddd":return["Sun","Mon","Tue","Wed","Thr","Fri","Sat"][d.getDay()];case"dddd":return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()];case"M":return d.getMonth()+1;case"MM":return zeroize(d.getMonth()+1);case"MMM":return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];case"MMMM":return["January","February","March","April","May","June","July","August","September","October","November","December"][d.getMonth()];case"yy":return String(d.getFullYear()).substr(2);case"yyyy":return d.getFullYear();case"h":return d.getHours()%12||12;case"hh":return zeroize(d.getHours()%12||12);case"H":return d.getHours();case"HH":return zeroize(d.getHours());case"m":return d.getMinutes();case"mm":return zeroize(d.getMinutes());case"s":return d.getSeconds();case"ss":return zeroize(d.getSeconds());case"l":return zeroize(d.getMilliseconds(),3);case"L":var m=d.getMilliseconds();return m>99&&(m=Math.round(m/10)),zeroize(m);case"tt":return d.getHours()<12?"am":"pm";case"TT":return d.getHours()<12?"AM":"PM";case"Z":return d.toUTCString().match(/[A-Z]+$/);default:return $0.substr(1,$0.length-2)}})},getUrlParameter:function(name,parent){void 0===parent&&(parent=!1);var r,reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");return r=parent?window.parent.location.search.substr(1).match(reg):window.location.search.substr(1).match(reg),null!=r?unescape(r[2]):null},windowsUrlInfo:function(){var info={hash:window.location.hash,host:window.location.host,hostname:window.location.hostname,href:window.location.href,pathname:window.location.pathname,port:window.location.port,protocol:window.location.protocol,search:window.location.search};return info}}}),define("static/front/dist/script/module_table",["static/front/dist/script/module_swal","static/front/dist/script/module_core","static/front/dist/script/module_ajax","static/front/dist/script/module_effect","static/front/dist/script/module_utils"],function(require,exports,module){var swal=require("static/front/dist/script/module_swal"),core=require("static/front/dist/script/module_core");module.exports={getIdSelects:function(table){return $.map(table.bootstrapTable("getSelections"),function(row){return row.id})},refresh:function(table){var $table=table;$table.bootstrapTable("refresh")},initTable:function(table,conf){function remove(_option){var op=_option||{};core.remove({url:op.url,data:{ids:op.ids},type:"POST"}).then(function(data){var successList=data.data;if(data.success){for(var id in successList);$table.bootstrapTable("refresh"),swal.swalBase(data.msg,"","success")}})}function getIdSelects(){return $.map($table.bootstrapTable("getSelections"),function(row){return row.id})}function queryParams(params){var params={page:params.page,pageSize:params.pageSize,sortName:params.sort,sortOrder:params.order};return $(".paramsPanel").find("input[name]").each(function(){params[$(this).attr("name")]=$(this).val()}),$(".paramsPanel").find("select[name]").each(function(){params[$(this).attr("name")]=$(this).val()}),params}var _default={toggle:"table",showRefresh:!1,showExport:!1,minimumCountColumns:"2",pagination:!0,pageList:"[10, 25, 50, 100, ALL]",showFooter:!1,sidePagination:"server",queryParams:queryParams,url:"",removeCallBack:remove,callBack:null,removeUrl:""},$table=table,$remove=$("button.remove"),$search=$(".search"),_conf=$.extend(_default,conf);$search.click(function(){$table.bootstrapTable("refresh")}),$table.on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table",function(){$remove.prop("disabled",!$table.bootstrapTable("getSelections").length),$(".btn-disable").prop("disabled",!$table.bootstrapTable("getSelections").length)}),$table.on("load-success.bs.table",function(e,arg1,arg2){}),$remove.on("click",function(){var ids=getIdSelects($table);ids.length>0?swal.swalConfirm("确认删除吗?","","确认删除",function(){_conf.removeCallBack({ids:ids,url:_conf.removeUrl}),$remove.prop("disabled",!0)}):swal.swalError("请选择删除项","")}),$table.bootstrapTable(_conf)}}}),define("static/front/dist/script/module_core",["static/front/dist/script/module_ajax","static/front/dist/script/module_effect","static/front/dist/script/module_utils"],function(require,exports,module){function isLogin(){return!$.isEmptyObject(GLOBAL.user)}function hasPermission(permission){return U.strContains(Global.perm,permission)}function error(data){if(void 0!=data&&(data.code="401.1")){var timeOut=3e3;E.toastr({title:timeOut/1e3+"秒后跳转到登录页...",content:data.msg}),setTimeout(function(){window.location.href=data.data},timeOut)}}function loadPage(options,fn){var op=options||{};$(op.container).html(op.loading).load(op.loadUrl,function(response,status,xhr){if(response.startsWith("{")){var data=JSON.parse(response);error(data)}op.callBack&&(options.data?op.callBack(options.data):op.callBack()),fn&&fn()})}function save(options){var Fn,op=options||{};return Fn=new A({url:op.url,data:op.data,type:"POST",datatype:op.datatype,processData:op.processData,contentType:op.contentType},function(data){var _code=data.code;switch(_code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})}function remove(options){var Fn,op=options||{};
return Fn=new A({url:op.url,data:op.data,type:op.type},function(data){var _code=data.code;switch(_code){case"loading":$("#"+op.msg).html("删除中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})}function list(options){var Fn,op=options||{};return Fn=new A({url:op.url,data:op.data,type:op.type},function(data){var _code=data.code;switch(_code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})}function get(options){var Fn,op=options||{};return Fn=new A({url:op.url,data:op.data,type:"GET"},function(data){var _code=data.code;switch(_code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})}function post(options){var Fn,op=options||{};return Fn=new A({url:op.url,data:op.data,type:"POST"},function(data){var _code=data.code;switch(_code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})}var A=require("static/front/dist/script/module_ajax"),E=require("static/front/dist/script/module_effect"),U=require("static/front/dist/script/module_utils");exports.loadPage=loadPage,exports.save=save,exports.remove=remove,exports.list=list,exports.get=get,exports.post=post,exports.hasPermission=hasPermission,exports.isLogin=isLogin}),function(){var HbAjax=function(options,callback){function ABeforeSend(){callback&&callback({code:"loading",msg:"loading"})}function ACallback(data){"401.1"==data.code||"401.2"==data.code?callback&&callback({code:"error",msg:"操作异常",data:data}):callback&&callback({code:"success",msg:"success",data:data})}function AError(){callback&&callback({code:"error",msg:"网络异常"})}function AComplete(xhr,ts){callback&&callback({code:"complete",xhr:xhr,ts:ts,msg:"complete"})}var _op=options||{},_url=_op.url?_op.url:"/account/ajax.do",_data=_op.data||{},_type=_op.type||"GET",_processData=!_op.processData||_op.processData,_contentType=_op.contentType?_op.contentType:"application/x-www-form-urlencoded",_datatype=_op.datatype?_op.datatype:"",_jsonp=_op.jsonp?_op.jsonp:"",_jsonpc=_op.jsonpcallback?_op.jsonpcallback:"",_location=window.location;"/account/account.do?a=validate_all&jump_url="+_location.pathname+_location.search;return $.ajax({headers:{Accept:"application/json; charset=utf-8"},url:_url,type:_type,data:_data,dataType:_datatype,jsonp:_jsonp,jsonpCallback:_jsonpc,processData:_processData,contentType:_contentType,beforeSend:ABeforeSend,success:ACallback,error:AError,complete:AComplete})};"function"==typeof define?define("static/front/dist/script/module_ajax",[],function(){return HbAjax}):"undefined"!=typeof exports?module.exports=HbAjax:window.HbAjax=HbAjax}();
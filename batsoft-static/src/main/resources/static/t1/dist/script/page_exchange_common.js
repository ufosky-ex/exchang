define("static/t1/dist/script/page_exchange_common",["./module_utils","./module_core","./module_ajax","./module_effect"],function(require,exports){var U=require("./module_utils"),core=require("./module_core"),ExchangeRate="";function bal(){$.get("/ex/member/account/bal/"+$("#base_asset").val(),function($data){$("#base_account").text($data)}),$.get("/ex/member/account/bal/"+$("#quote_asset").val(),function($data){$("#quote_account").text($data)})}function bal(){$.get("/ex/member/account/bal/"+$("#base_asset").val(),function($data){$("#base_account").text($data)}),$.get("/ex/member/account/bal/"+$("#quote_asset").val(),function($data){$("#quote_account").text($data)})}exports.init=function(){$(function(){var asset_exchange_rate=$("#asset_exchange_rate").val();if(0<asset_exchange_rate.length)try{AssetExchangeRate=$.parseJSON(asset_exchange_rate)}catch(err){}}),core.isLogin()&&bal()},exports.guzhi=function(num){if(1==U.is_null(ExchangeRate)&&(ExchangeRate=$("#exchange_rate").val()),$("#languageBt").hasClass("cn")){var number=num.toFixed(2);return U.bccomp(number,0)<=0?"≈￥0.01":"￥"+number}return number=bcdiv(num,ExchangeRate).toFixed(2),U.bccomp(number,0)<=0?"≈$0.01":"$"+number},exports.againstCNY=function(symbol){return 1},exports.digitsData=function(){},exports.bal=bal,exports.buy_sell_first=function(){$.get("/exchange/buy_sell_first/buy/"+$("#base_asset").val()+"_"+$("#quote_asset").val(),function($data){"page404"==$data?window.location.href="/404":$("#price_buy").val($data)}),$.get("/exchange/buy_sell_first/sell/"+$("#base_asset").val()+"_"+$("#quote_asset").val(),function($data){"page404"==$data?window.location.href="/404":$("#price_sell").val($data)})}}),define("static/t1/dist/script/module_utils",[],function(require,exports,module){module.exports={setLang:function(lang){setCookie("lang",lang),location.reload()},setCookie:function(name,value){var exp=new Date;exp.setTime(exp.getTime()+2592e6),document.cookie=name+"="+escape(value)+";path=/;expires="+exp.toGMTString()},getCookie:function(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");return(arr=document.cookie.match(reg))?unescape(arr[2]):null},delCookie:function(name){var exp=new Date;exp.setTime(exp.getTime()-1);var cval=getCookie(name);null!=cval&&(document.cookie=name+"="+cval+";expires="+exp.toGMTString())},isEmail:function(str){return/\w[-\w.+]*[A-Za-z0-9]@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str)},isPass:function(str){return/(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,20}/.test(str)},isEmpty:function(id){return 0==$(id).val().length?($("#error").show(),$("#error_show").html(Lang.input_cant_empty),$(id).addClass("error"),!0):($("#error").hide(),$(id).removeClass("error"),!1)},response:function(data){if(null!=data.msg&&0<data.msg.length){null==data.code&&(data.code=0);var icon=1==data.success?6:2,time=data.msg.length<6?2e3:4e3;layer.msg(data.msg,{time:time,icon:icon},function(){"401.1"==data.code&&(window.location.href=data.data),null!=data.url&&0<data.url.length&&(window.location.href=data.url)})}else null!=data.url&&0<data.url.length&&(window.location.href=data.url)},isJson:function(str){try{$.parseJSON(str)}catch(e){return!1}return!0},stopDefault:function(e){e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1},compare_date:function(min_time,max_time){var min_date=new Date(min_time.replace(/-/g,"/")),max_date=new Date(max_time.replace(/-/g,"/"));return max_date<min_date?-1:min_date==max_date?0:min_date<max_date?1:void 0},toUtf8:function(str){var out,i,len,c;for(out="",len=str.length,i=0;i<len;i++)1<=(c=str.charCodeAt(i))&&c<=127?out+=str.charAt(i):(2047<c?(out+=String.fromCharCode(224|c>>12&15),out+=String.fromCharCode(128|c>>6&63)):out+=String.fromCharCode(192|c>>6&31),out+=String.fromCharCode(128|c>>0&63));return out},rtrim_zero:function(number){return Number(number).toString()},formatcoin:function(number,len){return number=number.toString(),null!=len&&null!==len||(len=-1==number.indexOf(".")?0:number.slice(number.indexOf(".")+1).length),this.number_format(number,len,",",3)},number_format:function(number,bit,sign,gapnum){number=number||0,bit=isNaN(bit=Math.abs(bit))?2:bit,sign=sign||",",gapnum=gapnum||3;var decimal=".",negative=number<0?"-":"",i=parseInt(number=Math.abs(+number||0).toFixed(bit),10)+"",j=(j=i.length)>gapnum?j%gapnum:0,rule=eval("/(\\d{"+gapnum+"})(?=\\d)/g");return negative+(j?i.substr(0,j)+sign:"")+i.substr(j).replace(rule,"$1"+sign)+(bit?decimal+Math.abs(number-i).toFixed(bit).slice(2):"")},bcadd:function(a,b){return null!=a&&null!=a||(a=0),null!=b&&null!=b||(b=0),numeral(a).add(b).value()},bcsub:function(a,b){return null!=a&&null!=a||(a=0),null!=b&&null!=b||(b=0),numeral(a).subtract(b).value()},bcmul:function(a,b){return null!=a&&null!=a||(a=0),null!=b&&null!=b||(b=0),numeral(a).multiply(b).value()},bcdiv:function(a,b){return null!=a&&null!=a||(a=0),null==b||null==b?0:numeral(a).divide(b).value()},bccomp:function(a,b){return a=Number(a),(b=Number(b))<a?1:a<b?-1:0},showGoogleBlinding:function(){var index=layer.open({type:1,title:!1,shadeClose:!0,closeBtn:0,scrollbar:!1,shade:.8,area:"590px",shadeClose:!1,content:$("#google_blind_pop")});$("#google_blind_pop .closePopBt,.skipBt").on("click",function(){layer.close(index)})},input_number_decimal:function(obj,decimal){var position=$(obj).getCurPos(),number_rule=0==decimal?/[^0-9]/g:/[^0-9.]/g,amt=$.trim($(obj).val().replace(number_rule,""));if(0<=amt.indexOf(".")){var amt_decimal=amt.slice(amt.indexOf(".")+1).length;decimal<amt_decimal&&(amt=amt.substr(0,amt.length-(amt_decimal-decimal)))}$(obj).val(amt).setCurPos(position,position)},getPercent:function(a){return this.bcmul(a,100).toFixed(2)+"%"},getCeil:function(number,double){return parseInt(number*Math.pow(10,double))/Math.pow(10,double)},unFormatcoin:function(str){return str.replace(/,/g,"")},is_null:function(a){return null==a||null==a||""==a},strContains:function(str,substr){return new RegExp(substr).test(str)},replaceAll:function(str,chr,newChar){return str.replace(new RegExp(chr,"gm"),newChar)},strSubstring:function(s,l,r){var replace="",len=l||30,value=s||"",length=value.length;return length&&len<length&&(length=len,replace=r||"..."),"<span title ='"+s+"'>"+value.substring(0,length)+replace+"</span>"},timer:function(countdown,btn){var _this=btn;_this.attr("disabled","true"),_this.html(countdown+"秒后重新获取");var timer=setInterval(function(){0==countdown?(clearInterval(timer),_this.removeAttr("disabled"),_this.html("重新发送验证码")):(countdown--,_this.html(countdown+"秒后重新获取"))},1e3)},dateFormat:function(date,format){var d=new Date(date),zeroize=function(value,length){length||(length=2),value=String(value);for(var i=0,zeros="";i<length-value.length;i++)zeros+="0";return zeros+value};return format.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g,function($0){switch($0){case"d":return d.getDate();case"dd":return zeroize(d.getDate());case"ddd":return["Sun","Mon","Tue","Wed","Thr","Fri","Sat"][d.getDay()];case"dddd":return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()];case"M":return d.getMonth()+1;case"MM":return zeroize(d.getMonth()+1);case"MMM":return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];case"MMMM":return["January","February","March","April","May","June","July","August","September","October","November","December"][d.getMonth()];case"yy":return String(d.getFullYear()).substr(2);case"yyyy":return d.getFullYear();case"h":return d.getHours()%12||12;case"hh":return zeroize(d.getHours()%12||12);case"H":return d.getHours();case"HH":return zeroize(d.getHours());case"m":return d.getMinutes();case"mm":return zeroize(d.getMinutes());case"s":return d.getSeconds();case"ss":return zeroize(d.getSeconds());case"l":return zeroize(d.getMilliseconds(),3);case"L":var m=d.getMilliseconds();return 99<m&&(m=Math.round(m/10)),zeroize(m);case"tt":return d.getHours()<12?"am":"pm";case"TT":return d.getHours()<12?"AM":"PM";case"Z":return d.toUTCString().match(/[A-Z]+$/);default:return $0.substr(1,$0.length-2)}})},getUrlParameter:function(name,parent){void 0===parent&&(parent=!1);var r,reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");return null!=(r=parent?window.parent.location.search.substr(1).match(reg):window.location.search.substr(1).match(reg))?unescape(r[2]):null},isNotEmpty:function(str){return!!str&&(0!=str.replace(/(^s*)|(s*$)/g,"").length&&null!=str)},windowsUrlInfo:function(){return{hash:window.location.hash,host:window.location.host,hostname:window.location.hostname,href:window.location.href,pathname:window.location.pathname,port:window.location.port,protocol:window.location.protocol,search:window.location.search}},sleep:function(numberMillis){for(var now=new Date,exitTime=now.getTime()+numberMillis;;)if((now=new Date).getTime()>exitTime)return}}}),define("static/t1/dist/script/module_core",["static/t1/dist/script/module_ajax","static/t1/dist/script/module_effect","static/t1/dist/script/module_utils"],function(require,exports,module){var A=require("static/t1/dist/script/module_ajax"),E=require("static/t1/dist/script/module_effect"),U=require("static/t1/dist/script/module_utils");function error(data){if(null!=data&&(data.code="401.1")){E.toastr({title:"3秒后跳转到登录页...",content:data.msg}),setTimeout(function(){window.location.href=data.data},3e3)}}exports.loadPage=function(options,fn){var op=options||{};$(op.container).html(op.loading).load(op.loadUrl,function(response,status,xhr){response.startsWith("{")&&error(JSON.parse(response)),op.callBack&&(options.data?op.callBack(options.data):op.callBack()),fn&&fn()})},exports.save=function(options){var op=options||{};return new A({url:op.url,data:op.data,type:"POST",datatype:op.datatype,processData:op.processData,contentType:op.contentType},function(data){switch(data.code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})},exports.remove=function(options){var op=options||{};return new A({url:op.url,data:op.data,type:op.type},function(data){switch(data.code){case"loading":$("#"+op.msg).html("删除中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})},exports.list=function(options){var op=options||{};return new A({url:op.url,data:op.data,type:op.type},function(data){switch(data.code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})},exports.get=function(options){var op=options||{};return new A({url:op.url,data:op.data,type:"GET"},function(data){switch(data.code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})},exports.post=function(options){var op=options||{};return new A({url:op.url,data:op.data,type:"POST"},function(data){switch(data.code){case"loading":$("#"+op.msg).html("加载中...");break;case"error":error(data.data);break;case"success":$("#"+op.msg).html("")}})},exports.hasPermission=function(permission){return U.strContains(Global.perm,permission)},exports.isLogin=function(){return!$.isEmptyObject(GLOBAL.user)}}),function(){var HbAjax=function(options,callback){var _op=options||{},_url=_op.url?_op.url:"/account/ajax.do",_data=_op.data||{},_type=_op.type||"GET",_processData=!_op.processData||_op.processData,_contentType=_op.contentType?_op.contentType:"application/x-www-form-urlencoded",_datatype=_op.datatype?_op.datatype:"",_jsonp=_op.jsonp?_op.jsonp:"",_jsonpc=_op.jsonpcallback?_op.jsonpcallback:"",_location=window.location;_location.pathname,_location.search;return $.ajax({headers:{Accept:"application/json; charset=utf-8"},url:_url,type:_type,data:_data,dataType:_datatype,jsonp:_jsonp,jsonpCallback:_jsonpc,processData:_processData,contentType:_contentType,beforeSend:function(){callback&&callback({code:"loading",msg:"loading"})},success:function(data){"401.1"==data.code||"401.2"==data.code?callback&&callback({code:"error",msg:"操作异常",data:data}):callback&&callback({code:"success",msg:"success",data:data})},error:function(){callback&&callback({code:"error",msg:"网络异常"})},complete:function(xhr,ts){callback&&callback({code:"complete",xhr:xhr,ts:ts,msg:"complete"})}})};"function"==typeof define?define("static/t1/dist/script/module_ajax",[],function(){return HbAjax}):"undefined"!=typeof exports?module.exports=HbAjax:window.HbAjax=HbAjax}(),define("static/t1/dist/script/module_effect",[],function(require,exports,module){function DivSelect(id,divId,className){if(this.id=id,this.divId=divId,this.divClassName=className||"selectView",this.ele=this.$(this.id),this.ele){var that=this;for(this.status="close",this.parentObj=this.ele.parentNode;"block"!=this.readStyle(this.parentObj,"display")&&this.parentObj.parentNode;)this.parentObj=this.parentObj.parentNode;this.parentObj.style.position="relative";var temp,sp=this.absPosition(this.ele,this.parentObj);this.ele.style.visibility="hidden",this.__div=document.createElement("div"),divId&&(this.__div.id=divId),this.divClassName&&(this.__div.className=this.divClassName),this.parentObj.appendChild(this.__div),this.__div.style.width=this.ele.offsetWidth+"px",this.__div.style.position="absolute",this.__div.style.left=sp.left+"px",this.__div.style.top=sp.top+"px",this.__div.onclick=function(){that.click()},this.__div_count=document.createElement("div"),this.__div.appendChild(this.__div_count),this.__div_count.className="ds_cont",this.__div_title=document.createElement("div"),this.__div_count.appendChild(this.__div_title),this.__div_title.className="ds_title",this.__div_button=document.createElement("div"),this.__div_count.appendChild(this.__div_button),this.__div_button.className="ds_button",this.__div_list=document.createElement("div"),this.__div.appendChild(this.__div_list),this.__div_list.className="ds_list",this.__div_list.style.display="none",this.__div_listCont=document.createElement("div"),this.__div_list.appendChild(this.__div_listCont),this.__div_listCont.className="dsl_cont",this.list=[];for(var i=0;i<this.ele.options.length;i++)temp=document.createElement("p"),this.list.push(temp),this.__div_listCont.appendChild(temp),temp.innerHTML=this.ele.options[i].innerHTML,this.ele.selectedIndex==i&&(this.__div_title.innerHTML=temp.innerHTML),temp.num=i,temp.onmouseover=function(){that.showSelectIndex(this.num)},temp.onclick=function(){that.select(this.innerHTML)}}}DivSelect.prototype={showSelectIndex:function(num){void 0===num&&(num=this.ele.selectedIndex),void 0!==this.showIndex&&(this.list[this.showIndex].className=""),this.showIndex=num,this.list[this.showIndex].className="selected"},select:function(txt){for(var i=0;i<this.ele.options.length;i++)if(this.ele.options[i].innerHTML==txt){this.ele.selectedIndex=i,this.ele.onchange&&this.ele.onchange(),this.__div_title.innerHTML=txt;break}},setIndex:function(num){num<0||num>=this.list.length||(this.ele.selectedIndex=num,this.ele.onchange&&this.ele.onchange(),this.__div_title.innerHTML=this.list[num].innerHTML)},clickClose:function(e){var thisObj=e.target?e.target:event.srcElement;do{if(thisObj==this.__div)return;if("BODY"==thisObj.tagName)break;thisObj=thisObj.parentNode}while(thisObj.parentNode);this.close()},keyDown:function(e){var num=this.showIndex;38==e.keyCode&&(--num<0&&(num=this.list.length-1),this.showSelectIndex(num),this.stopDefault(e)),40==e.keyCode&&(++num>=this.list.length&&(num=0),this.showSelectIndex(num),this.stopDefault(e)),13!=e.keyCode&&9!=e.keyCode||(this.setIndex(num),this.stopDefault(e),this.close()),27==e.keyCode&&this.close()},open:function(){var that=this;this.showSelectIndex(),this.__div_list.style.display="block",this.status="open",this.__closeFn=function(e){that.clickClose(e)},this.__keyFn=function(e){that.keyDown(e)},this.addEvent(document,"click",this.__closeFn),this.addEvent(document,"keydown",this.__keyFn)},close:function(){this.__div_list.style.display="none",this.status="close",this.delEvent(document,"click",this.__closeFn),this.delEvent(document,"keydown",this.__keyFn)},click:function(){"open"==this.status?this.close():this.open()},$:function(objName){return document.getElementById?eval('document.getElementById("'+objName+'")'):eval("document.all."+objName)},addEvent:function(obj,eventType,func){obj.attachEvent?obj.attachEvent("on"+eventType,func):obj.addEventListener(eventType,func,!1)},delEvent:function(obj,eventType,func){obj.detachEvent?obj.detachEvent("on"+eventType,func):obj.removeEventListener(eventType,func,!1)},readStyle:function(i,I){return i.style[I]?i.style[I]:i.currentStyle?i.currentStyle[I]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(i,null).getPropertyValue(I):null},absPosition:function(obj,parentObj){var left=obj.offsetLeft,top=obj.offsetTop,tempObj=obj.offsetParent;try{for(;tempObj.id!=document.body&&tempObj.id!=document.documentElement&&tempObj!=parentObj&&null!=tempObj;)tempObj.tagName+" , ",left+=(tempObj=tempObj.offsetParent).offsetLeft,top+=tempObj.offsetTop}catch(e){}return{left:left,top:top}},stopDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},module.exports={divSelect:function(id,divId,className){new DivSelect(id,divId,className)},piechart:function(){0<jQuery(".piechart").length&&jQuery(".piechart").each(function(){var _t=jQuery(this),_size=_t.attr("data-size")||150,_animate=_t.attr("data-animate")||"3000";_t.easyPieChart({size:_size,animate:_animate,scaleColor:!1,trackColor:_t.attr("data-trackcolor")||"rgba(0,0,0,0.04)",lineWidth:_t.attr("data-width")||"2",lineCap:"square",barColor:_t.attr("data-color")||"#0093BF"}),jQuery("*",this).attr("style","line-height:"+_size+"px !important; height:"+_size+"px !important; width:"+_size+"px !important")})},countTo:function(){jQuery(".countTo").appear(function(){var _t=jQuery(this),_from=_t.attr("data-from")||0,_speed=_t.attr("data-speed")||1300,_refreshInterval=_t.attr("data-refreshInterval")||60;_t.countTo({from:parseInt(_from),to:_t.html(),speed:parseInt(_speed),refreshInterval:parseInt(_refreshInterval)})})},countDown:function(){var _container=jQuery(".countdown"),_container2=jQuery(".countdown-download");(0<_container.length||0<_container2.length)&&(_container.each(function(){var _t=jQuery(this),_date=_t.attr("data-from"),_labels=_t.attr("data-labels");if(_labels&&(_labels=_labels.split(",")),_date){var _d=new Date(_date);jQuery(this).countdown({until:new Date(_d),labels:_labels||["Years","Months","Weeks","Days","Hours","Minutes","Seconds"]})}}),_container2.bind("click",function(e){e.preventDefault();var _t=jQuery(this),cd_container=_t.attr("data-for"),_countdown=jQuery("#"+cd_container+" span.download-wait>.countdown"),_seconds=parseInt(_t.attr("data-seconds")),_dataURL=_t.attr("href");return _t.fadeOut(250,function(){jQuery("#"+cd_container).fadeIn(250,function(){var currentDate=new Date;currentDate.setSeconds(currentDate.getSeconds()+_seconds),_countdown.countdown({until:currentDate,format:"S",expiryUrl:_dataURL,onExpiry:function(){jQuery("#"+cd_container+" span.download-message").removeClass("hide"),jQuery("#"+cd_container+" span.download-wait").addClass("hide")}})})}),!1}))},toggle:function(){jQuery("div.toggle.active > p").addClass("preview-active"),jQuery("div.toggle.active > div.toggle-content").slideDown(400),jQuery("div.toggle > label").click(function(e){var parentSection=jQuery(this).parent(),parentWrapper=jQuery(this).parents("div.toggle"),previewPar=!1;if(parentWrapper.hasClass("toggle-accordion")&&void 0!==e.originalEvent&&parentWrapper.find("div.toggle.active > label").trigger("click"),parentSection.toggleClass("active"),parentSection.find("> p").get(0)){var previewParCurrentHeight=(previewPar=parentSection.find("> p")).css("height"),previewParAnimateHeight=previewPar.css("height");previewPar.css("height","auto"),previewPar.css("height",previewParCurrentHeight)}var toggleContent=parentSection.find("> div.toggle-content");parentSection.hasClass("active")?(jQuery(previewPar).animate({height:previewParAnimateHeight},350,function(){jQuery(this).addClass("preview-active")}),toggleContent.slideDown(350)):(jQuery(previewPar).animate({height:25},350,function(){jQuery(this).removeClass("preview-active")}),toggleContent.slideUp(350))})},pickers:function(callBack){var _container_1=jQuery(".datepicker");0<_container_1.length&&jQuery().datepicker&&_container_1.each(function(){var _t=jQuery(this),_lang=_t.attr("data-lang")||"en";jQuery(this).datepicker({format:_t.attr("data-format")||"yyyy-mm-dd",language:_lang,rtl:"true"==_t.attr("data-RTL"),changeMonth:"false"!=_t.attr("data-changeMonth"),todayBtn:"false"!=_t.attr("data-todayBtn")&&"linked",calendarWeeks:"false"!=_t.attr("data-calendarWeeks"),autoclose:"false"!=_t.attr("data-autoclose"),todayHighlight:"false"!=_t.attr("data-todayHighlight"),onRender:function(date){}}).on("changeDate",function(ev){}).data("datepicker")});var _container_2=jQuery(".rangepicker");0<_container_2.length&&jQuery().datepicker&&_container_2.each(function(){var _t=jQuery(this),_format=_t.attr("data-format").toUpperCase()||"YYYY-MM-DD";_t.daterangepicker({format:_format,startDate:_t.attr("data-from"),endDate:_t.attr("data-to"),ranges:{Today:[moment(),moment()],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()]}},function(start,end,label){callBack&&callBack(start.format("YYYY-MM-DD"),end.format("YYYY-MM-DD"))})});var _container_3=jQuery(".timepicker");0<_container_3.length&&jQuery().timepicki&&_container_3.timepicki()},select2:function(){var _container=jQuery("select.select2");0<_container.length&&_container.each(function(){var _t=jQuery(this);_t.hasClass("select2-custom")||_t.select2()})},bgimage:function(){var _t=jQuery("section[data-background], section div[data-background]");0<_t.length&&jQuery(_t).each(function(){var _this=jQuery(this),data_background=_this.attr("data-background")||"";if(""!=data_background){var data_background_delay=_this.attr("data-background-delay")||3e3,data_background_fade=_this.attr("data-background-fade")||750,_db=data_background.split(",");(_db=data_background.replace(" ","").split(","))[1]?_this.backstretch(_db,{duration:parseInt(data_background_delay),fade:parseInt(data_background_fade)}):_this.backstretch(_db),jQuery(".bs-next",_this).bind("click",function(e){e.preventDefault(),_this.data("backstretch").next()}),jQuery(".bs-prev",_this).bind("click",function(e){e.preventDefault(),_this.data("backstretch").prev()}),jQuery(window).resize(function(){window.afterResizeBkstr&&clearTimeout(window.afterResizeBkstr),window.afterResizeBkstr=setTimeout(function(){_this.data("backstretch").next()},350)})}});var data_background=jQuery("body").attr("data-background")||"";""!=data_background&&data_background&&(jQuery.backstretch(data_background),jQuery("body").addClass("transparent"))},toastr:function(options){var _option=$.extend({title:"",content:"",type:"info",closeButton:!1,progressBar:!0,showMethod:"slideDown",positionClass:"toast-top-center",timeOut:3e3},options);"success"==(toastr.options=_option).type?toastr.success(_option.title,_option.content):"warning"==_option.type?toastr.warning(_option.title,_option.content):"error"==_option.type?toastr.error(_option.title,_option.content):"info"==_option.type&&toastr.info(_option.title,_option.content)},sliderFull:function(){_headerHeight=0,jQuery("#header").hasClass("transparent")||jQuery("#header").hasClass("translucent")?_headerHeight=0:(_headerHeight=jQuery("#header").outerHeight()||0,0<jQuery("#topBar").length&&(_topBarHeight=jQuery("#topBar").outerHeight()||0,_headerHeight+=_topBarHeight)),_screenHeight=jQuery(window).height()-_headerHeight,0<jQuery(".banner-bottom-menu").length&&(_screenHeight-=jQuery(".banner-bottom-menu").height()),jQuery("#header").hasClass("static")&&(_screenHeight=jQuery(window).height()),jQuery("#slider").hasClass("halfheight")&&jQuery("#slider.halfheight").height(_screenHeight/2),jQuery("#slider").hasClass("thirdheight")&&jQuery("#slider.thirdheight").height(_screenHeight/1.5),jQuery("#slider").hasClass("fullheight")&&(jQuery("#slider.fullheight").height(_screenHeight),jQuery("#slider.fullheight-min").css({"min-height":_screenHeight+"px"})),window.width<960&&jQuery("#slider.mobile-fullheight").height(_screenHeight)},afterResize:function(){jQuery(window).resize(function(){window.afterResizeApp&&clearTimeout(window.afterResizeApp),window.afterResizeApp=setTimeout(function(){window.width=jQuery(window).width(),window.height=jQuery(window).height(),0<jQuery(".flexslider").length&&jQuery(".flexslider").resize()},300)})}}});
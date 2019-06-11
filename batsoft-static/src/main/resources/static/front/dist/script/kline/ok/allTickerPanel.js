!function($){var timeInter=0,priceDefine={price:8,vol_max:10,volume:8,volumeBig:0},allTickerPanel={fnList:{checkEventCallList:[]},_onPanelTabChange:function(self){$(self).addClass("active").siblings("div").removeClass("active");var key=$(self).attr("data-key"),$table=$('#coinBubble table[data-key="'+key+'"]');$table.length&&($table.siblings("table").addClass("dis-none"),$table.removeClass("dis-none"))},_onPanelInputChange:function(self){timeInter&&clearTimeout(timeInter);var _inp=$(self).val().trim();timeInter=setTimeout(function(){var $lis=$("#coinBubble tr[data-desc]");if($lis.length)for(var i=0;i<$lis.length;i++){var $li=$lis.eq(i),desc=$li.attr("data-desc");desc.toUpperCase().indexOf(_inp.toUpperCase())>-1?$li.show():$li.hide()}},300)},_onPanelSort:function(self){var $i=$(self).find("i"),clsArrow=$i.attr("class");"banner-sort"==clsArrow||"banner-sort-up"==clsArrow?clsArrow="banner-sort-down":"banner-sort-down"==clsArrow&&(clsArrow="banner-sort-up"),$i.attr("class",clsArrow);var $table=$(self).parents(".banner-coin-table"),$trs=$table.find("tbody").find("tr");$trs.sort(function(a,b){var v1=$(a).find("#bannerChangePercentage").find("span").html(),v2=$(b).find("#bannerChangePercentage").find("span").html();return"banner-sort-up"==clsArrow?Number(v1)-Number(v2):Number(v2)-Number(v1)}),$table.find("tbody").html($trs)},_regEvent:function(){var _this=this,$coinBubble=$("#coinBubble");$coinBubble.off("click",".coin-title").on("click",".coin-title",function(){_this._onPanelTabChange(this)}).off("keyup paste","#coinBubbleSearchInp").on("keyup paste","#coinBubbleSearchInp",function(){_this._onPanelInputChange(this)}).off("click",".banner-sort-th").on("click",".banner-sort-th",function(){_this._onPanelSort(this)}).off("click","tr[data-symbol]").on("click","tr[data-symbol]",function(){var symbol=$(this).attr("data-symbol");$(this).addClass("active"),$(this).siblings().removeClass("active"),$("#coinBubble").hide();for(var i=0;i<_this.fnList.checkEventCallList.length;i++)_this.fnList.checkEventCallList[i](this,symbol)}),$("#chooseCoinType").mouseover(function(e){return _this.show(),!1}),$("#chooseCoinType").mouseout(function(e){return _this.hide(),!1})},onCheckOneTickerCallBack:function(callback){"undefined"!=typeof callback&&this.fnList.checkEventCallList.push(callback)},setSort:function(isAsc){$("#coinBubble .banner-sort-th").each(function(i,o){var $table=$(o).parents(".banner-coin-table");isAsc?$(o).find("i").attr("class","banner-sort-up"):$(o).find("i").attr("class","banner-sort-down");var $trs=$table.find("tbody").find("tr");$trs.sort(function(a,b){var v1=$(a).find("#bannerChangePercentage").find("span").html(),v2=$(b).find("#bannerChangePercentage").find("span").html();return isAsc?Number(v1)-Number(v2):Number(v2)-Number(v1)}),$table.find("tbody").html($trs)})},setMarketChk:function(baseCurr){var $coinBubble=$("#coinBubble");$coinBubble.find('.banner-coin-titles div[data-key="spot-'+baseCurr.toLowerCase()+'"]').addClass("active").siblings().removeClass("active"),$coinBubble.find('table[data-key="spot-'+baseCurr+'"]').removeClass("dis-none").siblings("table").addClass("dis-none")},updateTickerPanel:function(sortedObj){if(!$.isEmptyObject(sortedObj)){var upAndDown="",color="",$coinBubble=$("#coinBubble");for(var symbol in sortedObj){sortedObj[symbol].changePercentage.indexOf("+")>=0?(upAndDown="up",color="green"):sortedObj[symbol].changePercentage.indexOf("-")>=0&&(upAndDown="down",color="red");var sign="",baseCurr=sortedObj[symbol].symbol.split("_")[1],tradeCurr=sortedObj[symbol].symbol.split("_")[0].toUpperCase(),sign=ok.currencySymbol[symbol.split("_")[1]];sign||(sign=ok.getSignByCurrency(symbol.split("_")[1]));var color=sortedObj[symbol].changePercentage.indexOf("-")>-1?"red":"green-new",arrow=sortedObj[symbol].changePercentage.indexOf("-")>-1?"banner-arrow-down":"banner-arrow-up",vol=Math.floor(sortedObj[symbol].volume)>=priceDefine.vol_max?Calculate.ShowDownTruncation(sortedObj[symbol].volume,priceDefine.volumeBig):Calculate.ShowDownTruncation(sortedObj[symbol].volume,priceDefine.volume),$row=$coinBubble.find('table[data-key="spot-'+baseCurr.toLowerCase()+'"] tr[data-symbol="'+symbol+'"]');if($row&&$row.length)$row.find("#bannerCoin").html((tradeCurr+"/"+baseCurr).toUpperCase()+"："),$row.find("#bannerLast").attr("class","coinCell "+color).find(".mar-right2").html(sign).next().html(sortedObj[symbol].last).next().attr("class",arrow),$row.find("#bannerHigh").find("em").html(sign).next().html(sortedObj[symbol].dayHigh),$row.find("#bannerLow").find("em").html(sign).next().html(sortedObj[symbol].dayLow),$row.find("#bannerChangePercentage").attr("class",color).find("span").html(sortedObj[symbol].changePercentage.replace("%","")).next().html("%"),$row.find("#bannerDeal").find("span").html(vol).next().html(tradeCurr);else{var $spot=$coinBubble.find('table[data-key="spot-'+baseCurr.toLowerCase()+'"] tbody'),desc=(tradeCurr+"/"+baseCurr).toUpperCase();$spot.append('<tr data-desc="'+desc+'"  data-symbol='+symbol+' class="coinRow"><td id="bannerCoin" class="coinCell">'+desc+'：</td><td id="bannerLast" class="coinCell '+color+'"><em class="mar-right2">'+sign+'</em><span class="bannerLast-inner">'+sortedObj[symbol].last+'</span><em class="'+arrow+'"></em></td><td id="bannerHigh"><em class="mar-right2">'+sign+"</em><span>"+sortedObj[symbol].dayHigh+'</span></td><td id="bannerLow"><em class="mar-right2">'+sign+"</em><span>"+sortedObj[symbol].dayLow+'</span></td><td id="bannerChangePercentage" class="'+color+'"><span>'+sortedObj[symbol].changePercentage.replace("%","")+'</span><em>%</em></td><td id="bannerDeal"><span>'+vol+'</span><em class="mar-left5 gray1 vol-currency">'+tradeCurr+"</em></td></tr>")}}}},show:function(){$("#coinBubble").show(),$("#chooseTypeArrow").addClass("arrow-active")},hide:function(){$("#coinBubble").hide(),$("#chooseTypeArrow").removeClass("arrow-active")},init:function(){this._regEvent()}};allTickerPanel.init(),"function"==typeof define&&define.amd?define([],function(){return allTickerPanel}):window.allTickerPanel=allTickerPanel}(jQuery);
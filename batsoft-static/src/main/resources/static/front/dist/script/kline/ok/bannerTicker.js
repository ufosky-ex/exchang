!function($){function initAddEve(){$("#coinListBox .coin-title").click(function(event){$(this).addClass("active").siblings("div").removeClass("active");var key=$(this).attr("data-key"),$table=$('#coinListBox table[data-key="'+key+'"]');$table.length&&($table.siblings("table").addClass("dis-none"),$table.removeClass("dis-none")),event.stopPropagation()});var timeInter=0;$("#bannerSearchInp").on("keyup paste",function(event){timeInter&&clearTimeout(timeInter);var _self=this;timeInter=setTimeout(function(){var _inp=$(_self).val().trim().toUpperCase();$("#coinListBox tr[data-desc]").each(function(index,obj){var desc=$(obj).attr("data-desc");desc&&desc.toUpperCase().indexOf(_inp)>-1?$(obj).show():$(obj).hide()})},300),event.stopPropagation()}),$("#coinListBox .banner-sort-th").click(function(event){var isAsc=!($(this).find("i").attr("class").indexOf("banner-sort-up")>-1);sortBannerPanel(this,isAsc),event.stopPropagation()})}function sortBannerPanel(self,isAsc){var $i=$(self).find("i"),clsArrow="";clsArrow=isAsc?"banner-sort-up":"banner-sort-down",$i.attr("class",clsArrow);var $table=$(self).parents(".banner-coin-table"),$trs=$table.find("tbody").find("tr");$trs.sort(function(a,b){var v1=$(a).find("#bannerChangePercentage").find("span").html(),v2=$(b).find("#bannerChangePercentage").find("span").html();return"banner-sort-up"==clsArrow?Number(v1)-Number(v2):Number(v2)-Number(v1)}),$table.find("tbody").html($trs)}var isNoLoad=($("#banner_is_login").val(),"/"===location.pathname||location.href.indexOf("/index.do")>0||location.href.indexOf("spot/trade/index.do")>0||location.href.indexOf("/spot.html")>0||location.href.indexOf("/spot/market/index.do")>0||location.href.indexOf("future/future.do")>0||location.href.indexOf("future/market.do")>0||location.href.indexOf("futures.html")>0||location.href.indexOf("c2c/trade/trade.do")>0||location.href.indexOf("c2c/trade/openTrade.do")>0),failNum=0,beforeLock=!1,isBannerFirstSort=!0;initAddEve();var bannerTicker={priceDefine:{price:8,vol_max:10,volume:8,volumeBig:0},isFirstLoad:!0,isNoLoad:isNoLoad,selectTickerArr:["bch","ltc"],signObj:{},refreshSelectedTickers:function(list){var _this=this,priceTruncate=_this.priceDefine.price;$.each(list,function(i,item){var currency=item.symbol.split("_")[0],baseCurr=item.symbol.split("_")[1];if(_this.selectTickerArr.length&&"btc"===baseCurr){var cls=item.changePercentage.indexOf("-")>-1?"red":"green",clsArrow=item.changePercentage.indexOf("-")>-1?"banner-arrow-down":"banner-arrow-up",$selectedItem=$("#bannerTickerSpot"),$sign=null,$price=null,$arrow=null;_this.selectTickerArr[0]===currency.toLowerCase()?($sign=$selectedItem.find("i").eq(0),$price=$selectedItem.find("span").eq(1),$arrow=$selectedItem.find("i").eq(1)):_this.selectTickerArr[1]===currency.toLowerCase()&&($sign=$selectedItem.find("i").eq(2),$price=$selectedItem.find("span").eq(3),$arrow=$selectedItem.find("i").eq(3)),$sign&&$sign.length&&($sign.attr("class",cls),$price.html(Calculate.ShowDownTruncation(item.last,priceTruncate)).attr("class",cls),$arrow.attr("class",clsArrow))}})},refreshPanelTickers:function(list){var _this=this,sign="฿",priceTruncate=_this.priceDefine.price,$listBox=$("#coinListBox");$.each(list,function(i,item){var baseCurr=item.symbol.split("_")[1],tradeCurr=item.symbol.split("_")[0].toUpperCase(),color=item.changePercentage.indexOf("-")>-1?"red":"green-new",arrow=item.changePercentage.indexOf("-")>-1?"banner-arrow-down":"banner-arrow-up",vol=Math.floor(item.volume)>=_this.priceDefine.vol_max?Calculate.ShowDownTruncation(item.volume,_this.priceDefine.volumeBig):Calculate.ShowDownTruncation(item.volume,_this.priceDefine.volume);sign=_this.signObj[baseCurr.toLowerCase()].sign;var $row=$listBox.find('table[data-key="spot-'+baseCurr.toLowerCase()+'"] tr[data-symbol="'+item.symbol.toLowerCase()+'"]');if($row&&$row.length)$row.find("#bannerCoin").html((tradeCurr+"/"+baseCurr).toUpperCase()+"："),$row.find("#bannerLast").attr("class","coinCell "+color).find(".mar-right2").html(sign).next().html(Calculate.ShowDownTruncation(item.last,priceTruncate)).next().attr("class",arrow),$row.find("#bannerHigh").find("em").html(sign).next().html(Calculate.ShowDownTruncation(item.dayHigh,priceTruncate)),$row.find("#bannerLow").find("em").html(sign).next().html(Calculate.ShowDownTruncation(item.dayLow,priceTruncate)),$row.find("#bannerChangePercentage").attr("class",color).find("span").html(item.changePercentage.replace("%","")).next().html("%"),$row.find("#bannerDeal").find("span").html(vol).next().html(tradeCurr);else{var $spot=$listBox.find('table[data-key="spot-'+baseCurr.toLowerCase()+'"] tbody'),desc=(tradeCurr+"/"+baseCurr).toUpperCase();$spot.append('<tr data-desc="'+desc+'"  data-symbol='+item.symbol.toLowerCase()+' class="coinRow"><td id="bannerCoin" class="coinCell">'+desc+'：</td><td id="bannerLast" class="coinCell '+color+'"><em class="mar-right2">'+sign+'</em><span class="bannerLast-inner">'+Calculate.ShowDownTruncation(item.last,priceTruncate)+'</span><em class="'+arrow+'"></em></td><td id="bannerHigh"><em class="mar-right2">'+sign+"</em><span>"+Calculate.ShowDownTruncation(item.dayHigh,priceTruncate)+'</span></td><td id="bannerLow"><em class="mar-right2">'+sign+"</em><span>"+Calculate.ShowDownTruncation(item.dayLow,priceTruncate)+'</span></td><td id="bannerChangePercentage" class="'+color+'"><span>'+item.changePercentage.replace("%","")+'</span><em>%</em></td><td id="bannerDeal"><span>'+vol+'</span><em class="mar-left5 gray1 vol-currency">'+tradeCurr+"</em></td></tr>")}}),isBannerFirstSort&&(isBannerFirstSort=!1,$("#coinListBox .banner-sort-th").each(function(i,obj){sortBannerPanel(obj)}))},init:function(){var _this=this;OkAjax.getMarketCurrencies({success:function(data){if(data&&data.length){for(var k=0;k<data.length;k++)_this.signObj[data[k].symbol.toLowerCase()]=data[k];_this.getMarketProducts()}}})},getMarketProducts:function(){var _this=this;OkAjax.getMarketProducts({success:function(data){if(data&&data.length){data.sort(function(a,b){return a.sort>b.sort});for(var productsOnlineArr=[],i=0;i<data.length;i++)1===+data[i].online&&productsOnlineArr.push(data[i].symbol);productsOnlineArr.length&&$("#productsOnlineListInBanner").val(productsOnlineArr.join(",")),_this.getTickersByApi()}}})},getTickersByApi:function(){var _this=this,productsOnlineListInBanner=$("#productsOnlineListInBanner").val(),productsOnlineArr=productsOnlineListInBanner?productsOnlineListInBanner.split(","):"";productsOnlineListInBanner&&0!==productsOnlineArr.length&&OkAjax.getMarketTickers({success:function(list){for(var onlineList=[],i=0;i<productsOnlineArr.length;i++)for(var j=0;j<list.length;j++)productsOnlineArr[i]==list[j].symbol&&onlineList.push(list[j]);$("#isAjaxLoadSuccessInBanner").val(1),_this.refreshDataSource(onlineList),_this.isFirstLoad&&!_this.isNoLoad&&(_this.isFirstLoad=!1,_this.startWebsocket())}})},refreshDataSource:function(onlineList){var _this=this;if("1"===$("#isAjaxLoadSuccessInBanner").val())if((!_this.signObj||$.isEmptyObject(_this.signObj))&&failNum<=5){var _this=this;beforeLock||(beforeLock=!0,OkAjax.getMarketCurrencies({success:function(data){if(beforeLock=!1,data&&data.length)for(var k=0;k<data.length;k++)_this.signObj[data[k].symbol.toLowerCase()]=data[k]},fail:function(){beforeLock=!1,failNum+=1}}))}else onlineList.length&&(bannerTicker.refreshSelectedTickers(onlineList),bannerTicker.refreshPanelTickers(onlineList))},startWebsocket:function(){var productsOnlineListInBanner=$("#productsOnlineListInBanner").val(),productsOnlineArr=productsOnlineListInBanner?productsOnlineListInBanner.split(","):"";productsOnlineListInBanner&&0!==productsOnlineArr.length&&(webSocket3.addSuccCallBackFun(function(){for(var i=0;i<productsOnlineArr.length;i++)webSocket3.send(webSocket3.Utils.getTicker({symbol:productsOnlineArr[i]}),function(data){var arr=$.isPlainObject(data)?[data]:data[0]?data:[];bannerTicker.refreshDataSource(arr),"undefined"!=typeof leftMenu&&leftMenu.setTickers(arr)})}),webSocket3.addErrCallBackFun(function(){bannerTicker.getTickersByApi()}),webSocket3.connection())}};"function"==typeof define&&define.amd?define([],function(){return bannerTicker}):window.bannerTicker=bannerTicker}(jQuery);
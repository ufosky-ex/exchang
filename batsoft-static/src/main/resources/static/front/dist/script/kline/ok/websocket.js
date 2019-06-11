function WebSocketUtil(){var _this=this,$=jQuery.noConflict(),reConnectInterval=1e4,is_test_env=location.hostname.indexOf("local.")>=0,is_qa_env=location.hostname.indexOf(".docker.")>=0,url="wss://okexcomreal.bafang.com:10441/websocket";is_qa_env&&(url="ws://real.okex.com:10441/websocket"),is_test_env&&(url="ws://192.168.80.14:10441/websocket"),this.isBinary=function(){return FileReader?is_test_env||is_qa_env?0:1:0}();var dataModel={product:"product",type:"type",base:"base",quote:"quote",contract:"contract",period:"period",ladder:"ladder",number:"number",binary:"binary"},uniqueKeyObj={},sortObj=function(obj){var keyArr=[];for(var k in obj)obj.hasOwnProperty(k)&&("[object String]"!==Object.prototype.toString.call(obj[k])&&(obj[k]=obj[k].toString()),keyArr.push(k));keyArr=keyArr.sort();for(var retObj={},i=0;i<keyArr.length;i++)retObj[keyArr[i]]=obj[keyArr[i]];return retObj},generateUniqueKey=function(defaultCfg,config){var transferSymbol={};"futures"===defaultCfg.product&&config&&config.base&&(transferSymbol.base="f_usd_"+config.base),"spot"===defaultCfg.product&&config&&config.symbol&&(transferSymbol.base=config.symbol.split("_")[0],transferSymbol.quote=config.symbol.split("_")[1]);var cfg=$.extend(!0,{},defaultCfg,{binary:_this.isBinary},config,transferSymbol);return cfg.symbol&&delete cfg.symbol,cfg=sortObj(cfg),cfg=JSON.stringify(cfg),uniqueKeyObj[cfg]||(uniqueKeyObj[cfg]=cfg),cfg},generateUniqueKeyFromServer=function(d){var retObj={};for(var key in d)d.hasOwnProperty(key)&&d.hasOwnProperty(dataModel[key])&&(retObj[key]=d[key]);return JSON.stringify(sortObj(retObj))};this.Utils={getTicker:function(config){return generateUniqueKey({product:"spot",type:"ticker"},config)},getTickers:function(config){return generateUniqueKey({product:"spot",type:"ticker",base:"a",quote:"b"},config)},getDepth:function(config){return generateUniqueKey({product:"spot",type:"depth"},config)},getKline:function(config){return generateUniqueKey({product:"spot",type:"kline"},config)},getDeal:function(config){return generateUniqueKey({product:"spot",type:"deal"},config)},getOrder:function(config){return generateUniqueKey({product:"spot",type:"order"},config)},getUserBalance:function(config){return generateUniqueKey({product:"spot",type:"balance"},config)}},this.futureUtils={getIndexTicker:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"index_ticker"},config)},getIndexKine:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"kline"},config)},getTicker:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"ticker"},config)},getPriceRange:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"price_range"},config)},getIndex:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"index"},config)},getDepth:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"depth"},config)},getDeal:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"deal"},config)},getForecast:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"forecast"},config)},getOrder:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"order"},config)},getFixedAccountInfo:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"account_4fix"},config)},getFixedHoldPosition:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"position_4fix"},config)},getCrossAccountInfo:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"account"},config)},getCrossHoldPosition:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"position"},config)},getDeliveryChange:function(config){return generateUniqueKey({product:"futures",quote:"usd",type:"delivery"},config)}};var websocket,erroCallBackFun,conectionCallBackFun,klineCallBack,pingTimer,reConnTimer,isErrorCallBack=!1,callBacks=[],stopCallBacks=[],isConnection=!1,isFixPending=!0,stopPing=function(){pingTimer&&window.clearInterval(pingTimer)},ping=function(){pingTimer&&stopPing(),pingTimer=setInterval(function(){websocket.send("{'event':'ping'}")},5e3)};if("function"!=typeof this.connection){this.socket=function(){return websocket},this.connection=function(){return window.WebSocket?(toConnection(),this):(errorCallBackData(),this)};var toConnection=function(){websocket=new WebSocket(url),websocket.onmessage=decodeData,websocket.onclose=errorCallBackData,websocket.onerror=errorCallBackData,websocket.onopen=onConnection,setTimeout(_this.fixPending,5e3)},onConnection=function(socketUtil){isErrorCallBack=!1,isFixPending=!1,isConnection=!0,reConnTimer&&(window.clearInterval(reConnTimer),reConnTimer=null),conectionCallBackFun&&conectionCallBackFun(),ping()};this.send=function(type,callBack){this.removeCallBack(type)&&this.stop(type),this.addCallBack(type,callBack),websocket.send("{event:'addChannel',parameters:"+type+"}")},this.login=function(userid){websocket.send("{event:'login',parameters:{userId:'"+userid+"',binary:"+this.isBinary+"}}")},this.stop=function(type,callBack){callBack&&(this.removeStopCallBack(type),this.addStopCallBack(type,callBack)),websocket.send("{event:'removeChannel',parameters:"+type+"}")};var decodeData=function(data){if(data.data instanceof Blob){var blob=data.data,reader=new FileReader;return reader.readAsArrayBuffer(blob),void(reader.onload=function(evt){if(evt.target.readyState==FileReader.DONE){var result=new Uint8Array(evt.target.result);result=new Zlib.RawInflate(result).decompress();for(var strResult=[],length=result.length,i=0;i<length;i++)strResult.push(String.fromCharCode(result[i]));callBackData(JSON.parse(strResult.join("")))}})}callBackData(JSON.parse(data.data))},callBackData=function(data){if(data instanceof Array)for(var i=0;i<data.length;i++)toCallMethod(data[i]);else if(data instanceof Object){if(data.hasOwnProperty("event")&&"pong"==data.event)return;toCallMethod(data)}},toCallMethod=function(data){if(data){var type="";if(data.data&&(type=generateUniqueKeyFromServer(data)),data&&data.channel){if(data.data.result){if("removeChannel"===data.channel)for(var j=0;j<stopCallBacks.length;j++){var callBack=stopCallBacks[j];if(callBack.type.toString()==type&&callBack.callBack){callBack.callBack(data,type);break}if(data.hasOwnProperty(type)){callBack.callBack(data,type);break}}return}}else uniqueKeyObj[type]&&doCallback(data,type)}},doCallback=function(data,type){for(var j=0;j<callBacks.length;j++){var callBack=callBacks[j];if(callBack.type.toString()==type&&callBack.callBack){callBack.type.indexOf("order")>-1||callBack.type.indexOf("depth")>-1?callBack.callBack(data,type):callBack.callBack(data.data,type);break}if(data.hasOwnProperty(type)){callBack.callBack(data,type);break}if(data.type.indexOf("kline")!=-1&&klineCallBack){klineCallBack(data.data,type);break}}},errorCallBackData=function(){isConnection=!1,isFixPending=!1,!isErrorCallBack&&erroCallBackFun&&erroCallBackFun(),stopPing(),reConnTimer||(reConnTimer=window.setInterval(toConnection,reConnectInterval))};this.isConnection=function(){return isConnection},this.addCallBack=function(type,callBack){callBacks.push({type:type,callBack:callBack})},this.addStopCallBack=function(type,callBack){stopCallBacks.push({type:type,callBack:callBack})},this.removeCallBack=function(type){if(callBacks&&callBacks.length>0)for(var i=0;i<callBacks.length;i++)if(callBacks[i].type.toString()==type)return callBacks.splice(i,1),!0;return!1},this.removeStopCallBack=function(type){if(stopCallBacks&&stopCallBacks.length>0)for(var i=0;i<stopCallBacks.length;i++)if(stopCallBacks[i].type.toString()==type)return stopCallBacks.splice(i,1),!0;return!1},this.addErrCallBackFun=function(callBack){erroCallBackFun=callBack},this.addSuccCallBackFun=function(callBack){conectionCallBackFun=callBack},this.addKlineCallBack=function(callBack){klineCallBack=callBack},this.fixPending=function(){isFixPending&&(!isErrorCallBack&&erroCallBackFun&&erroCallBackFun(),setTimeout(_this.fixPending,1e4))}}}(function(){"use strict";function p(b,e){var a=b.split("."),c=l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===e?c=c[d]?c[d]:c[d]={}:c[d]=e}function t(b){var d,f,g,h,k,m,r,n,s,J,e=b.length,a=0,c=Number.POSITIVE_INFINITY;for(n=0;n<e;++n)b[n]>a&&(a=b[n]),b[n]<c&&(c=b[n]);for(d=1<<a,f=new(q?Uint32Array:Array)(d),g=1,h=0,k=2;g<=a;){for(n=0;n<e;++n)if(b[n]===g){for(m=0,r=h,s=0;s<g;++s)m=m<<1|1&r,r>>=1;for(J=g<<16|n,s=m;s<d;s+=k)f[s]=J;++h}++g,h<<=1,k<<=1}return[f,a,c]}function u(b,e){switch(this.g=[],this.h=32768,this.c=this.f=this.d=this.k=0,this.input=q?new Uint8Array(b):b,this.l=!1,this.i=v,this.q=!1,!e&&(e={})||(e.index&&(this.d=e.index),e.bufferSize&&(this.h=e.bufferSize),e.bufferType&&(this.i=e.bufferType),e.resize&&(this.q=e.resize)),this.i){case w:this.a=32768,this.b=new(q?Uint8Array:Array)(32768+this.h+258);break;case v:this.a=0,this.b=new(q?Uint8Array:Array)(this.h),this.e=this.v,this.m=this.s,this.j=this.t;break;default:throw Error("invalid inflate mode")}}function x(b,e){for(var h,a=b.f,c=b.c,d=b.input,f=b.d,g=d.length;c<e;){if(f>=g)throw Error("input buffer is broken");a|=d[f++]<<c,c+=8}return h=a&(1<<e)-1,b.f=a>>>e,b.c=c-e,b.d=f,h}function S(b,e){for(var m,r,a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h=e[0],k=e[1];c<k&&!(f>=g);)a|=d[f++]<<c,c+=8;return m=h[a&(1<<k)-1],r=m>>>16,b.f=a>>r,b.c=c-r,b.d=f,65535&m}function A(b){function e(a,b,c){var e,f,g,d=this.p;for(g=0;g<a;)switch(e=S(this,b)){case 16:for(f=3+x(this,2);f--;)c[g++]=d;break;case 17:for(f=3+x(this,3);f--;)c[g++]=0;d=0;break;case 18:for(f=11+x(this,7);f--;)c[g++]=0;d=0;break;default:d=c[g++]=e}return this.p=d,c}var g,h,k,m,a=x(b,5)+257,c=x(b,5)+1,d=x(b,4)+4,f=new(q?Uint8Array:Array)(C.length);for(m=0;m<d;++m)f[C[m]]=x(b,3);if(!q)for(m=d,d=f.length;m<d;++m)f[C[m]]=0;g=t(f),h=new(q?Uint8Array:Array)(a),k=new(q?Uint8Array:Array)(c),b.p=0,b.j(t(e.call(b,a,g,h)),t(e.call(b,c,g,k)))}var l=this,q="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView,w=0,v=1;u.prototype.u=function(){for(;!this.l;){var b=x(this,3);switch(1&b&&(this.l=!0),b>>>=1){case 0:var e=this.input,a=this.d,c=this.b,d=this.a,f=e.length,g=void 0,h=void 0,k=c.length,m=void 0;if(this.c=this.f=0,a+1>=f)throw Error("invalid uncompressed block header: LEN");if(g=e[a++]|e[a++]<<8,a+1>=f)throw Error("invalid uncompressed block header: NLEN");if(h=e[a++]|e[a++]<<8,g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>e.length)throw Error("input buffer is broken");switch(this.i){case w:for(;d+g>c.length;){if(m=k-d,g-=m,q)c.set(e.subarray(a,a+m),d),d+=m,a+=m;else for(;m--;)c[d++]=e[a++];this.a=d,c=this.e(),d=this.a}break;case v:for(;d+g>c.length;)c=this.e({o:2});break;default:throw Error("invalid inflate mode")}if(q)c.set(e.subarray(a,a+g),d),d+=g,a+=g;else for(;g--;)c[d++]=e[a++];this.d=a,this.a=d,this.b=c;break;case 1:this.j(y,z);break;case 2:A(this);break;default:throw Error("unknown BTYPE: "+b)}}return this.m()};var N,O,B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],C=q?new Uint16Array(B):B,D=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],E=q?new Uint16Array(D):D,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],G=q?new Uint8Array(F):F,H=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],I=q?new Uint16Array(H):H,K=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],L=q?new Uint8Array(K):K,M=new(q?Uint8Array:Array)(288);for(N=0,O=M.length;N<O;++N)M[N]=143>=N?8:255>=N?9:279>=N?7:8;var Q,R,y=t(M),P=new(q?Uint8Array:Array)(30);for(Q=0,R=P.length;Q<R;++Q)P[Q]=5;var z=t(P);u.prototype.j=function(b,e){var a=this.b,c=this.a;this.n=b;for(var f,g,h,k,d=a.length-258;256!==(f=S(this,b));)if(256>f)c>=d&&(this.a=c,a=this.e(),c=this.a),a[c++]=f;else for(g=f-257,k=E[g],0<G[g]&&(k+=x(this,G[g])),f=S(this,e),h=I[f],0<L[f]&&(h+=x(this,L[f])),c>=d&&(this.a=c,a=this.e(),c=this.a);k--;)a[c]=a[c++-h];for(;8<=this.c;)this.c-=8,this.d--;this.a=c},u.prototype.t=function(b,e){var a=this.b,c=this.a;this.n=b;for(var f,g,h,k,d=a.length;256!==(f=S(this,b));)if(256>f)c>=d&&(a=this.e(),d=a.length),a[c++]=f;else for(g=f-257,k=E[g],0<G[g]&&(k+=x(this,G[g])),f=S(this,e),h=I[f],0<L[f]&&(h+=x(this,L[f])),c+k>d&&(a=this.e(),d=a.length);k--;)a[c]=a[c++-h];for(;8<=this.c;)this.c-=8,this.d--;this.a=c},u.prototype.e=function(){var a,c,b=new(q?Uint8Array:Array)(this.a-32768),e=this.a-32768,d=this.b;if(q)b.set(d.subarray(32768,b.length));else for(a=0,c=b.length;a<c;++a)b[a]=d[a+32768];if(this.g.push(b),this.k+=b.length,q)d.set(d.subarray(e,e+32768));else for(a=0;32768>a;++a)d[a]=d[e+a];return this.a=32768,d},u.prototype.v=function(b){var e,c,d,f,a=this.input.length/this.d+1|0,g=this.input,h=this.b;return b&&("number"==typeof b.o&&(a=b.o),"number"==typeof b.r&&(a+=b.r)),2>a?(c=(g.length-this.d)/this.n[2],f=258*(c/2)|0,d=f<h.length?h.length+f:h.length<<1):d=h.length*a,q?(e=new Uint8Array(d),e.set(h)):e=h,this.b=e},u.prototype.m=function(){var c,f,g,h,k,b=0,e=this.b,a=this.g,d=new(q?Uint8Array:Array)(this.k+(this.a-32768));if(0===a.length)return q?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);for(f=0,g=a.length;f<g;++f)for(c=a[f],h=0,k=c.length;h<k;++h)d[b++]=c[h];for(f=32768,g=this.a;f<g;++f)d[b++]=e[f];return this.g=[],this.buffer=d},u.prototype.s=function(){var b,e=this.a;return q?this.q?(b=new Uint8Array(e),b.set(this.b.subarray(0,e))):b=this.b.subarray(0,e):(this.b.length>e&&(this.b.length=e),b=this.b),this.buffer=b},p("Zlib.RawInflate",u),p("Zlib.RawInflate.prototype.decompress",u.prototype.u);var U,V,W,X,T={ADAPTIVE:v,BLOCK:w};if(Object.keys)U=Object.keys(T);else for(V in U=[],W=0,T)U[W++]=V;for(W=0,X=U.length;W<X;++W)V=U[W],p("Zlib.RawInflate.BufferType."+V,T[V])}).call(this),"function"==typeof define&&define.amd?define([],function(){return WebSocketUtil}):window.WebSocketUtil=WebSocketUtil;
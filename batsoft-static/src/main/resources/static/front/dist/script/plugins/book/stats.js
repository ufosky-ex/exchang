(function(d){d.MtaH5=d.MtaH5||{};MtaH5.hack=function(){var d=document.getElementsByName("MTAH5"),n={conf:{autoReport:1,senseHash:1,senseQuery:0,userReport:0},user:{user_id:""}};if(0==d.length)for(var r=document.getElementsByTagName("script"),p=0;p<r.length;p++)if("undefined"!==typeof r[p].attributes.name&&"MTAH5"==r[p].attributes.name.nodeValue){d=[];d.push(r[p]);break}0<d.length&&function(){"undefined"!==typeof d[0].attributes.sid&&(n.conf.sid=d[0].attributes.sid.nodeValue);"undefined"!==typeof d[0].attributes.cid&&
(n.conf.cid=d[0].attributes.cid.nodeValue);"object"===typeof _mtac&&function(){for(var d in _mtac)_mtac.hasOwnProperty(d)&&(n.conf[d]=_mtac[d])}();"object"===typeof _user&&function(){for(var d in _user)n.user.hasOwnProperty(d)&&(n.user[d]=_user[d])}()}();n.conf.user=n.user;return n}})(this);
(function(d,t){function n(a){a=window.localStorage?localStorage.getItem(a)||sessionStorage.getItem(a):(a=document.cookie.match(new RegExp("(?:^|;\\s)"+a+"=(.*?)(?:;\\s|$)")))?a[1]:"";return a}function r(a,b,c){if(window.localStorage)try{c?localStorage.setItem(a,b):sessionStorage.setItem(a,b)}catch(h){}else{var d=window.location.host,k={"com.cn":1,"js.cn":1,"net.cn":1,"gov.cn":1,"com.hk":1,"co.nz":1},f=d.split(".");2<f.length&&(d=(k[f.slice(-2).join(".")]?f.slice(-3):f.slice(-2)).join("."));document.cookie=
  a+"="+b+";path=/;domain="+d+(c?";expires="+c:"")}}function p(a){var b={};if(void 0===a){var c=window.location;a=c.host;var d=c.pathname;var k=c.search.substr(1);c=c.hash}else c=a.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i)||[],a=c[1],d=c[2],k=c[3],c=c[4];void 0!==c&&(c=c.replace(/\"|\'|\<|\>/ig,"M"));if(k)for(var f=k.split("&"),h=0,m=f.length;h<m;h++)if(-1!=f[h].indexOf("=")){var l=f[h].indexOf("="),g=f[h].slice(0,l);l=f[h].slice(l+1);b[g]=
  l}return{host:a,path:d,search:k,hash:c,param:b}}function x(a){if("11101110100011101110001001001"===parseInt(d.sid).toString(2)){a=a||"";for(var b=[0,1,2,3,4,5,6,7,8,9],c=10;1<c;c--){var e=Math.floor(10*Math.random()),k=b[e];b[e]=b[c-1];b[c-1]=k}for(c=e=0;4>c;c++)e=10*e+b[c];a+=e+""+ +new Date}else a=(a||"")+Math.round(2147483647*(Math.random()||.5))*+new Date%1E10;return a}function u(){var a=p(),b={dm:a.host,pvi:"",si:"",url:a.path,arg:encodeURIComponent(a.search||"").substr(0,512),ty:0};b.pvi=function(){if(d.userReport){var a=
  n("pgv_uid");a&&a==d.user.user_id||(b.ty=1,r("pgv_uid",d.user.user_id,"Sun, 18 Jan 2038 00:00:00 GMT;"));a=d.user.user_id}else a=n("pgv_pvi"),a||(b.ty=1,a=x(),r("pgv_pvi",a,"Sun, 18 Jan 2038 00:00:00 GMT;"));return a}();b.si=function(){var a=n("pgv_si");a||(a=x("s"),r("pgv_si",a));return a}();b.url=function(){var b=a.path;d.senseQuery&&(b+=a.search?"?"+encodeURIComponent(a.search||"").substr(0,512):"");d.senseHash&&(b+=a.hash?encodeURIComponent(a.hash):"");return b}();return b}function w(){var a=
  p(document.referrer),b=p();return{rdm:a.host,rurl:a.path,rarg:encodeURIComponent(a.search||"").substr(0,512),adt:b.param.ADTAG||b.param.adtag||b.param.CKTAG||b.param.cktag||b.param.PTAG||b.param.ptag}}function v(){try{var a=navigator,b=screen||{width:"",height:"",colorDepth:""};var d={scr:b.width+"x"+b.height,scl:b.colorDepth+"-bit",lg:(a.language||a.userLanguage).toLowerCase(),tz:(new Date).getTimezoneOffset()/60}}catch(e){return{}}return d}function y(a){a=a||{};for(var b in a)a.hasOwnProperty(b)&&
(d[b]=a[b]);if(d.sid)if(!d.userReport||d.user.user_id&&Number.isInteger(d.user.user_id)){a=[];for(var c=0,e=[u(),w(),{r2:d.sid},v(),{random:+new Date}],k=e.length;c<k;c++)for(b in e[c])e[c].hasOwnProperty(b)&&a.push(b+"="+("undefined"==typeof e[c][b]?"":e[c][b]));var f=function(a){a=Ta.src=("https:"==document.location.protocol?"https://pingtas.qq.com/webview":"http://pingtcss.qq.com")+"/pingd?"+a.join("&");var b=new Image;Ta[d.sid]=b;b.onload=b.onerror=b.onabort=function(){b=b.onload=b.onerror=b.onabort=
  null;Ta[d.sid]=!0};b.src=a};f(a);d.performanceMonitor&&(b=function(){if(window.performance){var a=window.performance.timing;var b={value:a.domainLookupEnd-a.domainLookupStart},c={value:a.connectEnd-a.connectStart},g={value:a.responseStart-(a.requestStart||a.responseStart+1)},e=a.responseEnd-a.responseStart;a.domContentLoadedEventStart?0>e&&(e=0):e=-1;a={domainLookupTime:b,connectTime:c,requestTime:g,resourcesLoadedTime:{value:e},domParsingTime:{value:a.domContentLoadedEventStart?a.domInteractive-
a.domLoading:-1},domContentLoadedTime:{value:a.domContentLoadedEventStart?a.domContentLoadedEventStart-a.fetchStart:-1}}}else a="";b=[];c=[];g=0;e=[u(),{r2:d.cid},v(),{random:+new Date}];for(var k=e.length;g<k;g++)for(var q in e[g])e[g].hasOwnProperty(q)&&c.push(q+"="+("undefined"==typeof e[g][q]?"":e[g][q]));for(q in a)a.hasOwnProperty(q)&&("domContentLoadedTime"==q?c.push("r3="+a[q].value):b.push(a[q].value));c.push("ext=pfm="+b.join("_"));f(c)},"undefined"!==typeof window.performance&&"undefined"!==
typeof window.performance.timing&&0!=window.performance.timing.loadEventEnd?b():window.attachEvent?window.attachEvent("onload",b):window.addEventListener&&window.addEventListener("load",b,!1))}else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u9009\u62e9\u4e86\u7528\u6237\u7edf\u8ba1uv\uff0c\u8bf7\u8bbe\u7f6e\u4e1a\u52a1\u7684user_id\uff0c\u9700\u4e3aint\u7c7b\u578b");else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6esid")}t.MtaH5=
  t.MtaH5||{};t.Ta=t.Ta||{};MtaH5.pgv=y;Ta.clickStat=MtaH5.clickStat=function(a,b){var c=MtaH5.hack?MtaH5.hack():"",e={};c.conf&&function(){var a=c.conf,b;for(b in a)a.hasOwnProperty(b)&&(e[b]=a[b])}();if(e.cid){var k=[],f=u(),h={r2:d.sid};f.dm="taclick";f.url=a;h.r2=e.cid;h.r5=function(a){a="undefined"===typeof a?{}:a;var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+"="+a[c]);return b.join(";")}(b);var m=0;f=[f,w(),h,v(),{random:+new Date}];for(h=f.length;m<h;m++)for(var l in f[m])f[m].hasOwnProperty(l)&&
k.push(l+"="+("undefined"==typeof f[m][l]?"":f[m][l]));k=MtaH5.src=("https:"==document.location.protocol?"https://pingtas.qq.com/webview":"http://pingtcss.qq.com")+"/pingd?"+k.join("&");var g=new Image;MtaH5["click_"+e.sid]=g;g.onload=g.onerror=g.onabort=function(){g=g.onload=g.onerror=g.onabort=null;MtaH5[e.sid]=!0};g.src=k}else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6ecid,\u8bf7\u5230\u7ba1\u7406\u53f0\u5f00\u901a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5e76\u66f4\u65b0\u7edf\u8ba1\u4ee3\u7801")};
  Ta.clickShare=MtaH5.clickShare=function(a){var b=MtaH5.hack?MtaH5.hack():"",c={},e=p();e=e.param.CKTAG||e.param.ckatg;var k="undefined"===typeof e?[]:e.split(".");b.conf&&function(){var a=b.conf,d;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d])}();if(c.cid){e=[];var f=u(),h={r2:d.sid};f.dm="taclick_share";f.url="mtah5-share-"+a;h.r2=c.cid;h.r5=function(a,b){var c=[];2===a.length&&a[0]==b&&c.push(a[0]+"="+a[1]);return c.join(";")}(k,"mtah5_share");a=0;f=[f,w(),h,v(),{random:+new Date}];for(h=f.length;a<
  h;a++)for(var m in f[a])f[a].hasOwnProperty(m)&&e.push(m+"="+("undefined"==typeof f[a][m]?"":f[a][m]));m=MtaH5.src=("https:"==document.location.protocol?"https://pingtas.qq.com/webview":"http://pingtcss.qq.com")+"/pingd?"+e.join("&");var l=new Image;MtaH5["click_"+c.sid]=l;l.onload=l.onerror=l.onabort=function(){l=l.onload=l.onerror=l.onabort=null;MtaH5[c.sid]=!0};l.src=m}};var z=MtaH5.hack?MtaH5.hack():{};z.conf&&function(){var a=z.conf,b;for(b in a)a.hasOwnProperty(b)&&(d[b]=a[b])}();d.autoReport&&
  y()})({},this);
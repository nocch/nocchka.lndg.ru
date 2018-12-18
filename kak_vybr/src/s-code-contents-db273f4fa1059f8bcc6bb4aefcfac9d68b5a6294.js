s = new AppMeasurement();


if (location.host.indexOf("dev") > 0 || location.host.indexOf("stg") > 0 || (location.host.indexOf("www") == -1 )) {
		s.account = "lgerudev";
	}else{
		s.account = "lgeru";
	}

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.5.2
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com
*/
function AppMeasurement(){var a=this;a.version="1.5.2";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.zb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.ob=function(a){try{console.log(a)}catch(b){}};a.za=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.gb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.gb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.G=[];a.ba=function(c,b,d){if(a.ta)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ca)for(a.ca=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ca=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.G.push({m:c,a:b,t:e}),a.ca||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.na();0<a.G.length;){d=a.G.shift();if(b&&!d.t&&d.t>c){a.G.unshift(d);setTimeout(a.delayReady,
parseInt(a.maxDelay/2));break}a.ta=1;a[d.m].apply(a,d.a);a.ta=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ba("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.K,(m=a.lightTrackVars)&&(m=","+m+","+a.ga.join(",")+",");else{d=a.c;if(a.pe||a.linkType)m=a.linkTrackVars,
f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].yb,f=a[e].xb));m&&(m=","+m+","+a.A.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.B=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.B(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.za(w)&&("prop"==
k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.ib=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.K,(n=a.lightTrackVars)&&(n=","+n+","+a.ga.join(",")+",");else{b=a.c;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].yb,r=a[e].xb));n&&(n=","+n+","+a.A.join(",")+",");r&&(r=","+r+",",
n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.B("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.B("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&
"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.B("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.B("mts",a[e],n,e));g="";break;default:a.za(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.u=function(a){var b=a.tagName;if("undefined"!=""+a.Cb||"undefined"!=""+a.sb&&"HTML"!=(""+a.sb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.va=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.H=function(c){var b=a.u(c),d,f,e="",g=0;return b&&
(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.va(c),e)?{id:e.substring(0,100),type:g}:0};a.Ab=function(c){for(var b=a.u(c),d=a.H(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.u(c),d=a.H(c);
d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.rb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.ha=1;d||(a.ha=0,d=a.clickObject);if(d){c=a.u(d);for(b=a.H(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.u(d),b=a.H(d);b&&"BODY"!=c||(d=0);if(d){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.ha=1;!e&&d&&(e=a.va(d));e&&!a.linkLeaveQueryString&&
(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.ya(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?
(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,
100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.jb=function(){var c=a.ha,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");if(c||a.e){c&&
!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(m=0;m<f.length;m++)for(e&&(k=b[p].join(","),k==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),g=0;g<b[p].length;g++)k=b[p][g],k==f[m]&&(e&&(a.e+="&u="+a.escape(k)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(g,1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};
a.kb=function(){if(!a.wb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?
a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Bb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.wb=1}};a.L={};a.loadModule=function(c,b){var d=a.L[c];if(!d){d=k["AppMeasurement_Module_"+
c]?new k["AppMeasurement_Module_"+c](a):{};a.L[c]=a[c]=d;d.Oa=function(){return d.Sa};d.Ta=function(b){if(d.Sa=b)a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Oa,set:d.Ta}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.L)if(!Object.prototype[b]&&(d=a.L[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.mb=function(){var c=
Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.M=function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.oa:a.c,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Ha=function(c,b){var d,
f,e,g;for(d=0;2>d;d++)for(f=0<d?a.oa:a.c,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.eb=function(a){var b,d,f,e,g,m=0,k,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?m=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(m=",p,ei,"),
m&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=m.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?k=n+"&"+q:q=""}d=253-(k.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.Na=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;
b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.Y=!1;a.D=!1;a.Ua=function(){a.D=!0;a.i()};a.W=!1;a.Q=!1;a.Ra=function(c){a.marketingCloudVisitorID=c;a.Q=!0;a.i()};a.T=!1;a.N=!1;a.Ja=function(c){a.analyticsVisitorID=c;a.N=!0;a.i()};a.V=!1;a.P=!1;a.La=function(c){a.audienceManagerLocationHint=c;a.P=!0;a.i()};a.U=!1;a.O=!1;a.Ka=function(c){a.audienceManagerBlob=c;a.O=!0;a.i()};a.Ma=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),
!1):!0};a.X=!1;a.C=!1;a.na=function(){a.C=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.Y||a.D||(a.Na(a.Ua)?a.D=!0:a.Y=!0);if(a.Y&&!a.D)return!1;b&&b.isAllowed()&&(a.W||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.W=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Ra]),a.marketingCloudVisitorID&&(a.Q=!0)),a.T||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.T=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Ja]),a.analyticsVisitorID&&(a.N=!0)),a.V||
a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.V=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.La]),a.audienceManagerLocationHint&&(a.P=!0)),a.U||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.U=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ka]),a.audienceManagerBlob&&(a.O=!0)),a.W&&!a.Q&&!a.marketingCloudVisitorID||a.T&&!a.N&&!a.analyticsVisitorID||a.V&&!a.P&&!a.audienceManagerLocationHint||a.U&&!a.O&&!a.audienceManagerBlob)&&(c=!1);a.X||
a.C||(a.Ma(a.na)?a.C=!0:a.X=!0);a.X&&!a.C&&(c=!1);return c};a.k=q;a.o=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Ya=c;f.Xa=b;f.Va=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.o&&(a.o=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.o&&(clearInterval(a.o),a.o=0),a.k!=q))for(;0<a.k.length;)c=a.k.shift(),c.Xa.apply(c.Ya,c.Va)};a.Pa=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ha(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.hb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.fb&&(a.authState=a.visitor.fb()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Pa(c)||(b&&a.M(b),c&&(d={},a.Ha(d,0),a.M(c)),a.mb()&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.hb()),a.rb(),a.usePlugins&&a.doPlugins&&
a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ia||(a.referrer=r.document.referrer),a.Ia=1,a.referrer=a.eb(a.referrer),a.l("_g")),a.jb()&&!a.abort&&(a.kb(),g+=a.ib(),a.qb(e,g),a.l("_t"),a.referrer=""))),c&&a.M(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=
a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.q=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.c.length;c++)if(b=a.c[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==
b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.qb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&
a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.vb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.bb(d);a.da()};a.bb=function(c){a.g||a.lb();a.g.push(c);a.fa=a.r();a.Fa()};a.lb=function(){a.g=a.nb();a.g||(a.g=[])};a.nb=function(){var c,b;if(a.ka()){try{(b=k.localStorage.getItem(a.ia()))&&(c=k.JSON.parse(b))}catch(d){}return c}};
a.ka=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.wa=function(){var c=0;a.g&&(c=a.g.length);a.v&&c++;return c};a.da=function(){if(!a.v)if(a.xa=q,a.ja)a.fa>a.J&&a.Da(a.g),a.ma(500);else{var c=a.Wa();if(0<c)a.ma(c);else if(c=a.ua())a.v=1,a.pb(c),a.tb(c)}};a.ma=function(c){a.xa||(c||(c=0),a.xa=setTimeout(a.da,c))};a.Wa=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.r()-a.Ca;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.ua=function(){if(0<a.g.length)return a.g.shift()};a.pb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.ob(b)}};a.Qa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.S=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.S=!0,a.R=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.R=function(a){return k.$.parseJSON(a)},a.S=!0):a.R=function(){return null};a.tb=function(c){var b,
d,f;a.Qa()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.S?b.pa=!0:b=0));!b&&a.Ga&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="");b.ra=function(){try{a.la&&(clearTimeout(a.la),a.la=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};b.onload=b.ub=function(){b.ra();a.ab();a.Z();a.v=0;a.da();if(b.pa){b.pa=!1;try{var c=a.R(b.responseText);AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.cb=function(){b.ra();(a.trackOffline||a.ja)&&a.v&&a.g.unshift(a.$a);a.v=0;a.fa>a.J&&a.Da(a.g);a.Z();a.ma(500)};b.onreadystatechange=function(){4==b.readyState&&
(200==b.status?b.ub():b.cb())};a.Ca=a.r();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Aa)try{f.removeChild(a.Aa)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Aa=a.Za}b.abort&&(a.la=setTimeout(b.abort,5E3));a.$a=c;a.Za=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.F||a.q)a.forcedLinkTrackingTimeout||
(a.forcedLinkTrackingTimeout=250),a.aa=setTimeout(a.Z,a.forcedLinkTrackingTimeout)};a.ab=function(){if(a.ka()&&!(a.Ba>a.J))try{k.localStorage.removeItem(a.ia()),a.Ba=a.r()}catch(c){}};a.Da=function(c){if(a.ka()){a.Fa();try{k.localStorage.setItem(a.ia(),k.JSON.stringify(c)),a.J=a.r()}catch(b){}}};a.Fa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.ua()}};a.forceOffline=function(){a.ja=!0};a.forceOnline=function(){a.ja=!1};a.ia=
function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.r=function(){return(new Date).getTime()};a.ya=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.vb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.M(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],
f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&
b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.A="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");
a.c=a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.K=a.ga.slice(0);a.oa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.c.push("prop"+n),a.K.push("prop"+n)),a.c.push("eVar"+n),a.K.push("eVar"+n),6>n&&a.c.push("hier"+n),4>n&&a.c.push("list"+n);n="latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");a.c=a.c.concat(n);a.A=a.A.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";
a.Ca=0;a.fa=0;a.J=0;a.Ba=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ga=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Ga=!0}}catch(z){}a.Z=function(){a.aa&&(k.clearTimeout(a.aa),a.aa=q);a.j&&a.F&&a.j.dispatchEvent(a.F);a.q&&("function"==typeof a.q?a.q():a.j&&a.j.href&&(a.d.location=a.j.href));a.j=
a.F=a.q=0};a.Ea=function(){a.b=a.d.body;a.b?(a.p=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.qa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.p,!1);else{a.b.removeEventListener("click",a.p,!0);a.qa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.I&&a.I==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.I=a.clickObject;a.ea&&(clearTimeout(a.ea),a.ea=0);a.ea=setTimeout(function(){a.I==m&&(a.I=0)},1E4);f=a.wa();a.track();if(f<a.wa()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.ya(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.F=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.p):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.qa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.p,!0)),a.b.addEventListener("click",a.p,!1))):setTimeout(a.Ea,30)};a.Ea()}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();


/* Basic setting */
	s.charSet = "UTF-8";
	s.trackDownloadLinks = true;
	s.trackExternalLinks = true;
	s.trackInlineStats = true;
	s.linkDownloadFileTypes = "xml,vxd,vsd,txt,rar,svg,m4v,eps,csv,exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,docx,pdf,xls,xlsx,ppt,pptx";
	s.linkInternalFilters = "javascript:,ru.lge.com,www.lge.com,lge.com,lg.com,www.lg.com,wwwstg.lg.com";
	s.linkLeaveQueryString = false;
	s.linkTrackVars = "None";
	s.linkTrackEvents = "None";
	s.usePlugins = true;
/* End of Basic setting */

/* SSL Tracking Server */
	s.visitorNamespace = "lgelectronics";
	s.trackingServer = "omniture.lg.com";
	s.trackingServerSecure = "tracking.lg.com";
/* End of SSL Tracking Server */

var  adservConfig = {
        tEvar:              '',
        aID:                '',
        cID:                '',
        gID:                '',
        requestURL:         "",
        maxDelay:           "",
        visitCookie:        "",
        clickThroughParam:  "",
        searchCenterParam:  ""
      };

function s_doPlugins(a) {
	
	if (!a.campaign) {
			a.campaign = a.Util.getQueryParam("cmpid")
		}
		
	if (a.prop1) {
			a.eVar1 = a.prop1
	  }
	
	if (a.prop2) {
			a.eVar2 = a.prop2
		}
	
	if (a.prop3) {
			a.eVar3 = a.prop3
		}
	
	if (a.prop4) {
			a.eVar4 = a.prop4
		}
	
	if (a.prop5) {
			a.eVar5 = a.prop5
		}
	
	if (a.pageName) {
			a.eVar14 = a.pageName
		}
	
	if (a.eVar10) {
			a.products = ";" + a.eVar10
		}
	
	a.prop12 = a.getAndPersistValue(a.campaign, "s_cp_persist", 0);
	
	a.prop13 = document.URL;
	
	if (!a.eVar13) {
			a.eVar13 = a.Util.getQueryParam("intcmp")
		}
	
	a.prop23 = a.getTimeParting("h", "-8");
	
	a.prop30 = a.getVisitNum();
	   if (a.prop30) {
			a.eVar39 = a.prop30
			}
	
	a.prop31 = a.getNewRepeat();
		if (a.prop31) {
			a.eVar38 = a.prop31
		}

/* getPercentPageViewed */
  var ppv = s.getPercentPageViewed(s.pageName);
	if( ppv && typeof ppv=='object' && typeof ppv.length=='number' && ppv.length > 1) 
	{
    var ppvPageName = ppv[0]; //previous s.pageName (or URL if unspecified)
		var initalPercentViewed = ppv[1];
		var finalPercentViewed = ppv[2];
		
		s.prop72 = initalPercentViewed + '|' + finalPercentViewed;
		s.prop73= ppvPageName
  	}
/* End of getPercentPageViewed */

if(s.account == "lgeae"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111514',
        cID:                '489210',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgear"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111554',
        cID:                '489173',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeat"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111552',
        cID:                '489175',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeau"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111554',
        cID:                '489174',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgebg"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111549',
        cID:                '489180',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgecl"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111548',
        cID:                '489181',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgecn"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111547',
        cID:                '489185',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeco"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111546',
        cID:                '489190',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgede"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111541',
        cID:                '489202',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeee"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111544',
        cID:                '489195',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgefr"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111542',
        cID:                '489200',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgehellas"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111540',
        cID:                '489204',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgehk"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111539',
        cID:                '489206',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgehu"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111663',
        cID:                '489529',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeid"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111538',
        cID:                '489213',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgein"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111537',
        cID:                '489209',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeir"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111536',
        cID:                '489218',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeit"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111535',
        cID:                '489220',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgelevanten"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111534',
        cID:                '489226',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgelt"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111532',
        cID:                '489179',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgelv"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111533',
        cID:                '489177',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgemy"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111531',
        cID:                '489184',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgenl"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111530',
        cID:                '489186',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgenordicdk"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111545',
        cID:                '489193',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgenordicfi"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111543',
        cID:                '489198',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgenordicno"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111529',
        cID:                '489187',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgenordicsv"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111517',
        cID:                '489205',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgepe"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111527',
        cID:                '489189',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeph"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111528',
        cID:                '489191',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgepl"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111526',
        cID:                '489192',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgept"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111525',
        cID:                '489194',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgero"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111523',
        cID:                '489196',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeru"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111524',
        cID:                '489197',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgesa"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111522',
        cID:                '489199',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgesg"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111518',
        cID:                '489203',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgesr"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111519',
        cID:                '489201',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgetnen"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111515',
        cID:                '489208',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgetw"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111516',
        cID:                '489207',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeuk"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111513',
        cID:                '489212',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}else if(s.account == "lgeve"){
			 adservConfig = {
        tEvar:              'eVar71',
        aID:                '111512',
        cID:                '489214',
        gID:                'EB_ACM:',
        requestURL:         "http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]",
        maxDelay:           "750",
        visitCookie:        "s_adserv",
        clickThroughParam:  "CID",
        searchCenterParam:  "s_kwcid"
      };
		}
		
		s.maxDelay = adservConfig.maxDelay;
    s.loadModule("Integrate")
    s.Integrate.onLoad=function(s,m) {
    var adservCheck = s.partnerADSERVCheck(adservConfig);
    if (adservCheck) {
        s.Integrate.add("Sizmek_ACM");
        s.Integrate.Sizmek_ACM.tEvar=adservConfig.tEvar;
        s.Integrate.Sizmek_ACM.aID=adservConfig.aID;
        s.Integrate.Sizmek_ACM.cID=adservConfig.cID;
        s.Integrate.Sizmek_ACM.gID=adservConfig.gID;
        s.Integrate.Sizmek_ACM.tVar=adservConfig.tEvar;
        s.Integrate.Sizmek_ACM.get(adservConfig.requestURL);

        s.Integrate.Sizmek_ACM.setVars=function(s,p){
            var
                at=p.lastImpTime,
                a1=p.lastImpSId,
                a2=p.lastImpPId,
                a3=p.lastImpId,
                bt=p.lastClkTime,
                b1=p.lastClkSId,
                b2=p.lastClkPId,
                b3=p.lastClkId;

            if(((at&&a1&&a2&&a3)||(bt&&b1&&b2&&b3))&&!p.errorCode)s[p.tVar]=adservConfig.gID+(at?at:0)+":"+(a1?a1:0)+":"+(a2?a2:0)+":"+(a3?a3:0)+":"+(bt?bt:0)+":"+(b1?b1:0)+":"+(b2?b2:0)+":"+(b3?b3:0)
        }
    }
   }

}

s.doPlugins = s_doPlugins;

/* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat */
s.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
s.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/* End of Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat */

/* Plugin: getPercentPageViewed v1.74 */
 s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'],K='s_ppv',P=K+'l',I=n||s.pageName||documen"
+"t.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){"
+"var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a"
+"[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a"
+"[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9"
+"]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w("
+"K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=wind"
+"ow,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen|"
+"|{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWi"
+"dth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W"
+".s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e"
+"=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s"
+"&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho"
+"],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight|"
+"|E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePi"
+"xelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.r"
+"ound(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,a=s"
+".s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v"
+"!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iP"
+"od|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')"
+"&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if"
+"(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+"
+"V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':"
+"o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)"
+"};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);"
+"else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!argument"
+"s.length||n=='-'?a[1]:a");
/* End of Plugin: getPercentPageViewed v1.74 */

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/* End of Plugin: getPreviousValue */

/*                                                                 
* Plugin: getVisitNum - version 3.0
*/
s.getVisitNum=new Function("tp","c","c2",""
+"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
+"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
+"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
+"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
+"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
+"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
+"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
+"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
+"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
+";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo=new Function("m","y",""
+"var d=new Date(y,m+1,0);return d.getDate();");
s.endof=new Function("x",""
+"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
+"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
+"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
+"t;");


/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");


/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");


/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");



/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

	/*
  * Partner Plugin: ADSERV Check 1.0 - Restrict ADSERV calls to once a visit, per report suite, per click
  * through. Used in conjunction with genesis_event_config table. Deduplicates SCM hits.
  */
  s.partnerADSERVCheck=new Function("cfg",""+"var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,"+"t=new Date,cn=0,ca=new Array,aa=new Array,cs=new Array;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);"+"if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn]=aa[i];c"+"n++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;v=1;}if(s.wd)q=s.wd.location.search.toLowerCase("+");else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLowerCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){v=1;}else i"+"f(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}return v>=1;");

	/*
  * Utility Function: vpr - set the variable vs with value v
  */
  s.vpr=new Function("vs","v","if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

	/*
  * Plugin Utility: Replace v1.0
  */
  s.repl=new Function("x","o","n",""+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
  
/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

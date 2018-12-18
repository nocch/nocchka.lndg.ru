
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"613",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";var b=",["escape",["macro",1],8,16],".match(\/login\\\/([a-z]*)\/);null!=b[1]\u0026\u0026(a=b[1]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=location.pathname.split(\"\/\");var b=a.length;return a=3==b\u0026\u00260\u003Ea.indexOf(\"about-lg\")\u0026\u00260\u003Ea.indexOf(\"wtb\")\u0026\u00260\u003Ea.indexOf(\"lg-live\")\u0026\u00260\u003Ea.indexOf(\"commercial\")\u0026\u00260\u003Ea.indexOf(\"support\")\u0026\u00260\u003Ea.indexOf(\"products\")?\"list page\":4==b\u0026\u00260\u003Ea[3].indexOf(\"lg-\")\u0026\u00260\u003Ea.indexOf(\"products\")?\"list page\":4==b\u0026\u00260==a[3].indexOf(\"lg-\")?\"detail page\":1\u003Ca.indexOf(\"wtb\")||1\u003Ca.indexOf(\"products\")?\"where-to-buy\":2==b\u0026\u00261==a.indexOf(\"ru\")?\"home page\":\"else page\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;a=a.getHours();return a=4\u003Ea?\"0-4\":8\u003Ea?\"4-8\":12\u003Ea?\"8-12\":16\u003Ea?\"12-16\":20\u003Ea?\"16-20\":\"20-24\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByTagName(\"HTML\")[0].getAttribute(\"data-product-number\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return\"localStorage\"in window\u0026\u0026null!==window.localStorage}catch(a){return!1}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga_info"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function l(){var b,a=",["escape",["macro",7],8,16],";a=a.split(\"\\x26\");for(b=0;b\u003Ca.length;b++)if(a[b]=a[b].split(\"\\x3d\"),\"gclid\"==a[b][0])return\"cgid\\x3d\"+a[b][1];var d=[];if(a.forEach(function(a){0==a[0].indexOf(\"utm_\")\u0026\u0026(d[a[0]]=a[1])}),d.utm_source)return\"cutm\\x3d\"+d.utm_source+\",\"+(d.utm_medium||\"\")+\",\"+(d.utm_campaign||\"\")+\",\"+(d.utm_term||\"\")+\",\"+(d.utm_content||\"\");b=",["escape",["macro",8],8,16],";var c=",["escape",["macro",9],8,16],";return c\u0026\u0026c!=b?(b=[\"lg.com\"],b.forEach(function(a){return-1!=c.indexOf(a)?\n!1:void 0}),b=",["escape",["macro",10],8,16],",\"r\\x3d\"+b.substring(0,250)):!1}var c,f=(new Date).getTime(),a=",["escape",["macro",11],8,16],",e=l();if(\"function\"!=typeof ga)return!1;if(c=ga.getAll()[0].get(\"clientId\"),a){a=a.split(\"|\");var h=a[0]||!1,k=a[1]||!1,g=a[2]||!1;a=a[3]||0;var m=18E5;return(!h||h!=c||!k||f-k\u003Em||e\u0026\u0026g!=e)\u0026\u0026(g=e,a=0),{cid:c,thishittime:f,source:g,productviewlast:a}}return{cid:c,thishittime:f,source:e,productviewlast:0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.cookie.match(\"(?:^|;)\\\\s*_ga\\x3d([^;]*)\"),b=a?decodeURIComponent(a[1]):null;b\u0026\u0026(a=b.match(\/(\\d+\\.\\d+)$\/));if(a=a?a[1]:null)return a})();"]
    },{
      "function":"__u"
    },{
      "function":"__e"
    },{
      "function":"__r"
    },{
      "function":"__u"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__c",
      "vtp_value":"UA-35438634-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"label",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"action",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TimeOnSite.time"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventNonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__e"
    },{
      "function":"__d",
      "vtp_elementSelector":"a[class=\"button wtb-googleTrack\"]",
      "vtp_attributeName":"class",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"a[class=\"small button wtb-googleTrack\"]",
      "vtp_attributeName":"class",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"time_on_page_interval",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"percent_of_scrolling_interval",
      "vtp_dataLayerVersion":2
    },{
      "function":"__gas",
      "vtp_cookieDomain":["template","auto",["macro",13]],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.shopname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.model"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"retailernname",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"sharename",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"technology",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"time_on_page",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"percent_of_scrolling",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"character",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"Series K"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"dt"
    },{
      "function":"__f"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-110081141-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":70
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"invmedia",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hpqa21ua",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"5661935",
      "vtp_ordinalStandard":["macro",17],
      "vtp_url":["macro",18],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-101423321-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":338
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-69014947-38",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":345
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Facebook",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_eventLabel":"LG Russia-FB",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":406
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Odnoklassniki",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_eventLabel":"LG Russia-OK",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":407
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Vkontakte",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_eventLabel":"LG Russia-VK",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":408
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","page","value","\/retailer_click"],["map","fieldName","title","value","Переход на ритейлера"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":409
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":"LG Russia-YT",
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":410
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Give_feedback",
      "vtp_eventLabel":"Button_give_feedback",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":411
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"G6",
      "vtp_eventLabel":"Buy",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":412
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Button review",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":"Button review",
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":416
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click button overview and review",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":"Button overview and review",
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":418
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"color",
      "vtp_eventLabel":"Beige",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":421
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Button add review",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":"Button add review",
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":438
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Product_card_block",
      "vtp_eventLabel":"Customer Reviews",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":439
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Product_card_link",
      "vtp_eventLabel":"Give feedback",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":440
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"invmedia",
      "vtp_useImageTag":false,
      "vtp_activityTag":"d7lzoiiz",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"5661935",
      "vtp_ordinalStandard":["macro",17],
      "vtp_url":["macro",18],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":441
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":["macro",25],
      "vtp_eventAction":["macro",26],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":442
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"productPages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"3TV",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":444
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"TimeOnSite",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",27],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":445
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":446
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"wtb2.24cdn.net",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":447
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"LG Q6",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":454
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"LG Q6 alpha",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":455
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"G6",
      "vtp_eventLabel":"Knew_more_about_g6",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":456
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"G6",
      "vtp_eventLabel":"Learn_more_G6",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":457
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Buy_online",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Main_menu",
      "vtp_eventLabel":"Main_menu_block",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":458
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Model card",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_eventLabel":"Retailer",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":459
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"OLED_TV_G7",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":460
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"OLED_TV_G7",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":461
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"OLED_TV_G7",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":462
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":463
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"OLED_TV_G7",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":464
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"OLED_TV_W7",
      "vtp_eventLabel":"Knew more",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":467
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Where_to_buy",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Product_page",
      "vtp_eventLabel":"Product_page_WTB",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":468
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Buy_online",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Product_page",
      "vtp_eventLabel":"Product_page_buy_IM",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":469
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"G6",
      "vtp_eventLabel":"Send_zayavka",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":478
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"G6",
      "vtp_eventLabel":"Send_zayavka_end_page",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":479
    },{
      "function":"__ga",
      "once_per_event":true,
      "vtp_detectTitle":true,
      "vtp_ignoredRef":["list"],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_allowLinker":false,
      "vtp_trackType":"TRACK_EVENT",
      "vtp_cookiePathCopy":["list"],
      "vtp_clientInfo":true,
      "vtp_campaignTrack":true,
      "vtp_eventAction":"Televisions-promo_02.05.2017",
      "vtp_anonymizeIp":false,
      "vtp_eventLabel":"More_about_action",
      "vtp_webPropertyId":["macro",22],
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_sendHitsToGoogle":true,
      "vtp_enableInPageLinkId":false,
      "vtp_forceSsl":false,
      "vtp_ignoredOrganic":["list"],
      "vtp_detectFlash":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":480
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"SpecialProject",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"TV_oled",
      "vtp_eventLabel":"Send_zayavka",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":481
    },{
      "function":"__ga",
      "once_per_event":true,
      "vtp_detectTitle":true,
      "vtp_ignoredRef":["list"],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Comment",
      "vtp_allowLinker":false,
      "vtp_trackType":"TRACK_EVENT",
      "vtp_cookiePathCopy":["list"],
      "vtp_clientInfo":true,
      "vtp_campaignTrack":true,
      "vtp_eventAction":"Television",
      "vtp_anonymizeIp":false,
      "vtp_eventLabel":"Send_comment",
      "vtp_webPropertyId":["macro",22],
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_sendHitsToGoogle":true,
      "vtp_enableInPageLinkId":false,
      "vtp_forceSsl":false,
      "vtp_ignoredOrganic":["list"],
      "vtp_detectFlash":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":482
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"G6",
      "vtp_eventLabel":"Uspej_oformit",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":483
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value","http:\/\/www.lg.com\/ru\/feedback_form"],["map","fieldName","page","value","\/feedback_form"],["map","fieldName","title","value","Форма обратной связи"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":484
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value","http:\/\/www.lg.com\/ru\/feedback_form"],["map","fieldName","page","value","\/feedback_form"],["map","fieldName","title","value","Форма обратной связи"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":485
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value","http:\/\/www.lg.com\/ru\/comment_succsess"],["map","fieldName","page","value","\/comment_succsess"],["map","fieldName","title","value","Подтверждение отправки отзыва"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":486
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"WTB",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",21],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":487
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",32],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",25],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":533
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"LandingPageWTB",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",21],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":534
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"LandingPageWTB",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",21],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":535
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Более 1 минуты",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Более 1 минуты",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":536
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Более 2 минут",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Более 2 минут",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":537
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Более 30 секунд",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Более 30 секунд",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":538
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/button-reviews"],["map","fieldName","title","value","Кнопка отзывы"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":539
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Кнопка-Домой",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":"Кнопка-Домой",
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":540
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",35],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":["macro",36],
      "vtp_eventAction":["macro",37],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":541
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Карточка товара",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventLabel":["macro",1],
      "vtp_eventAction":"click",
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_eventValue":"1",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":542
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventLabel":["template","Time on page ",["macro",38]],
      "vtp_eventAction":["template","Scrolling to ",["macro",39]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":543
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_useHashDecorateForm":["macro",15],
      "vtp_trackType":"DECORATE_FORM",
      "vtp_gaSettings":["macro",40],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsDecorateForm":true,
      "tag_id":737
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"LG Q6",
      "vtp_eventLabel":"Technical characteristics",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":757
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_Project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Instaview_Manizha",
      "vtp_eventLabel":"Instaview_Manizha_WTB",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":764
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Instaview_Manizha",
      "vtp_eventLabel":"Instaview_Manizha_retailer_eldorado",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":765
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Instaview_Manizha",
      "vtp_eventLabel":"instaview_manizha_wtb_mvideo",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":766
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Special_project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Instaview_Manizha",
      "vtp_eventLabel":"Instaview_Manizha_wtb_tehnopark",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":767
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",37],
      "vtp_eventLabel":["macro",31],
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":768
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"861514636",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",18],
      "tag_id":817
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Twinwash_Special_Project",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",43],
      "vtp_eventLabel":["macro",44],
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":818
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":825
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-35438634-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":826
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Более 15 секунд",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Более 15 секунд",
      "vtp_eventLabel":["macro",21],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":827
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",46],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",35]," - ",["macro",19]],
      "vtp_eventLabel":["macro",36],
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":834
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"WTB",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",24],
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":835
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"WTB",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",24],
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":836
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"WTB",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":"Items on the first screen",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":837
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",37],
      "vtp_eventLabel":"all retailes",
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":842
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":848
    },{
      "function":"__cl",
      "tag_id":850
    },{
      "function":"__cl",
      "tag_id":851
    },{
      "function":"__cl",
      "tag_id":852
    },{
      "function":"__cl",
      "tag_id":853
    },{
      "function":"__cl",
      "tag_id":854
    },{
      "function":"__cl",
      "tag_id":855
    },{
      "function":"__cl",
      "tag_id":856
    },{
      "function":"__cl",
      "tag_id":857
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_574",
      "tag_id":858
    },{
      "function":"__cl",
      "tag_id":859
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_583",
      "tag_id":860
    },{
      "function":"__cl",
      "tag_id":861
    },{
      "function":"__cl",
      "tag_id":862
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_638",
      "tag_id":863
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_639",
      "tag_id":864
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_640",
      "tag_id":865
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_641",
      "tag_id":866
    },{
      "function":"__lcl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_649",
      "tag_id":867
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_670",
      "tag_id":868
    },{
      "function":"__cl",
      "tag_id":869
    },{
      "function":"__cl",
      "tag_id":870
    },{
      "function":"__cl",
      "tag_id":871
    },{
      "function":"__cl",
      "tag_id":872
    },{
      "function":"__cl",
      "tag_id":873
    },{
      "function":"__cl",
      "tag_id":874
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"87742_722",
      "tag_id":875
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"87742_723",
      "tag_id":876
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"87742_724",
      "tag_id":877
    },{
      "function":"__cl",
      "tag_id":878
    },{
      "function":"__cl",
      "tag_id":879
    },{
      "function":"__cl",
      "tag_id":880
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_800",
      "tag_id":881
    },{
      "function":"__cl",
      "tag_id":882
    },{
      "function":"__cl",
      "tag_id":883
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_825",
      "tag_id":884
    },{
      "function":"__cl",
      "tag_id":885
    },{
      "function":"__hl",
      "tag_id":886
    },{
      "function":"__cl",
      "tag_id":887
    },{
      "function":"__cl",
      "tag_id":888
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1110",
      "tag_id":889
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1111",
      "tag_id":890
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1112",
      "tag_id":891
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1203",
      "tag_id":892
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1213",
      "tag_id":893
    },{
      "function":"__cl",
      "tag_id":894
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"87742_1222",
      "tag_id":895
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1246",
      "tag_id":896
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1251",
      "tag_id":897
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"87742_1255",
      "tag_id":898
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1790236234572423\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1790236234572423\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:\"2859918\",type:\"pageView\",start:(new Date).getTime()});(function(b,d,a){if(!b.getElementById(a)){var c=b.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.id=a;c.src=(\"https:\"==b.location.protocol?\"https:\":\"http:\")+\"\/\/top-fwz1.mail.ru\/js\/code.js\";a=function(){var a=b.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(c,a)};\"[object Opera]\"==d.opera?b.addEventListener(\"DOMContentLoaded\",a,!1):a()}})(document,window,\"topmailru-code\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cdiv style=\"position:absolute;left:-10000px;\"\u003E\n\u003Cimg src=\"\/\/top-fwz1.mail.ru\/counter?id=2859918;js=na\" style=\"border:0;\" height=\"1\" width=\"1\" alt=\"Рейтинг@Mail.ru\"\u003E\n\u003C\/div\u003E\u003C\/noscript\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(window.Image?new Image:document.createElement(\"img\")).src=location.protocol+\"\/\/vk.com\/rtrg?r\\x3dpNo7Mm3aVWYJ14uZYl0Y84jLA*A748fF950ma5lZdivhTlFNne9137WmRbtz\/dOakAIc57IghFZL8jqFHsgWc50hiMVNdm9jWAKX8LqQjgBuos5Hc6We0e60ADYYf75jJQVTp4GvjD*nLMaeGYVuX7tUrGCu3JUBwi*0nKXhZKI-\\x26pixel_id\\x3d1000064940\";\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":318
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/dmp.webturn.ru\/lg\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":356
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"756811181091449\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=756811181091449\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":448
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(window.Image?new Image:document.createElement(\"img\")).src=\"https:\/\/vk.com\/rtrg?p\\x3dVK-RTRG-146278-gBBXd\";\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":449
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,k,t){var p,u,h,m,w={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1},n=c(k),f=[],q=!1,e=0;c.scrollDepth=function(a){function v(b,c,d,l){m?(m({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:c,eventLabel:",["escape",["macro",21],8,16],",eventValue:0,eventNonInteraction:a.nonInteraction}),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003Ee\u0026\u0026(e=d,m({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:\"Pixel Depth\",eventLabel:(250*\nMath.floor(d\/250)).toString(),eventValue:1,eventNonInteraction:a.nonInteraction})),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026m({event:\"ScrollTiming\",eventCategory:\"Scroll Depth\",eventAction:b,eventLabel:c,eventTiming:l})):(p\u0026\u0026(k[h](\"send\",\"event\",\"Scroll Depth\",b,c,1,{nonInteraction:a.nonInteraction}),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003Ee\u0026\u0026(e=d,k[h](\"send\",\"event\",\"Scroll Depth\",\"Pixel Depth\",(250*Math.floor(d\/250)).toString(),1,{nonInteraction:a.nonInteraction})),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026k[h](\"send\",\n\"timing\",\"Scroll Depth\",b,l,c)),u\u0026\u0026(_gaq.push([\"_trackEvent\",\"Scroll Depth\",b,c,1,a.nonInteraction]),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003Ee\u0026\u0026(e=d,_gaq.push([\"_trackEvent\",\"Scroll Depth\",\"Pixel Depth\",(250*Math.floor(d\/250)).toString(),1,a.nonInteraction])),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026_gaq.push([\"_trackTiming\",\"Scroll Depth\",b,l,c,100])))}function x(b,a,d){c.each(b,function(b,g){-1===c.inArray(b,f)\u0026\u0026a\u003E=g\u0026\u0026(v(\"Percentage\",b,a,d),f.push(b))})}function y(b,a,d){c.each(b,function(b,g){-1===c.inArray(g,\nf)\u0026\u0026c(g).length\u0026\u0026a\u003E=c(g).offset().top\u0026\u0026(v(\"Elements\",g,a,d),f.push(g))})}function z(a,c){var b,l,g,f=null,e=0,k=function(){e=new Date;f=null;g=a.apply(b,l)};return function(){var d=new Date;e||(e=d);var h=c-(d-e);return b=this,l=arguments,0\u003E=h?(clearTimeout(f),f=null,e=d,g=a.apply(b,l)):f||(f=setTimeout(k,h)),g}}function r(){q=!0;n.on(\"scroll.scrollDepth\",z(function(){var b=c(t).height(),e=k.innerHeight?k.innerHeight:n.height();e=n.scrollTop()+e;b={\"25%\":parseInt(.25*b,10),\"50%\":parseInt(.5*b,10),\n\"75%\":parseInt(.75*b,10),\"100%\":b-5};var d=+new Date-A;return f.length\u003E=a.elements.length+(a.percentage?4:0)?(n.off(\"scroll.scrollDepth\"),void(q=!1)):(a.elements\u0026\u0026y(a.elements,e,d),void(a.percentage\u0026\u0026x(b,e,d)))},500))}var A=+new Date;a=c.extend({},w,a);c(t).height()\u003Ca.minHeight||(a.gaGlobal?(p=!0,h=a.gaGlobal):\"function\"==typeof ga?(p=!0,h=\"ga\"):\"function\"==typeof __gaTracker\u0026\u0026(p=!0,h=\"__gaTracker\"),\"undefined\"!=typeof _gaq\u0026\u0026\"function\"==typeof _gaq.push\u0026\u0026(u=!0),\"function\"==typeof a.eventHandler?m=\na.eventHandler:\"undefined\"==typeof dataLayer||\"function\"!=typeof dataLayer.push||a.gtmOverride||(m=function(a){dataLayer.push(a)}),c.scrollDepth.reset=function(){f=[];e=0;n.off(\"scroll.scrollDepth\");r()},c.scrollDepth.addElements=function(b){\"undefined\"!=typeof b\u0026\u0026c.isArray(b)\u0026\u0026(c.merge(a.elements,b),q||r())},c.scrollDepth.removeElements=function(b){\"undefined\"!=typeof b\u0026\u0026c.isArray(b)\u0026\u0026c.each(b,function(b,d){var e=c.inArray(d,a.elements),g=c.inArray(d,f);-1!=e\u0026\u0026a.elements.splice(e,1);-1!=g\u0026\u0026f.splice(g,\n1)})},r())}}(jQuery,window,document);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(function(){jQuery.scrollDepth({userTiming:!1,pixelDepth:!1})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":452
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,e,b,a,f){function n(){var c=new Date;c=c.getTime();if(e[g]){clearTimeout(icTimeOnSite.timeoutid);clearTimeout(icTimeOnSite.refreshid);var d=b.getItem(a[3]);b.removeItem(a[3]);b.setItem(a[2],d-c)}else d=parseInt(b.getItem(a[2])),b.setItem(a[3],d+c),icTimeOnSite.timeoutid=setTimeout(function(){m();b.setItem(a[0],a[5]);b.removeItem(a[2]);b.removeItem(a[3])},d),k()}function k(){icTimeOnSite.refreshid=setTimeout(function(){var c=parseInt(b.getItem(a[2]));c\u003Ef[0]?(b.setItem(a[2],c-f[0]),k()):\nb.setItem(a[2],f[0])},f[0])}function m(){dataLayer.push({event:\"TimeOnSite\",TimeOnSite:{time:\"1 minute\"}})}d.icTimeOnSite={};if(\"undefined\"!==typeof e.hidden){var g=\"hidden\";var h=\"visibilitychange\"}else\"undefined\"!==typeof e.mozHidden?(g=\"mozHidden\",h=\"mozvisibilitychange\"):\"undefined\"!==typeof e.msHidden?(g=\"msHidden\",visibility=\"msVisibility\",h=\"msvisibilitychange\"):\"undefined\"!==typeof e.webkitHidden\u0026\u0026(g=\"webkitHidden\",h=\"webkitvisibilitychange\");if(\"undefined\"===typeof e.addEventListener)return\"Have no addEventListener\";\nif(\"undefined\"===typeof g)return\"Have no visability api\";if(!",["escape",["macro",6],8,16],")return\"Have no local storage\";var l=b.getItem(a[0]);d=new Date;d=d.getTime();if(l==a[5]){var c=parseInt(b.getItem(a[1]));if(c\u003Cd+f[1])return\"Already\";c=f[2];b.setItem(a[0],a[4]);b.setItem(a[2],c)}else if(l)if(l==a[4])e[g]||(c=(c=parseInt(b.getItem(a[3])))?c-d:parseInt(b.getItem(a[2])));else return'Error in \"need\"';else c=f[2],b.setItem(a[0],a[4]),b.setItem(a[2],c);e[g]||(b.setItem(a[3],c+d),icTimeOnSite.timeoutid=setTimeout(function(){m();\nb.setItem(a[0],a[5]);b.removeItem(a[2]);b.removeItem(a[3])},c),k());e.addEventListener(h,n,!1);c=b.setItem(a[1],d+f[1])})(window,document,localStorage,\"icTimeOnSite_need icTimeOnSite_sessionendtime icTimeOnSite_timeremain icTimeOnSite_timewhen true false\".split(\" \"),[100,18E5,6E4]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":453
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter17880028=new Ya.Metrika({id:17880028,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,ecommerce:\"dataLayer\"})}catch(f){}});var e=d.getElementsByTagName(\"script\")[0],c=d.createElement(\"script\");a=function(){e.parentNode.insertBefore(c,e)};c.type=\"text\/javascript\";c.async=!0;c.src=\"https:\/\/mc.yandex.ru\/metrika\/watch.js\";\"[object Opera]\"==b.opera?d.addEventListener(\"DOMContentLoaded\",a,!1):a()})(document,window,\"yandex_metrika_callbacks\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/17880028\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":532
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){function b(a){a=Math.floor(a);return 10\u003Ea?\"0\"+a:a}a.scrollEvent=function(d){var c=a(document),b=a(window),f=c.height();b=b.height();current_value=(c=b+c.scrollTop())?Math.floor(100*c\/f):0;return d\u003Ecurrent_value?d:current_value};a.fixTime=function(){var a=new Date;return Math.floor(a.getTime()\/1E3)};a.timeFormat=function(a){var c=a;a=c\/3600%24;var d=c\/60%60;c%=60;return b(a)+\":\"+b(d)+\":\"+b(c)}})(jQuery);\nfunction getTimeInterval(a){if(0\u003C=a\u0026\u002630\u003Ea)return\"from 0 sec to 30 sec\";if(30\u003C=a\u0026\u002660\u003Ea)return\"from 30 sec to 1 min\";if(60\u003C=a\u0026\u0026120\u003Ea)return\"from 1 min to 2 min\";if(120\u003C=a\u0026\u0026180\u003Ea)return\"from 2 min to 3 min\";if(180\u003C=a\u0026\u0026300\u003Ea)return\"from 3 min to 5 min\";if(300\u003C=a\u0026\u0026480\u003Ea)return\"from 5 min to 8 min\";if(480\u003C=a)return\"more 8 min\"}\nfunction getScrollingInterval(a){if(0\u003C=a\u0026\u002620\u003Ea)return\"from 0% to 20%\";if(20\u003C=a\u0026\u002640\u003Ea)return\"from 20% to 40%\";if(40\u003C=a\u0026\u002660\u003Ea)return\"from 40% to 60%\";if(60\u003C=a\u0026\u002680\u003Ea)return\"from 60% to 80%\";if(80\u003C=a\u0026\u0026100\u003E=a)return\"from 80% to 100%\"}\njQuery(document).ready(function(){var a=jQuery.fixTime(),b=0;jQuery(window).scroll(function(){b=jQuery.scrollEvent(b)});jQuery(window).bind(\"beforeunload\",function(){current_max_string=b.toString()+\"%\";var d=jQuery.fixTime(),c=jQuery.timeFormat(d-a),e=getScrollingInterval(b);d=getTimeInterval(d-a);dataLayer.push({event:\"Scroll to\",percent_of_scrolling:current_max_string,time_on_page:c,percent_of_scrolling_interval:e,time_on_page_interval:d})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":544
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter17880028.reachGoal(\"TimeOnSite\",{TimeOnSite:",["escape",["macro",27],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":545
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){yaCounter17880028.reachGoal(\"GOAL_ScrollDistance\",eval('param\\x3d{ScrollDistance:{\"'+",["escape",["macro",30],8,16],"+'\":\"'+",["escape",["macro",31],8,16],"+'\"}}'))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":546
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\");fbq(\"track\",\"Search\");fbq(\"track\",\"AddToCart\");fbq(\"track\",\"AddToWishlist\");fbq(\"track\",\"InitiateCheckout\");fbq(\"track\",\"AddPaymentInfo\");fbq(\"track\",\"Purchase\",{value:\"1.00\",currency:\"USD\"});fbq(\"track\",\"Lead\");fbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":739
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/5153060.fls.doubleclick.net\/activityi;src\\x3d5153060;type\\x3dinvmedia;cat\\x3dbodlvu1c;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/5153060.fls.doubleclick.net\/activityi;src=5153060;type=invmedia;cat=bodlvu1c;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":740
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1730349687262995\");fbq(\"track\",\"PageView\");fbq(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1730349687262995\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":741
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar utm_source=$_GET(\"utm_source\"),utm_medium=$_GET(\"utm_medium\"),utm_campaign=$_GET(\"utm_campaign\"),cidArr=[];utm_source.length\u0026\u0026cidArr.push(utm_source);utm_medium.length\u0026\u0026cidArr.push(utm_medium);utm_campaign.length\u0026\u0026cidArr.push(utm_campaign);if(0\u003CcidArr.length){var cid=cidArr.join(\"|\");setCookie(\"cid\",cid,{expires:2592E3,path:\"\/ru\/\"})}function $_GET(b){var a=window.location.search;return(a=a.match(new RegExp(b+\"\\x3d([^\\x26\\x3d]+)\")))?decodeURI(a[1]):!1}\nfunction setCookie(b,a,c){c=c||{};var d=c.expires;if(\"number\"==typeof d\u0026\u0026d){var e=new Date;e.setTime(e.getTime()+1E3*d);d=c.expires=e}d\u0026\u0026d.toUTCString\u0026\u0026(c.expires=d.toUTCString());a=encodeURIComponent(a);b=b+\"\\x3d\"+a;for(var f in c)b+=\"; \"+f,a=c[f],!0!==a\u0026\u0026(b+=\"\\x3d\"+a);document.cookie=b};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":769
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/sys.refocus.ru\/ra.js?site_id\\x3d1196160\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":770
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar digitalData={};\ndigitalData={pageInfo:{pageName:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:alpha9\",channel:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e\",siteSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e\",subSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:\\u0422\\u0435\\u043b\\u0435\\u0432\\u0438\\u0437\\u043e\\u0440\\u044b\",subsubSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:alpha9R\"},siteInfo:{siteCountryCode:\"ru\"},\nglobalInfo:{languageCode:\"ru\"}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":819
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar digitalData={};\ndigitalData={pageInfo:{pageName:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:viewing-angle\",channel:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e\",siteSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e\",subSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:\\u0422\\u0435\\u043b\\u0435\\u0432\\u0438\\u0437\\u043e\\u0440\\u044b\",subsubSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:viewing-angle\"},siteInfo:{siteCountryCode:\"ru\"},\nglobalInfo:{languageCode:\"ru\"}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":820
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar digitalData={};\ndigitalData={pageInfo:{pageName:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:ai\",channel:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e\",siteSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e\",subSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:\\u0422\\u0435\\u043b\\u0435\\u0432\\u0438\\u0437\\u043e\\u0440\\u044b\",subsubSection:\"ru:\\u0422B\/ \\u0410\\u0443\\u0434\\u0438\\u043e\/ \\u0412\\u0438\\u0434\\u0435\\u043e:ai\"},siteInfo:{siteCountryCode:\"ru\"},\nglobalInfo:{languageCode:\"ru\"}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":822
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2076907472541513\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2076907472541513\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":824
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getUrlParameter=function(c){var a=decodeURIComponent(window.location.search.substring(1));a=a.split(\"\\x26\");var b;for(b=0;b\u003Ca.length;b++){var d=a[b].split(\"\\x3d\");if(d[0]===c)return void 0===d[1]?!0:d[1]}};\n(function(){var c=window.location.href.split(\"\/\")[4];if(\"productInfo\"in digitalData\u0026\u0026\"subSection\"in digitalData.pageInfo){var a=digitalData.pageInfo.subSection.split(\":\");dataLayer.eventLabel=$(\"a[data-shopname]\").length;dataLayer.category=a[a.length-1];\"products\"!=c?(dataLayer.ecommerceList=\"PC \"+a[a.length-1],dataLayer.modelID=$(\"a.btn.sticky_wtb.data-active\").attr(\"href\").split(\"\\x26\")[0].split(\"?\")[1].split(\"modelId\\x3d\")[1]):(dataLayer.ecommerceList=\"WTB \"+a[a.length-1],dataLayer.modelID=getUrlParameter(\"modelId\"));\ndataLayer.WTBContainerPage=dataLayer.ecommerceList+\" - \"+dataLayer.modelID;dataLayer.push({event:\"productCardView\",eventCategory:dataLayer.ecommerceList,eventLabel:$('.slide.slick-slide:not(.slick-cloned) \\x3e a[href^\\x3d\"https:\/\/gethatch.com\/\"]').length})}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":829
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=a.createElement(\"script\");b.setAttribute(\"src\",\"\/\/pixel.betweenx.com\/s\/_LG\/dist\/smartPixel.min.js\");b.setAttribute(\"type\",\"text\/javascript\");b.async=!0;a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":838
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nif(document.querySelector(\"[data-mpn]\")){var prodID=document.querySelector(\"[data-mpn]\").getAttribute(\"data-mpn\").replace(\/\\.\/g,\"\");fbq(\"init\",\"945577628978218\");fbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:[prodID]})};\u003C\/script\u003E\n\n\n\n\u003Cdiv id=\"vk_api_transport\"\u003E\u003C\/div\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"https:\/\/vk.com\/js\/api\/openapi.js?148\";a.async=!0;document.getElementById(\"vk_api_transport\").appendChild(a)},0);window.vkAsyncInit=function(){VK.Retargeting.Init(\"VK-RTRG-252405-8Puue\");VK.Retargeting.Hit();var a=document.querySelector(\"[data-mpn]\").getAttribute(\"data-mpn\").replace(\/\\.\/g,\"\");a={products:[{id:a}]};VK.Retargeting.ProductEvent(\"1909\",\"view_product\",a)};\u003C\/script\u003E \n\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/vk.com\/rtrg?p=VK-RTRG-252405-8Puue\u0026amp;products_event=view_product\u0026amp;price_list_id=1909\u0026amp;products_params=%7B%22products%22%3A%5B%7B%7D%2C%7B%7D%5D%7D\" style=\"position:fixed; left:-999px;\" alt=\"\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":839
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/vk.com\/js\/api\/openapi.js?154\";a.onload=function(){VK.Retargeting.Init(\"VK-RTRG-255543-d16FK\");VK.Retargeting.Hit()};document.head.appendChild(a)}();\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/vk.com\/rtrg?p=VK-RTRG-255543-d16FK\" style=\"position:fixed; left:-999px;\" alt=\"\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":840
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(a,c,d){a.__beusablerumclient__={load:function(a){var b=c.createElement(\"script\");b.src=a;b.async=!0;b.type=\"text\/javascript\";c.getElementsByTagName(\"head\")[0].appendChild(b)}};a.__beusablerumclient__.load(d)})(window,document,\"\/\/rum.beusable.net\/script\/b180412e115004u874\/9de67effc7\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":843
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:\"3034788\",type:\"pageView\",list:\"3\",start:(new Date).getTime()});\n(function(b,d,a){if(!b.getElementById(a)){var c=b.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.id=a;c.src=(\"https:\"==b.location.protocol?\"https:\":\"http:\")+\"\/\/top-fwz1.mail.ru\/js\/code.js\";a=function(){var a=b.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(c,a)};\"[object Opera]\"==d.opera?b.addEventListener(\"DOMContentLoaded\",a,!1):a()}})(document,window,\"topmailru-code\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cdiv\u003E\n\u003Cimg src=\"\/\/top-fwz1.mail.ru\/counter?id=3034788;js=na\" style=\"border:0;position:absolute;left:-9999px;\" alt=\"\"\u003E\n\u003C\/div\u003E\u003C\/noscript\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\" id=\"\"\u003Eif(document.querySelector(\"[data-mpn]\")){var prodID=document.querySelector(\"[data-mpn]\").getAttribute(\"data-mpn\").replace(\/\\.\/g,\"\"),_tmr=_tmr||[];_tmr.push({id:\"3034788\",type:\"itemView\",productid:prodID,pagetype:\"product\",list:\"2\"})};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":844
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/webOS|Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:52724},{event:\"setSiteType\",type:deviceType},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":845
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar criteoProductID=groupModelInfo.basicInfo.modelId;window.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/webOS|Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:52724},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",type:deviceType},{event:\"viewItem\",item:document.querySelector(\"html\").getAttribute(\"data-product-id\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":846
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar canonical=document.querySelector('link[rel\\x3d\"canonical\"]').getAttribute(\"href\"),urlArrLength=canonical.split(\"\/\").length;\nif(5==urlArrLength){var productsSec=document.querySelector(\".product-three\");if(productsSec){var productSList=productsSec.querySelectorAll(\".product \"),itemsArr=[];productSList.forEach(function(a){a=a.getAttribute(\"data-model-id\");itemsArr.push(a)});var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/webOS|Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:52724},{event:\"setEmail\",email:\"\"},{event:\"setSiteType\",\ntype:deviceType},{event:\"viewList\",item:itemsArr})}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":849
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"www.lg.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"facebook.com"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"ok.ru"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"vk.com"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"shop-link"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"youtube.com"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"sp-summary-actions-primary-button"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"\/ru\/.+\/lg.+"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/ru\/mobile\/g6"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"more_to_product3"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_574($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"icon icon-reviews"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"reviews_tab"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"wall-beige-side"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"airconditioners-split-systems\/kak-vybrat"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"sp-summary-write-review-btn"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"ratings-reviews"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_583($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"sp-inline-rating-new-review"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/ru\/products\/wtb?modelId"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"youtube"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"3TVPages"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"TimeOnSite"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/ru\/lgoled\/main"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"ScrollDistance"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/ru\/mobile\/q6"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/smartphones\/lg-M700AN"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_638($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/smartphones\/lg-LGM700"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_639($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"more_to_product2"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_640($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"more_to_watch2"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_641($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"https:\/\/lge.market"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_649($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"jumpon"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_800($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/televisions\/lgoled"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/televisions\/lgoled\/tvs5"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/televisions\/lgoled\/tvs4"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/televisions\/lgoled\/tvs3"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"(ru\/televisions\/hdr\\-promo$|\/ru\/technologies\/televisions\/oledtv$|\/ru\/televisions\/oled\\-aurora$|ru\/televisions\/lg\\-77EC980V|\/televisions\/lg\\-65EG960V|ru\/televisions\/lg\\-5EG960V |ru\/televisions\/lg\\-55EG960V|ru\/televisions\/lg\\-55EF950V|ru\/televisions\/lg\\-55EG920V|ru\/televisions\/lg\\-55EG910V|ru\/televisions\/lg\\-OLED.+|\/televisions\/lg\\-55EC930V\\-oled\\-televisions|ru$|ru\/televisions\/lg\\-75UH855V$|ru\/televisions\/lg\\-75UH780V$|ru\/televisions\/lg\\-86UH955V$|ru\/televisions\/lg\\-65UH950V$|ru\/televisions\/lg\\-55UH850V$|ru\/televisions\/lg\\-65UH850V$|ru\/televisions\/lg\\-65UH770V$|ru\/televisions\/lg\\-55UH770V$|ru\/televisions\/lg\\-49UH770V$|ru\/televisions\/lg\\-55UH950V$|ru\/televisions\/lg\\-65UF860V$|ru\/televisions\/lg\\-55UF860V$|ru\/televisions\/lg\\-49UF8537ru\/televisions\/lg\\-55UF8537ru\/televisions\/lg\\-65UF853Vru\/televisions\/lg\\-55UG870V$|ru\/televisions\/lg\\-65UF950V$|ru\/televisions\/lg\\-49UF8507$|ru\/televisions\/lg\\-60UF850V$|ru\/televisions\/lg\\-55UF8507$|ru\/televisions\/lg\\-65UG870V$|ru\/televisions\/lg\\-55UF850V$|ru\/televisions\/lg\\-65UF850V$|ru\/televisions\/lg\\-49UF850V$|ru\/televisions\/lg\\-79UF860V$|ru\/televisions\/lg\\-60UF853V$|ru\/televisions\/lg\\-49UF853V$|ru\/televisions\/lg\\-55UF853V$|ru\/televisions\/lg\\-60UF850V$|ru\/televisions\/lg\\-55UF8507$|ru\/televisions\/lg\\-65UG870V$|ru\/televisions\/lg\\-55UF850V$|ru\/televisions\/lg\\-65UF850V$|ru\/televisions\/lg\\-49UF850V$|ru\/televisions\/lg\\-79UF860V$|ru\/televisions\/lg\\-60UF853V$|ru\/televisions\/lg\\-49UF853V$|ru\/televisions\/lg\\-55UF853V$)"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/televisions\/lgoled\/tvs2"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/televisions\/lgoled\/tvs"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(rushop.lg.com|\/ru\/products\/wtb?)"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_670($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/jumpon\/104072?m=1"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/mobile\/g6"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"btn btn-success preorder_popup"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"btn btn-success preorder_bottom"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/ru\/televisions\/televisions-promo"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"http:\/\/www.mvideo.ru\/promo\/skidka-15000-na-superzvuk?from=hub"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/televisions\/hdr-promo"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"lg-landing-btn lg-landing-btn--submit"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"http:\/\/www.lg.com\/ru\/tv-audio-video\/customer-review"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"button-send"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"mobile\/g6"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"head_button stayUpdatedButton engagements-pre-order-btn"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"md-primary md-raised create md-button md-omnibox-theme md-ink-ripple"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/ru\/products\/wtb?modelId"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"wtb"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"ru\/lgoled\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"ru\/products\/wtb?modelId"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1213($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"youtube"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"youtubeEvent"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"button wtb-googleTrack"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"products\/wtb?modelName"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"small button wtb-googleTrack"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_723($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_722($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_724($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"logo"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"centered_parent"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_825($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"Scroll to"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"\/ru\/lg-signature-products"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"tab-model-button"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"Полные технические характеристики"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/ru\/refrigerators\/instaview"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"header__btn header__link_active"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"eldorado.ru\/cat\/detail\/71367279\/"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1110($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"mvideo.ru\/products\/holodilnik-side-by-side-lg-gc-q247cabv-20038776"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"ru\/refrigerators\/instaview"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1111($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"https:\/\/www.technopark.ru\/holodilnik-lg-gc-q247cabv\/"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1112($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"GA_WTB"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/ru\/washing-machines\/twinwash"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"[data-shopname]"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"[data-site]"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"[data-model]"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1203($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"btn__label"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"Смотреть"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"ru\/lgoled\/denis"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"75%"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/lgoled\/main"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"100%"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1222($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"productCardView"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"a[data-sc-item=\"MU-engagements\"]"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1246($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"shop-l"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/mobile\/v30"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1251($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"button|led-btn|cord-zero-btn|standart-btn"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)87742_1255($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/mobile\/q6"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"televisions\/lgoled.*"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"modelId=MD05840950|modelId=MD05843209||modelId=MD05812904|lg-signature|lg-signature-products|televisions\/lg-OLED65W7V|refrigerators\/lg-LSR100RU|washing-machines\/lg-LSWD100"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/ru\/televisions\/alpha9"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/televisions\/viewing-angle"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/ru\/televisions\/ai"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"ru\/lgoled\/main"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"air-for-you"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\/ru\/.+\/lg-.+"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"www.lg.com\/ru\/audio\/lg-SK10Y"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.lg.com\/ru"
    }],
  "rules":[
    [["if",0,1],["add",0,75,147]],
    [["if",1],["add",1,22,65,125,126,129,130,131,138,139,152,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,122,123,124]],
    [["if",1,2],["add",2,3]],
    [["if",3,4],["add",4]],
    [["if",4,5],["add",5]],
    [["if",4,6],["add",6]],
    [["if",4,7,8],["add",7]],
    [["if",4,9],["add",8]],
    [["if",4,10,11],["add",9,43]],
    [["if",12,13,14,15],["add",10]],
    [["if",4,16],["add",11,53]],
    [["if",4,17],["add",12]],
    [["if",4,18,19],["add",13]],
    [["if",4,20],["add",14]],
    [["if",11,14,21,22],["add",15]],
    [["if",4,11,23],["add",16,44]],
    [["if",1,24],["add",17]],
    [["if",25],["add",18]],
    [["if",26],["add",19]],
    [["if",27],["add",20,133]],
    [["if",29],["unless",28],["add",21,134]],
    [["if",14,30,31,32],["add",23]],
    [["if",14,30,33,34],["add",24]],
    [["if",12,14,35,36],["add",25]],
    [["if",12,14,37,38],["add",26]],
    [["if",14,39,40],["add",27]],
    [["if",14,41,42],["add",28]],
    [["if",1,43,44],["add",29]],
    [["if",1,43,45],["add",30]],
    [["if",1,43,46],["add",31]],
    [["if",1,47],["add",32]],
    [["if",1,43,48],["add",33]],
    [["if",1,43,49],["add",34]],
    [["if",14,50,51],["add",35]],
    [["if",4,11,52],["add",36]],
    [["if",4,53,54],["add",37]],
    [["if",4,53,55],["add",38]],
    [["if",4,56,57],["add",39]],
    [["if",4,58,59],["add",40]],
    [["if",4,60,61],["add",41]],
    [["if",4,62,63],["add",42]],
    [["if",4,64],["add",45]],
    [["if",4,65],["add",46]],
    [["if",14,66,67,68,69],["add",46]],
    [["if",70,71],["add",47]],
    [["if",4,72,73],["add",48]],
    [["if",4,73,74],["add",49]],
    [["if",75,76],["add",50,144]],
    [["if",75,77],["add",51]],
    [["if",75,78],["add",52]],
    [["if",4,79],["add",54]],
    [["if",80],["add",55]],
    [["if",14,81,82],["add",56]],
    [["if",83],["add",57]],
    [["if",84,85],["add",58]],
    [["if",4,30,86,87],["add",59]],
    [["if",4,88,89],["add",60]],
    [["if",14,88,90,91],["add",61]],
    [["if",14,92,93,94],["add",62]],
    [["if",14,93,95,96],["add",63]],
    [["if",97],["add",64,74]],
    [["if",14,98,99,100,101,102],["add",66]],
    [["if",4,103,104,105],["add",67]],
    [["if",29,106,107],["add",68]],
    [["if",29,107,108],["add",68]],
    [["if",75,109],["add",69]],
    [["if",110],["add",70]],
    [["if",14,111,112],["add",71]],
    [["if",14,113,114,115],["add",72]],
    [["if",14,114,116,117],["add",73]],
    [["if",1,118],["add",101,102,103]],
    [["if",1,107],["add",121]],
    [["if",1,119],["add",127,128]],
    [["if",120],["add",132]],
    [["if",1,121],["add",135,136]],
    [["if",1,122],["add",137]],
    [["if",1,123],["add",140]],
    [["if",1,124],["add",141]],
    [["if",1,125],["add",142]],
    [["if",1,126],["add",143]],
    [["if",1,127],["add",145]],
    [["if",1,128],["add",146,149,151]],
    [["if",1,129],["add",148]],
    [["if",1,130],["add",150]]]
},
"runtime":[
[],[]
]
};
var f,aa=this,fa=function(){if(null===ba)a:{var a=aa.document,b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&ea.test(c)){ba=c;break a}}ba=""}return ba},ea=/^[\w+/_-]+[=]{0,2}$/,ba=null,ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,b){function c(){}c.prototype=b.prototype;a.$g=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jg=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-
2]=arguments[e];return b.prototype[c].apply(a,d)}};var ja=function(a,b){this.C=a;this.cf=b};ja.prototype.uf=function(){return this.C};ja.prototype.getData=function(){return this.cf};ja.prototype.getData=ja.prototype.getData;ja.prototype.getType=ja.prototype.uf;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.Ca={};this.Wa=!1};la.prototype.get=function(a){return this.Ca["dust."+a]};la.prototype.set=function(a,b){!this.Wa&&(this.Ca["dust."+a]=b)};la.prototype.has=function(a){return this.Ca.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.Ca)a.Ca.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Wa&&delete this.Ca["dust."+a]};la.prototype.N=function(){this.Wa=!0};var n=function(a){this.Ha=new la;this.m=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.m[Number(b)]=a[Number(b)]:this.Ha.set(b,a[b]))};f=n.prototype;f.toString=function(){for(var a=[],b=0;b<this.m.length;b++){var c=this.m[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};f.set=function(a,b){if("length"==a){if(!ka(b))throw Error("RangeError: Length property must be a valid integer.");this.m.length=Number(b)}else ka(a)?this.m[Number(a)]=b:this.Ha.set(a,b)};
f.get=function(a){return"length"==a?this.length():ka(a)?this.m[Number(a)]:this.Ha.get(a)};f.length=function(){return this.m.length};f.da=function(){for(var a=ma(this.Ha),b=0;b<this.m.length;b++)a.push(b+"");return new n(a)};f.remove=function(a){ka(a)?delete this.m[Number(a)]:this.Ha.remove(a)};f.pop=function(){return this.m.pop()};f.push=function(a){return this.m.push.apply(this.m,Array.prototype.slice.call(arguments))};f.shift=function(){return this.m.shift()};
f.splice=function(a,b,c){return new n(this.m.splice.apply(this.m,arguments))};f.unshift=function(a){return this.m.unshift.apply(this.m,Array.prototype.slice.call(arguments))};f.has=function(a){return ka(a)&&this.m.hasOwnProperty(a)||this.Ha.has(a)};n.prototype.unshift=n.prototype.unshift;n.prototype.splice=n.prototype.splice;n.prototype.shift=n.prototype.shift;n.prototype.push=n.prototype.push;n.prototype.pop=n.prototype.pop;n.prototype.remove=n.prototype.remove;n.prototype.getKeys=n.prototype.da;
n.prototype.get=n.prototype.get;n.prototype.set=n.prototype.set;var na=function(){function a(a,b){c[a]=b}function b(){c={};h=!1}var c={},d,e,g={},h=!1,k={add:a,gd:function(a,b,c){g[a]||(g[a]={});g[a][b]=c},create:function(g){var k={add:a,assert:function(a,b){if(!h){var k=c[a]||d;k&&k.apply(g,Array.prototype.slice.call(arguments,0));e&&e.apply(g,Array.prototype.slice.call(arguments,0))}},reset:b};k.add=k.add;k.assert=k.assert;k.reset=k.reset;return k},Ed:function(a){return g[a]?(b(),c=g[a],!0):!1},Ia:function(a){d=a},Ja:function(a){e=a},reset:b,Pd:function(a){h=
a}};k.add=k.add;k.addToCache=k.gd;k.loadFromCache=k.Ed;k.registerDefaultPermission=k.Ia;k.registerGlobalPermission=k.Ja;k.reset=k.reset;k.setPermitAllAsserts=k.Pd;return k};var oa=function(){function a(a,c){if(b[a]){if(b[a].xb+c>b[a].max)throw Error("Quota exceeded");b[a].xb+=c}}var b={},c=void 0,d=void 0,e={Wf:function(a){c=a},hd:function(){c&&a(c,1)},Xf:function(a){d=a},ca:function(b){d&&a(d,b)},rg:function(a,c){b[a]=b[a]||{xb:0};b[a].max=c},tf:function(a){return b[a]&&b[a].xb||0},reset:function(){b={}},Xe:a};e.onFnConsume=e.Wf;e.consumeFn=e.hd;e.onStorageConsume=e.Xf;e.consumeStorage=e.ca;e.setMax=e.rg;e.getConsumed=e.tf;e.reset=e.reset;e.consume=e.Xe;return e};var ra=function(a,b,c){this.O=a;this.I=b;this.ja=c;this.m=new la;this.Bb=void 0};f=ra.prototype;f.add=function(a,b){this.m.Wa||(this.O.ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b))};f.set=function(a,b){this.m.Wa||(this.ja&&this.ja.has(a)?this.ja.set(a,b):(this.O.ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b)))};f.get=function(a){return this.m.has(a)?this.m.get(a):this.ja?this.ja.get(a):void 0};
f.has=function(a){return!!this.m.has(a)||!(!this.ja||!this.ja.has(a))};f.L=function(){return this.O};f.S=function(a){this.Bb=a};f.N=function(){this.m.N()};ra.prototype.has=ra.prototype.has;ra.prototype.get=ra.prototype.get;ra.prototype.set=ra.prototype.set;ra.prototype.add=ra.prototype.add;var sa=function(){},ta=function(a){return"function"==typeof a},t=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&wa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!va(a)||
!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},Ga=function(){this.prefix="gtm.";this.values={}};Ga.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ga.prototype.get=function(a){return this.values[this.prefix+a]};Ga.prototype.contains=function(a){return void 0!==this.get(a)};var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var x=function(a,b){la.call(this);this.Fd=a;this.qf=b};ia(x,la);var Na=function(a,b){for(var c,d=0;d<b.length&&!(c=Ma(a,b[d]),c instanceof ja);d++);return c},Ma=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof x))throw Error("Attempting to execute non-function "+b[0]+".");return c.B.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Bb;d&&d(e);throw e;}};x.prototype.toString=function(){return this.Fd};x.prototype.getName=function(){return this.Fd};x.prototype.getName=x.prototype.getName;
x.prototype.da=function(){return new n(ma(this))};x.prototype.getKeys=x.prototype.da;x.prototype.B=function(a,b){var c,d={H:function(){return a},evaluate:function(b){var c=a;return wa(b)?Ma(c,b):b},Ua:function(b){return Na(a,b)},L:function(){return a.L()},F:function(){c||(c=a.I.create(d));return c}};a.L().hd();return this.qf.apply(d,Array.prototype.slice.call(arguments,1))};x.prototype.invoke=x.prototype.B;
x.prototype.ka=function(a,b){try{return this.B.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};x.prototype.safeInvoke=x.prototype.ka;var Oa=function(){la.call(this)};ia(Oa,la);Oa.prototype.da=function(){return new n(ma(this))};Oa.prototype.getKeys=Oa.prototype.da;var Pa=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Qa={Fn:"function",Map:"Object",List:"Array"},Ra=function(a,b){for(var c=0;c<a.length;c++){var d=Pa.exec(a[c]);if(!d)throw Error("Internal Error");var e=d[1],g="!"===d[2],h=d[3],k=b[c],l=typeof k;if(null===k||"undefined"===l){if(g)throw Error("Required argument "+e+" not supplied.");}else if("*"!==h){var m=typeof k;k instanceof x?m="Fn":k instanceof n?m="List":k instanceof Oa&&(m="Map");if(m!=h)throw Error("Argument "+e+" does not match required type "+
(Qa[h]||h)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Sa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ta=function(a){if(null==a)return String(a);var b=Sa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ua=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Va=function(a){if(!a||"object"!=Ta(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ua(a,"constructor")&&!Ua(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ua(a,b)},y=function(a,b){var c=b||("array"==Ta(a)?[]:{}),d;for(d in a)if(Ua(a,d)){var e=a[d];"array"==Ta(e)?("array"!=Ta(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):Va(e)?(Va(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var Wa=function(a){if(a instanceof n){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Wa(a.get(d)));return b}if(a instanceof Oa){for(var e={},g=a.da(),h=g.length(),k=0;k<h;k++)e[g.get(k)]=Wa(a.get(g.get(k)));return e}return a instanceof x?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Xa(b[c]);var d=new ra(oa(),na());return Wa(a.B.apply(a,[d].concat(b)))}:a},Xa=function(a){if(wa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Xa(a[c]));return new n(b)}if(Va(a)){var d=
new Oa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Xa(a[e]));return d}if("function"===typeof a)return new x("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Wa(this.evaluate(c[d]));return Xa(a.apply(a,c))});var g=typeof a;if(null===a||"string"===g||"number"===g||"boolean"===g)return a};var Ya={control:function(a,b){return new ja(a,this.evaluate(b))},fn:function(a,b,c){var d=this.H(),e=this.evaluate(b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var g=Array.prototype.slice.call(arguments,2);this.L().ca(a.length+g.length);return new x(a,function(){return function(a){var b=new ra(d.O,d.I,d);d.Bb&&b.S(d.Bb);for(var c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof ja)return c[h];for(var p=
e.get("length"),q=0;q<p;q++)q<c.length?b.set(e.get(q),c[q]):b.set(e.get(q),void 0);b.set("arguments",new n(c));var r=Na(b,g);if(r instanceof ja)return"return"===r.C?r.getData():r}}())},list:function(a){var b=this.L();b.ca(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.L(),c=new Oa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",g=
this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof g?g.length:1;b.ca(h);c.set(e,g)}return c},undefined:function(){}};var Za=function(){this.O=oa();this.I=na();this.Ba=new ra(this.O,this.I)};f=Za.prototype;f.ba=function(a,b){var c=new x(a,b);c.N();this.Ba.set(a,c)};f.fd=function(a,b){Ya.hasOwnProperty(a)&&this.ba(b||a,Ya[a])};f.L=function(){return this.O};f.Fb=function(){this.O=oa();this.Ba.O=this.O};f.og=function(){this.I=na();this.Ba.I=this.I};f.S=function(a){this.Ba.S(a)};f.M=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xc(c)};
f.xc=function(a){for(var b,c=0;c<arguments.length;c++){var d=Ma(this.Ba,arguments[c]);b=d instanceof ja||d instanceof x||d instanceof n||d instanceof Oa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};f.N=function(){this.Ba.N()};Za.prototype.makeImmutable=Za.prototype.N;Za.prototype.run=Za.prototype.xc;Za.prototype.execute=Za.prototype.M;Za.prototype.resetPermissions=Za.prototype.og;Za.prototype.resetQuota=Za.prototype.Fb;
Za.prototype.getQuota=Za.prototype.L;Za.prototype.addNativeInstruction=Za.prototype.fd;Za.prototype.addInstruction=Za.prototype.ba;var $a=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ab={wg:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var g=arguments[e],h=0;h<g.length();h++)c.push(g.get(h));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.B(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.B(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.B(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var g=e;g<d;g++)if(this.has(g)&&this.get(g)===
b)return g;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var g=e;0<=g;g--)if(this.has(g)&&this.get(g)===b)return g;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.B(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);g=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=g;k<d;k++)this.has(k)&&(e=b.B(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);g=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=g;0<=k;k--)this.has(k)&&(e=b.B(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=$a(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],g=b;g<c;g++)e.push(this.get(g));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.B(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=$a(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.B(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={yd:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},bb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),cb=new ja("break"),db=new ja("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=xa(bb,b))return Xa(a[b].apply(a,$a(c)));throw Error("TypeError: "+b+" is not a function");
}if(a instanceof n){if(a.has(b)){var d=a.get(b);if(d instanceof x){var e=$a(c);e.unshift(this.H());return d.B.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=xa(ab.wg,b)){var g=$a(c);g.unshift(this.H());return ab[b].apply(a,g)}}if(a instanceof x||a instanceof Oa){if(a.has(b)){var h=a.get(b);if(h instanceof x){var k=$a(c);k.unshift(this.H());return h.B.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof x?a.getName():a.toString();if("hasOwnProperty"==
b)return a.has.apply(a,$a(c))}throw Error("TypeError: Object has no '"+b+"' property.");};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.H();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return cb};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ja)return d}};
z["continue"]=function(){return db};z.df=function(a,b,c){var d=new n;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var g=[z.yd.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.H().set(a,this.evaluate(g))};z.hf=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.lf=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.nf=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.rf=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.H();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var g=this.Ua(c);if(g instanceof ja){if("break"==g.C)break;if("return"==g.C)return g}}else if(b instanceof Oa||b instanceof n||b instanceof x)for(var h=b.da(),k=h.length(),l=0;l<k;l++){d.set(a,h.get(l));var m=this.Ua(c);if(m instanceof ja){if("break"==m.C)break;if("return"==m.C)return m}}};z.get=function(a){return this.H().get(this.evaluate(a))};
z.sd=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Oa||a instanceof n||a instanceof x?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};z.vf=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.wf=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.Df=function(a,b){return this.evaluate(a)===this.evaluate(b)};
z.Ef=function(a,b){return this.evaluate(a)!==this.evaluate(b)};z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Ua(d);if(e instanceof ja)return e};z.Mf=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.Nf=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.Rf=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.Sf=function(a){return-this.evaluate(a)};z.Tf=function(a){return!this.evaluate(a)};
z.Uf=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Ld=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Md=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new ja("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof x||a instanceof n||a instanceof Oa)&&a.set(b,c);return c};z.vg=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!wa(b)||!wa(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,g=0;g<b.length;g++)if(e||a===this.evaluate(b[g]))if(d=this.evaluate(c[g]),d instanceof ja){var h=d.C;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof ja&&("return"==d.C||"continue"==d.C)))return d};
z.xg=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof x?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.H(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,g=this.evaluate(d);if(this.evaluate(c)&&(e=this.Ua(g),e instanceof ja)){if("break"==e.C)return;if("return"==e.C)return e}for(;this.evaluate(a);){e=this.Ua(g);if(e instanceof ja){if("break"==e.C)break;if("return"==e.C)return e}this.evaluate(b)}};var fb=function(){this.xd=!1;this.A=new Za;eb(this);this.xd=!0};fb.prototype.Jf=function(){return this.xd};fb.prototype.isInitialized=fb.prototype.Jf;fb.prototype.M=function(a){this.A.I.Ed(String(a[0]))||(this.A.I.reset(),this.A.I.Pd(!0));return this.A.xc(a)};fb.prototype.execute=fb.prototype.M;fb.prototype.N=function(){this.A.N()};fb.prototype.makeImmutable=fb.prototype.N;
var eb=function(a){function b(a,b){e.A.fd(a,String(b))}function c(a,b){e.A.ba(String(d[a]),b)}var d=z.yd,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.df);c("DIVIDE",z.hf);c("EQUALS",z.lf);c("EXPRESSION_LIST",z.nf);c("FOR_IN",z.rf);c("GET",z.get);c("GET_INDEX",
z.sd);c("GET_PROPERTY",z.sd);c("GREATER_THAN",z.vf);c("GREATER_THAN_EQUALS",z.wf);c("IDENTITY_EQUALS",z.Df);c("IDENTITY_NOT_EQUALS",z.Ef);c("IF",z["if"]);c("LESS_THAN",z.Mf);c("LESS_THAN_EQUALS",z.Nf);c("MODULUS",z.Rf);c("MULTIPLY",z.multiply);c("NEGATE",z.Sf);c("NOT",z.Tf);c("NOT_EQUALS",z.Uf);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Ld);c("POST_INCREMENT",z.Ld);c("PRE_DECREMENT",z.Md);c("PRE_INCREMENT",z.Md);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.vg);c("SWITCH",z["switch"]);c("TERNARY",z.xg);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};fb.prototype.ba=function(a,b){this.A.ba(a,b)};fb.prototype.addInstruction=fb.prototype.ba;fb.prototype.L=function(){return this.A.L()};fb.prototype.getQuota=fb.prototype.L;fb.prototype.Fb=function(){this.A.Fb()};fb.prototype.resetQuota=fb.prototype.Fb;fb.prototype.Ia=function(a){this.A.I.Ia(a)};fb.prototype.Ja=function(a){this.A.I.Ja(a)};
fb.prototype.vb=function(a,b,c){this.A.I.gd(a,b,c)};fb.prototype.S=function(a){this.A.S(a)};var gb=function(){this.Cb={}};gb.prototype.get=function(a){return this.Cb.hasOwnProperty(a)?this.Cb[a]:void 0};gb.prototype.add=function(a,b){if(this.Cb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new x(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.N();this.Cb[a]=c};
gb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,hb=navigator,lb=C.currentScript&&C.currentScript.src,mb=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},nb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ob=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;nb(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=C.getElementsByTagName("script")[0]||C.body||C.head;
e.parentNode.insertBefore(d,e);return d},pb=function(){if(lb){var a=lb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},qb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);nb(c,b);void 0!==a&&(c.src=a);return c},rb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=
function(){d.onerror=null;c&&c()};d.src=a},sb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},tb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},E=function(a){B.setTimeout(a,0)},vb=function(a){var b=C.getElementById(a);if(b&&ub(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ub(document.all[a][c],"id")==a)return document.all[a][c];return b},ub=function(a,b){return a&&b&&a.attributes&&
a.attributes[b]?a.attributes[b].value:null},wb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},xb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},yb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ab=function(a){hb.sendBeacon&&hb.sendBeacon(a)||rb(a)};var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Cb=/:[0-9]+$/,Db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")==b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Fb=function(a,b,c,d,e){var g,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(B.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":g=Eb(a);break;case "protocol":g=k;break;case "host":g=(a.hostname||B.location.hostname).replace(Cb,
"").toLowerCase();if(c){var l=/^www\d*\./.exec(g);l&&l[0]&&(g=g.substr(l[0].length))}break;case "port":g=String(Number(a.hostname?a.port:B.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":g="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=g.split("/");0<=xa(d||[],m[m.length-1])&&(m[m.length-1]="");g=m.join("/");break;case "query":g=a.search.replace("?","");e&&(g=Db(g,e));break;case "extension":var p=a.pathname.split(".");g=1<p.length?p[p.length-1]:"";g=g.split("/")[0];
break;case "fragment":g=a.hash.replace("#","");break;default:g=a&&a.href}return g},Eb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},H=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Gb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jb=function(a,b,c,d){var e=Hb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ib(e,function(a){return a.jf},b);if(1===e.length)return e[0].id;e=Ib(e,function(a){return a.$f},c);return e[0]?e[0].id:void 0}},Mb=function(a,b,c,d,e,
g){c=c||"/";var h=d=d||"auto",k=c;if(Kb.test(document.location.hostname)||"/"===k&&Lb.test(h))return!1;g&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toUTCString()+"; ");if("auto"===d){var p=!1,q;a:{var r=[],u=document.location.hostname.split(".");if(4===u.length){var w=u[u.length-1];if(parseInt(w,10).toString()===w){q=["none"];break a}}for(var v=u.length-2;0<=v;v--)r.push(u.slice(v).join("."));r.push("none");
q=r}for(var D=q,G=0;G<D.length&&!p;G++)p=Mb(a,b,c,D[G],e);return p}d&&"none"!==d&&(m+="domain="+d+";");var A=document.cookie;document.cookie=m;return A!=document.cookie||0<=Gb(a).indexOf(b)};function Ib(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Hb(a,b){for(var c=[],d=Gb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),jf:1*k[0]||1,$f:1*k[1]||1}))}}return c}var Lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Kb=/(^|\.)doubleclick\.net$/i;var Pb=function(){this.Fa=new fb;var a=new gb;a.addAll(Nb());Ob(this,function(b){return a.get(b)})},Nb=function(){return{callInWindow:Qb,callLater:Rb,copyFromWindow:Sb,createQueue:Tb,createArgumentsQueue:Ub,encodeURI:Vb,encodeURIComponent:Wb,getCookieValues:Xb,getReferrer:Yb,getUrl:Zb,getUrlFragment:$b,isPlainObject:ac,injectHiddenIframe:bc,injectScript:cc,logToConsole:ec,queryPermission:fc,removeUrlFragment:gc,replaceAll:hc,sendPixel:ic,setInWindow:jc}};Pb.prototype.M=function(a){return this.Fa.M(a)};
Pb.prototype.execute=Pb.prototype.M;var Ob=function(a,b){a.Fa.ba("require",b)};Pb.prototype.Ia=function(a){this.Fa.Ia(a)};Pb.prototype.Ja=function(a){this.Fa.Ja(a)};Pb.prototype.vb=function(a,b,c){this.Fa.vb(a,b,c)};Pb.prototype.S=function(a){this.Fa.S(a)};function Qb(a,b){Ra(["path:!string"],[a]);for(var c=a.split("."),d=B,e=d[c[0]],g=1;e&&g<c.length;g++)d=e,e=e[c[g]];if("function"==Ta(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(Wa(arguments[k]));e.apply(d,h)}}
function Rb(a){Ra(["fn:!Fn"],arguments);var b=this.H();E(function(){a instanceof x&&a.ka(b)})}function Sb(a){Ra(["path:!string"],arguments);this.F().assert("access_globals","read",a);var b=a.split("."),c=B,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c||null===c)return;return Xa(c[b[d]])}function Xb(a){Ra(["name:!string"],arguments);this.F().assert("get_cookies",a);return Gb(a)}function Yb(){return C.referrer}
function Zb(a,b,c,d){Ra(["component:?string","stripWww:?boolean","defaultPages:?List","queryKey:?string"],arguments);this.F().assert("get_url",a,d);var e=B.location.href,g;if(c){g=[];for(var h=0;h<c.length();h++){var k=c.get(h);"string"==typeof k&&g.push(k)}}return Fb(H(e),a,b,g,d)}function $b(a){Ra(["url:!string"],arguments);return Fb(H(a),"fragment")}function ac(a){return a instanceof Oa}
function bc(a,b){Ra(["url:!string","onSuccess:?Fn"],arguments);this.F().assert("inject_hidden_iframe",a);var c=this.H();qb(a,function(){b instanceof x&&b.ka(c)})}var kc={};
function cc(a,b,c,d){Ra(["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);this.F().assert("inject_script",a);var e=this.H(),g=function(){b instanceof x&&b.ka(e)},h=function(){c instanceof x&&c.ka(e)};if(d){var k=d;kc[k]?(kc[k].onSuccess.push(g),kc[k].onFailure.push(h)):(kc[k]={onSuccess:[g],onFailure:[h]},g=function(){for(var a=kc[k].onSuccess,b=0;b<a.length;b++)E(a[b]);a.push=function(a){E(a);return 0}},h=function(){for(var a=kc[k].onFailure,b=0;b<a.length;b++)E(a[b]);
kc[k]=null},ob(a,g,h))}else ob(a,g,h)}function ec(){try{this.F().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Wa(a[b]);console.log.apply(console,a)}function gc(a){return Eb(H(a))}function hc(a,b,c){Ra(["string:!string","regex:!string","replacement:!string"],arguments);return a.replace(new RegExp(b,"g"),c)}
function ic(a,b,c){Ra(["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);this.F().assert("send_pixel",a);var d=this.H();rb(a,function(){b instanceof x&&b.ka(d)},function(){c instanceof x&&c.ka(d)})}function jc(a,b,c){Ra(["path:!string","value:?*","overrideExisting:?boolean"],arguments);this.F().assert("access_globals","readwrite",a);var d=a.split("."),e=B,g;for(g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e)return!1;return void 0===e[d[g]]||c?(e[d[g]]=Wa(b),!0):!1}
function Tb(a){Ra(["path:!string"],arguments);this.F().assert("access_globals","readwrite",a);var b=lc(a),c=a.split(".").pop(),d=b[c];void 0===d&&(d=[],b[c]=d);return Xa(function(){if(!ta(d.push))throw Error("Object at "+a+" in window is not an array.");mc(arguments);d.push.apply(d,Array.prototype.slice.call(arguments,0))})}
function Ub(a,b){Ra(["functionPath:!string","arrayPath:!string"],arguments);this.F().assert("access_globals","readwrite",a);this.F().assert("access_globals","readwrite",b);var c=lc(a),d=a.split(".").pop(),e=c[d];if(e&&!ta(e))return null;if(e){var g=e;e=function(){mc(arguments);g.apply(g,Array.prototype.slice.call(arguments,0))};return Xa(e)}var h;e=function(){if(!ta(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};c[d]=e;var k=lc(b),l=b.split(".").pop();
h=k[l];void 0===h&&(h=[],k[l]=h);return Xa(function(){mc(arguments);e.apply(e,Array.prototype.slice.call(arguments,0))})}function mc(a){for(var b=0;b<a.length;b++){var c=a[b];c&&ha(c)&&Object.defineProperty(c,"gtm",{value:{fromContainer:!0}})}}function lc(a){for(var b=a.split("."),c=B,d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c)throw Error("Path "+a+" does not exist.");return c}
function fc(a,b){Ra(["permission:!string"],[a]);try{return this.F().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}}function Vb(a){Ra(["uri:!string"],arguments);return encodeURI(a)}function Wb(a){Ra(["uri:!string"],arguments);return encodeURIComponent(a)};
var nc=[],oc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pc=function(a){return oc[a]},qc=/[\x00\x22\x26\x27\x3c\x3e]/g;var uc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,vc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},wc=function(a){return vc[a]};
nc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(uc,wc)+"'"}};var Ec=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Gc=function(a){return Fc[a]};nc[16]=function(a){return a};var Jc,Kc=[],Lc=[],Mc=[],Nc=[],Oc=[],Pc={},Qc,Rc,Sc,Tc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Uc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Pc[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Pc[c](e):Jc(c,e,b)},Wc=function(a,b,c,d){c=c||[];d=d||sa;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Vc(a[g],b,c,d));
return e},Xc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pc[b];return c?c.b||0:0},Vc=function(a,b,c,d){if(wa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Vc(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Kc[h];if(!k||b(k))return;c[h]=!0;try{var l=Wc(k,b,c,d);e=Uc(l);Sc&&(e=Sc.Ze(e,l))}catch(G){d(h,G),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Vc(a[m],b,c,d)]=Vc(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var r=Vc(a[q],b,c,d);Rc&&(p=p||r===Rc.pb);e.push(r)}return Rc&&p?Rc.$e(e):e.join("");case "escape":e=Vc(a[1],b,c,d);if(Rc&&wa(a[1])&&"macro"===a[1][0]&&Rc.Kf(a))return Rc.cg(e);e=String(e);for(var u=2;u<a.length;u++)nc[a[u]]&&(e=nc[a[u]](e));return e;case "tag":var w=a[1];if(!Nc[w])throw Error("Unable to resolve tag reference "+w+".");return e={nd:a[2],index:w};case "zb":var v={arg0:a[2],arg1:a[3],
ignore_case:a[5]};v["function"]=a[1];var D=Yc(v,b,c,d);a[4]&&(D=!D);return D;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yc=function(a,b,c,d){try{return Qc(Wc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Zc=null,cd=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Zc=$c(a,ad()||function(){});for(var e=0;e<Lc.length;e++){var g=Lc[e],h=bd(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<Nc.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Zc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Zc(e[g]);if(null===
h)return null;if(h)return!1}return!0},$c=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Yc(Mc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dd,ed=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Je&&(h["fix_"+k]=!0),h.od=h.od||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,D:b.D,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],D:d,cb:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.od&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.Cd=function(){return this[this.length-1]};d.mc=function(a){var b=this.Cd();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Ye=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.cb=b.test(a.tagName)||a.cb);return a},g=r,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.mc("TABLE")?(a="<TBODY>"+a,m()):h.Og&&c.test(e)&&d.Ye(e)?d.mc(e)?k():(a="</"+b.tagName+">"+a,m()):b.cb||d.push(b)},endTag:function(a){d.Cd()?h.pf&&!d.mc(a.tagName)?k():d.pop():h.pf&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};r=function(){m();return e(g())}}();return{append:function(b){a+=b},hg:r,Ug:function(a){for(var b;(b=r())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Vg:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.ah="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Xg=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.bh=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.D){var d=a.D[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.cb?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Ng=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Oe=a.Oe||!b[h]&&h;dd=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(u){var b=[];c(a,function(a){b.push(a)});return b}}var k={Ae:a,Be:a,Ce:a,De:a,Ke:a,Le:function(a){return a},done:a,error:function(a){throw a;},lg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,eb:d.defaultView||d.parentWindow,Aa:d,Eb:dd("",{Je:!0}),$b:[b],vc:"",wc:d.createElement(b.nodeName),$a:[],na:[]});a(this.wc,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.na,arguments);for(var a;!this.yb&&this.na.length;)a=this.na.shift(),"function"===typeof a?this.Se(a):this.Fc(a)};g.prototype.Se=function(a){var b={type:"function",value:a.name||a.toString()};this.qc(b);a.call(this.eb,this.Aa);this.Id(b)};
g.prototype.Fc=function(a){this.Eb.append(a);for(var b,c=[],d,e;(b=this.Eb.hg())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Dg(c);d&&this.xf(b);e&&this.yf(b)};g.prototype.Dg=function(a){var b=this.Pe(a);b.ed&&(b.hc=this.vc+b.ed,this.vc+=b.gg,this.wc.innerHTML=b.hc,this.Ag())};g.prototype.Pe=function(a){var b=this.$b.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.D){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.D.id&&"ps-style"!==a.D.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.cb?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{dh:a,raw:d.join(""),ed:e.join(""),gg:g.join("")}};g.prototype.Ag=function(){for(var c,d=[this.wc];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.$b[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.$b[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.xf=function(a){var b=this.Eb.clear();b&&this.na.unshift(b);a.src=a.D.src||a.D.Gg;a.src&&this.$a.length?this.yb=a:this.qc(a);var c=this;this.Cg(a,function(){c.Id(a)})};g.prototype.yf=function(a){var b=this.Eb.clear();b&&this.na.unshift(b);a.type=a.D.type||a.D.Hg||"text/css";this.Eg(a);b&&this.write()};g.prototype.Eg=function(a){var b=this.Re(a);this.If(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.Aa.createTextNode(a.content)))};g.prototype.Re=function(a){var b=this.Aa.createElement(a.tagName);b.setAttribute("type",a.type);d(a.D,function(a,c){b.setAttribute(a,c)});return b};g.prototype.If=function(a){this.Fc('<span id="ps-style"/>');var b=this.Aa.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.qc=function(a){a.Yf=this.na;this.na=[];this.$a.unshift(a)};g.prototype.Id=function(a){a!==this.$a[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.$a.shift(),this.write.apply(this,a.Yf),!this.$a.length&&this.yb&&(this.qc(this.yb),this.yb=null))};g.prototype.Cg=function(a,b){var c=this.Qe(a),d=this.sg(c),e=this.options.Ae;a.src&&(c.src=a.src,this.qg(c,d?e:function(){b();e()}));try{this.Hf(c),a.src&&!d||b()}catch(A){this.options.error(A),b()}};g.prototype.Qe=function(a){var b=this.Aa.createElement(a.tagName);d(a.D,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Hf=function(a){this.Fc('<span id="ps-script"/>');
var b=this.Aa.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.qg=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.sg=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.lg&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Be(),a.stream=c.apply(null,a),b.Ce())}function c(c,g,k){function l(a){a=k.Le(a);v.write(a);k.De(a)}v=new p(c,k);v.id=d++;v.name=k.name||v.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var r=v.eb.onerror||a;v.eb.onerror=function(a,b,c){k.error({Rg:a+
" - "+b+":"+c});r.apply(v.eb,arguments)};v.write(g,function(){e(m,q);v.eb.onerror=r;k.done();v=null;b()});return v}var d=0,m=[],v=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Pg?c[0]:c;var h=[c,d,e];c.bg={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Ke(h);m.push(h);v||b();return c.bg},{streams:{},Tg:m,Ig:p})}();ed=l.postscribe}})();var fd={},gd=null;fd.o="GTM-4S9T";fd.tb="bc0";var hd="www.googletagmanager.com/gtm.js";var id=hd,jd=null,kd=null,ld="//www.googletagmanager.com/a?id="+fd.o+"&cv=613",md={},nd={},od=function(){var a=gd.sequence||0;gd.sequence=a+1;return a};var J=function(a,b,c,d){return(2===pd()||d||"http:"!=B.location.protocol?a:b)+c},pd=function(){var a=pb(),b;if(1===a)a:{var c=id;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var qd=!1;var N=function(){var a=function(a){return{toString:function(){return a}}};return{Jc:a("convert_case_to"),Kc:a("convert_false_to"),Lc:a("convert_null_to"),Mc:a("convert_true_to"),Nc:a("convert_undefined_to"),wa:a("function"),qe:a("instance_name"),se:a("live_only"),te:a("malware_disabled"),ue:a("once_per_event"),ad:a("once_per_load"),bd:a("setup_tags"),ve:a("tag_id"),cd:a("teardown_tags")}}();var sd=new Ga,td={},wd={set:function(a,b){y(ud(a,b),td)},get:function(a){return vd(a,2)},reset:function(){sd=new Ga;td={}}},vd=function(a,b){return 2!=b?sd.get(a):xd(a)},xd=function(a,b,c){var d=a.split(".");return zd(d)},zd=function(a){for(var b=td,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Dd=function(a,b){sd.set(a,b);y(ud(a,b),td)},ud=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ed=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Fd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Gd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Hd=function(a){var b=vd("gtm.whitelist");var c=b&&La(Da(b),Fd),d=vd("gtm.blacklist")||vd("tagTypeBlacklist")||[];
Ed.test(B.location&&B.location.hostname)&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&La(Da(d),Gd),g={};return function(h){var k=h&&h[N.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=nd[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>xa(c,l[q])){p=
!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u;if(!(u=0<=xa(e,k)))a:{for(var w=l||[],v=new Ga,D=0;D<e.length;D++)v.set(e[D],!0);for(var G=0;G<w.length;G++)if(v.get(w[G])){u=!0;break a}u=!1}r=u}return g[k]=!m||r}};var Id={Ze:function(a,b){b[N.Jc]&&"string"===typeof a&&(a=1==b[N.Jc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(N.Lc)&&null===a&&(a=b[N.Lc]);b.hasOwnProperty(N.Nc)&&void 0===a&&(a=b[N.Nc]);b.hasOwnProperty(N.Mc)&&!0===a&&(a=b[N.Mc]);b.hasOwnProperty(N.Kc)&&!1===a&&(a=b[N.Kc]);return a}};var Jd=function(a,b,c){this.ag=a;this.Zf=b;this.Qf=c};ia(Jd,Error);Jd.prototype.getParameters=function(){return this.Zf};var Kd={active:!0,isWhitelisted:function(){return!0}},Ld=function(a){var b=gd.zones;!b&&a&&(b=gd.zones=a());return b};var Md=!1,Nd=0,Od=[];function Pd(a){if(!Md){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Md=!0;for(var e=0;e<Od.length;e++)E(Od[e])}Od.push=function(){for(var a=0;a<arguments.length;a++)E(arguments[a]);return 0}}}function Qd(){if(!Md&&140>Nd){Nd++;try{C.documentElement.doScroll("left"),Pd()}catch(a){B.setTimeout(Qd,50)}}}var Rd=function(a){Md?a():Od.push(a)};var Sd=function(){function a(a){return!va(a)||0>a?0:a}if(!gd._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=va(wd.get("gtm.start"))?wd.get("gtm.start"):0;gd._li={cst:a(c-b),cbt:a(jd-b)}}};var Td=!1,Ud=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Vd=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Sd();return B[b]},Wd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ud();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Xd=!1;var ce=function(a){};function be(a,b){b.containerId=fd.o;return{type:a,value:b}};
var de=function(){return"&tc="+Nc.filter(function(a){return a}).length},me=function(){ee&&(B.clearTimeout(ee),ee=void 0);void 0===fe||ge[fe]&&!he||(ie[fe]||je.Lf()||0>=ke--?ie[fe]=!0:(je.jg(),rb(le()),ge[fe]=!0,he=""))},le=function(){var a=fe;return void 0===a?"":[ne,ge[a]?"":"&es=1",oe[a],de(),he,"&z=0"].join("")},pe=function(){return[ld,"&v=3&t=t","&pid="+za(),"&rv="+fd.tb].join("")},qe="0.005000">Math.random(),ne=pe(),re=function(){ne=pe()},ge={},he="",fe=void 0,oe={},ie={},ee=
void 0,je=function(a,b){var c=0,d=0;return{Lf:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},jg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),ke=1E3,se=function(a,b,c){if(qe&&!ie[a]&&b){a!==fe&&(me(),fe=a);var d=c+String(b[N.wa]||"").replace(/_/g,"");he=he?he+"."+d:"&tr="+d;ee||(ee=B.setTimeout(me,500));2022<=le().length&&me()}};function te(a,b,c,d,e,g){var h=Nc[a],k=ue(a,b,c,d,e,g);if(!k)return null;var l=Vc(h[N.bd],g.ia,[],ve());if(l&&l.length){var m=l[0];k=te(m.index,b,k,1===m.nd?e:k,e,g)}return k}
function ue(a,b,c,d,e,g){function h(){if(k[N.te])d();else{var b=Wc(k,g.ia,[],l),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;se(g.id,Nc[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;se(g.id,Nc[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;se(g.id,k,"1");var h=function(a){if(a instanceof
we)throw a;ce(a);se(g.id,k,"7");e||(e=!0,d());throw new we(a);};try{Uc(b,h)}catch(I){try{h(I)}catch(O){}}}}var k=Nc[a];if(g.ia(k))return null;var l=ve(),m=Vc(k[N.cd],g.ia,[],l);if(m&&m.length){var p=m[0],q=te(p.index,b,c,d,e,g);if(!q)return null;c=q;d=2===p.nd?e:q}if(k[N.ad]||k[N.ue]){var r=k[N.ad]?Oc:b,u=c,w=d;if(!r[a]){h=Ia(h);var v=xe(a,r,h);c=v.X;d=v.Da}return function(){r[a](u,w)}}return h}
function xe(a,b,c){var d=[],e=[];b[a]=ye(d,e,c);return{X:function(){b[a]=ze;for(var c=0;c<d.length;c++)d[c]()},Da:function(){b[a]=Ae;for(var c=0;c<e.length;c++)e[c]()}}}function ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ze(a){a()}function Ae(a,b){b()}function ve(){return function(a,b){ce(b)}}var we=function(){};ia(we,Error);function Be(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&a()})},He:function(){d=!0;b>=c&&a()}}}function Ce(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Rd,k=b.Rd;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!qe)return;var c=function(a){var d=b.ia(Nc[a])?"3":"4",g=Vc(Nc[a][N.bd],b.ia,[],sa);g&&g.length&&c(g[0].index);se(b.id,Nc[a],d);var h=Vc(Nc[a][N.cd],b.ia,[],sa);h&&h.length&&c(h[0].index)};c(a);}var Ee=!1;function ad(){return function(a,b){ce(b)}}var T={Nb:"event_callback",Ob:"event_timeout"};var Ge={},Ie=function(a){var b=fd.o;return function(){var c=arguments[0];if(c&&(Ge[c]||Ge.all)){var d=a.apply(void 0,Array.prototype.slice.call(arguments,0));Ge[c]&&He(b,c,Ge[c],d);Ge.all&&He(b,c,Ge.all,d)}}};
function He(a,b,c,d){for(var e=0;e<c.length;e++){var g=void 0,h="An in-page policy denied the permission request";try{g=c[e].call(void 0,a,b,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!g)throw new Jd(b,{},h);}};var Je=/[A-Z]+/,Ke=/\s/,Le=function(a){if(t(a)&&(a=a.trim(),!Ke.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Je.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],fa:d}}}}};var Me=null,Ne={},Oe={},Pe,Qe=function(a,b){var c={event:a};b&&(c.eventModel=y(b),b[T.Nb]&&(c.eventCallback=b[T.Nb]),b[T.Ob]&&(c.eventTimeout=b[T.Ob]));return c};
var Ue={config:function(a){},
event:function(a){var b=a[1];if(t(b)&&!(3<a.length)){var c;if(2<a.length){if(!Va(a[2]))return;c=a[2]}var d=Qe(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js",
"gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];c&&ha(c)&&c.gtm&&c.gtm.fromContainer||(Ge[b]||(Ge[b]=[]),Ge[b].push(c))}},set:function(a){var b;2==a.length&&Va(a[1])?b=y(a[1]):3==a.length&&t(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b),b.event="gtag.set",b._clear=!0,b}};var $e=!1,af=[];function bf(){if(!$e){$e=!0;for(var a=0;a<af.length;a++)E(af[a])}};var cf=[],df=!1;function ef(a){var b=a.eventCallback,c=Ia(function(){ta(b)&&E(function(){b(fd.o)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c}
var ff=function(){for(var a=!1;!df&&0<cf.length;){df=!0;delete td.eventModel;var b=cf.shift();if(ta(b))try{b.call(wd)}catch(Ve){}else if(wa(b)){var c=b;if(t(c[0])){var d=c[0].split("."),e=d.pop(),g=c.slice(1),h=vd(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,g)}catch(Ve){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&t(b[0])){var l=Ue[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){df=!1;continue}}var m;
var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Dd(p,void 0),Dd(p,q[p]));var u=q.event;if(u){var w=q["gtm.uniqueEventId"];w||(w=od(),q["gtm.uniqueEventId"]=w,Dd("gtm.uniqueEventId",w));kd=u;var v;var D,G,A=q,I=A.event,O=A["gtm.uniqueEventId"],P=gd.zones;G=P?P.checkState(fd.o,O):Kd;if(G.active){var F=ef(A);c:{var V=G.isWhitelisted;if("gtm.js"==I){if(Ee){D=!1;break c}Ee=!0}var Q=O,K=I;if(qe&&!ie[Q]&&fe!==Q){me();fe=Q;he="";var Z=Q,M,
L=K;M=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";oe[Z]="&e="+M+"&eid="+Q;ee||(ee=B.setTimeout(me,500))}var R=Hd(V),ca={id:O,name:I,callback:F||sa,ia:R,Za:[]};ca.Za=cd(R);for(var qa,Ca=ca,ib=Be(Ca.callback),jb=[],zb=[],kb=0;kb<Nc.length;kb++)if(Ca.Za[kb]){var We=
Nc[kb];var dc=ib.add();try{var Xe=te(kb,jb,dc,dc,dc,Ca);Xe?zb.push({Rd:kb,b:Xc(We),M:Xe}):(De(kb,Ca),dc())}catch(Ve){dc()}}ib.He();zb.sort(Ce);for(var Bd=0;Bd<zb.length;Bd++)zb[Bd].M();qa=0<zb.length;if("gtm.js"===I||"gtm.sync"===I)d:{}if(qa){for(var nh={__cl:!0,
__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Hc=0;Hc<ca.Za.length;Hc++)if(ca.Za[Hc]){var Ze=Nc[Hc];if(Ze&&!nh[Ze[N.wa]]){D=!0;break c}}D=!1}else D=qa}v=D?!0:!1}else v=!1;kd=null;m=v}else m=!1;a=m||a}df=!1}return!a},gf=function(){var a=ff();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[fd.o]&&b.end){b[fd.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},hf=function(){var a=mb("dataLayer",
[]),b=mb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Od.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});af.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(cf.push.apply(cf,b);300<this.length;)this.shift();return ff()};cf.push.apply(cf,a.slice(0));E(gf)};var jf={};jf.pb=new String("undefined");
var kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===jf.pb?b:a[d]);return c.join("")}};kf.prototype.toString=function(){return this.resolve("undefined")};kf.prototype.valueOf=kf.prototype.toString;jf.we=kf;jf.Yb={};jf.$e=function(a){return new kf(a)};var lf={};jf.kg=function(a,b){var c=od();lf[c]=[a,b];return c};jf.jd=function(a){var b=a?0:1;return function(a){var c=lf[a];if(c&&"function"===typeof c[b])c[b]();lf[a]=void 0}};jf.Kf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};jf.cg=function(a){if(a===jf.pb)return a;var b=od();jf.Yb[b]=a;return'google_tag_manager["'+fd.o+'"].macro('+b+")"};jf.Pf=function(a,b,c){a instanceof jf.we&&(a=a.resolve(jf.kg(b,c)),b=sa);return{hc:a,X:b}};var mf=new Ga;function nf(a,b){function c(a){var b=H(a),c=Fb(b,"protocol"),d=Fb(b,"host",!0),e=Fb(b,"port"),g=Fb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function of(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<e.length;g++)if(b[e[g]]){d=b[e[g]](c);break a}}catch(w){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=xa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var q=a.ignore_case?"i":void 0;try{var r=String(c)+q,u=mf.get(r);u||(u=new RegExp(c,q),mf.set(r,u));p=u.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return nf(b,c)}return!1};var pf=function(){return!1};function qf(a,b){Ra(["key:!string","dataLayerVersion:?number"],arguments);this.F().assert("read_data_layer",a);return Xa(vd(a,b||2))}function rf(){return(new Date).getTime()}function sf(a){return Aa(Wa(a))}function tf(a){return null===a?"null":void 0===a?"undefined":a.toString()}function uf(a,b){Ra(["min:!number","max:!number"],arguments);return za(a,b)}
function vf(a,b,c){Ra(["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Oa,e=!1,g=0;g<a.length();g++){var h=a.get(g);h instanceof Oa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var wf=function(){var a=new gb,b=Nb();pf()&&(b.injectScript=sa,b.injectHiddenIframe=sa);a.addAll({callLater:b.callLater,copyFromDataLayer:qf,copyFromWindow:b.copyFromWindow,createQueue:b.createQueue,createArgumentsQueue:b.createArgumentsQueue,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,generateRandom:uf,getCookieValues:b.getCookieValues,getTimestamp:rf,getUrl:b.getUrl,injectHiddenIframe:b.injectHiddenIframe,injectScript:b.injectScript,logToConsole:b.logToConsole,makeInteger:sf,makeString:tf,
makeTableMap:vf,queryPermission:b.queryPermission,sendPixel:b.sendPixel,setInWindow:b.setInWindow});return function(b){return a.get(b)}};var xf;function yf(){var a=data.runtime||[];xf=new Pb;Jc=function(a,b,c){zf(b);var d=new Oa,e;for(e in b)b.hasOwnProperty(e)&&d.set(e,Xa(b[e]));xf.S(c);var g=xf.M([a,d]);xf.S(void 0);g instanceof ja&&"return"===g.C&&(g=g.getData());return Wa(g)};Qc=of;Ob(xf,wf());for(var b=0;b<a.length;b++){var c=a[b];if(!wa(c)||3>c.length){if(0===c.length)continue;break}xf.M(c)}}
function zf(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;ta(b)&&(a.gtmOnSuccess=function(){E(b)});ta(c)&&(a.gtmOnFailure=function(){E(c)})}
function Af(a){var b={},c=function(a){throw Bf(a,{},"The requested permission is not configured.");};xf.Ia(c);xf.Ja(Ie(function(){var a=arguments[0];return a&&b[a]?b[a].apply(void 0,Array.prototype.slice.call(arguments,0)):{}}));for(var d in a)if(a.hasOwnProperty(d)){var e=a[d],g=!1,h;for(h in e)if(e.hasOwnProperty(h)){g=!0;var k=Cf(h,e[h]);xf.vb(d,h,k.assert);b[h]||(b[h]=k.U)}g||xf.vb(d,"default",c)}}
function Cf(a,b){var c=Tc(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Bf;return Uc(c)}function Bf(a,b,c){return new Jd(a,b,c)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ef=encodeURI,U=encodeURIComponent,Ff=function(a,b){if(!a)return!1;var c=Fb(H(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Gf=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null},Hf=function(){return!1};var If=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ub(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Jf=function(a){gd.hasOwnProperty("autoEventsSettings")||(gd.autoEventsSettings={});var b=gd.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Kf=function(a,b,c,d){var e=Jf(a),g=Ha(e,b,d);e[b]=
c(g)},Lf=function(a,b,c){var d=Jf(a);return Ha(d,b,c)};var Nf=function(a,b){if(!Mf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);return null},Of=!1;
if(C.querySelectorAll)try{var Pf=C.querySelectorAll(":root");Pf&&1==Pf.length&&Pf[0]==C.documentElement&&(Of=!0)}catch(a){}var Mf=Of;var Qf=function(){for(var a=hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Tf=function(a,b,c,d){var e=Rf(b);return Jb(a,e,Sf(c),d)},Uf=function(a,b,c,d){var e=""+Rf(c),g=Sf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")};
function Rf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function Sf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vf=["1"],Wf={},Zf=function(a,b,c){var d=Xf(a);if(!Wf[d]&&!Yf(d,b,c)){var e=Qf(),g=Uf(e,"1",b,c);Mb(d,g,c,b,new Date(Fa()+7776E6));Yf(d,b,c)}};function Yf(a,b,c){var d=Tf(a,b,c,Vf);d&&(Wf[a]=d);return d}function Xf(a){return(a||"_gcl")+"_au"};function $f(){for(var a=ag,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function bg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var ag,cg,dg=function(a){ag=ag||bg();cg=cg||$f();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(ag[l],ag[m],ag[p],ag[q])}return b.join("")},eg=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=cg[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ag=ag||bg();cg=cg||
$f();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var fg;function gg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var hg=function(){var a=mb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ig=/(.*?)\*(.*?)\*(.*)/,jg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,kg=/^(?:www\.|m\.|amp\.)+/,lg=/([^?#]+)(\?[^#]*)?(#.*)?/,mg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,og=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(dg(String(d))))}var e=b.join("*");return["1",ng(e),e].join("*")},ng=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}fg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},qg=function(){return function(a){var b=H(B.location.href),c=b.search.replace("?",""),d=Db(c,"_gl",!0)||"";a.query=pg(d)||{};var e=Fb(b,"fragment").match(mg);a.fragment=pg(e&&e[3]||
"")||{}}},pg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=ig.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===ng(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=eg(r[u+1]);return q}}}}catch(w){}};
function rg(a,b,c){function d(a){var b=a,c=mg.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=lg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function sg(a,b,c){for(var d={},e={},g=hg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&gg(k.domains,b)&&(k.fragment?Ja(e,k.callback()):Ja(d,k.callback()))}if(Ka(d)){var l=og(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,r=0;r<p.length;r++){var u=p[r];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var w=C.createElement("input");w.setAttribute("type","hidden");w.setAttribute("name","_gl");w.setAttribute("value",
l);a.appendChild(w)}}else if("post"===m){var v=rg(l,a.action);Bb.test(v)&&(a.action=v)}}}else tg(l,a,!1)}if(!c&&Ka(e)){var D=og(e);tg(D,a,!0)}}function tg(a,b,c){if(b.href){var d=rg(a,b.href,void 0===c?!1:c);Bb.test(d)&&(b.href=d)}}
var ug=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||sg(e,e.hostname,!1)}}catch(h){}},vg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=Fb(H(b.action),"host");sg(b,c,!0)}}catch(d){}},wg=function(a,b,c,d){var e=hg();e.init||(sb(C,"mousedown",ug),sb(C,"keyup",ug),sb(C,"submit",vg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};hg().decorators.push(g)},xg=function(){var a=C.location.hostname,b=jg.exec(C.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(kg,"")===e.replace(kg,"")},yg=function(a,b){return!1===a?!1:a||b||xg()};var zg=/^\w+$/,Ag=/^[\w-]+$/,Bg=/^~?[\w-]+$/,Cg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},Eg=function(a){var b=Gb(a,C.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return Dg(c)};function Fg(a){return a&&"string"==typeof a&&a.match(zg)?a:"_gcl"}
var Gg=function(a){if(a){if("string"==typeof a){var b=Fg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:Fg(a.dc),aw:Fg(a.aw),gf:Fg(a.gf),ha:Fg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},Ig=function(){var a=H(B.location.href),b=Fb(a,"query",!1,void 0,"gclid"),c=Fb(a,"query",!1,void 0,"gclsrc"),d=Fb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Db(e,"gclid");c=c||Db(e,"gclsrc")}return Hg(b,c,d)};
function Hg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Ag))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Jg(a,b){function c(a,b){var c=Kg(a,d);c&&Mb(c,b,g,e,k,!0)}b=b||{};var d=Gg(b.prefix),e=b.domain||"auto",g=b.path||"/",h=Fa(),k=new Date(h+7776E6),l=Math.round(h/1E3),m=function(a){return["GCL",l,a].join(".")};a.aw&&(!0===b.fh?c("aw",m("~"+a.aw[0])):c("aw",m(a.aw[0])));a.dc&&c("dc",m(a.dc[0]));a.gf&&c("gf",m(a.gf[0]));a.ha&&c("ha",m(a.ha[0]))}
var Kg=function(a,b){var c=Cg[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},Lg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},Mg=function(a,b,c,d,e){if(wa(b)){var g=Gg(e);wg(function(){for(var b={},c=0;c<a.length;++c){var d=Kg(a[c],g);if(d){var e=Gb(d,C.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},Dg=function(a){return a.filter(function(a){return Bg.test(a)})};var Ng=/^\d+\.fls\.doubleclick\.net$/;function Og(a){var b=H(B.location.href),c=Fb(b,"host",!1);if(c&&c.match(Ng)){var d=Fb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var Pg=function(a){var b=Og("gclaw");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.aw){var d=Ig().aw||[];if(0<d.length)return d}var e=Kg("aw",c);return e?Eg(e):[]},Qg=function(a){var b=Og("gcldc");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.dc){var d=Ig().dc||[];if(0<d.length)return d}var e=Kg("dc",c);return e?Eg(e):[]},Rg=function(a){var b=Gg(a);if("_gcl"==b.ha){var c=Ig().ha||[];if(0<c.length)return c}return Eg(b.ha+"_ha")},Sg=function(){var a=Og("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var g=c[e].match(d);g&&b.push({Bc:g[1],value:g[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bc]||(h[b[k].Bc]=[]),h[b[k].Bc].push({timestamp:l[1],sf:l[2]}))}var m=[],p;for(p in h)if(h.hasOwnProperty(p)){for(var q=[],r=h[p],u=0;u<r.length;u++)q.push(r[u].sf);q=Dg(q);q.length&&m.push(p+":"+q.join(","))}return m.join(";")},Tg=function(a,
b,c){Zf(a,b,c);var d=Wf[Xf(a)],e=Ig().dc||[];if(d&&0<e.length){var g=gd.joined_au=gd.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk";m+="?gclid="+e[l]+"&auiddc="+d;Ab(m);k=!0}if(k){var p=Xf(a);if(Wf[p]){var q=Uf(Wf[p],"1",b,c);Mb(p,q,c,b,new Date(Fa()+7776E6))}g[h]=!0}}}};var Vg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ug()};function Ug(){if(3===fd.tb.length)return"g";return"G"}function Wg(){return"w"}
var Xg=function(a){var b=fd.o.split("-"),c=b[0].toUpperCase(),d=Vg[c]||"i",e=a&&"GTM"===c?b[1]:"";return(3===fd.tb.length?"2"+Wg():"")+d+fd.tb+e};
var Yg=function(a){return!(void 0===a||null===a||0===(a+"").length)},Zg=function(a,b){var c;if(2===b.K)return a("ord",za(1E11,1E13)),!0;if(3===b.K)return a("ord","1"),a("num",za(1E11,1E13)),!0;if(4===b.K)return Yg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.K)c="1";else if(6===b.K)c=b.Nd;else return!1;Yg(c)&&a("qty",c);Yg(b.bc)&&a("cost",b.bc);Yg(b.Cc)&&a("ord",b.Cc);return!0},$g=encodeURIComponent,ah=function(a,b){function c(a,b,c){g.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:$g(b)))}var d=a.fc,
e=a.protocol;e+=a.Gb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+$g(d)+(";type="+$g(a.gc))+(";cat="+$g(a.Sa));var g=a.bf||{},h;for(h in g)g.hasOwnProperty(h)&&(e+=";"+$g(h)+"="+$g(g[h]+""));if(Zg(c,a)){Yg(a.Ec)&&c("u",a.Ec);Yg(a.tran)&&c("tran",a.tran);c("gtm",Xg());!1===a.Ee&&c("npa","1");if(a.ac){var k=Qg(a.za);k&&k.length&&c("gcldc",k.join("."));var l=Pg(a.za);l&&l.length&&c("gclaw",l.join("."));var m=Sg();m&&c("gac",m);
Zf(a.za);var p=Wf[Xf(a.za)];p&&c("auiddc",p);}Yg(a.sc)&&c("prd",a.sc,!0);for(var q in a.ab)a.ab.hasOwnProperty(q)&&c(q,a.ab[q]);e+=b||"";Yg(a.Db)&&c("~oref",a.Db);a.Gb?qb(e+"?",a.X):rb(e+"?",a.X,a.Da)}else E(a.Da)};var dh=!!B.MutationObserver,eh=void 0,fh=function(a){if(!eh){var b=function(){var a=C.body;if(a)if(dh)(new MutationObserver(function(){for(var a=0;a<eh.length;a++)E(eh[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;sb(a,"DOMNodeInserted",function(){b||(b=!0,E(function(){b=!1;for(var a=0;a<eh.length;a++)E(eh[a])}))})}};eh=[];C.body?b():E(b)}eh.push(a)};var gh=/\./g;var Ch=B.clearTimeout,Dh=B.setTimeout,W=function(a,b,c){if(pf()){b&&E(b)}else return ob(a,b,c)},Eh=function(){return B.location.href},Fh=function(a){return Fb(H(a),"fragment")},Gh=function(a,b){return vd(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Ih=function(a,b){B[a]=b},X=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Jh=function(a,
b,c){return Gb(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Ig();Jg(e,d)},Lh=function(a,b,c,d){var e=qg(),g=hg();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},k=g.data;k&&(Ja(h,k.query),Ja(h,k.fragment));for(var l=Gg(b),m=0;m<a.length;++m){var p=a[m];if(void 0!==Cg[p]){var q=Kg(p,l),r=h[q];if(r){var u=Math.min(Lg(r),Fa()),w;b:{for(var v=u,D=Gb(q,C.cookie),G=0;G<D.length;++G)if(Lg(D[G])>v){w=!0;break b}w=!1}w||
Mb(q,r,c,d,new Date(u+7776E6),!0)}}}var A={prefix:b,path:c,domain:d};Jg(Hg(h.gclid,h.gclsrc),A);},Mh=function(a,b,c,d,e){Mg(a,b,c,d,e);},Nh=function(a,b){if(pf()){b&&E(b)}else qb(a,b)},Oh=function(a){return!!Lf(a,"init",!1)},Ph=function(a){Jf(a).init=!0},Qh=function(a,b,c){var d=(void 0===c?
0:c)?"www.googletagmanager.com/gtag/js":id;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));W(J("https://","http://",d))};
var Sh=jf.Pf;var ei=function(a,b,c){this.n=a;this.t=b;this.p=c},fi=function(){this.c=1;this.e=[];this.p=null};function gi(a){var b=gd,c=b.gss=b.gss||{};return c[a]=c[a]||new fi}var hi=function(a,b){gi(a).p=b},ii=function(a,b,c){var d=Math.floor(Fa()/1E3);gi(a).e.push(new ei(b,d,c))},ji=function(a){};var si=window,ti=document,ui=function(a){var b=si._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===si["ga-disable-"+a])return!0;try{var c=si.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Gb("AMP_TOKEN",ti.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var zi=function(a){if(1===gi(a).c){gi(a).c=2;var b=encodeURIComponent(a);ob(("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Ai=function(a,b){};var Y={a:{}};
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;ah(a,c)}(function(a){Y.__flc=a;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Gf(b.vtp_customVariable||[],"key","value")||{},e={Sa:b.vtp_activityTag,ac:c,za:b.vtp_conversionCookiePrefix||void 0,K:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,fc:b.vtp_advertiserId,gc:b.vtp_groupTag,Da:b.vtp_gtmOnFailure,X:b.vtp_gtmOnSuccess,Db:b.vtp_useImageTag?void 0:
b.vtp_url,protocol:"",Gb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,Ec:b.vtp_userVariable,ab:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){W("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([Gf(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Sd();W("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=X("google_trackConversion");if(ta(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Gf(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Xg()})||b()}else b()},b)})}();
Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.g="d";Y.__d.h=!0;Y.__d.b=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Mf?C.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=vb(a.vtp_elementId);b&&(c=d?ub(b,d):wb(b));return Ea(String(b&&c))})}();Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(){return kd})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Gh("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fb(H(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eb(H(String(b))):String(b)})}();
Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=If(b);d.event="gtm.click";Hh(d)}}(function(a){Y.__cl=a;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Oh("cl")){var c=X("document");sb(c,"click",a,!0);Ph("cl")}E(b.vtp_gtmOnSuccess)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Jh(a.vtp_name,Gh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.b=0})(function(a){return za(a.vtp_min,a.vtp_max)})}();

Y.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Y.__u=a;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gh("gtm.url",1))||Eh();var d=b[a("vtp_component")];return d&&"URL"!=d?Fb(H(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):Eb(H(String(c)))})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(a){return function(){if(a.nc&&a.oc>=a.nc)a.ic&&X("self").clearInterval(a.ic);else{a.oc++;var b=(new Date).getTime();Hh({event:a.P,"gtm.timerId":a.ic,"gtm.timerEventNumber":a.oc,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.nc,"gtm.timerStartTime":a.Qd,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Qd,"gtm.triggers":a.yg})}}}(function(a){Y.__tl=a;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.b=0})(function(b){E(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{P:b.vtp_eventName,oc:0,interval:Number(b.vtp_interval),nc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),yg:String(b.vtp_uniqueTriggerId||"0"),Qd:(new Date).getTime()};c.ic=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;y(Gf(l.vtp_fieldsToSet,"fieldName","value"),e);y(Gf(l.vtp_contentGroup,"index","group"),g);y(Gf(l.vtp_dimension,"index","dimension"),h);y(Gf(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=y(l);b=y(b,m)}y(Gf(b.vtp_fieldsToSet,"fieldName","value"),e);y(Gf(b.vtp_contentGroup,
"index","group"),g);y(Gf(b.vtp_dimension,"index","dimension"),h);y(Gf(b.vtp_metric,"index","metric"),k);var p=Vd(b.vtp_functionName),q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+od(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},D=function(a,b){return void 0===b?b:a(b)},G=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&v("set",a+c,b[c])},A=function(){
var a=function(a,b,c){if(!Va(b))return!1;for(var d=Ha(Object(b),c,[]),e=0;d&&e<d.length;e++)v(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=Gh("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Va(c))return;c=Object(c);var d=Ha(e,"currencyCode",c.currencyCode);void 0!==d&&v("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){v("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");v("ec:setAction",g[h],k.actionField);break}}},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=w[e]?Ba(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},O={name:r};I(e,O,!0);p("create",b.vtp_trackingId||
c.trackingId,O);v("set","&gtm",Xg(!0));(function(a,c){void 0!==b[c]&&v("set",a,b[c])})("nonInteraction","vtp_nonInteraction");G("contentGroup",g);G("dimension",h);G("metric",k);var P={};I(e,P,!1)&&v("set",P);var F;b.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var a=e&&e.hitCallback;ta(a)&&
a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var V={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:D(String,b.vtp_eventLabel||c.label),eventValue:D(Aa,b.vtp_eventValue||c.value)};I(F,V,!1);v("send",V);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){p(function(){var a=Ud(),c=Gh("gtm.element",1),d=a&&a.getByName&&a.getByName(r),e=Df(X("gaplugins").Linker,d);if(c&&c.method&&"post"!=c.method.toLowerCase()){for(var g=c.childNodes,h=0;h<
g.length;h++)if("google_tag_manager_ua_cookie"==g[h].className){c.removeChild(g[h]);break}var k=e.decorate(c.action)||c.action;k=k.split("?")[1].split("&");for(var l=0;l<k.length;l++){var m=document.createElement("input");m.type="hidden";m.className="google_tag_manager_ua_cookie";var p=k[l].indexOf("=");0<p&&(m.name=k[l].slice(0,p),m.value=k[l].slice(p+1),c.insertBefore(m,null))}}else c&&c.action&&(c.action=e.decorate(c.action,b.vtp_useHashDecorateForm)||c.action,E(b.vtp_gtmOnSuccess))});}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:ua})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var S=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:S})}F?v("send","pageview",F):v("send","pageview");b.vtp_autoLinkDomains&&Wd(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var pa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(pa="internal/"+pa);a=!0;W(J("https:","http:","//www.google-analytics.com/"+pa,e&&e.forceSSL),function(){var a=Ud();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();






Y.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=Gh(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Eh()),d;d=wa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ff(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Fb(H(a),"HOST",!0)};(function(a){Y.__aev=a;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return Gh("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=Gh("gtm.element",1),m=Gh("event",1),u=Number(new Date);a===l&&b===m&&c>u-250?k=d:(d=k=l?wb(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var w;a:{var v=String(Gh("gtm.elementUrl",1)||e.vtp_defaultValue||""),D=H(v);switch(e.vtp_component||"URL"){case "URL":w=v;break a;case "IS_OUTBOUND":w=h(v,e);break a;default:w=Fb(D,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return w;case "ATTRIBUTE":var G;if(void 0===e.vtp_attribute)G=
g(e);else{var A=Gh("gtm.element",1);G=ub(A,e.vtp_attribute)||e.vtp_defaultValue||""}return G;default:return g(e)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=y(a),c=b;c[N.wa]=null;c[N.qe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.a.ga=["google"],function(){var a,b,c=function(c){function d(a){var b=[].slice.call(arguments,0);b[0]=v+b[0];u.push(b)}function g(a,b){void 0!==c[b]&&d(a,c[b])}function h(a,b){void 0!==c[b]&&d(a,Number(c[b]))}function k(a,b){if(r(b))for(var c=0;c<b.length;c++)d(a,b[c])}function l(a,b,c){if(r(b))for(var e=0;e<b.length;e++){for(var g=[a],h=b[e],k=0;k<c.length;k++)g.push(h[c[k]]);d.apply(this,g)}}function m(a,b){void 0!==c[b]&&d("_set",a,c[b])}function p(a,b){return void 0===b?b:a(b)}function q(a,b){void 0!==
b&&(D+="&"+a+"="+b)}var r=wa,u=X("_gaq",[],!1),w=!1,v="";void 0==c.vtp_trackerName?v="gtm"+od()+".":""!==c.vtp_trackerName&&(v=c.vtp_trackerName+".");g("_setAccount","vtp_webPropertyId");d("_set","gtmid",Xg(!0));

g("_setAllowLinker","vtp_allowLinker");g("_setAllowAnchor","vtp_allowAnchor");
g("_setAllowHash","vtp_allowHash");k("_addIgnoredRef",c.vtp_ignoredRef);k("_addIgnoredOrganic",c.vtp_ignoredOrganic);var D="";if(""!==
D){var G=function(a,b,c){for(var d=b.length-1;0<=d;d--){var e=b[d].split("=");if(e[0]===a)return e[1]||"1"}for(var g=c.length-1;0<=g;g--){var h=c[g].split("=");if(h[0]===a)return h[1]||"1"}},A=H(Eh()),I=Fb(A,"query").split("&"),O=c.vtp_allowAnchor?Fb(A,"fragment").split("&"):[];q("gclid",G("gclid",O,I));q("gclsrc",G("gclsrc",O,I));q("dclid",G("dclid",O,I));d("_set","campaignParams",D)}m("anonymizeIp","vtp_anonymizeIp");
c.vtp_enableInPageLinkId&&d("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");g("_setCampaignTrack",
"vtp_campaignTrack");g("_setClientInfo","vtp_clientInfo");g("_setDetectFlash","vtp_detectFlash");g("_setDetectTitle","vtp_detectTitle");

void 0!==c.vtp_forceSsl&&c.vtp_forceSsl&&(u.push(["_gat._forceSSL"]),w=!!c.vtp_forceSsl);d("_set","hitCallback",function(){ta(c.vtp_hitCallback)&&c.vtp_hitCallback();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){d("_trackEvent",String(c.vtp_eventCategory),String(c.vtp_eventAction),
p(String,c.vtp_eventLabel),p(Aa,c.vtp_eventValue),!!c.vtp_nonInteraction);}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("LINK"==c.vtp_trackType){}else if("LINK_BY_POST"==c.vtp_trackType){}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else d("_trackPageview");k("_cookiePathCopy",c.vtp_cookiePathCopy);
var L=function(){X("_gat")||c.vtp_gtmOnFailure()};if(c.vtp_doubleClick)b||(b=!0,W(J("https","http","://stats.g.doubleclick.net/dc.js",w),L,c.vtp_gtmOnFailure));else if(!a){var R=c.vtp_useDebugVersion?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";a=!0;W(J("https://ssl","http://www",R,w),L,c.vtp_gtmOnFailure)}};Y.__ga=c;Y.__ga.g="ga";Y.__ga.h=!0;Y.__ga.b=0}();

Y.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:Eh()}function b(b,c){sb(b,"hashchange",function(b){c({source:"hashchange",state:null,ma:Fh(a(b))})})}function c(b,c){sb(b,"popstate",function(b){c({source:"popstate",state:b.state,ma:Fh(a(b))})})}function d(a,b,c){var d=b.history,e=d[a];if(ta(e))try{d[a]=function(b,g,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,ma:Fh(Eh())})}}catch(p){}}function e(){var a={source:null,
ma:Fh(Eh()),state:X("history").state||null};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.ma!=b.ma){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.ma,"gtm.newUrlFragment":b.ma,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};a=b;Hh(e)}}}(function(a){Y.__hl=a;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(a){var g=X("self");if(!Oh("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",
g,k);Ph("hl")}E(a.vtp_gtmOnSuccess)})}();


Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){E(a.vtp_gtmOnFailure)})}();
Y.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,nb(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){E(h)}}}var b=function(a,b,c){Rd(function(){var d,e=gd;e.postscribe||(e.postscribe=ed);d=e.postscribe;var g={done:b},m=C.createElement("div");m.style.display="none";m.style.visibility="hidden";C.body.appendChild(m);try{d(m,a,g)}catch(p){E(c)}})};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.hc,k=g.X;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,xb(h),k,e)()}else Dh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();

Y.a.lcl=[],function(){function a(){var a=X("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=yb(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=Lf("lcl",g?"nv.mwt":"mwt",0),m=If(e);m.event="gtm.linkClick";if(g){var p=Lf("lcl","nv.ids",[]).join(",");if(p)m["gtm.triggers"]=p;else return}else{var q=Lf("lcl","ids",[]).join(",");m["gtm.triggers"]=q}if(b(c,e,a)&&!g&&l&&e.href){var r=X((e.target||
"_self").substring(1)),u=!0;if(Hh(m,function(){u&&r&&(r.location.href=e.href)},l))u=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Hh(m,function(){},l||2E3);return!0}};sb(a,"click",e,!1);sb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Eb(H(b.href)),l=Eb(H(e.location));return k!==l}return!0}(function(a){Y.__lcl=
a;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};Kf("lcl","mwt",k,0);e||Kf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};Kf("lcl","ids",l,[]);e||Kf("lcl","nv.ids",l,[]);Oh("lcl")||(a(),Ph("lcl"));E(b.vtp_gtmOnSuccess)})}();


var Bi={};Bi.macro=function(a){if(jf.Yb.hasOwnProperty(a))return jf.Yb[a]},Bi.onHtmlSuccess=jf.jd(!0),Bi.onHtmlFailure=jf.jd(!1);Bi.dataLayer=wd;Bi.callback=function(a){md.hasOwnProperty(a)&&ta(md[a])&&md[a]();delete md[a]};Bi.Me=function(){gd[fd.o]=Bi;nd=Y.a;Rc=Rc||jf;Sc=Id};
Bi.Gf=function(){gd=B.google_tag_manager=B.google_tag_manager||{};if(gd[fd.o]){var a=gd.zones;a&&a.unregisterChild(fd.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kc.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nc.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Lc.push(q)}Pc=Y;var u=data.permissions||{};yf();Af(u);Bi.Me();
hf();Md=!1;Nd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Pd();else{sb(C,"DOMContentLoaded",Pd);sb(C,"readystatechange",Pd);if(C.createEventObject&&C.documentElement.doScroll){var w=!0;try{w=!B.frameElement}catch(D){}w&&Qd()}sb(B,"load",Pd)}$e=!1;"complete"===C.readyState?bf():sb(B,"load",bf);
a:{if(!qe)break a;B.setInterval(re,864E5);}jd=(new Date).getTime()}};Bi.Gf();

})()

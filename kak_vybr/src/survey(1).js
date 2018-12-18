var namekey = ['cmpid','utm_source','utm_medium','utm_campaign'], //Ключи какие будем парсить 
	ifr_class = '#surveyifr',
    input_hide = 'text'; //hidden 

$(document).ready(function (){ 
	input(); 
}); 


function parseGET(url){ 
  if(!url || url == '') url = decodeURI(document.location.search); 
  if(url.indexOf('?') < 0) return Array(); 

  url = url.split('?'); 
  url = url[1]; 

  var GET = [], 
      params = [], 
      key = []; 

  if(url.indexOf('#')!=-1){ url = url.substr(0,url.indexOf('#')); } 
  if(url.indexOf('&') > -1){ params = url.split('&');} else {params[0] = url; } 

  for (r=0; r<params.length; r++){ 
    for (z=0; z<namekey.length; z++){ 
      if(params[r].indexOf(namekey[z]+'=') > -1){ 
        if(params[r].indexOf('=') > -1) { 
          key = params[r].split('='); 
          GET[key[0]]=key[1]; 
        } 
      } 
    } 
  } 
  return (GET); 
}; 

function input(){ 

  var $_GET = parseGET(); 
  var ifr_url = $(ifr_class).prop('src');
  ifr_url += '?';
  for(z=0; z<namekey.length; z++){ 
    if(!!$_GET[namekey[z]]){ 
    	ifr_url += ''+namekey[z]+'='+$_GET[namekey[z]]+'&';
    	$(ifr_class).attr("src", ifr_url);	
    } 
  } 

}
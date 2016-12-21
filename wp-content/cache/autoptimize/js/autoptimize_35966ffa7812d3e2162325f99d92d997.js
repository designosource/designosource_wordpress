(function($){$.fn.shuffleLetters=function(prop){var options=$.extend({"step":2,"fps":12,"text":"","callback":function(){}},prop)
return this.each(function(){var el=$(this),str="";if(el.data('animated')){return true;}
el.data('animated',true);if(options.text){str=options.text.split('');}
else{str=el.text().split('');}
var types=[],letters=[];for(var i=0;i<str.length;i++){var ch=str[i];if(ch==" "){types[i]="space";continue;}
else if(/[a-z]/.test(ch)){types[i]="lowerLetter";}
else if(/[A-Z]/.test(ch)){types[i]="upperLetter";}
else{types[i]="symbol";}
letters.push(i);}
el.html("");(function shuffle(start){var i,len=letters.length,strCopy=str.slice(0);if(start>len){el.data('animated',false);options.callback(el);return;}
for(i=Math.max(start,0);i<len;i++){if(i<start+options.step){strCopy[letters[i]]=randomChar(types[letters[i]]);}}
el.text(strCopy.join(""));setTimeout(function(){shuffle(start+1);},1000/options.fps);})(-options.step);});};function randomChar(type){var pool="";if(type=="lowerLetter"){pool="abcdefghijklmnopqrstuvwxyz0123456789";}
else if(type=="upperLetter"){pool="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";}
else if(type=="symbol"){pool=",.?/\\(^)![]{}*&^%$#'\"";}
var arr=pool.split('');return arr[Math.floor(Math.random()*arr.length)];}})(jQuery);$(document).ready(function(){$('.animsition-link').hover(function(){$(this).shuffleLetters();});$('.hamburger-menu').on('click',function(){$('.hamburger-menu-icon').toggleClass('is-clicked');$('.header').toggleClass('menu-is-open');if($('.navigation').hasClass('is-visible')){$('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});$('html, body').removeClass("noscroll");}else{$('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});$('html, body').addClass("noscroll");}});var header=$('.top__bg');var range=300;$(window).on('scroll',function(){var scrollTop=$(this).scrollTop();var offset=header.offset().top;var height=header.outerHeight();offset=offset+height/2;var calc=1-(scrollTop-offset+range)/range;header.css({'opacity':calc});if(calc>'1'){header.css({'opacity':1});}else if(calc<'0'){header.css({'opacity':0});}});});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++)if(d=i[c],!d.getAttribute("data-secret")){if(f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f),g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}else;}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
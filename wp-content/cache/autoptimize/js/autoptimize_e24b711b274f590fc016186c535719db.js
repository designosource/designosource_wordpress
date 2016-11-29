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
var arr=pool.split('');return arr[Math.floor(Math.random()*arr.length)];}})(jQuery);$(document).ready(function(){$('ul li a').hover(function(){$(this).shuffleLetters();});$('.hamburger-menu').on('click',function(){$('.hamburger-menu-icon').toggleClass('is-clicked');$('.header').toggleClass('menu-is-open');if($('.navigation').hasClass('is-visible')){$('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});}else{$('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});}});});(function($){$.fn.shuffleLetters=function(prop){var options=$.extend({"step":2,"fps":12,"text":"","callback":function(){}},prop)
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
var arr=pool.split('');return arr[Math.floor(Math.random()*arr.length)];}})(jQuery);$(document).ready(function(){$('ul li a').hover(function(){$(this).shuffleLetters();});$('.hamburger-menu').on('click',function(){$('.hamburger-menu-icon').toggleClass('is-clicked');$('.header').toggleClass('menu-is-open');if($('.navigation').hasClass('is-visible')){$('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});}else{$('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){});}});});
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(c,a,a.document,a.Math)}):"object"==typeof exports&&exports?module.exports=b(require("jquery"),a,a.document,a.Math):b(jQuery,a,a.document,a.Math)}("undefined"!=typeof window?window:this,function(a,b,c,d,e){"use strict";var f="fullpage-wrapper",g="."+f,h="fp-scrollable",i="."+h,j="fp-responsive",k="fp-notransition",l="fp-destroyed",m="fp-enabled",n="fp-viewing",o="active",p="."+o,q="fp-completely",r="."+q,s=".section",t="fp-section",u="."+t,v=u+p,w=u+":first",x=u+":last",y="fp-tableCell",z="."+y,A="fp-auto-height",C="fp-normal-scroll",E="fp-nav",F="#"+E,G="fp-tooltip",H="."+G,I="fp-show-active",J=".slide",K="fp-slide",L="."+K,M=L+p,N="fp-slides",O="."+N,P="fp-slidesContainer",Q="."+P,R="fp-table",S="fp-slidesNav",T="."+S,U=T+" a",V="fp-controlArrow",W="."+V,X="fp-prev",Y="."+X,Z=V+" "+X,$=W+Y,_="fp-next",aa="."+_,ba=V+" "+_,ca=W+aa,da=a(b),ea=a(c),fa={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};a.fn.fullpage=function(h){function xa(b,c){Jc("autoScrolling",b,c);var d=a(v);h.autoScrolling&&!h.scrollBar?(i.css({overflow:"hidden",height:"100%"}),ya(wa.recordHistory,"internal"),aa.css({"-ms-touch-action":"none","touch-action":"none"}),d.length&&Ec(d.position().top)):(i.css({overflow:"visible",height:"initial"}),ya(!1,"internal"),aa.css({"-ms-touch-action":"","touch-action":""}),Ec(0),d.length&&i.scrollTop(d.position().top))}function ya(a,b){Jc("recordHistory",a,b)}function za(a,b){Jc("scrollingSpeed",a,b)}function Aa(a,b){Jc("fitToSection",a,b)}function Ba(a){h.lockAnchors=a}function Ca(a){a?(wc(),xc()):(vc(),yc())}function Da(b,c){"undefined"!=typeof c?(c=c.replace(/ /g,"").split(","),a.each(c,function(a,c){Gc(b,c,"m")})):b?(Ca(!0),zc()):(Ca(!1),Ac())}function Ea(b,c){"undefined"!=typeof c?(c=c.replace(/ /g,"").split(","),a.each(c,function(a,c){Gc(b,c,"k")})):h.keyboardScrolling=b}function Fa(){var b=a(v).prev(u);b.length||!h.loopTop&&!h.continuousVertical||(b=a(u).last()),b.length&&wb(b,null,!0)}function Ga(){var b=a(v).next(u);b.length||!h.loopBottom&&!h.continuousVertical||(b=a(u).first()),b.length&&wb(b,null,!1)}function Ha(a,b){za(0,"internal"),Ia(a,b),za(wa.scrollingSpeed,"internal")}function Ia(a,b){var c=lc(a);"undefined"!=typeof b?nc(a,b):c.length>0&&wb(c)}function Ja(a){sb("right",a)}function Ka(a){sb("left",a)}function La(b){if(!aa.hasClass(l)){ia=!0,ha=da.height(),a(u).each(function(){var b=a(this).find(O),c=a(this).find(L);h.verticalCentered&&a(this).find(z).css("height",jc(a(this))+"px"),a(this).css("height",ha+"px"),h.scrollOverflow&&(c.length?c.each(function(){hc(a(this))}):hc(a(this))),c.length>1&&Vb(b,b.find(M))});var c=a(v),d=c.index(u);d&&Ha(d+1),ia=!1,a.isFunction(h.afterResize)&&b&&h.afterResize.call(aa),a.isFunction(h.afterReBuild)&&!b&&h.afterReBuild.call(aa)}}function Ma(b){var c=B.hasClass(j);b?c||(xa(!1,"internal"),Aa(!1,"internal"),a(F).hide(),B.addClass(j),a.isFunction(h.afterResponsive)&&h.afterResponsive.call(aa,b)):c&&(xa(wa.autoScrolling,"internal"),Aa(wa.autoScrolling,"internal"),a(F).show(),B.removeClass(j),a.isFunction(h.afterResponsive)&&h.afterResponsive.call(aa,b))}function Na(){h.css3&&(h.css3=uc()),h.scrollBar=h.scrollBar||h.hybrid,Pa(),Qa(),Da(!0),xa(h.autoScrolling,"internal");var b=a(v).find(M);b.length&&(0!==a(v).index(u)||0===a(v).index(u)&&0!==b.index())&&Dc(b),_b(),tc(),"complete"===c.readyState&&Hb(),da.on("load",Hb)}function Oa(){da.on("scroll",cb).on("hashchange",Ib).blur(Pb).resize($b),ea.keydown(Jb).keyup(Lb).on("click touchstart",F+" a",Qb).on("click touchstart",U,Rb).on("click",H,Kb),a(u).on("click touchstart",W,Ob),h.normalScrollElements&&(ea.on("mouseenter",h.normalScrollElements,function(){Ca(!1)}),ea.on("mouseleave",h.normalScrollElements,function(){Ca(!0)}))}function Pa(){var b=aa.find(h.sectionSelector);h.anchors.length||(h.anchors=b.filter("[data-anchor]").map(function(){return a(this).data("anchor").toString()}).get()),h.navigationTooltips.length||(h.navigationTooltips=b.filter("[data-tooltip]").map(function(){return a(this).data("tooltip").toString()}).get())}function Qa(){aa.css({height:"100%",position:"relative"}),aa.addClass(f),a("html").addClass(m),ha=da.height(),aa.removeClass(l),Ua(),a(u).each(function(b){var c=a(this),d=c.find(L),e=d.length;Sa(c,b),Ta(c,b),e>0?Ra(c,d,e):h.verticalCentered&&ic(c)}),h.fixedElements&&h.css3&&a(h.fixedElements).appendTo(B),h.navigation&&Wa(),Ya(),h.scrollOverflow?("complete"===c.readyState&&Xa(),da.on("load",Xa)):_a()}function Ra(b,c,d){var e=100*d,f=100/d;c.wrapAll('<div class="'+P+'" />'),c.parent().wrap('<div class="'+N+'" />'),b.find(Q).css("width",e+"%"),d>1&&(h.controlArrows&&Va(b),h.slidesNavigation&&pc(b,d)),c.each(function(b){a(this).css("width",f+"%"),h.verticalCentered&&ic(a(this))});var g=b.find(M);g.length&&(0!==a(v).index(u)||0===a(v).index(u)&&0!==g.index())?Dc(g):c.eq(0).addClass(o)}function Sa(b,c){c||0!==a(v).length||b.addClass(o),b.css("height",ha+"px"),h.paddingTop&&b.css("padding-top",h.paddingTop),h.paddingBottom&&b.css("padding-bottom",h.paddingBottom),"undefined"!=typeof h.sectionsColor[c]&&b.css("background-color",h.sectionsColor[c]),"undefined"!=typeof h.anchors[c]&&b.attr("data-anchor",h.anchors[c])}function Ta(b,c){"undefined"!=typeof h.anchors[c]&&b.hasClass(o)&&ec(h.anchors[c],c),h.menu&&h.css3&&a(h.menu).closest(g).length&&a(h.menu).appendTo(B)}function Ua(){aa.find(h.sectionSelector).addClass(t),aa.find(h.slideSelector).addClass(K)}function Va(a){a.find(O).after('<div class="'+Z+'"></div><div class="'+ba+'"></div>'),"#fff"!=h.controlArrowColor&&(a.find(ca).css("border-color","transparent transparent transparent "+h.controlArrowColor),a.find($).css("border-color","transparent "+h.controlArrowColor+" transparent transparent")),h.loopHorizontal||a.find($).hide()}function Wa(){B.append('<div id="'+E+'"><ul></ul></div>');var b=a(F);b.addClass(function(){return h.showActiveTooltip?I+" "+h.navigationPosition:h.navigationPosition});for(var c=0;c<a(u).length;c++){var d="";h.anchors.length&&(d=h.anchors[c]);var e='<li><a href="#'+d+'"><span></span></a>',f=h.navigationTooltips[c];"undefined"!=typeof f&&""!==f&&(e+='<div class="'+G+" "+h.navigationPosition+'">'+f+"</div>"),e+="</li>",b.find("ul").append(e)}a(F).css("margin-top","-"+a(F).height()/2+"px"),a(F).find("li").eq(a(v).index(u)).find("a").addClass(o)}function Xa(){a(u).each(function(){var b=a(this).find(L);b.length?b.each(function(){hc(a(this))}):hc(a(this))}),_a()}function Ya(){aa.find('iframe[src*="youtube.com/embed/"]').each(function(){Za(a(this),"enablejsapi=1")})}function Za(a,b){var c=a.attr("src");a.attr("src",c+$a(c)+b)}function $a(a){return/\?/.test(a)?"&":"?"}function _a(){var b=a(v);b.addClass(q),h.scrollOverflowHandler.afterRender&&h.scrollOverflowHandler.afterRender(b),Cb(b),Db(b),h.scrollOverflowHandler.afterLoad(),a.isFunction(h.afterLoad)&&h.afterLoad.call(b,b.data("anchor"),b.index(u)+1),a.isFunction(h.afterRender)&&h.afterRender.call(aa)}function cb(){var b;if(!h.autoScrolling||h.scrollBar){var d=da.scrollTop(),e=eb(d),f=0,g=d+da.height()/2,i=B.height()-da.height()===d,j=c.querySelectorAll(u);if(i)f=j.length-1;else if(d)for(var k=0;k<j.length;++k){var l=j[k];l.offsetTop<=g&&(f=k)}else f=0;if(db(e)&&(a(v).hasClass(q)||a(v).addClass(q).siblings().removeClass(q)),b=a(j).eq(f),!b.hasClass(o)){ab=!0;var w,x,m=a(v),n=m.index(u)+1,p=fc(b),r=b.data("anchor"),s=b.index(u)+1,t=b.find(M);t.length&&(x=t.data("anchor"),w=t.index()),ma&&(b.addClass(o).siblings().removeClass(o),a.isFunction(h.onLeave)&&h.onLeave.call(m,n,s,p),a.isFunction(h.afterLoad)&&h.afterLoad.call(b,r,s),Fb(m),Cb(b),Db(b),ec(r,s-1),h.anchors.length&&(ka=r),qc(w,x,r,s)),clearTimeout(ta),ta=setTimeout(function(){ab=!1},100)}h.fitToSection&&(clearTimeout(ua),ua=setTimeout(function(){ma&&h.fitToSection&&(a(v).is(b)&&(ia=!0),wb(a(v)),ia=!1)},h.fitToSectionDelay))}}function db(b){var c=a(v).position().top,d=c+da.height();return"up"==b?d>=da.scrollTop()+da.height():c<=da.scrollTop()}function eb(a){var b=a>bb?"down":"up";return bb=a,ub=a,b}function fb(a,b){if(pa.m[a]){var c="down"===a?"bottom":"top",d="down"===a?Ga:Fa;if(b.length>0){if(!h.scrollOverflowHandler.isScrolled(c,b))return!0;d()}else d()}}function gb(a){var b=a.originalEvent;!mb(a.target)&&h.autoScrolling&&nb(b)&&a.preventDefault()}function lb(b){var c=b.originalEvent,e=a(c.target).closest(u);if(!mb(b.target)&&nb(c)){h.autoScrolling&&b.preventDefault();var f=h.scrollOverflowHandler.scrollable(e),g=Cc(c);jb=g.y,kb=g.x,e.find(O).length&&d.abs(ib-kb)>d.abs(hb-jb)?!V&&d.abs(ib-kb)>da.outerWidth()/100*h.touchSensitivity&&(ib>kb?pa.m.right&&Ja(e):pa.m.left&&Ka(e)):h.autoScrolling&&ma&&d.abs(hb-jb)>da.height()/100*h.touchSensitivity&&(hb>jb?fb("down",f):jb>hb&&fb("up",f))}}function mb(b,c){c=c||0;var d=a(b).parent();return!!(c<h.normalScrollElementTouchThreshold&&d.is(h.normalScrollElements))||c!=h.normalScrollElementTouchThreshold&&mb(d,++c)}function nb(a){return"undefined"==typeof a.pointerType||"mouse"!=a.pointerType}function ob(a){var b=a.originalEvent;if(h.fitToSection&&i.stop(),nb(b)){var c=Cc(b);hb=c.y,ib=c.x}}function pb(a,b){for(var c=0,e=a.slice(d.max(a.length-b,1)),f=0;f<e.length;f++)c+=e[f];return d.ceil(c/b)}function rb(c){var e=(new Date).getTime(),f=a(r).hasClass(C);if(h.autoScrolling&&!oa&&!f){c=c||b.event;var g=c.wheelDelta||-c.deltaY||-c.detail,j=d.max(-1,d.min(1,g)),k="undefined"!=typeof c.wheelDeltaX||"undefined"!=typeof c.deltaX,l=d.abs(c.wheelDeltaX)<d.abs(c.wheelDelta)||d.abs(c.deltaX)<d.abs(c.deltaY)||!k;na.length>149&&na.shift(),na.push(d.abs(g)),h.scrollBar&&(c.preventDefault?c.preventDefault():c.returnValue=!1);var m=a(v),n=h.scrollOverflowHandler.scrollable(m),o=e-qb;if(qb=e,o>200&&(na=[]),ma){var p=pb(na,10),q=pb(na,70),s=p>=q;s&&l&&(j<0?fb("down",n):fb("up",n))}return!1}h.fitToSection&&i.stop()}function sb(b,c){var d="undefined"==typeof c?a(v):c,e=d.find(O),f=e.find(L).length;if(!(!e.length||V||f<2)){var g=e.find(M),i=null;if(i="left"===b?g.prev(L):g.next(L),!i.length){if(!h.loopHorizontal)return;i="left"===b?g.siblings(":last"):g.siblings(":first")}V=!0,Vb(e,i,b)}}function tb(){a(M).each(function(){Dc(a(this),"internal")})}function vb(a){var b=a.position(),c=b.top,d=b.top>ub,e=c-ha+a.outerHeight(),f=h.bigSectionsDestination;return a.outerHeight()>ha?(d||f)&&"bottom"!==f||(c=e):(d||ia&&a.is(":last-child"))&&(c=e),ub=c,c}function wb(b,c,d){if("undefined"!=typeof b){var f,g,e=vb(b),i={element:b,callback:c,isMovementUp:d,dtop:e,yMovement:fc(b),anchorLink:b.data("anchor"),sectionIndex:b.index(u),activeSlide:b.find(M),activeSection:a(v),leavingSection:a(v).index(u)+1,localIsResizing:ia};i.activeSection.is(b)&&!ia||h.scrollBar&&da.scrollTop()===i.dtop&&!b.hasClass(A)||(i.activeSlide.length&&(f=i.activeSlide.data("anchor"),g=i.activeSlide.index()),h.autoScrolling&&h.continuousVertical&&"undefined"!=typeof i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=zb(i)),a.isFunction(h.onLeave)&&!i.localIsResizing&&h.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement)===!1||(Fb(i.activeSection),h.scrollOverflowHandler.beforeLeave(),b.addClass(o).siblings().removeClass(o),Cb(b),h.scrollOverflowHandler.onLeave(),ma=!1,qc(g,f,i.anchorLink,i.sectionIndex),xb(i),ka=i.anchorLink,ec(i.anchorLink,i.sectionIndex)))}}function xb(b){if(h.css3&&h.autoScrolling&&!h.scrollBar){var c="translate3d(0px, -"+d.round(b.dtop)+"px, 0px)";kc(c,!0),h.scrollingSpeed?(clearTimeout(ra),ra=setTimeout(function(){Bb(b)},h.scrollingSpeed)):Bb(b)}else{var e=yb(b);a(e.element).animate(e.options,h.scrollingSpeed,h.easing).promise().done(function(){h.scrollBar?setTimeout(function(){Bb(b)},30):Bb(b)})}}function yb(a){var b={};return h.autoScrolling&&!h.scrollBar?(b.options={top:-a.dtop},b.element=g):(b.options={scrollTop:a.dtop},b.element="html, body"),b}function zb(b){return b.isMovementUp?a(v).before(b.activeSection.nextAll(u)):a(v).after(b.activeSection.prevAll(u).get().reverse()),Ec(a(v).position().top),tb(),b.wrapAroundElements=b.activeSection,b.dtop=b.element.position().top,b.yMovement=fc(b.element),b}function Ab(b){b.wrapAroundElements&&b.wrapAroundElements.length&&(b.isMovementUp?a(w).before(b.wrapAroundElements):a(x).after(b.wrapAroundElements),Ec(a(v).position().top),tb())}function Bb(b){Ab(b),a.isFunction(h.afterLoad)&&!b.localIsResizing&&h.afterLoad.call(b.element,b.anchorLink,b.sectionIndex+1),h.scrollOverflowHandler.afterLoad(),b.localIsResizing||Db(b.element),b.element.addClass(q).siblings().removeClass(q),ma=!0,a.isFunction(b.callback)&&b.callback.call(this)}function Cb(b){if(h.lazyLoading){var d,c=Gb(b);c.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){d=a(this),d.attr("src",d.data("src")),d.removeAttr("data-src"),d.is("source")&&d.closest("video").get(0).load()})}}function Db(b){var c=Gb(b);c.find("video, audio").each(function(){var b=a(this).get(0);b.hasAttribute("data-autoplay")&&"function"==typeof b.play&&b.play()}),c.find('iframe[src*="youtube.com/embed/"]').each(function(){var b=a(this).get(0);b.hasAttribute("data-autoplay")&&Eb(b),b.onload=function(){b.hasAttribute("data-autoplay")&&Eb(b)}})}function Eb(a){a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Fb(b){var c=Gb(b);c.find("video, audio").each(function(){var b=a(this).get(0);b.hasAttribute("data-keepplaying")||"function"!=typeof b.pause||b.pause()}),c.find('iframe[src*="youtube.com/embed/"]').each(function(){var b=a(this).get(0);/youtube\.com\/embed\//.test(a(this).attr("src"))&&!b.hasAttribute("data-keepplaying")&&a(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Gb(b){var c=b.find(M);return c.length&&(b=a(c)),b}function Hb(){var a=b.location.hash.replace("#","").split("/"),c=decodeURIComponent(a[0]),d=decodeURIComponent(a[1]);c&&(h.animateAnchor?nc(c,d):Ha(c,d))}function Ib(){if(!ab&&!h.lockAnchors){var a=b.location.hash.replace("#","").split("/"),c=decodeURIComponent(a[0]),d=decodeURIComponent(a[1]),e="undefined"==typeof ka,f="undefined"==typeof ka&&"undefined"==typeof d&&!V;c.length&&(c&&c!==ka&&!e||f||!V&&la!=d)&&nc(c,d)}}function Jb(b){clearTimeout(va);var c=a(":focus");if(!c.is("textarea")&&!c.is("input")&&!c.is("select")&&"true"!==c.attr("contentEditable")&&""!==c.attr("contentEditable")&&h.keyboardScrolling&&h.autoScrolling){var d=b.which,e=[40,38,32,33,34];a.inArray(d,e)>-1&&b.preventDefault(),oa=b.ctrlKey,va=setTimeout(function(){Sb(b)},150)}}function Kb(){a(this).prev().trigger("click")}function Lb(a){ja&&(oa=a.ctrlKey)}function Mb(a){2==a.which&&(Tb=a.pageY,aa.on("mousemove",Ub))}function Nb(a){2==a.which&&aa.off("mousemove")}function Ob(){var b=a(this).closest(u);a(this).hasClass(X)?pa.m.left&&Ka(b):pa.m.right&&Ja(b)}function Pb(){ja=!1,oa=!1}function Qb(b){b.preventDefault();var c=a(this).parent().index();wb(a(u).eq(c))}function Rb(b){b.preventDefault();var c=a(this).closest(u).find(O),d=c.find(L).eq(a(this).closest("li").index());Vb(c,d)}function Sb(b){var c=b.shiftKey;switch(b.which){case 38:case 33:pa.k.up&&Fa();break;case 32:if(c&&pa.k.up){Fa();break}case 40:case 34:pa.k.down&&Ga();break;case 36:pa.k.up&&Ia(1);break;case 35:pa.k.down&&Ia(a(u).length);break;case 37:pa.k.left&&Ka();break;case 39:pa.k.right&&Ja();break;default:return}}function Ub(a){ma&&(a.pageY<Tb&&pa.m.up?Fa():a.pageY>Tb&&pa.m.down&&Ga()),Tb=a.pageY}function Vb(b,c,d){var e=b.closest(u),f={slides:b,destiny:c,direction:d,destinyPos:c.position(),slideIndex:c.index(),section:e,sectionIndex:e.index(u),anchorLink:e.data("anchor"),slidesNav:e.find(T),slideAnchor:sc(c),prevSlide:e.find(M),prevSlideIndex:e.find(M).index(),localIsResizing:ia};return f.xMovement=gc(f.prevSlideIndex,f.slideIndex),f.localIsResizing||(ma=!1),h.onSlideLeave&&!f.localIsResizing&&"none"!==f.xMovement&&a.isFunction(h.onSlideLeave)&&h.onSlideLeave.call(f.prevSlide,f.anchorLink,f.sectionIndex+1,f.prevSlideIndex,f.xMovement,f.slideIndex)===!1?void(V=!1):(c.addClass(o).siblings().removeClass(o),f.localIsResizing||(Fb(f.prevSlide),Cb(c)),!h.loopHorizontal&&h.controlArrows&&(e.find($).toggle(0!==f.slideIndex),e.find(ca).toggle(!c.is(":last-child"))),e.hasClass(o)&&qc(f.slideIndex,f.slideAnchor,f.anchorLink,f.sectionIndex),void Xb(b,f,!0))}function Wb(b){Yb(b.slidesNav,b.slideIndex),b.localIsResizing||(a.isFunction(h.afterSlideLoad)&&h.afterSlideLoad.call(b.destiny,b.anchorLink,b.sectionIndex+1,b.slideAnchor,b.slideIndex),ma=!0,Db(b.destiny)),V=!1}function Xb(a,b,c){var e=b.destinyPos;if(h.css3){var f="translate3d(-"+d.round(e.left)+"px, 0px, 0px)";ac(a.find(Q)).css(Fc(f)),sa=setTimeout(function(){c&&Wb(b)},h.scrollingSpeed,h.easing)}else a.animate({scrollLeft:d.round(e.left)},h.scrollingSpeed,h.easing,function(){c&&Wb(b)})}function Yb(a,b){a.find(p).removeClass(o),a.find("li").eq(b).find("a").addClass(o)}function $b(){if(_b(),Y){var b=a(c.activeElement);if(!b.is("textarea")&&!b.is("input")&&!b.is("select")){var e=da.height();d.abs(e-Zb)>20*d.max(Zb,e)/100&&(La(!0),Zb=e)}}else clearTimeout(qa),qa=setTimeout(function(){La(!0)},350)}function _b(){var a=h.responsive||h.responsiveWidth,b=h.responsiveHeight,c=a&&da.outerWidth()<a,d=b&&da.height()<b;a&&b?Ma(c||d):a?Ma(c):b&&Ma(d)}function ac(a){var b="all "+h.scrollingSpeed+"ms "+h.easingcss3;return a.removeClass(k),a.css({"-webkit-transition":b,transition:b})}function bc(a){return a.addClass(k)}function cc(b,c){h.navigation&&(a(F).find(p).removeClass(o),b?a(F).find('a[href="#'+b+'"]').addClass(o):a(F).find("li").eq(c).find("a").addClass(o))}function dc(b){h.menu&&(a(h.menu).find(p).removeClass(o),a(h.menu).find('[data-menuanchor="'+b+'"]').addClass(o))}function ec(a,b){dc(a),cc(a,b)}function fc(b){var c=a(v).index(u),d=b.index(u);return c==d?"none":c>d?"up":"down"}function gc(a,b){return a==b?"none":a>b?"left":"right"}function hc(a){if(!a.hasClass("fp-noscroll")){a.css("overflow","hidden");var f,b=h.scrollOverflowHandler,c=b.wrapContent(),d=a.closest(u),e=b.scrollable(a);e.length?f=b.scrollHeight(a):(f=a.get(0).scrollHeight,h.verticalCentered&&(f=a.find(z).get(0).scrollHeight));var g=ha-parseInt(d.css("padding-bottom"))-parseInt(d.css("padding-top"));f>g?e.length?b.update(a,g):(h.verticalCentered?a.find(z).wrapInner(c):a.wrapInner(c),b.create(a,g)):b.remove(a),a.css("overflow","")}}function ic(a){a.hasClass(R)||a.addClass(R).wrapInner('<div class="'+y+'" style="height:'+jc(a)+'px;" />')}function jc(a){var b=ha;if(h.paddingTop||h.paddingBottom){var c=a;c.hasClass(t)||(c=a.closest(u));var d=parseInt(c.css("padding-top"))+parseInt(c.css("padding-bottom"));b=ha-d}return b}function kc(a,b){b?ac(aa):bc(aa),aa.css(Fc(a)),setTimeout(function(){aa.removeClass(k)},10)}function lc(b){var c=aa.find(u+'[data-anchor="'+b+'"]');return c.length||(c=a(u).eq(b-1)),c}function mc(a,b){var c=b.find(O),d=c.find(L+'[data-anchor="'+a+'"]');return d.length||(d=c.find(L).eq(a)),d}function nc(a,b){var c=lc(a);c.length&&("undefined"==typeof b&&(b=0),a===ka||c.hasClass(o)?oc(c,b):wb(c,function(){oc(c,b)}))}function oc(a,b){if("undefined"!=typeof b){var c=a.find(O),d=mc(b,a);d.length&&Vb(c,d)}}function pc(a,b){a.append('<div class="'+S+'"><ul></ul></div>');var c=a.find(T);c.addClass(h.slidesNavPosition);for(var d=0;d<b;d++)c.find("ul").append('<li><a href="#"><span></span></a></li>');c.css("margin-left","-"+c.width()/2+"px"),c.find("li").first().find("a").addClass(o)}function qc(a,b,c,d){var e="";h.anchors.length&&!h.lockAnchors&&(a?("undefined"!=typeof c&&(e=c),"undefined"==typeof b&&(b=a),la=b,rc(e+"/"+b)):"undefined"!=typeof a?(la=b,rc(c)):rc(c)),tc()}function rc(a){if(h.recordHistory)location.hash=a;else if(Y||_)b.history.replaceState(e,e,"#"+a);else{var c=b.location.href.split("#")[0];b.location.replace(c+"#"+a)}}function sc(a){var b=a.data("anchor"),c=a.index();return"undefined"==typeof b&&(b=c),b}function tc(){var b=a(v),c=b.find(M),d=sc(b),e=sc(c),f=String(d);c.length&&(f=f+"-"+e),f=f.replace("/","-").replace("#","");var g=new RegExp("\\b\\s?"+n+"-[^\\s]+\\b","g");B[0].className=B[0].className.replace(g,""),B.addClass(n+"-"+f)}function uc(){var d,a=c.createElement("p"),f={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};c.body.insertBefore(a,null);for(var g in f)a.style[g]!==e&&(a.style[g]="translate3d(1px,1px,1px)",d=b.getComputedStyle(a).getPropertyValue(f[g]));return c.body.removeChild(a),d!==e&&d.length>0&&"none"!==d}function vc(){c.addEventListener?(c.removeEventListener("mousewheel",rb,!1),c.removeEventListener("wheel",rb,!1),c.removeEventListener("MozMousePixelScroll",rb,!1)):c.detachEvent("onmousewheel",rb)}function wc(){var d,a="";b.addEventListener?d="addEventListener":(d="attachEvent",a="on");var f="onwheel"in c.createElement("div")?"wheel":c.onmousewheel!==e?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==f?c[d](a+"MozMousePixelScroll",rb,!1):c[d](a+f,rb,!1)}function xc(){aa.on("mousedown",Mb).on("mouseup",Nb)}function yc(){aa.off("mousedown",Mb).off("mouseup",Nb)}function zc(){if(h.autoScrolling&&(Y||_)){var b=Bc();B.off("touchmove "+b.move).on("touchmove "+b.move,gb),a(g).off("touchstart "+b.down).on("touchstart "+b.down,ob).off("touchmove "+b.move).on("touchmove "+b.move,lb)}}function Ac(){if(Y||_){var b=Bc();a(g).off("touchstart "+b.down).off("touchmove "+b.move)}}function Bc(){var a;return a=b.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Cc(a){var b=[];return b.y="undefined"!=typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY,b.x="undefined"!=typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX,_&&nb(a)&&h.scrollBar&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX),b}function Dc(a,b){za(0,"internal"),"undefined"!=typeof b&&(ia=!0),Vb(a.closest(O),a),"undefined"!=typeof b&&(ia=!1),za(wa.scrollingSpeed,"internal")}function Ec(a){var b=d.round(a);if(h.scrollBar||!h.autoScrolling)aa.scrollTop(b);else if(h.css3){var c="translate3d(0px, -"+b+"px, 0px)";kc(c,!1)}else aa.css("top",-b)}function Fc(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Gc(a,b,c){switch(b){case"up":pa[c].up=a;break;case"down":pa[c].down=a;break;case"left":pa[c].left=a;break;case"right":pa[c].right=a;break;case"all":"m"==c?Da(a):Ea(a)}}function Hc(b){xa(!1,"internal"),Da(!1),Ea(!1),aa.addClass(l),clearTimeout(sa),clearTimeout(ra),clearTimeout(qa),clearTimeout(ta),clearTimeout(ua),da.off("scroll",cb).off("hashchange",Ib).off("resize",$b),ea.off("click touchstart",F+" a").off("mouseenter",F+" li").off("mouseleave",F+" li").off("click touchstart",U).off("mouseover",h.normalScrollElements).off("mouseout",h.normalScrollElements),a(u).off("click touchstart",W),clearTimeout(sa),clearTimeout(ra),b&&Ic()}function Ic(){Ec(0),aa.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){a(this).attr("src",a(this).data("src")),a(this).removeAttr("data-src")}),a(F+", "+T+", "+W).remove(),a(u).css({height:"","background-color":"",padding:""}),a(L).css({width:""}),aa.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),i.css({overflow:"",height:""}),a("html").removeClass(m),B.removeClass(j),a.each(B.get(0).className.split(/\s+/),function(a,b){0===b.indexOf(n)&&B.removeClass(b)}),a(u+", "+L).each(function(){h.scrollOverflowHandler.remove(a(this)),a(this).removeClass(R+" "+o)}),bc(aa),aa.find(z+", "+Q+", "+O).each(function(){a(this).replaceWith(this.childNodes)}),i.scrollTop(0);var b=[t,K,P];a.each(b,function(b,c){a("."+c).removeClass(c)})}function Jc(a,b,c){h[a]=b,"internal"!==c&&(wa[a]=b)}function Kc(){var b=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove"];return a("html").hasClass(m)?void Lc("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(h.continuousVertical&&(h.loopTop||h.loopBottom)&&(h.continuousVertical=!1,Lc("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),h.scrollBar&&h.scrollOverflow&&Lc("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!h.continuousVertical||!h.scrollBar&&h.autoScrolling||(h.continuousVertical=!1,Lc("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),a.each(b,function(a,b){h[b]&&Lc("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+b)}),void a.each(h.anchors,function(b,c){var d=ea.find("[name]").filter(function(){return a(this).attr("name")&&a(this).attr("name").toLowerCase()==c.toLowerCase()}),e=ea.find("[id]").filter(function(){return a(this).attr("id")&&a(this).attr("id").toLowerCase()==c.toLowerCase()});(e.length||d.length)&&(Lc("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),e.length&&Lc("error",'"'+c+'" is is being used by another element `id` property'),d.length&&Lc("error",'"'+c+'" is is being used by another element `name` property'))}))}function Lc(a,b){console&&console[a]&&console[a]("fullPage: "+b)}if(a("html").hasClass(m))return void Kc();var i=a("html, body"),B=a("body"),D=a.fn.fullpage;h=a.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:ga,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,sectionSelector:s,slideSelector:J,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},h);var ka,la,oa,V=!1,Y=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),_="ontouchstart"in b||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,aa=a(this),ha=da.height(),ia=!1,ja=!0,ma=!0,na=[],pa={};pa.m={up:!0,down:!0,left:!0,right:!0},pa.k=a.extend(!0,{},pa.m);var qa,ra,sa,ta,ua,va,wa=a.extend(!0,{},h);Kc(),fa.click=_,fa=a.extend(fa,h.scrollOverflowOptions),a.extend(a.easing,{easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}}),a(this).length&&(D.setAutoScrolling=xa,D.setRecordHistory=ya,D.setScrollingSpeed=za,D.setFitToSection=Aa,D.setLockAnchors=Ba,D.setMouseWheelScrolling=Ca,D.setAllowScrolling=Da,D.setKeyboardScrolling=Ea,D.moveSectionUp=Fa,D.moveSectionDown=Ga,D.silentMoveTo=Ha,D.moveTo=Ia,D.moveSlideRight=Ja,D.moveSlideLeft=Ka,D.reBuild=La,D.setResponsive=Ma,D.destroy=Hc,Na(),Oa());var ab=!1,bb=0,hb=0,ib=0,jb=0,kb=0,qb=(new Date).getTime(),ub=0,Tb=0,Zb=ha},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ga={refreshId:null,iScrollInstances:[],toggleWheel:function(b){var c=a(v).find(i);c.each(function(){var c=a(this).data("iscrollInstance");"undefined"!=typeof c&&c&&(b?c.wheelOn():c.wheelOff())})},onLeave:function(){ga.toggleWheel(!1)},beforeLeave:function(){ga.onLeave()},afterLoad:function(){ga.toggleWheel(!0)},create:function(b,c){var d=b.find(i);d.height(c),d.each(function(){var b=a(this),c=b.data("iscrollInstance");c&&a.each(ga.iScrollInstances,function(){a(this).destroy()}),c=new IScroll(b.get(0),fa),ga.iScrollInstances.push(c),c.wheelOff(),b.data("iscrollInstance",c)})},isScrolled:function(a,b){var c=b.data("iscrollInstance");return!c||("top"===a?c.y>=0&&!b.scrollTop():"bottom"===a?0-c.y+b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0)},scrollable:function(a){return a.find(O).length?a.find(M).find(i):a.find(i)},scrollHeight:function(a){return a.find(i).children().first().get(0).scrollHeight},remove:function(a){var b=a.find(i);if(b.length){var c=b.data("iscrollInstance");c.destroy(),b.data("iscrollInstance",null)}a.find(i).children().first().children().first().unwrap().unwrap()},update:function(b,c){clearTimeout(ga.refreshId),ga.refreshId=setTimeout(function(){a.each(ga.iScrollInstances,function(){a(this).get(0).refresh()})},150),b.find(i).css("height",c+"px").parent().css("height",c+"px")},wrapContent:function(){return'<div class="'+h+'"><div class="fp-scroller"></div></div>'}}});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++)if(d=i[c],!d.getAttribute("data-secret")){if(f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f),g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}else;}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
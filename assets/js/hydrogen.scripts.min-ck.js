(function(e,t,n){(function(){var n=function(t,n){this.element=e(t);return this.init(n)},r=0;n.prototype={defaults:{selector:"li",minRowHeight:240,margin:0,justifyLastRow:!0,mainClass:"justified-grids",lastColumnClass:"last-col",lastRowClass:"last-row"},imageData:[],init:function(n){var i=this,s,o;i.eventNamespace=".justified"+r++;i.options=e.extend(!0,{},i.defaults,n);i.items=i.element.addClass(i.options.mainClass).children(i.options.selector).css({marginTop:i.options.margin,marginLeft:i.options.margin});i.imageData=i.items.map(function(){s=e(this).find("img");var t;if(!(t=!s)&&!(t=!s.length)){if((t=s[0])&&"img"==t.tagName.toLowerCase())if("naturalWidth"in t&&"naturalHeight"in t)t=t.naturalWidth/t.naturalHeight;else{var n=new Image;n.src=t.src;t=n.width/n.height}else t=void 0;t=!(o=t)}return t?0:{el:s[0],ratio:o,calculatedWidth:o*i.options.minRowHeight}});e(t).on("resize"+i.eventNamespace+" orientationchange"+i.eventNamespace,function(){i.resizeTimeout&&clearTimeout(i.resizeTimeout);i.resizeTimeout=setTimeout(function(){i.refresh()},50)});i.refresh()},destroy:function(){this.element.removeClass(this.options.mainClass);this.items.css({marginTop:"",marginLeft:""}).removeClass([this.options.lastRowClass,this.options.lastColumnClass].join(" "));e.each(this.imageData,function(){this.el.style.width="";this.el.style.height=""});this.resizeTimeout&&clearTimeout(this.resizeTimeout);e(t).off(this.eventNamespace)},refresh:function(){var e=this,t,n=this.element.width(),r=0,i=[],s=0;e.items.removeClass([e.options.lastRowClass,e.options.lastColumnClass].join(" ")).each(function(o){if(t=e.imageData[o])r+e.options.margin+t.calculatedWidth>n&&(e._processRow(i,n,s),i=[],s=r=0),i.push(t),s+=t.ratio,r+=e.options.margin+t.calculatedWidth});i.length&&this._processRow(i,this.options.justifyLastRow?n:n-r,s,!0)},_processRow:function(t,n,r,i){if(t&&t.length){var s=this;height=(n-(t.length+1)*s.options.margin)/r;e(t).each(function(){e(this.el).css({width:height*this.ratio,height:height});i&&e(this.el).closest(s.options.selector).addClass(s.options.lastRowClass)});e(t.pop().el).closest(s.options.selector).addClass(s.options.lastColumnClass)}}};e.fn.justifiedGrids=function(t){return this.each(function(){var r=e.data(this,"justifiedGrids"),i="object"==typeof t&&t;r||(e.data(this,"justifiedGrids",r=new n(this,i)),parallaxInstances.push(r));"string"==typeof t&&r[t]()})}})();(function(){var t="flipInX flipInY fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig slideInDown slideInLeft slideInRight bounceIn bounceInUp bounceInDown bounceInLeft bounceInRight rotateIn rotateInUpLeft rotateInDownLeft rotateInUpRight rotateInDownRight".split(" "),n=function(t,n){this.element=e(t);return this.init(n)};n.prototype={defaults:{waypointOffset:"75%",animationName:"fadeIn",animationDuration:800,animationChainDuration:800,animationChainDelay:"distribute"},init:function(t){this.options=e.extend(!0,{},this.defaults,t);(this.targets=this.element.find("[data-animation-name]"))&&this.targets.length&&(this.targets.css("visibility","hidden").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",this._onAnimationEnd),e.fn.waypoint&&this.element.waypoint(e.proxy(this._waypointCallback,this),{offset:this.options.waypointOffset,triggerOnce:!0}))},_onAnimationEnd:function(){e(this).css({visibility:"",animation:""})},_waypointCallback:function(){var n=this,r="distribute"==n.options.animationChainDelay?Math.ceil(n.options.animationChainDuration/n.targets.length):n.options.animationChainDelay;n.targets.each(function(i){var s=e(this).data();i=s.animationDelay||i*r;var o=s.animationDuration||n.options.animationDuration,s=(0>t.indexOf(s.animationName)?n.options:s).animationName;e(this).css({visibility:"","animation-name":s,"animation-delay":i+"ms","animation-duration":o+"ms","animation-fill-mode":"both"})})}};e.fn.youxiAnimate=function(t){return this.each(function(){new n(this,e.extend(!0,t,e(this).data()))})}})()})(jQuery,window,document);
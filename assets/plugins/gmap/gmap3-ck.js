/*!
 *  GMAP3 Plugin for JQuery
 *  Version   : 5.1.1
 *  Date      : 2013-05-25
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *
 *  Copyright (c) 2010-2012 Jean-Baptiste DEMONTE
 *  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above
 *     copyright notice, this list of conditions and the following
 *     disclaimer in the documentation and/or other materials provided
 *     with the distribution.
 *   - Neither the name of the author nor the names of its contributors
 *     may be used to endorse or promote products derived from this
 *     software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */(function(e,t){function i(){n||(n={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:{Map:google.maps.Map,Marker:google.maps.Marker,InfoWindow:google.maps.InfoWindow,Circle:google.maps.Circle,Rectangle:google.maps.Rectangle,OverlayView:google.maps.OverlayView,StreetViewPanorama:google.maps.StreetViewPanorama,KmlLayer:google.maps.KmlLayer,TrafficLayer:google.maps.TrafficLayer,BicyclingLayer:google.maps.BicyclingLayer,GroundOverlay:google.maps.GroundOverlay,StyledMapType:google.maps.StyledMapType,ImageMapType:google.maps.ImageMapType},map:{mapTypeId:google.maps.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(e,n){return e!==t?e:"gmap3_"+(n?r+1:++r)}function o(e){var t=function(e){return parseInt(e,10)},n=google.maps.version.split(".").map(t),r;e=e.split(".").map(t);for(r=0;r<e.length;r++){if(!n.hasOwnProperty(r))return!1;if(n[r]<e[r])return!1}return!0}function u(t,n,r,i,s){if(n.todo.events||n.todo.onces){var o={id:i,data:n.todo.data,tag:n.todo.tag};n.todo.events&&e.each(n.todo.events,function(n,i){var u=t,a=i;if(e.isArray(i)){u=i[0];a=i[1]}google.maps.event.addListener(r,n,function(e){a.apply(u,[s?s:r,e,o])})});n.todo.onces&&e.each(n.todo.onces,function(n,i){var u=t,a=i;if(e.isArray(i)){u=i[0];a=i[1]}google.maps.event.addListenerOnce(r,n,function(e){a.apply(u,[s?s:r,e,o])})})}}function a(){var e=[];this.empty=function(){return!e.length};this.add=function(t){e.push(t)};this.get=function(){return e.length?e[0]:!1};this.ack=function(){e.shift()}}function f(t,r,i){function f(e){var t={};t[e]={};return t}function l(){var e;for(e in i){if(e in s)continue;return e}}var s={},o=this,u,a={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};typeof i=="string"&&(i=f(i));this.run=function(){var o,f;while(o=l()){if(typeof t[o]=="function"){u=o;f=e.extend(!0,{},n[o]||{},i[o].options||{});o in a.latLng?i[o].values?D(i[o].values,t,t[o],{todo:i[o],opts:f,session:s}):_(t,t[o],a.latLng[o],{todo:i[o],opts:f,session:s}):o in a.geoloc?P(t,t[o],{todo:i[o],opts:f,session:s}):t[o].apply(t,[{todo:i[o],opts:f,session:s}]);return}s[o]=null}r.apply(t,[i,s])};this.ack=function(e){s[u]=e;o.run.apply(o,[])}}function l(e){var t,n=[];for(t in e)n.push(t);return n}function c(t,n){var r={};if(t.todo)for(var i in t.todo)i!=="options"&&i!=="values"&&(r[i]=t.todo[i]);var s,o=["data","tag","id","events","onces"];for(s=0;s<o.length;s++)h(r,o[s],n,t.todo);r.options=e.extend({},t.opts||{},n.options||{});return r}function h(e,t){for(var n=2;n<arguments.length;n++)if(t in arguments[n]){e[t]=arguments[n][t];return}}function p(){var e=[];this.get=function(t){if(e.length){var n,r,i,s,o,u=l(t);for(n=0;n<e.length;n++){s=e[n];o=u.length==s.keys.length;for(r=0;r<u.length&&o;r++){i=u[r];o=i in s.request;o&&(typeof t[i]=="object"&&"equals"in t[i]&&typeof t[i]=="function"?o=t[i].equals(s.request[i]):o=t[i]===s.request[i])}if(o)return s.results}}};this.store=function(t,n){e.push({request:t,keys:l(t),results:n})}}function d(t,r,i,s){var o=this,u=[];n.classes.OverlayView.call(this);this.setMap(t);this.onAdd=function(){var t=this.getPanes();r.pane in t&&e(t[r.pane]).append(s);e.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(t,n){u.push(google.maps.event.addDomListener(s[0],n,function(t){e.Event(t).stopPropagation();google.maps.event.trigger(o,n,[t]);o.draw()}))});u.push(google.maps.event.addDomListener(s[0],"contextmenu",function(t){e.Event(t).stopPropagation();google.maps.event.trigger(o,"rightclick",[t]);o.draw()}))};this.getPosition=function(){return i};this.draw=function(){var e=this.getProjection().fromLatLngToDivPixel(i);s.css("left",e.x+r.offset.x+"px").css("top",e.y+r.offset.y+"px")};this.onRemove=function(){for(var e=0;e<u.length;e++)google.maps.event.removeListener(u[e]);s.remove()};this.hide=function(){s.hide()};this.show=function(){s.show()};this.toggle=function(){s&&(s.is(":visible")?this.show():this.hide())};this.toggleDOM=function(){this.getMap()?this.setMap(null):this.setMap(t)};this.getDOMElement=function(){return s[0]}}function v(e,t){function r(){this.onAdd=function(){};this.onRemove=function(){};this.draw=function(){};return n.classes.OverlayView.apply(this,[])}r.prototype=n.classes.OverlayView.prototype;var i=new r;i.setMap(e);return i}function m(t,r,i){function k(e){if(!y[e]){delete b[e].options.map;y[e]=new n.classes.Marker(b[e].options);u(t,{todo:b[e]},y[e],b[e].id)}}function L(){x=E.getProjection();if(!x){setTimeout(function(){L.apply(h,[])},25);return}l=!0;p.push(google.maps.event.addListener(r,"zoom_changed",function(){P()}));p.push(google.maps.event.addListener(r,"bounds_changed",function(){P()}));B()}function O(e){if(typeof d[e]=="object"){typeof d[e].obj.setMap=="function"&&d[e].obj.setMap(null);typeof d[e].obj.remove=="function"&&d[e].obj.remove();typeof d[e].shadow.remove=="function"&&d[e].obj.remove();typeof d[e].shadow.setMap=="function"&&d[e].shadow.setMap(null);delete d[e].obj;delete d[e].shadow}else y[e]&&y[e].setMap(null);delete d[e]}function M(){var e,t,n,r,i,s,o,u;if(arguments[0]instanceof google.maps.LatLng){e=arguments[0].lat();n=arguments[0].lng();if(arguments[1]instanceof google.maps.LatLng){t=arguments[1].lat();r=arguments[1].lng()}else{t=arguments[1];r=arguments[2]}}else{e=arguments[0];n=arguments[1];if(arguments[2]instanceof google.maps.LatLng){t=arguments[2].lat();r=arguments[2].lng()}else{t=arguments[2];r=arguments[3]}}i=Math.PI*e/180;s=Math.PI*n/180;o=Math.PI*t/180;u=Math.PI*r/180;return 6371e3*Math.acos(Math.min(Math.cos(i)*Math.cos(o)*Math.cos(s)*Math.cos(u)+Math.cos(i)*Math.sin(s)*Math.cos(o)*Math.sin(u)+Math.sin(i)*Math.sin(o),1))}function _(){var e=M(r.getCenter(),r.getBounds().getNorthEast()),t=new google.maps.Circle({center:r.getCenter(),radius:1.25*e});return t.getBounds()}function D(){var e={},t;for(t in d)e[t]=!0;return e}function P(){clearTimeout(S);S=setTimeout(function(){B()},25)}function H(e){var t=x.fromLatLngToDivPixel(e),n=x.fromDivPixelToLatLng(new google.maps.Point(t.x+i.radius,t.y-i.radius)),r=x.fromDivPixelToLatLng(new google.maps.Point(t.x-i.radius,t.y+i.radius));return new google.maps.LatLngBounds(r,n)}function B(){if(o||f||!l)return;var t=[],n={},s=r.getZoom(),u="maxZoom"in i&&s>i.maxZoom,h=D(),p,v,m,g,y=!1,E,S,x,C,k,L,A;a=!1;if(s>3){E=_();y=E.getSouthWest().lng()<E.getNorthEast().lng()}for(p=0;p<b.length;p++)b[p]&&(!y||E.contains(b[p].options.position))&&(!T||T(w[p]))&&t.push(p);for(;;){p=0;while(n[p]&&p<t.length)p++;if(p==t.length)break;g=[];if(c&&!u){A=10;do{C=g;g=[];A--;C.length?x=E.getCenter():x=b[t[p]].options.position;E=H(x);for(v=p;v<t.length;v++){if(n[v])continue;E.contains(b[t[v]].options.position)&&g.push(v)}}while(C.length<g.length&&g.length>1&&A)}else for(v=p;v<t.length;v++){if(n[v])continue;g.push(v);break}S={indexes:[],ref:[]};k=L=0;for(m=0;m<g.length;m++){n[g[m]]=!0;S.indexes.push(t[g[m]]);S.ref.push(t[g[m]]);k+=b[t[g[m]]].options.position.lat();L+=b[t[g[m]]].options.position.lng()}k/=g.length;L/=g.length;S.latLng=new google.maps.LatLng(k,L);S.ref=S.ref.join("-");if(S.ref in h)delete h[S.ref];else{g.length===1&&(d[S.ref]=!0);N(S)}}e.each(h,function(e){O(e)});f=!1}var o=!1,a=!1,f=!1,l=!1,c=!0,h=this,p=[],d={},m={},g={},y=[],b=[],w=[],E=v(r,i.radius),S,x,T,N,C;L();this.getById=function(e){if(e in m){k(m[e]);return y[m[e]]}return!1};this.rm=function(e){var t=m[e];y[t]&&y[t].setMap(null);delete y[t];y[t]=!1;delete b[t];b[t]=!1;delete w[t];w[t]=!1;delete m[e];delete g[t];a=!0};this.clearById=function(e){if(e in m){this.rm(e);return!0}};this.clear=function(e,t,n){var r,i,s,o,u,a=[],f=A(n);if(e){r=b.length-1;i=-1;s=-1}else{r=0;i=b.length;s=1}for(o=r;o!=i;o+=s)if(b[o])if(!f||f(b[o].tag)){a.push(g[o]);if(t||e)break}for(u=0;u<a.length;u++)this.rm(a[u])};this.add=function(e,t){e.id=s(e.id);this.clearById(e.id);m[e.id]=y.length;g[y.length]=e.id;y.push(null);b.push(e);w.push(t);a=!0};this.addMarker=function(e,n){n=n||{};n.id=s(n.id);this.clearById(n.id);n.options||(n.options={});n.options.position=e.getPosition();u(t,{todo:n},e,n.id);m[n.id]=y.length;g[y.length]=n.id;y.push(e);b.push(n);w.push(n.data||{});a=!0};this.todo=function(e){return b[e]};this.value=function(e){return w[e]};this.marker=function(e){if(e in y){k(e);return y[e]}return!1};this.markerIsSet=function(e){return Boolean(y[e])};this.setMarker=function(e,t){y[e]=t};this.store=function(e,t,n){d[e.ref]={obj:t,shadow:n}};this.free=function(){for(var t=0;t<p.length;t++)google.maps.event.removeListener(p[t]);p=[];e.each(d,function(e){O(e)});d={};e.each(b,function(e){b[e]=null});b=[];e.each(y,function(e){if(y[e]){y[e].setMap(null);delete y[e]}});y=[];e.each(w,function(e){delete w[e]});w=[];m={};g={}};this.filter=function(e){T=e;B()};this.enable=function(e){if(c!=e){c=e;B()}};this.display=function(e){N=e};this.error=function(e){C=e};this.beginUpdate=function(){o=!0};this.endUpdate=function(){o=!1;a&&B()};this.autofit=function(e){for(var t=0;t<b.length;t++)b[t]&&e.extend(b[t].options.position)}}function g(e,t){this.id=function(){return e};this.filter=function(e){t.filter(e)};this.enable=function(){t.enable(!0)};this.disable=function(){t.enable(!1)};this.add=function(e,n,r){r||t.beginUpdate();t.addMarker(e,n);r||t.endUpdate()};this.getById=function(e){return t.getById(e)};this.clearById=function(e,n){var r;n||t.beginUpdate();r=t.clearById(e);n||t.endUpdate();return r};this.clear=function(e,n,r,i){i||t.beginUpdate();t.clear(e,n,r);i||t.endUpdate()}}function y(){function i(e){return{id:e.id,name:e.name,object:e.obj,tag:e.tag,data:e.data}}function o(e){typeof e.setMap=="function"&&e.setMap(null);typeof e.remove=="function"&&e.remove();typeof e.free=="function"&&e.free();e=null}var n={},r={};this.add=function(e,t,i,o){var u=e.todo||{},a=s(u.id);n[t]||(n[t]=[]);a in r&&this.clearById(a);r[a]={obj:i,sub:o,name:t,id:a,tag:u.tag,data:u.data};n[t].push(a);return a};this.getById=function(e,t,n){if(e in r)return t?r[e].sub:n?i(r[e]):r[e].obj;return!1};this.get=function(e,t,s,o){var u,a,f=A(s);if(!n[e]||!n[e].length)return null;u=n[e].length;while(u){u--;a=n[e][t?u:n[e].length-u-1];if(a&&r[a]){if(f&&!f(r[a].tag))continue;return o?i(r[a]):r[a].obj}}return null};this.all=function(e,s,o){var u=[],a=A(s),f=function(e){var t,s;for(t=0;t<n[e].length;t++){s=n[e][t];if(s&&r[s]){if(a&&!a(r[s].tag))continue;u.push(o?i(r[s]):r[s].obj)}}};if(e in n)f(e);else if(e===t)for(e in n)f(e);return u};this.rm=function(e,t,i){var s,o;if(!n[e])return!1;if(t)if(i)for(s=n[e].length-1;s>=0;s--){o=n[e][s];if(t(r[o].tag))break}else for(s=0;s<n[e].length;s++){o=n[e][s];if(t(r[o].tag))break}else s=i?n[e].length-1:0;return s in n[e]?this.clearById(n[e][s],s):!1};this.clearById=function(e,i){if(e in r){var s,u=r[e].name;for(s=0;i===t&&s<n[u].length;s++)e===n[u][s]&&(i=s);o(r[e].obj);r[e].sub&&o(r[e].sub);delete r[e];n[u].splice(i,1);return!0}return!1};this.objGetById=function(e){var t;if(n.clusterer)for(var i in n.clusterer)if((t=r[n.clusterer[i]].obj.getById(e))!==!1)return t;return!1};this.objClearById=function(e){if(n.clusterer)for(var t in n.clusterer)if(r[n.clusterer[t]].obj.clearById(e))return!0;return null};this.clear=function(e,t,r,i){var s,o,u,a=A(i);if(!e||!e.length){e=[];for(s in n)e.push(s)}else e=L(e);for(o=0;o<e.length;o++){u=e[o];if(t)this.rm(u,a,!0);else if(r)this.rm(u,a,!1);else while(this.rm(u,a,!1));}};this.objClear=function(t,i,s,o){if(n.clusterer&&(e.inArray("marker",t)>=0||!t.length))for(var u in n.clusterer)r[n.clusterer[u]].obj.clear(i,s,o)}}function E(){b.geocoder||(b.geocoder=new google.maps.Geocoder);return b.geocoder}function S(){b.directionsService||(b.directionsService=new google.maps.DirectionsService);return b.directionsService}function x(){b.elevationService||(b.elevationService=new google.maps.ElevationService);return b.elevationService}function T(){b.maxZoomService||(b.maxZoomService=new google.maps.MaxZoomService);return b.maxZoomService}function N(){b.distanceMatrixService||(b.distanceMatrixService=new google.maps.DistanceMatrixService);return b.distanceMatrixService}function C(){if(n.verbose){var e,t=[];if(window.console&&typeof console.error=="function"){for(e=0;e<arguments.length;e++)t.push(arguments[e]);console.error.apply(console,t)}else{t="";for(e=0;e<arguments.length;e++)t+=arguments[e].toString()+" ";alert(t)}}}function k(e){return(typeof e=="number"||typeof e=="string")&&e!==""&&!isNaN(e)}function L(e){var n,r=[];if(e!==t)if(typeof e=="object")if(typeof e.length=="number")r=e;else for(n in e)r.push(e[n]);else r.push(e);return r}function A(n){if(n){if(typeof n=="function")return n;n=L(n);return function(r){if(r===t)return!1;if(typeof r=="object"){for(var i=0;i<r.length;i++)if(e.inArray(r[i],n)>=0)return!0;return!1}return e.inArray(r,n)>=0}}}function O(t,n,r){var i=n?t:null;return!t||typeof t=="string"?i:t.latLng?O(t.latLng):t instanceof google.maps.LatLng?t:k(t.lat)?new google.maps.LatLng(t.lat,t.lng):!r&&e.isArray(t)?!k(t[0])||!k(t[1])?i:new google.maps.LatLng(t[0],t[1]):i}function M(t){var n,r;if(!t||t instanceof google.maps.LatLngBounds)return t||null;if(e.isArray(t)){if(t.length==2){n=O(t[0]);r=O(t[1])}else if(t.length==4){n=O([t[0],t[1]]);r=O([t[2],t[3]])}}else if("ne"in t&&"sw"in t){n=O(t.ne);r=O(t.sw)}else if("n"in t&&"e"in t&&"s"in t&&"w"in t){n=O([t.n,t.e]);r=O([t.s,t.w])}return n&&r?new google.maps.LatLngBounds(r,n):null}function _(e,t,r,i,s){var o=r?O(i.todo,!1,!0):!1,u=o?{latLng:o}:i.todo.address?typeof i.todo.address=="string"?{address:i.todo.address}:i.todo.address:!1,a=u?w.get(u):!1,f=this;if(u){s=s||0;if(a){i.latLng=a.results[0].geometry.location;i.results=a.results;i.status=a.status;t.apply(e,[i])}else{u.location&&(u.location=O(u.location));u.bounds&&(u.bounds=M(u.bounds));E().geocode(u,function(o,a){if(a===google.maps.GeocoderStatus.OK){w.store(u,{results:o,status:a});i.latLng=o[0].geometry.location;i.results=o;i.status=a;t.apply(e,[i])}else if(a===google.maps.GeocoderStatus.OVER_QUERY_LIMIT&&s<n.queryLimit.attempt)setTimeout(function(){_.apply(f,[e,t,r,i,s+1])},n.queryLimit.delay+Math.floor(Math.random()*n.queryLimit.random));else{C("geocode failed",a,u);i.latLng=i.results=!1;i.status=a;t.apply(e,[i])}})}}else{i.latLng=O(i.todo,!1,!0);t.apply(e,[i])}}function D(t,n,r,i){function u(){do o++;while(o<t.length&&!("address"in t[o]));if(o>=t.length){r.apply(n,[i]);return}_(s,function(n){delete n.todo;e.extend(t[o],n);u.apply(s,[])},!0,{todo:t[o]})}var s=this,o=-1;u()}function P(e,t,n){var r=!1;if(navigator&&navigator.geolocation)navigator.geolocation.getCurrentPosition(function(i){if(r)return;r=!0;n.latLng=new google.maps.LatLng(i.coords.latitude,i.coords.longitude);t.apply(e,[n])},function(){if(r)return;r=!0;n.latLng=!1;t.apply(e,[n])},n.opts.getCurrentPosition);else{n.latLng=!1;t.apply(e,[n])}}function H(r){function b(){!v&&(v=l.get())&&v.run()}function w(){v=null;l.ack();b.call(i)}function E(t){if(t.todo.callback){var n=Array.prototype.slice.call(arguments,1);typeof t.todo.callback=="function"?t.todo.callback.apply(r,n):e.isArray(t.todo.callback)&&typeof t.todo.callback[1]=="function"&&t.todo.callback[1].apply(t.todo.callback[0],n)}}function k(e,t,n){n&&u(r,e,t,n);E(e,t);v.ack(t)}function A(t,i){i=i||{};if(p){if(i.todo&&i.todo.options){i.todo.options.center&&(i.todo.options.center=O(i.todo.options.center));p.setOptions(i.todo.options)}}else{var s=i.opts||e.extend(!0,{},n.map,i.todo&&i.todo.options?i.todo.options:{});s.center=t||O(s.center);p=new n.classes.Map(r.get(0),s)}}function _(t,n,i){var s=[],o="values"in t.todo;o||(t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){k(t,!1);return}A();e.each(t.todo.values,function(o,a){var f,l,d,v,m=c(t,a);if(m.options[i])if(m.options[i][0][0]&&e.isArray(m.options[i][0][0]))for(l=0;l<m.options[i].length;l++)for(d=0;d<m.options[i][l].length;d++)m.options[i][l][d]=O(m.options[i][l][d]);else for(l=0;l<m.options[i].length;l++)m.options[i][l]=O(m.options[i][l]);m.options.map=p;v=new google.maps[n](m.options);s.push(v);f=h.add({todo:m},n.toLowerCase(),v);u(r,{todo:m},v,f)});k(t,o?s:s[0])}function D(n){var s=new m(r,p,n),o={},a={},f=[],l=/^[0-9]+$/,c,h;for(h in n)if(l.test(h)){f.push(1*h);a[h]=n[h];a[h].width=a[h].width||0;a[h].height=a[h].height||0}else o[h]=n[h];f.sort(function(e,t){return e>t});o.calculator?c=function(t){var n=[];e.each(t,function(e,t){n.push(s.value(t))});return o.calculator.apply(r,[n])}:c=function(e){return e.length};s.error(function(){C.apply(i,arguments)});s.display(function(l){var h,d,v,m,g,y=c(l.indexes);if(n.force||y>1)for(h=0;h<f.length;h++)f[h]<=y&&(d=a[f[h]]);if(d){g=d.offset||[-d.width/2,-d.height/2];v=e.extend({},o);v.options=e.extend({pane:"overlayLayer",content:d.content?d.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in g?g.x:g[0])||0,y:("y"in g?g.y:g[1])||0}},o.options||{});m=i.overlay({todo:v,opts:v.options,latLng:O(l)},!0);v.options.pane="floatShadow";v.options.content=e(document.createElement("div")).width(d.width+"px").height(d.height+"px").css({cursor:"pointer"});shadow=i.overlay({todo:v,opts:v.options,latLng:O(l)},!0);o.data={latLng:O(l),markers:[]};e.each(l.indexes,function(e,t){o.data.markers.push(s.value(t));s.markerIsSet(t)&&s.marker(t).setMap(null)});u(r,{todo:o},shadow,t,{main:m,shadow:shadow});s.store(l,m,shadow)}else e.each(l.indexes,function(e,t){s.marker(t).setMap(p)})});return s}var i=this,l=new a,h=new y,p=null,v;this._plan=function(e){for(var t=0;t<e.length;t++)l.add(new f(i,w,e[t]));b()};this.map=function(e){A(e.latLng,e);u(r,e,p);k(e,p)};this.destroy=function(e){h.clear();r.empty();p&&(p=null);k(e,!0)};this.infowindow=function(i){var s=[],o="values"in i.todo;if(!o){i.latLng&&(i.opts.position=i.latLng);i.todo.values=[{options:i.opts}]}e.each(i.todo.values,function(e,a){var f,l,d=c(i,a);d.options.position=d.options.position?O(d.options.position):O(a.latLng);p||A(d.options.position);l=new n.classes.InfoWindow(d.options);l&&(d.open===t||d.open)&&(o?l.open(p,d.anchor?d.anchor:t):l.open(p,d.anchor?d.anchor:i.latLng?t:i.session.marker?i.session.marker:t));s.push(l);f=h.add({todo:d},"infowindow",l);u(r,{todo:d},l,f)});k(i,o?s:s[0])};this.circle=function(t){var i=[],s="values"in t.todo;if(!s){t.opts.center=t.latLng||O(t.opts.center);t.todo.values=[{options:t.opts}]}if(!t.todo.values.length){k(t,!1);return}e.each(t.todo.values,function(e,s){var o,a,f=c(t,s);f.options.center=f.options.center?O(f.options.center):O(s);p||A(f.options.center);f.options.map=p;a=new n.classes.Circle(f.options);i.push(a);o=h.add({todo:f},"circle",a);u(r,{todo:f},a,o)});k(t,s?i:i[0])};this.overlay=function(t,i){var s=[],o="values"in t.todo;o||(t.todo.values=[{latLng:t.latLng,options:t.opts}]);if(!t.todo.values.length){k(t,!1);return}if(!d.__initialised){d.prototype=new n.classes.OverlayView;d.__initialised=!0}e.each(t.todo.values,function(n,o){var a,f,l=c(t,o),v=e(document.createElement("div")).css({border:"none",borderWidth:"0px",position:"absolute"});v.append(l.options.content);f=new d(p,l.options,O(l)||O(o),v);s.push(f);v=null;if(!i){a=h.add(t,"overlay",f);u(r,{todo:l},f,a)}});if(i)return s[0];k(t,o?s:s[0])};this.getaddress=function(e){E(e,e.results,e.status);v.ack()};this.getlatlng=function(e){E(e,e.results,e.status);v.ack()};this.getmaxzoom=function(e){T().getMaxZoomAtLatLng(e.latLng,function(t){E(e,t.status===google.maps.MaxZoomStatus.OK?t.zoom:!1,status);v.ack()})};this.getelevation=function(e){var t,n=[],r=function(t,n){E(e,n===google.maps.ElevationStatus.OK?t:!1,n);v.ack()};if(e.latLng)n.push(e.latLng);else{n=L(e.todo.locations||[]);for(t=0;t<n.length;t++)n[t]=O(n[t])}if(n.length)x().getElevationForLocations({locations:n},r);else{if(e.todo.path&&e.todo.path.length)for(t=0;t<e.todo.path.length;t++)n.push(O(e.todo.path[t]));n.length?x().getElevationAlongPath({path:n,samples:e.todo.samples},r):v.ack()}};this.defaults=function(t){e.each(t.todo,function(t,r){typeof n[t]=="object"?n[t]=e.extend({},n[t],r):n[t]=r});v.ack(!0)};this.rectangle=function(t){var i=[],s="values"in t.todo;s||(t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){k(t,!1);return}e.each(t.todo.values,function(e,s){var o,a,f=c(t,s);f.options.bounds=f.options.bounds?M(f.options.bounds):M(s);p||A(f.options.bounds.getCenter());f.options.map=p;a=new n.classes.Rectangle(f.options);i.push(a);o=h.add({todo:f},"rectangle",a);u(r,{todo:f},a,o)});k(t,s?i:i[0])};this.polyline=function(e){_(e,"Polyline","path")};this.polygon=function(e){_(e,"Polygon","paths")};this.trafficlayer=function(e){A();var t=h.get("trafficlayer");if(!t){t=new n.classes.TrafficLayer;t.setMap(p);h.add(e,"trafficlayer",t)}k(e,t)};this.bicyclinglayer=function(e){A();var t=h.get("bicyclinglayer");if(!t){t=new n.classes.BicyclingLayer;t.setMap(p);h.add(e,"bicyclinglayer",t)}k(e,t)};this.groundoverlay=function(e){e.opts.bounds=M(e.opts.bounds);e.opts.bounds&&A(e.opts.bounds.getCenter());var t,r=new n.classes.GroundOverlay(e.opts.url,e.opts.bounds,e.opts.opts);r.setMap(p);t=h.add(e,"groundoverlay",r);k(e,r,t)};this.streetviewpanorama=function(t){t.opts.opts||(t.opts.opts={});t.latLng?t.opts.opts.position=t.latLng:t.opts.opts.position&&(t.opts.opts.position=O(t.opts.opts.position));t.todo.divId?t.opts.container=document.getElementById(t.todo.divId):t.opts.container&&(t.opts.container=e(t.opts.container).get(0));var r,i=new n.classes.StreetViewPanorama(t.opts.container,t.opts.opts);i&&p.setStreetView(i);r=h.add(t,"streetviewpanorama",i);k(t,i,r)};this.kmllayer=function(t){var i=[],s="values"in t.todo;s||(t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){k(t,!1);return}e.each(t.todo.values,function(e,s){var a,f,l,d=c(t,s);p||A();l=d.options;if(d.options.opts){l=d.options.opts;d.options.url&&(l.url=d.options.url)}l.map=p;o("3.10")?f=new n.classes.KmlLayer(l):f=new n.classes.KmlLayer(l.url,l);i.push(f);a=h.add({todo:d},"kmllayer",f);u(r,{todo:d},f,a)});k(t,s?i:i[0])};this.panel=function(n){A();var i,s=0,o=0,u,a=e(document.createElement("div"));a.css({position:"absolute",zIndex:1e3,visibility:"hidden"});if(n.opts.content){u=e(n.opts.content);a.append(u);r.first().prepend(a);n.opts.left!==t?s=n.opts.left:n.opts.right!==t?s=r.width()-u.width()-n.opts.right:n.opts.center&&(s=(r.width()-u.width())/2);n.opts.top!==t?o=n.opts.top:n.opts.bottom!==t?o=r.height()-u.height()-n.opts.bottom:n.opts.middle&&(o=(r.height()-u.height())/2);a.css({top:o,left:s,visibility:"visible"})}i=h.add(n,"panel",a);k(n,a,i);a=null};this.marker=function(t){var o="values"in t.todo,a=!p;if(!o){t.opts.position=t.latLng||O(t.opts.position);t.todo.values=[{options:t.opts}]}if(!t.todo.values.length){k(t,!1);return}a&&A();if(t.todo.cluster&&!p.getBounds()){google.maps.event.addListenerOnce(p,"bounds_changed",function(){i.marker.apply(i,[t])});return}if(t.todo.cluster){var f,l;if(t.todo.cluster instanceof g){f=t.todo.cluster;l=h.getById(f.id(),!0)}else{l=D(t.todo.cluster);f=new g(s(t.todo.id,!0),l);h.add(t,"clusterer",f,l)}l.beginUpdate();e.each(t.todo.values,function(e,n){var r=c(t,n);r.options.position=r.options.position?O(r.options.position):O(n);r.options.map=p;if(a){p.setCenter(r.options.position);a=!1}l.add(r,n)});l.endUpdate();k(t,f)}else{var d=[];e.each(t.todo.values,function(e,i){var s,o,f=c(t,i);f.options.position=f.options.position?O(f.options.position):O(i);f.options.map=p;if(a){p.setCenter(f.options.position);a=!1}o=new n.classes.Marker(f.options);d.push(o);s=h.add({todo:f},"marker",o);u(r,{todo:f},o,s)});k(t,o?d:d[0])}};this.getroute=function(e){e.opts.origin=O(e.opts.origin,!0);e.opts.destination=O(e.opts.destination,!0);S().route(e.opts,function(t,n){E(e,n==google.maps.DirectionsStatus.OK?t:!1,n);v.ack()})};this.directionsrenderer=function(t){t.opts.map=p;var n,r=new google.maps.DirectionsRenderer(t.opts);t.todo.divId?r.setPanel(document.getElementById(t.todo.divId)):t.todo.container&&r.setPanel(e(t.todo.container).get(0));n=h.add(t,"directionsrenderer",r);k(t,r,n)};this.getgeoloc=function(e){k(e,e.latLng)};this.styledmaptype=function(e){A();var t=new n.classes.StyledMapType(e.todo.styles,e.opts);p.mapTypes.set(e.todo.id,t);k(e,t)};this.imagemaptype=function(e){A();var t=new n.classes.ImageMapType(e.opts);p.mapTypes.set(e.todo.id,t);k(e,t)};this.autofit=function(t){var n=new google.maps.LatLngBounds;e.each(h.all(),function(e,t){if(t.getPosition)n.extend(t.getPosition());else if(t.getBounds){n.extend(t.getBounds().getNorthEast());n.extend(t.getBounds().getSouthWest())}else if(t.getPaths)t.getPaths().forEach(function(e){e.forEach(function(e){n.extend(e)})});else if(t.getPath)t.getPath().forEach(function(e){n.extend(e)});else if(t.getCenter)n.extend(t.getCenter());else if(t instanceof g){t=h.getById(t.id(),!0);t&&t.autofit(n)}});if(!n.isEmpty()&&(!p.getBounds()||!p.getBounds().equals(n))){"maxZoom"in t.todo&&google.maps.event.addListenerOnce(p,"bounds_changed",function(){this.getZoom()>t.todo.maxZoom&&this.setZoom(t.todo.maxZoom)});p.fitBounds(n)}k(t,!0)};this.clear=function(t){if(typeof t.todo=="string"){if(h.clearById(t.todo)||h.objClearById(t.todo)){k(t,!0);return}t.todo={name:t.todo}}if(t.todo.id)e.each(L(t.todo.id),function(e,t){h.clearById(t)||h.objClearById(t)});else{h.clear(L(t.todo.name),t.todo.last,t.todo.first,t.todo.tag);h.objClear(L(t.todo.name),t.todo.last,t.todo.first,t.todo.tag)}k(t,!0)};this.exec=function(t){var n=this;e.each(L(t.todo.func),function(i,s){e.each(n.get(t.todo,!0,t.todo.hasOwnProperty("full")?t.todo.full:!0),function(e,t){s.call(r,t)})});k(t,!0)};this.get=function(n,r,i){var s,o,u=r?n:n.todo;r||(i=u.full);if(typeof u=="string"){o=h.getById(u,!1,i)||h.objGetById(u);if(o===!1){s=u;u={}}}else s=u.name;s==="map"&&(o=p);if(!o){o=[];if(u.id){e.each(L(u.id),function(e,t){o.push(h.getById(t,!1,i)||h.objGetById(t))});e.isArray(u.id)||(o=o[0])}else{e.each(s?L(s):[t],function(t,n){var r;if(u.first){r=h.get(n,!1,u.tag,i);r&&o.push(r)}else if(u.all)e.each(h.all(n,u.tag,i),function(e,t){o.push(t)});else{r=h.get(n,!0,u.tag,i);r&&o.push(r)}});!u.all&&!e.isArray(s)&&(o=o[0])}}o=e.isArray(o)||!u.all?o:[o];if(r)return o;k(n,o)};this.getdistance=function(e){var t;e.opts.origins=L(e.opts.origins);for(t=0;t<e.opts.origins.length;t++)e.opts.origins[t]=O(e.opts.origins[t],!0);e.opts.destinations=L(e.opts.destinations);for(t=0;t<e.opts.destinations.length;t++)e.opts.destinations[t]=O(e.opts.destinations[t],!0);N().getDistanceMatrix(e.opts,function(t,n){E(e,n===google.maps.DistanceMatrixStatus.OK?t:!1,n);v.ack()})};this.trigger=function(t){if(typeof t.todo=="string")google.maps.event.trigger(p,t.todo);else{var n=[p,t.todo.eventName];t.todo.var_args&&e.each(t.todo.var_args,function(e,t){n.push(t)});google.maps.event.trigger.apply(google.maps.event,n)}E(t);v.ack()}}function B(e){var t;if(!typeof e==="object"||!e.hasOwnProperty("get"))return!1;for(t in e)if(t!=="get")return!1;return!e.get.hasOwnProperty("callback")}var n,r=0,b={},w=new p;e.fn.gmap3=function(){var t,n=[],r=!0,s=[];i();for(t=0;t<arguments.length;t++)arguments[t]&&n.push(arguments[t]);n.length||n.push("map");e.each(this,function(){var t=e(this),i=t.data("gmap3");r=!1;if(!i){i=new H(t);t.data("gmap3",i)}n.length!==1||n[0]!=="get"&&!B(n[0])?i._plan(n):n[0]==="get"?s.push(i.get("map",!0)):s.push(i.get(n[0].get,!0,n[0].get.full))});return s.length?s.length===1?s[0]:s:this}})(jQuery);
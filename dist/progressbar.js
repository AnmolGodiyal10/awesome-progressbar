(()=>{var J=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var Wt=J((mt,kt)=>{(function(a,e){typeof mt=="object"&&typeof kt=="object"?kt.exports=e():typeof define=="function"&&define.amd?define("shifty",[],e):typeof mt=="object"?mt.shifty=e():a.shifty=e()})(window,function(){return function(a){var e={};function t(n){if(e[n])return e[n].exports;var c=e[n]={i:n,l:!1,exports:{}};return a[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}return t.m=a,t.c=e,t.d=function(n,c,y){t.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:y})},t.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,c){if(1&c&&(n=t(n)),8&c||4&c&&typeof n=="object"&&n&&n.__esModule)return n;var y=Object.create(null);if(t.r(y),Object.defineProperty(y,"default",{enumerable:!0,value:n}),2&c&&typeof n!="string")for(var b in n)t.d(y,b,function(N){return n[N]}.bind(null,b));return y},t.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(c,"a",c),c},t.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},t.p="",t(t.s=3)}([function(a,e,t){"use strict";(function(n){t.d(e,"e",function(){return K}),t.d(e,"c",function(){return at}),t.d(e,"b",function(){return rt}),t.d(e,"a",function(){return Q}),t.d(e,"d",function(){return pt});var c=t(1);function y(s,h){for(var d=0;d<h.length;d++){var _=h[d];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(s,_.key,_)}}function b(s){return(b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h})(s)}function N(s,h){var d=Object.keys(s);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(s);h&&(_=_.filter(function(g){return Object.getOwnPropertyDescriptor(s,g).enumerable})),d.push.apply(d,_)}return d}function B(s){for(var h=1;h<arguments.length;h++){var d=arguments[h]!=null?arguments[h]:{};h%2?N(Object(d),!0).forEach(function(_){X(s,_,d[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(d)):N(Object(d)).forEach(function(_){Object.defineProperty(s,_,Object.getOwnPropertyDescriptor(d,_))})}return s}function X(s,h,d){return h in s?Object.defineProperty(s,h,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[h]=d,s}var A=typeof window<"u"?window:n,F=A.requestAnimationFrame||A.webkitRequestAnimationFrame||A.oRequestAnimationFrame||A.msRequestAnimationFrame||A.mozCancelRequestAnimationFrame&&A.mozRequestAnimationFrame||setTimeout,H=function(){},R=null,M=null,it=B({},c),K=function(s,h,d,_,g,v,P){var x=s<v?0:(s-v)/g;for(var j in h){var k=P[j],C=k.call?k:it[k],E=d[j];h[j]=E+(_[j]-E)*C(x)}return h},ot=function(s,h){var d=s._attachment,_=s._currentState,g=s._delay,v=s._easing,P=s._originalState,x=s._duration,j=s._step,k=s._targetState,C=s._timestamp,E=C+g+x,O=h>E?E:h,V=x-(E-O);O>=E?(j(k,d,V),s.stop(!0)):(s._applyFilter("beforeTween"),O<C+g?(O=1,x=1,C=1):C+=g,K(O,_,P,k,x,C,v),s._applyFilter("afterTween"),j(_,d,V))},at=function(){for(var s=Q.now(),h=R;h;){var d=h._next;ot(h,s),h=d}},rt=function(s){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"linear",d={},_=b(h);if(_==="string"||_==="function")for(var g in s)d[g]=h;else for(var v in s)d[v]=h[v]||"linear";return d},ut=function(s){if(s===R)(R=s._next)?R._previous=null:M=null;else if(s===M)(M=s._previous)?M._next=null:R=null;else{var h=s._previous,d=s._next;h._next=d,d._previous=h}s._previous=s._next=null},Q=function(){function s(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;(function(P,x){if(!(P instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),this._currentState=g,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,v&&this.setConfig(v)}var h,d,_;return h=s,(d=[{key:"_applyFilter",value:function(g){var v=!0,P=!1,x=void 0;try{for(var j,k=this._filters[Symbol.iterator]();!(v=(j=k.next()).done);v=!0){var C=j.value[g];C&&C(this)}}catch(E){P=!0,x=E}finally{try{v||k.return==null||k.return()}finally{if(P)throw x}}}},{key:"tween",value:function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,v=this._attachment,P=this._configured;return!g&&P||this.setConfig(g),this._pausedAtTime=null,this._timestamp=s.now(),this._start(this.get(),v),this.resume()}},{key:"setConfig",value:function(){var g=this,v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=v.attachment,x=v.delay,j=x===void 0?0:x,k=v.duration,C=k===void 0?500:k,E=v.easing,O=v.from,V=v.promise,dt=V===void 0?Promise:V,r=v.start,m=r===void 0?H:r,W=v.step,bt=W===void 0?H:W,q=v.to;this._configured=!0,this._attachment=P,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=j,this._start=m,this._step=bt,this._duration=C,this._currentState=B({},O||this.get()),this._originalState=this.get(),this._targetState=B({},q||this.get());var _t=this._currentState;this._targetState=B({},_t,{},this._targetState),this._easing=rt(_t,E);var gt=s.filters;for(var yt in this._filters.length=0,gt)gt[yt].doesApply(this)&&this._filters.push(gt[yt]);return this._applyFilter("tweenCreated"),this._promise=new dt(function(i,o){g._resolve=i,g._reject=o}),this._promise.catch(H),this}},{key:"get",value:function(){return B({},this._currentState)}},{key:"set",value:function(g){this._currentState=g}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=s.now(),this._isPlaying=!1,ut(this),this}},{key:"resume",value:function(){if(this._timestamp===null)return this.tween();if(this._isPlaying)return this._promise;var g=s.now();return this._pausedAtTime&&(this._timestamp+=g-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,R===null?(R=this,M=this,function v(){R&&(F.call(A,v,1e3/60),at())}()):(this._previous=M,M._next=this,M=this),this._promise}},{key:"seek",value:function(g){g=Math.max(g,0);var v=s.now();return this._timestamp+g===0?this:(this._timestamp=v-g,this._isPlaying||ot(this,v),this)}},{key:"stop",value:function(){var g=arguments.length>0&&arguments[0]!==void 0&&arguments[0],v=this._attachment,P=this._currentState,x=this._easing,j=this._originalState,k=this._targetState;if(this._isPlaying)return this._isPlaying=!1,ut(this),g?(this._applyFilter("beforeTween"),K(1,P,j,k,1,0,x),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(P,v)):this._reject(P,v),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(g){s.setScheduleFunction(g)}},{key:"dispose",value:function(){for(var g in this)delete this[g]}}])&&y(h.prototype,d),_&&y(h,_),s}();function pt(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=new Q,d=h.tween(s);return d.tweenable=h,d}Q.setScheduleFunction=function(s){return F=s},Q.formulas=it,Q.filters={},Q.now=Date.now||function(){return+new Date}}).call(this,t(2))},function(a,e,t){"use strict";t.r(e),t.d(e,"linear",function(){return n}),t.d(e,"easeInQuad",function(){return c}),t.d(e,"easeOutQuad",function(){return y}),t.d(e,"easeInOutQuad",function(){return b}),t.d(e,"easeInCubic",function(){return N}),t.d(e,"easeOutCubic",function(){return B}),t.d(e,"easeInOutCubic",function(){return X}),t.d(e,"easeInQuart",function(){return A}),t.d(e,"easeOutQuart",function(){return F}),t.d(e,"easeInOutQuart",function(){return H}),t.d(e,"easeInQuint",function(){return R}),t.d(e,"easeOutQuint",function(){return M}),t.d(e,"easeInOutQuint",function(){return it}),t.d(e,"easeInSine",function(){return K}),t.d(e,"easeOutSine",function(){return ot}),t.d(e,"easeInOutSine",function(){return at}),t.d(e,"easeInExpo",function(){return rt}),t.d(e,"easeOutExpo",function(){return ut}),t.d(e,"easeInOutExpo",function(){return Q}),t.d(e,"easeInCirc",function(){return pt}),t.d(e,"easeOutCirc",function(){return s}),t.d(e,"easeInOutCirc",function(){return h}),t.d(e,"easeOutBounce",function(){return d}),t.d(e,"easeInBack",function(){return _}),t.d(e,"easeOutBack",function(){return g}),t.d(e,"easeInOutBack",function(){return v}),t.d(e,"elastic",function(){return P}),t.d(e,"swingFromTo",function(){return x}),t.d(e,"swingFrom",function(){return j}),t.d(e,"swingTo",function(){return k}),t.d(e,"bounce",function(){return C}),t.d(e,"bouncePast",function(){return E}),t.d(e,"easeFromTo",function(){return O}),t.d(e,"easeFrom",function(){return V}),t.d(e,"easeTo",function(){return dt});var n=function(r){return r},c=function(r){return Math.pow(r,2)},y=function(r){return-(Math.pow(r-1,2)-1)},b=function(r){return(r/=.5)<1?.5*Math.pow(r,2):-.5*((r-=2)*r-2)},N=function(r){return Math.pow(r,3)},B=function(r){return Math.pow(r-1,3)+1},X=function(r){return(r/=.5)<1?.5*Math.pow(r,3):.5*(Math.pow(r-2,3)+2)},A=function(r){return Math.pow(r,4)},F=function(r){return-(Math.pow(r-1,4)-1)},H=function(r){return(r/=.5)<1?.5*Math.pow(r,4):-.5*((r-=2)*Math.pow(r,3)-2)},R=function(r){return Math.pow(r,5)},M=function(r){return Math.pow(r-1,5)+1},it=function(r){return(r/=.5)<1?.5*Math.pow(r,5):.5*(Math.pow(r-2,5)+2)},K=function(r){return 1-Math.cos(r*(Math.PI/2))},ot=function(r){return Math.sin(r*(Math.PI/2))},at=function(r){return-.5*(Math.cos(Math.PI*r)-1)},rt=function(r){return r===0?0:Math.pow(2,10*(r-1))},ut=function(r){return r===1?1:1-Math.pow(2,-10*r)},Q=function(r){return r===0?0:r===1?1:(r/=.5)<1?.5*Math.pow(2,10*(r-1)):.5*(2-Math.pow(2,-10*--r))},pt=function(r){return-(Math.sqrt(1-r*r)-1)},s=function(r){return Math.sqrt(1-Math.pow(r-1,2))},h=function(r){return(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)},d=function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},_=function(r){var m=1.70158;return r*r*((m+1)*r-m)},g=function(r){var m=1.70158;return(r-=1)*r*((m+1)*r+m)+1},v=function(r){var m=1.70158;return(r/=.5)<1?r*r*((1+(m*=1.525))*r-m)*.5:.5*((r-=2)*r*((1+(m*=1.525))*r+m)+2)},P=function(r){return-1*Math.pow(4,-8*r)*Math.sin((6*r-1)*(2*Math.PI)/2)+1},x=function(r){var m=1.70158;return(r/=.5)<1?r*r*((1+(m*=1.525))*r-m)*.5:.5*((r-=2)*r*((1+(m*=1.525))*r+m)+2)},j=function(r){var m=1.70158;return r*r*((m+1)*r-m)},k=function(r){var m=1.70158;return(r-=1)*r*((m+1)*r+m)+1},C=function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},E=function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?2-(7.5625*(r-=1.5/2.75)*r+.75):r<2.5/2.75?2-(7.5625*(r-=2.25/2.75)*r+.9375):2-(7.5625*(r-=2.625/2.75)*r+.984375)},O=function(r){return(r/=.5)<1?.5*Math.pow(r,4):-.5*((r-=2)*Math.pow(r,3)-2)},V=function(r){return Math.pow(r,4)},dt=function(r){return Math.pow(r,.25)}},function(a,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch{typeof window=="object"&&(t=window)}a.exports=t},function(a,e,t){"use strict";t.r(e);var n={};t.r(n),t.d(n,"doesApply",function(){return v}),t.d(n,"tweenCreated",function(){return P}),t.d(n,"beforeTween",function(){return x}),t.d(n,"afterTween",function(){return j});var c,y,b=t(0),N=/(\d|-|\.)/,B=/([^\-0-9.]+)/g,X=/[0-9.-]+/g,A=(c=X.source,y=/,\s*/.source,new RegExp("rgb\\(".concat(c).concat(y).concat(c).concat(y).concat(c,"\\)"),"g")),F=/^.*\(/,H=/#([0-9]|[a-f]){3,6}/gi,R=function(i,o){return i.map(function(u,f){return"_".concat(o,"_").concat(f)})};function M(i){return parseInt(i,16)}var it=function(i){return"rgb(".concat((o=i,(o=o.replace(/#/,"")).length===3&&(o=(o=o.split(""))[0]+o[0]+o[1]+o[1]+o[2]+o[2]),[M(o.substr(0,2)),M(o.substr(2,2)),M(o.substr(4,2))]).join(","),")");var o},K=function(i,o,u){var f=o.match(i),l=o.replace(i,"VAL");return f&&f.forEach(function(p){return l=l.replace("VAL",u(p))}),l},ot=function(i){for(var o in i){var u=i[o];typeof u=="string"&&u.match(H)&&(i[o]=K(H,u,it))}},at=function(i){var o=i.match(X).map(Math.floor),u=i.match(F)[0];return"".concat(u).concat(o.join(","),")")},rt=function(i){return i.match(X)},ut=function(i){var o,u,f={};for(var l in i){var p=i[l];typeof p=="string"&&(f[l]={formatString:(o=p,u=void 0,u=o.match(B),u?(u.length===1||o.charAt(0).match(N))&&u.unshift(""):u=["",""],u.join("VAL")),chunkNames:R(rt(p),l)})}return f},Q=function(i,o){var u=function(l){rt(i[l]).forEach(function(p,w){return i[o[l].chunkNames[w]]=+p}),delete i[l]};for(var f in o)u(f)},pt=function(i,o){var u={};return o.forEach(function(f){u[f]=i[f],delete i[f]}),u},s=function(i,o){return o.map(function(u){return i[u]})},h=function(i,o){return o.forEach(function(u){return i=i.replace("VAL",+u.toFixed(4))}),i},d=function(i,o){for(var u in o){var f=o[u],l=f.chunkNames,p=f.formatString,w=h(p,s(pt(i,l),l));i[u]=K(A,w,at)}},_=function(i,o){var u=function(l){var p=o[l].chunkNames,w=i[l];if(typeof w=="string"){var I=w.split(" "),G=I[I.length-1];p.forEach(function(Y,Z){return i[Y]=I[Z]||G})}else p.forEach(function(Y){return i[Y]=w});delete i[l]};for(var f in o)u(f)},g=function(i,o){for(var u in o){var f=o[u].chunkNames,l=i[f[0]];i[u]=typeof l=="string"?f.map(function(p){var w=i[p];return delete i[p],w}).join(" "):l}},v=function(i){var o=i._currentState;return Object.keys(o).some(function(u){return typeof o[u]=="string"})};function P(i){var o=i._currentState;[o,i._originalState,i._targetState].forEach(ot),i._tokenData=ut(o)}function x(i){var o=i._currentState,u=i._originalState,f=i._targetState,l=i._easing,p=i._tokenData;_(l,p),[o,u,f].forEach(function(w){return Q(w,p)})}function j(i){var o=i._currentState,u=i._originalState,f=i._targetState,l=i._easing,p=i._tokenData;[o,u,f].forEach(function(w){return d(w,p)}),g(l,p)}function k(i,o){var u=Object.keys(i);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);o&&(f=f.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),u.push.apply(u,f)}return u}function C(i){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?k(Object(u),!0).forEach(function(f){E(i,f,u[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(u)):k(Object(u)).forEach(function(f){Object.defineProperty(i,f,Object.getOwnPropertyDescriptor(u,f))})}return i}function E(i,o,u){return o in i?Object.defineProperty(i,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[o]=u,i}var O=new b.a,V=b.a.filters,dt=function(i,o,u,f){var l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,p=C({},i),w=Object(b.b)(i,f);for(var I in O._filters.length=0,O.set({}),O._currentState=p,O._originalState=i,O._targetState=o,O._easing=w,V)V[I].doesApply(O)&&O._filters.push(V[I]);O._applyFilter("tweenCreated"),O._applyFilter("beforeTween");var G=Object(b.e)(u,p,i,o,1,l,w);return O._applyFilter("afterTween"),G};function r(i){return function(o){if(Array.isArray(o)){for(var u=0,f=new Array(o.length);u<o.length;u++)f[u]=o[u];return f}}(i)||function(o){if(Symbol.iterator in Object(o)||Object.prototype.toString.call(o)==="[object Arguments]")return Array.from(o)}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(i,o){for(var u=0;u<o.length;u++){var f=o[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(i,f.key,f)}}function W(i,o){var u=o.get(i);if(!u)throw new TypeError("attempted to get private field on non-instance");return u.get?u.get.call(i):u.value}var bt=function(){function i(){(function(I,G){if(!(I instanceof G))throw new TypeError("Cannot call a class as a function")})(this,i),q.set(this,{writable:!0,value:[]});for(var l=arguments.length,p=new Array(l),w=0;w<l;w++)p[w]=arguments[w];p.forEach(this.add.bind(this))}var o,u,f;return o=i,(u=[{key:"add",value:function(l){return W(this,q).push(l),l}},{key:"remove",value:function(l){var p=W(this,q).indexOf(l);return~p&&W(this,q).splice(p,1),l}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return W(this,q).some(function(l){return l.isPlaying()})}},{key:"play",value:function(){return W(this,q).forEach(function(l){return l.tween()}),this}},{key:"pause",value:function(){return W(this,q).forEach(function(l){return l.pause()}),this}},{key:"resume",value:function(){return W(this,q).forEach(function(l){return l.resume()}),this}},{key:"stop",value:function(l){return W(this,q).forEach(function(p){return p.stop(l)}),this}},{key:"tweenables",get:function(){return r(W(this,q))}},{key:"promises",get:function(){return W(this,q).map(function(l){return l._promise})}}])&&m(o.prototype,u),f&&m(o,f),i}(),q=new WeakMap;function _t(i,o,u,f,l,p){var w,I,G=0,Y=0,Z=0,Et=0,At=0,St=0,Mt=function(S){return((G*S+Y)*S+Z)*S},oe=function(S){return(3*G*S+2*Y)*S+Z},Ot=function(S){return S>=0?S:0-S};return G=1-(Z=3*o)-(Y=3*(f-o)-Z),Et=1-(St=3*u)-(At=3*(l-u)-St),w=i,I=function(S){return 1/(200*S)}(p),function(S){return((Et*S+At)*S+St)*S}(function(S,Ft){var st,vt,D,ct,Pt,xt;for(D=S,xt=0;xt<8;xt++){if(ct=Mt(D)-S,Ot(ct)<Ft)return D;if(Pt=oe(D),Ot(Pt)<1e-6)break;D-=ct/Pt}if((D=S)<(st=0))return st;if(D>(vt=1))return vt;for(;st<vt;){if(ct=Mt(D),Ot(ct-S)<Ft)return D;S>ct?st=D:vt=D,D=.5*(vt-st)+st}return D}(w,I))}var gt=function(i,o,u,f,l){var p=function(w,I,G,Y){return function(Z){return _t(Z,w,I,G,Y,1)}}(o,u,f,l);return p.displayName=i,p.x1=o,p.y1=u,p.x2=f,p.y2=l,b.a.formulas[i]=p},yt=function(i){return delete b.a.formulas[i]};t.d(e,"processTweens",function(){return b.c}),t.d(e,"Tweenable",function(){return b.a}),t.d(e,"tween",function(){return b.d}),t.d(e,"interpolate",function(){return dt}),t.d(e,"Scene",function(){return bt}),t.d(e,"setBezierFunction",function(){return gt}),t.d(e,"unsetBezierFunction",function(){return yt}),b.a.filters.token=n}])})});var $=J((we,zt)=>{var qt="Webkit Moz O ms".split(" "),ae=.001;function It(a,e,t){return a=a||Object.create(null),e=e||Object.create(null),t=t||!1,Object.keys(e).forEach(function(n){if(e.hasOwnProperty(n)){var c=a[n],y=e[n];t&&wt(c)&&wt(y)?a[n]=It(c,y,t):a[n]=y}}),a}function ue(a,e){var t=a;for(var n in e)if(e.hasOwnProperty(n)){var c=e[n],y="\\{"+n+"\\}",b=new RegExp(y,"g");t=t.replace(b,c)}return t}function Dt(a,e,t){for(var n=a.style,c=0;c<qt.length;++c){var y=qt[c];n[y+Lt(e)]=t}n[e]=t}function se(a,e){Rt(e,function(t,n){t!=null&&(wt(t)&&t.prefix===!0?Dt(a,n,t.value):a.style[n]=t)})}function Lt(a){return a.charAt(0).toUpperCase()+a.slice(1)}function ce(a){return typeof a=="string"||a instanceof String}function fe(a){return typeof a=="function"}function le(a){return Object.prototype.toString.call(a)==="[object Array]"}function wt(a){if(le(a))return!1;var e=typeof a;return e==="object"&&!!a}function Rt(a,e){for(var t in a)if(a.hasOwnProperty(t)){var n=a[t];e(n,t)}}function he(a,e){return Math.abs(a-e)<ae}function pe(a){for(;a.firstChild;)a.removeChild(a.firstChild)}zt.exports={extend:It,render:ue,setStyle:Dt,setStyles:se,capitalize:Lt,isString:ce,isFunction:fe,isObject:wt,forEachObject:Rt,floatEquals:he,removeChildren:pe}});var jt=J((be,Bt)=>{var Tt=Wt(),U=$(),de=Tt.Tweenable,Nt={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},z=function a(e,t){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");t=U.extend({delay:0,duration:800,easing:"linear",from:Object.create(null),to:Object.create(null),step:function(){}},t);var n;U.isString(e)?n=document.querySelector(e):n=e,this.path=n,this._opts=t,this._tweenable=null;var c=this.path.getTotalLength();this.path.style.strokeDasharray=c+" "+c,this.set(0)};z.prototype.value=function(){var e=this._getComputedDashOffset(),t=this.path.getTotalLength(),n=1-e/t;return parseFloat(n.toFixed(6),10)};z.prototype.set=function(e){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(e);var t=this._opts.step;if(U.isFunction(t)){var n=this._easing(this._opts.easing),c=this._calculateTo(e,n),y=this._opts.shape||this;t(c,y,this._opts.attachment)}};z.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()};z.prototype.animate=function(e,t,n){t=t||Object.create(null),U.isFunction(t)&&(n=t,t=Object.create(null));var c=U.extend(Object.create(null),t),y=U.extend(Object.create(null),this._opts);t=U.extend(y,t);var b=this._easing(t.easing),N=this._resolveFromAndTo(e,b,c);this.stop(),this.path.getBoundingClientRect();var B=this._getComputedDashOffset(),X=this._progressToOffset(e),A=this;this._tweenable=new de,this._tweenable.tween({from:U.extend({offset:B},N.from),to:U.extend({offset:X},N.to),duration:t.duration,delay:t.delay,easing:b,step:function(F){A.path.style.strokeDashoffset=F.offset;var H=t.shape||A;t.step(F,H,t.attachment)}}).then(function(F){U.isFunction(n)&&n()}).catch(function(F){throw console.error("Error in tweening:",F),F})};z.prototype._getComputedDashOffset=function(){var e=window.getComputedStyle(this.path,null);return parseFloat(e.getPropertyValue("stroke-dashoffset"),10)};z.prototype._progressToOffset=function(e){var t=this.path.getTotalLength();return t-e*t};z.prototype._resolveFromAndTo=function(e,t,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(t),to:this._calculateTo(e,t)}};z.prototype._calculateFrom=function(e){return Tt.interpolate(this._opts.from,this._opts.to,this.value(),e)};z.prototype._calculateTo=function(e,t){return Tt.interpolate(this._opts.from,this._opts.to,e,t)};z.prototype._stopTween=function(){this._tweenable!==null&&(this._tweenable.stop(!0),this._tweenable=null)};z.prototype._easing=function(e){return Nt.hasOwnProperty(e)?Nt[e]:e};Bt.exports=z});var ft=J((Se,Qt)=>{var ge=jt(),L=$(),tt="Object is destroyed",T=function a(e,t){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");if(arguments.length!==0){this._opts=L.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},t,!0),L.isObject(t)&&t.svgStyle!==void 0&&(this._opts.svgStyle=t.svgStyle),L.isObject(t)&&L.isObject(t.text)&&t.text.style!==void 0&&(this._opts.text.style=t.text.style);var n=this._createSvgView(this._opts),c;if(L.isString(e)?c=document.querySelector(e):c=e,!c)throw new Error("Container does not exist: "+e);this._container=c,this._container.appendChild(n.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&L.setStyles(n.svg,this._opts.svgStyle),this.svg=n.svg,this.path=n.path,this.trail=n.trail,this.text=null;var y=L.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new ge(n.path,y),L.isObject(this._opts.text)&&this._opts.text.value!==null&&this.setText(this._opts.text.value)}};T.prototype.animate=function(e,t,n){if(this._progressPath===null)throw new Error(tt);this._progressPath.animate(e,t,n)};T.prototype.stop=function(){if(this._progressPath===null)throw new Error(tt);this._progressPath!==void 0&&this._progressPath.stop()};T.prototype.pause=function(){if(this._progressPath===null)throw new Error(tt);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()};T.prototype.resume=function(){if(this._progressPath===null)throw new Error(tt);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()};T.prototype.destroy=function(){if(this._progressPath===null)throw new Error(tt);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,this.text!==null&&(this.text.parentNode.removeChild(this.text),this.text=null)};T.prototype.set=function(e){if(this._progressPath===null)throw new Error(tt);this._progressPath.set(e)};T.prototype.value=function(){if(this._progressPath===null)throw new Error(tt);return this._progressPath===void 0?0:this._progressPath.value()};T.prototype.setText=function(e){if(this._progressPath===null)throw new Error(tt);this.text===null&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),L.isObject(e)?(L.removeChildren(this.text),this.text.appendChild(e)):this.text.innerHTML=e};T.prototype._createSvgView=function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(t,e);var n=null;(e.trailColor||e.trailWidth)&&(n=this._createTrail(e),t.appendChild(n));var c=this._createPath(e);return t.appendChild(c),{svg:t,path:c,trail:n}};T.prototype._initializeSvg=function(e,t){e.setAttribute("viewBox","0 0 100 100")};T.prototype._createPath=function(e){var t=this._pathString(e);return this._createPathElement(t,e)};T.prototype._createTrail=function(e){var t=this._trailString(e),n=L.extend(Object.create(null),e);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(t,n)};T.prototype._createPathElement=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",e),n.setAttribute("stroke",t.color),n.setAttribute("stroke-width",t.strokeWidth),t.fill?n.setAttribute("fill",t.fill):n.setAttribute("fill-opacity","0"),n};T.prototype._createTextContainer=function(e,t){var n=document.createElement("div");n.className=e.text.className;var c=e.text.style;return c&&(e.text.autoStyleContainer&&(t.style.position="relative"),L.setStyles(n,c),c.color||(n.style.color=e.color)),this._initializeTextContainer(e,t,n),n};T.prototype._initializeTextContainer=function(a,e,t){};T.prototype._pathString=function(e){throw new Error("Override this function for each progress bar")};T.prototype._trailString=function(e){throw new Error("Override this function for each progress bar")};T.prototype._warnContainerAspectRatio=function(e){if(this.containerAspectRatio){var t=window.getComputedStyle(e,null),n=parseFloat(t.getPropertyValue("width"),10),c=parseFloat(t.getPropertyValue("height"),10);L.floatEquals(this.containerAspectRatio,n/c)||(console.warn("Incorrect aspect ratio of container","#"+e.id,"detected:",t.getPropertyValue("width")+"(width)","/",t.getPropertyValue("height")+"(height)","=",n/c),console.warn("Aspect ratio of should be",this.containerAspectRatio))}};Qt.exports=T});var Ht=J((Oe,Gt)=>{var Vt=ft(),ve=$(),nt=function(e,t){this._pathTemplate=t.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",Vt.apply(this,arguments)};nt.prototype=new Vt;nt.prototype.constructor=nt;nt.prototype._initializeSvg=function(e,t){var n=t.vertical?"0 0 "+t.strokeWidth+" 100":"0 0 100 "+t.strokeWidth;e.setAttribute("viewBox",n),e.setAttribute("preserveAspectRatio","none")};nt.prototype._pathString=function(e){return ve.render(this._pathTemplate,{center:e.strokeWidth/2})};nt.prototype._trailString=function(e){return this._pathString(e)};Gt.exports=nt});var Ct=J((Pe,Xt)=>{var Ut=ft(),_e=$(),lt=function(e,t){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,Ut.apply(this,arguments)};lt.prototype=new Ut;lt.prototype.constructor=lt;lt.prototype._pathString=function(e){var t=e.strokeWidth;e.trailWidth&&e.trailWidth>e.strokeWidth&&(t=e.trailWidth);var n=50-t/2;return _e.render(this._pathTemplate,{radius:n,"2radius":n*2})};lt.prototype._trailString=function(e){return this._pathString(e)};Xt.exports=lt});var $t=J((xe,Zt)=>{var Jt=ft(),Kt=Ct(),Yt=$(),et=function(e,t){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,Jt.apply(this,arguments)};et.prototype=new Jt;et.prototype.constructor=et;et.prototype._initializeSvg=function(e,t){e.setAttribute("viewBox","0 0 100 50")};et.prototype._initializeTextContainer=function(e,t,n){e.text.style&&(n.style.top="auto",n.style.bottom="0",e.text.alignToBottom?Yt.setStyle(n,"transform","translate(-50%, 0)"):Yt.setStyle(n,"transform","translate(-50%, 50%)"))};et.prototype._pathString=Kt.prototype._pathString;et.prototype._trailString=Kt.prototype._trailString;Zt.exports=et});var ne=J((ke,re)=>{var te=ft(),ee=$(),ht=function(e,t){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",te.apply(this,arguments)};ht.prototype=new te;ht.prototype.constructor=ht;ht.prototype._pathString=function(e){var t=100-e.strokeWidth/2;return ee.render(this._pathTemplate,{width:t,strokeWidth:e.strokeWidth,halfOfStrokeWidth:e.strokeWidth/2})};ht.prototype._trailString=function(e){var t=100-e.strokeWidth/2;return ee.render(this._trailTemplate,{width:t,strokeWidth:e.strokeWidth,halfOfStrokeWidth:e.strokeWidth/2,startMargin:e.strokeWidth/2-e.trailWidth/2})};re.exports=ht});var ye=J((Te,ie)=>{ie.exports={Line:Ht(),Circle:Ct(),SemiCircle:$t(),Square:ne(),Path:jt(),Shape:ft(),utils:$()}});ye();})();
/*! Bundled license information:

shifty/dist/shifty.js:
  (*! Shifty 2.8.3 - https://github.com/jeremyckahn/shifty *)
  (*!
   * All equations are adapted from Thomas Fuchs'
   * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
   *
   * Based on Easing Equations (c) 2003 [Robert
   * Penner](http://www.robertpenner.com/), all rights reserved. This work is
   * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
   *)
  (*!
   *  TERMS OF USE - EASING EQUATIONS
   *  Open source under the BSD License.
   *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
   *)
*/
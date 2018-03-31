/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(n,t,e,o){"use strict";function i(n,t,e,o,i,c,l){let f=e.n+(o||g),u=e[f];if(u||(u=e[f=e.n+g]),u){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[f]){l=u.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,l,e.length&&e[e.length-1].nextSibling||o.l),c[f]=!0,n.i.set(o,c)}}}function c(n){return{f:n[0],u:n[1],r:!!n[2],s:!!n[3],a:!!n[4]}}function l(n,t){if(E(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function f(n,t,e,o){const i=n.p.get(t);i&&((o=i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),!o.length&&i.$initLoad()),n.p.delete(t))}function u(n,t,e){let o=null,i=!1,c=!1;for(var l=arguments.length;l-- >2;)O.push(arguments[l]);for(;O.length;)if((e=O.pop())&&void 0!==e.pop)for(l=e.length;l--;)O.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].d+=e:null===o?o=[c?{d:e}:e]:o.push(c?{d:e}:e),i=c;if(t&&(t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&O.push(l);t.class=O.join(" "),O.length=0}return"function"==typeof n?n(Object.assign({},t,{m:o})):{v:n,y:o,d:null,b:t,w:t&&t.M,k:null,g:!1}}function r(n,t){n.C.has(t)||(n.C.set(t,!0),n.W.add(()=>{(function n(t,e,o,i,c){if(t.C.delete(e),!t.x.has(e)){let l;if(i=t.N.get(e),o=!i){if((c=t.p.get(e))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(t,e)});i=function l(n,t,e,o,i,c){try{(function l(n,t,e,o,i,c){for(c in n.j.set(o,e),n.S.has(e)||n.S.set(e,{}),(i=Object.assign({color:{type:String}},t.properties)).mode={type:String},i)a(n,i[c],e,o,c)})(n,o=n.A(t).O,t,e=new o)}catch(o){e={},n.T(o,7,t,!0)}return n.N.set(t,e),e}(t,e)}l&&l.then?l.then(()=>s(t,e,i,o)):s(t,e,i,o)}})(n,t)},n.L?1:3))}function s(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.O.host;let l;if(o.render||o.hostData||i||l){n.R=!0;const i=o.render&&o.render();let l;n.R=!1;const f=n.q.get(e)||{};f.k=e;const r=u(null,l,i),s=n.render(f,r,c,n.B.get(e),n.D.get(e),t.O.encapsulation);n.q.set(e,s)}n.H(n,n.P,t,o.mode,e),e.$rendered=!0,e.$onRender&&(e.$onRender.forEach(n=>n()),e.$onRender=null)}catch(t){n.R=!1,n.T(t,8,e,!0)}})(n,n.A(t),t,e,!o);try{o?t.$initLoad():y(n.q.get(t))}catch(e){n.T(e,6,t,!0)}}function a(n,t,e,o,i){if(t.type||t.state){const c=n.S.get(e);if(!t.state){if(t.attr&&(void 0===c[i]||""===c[i])){const o=n.P.F(e,t.attr);null!=o&&(c[i]=l(t.type,o))}e.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[A+i]=t.watchCallbacks.slice()),d(o,i,function c(t){return(t=n.S.get(n.j.get(this)))&&t[i]},function f(e,o){(o=n.j.get(this))&&(t.state||t.mutable)&&p(n,o,i,e)})}}function p(n,t,e,o,i,c,l){(i=n.S.get(t))||n.S.set(t,i={}),o!==i[e]&&(i[e]=o,n.N.get(t)&&(i[A+e],!n.R&&t.$rendered&&r(n,t)))}function d(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function m(n,t,e,o,i,c,l,f,u){if("class"!==e||c)if("style"===e){for(f in o=o||C,i=i||C,o)i[f]||(t.style[f]="");for(f in i)i[f]!==o[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.A(t);o&&o.U&&o.U[e]?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&function r(n,t,e){const o=t!==(t=t.replace(/^xlink\:?/,"")),i=T[t];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),o?n.setAttributeNS(L,j(t),e):n.setAttribute(t,e)):o?n.removeAttributeNS(L,j(t)):n.removeAttribute(t)}(t,e,i);else e=j(e)in t?j(e.substring(2)):j(e[2])+e.substring(3),i?i!==o&&n.P.z(t,e,i):n.P.I(t,e);else if(o!==i){const n=null==o||""===o?W:o.trim().split(/\s+/),e=null==i||""===i?W:i.trim().split(/\s+/);let c=null==t.className||""===t.className?W:t.className.trim().split(/\s+/);for(f=0,u=n.length;f<u;f++)-1===e.indexOf(n[f])&&(c=c.filter(t=>t!==n[f]));for(f=0,u=e.length;f<u;f++)-1===n.indexOf(e[f])&&(c=[...c,e[f]]);t.className=c.join(" ")}}function v(n,t,e){try{n[t]=e}catch(n){}}function h(n,t,e,o,i){const c=11===e.k.nodeType&&e.k.host?e.k.host:e.k,l=t&&t.b||C,f=e.b||C;for(i in l)f&&null!=f[i]||null==l[i]||m(n,c,i,l[i],void 0,o,e.g);for(i in f)i in l&&f[i]===("value"===i||"checked"===i?c[i]:l[i])||m(n,c,i,l[i],f[i],o,e.g)}function y(n,t){n&&(n.b&&n.b.ref&&n.b.ref(t?null:n.k),n.y&&n.y.forEach(n=>{y(n,t)}))}function b(n,t,e,o,i){const c=n.Q(t);let l,f,u,r;if(i&&1===c){(f=n.F(t,k))&&(u=f.split("."))[0]===o&&((r={}).v=n.Z(r.k=t),e.y||(e.y=[]),e.y[u[1]]=r,e=r,i=""!==u[2]);for(let c=0;c<t.childNodes.length;c++)b(n,t.childNodes[c],e,o,i)}else 3===c&&(l=t.previousSibling)&&8===n.Q(l)&&"s"===(u=n.G(l).split("."))[0]&&u[1]===o&&((r={d:n.G(t)}).k=t,e.y||(e.y=[]),e.y[u[2]]=r)}function w(n,t,e,o){e.connectedCallback=function(){(function e(n,t,o){n.x.delete(o),n.J.has(o)||(n.J.set(o,!0),function i(n,t,e){for(e=t;e=n.P.K(e);)if(n.V(e)){n.X.has(t)||(n.p.set(t,e),(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.W.add(()=>{n.Y(t,o),n.loadBundle(t,o.mode,()=>r(n,o))},3))})(n,t,this)},e.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,f,u){if(n&&o!==c)for(f in n)if((u=n[f])._&&j(u._)===j(e)){t[f]=l(u.nn,c);break}})(t.U,this,n,e,o)},e.disconnectedCallback=function(){(function t(n,e,o){!n.tn&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.Q(t);t=n.o(t)}}(n.P,e)&&(n.x.set(e,!0),f(n,e),y(n.q.get(e),!0),n.P.I(e),n.en.delete(e))})(n,this)},e.$initLoad=function(){(function t(n,e,o,i,c){if(!n.X.has(e)&&n.N.get(e)&&!n.x.has(e)&&(!e.$activeLoading||!e.$activeLoading.length)){delete e.$activeLoading,n.X.set(e,!0);try{y(n.q.get(e)),(c=n.on.get(e))&&(c.forEach(n=>n(e)),n.on.delete(e))}catch(t){n.T(t,4,e)}e.classList.add(o),f(n,e)}})(n,this,o)},e.forceUpdate=function(){r(n,this)},function i(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].in;1===i||2===i?d(e,o,function t(){return(n.S.get(this)||{})[o]},function t(e){p(n,this,o,e)}):6===i&&function c(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}(e,o,S)})}(n,t.U,e)}function M(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.cn.querySelector(e)),i||(i=t[e]=n.ln(e),n.fn(n.cn,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const $="data-ssrv",k="data-ssrc",g="$",C={},W=[],x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},E=n=>void 0!==n&&null!==n,N=n=>void 0===n||null===n,j=n=>n.toLowerCase(),S=()=>{},O=[],A="wc-",T={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},L="http://www.w3.org/1999/xlink";let R=!1;(function q(t,e,o,l,f,r){const s={html:{}},a={},p=o[t]=o[t]||{},d=function m(n,t,e){n.un||(n.un=((n,t,e,o)=>n.addEventListener(t,e,o)),n.rn=((n,t,e,o)=>n.removeEventListener(t,e,o)));const o=new WeakMap,i={sn:e.documentElement,t:e.head,cn:e.body,an:!1,Q:n=>n.nodeType,ln:n=>e.createElement(n),pn:(n,t)=>e.createElementNS(n,t),dn:n=>e.createTextNode(n),mn:n=>e.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),vn:n=>n.remove(),fn:(n,t)=>n.appendChild(t),hn:n=>n.childNodes,o:n=>n.parentNode,yn:n=>n.nextSibling,Z:n=>j(n.tagName),G:n=>n.textContent,bn:(n,t)=>n.textContent=t,F:(n,t)=>n.getAttribute(t),wn:(n,t,e)=>n.setAttribute(t,e),Mn:(n,t,e,o)=>n.setAttributeNS(t,e,o),$n:(n,t)=>n.removeAttribute(t),kn:(n,o)=>"child"===o?n.firstElementChild:"parent"===o?i.K(n):"body"===o?i.cn:"document"===o?e:"window"===o?t:n,z:(t,e,c,l,f,u,r,s)=>{const a=e;let p=t,d=o.get(t);if(d&&d[a]&&d[a](),"string"==typeof u?p=i.kn(t,u):"object"==typeof u?p=u:(s=e.split(":")).length>1&&(p=i.kn(t,s[0]),e=s[1]),!p)return;let m=c;(s=e.split(".")).length>1&&(e=s[0],m=(n=>{n.keyCode===x[s[1]]&&c(n)})),r=i.an?{capture:!!l,passive:!!f}:!!l,n.un(p,e,m,r),d||o.set(t,d={}),d[a]=(()=>{p&&n.rn(p,e,m,r),d[a]=null})},I:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(n=>{e[n]&&e[n]()}))},gn:(n,t)=>n.attachShadow(t)};return i.e=!!i.sn.attachShadow,i.Cn=((n,e,o)=>n&&n.dispatchEvent(new t.CustomEvent(e,o))),i.K=((n,t)=>(t=i.o(n))&&11===i.Q(t)?t.host:t),i}(p,o,l);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=l,e.resourcesUrl=e.publicPath=f,p.h=u,p.Context=e;const v=o.$definedCmps=o.$definedCmps||{},y={Y:function k(n,t){t.mode||(t.mode=d.F(t,"mode")||e.mode),d.F(t,$)||function o(n,t){return n&&1===t.encapsulation}(d.e,n)||function i(n,t,e,o,c,l,f,u,r){for(e.$defaultHolder||t.c(e,e.$defaultHolder=t.mn(""),o[0]),r=0;r<o.length;r++)c=o[r],1===t.Q(c)&&null!=(l=t.F(c,"slot"))?(u=u||{})[l]?u[l].push(c):u[l]=[c]:f?f.push(c):f=[c];n.B.set(e,f),n.D.set(e,u)}(y,d,t,t.childNodes),d.e||1!==n.encapsulation||(t.shadowRoot=t)},P:d,Wn:function C(n,t){if(!v[n.n]){v[n.n]=!0,w(y,n,t.prototype,r);{const e=[];for(const t in n.U)n.U[t]._&&e.push(n.U[t]._);t.observedAttributes=e}o.customElements.define(n.n,t)}},xn:e.emit,A:n=>s[d.Z(n)],En:n=>e[n],isClient:!0,V:n=>!(!v[d.Z(n)]&&!y.A(n)),loadBundle:function W(n,t,e){if(n.O)e();else{const o="string"==typeof n.Nn?n.Nn:n.Nn[t],i=f+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(d.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.O=t[(n=>j(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||g);if(!t[i]){const e=n.ln("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.fn(n.t,e)}}}(d,n,n.O)}catch(t){n.O=class{}}e()}).catch(n=>void 0)}},T:(n,t,e)=>void 0,jn:n=>(function t(n,e,o){return{create:M(n,e,o,"create"),componentOnReady:M(n,e,o,"componentOnReady")}})(d,a,n),W:function S(t,e,o,i){function c(){for(;s.length>0;)s.shift()();o=!1}function l(n){for(n=u(),c();a.length>0&&u()-n<40;)a.shift()();(i=a.length>0)&&t.raf(f)}function f(n){for(c(),n=4+u();a.length>0&&u()<n;)a.shift()();(i=a.length>0)&&t.raf(l)}const u=()=>e.performance.now(),r=Promise.resolve(),s=[],a=[];return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{add:(n,e)=>{3===e?(s.push(n),o||(o=!0,r.then(c))):(a.push(n),i||(i=!0,t.raf(l)))}}}(p,o),p:new WeakMap,i:new WeakMap,B:new WeakMap,J:new WeakMap,en:new WeakMap,X:new WeakMap,j:new WeakMap,N:new WeakMap,x:new WeakMap,C:new WeakMap,D:new WeakMap,on:new WeakMap,Sn:new WeakMap,q:new WeakMap,S:new WeakMap};y.render=function O(n,t){function e(o,i,l,f,u,r,m,v,y){if(!p&&"slot"===o.v){if((s||a)&&(d&&t.wn(i,d+"-slot",""),m=o.b&&o.b.name,v=E(m)?a&&a[m]:s,E(v))){for(n.tn=!0,f=0;f<v.length;f++)r=v[f],t.vn(r),t.fn(i,r),8!==r.nodeType&&(y=!0);!y&&o.y&&c(i,[],o.y),n.tn=!1}return null}if(E(o.d))o.k=t.dn(o.d);else{u=o.k=t.ln(o.v),h(n,null,o,R),null!==d&&u.On!==d&&t.wn(u,u.On=d,"");const i=o.y;if(i)for(f=0;f<i.length;++f)(r=e(i[f],u))&&t.fn(u,r)}return o.k}function o(n,o,i,c,l,f,u){const r=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=l;++c)u=i[c],E(u)&&(f=E(u.d)?t.dn(u.d):e(u,n),E(f)&&(u.k=f,t.c(r,f,o)))}function i(n,e,o){for(;e<=o;++e)E(n[e])&&t.vn(n[e].k)}function c(n,c,r){let s,a,p,d,m=0,v=0,h=c.length-1,y=c[0],b=c[h],w=r.length-1,M=r[0],$=r[w];for(;m<=h&&v<=w;)null==y?y=c[++m]:null==b?b=c[--h]:null==M?M=r[++v]:null==$?$=r[--w]:l(y,M)?(u(y,M),y=c[++m],M=r[++v]):l(b,$)?(u(b,$),b=c[--h],$=r[--w]):l(y,$)?(u(y,$),t.c(n,y.k,t.yn(b.k)),y=c[++m],$=r[--w]):l(b,M)?(u(b,M),t.c(n,b.k,y.k),b=c[--h],M=r[++v]):(N(s)&&(s=f(c,m,h)),a=s[M.w],N(a)?(d=e(M,n),M=r[++v]):((p=c[a]).v!==M.v?d=e(M,n):(u(p,M),c[a]=void 0,d=p.k),M=r[++v]),d&&t.c(y.k&&y.k.parentNode||n,d,y.k));m>h?o(n,null==r[w+1]?null:r[w+1].k,r,v,w):v>w&&i(c,m,h)}function l(n,t){return n.v===t.v&&n.w===t.w}function f(n,t,e){const o={};let i,c,l;for(i=t;i<=e;++i)null!=(l=n[i])&&void 0!==(c=l.w)&&(o.An=i);return o}function u(e,l){const f=l.k=e.k,u=e.y,r=l.y;let s;if(N(l.d))"slot"!==l.v&&h(n,e,l,R),E(u)&&E(r)?c(f,u,r):E(r)?(E(e.d)&&t.bn(f,""),o(f,null,r,0,r.length-1)):E(u)&&i(u,0,u.length-1);else if(s=n.B.get(f)){const e=s[0].parentElement;t.bn(e,l.d),n.B.set(f,[e.childNodes[0]])}else e.d!==l.d&&t.bn(f,l.d)}let r,s,a,p,d;return function n(e,o,i,c,l,f,m){return r=i,s=c,a=l,d="scoped"===f||"shadow"===f&&!t.e?"data-"+t.Z(e.k):null,p="shadow"===f&&t.e,r||(p?e.k=t.gn(e.k,{mode:"open"}):d&&t.wn(e.k,d+"-host","")),u(e,o),o}}(y,d);const A=d.sn;A.$rendered=!0,A.$activeLoading=[],A.$initLoad=(()=>{y.X.set(A,p.loaded=y.L=!0),d.Cn(o,"appload",{detail:{namespace:t}})}),function T(n,t,e){const o=e.querySelectorAll(`[${$}]`),i=o.length;let c,l,f,u,r,s;if(i>0)for(n.X.set(e,!0),u=0;u<i;u++)for(c=o[u],l=t.F(c,$),(f={}).v=t.Z(f.k=c),n.q.set(c,f),r=0,s=c.childNodes.length;r<s;r++)b(t,c.childNodes[r],f,l,!0)}(y,d,A),y.H=i,(p.components||[]).map(n=>(function t(n,e,o,i){const l={n:n[0],U:{color:{_:"color"}}};l.Nn=n[1];const f=n[3];if(f)for(o=0;o<f.length;o++)i=f[o],l.U[i[0]]={in:i[1],Tn:!!i[2],_:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,nn:i[4]};return l.encapsulation=n[4],n[5]&&(l.Ln=n[5].map(c)),e[l.n]=l})(n,s)).forEach(n=>y.Wn(n,class extends HTMLElement{})),function L(n,t){t.componentOnReady=((t,e)=>{if(n.A(t)&&!n.X.has(t)){const o=n.on.get(t)||[];o.push(e),n.on.set(t,o)}else e(t)}),t.$r&&t.$r.forEach(n=>t.componentOnReady(n[0],n[1])),t.$r=null}(y,p),p.initialized=!0,d.Cn(n,"appinit",{detail:{namespace:t}})})(o,e,n,t,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilApp","hydrated");
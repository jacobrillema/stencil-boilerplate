/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(n,t,e,o){"use strict";function i(n,t,e,o,i,c,f){let l=e.n+(o||C),r=e[l];if(r||(r=e[l=e.n+C]),r){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[l]){f=r.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,f,e.length&&e[e.length-1].nextSibling||o.f),c[l]=!0,n.i.set(o,c)}}}function c(n){return{l:n[0],r:n[1],u:!!n[2],s:!!n[3],a:!!n[4]}}function f(n,t){if(N(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function l(n,t,e,o){const i=n.p.get(t);i&&((o=i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),!o.length&&i.$initLoad()),n.p.delete(t))}function r(n,t,e){let o,i=null,c=!1,f=!1;for(var l=arguments.length;l-- >2;)A.push(arguments[l]);for(;A.length>0;)if((e=A.pop())&&void 0!==e.pop)for(l=e.length;l--;)A.push(e[l]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(f=!1)),f&&c?i[i.length-1].d+=e:null===i?i=[f?{d:e}:e]:i.push(f?{d:e}:e),c=f;if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(l in t.class)t.class[l]&&A.push(l);t.class=A.join(" "),A.length=0}null!=t.m&&(o=t.m)}return"function"==typeof n?n(Object.assign({},t,{v:i})):{y:n,b:i,d:void 0,w:t,M:o,k:void 0,g:!1}}function u(n,t){n.C.has(t)||(n.C.set(t,!0),n.W.add(()=>{(function n(t,e,o,i,c){if(t.C.delete(e),!t.x.has(e)){let f;if(i=t.N.get(e),o=!i){if((c=t.p.get(e))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(t,e)});i=function f(n,t,e,o,i,c){try{(function f(n,t,e,o,i,c){for(c in n.j.set(o,e),n.O.has(e)||n.O.set(e,{}),(i=Object.assign({color:{type:String}},t.properties)).mode={type:String},i)a(n,i[c],e,o,c)})(n,o=n.S(t).A,t,e=new o)}catch(o){e={},n.T(o,7,t,!0)}return n.N.set(t,e),e}(t,e)}f&&f.then?f.then(()=>s(t,e,i,o)):s(t,e,i,o)}})(n,t)},n.L?1:3))}function s(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.A.host;let f;if(o.render||o.hostData||i||f){n.R=!0;const i=o.render&&o.render();let f;n.R=!1;const l=n.q.get(e)||{};l.k=e;const u=r(null,f,i),s=n.render(l,u,c,t.A.encapsulation,{});n.q.set(e,s)}n.B(n,n.D,t,o.mode,e),e.$rendered=!0,e.$onRender&&(e.$onRender.forEach(n=>n()),e.$onRender=null)}catch(t){n.R=!1,n.T(t,8,e,!0)}})(n,n.S(t),t,e,!o);try{o?t.$initLoad():b(n.q.get(t))}catch(e){n.T(e,6,t,!0)}}function a(n,t,e,o,i){if(t.type||t.state){const c=n.O.get(e);if(!t.state){if(t.attr&&(void 0===c[i]||""===c[i])){const o=n.D.H(e,t.attr);null!=o&&(c[i]=f(t.type,o))}e.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[S+i]=t.watchCallbacks.slice()),d(o,i,function c(t){return(t=n.O.get(n.j.get(this)))&&t[i]},function l(e,o){(o=n.j.get(this))&&(t.state||t.mutable)&&p(n,o,i,e)})}}function p(n,t,e,o,i,c,f){(i=n.O.get(t))||n.O.set(t,i={}),o!==i[e]&&(i[e]=o,n.N.get(t)&&(i[S+e],!n.R&&t.$rendered&&u(n,t)))}function d(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function m(n,t,e,o,i,c,f,l,r){if("class"!==e||c)if("style"===e){for(l in o=o||W,i=i||W,o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.S(t);o&&o.P&&o.P[e]?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&function u(n,t,e){const o=t!==(t=t.replace(/^xlink\:?/,"")),i=T[t];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),o?n.setAttributeNS(L,j(t),e):n.setAttribute(t,e)):o?n.removeAttributeNS(L,j(t)):n.removeAttribute(t)}(t,e,i);else e=j(e)in t?j(e.substring(2)):j(e[2])+e.substring(3),i?i!==o&&n.D.F(t,e,i):n.D.U(t,e);else if(o!==i){const n=null==o||""===o?x:o.trim().split(/\s+/),e=null==i||""===i?x:i.trim().split(/\s+/);let c=null==t.className||""===t.className?x:t.className.trim().split(/\s+/);for(l=0,r=n.length;l<r;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,r=e.length;l<r;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function v(n,t,e){try{n[t]=e}catch(n){}}function y(n,t,e,o,i){const c=11===e.k.nodeType&&e.k.host?e.k.host:e.k,f=t&&t.w||W,l=e.w||W;for(i in f)l&&null!=l[i]||null==f[i]||m(n,c,i,f[i],void 0,o,e.g);for(i in l)i in f&&l[i]===("value"===i||"checked"===i?c[i]:f[i])||m(n,c,i,f[i],l[i],o,e.g)}function h(n,t){function e(o,i,c,f,l,r,u,a,p){if(N(o.d))o.k=t.z(o.d);else{l=o.k=t.I(o.y),y(n,null,o,R),N(s)&&l.Q!==s&&t.Z(l,l.Q=s,"");const i=o.b;if(i)for(f=0;f<i.length;++f)(r=e(i[f]))&&t.G(l,r)}return o.k}function o(n,o,i,c,f,l,r,u){for(l=n.$defaultHolder&&t.o(n.$defaultHolder)||n;c<=f;++c)(u=i[c])&&(r=N(u.d)?t.z(u.d):e(u))&&(u.k=r,t.c(l,r,o))}function i(n,e,o){for(;e<=o;++e)N(n[e])&&t.J(n[e].k)}function c(n,t){return n.y===t.y&&n.M===t.M}function f(n,t,e){const o={};let i,c,f;for(i=t;i<=e;++i)null!=(f=n[i])&&void 0!==(c=f.M)&&(o.K=i);return o}function l(r,u,s){const a=u.k=r.k,p=r.b,d=u.b;N(u.d)?r.d!==u.d&&t.V(a,u.d):("slot"!==u.y&&y(n,r,u,R),N(p)&&N(d)?function m(n,r,u){let s,a,p,d,m=0,v=0,y=r.length-1,h=r[0],b=r[y],w=u.length-1,M=u[0],$=u[w];for(;m<=y&&v<=w;)null==h?h=r[++m]:null==b?b=r[--y]:null==M?M=u[++v]:null==$?$=u[--w]:c(h,M)?(l(h,M),h=r[++m],M=u[++v]):c(b,$)?(l(b,$),b=r[--y],$=u[--w]):c(h,$)?(l(h,$),t.c(n,h.k,t.X(b.k)),h=r[++m],$=u[--w]):c(b,M)?(l(b,M),t.c(n,b.k,h.k),b=r[--y],M=u[++v]):(N(s)||(s=f(r,m,y)),a=s[M.M],N(a)?((p=r[a]).y!==M.y?d=e(M):(l(p,M),r[a]=void 0,d=p.k),M=u[++v]):(d=e(M),M=u[++v]),d&&t.c(h.k&&h.k.parentNode||n,d,h.k));m>y?o(n,null==u[w+1]?null:u[w+1].k,u,v,w):v>w&&i(r,m,y)}(a,p,d):N(d)?(N(r.d)&&t.V(a,""),o(a,null,d,0,d.length-1)):N(p)&&i(p,0,p.length-1))}let r,u,s;return function n(e,o,i,c,f,s){return r=f,u="shadow"===c&&t.e,i||u&&(e.k=t.Y(e.k,{mode:"open"})),l(e,o),o}}function b(n,t){n&&(n.w&&n.w.ref&&n.w.ref(t?null:n.k),n.b&&n.b.forEach(n=>{b(n,t)}))}function w(n,t,e,o,i){const c=n._(t);let f,l,r,u;if(i&&1===c){(l=n.H(t,g))&&(r=l.split("."))[0]===o&&((u={}).y=n.nn(u.k=t),e.b||(e.b=[]),e.b[r[1]]=u,e=u,i=""!==r[2]);for(let c=0;c<t.childNodes.length;c++)w(n,t.childNodes[c],e,o,i)}else 3===c&&(f=t.previousSibling)&&8===n._(f)&&"s"===(r=n.tn(f).split("."))[0]&&r[1]===o&&((u={d:n.tn(t)}).k=t,e.b||(e.b=[]),e.b[r[2]]=u)}function M(n,t,e,o){e.connectedCallback=function(){(function e(n,t,o){n.x.delete(o),n.en.has(o)||(n.en.set(o,!0),function i(n,t,e){for(e=t;e=n.D.on(e);)if(n.in(e)){n.cn.has(t)||(n.p.set(t,e),(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.W.add(()=>{n.fn(t,o),n.loadBundle(t,o.mode,()=>u(n,o))},3))})(n,t,this)},e.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,l,r){if(n&&o!==c)for(l in n)if((r=n[l]).ln&&j(r.ln)===j(e)){t[l]=f(r.rn,c);break}})(t.P,this,n,e,o)},e.disconnectedCallback=function(){(function t(n,e,o){!n.un&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n._(t);t=n.o(t)}}(n.D,e)&&(n.x.set(e,!0),l(n,e),b(n.q.get(e),!0),n.D.U(e),n.sn.delete(e))})(n,this)},e.$initLoad=function(){(function t(n,e,o,i,c){if(!n.cn.has(e)&&n.N.get(e)&&!n.x.has(e)&&(!e.$activeLoading||!e.$activeLoading.length)){delete e.$activeLoading,n.cn.set(e,!0);try{b(n.q.get(e)),(c=n.an.get(e))&&(c.forEach(n=>n(e)),n.an.delete(e))}catch(t){n.T(t,4,e)}e.classList.add(o),l(n,e)}})(n,this,o)},e.forceUpdate=function(){u(n,this)},function i(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].pn;1===i||2===i?d(e,o,function t(){return(n.O.get(this)||{})[o]},function t(e){p(n,this,o,e)}):6===i&&function c(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}(e,o,O)})}(n,t.P,e)}function $(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.dn.querySelector(e)),i||(i=t[e]=n.I(e),n.G(n.dn,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const k="data-ssrv",g="data-ssrc",C="$",W={},x=[],E={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},N=n=>null!=n,j=n=>n.toLowerCase(),O=()=>{},A=[],S="wc-",T={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},L="http://www.w3.org/1999/xlink";let R=!1;(function q(t,e,o,f,l,u){const s={html:{}},a={},p=o[t]=o[t]||{},d=function m(n,t,e){n.mn||(n.mn=((n,t,e,o)=>n.addEventListener(t,e,o)),n.vn=((n,t,e,o)=>n.removeEventListener(t,e,o)));const o=new WeakMap,i={yn:e.documentElement,t:e.head,dn:e.body,hn:!1,_:n=>n.nodeType,I:n=>e.createElement(n),bn:(n,t)=>e.createElementNS(n,t),z:n=>e.createTextNode(n),wn:n=>e.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),J:n=>n.remove(),G:(n,t)=>n.appendChild(t),Mn:n=>n.childNodes,o:n=>n.parentNode,X:n=>n.nextSibling,nn:n=>j(n.tagName),tn:n=>n.textContent,V:(n,t)=>n.textContent=t,H:(n,t)=>n.getAttribute(t),Z:(n,t,e)=>n.setAttribute(t,e),$n:(n,t,e,o)=>n.setAttributeNS(t,e,o),kn:(n,t)=>n.removeAttribute(t),gn:(n,o)=>"child"===o?n.firstElementChild:"parent"===o?i.on(n):"body"===o?i.dn:"document"===o?e:"window"===o?t:n,F:(t,e,c,f,l,r,u,s)=>{const a=e;let p=t,d=o.get(t);if(d&&d[a]&&d[a](),"string"==typeof r?p=i.gn(t,r):"object"==typeof r?p=r:(s=e.split(":")).length>1&&(p=i.gn(t,s[0]),e=s[1]),!p)return;let m=c;(s=e.split(".")).length>1&&(e=s[0],m=(n=>{n.keyCode===E[s[1]]&&c(n)})),u=i.hn?{capture:!!f,passive:!!l}:!!f,n.mn(p,e,m,u),d||o.set(t,d={}),d[a]=(()=>{p&&n.vn(p,e,m,u),d[a]=null})},U:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(n=>{e[n]&&e[n]()}))},Y:(n,t)=>n.attachShadow(t)};return i.e=!!i.yn.attachShadow,i.Cn=((n,e,o)=>n&&n.dispatchEvent(new t.CustomEvent(e,o))),i.on=((n,t)=>(t=i.o(n))&&11===i._(t)?t.host:t),i}(p,o,f);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=f,e.resourcesUrl=e.publicPath=l,p.h=r,p.Context=e;const v=o.$definedCmps=o.$definedCmps||{},y={fn:function b(n,t){t.mode||(t.mode=d.H(t,"mode")||e.mode)},D:d,Wn:function g(n,t){if(!v[n.n]){v[n.n]=!0,M(y,n,t.prototype,u);{const e=[];for(const t in n.P)n.P[t].ln&&e.push(n.P[t].ln);t.observedAttributes=e}o.customElements.define(n.n,t)}},xn:e.emit,S:n=>s[d.nn(n)],En:n=>e[n],isClient:!0,in:n=>!(!v[d.nn(n)]&&!y.S(n)),loadBundle:function W(n,t,e){if(n.A)e();else{const o="string"==typeof n.Nn?n.Nn:n.Nn[t],i=l+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(d.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.A=t[(n=>j(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||C);if(!t[i]){const e=n.I("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.G(n.t,e)}}}(d,n,n.A)}catch(t){n.A=class{}}e()}).catch(n=>void 0)}},T:(n,t,e)=>void 0,jn:n=>(function t(n,e,o){return{create:$(n,e,o,"create"),componentOnReady:$(n,e,o,"componentOnReady")}})(d,a,n),W:function x(t,e,o,i){function c(){for(;s.length>0;)s.shift()();o=!1}function f(n){for(n=r(),c();a.length>0&&r()-n<40;)a.shift()();(i=a.length>0)&&t.raf(l)}function l(n){for(c(),n=4+r();a.length>0&&r()<n;)a.shift()();(i=a.length>0)&&t.raf(f)}const r=()=>e.performance.now(),u=Promise.resolve(),s=[],a=[];return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{add:(n,e)=>{3===e?(s.push(n),o||(o=!0,u.then(c))):(a.push(n),i||(i=!0,t.raf(f)))}}}(p,o),p:new WeakMap,i:new WeakMap,en:new WeakMap,sn:new WeakMap,cn:new WeakMap,j:new WeakMap,N:new WeakMap,x:new WeakMap,C:new WeakMap,an:new WeakMap,On:new WeakMap,q:new WeakMap,O:new WeakMap};y.render=h(y,d);const N=d.yn;N.$rendered=!0,N.$activeLoading=[],N.$initLoad=(()=>{y.cn.set(N,p.loaded=y.L=!0),d.Cn(o,"appload",{detail:{namespace:t}})}),function O(n,t,e){const o=e.querySelectorAll(`[${k}]`),i=o.length;let c,f,l,r,u,s;if(i>0)for(n.cn.set(e,!0),r=0;r<i;r++)for(c=o[r],f=t.H(c,k),(l={}).y=t.nn(l.k=c),n.q.set(c,l),u=0,s=c.childNodes.length;u<s;u++)w(t,c.childNodes[u],l,f,!0)}(y,d,N),y.B=i,(p.components||[]).map(n=>(function t(n,e,o,i){const f={n:n[0],P:{color:{ln:"color"}}};f.Nn=n[1];const l=n[3];if(l)for(o=0;o<l.length;o++)i=l[o],f.P[i[0]]={pn:i[1],An:!!i[2],ln:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,rn:i[4]};return f.encapsulation=n[4],n[5]&&(f.Sn=n[5].map(c)),e[f.n]=f})(n,s)).forEach(n=>y.Wn(n,class extends HTMLElement{})),function A(n,t){t.componentOnReady=((t,e)=>{if(n.S(t)&&!n.cn.has(t)){const o=n.an.get(t)||[];o.push(e),n.an.set(t,o)}else e(t)}),t.$r&&t.$r.forEach(n=>t.componentOnReady(n[0],n[1])),t.$r=null}(y,p),p.initialized=!0,d.Cn(n,"appinit",{detail:{namespace:t}})})(o,e,n,t,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilApp","hydrated");
/*! Built with http://stenciljs.com */
StencilApp.loadBundle("8shyemdr",["exports"],function(e){var t=window.StencilApp.h,n=function(){function e(){}return e.prototype.render=function(){if(this.first&&this.last)return t("div",null,t("span",{class:"welcome"},"Hello"),", my name is ",this.first," ",this.last)},Object.defineProperty(e,"is",{get:function(){return"my-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-my-app-host]{display:-webkit-box;display:-ms-flexbox;display:flex;--welcome:#000;--welcome-large:#ff41b4;--main:gold;color:var(--main,#000)}[data-my-app-host]   .welcome[data-my-app]{color:var(--welcome)}\@media screen and (min-width:60em){[data-my-app-host]   .welcome[data-my-app]{color:var(--welcome-large)}}"},enumerable:!0,configurable:!0}),e}();e.MyApp=n,Object.defineProperty(e,"__esModule",{value:!0})});
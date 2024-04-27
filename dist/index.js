"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=n(function(w,m){
var v=require('@stdlib/number-float64-base-to-float32/dist');function R(r,e,t,i){var s,a,u;if(r<=0)return 0;if(r===1||i===0)return v(e+t[0]);for(i<0?a=(1-r)*i:a=0,s=0,u=0;u<r;u++)s=v(s+v(e+t[a])),a+=i;return s}m.exports=R
});var c=n(function(z,p){
var f=require('@stdlib/number-float64-base-to-float32/dist');function T(r,e,t,i,s){var a,u,o;if(r<=0)return 0;if(r===1||i===0)return f(e+t[0]);for(u=s,a=0,o=0;o<r;o++)a=f(a+f(e+t[u])),u+=i;return a}p.exports=T
});var j=n(function(A,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),E=c();_(l,"ndarray",E);y.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),d=require('@stdlib/assert-is-error/dist'),g=j(),q,F=b(O(__dirname,"./native.js"));d(F)?q=g:q=F;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

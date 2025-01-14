"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(z,f){
var t=require('@stdlib/number-float64-base-to-float32/dist');function l(e,r,s,a,j){var i,u,o;if(e<=0)return 0;if(u=j,a===0)return t(e*t(r+s[u]));for(i=0,o=0;o<e;o++)i=t(i+t(r+s[u])),u+=a;return i}f.exports=l
});var p=n(function(A,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=v();function E(e,r,s,a){return _(e,r,s,a,R(e,a))}m.exports=E
});var y=n(function(B,c){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),O=v();F(x,"ndarray",O);c.exports=x
});var T=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),k=y(),q,d=b(T(__dirname,"./native.js"));g(d)?q=k:q=d;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

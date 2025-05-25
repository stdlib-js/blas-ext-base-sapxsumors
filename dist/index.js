"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(w,o){
var n=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumors/dist').ndarray;function y(r,e,a,s,c){return r<=0?0:n(n(r*e)+d(r,a,s,c))}o.exports=y
});var q=i(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),l=u();function R(r,e,a,s){return l(r,e,a,s,j(r,s))}v.exports=R
});var x=i(function(A,m){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),E=u();_(p,"ndarray",E);m.exports=p
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=x(),t,f=b(O(__dirname,"./native.js"));g(f)?t=h:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

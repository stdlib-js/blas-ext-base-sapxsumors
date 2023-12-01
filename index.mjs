// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";function t(r,t,n,i){var s,o,a;if(r<=0)return 0;if(1===r||0===i)return e(t+n[0]);for(o=i<0?(1-r)*i:0,s=0,a=0;a<r;a++)s=e(s+e(t+n[o])),o+=i;return s}function n(r,t,n,i,s){var o,a,f;if(r<=0)return 0;if(1===r||0===i)return e(t+n[0]);for(a=s,o=0,f=0;f<r;f++)o=e(o+e(t+n[a])),a+=i;return o}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{47:function(n,e,r){"use strict";var t=r(6),o=Date.now(),i="fnValues"+o,u="fnStyle"+ ++o;e.a=function(){return{onCreateRule:function(n,e,r){if("function"!=typeof e)return null;var o=Object(t.c)(n,{},r);return o[u]=e,o},onProcessStyle:function(n,e){if(i in e||u in e)return n;var r={};for(var t in n){var o=n[t];"function"==typeof o&&(delete n[t],r[t]=o)}return e[i]=r,n},onUpdate:function(n,e,r,t){var o=e,f=o[u];f&&(o.style=f(n)||{});var a=o[i];if(a)for(var c in a)o.prop(c,a[c](n),t)}}}}}]);
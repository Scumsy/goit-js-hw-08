!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("1WSnx"),l=document.querySelector(".feedback-form"),u=document.querySelector(".feedback-form input"),i=document.querySelector(".feedback-form textarea"),d="feedback-form-state",f=JSON.parse(localStorage.getItem(d)),c={};l.addEventListener("input",e(a).throttle((function(e){c[e.target.name]=e.target.value,localStorage.setItem(d,JSON.stringify(c))}),500)),l.addEventListener("submit",e(a).throttle((function(e){e.preventDefault(),console.log(c),e.target.reset(),localStorage.clear()}),500)),f&&(u.value=f.email||"",i.value=f.message||"")}();
//# sourceMappingURL=03-feedback.b45c6568.js.map

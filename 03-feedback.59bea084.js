function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form"),d=document.querySelector(".feedback-form input"),f=document.querySelector(".feedback-form textarea"),u=JSON.parse(localStorage.getItem("feedback-form-state")),i={};l.addEventListener("input",e(a).throttle((function(e){i[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500)),l.addEventListener("submit",e(a).throttle((function(e){e.preventDefault(),console.log(i),e.target.reset(),localStorage.clear()}),500)),u&&(d.value=u.email||"",f.value=u.message||"");
//# sourceMappingURL=03-feedback.59bea084.js.map
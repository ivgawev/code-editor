'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function p(e){let t={value:[]};for(let i of e)i.split("/").reduce((o,r,n,s)=>(typeof o[r]>"u"&&(o[r]={value:[]},o.value.push({id:s.slice(0,n+1).join("/"),level:n+1,children:o[r].value})),o[r]),t);return t.value}var a=process.env.NODE_ENV==="development";function c(e){return e.charAt(0).toUpperCase()+e.slice(1).toLocaleLowerCase()}function l(e){return decodeURI(e).replace(/^\/|\/$/g,"").replace(/[/]+/g,"/").normalize()}

exports.capitalize = c;
exports.convertPathsToTree = p;
exports.isDevelopment = a;
exports.sanitizePath = l;
//# sourceMappingURL=index.js.map
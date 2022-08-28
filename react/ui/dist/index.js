'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var l = require('styled-components');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var l__default = /*#__PURE__*/_interopDefaultLegacy(l);

var c=l__default["default"].button`
      padding-top: ${({theme:t})=>t.units[2]}rem;
      padding-bottom: ${({theme:t})=>t.units[2]}rem;
      padding-left: ${({theme:t})=>t.units[5]}rem;
      padding-right: ${({theme:t})=>t.units[5]}rem;

      color: ${({theme:t})=>t.palette.primary};
      font-weight: 500;
      background-color: ${({theme:t})=>t.colors.GREY[900]};

      border-width: 1;
      border-style: solid;
      border-color: ${({theme:t})=>t.colors.GREY[700]};
`;var n=t=>jsxRuntime.jsx(e,{...t});n.defaultProps={as:"h1",variant:"primary"};var x=l__default["default"].input`
      padding-top: ${({theme:t})=>t.units[2]}rem;
      padding-bottom: ${({theme:t})=>t.units[2]}rem;
      padding-left: ${({theme:t})=>t.units[5]}rem;
      padding-right: ${({theme:t})=>t.units[5]}rem;

      color: ${({theme:t})=>t.palette.primary};
      font-weight: 500;


      background-color:  transparent;

      border-width: 1;
      border-style: solid;
      border-color: ${({theme:t})=>t.colors.GREY[700]};
      outline: 0;


      ::placeholder {
            color: ${({theme:t})=>t.text.variants.secondary};
      }

      :focus {
            border-color: ${({theme:t})=>t.colors.BLUE[500]};
      }
`;var h=l__default["default"].main`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      background-color: ${({theme:t})=>t.palette.background};
`;var e=l__default["default"](({as:t,children:o,...r})=>jsxRuntime.jsx(t??"p",{...r,children:o}))`
      font-family: ${({theme:t,as:o})=>t.text.types[o].family};
      font-weight: ${({theme:t,as:o})=>t.text.types[o].weight};
      font-size: ${({theme:t,as:o})=>t.text.types[o].size}rem;
      color: ${({theme:t,variant:o})=>t.text.variants[o]};
      line-height: ${({theme:t,as:o})=>t.text.types[o].lineHeight}rem;
      letter-spacing: ${({theme:t,as:o})=>t.text.types[o].letterSpacing}px;
`;e.defaultProps={as:"p",variant:"primary"};var a=({size:t,children:o,...r})=>{let[i,m]=react.Children.toArray(o);return jsxRuntime.jsxs(b,{children:[jsxRuntime.jsx(p,{weight:t.left,...r,children:i}),jsxRuntime.jsx(p,{weight:t.right,...r,children:m})]})},b=l__default["default"].section`
      display: flex;
      flex-direction: column;
`,p=l__default["default"].div`
      flex: ${({weight:t})=>t};
      flex-direction: ${({direction:t})=>t};
`;a.defaultProps={direction:"row"};

exports.Button = c;
exports.Heading = n;
exports.Input = x;
exports.Page = h;
exports.Split = a;
exports.Text = e;
//# sourceMappingURL=index.js.map
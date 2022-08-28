'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var a = require('styled-components');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var a__default = /*#__PURE__*/_interopDefaultLegacy(a);

var l=a__default["default"].button`
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
`;var n=t=>jsxRuntime.jsx(e,{...t});n.defaultProps={as:"h1",variant:"primary"};var g=a__default["default"].input`
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
`;var x=a__default["default"].main`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      background-color: ${({theme:t})=>t.palette.background};
`;var e=a__default["default"](({as:t,children:r,...o})=>jsxRuntime.jsx(t??"p",{...o,children:r}))`
      font-family: ${({theme:t,as:r})=>t.text.types[r].family};
      font-weight: ${({theme:t,as:r})=>t.text.types[r].weight};
      font-size: ${({theme:t,as:r})=>t.text.types[r].size}rem;
      color: ${({theme:t,variant:r})=>t.text.variants[r]};
      line-height: ${({theme:t,as:r})=>t.text.types[r].lineHeight}rem;
      letter-spacing: ${({theme:t,as:r})=>t.text.types[r].letterSpacing}px;
`;e.defaultProps={as:"p",variant:"primary"};var $=({size:t,children:r})=>{let[o,i]=react.Children.toArray(r);return jsxRuntime.jsxs(b,{children:[jsxRuntime.jsx(p,{weight:t.left,children:o}),jsxRuntime.jsx(p,{weight:t.right,children:i})]})},b=a__default["default"].section`
      display: flex;
`,p=a__default["default"].div`
      flex: ${({weight:t})=>t};
`;

exports.Button = l;
exports.Heading = n;
exports.Input = g;
exports.Page = x;
exports.Split = $;
exports.Text = e;
//# sourceMappingURL=index.js.map
import a from 'styled-components';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Children } from 'react';

var l=a.button`
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
`;var n=t=>jsx(e,{...t});n.defaultProps={as:"h1",variant:"primary"};var g=a.input`
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
`;var x=a.main`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      background-color: ${({theme:t})=>t.palette.background};
`;var e=a(({as:t,children:r,...o})=>jsx(t??"p",{...o,children:r}))`
      font-family: ${({theme:t,as:r})=>t.text.types[r].family};
      font-weight: ${({theme:t,as:r})=>t.text.types[r].weight};
      font-size: ${({theme:t,as:r})=>t.text.types[r].size}rem;
      color: ${({theme:t,variant:r})=>t.text.variants[r]};
      line-height: ${({theme:t,as:r})=>t.text.types[r].lineHeight}rem;
      letter-spacing: ${({theme:t,as:r})=>t.text.types[r].letterSpacing}px;
`;e.defaultProps={as:"p",variant:"primary"};var $=({size:t,children:r})=>{let[o,i]=Children.toArray(r);return jsxs(b,{children:[jsx(p,{weight:t.left,children:o}),jsx(p,{weight:t.right,children:i})]})},b=a.section`
      display: flex;
`,p=a.div`
      flex: ${({weight:t})=>t};
`;

export { l as Button, n as Heading, g as Input, x as Page, $ as Split, e as Text };
//# sourceMappingURL=index.mjs.map
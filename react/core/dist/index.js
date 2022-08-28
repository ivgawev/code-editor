'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styledComponents = require('styled-components');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');
var reactRouterDom = require('react-router-dom');
var client = require('react-dom/client');

var R=Object.defineProperty;var m=(e,t)=>()=>(e&&(t=e(e=0)),t);var N=(e,t)=>{for(var o in t)R(e,o,{get:t[o],enumerable:!0});};function T(e){return e.charAt(0).toUpperCase()+e.slice(1).toLocaleLowerCase()}var x,c=m(()=>{x=process.env.NODE_ENV==="development";});function P(e){let t=[];for(let[o,r]of Object.entries(e)){let n=T(o),p=styledComponents.css`@import url('https://fonts.googleapis.com/css2?family=${n}:wght@${r.join(";")}&display=swap')`;t.push(p);}return t}var w=m(()=>{c();});var v={};N(v,{default:()=>M});var M,z=m(()=>{w();M=styledComponents.createGlobalStyle`

      ${({theme:e})=>P(e.fonts)};

      * {
            font-family: ${({theme:e})=>`"${e.text.defaultFont}"`};
      }

      *,
      ::before,
      ::after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
      }

      html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
      }

      body {
            margin: 0;
            line-height: inherit;
            user-select: none;
            overflow: hidden;
      }

      hr {
            height: 0;
            color: inherit;
            border-top-width: 1px;
      }

      abbr:where([title]) {
            text-decoration: underline dotted;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
            font-size: inherit;
            font-weight: inherit;
      }

      a {
            color: inherit;
            text-decoration: inherit;
      }

      b,
      strong {
            font-weight: bolder;
      }

      code,
      kbd,
      samp,
      pre {
            font-size: 1em;
      }

      small {
            font-size: 80%;
      }

      sub,
      sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
      }

      sub {
            bottom: -0.25em;
      }

      sup {
            top: -0.5em;
      }

      table {
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
            font-family: inherit;
            font-size: 100%;
            font-weight: inherit;
            line-height: inherit;
            color: inherit;
            margin: 0;
            padding: 0;
      }

      button,
      select {
            text-transform: none;
      }

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none;
      }

      :-moz-focusring {
            outline: auto;
      }

      :-moz-ui-invalid {
            box-shadow: none;
      }

      progress {
            vertical-align: baseline;
      }

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
            height: auto;
      }

      [type='search'] {
            -webkit-appearance: textfield;
            outline-offset: -2px;
      }

      ::-webkit-search-decoration {
            -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit;
      }

      summary {
            display: list-item;
      }

      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
            margin: 0;
      }

      fieldset {
            margin: 0;
            padding: 0;
      }

      legend {
            padding: 0;
      }

      ol,
      ul,
      menu {
            list-style: none;
            margin: 0;
            padding: 0;
      }

      textarea {
            resize: vertical;
      }

      input::placeholder,
      textarea::placeholder {
            opacity: 1;
      }

      button,
      [role="button"] {
            cursor: pointer;
      }

      :disabled {
            cursor: default;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
            display: block;
      }

      img,
      video {
            max-width: 100%;
            height: auto;
      }

`;});var h=({children:e})=>jsxRuntime.jsx(react.Fragment,{children:e});function b({path:e,route:t}){let{component:o}=t;return jsxRuntime.jsx(reactRouterDom.Route,{path:e,element:jsxRuntime.jsx(o,{})},e)}var l=({index:e,routes:t,error:o})=>jsxRuntime.jsx(reactRouterDom.BrowserRouter,{children:jsxRuntime.jsx(react.Suspense,{children:jsxRuntime.jsxs(reactRouterDom.Routes,{children:[Object.entries(t).map(([r,n])=>b({path:r,route:n})),jsxRuntime.jsx(reactRouterDom.Route,{path:"/",element:jsxRuntime.jsx(reactRouterDom.Navigate,{to:e})}),jsxRuntime.jsx(reactRouterDom.Route,{path:"*",element:jsxRuntime.jsx(reactRouterDom.Navigate,{to:o})})]})})});i({component:l,name:"Router"});var _=react.lazy(()=>Promise.resolve().then(()=>(z(),v))),d=({theme:e,normalize:t,children:o})=>jsxRuntime.jsxs(styledComponents.ThemeProvider,{theme:e,children:[jsxRuntime.jsx(react.Suspense,{children:t&&jsxRuntime.jsx(_,{})}),o]});i({component:d,name:"Theme"});var u=({themes:e,defaultTheme:t,normalize:o,...r})=>{let n=e.find(p=>p.name===t)??e[0];return jsxRuntime.jsx(react.StrictMode,{children:jsxRuntime.jsx(h,{children:jsxRuntime.jsx(d,{theme:n,normalize:o,children:jsxRuntime.jsx(l,{...r})})})})};i({component:u,name:"Application"});function Q({id:e,...t}){let o=document.createElement("div");o.setAttribute("id",e),document.body.prepend(o),client.createRoot(o).render(jsxRuntime.jsx(u,{...t}));}c();function i({name:e,component:t}){x&&(t.displayName=e);}function Z(e){let t=react.useContext(e);if(!t){let o=`${e.displayName??"The Context"} should be wrapped by it's Provider`;throw new Error(o)}return t}var S=({node:e,render:t})=>{let{children:o}=e,[r,n]=react.useState(!0),k=o.length>0&&r;return jsxRuntime.jsxs(react.Fragment,{children:[t({node:e,showChildren:r,setShowChildren:n}),k&&jsxRuntime.jsx(f,{tree:o,render:t})]})};var f=({tree:e,...t})=>{let o=e.map(r=>jsxRuntime.jsx(S,{node:r,...t},r.id));return jsxRuntime.jsx(react.Fragment,{children:o})};

exports.Tree = f;
exports.createApplication = Q;
exports.setComponentName = i;
exports.useSafetyContext = Z;
//# sourceMappingURL=index.js.map
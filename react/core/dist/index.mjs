import { a as a$1 } from './chunk-4RXLWVGV.mjs';
import { lazy, useContext, Fragment, Suspense, StrictMode, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';

var l=({children:e})=>jsx(Fragment,{children:e});function h({path:e,route:o}){let{component:t}=o;return jsx(Route,{path:e,element:jsx(t,{})},e)}var a=({index:e,routes:o,error:t})=>jsx(HashRouter,{children:jsx(Suspense,{children:jsxs(Routes,{children:[Object.entries(o).map(([r,m])=>h({path:r,route:m})),jsx(Route,{path:"/",element:jsx(Navigate,{to:e})}),jsx(Route,{path:"*",element:jsx(Navigate,{to:t})})]})})});n({component:a,name:"Router"});var z=lazy(()=>import('./Normalizer-WR2FCEJ7.mjs')),s=({theme:e,normalize:o,children:t})=>jsxs(ThemeProvider,{theme:e,children:[jsx(Suspense,{children:o&&jsx(z,{})}),t]});n({component:s,name:"Theme"});var c=({themes:e,defaultTheme:o,normalize:t,...r})=>{let m=e.find(C=>C.name===o)??e[0];return jsx(StrictMode,{children:jsx(l,{children:jsx(s,{theme:m,normalize:t,children:jsx(a,{...r})})})})};n({component:c,name:"Application"});function H({id:e,...o}){let t=document.createElement("div");t.setAttribute("id",e),document.body.prepend(t),createRoot(t).render(jsx(c,{...o}));}function n({name:e,component:o}){a$1&&(o.displayName=e);}function U(e){let o=useContext(e);if(!o){let t=`${e.displayName??"The Context"} should be wrapped by it's Provider`;throw new Error(t)}return o}var x=({node:e,render:o})=>{let{children:t}=e,[r,m]=useState(!0),R=t.length>0&&r;return jsxs(Fragment,{children:[o({node:e,showChildren:r,setShowChildren:m}),R&&jsx(f,{tree:t,render:o})]})};var f=({tree:e,...o})=>{let t=e.map(r=>jsx(x,{node:r,...o},r.id));return jsx(Fragment,{children:t})};

export { f as Tree, H as createApplication, n as setComponentName, U as useSafetyContext };
//# sourceMappingURL=index.mjs.map
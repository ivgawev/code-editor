import{s as d,j as i,r as a,a as m,$ as z,R as y,t as $,f as P}from"./index.0e6e02c8.js";var S=d.button`
      padding-top: ${({theme:e})=>e.units[2]}rem;
      padding-bottom: ${({theme:e})=>e.units[2]}rem;
      padding-left: ${({theme:e})=>e.units[5]}rem;
      padding-right: ${({theme:e})=>e.units[5]}rem;

      color: ${({theme:e})=>e.palette.primary};
      font-weight: 500;
      background-color: ${({theme:e})=>e.colors.GREY[900]};

      border-width: 1;
      border-style: solid;
      border-color: ${({theme:e})=>e.colors.GREY[700]};
`,C=d.input`
      padding-top: ${({theme:e})=>e.units[2]}rem;
      padding-bottom: ${({theme:e})=>e.units[2]}rem;
      padding-left: ${({theme:e})=>e.units[5]}rem;
      padding-right: ${({theme:e})=>e.units[5]}rem;

      color: ${({theme:e})=>e.palette.primary};
      font-weight: 500;


      background-color:  transparent;

      border-width: 1;
      border-style: solid;
      border-color: ${({theme:e})=>e.colors.GREY[700]};
      outline: 0;


      ::placeholder {
            color: ${({theme:e})=>e.text.variants.secondary};
      }

      :focus {
            border-color: ${({theme:e})=>e.colors.BLUE[500]};
      }
`,L=d.main`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      background-color: ${({theme:e})=>e.palette.background};
`,g=d(({as:e,children:t,...r})=>i(e!=null?e:"p",{...r,children:t}))`
      font-family: ${({theme:e,as:t})=>e.text.types[t].family};
      font-weight: ${({theme:e,as:t})=>e.text.types[t].weight};
      font-size: ${({theme:e,as:t})=>e.text.types[t].size}rem;
      color: ${({theme:e,variant:t})=>e.text.variants[t]};
      line-height: ${({theme:e,as:t})=>e.text.types[t].lineHeight}rem;
      letter-spacing: ${({theme:e,as:t})=>e.text.types[t].letterSpacing}px;
`;g.defaultProps={as:"p",variant:"primary"};var F=({size:e,children:t})=>{let[r,n]=a.exports.Children.toArray(t);return m(G,{children:[i(b,{weight:e.left,children:r}),i(b,{weight:e.right,children:n})]})},G=d.section`
      display: flex;

      // This should not be here, but I don't have more time.
      @media screen and (max-width: 1000px) {
            flex-direction: column
      }
`,b=d.div`
      flex: ${({weight:e})=>e};
`;const O=a.exports.createContext({});function k(){return z(O)}const T=d.section`
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.units[2]}rem;
      flex: 3;

      padding-top: ${({theme:e})=>e.units[7]}rem;
      padding-bottom: ${({theme:e})=>e.units[7]}rem;
      padding-left: ${({theme:e})=>e.units[10]}rem;
      padding-right: ${({theme:e})=>e.units[10]}rem;

      @media screen and (max-width: 1000px) {
            position: fixed;
            bottom: 0;
            width: 100%;

            ${C} {
                  font-size: ${({theme:e})=>e.units[3]}rem;
            }
      }
`;function j(e){let t={value:[]};for(let r of e)r.split("/").reduce((n,o,l,c)=>(typeof n[o]>"u"&&(n[o]={value:[]},n.value.push({id:c.slice(0,l+1).join("/"),level:l+1,children:n[o].value})),n[o]),t);return t.value}function Y(e){return decodeURI(e).replace(/^\/|\/$/g,"").replace(/[/]+/g,"/").normalize()}const B=()=>{const{addPath:e}=k(),t=a.exports.useRef(null),r=()=>{var l;const o=t.current;if(o!==null){const c=(l=o.value)!=null?l:"",s=Y(c);!s.includes(" ")&&s!==""&&e(s),o.value=""}},n=({key:o})=>{o==="Enter"&&r()};return a.exports.useEffect(()=>(document.addEventListener("keyup",n),()=>document.removeEventListener("keyup",n))),m(T,{children:[i(C,{placeholder:"Create a folder or a file with an extension",ref:t}),i(S,{onClick:r,children:"Add"})]})};var R={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=y.createContext&&y.createContext(R),h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h.apply(this,arguments)},_=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function I(e){return e&&e.map(function(t,r){return y.createElement(t.tag,h({key:r},t.attr),I(t.child))})}function p(e){return function(t){return i(H,{...h({attr:h({},e.attr)},t),children:I(e.child)})}}function H(e){var t=function(r){var n=e.attr,o=e.size,l=e.title,c=_(e,["attr","size","title"]),s=o||r.size||"1em",u;return r.className&&(u=r.className),e.className&&(u=(u?u+" ":"")+e.className),m("svg",{...h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:u,style:h(h({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),children:[l&&i("title",{children:l}),e.children]})};return E!==void 0?i(E.Consumer,{children:function(r){return t(r)}}):t(R)}function N(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z"}}]})(e)}function V(e){return p({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7 2l2 2h7v11h-16v-13z"}}]})(e)}function W(e){return p({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13 15l3-8h-13l-3 8zM2 6l-2 9v-13h4.5l2 2h6.5v2z"}}]})(e)}function A(e){return p({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.946 0l1.284 14.4 5.762 1.6 5.777-1.602 1.286-14.398h-14.108zM12.26 4.71h-6.758l0.161 1.809h6.437l-0.485 5.422-3.623 1.004-3.618-1.004-0.247-2.774h1.773l0.126 1.41 1.967 0.53 0.004-0.001 1.968-0.531 0.204-2.29h-6.121l-0.476-5.341h8.847l-0.158 1.766z"}}]})(e)}function U(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"}}]})(e)}function D(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}}]})(e)}function J(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(e)}const w={css:{icon:U},file:{icon:N},folder:{icon:V},folderOpen:{icon:W},html:{icon:A,color:$.ORANGE[500]},js:{icon:D,color:$.YELLOW[500]},ts:{icon:J,color:$.BLUE[500]}};function K(e){const t=w[e];return t||w.file}const X=d.div`
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: ${({theme:e})=>e.units[3]}rem;

      padding-top: ${({theme:e})=>e.units[3]}rem;
      padding-bottom: ${({theme:e})=>e.units[3]}rem;
      padding-right: ${({theme:e})=>e.units[5]}rem;
      padding-left: ${({theme:e,level:t})=>t*e.units[5]+e.units[5]}rem;

      background-color: ${({theme:e,selected:t})=>t&&e.colors.GREY[900]};
      cursor: pointer;

      ${g}, svg {
            color: ${({selected:e,theme:t})=>e?t.text.variants.primary:t.text.variants.secondary};
      }

      &:hover {
            background-color: ${({theme:e})=>e.colors.GREY[900]};

            ${g}, svg {
                  color: ${({theme:e})=>e.text.variants.primary};
            }
      }
`,q=({icon:e,name:t,showChildren:r,...n})=>m(X,{showChildren:r,...n,children:[e,i(g,{children:t})]}),Q=a.exports.memo(q),Z=({id:e,name:t,file:r,showChildren:n,setShowChildren:o,...l})=>{const{selected:c,setSelected:s}=re(),u=a.exports.useCallback(()=>{o(f=>!f),s(e)},[]),{icon:v,color:x}=K(r!=null?r:n?"folderOpen":"folder");return i(Q,{id:e,name:t,file:r,icon:i(v,{color:x}),selected:c===e,showChildren:n,onClick:u,...l},t)},ee=d.aside`
      flex: 1;
      height: 100vh;

      border-right-width: 1;
      border-style: solid;
      border-color: ${({theme:e})=>e.colors.GREY[700]};

      background: ${({theme:e})=>`linear-gradient(90deg, ${e.colors.GREY[900]} 0%, ${e.colors.GREY[800]} 50%)`};
`;function te(){return{render:a.exports.useCallback(({node:t,...r})=>{var f;const{id:n,level:o,children:l}=t,s=(f=n.split("/").at(-1))!=null?f:"",u=s.split(".")[1],v=l.length>0,x={id:n,name:s,level:o,file:u,hasChildren:v,...r};return i(Z,{...x})},[])}}const M=a.exports.createContext({});function re(){return z(M)}const ne=()=>{const{pathsTree:e}=k(),{render:t}=te(),[r,n]=a.exports.useState(""),o=a.exports.useMemo(()=>({selected:r,setSelected:n}),[r]);return i(ee,{children:i(M.Provider,{value:o,children:i(P,{tree:e,render:t})})})},oe=d.header`
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.units[2]}rem;

      padding-top: ${({theme:e})=>e.units[2]}rem;
      padding-bottom: ${({theme:e})=>e.units[2]}rem;
      padding-left: ${({theme:e})=>e.units[3]}rem;
      padding-right: ${({theme:e})=>e.units[3]}rem;

      border-bottom-width: 1;
      border-style: solid;
      border-color: ${({theme:e})=>e.colors.GREY[700]};

      background-color: ${({theme:e})=>e.colors.GREY[900]};

      ${g} {
            font-size: ${({theme:e})=>e.units[3.5]}rem;
      }

      img {
            height: 20;
            opacity: 0.7;
      }
`,ie=()=>m(oe,{children:[i("img",{src:"https://freesvg.org/img/claudita-Flag-of-Spain.png"}),i(g,{variant:"secondary",children:"Code Editor"})]}),le=({children:e})=>{const[t,r]=a.exports.useState([]),n=a.exports.useCallback(c=>{t.includes(c)||r(s=>[...s,c])},[]),o=a.exports.useMemo(()=>j(t),[t]),l=a.exports.useMemo(()=>({pathsTree:o,addPath:n}),[o]);return i(O.Provider,{value:l,children:e})},se=()=>m(L,{children:[i(ie,{}),i(le,{children:m(F,{size:{left:1,right:3},children:[i(ne,{}),i(B,{})]})})]});export{se as default};

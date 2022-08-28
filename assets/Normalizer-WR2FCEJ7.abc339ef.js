import{W as a,C as l}from"./index.f9dd7362.js";function s(e){return e.charAt(0).toUpperCase()+e.slice(1).toLocaleLowerCase()}function h(e){let t=[];for(let[i,o]of Object.entries(e)){let n=s(i),r=l`@import url('https://fonts.googleapis.com/css2?family=${n}:wght@${o.join(";")}&display=swap')`;t.push(r)}return t}var p=a`

      ${({theme:e})=>h(e.fonts)};

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

`;export{p as default};

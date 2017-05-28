/**
 * Created by ashishmishra on 5/12/17.
 */

import React from 'react';
import doRender from './src/app';


export default function handleRender(req, res) {
    let markup = doRender();
    // let content = markup.html;
    // let html =  ReactDom.renderToStaticMarkup(<HtmlLayout content={content} preloadedState={markup.finalState} />)
    let html = renderFullPage(markup.html,markup.finalState);
    res.send(html);
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">  
        <link id="__BUNDLED__STYLE" rel="stylesheet" href="./assets/normalize.css"/>
        <link id="__BUNDLED__STYLE" rel="stylesheet" href="./assets/bundle.css"/>
      </head>
      <body>
        <div id="root" class="root css_root-base">${html}</div>
        <script id="__DELETE_AFTER_RENDER__">
           
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="./assets/bundle.js"></script>
      </body>
    </html>
    `
}



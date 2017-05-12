/**
 * Created by ashishmishra on 5/12/17.
 */

import React from 'react';
import doRender from './src/app';

export default function handleRender(req, res) {
    let markup = doRender();
    let html = renderFullPage(markup.html,markup.finalState);
    console.log("i am twice...");
    res.send(html);
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Welcome to portfolio</title>
        <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">   
        <link rel="stylesheet" href="./assets/bundle.css"/>
      </head>
      <body>
        <div id="root">${html}</div>
        <script id="__DELETE_AFTER_RENDER__">
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./assets/bundle.js"></script>
      </body>
    </html>
    `
}



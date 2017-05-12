import express from 'express';
import path from 'path';
import React from 'react';
import mainApp from './src/App';


const app = express();

app.use('/',express.static(path.join(__dirname, 'public')));
app.use(handleRender);

function handleRender(req, res) {
   var markup = mainApp();
   res.send(renderFullPage(markup.html,markup.finalState));
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link rel="stylesheet" href="./bundle.css"/>
      </head>
      <body>
        <div id="root">${html}</div>
        <script id="__DELETE_AFTER_RENDER__">
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INIT_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
    `
}


app.listen(process.env.PORT || 3000);

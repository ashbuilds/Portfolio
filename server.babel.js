/**
 * Created by ashishmishra on 5/12/17.
 */
import React from 'react'
import express from 'express';
const app = express();
import path from 'path';
import handleRender from './.build/server.build';
import bodyParser from 'body-parser';


app.use('/assets',express.static(path.join(__dirname, './.build/assets')));

app.use(bodyParser.json());

app.get('*',handleRender);
app.listen(process.env.PORT || 3000);
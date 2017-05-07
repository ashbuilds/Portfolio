import express from 'express';
var path = require('path');
const app = express();

// app.use('/', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000);
const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const contatoRoute = require('./routes/contatoRoute');

app.use('/', index);
app.use('/contato', contatoRoute);

module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

// Dotenv
require('dotenv').config();

//Rotas
const index = require('./routes/index');
const contatoRoute = require('./routes/contatoRoute');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', index);
app.use('/contato', contatoRoute);

module.exports = app;
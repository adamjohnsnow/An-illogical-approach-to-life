const express = require('express');
const morgan = require('morgan');
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Character = require('../src/models/Character')

const app = express();

app.engine('html', require('ejs').renderFile);

mongoose.connect('mongodb://127.0.0.1:27017');

app.get('/', (req, res) => {
  res.render('../public/index')
});

module.exports = app;
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
  // res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.json());
// app.use(express.static(path.resolve(__dirname, '..', 'public')));
  // res.send('hello')

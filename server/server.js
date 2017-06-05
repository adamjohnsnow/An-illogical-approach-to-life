// import express from 'express';
// import React from 'react'
const http = require('http');
// const html = require('html');
const express = require('express');
const app = express();
app.set('views', './');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.send('HYelleleo');
});

app.listen(8000)

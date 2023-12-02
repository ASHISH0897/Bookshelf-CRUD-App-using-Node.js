const express = require('express');
const connection = require("./connection");
const libraryRoute = require('./routes/library');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/library',libraryRoute);

module.exports = app;
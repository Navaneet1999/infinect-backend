const express = require("express");
const studentController = require('./controller/student.controller')
const app = express();

app.use(express.json());

app.use('/', studentController);

module.exports = app;
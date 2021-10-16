const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");

const db = require("../database/connection.js");

let app = express();

app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../client/dist")));

module.exports = app;

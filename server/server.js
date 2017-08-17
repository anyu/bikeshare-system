require('dotenv').config();  // Enable access to .env variables

// Set up Express, middleware 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require("http");
const app = express();

const db = require('./../db/config');  
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));   // Serve up static files 

app.use('/api', routes.api);
app.use('/api/members', routes.members);
app.use('/api/bikes', routes.bikes);
app.use('/api/stations', routes.stations);
app.use('/api/trips', routes.trips);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;


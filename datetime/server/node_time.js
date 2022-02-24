// Requiring express in our server
const express = require('express');
const app = express();
  

// Defining get request at '/' route
app.get('/', function(req, res) {
  res.json({
    error: "You are at the wrong place"
  });
});
  
// Defining get request at '/multiple' route
app.get('/dateinfo', function(req, res) {
    let date_obj = new Date();
  res.json({
    date: date_obj.getDate(),
    month: date_obj.getMonth(),
    year: date_obj.getFullYear(),
    hours: date_obj.getHours(),
    minutes: date_obj.getMinutes(),
    seconds: date_obj.getSeconds()
  });
});

// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
  });
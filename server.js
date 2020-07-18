'use strict';

// LIBRARIES, Dependencies
require('dotenv').config();

const express = require('express');
const cors = require('cors');

//START SERVER
const PORT = process.env.PORT;

//CREATE APPLICATION FROM EXPRESS
const app = express(); 
app.use( cors() );

//LINK PUBLIC FOLDER
app.use(express.static('./public'));

// app.get('/location', (request,response) => {
//   let data = require('./data/location.json');
//   let realData = new Location(data[0]);
//   response.status(200).json(realData);
// });


// app.get('/weather', (request,response) => {
//   let data = require('./data/weather.json');
  
//   let locationWeather = [];
//   data.description.foreach( chilly => {
//     let weather = new Weather(chilly);
//     locationWeather.push(weather);
//   });
// })

// //get data
// function Location(obj){
//   this.latitude = obj.lat;
//   this.longitude = obj.lon;
//   this.formatted_query = obj.display_name;
// }
// function Weather(obj){
//   this.locationName = obj.city_name;
//   this.longitude = obj.lon;
//   this.forecast = obj.description;
//   this.time = obj.datetime;
// }

//ERROR RESPONSES
app.use('*', (request,response) => {
    response.status(404).send('whereyouB?');
  });

app.use((error, request, response, next) => {
    console.log(error);
    response.status(500).send('youve hit NEVERland!');
  });

//start server
app.listen(PORT, () => console.log(`its alive! ${PORT}`));
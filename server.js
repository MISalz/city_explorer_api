'use strict';

// LIBRARIES, Dependencies
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');
const { response, json } = require('express');

//START SERVER
const PORT = process.env.PORT || 3000;

//CREATE APPLICATION FROM EXPRESS
const app = express();
const client = new pg.Client(process.env.DATABASE_URL);
app.use( cors() );

//Routes
app.get('/', handleHome);
app.get('/location', handleLocation);
app.get('/weather', handleWeather);
app.get('/trails', handleTrails);
app.use('*', handleNotFound);
app.use(errorHandler);

//handlers
function handleHome(req,res){
  res.send('hello this is handleHome function');
}

function handleLocation (req,res) {
  // console.log('this is req.query.city line 33 ++++++++++++++++++++++++',req.query.city);
  const API = 'https://us1.locationiq.com/v1/search.php';
  let queryObj = {
    key: process.env.GEOCODE_API_KEY,
    q: req.query.city,
    format: 'json'
  };
  superagent
    .get(API)
    .query(queryObj)
    .then(apiData =>{
      let newloc = new Location(apiData.body[0], req.query.city);
      // console.log('newloc display line 44 +++++++++++++++++++++++++++', newloc);
      res.status(200).send(newloc);
    });
}

function handleWeather(req,res){
  //information will come from req.query
  //declare API query string from weather app
  const API = 'https://api.weatherbit.io/v2.0/forecast/daily';
  //create obj from API source
  let weatherObj = {
    city: req.query.search_query,
    key: process.env.WEATHER_API_KEY,
  };
  //superagent middleman between API and our server
  superagent
  //use get method to go that address
    .get(API)
  //use .query method {using key:valuepair}object to  request data from API
    .query(weatherObj)
  //use .then will return a promise of retrived information (from .get+.query) from request to API
    .then(weatherData =>{
    //create a function to manipuate data received from the API and push to constructor function
      let newWeather = weatherData.body.data.map(value =>{
        return new Weather (value);
      });
      //send cleaned up data to front end with res.status
      res.status(200).send(newWeather);
    });
}

function handleTrails(req,res){
  const API = 'https://www.hikingproject.com/data/get-trails';
  let trailObj = {
    lat: req.query.latitude,
    lon: req.query.longitude,
    key: process.env.TRAIL_API_KEY,
  };
  superagent
    .get(API)
    .query(trailObj)
    .then((trailData) => {
      let newTrails = trailData.body.trails.map(value =>{
        return new Trail (value);
      });
      res.status(200).send(newTrails);
    })
    .catch(() => {
      res.status(500).send('Something wrong with TRAILS Route');
    });
}

//constructors for data to pass through
function Location(obj,city){
  this.search_query = city;
  this.formatted_query = obj.display_name;
  this.latitude = obj.lat;
  this.longitude = obj.lon;
}
function Weather(obj){
  this.forecast = obj.weather.description;
  this.time = obj.datetime;
}
function Trail(obj){
  this.name = obj.name;
  this.location = obj.location;
  this.length = obj.length;
  this.stars = obj.stars;
  this.star_votes = obj.star_votes;
  this.summary = obj.summary;
  this.trail_url = obj.url;
  this.conditions = obj.conditionDetails;
  this.condition_date = obj.conditionDate.slice(0, obj.conditionDate.indexOf(' '));
  this. condition_time = obj.condition_time.slice(obj.conditionDate.indexOf(' '));
}

//ERROR handlers
function handleNotFound(req, res){
  //route does not exist
  res.status(404).send('whereyouB?');
}
function errorHandler(error,req,res,next) {
  //something is wrong with your code
  res.status(500).send('Sorry, something went wrong');
}
//client connect to port
client.connect(()=>{
  app.listen(PORT, () => console.log(`client.connect ${PORT}`));
});

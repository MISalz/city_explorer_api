'use  strict';


//event listener using form from index
$('form').on('submit', getLocation);


function getLocation(err) {
    //prevent default means page wont refresh
    err.preventDefault();
    //city-name links to html form
    let locName = $('#city-name').val();
    console.log('you searched for', locName);

    $.ajax(`http://localhost:3000/location?city=${locName}`)
    .then(dlocation =>{
      //render on index using lat and long from search
      renderMap(dlocation);
      renderHeading(dlocation)
      getWeather(dlocation);
    });
}

function loadPage(){
    $.ajax(`${server}/data/location.json`)
        .then( location =>{
    $.ajax(`${server}/data/weather.json`)
        .then(weather =>{
            render(map);
            render(weather);
        })
});
    console.log(location);
}

//render map with location data
function renderMap(location){
    //will display map-template
    let template = $('#map-template').html();
    let maphtml = Mustache.render(template, location);
    $('#map').append(maphtml);
}
//render location name based on search
function renderHeading(location){
  let template = $('#heading-template').html();
  let maphtml = Mustache.render(template, location);
  $('#heading').append(maphtml);
}

function getWeather(location){
  $.ajax('http://localhost:3000/weather')
  .then(weather =>{
    renderWeather(weather);

  })
}

//get weather data and append to html file
function renderWeather(weather) {
  let $template = $('#weather-template').html();
  let $target = $('#weather2');
  $target.empty();
//loop through data file and append html with forecast for each date
  forecast.data.forEach( (w) => {
    let rHTML = Mustache.render($template, w );
    $target.append(rHTML);
  });
}

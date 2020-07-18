'use  strict';

//event listener on submit
$('form').on('submit', getLocation);


function getLocation(err) {
    err.preventDefault();
    let locName = $('#city-name').val();
    console.log('you searched for', locName);
}
//
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

function renderMap(){
    let template = $('#map-template').html();
    let maphtml = Mustache.render(template, location);
    $('#map').append(maphtml);
}


function renderWeather(weather){
let template = $('#weather').html();
let target = $('weather2');
$target.empty();

weather.forEach( (r) => {
    let rHTML = Mustache.render( $template, r );
    $target.append(rHTML);
  });
}
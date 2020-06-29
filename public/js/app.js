'use  strict';

let server = 'http://localhost:3000';

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
    let template = $('map-template').html();
    let html = Mustache.render(template);
    $('#map').append(html);
}


function render(weather){


}


loadPage();
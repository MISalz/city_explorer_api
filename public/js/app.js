'use  strict';


const dlocation = 
    {
        "place_id": "222943963",
        "licence": "https://locationiq.com/attribution",
        "osm_type": "relation",
        "osm_id": "237662",
        "boundingbox": [
          "47.802219",
          "47.853569",
          "-122.34211",
          "-122.261618"
        ],
        "lat": "47.8278656",
        "lon": "-122.3053932",
        "display_name": "Lynnwood, Snohomish County, Washington, USA",
        "class": "place",
        "type": "city",
        "importance": 0.61729106268039,
        "icon": "https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png"
      }

const forecast = {
    "data": [
      {
        "moonrise_ts": 1586771608,
        "wind_cdir": "SSW",
        "rh": 38,
        "pres": 1023,
        "high_temp": 15.4,
        "sunset_ts": 1586833161,
        "ozone": 375.631,
        "moon_phase": 0.519936,
        "wind_gust_spd": 4.6,
        "snow_depth": 0,
        "clouds": 7,
        "ts": 1586761260,
        "sunrise_ts": 1586784105,
        "app_min_temp": 12.3,
        "wind_spd": 1.74585,
        "pop": 0,
        "wind_cdir_full": "south-southwest",
        "slp": 1028.13,
        "moon_phase_lunation": 0.72,
        "valid_date": "2020-04-13",
        "app_max_temp": 16.8,
        "vis": 24.1,
        "dewpt": 0.8,
        "snow": 0,
        "uv": 1.99206,
        "weather": {
          "icon": "c02d",
          "code": 801,
          "description": "Few clouds"
        },
        "wind_dir": 200,
        "max_dhi": null,
        "clouds_hi": 3,
        "precip": 0,
        "low_temp": 8.1,
        "max_temp": 16.8,
        "moonset_ts": 1586802287,
        "datetime": "2020-04-13",
        "temp": 15.1,
        "min_temp": 12.3,
        "clouds_mid": 4,
        "clouds_low": 4
      },
      {
        "moonrise_ts": 1586860689,
        "wind_cdir": "S",
        "rh": 52,
        "pres": 1020.97,
        "high_temp": 16.9,
        "sunset_ts": 1586919646,
        "ozone": 350.28,
        "moon_phase": 0.415553,
        "wind_gust_spd": 5.9,
        "snow_depth": 0,
        "clouds": 9,
        "ts": 1586847660,
        "sunrise_ts": 1586870392,
        "app_min_temp": 7.8,
        "wind_spd": 1.74854,
        "pop": 0,
        "wind_cdir_full": "south",
        "slp": 1026.13,
        "moon_phase_lunation": 0.75,
        "valid_date": "2020-04-14",
        "app_max_temp": 16.9,
        "vis": 24.1,
        "dewpt": 2.7,
        "snow": 0,
        "uv": 6.99871,
        "weather": {
          "icon": "c02d",
          "code": 801,
          "description": "Few clouds"
        },
        "wind_dir": 186,
        "max_dhi": null,
        "clouds_hi": 1,
        "precip": 0,
        "low_temp": 7.8,
        "max_temp": 17,
        "moonset_ts": 1586892430,
        "datetime": "2020-04-14",
        "temp": 12.5,
        "min_temp": 7.8,
        "clouds_mid": 1,
        "clouds_low": 8
      },
      {
        "moonrise_ts": 1586949236,
        "wind_cdir": "SSW",
        "rh": 58,
        "pres": 1012.36,
        "high_temp": 18,
        "sunset_ts": 1587006130,
        "ozone": 356.365,
        "moon_phase": 0.317358,
        "wind_gust_spd": 7.80082,
        "snow_depth": 0,
        "clouds": 22,
        "ts": 1586934060,
        "sunrise_ts": 1586956680,
        "app_min_temp": 7.5,
        "wind_spd": 2.10976,
        "pop": 0,
        "wind_cdir_full": "south-southwest",
        "slp": 1023.33,
        "moon_phase_lunation": 0.78,
        "valid_date": "2020-04-15",
        "app_max_temp": 18,
        "vis": 24.1351,
        "dewpt": 3.9,
        "snow": 0,
        "uv": 7.05471,
        "weather": {
          "icon": "c02d",
          "code": 802,
          "description": "Scattered clouds"
        },
        "wind_dir": 205,
        "max_dhi": null,
        "clouds_hi": 3,
        "precip": 0,
        "low_temp": 7.5,
        "max_temp": 18.2,
        "moonset_ts": 1586982703,
        "datetime": "2020-04-15",
        "temp": 12.7,
        "min_temp": 7.3,
        "clouds_mid": 0,
        "clouds_low": 19
      },
      {
        "moonrise_ts": 1587037377,
        "wind_cdir": "E",
        "rh": 37,
        "pres": 1010.67,
        "high_temp": 20.9,
        "sunset_ts": 1587092615,
        "ozone": 360.67,
        "moon_phase": 0.228363,
        "wind_gust_spd": 6.72632,
        "snow_depth": 0,
        "clouds": 20,
        "ts": 1587020460,
        "sunrise_ts": 1587042968,
        "app_min_temp": 7.6,
        "wind_spd": 1.99472,
        "pop": 0,
        "wind_cdir_full": "east",
        "slp": 1022.96,
        "moon_phase_lunation": 0.82,
        "valid_date": "2020-04-16",
        "app_max_temp": 19.4,
        "vis": 24.1351,
        "dewpt": -2.8,
        "snow": 0,
        "uv": 4.31327,
        "weather": {
          "icon": "c02d",
          "code": 801,
          "description": "Few clouds"
        },
        "wind_dir": 91,
        "max_dhi": null,
        "clouds_hi": 20,
        "precip": 0,
        "low_temp": 7.6,
        "max_temp": 21,
        "moonset_ts": 1587072992,
        "datetime": "2020-04-16",
        "temp": 13.9,
        "min_temp": 7.4,
        "clouds_mid": 0,
        "clouds_low": 0
      },
      {
        "moonrise_ts": 1587125233,
        "wind_cdir": "S",
        "rh": 36,
        "pres": 1001.74,
        "high_temp": 21.1,
        "sunset_ts": 1587179099,
        "ozone": 356.386,
        "moon_phase": 0.151071,
        "wind_gust_spd": 6.9171,
        "snow_depth": 0,
        "clouds": 46,
        "ts": 1587106860,
        "sunrise_ts": 1587129258,
        "app_min_temp": 7.7,
        "wind_spd": 1.70609,
        "pop": 0,
        "wind_cdir_full": "south",
        "slp": 1012.74,
        "moon_phase_lunation": 0.85,
        "valid_date": "2020-04-17",
        "app_max_temp": 19.8,
        "vis": 24.135,
        "dewpt": -1.5,
        "snow": 0,
        "uv": 5.2853,
        "weather": {
          "icon": "c03d",
          "code": 803,
          "description": "Broken clouds"
        },
        "wind_dir": 182,
        "max_dhi": null,
        "clouds_hi": 46,
        "precip": 0,
        "low_temp": 7.9,
        "max_temp": 21.1,
        "moonset_ts": 1587163240,
        "datetime": "2020-04-17",
        "temp": 14,
        "min_temp": 7.5,
        "clouds_mid": 4,
        "clouds_low": 0
      }
    ],
    "city_name": "Seattle",
    "lon": -122.33,
    "timezone": "America\/Los_Angeles",
    "lat": 47.61,
    "country_code": "US",
    "state_code": "WA"
  }

//event listener using form from index
$('form').on('submit', getLocation);


function getLocation(err) {
    //prevent default means page wont refresh
    err.preventDefault();
    //city-name links to html form
    let locName = $('#city-name').val();
    console.log('you searched for', locName);
}

// function loadPage(){
//     $.ajax(`${server}/data/location.json`)
//         .then( location =>{
//     $.ajax(`${server}/data/weather.json`)
//         .then(weather =>{
//             render(map);
//             render(weather);
//         })
// });
//     console.log(location);
// }

//render on index using lat and long from search
renderMap(dlocation);
renderHeading(dlocation)
getWeather(dlocation);

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
    renderWeather(forecast);
}

//get weather data and append to html file
function renderWeather() {
  let $template = $('#weather-template').html();
  let $target = $('#weather2');
  $target.empty();
//loop through data file and append html with forecast for each date
  forecast.data.forEach( (w) => {
    let rHTML = Mustache.render($template, w );
    $target.append(rHTML);
  });
}

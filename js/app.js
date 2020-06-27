'use  strict';

let server = 'http://localhost:3000';

function loadPage(){
$.ajax(`${server}/data/location.json`)
.then( data =>{
console.log(data);
});
    console.log(location);
}

loadPage();
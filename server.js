'use strict';

require('dotenv').config();
const express = require('express');
cont cors = require ('cors');

const PORT = process.env.PORT;

const app = express(); 

app.use( cors() );

add.listen(PORT, () => console.log ('its alive!', PORT));

app.get ('/',(request,response)=> {
    response.send('luke, i am your father');
})
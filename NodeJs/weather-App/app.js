const { error } = require('console');
const { resolve } = require('path');
const request = require('request');
const { json } = require('stream/consumers');

const url = '';

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log("Unable to connect!");
    }else if(response.body.error){
        console.log("Unable to find location!");
    }else{
        console.log(response.body.current.weather_descriptions[0] + "it is currently " + response.body.current.temperature + " degress out. it feels like " + response.body.current.feelslike + " degress out");
    }
})

const urlBox = '';

request({ url: urlBox, json: true }, (error, response) => {
    if(error){
        console.log("Unable to connect!");
    }else if(response.body.features.length === 0){
        console.log("Unable to find location!");
    }else{
        const longitude = response.body.features[0].geometry.coordinates[0];
        const latitude = response.body.features[0].geometry.coordinates[1];
        console.log(latitude, longitude)
    }
})
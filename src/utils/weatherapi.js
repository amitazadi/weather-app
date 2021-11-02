const request = require('request');
// const constants = require('../config');

const weatherData = (address, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=45a6b8c980164ca298b172314210111&q=' + encodeURIComponent(address);

    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        }
        // else if (!body.main || !body.main.temp || !body.name || !body.weather) {
        //     callback("Unable to find required data, try another location", undefined);
        // }
        else {
            callback(undefined, {
                temperature: body.current.temp_c,
                description: body.current.condition.text,
                cityName: body.location.name,
                region: body.location.region,
                country:body.location.country
            })
        }
    })
}

module.exports = weatherData;
const request = require('request')
const url = 'http://api.weatherapi.com/v1/current.json?key=45a6b8c980164ca298b172314210111&q=india'

request({ url, json: true }, (error, { body }) => {
    console.log(body)
    if (error) {
        console.log('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        console.log('Unable to find location', undefined)
    }
     else {
        // console.log(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        console.log(body.location.name)
    }
})






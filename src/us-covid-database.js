const XMLHttpRequest = require("xhr2")

var request = new XMLHttpRequest()
request.open('GET', 'https://disease.sh/v3/covid-19/countries/usa', true)

request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data)
}
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//creating variable for data url
var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//creating empty array
var cities = [];

fetch(endpoint)
//getting the json data.  .json method only returns a promise
.then(function (blob) {
    return blob.json();
})
//one way to put the data in the array is to change const to let and use cities = data
// .then(data => cities=data)
//if you want to keep the variable const then PUSH the data into the array with spread.
.then(function (data) {
    return cities.push.apply(cities, _toConsumableArray(data));
});

function findMatches(wordToMatch, cities) {
    return cities.filter(function (place) {
        //here we need to figure out if the city or state matches what was searched
        //so we are creating a regex to match the letters typed.  We are passing in wordToMatch.  Second param is the flags we want to pass.  'g' is global, it will look thru the entire string. 'i' insenitive meaning it will match lowercase as well.
        var regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    var _this = this;

    var matchArray = findMatches(this.value, cities);

    var html = matchArray.map(function (place) {
        var regex = new RegExp(_this.value, 'gi');
        var cityName = place.city.replace(regex, '<span class="hl">' + _this.value + '</span>');
        var stateName = place.state.replace(regex, '<span class="hl">' + _this.value + '</span>');

        return '\n        <li>\n            <span className="name">' + cityName + ', ' + stateName + ' </span>\n            <span className="population">' + numberWithCommas(place.population) + ' </span>\n        </li>\n        ';
    }).join('');
    suggestions.innerHTML = html;
}

//querying selecting the .serch class and .suggestions class
var searchInput = document.querySelector('.search');
var suggestions = document.querySelector('.suggestions');

//we are listening for a 'change' on .search and running displayMatches once is happens.
searchInput.addEventListener('change', displayMatches);
//now listening for 'keyup' event on .search
searchInput.addEventListener('keyup', displayMatches);
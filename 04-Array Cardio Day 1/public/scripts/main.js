'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

var inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// const fifteen = inventors.filter(function(inventor){
//     if(inventor.year >= 1500 && inventor.year < 1600){
//         return true; //keep it
//     }
// });

//another way
// const fifteen = inventors.filter (inventor => {
//     if (inventor.year >= 1500 && inventor.year < 1600) {
//         return true; //keep it
//     }
// });

//another way
// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

//another way
var fifteen = inventors.filter(function (inventor) {
    return inventor.year >= 1500 && inventor.year < 1600;
});
console.table(fifteen);

// Array.prototype.map()
//takes an array and does something with the array and outputs with the same length. Think of factory machine
// 2. Give us an array of the inventors' first and last names
var fullNames = inventors.map(function (inventor) {
    return inventor.first + ' ' + inventor.last;
});
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//original way
// const oldToYoung = inventors.sort(function(firstPerson, secondPerson){
//     if (firstPerson.year > secondPerson.year){
//         return 1;
//     } else {
//         return -1
//     }
// });
//using arrow function with turnery to replace if statement
var oldToYoung = inventors.sort(function (firstPerson, secondPerson) {
    return firstPerson.year > secondPerson.year ? 1 : -1;
});
console.table(oldToYoung);

// Array.prototype.reduce()
//Reduce will allow you to build on the thing or a simpler for loop
// 4. How many years did all the inventors live?

//older way
// const totalYears = inventors.reduce (function(total, inventor){
//     return total + (inventor.passed - inventor.year);
// },0);

//newer way
var totalYears = inventors.reduce(function (total, inventor) {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
//old way
// const oldest = inventors.sort(function(a, b){
//     const lastGuy = a.passed - a.year;
//     const nextGuy = b.passed - b.year;
//     if(lastGuy > nextGuy){
//         return -1;
//     } else {
//         return 1;
//     }
// });

//newer way
var oldest = inventors.sort(function (a, b) {
    var lastGuy = a.passed - a.year;
    var nextGuy = b.passed - b.passed;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
//we need to change node list into an array
//spread operator
// const links = [...category.querySelectorAll('a')];
//or use "array.from"
// const links = Array.from(category.querySelectorAll('a'));

//mapping the array to only grab .textContent
//and filtering all street names that include 'de'
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
//split removes the comma and space
//[last, first] is destructuring the array
//old way
// const alpha = people.sort(function(lastOne, nextOne){
//     const [aLast, aFirst] = lastOne.split(', ');
//     const [bLast, bFirst] = nextOne.split(', ');
//     return aLast > bLast ? 1 : -1;

// });
//es6
var alpha = people.sort(function (lastOne, nextOne) {
    var _lastOne$split = lastOne.split(', '),
        _lastOne$split2 = _slicedToArray(_lastOne$split, 2),
        aLast = _lastOne$split2[0],
        aFirst = _lastOne$split2[1];

    var _nextOne$split = nextOne.split(', '),
        _nextOne$split2 = _slicedToArray(_nextOne$split, 2),
        bLast = _nextOne$split2[0],
        bFirst = _nextOne$split2[1];

    return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

var transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// ## Array Cardio Day 2

var people = [{ name: 'Wes', year: 1988 }, { name: 'Kait', year: 1986 }, { name: 'Irv', year: 1970 }, { name: 'Lux', year: 2015 }];

var comments = [{ text: 'Love this!', id: 523423 }, { text: 'Super good', id: 823423 }, { text: 'You are the best', id: 2039842 }, { text: 'Ramen is my fav food ever', id: 123523 }, { text: 'Nice Nice Nice!', id: 542328 }];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
//old way
// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >=19){
//         return true;
//     }
// });

//ES6
// const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
// });

//Hot Shot way
var isAdult = people.some(function (person) {
    return new Date().getFullYear() - person.year >= 19;
});

// Array.prototype.every() // is everyone 19 or older?
var allAdult = people.every(function (person) {
    return new Date().getFullYear() - person.year >= 19;
});
console.log({ allAdult: allAdult });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

//old way
// const comment = comments.find(function(comment){
//     if (comment.id===823423){
//         return true;
//     }
// });

//ES6
var comment = comments.find(function (comment) {
    return comment.id === 823423;
});
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

var index = comments.findIndex(function (comment) {
    return comment.id === 823423;
});
console.table(index);

//find the comment with '823423' and remove it with splice
// comments.splice(index, 1);

//don't forget to Spread or else you'll get 2 arrays
var newComments = [].concat(_toConsumableArray(comments.slice(0, index)), _toConsumableArray(comments.slice(index + 1)));
'use strict';

// zadanie pierwsze

var H = 'Hello';
var W = 'World';
console.log(H + ' ' + W);

// zadanie drugie

var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return console.log(x * y);
};

multiply(5);

// zadanie trzecie

var average = function average() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
    }

    var a = 0;
    rest.forEach(function (x) {
        return a += x;
    });
    return console.log(a / rest.length);
};

average(2, 3);

// zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//zadanie piąte

var table = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = table[2],
    lastname = table[4];


console.log(firstname, lastname);

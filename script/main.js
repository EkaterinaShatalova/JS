/*jshint esversion: 8 */
/* jshint node: true */

'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    };

const check = function(a) {
    let string = a;
    if  (typeof string !== 'string' && isNumber(string)) {
        alert('Введены некорректные данные!');
}  else if (string.length>30) {
    console.log(string.trim().slice(0,30)+'...');
} else {console.log(string.trim());

}}

check('    ffffffffff ааааааааааа  ');



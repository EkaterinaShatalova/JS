/*jshint esversion: 8 */
/* jshint node: true */

'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    };

const check = function(a) {
    if  (typeof a !== 'string' || isNumber(a)) {
        alert('Введены некорректные данные!');
}  else if (a.length>30) {
    console.log(a.trim().slice(0,30)+'...');
} else {console.log(a.trim());

}}

check('    ffffffffff ааааааааааа  ');
check('5');





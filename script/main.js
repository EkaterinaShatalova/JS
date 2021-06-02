/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

function check(a) {
    if  (typeof a !== 'string'  ) {
        alert('Введены некорректные данные!');
}  else if (a.length>30) {
    console.log(a.slice(0,30)+'...');
} else {
    console.log(a.replace( /^\s+|\s+$/g, '' ));
}}

check('    ffffffffff ааааааааааа    ');



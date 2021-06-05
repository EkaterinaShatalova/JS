/*jshint esversion: 8 */
/* jshint node: true */
'use strict';
let arr = []
arr.push('2223',
'2426',
'1111',
'4445',
'7777',
'8888',
'9999');

const numbers = [2,4];

for (let i = 0; i < arr.length; i++) {
    if(numbers.includes(
        Number(arr[i].slice(0,1))
        ))
    {console.log(arr[i]);}
    
}

for(let i = 2; i <= 100; i++) {
    let number = true;

    for(let j = 2; j < i; j++) {

        if (i % j === 0) {
            number = false;
            break;
        }
    }
    if(number) {
        console.log(`простое число:${i}, делитель 1: 1, делитель 2: ${i}`);
    }  
}









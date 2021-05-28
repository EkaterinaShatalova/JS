"use strict";
let num = 266219;
let result = 1

for (let index = 0; index < String(num).length; index++) {
    result *= String(num)[index]   
}
console.log(result);

let resultPow = result**3
console.log(resultPow);

console.log(String(resultPow).slice(0,2));



"use strict";
let money = 100000
let income = 'ДиВиДенДы'
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 300000;
let period = 3;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));
let budgetDay = money/30;
console.log(budgetDay);





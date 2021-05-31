'use strict';
const money = 100000,
income = 'ДиВиДенДы',
addExpenses = 'Интернет, Такси, Коммуналка',
deposit = true,
mission = 300000,
period = 3,
budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));

console.log(budgetDay);





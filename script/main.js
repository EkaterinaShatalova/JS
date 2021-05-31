/*jshint esversion: 8 */
/* jshint node: true */

'use strict';
let money = 100000,
income = 'ДиВиДенДы',
addExpenses = 'Интернет, Такси, Коммуналка',
deposit = true,
mission = 300000,
period = 3,
budgetDay = money/30;
// console.log(budgetDay);

//к уроку 3

money = +prompt('Ваш месячный доход?', '10000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
deposit = !!prompt('Есть ли у вас депозит в банке?', 'Нет');

let expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
let amount1 = +prompt('Во сколько это обойдется?', '5000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Проездной');
let amount2 = +prompt('Во сколько это обойдется?', '1000');
let budgetMonth = money - amount1 - amount2;
budgetDay = Math.floor(budgetMonth/30);
period = Math.ceil(mission/budgetMonth);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));
console.log(`Бюджет на месяц: ${budgetMonth}`);
console.log(`Бюджет на день: ${budgetDay}`);
console.log(`Цель будет достигнута за ${period} месяцев(-а)`);

switch(true){
	case (budgetDay >= 1200): 
    console.log('У вас высокий уровень дохода');
    break;

	case (budgetDay < 1200 && budgetDay >=600):
	console.log('У вас средний уровень дохода');
	break;

	case (budgetDay < 600 && budgetDay >=0):
    console.log('К сожалению у вас уровень дохода ниже среднего');
	break;

	default: console.log('Что то пошло не так');

}







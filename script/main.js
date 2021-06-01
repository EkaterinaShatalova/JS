/*jshint esversion: 8 */
/* jshint node: true */
'use strict';
const  income = 'ДиВиДенДы',
    mission = 300000;
const money = +prompt('Ваш месячный доход?', '10000');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
const deposit = !!prompt('Есть ли у вас депозит в банке?', 'Нет');

const expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
const expenses2 = prompt('Введите обязательную статью расходов?', 'Проездной');
const amount2 = +prompt('Во сколько это обойдется?', '1000');
const amount1 = +prompt('Во сколько это обойдется?', '5000');

const budgetMonth = money - amount1 - amount2,
    budgetDay = Math.floor(budgetMonth/30),
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









/*jshint esversion: 8 */
/* jshint node: true */
'use strict';
const  income = 'ДиВиДенДы',
      mission = 300000;
const money = +prompt('Ваш месячный доход?', '10000');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
const deposit = !!prompt('Есть ли у вас депозит в банке?', 'Нет');
const expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
const amount1 = +prompt('Во сколько это обойдется?', '5000');
const expenses2 = prompt('Введите обязательную статью расходов?', 'Проездной');
const amount2 = +prompt('Во сколько это обойдется?', '1000');

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2), 
    budgetDay = Math.floor(accumulatedMonth / 30),
    showTypeOf = function(data) {
    console.log(typeof data);
}

function getExpensesMonth(amount1, amount2) {
    return amount1 + amount2;
}

function getAccumulatedMonth(money, amount1, amount2) {
    let amount = getExpensesMonth(amount1, amount2);
    return money - amount;
}

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}
function getStatusIncome () {
    switch(true) {
        case (budgetDay >= 1200): 
            console.log('У вас высокий уровень дохода');
        break;
    
        case (budgetDay < 1200 && budgetDay >=600):
            console.log('У вас средний уровень дохода');
        break;
    
        case (budgetDay < 600 && budgetDay >=0):
            console.log('К сожалению у вас уровень дохода ниже среднего');
        break;
    
        default: 
            console.log('Что то пошло не так');   
    }
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(`Расходы за месяц ${getExpensesMonth(amount1, amount2)}`);
console.log(addExpenses.toLowerCase().split(', '));
console.log(`Цель будет достигнута за ${getTargetMonth()} месяцев(-а)`);
console.log(`Бюджет на день: ${budgetDay}`);
getStatusIncome();










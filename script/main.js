/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const  income = 'ДиВиДенДы',
      mission = 300000;

let money;
let start = function() {
    money = prompt('Ваш месячный доход?','50000');
    if (!isNumber(money)) {
        do {
            money = prompt('Ваш месячный доход?','50000');
        }
        while (!isNumber(money))
    }
};
start();

   
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
const deposit = !!prompt('Есть ли у вас депозит в банке?', 'Нет');

let expenses = [];
let exp  = [];

function getExpensesMonth() {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');
        exp[i] = prompt('Во сколько это обойдется?', '2000');
        if (!isNumber(exp[i])) {
        do {
            exp[i] = prompt('Во сколько это обойдется?', '2000');
        }
        while(!isNumber(exp[i]));
        }
        sum += +exp[i] ;            
    
}
return sum;
}

const expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function (money) {
    return money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth(money);

const getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
};

const showTypeOf = function(data) {
    console.log(typeof data);
};

const budgetDay = Math.floor(accumulatedMonth / 30);

const getStatusIncome = function() {
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

showTypeOf(+money);
showTypeOf(income);
showTypeOf(deposit);
console.log(`Расходы за месяц: ${expensesAmount}`);
console.log(addExpenses.toLowerCase().split(', '));
getTargetMonth()<0 ? console.log('Цель не будет достигнута') : console.log(`Цель будет достигнута за ${getTargetMonth()} месяцев(-а)`);
console.log(`Бюджет на день: ${budgetDay}`);
getStatusIncome();








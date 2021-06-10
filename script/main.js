/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
};
let money;

let start = function() {
    {
        do {
            money = prompt('Ваш месячный доход?','50000');
        }
        while (!isNumber(money));
    }
};
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 300000,
    period: 3,
    budget: +money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,

    asking: function() {
        let addExpenses =  prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let expenses;
            let exp;
            expenses = prompt('Введите обязательную статью расходов?');
            exp =  prompt('Во сколько это обойдется?', '2000');
            if (!isNumber(exp)) {
            do {
                exp = prompt('Во сколько это обойдется?', '2000');
            }
            while(!isNumber(exp));
            }
            appData.expenses[expenses] = exp;   
        }
    },

    getExpensesMonth: function() {
        for (let i in appData.expenses) {
            appData.expensesMonth += +appData.expenses[i];   
        }
   },

   getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
   },

   getTargetMonth: function() {
        appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth); 
    },

    getStatusIncome: function() {
        switch(true) {
            case (appData.budgetDay >= 1200): 
                console.log('У вас высокий уровень дохода');
            break;
        
            case (appData.budgetDay < 1200 && appData.budgetDay >=600):
                console.log('У вас средний уровень дохода');
            break;
        
            case (appData.budgetDay < 600 && appData.budgetDay >=0):
                console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        
            default: 
                console.log('Что то пошло не так');   
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();

console.log('Расходы за месяц: ' + appData.expensesMonth);
appData.targetMonth < 0 ? console.log('Цель не будет достигнута') : console.log(`Цель будет достигнута за ${appData.targetMonth} месяцев(-а)`);
appData.getStatusIncome();

console.group("Наша программа включает в себя данные:");
for (let key in appData) {
    console.log(key + ' :' + appData[key]);
}
console.groupEnd();









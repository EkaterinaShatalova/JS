/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
};

let money;

const start = function() {
    {
        do {
            money = prompt('Ваш месячный доход?','50000');
        }
        while (!isNumber(money));
    }
};
start();

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 300000,
    period: 3,
    budget: +money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,

    asking: function() {
        if (confirm('Есть ли у вас доп заработок?')) {
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt('Какой у вас доп заработок?', 'Фриланс');
            }
            while (isNumber(itemIncome) || itemIncome == 0);

            do {
                cashIncome = prompt('Сколько вы на этом зарабатываете?', 10000);
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
        }
        while (isNumber(addExpenses) || addExpenses == 0);
        appData.addExpenses = addExpenses.split(', ').map(elem => elem[0].toUpperCase() + elem.toLowerCase().substring(1)).join(', ');
        
        for (let i = 0; i < 2; i++) {
            let expenses;
            let exp;
            expenses = prompt('Введите обязательную статью расходов?');
            do {
                exp = prompt('Во сколько это обойдется?', '2000');
            }
            while(!isNumber(exp));
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
    },
    getInfoDeposit: function() {
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if(appData.deposit) {
            let dep;
            do {
                dep = prompt('Введите сумму депозита?', 20000);
            }
            while(!isNumber(dep) || dep == 0);

            appData.moneyDeposit =+dep;
            let perc;
            do {
                perc = prompt('Введите % депозита', 10);
            }
            while(!isNumber(perc) || perc >  100);
            appData.percentDeposit = +perc;
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getInfoDeposit();
appData.calcSavedMoney();

console.log('Расходы за месяц: ' + appData.expensesMonth);
appData.targetMonth < 0 ? console.log('Цель не будет достигнута') : console.log(`Цель будет достигнута за ${appData.targetMonth} месяцев(-а)`);
appData.getStatusIncome();

console.group("Наша программа включает в себя данные:");
for (let key in appData) {
    console.log(key + ' :' + appData[key]);
}
console.groupEnd();









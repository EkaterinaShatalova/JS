/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('input.income-title');
const incomeAmount = document.querySelector('.income-amount');
let incomeItems =  document.querySelectorAll('.income-items');
const btnPlusIncome = document.getElementsByTagName('button')[0];
const addIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesItems =  document.querySelectorAll('.expenses-items');
const expensesTitle = document.querySelector('input.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const btnPlusExpenses = document.getElementsByTagName('button')[1];
const addExpensesItem = document.querySelector('.additional_expenses-item');
const checkbox = document.querySelector('#deposit-check');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const budgetMonth = document.querySelector('.budget_month-value');
const resBudgetDay = document.getElementsByClassName('result-total')[1];
const resExpensesMonth = document.getElementsByClassName('result-total')[2];
const resAddIncome = document.getElementsByClassName('result-total')[3];
const resAddExpenses = document.getElementsByClassName('result-total')[4];
const resIncomePeriod = document.getElementsByClassName('result-total')[5];
const resTargetMonth = document.getElementsByClassName('result-total')[6];
const btnStart = document.getElementById('start');
const period = document.querySelector('.period-select');
const  periodAmount = document.querySelector('.period-amount');

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
};

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    addIncomes:0,

    addIncomeBlock: function() {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        let newElems = cloneIncomeItems.children;
        for (let item of newElems) {
            item.value = '';
        }
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncome);
        incomeItems =  document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            btnPlusIncome.style.display = 'none';
        }
    },
    addExpensesBlock: function() {
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        let newElems = cloneExpensesItems.children;
        for (let item of newElems) {
            item.value = '';
        }
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnPlusExpenses);
        expensesItems =  document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            btnPlusExpenses.style.display = 'none';
        }
    },
    start:  function() {
        appData.budget = salaryAmount.value;
        appData.getIncomes();  
        appData.getIncomeMonth();
        appData.getAddIncomes();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getBudget();
        appData.getTargetMonth();
        // appData.getInfoDeposit();
        appData.calcSavedMoney();
        appData.getStatusIncome();
        appData.showResults();
    },
    showResults: function(){
        budgetMonth.value = appData.budgetMonth;
        resBudgetDay.value = appData.budgetDay;
        resExpensesMonth.value = appData.expensesMonth;
        resAddIncome.value = appData.addIncome.join(', ');
        resAddExpenses.value = appData.addExpenses.join(', ');
        resTargetMonth.value = appData.targetMonth;
        resIncomePeriod.value = appData.calcSavedMoney();  
        period.addEventListener('input', function() {
            resIncomePeriod.value = appData.calcSavedMoney();   
        });

    },
    getIncomes: function(){
        incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title');
        let cashIncome = item.querySelector('.income-amount');
        if (isNumber(cashIncome.value) && itemIncome.value != 0)  {
            appData.income[itemIncome.value] = cashIncome.value;
        }
        });
    },
    getAddIncomes: function() {
        addIncomeItem.forEach(item => {
            let itemValue = item.value.trim();
            if (itemValue != 0) {
                appData.addIncome.push(itemValue);
            }
        });
    },

    getAddExpenses: function() {
        let addExpenses = addExpensesItem.value.split(',');
        for (let i = 0; i < addExpenses.length; i++) {
            addExpenses[i] = addExpenses[i].trim();
            if (addExpenses[i] != 0 ) {
                appData.addExpenses.push(addExpenses[i]); 
            }
        }
    },

    getExpensesMonth: function() {
        for (let i in appData.expenses) {
            appData.expensesMonth += +appData.expenses[i];   
        }
   },

   getIncomeMonth: function() {
    for (let i in appData.income) {
        appData.addIncomes += +appData.income[i];
    }
},

   getBudget: function() {
        appData.budgetMonth = +appData.budget + appData.addIncomes - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
   },

   getTargetMonth: function() {
       let mission = targetAmount.value;
       if (isNumber(mission) && mission > 0) {
        appData.targetMonth = Math.ceil( mission / appData.budgetMonth);
       }
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
        return appData.budgetMonth * period.value;
        
    }
};


period.addEventListener('input', function() {
    periodAmount.innerText = period.value;
});
btnStart.addEventListener('click', appData.start);
btnPlusIncome.addEventListener('click', appData.addIncomeBlock);
btnPlusExpenses.addEventListener('click', appData.addExpensesBlock);

btnStart.setAttribute('disabled', 'disabled');  
salaryAmount.addEventListener('input', function() {
    if(salaryAmount.value == 0) {
        btnStart.setAttribute('disabled', 'disabled'); 
    } else {btnStart.removeAttribute('disabled');}
});

const allTitles = document.querySelectorAll('input[placeholder="Наименование"]');
const allSums = document.querySelectorAll('input[placeholder="Сумма"]');

Array.from(allTitles).forEach(function(item){
    item.addEventListener('input', function() {
        item.value = item.value.replace(/[^.\,\-_\'\"\?\!\: А-Яа-я()]/gi, "" );
    });
});

Array.from(allSums).forEach(function(item){
    item.addEventListener('input', function() {
        item.value = item.value.replace(/[^0-9]/, "" );
    });
});













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
const periodAmount = document.querySelector('.period-amount');
const btnCancel = document.getElementById('cancel');

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
};

const AppData = function() {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.targetMonth = 0;
    this.addIncomes =0;
};

AppData.prototype.check = function() {
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
};

AppData.prototype.addIncomeBlock = function() {
    
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
    this.check(); 
};

AppData.prototype.addExpensesBlock = function() {
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
    this.check();
    
};

AppData.prototype.start = function() {   
    this.budget = +salaryAmount.value;
    this.getIncomes(); 
    this.getExpenses(); 
    this.getIncomeMonth();
    this.getAddIncomes();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getBudget();
    this.getTargetMonth();
    // appData.getInfoDeposit();
    this.calcSavedMoney();
    this.getStatusIncome();
    this.showResults();
    btnStart.style.display = 'none';
    btnCancel.style.display = 'inline';
    const textInputs = document.querySelectorAll('input[type = text]');
    textInputs.forEach(function(item) {
        item.setAttribute('disabled', 'disabled');
    });
};

AppData.prototype.reset = function() {
    this.income = {};
    this.addIncome= [];
    this.expenses= {};
    this.addExpenses= [];
    this.deposit=false;
    this.percentDeposit= 0;
    this.moneyDeposit= 0;
    this.budget= 0;
    this.budgetDay= 0;
    this.budgetMonth= 0;
    this.expensesMonth= 0;
    this.targetMonth= 0;
    this.addIncomes=0;
    const allTitles = document.querySelectorAll('input[placeholder="Наименование"]');
    const allSums = document.querySelectorAll('input[placeholder="Сумма"]');
    allTitles.forEach(function(item) {
        item.value = '';
    });
    allSums.forEach(function(item) {
        item.value = '';
    });
    this.showResults();
    btnCancel.style.display = 'none';
    btnStart.style.display = 'inline';
    btnStart.setAttribute('disabled', 'disabled'); 
    periodSelect.value = 1;
    periodAmount.textContent = '1';
    expensesItems =  document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 2) {
        expensesItems[1].remove();
        }
    else if (expensesItems.length === 3) {
        expensesItems[1].remove();
        expensesItems[2].remove();
        btnPlusExpenses.style.display = 'inline';
        }
    incomeItems =  document.querySelectorAll('.income-items');
    if (incomeItems.length === 2) {
        incomeItems[1].remove();
        }
    else if (incomeItems.length === 3) {
        incomeItems[1].remove();
        incomeItems[2].remove();
        btnPlusIncome.style.display = 'inline';
        }
    const textInputs = document.querySelectorAll('input[type = text]');
    textInputs.forEach(function(item) {
        item.removeAttribute('disabled', 'disabled');
    });
};

AppData.prototype.showResults = function() {
    const _this = this;
    budgetMonth.value = this.budgetMonth;
    resBudgetDay.value = this.budgetDay;
    resExpensesMonth.value = this.expensesMonth;
    resAddIncome.value = this.addIncome.join(', ');
    resAddExpenses.value = this.addExpenses.join(', ');
    resTargetMonth.value = this.targetMonth;
    resIncomePeriod.value = this.calcSavedMoney();  
    period.addEventListener('input', function() {
        resIncomePeriod.value = _this.calcSavedMoney();
    });
};

AppData.prototype.getIncomes = function() {
    const _this = this;
    incomeItems.forEach(function(item) {
    let itemIncome = item.querySelector('.income-title');
    let cashIncome = item.querySelector('.income-amount');
    if (isNumber(cashIncome.value) && itemIncome.value != 0)  {
        _this.income[itemIncome.value] = cashIncome.value;
    }
    });
};

AppData.prototype.getExpenses = function() {
    const _this = this;
    expensesItems.forEach(function(item) {
    let itemExpense = item.querySelector('.expenses-title');
    let cashExpense = item.querySelector('.expenses-amount');
    if (isNumber(cashExpense.value) && itemExpense.value != 0)  {
        _this.expenses[itemExpense.value] = cashExpense.value;
    }
    });
};

AppData.prototype.getAddIncomes = function() {
    addIncomeItem.forEach(item => {
        let itemValue = item.value.trim();
        if (itemValue != 0) {
            this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.getAddExpenses = function() {
    let addExpenses = addExpensesItem.value.split(',');
    for (let i = 0; i < addExpenses.length; i++) {
        addExpenses[i] = addExpenses[i].trim();
        if (addExpenses[i] != 0 ) {
            this.addExpenses.push(addExpenses[i]); 
        }
    }
};

AppData.prototype.getExpensesMonth = function() {
    for (let i in this.expenses) {
        this.expensesMonth += +this.expenses[i];   
    }
};

AppData.prototype.getIncomeMonth = function() {
for (let i in this.income) {
    this.addIncomes += +this.income[i];
}
};

AppData.prototype.getBudget = function() {
    this.budgetMonth = +this.budget + this.addIncomes - this.expensesMonth;
    this.budgetDay = Math.ceil(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function() {
   let mission = targetAmount.value;
   if (isNumber(mission) && mission > 0) {
    this.targetMonth = Math.ceil( mission / this.budgetMonth);
   }
};

AppData.prototype.getStatusIncome =  function() {
    switch(true) {
        case (this.budgetDay >= 1200): 
            console.log('У вас высокий уровень дохода');
        break;
    
        case (this.budgetDay < 1200 && this.budgetDay >=600):
            console.log('У вас средний уровень дохода');
        break;
    
        case (this.budgetDay < 600 && this.budgetDay >=0):
            console.log('К сожалению у вас уровень дохода ниже среднего');
        break;
    
        default: 
            console.log('Что то пошло не так');   
    }
};

// AppData.prototype.getInfoDeposit = function() {
//     appData.deposit = confirm('Есть ли у вас депозит в банке?');
//     if(appData.deposit) {
//         let dep;
//         do {
//             dep = prompt('Введите сумму депозита?', 20000);
//         }
//         while(!isNumber(dep) || dep == 0);
//         appData.moneyDeposit =+dep;
//         let perc;
//         do {
//             perc = prompt('Введите % депозита', 10);
//         }
//         while(!isNumber(perc) || perc >  100);
//         appData.percentDeposit = +perc;
//     }
// };

AppData.prototype.calcSavedMoney = function() {
    return this.budgetMonth * period.value;
};


AppData.prototype.eventListeners = function() {
    const _this = this;
    _this.check();

    period.addEventListener('input', function() {
        periodAmount.innerText = period.value;
    });   
    btnStart.addEventListener('click', _this.start.bind(_this));

    btnCancel.addEventListener('click', _this.reset.bind(_this));
    btnPlusIncome.addEventListener('click', _this.addIncomeBlock.bind(_this));
    btnPlusExpenses.addEventListener('click', _this.addExpensesBlock.bind(_this));
    
    btnStart.setAttribute('disabled', 'disabled');
    salaryAmount.addEventListener('input', function() {
        if(salaryAmount.value == 0) {
            btnStart.setAttribute('disabled', 'disabled'); 
        } else {btnStart.removeAttribute('disabled');}
    });
};

const appData = new AppData();
appData.eventListeners();


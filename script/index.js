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
const depositBank = document.querySelector('.deposit-bank');
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

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
};

class AppData {
    constructor() {
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
        this.incomeMonth =0;
    }

    check() {
        const allTitles = document.querySelectorAll('input[placeholder="Наименование"]');
        const allSums = document.querySelectorAll('input[placeholder="Сумма"]');
        const percent = document.querySelector('input[placeholder="Процент"]');
        
        Array.from(allTitles).forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^.\,\-_\'\"\?\!\: А-Яа-я()]/gi, "" );
            });
        });  
        Array.from(allSums).forEach(function(item){
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9]/, "" );
            });
        });

        percent.addEventListener('input', () => {
            percent.value = percent.value.replace(/[^0-9]/, "" );
        })
        

    }

    addBlock(event) {
        const startStr = event.target.className.split(' ')[1].replace('_add', '');
        let items =  document.querySelectorAll(`.${startStr}-items`);
        let cloneItems = items[0].cloneNode(true);
        let newElems = cloneItems.children;
        for (let item of newElems) {
            item.value = '';
            }
        items[0].parentNode.insertBefore(cloneItems, event.target);

        items =  document.querySelectorAll(`.${startStr}-items`);
        if (items.length === 3) {
            event.target.style.display = 'none';
            }
        this.check();
    }

    start() {  
        this.budget = +salaryAmount.value;
        this.getExpInc();
        this.getAddExpInc();
        this.getInfoDeposit();
        this.getBudget();
        this.getTargetMonth();
        this.calcSavedMoney();
        this.getStatusIncome();
        this.showResults();
        btnStart.style.display = 'none';
        btnCancel.style.display = 'inline';
        const textInputs = document.querySelectorAll('input[type = text]');
        textInputs.forEach((item) => {
            item.setAttribute('disabled', 'disabled');
        });
    }

    reset() {
        this.income = {};
        this.addIncome= [];
        this.expenses= {};
        this.addExpenses = [];
        this.deposit=false;
        this.percentDeposit= 0;
        this.moneyDeposit= 0;
        this.budget= 0;
        this.budgetDay= 0;
        this.budgetMonth= 0;
        this.expensesMonth= 0;
        this.targetMonth= 0;
        this.incomeMonth=0;
        const allTitles = document.querySelectorAll('input[placeholder="Наименование"]');
        const allSums = document.querySelectorAll('input[placeholder="Сумма"]');
        allTitles.forEach((item) => {
            item.value = '';
        });
        allSums.forEach((item) => {
            item.value = '';
        });
        this.showResults();
        btnCancel.style.display = 'none';
        btnStart.style.display = 'inline';
        periodSelect.value = 1;
        periodAmount.textContent = '1';
        depositPercent.style.display = 'none';
        depositPercent.value = '';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        depositBank.style.display = 'none';
        depositBank.value = '';
        checkbox.checked = false;
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
        textInputs.forEach((item) => {
            item.removeAttribute('disabled', 'disabled');
        });
    }

    showResults() {
        budgetMonth.value = this.budgetMonth;
        resBudgetDay.value = this.budgetDay;
        resExpensesMonth.value = this.expensesMonth;
        resAddIncome.value = this.addIncome.join(', ');
        resAddExpenses.value = this.addExpenses.join(', ');
        resTargetMonth.value = this.targetMonth;
        resIncomePeriod.value = this.calcSavedMoney();  
        period.addEventListener('input', () => {
            resIncomePeriod.value = this.calcSavedMoney();
        });
    }

    getExpInc() {
        const count = (item) => {
            const startStr = item.className.split('-')[0];
            const itemTitle = item.querySelector(`.${startStr}-title`);
            const itemAmount = item.querySelector(`.${startStr}-amount`);
            if (itemTitle.value !=='' && itemAmount.value !== '')  {
                this[startStr][itemTitle.value] = itemAmount.value;
                this[`${startStr}Month`] += +itemAmount.value;
            }
        };
        incomeItems =  document.querySelectorAll('.income-items');
        expensesItems =  document.querySelectorAll('.expenses-items');
        incomeItems.forEach(count);
        expensesItems.forEach(count);
    }

    getAddExpInc() {
        const count = (item) => {
            let startStr = item.className.substr(11).replace('-item', '');
            if(item.value.trim() !== '') {
                const itemValue = item.value.toString().split(',');
                itemValue.forEach(item => {
                    if(item.trim() !== '') {
                        item = item.replace(/\s+/g, '');
                        startStr = startStr[0].toUpperCase() +startStr.substring(1);
                        this[`add${startStr}`].push(item);
                        }
                });
            }
        };
        addIncomeItem.forEach(count);
        count(addExpensesItem); 
    }

    getBudget() {
        const monthDeposit  = this.moneyDeposit * (this.percentDeposit / 100);
        this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    }

    getTargetMonth() {
        const mission = targetAmount.value;
        if (isNumber(mission) && mission > 0) {
            this.targetMonth = Math.ceil( mission / this.budgetMonth);
        }
    }

    getStatusIncome() {
        switch(true) {
            case (this.budgetDay >= 1200): 
                console.log(`У вас высокий уровень дохода`);
            break;
        
            case (this.budgetDay < 1200 && this.budgetDay >=600):
                console.log(`У вас средний уровень дохода`);
            break;
        
            case (this.budgetDay < 600 && this.budgetDay >=0):
                console.log(`К сожалению у вас уровень дохода ниже среднего`);
            break;

            case (this.budgetDay < 0):
                console.log(`Вы в минусе :(`);
            break;
        
            default: 
                console.log(`Что то пошло не так`);
            }
    }


    calcSavedMoney() {
        return Math.ceil(this.budgetMonth * period.value);
    }

    getInfoDeposit() {
        if (this.deposit) {
            this.percentDeposit = +depositPercent.value;
            this.moneyDeposit = +depositAmount.value;
        }
     }
    
    changePercent() {
        const valueSelect = this.value;
        if (valueSelect === 'other') {
            depositPercent.value = '';
            depositPercent.style.display = 'inline-block';

        } else {
            depositPercent.style.display = 'none';
            depositPercent.value = valueSelect;
        }
    }
    depositHandler() {
        if(checkbox.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent, this.check);

        } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositPercent.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            depositPercent.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changePercent, this.check);
        }
    }

    salaryCheck() {
        let salary = true;
        if (salaryAmount.value == '') {
            salary = false;
        } 
        return salary;
    }

    percentCheck() {
        let percent = true;
        if (depositBank.value === 'other') {       
                if(depositPercent.value < 0 || depositPercent.value > 100 || depositPercent.value == '') {
                    percent = false;
                    alert('Введите число от 0 до 100');
                    depositPercent.value = '';
                }
            }  
        return percent;
    }

    eventListeners() {
        this.check();

        period.addEventListener('input', () =>  {
            periodAmount.innerText = period.value;
        });

        btnStart.addEventListener('click', () => {
            if (this.salaryCheck() && this.percentCheck()) {
                this.start();
            }
            
        });

        btnCancel.addEventListener('click', () => {
            this.reset();
        });

        btnPlusIncome.addEventListener('click', (event) => {
            this.addBlock(event);
        });

        btnPlusExpenses.addEventListener('click', (event) => {
            this.addBlock(event);
        });
        
        checkbox.addEventListener('change', () => {
            this.depositHandler();
        });

    }
}

const appData = new AppData();
appData.eventListeners();







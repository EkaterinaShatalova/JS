/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const incomeItems = document.querySelector('.income-items');
const expensesItems = document.querySelector('.expenses-items');

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = incomeItems.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const btnPlusIncome = document.getElementsByTagName('button')[0];
const addIncomeItem = document.querySelectorAll('.additional_income-item');
const expensesTitle = expensesItems.querySelector('.expenses-title');
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

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
const resultTotal = Array.from(document.getElementsByClassName('result-total')).slice(1,7);
const btnStart = document.getElementById('start');

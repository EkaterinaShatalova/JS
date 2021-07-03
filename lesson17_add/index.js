/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const helloMessage = document.getElementById('hello');
const todayMessage = document.getElementById('today');
const timeMessage = document.getElementById('time');
const remainingMessage = document.getElementById('remaining');

const newYearRemaining = function() {
    let date = new Date();
    let time = date.toLocaleTimeString('en');
    let day = date.toLocaleString('ru', {weekday: 'long'}).toUpperCase()[0] + date.toLocaleString('ru', {weekday: 'long'}).toLowerCase().substr(1);
    let dayInterval = (date.getHours() >=0 && date.getHours() <=3) ? 'ночи' : (date.getHours() >=4 && date.getHours() <=11) ? 'утро' : (date.getHours() >=12 && date.getHours() <=17) ?  'день' : 'вечер';
    let newYear = new Date('1 january 2022 00:00:00').getTime();
    let remaining = Math.floor((newYear - new Date().getTime())/1000/60/60/24);
    const helloEnding = function(param) {
        let ending;
        if(param === 'ночи' ) {
            ending = 'ой';
        } else if (param === 'утро') {
            ending = 'ое';
        } else {
            ending = 'ый';
        }
        return ending;
    };

    const dayEnding = function(param) {
        let ending;
        if (param.toString()[param.toString().length - 1].includes(['2', '3', '4']) ) {
            ending = 'дня';
        } else if (param.toString()[param.toString().length - 1] === '1') {
            ending = 'день';
        } else {
            ending = 'дней';
        }
        return ending;
    };

    helloMessage.innerText = `Добр${helloEnding(dayInterval)} ${dayInterval}`;
    todayMessage.innerText = `Сегодня: ${day}`;
    timeMessage.innerText = `Текущее время: ${time}`;
    remainingMessage.innerText = `До нового года осталось: ${remaining} ${dayEnding(remaining)}`;

};
newYearRemaining();

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

    const ending = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    helloMessage.innerText = `Добр${helloEnding(dayInterval)} ${dayInterval}`;
    todayMessage.innerText = `Сегодня: ${day}`;
    timeMessage.innerText = `Текущее время: ${time}`;
    remainingMessage.innerText = `До нового года осталось: ${remaining} ${ending(remaining, ['день', 'дня', 'дней'])}`;

};

newYearRemaining();

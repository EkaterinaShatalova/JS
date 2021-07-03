/*jshint esversion: 8 */
/* jshint node: true */


window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerSeconds = document.querySelector('#timer-seconds');
        const idInterval = setInterval(updateClock, 1000);
        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime();
            const dateNow = new Date().getTime();
            const timeRemaining = (dateStop - dateNow) / 1000;
            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor((timeRemaining / 60 / 60));
            return { timeRemaining, hours, minutes, seconds };
        };
        const zeroBegin = function(elem) {
            let begin;
            if (elem.toString() === elem.toString()[0]) {
                begin = '0';
            } else {
                begin = '';
            }
            return begin + elem.toString();
        };
        function updateClock() {
            const timer = getTimeRemaining();
            timerMinutes.textContent = zeroBegin(timer.minutes);
            timerHours.textContent = zeroBegin(timer.hours);
            timerSeconds.textContent = zeroBegin(timer.seconds);
            if (Math.floor(timer.timeRemaining) <= 0) {
                clearInterval(idInterval);
                timerMinutes.textContent = '00';
                timerHours.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };
    };
    // countTimer('3 july 2021 15:13:00');
});

/*jshint esversion: 8 */
/* jshint node: true */


window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';

    //таймер
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
        const zeroBegin = elem => elem < 10 ? `0${elem}` : elem;
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
    countTimer('8 july 2021 15:13:00');

    //меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const menuItems = menu.querySelectorAll('ul>li>a');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', () => {
            handlerMenu();
        });
        const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            handlerMenu();
        });
        menuItems.forEach(
            item => item.addEventListener('click', () => {
                handlerMenu();
            }));
    };
    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const popupContent = document.querySelector('.popup-content');
        const animation = () => {
            popupContent.style.left = 0;
            let count = 0;
            let flyInterval;
            const flyAnimate = function() {
                count++;
                flyInterval = requestAnimationFrame(flyAnimate);
                if (count * 30 <= document.documentElement.getBoundingClientRect().width / 2) {
                    popupContent.style.left = count * 30 + 'px';
                } else {
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);
        };
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup-btn')) {
                if (document.documentElement.clientWidth >= 768) {
                    popup.style.display = 'block';
                    animation();
                    popup.style.height = `${document.documentElement.clientHeight}px`;
                } else {
                    popup.style.display = 'block';
                }
            } else if (event.target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            }
        });
    };
    togglePopup();
});




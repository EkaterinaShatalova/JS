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
        const menu = document.querySelector('menu');
        const btn = document.querySelector('main').querySelector('a');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        const scroll = event => {
            event.preventDefault();
            const target = event.target;
            if (target.closest('a') === btn) {
                const id = btn.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // eslint-disable-next-line max-len
            else if (target.closest('div.menu') || target.classList.contains('close-btn') || (!target.closest('menu') && menu.classList.contains('active-menu')) || (target.closest('a') === btn) && menu.classList.contains('active-menu')) {
                handlerMenu();
            } else if (target.closest('ul.menu')) {
                handlerMenu();
                const id = target.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };
        document.addEventListener('click', scroll);
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
                    popupContent.style.left = `${count * 30}px`;
                } else {
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);
        };
        document.addEventListener('click', event => {
            if (event.target.classList.contains('popup-btn')) {
                if (document.documentElement.clientWidth >= 768) {
                    popup.style.display = 'block';
                    animation();
                    popup.style.height = `${document.documentElement.clientHeight}px`;
                } else {
                    popup.style.display = 'block';
                    popupContent.style.left = `${document.documentElement.clientWidth/2}px`;
                }
            }
        });

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }

        });
    };
    togglePopup();

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
});




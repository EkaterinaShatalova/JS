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
            const target = event.target;
            if (target.closest('a') === btn && !menu.classList.contains('active-menu')) {
                event.preventDefault();
                const id = btn.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if ((target.closest('a') === btn) && menu.classList.contains('active-menu')) {
                event.preventDefault();
                handlerMenu();
                const id = btn.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // eslint-disable-next-line max-len
            else if (target.closest('div.menu') || target.classList.contains('close-btn') || (!target.closest('menu') && menu.classList.contains('active-menu'))) {
                event.preventDefault();
                handlerMenu();
            } else if (target.closest('ul.menu')) {
                event.preventDefault();
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

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item');
        const slider = document.querySelector('.portfolio-content');
        const dotsList = document.querySelector('.portfolio-dots');
        const insertBeforeEnd = () => {
            let i = 0;
            while (i < slide.length) {
                const li = document.createElement("li");
                li.classList.add('dot');
                dotsList.insertAdjacentElement('afterbegin', li);
                i++;
            }
        };
        insertBeforeEnd();
        const dot = document.querySelectorAll('.dot');
        let currentSlide = 0;
        let interval;
        dot[0].classList.add('dot-active');
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };
    slider();

    const command =  () => {
        const command = document.querySelectorAll('.command__photo');
        let photo;
        command.forEach(item => {
            item.addEventListener('mouseover', event => {
                photo = event.target.src;
                event.target.src = event.target.dataset.img;
            });
            item.addEventListener('mouseout', event => {
                event.target.src = photo;
            });
        });
    };
    command();
    const check = () => {
        document.addEventListener('input', event => {
            const target = event.target;
            if (target.classList.contains('calc-item')) {
                target.value = target.value.replace(/\D\./, "");
            } else if (target.name === "user_name") {
                target.value = target.value.replace(/[^А-Яа-я ]/gi, "");
            } else if (target.name === "user_phone") {
                target.value = target.value.replace(/[^0-9+]/, "");
            } else if (target.name === "user_email") {
                target.value = target.value.replace(/[^A-Za-z-_!~@'\.\*]/gi, "");
                const emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]{2,3}$/);
                if (!emailPattern.test(event.target.value)) {
                    event.target.value = '';
                    alert('Введите корректный email');
                }
            } else if (target.name === "user_message") {
                target.value = target.value.replace(/[^А-Яа-я 0-9 \-\.\,\!\?\:\;\"]/gi, "");
            }
        });
        document.addEventListener('blur', event => {
            event.target.value  = event.target.value.replace(/^[\s-]+/, '');
            event.target.value  = event.target.value.replace(/[\s-]+$/, '');
            event.target.value  = event.target.value.replace(/-+/g, '-');
            event.target.value  = event.target.value.replace(/\s+/g, ' ');
            if (event.target.name === "user_name") {
                event.target.value = event.target.value.split(' ').map(elem => elem[0].toUpperCase() + elem.toLowerCase().substring(1)).join(' ');
            }
        }, true);
    };
    check();

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcCount = document.querySelector('.calc-count');
        const calcDay = document.querySelector('.calc-day');
        const calcTotal = document.getElementById('total');
        const countSum = () => {
            let total = 0;
            let countValue = 1;
            let dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;
            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }
            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            calcTotal.textContent = total;
        };
        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };
    calc(100);

    const sendForm = () => {
        document.addEventListener('submit', event => {
            const errorMessage = 'Что-то пошло не так...';
            const loadMessage = 'Загрузка...';
            const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem';
            event.preventDefault();
            event.target.appendChild(statusMessage);
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                statusMessage.textContent = loadMessage;
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    statusMessage.textContent = successMessage;
                } else {
                    statusMessage.textContent = errorMessage;
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            const formData = new FormData(event.target);
            let body = {};
            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            request.send(JSON.stringify(body));
            event.target.reset();
        });
    };
    sendForm();
});





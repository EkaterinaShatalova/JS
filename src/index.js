/*jshint esversion: 8 */
/* jshint node: true */
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import check from './modules/check';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// eslint-disable-next-line strict
'use strict';
//таймер
countTimer('12 august 2021 15:13:00');
//меню
toggleMenu();
//popup
togglePopup();
//табы
tabs();
//слайдер
slider();
//команда
command();
//валидация
check();
//калькулятор
calc(100);
//отправка формы
sendForm();

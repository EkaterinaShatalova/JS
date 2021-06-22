/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

//задание 1 и 2
const book = document.querySelectorAll('.book');
const library = document.querySelector('.books');
let arrBooks = [];

book.forEach(elem => {
    arrBooks[Number(elem.firstElementChild.firstElementChild.innerText[6]-1)] = elem;
});
arrBooks[2].firstElementChild.firstElementChild.innerText = 'Книга 3. this и Прототипы Объектов';

library.textContent = '';
arrBooks.forEach(elem => {
    library.insertAdjacentElement('beforeend', elem);
    }
);

//задание 3
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//задание 4
const adv = document.querySelector('.adv');
adv.remove();


//задание 5
//для книги 2

const book2elems = Array.from(arrBooks[1].firstElementChild.nextElementSibling.children);

let arrBook2 = [];
let arrChapter2 = [];
let arrApp2 = [];

book2elems.forEach(elem => {
    if (elem.innerText === 'Предисловие') {
        arrBook2[1] = elem;
    }
    else if (elem.innerText === 'Введение') {
        arrBook2[0] = elem;
    }
    else if (elem.innerText.includes('Приложение')) {
        if (elem.innerText.includes('Приложение A')) {
            arrApp2[0] = elem;
        }
        if (elem.innerText.includes('Приложение B')) {
            arrApp2[1] = elem;
        }
        if (elem.innerText.includes('Приложение C')) {
            arrApp2[2] = elem;
        }
        if (elem.innerText.includes('Приложение D')) {
            arrApp2[3] = elem;
        }
    }
    else {
        arrChapter2[Number(elem.innerText[6])-1] = elem;
    }
    
});

const arrBook2Final = arrBook2.concat(arrChapter2, arrApp2);

arrBook2Final.forEach(elem => {
    arrBooks[1].insertAdjacentElement('beforeend', elem);
});

// для 5й книги тож самое

let arrBook5 = [];
let arrChapter5 = [];
let arrApp5 = [];

const book5elems = Array.from(arrBooks[4].firstElementChild.nextElementSibling.children);

book5elems.forEach(elem => {
    if (elem.innerText === 'Предисловие') {
        arrBook5[1] = elem;
    }
    else if (elem.innerText === 'Введение') {
        arrBook5[0] = elem;
    }
    else if (elem.innerText.includes('Приложение')) {
        if (elem.innerText.includes('Приложение A')) {
            arrApp5[0] = elem;
        }
        if (elem.innerText.includes('Приложение B')) {
            arrApp5[1] = elem;
        }
        if (elem.innerText.includes('Приложение C')) {
            arrApp5[2] = elem;
        }
        if (elem.innerText.includes('Приложение D')) {
            arrApp5[3] = elem;
        }
    }
    else {
        arrChapter5[Number(elem.innerText[6])-1] = elem;
    }
    
});

const arrBook5Final = arrBook5.concat(arrChapter5, arrApp5);

arrBook5Final.forEach(elem => {
    arrBooks[4].insertAdjacentElement('beforeend', elem);
});

//задание 6
const chapter8 = document.createElement('li');
chapter8.innerText = 'Глава 8: За пределами ES6';
arrBooks[5].firstElementChild.nextElementSibling.children[8].insertAdjacentElement('beforeend', chapter8);

















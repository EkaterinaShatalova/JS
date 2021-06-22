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
});

//задание 3
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//задание 4
const adv = document.querySelector('.adv');
adv.remove();


//задание 5
const contentSorting = function(bookNumber) {
    const bookElems = Array.from(arrBooks[bookNumber].firstElementChild.nextElementSibling.children);

    let arrBook = [];
    let arrChapter = [];
    let arrApp = [];

    bookElems.forEach(elem => {
        if (elem.innerText === 'Предисловие') {
            arrBook[1] = elem;
        }
        else if (elem.innerText === 'Введение') {
            arrBook[0] = elem;
        }
        else if (elem.innerText.includes('Приложение')) {
            if (elem.innerText.includes('Приложение A')) {
                arrApp[0] = elem;
            }
            if (elem.innerText.includes('Приложение B')) {
                arrApp[1] = elem;
            }
            if (elem.innerText.includes('Приложение C')) {
                arrApp[2] = elem;
            }
            if (elem.innerText.includes('Приложение D')) {
                arrApp[3] = elem;
            }
        }
        else {
            arrChapter[Number(elem.innerText[6])-1] = elem;
        }
    });
    
    const arrBookFinal = arrBook.concat(arrChapter, arrApp);
    
    arrBookFinal.forEach(elem => {
        arrBooks[bookNumber].insertAdjacentElement('beforeend', elem);
        }
    );
};

contentSorting(1);
contentSorting(4);

//задание 6
const chapter8 = document.createElement('li');
chapter8.innerText = 'Глава 8: За пределами ES6';
arrBooks[5].firstElementChild.nextElementSibling.children[8].insertAdjacentElement('beforeend', chapter8);

















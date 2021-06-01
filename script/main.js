/*jshint esversion: 8 */
/* jshint node: true */

let week = [];
week['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
week['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let lang = prompt('Введите ru для русского, en для английского', 'ru');
let namePerson = prompt('Введите имя Артем или Максим', 'Артем');

const map = new Map([['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']], 
                    ['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']]]);

if (lang === 'ru') {
    console.log(week['ru']);
} else if (lang === 'en') {
    console.log(week['en']);
} else {
    console.log('Что то пошло не так');
}

switch(lang) {
	case ('ru'): 
        console.log(week['ru']);
    break;
	case ('en'): 
        console.log(week['en']);
    break;
	default: 
        console.log('Что то пошло не так');
}

console.log(week[lang]);

console.log(map.get(lang));

let name = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ?  console.log('преподаватель') : console.log('студент');





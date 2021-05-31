/*jshint esversion: 8 */
/* jshint node: true */
const weekRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


let week = [];
week['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
week['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let lang = prompt('Введите ru для русского, en для английского', 'ru');

let namePerson = prompt('Введите имя Артем или Максим', 'Артем');

if (lang === 'ru') {
    console.log(weekRus);
} else if (lang === 'en') {
    console.log(weekEn);
} else {
    console.log('Что то пошло не так');
}

switch(lang) {
	case ('ru'): 
    console.log(weekRus);
    break;
	case ('en'): 
    console.log(weekEn);
    break;
	default: console.log('Что то пошло не так');

}

console.log(week[lang]);

let name = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ?  console.log('преподаватель') : console.log('студент');






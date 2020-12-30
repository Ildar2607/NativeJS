"use strict"

const str = "test";
const arr = [1, 2, 4]

console.log(str.length);
//console.log(str[2]);
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());

let fruit = "Some fruit";

//console.log(fruit.indexOf("fruit")); // 5
console.log(fruit.indexOf("q")); // -1

const logg = "Hello world";

console.log(logg.slice(6, 11)); // первый аргумент начало а последний не включая

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));  //здесь второй аргумент это сколько символов взять

const num = 12.6
console.log(Math.round(num)) //округляет в большую сторону

const test = "12.2px";

console.log(parseInt(test)) // преврашает строку в число и округляет

console.log(parseFloat(test)) //тоже самое но не округляет






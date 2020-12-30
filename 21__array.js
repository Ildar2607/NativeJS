"use strict"

// arrays

const arr = [2, 13, 26, 8, 10];
// псевдо массив
arr.sort(compareNum);
console.log(arr);

//алгоритмы
function compareNum(a, b) {
    return a - b;
}


// Как соотносяться length и порядковые номера внутри у элементов массивов?
// Ответ  length состоит из последнего элемента который есть в массиве + 1

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//arr.pop();

// arr.push(10);
//
// console.log(arr);

// как вывести все элементы массива

// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// тоже самое с помощью for of и это работает только с массивами и map $ set
// for ( let value of arr) {
//     console.log(value);
// }

//метод массива который больше всех используется в коде for each;

//метод  это функция которая принимает в себя еще одну функцию(callback);
/*arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
}*/

//const str = prompt("", "");
//сделали из строки массив
//const products = str.split(", ");
//console.log(products);
//массив обратно в строку с разделителем ";"
//products.sort();
//console.log(products.join('; '));/








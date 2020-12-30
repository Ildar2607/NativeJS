"use strict"
// примитив
// let a = 5,
//     b = a;
//
// b = b + a
//
// console.log(b);
// console.log(a);

/*const obj = {
    a: 5,
    b: 1
}*/

//передает по ссылке при такой передаче переменная изменяет свойства главного объекта

/*const copy = obj; // Ссылку

copy.a = 10;

console.log(obj);
console.log(copy);*/

// 1 способ создание поверхностной копии обьекта сделаем клонирование обьекта
// создаем функцию в которую передаем аргумент mainObj = numbers

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {           // перебираем объект через mainObj
//         objCopy[key] = mainObj[key];
//     }
//
//     return objCopy
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// }
//
// const newNumbers = copy(numbers)
//
// newNumbers.a = 10;
// newNumbers.c.x = 10
//
// console.log(newNumbers)
// console.log(numbers)


// 2 способ
// метод Object.assign соединяет 2 объекта и создает независимую копию 2х или n  обьектов
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
}

const add = {
    d: 17,
    e: 20,
}

//console.log(Object.assign(numbers, add));
//тоже самое мы можем создать и с пустым объектом
const clone = Object.assign({}, add); // тут лежит поверхностная копия предыдущего обьекта

clone.d = 20;

console.log(add);
console.log(clone)


//чтобы создать копию массива нужно выполнить так
// 3 способ

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
//
// newArray[1] = 'sadfdsfdfa';
// console.log(newArray);
// console.log(oldArray)

//4 способ ES6 ES8 спред оператор

// const   video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'faсebook'];
//
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2, 5, 7];
//
// log(...num);



// const array = ["a", "b"];
//
// const newArray = [...array];
//
//
// // 4 способ создания поверхностных обьектов.
//
// const q = {
//     one: 1,
//     two: 2
// }
//
// const newObj = {...q};
//
// console.log(newObj)








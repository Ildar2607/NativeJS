"use strict";

/*обьекты это структуры которые могуть сохранять в себе любые типы данных в формате ключ значение,
они могут быть также вложены обьект в ольект массив в обьекты итд.
*/


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    // Можно самим создавать методы обьекта
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();


// Деструктуризация обьекта;

const { border, bg} = options.colors; // вытащили в свойства в качестве переменной

console.log(border);


// доступ к ключу обьекта который внутри обьекта.
// console.log(options["colors"]["border"])
//
// console.log(options.name);
//
// //delete options.name;
//
// console.log(options);

// как посчитать сколько ключей в массиве
// вот неудобный способ
/*let counter = 0


for (let key in options) {
    // Создаем условие для проверики является ли знаечение обьектом
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            // Двойной доступ [key] [i]
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]}`)
        counter++;
    }
}

console.log(counter)*/


// А теперь удобный способ, переходим к методам обьекта

//console.log(Object.keys(options).length);
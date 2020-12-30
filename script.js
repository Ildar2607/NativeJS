"use strict";

let  numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцениваете его?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
        console.log("Да вы киноман")
    } else {
        console.log("Произошла ошибка")
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private); // передаем значение private

function wrightYourGenres() {
    for ( let i = 1; i <= 3; i++ ) {
        //const genresFavorite = prompt(`Ваш любимвый жанр под номером ${i}?`)
        //personalMovieDB.genres[i - 1] = genresFavorite;

        //оптимизация удаление промежуточных переменных.
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимвый жанр под номером ${i}?`);
    }
}
wrightYourGenres();

console.log(personalMovieDB)


 // while (a != null && b != null && a != '' && b != '' && a.length < 50) {
 //     const  a = prompt('Один из последних просмотренных фильмов?', ''),
 //            b = prompt('На сколько оцениваете его?');
 //     personalMovieDB.movies[a] = b;
 // }
//let i = 0
/*while (i < 2) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцениваете его?');
    i++

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done')
     } else {
         console.log('error')
        i--
     }

}*/

// do {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцениваете его?');
//     i++
//
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     } else {
//         console.log('error')
//         i--
//     }
// } while (i < 2)

// for (let i = 0; i < 3; i++) {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцениваете его?');
//
//     if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error')
//         i--
//     }
// }

// for (let i = 0; i < 2; i++) {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцениваете его?');
//
//     if(a == null || b == null || a === '' || b === '' || a.length > 50) {
//         console.log('error')
//         i--
//     } else {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
// }


/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/






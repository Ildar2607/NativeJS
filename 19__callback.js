// Callback functions

function lernJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок')
}

lernJS('JavaScript', done)
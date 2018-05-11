function makeGreeting(language) {

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + lastname);
        }
    
        if (language === 'es') {
            console.log('Hola ' + firstname + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en'); // returns function which you store it in greetEnglish
var greetSpanish = makeGreeting('es'); // call second time, get a new execution context.
// => have two spots in memory hanging out 'en' & 'es'

greetEnglish('John', 'Doe'); // create a new execution context, point to outer environment makeGreeting('en')
greetSpanish('John', 'Doe');
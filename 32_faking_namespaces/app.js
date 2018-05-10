var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet); // Hola

// create namespace, don't collide with other
var english = {};
var spanish = {};

// 1.
// english.greet = 'Hello!';
spanish.greet = 'Hola!';

// 2.
// english.greetings is undefined.
// english.greetings.greet = 'Hello!'; // Uncaught TypeError: Cannot set property 'greet' of undefined

// 3.
// english.greetings = {};
// english.greetings.greet = 'Hello';

// 4

var english = {
    greetings: {
        basic: 'Hello'
    }
}

console.log(english);
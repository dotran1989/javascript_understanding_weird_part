// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// function expression. It isn't put into memory initially.
var greetFunc = function(name) { // function object
    console.log('Hello ' + name);
}
// invoke function using a variable that's pointing to that memory location.
greetFunc('John');

// using Immediately Invoked Function Expression
var greeting = function(name) {
    console.log('Hello ' + name);
}('Anne');

var greetingName = function(name) {
    return 'Hello ' + name;
}('Mama');
// console.log(greetingName('Anne'));
console.log(greetingName);
// console.log(greetingName()); // Uncaught TypeError: greetingName is not a function -> return a string.

"I am a tring";
3;

// expression, create on the fly
var firstName = 'Peter';

/* require a name, it can't be anonymous
function (name) {
    console.log('Hello ' + name);
} 
*/

// trick syntax parser
(function (name) {
    console.log('Hello ' + name);
}(firstName));

(function (name) {

    var greeting = 'Hola';
    console.log(greeting + ' ' + name);

})(firstName);
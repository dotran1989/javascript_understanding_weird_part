var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        // console.log('this: ' + JSON.stringify(this)); // {"firstname":"John","lastname":"Doe"}

        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }
}

// console.log(person.getFullName()); // John Doe

var logName = function(lang1, lang2) {

    // 'this' is the global object, no have getFullName()
    console.log('Logged: ' + this.getFullName()); // Uncaught TypeError: this.getFullName is not a function -> control what the 'this' keyword points to?
    console.log('arguments: ' + lang1 + ' ' + lang2);
}

// var logPersonName = logName().bind // not type because invoking function returns value

// 'bind' is method of 'logName' function object. 'this' in logName points to 'person'.
var logPersonName = logName.bind(person); // 'bind' is new copy of 'logName'

// logName();
logPersonName('en', 'es');

// OR
/* var logName222 = function(lang1, lang2) {

    // 'this' is the global object, no have getFullName()
    console.log('Logged: ' + this.getFullName()); // Uncaught TypeError: this.getFullName is not a function -> control what the 'this' keyword points to?
}.bind(person);

logName222(); */

// ---- CALL ----

logName.call(person, 'en', 'es'); // actually execute function. 'bind' is only copy.

// ---- APPLY ----

logName.apply(person, ['en', 'es']);

// --- IIFE

(function(lang1, lang2) {

    // 'this' is the global object, no have getFullName()
    console.log('Logged: ' + this.getFullName()); // Uncaught TypeError: this.getFullName is not a function -> control what the 'this' keyword points to?
    console.log('arguments: ' + lang1 + ' ' + lang2);
}).apply(person, ['vn', 'es']);

// --- function borrowing
var person2 = {
    firstname: 'Hala',
    lastname: 'Mix'
}

console.log(person.getFullName.apply(person2)); // Hala Mix

// --- function currying
function multiply(a, b) {
    return a * b;
}

/* function multipleByTwo(a, b) {
    var a = 2;
    return a * b;
} */
var multipleByTwo = multiply.bind(this, 2); // 'a' default is 2
console.log(multipleByTwo(4)); // 'b' is 4 -> return 8

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4)); // 12

var multipleA = multiply.bind(this, 2, 4); // always return 8
// console.log(multipleA());
console.log(multipleA(3, 3)); // 8
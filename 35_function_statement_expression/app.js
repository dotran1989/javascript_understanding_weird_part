// expression: return a value. Ex: 1 + 2, a ===3
// statement: do not return a value. Ex: if(a === 3)

// oh yes, I have that in memory
greet();

// statement, hosted in memory
function greet() {
    console.log('hi');
}

// Oh, I see that in memory, it's undefined. Because we haven't hit the line where it's set equal to anything yet.
// Function expression aren't hoisted. 
// anonymousGreet(); // -> Uncaught TypeError: anonymousGreet is not a function

// expression
// You can reference anonymous function with variable names that are pointing to the address where that object lives.
var anonymousGreet = function() { 
    console.log('hi');
}

anonymousGreet();

// Execution phase
// Javaengine puts function statements, variables into memory first.

function log(a) {
    console.log(a);
    // a(); // Uncaught TypeError: a is not a function
}

// var b = 3;
log(3); // on the fly, send directly number, not create variable
log("Hello");
log({
    greeting: "hi"
})
// function expression creates an object. First class function created on the fly, and variables 'a' can be set equal to them.
log(function(){
    console.log('hi');
})

// -----
function logB(a) {
    a();
}

logB(function(){
    console.log('hi');
});
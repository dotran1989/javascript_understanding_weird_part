b(); // Called b!
console.log(a); // undefined -> hoisting 

var a = 'Hello World'; // delete this line -> Uncaught ReferenceError: a is not defined

function b() {
    console.log('Called b!');
}

// b();
// console.log(a);
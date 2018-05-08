// b's execution context
function b() {
    var myVar;
    console.log(myVar);//undefined
}

// a's execution context
function a() {
    var myVar = 2;
    console.log(myVar);//2
    b();
}

// global execution context
var myVar = 1;
console.log(myVar); //1
a();
console.log('a:' + myVar); // a:1


// _ Variable environment: where the variables live (global object - a window in a browser).

// _ myVar declare three times -> they're distince, unique and don't touch each other. Each of these 'myVar' is sitting in its own execution context.
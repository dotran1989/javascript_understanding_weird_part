function greet(whatToSay) {

    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}

greet('Hi')('Tony');  // Hi Tony

var sayHi = greet('Hi');
sayHi('Tony');

// How sayHi() know the whatToSay variable?
// Because whatToSay is created in greet and it gone. It popped off the execution stack.

// At the moment that execution context finishes, the memory space is still there. 'whatToSay' is still there.

// When call sayHi(), it's execution context still has a reference outer lexical environment and find 'whatToSay'.
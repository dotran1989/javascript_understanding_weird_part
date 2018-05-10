// by value (primitives)
var a = 3;
var b;

b = a; // create a new spot in memory for b. Copy value from a, sets it to that value that b is looing at.

// a & b sitting in two spots in memory.

a = 2; // don't affect to b.

console.log(a); // 2
console.log(b); // 3

// by reference (all objects (including funtions))

var c = { greeting: 'hi' }
var d;

d = c; // it simply points 'd' at the same address, at the same location in memory, that 'c' points to. Not copy value.
c.greeting = 'hello'; // mutate c. Once you change one, you change the other, or all of them.
d.greeting = 'hola';

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Xin chao';
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }
console.log(c); // howdy
console.log(d); // Xin chao
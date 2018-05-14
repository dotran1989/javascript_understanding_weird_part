var a = 3;
console.log('typeof a: ' + typeof a); // number

var b = "Hello";
console.log('typeof b: ' + typeof b); // string

var c = {};
console.log('typeof c: ' + typeof c); // object

var d = [];
console.log('typeof d: ' + typeof d); // object
console.log('d.toString(): ' + d.toString()); // empty string -> take the contents of array and convert it to a string.
console.log('Object.prototype.toString.call(d): ' + Object.prototype.toString.call(d)); // [object Array]

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log('typeof e Person:' + typeof e); // object
console.log('e instanceof Person: ' + e instanceof Person); // true, find person in prototype chain

console.log('typeof undefined: ' + typeof undefined); // undefined
console.log('typeof null: ' + typeof null); // object

var z = function() {};
console.log('typeof z: ' + typeof z); // function
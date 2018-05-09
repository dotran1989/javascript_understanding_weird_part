console.log(1 < 2 < 3); // true

console.log(3 < 2 < 1); // true
// 3 < 2 -> false < 1 -> 0 < 1 -> true

// Number("3") -> 3

// Number(false) -> 0
// Number(true) -> 1

// Number(undefined)
// NaN
// Number(null)
// 0

// 3 == 3
// true
// "3" == 3
// true

// false == 0
// true
// var a = false
// undefined
// a == 0
// true

// null == 0
// false
// null < 1
// true
// "" == 0
// true
// "" == false
// true

// '===' strict equality doesn't try coercion variable.

// "3" === "3"
// true
// "3" === 3
// false
// 3 === 3
// true

var a = 0;
var b = false;

if (a == b) { // true
    console.log('They are equal!');
} else {
    console.log('Nope, not equal.');
}

if (a === b) { // false
    console.log('They are equal!');
} else {
    console.log('Nope, not equal.');
}

if (a != b) { // Equal.
    console.log('They are not equal!');
} else {
    console.log('Equal.');
}

if (a !== b) { // They are not equal
    console.log('They are not equal!');
} else {
    console.log('Equal.');
}
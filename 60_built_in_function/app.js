/* var a = new Number(3) // function constructor
a
Number {3} // create an object with primitive Value
__proto__: Number
[[PrimitiveValue]]: 3 

a.toFixed(2)
"3.00"
*/


/* var a = new String("John")
String.prototype.indexOf('o') // whether or not character 'o'
-1

a.indexOf("o")
1

a
String {"John"}0: "J"1: "o"2: "h"3: "n"length: 4__proto__: String[[PrimitiveValue]]: "John" */

/* 
"John".length
4 
*/

/* 
var a = new Date("3/1/2015")
a
Sun Mar 01 2015 00:00:00 GMT+0700 (SE Asia Standard Time)
a.getDate()
1 
*/

String.prototype.isLengthGreaterThan = function(limit) {
    console.log(this); // String {"John"}
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3)); // the primitive string "John" was automatically converted to a string object by String.prototype function.

Number.prototype.isPositive = function() {
    return this > 0;
}

/* 
3.isPositive // no automatically converted to number object
Uncaught SyntaxError: Invalid or unexpected token

var a = new Number(3)
a.isPositive()
true
*/

// 61 - Dangerous

/* var a = 3 // primitive
var b = new Number(3) // object
a == b // coersion
true
a === b // not equal
false

var c = Number(3)
a == c
true
a === c
true */
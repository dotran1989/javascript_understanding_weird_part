// Older browser
if (!Object.create) { // if not exists
    Object.create = function (o) {
        if (arguments.lenght > 1) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter');
        }
        function F() {} // empty function constructors
        F.prototype = o; // set prototype is object you passed in
        return new F(); // new empty object. Ex: new Person()
    }
}
// => you give it an object, and that becomes the prototype of a new empty object.

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; 
        // this references object. Remove 'this', not find it in function context. Go out global execution context, not find -> error Uncaught ReferenceError: firstname is not defined
    }
}

var john = Object.create(person); // create empty object -> pure prototypal inheritance
console.log(john);

/* 
Object
__proto__:
firstname: "Default"
greet: ƒ ()
lastname: "Default"
__proto__: Object

john.greet()
"Hi Default" */

john.firstname = "John";
john.lastname = "Doe";
john.abc = "abc";

console.log('john:' + JSON.stringify(john));

/* 
john:{"firstname":"John","lastname":"Doe"}

john.greet()
"Hi John"
*/
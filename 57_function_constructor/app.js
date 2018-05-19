function Person(firstname, lastname) {

    console.log(this); // create new object in memory: Person {}
    this.firstname = firstname;
    this.lastname = lastname;
    // this.getFullName = function() {
    //     ....
    // }
    console.log('This function is invoked');

    // return { greeting: 'I got a new way!'}; // {greeting: "I got a new way!"}
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe'); // 'john' points to Person.prototype as its prototype.
console.log(john); // Person {firstname: "John", lastname: "Doe"}

var vitalik = new Person('Vitalik', 'Buterin');
console.log(vitalik);


/* john.__proto__
{constructor: ƒ}
constructor:ƒ Person(firstname, lastname)
__proto__:Object */

/* john.getFullName()
"John Doe" */

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}
console.log(john.getFormalFullName()); // Doe, John -> Javascript engine go down prototype chain and find it.

// Can add getFullName in Person() constructor but take space of memory. If we create 1000 objects, it takes 1000 space for function.
// If we have in Person.prototype, we have one function for 1000 objects.
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER!!!
john.__proto__ = person; // set prototype of 'john' is 'person'. 'john' now inherits from 'person'.
console.log(john.getFullName()); // John Doe -> Javascript engine know original object call method.
console.log(john.firstname); // find 'firstname' in 'john', return and stop it. Not find in prototype.

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person; // jane and john point at the same spot in memory where this 'person' object lives.
console.log(jane.getFullName()); // Jane Default
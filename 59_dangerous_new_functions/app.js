function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john.getFullName());

/* var vitalik = new Person('Vitalik', 'Buterin');
console.log(vitalik.getFormalFullName()); */ 
// Uncaught TypeError: vitalik.getFormalFullName is not a function

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

var vitalik = new Person('Vitalik', 'Buterin');
console.log(vitalik.getFormalFullName());
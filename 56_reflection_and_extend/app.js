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
john.__proto__ = person;

for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}

// firstname: John
// lastname: Doe
// getFullName: function() {
//         return this.firstname + ' ' + this.lastname;
// }

// ----- hasOwnProperty, reflect -------
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

// firstname: John
// lastname: Doe

// ----- extend -----
var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);

// {firstname: "John", lastname: "Doe", address: "111 Main St.", getFormalFullName: ƒ, getFirstName: ƒ}


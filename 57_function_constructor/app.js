function Person(firstname, lastname) {

    console.log(this); // create new object in memory: Person {}
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');

    // return { greeting: 'I got a new way!'}; // {greeting: "I got a new way!"}
}

var john = new Person('John', 'Doe');
console.log(john); // Person {firstname: "John", lastname: "Doe"}

var vitalik = new Person('Vitalik', 'Buterin');
console.log(vitalik);
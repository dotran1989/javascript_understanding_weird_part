var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alice";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);

person.address = new Object();
person.address.street = "Hau Giang";
person.address.city = "Ho Chi Minh";
person.address.state = "HCM";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);
console.log(person.address);

// Object, properties, functions are sitting in memory.
var Tony = { 
    firstname: "Tony",
    lastname: "Alice",
    address: {
        street: "Hau Giang",
        city: "Ho Chi Minh",
        state: "HCM"
    }
};
console.log(Tony);

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

Tony.address2 = {
    street: "Pham Ngu Lao"
};

console.log(Tony);
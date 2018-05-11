function greet(firstname, lastname, language) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('------------');
        return;    
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('------------');
}

greet();
// undefined
// undefined
// undefined

greet('John');
// John
// undefined
// undefined

greet('John', 'Doe', 'en');
// John
// Doe
// es
// Arguments(3) ["John", "Doe", "en", callee: ƒ, Symbol(Symbol.iterator): ƒ]
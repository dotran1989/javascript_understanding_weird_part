function greet() {
    console.log('hi');
}

console.log(greet);

/* 
ƒ greet() {
    console.log('hi');
} 
*/

greet();

greet.language = 'english';
console.log(greet.language);
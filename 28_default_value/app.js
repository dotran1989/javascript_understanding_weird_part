function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('Jane'); // Hello Jane
greet(); // Hello undefined
greet(0);

// defaul value
// Hello Jane
// Hello <Your name here>
// Hello <Your name here>




/* 

undefined || 'hello'
"hello"
Boolean("hello")
true
"hi" || "hello"
"hi"
0 || 1
1
undefined || "hello"
"hello"
null || "hello"
"hello"
"" || "hello"
"hello" 

*/
var g = G$('John', 'Doe');
g.greet().setLang('es').log();

/* 
g.greet().log().setLang('fr');

Hello John!
Logged in: John Doe
Uncaught Invalid language
 */

/*
g.greet().setLang('es').log();

Hello John!
Iniciar sesiÃ³n: John Doe 

*/

var h = Greetr('Harry', 'Porter');
// console.log(h);
h.greet(true);

// Greetings, Harry Porter

console.log(g);
/* 
Greetr.init {firstName: "John", lastName: "Doe", language: "es"}
firstName:"John"
language:"es"
lastName:"Doe"
__proto__:
formalGreeting:ƒ ()
fullName:ƒ ()
greet:ƒ (formal)
greeting:ƒ ()
log:ƒ ()
setLang:ƒ (lang)
validate:ƒ ()
__proto__:
constructor:ƒ Object()
hasOwnProperty:ƒ hasOwnProperty()
isPrototypeOf:ƒ isPrototypeOf()
propertyIsEnumerable:ƒ propertyIsEnumerable()
toLocaleString:ƒ toLocaleString()
toString:ƒ toString()
valueOf:ƒ valueOf()
__defineGetter__:ƒ __defineGetter__()
__defineSetter__:ƒ __defineSetter__()
__lookupGetter__:ƒ __lookupGetter__()
__lookupSetter__:ƒ __lookupSetter__()
get __proto__:ƒ __proto__()
set __proto__:ƒ __proto__() 
*/
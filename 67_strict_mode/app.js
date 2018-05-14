/*
 "use strict";

var person;
persom = {}; // strict mode -> Uncaught ReferenceError: persom is not defined
console.log(persom); // {} 
*/

/* not use strict mode
window.persom
{}
window.person
undefined 
*/

// -------------
function logNewPerson() {
    "use strict";

    var person2;
    persom2 = {}; // Uncaught ReferenceError: persom2 is not defined
    console.log(persom2);
}

logNewPerson();
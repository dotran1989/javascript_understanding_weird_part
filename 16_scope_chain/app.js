/* 1. Outer environment of function b is Global execution */

// // b's execution context
// function b() {
//     console.log('b:' + myVar); // b:1 -> global level
// }

// // a's execution context
// function a() {
//     var myVar = 2;
//     console.log(myVar);//2
//     b();
// }

// // global execution context
// var myVar = 1;
// console.log(myVar); //1
// a(); 


/* 2. Outer environment of function b is function a. Function a declare myVar */
// function a() {

//     function b() {
//         console.log('b: ' + myVar); // 2
//     }

//     var myVar = 2;
//     console.log('a: ' + myVar);//2
//     b();
// }

// var myVar = 1;
// console.log('global: ' + myVar); //1
// a(); 

/* 3. Outer environment of function b is function a. Function a not declare myVar.
a's outer reference is to global and so b() will look for it there.
*/
function a() {

    function b() {
        console.log('b: ' + myVar); // 1
    }

    console.log('a: ' + myVar);// 1
    b();
}

var myVar = 1;
console.log('global: ' + myVar); // 1
a();

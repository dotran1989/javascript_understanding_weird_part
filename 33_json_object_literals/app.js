var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral);
/* Object
firstname:"Mary"
isAProgrammer:true
__proto__:Object */

console.log(JSON.stringify(objectLiteral));
// {"firstname":"Mary","isAProgrammer":true}

var jsonValue = JSON.parse('{"firstname":"Mary", "isAProgrammer": true}');
console.log(jsonValue);
/* Object
firstname:"Mary"
isAProgrammer:true
__proto__:Object */
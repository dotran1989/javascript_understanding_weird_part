Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim']; // array is an object

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

/* 
0: John
1: Jane
2: Jim
myCustomFeature: cool!

_ iterator iterates down into prototype -> it's not safe
*/

for (var i=0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i]);
}

/* 
0: John
1: Jane
2: Jim
*/
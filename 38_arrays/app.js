var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);

/* 

Array(5)
0:1
1:false
2:{name: "Tony", address: "111 Main St."}
3:ƒ (name)
4:"hello"
length:5
__proto__ 

*/

arr[3](arr[2].name);
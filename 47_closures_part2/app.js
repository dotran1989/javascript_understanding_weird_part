function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// I need a parent scope that holds the current value of 'i' as the loop goes.

function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j = i; // new scope
        arr.push(
            function() {
                console.log(j);
            }
        )
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2


function buildFunctions3() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs3 = buildFunctions3();
fs3[0]();
fs3[1]();
fs3[2]();
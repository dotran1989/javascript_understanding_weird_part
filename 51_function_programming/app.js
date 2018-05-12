function mapForEach(arr, func) {

    var newArray = [];

    for (var i=0; i < arr.length; i++) {
        newArray.push(
            func(arr[i])
        );
    }

    return newArray;
}

var arr1 = [1, 2, 3];
console.log(arr1);

/* var arr2 = [];
for (var i=0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2); */

var arr3 = mapForEach(arr1, function(item){
    return item * 2;
});
console.log('arr3: ' + arr3);

var arr4 = mapForEach(arr1, function(item){
    return item > 2;
});
console.log(arr4);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1)); // preset parameter: limiter = 1
console.log(arr5);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter); // function object with first parameter is limiter
};

var arr6 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log('arr6 ' + arr6);
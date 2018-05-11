function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function() { // takes a function object, first class function.
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// jQuery uses function expression and first class functions
// $("button").click(function(){

// });

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;

    callback();
}

tellMeWhenDone(function(){
    console.log('Done!');
})
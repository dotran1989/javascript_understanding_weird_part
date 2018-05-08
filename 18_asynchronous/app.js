// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event. Any events that happen outside of the engine get placed into that queue. 
// The browser is going to place that click event on the event queue.
// The Javascript engine won't look at the event queue unitl the execution stack is empty.
// When stack is empty, Javascript engine decides to go look at and process the event queue.
document.addEventListener('click', clickHandler);

waitThreeSeconds(); // stack
console.log('finished execution'); // stack
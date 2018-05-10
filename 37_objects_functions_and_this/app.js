console.log(this); // global object

function a() {
    console.log(this); // 'this' keyword is still going to point to global object
    this.newVariable = 'hello'; // attach to global object
}
// first thing create execution context

var b = function() { // 'this' points to global object, same location of memory.
    console.log(this);
}

a();

console.log(newVariable); // can call by this.

b();

var c = {
    name: 'The c object',
    log: function() { // function in object.
        var self = this; // Make sure pointing right object -> common pattern. 'self' points same location in memory as 'this' keyword.

        this.name = 'Updated c object'; // {name: "Updated c object", log: ƒ}. Can access properties and method of this object.
        console.log(self);

        // * Lot of people do this bug - function in function, in object.
        var setName = function(newName) {
            self.name = newName; // 'this' still points to global object.
        }
        setName('Updated again! The c object');
        console.log(self); // {name: "Updated again! The c object", log: ƒ}
        
    }
}

c.log();
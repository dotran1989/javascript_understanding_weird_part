(function(global, $){ // execution context and take parameters

    var Greetr = function(firstName, lastName, language) { // have a function constructor builds an object

        return new Greetr.init(firstName, lastName, language); // generate new object with three properties
    }

    Greetr.prototype = {}; // here is where I'll put any methods that I want to use inside my object that're returned from Greetr.

    Greetr.init = function(firstName, lastName, language) {

        var self = this; // safe, don't worry about what 'this' variable points to later.
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }; // any object returned from this function constructor will point where for it's prototype.

    Greetr.init.prototype = Greetr.prototype; // any objects created with this function 'Greetr.init' should point 'Greetr.prototype' for its prototype chain.

    global.Greetr = global.G$ = Greetr; // on the global object, these two names will point 'Greets' value.

}(window, jQuery));
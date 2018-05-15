(function(global, $){ // execution context and take parameters

    var Greetr = function(firstName, lastName, language) { // have a function constructor builds an object

        return new Greetr.init(firstName, lastName, language); // generate new object with three properties
    }

    var supportedLangs = ['en', 'es']; // hidden to outside world, access via the closure.

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    }

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }

    var logMessages = {
        en: 'Logged in',
        es: 'Iniciar sesión'
    }

    Greetr.prototype = { // Save memory. Here is where I'll put any methods and properties that I want to use inside my object that're returned from Greetr.init.
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function() { // 'this' points to the object that's calling this function.
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }
    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this; // safe, don't worry about what 'this' variable points to later.
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }; // this object's lexical environment is this whole function -> can access 'this' variable.
    // Thank closures to keep 'this' variable even function invoke immediately.

    Greetr.init.prototype = Greetr.prototype; // any objects created with this function 'Greetr.init' should point 'Greetr.prototype' for its prototype chain.
    // To use any methods on this propertype property

    global.Greetr = global.G$ = Greetr; // on the global object, these two names will point 'Greets' value.

}(window, jQuery));
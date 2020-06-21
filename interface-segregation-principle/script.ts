//INTERFACE SEGREGATION PRINCIPLE
// A client should never be forced to implement an interface that it doesn’t use 
// Clients shouldn’t be forced to depend on methods they do not use.

//In TypeScript when we implement an interface, we are forced to use all methods and properties with no exception.
//This help us to verify the data we are handling.

interface Bird {
    name: string;
    fly(): void;
}

class Parrot implements Bird {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    fly() {
        console.log("I can fly");
    }
}

class Duck implements Bird {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    fly() {                             //We are forced to use fly method, even though we know that this class can't fly
        console.log("I can fly");       //Here we have an error
    }
}


// Now to fulfill the Interface Segregation Principle we need to segregate the interface into small interfaces

interface FlyBird {
    name: string;
    fly(): void;
}

interface NoFlyBird {
    name: string;
}

class Dove implements FlyBird {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    fly() {
        console.log("I can fly");
    }
}

class Chicken implements NoFlyBird {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    // the method fly() is no longer a requirement and we have a better descriptive code.
}
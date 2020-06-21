//DEPENDENCY INVERSION PRINCIPLE
//High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces).
//Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

//Imagine we have a store and we need to implement a payment method, this works fine for one bank.

class Store {
    constructor(user) {
        this.bank = new Bank(user);
    }

    purchaseBike() {
        this.bank.makePayment(200);
    }

    purchaseHelmet() {
        this.bank.makePayment(50);
    }
}

class Bank {                //This class has its owm payment methods
    constructor(user) {
        this.user = user;
    }

    makePayment(amount) {
        console.log(`${this.user} make a payment of ${amount} with Bank`)
    }
}


const store = new Store('Jace');

store.purchaseBike();
store.purchaseHelmet();

//But then we need to implement paypal method for this we need to upgrade the class Store
//Now we have to find a way to implement another class for Paypal payments

class StoreUpgrade {
    constructor(user) {
        this.bank = new Bank(user);
        this.paypal = new Paypal(user);
    }

    purchaseBike(bank) {
        (bank == 'bank') ? this.bank.makePayment(200) : this.paypal.makePayment(200);
    }

    purchaseHelmet(bank) {
        (bank == 'bank') ? this.bank.makePayment(50) : this.paypal.makePayment(50);
    }
}


class Paypal {              //This new class has its owm payment methods
    constructor(user) {
        this.user = user;
    }

    makePayment(amount) {
        console.log(`${this.user} make a payment of ${amount} with Paypal`)
    }
}

const storeUpgrade = new StoreUpgrade('Jace');

storeUpgrade.purchaseBike('paypal');
storeUpgrade.purchaseHelmet('bank');

//Until here this is OK but not quite useful. Because we need another payment method, we will need to upgrade the store class again.
//And the store class should be funtional just for its puspose, and not for payment methods.

//So here it comes the Dependency Inversion Principle
//We need to create a preProcessor for payments

class NewStore {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;

    }

    purchaseBike() {
        this.paymentProcessor.pay(200);
    }

    purchaseHelmet() {
        this.paymentProcessor.pay(50);
    }
}

class BankPaymentProcessor {
    constructor(user) {
        this.bank = new Bank(user);
    }

    pay(amount) {
        this.bank.makePayment(amount);
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.paypal = new Paypal(user);
    }

    pay(amount) {
        this.paypal.makePayment(amount);
    }
}

console.log('Dependency Inversion implemented')
let newStore = new NewStore(new BankPaymentProcessor('Lidia')); //now when declaring the store class we predefine Payment method

newStore.purchaseBike();
newStore.purchaseHelmet();

newStore = new NewStore(new PaypalPaymentProcessor('Lidia'));

newStore.purchaseBike();
newStore.purchaseHelmet();

// In this way we no longer need to upgrade the store class. And just serves to its funcion
// Also we easily can create a new payment method


//HERE A REDUCED EXAMPLE FOR TYPESCRIPT
// Based on the Principle
// "High level modules should not depend upon low level modules. Rather, both should depend upon abstractions.
//  Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions."

/*
class Login {                           //Low level module
    login(googleLogin: any) {           //This is a high module, beacuse its functionality might need to grow

    }
}


interface ISocialLogin {                //Abastraction Module
    login(options: any);                //Details depends on abstraction
}

class GoogleLogin implements ISocialLogin {     //Low and High modules based on abstractions
    login(googleLogin: any) {
        // some code which will be used for google login.
    }
}

class FBLogin implements ISocialLogin {
    login(fbLogin: any) {
        // some code which will be used for fb login.
    }
}
*/
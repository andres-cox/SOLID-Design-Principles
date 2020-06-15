// ‘There should never be more than one reason for a class to change’
// A class should have one, and only one, reason to change.

// it makes your software easier to implement and prevents unexpected side-effects of FUTURE CHANGES.


// this is bad code -> because verifyCredentials is another responsability
class UserSettingsBad {
    constructor(user) {
        this.user = user;
    }
    changeSettings(settings) {
        if (this.verifyCredentials()) {
            console.log('user certified to change settings')
        } else {
            console.log('user not certified to change settings')
        }
    }

    verifyCredentials() {
        console.log('verifying credentials')
        return (this.user == 'Roman') ? true : false;
    }
}

// this is good code -> because each class have one responsability
class UserAuth {
    constructor(user) {
        this.user = user;
    }
    verifyCredentials() {
        console.log('verifying credentials');
        return (this.user == 'Roman') ? true : false;
    }
}

class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);         //here we import the class we need
    }
    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            console.log('user certified to change settings')
        } else {
            console.log('user not certified to change settings')
        }
    }
}

const person = new UserSettings('Roman');
person.changeSettings();

//On this way we can edit classes based on our need or evolution of code or technology
//Even though we dont have to give a class to everything in case we think it is not necessary
//In JS we can use modules
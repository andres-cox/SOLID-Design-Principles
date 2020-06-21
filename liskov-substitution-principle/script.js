//LISKOV SUBSTITUTION PRINCIPLE
//If 'S' is the subtype of 'T' then 'T' may be completely substitute by subtype 'S'. Here 'T' is the Base class and 'S' is the Derived class.
//This principle try to show how inheritance should be implemented 

// In this example we can think that a a class Square could be a subtype of Rectangle
// because they both have the same getArea() method and the formula is the same
// But then we need another method called "draw"
// For this, Square needs to overwrite the method beacuse it has a different formula
// Here is where we brake Liskov Substitution, because Square has a new method different from his parent and Squere can no longer be replaced where Rectangle is used.
// Then inheritance is not implemented well.

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        const area = this.width * this.height;
        console.log(area);
        return area;
    }

    drawShape() {
        const x = this.width;
        const y = this.height;

        //code to draw
        console.log("Rectangle drawn")

    }

}

class Square extends Rectangle {

    constructor(width, height) {
        super(width, height);
    }


    drawShape() {
        const x = this.width;
        const y = this.width;

        //code to draw
        console.log("Square drawn"); //This is diffrent from his parent
    }

}

const newSquare = new Square(20, 4);
newSquare.getArea();
newSquare.drawShape();

// We can think this is not too bad, beacuse inheritance accepts to do this things
// but this leads to break functionality of a written system and may cause problems in the future


// For the solution, we need to create another Class, that involves Rectangle and Circle 
// and satisfy the requirements for both subclasses

class Area {
    getArea() { }
    drawShape() { }
}

class Rectangle extends Area {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        const area = this.width * this.height;
        console.log(area);
        return area;
    }

    drawShape() {
        const x = this.width;
        const y = this.height;

        //code to draw
        console.log("Rectangle drawn")

    }

}

class Circle extends Area {

    constructor(radio) {
        super();
        this.radio = radio;
    }

    getArea() {
        const area = Math.pow(this.radio, 2) * Math.PI
        console.log(area);
        return area;
    }

    drawShape() {
        const x = this.width;
        const y = this.width;

        //code to draw
        console.log("Square drawn"); //This is diffrent from his parent
    }
}

// Thinking it a little. This leads us to create interfaces in order to have the functionality we want for similar objects
// But if we want to use inheritance we need to focus on parent class, where it has to have the global functionality of all subclasses

//HERE IS A GOOD EXAMPLE OF INHERITANCE THAT SATISFY LISKOV SUBSTITUTION

// In this example we seea that sublclases don't overwrite parent class functionality 
// And both inherit the funtionality that they need from his parent

class Employee {
    constructor(name, employee_id, department, basic_salary) {
        this.name = name;
        this.employee_id = employee_id;
        this.department = department;
        this.basic_salary = basic_salary;
    }

    getEmployeeDetails() {
        console.log('Employee Name: ', this.name);
        console.log('Employee id: ', this.employee_id);
        console.log('Department is: ', this.department);
    }

    getSalaryDetails(tds) {
        console.log('Basic Salary is: ', this.basic_salary);
        console.log('TDS is: ', tds);
        console.log('Total salary is: ', this.basic_salary + tds);
    }

    calculateBonus(emp) {
        if (emp.type == 'Permanent') {
            const bous_amount = this.basic_salary * .15; // bonus is basic salary 15%
            console.log('Bonus amount is: ', bous_amount);
        } else {
            throw "Contract employee does not have bonus";
        }
    }
}


class Permanent extends Employee {
    constructor(name, employee_id, department, designation, basic_salary, tds) {
        super(name, employee_id, department, basic_salary);
        this.type = 'Permanent';
        this.designation = designation;
        this.tds = tds;
    }

    getOtherDetails() {
        console.log('Department is: ', this.designation);
        console.log('Employee type is: ', this.type);
    }
}

class Contract extends Employee {
    constructor(name, employee_id, department, designation, basic_salary, tds) {
        super(name, employee_id, department, basic_salary);
        this.type = 'Contract';
        this.designation = designation;
        this.tds = tds;
    }

    getOtherDetails() {
        console.log('Department is: ', this.designation);
        console.log('Employee type is: ', this.type);
    }
}

//Even though this is correct. There will be cases on which we need to overwrite a parent method because.
// So we will think to create another class in order to not brake the system
// But there is another solution that leads as to COMPOSITION that instead of using the term "is a" of inheritance
// We can use "has a" for composition
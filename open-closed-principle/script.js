// OPEN/CLOSED PRINCIPLE
// "Objects or entities should be open for extension, but closed for modification"

// Open for extension means that we should be able to add new features or components to the application without breaking existing code.

// Closed for modification means that we should not introduce breaking changes to existing functionality, because that would force you to refactor a lot of existing code

// This is the common code
// When we need a new object we need to upgrade the function
// This is usual when there are multiple switch cases
// In this case we need to refactor the function in order to make an upgrade. This my lead to problems even we have functional code.
const shapesWithoutClass = [
    {
        shape: 'triangle',
        base: 12,
        height: 42
    },
    {
        shape: 'rectangle',
        width: 12,
        height: 42
    },
    {
        shape: 'circle',
        radio: 6,
    },
    {
        shape: 'triangle',
        base: 21,
        height: 42
    }
]

function getShapesAreaWithoutClass(shapes) {
    shapes.forEach(shape => {
        switch (shape.shape) {
            case 'triangle':
                console.log((shape.base * shape.height) / 2);
                break;
            case 'rectangle':
                console.log(shape.height * shape.width);
                break;
            case 'circle':
                console.log(shape.radio * shape.radio * Math.PI);
                break;
            case 'triangle':
                console.log((shape.base * shape.height) / 2);
                break;
            default:
                break;
        }
    });

}

getShapesAreaWithoutClass(shapesWithoutClass);



//This is Open/Closed Principle we get the code more versatile to changes and upgrades
//If we need the method for diferent purposes
class Area {
    getArea() { }
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

}

class Triangle extends Area {

    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        const area = (this.base * this.height) / 2;
        console.log(area);
        return area;
    }

}

const shapes = [
    new Triangle(12, 42),
    new Rectangle(12, 42),
    new Circle(6),
    new Triangle(21, 42)
]

function getShapesArea(shapes) {
    let shapesArea = []
    shapes.forEach(shape => {
        shapesArea.push(shape.getArea());
    });
}

console.log('Open/Closed Principle')
getShapesArea(shapes);
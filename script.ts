// CONTAINERS
const leftContainer = document.getElementById('left-container');
const middleContainer = document.getElementById('middle-container');
const rightContainer = document.getElementById('right-container');
//INPUT IDS
const recWidth = document.getElementById('rec-width');
const recHeight = document.getElementById('rec-height');
const cirRadius = document.getElementById('cir-radius');
const squaSideLength = document.getElementById('squa-sidelength');
const triHeight = document.getElementById('tri-height');
//BUTTONS
const recBtn = document.getElementById('btn1');
const cirBtn = document.getElementById('btn2');
const squBtn = document.getElementById('btn3');
const triBtn = document.getElementById('btn4');

//RANDOM
function randomNumber (max, min):number {
    return Math.random() * (max - min) + min;
}
function randomPosition():any {
    return {
        top: randomNumber(550, 1),
        bottom: randomNumber(550, 1),
    }
}

interface IShape {
    value: number;
    div: HTMLDivElement;
    draw(): void;
    remove(): void;
    show(): void;
}

class Shape implements IShape{
    value: number;
    div:HTMLDivElement;
    
    constructor(nameOfShape) {
        nameOfShape = nameOfShape;
        this.div = document.createElement('div');
        this.div.addEventListener('click', () => {
            this.show();
        });
        this.div.addEventListener('dblclick', () => {
            this.remove();
        });
        this.draw();
    }

    draw(): void {
        middleContainer.appendChild(this.div);
        let position = randomPosition()
    }

    remove(): void {
    }

    show(): void {
    }
}

//CIRCLE
class Circle extends Shape {
    
    constructor() {
        super('Circle');
        this.div.id = 'circle'; 
    }

}
cirBtn.addEventListener('click', () => {
    let circle = new Circle;
    circle.draw(); 
});

//TRIANGLE
class Triangle extends Shape { 
    constructor() {
        super('Triangle');
        this.div.id = 'triangle';
    }
}
triBtn.addEventListener('click', () => {
    let triangle = new Triangle();
    triangle.draw(); 
});

//RECTANGLE
class Rectangle extends Shape {
    constructor() {
        super('Rectangle');
        this.div.id = 'rectangle';
    }
}
recBtn.addEventListener('click', () => {
    let rectangle = new Rectangle;
    rectangle.draw();
});

//SQUARE
class Square extends Shape {
    constructor() {
        super('Square');
        this.div.id = 'square';
    }
}

squBtn.addEventListener('click', () => {
    let square = new Square;
    square.draw();
});
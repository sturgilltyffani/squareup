var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CONTAINERS
var leftContainer = document.getElementById('left-container');
var middleContainer = document.getElementById('middle-container');
var rightContainer = document.getElementById('right-container');
//INPUT IDS
var recWidth = document.getElementById('rec-width');
var recHeight = document.getElementById('rec-height');
var cirRadius = document.getElementById('cir-radius');
var squaSideLength = document.getElementById('squa-sidelength');
var triHeight = document.getElementById('tri-height');
//BUTTONS
var recBtn = document.getElementById('btn1');
var cirBtn = document.getElementById('btn2');
var squBtn = document.getElementById('btn3');
var triBtn = document.getElementById('btn4');
//RANDOM
function randomNumber(max, min) {
    return Math.random() * (max - min) + min;
}
function randomPosition() {
    return {
        top: randomNumber(550, 1),
        bottom: randomNumber(550, 1)
    };
}
var Shape = /** @class */ (function () {
    function Shape(nameOfShape) {
        var _this = this;
        nameOfShape = nameOfShape;
        this.div = document.createElement('div');
        this.div.addEventListener('click', function () {
            _this.show();
        });
        this.div.addEventListener('dblclick', function () {
            _this.remove();
        });
        this.draw();
    }
    Shape.prototype.draw = function () {
        middleContainer.appendChild(this.div);
        var position = randomPosition();
    };
    Shape.prototype.remove = function () {
    };
    Shape.prototype.show = function () {
    };
    return Shape;
}());
//CIRCLE
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this, 'Circle') || this;
        _this.div.id = 'circle';
        return _this;
    }
    return Circle;
}(Shape));
cirBtn.addEventListener('click', function () {
    var circle = new Circle;
    circle.draw();
});
//TRIANGLE
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this, 'Triangle') || this;
        _this.div.id = 'triangle';
        return _this;
    }
    return Triangle;
}(Shape));
triBtn.addEventListener('click', function () {
    var triangle = new Triangle();
    triangle.draw();
});
//RECTANGLE
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this, 'Rectangle') || this;
        _this.div.id = 'rectangle';
        return _this;
    }
    return Rectangle;
}(Shape));
recBtn.addEventListener('click', function () {
    var rectangle = new Rectangle;
    rectangle.draw();
});
//SQUARE
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super.call(this, 'Square') || this;
        _this.div.id = 'square';
        return _this;
    }
    return Square;
}(Shape));
squBtn.addEventListener('click', function () {
    var square = new Square;
    square.draw();
});

var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log(this.x.toString());
        console.log(this.y.toString());
    };
    return Shape;
}());
var shape = new Shape();
shape.x = 32;
shape.y = 243;
shape.draw();

var Shape = /** @class */ (function () {
    function Shape(x, y) {
        // ixtiyoriy argumantlar
        this.x = x;
        this.y = y;
    }
    Shape.prototype.draw = function () {
        console.log(this.x.toString());
        console.log(this.y.toString());
    };
    return Shape;
}());
var shape = new Shape(10, 20);
shape.draw();

var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.display = function () {
        console.log("This is the display method");
    };
    return Shape;
}());
var obj = new Shape();
obj.display();

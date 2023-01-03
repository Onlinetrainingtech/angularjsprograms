var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape1 //Baseclass
 = /** @class */ (function () {
    function Shape1(a) {
        this.Area1 = a;
    }
    return Shape1;
}());
var Shape2 = /** @class */ (function (_super) {
    __extends(Shape2, _super); //dervied-1
    function Shape2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Area2 = 100;
        return _this;
    }
    return Shape2;
}(Shape1 //dervied-1
));
var D = /** @class */ (function (_super) {
    __extends(D, _super); //dervide-2
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    D.prototype.disp = function () {
        console.log("Area of the circle::" + this.Area1);
        console.log("Area2 of the circle::" + this.Area2);
    };
    return D;
}(Shape2 //dervide-2
));
var obj = new D(200);
obj.disp();

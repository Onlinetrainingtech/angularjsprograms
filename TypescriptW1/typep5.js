var Sample1 = /** @class */ (function () {
    function Sample1() {
    }
    Sample1.prototype.get1 = function () {
        console.log("This is get1 method");
    };
    Sample1.prototype.get2 = function () {
        console.log("This is get2 method");
    };
    return Sample1;
}());
var obj1 = new Sample1();
obj1.get1();
obj1.get2();

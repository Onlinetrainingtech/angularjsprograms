var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeid = 1000;
    }
    Employee.prototype.disp = function () {
        console.log("Welcome to oops concepts.." + this.employeeid);
    };
    return Employee;
}());
var obj = new Employee();
obj.disp();

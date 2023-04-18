var Employee = /** @class */ (function () {
    function Employee(employeeid) {
        this.employeeid = employeeid;
    }
    Employee.prototype.disp = function () {
        console.log("Your Employeeidis::" + this.employeeid);
    };
    return Employee;
}());
var obj = new Employee(1001);
obj.disp();

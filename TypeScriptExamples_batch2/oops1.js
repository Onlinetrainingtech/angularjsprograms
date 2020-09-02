var Employee = /** @class */ (function () {
    //constructor
    function Employee(employeeid) {
        this.employeeid = employeeid;
    }
    //function
    Employee.prototype.disp = function () {
        console.log("Your EmployeeId is:" + this.employeeid);
    };
    return Employee;
}());
var obj = new Employee(101);
//access the object
obj.disp();

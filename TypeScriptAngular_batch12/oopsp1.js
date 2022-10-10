var Employee = /** @class */ (function () {
    //constructor
    function Employee(employeeid) {
        this.employeeid = employeeid;
    }
    //function
    Employee.prototype.disp = function () {
        console.log("Your employeeid is::" + this.employeeid);
    };
    return Employee;
}());
var obj = new Employee(1001);
//access the object
obj.disp();

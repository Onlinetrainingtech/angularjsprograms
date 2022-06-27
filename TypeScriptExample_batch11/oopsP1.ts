class Employee
{
    employeeid:number;
    constructor(employeeid:number)
    {
        this.employeeid=employeeid;
    }
    disp():void
    {
        console.log("Your EmployeeId is::"+this.employeeid)
    }
}
var obj=new Employee(1001)
obj.disp()
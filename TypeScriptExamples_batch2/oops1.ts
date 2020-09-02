class Employee
{
    employeeid:number;
    //constructor
    constructor(employeeid:number)
    {
        this.employeeid=employeeid
    }
    //function
    disp():void{
        console.log("Your EmployeeId is:"+this.employeeid)
    }
}
var obj=new Employee(101)
//access the object

obj.disp()
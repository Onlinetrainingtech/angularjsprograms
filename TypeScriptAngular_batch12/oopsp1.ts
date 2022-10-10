class Employee
{
    employeeid:number;
    //constructor
    constructor(employeeid:number)
    {
        this.employeeid=employeeid
    }
    //function
    disp():void
    {
        console.log("Your employeeid is::"+this.employeeid)
    }
}
var obj=new Employee(1001)
//access the object
obj.disp()
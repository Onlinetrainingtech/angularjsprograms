class Employee
{
    employeeid:number=1000
    disp():void
    {
        console.log("Welcome to oops concepts.."+this.employeeid)
    }
}
var obj=new Employee()
obj.disp()
class B1
{
    Area:number
    constructor(a:number)
    {
        this.Area=a
    }
}
class D extends B1
{
    disp():void{
        console.log("Area of circle::"+this.Area)
    }
}
var obj1=new D(23)
obj1.disp()
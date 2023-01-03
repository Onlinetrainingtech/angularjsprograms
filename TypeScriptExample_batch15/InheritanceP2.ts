class Shape1//Baseclass
{
    Area1:number
    constructor(a:number)
    {
        this.Area1=a
    }
}
class Shape2 extends Shape1//dervied-1
{
    Area2: number=100
}
class D extends Shape2//dervide-2
{
    disp():void
    {
        console.log("Area of the circle::"+this.Area1)
        console.log("Area2 of the circle::"+this.Area2)
    }
}
var obj=new D(200)
obj.disp()
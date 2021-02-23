class Shape
{
    Area:number
    constructor(a:number)
    {
        this.Area=a;
    }
}
class Circle extends Shape
{
   disp():void{
       console.log("Area of circle"+this.Area)
   }
}
var obj=new Circle(23)
obj.disp()
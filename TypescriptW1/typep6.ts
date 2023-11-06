class BaseClass
{
    a2:number;
    p1:number;
    p2:number;
    constructor(a1:number)
    {
        this.a2=a1;
    }
    foo(a1:number):void
    {
        console.log("Normal Function is::"+a1)
    }
}
class Derived extends BaseClass
{
    display():void
    {
        console.log("BaseClass value is::"+this.a2)
    }
}
var d1=new Derived(1001);
d1.display();
d1.foo(1002);
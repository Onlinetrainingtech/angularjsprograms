class product
{
    addproduct(productid:number,productname:string):void
    {
        console.log("Your productid::"+productid+""+productname)
    }
}
var p1=new product()
p1.addproduct(1001,"apple")
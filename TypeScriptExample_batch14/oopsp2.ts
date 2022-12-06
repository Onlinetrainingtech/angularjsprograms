class Product
{
    addProduct(productid:number,productname:string):void
    {
        console.log("Your Products::"+productid+""+productname)
    }
}
var p1=new Product()
p1.addProduct(1001,"apple")
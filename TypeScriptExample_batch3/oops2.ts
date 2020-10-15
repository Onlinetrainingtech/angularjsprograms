class Product
{
    addproduct(productid:number,productname:string):void{
        console.log("Your productId::"+productid+""+productname);
    }
}
var p1=new Product()
p1.addproduct(1001,"apple")
class Product
{
    //productid:number
    //productname:string
    addProduct(productid:number,productname:string):void{
        console.log("Your ProductId::"+productid+""+productname)
    }
}
var p1=new Product()
p1.addProduct(1001,"apple")

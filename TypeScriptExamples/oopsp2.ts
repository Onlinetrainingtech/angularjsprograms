class Product
{
    //productid:number
    //productname:string

    addproduct(productid:number,productname:string):void{
     
        console.log("YourProductId"+productid+"YourProductName"+productname)
    }
}
var p1=new Product()
p1.addproduct(1001,"apple")
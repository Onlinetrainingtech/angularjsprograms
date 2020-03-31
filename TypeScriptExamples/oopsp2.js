var Product = /** @class */ (function () {
    function Product() {
    }
    //productid:number
    //productname:string
    Product.prototype.addproduct = function (productid, productname) {
        console.log("YourProductId" + productid + "YourProductName" + productname);
    };
    return Product;
}());
var p1 = new Product();
p1.addproduct(1001, "apple");

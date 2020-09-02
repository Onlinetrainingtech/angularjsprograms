var Product = /** @class */ (function () {
    function Product() {
    }
    //productid:number
    //productname:string
    Product.prototype.addproduct = function (productid, productname) {
        console.log("Your ProductId::" + productid + "" + productname);
    };
    return Product;
}());
var p1 = new Product();
p1.addproduct(1001, "apple");

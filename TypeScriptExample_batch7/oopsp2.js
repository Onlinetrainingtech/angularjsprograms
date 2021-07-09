var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.addproduct = function (productid, productname) {
        console.log("Your productId::" + productid + "" + productname);
    };
    return Product;
}());
var p1 = new Product();
p1.addproduct(1001, "apple");

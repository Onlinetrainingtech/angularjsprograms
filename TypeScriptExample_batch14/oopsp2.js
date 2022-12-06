var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.addProduct = function (productid, productname) {
        console.log("Your Products::" + productid + "" + productname);
    };
    return Product;
}());
var p1 = new Product();
p1.addProduct(1001, "apple");

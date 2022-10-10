var product = /** @class */ (function () {
    function product() {
    }
    product.prototype.addproduct = function (productid, productname) {
        console.log("Your productid::" + productid + "" + productname);
    };
    return product;
}());
var p1 = new product();
p1.addproduct(1001, "apple");

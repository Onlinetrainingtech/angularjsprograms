//function defination
function sample() {
    return "helloworld";
}
function caller() {
    var msg = sample(); //To invoke the functions
    console.log(msg);
}
caller();

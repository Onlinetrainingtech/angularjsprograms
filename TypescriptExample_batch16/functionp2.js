function sample1() {
    return "welcome";
}
function caller() {
    var msg = sample1();
    console.log(msg);
}
caller();

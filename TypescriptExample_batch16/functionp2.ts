function sample1():string
{
    return "welcome"
}
function caller()
{
    var msg=sample1()
    console.log(msg)
}
caller()
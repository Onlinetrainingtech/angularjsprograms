function sample():string
{
    return "welcome"
}
function caller()
{
    var msg=sample()//to invoke the function
    console.log(msg)
}
caller()
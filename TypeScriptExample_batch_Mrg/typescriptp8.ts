function sample():string
{
    return "welcome"
}
function caller()
{
    var msg=sample()
    console.log(msg)
}
caller()
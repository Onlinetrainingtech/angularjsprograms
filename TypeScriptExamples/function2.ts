//function defination

function sample():string{//return the function
    return "helloworld"
}
function caller()
{
    var msg=sample()//To invoke the functions
    console.log(msg)


}

caller()
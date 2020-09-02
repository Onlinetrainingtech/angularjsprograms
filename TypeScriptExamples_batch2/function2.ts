//function defination

function sample():string{//return the function 
   return "mohamed"
}

function caller()
{
    var msg=sample()//To invoke the function
    console.log(msg)
}
caller()
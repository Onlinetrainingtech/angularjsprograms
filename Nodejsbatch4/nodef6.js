function Number(x,y)
{
    if(x>y)
    {
        console.warn(`${x} is greater ${y}`)
    }
    else
    {
        console.warn(`${x} is less than ${y}`)
    }
}
//store the number to variable

x=100
y=50
Number(x,y)
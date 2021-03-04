interface IPerson
{
    firstname:string
    lastname:string
    sayHi:()=>string
}
var customer:IPerson=
{
    firstname:"mohamed",
    lastname:"azar",
    sayHi:():string=>{return "hi there"}
}
console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer.sayHi())
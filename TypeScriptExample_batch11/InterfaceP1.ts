interface IPerson
{
    firstname:string
    lastname:string
    sayHi:()=>string
}
var customer:IPerson={
    firstname:"mohamed",
    lastname:"azar",
    sayHi:():string=>{return "hi there"}
}
console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer.sayHi())


var emp:IPerson={
    firstname:"raja",
    lastname:"mohan",
    sayHi:():string=>{return "welcome"}
}
console.log(emp.firstname)
console.log(emp.lastname)
console.log(emp.sayHi())


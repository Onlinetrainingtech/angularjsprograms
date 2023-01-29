interface IPerson
{
    firstname:string
    lastname:string
    sayHi:()=>string   
}
var customer:IPerson={
    firstname:"mohamed",
    lastname:"Azar",
    sayHi:():string=>{return "Hi there"}
}
console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer.sayHi())
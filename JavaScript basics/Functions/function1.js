function myname (){
    console.log("aman")
}

myname(); 

function addTwoNumber (number1,number2)//parameter
{
    
    //console.log(number1+number2)//argument
    sum = number1 + number2
    //return  console.log(sum)
    return sum
}

//addTwoNumber(5,3)
console.log(addTwoNumber(5,3))
// console.log(sum)b 

console.log("***********************")


//************************************** */


function loginuser (user) {
    if (user === undefined){                        //     (!user)
        console.log("please enter a user name ")
        return
    }
    return `${user} just logged in `
}

// console.log(loginuser("aman"))
console.log(loginuser( ))




const username = {
    name2:"naman",
    addres: 'jaunpur',
    age: 20

 }

 function handal (anyobject){
    console.log(`username is ${anyobject.name2} and age is ${anyobject.age}`)
 }

handal({
    name2:"kumar",
    age:19
})

handal(username)


const myarray  = [2,3,4,5,34] 



function returnarray ( getarray){
    return myarray[2]
}
console.log(returnarray(myarray))
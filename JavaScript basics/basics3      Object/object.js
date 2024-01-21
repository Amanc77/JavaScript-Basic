let user = {
    name: 'aman',
    age: 19 ,
    email: 'amanchaurasiya255@gmail.com',
    location: "Landon",
    status : "unmarrid"

}

console.log(user)

console.log(user.name)
console.log(user["location"])
user.email = "aman@gmail.com"
console.log(user["email"])
Object.freeze(user)   //now  itcould not be changed
user.email = "alalsal"
console.log(user["email"])





//**********************2nd********************************************* */


const oppouser = new Object()
const oppouser1 = {}
console.log(oppouser)
console.log(oppouser1)

oppouser.namw = 'alakh panday'
oppouser.age = 38
oppouser.location = "lucknow"




console.log(oppouser)


const regular = {
    fullname : {
        firstname : "aman kumar",
        lastname:"chauraskiya"
    }
}
console.log(regular)
console.log(regular.fullname.lastname)
 


//*************** */
const obje1 = {
    a:'askd',
    b:'dfl;da'
}

const obje2  = {
    a:'askd788',
    b:'dfl;g8da'
}
//  let vw = Object.assign(obje1?, obje2)
 //console.log(vw)

 obje3 = {...obje1, ...obje2}//spred opration 
 console.log(obje3)

 console.log(Object.keys(obje1))
 console.log(Object.values(obje1))
 console.log(Object.entries(obje1))





//////*************************** */  



 const username = {
    name2:"naman",
    addres: 'jaunpur',
    age: 20

 }

 const {usernameInstructor:naman} = username
 console.log(Object.keys(obje1))
 console.log(username)


    
  
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
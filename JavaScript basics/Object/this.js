
// this is mainly use for excuite currint value
// current  contest ko reffer karata hai
const username = {
    name2:"naman",
    addres: 'jaunpur',
    age: 20,


    wellcomemassage: function(){
        console.log(`${this.name2} , wellcome to this webeside`)
    }

 }
 username.wellcomemassage()
 console.log(this)          //windo object in console and empty object in node

 //*************************************** */



// arrow function -------function add(){n1+ n2} == add()=> {n1 +n2}

// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(3,4))

const add2 = (num1, num2) =>  ( num1 + num2)

console.log(add2(3,40))
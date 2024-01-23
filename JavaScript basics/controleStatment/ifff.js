// var is global variable

if(4!=5)   {
 var b = "kkk"
 let v = 55
 const c = 66
}

console.log(b)
// //console.log(v)
// console.log(c)


loggedbyGoogle = true
loggedbyemail = false


if (loggedbyGoogle || loggedbyemail && true ){
    console.log("user logged in")
}

const month =4

switch(month){
    case 1: 
         console.log("jan")
         break;

    case 2: 
         console.log("fab")
         break;

    case 3: 
         console.log("march")
         break;

    case 4: 
         console.log("may")
         break;
    default:
        {
            console.log("enter key")
        }
}


// fallsy vakue  =  false , 0, -0 , Bigint 0n ,  "" empty string ,null , NaN ,undefined


// Truthey value = "0" , 'false' , " " space , [] , {} ,function (){} ,all number


arr = []
if(arr.length === 0){
    console.log("arr is empty")
}


let emptyobj = {}




if ( Object.keys(emptyobj).length === 0){
    console.log("obj is empty")
}



// nullish Coalescing operator (??) : for null undefind

// let val = null ?? 33


// console.log(val);

let x = null;
let y = 5;
x = x ?? y;
console.log(x); // Output: 5
//  let r= [ 2,3,4,5,6,7];
//  const area= function(r){
//     const output=[];
//     for(let  i=0;i<r.length;i++){
//         output.push(Math.PI * r[i]*r[i])

//     }
//     return output;

    
// }
// console.log(area(r));



// const paridhi= function(r){
//    const output=[];
//    for(let  i=0;i<r.length;i++){
//        output.push(2*(Math.PI * r[i]))

//    }
//    return output;

   
// }
// console.log(paridhi(r));






// function double(x){
//     return x*2;
// }

// function half(x){
//     return x/2;
// }



// function area(x){
//     return x*Math.PI*x;
// }


// let arr=[2,4,8,10,12,14,17];

// let output=arr.map(double);
// console.log(output);
// let output2=arr.map(half);
// console.log(output2);
// let output3=arr.map(area);
// console.log(output3);



// filter questionj





let arr=[2,4,3,1,4,12,1,323,,3,13,4,,4,5,54,65,4,36,3,6,3,6,3444,4344,2,2,234,,44,4,44,5,533123,4133,];

function odd (x){
return x%2 !==0;
}

let output =arr.filter(odd);
console.log(output);


let output2 =arr.filter(
     (x)=>x%2 !==0);
console.log(output2);


let output4 =arr.filter(
    (x)=>x%2===0);
console.log(output4);


let output5=arr.filter(
    (x)=>x>80);
console.log(output5);


const outputt = arr.reduce(function(max,curnt){
    if(curnt>max){
    max = curnt;
    }
return max;

},0)

console.log(outputt);



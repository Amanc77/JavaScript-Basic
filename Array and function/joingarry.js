let arr1=[43.2,34,4,3,43,23,42,43,443,43,543,53,53,4,664,64,6,6,64,6,6,];

let arr2=arr1.filter( number  => number>40
);
console.log(arr1);
let joind = arr1.join(' ');
console.log(joind);

// creat arry by string

let arr11= "Aman kumar chaurasiya b djf erjf frfnr frgnrg";

let arr12= arr11.split(' ');

console.log(arr12);


// shorting an arry;

let arr13= [23,532,5,325,3,25,3,25];

let arr14= arr13.sort( (a,b)=> (a-b));

// ASsending order of arrays
console.log( arr13);



// desendin ordreer pof arry


let arr114= arr13.sort( (a,b)=> (b-a));
console.log( arr13);
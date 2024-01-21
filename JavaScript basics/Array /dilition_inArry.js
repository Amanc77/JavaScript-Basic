let arrs=[2,23,3,33,131,313,1243,14,2314,45,25,5656,35346,235235,];
// dilitoion aat begining

let arr2= arrs.shift();
console.log(arrs);

//dilition at end


let arr3= arrs.pop();
console.log(arrs);

// dilition at any point
 

let arr4= arrs.splice(2,3);
console.log(arrs);

// empting an arry

let arr5= arrs.splice(0,arrs.length);
console.log(arrs);

// ya


arrs.length=0;
console.log(arrs);


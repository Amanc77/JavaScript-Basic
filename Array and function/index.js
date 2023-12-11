// object cloning

let src= {
    a:10,
    b:20,
    c:30,
    
};

let dest= {};
for (let key in src) {
    dest[key]= src[key];
}
console.log(dest);



let myObject = { a: 1, b: 2, c: 3 };

for (let key in myObject) {
    console.log(key);         // Outputs: a, b, c
    console.log(myObject[key]);  // Outputs: 1, 2, 3
}



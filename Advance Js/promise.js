// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(e){
//         console.log('promiss funstion chal gaya');
//     },1000)
//     resolve()
// })

// promiseOne.then(function(){
//     console.log('ab jake then wala chalega');
// }) 
// console.log();
// console.log(`now i am learing syncronuss promiss`);



const ticket = new Promise((resolve,reject ) => {  //here  i am usising arrow function
    condition = false;
    if (condition) {
        resolve(`your ticite is valid , Now you can take your flite`)
        
    }
    else{
        reject(`you tiket is not valid, so you can not take flite`)
    }
})

ticket
.then(function(data){
    console.log(` ok , ${data}`)                          //data is passing value
})
.catch(function (data){
    console.log(`ohhh no , ${data}`);
})
.finally(()=>{
    console.log(`it will run alwaysssssssssss`);
})
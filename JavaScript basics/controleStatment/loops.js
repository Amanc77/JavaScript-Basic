for (let index = 0; index <10 ; index++) {
    const element = index;
    // console.log(index)
    
}

  for (let i = 0; i < 5; i++) {
    // console.log(` outer loop     print   i = ${i}`)
    for (let j = 0; j < 5; j++) {
        // console.log(`this is inner loop   print j = ${j}  and print i = ${i}`)
        
    }
    
  }


  //************while loop */
  initial = 1
  while (initial <=12) {
    // console.log(initial)
    initial ++
    
  }




  do {
    // console.log(initial*10)
    initial ++
    
  } while (initial<=100);


  ["" ," ", ""]// Array
  [{} , {},{}]   // object

  const arr = [1,2,2,3,65,5,8,8,88,]
  for (const num of arr) {
    // console.log(num)
    
  }

  const myobject = {
    name : "slsk",
    age: "22",
    dj: "kdfsk",
  }
  for (const key1 in myobject) {
    // console.log(`${key1}      ${myobject[key1]}` )
  }

  //*********  For each loop */

  const arr1 = [2,2,323,23,23,23,234,244,]
  arr1.forEach(element => {
    // console.log(element)
  });

  const arra3 = [4,432,2,34,42]

  arra3.forEach( item => {
    // console.log(item)
  })

  const nw = arra3.filter((num)=> num>300)
//   console.log(nw)


  ///////************************************* */

//   console.log('bookkkkkkkkkkkkkkkkkkkkkkkkk walaaaaaaaaaaaaaaaaaaaaaa')



  const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk) => bk.genre ==="Fiction")
   userBooks = books.filter((book) => {
  return  book.edition <= 2000  && book.genre === 'History'
  })
//   console.log(userBooks);


  const arra33 = [4,432,2,34,42]


  //**********  map
  
  
 let newnums = arra33.map ((item)=> {
    return item + 2


 })

   
//  console.log(newnums)

 let newnum3 = arra33.map((item) => item*10)
                      .map((item) => item + 5)
                      .filter((num) => num >= 300)
                      




// console.log(newnum3)

const mynums = [2,4,5]
 
const metotal = mynums.reduce(function(acc , current)
{
    console.log(`acc = ${acc} current ${current}`)
    return acc + current

},0)

console.log(metotal)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999 
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc , courceprice) => acc + courceprice.price,0)

console.log(priceToPay);
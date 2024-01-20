let myName = "  aman  Kumar"
let pincode = 112233 
// console.log(typeof (pincode))
let c  = myName + pincode
console.log(c)
console.log(typeof (c))
console.log(myName[2])
console.log(myName.indexOf("n"))
console.log(myName.replace('kumar',' chaurasiya'))


let heroName = new String("Tom lethom")
console.log(heroName.charAt(6))




newString = heroName.substring(0,6)//give string from  0 to 6
console.log(newString)
newString1 = new String ("           Aman  kumar chaurasiya      ")
console.log(newString1.trim())// do not  print space frome where the word is stated
console.log(newString1.replace('kumar chaurasiya', 'panday'))
console.log(newString1)


const n = 'aman kumar'
console.log(n.replace('kumar',"chaurasiya"))
console.log(n.includes('panday'))//for chacking word is present or not
console.log(n)
console.log(n.split(' '))
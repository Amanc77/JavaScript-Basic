
// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
let Distance = 2;
let Distanceinmeter = Distance * 1000;
let Distanceinfeet = Distanceinmeter * 3.28;
let Distanceinches = Distanceinmeter * 39.37;  // Corrected the conversion factor
let Distancecentimeter = Distanceinmeter * 100;

console.log("Distance in km is: " + Distance);
console.log("Distance in meters is: " + Distanceinmeter);
console.log("Distance in feet is: " + Distanceinfeet);
console.log("Distance in inches is: " + Distanceinches);
console.log("Distance in centimeters is: " + Distancecentimeter);

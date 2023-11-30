// Question-1: Input the distance in Kilometer and Convert into Meter and Centimeter.
let distanceInKilometer = parseFloat(prompt("Enter distance in kilometers:"));
let distanceInMeter = distanceInKilometer * 1000;
let distanceInCentimeter = distanceInKilometer * 100000;
console.log("Distance in Meter: " + distanceInMeter + " m");
console.log("Distance in Centimeter: " + distanceInCentimeter + " cm");




// Question-2: WAP to input radius of a circle and log the area of the circle.
let radius = parseFloat(prompt("Enter the radius of the circle:"));
let area = Math.PI * radius * radius;
console.log("Area of the circle: " + area);




// Question-3: WAP to input two numbers and perform arithmetic operations on those numbers.
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);




// Question-4: WAP to calculate total marks in two subjects and then calculate percentage.
let subject1Marks = parseFloat(prompt("Enter marks in subject 1:"));
let subject2Marks = parseFloat(prompt("Enter marks in subject 2:"));
let totalMarks = subject1Marks + subject2Marks;
let percentage = (totalMarks / 200) * 100;
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");





// Question-5: WAP to input the length and breadth of a rectangle and calculate the area and perimeter of the rectangle.
let length = parseFloat(prompt("Enter the length of the rectangle:"));
let breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));
let areaRectangle = length * breadth;
let perimeterRectangle = 2 * (length + breadth);
console.log("Area of the rectangle: " + areaRectangle);
console.log("Perimeter of the rectangle: " + perimeterRectangle);





// Question-6: WAP to input n numbers and log the average of those numbers.
let n = parseInt(prompt("Enter the number of elements:"));
let sum = 0;
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    sum += num;
}
let average = sum / n;
console.log("Average: " + average);





// Question-7: WAP to input the distance between two cities (in km), convert and print this distance in meter, feet, inches, and centimeter.
let distanceBetweenCities = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
let distanceInMeter = distanceBetweenCities * 1000;
let distanceInFeet = distanceBetweenCities * 3280.84;
let distanceInInches = distanceBetweenCities * 39370.1;
let distanceInCentimeter = distanceBetweenCities * 100000;
console.log("Distance in Meter: " + distanceInMeter + " m");
console.log("Distance in Feet: " + distanceInFeet + " ft");
console.log("Distance in Inches: " + distanceInInches + " in");
console.log("Distance in Centimeter: " + distanceInCentimeter + " cm");






// Question-8: WAP to input the temperature in Fahrenheit and convert this temperature to Centigrade.
let temperatureInFahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
let temperatureInCentigrade = (temperatureInFahrenheit - 32) * (5/9);
console.log("Temperature in Centigrade: " + temperatureInCentigrade.toFixed(2) + " °C");







// Question-9: Input the quantity and rate of a product, then calculate the amount. A discount of 10% after then calculate the discount amount and amount after discount.
let quantity = parseInt(prompt("Enter the quantity of the product:"));
let rate = parseFloat(prompt("Enter the rate of the product:"));
let amount = quantity * rate;
let discount = 0.1 * amount;
let amountAfterDiscount = amount - discount;
console.log("Amount: $" + amount);
console.log("Discount Amount: $" + discount);
console.log("Amount After Discount: $" + amountAfterDiscount);






// Question-10: Input principal amount, input rate of interest, input number of years, then calculate simple interest.
let principalAmount = parseFloat(prompt("Enter the principal amount:"));
let rateOfInterest = parseFloat(prompt("Enter the rate of interest (in percentage):"));
let numberOfYears = parseInt(prompt("Enter the number of years:"));
let simpleInterest = (principalAmount * rateOfInterest * numberOfYears) / 100;
console.log("Simple Interest: $" + simpleInterest);

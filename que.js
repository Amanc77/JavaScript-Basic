// Question-1: Input the distance in Kilometer and Convert into Meter and Centimeter.
let kilometers = parseFloat(prompt("Enter the distance in kilometers for Question-1: "));
let meters = kilometers * 1000;
let centimeters = meters * 100;
console.log("1. " + kilometers + " kilometers is equal to ");
console.log("   " + meters + " meters and ");
console.log("   " + centimeters + " centimeters\n");

// Question-2: WAP to input radius of a circle and log the area of the circle.
let radius = parseFloat(prompt("Enter the radius of the circle for Question-2: "));
let area = Math.PI * radius ** 2;
console.log("2. The area of a circle with radius " + radius + " is ");
console.log("   " + area.toFixed(2) + "\n");


// Question-3: WAP to input two numbers and perform arithmetic operations on those numbers.

let num1 = parseFloat(prompt("Enter the first number for Question-3: "));
let num2 = parseFloat(prompt("Enter the second number for Question-3: "));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("3. Sum: " + sum);
console.log("   Difference: " + difference);
console.log("   Product: " + product);
console.log("   Quotient: " + quotient.toFixed(2) + "\n");

// Question-4: Calculate total marks and percentage
let subject1Marks = parseFloat(prompt("Enter marks for subject 1 for Question-4: "));
let subject2Marks = parseFloat(prompt("Enter marks for subject 2 for Question-4: "));
let totalMarks = subject1Marks + subject2Marks;
let percentage = (totalMarks / 200) * 100;
console.log("4. Total Marks: " + totalMarks);
console.log("   Percentage: " + percentage.toFixed(2) + "%\n");

// Question-5: Calculate area and perimeter of a rectangle
let length = parseFloat(prompt("Enter the length of the rectangle for Question-5: "));
let breadth = parseFloat(prompt("Enter the breadth of the rectangle for Question-5: "));
let rectangleArea = length * breadth;
let rectanglePerimeter = 2 * (length + breadth);
console.log("5. Area: " + rectangleArea);
console.log("   Perimeter: " + rectanglePerimeter + "\n");

// Question-6: Calculate the average of three numbers
let numbers = [];
for (let i = 0; i < 3; i++) {
    numbers.push(parseFloat(prompt("Enter number " + (i + 1) + " for Question-6: ")));
}
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
let average = sumOfNumbers / numbers.length;
console.log("6. Average: " + average.toFixed(2) + "\n");

// Question-7: Convert distance between two cities to various units
let distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers for Question-7: "));
let distanceInMeter = distanceInKm * 1000;
let distanceInFeet = distanceInKm * 3280.84;
let distanceInInches = distanceInKm * 39370.1;
let distanceInCentimeter = distanceInKm * 100000;
console.log("7. Distance: " + distanceInMeter + " meters");
console.log("   " + distanceInFeet.toFixed(2) + " feet");
console.log("   " + distanceInInches.toFixed(2) + " inches");
console.log("   " + distanceInCentimeter + " centimeters\n");

// Question-8: Convert temperature from Celsius to Fahrenheit
let temperatureInCelsius = parseFloat(prompt("Enter the temperature in Celsius for Question-8: "));
let temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
console.log("8. Temperature: " + temperatureInFahrenheit.toFixed(2) + " Fahrenheit\n");

// Question-9: Calculate amount, discount, and amount after discount
let quantity = parseFloat(prompt("Enter the quantity for Question-9: "));
let rate = parseFloat(prompt("Enter the rate for Question-9: "));
let amount = quantity * rate;
let discount = 0.1 * amount;
let amountAfterDiscount = amount - discount;
console.log("9. Amount: " + amount);
console.log("   Discount: " + discount);
console.log("   Amount after Discount: " + amountAfterDiscount + "\n");

// Question-10: Calculate simple interest
let principal = parseFloat(prompt("Enter the principal amount for Question-10: "));
let rateOfInterest = parseFloat(prompt("Enter the rate of interest for Question-10: "));
let numberOfYears = parseFloat(prompt("Enter the number of years for Question-10: "));
let simpleInterest = (principal * rateOfInterest * numberOfYears) / 100;
console.log("10. Simple Interest: " + simpleInterest);

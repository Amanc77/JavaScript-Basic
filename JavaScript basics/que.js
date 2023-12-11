// Question-1: Input the distance in Kilometer and Convert into Meter and Centimeter.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Input distance in Kilometers
rl.question('Enter the distance in Kilometers: ', (distanceInKilometer) => {
  // Convert distance to meters and centimeters
  let distanceInMeter = distanceInKilometer * 1000;
  let distanceInCentimeter = distanceInKilometer * 100000;

  // Display the results
  console.log(`Distance in Meters: ${distanceInMeter} m`);
  console.log(`Distance in Centimeters: ${distanceInCentimeter} cm`);

  // Close the readline interface
  rl.close();
});

//Imports the assertEquals function from test-framework/test-framework.js file
import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js"; //Imports the airport module from src/airport.js file

//is called after each function to reset the values
const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  plane = undefined;
  airport.airportPlanes = [];
};

// Test 1
//* Add plane to the airport using land and expect array (airportPlanes) to have increased in length by 1

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Add plane to basket using land and expect array (airportPlanes) to have increased in length by 1`
);

// Arrange
let plane = {};
let expected = airport.airportPlanes.length + 1;
let actual, result;

// Act
airport.land(plane); //Add plane to the airport
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

//Clean Up
afterEach();

//! END OF TEST 1

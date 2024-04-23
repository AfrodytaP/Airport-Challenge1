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
//* Add plane to the airport using land() and expect array (airportPlanes) to have increased in length by 1

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Add plane to airport using land() and expect array (airportPlanes) to have increased in length by 1`
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
console.log(`==================

`);

//Clean Up
afterEach();

//! END OF TEST 1

// TEST 2
//* Test that plane passed to land() is actually plane added to the airport.

console.log(`Test 2`);
console.log(`==================`);
console.log(
  `Test that plane passed to land() is actually added to the airport`
);
// Arrange
expected = true;
plane = { id: "1" }; //assigned id of 1 to plane
// Act
airport.land(plane); //Added plane with id of 1 into airportPlanes Array
actual = airport.airportPlanes.includes(plane);
// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 2

// TEST 3
//* Remove plane from the airport using takeOff() and expect array (airportPlanes) to have decreased in length by 1.
console.log(`Test 3`);
console.log(`==================`);
console.log(
  `Remove plane from airport using takeOff() and expect array (airportPlanes) to have decreased in length by 1`
);
// Arrange
plane = {};
airport.land(plane); //Add plane to the airport (into airportPlanes array)
airport.land(plane); //Add plane to the airport (into airportPlanes array)
expected = airport.airportPlanes.length - 1;
actual, result;

// Act
airport.takeOff(plane); //Remove plane from the airport (from airportPlanes array)
actual = airport.airportPlanes.length;
// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 3

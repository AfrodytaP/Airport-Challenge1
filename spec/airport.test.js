//Imports the assertEquals function from test-framework/test-framework.js file
import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js"; //Imports the airport module from src/airport.js file
import { plane1, plane2 } from "../src/plane.js";

//is called after each function to reset the values
const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  plane = undefined;
  airport.airportPlanes = [];
  airport.airportCapacity = 10;
};

// Test 1
//* Add plane to the airport using land() and expect array (airportPlanes) to have increased in length by 1

console.log(`Requirement 1 - Test 1`);
console.log(`==================`);
console.log(
  `Add plane to airport using land() and expect array (airportPlanes) to have increased in length by 1`
);

// Arrange
let plane = { id: 1 };
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

console.log(`Requirement1 - Test 2`);
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
console.log(`Requirement 2 - Test 3`);
console.log(`==================`);
console.log(
  `Remove plane from airport using takeOff() and expect array (airportPlanes) to have decreased in length by 1`
);
// Arrange
plane = { id: 1 };
airport.land(plane); //Add plane to the airport (into airportPlanes array)
plane = { id: 2 };
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

// TEST 4
//* Test that plane passed to takeOff() is the actual plane removed from the airport.
console.log(`Requirement 2 - Test 4`);
console.log(`==================`);
console.log(
  `Test that plane passed to takeOff() is the actual plane removed from the airport expect array (airportPlanes) .`
);
// Arrange
plane = { id: 1 };
airport.land(plane); //Add plane to the airport (into airportPlanes array)
plane = { id: 2 };
airport.land(plane); //Add plane to the airport (into airportPlanes array)
expected = false;
actual, result;
// Act
airport.takeOff(plane); //Remove plane from the airport (from airportPlanes array) with id of 1
actual = airport.airportPlanes.some(({ id }) => id === plane.id); // Checks if plane with id of 1 is preset in airportPlanes array
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 4

// TEST 5
//* Test that the airport is at maximum capacity of plane in airportPlanes array when airport is empty.
console.log(`Requirement 3 - Test 5`);
console.log(`==================`);
console.log(
  `Test that the airport is at maximum capacity of plane in airportPlanes array when airport is empty.`
);
// Arrange
expected = false;
actual, result;
// Act
actual = airport.isAirportFull(); // Checks if airportPlane is at maximum capacity of 10
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 5

// TEST 6
//* Test that the airport is at maximum capacity of plane in airportPlanes array when airport is partially full.
console.log(`Requirement 3 - Test 6`);
console.log(`==================`);
console.log(
  `Test that the airport is at maximum capacity of plane in airportPlanes array airport is partially full.`
);
// Arrange
expected = false;
actual, result;
// Act
plane = { id: "1" };
airport.land(plane);

actual = airport.isAirportFull(); // Checks if airportPlane is at maximum capacity of 10
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 6

// TEST 7
//* Test that the airport is at maximum capacity of plane in airportPlanes array when airport is full.
console.log(`Requirement 3 - Test 7`);
console.log(`==================`);
console.log(
  `Test that the airport is at maximum capacity of plane in airportPlanes array when airport is full.`
);
// Arrange
expected = true;
actual, result;
// Act
airport.populateAirport(10); // Populates airportPlanes array with planes
actual = airport.isAirportFull(); // Checks if airportPlane is at maximum capacity of 10
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 7

// TEST 8
//* Test that the maximum capacity of airport can be overridden with changeAirportCapacityTo().
console.log(`Requirement 4 -Test 8`);
console.log(`==================`);
console.log(`Test that the maximum capacity of airport can be increased.`);
// Arrange
expected = 20;
actual, result;
// Act
airport.changeAirportCapacityTo(20); // Changes airportCapacity
actual = airport.airportCapacity; // Checks airportPlane maximum capacity
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 8

// TEST 9
//* Test that the maximum capacity of airport can be overridden with changeAirportCapacityTo().
console.log(`Requirement 4 - Test 9`);
console.log(`==================`);
console.log(`Test that the maximum capacity of airport can be set to 0.`);
// Arrange
expected = 0;
actual, result;
// Act
airport.changeAirportCapacityTo(0); // Changes airportCapacity
actual = airport.airportCapacity; // Checks airportPlane maximum capacity
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 9

// TEST 10
//* Test that the maximum capacity of airport can be overridden with changeAirportCapacityTo().
console.log(`Requirement 4 - Test 10`);
console.log(`==================`);
console.log(
  `Test that the maximum capacity of airport can't be set to negative integer.`
);
// Arrange
expected = 10;
actual, result;
// Act
airport.changeAirportCapacityTo(-1); // Changes airportCapacity
actual = airport.airportCapacity; // Checks airportPlane maximum capacity
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 10

// TEST 11
//* Test that only planes that are present can be removed with planeExistsInAirport().
console.log(`Requirement 5 - Test 11`);
console.log(`==================`);
console.log(`Test that checks if a specific plane is in the airport.`);
// Arrange
expected = true;
actual, result;
// Act
plane = { id: 1 };
airport.land(plane);
actual = airport.planeExistsInAirport(plane); // Checks if present in airportPlanes
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 11

// TEST 12
//* Test that only planes that are present can be removed with planeExistsInAirport().
console.log(` Requirement 5 - Test 12`);
console.log(`==================`);
console.log(`Test that checks if a specific plane is not in the airport.`);
// Arrange
expected = false;
actual, result;
// Act
plane = { id: 1 };
airport.land(plane);
plane = { id: 5 };
actual = airport.planeExistsInAirport(plane); // Checks if present in airportPlanes
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 12

// TEST 13
//* Test that only planes that are not present can be be added with land().
console.log(`Requirement 6 - Test 13`);
console.log(`==================`);
console.log(`Test that checks if a specific plane is in the airport.`);
// Arrange
expected = airport.airportPlanes.length + 1;
actual, result;
// Act
plane = { id: 1 };
airport.land(plane);
airport.land(plane);
actual = airport.airportPlanes.length; // Checks length in airportPlanes
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 13

// TEST 14
//* Test that only planes that are not present and only if the airport is not full can a plane be added with land().
console.log(`Requirement 6 - Test 14`);
console.log(`==================`);
console.log(
  `Test that checks if a specific plane is in the airport and the airport is not full.`
);
// Arrange
expected = 10;
actual, result;
// Act
airport.populateAirport(10); // Add 10 planes to airportPlanes
plane = { id: 11 }; // Adding a plane with id 11
airport.land(plane); //land() preforms checks and adds plane if checks pass
actual = airport.airportPlanes.length; // Checks length in airportPlanes
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 14

// TEST 15
//* Test that checks that plain has an ID before it is added to the airportPlanes array.`
console.log(`Requirement 6 - Test 15`);
console.log(`==================`);
console.log(
  `Test that checks that plain has an ID before it is added to the airportPlanes array.`
);
// Arrange
expected = 0;
actual, result;
// Act
plane = { name: 1 }; // Adding a plane with id 11
airport.land(plane); //land() preforms checks and adds plane if checks pass
actual = airport.airportPlanes.length; // Checks length in airportPlanes
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

// Clean Up
afterEach();

//! END OF TEST 15

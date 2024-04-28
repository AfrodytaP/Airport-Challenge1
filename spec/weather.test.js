import { assertEquals } from "./test-framework/test-framework.js";
import weather from "../src/weather.js"; //Imports the weather module from src/weather.js file
let randomReturns = [];
//is called after each function to reset the values
const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  randomReturns = [];
};

//Test 16
//* Test that isStormy returns a boolean depending on weather condition.
console.log(`Additional Requirement 7 - Test 16`);
console.log(`==================`);
console.log(
  `Test that isStormy returns a boolean depending on weather condition.`
);
// Arrange
let expected = "boolean";
let actual, result;

// Act
actual = weather.isStormy(); //Call isStormy method
// Assert
result = assertEquals(typeof actual, expected); // Check if actual is equal to expected actual type is being checked

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${typeof actual}`);
console.log(`==================

`);

//Clean Up
afterEach();
//! END OF TEST 16

//Test 17
console.log(`Additional Requirement 7 - Test 17`);
//* Test that isStormy returns a true values randomly.
console.log(`==================`);
console.log(`Test that isStormy returns a true value randomly.`);
// Arrange
expected = true;
actual, result;
for (let i = 0; i < 10; i++) {
  randomReturns.push(weather.isStormy());
}
// Act
actual = randomReturns.includes(true); //Call isStormy method
// Assert
result = assertEquals(actual, expected); // Check if actual is equal to expected

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

//Clean Up
afterEach();
//! END OF TEST 17

//Test 18
console.log(`Additional Requirement 7 - Test 18`);
//* Test that isStormy returns a false values randomly.
console.log(`==================`);
console.log(`Test that isStormy returns a false value randomly.`);
// Arrange
expected = true;
actual, result;
for (let i = 0; i < 10; i++) {
  randomReturns.push(weather.isStormy());
}
// Act
actual = randomReturns.includes(false); //Call isStormy method
// Assert
result = assertEquals(actual, expected); // Check if actual is equal to expected

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================

`);

//Clean Up
afterEach();
//! END OF TEST 18

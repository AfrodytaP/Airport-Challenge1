import { assertEquals } from "./test-framework/test-framework.js";
import weather from "../src/weather.js"; //Imports the weather module from src/weather.js file

//Test 16
//* Test that isStormy returns a boolean depending of wether condition.
console.log(`==================`);
console.log(
  `Test that isStormy returns a boolean depending of wether condition.`
);
// Arrange
let expected = "boolean";
let actual, result;

// Act
actual = weather.isStormy(); //
// Assert
result = assertEquals(typeof actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${typeof actual}`);
console.log(`==================

`);

//! END OF TEST 16

import airport from "./airport.js";
import {
  plane1,
  plane2,
  plane4,
  plane3,
  plane5,
  plane6,
  plane7,
  plane8,
  plane9,
  plane10,
  plane11,
} from "./plane.js";

//Requirement 1 - User Story 1:
// As an air traffic controller,
// I'd like to instruct planes to land,
// so that the plane can enter the airport.
console.log(`Requirement 1 - User Story 1`);
//Display airport contents
console.log(`Initial airport contents:`);
console.log(airport.airportPlanes);

//Landing more than one plane into airport
airport.land(plane1);
airport.land(plane2);
airport.land(plane3);

console.log();

//Display updated airport contents
console.log(`Updated airport contents after landing 3 planes:`);
console.log(airport.airportPlanes);

console.log();
console.log();

//Requirement 2 - User Story 2:
// As an air traffic controller,
// I'd like to instruct planes to take off,
// so that the plane can leave the airport.
console.log(`Requirement 2 - User Story 2:`);
//Display airport contents
console.log(`Current airport contents:`);
console.log(airport.airportPlanes);
//Instruct plane5 to take off
console.log();
console.log(`Instruct plane5 to take off:`);
//Instruct plane1 to take off from airport
airport.takeOff(plane1);

console.log();

//Display updated airport contents
console.log(`Updated airport contents after plane1 is instructed to take off:`);
console.log(airport.airportPlanes);
console.log();
console.log();

//Requirement 3 - User Story 3:
// As an air traffic controller,
// I'd like to only land a plane if the airport is not full,
// so I do not exceed the capacity of the airport.
console.log(`Requirement 3 - User Story 3:`);
//Display airport capacity
console.log(`Current airport capacity by 10 spaces:`);
console.log(airport.airportCapacity);

console.log(`List of ID's that are current in the airport:`);
airport.airportPlanes = [
  plane1,
  plane2,
  plane3,
  plane4,
  plane5,
  plane6,
  plane7,
  plane8,
  plane9,
  plane10,
];
console.log(airport.airportPlanes);
//Attempting to land plane11 at when the airport is full.
console.log(`Attempting to land plane11 when the airport is full`);
airport.land(plane11);
console.log();
console.log(`List of ID's after attempting to land plane11:`);
console.log(airport.airportPlanes);

console.log();
console.log();

//Requirement 4 - User Story 4:
// As an air traffic controller,
// I'd like to override the maximum capacity of the airport,
// so that the airport system can stay updated with changes.
console.log(`Requirement 4 - User Story 4:`);
//Display airport capacity
console.log(`Current airport capacity:`);
console.log(airport.airportCapacity);

//Overriding airport capacity to 20:
airport.changeAirportCapacityTo(20);

console.log();

//Display updated airport contents
console.log(`Updated airport capacity:`);
console.log(airport.airportCapacity);
console.log();
console.log();

//Requirement 5 - User Story 5:
// As an air traffic controller,
// I'd like to be unable to instruct a plain to take off if it is not currently at the airport,
// so that errors can be avoided.
console.log(`Requirement 5 - User Story 5:`);
//Display airport contents
console.log(`Current airport contents :`);
airport.airportPlanes = [plane1, plane2, plane3];
console.log(airport.airportPlanes);
console.log();
//Instruct plane5 to take off
console.log(`Instruct plane5 to take off:`);
//Instruct plane5 to take off, when plane5 is not at the airport:
airport.takeOff(plane5);

console.log();

//Display updated airport contents
console.log(`Airport contents after plane5 was instructed to take off:`);
console.log(airport.airportPlanes);
console.log();
console.log();

//Requirement 6 - User Story 6:
// As an air traffic controller,
// I'd like to only land a plane if the plane is not already at the airport,
// so that confusion can be avoided.
console.log(`Requirement 6 - User Story 6`);

//Display airport contents
console.log(`Initial airport contents:`);
console.log(airport.airportPlanes);
console.log();
//Attempting to land plane3t
console.log(`Attempting to land plane3.`);
airport.land(plane3);
console.log();

//Display updated airport contents
console.log(
  `Updated airport contents after attempting to land plane3, an additional plane3 was not added to the airport:`
);
console.log(airport.airportPlanes);
console.log();
console.log();

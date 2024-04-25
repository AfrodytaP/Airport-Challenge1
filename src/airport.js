const airport = {
  land: function (plane) {
    //uses planeExistsInAirport() to check if plane is not already present and airport is not full
    if (!this.planeExistsInAirport(plane) && !this.isAirportFull()) {
      this.airportPlanes.push(plane);
    }
  },

  takeOff: function (plane) {
    //Find the index of the plane by ID
    let index = this.airportPlanes.findIndex((p) => p.id === plane);
    //If the plane is in array remove it from airportPlanes array
    index !== -1 ? this.airportPlanes.splice(index, 1) : null;
  },

  isAirportFull: function () {
    //Checks if the length of airportPlanes is grater than the capacity of airport
    return this.airportPlanes.length >= this.airportCapacity;
  },

  populateAirport: function (numberOfPlanes) {
    //For loop increase id by 1 and land() populates airportPlanes
    for (let i = 1; i <= numberOfPlanes; i++) {
      let plane = { id: i };
      airport.airportPlanes.push(plane);
    }
  },
  changeAirportCapacityTo: function (newAirportCapacity) {
    //Checks if newAirportCapacity is not a negative number
    this.airportCapacity =
      newAirportCapacity >= 0 ? newAirportCapacity : this.airportCapacity;
  },
  planeExistsInAirport: function (plane) {
    //Checks with same() if plane is present by id
    return airport.airportPlanes.some(({ id }) => id === plane.id);
  },
  airportPlanes: [],
  airportCapacity: 10, //Default capacity
};

export default airport;

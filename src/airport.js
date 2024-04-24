const airport = {
  land: function (plane) {
    //Add plane to the airportPlanes array
    this.airportPlanes.push(plane);
    return this;
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

  populateBasket: function (numberOfPlanes) {
    //For loop increase id by 1 and land() populates airportPlanes
    for (let i = 1; i <= numberOfPlanes; i++) {
      let plane = { id: "${i}" };
      airport.land(plane);
    }
  },
  changeAirportCapacityTo: function (newAirportCapacity) {
    //Overrides airportCapacity
    return (this.airportCapacity = newAirportCapacity);
  },
  airportPlanes: [],
  airportCapacity: 10, //Default capacity
};

export default airport;

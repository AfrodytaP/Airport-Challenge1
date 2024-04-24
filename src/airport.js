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
    return this.airportPlanes.length > this.airportCapacity;
  },

  airportPlanes: [],
  airportCapacity: 10,
};

export default airport;

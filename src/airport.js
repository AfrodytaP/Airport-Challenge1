const airport = {
  land: function (plane) {
    this.airportPlanes.push(plane);
  },

  takeOff: function () {
    this.airportPlanes.pop();
  },

  airportPlanes: [],
};

export default airport;

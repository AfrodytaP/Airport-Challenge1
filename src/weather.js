const weather = {
  isStormy: function () {
    this.weatherType = Math.random() < 0.5 ? "stormy" : "notStormy";

    if (this.weatherType === "stormy") {
      return true;
    } else {
      return false;
    }
  },

  weatherType: "",
};

export default weather;

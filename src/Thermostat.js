var Thermostat = function() {
  const DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.temperature = DEFAULT_TEMP;
};

Thermostat.prototype = {
  up: function() {
    this.temperature++;
  },
  down: function() {
    if(this.temperature < this.MIN_TEMP){
      this.temperature--;
    } else {
      throw 'Minimum temperature reached';
    }
  },
};

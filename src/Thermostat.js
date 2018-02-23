'use strict';

var Thermostat = function() {
  this.powerSave = true;
  this.MIN_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this.PS_MAX_TEMP = 25;
  this.MAX_TEMP = 32;
  this.LOW_ENERGY_TEMP = 18;
  this.MED_ENERGY_TEMP = 25;
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype = {
  up: function() {
    if (this.temperature < this.PS_MAX_TEMP && this.powerSave) {
      this.temperature ++;
    } else if (this.temperature < this.MAX_TEMP && !this.powerSave) {
      this.temperature ++;
    } else {
      throw 'Maximum temperature reached'
    }
  },
  down: function() {
    if (this.temperature > this.MIN_TEMP){
      this.temperature --;
    } else {
      throw 'Minimum temperature reached';
    }
  },
  reset: function() {
    this.temperature = this.DEFAULT_TEMP;
  },
  energyUsage: function() {
    if (this.temperature < this.LOW_ENERGY_TEMP){
      return 'low-usage';
    } else if (this.temperature < this.MED_ENERGY_TEMP){
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  },

  setPowerSave: function() {
    this.powerSave = !this.powerSave;
    if (this.powerSave === true && this.temperature > this.PS_MAX_TEMP){
      this.temperature = this.PS_MAX_TEMP;
    }
  },
};

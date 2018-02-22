'use strict';

describe('Thermostat', function(){

  var thermostat;
  var tempUp;
  var tempDown;

  beforeEach(function(){
    thermostat = new Thermostat();
    tempUp = function(number) {
      for (var i = 0; i < number; i++) {
        thermostat.up();
      }
    };
    tempDown = function(number) {
      for (var i = 0; i < number; i++) {
        thermostat.down();
      }
    };
  });

  it('has a default setting of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(DEFAULT_TEMP);
  });

  it('can increase the temperature with up function', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature with down function', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function(){
    tempDown(10);
    expect(function(){thermostat.down()}).toThrow('Minimum temperature reached');
  });

  it('has a reset function to reset to 20 degrees', function(){
    tempUp(4);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(DEFAULT_TEMP)
  });

  describe('Energy usage', function(){
    it('returns "low-usage" for temperatures < 18', function(){
      tempDown(3);
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });
    it('returns "medium-usage" for temperatures between 18 and 24', function(){
      tempUp(2);
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });
    it('returns "high-usage" for temperatures > 24 ', function(){
      thermostat.powerSave = false;
      tempUp(6);
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });

  describe('Power saving mode', function(){
    it('is on by default', function(){
      expect(thermostat.powerSave).toEqual(true);
    });

    it('sets a maximum temperature of 25 degrees', function(){
      tempUp(5);
      expect(function() {thermostat.up()}).toThrow('Maximum temperature reached');
    });
  });

  describe('Power saving off', function(){
    it('sets a maximum temperature of 32 degrees', function(){
      thermostat.powerSave = false;
      tempUp(12);
      expect(function() {thermostat.up()}).toThrow('Maximum temperature reached');
    });
  });

});

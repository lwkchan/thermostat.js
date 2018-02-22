'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
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
    for(var i = 1; i <= 10; i++){
      thermostat.down();
    }
    expect(function(){thermostat.down()}).toThrow('Minimum temperature reached');
  });

  it('has a reset function to reset to 20 degrees', function(){
    for(var i = 1; i <= 4; i++){
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(DEFAULT_TEMP)
  });

  describe('Energy usage', function(){
    it('returns "low-usage" for temperatures < 18', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });
    it('returns "medium-usage" for temperatures between 18 and 24', function(){
      thermostat.temperature = 22;
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });
    it('returns "high-usage" for temperatures > 24 ', function(){
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });

  describe('Power saving mode', function(){
    it('is on by default', function(){
      expect(thermostat.powerSave).toEqual(true);
    });

    it('sets a maximum temperature of 25 degrees', function(){
      for(var i = 1; i <= 5; i++){
        thermostat.up();
      }
      expect(function() {thermostat.up()}).toThrow('Maximum temperature reached');
    });
  });

  describe('Power saving off', function(){
    it('sets a maximum temperature of 32 degrees', function(){
      thermostat.powerSave = false;
      for(var i = 1; i <= 12; i++) {
        thermostat.up();
      }
      expect(function() {thermostat.up()}).toThrow('Maximum temperature reached');
    });
  });

});

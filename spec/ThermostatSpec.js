describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('has a default setting of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});

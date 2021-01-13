'use strict';

describe('thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('initializes with a temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can have the temperature increased by 1', function(){
    thermostat.increase()
    expect(thermostat.temperature).toEqual(21);
  });
});

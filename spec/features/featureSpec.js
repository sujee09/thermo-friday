'use strict';

describe('Feature Test', function(){
  var thermostat = new Thermostat();
  it('thermostat temperature can be increased by 1', function(){
    thermostat.increase()
    expect(thermostat.temperature).toEqual(21);
  });
});
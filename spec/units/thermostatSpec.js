'use strict';

describe('thermostat', function(){
  var thermostat = new Thermostat();
  it('initializes with a temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});
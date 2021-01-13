'use strict';

describe('Feature Test', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat temperature can be increased by 1', function(){
    thermostat.increase()
    expect(thermostat.temperature).toEqual(21);
  });

  it('thermostat temperature can be decrease by 1', function(){
      thermostat.decrease()
      expect(thermostat.temperature).toEqual(19);
  });

  it('temperature cannot go below 10', function(){
    [1,2,3,4,5,6,7,8,9,10].forEach(function(){
      thermostat.decrease();
    });
     expect(function(){ thermostat.decrease(); }).toThrowError('cannot decrease temperature below 10');
     expect(thermostat.temperature).toEqual(10)
  });
});
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

  it('can have the temperature decrease by 1', function(){
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(19);
  });

  it('temperature cannot go below 10', function(){
    [1,2,3,4,5,6,7,8,9,10].forEach(function(){
      thermostat.decrease();
    });
     expect(function(){ thermostat.decrease(); }).toThrowError('cannot decrease temperature below 10');
  });
});

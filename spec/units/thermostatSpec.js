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

  it('power saving mode is on by default: temperature cannot go above 25', function(){
    [1,2,3,4,5].forEach(function(){
      thermostat.increase();
    });
     expect(function(){ thermostat.increase(); }).toThrowError('Power Saving Mode: cannot increase temperature above 25');
  });

  it('can turn power saving mode off', function(){
    thermostat.powerSaving()
    expect(thermostat._powerSavingMode).toEqual(false)
  });

  it('can turn power saving mode back on', function(){
    thermostat.powerSaving()
    thermostat.powerSaving()
    expect(thermostat._powerSavingMode).toEqual(true)
  });

  it('can reset temperature to 20', function(){
    [1,2,3,4,5].forEach(function(){
      thermostat.increase();
    });
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  });

  it('shows low-usage energy when temperature is < 18', function(){
    [1,2,3].forEach(function(){
      thermostat.decrease();
    });
     expect(thermostat.energyUsage()).toEqual('low-usage')
   });

   it('shows medium-usage energy when temperature is <= 25', function(){
     expect(thermostat.energyUsage()).toEqual('medium-usage')
   });

   it('shows high-usage energy when temperature is > 25', function(){
    thermostat.powerSaving();
    [1,2,3,4,5,6].forEach(function(){
      thermostat.increase();
    });
     expect(thermostat.energyUsage()).toEqual('high-usage')
   });
});

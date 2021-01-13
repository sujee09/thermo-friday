'use strict';

class Thermostat {

  constructor() {
    this.temperature = 20;
    this._powerSavingMode = true;
  };

  increase() {
    if(this.temperature === 25 && this._powerSavingMode === true) {
      throw new Error('Power Saving Mode: cannot increase temperature above 25'); 
      }
    else if(this.temperature === 32) {
      throw new Error('Cannot increase temperature above 32'); 
      }
    this.temperature++
  };

  decrease() {
    if(this.temperature === 10) {
    throw new Error('cannot decrease temperature below 10'); 
    }
    this.temperature--
  };

  powerSaving() {
    if(this._powerSavingMode === true) {
      this._powerSavingMode = false
    }
    else {
      this._powerSavingMode = true
    }
  };

  reset() {
    this.temperature = 20
  };

  energyUsage() {
    if(this.temperature < 18) {
      return 'low-usage'
    }
    else if(this.temperature <= 25) {
      return 'medium-usage'
    }
    else {
      return 'high-usage'
    }
  };

};

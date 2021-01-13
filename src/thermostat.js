'use strict';

class Thermostat {

  constructor() {
    this.temperature = 20;
  };

  increase() {
    this.temperature++
  };

  decrease() {
    if(this.temperature === 10) {
    throw new Error('cannot decrease temperature below 10'); 
    }
    this.temperature--
  };

};

$(document).ready(function() {
    var thermostat = new Thermostat();
      updateTemperature()
      $('#temperature-up').on('click', function() {
        thermostat.increase();
        updateTemperature()
      });
      $('#temperature-down').on('click', function() {
        thermostat.decrease();
        updateTemperature()
      });
      $('#temperature-reset').on('click', function() {
        thermostat.reset();
        updateTemperature()
      });
      $('#power-saving-mode').on('click', function() {
        thermostat.powerSaving();
        updateTemperature()
        powerCheck()
      });

      function powerCheck() {
        if (thermostat._powerSavingMode === true) {
          $('#power-saving-status').text('on') 
        }
        else {
          $('#power-saving-status').text('off')
        }

      }

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      if(thermostat.energyUsage() === 'low-usage') {
        $('#temperature').css('color', 'green')
        } else if(thermostat.energyUsage() === 'medium-usage') {
          $('#temperature').css('color', 'black')
        } else {
          $('#temperature').css('color', 'red')
        }
      }
      
    });

    
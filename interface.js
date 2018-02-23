$(document).ready(function() {
  var thermostat = new Thermostat();

  resetColour = function() {
    if(thermostat.energyUsage() == 'low-usage') {
      $('.container').css("background-color", "palegreen");
    } else if(thermostat.energyUsage() == 'medium-usage'){
      $('.container').css("background-color", '#B0E0E6');
    } else{
        $('.container').css("background-color", 'darksalmon');
    }
  }

  $('#text').text(thermostat.temperature);
  $('.container').css("background-color", '#B0E0E6');

  $('#up').on('click', function() {
    thermostat.up();
    $('#text').text(thermostat.temperature);
    resetColour();
  });

  $('#down').on('click', function() {
    thermostat.down();
    $('#text').text(thermostat.temperature);
    resetColour();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    $('#text').text(thermostat.temperature);
  });

  $('#power-save').css("background-color", "palegreen");

  $('#power-save').on('click', function() {
    thermostat.setPowerSave();
    $('#text').text(thermostat.temperature);
    if (thermostat.powerSave === true) {
      $('#power-save').css("background-color", "palegreen");
    } else if (thermostat.powerSave === false) {
      $('#power-save').css("background-color", "coral");
    }
  });

  if(thermostat.energyUsage() == 'low-usage') {
    $('.container').css("background-color", "palegreen");
  }



});

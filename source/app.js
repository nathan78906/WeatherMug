(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS
  var element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    element = INSTALL.createElement(options.location, element)

    // Set the app attribute to your app's dash-delimited alias.
    var apiKey = 'c5732581d8bf5cf3'
    var ipUrl = "https://ipapi.co/json/"
    element.setAttribute('app', 'example')
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", ipUrl, false);
    xhr.send();
    var res = JSON.parse(xhr.responseText);
    
    //console.log("one")
    var state = res.region_code
    var city = res.city
    // Oroville, CA has an active alert 
    // var state = "CA"
    // var city = "Oroville"
    
    var forecastUrl = `http://api.wunderground.com/api/${apiKey}/conditions/q/${state}/${city}.json`
    
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", forecastUrl, false)
    xhr2.send()
    var res2 = JSON.parse(xhr2.responseText)
    //console.log("two")
    
    var alertsUrl = `http://api.wunderground.com/api/${apiKey}/alerts/q/${state}/${city}.json`
    
    xhr2.open("GET", alertsUrl, false)
    xhr2.send()
    var res3 = JSON.parse(xhr2.responseText)
    //console.log("three")
    
    if(res3.alerts.length > 0) {
        element.innerHTML = "<div style='text-align:center;'><h4>" + res2.current_observation.display_location.full + "</h4> \n <h2>" + res2.current_observation.weather + "</h2> \n <h2>" + res2.current_observation.temperature_string + "</h2> \n <h5><a href=" + res2.current_observation.forecast_url + ">See more</a><h5> \n <div style='font-weight:bold;color:red;'><h2>" + res3.alerts[0].description + "</h2></div></div>"
    } else {
        element.innerHTML = "<div style='text-align:center;'><h4>" + res2.current_observation.display_location.full + "</h4> \n <h2>" + res2.current_observation.weather + "</h2> \n <h2>" + res2.current_observation.temperature_string + "</h2> \n <h5><a href=" + res2.current_observation.forecast_url + ">See more</a><h5></div>"
    }
    
    
  }
  
  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions: function setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    }
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())

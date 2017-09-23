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
    var apiKey = ''
    var city = 'detroit'
    var state = 'MI'
    var url = `http://api.wunderground.com/api/${apiKey}/conditions/q/${state}/${city}.json`
    
    element.setAttribute('app', 'example')
    if(nagivator.geolocation) {
        element.innerHTML = navigator.geolocation.getCurrentPosition().coords.latitude
    } 
    
    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText)
   
    element.innerHTML = 
    "<div style='text-align:center;'><h4>" + response.current_observation.display_location.full + "</h4> \n <h2>" + response.current_observation.weather + "</h2> \n <h2>" + response.current_observation.temperature_string + "</h2></div>"*/
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

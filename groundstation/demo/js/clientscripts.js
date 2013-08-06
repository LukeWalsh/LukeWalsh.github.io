var map; //global variable for the google map
var bifflat = 40; //!!! this is a test variable to show google maps functionality
var bifflon = -80; //!!! this is a test variable to show google maps functionality



// This function runs only once when the page loads
$(document).ready(function() { 
	// Check if the screen is too small to affix a sidebar
	if (window.innerWidth < 940) {
		$("#nav-list").removeAttr("data-spy");
	}
	plotGoogleMapOnPageLoad(); //this loads the initial google map
});



// This function must be called after making any changes to the DOM,
// it makes sure that the navbar is pinned to the side
function updateNavbar() {
	$('[data-spy="affix"]').each(function() {
		$(this).affix('refresh');
	});
}


// This function updates the display with telemetry data passed in from the
// php script.
self.setInterval(updateDisplay, 500);	// Run the update every half second

//This function runs every .5 seconds. Put anything that you want updated 
//continually in here
function updateDisplay()
{

	//The following lines are test code for the map
  addMarker(bifflat, bifflon);
  map.panTo(new google.maps.LatLng(bifflat, bifflon));
  bifflat = bifflat + .05;
  bifflon = bifflon + .05;
  //end test code
  

	if (window.XMLHttpRequest) 
	{ // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else
	{ // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		
		
			// The elements will come in joined as a large string formatted like
			// SP_1=3.34&SP_2=4.54&SP_3=5.43 etc.
			var elements = xmlhttp.responseText.split("&");
			for (var i=0; i < elements.length; i++) {
				var pair = elements[i].split("=");
				var key = pair[0];
				var value = pair[1];
				
				if (document.getElementById(key)) {
					document.getElementById(key).innerHTML=value;
				}
			}
			updateNavbar();	// Need to call this after making changes to the DOM
			
			latitude = $( "#GPS_LAT" ).html;
			longitude = $( "#GPS_LON" ).html;
			
			addMarker(latitude, longitude);
			map.panTo(new google.maps.LatLng(latitude, longitude));
			
		}
	}
	
	xmlhttp.open("GET","php/update-telemetry.php?q=",true);
	xmlhttp.send();
}

// This function sends a command to the php script that handles sending
// commands to the satellite
function sendCommand(e)
{
	e.preventDefault();	// Prevent page refresh
	var str = $("#commandInput").val().toUpperCase();	// Grab the text
	if (str[str.length - 1] != ';') {
		str += ';';	// Make sure the command ends in a semicolon
		$("#semicolonAlert").removeClass("hide");	// Show the alert message
	}
	$("#commandInput").val("");	// Reset the command bar
	if (window.XMLHttpRequest) 
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var txt = xmlhttp.responseText;
		}
	}
	
	xmlhttp.open("GET","php/sendCommand.php?q="+str,true);
	xmlhttp.send();
}

/////// No longer attaching this to the command input since it conflicted
/////// with the typeahead feature.
// Set the command text box to also trigger command sending on enter press
$.fn.pressEnter = function(fn) {  
    return this.each(function() {  
        $(this).bind('enterPress', fn);
        $(this).keyup(function(e){
            if(e.keyCode == 13)
            {
              $(this).trigger("enterPress");
            }
        })
    });  
 }; 
// $('#commandInput').pressEnter(sendCommand);

// Array of commands used in the autosuggest feature
var commands = ["ENABLE_MISCHIEF;",
"ENABLE_EPS_POWER_TELEMETRY;",
"DISABLE_EPS_POWER_TELEMETRY;",
"ENABLE_THERMO_TELEMETRY;",
"DISABLE_THERMO_TELEMETRY;",
"ENABLE_BATTERY_TELEMETRY;",
"DISABLE_BATTERY_TELEMETRY;",
"TURN_ON_PAYLOAD_RADIO;",
"PAYLOAD_RADIO_PWR=ON;",
"TURN_OFF_PAYLOAD_RADIO;",
"PAYLOAD_RADIO_PWR=OFF;",
"TURN_ON_PAYLOAD_THRUSTER;",
"TURN_OFF_PAYLOAD_THRUSTER;",
"ENABLE_SD_TELEMETRY;",
"DISABLE_SD_TELEMETRY;",
"ENABLE_GPS_TELEMETRY;",
"DISABLE_GPS_TELEMETRY;",
"OVER_RIDE_HEATER_ON;",
"OVER_RIDE_HEATER_OFF;",
"ENABLE_HEATER_AUTO_CONTROL;",
"DISABLE_HEATER_AUTO_CONTROL;",
"ENABLE_AUTO_POWER_SAVE_MODE;",
"DISABLE_AUTO_POWER_SAVE_MODE;",
"ENABLE_SUBSYSTEM_STATUS;",
"DISABLE_SUBSYSTEM_STATUS;",
"TURN_ON_STAR_TRACKER;",
"TURN_OFF_STAR_TRACKER;",
"ENABLE_SUN_SENSOR_TELEMETRY;",
"DISABLE_SUN_SENSOR_TELEMETRY;",
"DISABLE_MISCHIEF;"];

$('#commandInput').typeahead({source: commands});	// Attach autocomplete

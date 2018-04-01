/* BEGIN JAVASCRIPT*/
$(document).ready(function(){

var cities = [""];


$("#add-city").on("click", function (){
    // $("#map").reset();
    // $("#weather-view").reset();
    event.preventDefault();
var input = $("#city-input").val();
console.log(input);
console.log(cities);
cities.push(input);


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input
 + "&units=imperial&APPID=1faeb28f5befbdab79657bc5ee510ef3";

$.ajax ({
    url: queryURL,
    method: "GET"
})
.then(function(response){
var cityName = $("<h1>").text(response.name);
$("#city-name").html(cityName);
var weatherMain = $("<p>").text(response.main.temp + " Degrees Farenheight");
$("#degrees").html(weatherMain);
var weatherClouds = $("<p>").text(response.clouds.all + "% Cloud Coverage");
$("#clouds").html(weatherClouds);
var latitude = $("<p>").text("Latitude: " + response.coord.lat);
$("#latitude").html(latitude);
var longitude = $("<p>").text("Longitude: " + response.coord.lon);
$("#longitude").html(longitude);
})


var mapsEmbed = $("<iframe>");
mapsEmbed.attr("src", "https://www.google.com/maps/embed/v1/search?key=AIzaSyCF_5x7AkAOH8T7ijrquPSF5Lo3dullSiA&q=" + input);
mapsEmbed.attr("frameborder", "0");
mapsEmbed.attr("style", "border:0");
mapsEmbed.attr("width", "650");
mapsEmbed.attr("height", "400");

$("#map").html(mapsEmbed);
})




})
/* END JAVASCRIPT*/
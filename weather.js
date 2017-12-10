var type;
var fc;

$(document).ready(function(){
  getInfo();
  //document.getElementById("btnC").innerHTML = " Get Celsius";
  type = "Imperial"
  fc = "F"
  
  });

function getInfo(){


//Call ininfo to get town
  $.getJSON("https://ipinfo.io/json", function(data) {
 
 //call Open Weather to get temp and icon code  

    var city = data.city; 
  
  
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" +type+"&appid=8a874af5a7e56ffad7280ba108e941ef",function(result){  
  
   var con = result.weather[0].icon;
   $("#city").html(city); 
   $("#icon").html("<img id = 'icon' src ='https://res.cloudinary.com/tmurphy/image/upload/v1478591405/" + con +".jpg'/>");
  
   $("#temp").html(result.main.temp + "&#176;" + fc);     

    });
  });
 
}

 //$("#btnWeather").on("click", function(){  
function getTempChange(clicked){

  //alert(document.getElementById("btnC").innerHTML);
  if (document.getElementById("btnC").innerHTML == "Get Celsius" ){
    document.getElementById("btnC").innerHTML = " Get Fahrenheit";
    type = "metric";
    fc = "C";
  }else {
      document.getElementById("btnC").innerHTML="Get Celsius";
      type="imperial";
    fc = "F";
    }
      

  
getInfo();
}
function convert(){
    var inputCelsius = document.getElementById("inputCelsius").value;
    var fahrenheit = ((inputCelsius * 1.8) +32);
    
    document.getElementById("output").innerHTML = "Your temperature " + inputCelsius + "\xB0 C" + " is " + fahrenheit + "\xB0 F.";
}
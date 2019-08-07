function fahrenheitCelsius()
 { 
var fsc = parseFloat(document.getElementById('fac').value); 
var cfc = (fsc-32) / 1.8;
document.getElementById('resultado').value = cfc;
}

function celsiusFahrenheit() 
{
 var cfc = parseFloat(document.getElementById('caf').value); 
var fsc = cfc * 1.8 + 32; 
document.getElementById('resultado').value = fsc; 
}

function kelvinFahrenheit() 
{
 var cfc = parseFloat(document.getElementById('kaf').value); 
var fsc = 1.8 * (cfc - 273.15) + 32 ; 
document.getElementById('resultado').value = fsc; 
}

function fahrenheitKelvin() 
{
 var cfc = parseFloat(document.getElementById('fak').value); 
var fsc = 5 / 9 * (cfc - 32) + 273.15 ; 
document.getElementById('resultado').value = fsc; 
}

function celsiusKelvin() 
{
 var cfc = parseFloat(document.getElementById('cak').value); 
var fsc = cfc + 273.15 ; 
document.getElementById('resultado').value = fsc; 
}

function kelvinCelsius() 
{
 var cfc = parseFloat(document.getElementById('kac').value); 
var fsc = cfc - 273.15  ; 
document.getElementById('resultado').value = fsc; 
}
 
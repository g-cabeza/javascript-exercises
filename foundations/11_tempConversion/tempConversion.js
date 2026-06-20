const convertToCelsius = function(temp) {
  celciusTemp = (temp - 32) * (5 / 9) ;
  return (parseFloat(celciusTemp.toFixed(2))) ;


};

const convertToFahrenheit = function(temp) {
  farenheitTemp = ((temp * (5 / 9)) + 32) ;
  return (parseFloat(farenheitTemp.toFixed(2))) ;
};



let temperature = 32 ; //enter the temperature here to calculate

console.log (convertToFahrenheit (temperature)) ;

console.log(convertToCelsius (temperature)) ;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

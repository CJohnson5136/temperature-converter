var Temperature = {
    toFahrenheit: function (celsius) {
        return celsius * 9 / 5 + 32;
    },
    toCelsius: function (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
};

var tempToday = 82;

var tempCelsius = Math.round(Temperature.toCelsius(tempToday));

var message = "Today’s temperature is " + tempToday +  " °F, which is " + 
    tempCelsius +  " °C.";

console.log(message);
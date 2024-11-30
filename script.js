// Conversion formulas
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
document.getElementById("convertButton").addEventListener("click", function() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    
    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return;
    }

    let result;

    if (fromUnit === toUnit) {
        result = value;
    } else {
        if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
            result = celsiusToFahrenheit(value);
        } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
            result = fahrenheitToCelsius(value);
        } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
            result = celsiusToKelvin(value);
        } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
            result = kelvinToCelsius(value);
        } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
            result = fahrenheitToKelvin(value);
        } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
            result = kelvinToFahrenheit(value);
        }
    }
    
    document.getElementById("output").textContent = `Converted Value: ${result.toFixed(2)} ${toUnit}`;
});

function convertTemperature() {
  let temperature = document.getElementById("temperature").value;
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let result;

  if (fromUnit == "Celsius" && toUnit == "Fahrenheit") {
    result = (temperature * 9/5) + 32;
  } else if (fromUnit == "Fahrenheit" && toUnit == "Celsius") {
    result = (temperature - 32) * 5/9;
  } else {
    result = temperature;
  }

  document.getElementById("result").innerHTML = result + " " + toUnit;
}

<input type="text" id="temperature">
<select id="fromUnit">
  <option value="Celsius">Celsius</option>
  <option value="Fahrenheit">Fahrenheit</option>
</select>
<select id="toUnit">
  <option value="Fahrenheit">Fahrenheit</option>
  <option value="Celsius">Celsius</option>
</select>
<button onclick="convertTemperature()">Convert</button>
<div id="result"></div>

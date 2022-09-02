const btnClick = document.querySelector("#btn-click");
const inputVal = document.querySelector("#textValue");
const meterEl = document.querySelector("#meter-el");
const literEl = document.querySelector("#liter-el");
const kiloEl = document.querySelector("#kilo-el");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meter = 0;
let liter = 0;
let kilogram = 0;

let feet = 0;
let gallons = 0;
let pounds = 0;

let meterAns = "";
let literAns = "";
let kiloAns = "";

btnClick.addEventListener("click", function () {
  feet = inputVal.value * 3.281;
  gallons = inputVal.value * 0.264;
  pounds = inputVal.value * 2.204;
  meter = inputVal.value / 3.281;
  liter = inputVal.value / 0.264;
  kilogram = inputVal.value / 2.204;

  meterAns = `
        ${inputVal.value} meters = ${feet.toFixed(3)} feet| ${
    inputVal.value
  } feet = ${meter.toFixed(3)} meters
    `;
  literAns = `
        ${inputVal.value} liters = ${gallons.toFixed(3)} gallons| ${
    inputVal.value
  } gallons = ${liter.toFixed(3)} liters
    `;
  kiloAns = `
         ${inputVal.value} kilos = ${pounds.toFixed(3)} pounds| ${
    inputVal.value
  } pounds = ${kilogram.toFixed(3)} kilos
    `;
  meterEl.textContent = meterAns;
  literEl.textContent = literAns;
  kiloEl.textContent = kiloAns;
  console.log("clicked");
});

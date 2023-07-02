/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const coverBtn = document.getElementById("btn")
const input = document.getElementById("input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

coverBtn.addEventListener("click", function() {
    const value = input.value
    const meterToFeet = (value * 3.281).toFixed(3)
    const feetToMeters = (value / 3.281).toFixed(3)
    const litterToGallon = (value * 0.264).toFixed(3)
    const gallonToLitter = (value / 0.264).toFixed(3)
    const kilogramToPound = (value * 2.204).toFixed(3)
    const poundToKilogram = (value / 2.204).toFixed(3)
    length.innerHTML += `<p>${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeters} meters</p>`
    volume.innerHTML += `<p>${value} litters = ${litterToGallon} gallons | ${value} gallons = ${gallonToLitter} litters</p>`
    mass.innerHTML += `<p>${value} kilograms = ${kilogramToPound} pounds | ${value} pounds = ${poundToKilogram} kilograms</p>`
})
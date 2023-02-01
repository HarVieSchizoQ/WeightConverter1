let kilo = document.querySelector("#kilograms");
let btn = document.querySelector("#go-btn");
let toPounds = document.querySelector("#to-pounds");
let toOunce = document.querySelector("#to-ounce");
let toGrams = document.querySelector("#to-grams");
let pounds = 0;
let ounce = 0;
let grams = 0;

document.fontFamily = "Courier, monospace;";

btn.addEventListener("click", function(evt) {
    
    pounds = kilo.value * 35.247;
    toPounds.value = "Pounds:" + pounds;
    console.log(toPounds);

    ounce = kilo.value * 35.273;
    toOunce.value = "Ounce:" + ounce;
    console.log(toOunce);

    grams = kilo.value * 1000;
    toGrams.value = "Grams:" + grams;
    console.log(toGrams);
})


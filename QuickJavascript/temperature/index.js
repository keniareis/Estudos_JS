const textBox = document.getElementById("textBox");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert(){
    if(tofahrenheit.checked){
        result.textContent = Number(textBox.value) * 9/5 + 32  + "°F";
    }else if(toCelsius.checked){
        result.textContent = (Number(textBox.value) - 32) * 5/9 + "°C";
    }else{
        result.textContent = "invalid";
    }
}
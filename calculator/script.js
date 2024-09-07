const dispaly = document.getElementById('display');

function appendToDisplay (input){
    dispaly.value += input;
}

function clearDisplay(){
    dispaly.value = "";

}

function calculate(){
    try{
        dispaly.value = eval(dispaly.value);
    }catch(e){
        dispaly.value = "Error"; 
    }
}
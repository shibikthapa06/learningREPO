const display = document.getElementById("display");

function appendValue(String){
    display.value+= String;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{display.value = eval(display.value);
    }
    catch(error){
        display.value ="Error";
    }
    
}
const input = document.getElementById("temperature");
const from  = document.getElementById("from");
const to  = document.getElementById("to");
let result = document.getElementById("result");


function calculate(){
    const inp = Number(input.value);
    const fromS = from.value;
    const toS = to.value;

    if(fromS === 'celsius'){
        if(toS === 'celsius'){
            result.value = inp;
        }
        else if(toS ==='Fahrenheit'){
            result.value =  inp* 9/5 + 32;
        }
        else if(toS ==='Kelvin'){
            result.value = inp + 273;
        }
        
    }
    else if(fromS === 'Fahrenheit'){
        if(toS === 'celsius'){
            result.value = (inp -32)* 5/9;
        }
        else if(toS ==='Fahrenheit'){
            result.value =  inp;
        }
        else if(toS ==='Kelvin'){
            result.value = (inp - 32)/1.8 + 273;
        }
       
    }
    else if(fromS === 'Kelvin'){
        if(toS === 'celsius'){
            result.value = inp - 273;
        }
        else if(toS ==='Fahrenheit'){
            result.value =  (inp-273) * 1.8 + 32;
        }
        else if(toS ==='Kelvin'){
            result.value = inp;
        }
        
    }
}
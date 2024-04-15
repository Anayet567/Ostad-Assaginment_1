
    var num_1 = document.getElementById("num_1").value;
    var num_2 = document.getElementById("num_2").value;
    var operator = document.getElementById("operator").value;


function calculate(){  
    var num_1 = document.getElementById("num_1").value;
    var num_2 = document.getElementById("num_2").value;
    var operator = document.getElementById("operator").value;

    if((num_1 == "") || (num_2 == "")){
        document.getElementById("result").innerHTML="Please fill a Value";
        return false;
    }
    
   if(isNaN(num_1) || (isNaN(num_2))){
        document.getElementById("result").innerHTML="Please Input only Numbers;";
        return false;
    }
    if(operator === '+'){
        var num_1 = parseFloat(document.getElementById("num_1").value);
        var num_2 = parseFloat(document.getElementById("num_2").value);
        var num = num_1 + num_2; 
        document.getElementById("result").innerHTML= "Total Addition= " + num;
        return false;
    }
    if(operator === '-'){
        var num_1 = parseFloat(document.getElementById("num_1").value);
        var num_2 = parseFloat(document.getElementById("num_2").value);
        var num = num_1 - num_2; 
        document.getElementById("result").innerHTML= "Total Substruction = " + num;
        return false;
    }
    if(operator === '*'){
        var num_1 = parseFloat(document.getElementById("num_1").value);
        var num_2 = parseFloat(document.getElementById("num_2").value);
        var num = num_1 * num_2; 
        document.getElementById("result").innerHTML= "Total Multiplication= " + num;
        return false;
    }
    if(operator === '/'){
        var num_1 = parseFloat(document.getElementById("num_1").value);
        var num_2 = parseFloat(document.getElementById("num_2").value);
        var num = num_1 / num_2; 
        document.getElementById("result").innerHTML= "Total Divition = " + num;
        return false;
    }
    if(operator !== ""){
        document.getElementById("result").innerHTML="Please Select a Oparetor ;" ;
        return false;
    }

}

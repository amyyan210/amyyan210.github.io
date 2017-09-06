// (function ()

"use strict";

// Assigning variable names to buttons
var leftOperand = document.getElementById("left-operand");
var rightOperand = document.getElementById("right-operand");
var operatorVar = document.getElementById("operatorId");

var btnClear = document.getElementById("btn-clear");
var btnEqual = document.getElementById("btn-equal");
var btnPercent = document.getElementById("btn-percent");
var btnSqrt = document.getElementById("btn-sqrt");
var btnSqrd = document.getElementById("btn-squared");

var numBtn = document.getElementsByClassName("number");
var operBtn = document.getElementsByClassName("operatorClass");
var specialBtn = document.getElementsByClassName("special");

// Appending numbers to leftOperand
var leftInput = function(btn){
    leftOperand.value += btn.value;
}


var middleInput = function(){
    operatorVar.value = this.value;
}

// Appending numbers to rightOperand
var rightInput = function (btn){
    rightOperand.value += btn.value;
}

var path = function () {
    if (operatorVar.value === "") {
        leftInput (this);
    } else if (leftOperand.value !== "" && operatorVar.value !== "") {
        rightInput (this);
    }
}

// Functionality for the clear button
var clear = function () {
    rightOperand.value = "";
    leftOperand.value = "";
    operatorVar.value = "";
}
btnClear.addEventListener("click", clear, false);



// Functionality for the operator buttons
for (var i = 0; i < operBtn.length; i++) {
    operBtn[i].addEventListener("click", middleInput, false);
}

// Functionality for the number buttons
for (var i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", path, false);
}


// Functionality for the equal button

var result = function () {
    switch (operatorVar.value) {
        case "+":
            result = (parseFloat(leftOperand.value) + parseFloat(rightOperand.value));
            break;
        case "-":
            result = (parseFloat(leftOperand.value) - parseFloat(rightOperand.value));
            break;
        case "X":
            result = parseFloat(leftOperand.value) * parseFloat(rightOperand.value);
            break;
        case "/":
            result = parseFloat(leftOperand.value) / parseFloat(rightOperand.value);
            break;
    }
    clear();
    leftOperand.value = result;
}

btnEqual.addEventListener("click", result, false);

// Functionality for percent button

var percentResult = function () {

    if (operatorVar.value === "") {
        leftOperand.value /= 100;
    } else if (leftOperand.value !== "" && operatorVar.value !== "") {
        rightOperand.value /= 100;
    }
}

btnPercent.addEventListener("click", percentResult, false);

// Functionality for the sqrt button

var sqrt = function () {
    if (operatorVar.value === "") {
        leftOperand.value = Math.sqrt(leftOperand.value);
    } else if (leftOperand.value !== "" && operatorVar.value !== "") {
        rightOperand.value = Math.sqrt(rightOperand.value);
    }
}

btnSqrt.addEventListener("click", sqrt, false);

// Functionality for the exponent button

var squared = function () {
    if (operatorVar.value === "") {
        leftOperand.value = Math.pow(leftOperand.value, 2);
    } else if (leftOperand.value !== "" && operatorVar.value !== "") {
        rightOperand.value = Math.pow(rightOperand.value, 2);
    }
}

btnSqrd.addEventListener("click", squared, false);

// })();


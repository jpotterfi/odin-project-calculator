let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let divide = document.getElementById("divide");
let times = document.getElementById("times");
let minus = document.getElementById("minus");
let equals = document.getElementById("equals");
let plus = document.getElementById("plus");
console.log(plus);


let outputNum = document.getElementById("outputNum");

let value = "";
let firstStoredVal = 0;
let secondStoredVal = 0;
let isFirstStoredVal = false;
let isSecondStoredVal = false;
let operation = "";
let isOperationClicked = false;
let isError = false;


zero.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "0";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
one.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "1";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
two.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "2";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
three.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "3";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
four.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "4";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
five.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "5";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
six.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "6";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
seven.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "7";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
eight.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "8";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});
nine.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (outputNum.textContent == firstStoredVal){
    value = "";
    } //resets input field if already a stored value
    value = value + "9";
    outputNum.textContent = value;
    isOperationClicked = false;
    console.log({isOperationClicked});
});

plus.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (operation == "minus") {
    minusFunction();
    } else if (operation == "times"){
    timesFunction();
    } else if (operation == "divide"){
    divideFunction();    
    } else {
    plusFunction();
    }
    operation = "plus";
    console.log(operation);
    isOperationClicked = true;
})

function plusFunction() {
    if (value == "") { //if there is no value, do nothing
        return;
    } else if (isFirstStoredVal == true && isOperationClicked == true) {
        console.log("FirstStoredVal and isOperationClicked are true")
        return;   
    } else if (isFirstStoredVal == true){ //if there is a first stored value
        secondStoredVal = parseInt(value) //make a second value with the current value
        console.log("secondStoredVal is" + secondStoredVal);

        firstStoredVal = firstStoredVal + secondStoredVal;
        console.log("We've added! Result = " + firstStoredVal);
        outputNum.textContent = firstStoredVal;
        secondStoredVal = 0;

    } else if (isFirstStoredVal == false){ //checks if there is the first stored value
        firstStoredVal = parseInt(value); //converts string into integer and stores it
        isFirstStoredVal = true; //changes boolean value to reflect a value has been stored
        console.log("firstStoredVal is" + firstStoredVal);
    }
    //outputNum.textContent = ""; //resets output field to blank
}

minus.addEventListener("click", function(){

        if (isError == true) {
        return
        }  else if (operation == "plus") {
        plusFunction();
        } else if (operation == "times"){
        timesFunction();
        } else if (operation == "divide"){
        divideFunction();
        } else {
        minusFunction();    
        }
        operation = "minus";
        console.log(operation);
        isOperationClicked = true;
})

function minusFunction() {
    if (value == "") { //if there is no value, do nothing
        return;
    } else if (isFirstStoredVal == true && isOperationClicked == true) {
        console.log("FirstStoredVal and isOperationClicked are true")
        return;   
    } else if (isFirstStoredVal == true){ //if there is a first stored value
        secondStoredVal = parseInt(value) //make a second value with the current value
        console.log("secondStoredVal is" + secondStoredVal);

        firstStoredVal = firstStoredVal - secondStoredVal;
        console.log("We've subtracted! Result = " + firstStoredVal);
        outputNum.textContent = firstStoredVal;
        secondStoredVal = 0;

    } else if (isFirstStoredVal == false){ //checks if there is the first stored value
        firstStoredVal = parseInt(value); //converts string into integer and stores it
        isFirstStoredVal = true; //changes boolean value to reflect a value has been stored
        console.log("firstStoredVal is" + firstStoredVal);
    }
    //outputNum.textContent = ""; //resets output field to blank
}

times.addEventListener("click", function(){
    if (isError == true) {
        return
    } else if (operation == "minus") {
    minusFunction();
    } else if (operation == "plus") {
    plusFunction();    
    } else if (operation == "divide") {
    divideFunction();    
    } else {
    timesFunction();    
    }
    operation = "times";
    console.log(operation);
    isOperationClicked = true;
})

function timesFunction() {
    if (value == "") { //if there is no value, do nothing
        return;
    } else if (isFirstStoredVal == true && isOperationClicked == true) {
        console.log("FirstStoredVal and isOperationClicked are true")
        return;   
    } else if (isFirstStoredVal == true){ //if there is a first stored value
        secondStoredVal = parseInt(value) //make a second value with the current value
        console.log("secondStoredVal is" + secondStoredVal);

        firstStoredVal = firstStoredVal * secondStoredVal;
        console.log("We've multiplied! Result = " + firstStoredVal);
        outputNum.textContent = firstStoredVal;
        secondStoredVal = 0;

    } else if (isFirstStoredVal == false){ //checks if there is the first stored value
        firstStoredVal = parseInt(value); //converts string into integer and stores it
        isFirstStoredVal = true; //changes boolean value to reflect a value has been stored
        console.log("firstStoredVal is" + firstStoredVal);
    }
    //outputNum.textContent = ""; //resets output field to blank
}

divide.addEventListener("click", function(){
    if (isError == true) {
        return
    }  else if (operation == "minus") {
    minusFunction();
    } else if (operation == "plus") {
    plusFunction();    
    } else if (operation == "times") {
    timesFunction();
    } else {
    divideFunction();    
    }
    operation = "divide";
    console.log(operation);
    isOperationClicked = true;
})

function divideFunction() {
    if (value == "") { //if there is no value, do nothing
        return;
    } else if (isFirstStoredVal == true && isOperationClicked == true) {
        console.log("FirstStoredVal and isOperationClicked are true")
        return;   
    } else if (isFirstStoredVal == true){ //if there is a first stored value
        secondStoredVal = parseInt(value) //make a second value with the current value
            if (secondStoredVal == 0) {
                outputNum.textContent = "error: can't divide by zero";
                isError = true;
                return
            }
        console.log("secondStoredVal is" + secondStoredVal);

        firstStoredVal = firstStoredVal / secondStoredVal;
        console.log("We've multiplied! Result = " + firstStoredVal);
        outputNum.textContent = firstStoredVal;
        secondStoredVal = 0;

    } else if (isFirstStoredVal == false){ //checks if there is the first stored value
        firstStoredVal = parseInt(value); //converts string into integer and stores it
        isFirstStoredVal = true; //changes boolean value to reflect a value has been stored
        console.log("firstStoredVal is" + firstStoredVal);
    }
    //outputNum.textContent = ""; //resets output field to blank
}
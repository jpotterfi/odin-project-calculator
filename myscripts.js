let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

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
let operationRedo = false;

one.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "1";
    outputNum.textContent = value;
});
two.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "2";
    outputNum.textContent = value;
});
three.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "3";
    outputNum.textContent = value;
});
four.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "4";
    outputNum.textContent = value;
});
five.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "5";
    outputNum.textContent = value;
});
six.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "6";
    outputNum.textContent = value;
});
seven.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "7";
    outputNum.textContent = value;
});
eight.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "8";
    outputNum.textContent = value;
});
nine.addEventListener("click", function(){
    if (outputNum.textContent == firstStoredVal){
        value = "";
    } //resets input field if already a stored value
    value = value + "9";
    outputNum.textContent = value;
});

plus.addEventListener("click", function(){
   
    if (operation == "minus") {
    minusFunction();
    } else {
    plusFunction();
    }
    operation = "plus";
    console.log(operation);
})

function plusFunction() {
    if (value == "") { //if there is no value, do nothing
        return;
    }

   // if (isFirstStoredVal == true && isSecondStoredVal == true) {
     //   if (operator)
   // }


    if (isFirstStoredVal == true){ //if there is a first stored value
        secondStoredVal = parseInt(value) //make a second value with the current value
        console.log("secondStoredVal is" + secondStoredVal);

        firstStoredVal = firstStoredVal + secondStoredVal;
        console.log("We've added! Result = " + firstStoredVal);
        outputNum.textContent = firstStoredVal;
        secondStoredVal = 0;
        

    }
    if (isFirstStoredVal == false){ //checks if there is the first stored value
        firstStoredVal = parseInt(value); //converts string into integer and stores it
        isFirstStoredVal = true; //changes boolean value to reflect a value has been stored
        console.log("firstStoredVal is" + firstStoredVal);
    }
    //outputNum.textContent = ""; //resets output field to blank
}

minus.addEventListener("click", function(){
    
    if (operation == "plus") {
        plusFunction();
        } else {
        minusFunction();
        }
        operation = "minus";
        console.log(operation);
})

function minusFunction() {
    if (value == "") { //if there is no value, do nothing
        return;
    }

    if (isFirstStoredVal == true){ //if there is a first stored value
        secondStoredVal = parseInt(value) //make a second value with the current value

        firstStoredVal = firstStoredVal - secondStoredVal;
        console.log("We've subtracted! Result = " + firstStoredVal);
        secondStoredVal = 0;
        outputNum.textContent = firstStoredVal;
        
    }
    if (isFirstStoredVal == false){ //checks if there is the first stored value
        firstStoredVal = parseInt(value); //converts string into integer and stores it
        isFirstStoredVal = true; //changes boolean value to reflect a value has been stored
        console.log("firstStoredVal is" + firstStoredVal);
        
        
    }
    //outputNum.textContent = ""; //resets output field to blank
}
"use strict"
var colorSelected = document.getElementById('colorSelected');// Event
var result = document.getElementById('result');
var textToColor = document.getElementById('textToColor');
var myForm = document.getElementById('myForm'); // event

colorSelected.addEventListener('change',updateResult);
myForm.addEventListener('submit',(event)=> changeTextColor(event));

function updateResult(){
    console.log(colorSelected);
    console.log("value is :", colorSelected.value);
    result.style.backgroundColor= colorSelected.value;
}

function changeTextColor(event){
    console.log(event);
    event.preventDefault();
    textToColor.style.color =colorSelected.value;
}
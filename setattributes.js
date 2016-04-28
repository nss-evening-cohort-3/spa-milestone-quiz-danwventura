"use strict"

//*******Border/Color Augmenter Iife********//
var CarLot = (function(originalCarLot){
  let inputField = document.getElementById("inputField")

  //*******Function to reset all borders/backgrounds********//
  originalCarLot.resetAtt = function(theDiv, carColor, allDivs){
    for (let i = 0; i < allDivs.length; i++) {
      let defaultDivs = allDivs[i]
      defaultDivs.classList.remove("selected")
    }

      originalCarLot.setAtt(theDiv, carColor);
  },
  

//*******Function to change targeted Div's border/background********//
  originalCarLot.setAtt = function(theDiv, carColor){
    
    theDiv.classList.add("selected")
    originalCarLot.clearField(theDiv);
  },
//*******Function to clear input field and place cursor in input field********//
originalCarLot.clearField = function(theDiv){

    inputField.value = "";
    inputField.focus();
    originalCarLot.carDesc(theDiv)
},
//*******Function to mirror user inputs in inputField to car description********//
  originalCarLot.carDesc = function(theDiv){
    let carDesc = theDiv.querySelector("h4");
    inputField.addEventListener("keyup", function(){
      console.log("carDesc", carDesc);
  if (theDiv.classList.contains("selected")) {
      carDesc.innerHTML = inputField.value;
      console.log("carDesc", carDesc);
    }
  })
}




return originalCarLot
})(CarLot || {});

// CarLot.activateEvents();
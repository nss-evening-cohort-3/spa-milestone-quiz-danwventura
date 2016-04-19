"use strict"

//*******Border/Color Augmenter Iife********//
var CarLot = (function(originalCarLot){
  let inputField = document.getElementById("inputField")


  originalCarLot.activateEvents = function(){
    //*******Grabs all Divs by class name********//
    let allDivs = document.getElementsByClassName("col-md-4")
    //*******Looping through all Divs********//
    for (var i = 0; i < allDivs.length; i++) {
      let theDiv = allDivs[i];
    //*******Adding event listener to apply/remove styling to targeted Div********//
      theDiv.addEventListener("click", function(){
      let carColor = theDiv.querySelector("h5").id;

    //*******Calling Reset function to reset all borders********//
      originalCarLot.resetAtt(theDiv, carColor, allDivs);
// define allDIvs above and pass to resetAtt and loop through to remove class from all divs

      })
    }
},

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
//*******Function to mirror user input to car description********//

  
  originalCarLot.clearField = function(theDiv){

    inputField.value = "";
    inputField.focus();
    originalCarLot.carDesc(theDiv)
},

  originalCarLot.carDesc = function(theDiv){
   // let carDesc = "";
       // console.log("div", theDiv);
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

CarLot.activateEvents();
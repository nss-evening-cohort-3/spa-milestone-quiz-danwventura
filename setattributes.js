"use strict"

//*******Border/Color Augmenter Iife********//
var CarLot = (function(originalCarLot){
  


  originalCarLot.activateEvents = function(){
    //*******Grabs all Divs by class name********//
    let allDivs = document.getElementsByClassName("col-md-4")
    //*******Looping through all Divs********//
    for (var i = 0; i < allDivs.length; i++) {
      let theDiv = allDivs[i];
    //*******Adding event listener to apply/remove styling to targeted Div********//
      theDiv.addEventListener("click", function(){
      let carColor = theDiv.querySelector("h5").id;
      // console.log("div", carColor);
      //*******Calling Reset function to reset all borders********//
      originalCarLot.resetAtt(theDiv, carColor);

      })
    }
},

  //*******Function to reset all borders/backgrounds********//
  originalCarLot.resetAtt = function(theDiv, carColor){
// carColor.classList.add

  },
  

//*******Function to change targeted Div's border/background********//
  function setAtt (){
    
  }


return originalCarLot
})(CarLot || {});

CarLot.activateEvents();
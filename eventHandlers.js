var CarLot = (function(originalCarLot){

  // Setting new object (function that calls events to modify cars) to CarLot
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


      })
    }
}


return originalCarLot
})(CarLot || {});



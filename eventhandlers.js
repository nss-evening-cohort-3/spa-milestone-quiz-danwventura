"use strict"
var CarLot = (function(originalCarLot){
  
  originalCarLot.populatePage = function(carArray) {
    let carContainer = document.getElementById("container")

  // Loop over the inventory and populate the page
    let outputString = "";
    for (let i = 0; i < carArray.length; i++) {
      let currentCar = carArray[i]
      // console.log("curr", currentCar );
      outputString += `<div id="eachCar${i}" class="col-md-4">${currentCar.make}`
      outputString += `${currentCar.model}`
      outputString += `${currentCar.year}`
      outputString += `${currentCar.price}`
      outputString += `${currentCar.color}`
      outputString += `${currentCar.purchase}`
      outputString += `${currentCar.description}`
      outputString += `</div>`
      // console.log("output", outputString);
      carContainer.innerHTML = outputString;
  }
// console.log("array", carArray);
  // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
}
return originalCarLot
})(CarLot || {});

// Load the inventory and send a callback function to be
// invoked after the process is complete

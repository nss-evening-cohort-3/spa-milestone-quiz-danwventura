"use strict"
//*******Establishing Augmenter*******//  
var CarLot = (function(originalCarLot){
//*******populatePage function builds DOM Strings*******//  
  
  originalCarLot.populatePage = function(carArray) {
    let carContainer = document.getElementById("container");

  //*******Loops over inventory and populates DOM*******//  
    let outputString = "";
    for (let i = 0; i < carArray.length; i++) {
      let currentCar = carArray[i]
      
  // *************Building DOM String*********** //
      outputString += `<div id="eachCar${i}" class="col-md-4" style="border: solid 4px ${currentCar.color}">`
      outputString += `<h2>${currentCar.year} ${currentCar.make} ${currentCar.model}</h2>`
      outputString += `<h6> Price: ${currentCar.price} </h6>`
      outputString += `<h5 id="${currentCar.color}"> Color: ${currentCar.color}</h5>`
      outputString += `<h6> Availability: ${currentCar.purchased}</h6>`
      outputString += `<h6> Desc: ${currentCar.description}</h6>`
      outputString += `</div>`
      carContainer.innerHTML = outputString;
  }
  
// Calling activateEvents which builds columns/rows
  CarLot.activateEvents();
}
return originalCarLot
})(CarLot || {});

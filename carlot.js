"use strict"

//*******Original iife********//
var CarLot = (function(){
  // Array to push JSON object into//
  let carArray = [];

return{
  
  loadInventory: function (populatePageCallback){
//*******Create an XHR object*******//  
    let carRequest = new XMLHttpRequest();

//*******XHR objects emit events when operation is complete*******//  
    carRequest.addEventListener("load", function(){

//*******Parsing JSON and looping looping through JS object to push each object into private array*******//  
      let newCarObj = (JSON.parse(this.responseText).cars);
        newCarObj.forEach(function(oneXHR){
        carArray.push(oneXHR);
        
    })
  //*******Adding object to be passed into callback*******//        
        populatePageCallback(carArray)
  })
//*******Telling XHR what to get/go get it *******//  
    carRequest.open("GET", "inventory.json");
    carRequest.send();

    }
  }
})();
CarLot.loadInventory(populatePage);

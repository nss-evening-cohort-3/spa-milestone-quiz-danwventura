"use strict"




//*******Original iife********//
var CarLot = (function(){
  // Array to push JSON object into//
  let carArray = [];

return{
  loadInventory: function (){

//*******Create an XHR object*******//  
    let carRequest = new XMLHttpRequest();

//*******XHR objects emit events when operation is complete*******//  
    carRequest.addEventListener("load", function(){

//*******Parsing JSON and looping looping through JS object to push each object into private array*******//  
      let newCarObj = (JSON.parse(this.responseText).cars);
        newCarObj.forEach(function(oneXHR){
        carArray.push(oneXHR);
        console.log("array", carArray);

    })
  })
//*******Telling XHR *******//  
    carRequest.open("GET", "inventory.json");
    carRequest.send();
}





}






})(CarLot);
CarLot.loadInventory();
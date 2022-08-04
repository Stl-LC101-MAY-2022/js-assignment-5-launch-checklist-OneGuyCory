// Write your JavaScript code here!

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        
        
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let launchStatus = document.getElementById('launchStatus');
        let cargoStatus = document.getElementById('cargoStatus');
        

        //use formsubmission to validate and update list
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
        event.preventDefault();
    })
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const pickedPlanet = pickPlanet(listedPlanets);
       const name = pickedPlanet.name;
       const diameter = pickedPlanet.diameter;
       const star = pickedPlanet.star;
       const distance = pickedPlanet.distance;
       const imageUrl = pickedPlanet.image;
       const moons = pickedPlanet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)

   })
   
});
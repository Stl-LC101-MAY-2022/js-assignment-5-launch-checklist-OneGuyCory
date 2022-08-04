// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
   
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
    if (testInput === ''|| testInput === null) {
        return 'Empty';
    } else if ((!isNaN(Number(testInput)))) {
        return 'Is a Number';
    } else {
        return 'Not a Number';
    };
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert('All Fields Are Required!');
    };

    if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a number') {
        alert('Invalid information. Please enter valid information for all fields!');
    }
    
   if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert('Invalid information. Please enter valid information for all fields!');
   }

   pilotStatus.innerHTML = `Pilot ${pilot} ready.`
   copilotStatus.innerHTML = `Copilot ${copilot} ready.`

   if (fuelLevel < 10000) {
    list.style.visibility ='visible';
    fuelStatus.innerHTML = 'There is not enough fuel for the journey.';
    launchStatus.innerHTML = 'Shuttle not ready for launch';
    launchStatus.style.color ='red';
   } else if(cargoLevel > 10000) {
    list.style.visibility = 'visible';
    cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off.';
    launchStatus.innerHTML = 'Shuttle not ready for launch';
    launchStatus.style.color ='red';
   } else if (fuelLevel > 10000 && cargoLevel < 10000) {
    list.style.visibility = 'visible'
    launchStatus.innerHTML = 'Shuttle is ready for launch.';
    launchStatus.style.color = 'green';
   } else if (fuelLevel == 10000 && cargoLevel == 10000) {
    list.style.visibility = 'visible';
    fuelStatus.innerHTML = 'There is not enough fuel for the journey.';
    launchStatus.innerHTML = 'Shuttle not ready for launch';
    launchStatus.style.color = 'red';
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
         return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

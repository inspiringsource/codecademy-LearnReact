let object = {
    key1: 'value1',//   \
    key2: 'value2',//    } properties
    key3: 'value3',//   /
}

let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'

}

const crewCount = spaceship.numCrew
const planetArray = spaceship.flightPath
//Bracket Notation
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  var isActive = spaceship['Active Mission']
  
  console.log(propName+isActive)


  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
spaceship.color = 'glorious gold'
spaceship.numEngines = 9
delete spaceship['Secret Mission']


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
}

alienShip.retreat()
alienShip.takeOff()
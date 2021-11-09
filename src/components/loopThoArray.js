//Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below


for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
}

const bobsFollowers = ['Udacity', 'John', 'Jim', 'Robert'];
const tinasFollowers = ['Udacity', 'John', 'Michel'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

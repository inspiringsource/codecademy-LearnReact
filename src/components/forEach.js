const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
//Method 1
fruits.forEach(function(fruit) {
  console.log("I want to eat a "+fruit);
})
//method 2
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));
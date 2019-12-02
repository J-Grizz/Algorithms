// Story
// A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

// All the animals are out and some of them are eating each other!

// It's a Zoo Disaster!
// Here is a list of zoo animals, and what they can eat

// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass
// Kata Task
// INPUT
// A comma-separated string representing all the things at the zoo

// TASK
// Figure out who eats whom until no more eating is possible.

// OUTPUT
// A list of strings (refer to the example below) where:

// The first element is the initial zoo (same as INPUT)
// The last element is a comma-separated string of what the zoo looks like when all the eating has finished
// All other elements (2nd to last-1) are of the form X eats Y describing what happened
// Notes
// Animals can only eat things beside them

// Animals always eat to their LEFT before eating to their RIGHT

// Always the LEFTMOST animal capable of eating will eat before any others

// Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

// Example
// Input

// "fox,bug,chicken,grass,sheep"

// Working

// 1	fox can't eat bug	
// "fox,bug,chicken,grass,sheep"
// 2	bug can't eat anything	
// "fox,bug,chicken,grass,sheep"
// 3	chicken eats bug	
// "fox,chicken,grass,sheep"
// 4	fox eats chicken	
// "fox,grass,sheep"
// 5	fox can't eat grass	
// "fox,grass,sheep"
// 6	grass can't eat anything	
// "fox,grass,sheep"
// 7	sheep eats grass	
// "fox,sheep"
// 8	fox eats sheep	
// "fox"
// Output

// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]

// Kata rating - 5kyu

// Solved - 15 May 2019

var whoEatsWho = function (zoo) {
  var animals = [{
    name: 'bear',
    food: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep']
  },
  {
    name: 'fox',
    food: ['chicken', 'sheep']
  },
  {
    name: 'lion',
    food: ['antelope', 'cow']
  },
  {
    name: 'big-fish',
    food: ['little-fish']
  },
  {
    name: 'antelope',
    food: ['grass']
  },
  {
    name: 'giraffe',
    food: ['leaves']
  },
  {
    name: 'panda',
    food: ['leaves']
  },
  {
    name: 'sheep',
    food: ['grass']
  },
  {
    name: 'chicken',
    food: ['bug']
  },
  {
    name: 'bug',
    food: ['leaves']
  },
  {
    name: 'cow',
    food: ['grass']
  }];

  var result = [zoo];
  var zooInspector = zoo.split(',');
  var x = 0;
  while (x < zooInspector.length) {
    var leftAnimal = zooInspector[x - 1];
    var rightAnimal = zooInspector[x + 1]
    animals.forEach(animal => {
      if (zooInspector[x] === animal.name) {
        if (animal.food.includes(leftAnimal)) {
          zooInspector.splice(x - 1, 1);
          result.push(animal.name + ' eats ' + leftAnimal);
          x = -1;
        } else if (animal.food.includes(rightAnimal)) {
          zooInspector.splice(x + 1, 1);
          result.push(animal.name + ' eats ' + rightAnimal);
          x = -1;
        }
      }
    });
    x++;
  }
  result.push(zooInspector.join(','));
  return result;
}

console.log(whoEatsWho("fox,bug,chicken,grass,sheep"));
// returns [ 'fox,bug,chicken,grass,sheep',
// 'chicken eats bug',
// 'fox eats chicken',
// 'sheep eats grass',
// 'fox eats sheep',
// 'fox' ]
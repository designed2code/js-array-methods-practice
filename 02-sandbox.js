/*
Here's a sample piece of Star Wars data from the Star Wars API.
*/

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

/* ############# TASKS ############## */
/*
Get the total mass of all characters
Get the total height of all characters
Get the total number of characters in all the character names
Get the total number of characters by eye color (hint. a map of eye color to count)
*/

/* Syntax for Reduce --> arr.reduce(callback(accumulator, currentValue), initialValue) */

const totalMassOfAllCharacters = characters.reduce((accumulator, character) => {
  return parseInt(character.mass) + parseInt(accumulator);
}, 0);

const totalHeightOfAllCharacters = characters.reduce(
  (accumulator, character) => {
    return parseInt(character.height) + parseInt(accumulator);
  },
  0
);

const totalNumberOfCharInNames = characters.reduce((accumulator, character) => {
  return parseInt(character.name.length) + parseInt(accumulator);
}, 0);

const totalNumberOfCharByEyeColor = characters.reduce(
  (accumulator, character) => {
    return parseInt(character.eye_color.length) + parseInt(accumulator);
  },
  0
);

console.log(totalNumberOfCharByEyeColor);

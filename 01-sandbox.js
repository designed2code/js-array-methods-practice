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

/* ############# TASKS ##############*/

/*
Get an array of all names
Get an array of all heights
Get an array of objects with just name and height properties
Get an array of all first names
*/

const names = characters.map((character) => {
  return character.name;
});

const heights = characters.map((character) => {
  return character.height;
});

const nameAndHeight = characters.map((character) => {
  return { name: character.name, height: character.height };
});

const firstNames = characters.map((character) => {
  return character.name.split(' ')[0];
});

console.table(names);
console.table(heights);
console.table(nameAndHeight);
console.table(firstNames);

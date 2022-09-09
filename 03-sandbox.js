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
Get characters with mass greater than 100
Get characters with height less than 200
Get all male characters
Get all female characters
*/

const charactersWithMassGreaterThanHundred = characters.filter(
  (character, index) => {
    return character.mass > 100;
  }
);

const charactersWithHeightLessThanTwoHundred = characters.filter(
  (character, index) => {
    return character.height < 200;
  }
);

const allMaleCharacters = characters.filter((character, index) => {
  return character.gender === 'male';
});

const allFemaleCharacters = characters.filter((character, index) => {
  return character.gender === 'female';
});

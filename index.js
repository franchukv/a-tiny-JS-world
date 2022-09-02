/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const man = {
   species: 'human',
   gender: 'male',
   name: 'Drogo',
   status: 'Khal',
   hands: 2,
   feets: 2,
   saying: 'Sheikh Ma Shieraki Anni.',
}

const woman = {
   species: 'human',
   gender: 'female',
   name: 'Daenerys',
   status: 'Daenerys of House Targaryen, First with Her Name, Breaker of Chains and Mother of Dragons',
   hands: 2,
   feets: 2,
   saying: 'Drakaris!',
   friends: `Fell in love with ${man.name}.`,
}

const dog = {
   species: 'dog',
   gender: 'male',
   name: 'Sharik',
   status: "Yard's terrier",
   hands: 0,
   feets: 4,
   saying: 'woof-woof!',
   friends: `Only ${man.name} is friends.`,
}

const cat = {
   species: 'cat',
   gender: 'female',
   name: 'Bastet',
   status: "Pharaoh's cat",
   hands: 0,
   feets: 4,
   saying: 'Meow, bow to me!',
   friends: 'No friends, only servants!'
}

const catwoman = {
   species: 'human',
   gender: 'female',
   name: 'Selina Kyle',
   status: "Superhero",
   hands: 2,
   feets: 2,
   saying: cat.saying,
   friends: `In astral connection with ${cat.name}.`,
}

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
const inhabitants = [man, woman, dog, cat, catwoman];

const objToString = (obj) => {
   const propNames = Object.getOwnPropertyNames(obj);
   let propValuesArr = [];

   for (let i = 0; i < propNames.length; i++) {
      propValuesArr.push(obj[propNames[i]]);
   }

   return propValuesArr.join('; ');
}

function greetings(arr, func) {
   for (let i = 0; i < arr.length; i++) {
      print(func(arr[i]))
   }
}

greetings(inhabitants, objToString)

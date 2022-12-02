// Assign the string value Sammy to the username identifier
var username = "dupree719";

// Check if variable is equal to value
if (username === "dupree719") {
    console.log(true);
  }

  // Assignment of various variables
var name = "Jimmy";
var sparta = 300;
var kingdoms = [ "reptiles", "fish", "mammals" ];
var poem = { roses: "red", violets: "blue" }; 
var success = true;
var nothing = null;

// Send spartans variable to the console
console.log(sparta);

// Assign value to password variable
var password = "hunter2";

// Reassign variable value with a new value
password = "hunter3";

console.log(password);

// Initialize a global variable
var creature = "wolf";

// Initialize a global variable
var species = "human";
 
function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);

var fullMoon = true;

// // Initialize a global variable
// let species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}


// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100;

// Initialize x in the global scope
var x = 100;


// Initialize x in the global scope

function hoist() {
  // Initialize x in the function scope
  if (3 === 4) {
    let x = false;
  }
  console.log(x);
}

hoist();

// Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;

console.log(x);

// Assign value to const
const SPECIES = "human"; 

console.log(SPECIES);

// Create a CAR object with two properties
const CAR = {
	color: "blue",
	price: 15000
}

// Modify a property of CAR
CAR.price = 20000;

console.log(CAR);

// Initialize object literal with curly brackets
const objectLiteral = {};
// Initialize object constructor with new Object
const objectConstructor = new Object();
// Initialize gimli object

//==============================
const mikaila = {
	name: "Mikaila",
	race: "dwarf",
	weapon: "axe",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};

console.log(mikaila);


//==============================

console.log(mikaila.weapon);

console.log(mikaila.greet());

// Add new age property to gimli
mikaila.age = 139;

console.log(mikaila.age);

// Add new fight method to gimli
mikaila.fight = function() {
	return `Gimli attacks with an ${this.weapon}.`;
}

console.log(mikaila.fight());

// Update weapon from axe to battle axe
mikaila.weapon = "battle axe";

console.log(mikaila);

// Remove weapon from gimli
delete mikaila.weapon;

console.log(mikaila);

// Iterate through properties of gimli

const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "battle axe",
};

// Iterate through properties of gimli
for (let key in gimli) {
    console.log(gimli[key]);
  }

  // Get keys and values of gimli properties
for (let key in gimli) {
    console.log(key.toUpperCase() + ':', gimli[key]);
  }

  // Initialize method on gimli object to return property keys
Object.keys(gimli);


// Assign the five oceans
let oceans = [
	"Pacific",
	"Atlantic",
	"Indian",
	"Arctic",
	"Antarctic",
];
// Print out the first item of the oceans array
console.log(oceans[0]);

// Initialize array of shark species with array literal

// Initialize array of shark species with array constructor
let cars = new Array(
	"Durango",
	"BMW",
	"GWagon",
);

console.log(cars);

// Initialize array of mixed datatypes
let mixedData = [
	"String",
	null,
	7,
	[
		"another",
		"array",
	],
];

let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];

console.log(seaCreatures.length);

console.log(seaCreatures.indexOf("seahorse")); //3
console.log(seaCreatures.indexOf("ZEBRA")); //-1

console.log(seaCreatures[1]);

const lastIndex = seaCreatures.length - 1;

console.log(seaCreatures[lastIndex]);

let nestedArray = [
	[
		"salmon",
		"halibut",
	],
	[
		"coral",
		"reef",
	]
];

console.log(nestedArray[1][0]);

seaCreatures[5] = "whale";

console.log(seaCreatures);

seaCreatures[7] = "pufferfish";

console.log(seaCreatures);

// Append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");

console.log(seaCreatures);

// Append dragonfish to the beginning of the seaCreatures array
seaCreatures.unshift("dragonfish");

console.log(seaCreatures);

seaCreatures.splice(7, 1);

console.log(seaCreatures);

let firstArray = seaCreatures.slice(0, 7);
let secondArray = seaCreatures.slice(8, 10); 

firstArray.concat(secondArray);

console.log(seaCreatures);

// Remove the last item from the seaCreatures array
seaCreatures.pop();

console.log(seaCreatures);

// Remove the first item from the seaCreatures array
seaCreatures.shift();

console.log(seaCreatures);

// Assign manatee to the first item in the seaCreatures array
seaCreatures[0] = "manatee";

console.log(seaCreatures);

// Replace seahorse with sea lion using splice method
seaCreatures.splice(3, 1, "sea lion");
console.log(seaCreatures);

// Create an array of shellfish species
let shellfish = [
	"oyster",
	"shrimp",
	"clam",
	"mussel",
];

// Loop through the length of the array
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i]);
}

// Create an array of aquatic mammals
let mammals = [
	"dolphin",
	"whale",
	"manatee",
];

// Loop through each mammal
for (let mammal of mammals) {
	console.log(mammal);
}



// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
	// Print each iteration to the console
	console.log(i);
}

// Set initial variable to 0
let i = 0;

// Manually increment variable by 1 four times
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
	console.log(i);
}


// Declare variable outside the loop
let g = 0;

// Omit initialization and condition
for (; ; g++) {
	if (g > 3) {
		break;
	}
	console.log(g);
}

for (; ;) {
	if (g > 3) {
		break;
	}
	console.log(g);
	i++;
}

// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
	// Update array with variable value
	arrayExample.push(i);
	console.log(arrayExample);
}

let fish = [ "flounder", "salmon", "pike" ];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < fish.length; i++) {
	// Print each item to the console
	console.log(fish[i]);
}

const shark = {
	species: "great white",
	color: "white",
	numberOfTeeth: Infinity
}

// Print property names of object
for (attribute in shark) {
	console.log(attribute);
}

// Print property values of object
for (attribute in shark) {
	console.log(shark[attribute]);
}

let colors = [ "grey", "red", "blue" ];

// Print out each type of shark
for (let color of colors) {
	console.log(colors);
}

for (let [index, color] of colors.entries()) {
	console.log(index, color);
}

// Assign string to a variable
let myString = "year up is the best";

// Iterate through each index in the string
for (let yearup of myString) {
	console.log(yearup);
}

function greet() {
	console.log("Hello, World!");
}
greet();

function greeting(name) {
	console.log(`Hello, ${name}!`);
}

greeting("Isaiah");

// Initialize add function
function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
console.log(add(700, 19));

// Assign add function to sum constant
const sum = function add(x, y) {
	return x + y;
}

// Invoke function to find the sum
console.log(sum(20, 5));

// Define multiply function
const multiply = (x, y) => {
	return x * y;
}

// Invoke function to find product
console.log(multiply(2, 2));

const square = x => {
	return x * x;
}

// Invoke function to find product
console.log(square(10));

// Initializing a function with a function expression
const h = function() {}

const c = class {}

console.log(Object.getPrototypeOf(h));
console.log(Object.getPrototypeOf(c));

const w = function() {}

// Initialize a constructor from a function
const constructorFromFunction = new w();

console.log(constructorFromFunction);

const p = class {}

// Initialize a constructor from a class
const constructorFromClass = new p();

console.log(constructorFromClass);


function Hero(name, level) {
	this.name = name;
	this.level = level;
}
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}


class Heroo {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	// Adding a method to the constructor
	introduction() {
		return `${this.name} says hello.`;
    }
}


const hero1 = new Hero('Varg', 1);
console.log(hero1);

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
    
}
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
console.log(hero2);

// Creating a new class from the parent
class Mager extends Heroo {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});

// // Get the length of the keys
// const length = Object.keys(employees).length;

// console.log(length);

// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);

// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

// Initialize an object
const fullName = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(fullName, details);

console.log(character);

// Initialize an object
const user = {
	username: 'saadisha',
	password: 'masoody'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

// Initialize an object
const user2 = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser2 = Object.seal(user2);

newUser2.password = '*******';
newUser2.active = true;

console.log(newUser2);


const workers = ['Ron', 'April', 'Andy', 'Leslie'];

console.log(Object.getPrototypeOf(workers));

console.log(Object.getPrototypeOf(workers) === Array.prototype);


const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }



// Destructure properties into variables
const { id: booty, title, date } = note

console.log(booty)
console.log(title)
console.log(date)


const noteWithAuthor = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
        nameFirst: 'Bob',
        nameLast: 'Evans',
    },
  }



  // Access object and nested values
const {
    author,
    author: { nameFirst, nameLast },
  } = noteWithAuthor
  
  console.log(author);

  const {length } = 'A string';

  console.log(length);


  const myDate = ['1970', '12', '01'];


// Destructure Array values into variables
const [year, , day] = myDate;

console.log(year);
console.log(day);

// Create a nested array
const nestedArray2 = [1, 2, [3, 4], 5]

// Destructure nested items
const [one, two, [three, four], five] = nestedArray2

console.log(one, two, three, four, five)

const note2 = {
    id: 1,
    title: 'My second note',
    date: '03/03/1990',
  }

  // Using forEach
Object.entries(note2).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
  })

  // Using a for loop
for (let [key, value] of Object.entries(note2)) {
    console.log(`${key}: ${value}`)
  }

  const note3 = {
    title: 'My third note',
    author: {
      firstName: 'James',
      lastName: 'Bond',
    },
    tags: ['driving', 'stalking', 'shooting'],

    
  }

  const {
    title2,
    date2 = new Date(),
    author: { firstName },
    tags: [drivingTag, shootingTag],
  } = note3
  
  console.log(date2)

  // Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools)

// Array of users
const users = [
    { id: 1, name: 'Ben' },
    { id: 2, name: 'Leslie' },
  ]

  // A new user to be added
const newUser3 = { id: 3, name: 'Ron' }


const updatedUsers = [...users, newUser3]

console.log(users)
console.log(updatedUsers)

// Create an Array
const originalArray = ['one', 'two', 'three']

// Assign Array to another variable
const numberTwoArray = originalArray

// Remove the last item of the second Array
numberTwoArray.pop()

console.log(originalArray)

// Create a set
const set = new Set()

set.add('octopus')
set.add('starfish')
set.add('whale')

// Convert Set to Array
const seaCreatures2 = [...set]

console.log(seaCreatures2)

const string = 'hello'

const stringArray = [...string]

console.log(stringArray)

// Create an Object and a copied Object with Object.assign()
const originalObject = { enabled: true, darkMode: false }
const secondObject = Object.assign({}, originalObject)
console.log(secondObject)

const user4 = {
    id: 3,
    name: 'Ron',
    organization: {
        name: 'Parks & Recreation',
        city: 'Pawnee',
      },
  }
  
  const updatedUser = {
    ...user,
    organization: {
      ...user.organization,
      position: 'Director',
    },
  }
  
  console.log(updatedUser)
  
 // Create a function to multiply three items
function multiplyAgain(a, b, c) {
    return a * b * c
  }

  console.log(multiplyAgain(1, 2, 3));

  function restTest(one, two, ...args) {
    console.log(one)
    console.log(two)
    console.log(args)
  }
  
  restTest(1, 2, 3, 4, 5, 6)

  function testArguments() {
    console.log(arguments)
  }
  
  testArguments('how', 'many', 'arguments')

  const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

  console.log(firstTool)
  console.log(rest)

  const { isLoggedIn, ...rest2 } = { id: 1, name: 'Jerry', isLoggedIn: true }

console.log(isLoggedIn)
console.log(rest2)

sum2(1, 2)

function sum2(a, b) {
  return a + b
}
console.log(sum2)



// const sums = function namedSumFunction(a, b) {
//     if (!a || !b) throw new Error('Parameters are required.')
  
//     return a + b
//   }
  
//   sums();

const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach((number) => {
        console.log(this.phrase, number)
      })
    },
  }
  printNumbers.loop()

  function myFunction() {
    this.value = 5
  }
  

  const instance = new myFunction()

console.log(instance.value)

// const myArrowFunction = () => {}


// const arrowInstance = new myArrowFunction()

// console.log(arrowInstance)

const sum5 = (a, b) => ({result: a + b})

console.log(sum5(1, 2));

// Define three example functions
function first() {
    console.log(1)
  }
  
  function second() {
    console.log(2)
  }
  
  function third() {
    console.log(3)
  }

  // Execute the functions
first()
second()
third()

// Define three example functions, but one of them contains asynchronous code
// function first() {
//     console.log(1)
//   }
  
//   function second() {
//     setTimeout(() => {
//       console.log(2)
//     }, 0)
//   }
  
//   function third() {
//     console.log(3)
//   }

//   // Execute the functions
// first()
// second()
// third()

// A function
function fn() {
    console.log('Just a function')
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
  }
  
  // Passing a function
  higherOrderFunction(fn)

// Define three functions
function first() {
    console.log(1)
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log(2)
  
      // Execute the callback function
      callback()
    }, 0)
  }
  
  function third() {
    console.log(3)
  }

  first()
second(third)



function pyramidOfDoom() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
  }

  // Example asynchronous function
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
      return callback(new Error('Whoa! Something went wrong.'))
    } else {
      return setTimeout(
        // Just adding in a random number so it seems like the contrived asynchronous function
        // returned different data
        () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
        500,
      )
    }
  }
  
  // Nested asynchronous requests
  function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest('Second', function second(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
        })
      })
    })
  }
  
  // Execute 
  callbackHell()

  // Initialize a promise
  const promise = new Promise((resolve, reject) => {
    resolve('We did it!')
  })
  console.log(promise);

  promise.then((response) => {
    console.log(response)
  })

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
  })
  
  // Log the result
  promise2.then((response2) => {
    console.log(response2)
  })

  // Chain a promise
promise2
.then((firstResponse) => {
  // Return a new value for the next then
  return firstResponse + ' And chaining!'
})
.then((secondResponse) => {
  console.log(secondResponse)
})


function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
        if (onSuccess) {
          resolve([
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Joe'},
            {id: 3, name: 'Billy'},
          ])
        } else {
          reject('Failed to fetch data!')
        }
      }, 1000)
    })
  }

  // Run the getUsers function with the false flag to trigger an error
getUsers(true)
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})

getUsers();

// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

  // Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.error(error)
})

// Create an async function
async function getUser2() {
    return {}
  }

  console.log(getUser2())

  getUser2().then((response) => console.log(response))

  // Handle fetch with async/await
async function getUser2() {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()
  
    console.log(data)
  }
  
  // Execute async function
  getUser2()

  // Handling success and errors with async/await
async function getUser2() {
    try {
      // Handle success in try
      const response = await fetch('https://api.github.com/users/octocat')
      const data = await response.json()
  
      console.log(data)
    } catch (error) {
      // Handle error in catch
      console.error(error)
    }
  }
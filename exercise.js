// Written Practice Questions: [Context] \n\n [Answer]

// Object Destructuring 1
// What does the following code return/print?
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// ANSWER
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// Object Destructuring 2
// What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// ANSWER
// console.log(discoveryYears); // {
//  yearNeptuneDiscovered: 1846,
//  yearMarsDiscovered: 1659
// }

// Object Destructuring 3
// What does the following code return/print?
// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// ANSWER
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
// getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
// getUserData({}) // error.
// ​
// Array Destructuring 1
// What does the following code return/print?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// ANSWER
// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi
// ​
// Array Destructuring 2
// What does the following code return/print?
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]

// ANSWER
// console.log(raindrops); // Raindrops on roses
// console.log(whiskers); // Whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with strings']
// ​
// Array Destructuring 3
// What does the following code return/print?
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// ANSWER
// console.log(numbers) // [10, 30, 20]

// REFACTORING

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

let obj = {
    numbers: {
      a: 1,
      b: 2
    }
};

let  {numbers : {a, b}} = obj;

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

let arr = [1, 2];

[arr[1], arr[0]] = [arr[0], arr[1]];

// RACE RESULTS
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
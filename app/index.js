import {circle, rectangle, cylinder} from './area.js'
console.log(circle(2));


//****************Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.
//SOLUTION:
console.log("solution 1:")
let array = [3,62,234,7,23,74,23,76,92];
console.log(array.filter((n) => n > 70));

//****************Q2
import{addIntoArray,getTotal,arrayOfSec,findFlexItems,mapOfTimeStrings} from './Q2';
    //a. Select all the list items on the page and convert to array.
    addIntoArray();

    //b. Filter for only the elements that contain the word 'flexbox'
    findFlexItems();

    //c. Map down to a list of time strings
    mapOfTimeStrings();

    //d. Map to an array of seconds
    arrayOfSec();

    //e. Reduce to get total using .filter and .map
    getTotal();


//*******************Q3. Create a markup template using string literal
// const song = 
// {
//  name: 'Dying to live',
//  artist: 'Tupac',
//  featuring: 'Biggie Smalls'
// };
// Result:
// "<div class="song">
//    <p>
//      Dying to live — Tupac
//      (Featuring Biggie Smalls)
//    </p>
//  </div>"
//SOLUTION
const song = 
{
  name: 'Dying to live',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
 };
 console.log("solution 3:");
 console.log(`<div class="song">
<p>
${song.name} — ${song.artist}
(Featuring ${song.featuring})
</p>
</div>
`);


//*****************Q4. Extract all keys inside address object from user object using destructuring ?

// const user = {
// firstName: 'Sahil',
// lastName: 'Dua',
// Address: {
// Line1: 'address line 1',
// Line2: 'ddress line 2',
// State: 'Delhi',
// Pin: 110085,
// Country: 'India',
// City: 'New Delhi',
// },
// phoneNo: 9999999999
// }
//SOLUTION
console.log('solution 4:');
let {Address} = user;
let key = Object.keys(Address);
console.log(key);

//*********************Q5. Filter unique array members using Set.
//SOLUTION
console.log("solution 5:")
let array1 = [1,2,2,3,4,1,5,3,5,6,7];
let set = new Set(array1);
console.log(set);


//*********************Q6. Find the possible combinations of a string and store them in a MAP? 
//SOLUTION
console.log("solution 6:")
let randomLetters = 'fenfwoifnwiefnewdefhifkdmoewjfowejweod';
let newMap = new Map();
for(let i=0;i<randomLetters.length;i++)
{
  let letter = randomLetters[i];
  if(!newMap.has(letter))
  {
    newMap.set(letter,1)
  }else
  {
    newMap.set(letter,newMap.get(letter) + 1);
  }
}
console.log(newMap)


//********************Q7. Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.
//SOLUTION
console.log("solution 7:")
class Animal
{
  constructor(name,height)
  {
  this.name = name;
  this.height = height;
  }
  hello()
  {
  console.log(`i am ${this.name} from lion kingdom`); 
  }
} 
  let king = new Animal("senior",10);
  king.hello();
  
  class Lion extends Animal
  {
    constructor(name,height,color)
    {
    super(name,height);
    this.color = color;
    }
    hello()
    {
    console.log(`i am ${this.name} and my color is ${this.color}`);
    }
  }
  let kid = new Lion("junior",7,"golden");
  kid.hello();
  
  class Cub extends Lion
  {
    constructor(name,height,color,weight)
    {
    super(name,height,color);
    this.weight = weight;
    }
    hello()
    {
    console.log(`i am ${this.name} , color is ${this.color} and weight is ${this.weight}`);
    }
  }
  let littleCub = new Cub("super junior",5,"golden",'5kg');
  littleCub.hello();


//**********************Q8. Write a program to implement a class having static functions
//SOLUTION
console.log("solution 8:")
class Calculator
{
  static multiply(a,b)
  {
      return a * b;
  }
  static add(a,b)
  {
      return a + b;
  }
}
let a = Calculator.multiply(5,10);
console.log(a)


//***********************Q9. Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
//SOLUTION
console.log("solution 9:")
console.log(circle(2));
console.log(rectangle(4,8));
console.log(cylinder(2,6));

//********************Q10. Import a module for filtering unique elements in an array.
//SOLUTION
console.log("solution 10:")
import filtering from './filtering.js'
let array2 = [1,1,2,3,4,5,6,1,3,2,3,4,7]
console.log(filtering(array2));

//********************Q11. Write a program to flatten a nested array to single level using arrow functions.
//SOLUTION
console.log("solution 11:")
var arrays = [["$6"], ["$12"], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"], ["$0"], ["$15"],["$3"], ["$75"], ["$5"], ["$100"], ["$7"], ["$3"], ["$75"], ["$5"]];
arrays = arrays.reduce((a, b) => a.concat(b), []);
console.log(arrays)

//*********************Q12
import {list} from "./Q12";

//**********************Q13. Implement Map and Set using Es6
//SOLUTION
console.log("solution 13:")
// set 
let setVar = new Set();
setVar.add(4);
setVar.add("agsywddw");
setVar.add({
x:200,y:8272
});
console.log(setVar);
console.log(setVar.size);
console.log(setVar.has(4));

// map
let map = new Map();
let key1 = "string";
let key2 = {a: 'key'};
let key3 = function() {};
map.set(key1,"this is string");
map.set(key2,"object key");
map.set(key3,"function mapping")
map.set("dif","div");
console.log(map);

//********************Q14
import {stack} from "./Q14";
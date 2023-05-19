console.clear();

/*
Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets and move forward to fight another 
specific given number of dragons, will he survive?

Return true if yes, false otherwise */

function hero(bullets, dragons){
    return bullets >= dragons * 2;
    }
    
    console.log(hero(10, 5), true);
    console.log(hero(7, 4), false);
    console.log(hero(4, 5), false);


console.log('------------------------');

/* 

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

 // arba:

 // arba:

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }

console.log(positiveSum([1, -2, 3, -4, 5]));  // Output: 9 (1 + 3 + 5)
console.log(positiveSum([-1, -2, -3, -4, -5]));  // Output: 0 (no positive numbers)
console.log(positiveSum([0, 1, 2, 3, 4]));  // Output: 10 (1 + 2 + 3 + 4)

console.log('------------------------');

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics: ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z 

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski". Code using function

*/

function correctPolishLetters(string) {
    const polishDiacritics = {
      'ą': 'a',
      'ć': 'c',
      'ę': 'e',
      'ł': 'l',
      'ń': 'n',
      'ó': 'o',
      'ś': 's',
      'ź': 'z',
      'ż': 'z'
    };
  
    let result = '';
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (polishDiacritics[char]) {
        result += polishDiacritics[char];
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const text = "Jędrzej Błądziński";
  const correctedText = correctPolishLetters(text);
  console.log(correctedText);


  console.log('--------------------------------');

/*

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1

*/

function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++)
      if (str.charAt(i) === letter) {
        count++;
      }
    return count;
  }

console.log(strCount("Hello", "o")); // Output: 1
console.log(strCount("Hello", "l")); // Output: 2
console.log(strCount("", "z"));      // Output: 0

console.log('-------------------------');

/*

In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.

*/

function testEven(n) {
    return n % 2 === 0;
  }
  
  // Example usage:
  console.log(testEven(4));     // Output: true
  console.log(testEven(7));     // Output: false
  console.log(testEven(-2));    // Output: true
  console.log(testEven(3.5));   // Output: false

console.log('-----------------------');

/*

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
  };

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

console.log('------------------------');

/*

At the annual family gathering, the family likes to find the oldest living family 
member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

*/

function differenceInAges(ages) {
    let youngest = Infinity;
    let oldest = 0;
    
    for (let i = 0; i < ages.length; i++) {
      if (ages[i] < youngest) {
        youngest = ages[i];
      }
      if (ages[i] > oldest) {
        oldest = ages[i];
      }
    }
  
    let difference = oldest - youngest;
    
    return [youngest, oldest, difference];
  }

console.log(differenceInAges([82, 15, 6, 38, 35])); // Output: [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32]));   // Output: [14, 99, 85]

console.log('---------------------------------');

/*

Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/

function getDrinkByProfession(param) {
    const profession = param.toLowerCase();
  
    switch (profession) {
      case "jabroni":
        return "Patron Tequila";
      case "school counselor":
        return "Anything with Alcohol";
      case "programmer":
        return "Hipster Craft Beer";
      case "bike gang member":
        return "Moonshine";
      case "politician":
        return "Your tax dollars";
      case "rapper":
        return "Cristal";
      default:
        return "Beer";
    }
  }

console.log(getDrinkByProfession("jabrOni"));               // Output: "Patron Tequila"
console.log(getDrinkByProfession("scHOOl counselor"));      // Output: "Anything with Alcohol"
console.log(getDrinkByProfession("prOgramMer"));            // Output: "Hipster Craft Beer"
console.log(getDrinkByProfession("bike ganG member"));      // Output: "Moonshine"
console.log(getDrinkByProfession("poLiTiCian"));            // Output: "Your tax dollars"
console.log(getDrinkByProfession("rapper"));                // Output: "Cristal"
console.log(getDrinkByProfession("pundit"));                // Output: "Beer"
console.log(getDrinkByProfession("Pug"));                   // Output: "Beer"

console.log('-------------------------');

/* You need to double the integer and return it. Test.assertEquals(doubleInteger(2), 4); */

function doubleInteger(i) {
    return i * 2;
  }

console.log(doubleInteger(2), 4);

console.log('-------------------------');

/*

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

*/

function tripleTrouble(one, two, three) {
    let result = '';
    
    for (let i = 0; i < one.length; i++) {
      result += one[i] + two[i] + three[i];
    }
    
    return result;
  }

console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"), "Supermans");


console.log('-----------------------------');
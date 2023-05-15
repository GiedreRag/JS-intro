console.clear();

function nthString(text, step) {
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.'
    }

    if (text.length === 0 || text.length > 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio';
    }

    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (!isFinite(step)) {
        return 'Antrasis kintamasis turi buti realus skaicius';
    }
    if (step % 1 !== 0) {
        return 'Antrasis kintamasis turi buti sveikasis skaicius.';
    }

    if (step === 0) {
        return 'Antrasis kintamasis turi būti ne nulis.';
    }
    if (step > text.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }

    let ats = '';

    // for (let i = 0; i < text.length; i++) {
    //     const symbol = text[i];
    //     if (i % step === step - 1) {
    //         ats += symbol;
    //     }
    // }

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            ats += text[i];
        }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            ats += text[i];
        }
    }

    return ats;
}

// console.log(`1562: 2 ==> "${nthString(1562, 2)}"`);
// console.log(`"": 2 ==> "${nthString('', 2)}"`);
// console.log(`"labas": "labas" ==> "${nthString('labas', 'labas')}"`);
// console.log(`"abc": 1.11 ==> "${nthString('abc', 1.11)}"`);
// console.log(`"abc": 0 ==> "${nthString('abc', 0)}"`);
// console.log(`"abc": 4 ==> "${nthString('abc', 4)}"`);
// console.log(`"abcdefghijkl": Infinity ==> "${nthString('abcdefghijkl', Infinity)}"`);
// console.log(`"abcdefghijkl": -Infinity ==> "${nthString('abcdefghijkl', -Infinity)}"`);
// console.log(`"abcdefghijkl": NaN ==> "${nthString('abcdefghijkl', NaN)}" === "cfil"`);

// console.log('-----------');

console.log(`"abcdefg": 1 ==> "${nthString('abcdefg', 1)}" === "abcdefg"`);
console.log(`"abcdefg": 2 ==> "${nthString('abcdefg', 2)}" === "bdf"`);
console.log(`"abcdefghijkl": 3 ==> "${nthString('abcdefghijkl', 3)}" === "cfil"`);
console.log(`"abcdefghijkl": 4 ==> "${nthString('abcdefghijkl', 4)}" === "dhl"`);

console.log(`"abcdefg": -2 ==> "${nthString('abcdefg', -2)}" === "fdb"`);
console.log(`"abcdefghijkl": -3 ==> "${nthString('abcdefghijkl', -3)}" === "jgda"`);
console.log(`"abcdefghijkl": -4 ==> "${nthString('abcdefghijkl', -4)}" === "iea"`);

/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

function check(a, x) {
        if (!Array.isArray(a)) {
          return false;
        }
      
        return a.includes(x);
      }
  
  console.log(check([66, 101], 66));
  console.log(check([101, 45, 75, 105, 99, 107], 107));
  console.log(check(['t', 'e', 's', 't'], 'e'));
  console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

/*
There are a certain number monkeys (n). 
Need to start counting them from 1.  Given the number (n), 
populate an array with all numbers up to and including that number, 
but excluding zero.  console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
*/

  function monkeyCount(n) {
    let count = [];
  
    for (let i = 1; i <= n; i++) {
      count.push(i);
    }
  
    return count;
  }
  
  console.log(monkeyCount(5));
  console.log(monkeyCount(3));
  console.log(monkeyCount(9));
  console.log(monkeyCount(10));
  console.log(monkeyCount(20));

  

  
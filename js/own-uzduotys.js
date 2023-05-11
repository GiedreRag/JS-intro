// KINTAMUJU INICIAVIMAS

// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

console.clear();

const num1 = 1;
console.log(num1);

const num2 = 2;
console.log(num2);

const num3 = 3;
console.log(num3);

// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

const word1 = '1';
console.log(word1);

const word2 = 'du';
console.log(word2);

const word3 = '3';
console.log(word3);

// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

const num4 = [1, 2, 3, 4, 5];
console.log(num4);

const num5 = [11, 12, 13, 14, 15]
console.log(num5);

const num6 = [21, 22, 23, 24, 25]
console.log(num6);

// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

const word4 = ['1' , '2', '3', '4', '5'];
console.log(word4);

const word5 = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(word5);

const word6 = ['obuolys', 'braske', 'apelsinas', 'bananas', 'slyva'];
console.log(word6);


// VEIKSMAI SU KINTAMAISIAIS

// 1. Susumuoti visus skaičiaus tipo kintamuosius
// a. Rezultatą išvesti į console

const suma1 = num1 + num2 + num3;
console.log(suma1);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// a. Rezultatą išvesti į console

const words3 = `${word1} ${word2} ${word3}`;
console.log(words3);

// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// a. 1-2+3-4+5
// b. Rezultatą išvesti į console

suma4 = 1 - 2 + 3 - 4 + 5;
console.log(suma4);

suma5 = 11 - 12 + 13 - 14 + 15;
console.log(suma5);

suma6 = 21 - 22 + 23 - 24 + 25;
console.log(suma6);

/*suma4 = 1 + 2 + 3 + 4 + 5;
console.log(suma4);

suma5 = 11 + 12 + 13 + 14 + 15;
console.log(suma5);

finalSuma = num1 - num2 + num3 - suma4 + suma5;
console.log(finalSuma);*/


// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

// Tikrai net taip...
console.log(word6, ', ', word5, ', ', word4, ', ', word3, ', ', word2, ', ', word1);


// KINTAMUJU PALYGINIMAS

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//  a. kuris didesnis
//  b. kuris mažesnis
//  c. ar jie lygūs
//  d. ar jie nelygūs
//  e. kuris didesnis arba lygus
//  f. kuris mažesnis arba lygus

const a = 4;
const b = 9;
let answer1 = '';

if (a > b) {
    answer1 = 'Pomidoras';
} else {
    answer1 = 'Bandykite kita karta';
}

console.log(answer1);

if (a < b) {
    answer2 = 'Pomidoras';
} else {
    answer2 = 'Bandykite kita karta';
}

console.log(answer2);

if (a === b) {
    answer3 = 'Pomidoras';
} else {
    answer3 = 'Bandykite kita karta';
}

console.log(answer3);

if (a !== b) {
    answer4 = 'Pomidoras';
} else {
    answer4 = 'Bandykite kita karta';
}

console.log(answer4);

if (a >= b) {
    answer5 = 'Pomidoras';
} else {
    answer5 = 'Bandykite kita karta';
}

console.log(answer5);

if (a <= b) {
    answer6 = 'Pomidoras';
} else {
    answer6 = 'Bandykite kita karta';
}

console.log(answer6);

// 2. Išvesti teksto tipo kintamųjų ilgius

console.log(word1.length);
console.log(word2.length);
console.log(word3.length);


// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//  a. kuris didesnis
//  b. kuris mažesnis
//  c. ar jie lygūs
//  d. ar jie nelygūs
//  e. kuris didesnis arba lygus
//  f. kuris mažesnis arba lygus

const c = word1.length;
const d = word2.length;

if (c > d) {
    answer6 = 'Pomidoras';
} else {
    answer6 = 'Bandykite kita karta';
}

// 4. Išvesti sąrašo tipo kintamųjų ilgius

console.log(word4.length);
console.log(word5.length);
console.log(word6.length);

// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//  a. kuris didesnis
//  b. kuris mažesnis
//  c. ar jie lygūs
//  d. ar jie nelygūs
//  e. kuris didesnis arba lygus
//  f. kuris mažesnis arba lygus


// CIKLO For PANAUDOJIMAS

// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a. 0 … 0
// b. 0 … 4
// c. 0 … 100
// d. 574 … 815
// e. -50 … 50
// f. -70 … 30

const range = [0, 0];
const findSum = ([l, h]) => {
    let sum = 0;
    for (let i = l; i <= h; i++) {
        sum += i;
    }
    return sum;
};

console.log(findSum(range));

const range1 = [0, 4];
const findSum1 = ([l, h]) => {
    let sum = 0;
    for (let i = l; i <= h; i++) {
        sum += i;
    }
    return sum;
};

console.log(findSum1(range1));

const range2 = [0, 100];
const findSum2 = ([l, h]) => {
    let sum = 0;
    for (let i = l; i <= h; i++) {
        sum += i;
    }
    return sum;
};

console.log(findSum2(range2));

const range3 = [574, 815];
const findSum3 = ([l, h]) => {
    let sum = 0;
    for (let i = l; i <= h; i++) {
        sum += i;
    }
    return sum;
};

console.log(findSum3(range3));

// 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a. pvz.: “abcdef” -> “fedcba”

const text = 'abcdef';

let atbulas = '';

for (let i = 0; i < text.length; i++) {
    const index = text.length - i - 1;
    const symbol = text[index];
    atbulas += symbol;
}

console.log(atbulas);

/*const text = 'Labas!';

let atbulas = '';

for (let i = 0; i < text.length; i++) {
    const index = text.length - i - 1;
    const symbol = text[index];
    atbulas += symbol;
    console.log(i, '-', symbol);
}

console.log('>>>', atbulas);*/ 

// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a. 0 - 11
// b. 8 - 31
// c. -18 - 18
// rezultatą pateikti tokiu formatu:
// i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

// const nulisVienuolika = [0, 11];


// FUNKCIJOS

// 1. Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// a. Funkcija pavadinimu “tusciaFunkcija”:
// b. nepriima jokių kintamųjų
// c. neatlieka jokios vidinės logikos
// d. gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija(true));
console.log(tusciaFunkcija("sgd"));
console.log(tusciaFunkcija(Infinity));


// 5. Funkcija pavadinimu “isrinktiRaides”:

// a. priima du kintamuosius:
//   i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
//   ii. antrasis nurodo kas kelintą raidę išrinkti
// b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
//   i. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
//   ii. priešingu atveju tęsiame darbą
// c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
//   i. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
//   ii. priešingu atveju tęsiame darbą
// d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
//   i. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
//   ii. priešingu atveju tęsiame darbą
// e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
//   i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
//   ii. priešingu atveju tęsiame darbą
// f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
//   i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
//   ii. priešingu atveju tęsiame darbą
// g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i. gražina rezultatą



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


/* Musu (klases) sprendimas:

function fillterLetters(zodis, kasKelintas) {
    if (typeof zodis !== `string`) {
    return 'ERROR pirmasis kintamasis yra netinkamo tipo.';
    }
    if (zodis.length > 100 || zodis.length === 0) {
        return 'ERROR pirmojo kintamojo reiksme yra netinkamo dydzio.';
    }
    if (typeof kasKelintas !== `number` && kasKelintas <= 0) {
        return 'ERROR antrasis kintamasis yra netinkamo tipo.';
    }
    if (kasKelintas <= 0) {
        return 'ERROR antrasis kintamasis yra netinkamo tipo.';
    }
    if (zodis.length < kasKelintas) {
        return 'ERROR antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi.';
    }

    let atsakymas= '';
    for (let i = kasKelintas - 1; i < zodis.length; i = i + kasKelintas) {
        atsakymas += zodis[i];
    }
        console.log(atsakymas);

    return `${zodis}, ${kasKelintas}`;
}

console.log('bdf', `-->`, fillterLetters ('abcdefg', 3 ) );
console.log(fillterLetters('BIT', 2));*/
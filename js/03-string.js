console.clear();
/*
STRING - tekstas
iniciavimo budai:
- dvyguba kabute (')
- vienguba kabute (")
- backtick (`)
*/

const empty = "";
const spaces = 'A                 Z';
const nickname = "Pravardenis";
const username = 'Vardenis';

console.log(nickname);
console.log(empty);
console.log(spaces);
console.log(username);

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dvyguba kabute (").
const kabute2 = 'Dvyguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dvyguba (") kabutes.
const kabute12_1 = 'Vienguba (\') ir dvyguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dvyguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);

const backslash1 = '\\';
const backslash2 = "\\\\";
console.log(backslash1);
console.log(backslash2);

const user1 = 'Petras';
const user2 = 'Maryte';
const user3 = 'Jonas';
const user4 = 'Ona';

// Sveiki, <vardas>!
const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);

const hi2 = 'Sveiki, ' + user2 + '!';
console.log(hi2);

const hi3 = 'Sveiki, ' + user3 + '!';
console.log(hi3);

const hi4 = 'Sveiki, ' + user4 + '!';
console.log(hi4);

const personName = 'Vardenis';
const personLastname = 'Pavardenis';

// Hi, I am Vardenis Pavardenis and I like you!
const personHi = 'Hi, I am ' + personName + ' ' + personLastname + ' and I like you!';
console.log(personHi);

// Vienguba (') ir dvyguba (") kabutes.
const kabute777 = 'Vienguba (' + "'" + ') ir dvyguba (' + '"' + ') kabutes.';
console.log(kabute777);

const kabute888 = "Vienguba (') ir" + ' dvyguba (") kabutes.';
console.log(kabute888);

console.log('---------------------------------');
const HTML = '<header>\r\n\
\t<img class="logo" src="#" alt="Logo">\r\n\
\t\t<nav>\r\n\
\t\t\t<a href="#">Home</a>\r\n\
\t\t\t<a href="#">Home</a>\r\n\
\t\t\t<a href="#">Home</a>\r\n\
\t\t</nav>\r\n\
</header>';
console.log(HTML);


const labas = 'Labas rytas\rtau.';
// tau.s rytas
console.log(labas);

const labas2 = 'Labas rytas\ntau.';
// Labas rytas
//            tau.
console.log(labas2);

const labas3 = 'Labas rytas\r\ntau.';
// Labas rytas
// tau.
console.log(labas3);

const backtickHTML = `<header>
    <img class="logo" src="#" alt="Logo">
    <nav>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
    </nav>
</header>`;
console.log(backtickHTML);

const vardas = 'Jonas';
const pavarde = 'Jonaitis';

// Hi, I am Vardenis Pavardenis and I like you!
const personHi2 = `Hi, I am ${vardas} ${pavarde} and I like you!`;
console.log(personHi2);
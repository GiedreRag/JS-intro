/* isskaiciuot random is dvi grupes */

console.clear();

const list = ['a', 'b', 'c', 'd', 'e'];

const final1 = [];
const final2 = [];

for (const user of list) {
    if (Math.floor(Math.random() * 2)) {
        final1.push(user);
    } else {
        final2.push(user);
    }
}

console.log(final1);
console.log(final2);
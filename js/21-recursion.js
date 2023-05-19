console.clear();
const numbers = [10, 2, [12, [14, 16]], 8, 4, [-7, 18], 6];

function findBiggest(list) {
    let biggest = -Infinity;

    for (const item of list) {
        // console.log(item);

        if (typeof item === 'number') {
            // item yra skaicius, del to lyginame
            if (item > biggest) {
                biggest = item;
            }
        } else {
            // item yra masyvas, del to ieskome jo viduje
            const innerBiggest = findBiggest(item);
            if (innerBiggest > biggest) {
                biggest = innerBiggest;
            }
        }
    }

    return biggest;
}

// const flatNumbers = numbers.flat(2);
// const maxFlat = Math.max(...flatNumbers);
// console.log(flatNumbers);
// console.log(maxFlat);

console.log('>>>', findBiggest(numbers));

const gimine = [
    {
        name: 'Petras',
        age: 99,
        children: [
            {
                name: 'Kestutis',
                age: 100,
            },
            {
                name: 'Rokas',
                age: 55,
            },
        ],
    },
    {
        name: 'Maryte',
        age: 88,
        children: [
            {
                name: 'Kestutis',
                age: 77,
                children: [
                    {
                        name: 'Chuck',
                        age: 88,
                        children: [
                            {
                                name: 'Alfa',
                                age: 105,
                            },
                            {
                                name: 'Suzi',
                                age: 106,
                            },
                        ],
                    },
                    {
                        name: 'Jonas',
                        age: 66,
                    },
                ]
            },
            {
                name: 'Rokas',
                age: 60,
            },
        ],
    },
    {
        name: 'Jonas',
        age: 66,
    },
];

function livedLongest(list) {
    let biggestAge = -Infinity;

    for (const person of list) {
        if (person.age > biggestAge) {
            biggestAge = person.age;
        }

        if (person.children) {
            const oldestChildAge = livedLongest(person.children);
            if (oldestChildAge > biggestAge) {
                biggestAge = oldestChildAge;
            }
        }
    }

    return biggestAge;
}

console.log('>>>', livedLongest(gimine));
console.clear();

function biggest(list) {

    // tikriname tipa - turi but array

    if (!Array.isArray(list)) {

    // jeigu (if) ne array - return error

        return 'ERROR: duok array';
    }

    // turiu array 
    // jeigu (if) tuscias - return error

    if (!list.length) { // ilgesnis uzrasymas list.length === 0
        return 'ERROR: duok ne tuscia array'
    }

    // turiu ne tuscia array
    // sakom, jog didziausias skaicius yra -Infinity

    let biggest = -Infinity;

    // su ciklu (for) einame per array
    for (let i = 0; i < list.length; i++) {
        // - tikriname ar array narys yra realus skaicius
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            // - jei (if) ne: 
            //      - einam prie sekancio 
            continue;
        }

        // - jei (if) taip (yra skaiciaus tipas):     
        //      - lyginame su pries zinoma didziausia reiksme
        //      - jeigu nauja reiksme didesne - overwrite
        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    // jeigu (if) didziausias skaicius vis dar liko -Infinity:
    if (biggest === -Infinity) {

    // - return error - sarase nera nei vieno normalaus skaiciaus
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    }
    // graziname didziausia skaiciu
    return biggest;
}



console.log(biggest([1]), '->', 1);
console.log(biggest([1, 2, 3]), '->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);

console.log(biggest('labas'));
console.log(biggest([]));
console.log(biggest([[], 6, 'labas']));
console.log(biggest([[], NaN, -Infinity, 'labas']));
const numbers = [1, 2, 3, 4, 5];

let totalEven = numbers.reduce(function(totalEven, currentValue) {
    if (currentValue % 2 == 0) {
        return totalEven + currentValue;
    } else {
        return totalEven;
    }
}, 0);

console.log(totalEven);


let totalOdd = numbers.reduce(function(totalOdd, currentValue) {
    if (currentValue % 2 != 0) {
        return totalOdd + currentValue;
    } else {
        return totalOdd;
    }
}, 0);

console.log(totalOdd);

let totalSub = numbers.reduce(function(totalSub, currentValue, ) {
    return totalSub - currentValue;
});
console.log(totalSub);


let totalMul = numbers.reduce(function(totalMul, currentValue, ) {
    return totalMul * currentValue;
}, 1);

console.log(totalMul);

const characters = [{
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

let totalWeight = characters.reduce(function(total, person) {
    return total + parseFloat(person.mass);

}, 0);
console.log(totalWeight + "kg");

let totalHeight = characters.reduce(function(total, person) {
    return total + parseFloat(person.height);
}, 0);
console.log(totalHeight + "cm");

let max_height = characters.reduce(function(accumulator, element) {
    if (accumulator.height > element.height) return accumulator;
    else return element;
});
console.log("Name: " + max_height.name);
console.log("Mass: " + max_height.mass);
console.log("Height: " + max_height.height);
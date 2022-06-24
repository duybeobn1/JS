function compareX(x, y) {
    if (x > y) console.log(`${x} is the bigger number`)
    if (x < y) console.log(`${y} is the bigger number`)
    if (x == y) console.log(`${x} and ${y} are equal `)
}
console.log("Test 1 : ") + compareX(12, -9);
console.log("Test 2 : ") + compareX(6, 6);
console.log("Test 3 : ") + compareX(-189, -987);
console.log("Test 4 : ") + compareX(-78, 56);
console.log("Test 5 : ") + compareX(9.5, 7.9);
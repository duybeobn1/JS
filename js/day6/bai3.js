function calMoy(x, y, z) {
    return (x + y + z) / 3;
}

//test1
console.log("Test 1 : ")
const moyD1 = calMoy(96, 108, 89);
const moyK1 = calMoy(88, 91, 110);
if (moyD1 < 100 && moyK1 < 100) {
    console.log("No winning team - the average score is lower than 100")
} else {
    if (moyD1 == moyK1) console.log("No winning team - tie")
    if (moyD1 > moyK1) console.log("Dolphins wins")
    else console.log("Koalas wins")
}
//test2
console.log("Test 2 : ")
const moyD2 = calMoy(97, 112, 101);
const moyK2 = calMoy(109, 95, 123);
if (moyD2 < 100 && moyK2 < 100) {
    console.log("No winning team - the average score is lower than 100")
} else {
    if (moyD2 == moyK2) console.log("No winning team - tie")
    if (moyD2 > moyK2) console.log("Dolphins wins")
    if (moyD2 < moyK2) console.log("Koalas wins")
}
//test3
//test2
console.log("Test 3 : ")
const moyD3 = calMoy(97, 112, 101);
const moyK3 = calMoy(109, 95, 106);
if (moyD3 < 100 && moyK3 < 100) {
    console.log("No winning team - the average score is lower than 100")
} else {
    if (moyD3 == moyK3) console.log("No winning team - tie")
    if (moyD3 > moyK3) console.log("Dolphins wins")
    if (moyD3 < moyK3) console.log("Koalas wins")
}
// function logA() {
//     console.log('A')
// }

// function logB() {
//     console.log('B')
// }

// function logC() {
//     console.log('C')
// }

// function logD() {
//     console.log('D')
// }
// logD(logA(logB(logC())))

// try {
//     Number(5).toPrecision(300)
// } catch (e) {
//     console.log("There was an error")
// }

var myarray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
let index = 1;
let count = 0;

function counting(arr = []) {
    let countTemp = 0;
    if (myarray.length === 0) return false;
    for (i = 0; i < myarray.length; i++) {
        if (Number.isFinite(myarray[i])) {
            countTemp += myarray[i];
            delete(myarray[i]);
        }
    }
    if (index > 1) {
        count += countTemp * factorial(index);
        countTemp = 0;
    } else {
        count = countTemp
    }
    index++;
    myarray = myarray.flat();
    counting(myarray);
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}
counting(myarray);
console.log(count)
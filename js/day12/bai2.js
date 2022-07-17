let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]
let arrCommon = []
const set = new Set(arr1);
for (const x of arr2) {
    if (set.has(x)) {
        arrCommon.push(x);
    }
}
console.log(arrCommon)
let arr = [141, 1, 17, -7, 18, 541, 8, 7, 7];
arr.sort(function(a, b) {
    return b - a
});
let newArr = [arr[0], arr[1], arr[2]]
console.log(newArr);
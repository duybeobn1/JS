function countTimes(arr = []) {
    let cnt = [];
    for (let i = 0; i < arr.length; i++) cnt[i] = 0;
    for (let i = 0; i < arr.length; i++) {
        cnt[arr[i]]++;
    }
    for (let i = 0; i < arr.length; i++) {
        if (cnt[i] > 0) {
            console.log(`${i} has been shown ${cnt[i]} times`)
        }
    }
}
const test = [0, 1, 2, 3, 4, 1, 4, 5, 6, 3, 1, 4, 2, 5, 6, 3, 1, 2, 5];
countTimes(test);
function countSum(str = []) {
    let sum = 0;
    for (i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            sum += parseFloat(str[i]);
        }
    }
    return sum;
}
const x = [0, '1', 2, 3, 'a', '111', 'test'];
console.log(countSum(x));
function testPair(n) {
    if (n % 2 === parseInt('0') && n >= 0) {
        console.log(`${n} la so chan`)
    }
    if (n % 2 === parseInt('1') && n >= 0) {
        console.log(`${n} la so le`)
    } else {
        console.log('n khong phai so tu nhien');
    }
}
const n = -1000;
testPair(n)
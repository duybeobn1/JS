function countStr(str = "") {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'u' || str[i] == 'e' || str[i] == 'o' || str[i] == 'a' || str[i] == 'i') {
            count++;
        }
    }
    return count;
}
console.log(countStr("test"));

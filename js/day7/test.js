function textToUpperCase(text) {
    return text = text.charAt(0).toUpperCase() + text.slice(1);
}

function splitText(text = "") {
    const splitString = text.split("_");
    let newStr = "";
    for (let i = 0; i < splitString.length; i++) {
        newStr += textToUpperCase(splitString[i]);

    }
    return newStr;
}
console.log(splitText("asas_baa_caaa"));
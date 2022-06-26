person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

function displayName(obj) {
    return obj.first + " " + obj.last;
}
console.log(displayName(person));
const databases = require('./data.json');
//firstName
databases.sort(function(person1, person2) {
    let a = person1.first_name.toLowerCase();
    let b = person2.first_name.toLowerCase();
    return a === b ? 0 : a > b ? 1 : -1;
})
console.log(databases)

//salary
databases.sort(function(person1, person2) {
    return person1.salary - person2.salary;
})
console.log(databases);
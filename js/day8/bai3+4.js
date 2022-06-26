let databases = require('./data.json');
//bai3
let full_name = [];
let changeToCamel = [];

function getFullName(databases) {
    return databases.first_name + " " + databases.last_name;
}

full_name = databases.map(getFullName);
// console.log(full_name)


//bai4
function renameObjectKey(object) {
    object.firstName = object.first_name;
    object.lastName = object.last_name;
    delete object.first_name;
    delete object.last_name;
};
renameObjectKey(databases);
changeToCamel = databases.map(renameObjectKey)
console.log(changeToCamel);
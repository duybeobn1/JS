const databases = require('./data.json');

//bai1
full_name = databases.reduce(function(arr, currentPerson) {
        arr.push(currentPerson.first_name + " " + currentPerson.last_name);
        return arr;
    }, [])
    // console.log(full_name)

//bai2
sort_name_40 = databases.reduce(function(arr, currentPerson) {

        if (currentPerson.age < 40 && currentPerson.gender === "Male") {
            arr.push(currentPerson);
        }
        return arr;
    }, [])
    // console.log(sort_name_40);
    //bai4
changeToCamel = databases.reduce(function(arr, object) {
    object.firstName = object.first_name;
    object.lastName = object.last_name;
    delete object.first_name;
    delete object.last_name;
    arr.push(object);
    return arr;
}, [])
console.log(changeToCamel)
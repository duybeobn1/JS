const databases = require('./data.json');
//bai1
let full_name = [];
databases.forEach(db => {
    full_name.push(db.first_name + " " + db.last_name);
});
console.log(full_name);
//bai2
databases.forEach(db => {
    if (db.gender === 'Male' && db.age < 40) {
        console.log(db.id + " : " + db.first_name + " " + db.last_name);
    }
})
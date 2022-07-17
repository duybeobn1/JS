//address->district->province->city
const object = [{
        address: "number 1",
        district: "district 1",
        province: "province 1",
        city: "city 1",
    },
    {
        address: "number 2",
        district: "district 1",
        province: "province 3",
        city: "city 1",
    },
    {
        address: "number 1",
        district: "district 2",
        province: "province 2",
        city: "city 3",
    }
]

<<<<<<< HEAD
// console.log(object.reduce(function(arr, currentPos) {
//     arr.push(currentPos.address + "," + currentPos.district + "," + currentPos.province + "," + currentPos.city);
//     return arr;
// }, []));
for (i = 0; i < object.length; i++) {
    console.log((`${object[i].address} ${object[i].district} ${object[i].province} ${object[i].city}`));
}
=======
for (i = 0; i < object.length; i++) {
    console.log((`${object[i].address} ${object[i].district} ${object[i].province} ${object[i].city}`));
}
>>>>>>> 43e1861388877c02681b29952a0c721e9cf0bc0d

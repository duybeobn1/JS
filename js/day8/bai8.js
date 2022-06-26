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

console.log(object.reduce(function(arr, currentPos) {
    arr.push(currentPos.address + "," + currentPos.district + "," + currentPos.province + "," + currentPos.city);
    return arr;
}, []));
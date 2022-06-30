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

for (i = 0; i < object.length; i++) {
    console.log(JSON.stringify(`${object[i].address} ${object[i].district} ${object[i].province} ${object[i].city}`));
}

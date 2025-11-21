// write a js function that returns all the properties names of an Object

const animal = {
    name: "Luan",
    species: "gata",
    breed: "criollo",
    age: "10 months",
    gender: "Hembra",
    color: "carey",
}

for (let key in animal) {
    console.log(key);
}



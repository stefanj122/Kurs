function customValues(obj){
    const arr = [];

    for(let keys in obj){
        arr.push(obj[keys]);
    }
    return arr;
}

const obj = {
    Name: 'Stefan',
    Phone: '066015800',
    email: 'stefan.jeftic@gmail.com',
}
console.log(customValues(obj))
const jsonString = `{
    "firstName": "John",
    "lastName": "Doe",
    "age": 35,
    "occupation": "Driver"
    }`;

const obj2 = JSON.parse(jsonString);
console.log(customValues(obj2))
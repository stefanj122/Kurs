const persons = [
    {
        firstName: 'Homer',
        lastName: 'Simpson',
        gender: 'male',
        role: 'parent',
        age: 43,
        hobbies: ['sleeping', 'eating', 'watching tv']
    }, {
        firstName: 'Bart',
        lastName: 'Simpson',
        gender: 'male',
        role: 'child',
        age: 12,
        hobbies: ['skating', 'football', 'watching tv']
    }, {
        firstName: 'Lisa',
        lastName: 'Simpson',
        gender: 'female',
        role: 'child',
        age: 9,
        hobbies: ['reading', 'playing music', 'studying', 'swimming']
    }, {
        firstName: 'Marge',
        lastName: 'Simpson',
        gender: 'female',
        role: 'parent',
        age: 37,
        hobbies: ['cooking', 'watching tv']
    },
];

// persons.forEach((element) => {
//     if(element.role === "parent") {
//         console.log(element);
//     }
// });
const parents = persons.filter((element) =>{
    return element.role === "parent";
});
const childs = persons.filter((element) =>{
    return element.role === "child";
});
console.log(parents)
console.log(childs)

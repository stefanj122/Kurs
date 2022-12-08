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

// function findParen(arr){
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].role === "parent") {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
function findRole(arr, role){
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].role === role) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const parents = findRole(persons,"parent");
const childs = findRole(persons,"child");

console.log(`Parents are: `)
console.log(parents)
console.log("Childerns are: ")
console.log(childs)
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

// console.log(`Parents are: `)
// console.log(parents)
// console.log("Childerns are: ")
// console.log(childs)

const parentAge = parents.reduce((acc, element) => {
    // console.log(element.age)
    return acc += element.age;
}, 0);
console.log(`Total parents are are: ${parentAge}`)
let a = String.fromCharCode(72, 69, 76, 76, 79);
console.log(a)

// const childAge = childs.reduce((element,acc) => {
//     return acc += element.age;
// });
// console.log(`Total parents are are: ${childAge}`)

// function totalAge(arr) {
//     let sum = 0;
//     for(let i = 0;i < arr.length; i++) {
//         sum += arr[i].age;
//     }
//     return sum;
// }
// const parentAge = totalAge(parents)
// const childAge = totalAge(childs)
// console.log(`Total parents are are: ${parentAge}`)
// console.log(`Total parents are are: ${childAge}`)

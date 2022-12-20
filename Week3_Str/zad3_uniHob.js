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

function uniHobbies(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0;j < arr[i].hobbies.length ;j++ ){
            if(newArr.indexOf(arr[i].hobbies[j]) === -1) {
                newArr.push(arr[i].hobbies[j]);
            }
        }
    }
    return newArr;
}

const allHobbies = uniHobbies(persons);
console.log(allHobbies)
const arr = [10, 20, 60, 80];

function customSum(arr) {
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum;
}

const sum = customSum(arr);

console.log(`Suma niza je: ${sum}`);
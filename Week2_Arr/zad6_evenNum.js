const niz = [10, 5 ,3 ,12 ,55 ,74];

function evenNumbers(arr) {
    let even = 0;
    arr.forEach((a) => {
        if (a % 2 == 0) {
            even++;
        }
    })
    return even;
}

// a = evenNumbers(niz);
console.log(`Broj parnih brojeva u nizu je:${evenNumbers(niz)}`);


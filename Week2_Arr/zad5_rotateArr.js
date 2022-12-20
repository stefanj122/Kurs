const niz = [10, 5 ,3 ,12 ,56 ,74];
let niz1 = [];

function rotate(a, arr) {
    const arrNew = [];

    for( let i = arr.length - 1; i >= 0; i--){
        arrNew.push(arr[i]);
    }
    return arrNew;
}

niz1 = rotate(3, niz);
niz1.forEach((a) => {
    console.log(a);
});
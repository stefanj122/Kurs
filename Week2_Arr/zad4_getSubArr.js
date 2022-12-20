const niz = [10, 5 ,3 ,12 ,56 ,74];
let niz1 = [];

function getSubarry(a, arr) {
    const arrNew = [];
    if(a >= arr.length) {
        a = arr.length;
    }
    for( let i=0; i <= a; i++){
       
        arrNew.push(arr[i]);
       
    }
    return arrNew;
}

niz1 = getSubarry(3, niz);
niz1.forEach((a) => {
    console.log(a);
});
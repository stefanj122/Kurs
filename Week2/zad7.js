const niz = [10, 5 ,3 ,12 ,55 ,74];

function searchArray(arr,g) {
    // let b = -1;
    for( let i = 0; i < arr.length; i++) {
        if(arr[i] === g){
            return i;
            // break;
        }
    }
    return -1;
}

const guess = searchArray(niz, 55);

if( guess === -1 ) {
    console.log(`Unijeti element ne postoji u nizu.`)
}else {
    console.log(`Uneseni element postoji u nizu i nalazi se na ${guess + 1} poziciji.`)
}
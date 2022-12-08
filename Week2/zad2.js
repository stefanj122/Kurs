let niz = [10, 5 ,3 ,12 ,56 ,74];

function safeDelete(a, arr) {
    // const arrNew = [];
    delete arr[a];
    let pom = 0;

    for( let i=0; i < arr.length; i++){
        if(!arr[i]){
            arr[i] = arr[i+1];
            pom = 1;
        }else if(pom === 1) {
            arr[i] = arr[i+1];
        }
    }
    if(pom === 1) {
        arr.length = arr.length - 1;
    //  return arrNew;
    }
}

// niz = safeDelete(3, niz);
// niz = safeDelete(0,niz);

safeDelete(2,niz);
console.log(niz)
const niz = [10, 5 ,3 ,12 ,56 ,74];
function customMax(a) {
    let m = a[0];
    for(let i = 0; i < a.length; i++) {
        if(m < a[i]){
            m = a[i];
        }
    }
    return m;
}

function customMin(a) {
    let m = a[0];
    for(let i = 0; i < a.length; i++){
        // console.log(a[i]);
        if(m > a[i]){
            m = a[i];
        }
    }
    return m;
}

const maks = customMax(niz);
const minn = customMin(niz);
console.log('Maksimalan broj iz niza je:' + maks + ' minimalan broj je:' + minn)
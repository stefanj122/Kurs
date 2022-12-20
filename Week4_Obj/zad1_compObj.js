function isSameObject(obj1,obj2){
    const arrValues1 = Object.values(obj1).sort();
    const arrValues2 = Object.values(obj2).sort();
    const arrKeys1 = Object.keys(obj1).sort();
    const arrKeys2 = Object.keys(obj2).sort();

    for(let i = 0; i < arrValues1.length; i++){
        if(arrValues1[i] !== arrValues2[i]){
            return false;
        }
    }
    for(let i = 0; i < arrKeys1.length; i++){
        if(arrKeys1[i] !== arrKeys2[i]){
            return false;
        }
    }
    return true;

}
const obj = {
    'Name': 'Stefan',
    'Phone': '066015800',
    'email': 'stefan.jeftic@gmail.com',
}
const obj1 = {
    'Name': 'Stefan',
    'email': 'stefan.jeftic@gmail.com',
    'Phone': '066015800',
}
console.log(isSameObject(obj,obj1))
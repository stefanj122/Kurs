function invert(str){
    let newStr = '';
    for(let i = str.length - 1; i != -1; i--){
        newStr += str[i];
    }
    return newStr;
}

// console.log(invert('Today is a rainy day'))
function palindrom(str){
    let newStr = invert(str);
    str = str.replaceAll(' ','');
    newStr = newStr.replaceAll(' ','');
    // console.log(str)
    if(str.toLowerCase() === newStr.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

string = 'Ana voli Milovana';
console.log(invert(string))
const str = invert(string)
console.log(palindrom(string))
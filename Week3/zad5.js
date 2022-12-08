function compareCurlyBraces(input) {
    let count1 = 0;
    let count2 = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === "{") {
            count1++;
        }else if(input[i] === '}'){
            count2++;
        }
    }
    if(count1 === count2) {
        return true;
    }else {
        return false;
    }
}
console.log(compareCurlyBraces(`{{{{{{{}}}}}}}`))
console.log(compareCurlyBraces(`{{{{{{}}`))
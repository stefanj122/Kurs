function formatPrice(price, numberOfDecimals, currencySing, hasSpace = true, isCurrencyOnRight = true){
    let str = '';
    
    str += price.toFixed(numberOfDecimals);
    // let arr = str.split('.');
   
    // if(!arr[1]){
    //     arr[1] = '0';
    // }
    // if(arr[1].length < numberOfDecimals){
    //     arr[1] = arr[1].padEnd(numberOfDecimals, '0');
    // }else if(arr[1].length > numberOfDecimals){
    //     arr[1] = arr[1].substring(0, numberOfDecimals);
    // }
    // str = arr.join('.');
    
    if(isCurrencyOnRight && hasSpace){
        str += ' ' + currencySing;
    }else if(isCurrencyOnRight && !hasSpace){
        str += currencySing;
    }else if(!isCurrencyOnRight && hasSpace){
        str = str.padStart(str.length + 1,' ').padStart(str.length + 2, currencySing);
    }else if(!isCurrencyOnRight && !hasSpace){
        str = str.padStart(str.length + 1, currencySing);
    }
    return str;
}
console.log(formatPrice(100.22, 2, '$', false,true))
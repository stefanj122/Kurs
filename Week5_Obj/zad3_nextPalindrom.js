function nextPal(val) {
    /* your code here */

    let palindromNumber = val;
    let a = true;
    let nextPalindrome = 0;
    while(a){
        palindromNumber++;
        if(palindromNumber === Number(palindromNumber.toString().split('').reverse().join(''))){
            a = false;
            nextPalindrome = palindromNumber;
        }

    }

    return nextPalindrome;
    }
// console.log(nextPal(11))
function calculator(arr, operation) {
    let result;
    switch(operation){
        
        case "+":
            result = arr.reduce((acc, element) =>{
                return acc +=element;
            }, 0);
            break;
        case "-":
            result = arr.reduce((acc, element) =>{
                return acc -=element;
            }, arr[0]);
            break;
        case "*":
            result = arr.reduce((acc, element) =>{
                return acc *=element;
            }, 1);
            break;
        case "/":
            result = arr.reduce((acc, element) =>{
                return acc /=element;
            }, 1);
            break;
    }
    return result;
}

console.log(calculator([1,2,3,4],'-'))
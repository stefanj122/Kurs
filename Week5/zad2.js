function map2DArrayToObject(arr){
    const obj = {};
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr[i].length; j +=2){
    //         obj[arr[i][j]] = arr[i][j];
    //     }
        
    // }
    arr.map((el) => {
        obj[el[0]] = el[1];
    });
    return obj;
}
const userData = [
    ["firstName", "Branimir"],
    ["lastName", "Dragicevic"], 
    ["email", "branimir.itmedia@gmail.com"]
    ];

console.log(map2DArrayToObject(userData));
    
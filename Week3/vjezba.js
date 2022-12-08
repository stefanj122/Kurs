// const arr = [50, 100, 1, 2, 35, 10];
// arr.sort((a,b) => {
//     return a-b;
// });
// arr.reverse;
// arr.splice(2,1);
// console.log(arr)
// const arr = [1, 2, 3];
// const newArr = arr.map(function (element) {
//  	return element * 2;
// });

// console.log(newArr);

// const temperatures = [17, 25, 33, 19, 21, 30, 29];
// const newArr = temperatures.filter(function (element, index) {
//     console.log(index);
//  	return element >= 20;
// });

// console.log(newArr);

const arr = [1, 2, 3];
const total = arr.reduce(function (element, acc) {
 	return acc += element;
}, 10)
console.log(total)

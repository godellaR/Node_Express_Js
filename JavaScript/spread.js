//Spread Operator in JS

let a = [1, 2, 3, 4];
let b = [5, 6, 7];

let c = [...a, ...b];
//Op : [1,2,3,4,5,6,7]
//OR [...a,b] : [1,2,3,4,[5,6,7]]
console.log("c", c);

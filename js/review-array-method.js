// beginning of array practice
var arr = ['avocado', 'mango', 'nectarine'];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr.push('banana'); 
console.log(arr);

arr.unshift('peach'); 
console.log(arr);


arr.splice(2, 1, 'orange'); 
console.log(arr);

arr.shift(1); 
console.log(arr);



var arr2 = ['cheese', 'milk', 'meat'];
console.log(arr2);


var arr2 = arr.slice();  
console.log(arr2);


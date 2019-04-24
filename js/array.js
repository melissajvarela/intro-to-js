//array data type

var arr = []; //empty array
var arr2 = [1, 2]; //has 2 elements

console.log(arr2);
console.log(arr[1]); //index =1
console.log(arr2[2]); //no index = 2

var arr3 = ['hi', 'hello', 'there'];
console.log(arr3);
//displa output "there"

console.log(arr3[2]);
console.log(arr3.length);
console.log(arr3[arr3.length -1]);

arr3.push('welcome'); //inserts "welcome to the very end of arr3"
console.log(arr3);
console.log(arr3[arr3.length -1]);

arr3.unshift('greeting'); //inserts "greeting to the beginning of arr3"
console.log(arr3);

arr3.splice(2, 1, 'Melissa'); //remove 1 item at index 2 & add "melissa" in that spot
console.log(arr3);

arr3.splice(2,2, 'Melissa', 'Varela'); //remove 2 items starting at index 2, insert 'Melissa' & "varela"
console.log(arr3);

arr3.splice(2, 0, 'hola');
console.log(arr3);

var arr4 = [10, 40, 'abc', 'xyz', true]; //not recommended to do this
console.log(arr4);

arr4.pop(); //removes last item of arr4
console.log(arr4);

arr4.shift(); //removes first ifem of arr4
console.log(arr4);

var arr5 = arr4.slice();  //this is not a copy. it is exact value
console.log(arr5);
var arr6 = arr4;

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 2); //starts at index 1, captures everything before index 3
console.log(arr7);
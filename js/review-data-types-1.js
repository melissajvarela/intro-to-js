// a. create 5 integer variables
//b. create 5 string variables
// c. create 2 boolean variables
// d. create 5 array variables
// e. create 5 object variables
// f. output/display all these variables in console 

// beginning of 5 integer variables
var a = 1;
console.log(a);

var b = 2;
console.log(b);

var sum = a + b;
console.log(sum);

var diff = a - b;
console.log(diff);

var mult = a * b;
console.log(mult);

//end of 5 integer variables

//beginning of 5 string variables

var str1 = 'Good Morning';
console.log(str1);

var str2 = 'Good Afternoon, it\'s lovely outside';
console.log(str2);

var str3 = 'Good Evening, it was a hot day today!';
console.log(str3);

var str4 = 'Goodbye';
console.log(str4);

console.log(str1, str2);

//end of 5 string variables

// Beginning of 2 boolean variables

console.log(5 == '5');
console.log(10 === '5');

console.log(isNaN(23));
console.log(isNaN('4/24/2019'));

// End of 2 boolean variables

// Beginning of 5 array variables
var arr=[1];
var arr2=[2, 4];
console.log(arr2);

var arr3=['coffee', 'tea', 'water', 'punch'];
console.log(arr3[2]);

arr3.push('soda');
console.log(arr3);

arr3.splice(2, 2, 'gatorade', 'powerade');
console.log(arr3);

arr3.splice(1, 3, 'Juice', 'Espresso');
console.log(arr3);

// End of 5 array variables

// Beginning of 5 object variables

var food = {
    breakfast: 'eggs',
    lunch:  'salad',
    snack:  'chocolate',
    dinner: 'steak',
    cost:  30
};

console.log(food.snack);
console.log(food.cost);
console.log(food.breakfast,food.lunch);


// End of 5 object variables
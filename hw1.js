var food = ['okra', 'carrots', 'kale', 'spinach', 'onion',  'apples', 'bananas', 'grapes', 'oranges'];


/**
 * Using the .pop method, we can replace the variable at the end of an Array. 
 * CHECK: Functioning as intended.
 */
food.pop();
console.log(food);


/**
 * Using the .push method, we can add a variable to the end of the Array. 
 * CHECK: Functioning as intended. 
 */
food.push('strawberries');
console.log(food);

/**
 * Using the .shift method, we can remove a variable from the front of an Array. 
 * CHECK: Functioning as intended.
 */
food.shift();
console.log(food);

/**
 * Using the .unshift method, we can add a variable to the front of an Array. 
 * CHECK: Functioning as intended. 
 */
food.unshift('broccoli');
console.log(food);

/**
 * Using the .slice method, we can return the selected elements in an array, as a new array object.
 * CHECK: Functioning as intended. 
 */
var veggies = food.slice(0,5);
console.log(veggies);


/**
 * Using the .slice method, we can return the selected elements in an array, as a new array object.
 * CHECK: Functioning as intended. 
 */
var fruits = food.slice(5,9);
console.log(fruits);


/**
 * Using the .splice method, we can add or remove items to/from an array, and returns the removed item(s).
 * CHECK: Functioning as intended. 
 */
food.splice(4,1);
console.log(food);

/**
 * Using the .splice method, we can add or remove items to/from an array, and returns the removed item(s).
 * CHECK: Functioning as intended. 
 */
food.splice(2,2, 'brussells sprouts');
console.log(food);


/**
 * 
 */
var text = "Lorem, ipsum dolor sit amet consectetur adipiscing elit.";
console.log(text[5]);
console.log(text[text.length - 1]);

var lorem = text.slice(0,5);
console.log(lorem);

var chores1 = "clean, pay bills, groceries";
chores1 = chores1.split(",");

var chores2 = "learn JS, doctors office, pick up kids";
chores2 = chores2.split(",");

var allChores = chores1.concat(chores2);
console.log(allChores);




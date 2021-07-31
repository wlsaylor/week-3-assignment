//    1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

ages.push(43);

console.log(ages[0] - ages[ages.length - 1]);

console.log(ages.reduce(function(sum, value) {
    return sum + value;
}) / ages.length);
     
// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var sum = 0;
for (var i = 0; i < names.length; i++) {
    sum += names[i].length;
}
console.log(sum / names.length);

var allNames = '';
for (var i = 0; i < names.length; i++) {
    allNames = allNames + names[i] + ' ';
}
console.log(allNames);

// How do you access the last element of any array?

var array = [];
array[array.length - 1];

// How do you access the first element of any array?

array[0];

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [];
for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

console.log(nameLengths.reduce(function(sum, value) {
    return sum + value;
}) / nameLengths.length);

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordRepeat(word, n) {
    console.log(word);
    var concat = '';
    for (i=0; i<n; i++) {
        concat += word;
    }
    return concat;
}

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function makeFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numArray) {
    return numArray.reduce(function(sum, value) {
        return sum + value; 
    }) > 100;
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function findAverage(numArray) {
    return numArray.reduce(function(sum, value) {
        return sum + value;
    }) / numArray.length;
}

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isFirstArrayGreater(firstArray, secondArray) {
    var firstAverage = firstArray.reduce(function(sum, value) {
        return sum + value;
    }) / firstArray.length;
    var secondAverage = secondArray.reduce(function(sum, value) {
        return sum + value;
    }) / secondArray.length;
    return firstAverage > secondAverage;
}

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// This function helps determine whether it is time to go to bed. I created it to lay out, in a programatic format, the same logic I might use in daily life when deciding if I should stay up 

function shouldGoToBed(currentTime, bedTime, workTomorrow, homeworkDone) {
    if (workTomorrow && homeworkDone) {
        bedTime -= 1; 
    } else if (workTomorrow && !homeworkDone) {
        bedTime += 1;
    } else if (!workTomorrow && homeworkDone) {
        bedTime += 2;
    } else {
        bedTime += 3;
    }
    if (bedTime <= currentTime) {
        return "Time to go to bed!";
    } else {
        if (bedTime >= 24) {
            bedTime -= 24;
        }
        return "You should stay up until " + bedTime + ":00";
    }
}

/* eslint-disable no-unused-vars */
/* global testSum testMultiply testSumAndMultiply testSumArray testMultiplyArray testMultiplyAnyArray */
/* exported sum multiply sumAndMultiply sumArray multiplyArray multiplyAnyArray */
'use strict';

/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  var theSum = a+b;
  var arraySum = [theSum];

  arraySum[1] = 'The sum of '+a+' and '+b+' is '+theSum+'.';
  return arraySum;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  var theProduct = a*b;
  var arrayProd = [theProduct];
  arrayProd[1] = 'The product of '+a+' and '+b+' is '+theProduct+'.';
  return arrayProd;

}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
  var arraySumAndMultiply = [];
  var sumArray=sum(a,sum(b,c)[0]);
  console.log(arraySumAndMultiply[0]);
  var multArray= multiply(a,multiply(b,c)[0]);
  console.log(multiply(a,multiply(b,c)[0]));
  arraySumAndMultiply[0]=sumArray[0];
  arraySumAndMultiply[1]=multArray[0];
  arraySumAndMultiply[2]= a + ' and ' + b + ' and ' + c + ' sum to ' + arraySumAndMultiply[0] + '.';
  arraySumAndMultiply[3]='The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + arraySumAndMultiply[1] + '.';
  return arraySumAndMultiply;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
function sumArray(sumArr) {
    var arraySum = [];
    arraySum[0] = sum(sumArr[0],sumArr[1])[0];
    var i = 2;
    while (i<(sumArr.length)){
        arraySum[0] = sum(arraySum[0],sumArr[i])[0];
        i++;
    }
    arraySum[1] = sumArr + ' was passed in as an array of numbers, and ' + arraySum[0] + ' is their sum.';
    return arraySum;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray([2, 3, 4]);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
    var arrayMult = [];
    arrayMult[0] = multiply(multArr[0],multArr[1])[0];
    console.log(arrayMult[0]);
    var i = 2;
    while (i<(multArr.length)){
        arrayMult[0] = multiply(arrayMult[0],multArr[i])[0];
        console.log(arrayMult);
        i++;
    }
    arrayMult[1] = "The numbers " + multArr + " have a product of " + arrayMult[0] + ".";
    return arrayMult;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray([2, 3, 4]);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
function multiplyAnyArray(dynamicArray) {

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray([1,2,3,4,5]);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
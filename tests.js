/* eslint-disable no-unused-vars */
/* global sum multiply sumAndMultiply sumArray multiplyArray multiplyAnyArray */
/* exported testSum testMultiply testSumAndMultiply testSumArray testMultiplyArray testMultiplyAnyArray */
'use strict';

function testSum() {
  if (sum(4,7)[0] === 11 && sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum(4,7) PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum(4,7) FAILS', 'color: red');
  }
}

function testMultiply() {
  if (multiply(5,9)[0] === 45 && multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply(5,9) PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply(5,9) FAILS', 'color: red');
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[0] === 16 && sumAndMultiply(4, 7, 5)[1] === 140 && sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply(4,7,5) PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply(4,7,5) FAILS', 'color: red');
  }
}

var testArray = [2, 3, 4];

function testSumArray() { //eslint-disable-line
  if (sumArray(testArray)[0] === 9 && sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray([2,3,4]) PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray([2,3,4]) FAILS', 'color: red');
  }
}

function testMultiplyArray() { //eslint-disable-line
  if (multiplyArray(testArray)[0] === 24 && multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray([2,3,4]) PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray([2,3,4]) FAILS', 'color: red');
  }
}

var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function testMultiplyAnyArray() { //eslint-disable-line
  if (multiplyAnyArray(testDynamicArray)[0] === 120 && multiplyAnyArray(testDynamicArray)[1] === 'The numbers 1,2,3,4,5 have a product of 120.') {
    console.log('%c TEST FOR multiplyArray([1,2,3,4,5]) PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray([1,2,3,4,5]) FAILS', 'color: red');
  }
}
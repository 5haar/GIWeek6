// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

const arr1 = [345, 232, 673, 1244, 175];
const arr2 = [332.87, 39, 73, 14, 17];
const arr3 = [3.56, 22, 67, 44, 5];
const arr4 = [12.7, 32, 73, 124, 75];

const avgArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(avgArray(arr2));

// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you
// beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on
// Arrays to aid in working through this problem.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.

const values = [1243, 1124, 243562, 132453, 3454, 132455, 6879, 7768];

const searchValue = function (arr, value) {
  let index = arr.indexOf(value);
  return index;
};

console.log(searchValue(values, 6879));



// *VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin.

let array = [1, 2, 5];

let coinChange = function(coins, amount) {
  let dp = [];
  return coin(coins, amount, dp);
};

let coin = function (coins, amount, dp) {
  if (dp[amount - 1] !== undefined) return dp[amount - 1];
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let count = Number.MAX_SAFE_INTEGER;
  let tmp = 0;

  for (let i = 0; i < coins.length; i++) {
    tmp = coin(coins, amount - coins[i], dp);
    if (tmp !== -1) count = Math.min(count, tmp + 1);
  }

  dp[amount - 1] = count === Number.MAX_SAFE_INTEGER ? -1 : count;

  return dp[amount - 1];
};

console.log(coinChange(array, 11));
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const otherNumber = target - array[i];
    for (let j = 0; j < array.length; j++) {
      if (array[j] === otherNumber && j !== i) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n ** 2)
*/

/* 
  Add your pseudocode here
  // 1. Itterate through array numbers
  // 2. Subtract number from target
  // 3. Check if the reminder exists
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

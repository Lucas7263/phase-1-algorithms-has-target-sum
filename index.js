function hasTargetSum(array, target) {
  // Write your algorithm here
    let foundIt = false
  search:
  for (i = 0;i < array.length;i++) {
    let first = array[i];
    
    for (j = i + 1;j < array.length;j++) {
        let second = array[j];
        console.log(`'${first}, this is first'`, `'${second}, this is second'`)
       
        if ((first + second) === target) {
          console.log(first + second)
          foundIt = true
          break search
        }  
        // else if 
        //   ((first + second) != target) {
        //   return false 
        // }
       
}
  }
  return foundIt
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  Take array input from argument and iterate over it adding the first index to the second index.
  Compare each sum of iteration to target number.
  If sum = target number return true.
  Else return false. 
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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 9, 4, 6, 9], 18));
  
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 7], 15));
}

module.exports = hasTargetSum;

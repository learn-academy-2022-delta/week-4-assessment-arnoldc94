// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// input: colors1
// output: Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// input: colors2
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shiftSortedArray", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
      expect(shiftSortArray(colors1)).toEqual(expect.arrayContaining([ "blue", "green", "yellow", "pink"]));
      // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

      expect(shiftSortArray(colors2)).toEqual(expect.arrayContaining([ "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]));
      // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  })
})


// ReferenceError: shiftSortArray is not defined

// b) Create the function that makes the test pass.
//Pseudo---->
// create a function named shiftSortArray
// pass a paramater named array
// use the .slice() method to remove the first element of the array
// use the sort method to help randomize the array
// use Math.floor(Math.random() - 0.5  in the sort method to randomize the array.
// outside of jest testing console.log to see result in terminal

const shiftSortArray = (array) => array.slice(1).sort(() => Math.floor(Math.random() - 0.5 ))

// PASS  ./code-challenges.test.js
// shiftSortedArray
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (5 ms)


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// input: nums1
// output: [-8, 90]
//input: nums2
// output: [5, 109]

// a) Create a test with expect statements for each of the variables provided.

describe("smallLarge", () => {
  const nums1 = [3, 56, 90, -8, 0, 23, 6]
  const nums2 = [109, 5, 9, 67, 8, 24]

  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
      expect(smallLarge(nums1)).toEqual([-8, 90]);
      // Expected output: [-8, 90]

      expect(smallLarge(nums2)).toEqual([5, 109])
      // Expected output: [5, 109]
  })
})

//ReferenceError: smallLarge is not defined

// b) Create the function that makes the test pass.

//Pseudo---->
// Create a function named smallLarge 
// Pass in an array paramater to the function
// Iterate over and filter the smallest and largest values storing the values in a new array
// iterate over value
// set the value stictly equal to the max number
// Use Math.max() to find the max number 
// Use a spread operator on the array paramater to pass multiple arguments to the min and max methods
// Use the .sort method to sort the array from least to greatest
// use an anonomys function to invoke the desired sort order
// Pass in the paramaters a and b
// return a - b returning the smaller value first
// Outside of jest testing console.log the function and pass in paramater to see results in the console


const smallLarge = (array) =>array.filter(value => value ===  Math.min(...array) || value === Math.max(...array)).sort(function (a, b) {return a - b;})
  
//  PASS  ./code-challenges.test.js
// smallLarge
// ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (3 ms)





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// input: testArray1, testArray2, testArray3, testArray4
// [3, 7, 10,  5,  4, 8, 2, 1, 67, 25, 11, 6, 20]



// b) Create the function that makes the test pass.

describe("noDuplicate", () => {
  const testArray1 = [3, 7, 10, 5, 4, 3, 3]
  const testArray2 = [7, 8, 2, 3, 1, 5, 4]
  const testArray3  = [67,25,4,3,2,1,1,1,1,11]
  const testArray4  = [6,20,2,1,2]

  it("takes in a dynamic number of arrays as arguments and returns one array with no duplicate values.", () => {
      expect(noDuplicate(testArray1, testArray2, testArray3, testArray4)).toEqual([3, 7, 10,  5,  4, 8, 2, 1, 67, 25, 11, 6, 20]);
      // [3, 7, 10,  5,  4, 8, 2, 1, 67, 25, 11, 6, 20]
    
  })
})

// ReferenceError: noDuplicate is not defined

//Pseudo---->
//create a function named noDuplicate
// Pass in two array paramaters named arr1 and arr2
// use the spread operator on arr2(...arr2) to pass in numerous arguments.
// Create a new array named newArr
// use concat method to store the combined arr1 and ...arr2 in the newArr variable.
// use the filter method to iterate over the new array
// iterate over the value and the index
// Using IndexOf check for the index of the value at that index 
// Set it strictly equal to index to return the first occurance of the value and return it at the current index
// outside of jest testing console.log to see the result

const noDuplicate = (arr1,...arr2) => (newArr=arr1.concat(...arr2)).filter((value,index) => newArr.indexOf(value) === index)

// PASS  ./code-challenges.test.js
// noDuplicate
//     ✓ takes in a dynamic number of arrays as arguments and returns one array with no duplicate values. (1 ms)
  
  



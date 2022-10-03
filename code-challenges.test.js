//******************************************************************************
//******************************************************************************
// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought
// process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
//******************************************************************************

//******************************************************************************
// --------------------1)👉Create a function that takes in an array, removes the
// first item from the array and shuffles the remaining content.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a))🧪 Create a test with an expect statement using the variable provided.
// HINT: Check out this resource:
// https://jestjs.io/docs/expect#expectarraycontainingarray
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("removeAndShuffle", () => {
  it("Removes first item in array and shuffles the remaining content", () => {
    //=== Provided Test Cases ===
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ];
    //=== Expected Test Results ===
    // ** in any order **
    const expected1 = ["yellow", "blue", "pink", "green"];
    const expected2 = [
      "saffron",
      "aquamarine",
      "periwinkle",
      "indigo",
      "ochre",
    ];

    expect(removeAndShuffle(colors1)).toEqual(
      expect.arrayContaining(expected1)
    );
    expect(removeAndShuffle(colors2)).toEqual(
      expect.arrayContaining(expected2)
    );
  });
});

//---------------------||❌ Initial Test Results ❌||---------------------------
// FAIL  ./code-challenges.test.js
// removeAndShuffle
//   ✕ Removes first item in array and shuffles the remaining content (1 ms)

// ● removeAndShuffle › Removes first item in array and shuffles the remaining content

//   ReferenceError: removeAndShuffle is not defined

//     48 |     ];
//     49 |
//   > 50 |     expect(removeAndShuffle(colors1)).toEqual(
//        |     ^
//     51 |       expect.arrayContaining(expected1)
//     52 |     );
//     53 |     expect(removeAndShuffle(colors2)).toEqual(

//     at Object.expect (code-challenges.test.js:50:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.21 s
// Ran all test suites.
//------------------------------------------------------------------------------

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//------------------------*** Initial Version ***-------------------------------
/*
const removeAndShuffle = (arr) => {
  // creates a new Array with first value removed
  const filtered = arr.filter((color, index) => index !== 0);

  // create index based on filtered array length minus 1
  // I realized I could have done this inside the for-loop, but decided to do it
  // this way to help make the steps more clear for comments and understanding
  let i = filtered.length - 1;

  // loop through filtered array and decrease index every count by one
  for (i; i > 0; i--) {
    // create random index value and assign it to randomIndex variable
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // store value of current index of filtered array into temporary variable
    // to be used
    const tempValue = filtered[i];

    // assign the random index value to the value of the current index
    filtered[i] = filtered[randomIndex];

    // swap the values by assigning the original index value back into the
    // location of the random index value
    filtered[randomIndex] = tempValue;
  }
  // return the filtered and shuffled array
  return filtered;
};
*/
//------------------------------------------------------------------------------

//-----------------*** This is a refactored version ***-------------------------
// I decided to use the shift method since I was just removing the first index.
// I also decided to change the index variable names to make the code easier to
// understand since I'm using random index values in conjunction with current
// index values per iterations when I utilize them to swap values.
//------------------------------------------------------------------------------
const removeAndShuffle = (arr) => {
  arr.shift();
  for (let currentIndex = arr.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    const tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  return arr;
};
//------------------------------------------------------------------------------

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ Removes first item in array and shuffles the remaining content (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.184 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.68s.
//------------------------------------------------------------------------------

//******************************************************************************
// --------------------2)👉 Create a function that takes in an object that
// contains up votes and down votes and returns the net total of votes.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements for each of the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

describe("getTotalVotes", () => {
  it("returns the net total of votes", () => {
    //=== Provided Test Cases ===
    const votes1 = { upVotes: 13, downVotes: 2 };
    const votes2 = { upVotes: 2, downVotes: 33 };

    //=== Expected Test Results ===
    const expected1 = 11;
    const expected2 = -31;

    expect(getTotalVotes(votes1)).toEqual(expected1);
    expect(getTotalVotes(votes2)).toEqual(expected2);
  });
});

//---------------------||❌ Initial Test Results ❌||---------------------------
// RUNS  ./code-challenges.test.js
// ● getTotalVotes › returns the net total of votes

//   ReferenceError: getTotalVotes is not defined

//     146 |     const expected2 = -31;
//     147 |
//   > 148 |     expect(getTotalVotes(votes1)).toEqual(expected1);
//         |     ^
//     149 |     expect(getTotalVotes(votes2)).toEqual(expected2);
//     150 |   });
//     151 | });

//     at Object.expect (code-challenges.test.js:148:5)

// RUNS  ./code-challenges.test.js
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.21 s, estimated 1 s
// Ran all test suites.
//------------------------------------------------------------------------------

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// create function that takes object input..
// then accesses the value of the upVote and downVote keys..
// then return the value of upVote numbers minus downVote numbers
const getTotalVotes = (obj) => {
  return obj.upVotes - obj.downVotes;
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ Removes first item in array and shuffles the remaining content (1 ms)
// getTotalVotes
//   ✓ returns the net total of votes (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.194 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.68s.
//------------------------------------------------------------------------------

//******************************************************************************
// --------------------3)👉 Create a function that takes in two arrays as
// arguments and returns one array with no duplicate values. STRETCH: Use the
// spread operator to pass in a dynamic number of arguments.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with an expect statement using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("getOneSet", () => {
  it("returns one array with no duplicate values", () => {
    //=== Provided Test Cases ===
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
    //=== Expected Test Results ===
    const expected1 = [
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
    ];

    expect(getOneSet(dataArray1, dataArray2)).toEqual(expected1);
  });
  it("accepts any number of arrays and returns one array with no duplicate values", () => {
    //=== Provided Test Cases ===
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
    const dataArray3 = ["string", "null", "Boolean", "string", "undefined"];
    const dataArray4 = ["array", "object", "number", "string", "Boolean"];
    const dataArray5 = [23, 44, 55, 66, 66, 55, 23, 23, 4, 4, 6, 7, 8, 1, 3];
    //=== Expected Test Results ===
    const expected2 = [
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
      23,
      44,
      55,
      66,
      4,
      6,
      7,
      8,
      1,
      3,
    ];
    expect(
      getOneSet(dataArray1, dataArray2, dataArray3, dataArray4, dataArray5)
    ).toEqual(expected2);
  });
});

//---------------------||❌ Initial Test Results ❌||---------------------------
// FAIL  ./code-challenges.test.js
// removeAndShuffle
//   ✓ Removes first item in array and shuffles the remaining content (3 ms)
// getTotalVotes
//   ✓ returns the net total of votes
// getOneSet
//   ✕ returns one array with no duplicate values

// ● getOneSet › returns one array with no duplicate values

//   ReferenceError: getOneSet is not defined

//     227 |     ];
//     228 |
//   > 229 |     expect(getOneSet(dataArray1, dataArray2)).toEqual(expected1);
//         |     ^
//     230 |   });
//     231 | });
//     232 |

//     at Object.expect (code-challenges.test.js:229:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.209 s, estimated 1 s
// Ran all test suites.
//------------------------------------------------------------------------------

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//------------------------*** Initial Version ***-------------------------------
// I decided to to take advantage of the spread operator and the Set object.
// It's a bit cheaty as there are more drawn out ways to complete this but..🤷‍♂️
// I used a Set object since you cannot have duplicate values in a Set object.
// I then use the spread operator to turn the Set object into an array. 🫱💨
//                                                                          🎤
// ------*** This Function accounts for only 2 arrays ***-----------------------
// const getOneSet = (arr1, arr2) => {
//   return [...new Set([...arr1, ...arr2])];
// };
//------------------------------------------------------------------------------

//-----------------*** This is a refactored version ***-------------------------
// This allows any number of arrays to be added as an argument. This is due to
// the use of the Rest Parameter in conjunction of the Spread Operator. I also
// used to forEach() method to go through each array, and then each value in the
// the array to push values into a new array so the values can be applied to the
// Set object and have the spread operator applied to return the desired output.
//------------------------------------------------------------------------------
// const getOneSet = (...arr) => {
//   let newArr = [];
//   arr.forEach((array) => array.forEach((value) => newArr.push(value)));
//   return [...new Set([...newArr])];
// };
//------------------------------------------------------------------------------

//---------------*** This is my final refactored version ***--------------------
// I decided to refactor this problem even more and I went with the Higher Order
// Function reduce(). This allowed me to return an array of arrays reduced down
// to one array and then apply the combination of the spread operator and Set
// object as before from my other versions.
const getOneSet = (...arr) => {
  return [
    ...new Set([
      ...arr.reduce((arr1, arr2) => {
        return arr1.concat(arr2);
      }),
    ]),
  ];
};
//------------------------------------------------------------------------------

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ Removes first item in array and shuffles the remaining content (1 ms)
// getTotalVotes
//   ✓ returns the net total of votes
// getOneSet
//   ✓ returns one array with no duplicate values (1 ms)
//   ✓ accepts any number of arrays and returns one array with no duplicate values

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.179 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.52s.
//------------------------------------------------------------------------------

//******************************************************************************

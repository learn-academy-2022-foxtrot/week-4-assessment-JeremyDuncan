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
const removeAndShuffle = (arr) => {
  // creates a new Array with first value removed
  const filtered = arr.filter((color, index) => index !== 0);

  // create index based on filtred array length minus 1
  let i = filtered.length - 1;

  // loop through filtered array and decrease index every count
  for (i; i > 0; i--) {
    // create random index value and asign it to randomIndex variable
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
// --------------------2) Create a function that takes in an object that
// contains up votes and down votes and returns the net total of votes.
//******************************************************************************
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a) Create a test with expect statements for each of the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const votes1 = { upVotes: 13, downVotes: 2 };
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 };
// Expected output: -31

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b) Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//******************************************************************************
// --------------------3) Create a function that takes in two arrays as
// arguments and returns one array with no duplicate values. STRETCH: Use the
// spread operator to pass in a dynamic number of arguments.
//******************************************************************************
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a) Create a test with an expect statement using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const dataArray1 = ["array", "object", "number", "string", "Boolean"];
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b) Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

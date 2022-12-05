'use strict';
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const data = document.querySelector('textarea').value.split('\n');

  let counter = 0;
  for (const ele of data) {
    //make sure that the first character is a letter and all lowercase
    //take out the _ with split and capitalize the 2nd or third word
    // split the string to individual word
    const words = ele.trimStart().toLowerCase().split('_');

    //loop the array of words per element starting with the second word
    for (let i = 1; i < words.length; i++) {
      //change the first letter of the words to capital
      words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
    }
    //joins the word array to a single string with the check mark
    console.log(words.join('').padEnd(20) + '✅'.repeat(++counter));
  }
});

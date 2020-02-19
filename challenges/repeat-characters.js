console.log('-- load & test repeatCharacters --');
//debugger; // step through loading & testing

// reapeat each character in a string, without changing the order
function repeatCharacters(str, repetitions) {
  if (isNaN(repetitions)) {
    return 'repetitions must be a number';
  }
  let res = '';
  for (const c of str) {
    res += c.repeat(repetitions);
  }
  return res;
}

// declare and evaluate test cases for repeatCharacters
const repeatCharactersTests = [
  { name: 'Test 1', args: ['aaaa', 2], expected: 'aaaaaaaa' },
  { name: 'Test 2', args: ['fast!', 3], expected: 'fffaaasssttt!!!' },
  { name: 'Test 3', args: ['They type fast!', 0], expected: '' },
  { name: 'Test 3', args: ['...', 1], expected: '...' },
  { name: 'Test 5', args: ['bbbb', NaN], expected: 'repetitions must be a number' },
  { name: 'Test 6', args: ['hi there', 'x'], expected: 'repetitions must be a number' },
];
for (let test of repeatCharactersTests) {
  const expected = test.expected;
  const actual = repeatCharacters(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
};
console.log(repeatCharactersTests);


// declare handler
function repeatCharactersHandler() {
  //debugger; // step through user actions

  // read & process user input
  const text = prompt('enter a text');
  const repetitions = prompt('enter the number of repetitions');
  const numRepeats = parseInt(repetitions);
  const numRepeatsIsANumber = typeof numRepeats === 'number';
  console.assert(numRepeatsIsANumber, 'cast numRepeats to type "number"');

  // execute core logic
  const result = repeatCharacters(text, numRepeats);
  // display result to user
  alert(result);
  // log action for developer
  console.log('\n-- repeatCharacters --');
  // user inputs
  console.log(`\n-- text: ${text} number of repetitions: ${numRepeats} --`)
  // result
  console.log(`\n-- ${result} --`);
}

// attach handler to repeatCharacters button with an event listener
document.getElementById('repeatCharacters-button').addEventListener('click', repeatCharactersHandler);




/* looking for a hint?
  - try using an early return to avoid entering the loop if repetitions isNaN
  - you can iterate through each character in a string using for ... of
  - it is possible to solve this challenge using a for loop inside a for loop
*/

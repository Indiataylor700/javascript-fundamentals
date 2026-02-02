/*Lesson 3 - All about Strings */

// Declare a string using double quotes
let carType = "Camero";
let carAction = "They move fast";

// Declare a string using single quotes
let truckType = 'Silverado';
let truckAction = 'They haul stuff';

// Use bracket notation on a variable of string
// bracket notation is zero-based index
console.log(carType[6]);
//Output: Undefined

console.log(truckAction[5]);
//Output: h

// A long sentence using the + operator
let longExample1 = 'Lorem ipsum dolor ' +
'sit amet, consectetur adipiscing elit.' +
' Phasellus a egestas lacus, sit amet ' +
'scelerisque massa. Aenean molestie at ' +
'urna eu dapibus.';

// A long sentence using the \ backslash
let longExample2 = 'Nam sit amet nisl \
eu ante varius dignissim. Phasellus ultrices\
 nulla nulla, sit amet tincidunt arcu\
 venenatis vel. Vivamus ex quam,\
 convallis eget blandit sed, elementum id libero.';

 /* Using the + operator to concatenate
 multiple strings or other primitives together
 to create a new string. */
 let con1 = 'Hello ';
 let con2 = 'World';
 
 let combine1 = con1 + con2;
 let combine2 = con2 + 52;
 let combine3 = 'The ' + con2 + ' is vast';

 console.log(longExample2);
 console.log(combine2);
 console.log(combine3);

 // Template string Interpolation
 // Uses backtick instead of quotations
 console.log(` Fusce rutrum pellentesque rhoncus.`);

 //Template string with placeholders
 // Uses $ dollar sign and {} curly braces
const VALUE1 = 10;
const VALUE2 = 20;

// Concatenation with expression
console.log('Thirty is ' +
    (VALUE1 + VALUE2) +' and not ' + (2 * VALUE1 + VALUE2));

// Placeholder sytax with expression
let place1 = `Thirty is ${VALUE1 + VALUE2} 
and not ${2 * VALUE1 + VALUE2}`;
console.log(place1);

// Escape Sequence 
let phrase = 'My name is Roger O\'Dell. \tHow are\n you doing today';
console.log(phrase);
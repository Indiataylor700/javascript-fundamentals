/*  Functions and Scopes Lab */
// Task One:
const addTogether = function(part1, part2) {
    return part1 + part2;
}
//console.log(addTogether(60, 84));

// Task Two:
function newMath(digit3, digit4 = 15) {
    return digit3 + digit4;
}
//console.log(newMath(30));
//console.log(newMath(30,40));

let goal1 = 'You win some, you lose some, ';
let goal2 = 'You live to fight another day.';
// Task Three:
const oldPhrase1 = (part3, part4) => goal1 + goal2;

//console.log(oldPhrase1(goal1,goal2));
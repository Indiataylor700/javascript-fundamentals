/*  Operators Lab  */

// Task One 
function opLab() {
    let equation1 = 10 + 32 * 12/ 3;
    let equation2 = (10 + 32) * 12/ 3;
    console.log(`Equation one is ${equation1} and equation two is ${equation2}.`);
}
//opLab();

//Task Two
function plusEqualsTask(param1, param2) {
    param2 += param1;
    console.log(param2);
}
//plusEqualsTask(10,12);

function multiplicationEqualsTask(param1, param2) {
    param2 *= param1;
    console.log(param2);
}
//multiplicationEqualsTask(5,7);

function modulusEqualsTask(param1,param2) {
    param2 %= param1;
    console.log(param2);
}
//modulusEqualsTask(8,10);

// Task Three
function comparisonOperatorTask (param3, param4) {
    const identicalInValue = param3 == param4;
    const notIdenticalInValue = param3 != param4;
const identicalInValueAndType = param3 === param4;

    console.log(`
        \"These parameters are equal in value,\" this statement is ${identicalInValue}.
        \"These parameters are not equal in value,\" this statement is ${notIdenticalInValue}.
        \"These parameters are equal in value and type\" this statement is ${identicalInValueAndType}.`)
}
//comparisonOperatorTask(7, '7');
// Conditional Statements Lab

// Task One
function ifElseTask(param1, param2) {
    if( param1 == 70 && param2 < 70) {
        console.log(`Parameter one is ${param1}, and Parameter two is ${param2} and less than 70.`);
    } else {
        console.log('One or both parameters are false.');
    }
}
//ifElseTask(70,69);

function ifElseTask2(param1, param2) {
    if( param1 == 'Flock of ' && param2 == 'birds') {
        console.log('They fly south for the winter, and back north in the summer.');
    } else {
        console.log('They nest');
    }
}
//ifElseTask2('Flock of ','birds');

// Task Two
function gradeDescription(script) {
    switch(script) {
        case 'E':
            console.log('This grade description is Excellent.');
            break;
        case 'V':
            console.log('This grade description is Very Good');
            break;
        case 'G':
            console.log('This grade description is Good.');
            break;
        case 'A':
            console.log('This grade description is Average.');
            break;
        case 'F':
            console.log('This grade description is a Fail.'); 
            break;   
        default:
            console.log('Not a valid grade');
            break;                
    }
}

//gradeDescription('E');
//gradeDescription('S');

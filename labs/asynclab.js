/* Concurrency lab */

// Task One
function concurLab(arg) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`This task was ran ${arg} times.`)
        }, 2000);
    });
}

// Task Two 
async function myConcurLab(argument) {
        console.log('Lets start the task');
        const iConcur = await concurLab(argument);
        console.log(iConcur);
}

//myConcurLab('many');

// Task Three
function concurT3(value) {
    for(value = 0; value < 5; value++) {
        myConcurLab(value);
    }
}

//concurT3();
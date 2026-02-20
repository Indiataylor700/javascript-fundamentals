/* Looping Statements lab */
// Task One
function whileLoop() {
    let value = 5;
    while(value < 26) {
        console.log(value); value++;
    }
} 

//whileLoop();

// Task Two
function forLoop() {
    let value = '';

    divideByThree:
    for(i = 0; i < 30; i ++) {
        if(i % 3) {
            continue divideByThree;
        }
        value += (`${i}, `);
    }
    console.log(value);
    
}
//forLoop();
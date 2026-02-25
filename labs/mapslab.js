/* Maps Collection lab */

//Task One
function codeOfManyColors(){
 const colorCode = new Map();
    colorCode.set('A-15', 'Purple');
    colorCode.set('A-20', 'Red');
    colorCode.set('A-25', 'Orange');
    colorCode.set('A-30', 'Yellow');
    colorCode.set('A-35', 'Green');
    colorCode.set('A-40', 'Blue');

    return colorCode;
}
//console.log(codeOfManyColors());


function rainbowKeyValue(value, key) {
   // let rainbow = codeOfManyColors().entries([key,value]);
    console.log(`${key} , ${value}`)
}
//rainbowKeyValue(codeOfManyColors(key,value));

function royGBiv() {
    codeOfManyColors().forEach(rainbowKeyValue);
}
royGBiv();
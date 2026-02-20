/* Arrays lab */

// Task One 
const icecream_flavors = ['Chocolate','Pistachio','Vanilla','Strawberry',
    'Neopolitan','Butter Pecan','Mint Chocolate Chip','Rocky Road','Sherbert','Black Walnut'];

function loopFlavors () {
    for(let flavor = 0; flavor < icecream_flavors.length; flavor++) {
        console.log(icecream_flavors[flavor]);
    }    
}

//loopFlavors();

// Task Two

function joinIcecreamFlavors() {
    let icecreamIsle = icecream_flavors.join(' & ');
    console.log(icecreamIsle);
}

//joinIcecreamFlavors();
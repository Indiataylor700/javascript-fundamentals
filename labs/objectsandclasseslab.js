/* Objects and Classes Lab */

// Task One
const aboutCats = {
    speciesofCat:'lion',
    habitat: 'Sub-Saharan Africa',
    coatColor: 'yellow-gold',
    dietaryClassification: 'carnivore',

        lionBehavior: function() {
        return (`A ${this.coatColor} ${this.speciesofCat} hunts in ${this.habitat} for prey
        and it divides the spoil, as a true wild ${this.dietaryClassification}.`);
    }
}

//console.log(aboutCats.speciesofCat);
//console.log(aboutCats.lionBehavior());

// Task Two
class Person {
    #height;
    #eyeColor;
    #hairColor;
    #shirtSize

    constructor(height, eyeColor, hairColor, shirtSize) {
        this.#height = height;
        this.#eyeColor = eyeColor;
        this.#hairColor = hairColor;
        this.#shirtSize = shirtSize;
    }

    // getters
    get height() {return this.#height;}
    get eyeColor() {return this.#eyeColor;}
    get hairColor() {return this.#hairColor;}
    get shirtSize() {return this.shirtSize;}

    // setters
    set height(value) {this.#height = value;}
    set eyeColor(value) {this.#eyeColor = value;}
    set hairColor(value) {this.#hairColor = value;}
    set shirtSize(value) {this.#shirtSize = value;}

    // Method
    personBehavior() {
        console.log('This is a person with bold behavior.');
    }


}

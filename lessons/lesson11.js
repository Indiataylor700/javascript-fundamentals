/* Lesson 11 - Classes and Objects */

// Traditional style
const myHouse = new Object();
myHouse.foundation = 'Concrete';
myHouse.windowSize = 20;
myHouse.doorColor = 'Red';
myHouse.roofType = 'Composite';

// Object initializer verson
const house = {
    foundation: 'Dirt',
    windowSize: 30,
    doorColor: 'Gray',
    roofType: 'Shingle'
};

//console.log(myHouse.doorColor);
//console.log(house.foundation);

/* Variables created to assign to an object
separated by commas. */
const something = {},
    str = 'secondString',
    rand = Math.random(),
    myObj2 = {};

/* Create properties for something */
something.type ='Dot syntax for a key called type';
something['date issued'] = 'key has a space';
something[str] = 'Key is variable string';
something[rand] = 'Random number becomes the key';
something[myObj2] = 'Key is object myObj2';
something[''] = 'Key is an empty string';

//console.log(something);
//console.log(something.secondString);
//console.log(something[rand]);

function exampleObjLoop() {
    const numbers = {
        one: 1,
        two: 2,
        three:3,
        four: 4,
    };
    
    for(const key in numbers) {
        console.log(key);
        console.log(numbers[key]);
    }
}

//exampleObjLoop();

function exampleHouseLoop() {
    for(cottage in house) {
        console.log(`${cottage} - ${house[cottage]}`);
    }
}

//exampleHouseLoop();

/* Constructor function */
function Truck(make, model, year, color, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
}

const myTruck = new Truck('Chevy' , 'Silverado' , 2016, 'Black' , 'Roger');

//console.log(myTruck.model);

function Person(firstname, lastName) {
    this.firstname = firstname;
    this.lastName = lastName;
}

const peter = new Person('Peter' , 'Parker');
const spiderTruck = new Truck('Ford' , 'F150' , 2025, 'Red' , peter);

//console.log(spiderTruck);

/* Methods in an object */
const tempConvert = {

    fahrenheitToCelsius: function(fahrenheit) {
        return(fahrenheit - 32) * 5/ 9;
    },

    celsiusToFahrenheit(celsius) {
        return(celsius * 9 / 5) + 32;
    }
};

//console.log(tempConvert.fahrenheitToCelsius(69));

/* Class declaration */
class Rectangle{
    #height;
    #width;

    constructor(height, width){
        this.#height = height;
        this.#width = width;
    }

    /* getters */
    get r_height() {return this.#height;}
    get r_width() {return this.#width;}

    /* setters */   
    set r_height(num) {
        this.#height = num;
    }

    set r_width(num) {
        this.#width = num;
    }


    /* Methods */
    calculatedArea() {
        return this.#height * this.#width;
    }

    //Can only have one method by its name
    //calculatedArea(exp) {
    //    return (this.#height * this.#width) ** exp;
   // }
}

const myShape = new Rectangle(20, 40);
//console.log(myShape.r_height);
myShape.r_height = 25;
//console.log(myShape.r_height);
//console.log(myShape.calculatedArea());
//console.log(myShape.calculatedArea(2));

/* Inheritance - A parent/ child class
relationship (superclass and subclass) 
child (subclass) inherits from the 
parent (super class)*/
class Boat {
    #color;
    #engineType;
    constructor(color, engineType) {
        this.#color = color;
        this.#engineType = engineType;
    }

    //Getters
    get color() {return this.#color;}
    get engineType() {return this.#engineType;}

    //Setters
    set color(value) {this.#color = value;}
    set engineType(value) {this.#engineType = value;}

    //Method
    move() {
        console.log(`Moving on the water using ${this.#engineType}`);
    }
}

//Child class
class SailBoat extends Boat {
    #fuel;
    constructor(color, engineType, fuel) {
        super(color, engineType);
        this.#fuel = fuel;
    }

    //getter
    get fuel() {return this.#fuel;}

    //setter
    set fuel(value){this.#fuel = Value;}

    //method
    explore() {
        console.log('Exploring the world.');
    }
}

const ranger = new Boat('blue', 'outboard');
const minnow = new SailBoat('white', 'sail', 'wind');

//console.log(ranger.move());
minnow.engineType();
minnow.explore();
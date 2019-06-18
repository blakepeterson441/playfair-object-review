console.log('JS'); 

// Object literal
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log('baseballHat', baseballHat );
console.log(`The baseballHat is ${baseballHat.color} in size ${baseballHat.size}`);

// Const w/ objects
console.log('Before changing size', sunHat);

// Can I do this?
sunHat.size = 'XL';
console.log('After changing size', sunHat);

// Can't set to another object
/*
sunHat = {
    type: 'sun',
    color: 'white',
    size: 'S'
}
console.log('Set to a new hat?', sunHat);
*/

let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];

/*function addCutePenguins(penguins){
    let cutePenguins = [];
    for( let i = 0; i < cutePenguins.length; i++)
        if (penguins.isCute = true){
        cutePenguins.push(penguins[i]);
        } 
    return cutePenguins;
}
console.log('penguins', penguins);

console.log('cutePenguins', cutePenguins );
*/


function findCuteOnes(inputArray) {
    let outputArray = [];
 /*   for (let thing of inputArray){
        console.log('a thing', thing);
        if (thing.isCute === true){
            outputArray.push(thing);
        }
    }*/
    for (let i = 0; i < inputArray.length; i++) {
        let thing = inputArray[i];
        if (thing.isCute === true) {
            outputArray.push(thing);
        }
    }

    return outputArray;
}

console.log('We have cute ones', findCuteOnes(penguins));

//Object contructor functions
function Hat(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
}

const fancyHat = new Hat('fancy', 'gold', 'M'); //new replaces returning function
console.log(fancyHat);

// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (const item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2
const animal = {
canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

//console.log('\n');
function birdCan() {
    for (const [key] of Object.entries(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
    // for (const key of Object.entries(animal)){
    //     console.log(`${key}:${animal[key]}`);
    // }
}

birdCan();
//console.log('\n');
// Task 3
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}

animalCan();

let myArray = ['one', 'two', 'three', 'four', 'five'];

// create an array with names, numbers and a property named 'moneyBet'
let animalsArray = [
    { name: 'cat', number: 1, moneyBet: 10 },
    { name: 'dog', number: 2, moneyBet: 20 },
    { name: 'lion', number: 3, moneyBet: 30 },
    { name: 'tiger', number: 4, moneyBet: 40 },
    { name: 'bear', number: 5, moneyBet: 50 },
    { name: 'elephant', number: 6, moneyBet: 60 },
    { name: 'monkey', number: 7, moneyBet: 70 },
    { name: 'chicken', number: 8, moneyBet: 80 },
    { name: 'duck', number: 9, moneyBet: 90 },
]

let animalsToLotery = animalsArray.filter(animal => animal.moneyBet <= 90);

let rand = Math.floor(Math.random()*myArray.length);
let rValue = animalsToLotery[rand];
console.log(`The ${rValue.number}  ${rValue.name} is the winner!`);
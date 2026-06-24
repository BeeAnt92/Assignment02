let coinFlip;
let flips;
let randomNum = Math.round(Math.random());

flips = parseFloat(prompt('Enter a random number'))

for (let i = 1; i <= flips; i++) {
    coinflip = randomNum;
}

if (randomNum === 0) {
    result = ('Heads')
}
if (randomNum === 1) {
    result = ('Tails')
}

console.log(`${result}`)


let coinFlip = randomNum
let randomNum = Math.round(Math.random())
let choice = prompt('Heads or Tails?')
if (choice === 'Heads') {
    if (randomNum <= coinFlip) {
        alert('The flip was heads and you chose heads...you win!')
    } 
} else if (choice === 'Tails') {
    if (randomNum >= coinFlip) {
        alert('The flip was heads and you chose tails...you lose!')
    }
} else if (choice === 'Heads') {
    if (randomNum >= coinFlip) {
        alert('The flip was tails and you chose heads...you lose!')
    }
} else if (choice === 'Tails') {
    if (randomNum <= coinFlip) {
        alert('The flip was tails and you chose tails...you win!')
    }
}
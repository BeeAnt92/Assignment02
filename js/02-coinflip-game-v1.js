let randomNum = Math.round(Math.random())
let coinFlip = randomNum
let choice = prompt('Heads or Tails?')
let result;
if (choice === 'Heads') {
    if (randomNum <= 0) {
        result = ('The flip was heads and you chose heads...you win!')
    } else if (randomNum >= 1) {
        result = ('The flip was tails and you chose heads...you lose!')
    }
} else if (choice === 'Tails') {
    if (randomNum <= 0) {
        result = ('The flip was heads and you chose tails...you lose!')
    } else if (randomNum >= 1) {
        result = ('The flip was tails and you chose tails...you win!')
    }
}
alert(result)
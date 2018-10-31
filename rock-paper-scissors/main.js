



let gameResults = {
    player1: ' ',
    computer: ' '
}

const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', init)


function init() {
    console.info('Initializing Rock Paper Scissors!')
    renderSkeletonGame()
    //Add a function to the bubblinx



}






function computerPlay(computerChoice, gameResults) {
    //Checks if computer choise is valid
    if (typeof computerChoice !== 'string') {
        console.error('**ERROR** Computer choice should be a string')
        return
    }
    if (computerChoice !== '' || computerChoice.toUpperCase !== 'ROCK' || computerChoice.toUpperCase !== 'PAPER' || computerChoice.toUpperCase !== 'SCISSOR') {
        console.error(`**ERROR** Computer choice should be PAPER, SCISSORS, OR ROCK. Computer choice = ${computerChoice}`)
        return
    }

    gameResults.computer = computerChoice
}






function setComputerPlay(gameResults) {
    let x = Math.floor((Math.random() * 3) + 1)
    if (x === 1) {
        gameResults.computer = 'ROCK'
    } else if (x === 2) {
        gameResults.computer = 'PAPER'
    } else if (x === 3) {
        gameResults.computer = 'SCISSOR'
    } else {}

    function checkWinner(gameResults) {
        //CHECK THE WINNDER AND RENDERS THE WINNNER
        renderResults(gameResults)

    }

}


















function renderGame(gameResults) {
    renderSkeletonGame()
    //TODO ALL OTHER FUNCTIONS
    renderResults(gameResults);


}

function renderResults(results) {
    let resultsRender = `<h3> You chose ${results.player1}!</h3>
                        <h3>The computer chose ${results.computer}!</h3>`
    document.getElementById('results').innerHTML = resultsRender
}



function renderSkeletonGame() {
    let skeleton = `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your <strong>weapon!!!</strong>:</h4>
            <div class="w-50 text-center" id="weapon-choice">
                <button class="btn btn-primary" id="rock-button">Rock</button>
                <button class="btn btn-primary" id="paper-button">Paper</button>
                <button class="btn btn-primary" id="scissors-button">Scissors</button>
            </div>
            <div class="d-flex justify-content-center" id="results">


            </div>
            <h1 class="text-center">You win!</h1>
        </div>
    `
    content.innerHTML = skeleton;

}
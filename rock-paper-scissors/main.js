const content = document.getElementById('content');
let theGame = {
    player: '',
    computer: ''
}

document.addEventListener('DOMContentLoaded', init(theGame))
content.addEventListener('click', humanPlay)

function init() {
    console.info("Game has initialized")
    content.innerHTML = renderGame(theGame)
    console.info('RenderGame function has initialized')

}

function checkWinner() {
    if (theGame.player === 'Rock') {
        if (theGame.computer === 'Rock') {
            renderDraw()
            return
        }
        if (theGame.computer === 'Paper'){
            renderLose()
            return
        }
        if (theGame.computer === 'Scissor'){
            renderWin()
            return
        }
    }
    if (theGame.player === 'Paper') {
        if (theGame.computer === 'Rock') {
            renderWin()
            return
        }
        if (theGame.computer === 'Paper'){
            renderDraw()
            return
        }
        if (theGame.computer === 'Scissor'){
            renderLose()
            return
        }
    }
    if (theGame.player === 'Scissor') {
        if (theGame.computer === 'Rock') {
            renderLose()
            return
        }
        if (theGame.computer === 'Paper'){
            renderWin()
            return
        }
        if (theGame.computer === 'Scissor'){
            renderDraw()
            return
        }
    }
}

function humanPlay(evt) {
    computerPlay(theGame)

    console.info('Human will make a play')
    const target = evt.target
    if (target.id === 'rock') {
        console.info('Human chose Rock')
        theGame.player = 'Rock'

    } else if (target.id === 'paper') {
        console.info('Human chose Paper')
        theGame.player = 'Paper'

    } else if (target.id === 'scissor') {
        console.info('Human chose Scissor')
        theGame.player = 'Scissor'

    }else{
        return
    }
    checkWinner()


}


function computerPlay() {
    let x = Math.round(Math.random() * (2) + 1)
    switch (x) {
        case 1:
            console.info('Computer will play Paper')
            theGame.computer = 'Paper'
            break
        case 2:
            console.info('Computer will play Scissor')
            theGame.computer = 'Scissor'
            break
        case 3:
            console.info('Computer will play Rock')
            theGame.computer = 'Rock'
            break
        default:
            console.error('X should be a number through not ' + x)
            break
    }
}







//--------------------–––––––––––––––––––––––––––––––––––––––––––––––––––––----------–––––––
//Rendering functions
//--------------------–––––––––––––––––––––––––––––––––––––––––––––––––––––----------–––––––
function renderWin() {
    //Render winner
    renderResults()
    console.info('Human has won')
    document.getElementById('result-text').innerHTML = 'YOU WIN'
}

function renderLose() {
    //Render Loser
    renderResults()
    console.info('Computer has won')
    document.getElementById('result-text').innerHTML = 'YOU LOSE'
}

function renderDraw() {
    //Render Draw
    renderResults()
    console.info('Neither has won')
    document.getElementById('result-text').innerHTML = 'IT IS A DRAW'
}
function renderResults (){
    document.getElementById('human-play').innerHTML = `You played: <strong>${theGame.player}</strong>`
    document.getElementById('computer-play').innerHTML = `The computer played: <strong>${theGame.computer}</strong>`
}



function renderGame() {

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary" id='rock'>Rock</button>
                <button class="btn btn-primary" id='paper'>Paper</button>
                <button class="btn btn-primary" id='scissor'>Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5" id='human-play'>You played: </div>
                <div class="m-5" id='computer-play'>The computer played: </div>
            </div>
            <h1 class="text-center" id='result-text'></h1>
        </div>
    `
}
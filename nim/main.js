let theGame = {
    playerTurn: 'Player 1',
    pebbles: 16
}



const content = document.getElementById('content')
document.addEventListener('DOMContentLoaded', init(theGame))
content.addEventListener('click', takePebble)
content.addEventListener('click', restart)


// Initialize the game
function init(theGame) {
    console.info("Game has initialized")
    content.innerHTML = renderGame(theGame)
    console.info('RenderGame function has initialized')
    document.getElementById('container-pebbles').innerHTML = renderPebbles()

}


// Checks if it is the right player AND Changes player
function changeTurn(player) {
    theGame.playerTurn = player === 'Player 1' ? 'Player 2' : 'Player 1'
}


function restart(evt) {
    const targetRestart = evt.target
    if (targetRestart.id === 'restart') {
        theGame = {
            playerTurn: 'Player 1',
            pebbles: 16
        }
        content.innerHTML = renderGame(theGame)
        console.info('RenderGame function has initialized')
        document.getElementById('container-pebbles').innerHTML = renderPebbles()

    }
}

function takePebble(evt) {
    console.info("Pebble will be taken")
    const target1 = evt.target
    if (target1.id !== 'button-1' || target1.id !== 'button-2' || target1.id !== 'button-3') return
    if (theGame.pebbles > 0) {
        if (target1.id === 'button-1') {
            console.info('button-1 has been clicked')
            if (theGame.pebbles >= 1) {
                theGame.pebbles--;
                console.info(theGame.pebbles)
            } else {
                console.error('Not enough pebbles to take')
                return
            }
        }
        if (target1.id === 'button-2') {
            console.info('button-2 has been clicked')
            if (theGame.pebbles >= 2) {
                theGame.pebbles -= 2;
                console.info(theGame.pebbles)
            } else {
                console.error('Not enough pebbles to take')
                return
            }
        }
        if (target1.id === 'button-3') {
            console.info('button-3 has been clicked')
            if (theGame.pebbles >= 3) {
                theGame.pebbles -= 3;
                console.info(theGame.pebbles)
            } else {
                console.error('Not enough pebbles to take')
                return
            }

        }
        renderRemovePebble(theGame.pebbles)
        removeButton(theGame.pebbles)
        if (theGame.pebbles !== 0) {
            changeTurn(theGame.playerTurn)
            console.info(theGame.playerTurn)
            renderPlayerTurn()
        } else {
            renderWinner()
        }
    }

}

function removeButton(pebble) {
    if (pebble < 3) document.getElementById('button-3').style.display = 'none'
    if (pebble < 2) document.getElementById('button-2').style.display = 'none'
}


function checkIfWinner(pebble) {
    return pebble === 0

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Render functions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function renderWinner() {
    document.getElementById('player-turn').innerHTML = `<strong>${theGame.playerTurn} IS THE WINNER</strong>`
}



function renderRemovePebble(pebbles) {
    for (let i = 16; i > pebbles; i--) {
        document.getElementById(`pebble${i}`).style.backgroundColor = 'yellow'
    }
}



function renderPebbles() {
    let pebbles = ''
    for (let i = 16; i > 0; i--) {
        pebbles += `<div class="pebble" id="pebble${i}"></div>`
    }

    return pebbles;
}

function renderPlayerTurn() {
    document.getElementById('player-turn').innerHTML = `<strong>${theGame.playerTurn}</strong>'s turn!`
}




function renderGame(game) {

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="text-center pebble-container" id="container-pebbles">
                
            </div>
            <h4 class="mt-5" style="display: inline;">It's</h4> 
            <h4 style="display: inline;" id="player-turn"> <strong>${theGame.playerTurn}</strong>'s turn! </h4>
            <h4 style="display: inline;">How many pebbles will you take?</h4>

                <div id="take-button">
                    <div >
                        <button type="button" class="btn btn-dark" id='button-1'>1</button>
                        <button type="button" class="btn btn-dark" id='button-2'>2</button>
                        <button type="button" class="btn btn-dark" id='button-3'>3</button>
                    </div>
                <button class="btn btn-primary" id='restart' style="width: 115px;">restart</button>
            </div>
        </div>
    `
}
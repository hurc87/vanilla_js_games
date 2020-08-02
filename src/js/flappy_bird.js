// * There are enemy blocks which move towards the character.
// * The character is not allowed to touch the enemy blocks.
// * The character scores a point for each successful time they manage to jump through the enemy blocks. 
// * The game must finish and animations stop if the character hits either the block or ground with the score being displayed with a 'game over' message. 
// * The user can press a button to restart the game.
// * The user can select a theme which will change the character / background / ground / enemy blocks 

const startGame = () => {

    const character = document.getElementById('character')

    const gamePlay = setInterval(() => {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
        const characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'))

        character.style.top = characterTop + 3 + 'px'
        console.log(characterBottom)

        if ( characterBottom < 150 ) {
            gameOver()
        }

        const jump = () => {
            if ( characterTop > 15) {
                character.style.top = characterTop - 9 + 'px'
            }  
        }

        document.addEventListener('keyup', (event) => {
            if (event.keyCode == 32) {
                jump()
            }
        })
    }, 100)

    const gameOver = () => {
        clearInterval(gamePlay)
    }
}

startGame()
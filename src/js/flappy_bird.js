// * There are enemy blocks which move towards the character.
// * The character is not allowed to touch the enemy blocks.
// * The enemy blocks change heigh as on each turn
// * The character scores a point for each successful time they manage to jump through the enemy blocks. 
// * The game must finish and animations stop if the character hits either the block or ground with the score being displayed with a 'game over' message. 
// * The user can press a button to restart the game.
// * The user can select a theme which will change the character / background / ground / enemy blocks 

const startGame = () => {

    const character = document.getElementById('character')
    const enemy_1 = document.getElementById('enemy_block_1')
    const enemy_2 = document.getElementById('enemy_block_2')

    const gamePlay = setInterval(() => {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
        const characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'))

        const enemy_1_left = parseInt(window.getComputedStyle(enemy_1).getPropertyValue('left'))
        const enemy_1_top = parseInt(window.getComputedStyle(enemy_1).getPropertyValue('top'))

        const enemy_2_bottom = parseInt(window.getComputedStyle(enemy_2).getPropertyValue('bottom'))

        character.style.top = characterTop + 3 + 'px'
        enemy_1.style.left = enemy_1_left - 3 + 'px'
        enemy_2.style.left = enemy_1_left - 3 + 'px'

        if ((characterBottom < 85) || ( ( enemy_1_left < 190 && enemy_1_left > 120 ) && ( ( ( (characterBottom + 35) > enemy_2_bottom ) || ( characterBottom < enemy_1_top  ) ) && (enemy_1_left < 189 ) ) )) {
            gameOver()
        }

        const jump = () => {
            if ( characterTop > 10) {
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
        console.log('Game over')
        clearInterval(gamePlay)
    }
}

startGame()
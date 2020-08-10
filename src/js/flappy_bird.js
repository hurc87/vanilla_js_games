// * The user can press a button to restart the game.
// * The user can select a theme which will change the character / background / ground / enemy blocks 

const startGame = () => {

    const character = document.getElementById('character')
    const enemy_1 = document.getElementById('enemy_block_1')
    const enemy_2 = document.getElementById('enemy_block_2')
    let score = 0

    const gamePlay = setInterval(() => {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
        const characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'))

        const enemy_1_left = parseInt(window.getComputedStyle(enemy_1).getPropertyValue('left'))
        let enemy_1_top = parseInt(window.getComputedStyle(enemy_1).getPropertyValue('top'))

        let enemy_2_bottom = parseInt(window.getComputedStyle(enemy_2).getPropertyValue('bottom'))

        character.style.top = characterTop + 3 + 'px'
        enemy_1.style.left = enemy_1_left - 3 + 'px'
        enemy_2.style.left = enemy_1_left - 3 + 'px'

        if ((characterBottom < 85) || ( ( enemy_1_left < 190 && enemy_1_left > 120 ) && ( ( ( (characterBottom + 35) > enemy_2_bottom ) || ( (characterTop + 35) > enemy_1_top  ) ) ) )) {
            gameOver()
        }

        // Moves enemy block back to the beginning if it passes successfully all the way to the left
        // also sets the enemy top / bottom variables to the latest version of the enemy block
        if (enemy_1_left < -40 ) {
            enemy_1.style.left = 600 + 'px'
            const heightGenerator = Math.floor(Math.random() * 251) -150

            enemy_1.style.top = 250 + heightGenerator
            enemy_2.style.top = -250 + heightGenerator

            enemy_2_bottom = parseInt(window.getComputedStyle(enemy_2).getPropertyValue('bottom'))
            enemy_1_top = parseInt(window.getComputedStyle(enemy_1).getPropertyValue('top'))

            score ++
            
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
        alert('Game Over! Your score is: ' + score + '! Refresh your page to play again')
        clearInterval(gamePlay)
    }
}

startGame()
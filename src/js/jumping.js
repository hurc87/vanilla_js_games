const character = document.getElementById('character')
const enemy = document.getElementById('enemy')

const jump = () => {
    if ( character.classList != 'animate' ) {
        character.classList.add('animate')
    }
    // allow animation to run then remove the class to stop the anitmation
    setTimeout(() => character.classList.remove('animate') , 500)
}

const gameOver = () => {
    setInterval(
        () => {
            const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
            const enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'))

            if ( enemyLeft < 20 && enemyLeft > 0 && characterTop >=180 ) {
                enemy.style.animation = 'none'
                alert('Game Over, refresh to restart the game')
            }

        }, 10
    )
}

document.addEventListener('keydown', (event) => {
    if ( event.which == 32 ) {
        jump()
    }
})

gameOver()
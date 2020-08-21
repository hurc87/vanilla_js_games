// * The hero character will shoot upwards repeatedly from the start of the game.
// * The enemy characters move left and right on their own.
// * When the enemy character gets to each edge it will drop down a row. 
// * If the user successfully shoots one of the enemy characters, they will disappear. 
// * If the user shoots all of the enemy characters - they win. 
// * If the enemy character gets to the bottom - the user loses. 

const hero = document.getElementById('hero')
const gameGrid = document.getElementById('game')

const moveLeft = () => {
    const currentSpace = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
    if (currentSpace > 0) {
        hero.style.left = currentSpace - 10 + 'px'
    }
}

const moveRight = () => {
    const currentSpace = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
    if (currentSpace < 471) {
        hero.style.left = currentSpace + 10 + 'px'
    }
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
        moveLeft()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        moveRight()
    }
})



const shoot = () => {

    const heroLeftLocation = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))

    const gunStartingPoint = heroLeftLocation + 9 + 'px'

    const shotFired = document.createElement('div')

    gameGrid.appendChild(shotFired)

    shotFired.setAttribute('class', 'shot')
    shotFired.setAttribute('id', '1')

    shotFired.style.left = gunStartingPoint


    function move() {
        var elem = document.getElementById("1");
        var top = 460;
        var id = setInterval(frame, 10);
        function frame() {
          if (top == -50) {
            clearInterval(id);
          } else {
            top--;
            elem.style.top = top;
          }
        }
      }

      move()

}


shoot()

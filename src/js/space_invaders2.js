const game_grid = document.getElementById('game')
let gameOver = true

const startGame = () => {

    // create divs

    var counter = 0

    while ( counter < 110) {
        var div = document.createElement('div')
        div.setAttribute('class', 'box')
        div.setAttribute('id', counter)
        var text = document.createTextNode(counter)
        div.appendChild(text)
        game_grid.appendChild(div)
        counter += 1
    }

    // create hero

    const createHero = document.getElementById(104)
    createHero.classList.add('hero')

    // Move hero left or right

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


    const moveLeft = () => {
        let heroId = parseInt(document.getElementsByClassName('hero')[0].id)
        if (heroId != 99) {
            document.getElementById(heroId).classList.remove('hero')
            document.getElementById(heroId - 1).classList.add('hero')
        }
    }

    const moveRight = () => {
        let heroId = parseInt(document.getElementsByClassName('hero')[0].id)
        if (heroId != 109) {
            document.getElementById(heroId).classList.remove('hero')
            document.getElementById(heroId + 1).classList.add('hero')
        }
    }

    // Fire a shot

    const fireAShot = () => {
        let startingPoint = parseInt(document.getElementsByClassName('hero')[0].id)
        // console.log(startingPoint, 'starting point')

        const shoot = () => {

            if (startingPoint > 0) {
                document.getElementById(startingPoint).classList.remove('shot')
                document.getElementById(startingPoint - 11).classList.add('shot')
                console.log(startingPoint, 'starting point 2')
                startingPoint = startingPoint - 11
            }
        }

        var shotDirection = setInterval(shoot, 100)

        if (startingPoint < 10) {
            clearInterval(shotDirection)
        }

    }

    var keepShooting = setInterval(fireAShot, 200)

    if (gameOver == true) {
        clearInterval(keepShooting)
    }

}

startGame()
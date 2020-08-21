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
        let shooterStartingPoint = startingPoint

        const shoot = () => {

            if (shooterStartingPoint > 0) {
                document.getElementById(shooterStartingPoint).classList.remove('shot')
                document.getElementById(shooterStartingPoint - 11).classList.add('shot')
                shooterStartingPoint = shooterStartingPoint - 11

                if (shooterStartingPoint < 11) {
                    clearInterval(shotDirection)
                    setTimeout(() => {
                        document.getElementById(shooterStartingPoint).classList.remove('shot')
                    }, 100)
                }
            }
        }
        var shotDirection = setInterval(shoot, 100)
    }

    var keepShooting = setInterval(fireAShot, 200)

    if (gameOver == true) {
        clearInterval(keepShooting)
    }

}

startGame()
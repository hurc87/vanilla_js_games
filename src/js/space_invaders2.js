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

    let enemyPosition1 = [1, 3, 5, 7, 9, 13, 15, 17, 19]
    let enemyPosition2 = enemyPosition1.map(item => { return item - 1 })
    let enemyPosition3 = enemyPosition2.map(item => { return item + 11 })
    let enemyPosition4 = enemyPosition3.map(item => { return item + 1 })
    let enemyPosition5 = enemyPosition4.map(item => { return item + 1 })
    let enemyPosition6 = enemyPosition5.map(item => { return item + 11 })
    let enemyPosition7 = enemyPosition6.map(item => { return item - 1 })
    let enemyPosition8 = enemyPosition7.map(item => { return item - 1 })
    let enemyPosition9 = enemyPosition8.map(item => { return item + 11 })
    let enemyPosition10 = enemyPosition9.map(item => { return item + 1 })
    let enemyPosition11 = enemyPosition10.map(item => { return item + 1 })
    let enemyPosition12 = enemyPosition11.map(item => { return item + 11 })
    let enemyPosition13 = enemyPosition12.map(item => { return item - 1 })
    let enemyPosition14 = enemyPosition13.map(item => { return item - 1 })
    let enemyPosition15 = enemyPosition14.map(item => { return item + 11 })
    let enemyPosition16 = enemyPosition15.map(item => { return item + 1 })
    let enemyPosition17 = enemyPosition16.map(item => { return item + 1 })

    let enemyPosition18 = enemyPosition17.map(item => { return item + 11 })
    let enemyPosition19 = enemyPosition18.map(item => { return item - 1 })
    let enemyPosition20 = enemyPosition19.map(item => { return item - 1 })

    let enemyPosition21 = enemyPosition20.map(item => { return item + 11 })
    let enemyPosition22 = enemyPosition21.map(item => { return item + 1 })
    let enemyPosition23 = enemyPosition22.map(item => { return item + 1 })
    let enemyPosition24 = enemyPosition23.map(item => { return item + 11 })

    const enemyMoves = [enemyPosition1, enemyPosition2, enemyPosition3, enemyPosition4, enemyPosition5, enemyPosition6, enemyPosition7, enemyPosition8, enemyPosition9, enemyPosition10, enemyPosition11, enemyPosition12, enemyPosition13, enemyPosition14, enemyPosition15, enemyPosition16, enemyPosition17, enemyPosition18, enemyPosition19, enemyPosition20, enemyPosition21, enemyPosition22, enemyPosition23, enemyPosition24]

    const moveEnemy = () => {

        // create enemy

        // first position

        const move = (num, num2, arr) => {

            enemyPosition1.forEach(element => {
                var el = document.getElementById(element)
                el.classList.add('enemy')
            })

            arr.forEach(x => {
                setTimeout(() => {
                    x.forEach(element => {
                        var el = document.getElementById(element)
                        el.classList.add('enemy')
                    })
                }, num)

                num = num + 500
            })

            arr.forEach(x => {
                setTimeout(() => {
                    x.forEach(element => {
                        var el = document.getElementById(element)
                        el.classList.remove('enemy')
                    })
                }, num2)

                num2 = num2 + 500
            })
        }

        move(0, 500, enemyMoves)

    }

    const checkArray = (arr, value) => {
        console.log(arr)
        arr = arr.filter((n) => {return n != value})
    }


    moveEnemy()

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

    const checkIfEnemyHasBeenShot = (el) => {
        if (el.classList.contains('shot') && el.classList.contains('enemy')) {
            el.classList.remove('enemy')
            enemyMoves.forEach(arr => {
                checkArray(arr, el)
            })
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

                checkIfEnemyHasBeenShot(document.getElementById(shooterStartingPoint))

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
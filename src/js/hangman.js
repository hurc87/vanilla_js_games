// * When a letter is selected the letter appears on the page.
// * When all the word is displayed through successful guesses the game is won.
// * A user can restart the game at any time.

const word = 'racecar'
let counter = 0
let all_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let correct_guesses = []

const word_container = document.getElementById('word_container')

const wordArray = word.toUpperCase().split('')

wordArray.forEach(element => {
    var div = document.createElement('div')
    div.setAttribute('class', 'word_template')
    word_container.appendChild(div)
})

const remove_all_children = () => {
    while (word_container.firstChild) {
        word_container.firstChild.remove();
    }
}

const display_word = () => {
    remove_all_children()
    wordArray.forEach(element => {
        var div = document.createElement('div')
        div.setAttribute('class', 'correct_guess')
        var text = document.createTextNode(element)
        div.appendChild(text)
        word_container.appendChild(div)
        // div.style.visibility = 'hidden'
    })
}

const display_correct_guess = (letter) => {
    correct_guesses.push(letter)
    console.log(find_index_of_correct_guess(letter))
    var arr = find_index_of_correct_guess(letter)
    arr.forEach(el => {
        var div = document.getElementById('word_container').childNodes[el]
        var text = document.createTextNode(letter)
        div.appendChild(text)
    })
}

const find_index_of_correct_guess = (letter) => {
    var indices = []
    var idx = wordArray.indexOf(letter)
        while (idx != -1) {
        indices.push(idx);
        idx = wordArray.indexOf(letter, idx + 1)
    }
    return indices
}

const remove_letter = (letter) => {
    all_letters = all_letters.filter((n) => {return n != letter})
    disableButton(letter)
}

const disableButton = (letter) => {
    document.getElementById(letter).disabled = true
}

const guess = ( letter ) => {
    remove_letter(letter)
    if ( wordArray.includes(letter) ) {
        console.log(letter, '- is in the word')
        display_correct_guess(letter)
    }
    else {
        wrongGuess()
    }
}

const wrongGuess = () => {
    counter += 1  
    const hangman_container = document.getElementById('hangman_container')
    
    switch (true) {
        case counter == 1:
            hangman_container.style.backgroundImage = 'url("./images/hangman_1.png")'
            break;
        case counter == 2:
            hangman_container.style.backgroundImage = 'url("./images/hangman_2.png")'
            break;
        case counter == 3:
            hangman_container.style.backgroundImage = 'url("./images/hangman_3.png")'
            break;
        case counter == 4:
            hangman_container.style.backgroundImage = 'url("./images/hangman_4.png")'
            break;
        case counter == 5:
            hangman_container.style.backgroundImage = 'url("./images/hangman_5.png")'
            break;
        case counter == 6:
            hangman_container.style.backgroundImage = 'url("./images/hangman_6.png")'
            break;
        case counter == 7:
            hangman_container.style.backgroundImage = 'url("./images/hangman_7.png")'
            break;
        case counter == 8:
            hangman_container.style.backgroundImage = 'url("./images/hangman_8.png")'
            break;
        default:
            hangman_container.style.backgroundImage = 'url("./images/hangman_9.png")'
            all_letters.forEach(letter => {
                document.getElementById(letter).disabled = true
            })
            display_word()
            break;
    }
}
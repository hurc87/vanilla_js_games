// * A word is displayed as a selection of lines, one line for each letter.
// * When a letter is selected the letter appears on the page.
// * When a letter is selected it is greyed out so it cannot be pressed again.
// * When a letter is selected but incorrect a hangman image will appear on the page.
// * When all the hangman is displayed the game is over and the word is displayed.
// * When all the word is displayed through successful guesses the game is won.
// * A user can restart the game at any time.

const A = document.getElementById('A')
A.disabled = true
# vanilla_js_games

## The Jumping Game
The character has to jump over enemy blocks moving towards it. The v1 version of the game, along with learning notes can be found at the following [repo](https://github.com/hurc87/jumping_game).

## Flappy Bird

The character has to jump through a gap created by two enemy blocks coming towards it. The character has gravity applied to it but is not allowed to contact the floor.

Learning notes can be found using the following two links which were created using two different tutorials.
[Flappy bird v1](https://github.com/hurc87/flappy_bird)
[Flappy bird v2](https://github.com/hurc87/flappy_bird_v2)

### Breaking the game down into steps / user stories
* There is a main character in the game who can jump but also has gravity applied to it.
* The character is not allowed to touch the ground or the game is over. 
* There are enemy blocks which move towards the character.
* The enemy blocks change height each time they pass.
* The character is not allowed to touch the enemy blocks.
* The character scores a point for each successful time they manage to jump through the enemy blocks. 
* The game must finish and animations stop if the character hits either the block or ground with the score being displayed with a 'game over' message. 
* The user can press a button to restart the game.
* The user can select a theme which will change the character / background / ground / enemy blocks 

## Hangman

The user has to guess a word by selecting letters which may or may not be in the word. If a wrong letter is selected then an image on the hangman will be displayed, if all the hangman image is displayed the user loses the game. After each successful guess a letter will appear as it would in the word, if the user guess all the letters correctly, they win! 

### Breaking down into steps / user stories
* All the letters of the alphabet are represented as buttons.
* A word is displayed as a selection of lines, one line for each letter.
* When a letter is selected the letter appears on the page.
* When a letter is selected it is greyed out so it cannot be pressed again.
* When a letter is selected but incorrect a hangman image will appear on the page.
* When all the hangman is displayed the game is over and the word is displayed.
* When all the word is displayed through successful guesses the game is won.
* A user can restart the game at any time.

## Space Invaders

The user plays a hero character which can move left or right and shoots upwards towards the approaching enemy. The enemy characters move left to right, then down a row until they reach the bottom. If they reach the bottom the game is over and the user loses, however if the hero shoots all enemy characters the user wins. 

### Breaking down into steps / user stories
* The hero character can move left or right dependant on the direction the user selects.
* The hero character will shoot upwards repeatedly from the start of the game.
* The enemy characters move left and right on their own.
* When the enemy character gets to each edge it will drop down a row. 
* If the user successfully shoots one of the enemy characters, they will disappear. 
* If the user shoots all of the enemy characters - they win. 
* If the enemy character gets to the bottom - the user loses. 
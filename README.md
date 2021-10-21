# Welcome to BLACKJACK

# Rules:

  The rules are simple. 21 is the magic number and you're competing against the dealer to get closest to 21 without going over. Going over will warrant an instant loss.

  1. The player and the dealer will receive 2 cards. However, you will only be able to see 1 of the dealer cards. From here you can decide to Hit or Stand.
     - All cards hold values. Suits don't hold any value which makes things simpler. Below are the values
         - 2 = 2
         -  3 = 3
         - 4 = 4
         - 5 = 5
         - 6 = 6
         - 7 = 7
         - 8 = 8
         - 9 = 9
         - 10 = 10
         - J = 10
         - Q = 10
         - K = 10
         - A = 1 or 11 
   - Notice that an Ace can hold 2 card values.  By default, an Ace = 11. If however you hit a card and your 2 cards in your hand makes you go over 21, you can convert that Ace value from an 11 to a 1 to prevent you from going over 21. 
     - Example: You receive an Ace + 4
          - Your score is 11 + 4 = 15

          - You decide to hit. You receive a K
              - OH NO! Your score is 25 (11 + 4 + 10) going over 21
              - BUT WAIT! You can change your Ace value to a 1 making a total of 15 (1 + 4 + 10)
        - Keep in mind, if you have multiple Aces in your hand, you can convert them from 11 to 1 (or vice versa) at anytime
- Getting 21 is called blackjack. If you get blackjack, don't think you've instantly won. The dealer still has an opportunity to match albeit, very difficult
    -  Going back to the first point, once dealt your cards, you have a choice to Hit or Stand
       - Hit: Asking for another card to be dealt to you. You can draw however many times as you like. Keep in mind, the goal is to reach 21 without going over. 
          i. Going over 21 is called a Bust. It's like putting too much air in a balloon. Put in too much, it'll bust. 
       - Stand: Once you decide to stand, you can't Hit any more. This allows the dealer to reveal its 2nd card to see its total. The dealer will have one main objective at this point. To beat your score (or at least match). 
2. Generally, and for the sake of this particular game, that's it for the rules. 


# GAME DESCRIPTION: 
  1. The main screen will have no cards on the table.
  2. Main screen will offer player to start game by hitting the "DEAL" button. 
  3. The "DEAL" button will initialize the game to start
  4. The player will receive 2 cards however you will only be able to see the dealer's 1st card
  5. The sum of the 2 cards for the dealer and player will appear 
  6. The player has a choice of either "HIT" or "STAY"
  7. "HIT" button allows the player to be dealt one more card
  8. "STAND" button will initiate the dealer to do their thing
  9. Once a winner/loser has been determined an option to "Play Again?" will appear

# WIN/LOSE:
- There are multiple WIN and LOSE conditions that can occur

1. WIN CONDITIONS:
   - A "YOU WIN!" message will appear if you meet the win conditions 
   - If player total > dealer total upon 1st hand
   - If player total > dealer total upon hits
   - If dealer busts

2. LOSE CONDITIONS:
   - A "YOU LOSE!" message will appear if you meet the lose conditions 
   - If player total < dealer total upon 1st hand
   - If player total < dealer total upon hits
   - If player busts

3. TIE CONDITIONS:
   - A "YOU TIED!" message will appear if you meet the tie conditions
   - If player total === dealer total upon 1st hand
   - If player total === dealer total upon hits

# Features:
- The HOME button icon in the top left corner will allow the player to bring the game back to the original game state
- A LIGHT/DARK mode toggle switch can be accessed in the top left corner for those late night blackjack sessions
- DOM manipulation to dynamically add card images to screen, change win/lose message and made buttons hidden/appear

# Technologies Used:
- HTML
- CSS
- JavaScript
- Bootstrap

# Icebox Items:
  This is a card game that can be playable in mobile and browser. This is still a work in progress and future iterations will work out further bugs and add additional features that include, but not limited to
  1. Betting
  2. Enhanced animations
  3. Sound Effects
  4. Visual / game play experience
  5. UI
  6. Expand


<img src="">Link to wire frames
https://whimsical.com/blackjack-DtJYkmbGWKHaLwub2DWSCF
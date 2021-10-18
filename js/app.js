/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
// Declare deck variables
let dealerDeck = []
let playerHand = []
let dealerHand = []
let playerCount = 0
let dealerInitialCount = 0
let dealerFinalCount = 0
let dealCard = 0
let playerAce = 0
let dealerAce = 0
let pHandVal = [] 
let dHandVal = [] 
/*------------------------ Cached Element References ------------------------*/
// Cached element references
let lightDarkBtn = document.getElementById('lightDarkBtn')
let homeBtn = document.getElementById('homeBtn')
let dealBtn = document.getElementById('dealBtn')
let playAgainBtn = document.getElementById('playAgainBtn')
let hitBtn = document.getElementById('hitBtn')
let standBtn = document.getElementById('standBtn')
let messageEl = document.getElementById('message')
let pCard1 = document.getElementById('pCard1')
let pCard2 = document.getElementById('pCard2')
let dCard1 = document.getElementById('dCard1')
let Card2 = document.getElementById('dCard2')
let pTotalEl = document.getElementById('pTotal')
let dTotalEl = document.getElementById('dTotal')



/*----------------------------- Event Listeners -----------------------------*/
// Event listeners
document.getElementById('homeBtn').addEventListener('click', home)

document.getElementById('dealBtn').addEventListener('click', gameStart)


document.getElementById('playAgainBtn').addEventListener('click', gameStart)

document.getElementById('hitBtn').addEventListener('click', hitMe)

document.getElementById('standBtn').addEventListener('click', stand)


document.getElementById('lightDarkBtn').addEventListener('click', () => {
console.log('light/dark button works')
})

/*-------------------------------- Functions --------------------------------*/
//When PLAY button is clicked, everything is reset and cards are dealt. 
function gameStart(){
    messageEl.innerText = ""
    pTotalEl.innerText = ""
    dTotalEl.innerText = ""
    playAgainBtn.setAttribute("hidden", true)
    dealBtn.setAttribute("hidden", true)
    hitBtn.removeAttribute("hidden", true)
    standBtn.removeAttribute("hidden", true)
  
  // Empty player and dealer hands
  if (playerHand.length > 0){
    playerHand.splice(0, playerHand.length)
    dealerHand.splice(0, dealerHand.length)
  }
  pInitialDeal()
  dInitialDeal()
  }

  // Deal out initial cards to player
function pInitialDeal(){
  for (let i=0; i<2; i++){ //loops 2 times to deal out 2 cards
    dealCard = getRandomCard() //get 1 random card
    playerHand.push(dealerDeck[dealCard]) //pushes random card to dealer hand.
    dealerDeck.splice(dealCard, 1) // remove random card from the deck
}
  playerHandCount()
}

// Deal out initial cards to dealer
function dInitialDeal(){
  for (let i=0; i<2; i++){ //loops 2 times to deal out 2 cards
    dealCard = getRandomCard() //get 1 random card
    dealerHand.push(dealerDeck[dealCard]) //pushes random card to dealer hand.
    dealerDeck.splice(dealCard, 1) // remove random card from the deck
}
dealerHandCount()
}


// get random card from dealerDeck
function getRandomCard() {
  dealerDeck.push( 
    "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
    "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
    "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
    "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02")
  let randomCard = Math.floor(Math.random() * dealerDeck.length)
  return randomCard
}

// Get total of player hand
function playerHandCount(){
  playerCount = 0 // makes player count 0
  playerAce = 0 // makes player aces count 0
  pHandVal.splice(0, pHandVal.length) //empty's player hand value
  for (i=0; i<playerHand.length; i++) { // so it can find the number of aces in hand
    let value = playerHand[i].slice(-1); if (value === "A"){ //looks at index 1 to see if the value is an "A"
      playerAce++ // adds how many aces you have
    } 
    else{ 
      pHandVal.push(value) 
    } 
  }
  for (i=0; i<(pHandVal.length); i++) { // loops through hand to see if you're holding any 10's or face cards
    let value = pHandVal[i] // saves the current card value to the varible 'value'
    if (value === "0" || value === "J" || value === "Q" || value === "K") { // Assigns 10 to these values
        playerCount += 10 // add 10 to hand count
    } 
    else{ 
        playerCount += parseInt(value) // converts the other values to a number
      } 
      if (playerAce > 0) { 
        if ((playerCount + 11 + (playerAce - 1)) > 21){ // If one of the aces (if more than 1) being 11 will put the total over 21
            playerCount += playerAce //if it does, only add playerCount to the number of aces in hand.
          }
          else{ // if the ace being 11 doesn't got over 21, add 11 plus the number of aces minus 1 (the one you made 11)
            playerCount += 11 + (playerAce - 1)
          }
      }
      if (playerCount > 21){
        playAgainBtn.removeAttribute("hidden", true)
        messageEl.innerText = `BUST! You Lose!`
        pTotalEl.innerText = `Total: ${playerCount}`
        return
      }
    }
    console.log(`player`, playerHand, playerCount)
    pTotalEl.innerText = `Total: ${playerCount}` 
    
  }

  //  Get total of dealer hand
  function dealerHandCount(){
    dealerFinalCount = 0
    dealerAce = 0
    dHandVal.splice(0, dHandVal.length)
    for (i=0; i<dealerHand.length; i++) {
      let value = dealerHand[i].slice(-1); if (value === "A"){
        dealerAce++
      } 
      else{ 
        dHandVal.push(value) 
      } 
    }
    
    for (i=0; i<(dHandVal.length); i++) { 
      let value = dHandVal[i] 
      if (value === "0" || value === "J" || value === "Q" || value === "K") {
          dealerFinalCount += 10 
      } 
      else { 
          dealerFinalCount += parseInt(value) 
      }
      if (dealerAce > 0) { 
        if ((dealerFinalCount + 11 + (dealerAce - 1)) > 21){ // Check to see if one of the aces (more than 1) being 11 will put the total over 21
            dealerFinalCount += dealerAce //if it does, only add the total number of aces to the total
        }
        else{ // if the ace being 11 doesn't got over 21, add 11 plus the number of aces minus 1 (the one you made 11)
          dealerFinalCount += 11 + (dealerAce - 1)
        }
      }
        if (dealerFinalCount > 21){
        playAgainBtn.removeAttribute("hidden", true)
        messageEl.innerText = `Dealer BUST! You Win!`
        dTotalEl.innerText = `Total: ${dealerFinalCount}`
        return
      }
    }
    console.log(`dealer`, dealerHand, dealerFinalCount)
    dTotalEl.innerText = `Total: ${dealerFinalCount}`
  }

// Pushes randomCard into players hand and removes card of dealerDeck
function hitMe(){
  randomCard = getRandomCard()
  playerHand.push(dealerDeck[randomCard])
  dealerDeck.splice(randomCard, 1)
  playerHandCount()
}


// If dealer is < player, draw card
function stand(){
    if (dealerFinalCount < playerCount){
      randomCard = getRandomCard()
      dealerHand.push(dealerDeck[randomCard])
      dealerDeck.splice(randomCard, 1)
    }
    else{
      endRound = true
    }
    dealerHandCount()
    compareHands()
    playAgainBtn.removeAttribute("hidden", true)
  }

// Determines if you're a winner, loser or tie game. 
function compareHands(){
    console.log(playerCount, dealerFinalCount)
    if (playerCount > dealerFinalCount){
      messageEl.innerHTML = `You Win!`
      playAgainBtn.remove("hidden", true)
      return
    } 
    else if (playerCount < dealerFinalCount){
      messageEl.innerHTML = `You Lose!`
      playAgainBtn.remove("hidden", true)
      return
    }
    else if (playerCount === dealerFinalCount){
      messageEl.innerHTML = `It's a Tie!`
      playAgainBtn.remove("hidden", true)
      return
    }
    
  }

function home(){
  window.location.reload()
}
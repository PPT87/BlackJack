/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
// Declare deck variables
let dealerDeck = []
let playerHand = []
let dealerHand = []
let playerCount = 0
let dealerInitialCount = 0
let dealerFinalCount = 0
let dealerTurn = false
let endRound = true
let dealCard = 0
let message = ''
let playerAce = 0
let dealerAce = 0
let pHandVal = [] 
let dHandVal = [] 
/*------------------------ Cached Element References ------------------------*/
// Cached element references
let homeBtn = document.getElementById('homeBtn')
let lightDarkBtn = document.getElementById('lightDarkBtn')
let dealerDeckEl = document.getElementById('dealerDeck')
let deck1El = document.getElementById('deck1')
let deck2El = document.getElementById('deck2')
let deck3El = document.getElementById('deck3')
let deck4El = document.getElementById('deck4')
let playBtn = document.getElementById('playBtn')
let playAgainBtn = document.getElementById('playAgainBtn')
let hitBtn = document.getElementById('hitBtn')
let standBtn = document.getElementById('standBtn')
let messageEl = document.getElementById('message')

playBtn.setAttribute("hidden", false)
hitBtn.setAttribute("hidden", true)
standBtn.setAttribute("hidden", true)
playAgainBtn.setAttribute("hidden", true)


/*----------------------------- Event Listeners -----------------------------*/
// Event listeners
document.getElementById('hitBtn').addEventListener('click', () => {
  console.log('hit button works')
})

document.getElementById('playAgainBtn').addEventListener('click', () => {
  console.log('play again button works')
})

document.getElementById('standBtn').addEventListener('click', () => {
  console.log('stand button works')
})
document.getElementById('homeBtn').addEventListener('click', () => { 
console.log('home button works')
})
document.getElementById('lightDarkBtn').addEventListener('click', () => {
console.log('light/dark button works')
})

document.getElementById('playBtn').addEventListener('click', () => {
  console.log('play button works')
  })

/*-------------------------------- Functions --------------------------------*/
gameStart()

//When PLAY button is clicked, everything is reset and cards are dealt. 
function gameStart(){
  if (endRound === true){
    dealerTurn = false
    endRound = false
    playBtn.setAttribute("hidden", true)
    playAgainBtn.setAttribute("hidden", true)

  }
  // Empty player and dealer hands
  if (playerHand.length > 0){
    playerHand.splice(0, playerHand.length)
    dealerHand.splice(0, dealerHand.length)
  }
  // Deal out initial cards.
  for (let i=0; i<2; i++){ //loops 2 times to deal out 2 cards
    dealCard = getRandomCard() // get 1 random card
    playerHand.push(dealerDeck[dealCard]) // push random card to player hand. 
    dealerDeck.splice(dealCard, 1)// remove random card from the deck
    dealCard = getRandomCard() //get 1 random card
    dealerHand.push(dealerDeck[dealCard]) //pushes random card to dealer hand.
    dealerDeck.splice(dealCard, 1) // remove random card from the deck
  }
  //render()// displays deal and sums to Player and Dealer
}

// get random card from dealerDeck
function getRandomCard() {
  dealerDeck.push( 
          "dA","dQ","dK","dJ","d10","d9","d8","d7","d6","d5","d4","d3","d2",
          "hA","hQ","hK","hJ","h10","h9","h8","h7","h6","h5","h4","h3","h2",
          "cA","cQ","cK","cJ","c10","c9","c8","c7","c6","c5","c4","c3","c2",
          "sA","sQ","sK","sJ","s10","s9","s8","s7","s6","s5","s4","s3","s2")
  let randomCard = Math.floor(Math.random() * dealerDeck.length)
  return randomCard
}

function playerHandCount(){
  playerCount = 0
  playerAce = 0
  pHandVal.splice(0, pHandVal.length)
  for (i=0; i<playerHand.length; i++) 
    { let value = playerHand[i].charAt(0); if (value === "A") { pHandAces++ } else { pHandVal.push(value) 
    } 
  }
  for (i=0; i<(pHandVal.length); i++) { 
    let value = pHandVal[i] 
    if (value === "1" || value === "J" || value === "Q" || value === "K") {
        playerSum += 10 
    } else { 
        playerSum += parseInt(value) 
    }
}
if (pHandAces > 0) { //If there is an ace in the hand, run this logic
  if ((playerCount + 11 + (pHandAces-1))>21){ 
      playerCount += pHandAces 
      playerCount += 11 + (pHandAces-1)
  }
}
  }

  function dealerHandCount(){
    dealerFinalCount = 0
    dealerAce = 0
    dHandVal.splice(0, dHandVal.length)
    for (i=0; i<dHandVal.length; i++) 
      { let value = dHandVal[i].charAt(0); if (value === "A") { dealerAce++ } else { dHandVal.push(value) 
      } 
    }
    for (i=0; i<(dHandVal.length); i++) { 
      let value = dHandVal[i] 
      if (value === "1" || value === "J" || value === "Q" || value === "K") {
          dealerFinalCount += 10 
      } else { 
          dealerFinalCount += parseInt(value) 
      }
  }
  if (dHandAces > 0) { //If there is an ace in the hand, run this logic
    if ((dealerFinalCount + 11 + (dHandAces-1))>21){ 
        dealerFinalCount += dHandAces 
        dealerFinalCount += 11 + (dHandAces-1)
    }
  }
    }
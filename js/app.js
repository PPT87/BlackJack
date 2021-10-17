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
let lightDarkBtn = document.getElementById('lightDarkBtn')
let playBtn = document.getElementById('playBtn')
let playAgainBtn = document.getElementById('playAgainBtn')
let hitBtn = document.getElementById('hitBtn')
let standBtn = document.getElementById('standBtn')
let messageEl = document.getElementById('message')
let playerCardsEl = document.getElementById('userCard0')
let dealerCardsEl = document.getElementById('dealerCards')


/*----------------------------- Event Listeners -----------------------------*/
// Event listeners
document.getElementById('hitBtn').addEventListener('click', hitMe)

document.getElementById('playAgainBtn').addEventListener('click', gameStart)

document.getElementById('standBtn').addEventListener('click', stand)

document.getElementById('lightDarkBtn').addEventListener('click', () => {
console.log('light/dark button works')
})

/*-------------------------------- Functions --------------------------------*/
//gameStart()

//When PLAY button is clicked, everything is reset and cards are dealt. 
function gameStart(){
  if (endRound === true){
    dealerTurn = false
    endRound = false
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
  playerHandCount()
  dealerHandCount()
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
  playerAceInHand()
  playerCount = 0
  playerAce = 0
  pHandVal.splice(0, pHandVal.length)
  for (i=0; i<playerHand.length; i++) {
    let value = playerHand[i].charAt(1); if (value === "A"){
      playerAce++
    } 
    else{ 
      pHandVal.push(value) 
    } 
  }

  for (i=0; i<(pHandVal.length); i++) { 
    let value = pHandVal[i] 
    if (value === "1" || value === "J" || value === "Q" || value === "K") {
        playerCount += 10 
    } else { 
        playerCount += parseInt(value) 
    } 
}
 
console.log('playerhand', playerHand)
console.log('playercount',playerCount)
  }

  function playerAceInHand(){//If there is an ace in the hand
    if (playerAce > 0) { 
      if ((playerCount + 11 + (playerAce-1))>21){ 
          playerCount += playerAce 
          playerCount += 11 + (playerAce-1)
      }
  }
  }

  function dealerHandCount(){
    dealerAceInHand()
    dealerFinalCount = 0
    dealerAce = 0
    dHandVal.splice(0, dHandVal.length)
    for (i=0; i<dealerHand.length; i++) {
      let value = dealerHand[i].charAt(1); if (value === "A"){
        dealerAce++
      } 
      else{ 
        dHandVal.push(value) 
      } 
    }
    
    for (i=0; i<(dHandVal.length); i++) { 
      let value = dHandVal[i] 
      if (value === "1" || value === "J" || value === "Q" || value === "K") {
          dealerFinalCount += 10 
      } 
      else { 
          dealerFinalCount += parseInt(value) 
      } 
  }
  console.log('dealerhand', dealerHand)
  console.log('dealercount',dealerFinalCount)
    }
  
    function dealerAceInHand(){//If there is an ace in the hand
      if (dealerAce > 0) { 
        if ((dealerFinalCount + 11 + (playerAce-1))>21){ 
            dealerFinalCount += dealerAce 
            dealerFinalCount += 11 + (dealerAce-1)
        }
    }
    }

function hitMe(){
  if (endRound === false){
    randomCard = getRandomCard()
    playerHand.push(dealerDeck[randomCard])
    dealerDeck.splice(randomCard, 1)
  }
  playerHandCount()
  console.log('playerhithand', playerHand, playerCount)
}

function stand(){
  if (endRound === false){
    dealerTurn = true
    if (dealerFinalCount < 16){
      randomCard = getRandomCard()
      dealerHand.push(dealerDeck[randomCard])
      dealerDeck.splice(randomCard, 1)
    }
    else{
      endRound = true
    } console.log(`standfunction`, dealerHand)
  }
dealerHandCount()
console.log(`finalstand`, dealerHand, dealerFinalCount)
}
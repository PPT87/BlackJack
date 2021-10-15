/*-------------------------------- Constants --------------------------------*/
const fullDeck = [
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
  "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
  "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
  "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"
]



/*-------------------------------- Variables --------------------------------*/
let playerHand, playerCount, dealerHand, dealerCount, deck, winner,turn


/*------------------------ Cached Element References ------------------------*/
const hitButton = document.querySelector("#hitBtn")
const standButton = document.querySelector("#standBtn")
const dealButton   = document.querySelector("#dealBtn")
const homeButton = document.querySelector("#homeBtn")


/*----------------------------- Event Listeners -----------------------------*/
hitButton.addEventListener("click", () => {
  console.log('Hit button is working')
})

standButton.addEventListener("click", () => {
  console.log('Stand button is working')
})

dealButton.addEventListener("click", () => {
  console.log('Deal button is working')
})

homeButton.addEventListener("click", () => {
  console.log('Home button is working')
})

/*-------------------------------- Functions --------------------------------*/
function init(){
  playerHand = [],
  dealerHand = [],
  playerCount = 0,
  dealerCount = 0,
  winner = false,
  deck =[]
}

//Generate random card
function shuffleDeck(){
  let randomCard = Math.floor(fullDeck.length * Math.random())
  return fullDeck[randomCard]
}

//Deals 2 random cards to the playerHand and dealerHand
function dealCards(){
  playerHand = [shuffleDeck(fullDeck), shuffleDeck(fullDeck)]
  dealerHand = [shuffleDeck(fullDeck), shuffleDeck(fullDeck)]
}
dealCards()
console.log(`Player Hand: ${playerHand}`)
console.log(`Dealer Hand: ${dealerHand}`)

//Need to convert deck elements to numbers
function handCount(){
  for (let i=0; i<playerHand.length; i++){
    playerCount += playerHand[i]
  }
    for (let j=0; j<dealerHand.length; j++){
      dealerCount += dealerHand[j]
    }
}
handCount()
console.log(`Your Total: ${playerCount}`)
console.log(`Dealer Total: ${dealerCount}`)

function isWinner(){
  
}





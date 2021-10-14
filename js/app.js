/*-------------------------------- Constants --------------------------------*/
const fullDeck = [
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
  "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
  "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
  "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"
]
// const fullDeck = [
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
// ]


/*-------------------------------- Variables --------------------------------*/
let playerHand, playerCount, dealerHand, dealerCount, deck, winner,turn, loser


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
  loser = false

}


function render(){

}

function isWinner(){

}

function isLoser(){

}

function shuffleDeck(fullDeck){
  let randomCard = Math.floor(fullDeck.length * Math.random())
  return fullDeck[randomCard]

}
console.log(shuffleDeck(fullDeck))
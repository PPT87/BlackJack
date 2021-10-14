/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let playerHand, playerCount, dealerHand, dealerCount, deck, winner,turn, 


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
  winner = false
}


function render(){

}

function getWinner(){

}
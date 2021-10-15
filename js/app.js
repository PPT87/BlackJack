/*-------------------------------- Constants --------------------------------*/
fullDeck =[
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
  "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
  "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
  "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"
]



/*-------------------------------- Variables --------------------------------*/
// Declare deck variables
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let deckD = []
let playerHand = []
let dealerHand = []
let playerCount = 0
let dealerCount = 0
/*------------------------ Cached Element References ------------------------*/
// Cached element references
let deckDEl = document.getElementById('deckD')
let deck1El = document.getElementById('deck1')
let deck2El = document.getElementById('deck2')
let deck3El = document.getElementById('deck3')
let deck4El = document.getElementById('deck4')
let homeBtn = document.getElementById('homeBtn')
let lightDarkBtn = document.getElementById('lightDarkBtn')
let dealBtn = document.getElementById('dealBtn')
let hitBtn = document.getElementById('hitBtn')
let standBtn = document.getElementById('standBtn')


/*----------------------------- Event Listeners -----------------------------*/
// Event listeners
document.getElementById('dealBtn').addEventListener('click', hit)

document.getElementById('hitBtn').addEventListener('click', () => {
console.log('hit button works')
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



/*-------------------------------- Functions --------------------------------*/
// Functions
init()

function init(){
  // Initialize deck 1 with array of 52 cards 
  deckD =[
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
  "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
  "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
  "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"
]}

// need a function to assign values to each index of the array
// A = 1 or 11




function hit(){
  // Function to handle a button click:
  if(deckD.length > 0){
    // Randomly select number (to be used as our index) from total cards remaining
    let randCard = Math.floor(Math.random() * deckD.length)
    console.log(randCard)
    // Assign card with the random index to a variable
    let cardPicked = deckD.splice(randCard, 1)
    // Add card picked to deck 1
    deck2.push(cardPicked)
    
    // Pass card picked to render function to display
    render(cardPicked)
    console.log('deckD', deckD.length)
    console.log("deck2", deck2.length)
  }
}

function render(cardPicked) {
  // Removes outline class when first card is placed
  if (deck1.length === 1 || deck2.length === 1|| deck3.length === 1|| deck4.length === 1) {  
    deck1El.classList.remove("outline")
    deck2El.classList.remove("outline")
    deck3El.classList.remove("outline")
    deck4El.classList.remove("outline")
  }

	// Remove previous picked card from deck 2 class list
  if (deck1.length > 1 || deck2.length > 1 || deck3.length > 1 || deck4.length > 1) {  
    deck1El.classList.remove(cardToRemove)
    deck2El.classList.remove(cardToRemove)
    deck3El.classList.remove(cardToRemove)
    deck4El.classList.remove(cardToRemove)
  }

	// Set card to be removed on next click
  cardToRemove = cardPicked  

	// Add current card picked to deck array
  deck1El.classList.add(cardPicked)
  deck2El.classList.add(cardPicked)  
  deck3El.classList.add(cardPicked)
  deck4El.classList.add(cardPicked)

  // Remove card back color and add outline when last card of dealerD is picked
  if (deckD.length === 0) {  
    deckDEl.classList.remove("back-red");
    deckDEl.classList.add("outline");
  }
}






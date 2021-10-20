/*-------------------------------- Constants --------------------------------*/
const switchTheme = document.querySelector("#switch");

const dealerDeck =[  
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
  "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
  "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
  "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

/*-------------------------------- Variables --------------------------------*/
let playerHand = []
let dealerHand = []
let playerSum = 0
let dealerSum = 0
let playerAces = 0
let dealerAces = 0
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
let playerCardsEl = document.getElementById('playerCards')
let pCardEl = document.getElementById('pCardEl')
let dCardEl = document.getElementById('dCardEl')
let pTotalEl = document.getElementById('pTotal')
let dTotalEl = document.getElementById('dTotal')

/*----------------------------- Event Listeners -----------------------------*/
// Event listeners
document.getElementById('homeBtn').addEventListener('click', home)
document.getElementById('dealBtn').addEventListener('click', init)
document.getElementById('playAgainBtn').addEventListener('click', init)
document.getElementById('hitBtn').addEventListener('click', hitMe)
document.getElementById('standBtn').addEventListener('click', stand)
document.getElementById('lightDarkBtn').addEventListener('click', lightDark)

/*-------------------------------- Functions --------------------------------*/
function init(){
  messageEl.innerText = ""
  pTotalEl.innerText = ""
  dTotalEl.innerText = ""
  playerHand = []
  dealerHand = []
  pCardEl.innerHTML = ""
  dCardEl.innerHTML = ""
  playerSum = 0
  dealerSum = 0
  playerAces = 0
  dealerAces = 0
  pHandVal = [] 
  dHandVal = []

  playAgainBtn.setAttribute("hidden", true)
  dealBtn.setAttribute("hidden", true)  
  hitBtn.removeAttribute("hidden", true)
  standBtn.removeAttribute("hidden", true)
  gameStart()
  console.log(playerHand)
}

function gameStart(){
  hitMe()
  hitMe()
  dealerHit()
  dealerHit()
}

function pRandomCard(){// Flippin' awesome code. This grabs a random card from the deck
  let randIdx = Math.floor(Math.random() * dealerDeck.length)
  let randomCard = dealerDeck.splice(randIdx, 1)
  playerHand.push(randomCard)
  playerSum += getPlayerSum()
  pTotalEl.innerHTML = `Player Total: ${playerSum}`
  console.log(`player`, playerHand, playerSum)
  return randomCard
}

// Deal out initial cards to dealer
function dRandomCard(){// Flippin' awesome code. This grabs a random card from the deck
  let randIdx = Math.floor(Math.random() * dealerDeck.length)
  let randomCard = dealerDeck.splice(randIdx, 1)
  dealerHand.push(randomCard)
  dealerSum += getDealerSum()
  dTotalEl.innerHTML = `Dealer Total: ${dealerSum}`
  console.log(`dealer`, dealerHand, dealerSum)
  return randomCard
} 

function getPlayerSum(){
  let value = playerHand[playerHand.length - 1].toString()
  let endValue = value.slice(-1)
  if (endValue === "0" || endValue === "J" || endValue === "Q" || endValue === "K"){
    return 10
  }
  else if(endValue === "A"){
    return checkPlayerAces()
  }
  else{
    return parseInt(endValue)
  }
}

function getDealerSum(){
  let value = dealerHand[dealerHand.length - 1].toString()
  let endValue = value.slice(-1)
  if (endValue === "0" || endValue === "J" || endValue === "Q" || endValue === "K"){
    return 10
  }
  else if(endValue === "A"){
    return checkDealerAces()
  }
  else{
    return parseInt(endValue)
  }
}

function checkPlayerAces(){
  if(playerSum + 11 > 21){
    return 1
  }
  else{
    // playerAces = 1
    return 11
  }
}

function checkDealerAces(){
  if(dealerSum + 11 > 21){
    return 1
  }
  else{
    dealerAces = 1
    return 11
  }
}

// Draws 1 random card and recalculates total. If over 21, you lose
function hitMe(){
  const newDiv = document.createElement('div');
  newDiv.className = "card large"
  pCardEl.appendChild(newDiv)
  newDiv.classList.add(pRandomCard())
  if(playerSum > 21){
    messageEl.innerHTML = `BUST! You Lose!`
    playAgainBtn.removeAttribute("hidden", true)
    hitBtn.setAttribute("hidden", true)
    standBtn.setAttribute("hidden", true)
    getPlayerSum()
    return
  }
}

// Daws 1 random card for dealer
function dealerHit(){
  const newDiv = document.createElement('div');
  newDiv.className = "card large"
  dCardEl.appendChild(newDiv)
  newDiv.classList.add(dRandomCard())
  console.log(`newdiv`)
}

// Computer will run and check conditions below
function stand(){
  while (dealerSum <= 17 ){ // while the dealer is <17 it will continue to draw a card
    const newDiv = document.createElement('div');
    newDiv.className = "card large"
    dCardEl.appendChild(newDiv)
    newDiv.classList.add(dRandomCard())
    isWinner()
    if(dealerSum >= playerSum || dealerSum > 21){ // if the dealer count >= the player count. break out of the loop
      isWinner()
      playAgainBtn.removeAttribute("hidden", true)
      hitBtn.setAttribute("hidden", true)
      standBtn.setAttribute("hidden", true)
      break
    } 
  }
}

// Check to see win/lose conditions
function isWinner(){
  if (dealerSum > 21){
    messageEl.innerHTML = `Dealer BUSTS! You Win!`
  }
  else if (playerSum === 21 && dealerSum < playerSum){
    messageEl.innerHTML = ` BLACKJACK! You Win!`
  }
  else if (dealerSum === 21 && dealerSum > playerSum){
      messageEl.innerHTML = `Dealer BLACKJACK! You Lose!`
  }
  else if(playerSum > dealerSum) {
      messageEl.innerHTML = `You Win!`
  } 
  else if(playerSum < dealerSum){
      messageEl.innerHTML = `You Lose!`
  }
  else{
      messageEl.innerHTML = `It's a Tie!`
  }
  playAgainBtn.removeAttribute("hidden", true)
  hitBtn.setAttribute("hidden", true)
  standBtn.setAttribute("hidden", true)
}

// Refresh the page to main screen
function home(){
  window.location.reload()
}

// Toggles light/dark mode
function lightDark() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
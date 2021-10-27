/*-------------------------------- Constants --------------------------------*/
const switchTheme = document.querySelector("#switch");

let dealerDeck = [
  "dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02",
  "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02",
  "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02",
  "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02"
]

/*-------------------------------- Variables --------------------------------*/
let playerHand = []
let dealerHand = []
let pHandVal = []
let dHandVal = []
let playerSum = 0
let dealerSum = 0

/*------------------------ Cached Element References ------------------------*/
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
document.getElementById('homeBtn').addEventListener('click', home)
document.getElementById('dealBtn').addEventListener('click', init)
document.getElementById('playAgainBtn').addEventListener('click', init)
document.getElementById('hitBtn').addEventListener('click', hitMe)
document.getElementById('standBtn').addEventListener('click', stand)
document.getElementById('lightDarkBtn').addEventListener('click', lightDark)

/*-------------------------------- Functions --------------------------------*/
function init() {
  dealerDeck = [
    "dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02",
    "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02",
    "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02",
    "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02"
  ]
  messageEl.innerText = ""
  pTotalEl.innerText = ""
  dTotalEl.innerText = ""
  pCardEl.innerHTML = ""
  dCardEl.innerHTML = ""
  playerHand = []
  dealerHand = []
  pHandVal = []
  dHandVal = []
  playerSum = 0
  dealerSum = 0
  pTotalEl.removeAttribute("hidden", true)
  dTotalEl.removeAttribute("hidden", true)
  playAgainBtn.setAttribute("hidden", true)
  dealBtn.setAttribute("hidden", true)
  hitBtn.removeAttribute("hidden", true)
  standBtn.removeAttribute("hidden", true)
  gameStart()
}

function gameStart() {
  hitMe()
  hitMe()
  dealerHit()
  blackJack()
}

function pRandomCard() {
  let randIdx = Math.floor(Math.random() * dealerDeck.length)
  let randomCard = dealerDeck.splice(randIdx, 1)
  playerHand.push(randomCard)
  playerSum = getPlayerSum()
  pTotalEl.innerHTML = `Player Total: ${playerSum}`
  return randomCard
}

function dRandomCard() {
  let randIdx = Math.floor(Math.random() * dealerDeck.length)
  let randomCard = dealerDeck.splice(randIdx, 1)
  dealerHand.push(randomCard)
  dealerSum = getDealerSum()
  dTotalEl.innerHTML = `Dealer Total: ${dealerSum}`
  return randomCard
}

function getPlayerSum() {
  let total = 0
  let playerAces = 0
  for (let i = 0; i < playerHand.length; i++) {
    let value = playerHand[i].toString()
    let endValue = value.slice(-1)
    if (endValue === "0" || endValue === "J" || endValue === "Q" || endValue === "K") {
      total += 10
    } else if (endValue === "A") {
      playerAces++
    } else {
      total += parseInt(endValue)
    }
  }
  if (playerAces) {
    total = checkPlayerAces(total, playerAces)
  }
  return total
}

function getDealerSum() {
  let total = 0
  let dealerAces = 0
  for (let i = 0; i < dealerHand.length; i++) {
    let value = dealerHand[i].toString()
    let endValue = value.slice(-1)
    if (endValue === "0" || endValue === "J" || endValue === "Q" || endValue === "K") {
      total += 10
    } else if (endValue === "A") {
      dealerAces++
    } else {
      total += parseInt(endValue)
    }
  }
  if (dealerAces) {
    total = checkDealerAces(total, dealerAces)
  }
  return total
}

function checkPlayerAces(currentHandCount, acesInHand) {
  let ace11HandCount = currentHandCount
  let tempPlayerAces = acesInHand
  ace11HandCount += 11
  tempPlayerAces -= 1
  for (let remainingAces = tempPlayerAces; remainingAces > 1; remainingAces--) {
    ace11HandCount += 1
  }
  if (ace11HandCount > 21) {
    return currentHandCount + acesInHand
  } else {
    return ace11HandCount
  }
}

function checkDealerAces(currentHandCount, acesInHand) {
  let ace11HandCount = currentHandCount
  let tempDealerAces = acesInHand
  ace11HandCount += 11
  tempDealerAces -= 1
  for (let remainingAces = tempDealerAces; remainingAces > 1; remainingAces--) {
    ace11HandCount += 1
  }
  if (ace11HandCount > 21) {
    return currentHandCount + acesInHand
  } else {
    return ace11HandCount
  }
}

function hitMe() {
  const newDiv = document.createElement('div');
  newDiv.className = "card large"
  pCardEl.appendChild(newDiv)
  newDiv.classList.add(pRandomCard())
  if (playerSum > 21) {
    messageEl.innerHTML = `BUST! You Lose!`
    playAgainBtn.removeAttribute("hidden", true)
    hitBtn.setAttribute("hidden", true)
    standBtn.setAttribute("hidden", true)
    return
  }
}

function dealerHit() {
  const newDiv = document.createElement('div');
  newDiv.className = "card large"
  dCardEl.appendChild(newDiv)
  newDiv.classList.add(dRandomCard())
}

function stand() {
  while (dealerSum <= 16 || dealerSum < playerSum) {
    const newDiv = document.createElement('div');
    newDiv.className = "card large"
    dCardEl.appendChild(newDiv)
    newDiv.classList.add(dRandomCard())
    if (dealerSum >= playerSum && dealerSum > 16) {
      isWinner()
      playAgainBtn.removeAttribute("hidden", true)
      hitBtn.setAttribute("hidden", true)
      standBtn.setAttribute("hidden", true)
      dCardEl.classList.remove('card', 'large', 'back')
      break
    }
  }
}

function blackJack() {
  if (playerSum === 21 && dealerSum != 21) {
    messageEl.innerHTML = `BLACKJACK! You Win!`
    playAgainBtn.removeAttribute("hidden", true)
    hitBtn.setAttribute("hidden", true)
    standBtn.setAttribute("hidden", true)
  } else if (dealerSum === 21 && playerSum !== 21) {
    messageEl.innerHTML = `Dealer BLACKJACK! You Lose!`
    playAgainBtn.removeAttribute("hidden", true)
    hitBtn.setAttribute("hidden", true)
    standBtn.setAttribute("hidden", true)
  } else {
    return
  }
}

function isWinner() {
  if (dealerSum > 21) {
    messageEl.innerHTML = `Dealer BUSTS! You Win!`
  } else if (playerSum === 21 && dealerSum < playerSum) {
    messageEl.innerHTML = `You Win!`
  } else if (dealerSum === 21 && dealerSum > playerSum) {
    messageEl.innerHTML = `You Lose!`
  } else if (playerSum > dealerSum) {
    messageEl.innerHTML = `You Win!`
  } else if (playerSum < dealerSum) {
    messageEl.innerHTML = `You Lose!`
  } else {
    messageEl.innerHTML = `It's a Tie!`
  }
  playAgainBtn.removeAttribute("hidden", true)
  hitBtn.setAttribute("hidden", true)
  standBtn.setAttribute("hidden", true)
}

function home() {
  window.location.reload()
}

function lightDark() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
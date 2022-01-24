// things to do
// refactor code
let state = "BUILD DECK";
let playerWinCons = []
const playerNames = [];
const cardDeck = [];
const playerCurrency = [];
const playerCurrency = 0
const playerBets = 0;
const playerCards = [];


let videopoker = () => {
  let makeDeck = function () {
    let suits = ["♥️", "♦", "♣️", "♠️"];
    let suitIndex = 0;

    while (suitIndex < suits.length) {
      let currentSuit = suits[suitIndex];
      let rankCounter = 1;

      while (rankCounter <= 13) {
        let cardName = rankCounter;
        let cardValue = rankCounter;
        if (cardName == 1) {
          cardName = "A";
          cardValue = 1;
        } else if (cardName == 11) {
          cardName = "J";
          cardValue = 10;
        } else if (cardName == 12) {
          cardName = "Q";
          cardValue = 11;
        } else if (cardName == 13) {
          cardName = "K";
          cardValue = 12;
        }
        let card = {
          name: cardName,
          suit: currentSuit,
          value: cardValue,
        };
        cardDeck.push(card);
        rankCounter += 1;
      }
      suitIndex += 1;
    }
  };

  let getRandomIndex = function (max) {
    return Math.floor(Math.random() * max);
  };

  let shuffleCards = function (cardDeck) {
    let currentIndex = 0;
    while (currentIndex < cardDeck.length) {
      let randomIndex = getRandomIndex(cardDeck.length);
      let randomCard = cardDeck[randomIndex];
      let currentCard = cardDeck[currentIndex];
      cardDeck[currentIndex] = randomCard;
      cardDeck[randomIndex] = currentCard;
      currentIndex = currentIndex + 1;
    }
  };
  let renderCards = () => { };
  let getHandValue = () => {
    let cardNameTally = {};
    let straightTally = 0;
    let tallyWinCons = []

    for (let i = 0; i < playerCards.length; i += 1) {
      let cardName = playerCards[i].value;
      if (cardName in cardNameTally) {
        cardNameTally[cardName] += 1;
      } else {
        cardNameTally[cardName] = 1;
      }
    }
    for (let i = 0; i < playerCards.length; i++) {
      if (playerCards[i].value += 1 = playerCards[i + 1].value) {
        straightTally += 1
      }
    }
    for (let i = 0; i < cardNameTally.length; i++) {
      if (cardNameTally[i] >= 2) {
        tallyWinCons.push(cardNameTally[i])
      }
    }
    for (let i = 0; i < tallyWinCons.length; i++) {
      if (tallyWinCons[i] === 2) {
        playerWinCons.push(pair)
      } if (tallyWinCons[i] === 3) {
        playerWinCons.push(threeOfAKind)
      } if (tallyWinCons[i] === 4) {
        playerWinCons.push(fourOfAKind)
      }
    }
    if (straightTally === 1) {

    }

  };

  // Game logic
  if (state === "BUILD DECK") {
    makeDeck();
    shuffleCards(cardDeck);
    state = "PLACE BETS";
    return `Please input how much you would like to bet!`;
  } else if (state === "PLACE BETS") {
    let bet = 0;
    bet = Number(input);
    playerCurrency -= bet;
    playerBets += bet;
    state = "START";
    return `Please click Submit to deal the cards.`;
  } else if (state === "START") {
    for (let i = 0; i < 5; i++) {
      playerCards.push(cardDeck.pop());
    }

    state = "OPTION";
    return `Select the cards you wish to discard.`;
  } else if (state === "OPTION") {
    state = "REDEAL";
    return `Click submit to confirm your discards and get new cards.`;
  } else if (state === "REDEAL") {
    for (let i = playerCards.length; i < 5; i++) {
      playerCards.push(cardDeck.pop());
    }
    playerCards.sort(function (a, b) {
      return a.value - b.value;
    });
    state = "GET HAND VALUE";
    return `Click submit to calculate your winnings.`;
  } else if (state === "GET HAND VALUE") {
    getHandValue();
  }
};

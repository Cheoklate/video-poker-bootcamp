let state = "BUILD DECK";
let playerCurrency = 100;
let bet = 0;
const playerNames = [];
const cardDeck = [];
const playerCards = [];


let videoPoker = (input) => {
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
  // let renderCards = () => { };
  let getHandValue = () => {
    let cardNameTally = {};
    let straightTally = 0;
    let winConsTally = []
    let cardSuitTally = 0
    let twoOfAKind = 0
    let threeOfAKind = 0
    let fourOfAKind = 0

    for (let i = 0; i < playerCards.length; i += 1) {
      let cardName = playerCards[i].value;
      if (cardName in cardNameTally) {
        cardNameTally[cardName] += 1;
      } else {
        cardNameTally[cardName] = 1;
      }
    }
    for (let i = 0; i < playerCards.length; i++) {
      if (playerCards[i].value += 1 === playerCards[i + 1].value) {
        straightTally += 1
      }
    }
    for (let i = 0; i < cardNameTally.length; i++) {
      if (cardNameTally[i] >= 2) {
        winConsTally.push(cardNameTally[i])
      }
    }
    for (let i = 0; i < winConsTally.length; i++) {
      if (winConsTally[i] === 2) {
        twoOfAKind += 1
      } if (winConsTally[i] === 3) {
        threeOfAKind += 1
      } if (winConsTally[i] === 4) {
        fourOfAKind += 1
      }
    }
    for (let i = 0; i < playerCards.length; i++) {
      let cardSuit = playerCards[i].suit;
      if (cardSuit in cardSuitTally) {
        cardSuitTally[cardSuit] += 1;
      } else {
        cardSuitTally[cardSuit] = 1;
      }
    }
    if (twoOfAKind === 2) {
      playerCurrency += bet * 2
      return `Two Pairs! You win double your bet.`
    } else if (straightTally === 1) {
      playerCurrency += bet * 4
      return `Straight! You win 4 times your bet.`
    } else if (suitTally === 1) {
      playerCurrency += bet * 5
      return `Flush! You win 5 times your bet.`
    } else if (twoOfAKind === 1 && threeOfAKind === 1) {
      playerCurrency += bet * 8
      return `Full House! You win 8 times your bet.`
    } else if (fourOfAKind === 1) {
      playerCurrency += bet * 25
      return `Four of a kind. You win 25 times your bet.`
    } else if (straightTally === 1 && suitTally === 1) {
      playerCurrency += bet * 50
      return `Straight Flush! You win 50 TIMES your bet. HOLLAH HOLLAH GET DOLLAH!!!`
    } else if (straightTally === 1 && suitTally === 1 && playerCards[5].value === 13) {
      playerCurrency += bet * 1000000
      return `Sweet baby jesus, a Royal flush! You win 1,000,000 times your bet.`
    } else if (twoOfAKind === 1) {
      playerCurrency += bet * 1
      return `Pair! You are returned your bet.`
    } else if (threeOfAKind === 1) {
      playerCurrency += bet * 3
      return `Three of a kind! You win triple your bet.`
    } else return `You got nothing. You lose sir. Good day. Click submit to move to the next stage.`

  };

  // Game logic
  if (state === "BUILD DECK") {
    makeDeck();
    shuffleCards(cardDeck);
    state = "PLACE BETS";
    return `Please input how much you would like to bet!`;
  } else if (state === "PLACE BETS") {
    bet = Number(input);
    playerCurrency -= bet;
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
var main = function (input) {
  return videoPoker(input);
};

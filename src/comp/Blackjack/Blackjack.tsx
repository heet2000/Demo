import React, { useState, useEffect } from 'react';
import Status1 from './Status1.js';
import Status2 from './Status2.js';
import Status3 from './Status3.js';
import Status4 from './Status4.js';
import Controls1 from './Controls1.js';
import Controls2 from './Controls2.js';
import Controls3 from './Controls3.js';
import Controls4 from './Controls4.js';
import Hand from './Hand.js';
import Hand1 from './Hand1.js';
import Hand2 from './Hand2.js';
import Hand3 from './Hand3.js';
import Hand4 from './Hand4.js';
import jsonData from '../deck.json';
import './Blackjack.css';

const Blackjack: React.FC = () => {

  enum GameState1 {
    bet1,
    init,
    user1Turn,
  }

  enum GameState {
    bet2,
    init,
    user2Turn,
  }

  enum GameState3{
    bet3,
    init,
    user3Turn,
  }

  enum GameState4{
    bet4,
    init,
    user4Turn,
    dealerTurn
  }

  enum Deal {
    user1,
    user2,
    user3,
    user4,
    dealer,
    hidden
  }

  enum Message1 {
    bet = 'Place a Bet!',
    hitStand = 'Hit or Stand?',
    bust = 'Bust!',
    user1Win = 'User1 Win!',    
    dealerWin = 'Dealer Wins!',
    tie = 'Tie!'
  }

  enum Message2 {
    bet = 'Place a Bet!',
    hitStand = 'Hit or Stand?',
    bust = 'Bust!',
    user2Win = 'User2 Win!',    
    dealerWin = 'Dealer Wins!',
    tie = 'Tie!'
  }

  enum Message3 {
    bet = 'Place a Bet!',
    hitStand = 'Hit or Stand?',
    bust = 'Bust!',
    user3Win = 'User3 Win!',    
    dealerWin = 'Dealer Wins!',
    tie = 'Tie!'
  }

  enum Message4 {
    bet = 'Place a Bet!',
    hitStand = 'Hit or Stand?',
    bust = 'Bust!',
    user4Win = 'User4 Win!',    
    dealerWin = 'Dealer Wins!',
    tie = 'Tie!'
  }

  const data = JSON.parse(JSON.stringify(jsonData.cards));
  const [deck, setDeck]: any[] = useState(data);

  const [user1Cards, setUser1Cards] = useState([]);
  const [user1Score, setUser1Score] = useState(0);
  const [user1Count, setUser1Count] = useState(0);

  const [user2Cards, setUser2Cards] = useState([]);
  const [user2Score, setUser2Score] = useState(0);
  const [user2Count, setUser2Count] = useState(0);

  const [user3Cards, setUser3Cards] = useState([]);
  const [user3Score, setUser3Score] = useState(0);
  const [user3Count, setUser3Count] = useState(0);

  const [user4Cards, setUser4Cards] = useState([]);
  const [user4Score, setUser4Score] = useState(0);
  const [user4Count, setUser4Count] = useState(0);

  const [dealerCards, setDealerCards] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);

  const [balance1, setBalance1] = useState(1000);
  const [balance2, setBalance2] = useState(1000);
  const [balance3, setBalance3] = useState(1000);
  const [balance4, setBalance4] = useState(1000);

  const [bet1, setBet1] = useState(0);
  const [bet2, setBet2] = useState(0);
  const [bet3, setBet3] = useState(0);
  const [bet4, setBet4] = useState(0);

  const [gameState1, setGameState1] = useState(GameState1.bet1);
  const [gameState, setGameState] = useState(GameState.bet2);
  const [gameState3, setGameState3] = useState(GameState3.bet3);
  const [gameState4, setGameState4] = useState(GameState4.bet4);

  const [message1, setMessage1] = useState(Message1.bet);
  const [message2, setMessage2] = useState(Message2.bet);
  const [message3, setMessage3] = useState(Message3.bet);
  const [message4, setMessage4] = useState(Message4.bet);

  const [buttonState, setButtonState] = useState({
    hitDisabled: false,
    standDisabled: false,
    resetDisabled: true
  });

  useEffect(() => {
    if (gameState1 === GameState1.init && gameState === GameState.init && gameState3 === GameState3.init && gameState4 === GameState4.init) {
      drawCard(Deal.hidden);
      drawCard(Deal.dealer);
      drawCard(Deal.user1);
      drawCard(Deal.user1);
      drawCard(Deal.user2);
      drawCard(Deal.user2);
      drawCard(Deal.user3);
      drawCard(Deal.user3);
      drawCard(Deal.user4);
      drawCard(Deal.user4);
      setGameState1(GameState1.user1Turn);
      setMessage1(Message1.hitStand);
    }
  }, [gameState1,gameState,gameState3,gameState4]);

  useEffect(() => {
    calculate(user1Cards, setUser1Score);
    setUser1Count(user1Count + 1);
  }, [user1Cards]);

  useEffect(() => {
    calculate(user2Cards, setUser2Score);
    setUser2Count(user2Count + 1);
  }, [user2Cards]);

  useEffect(() => {
    calculate(user3Cards, setUser3Score);
    setUser3Count(user3Count + 1);
  }, [user3Cards]);

  useEffect(() => {
    calculate(user4Cards, setUser4Score);
    setUser4Count(user4Count + 1);
  }, [user4Cards]);

  useEffect(() => {
    calculate(dealerCards, setDealerScore);
    setDealerCount(dealerCount + 1);
  }, [dealerCards]);

  useEffect(() => {
    if (gameState1 === GameState1.user1Turn) {
      if (user1Score < 17) {
        drawCard(Deal.user1);
      }
      else if(user1Score >= 17 && user1Score <=21 ) {
        stand1();
      }
      else{
        bust1();
      }
    }
  }, [user1Count,user1Score,GameState1]);
  
  useEffect(() => {
    if (gameState === GameState.user2Turn) {
      if (user2Score === 21) {
        setGameState3(GameState3.user3Turn);
      }
      else if (user2Score > 21) {
        bust2();
      }
    }
  }, [user2Count,user2Score,GameState]);

  useEffect(() => {
    if (gameState3 === GameState3.user3Turn) {
      if (user3Score <= 17) {
        drawCard(Deal.user3);
      }
      else if(user3Score >= 17 && user3Score <= 21 ) {
        stand3();
      }
      else{
        bust3();
      }
    }
  }, [user3Count,user3Score,GameState3]);

  useEffect(() => {
    if (gameState4 === GameState4.user4Turn) {
      if (user4Score <= 17) {
        drawCard(Deal.user4);
      }
      else if(user4Score >= 17 && user4Score <= 21 ) {
        stand4();
      }
      else{
        bust4();
      }
    }
  }, [user4Count,user4Score,GameState4]);

  useEffect(() => {
    if (gameState4 === GameState4.dealerTurn) {
      if (dealerScore >= 17) {
        checkWin1();
        checkWin2();
        checkWin3();
        checkWin4();
      }
      else {
        drawCard(Deal.dealer);
      }
    }
  }, [dealerCount]);

  const resetGame = () => {
    setDeck(data);

    setUser1Cards([]);
    setUser1Score(0);
    setUser1Count(0);

    setUser2Cards([]);
    setUser2Score(0);
    setUser2Count(0);

    setUser3Cards([]);
    setUser3Score(0);
    setUser3Count(0);

    setUser4Cards([]);
    setUser4Score(0);
    setUser4Count(0);

    setDealerCards([]);
    setDealerScore(0);
    setDealerCount(0);

    setBet1(0);
    setBet2(0);
    setBet3(0);
    setBet4(0);

    setGameState1(GameState1.bet1);
    setGameState(GameState.bet2);
    setGameState3(GameState3.bet3);
    setGameState4(GameState4.bet4);

    setMessage1(Message1.bet);
    setMessage2(Message2.bet);
    setMessage3(Message3.bet);
    setMessage4(Message4.bet);

    setButtonState({
      hitDisabled: false,
      standDisabled: false,
      resetDisabled: true
    });
  }

  const placeBet1 = (amount1: number) => {
    setBet1(amount1);
    setBalance1(Math.round((balance1 - amount1) * 100) / 100);
    setGameState1(GameState1.init);
  }

  const placeBet2 = (amount2: number) => {
    setBet2(amount2);
    setBalance2(Math.round((balance2 - amount2) * 100) / 100);
    setGameState(GameState.init);
  }

  const placeBet3 = (amount3: number) => {
    setBet3(amount3);
    setBalance3(Math.round((balance3 - amount3) * 100) / 100);
    setGameState3(GameState3.init);
  }

  const placeBet4 = (amount4: number) => {
    setBet4(amount4);
    setBalance4(Math.round((balance4 - amount4) * 100) / 100);
    setGameState4(GameState4.init);
  }

  const drawCard = (dealType: Deal) => {
    if (deck.length > 0) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck[randomIndex];
      deck.splice(randomIndex, 1);
      setDeck([...deck]);
      console.log('Remaining Cards:', deck.length);
      switch (card.suit) {
        case 'spades':
          dealCard(dealType, card.value, '♠');
          break;
        case 'diamonds':
          dealCard(dealType, card.value, '♦');
          break;
        case 'clubs':
          dealCard(dealType, card.value, '♣');
          break;
        case 'hearts':
          dealCard(dealType, card.value, '♥');
          break;
        default:
          break;
      }
    }
    else {
      alert('All cards have been drawn');
    }
  }

  const dealCard = (dealType: Deal, value: string, suit: string) => {
    switch (dealType) {
      case Deal.user1:
        user1Cards.push({ 'value': value, 'suit': suit, 'hidden': false });
        setUser1Cards([...user1Cards]);
        break;
      case Deal.user2:
          user2Cards.push({ 'value': value, 'suit': suit, 'hidden': false });
          setUser2Cards([...user2Cards]);
          break;
      case Deal.user3:
            user3Cards.push({ 'value': value, 'suit': suit, 'hidden': false });
            setUser3Cards([...user3Cards]);
            break;
      case Deal.user4:
        user4Cards.push({ 'value': value, 'suit': suit, 'hidden': false });
        setUser4Cards([...user4Cards]);
        break;
      case Deal.dealer:
        dealerCards.push({ 'value': value, 'suit': suit, 'hidden': false });
        setDealerCards([...dealerCards]);
        break;
      case Deal.hidden:
        dealerCards.push({ 'value': value, 'suit': suit, 'hidden': true });
        setDealerCards([...dealerCards]);
        break;
      default:
        break;
    }
  }

  const revealCard = () => {
    dealerCards.filter((card: any) => {
      if (card.hidden === true) {
        card.hidden = false;
      }
      return card;
    });
    setDealerCards([...dealerCards])
  }

  const calculate = (cards: any[], setScore: any) => {
    let total = 0;
    cards.forEach((card: any) => {
      if (card.hidden === false && card.value !== 'A') {
        switch (card.value) {
          case 'K':
            total += 10;
            break;
          case 'Q':
            total += 10;
            break;
          case 'J':
            total += 10;
            break;
          default:
            total += Number(card.value);
            break;
        }
      }
    });
    const aces = cards.filter((card: any) => {
      return card.value === 'A';
    });
    aces.forEach((card: any) => {
      if (card.hidden === false) {
        if ((total + 11) > 21) {
          total += 1;
        }
        else if ((total + 11) === 21) {
          if (aces.length > 1) {
            total += 1;
          }
          else {
            total += 11;
          }
        }
        else {
          total += 11;
        }
      }
    });
    setScore(total);
  }

  const hit = () => {
    drawCard(Deal.user2);
  }

  const stand1 = () => {
    setGameState(GameState.user2Turn);
  }

  const stand2 = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setMessage1(Message1.hitStand);
    setGameState3(GameState3.user3Turn);
  }

  const stand3 = () => {
    setGameState4(GameState4.user4Turn);
  }

  const stand4 = () => {
    setGameState4(GameState4.dealerTurn);
    revealCard();
  }

  const bust1 = () => {
    setMessage1(Message1.bust);
    setGameState(GameState.user2Turn);
  }

  const bust2 = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setMessage2(Message2.bust);
    setGameState3(GameState3.user3Turn);
  }

  const bust3 = () => {
    setMessage3(Message3.bust);
    setGameState4(GameState4.user4Turn);
  }

  const bust4 = () => {
    setMessage4(Message4.bust);
    setGameState4(GameState4.dealerTurn);
    revealCard();
  }

  const checkWin1 = () => {
    if (((21 >= user1Score)&&(user1Score > dealerScore)&&((user1Score > dealerScore)&&(21 >= user1Score)) || dealerScore > 21)) {
      setBalance1(Math.round((balance1 + (bet1 * 2)) * 100) / 100);
      setMessage1(Message1.user1Win);
    }
    else if (((21 >= dealerScore)&&(user1Score < dealerScore) && (user1Score < dealerScore)&&(21 >= dealerScore)) || 21 < user1Score) {
      setMessage1(Message1.dealerWin);
    }
    else {
      setBalance1(Math.round((balance1 + (bet1 * 1)) * 100) / 100);
      setMessage1(Message1.tie);
    }
  }

  const checkWin2 = () => {
    if (((21 >= user2Score)&&(user2Score > dealerScore)&&((user2Score > dealerScore)&&(21 >= user2Score)) || dealerScore > 21)) {
      setBalance2(Math.round((balance2 + (bet2 * 2)) * 100) / 100);
      setMessage2(Message2.user2Win);
    }
    else if (((21 >= dealerScore)&&(user2Score < dealerScore) && (user2Score < dealerScore)&&(21 >= dealerScore)) || 21 < user2Score) {
      setMessage2(Message2.dealerWin);
    }
    else {
      setBalance2(Math.round((balance2 + (bet2 * 1)) * 100) / 100);
      setMessage2(Message2.tie);
    }
  }

  const checkWin3 = () => {
    if (((21 >= user3Score)&&(user3Score > dealerScore)&&((user3Score > dealerScore)&&(21 >= user3Score)) || dealerScore > 21)) {
      setBalance3(Math.round((balance3 + (bet3 * 2)) * 100) / 100);
      setMessage3(Message3.user3Win);
    }
    else if (((21 >= dealerScore)&&(user3Score < dealerScore) && (user3Score < dealerScore)&&(21 >= dealerScore)) || 21 < user3Score) {
      setMessage3(Message3.dealerWin);
    }
    else {
      setBalance3(Math.round((balance3 + (bet3 * 1)) * 100) / 100);
      setMessage3(Message3.tie);
    }
  }

  const checkWin4 = () => {
    if (((21 >= user4Score)&&(user4Score > dealerScore)&&((user4Score > dealerScore)&&(21 >= user4Score)) || dealerScore > 21)) {
      setBalance4(Math.round((balance4 + (bet4 * 2)) * 100) / 100);
      setMessage4(Message4.user4Win);
    }
    else if (((21 >= dealerScore)&&(user4Score < dealerScore) && (user4Score < dealerScore)&&(21 >= dealerScore)) || 21 < user4Score) {
      setMessage4(Message4.dealerWin);
    }
    else {
      setBalance4(Math.round((balance4 + (bet4 * 1)) * 100) / 100);
      setMessage4(Message4.tie);
    }
  }

  return (
    <>
      <div className='player'>
        <div className='grid-item1'>
          <Hand title={`Dealer's Hand (${dealerScore})`} cards={dealerCards} />
        </div>
        <div className='grid-item2'>
          <Status1 message={message1} balance={balance1} />
          <Hand1 title={`User1 Hand (${user1Score})`} cards={user1Cards} />
          <Controls1
            balance={balance1}
            gameState={gameState1}
            betEvent={placeBet1}
            standEvent={stand1}
          />
        </div>
        <div className='grid-item3'>
          <Status2 message={message2} balance={balance2} />
          <Hand2 title={`User2 Hand (${user2Score})`} cards={user2Cards} />
          <Controls2
            balance={balance2}
            gameState={gameState}
            buttonState={buttonState}
            betEvent={placeBet2}
            hitEvent={hit}
            standEvent={stand2}
            resetEvent={resetGame}
          />
        </div>
        <div className='grid-item4'>
          <Status3 message={message3} balance={balance3} />
          <Hand3 title={`User3 Hand (${user3Score})`} cards={user3Cards} />
          <Controls3
            balance={balance3}
            gameState={gameState3}
            betEvent={placeBet3}
            standEvent={stand3}
            />
        </div>
        <div className='grid-item5'>
          <Status4 message={message4} balance={balance4} />
          <Hand4 title={`User4 Hand (${user4Score})`} cards={user4Cards} />
          <Controls4
            balance={balance4}
            gameState={gameState4}
            betEvent={placeBet4}
            standEvent={stand4}
            />
        </div>
      </div>
    </>
  );
}

export default Blackjack;
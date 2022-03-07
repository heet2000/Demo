import React, { useState } from 'react';
import Userdata from './Userdata.js';
import Controls from './Controls.js';
import Hand from './Hand2.js';
import Status from './Status2.js';

const BlackJackGame  = () => {
  const [gamedata, setGameData]  = useState(Userdata);

  console.log(gamedata)

  return (
    <div>
      {gamedata.map((e) => {
        return(
          <div key={e.id}>
            <Status message={e.message.bet} balance={e.balance} />
            <Hand title={`User Hand (${e.userScore})`} cards={e.userCards} />
          </div>
        );
      })}
    </div>             
  )
}

export default BlackJackGame;

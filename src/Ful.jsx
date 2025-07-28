import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {

    setPlayer( {...player, score:player.score + 1});
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({...player , lastName: e.target.value
    });
  }

  return (
    <div style={{margin:"auto",marginTop:"80px",width:"300px",height:"100vh"}}>
      <label>
        Score: <b style={{paddingRight:"20px"}} >{player.score}</b> 

        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <hr />



      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>



         <hr />
      <label>

        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </div>
  );
}

import { useState } from 'react';
import { Header, Player } from './components';
import { generatePlayers, getHighScore } from './helpers';

function App() {
  const initialPlayers = ['myles', 'alisa', 'random'];
  // since we defined the return type for generatePlayers, the "players" variable knows that it contains an array of players
  const [players, setPlayers] = useState(
    // providing some initial state here
    generatePlayers(initialPlayers)
  );

  const lastPlayerIndex = players.length + 1;
  const highScore = getHighScore(players);

  // we need a method for adding a new player
  // hint💡 setPlayers(prevState => [...])

  const removePlayer = (id: number) => {
    const playersCopy = [...players];
    setPlayers(playersCopy.filter((player) => player.id !== id));
  };

  /**
   * update score for selected player based on their id
   *
   * @param {number} id
   * @param {number} value
   */
  const handlePlayerScoreChange = (index: number, score: number) => {
    // make a copy of the players array
    const playersCopy = [...players];
    // find the player
    const player = playersCopy[index];
    // update the score of that player
    player.score += score;
    // replace the player with the updated version
    playersCopy[index] = player;
    // update global players state
    setPlayers(playersCopy);
  };

  return (
    <main className="scoreboard">
      {/* we even gat static typing with our react components */}
      <Header title="Let's get this bag" players={players} />
      {players.length > 0 ? (
        players.map((player, index) => (
          // here we can unbox our player object, and pass in all the properties and values contained inside with the spread (...) operator
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          <Player
            key={player.id}
            {...{
              removePlayer,
              changeScore: handlePlayerScoreChange,
              index,
              highScore,
              ...player,
            }}
          />
        ))
      ) : (
        <div className="player">No Players</div>
      )}
      {/* let's add out player form here */}
    </main>
  );
}

export default App;

import { useState } from 'react';
import { Header, Player } from './components';
import { generatePlayers } from './helpers';

function App() {
  const initialPlayers = ['myles', 'alisa', 'random'];
  // since we defined the return type for generatePlayers, the "players" variable knows that it contains an array of players
  const [players] = useState(
    // providing some initial state here
    generatePlayers(initialPlayers)
  );

  return (
    <div className="scoreboard">
      {/* we even gat static typing with our react components */}
      <Header title="Let's get this bag" players={players} />
      {players.map((player) => (
        // here we can unbox our player object, and pass in all the properties and values contained inside with the spread (...) operator
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
}

export default App;

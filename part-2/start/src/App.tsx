import { useState } from 'react';
// import { Header, Player } from './components';
import { generatePlayers } from './helpers';

function App() {
  const initialPlayers = ['myles', 'alisa', 'random'];
  // state takes the shape of its initial value unless we define it explicitly

  return (
    <div className="scoreboard">
      {/* we even gat static typing with our react components */}
      {/* Header needs a title and players */}
      {/* let's render our Player[] here */}
    </div>
  );
}

export default App;

import { Player } from '../types';

interface Props {
  players: Player[];
}

const Stats = ({ players }: Props) => {
  // use 0 as starting value, and add each players score to the initialTotal
  // read more about the reduce method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 👀
  const totalPoints = players.reduce(
    (initialTotal, player) => initialTotal + player.score,
    0
  );
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;

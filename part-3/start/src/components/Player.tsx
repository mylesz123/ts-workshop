import Counter from './Counter';
import Crown from './icons/Crown';

// TODO, move the new logic into the final version then adjust this accordingly.

// we don't need to redefine name, id, and score because
// we already know those properties belong to the Player type.
// let's find a way to combine our `Props` with the `Player` type
interface Props {
  index: number;
  highScore: number;
  removePlayer: (id: number) => void;
  changeScore: (index: number, score: number) => void;
}

const Player = ({
  name,
  id,
  score,
  index,
  highScore,
  removePlayer,
  changeScore,
}: Props) => {
  const isHighScore = score !== 0 ? score === highScore : false;
  return (
    <div className="player">
      <span className="player-name">
        <button
          type="button"
          className="remove-player"
          onClick={() => removePlayer(id)}
        >
          ✖
        </button>
        <Crown isHighlight={isHighScore} />
        {name}
      </span>

      <Counter {...{ changeScore, index, score }} />
    </div>
  );
};

export default Player;

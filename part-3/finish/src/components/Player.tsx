import {Player as PlayerType} from '../types';
import Counter from './Counter';
import Crown from './icons/Crown';

// read more about union types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
interface Props {
  index: number;
  highScore: number;
  removePlayer(id: number): void;
  changeScore(index: number, score: number): void;
}

const Player = ({
  name,
  id,
  score,
  index,
  highScore,
  removePlayer,
  changeScore,
}: Props & PlayerType) => {
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

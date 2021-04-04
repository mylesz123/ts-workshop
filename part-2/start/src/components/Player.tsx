import { Player as PlayerType } from '../types';

const Player = ({ name }: PlayerType) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          type="button"
          className="remove-player"
          onClick={() => {}}
        >
          ✖
        </button>
        {name}
      </span>
    </div>
  );
};

export default Player;

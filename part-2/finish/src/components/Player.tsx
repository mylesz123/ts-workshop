interface Props {
  name: string;
  id: number;
  score: number;
}

const Player = ({ name }: Props) => {
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

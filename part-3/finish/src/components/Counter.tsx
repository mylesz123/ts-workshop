interface Props {
  changeScore: (index: number, value: number) => void;
  index: number;
  score: number;
}

const Counter = ({ changeScore, index, score }: Props) => {
  return (
    <aside className="counter">
      <button
        type="button"
        className="counter-action decrement"
        onClick={() => changeScore(index, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        type="button"
        className="counter-action increment"
        onClick={() => changeScore(index, 1)}
      >
        +
      </button>
    </aside>
  );
};

export default Counter;

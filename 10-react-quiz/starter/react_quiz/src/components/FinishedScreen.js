function FinishedScreen({ points, numberOfPoints, highscore, dispatch }) {
  const percentage = (points / numberOfPoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🎖️";
  if (percentage < 100) emoji = "🥈";
  if (percentage < 50) emoji = "🥺";
  if (percentage === 0) emoji = "🥲";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {numberOfPoints}
        {Math.round(percentage)}
      </p>
      <p className="highscore">Highscore {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ status: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishedScreen;

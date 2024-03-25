function Progress({
  index,
  numberOfQuestions,
  points,
  numberOfPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>

      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> out of {numberOfPoints}
      </p>
    </header>
  );
}

export default Progress;

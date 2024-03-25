function Options({ question, dispatch, answer }) {
  const isAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ status: "newAnswer", payload: index })}
          className={`btn btn-option ${
            isAnswered && index === answer ? "answer" : ""
          } ${
            isAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={isAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

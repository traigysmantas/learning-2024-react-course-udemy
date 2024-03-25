function NextButton({ question, dispatch, answer, index, numberOfQuestions }) {
  if (answer === null) return null;

  if (index < numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ status: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ status: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;

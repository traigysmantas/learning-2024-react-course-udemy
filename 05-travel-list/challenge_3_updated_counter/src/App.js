import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [steps, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Steps: {steps}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - steps)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + steps)}>+</button>
      </div>

      <p>
        {count} days from today is/was {date.toDateString()}
      </p>

      {count !== 0 || steps !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;

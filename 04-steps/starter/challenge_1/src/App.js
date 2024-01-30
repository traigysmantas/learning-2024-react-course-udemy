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

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - steps)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + steps)}>+</button>
      </div>

      <p>
        {count} days from today is/was {date.toDateString()}
      </p>
    </div>
  );
}

export default App;

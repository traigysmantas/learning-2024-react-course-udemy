import { useState } from "react";
import "./index.css";

function App() {
  const [bill, setBill] = useState(0);
  const [userPercentage, setUserPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const calculatedTip = bill * ((userPercentage + friendPercentage) / 2 / 100);

  console.log({ calculatedTip, bill });

  const onReset = () => {
    setBill(0);
    setUserPercentage(0);
    setFriendPercentage(0);
  };

  return (
    <div>
      <BillInput bill={Number(bill)} onSetBill={setBill}></BillInput>
      <SelectPercentage
        percentage={userPercentage}
        onHandlePercentage={setUserPercentage}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onHandlePercentage={setFriendPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output calculatedTip={calculatedTip} bill={bill}></Output>
          <Reset onReset={onReset}></Reset>
        </>
      )}
    </div>
  );
}

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
};

const SelectPercentage = ({ children, percentage, onHandlePercentage }) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onHandlePercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Output = ({ calculatedTip, bill }) => {
  return (
    <h3>
      You pay ${calculatedTip + bill} $ (${bill} + ${calculatedTip} tip)
    </h3>
  );
};

const Reset = ({ onReset }) => {
  return <button onClick={onReset}>Reset</button>;
};

export default App;

import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepUp() {
    setStep(step + 1);
  }

  function handleStepDown() {
    setStep(step - 1);
  }

  function handleCountUp() {
    setCount(count + step);
  }

  function handleCountDown() {
    setCount(count - step);
  }

  return (
    <div className="container">
      <div>
        <button onClick={handleStepDown}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepUp}>+</button>
      </div>
      <div>
        <button onClick={handleCountDown}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountUp}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}{" "}
          {date.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
export default App;

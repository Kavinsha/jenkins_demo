import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "sub":
        setResult(a - b);
        break;
      case "mul":
        setResult(a * b);
        break;
      case "div":
        b !== 0 ? setResult(a / b) : setResult("Cannot divide by 0");
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div className="app">
      <h1>Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="buttons">
        <button onClick={() => handleCalculate("add")}>+</button>
        <button onClick={() => handleCalculate("sub")}>-</button>
        <button onClick={() => handleCalculate("mul")}>×</button>
        <button onClick={() => handleCalculate("div")}>÷</button>
      </div>
      <h2>Result: {result !== null ? result : "—"}</h2>
    </div>
  );
}

export default App;

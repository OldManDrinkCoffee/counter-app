import './App.css';
import React, { useState } from "react";



function App() {
  const [count, setCount] = useState(0);
  let color = (count > 0) ? "green" : (count < 0) ? "red" : "black";
  // if (count > 0) {
  //   color = "green";
  // }
  // if (count < 0) {
  //   color = "red";
  // }if (count === 0) {
  //   color = "black";
  //   }

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCount = () => setCount(0);


  return (
    
    <div className="container">
        <div className="className"></div>
        <h1> Counter </h1>
        <label style={{color}} id="value">{count}</label>
        <div className="btn-group">
          <button onClick={decrement} className="btn-decrease" >DECREASE</button>
          <button onClick={resetCount} className="btn-reset" >RESET</button>
          <button onClick={increment} className="btn-increase" >INCREASE</button>
        </div>
      </div>
  );
}

export default App;

"use client";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increase
      </button>
      <button onClick={() => setCounter((preveCounter) => preveCounter - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;

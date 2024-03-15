"use client";

import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>
        <h1>Counter: {number}</h1>
      </div>

      <button onClick={() => setNumber(number + 1)} className="btn btn-primary">
        Increase
      </button>
      <button onClick={() => setNumber(number - 1)} className="btn btn-primary">
        Decrease
      </button>
    </div>
  );
};

export default Counter;

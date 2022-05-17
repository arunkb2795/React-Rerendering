import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  console.log('Rerendiring...');
  return (
    <div>
      <h1>Counter</h1>
      <p>Counter : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

import React, { useState } from 'react';
import Child from './Child';
export default function Parent(props) {
  const { children } = props;
  const [count, setCount] = useState(0);
  console.log('Parent Rendering...');
  return (
    <div>
      <h1>Counter</h1>
      <p>Counter : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {children}
    </div>
  );
}

import React, { useState } from 'react';
import Child from './Child';
import MemorizedChild from './MemorizedChild';
export default function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Arun');
  console.log('Parent Rendering...');
  return (
    <div>
      <h1>Counter</h1>
      <p>Counter : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Child name={name} />
      <MemorizedChild name={name} />
      <button onClick={() => setName('Savannah' + Date.now())}>
        Change Name
      </button>
    </div>
  );
}

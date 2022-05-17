import React, { useReducer } from 'react';
import './style.css';

const initialSatate = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialSatate;
    default:
      return state;
  }
};
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialSatate);
  console.log('Rerendiring...');
  return (
    <div>
      <h1>Counter</h1>
      <p>Counter : {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

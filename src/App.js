import React from 'react';
import Parent from './components/Parent';
import Child from './components/Child';
import './style.css';

export default function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

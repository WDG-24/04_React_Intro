import { useState } from 'react';

// State und Setter können auch als props entgegengenommen werden.
export default function Counter({ state, setter }) {
  // Lokaler State - Komponente hat und kontrolliert ihren State selbst
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setter(state - 1)} type='button'>
        -
      </button>
      {/* <p>{count}</p> */}
      <p>{state}</p>
      <button onClick={() => setter(state + 1)} type='button'>
        +
      </button>
    </div>
  );
}

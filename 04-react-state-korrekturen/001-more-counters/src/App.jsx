import { useState } from 'react';
import Counter from './components/Counter.jsx';

function App() {
  // Nur ein Beispiel. State sollte möglichst nahe an den Komponenten liegen,
  // die ihn brauchen. Wir können ihn aber auch in Parents tun.
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <div>
      <h1>React: useState</h1>
      <div style={{ display: 'flex' }}>
        {/* Werte und Funktionen können weitergegeben werden */}
        <Counter state={counter1} setter={setCounter1} />
        <Counter state={counter2} setter={setCounter2} />
        <Counter state={counter3} setter={setCounter3} />
      </div>
    </div>
  );
}

export default App;

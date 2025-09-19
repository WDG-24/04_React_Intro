import { useState } from 'react';
import LightBulb from './components/LightBulb.jsx';

function App() {
  // lightSwitch wird in mehreren Komponenten benötigt
  //  -> lebt in der nahsten gemeinsamen Komponente
  const [lightSwitch, setLightSwitch] = useState(false);
  const [counter, setCounter] = useState(0);

  // Event Handler Funktion innerhalb der Komponente für Zugriff auf State
  function handleClick() {
    // Varianten um boolean hin und her zu schalten
    // setLightSwitch(lightSwitch === false ? true : false);
    // setLightSwitch(!lightSwitch);
    if (counter < 10) {
      setLightSwitch((l) => !l); // typischer boolean-Toggle
    }
    setCounter((c) => (lightSwitch ? c + 1 : c)); // Kondition in Setter-Funktion
  }

  return (
    <div>
      <h1>React: useState</h1>
      {/* Button abschalten, wenn Bedingung eintrifft */}
      <button disabled={counter >= 10} type='button' onClick={handleClick}>
        {lightSwitch ? 'Switch on' : 'Switch off'}
      </button>
      <button onClick={() => setCounter(0)} type='button'>
        Reset
      </button>
      <LightBulb lightSwitch={lightSwitch} />
    </div>
  );
}

export default App;

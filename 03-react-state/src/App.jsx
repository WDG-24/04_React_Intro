import { useState } from 'react';
import CatName from './components/CatName.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const today = 'Friday';

function App() {
  // ❌ Normale Variablen haben immer ihren initialen wert nach re-renders
  // Sind nicht reaktiv
  // let count = 0;

  // ✅ useState für einfache Werte - gibt [wert, setterFunktion] zurück
  const [count, setCount] = useState(0);
  const [catName, setCatName] = useState('Irgendetwas');
  const [color, setColor] = useState('#000');
  const [show, setShow] = useState(false);

  // ✅ useState mit Objekten - komplexere State-Strukturen
  const [formState, setFormState] = useState({
    name: 'Nela',
    color: '#000',
    show: true,
  });

  // ❌ Hooks dürfen nicht in if-Blöcken oder Schleifen verwendet werden
  // if (today === 'Friday') {
  //   const [catName, setCatName] = useState('Nela');
  // }

  const handleClick = () => {
    // ✅ Funktionale Updates - verwenden den vorherigen Wert
    // Jeder Aufruf erhöht um 1, auch bei mehreren Aufrufen
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    // ❌ Direkte Updates - verwenden den aktuellen Wert
    // Alle vier würden den gleichen Wert setzen (count + 1)
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };

  // ❌ State-Updates außerhalb von Event-Handlern führen zu Endlosschleifen
  // setCount(count + 1);

  return (
    // State kann an allen möglichen Stellen verwendet werden - hier: Styling
    <div
      style={{
        backgroundColor: color,
      }}
    >
      {/* Props von Parent zu Child Komponenten */}
      <Header name={catName} />
      <h1>React State</h1>

      {/* State-Wert wird im UI angezeigt */}
      <p>{count}</p>

      {/* Event-Handler triggert State-Updates */}
      <button onClick={handleClick} type='button'>
        Count++
      </button>

      {/* Prop-Drilling: State und Setter werden als Props weitergegeben */}
      <CatName catName={catName} setCatName={setCatName} />

      <form>
        <br />
        {/* Controlled Component - Input-Wert wird von State kontrolliert */}
        <input type='color' onChange={(e) => setColor(e.target.value)} />
        <br />

        {/* Beispiele für verschiedene State-Update-Patterns */}
        {/* Einfacher boolean State */}
        {/* <input type='checkbox' onChange={(e) => setShow(e.target.checked)} /> */}

        {/* Objekt State-Updates mit Spread-Operator */}
        {/* <input
          type='checkbox'
          onChange={(e) => {
            setFormState((vorherigerWert) => {
              return { ...vorherigerWert, show: e.target.checked };
            });
          }}
        /> */}
      </form>

      {/* State wird im UI verwendet */}
      <p>{catName}</p>

      {/* Conditional Rendering basierend auf State */}
      {formState.show && <h2>Konditional Gerendert</h2>}

      <Footer name={catName} />
    </div>
  );
}

export default App;

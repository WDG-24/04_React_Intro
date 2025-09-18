import './App.css';
import Navbar from './components/Navbar.jsx';
import Students from './components/Students.jsx';
import Product from './components/Product.jsx';

// Datenarray - könnte später aus API kommen
const students = [
  { id: 1, name: 'Alexander' },
  { id: 2, name: 'Frank' },
  { id: 3, name: 'Kira' },
  { id: 8, name: 'Sven' },
  { id: 4, name: 'Marco' },
  { id: 6, name: 'Pierre' },
  { id: 7, name: 'Sasha' },
  { id: 9, name: 'Boris' },
  { id: 5, name: 'Hamdo' },
];

// Eine typische React-Komponente ist eine Funktion, die JSX zurückgibt
function App() {
  // Logik-Bereich vor dem return
  // hier können wir JS-Operationen durchführen
  // typischerweise verwenden wir hier später spezielle React-Funktionen: Hooks
  const library = 'React';
  const myColor = 'rebeccapurple'; // CSS-Farbwert

  // Im Return-Bereich formulieren wir JSX - ein Quasi-HTML
  return (
    // Jedes verwendete Element ist eigentlich ein Funktionsaufruf
    // Alle typischen HTML-Elemente mit ihren Attributen stehen zur Verfügung
    // (kleinere Ausnahmen gibt es bei sehr neuen Attributen)
    <div>
      {/* Eigene Komponenten werden wie HTML-Elemente aufgerufen */}
      {/* Props werden als Attribute übergeben */}
      <Navbar myColor={myColor} />

      {/* Standard HTML-Elemente */}
      <button>Button</button>
      <details>Hallo</details>

      <h1
        id='my-heading' // HTML-Attribute funktionieren normal
        // inline-styling mit doppelten geschweifen Klammern (übergeben ein Objekt)
        style={{
          color: 'red',
          backgroundColor: myColor, // JS-Variable verwenden
        }}
        // CSS-Klassen benutzen "className" statt "class" (reserviertes JS Keyword)
        className='my-heading'
      >
        {/* Variablen und Ausdrücke können in einfache geschweifte Klammern eingesetzt werden */}
        Welcome to {library}!
      </h1>

      {/* Auch alte Elemente stehen zur Verfügung - aber benutzt kein marquee bitte */}
      <marquee>Hello to React</marquee>

      {/* JavaScript-Ausdruck wird berechnet und angezeigt */}
      <p>{42 + 14}</p>

      {/* Daten als Props an Komponente übergeben */}
      <Students data={students} className='bg-amber-300' />

      {/* Mehrere Instanzen derselben Komponente mit verschiedenen Props */}
      <Product title='Veganes Katzenfutter' description='Lecker für Katzen' price='20€' />
      <Product title='Gitarre' description='leicht gebraucht' price='20€' />
    </div>
  );
}

// Komponente für Import in anderen Dateien verfügbar machen
export default App;

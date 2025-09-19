/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import { useState } from 'react';
import Counter from '../../001-more-counters/src/components/Counter.jsx';

// Anfangswerte für das Formular definieren
const initialFormState = {
  name: '',
  email: '',
  phone: '+49926349284372',
  message: 'hallo',
};

function App() {
  // Einzelner State für name
  // Bei wenigen Input-Feldern manchmal simpler einzelnen State zu benutzen
  const [name, setName] = useState('Hieronymus');

  // Ein State-Objekt für alle Formularfelder - effizienter bei größeren Formularen!
  const [formState, setFormState] = useState(initialFormState);

  // Handler-Funktion für alle Input-Felder
  function handleChange(e) {
    // Schritt-für-Schritt Erklärung
    // const value = e.target.value;        // Der neue Wert aus dem Input
    // const field = e.target.name;         // Das name-Attribut des Inputs
    // const newFormState = { ...formState, [field]: value };  // Spread Operator + computed property
    // setFormState(newFormState);

    // Kompakte Version: State updaten mit Spread Operator und computed property
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Handler für das Absenden des Formulars
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <h1>React: useState</h1>
      <form
        onSubmit={handleSubmit} // Handler für Submit-Event
        action=''
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <label htmlFor='name'>Name</label>
        {/* Methode mit separatem State: */}
        {/* <input type='text' name='name' id='name' onChange={(e) => setName(e.target.value)} value={name} /> */}

        {/* Kontrollierter Input: value kommt aus State, onChange aktualisiert State */}
        <input type='text' name='name' id='name' onChange={handleChange} value={formState.name} />

        <label htmlFor='email'>Email</label>
        {/* Alle Inputs verwenden denselben handleChange - das name-Attribut bestimmt welches Feld aktualisiert wird */}
        <input type='email' name='email' id='email' onChange={handleChange} value={formState.email} />

        <label htmlFor='phone'>Phone</label>
        <input type='tel' name='phone' id='phone' onChange={handleChange} value={formState.phone} />

        <label htmlFor='message'>Message</label>
        {/* Funktioniert auch mit textarea - wichtig: value-Attribut für kontrollierten Input */}
        <textarea name='message' id='message' onChange={handleChange} value={formState.message}></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;

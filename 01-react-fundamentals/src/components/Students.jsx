// Props-Objekt empfangen (ohne Destructuring)
export default function Students(props) {
  console.log(props); // Debug: Props in Konsole anzeigen

  // Array sortieren ohne Original zu verändern (toSorted ist neu)
  const sortedStudents = props.data.toSorted((a, b) => a.id - b.id);

  return (
    // React Fragment (<>) - kein zusätzliches div im DOM
    <>
      {/* .map() wandelt Array-Elemente in JSX-Elemente um */}
      {sortedStudents.map((student) => {
        return (
          <span
            className={props.className} // CSS-Klasse von Parent-Komponente
            key={student.id} // Eindeutiger key für React's Rendering-Optimierung
          >
            {' '}
            {student.name} {/* Objekteigenschaft anzeigen */}{' '}
          </span>
        );
      })}

      {/* Das ist was .map() eigentlich macht */}
      {/* {[<span>Alexander </span>, <span>Frank </span>, <span>Kira </span>]} */}
    </>
  );
}

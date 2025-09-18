// Destructuring der Props direkt im Parameter - moderne React-Syntax
export default function Product({ title, description, price }) {
  // Alternative: Props-Objekt empfangen und später destructuren
  // const { title, description, price } = props;

  return (
    // Semantisches HTML: article für eigenständige Inhalte
    <article className='mt-5'>
      {' '}
      {/* Tailwind CSS Klasse für margin-top */}
      {/* Props werden als dynamische Inhalte eingefügt */}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </article>
  );
}

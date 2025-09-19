export default function Nav({ name }) {
  return (
    <nav>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>{name}</a>
        </li>
      </ul>
    </nav>
  );
}

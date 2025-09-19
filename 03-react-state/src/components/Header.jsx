import Nav from './Nav.jsx';

export default function Header({ name }) {
  return (
    <header>
      <h1>Welcome</h1>
      <Nav name={name} />
    </header>
  );
}

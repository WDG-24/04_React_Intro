import './Navbar.css';

export default function Navbar() {
  const numberOfLinks = 3;
  return (
    <nav className='nav'>
      <ul className='text-xl'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

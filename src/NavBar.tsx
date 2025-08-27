import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/list" style={{ marginRight: '10px' }}>List</Link>
      <Link to="/output" style={{ marginRight: '10px' }}>Output</Link>
    </nav>
  );
}

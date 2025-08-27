import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './NavBar';
import Home from './Home';
import About from './About';
import List from './List';
import Output from './Output';

function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

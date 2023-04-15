import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Calculator from './Components/Calculator';
import DisplayQuote from './Components/displayQuote';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <>
      <nav>
        <div className="mainhead">
          Math Magicians
        </div>
        <ul>
          <li>
            <NavLink style={({ isActive }) => (isActive ? { color: 'red' } : {})} className="navlink" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? { color: 'red' } : {})} className="navlink" to="/Calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? { color: 'red' } : {})} className="navlink" to="/Quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<DisplayQuote />} />
        <Route path="header" element={<Header />} />
      </Routes>
    </>

  );
}

export default App;

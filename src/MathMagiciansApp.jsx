import {
  NavLink, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';

const MathMagiciansApp = () => (
  <>
    <header className="top-section">
      <h1>Math Magicians</h1>
      <nav>
        <NavLink
          to="/"
          className="link"
        >
          Home
        </NavLink>
        <NavLink className="link" to="/calculator">Calculator</NavLink>
        <NavLink className="link" to="/Quote">Quote</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default MathMagiciansApp;
